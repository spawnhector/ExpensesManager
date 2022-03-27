
import { Text, View,  StyleSheet,ActivityIndicator } from 'react-native';
import Button from "../components/customButton";
import Name from './customName';
import { useState } from 'react';
import SendReq from './api/sendReq';
const ListItem = ({navigation,expenseList,setExpensesData,setExpenseList}) => {

    if (expenseList) {
        const [isLoading,setIsLoading] = useState(false);
        const [loadingItem,setLoadingItem] = useState(null);
        const styles = StyleSheet.create ({
            container: {
                flexDirection: 'row',
               padding: 10,
               marginTop: 2,
               backgroundColor: '#9374b7',
               alignItems: 'center'
            },
            text: {
               color: '#fff',
               fontSize: 20,
               fontWeight: '700',
               left: 5,
               width: 75
            },
            subText: {
               fontSize: 20,
               color: '#353031',
               marginHorizontal: 20
            },
            sub: {
                flexDirection: 'row',
                 backgroundColor: '#fff',
                 padding: 4,
                 borderRadius: 10,
                 width: 260,
                 left: 35,
                //  marginHorizontal: 60,
                 alignItems: 'center',
                 justifyContent: 'center',
            }
        });
    
        const deleteItem = (itemId) => {
            // /api/expenses/delete
            setIsLoading(true);
            setLoadingItem(itemId);
            var formdata = new FormData();
            formdata.append("id", itemId);
            SendReq('POST',formdata,'/api/expenses/delete')
            .then(response => response.text())
                .then(result => {
                let exData = JSON.parse(result);
                if(!exData.errors){
                    setIsLoading(false);
                    setLoadingItem(null);
                    setExpensesData(()=>{
                        setIsLoading(true);
                        SendReq('GET',null,'/api/expenses')
                      .then(response => response.text())
                        .then(result => {
                            setExpenseList(JSON.parse(result));
                            setIsLoading(false);
                        }).catch(error => console.log(error));
                    });
                }else{
                    setIsLoading(false)
                    setLoadingItem(null);
                }
            });
        }
        return expenseList.map((item, index) => {
           return (
            <View
            key={item.id}
            style = {styles.container}
            >
                <Text style = {[styles.text]}>
                    <Name name={item.name}/>
                </Text>
                <View style = {[styles.sub]}>
                    <Text style = {[styles.subText]}>
                        ${item.amount}
                    </Text>
                    <View>
                        <Button text="View" bg='#b4b6b8' color='#353031' p={6} mt={1} size={15}  onPress={() => navigation.navigate('ViewExpenses',{item:item})}/>
                    </View>
                    <View style={{marginHorizontal: 10}}>
                        <Button text="Edit" bg='#b4b6b8' color='#353031' p={6} mt={1} size={15}  onPress={() => navigation.navigate('EditExpenses',{item:item})}/>
                    </View>
                    <View>
                        <Button text={isLoading ? loadingItem ===  item.id ? <ActivityIndicator size='large' color='00ff00' /> : "Delete" : "Delete"} bg='red' color='#fff' p={6} mt={1} size={15} onPress={()=>{deleteItem(item.id)}}/>
                    </View>
                </View>
            </View>
           );
        })
    } else {
        return (<></>)
    }
}
export default ListItem;