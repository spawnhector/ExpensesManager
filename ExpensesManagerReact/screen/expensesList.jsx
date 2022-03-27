import { useEffect, useState } from "react";
import SendReq from "../components/api/sendReq";
import { SafeAreaView, ScrollView,ActivityIndicator } from 'react-native';
import ContentHead from "../components/contentHead";
import ListItem from "../components/listItem";
import CustomSearchBar from '../components/customSearchBar';
const ExpensesList = ({navigation}) => {

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [expenseList, setExpenseList] = useState('');
    const [isSearching,setIsSearching] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [expenseData,setExpensesData] = useState(()=>{
        setIsLoading(true);
        SendReq('GET',null,'/api/expenses')
      .then(response => response.text())
        .then(result => {
            setExpenseList(JSON.parse(result));
            setIsLoading(false);
        }).catch(error => console.log(error));
    });
    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            const newData = expenseList.filter(function (item) {
                const itemData = item.name
                ? item.name.toUpperCase()
                : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
            setIsSearching(true);
        } else {
            setFilteredDataSource(expenseList);
            setSearch(text);
            setIsSearching(false);
        }
    };

    return (
        <SafeAreaView >
            <ContentHead title='Expenses List' navigation={navigation}
                searchBar={<CustomSearchBar
                    onChangeText={(text) => searchFilterFunction(text)}
                    value={search}
                />}
            />
            {isLoading ? <ActivityIndicator size="large" color="#00ff00" /> : 
            <ScrollView>
                <ListItem navigation={navigation} expenseList={
                    isSearching ? filteredDataSource : expenseList
                } 
                setExpensesData={setExpensesData}
                setExpenseList={setExpenseList}
                />
            </ScrollView>}
        </SafeAreaView>
    );
}
export default ExpensesList;