import React, { useState } from 'react';
import { StyleSheet,SafeAreaView,View,ActivityIndicator } from 'react-native';
import Input from '../components/customInput';
import Button from '../components/customButton';
import { Text,KeyboardAvoidingView } from 'react-native';
import SendReq from '../components/api/sendReq';
import ExpensesCreated from './expensesCreated';
import Header from '../components/header';

const EditExpenses = ({route,navigation}) => {
    const [name,onChangeName] = useState('');
    const [amount,onChangeAmount] = useState('');
    const [description,onChangeDescription] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    const [successScreen,setSuccessScreen] = useState(false);
    
    const {item} = route.params;
    function onSubmit(e) {
      setIsLoading(true)
      var formdata = new FormData();
      formdata.append("id", item.id);
      formdata.append("name", name);
      formdata.append("amount", amount);
      formdata.append("description", description);
      SendReq('POST',formdata,'/api/expenses/update')
      .then(response => response.text())
        .then(result => {
          let exData = JSON.parse(result);
          if(!exData.errors){
              console.log(exData.expense)
          setIsLoading(false)
          setSuccessScreen(true)
          }else{
            setIsLoading(false)
          }
          // console.log(JSON.parse(result));
        })
        // .catch(error => console.log('error', error));
    }

    const styles = StyleSheet.create({
        container: {
        top: 80,
        // backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 40,
        },
        headerText: {
        color: '#353031',
        fontWeight: 'bold',
        fontSize: 34,
        marginBottom: 10,
        },
        headerHead: {
        color: '#9374b7',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 34,
        marginBottom: 10,
        // top: -70
        },
        formContainer: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginVertical: 10,
        },
    });

    return (
      <SafeAreaView>
      <Header/>
      <View style={styles.container}>
        { successScreen ? <ExpensesCreated navigation={navigation} goBack={setSuccessScreen} action='Edited'/>
        : <KeyboardAvoidingView behavior="position" keyboardVerticalOffset="25">
            <Text style={styles.headerHead}>Edit Expenses</Text>
            <View style={styles.formContainer}>
                <Input
                  label="Name"
                  placeholder={item.name}
                  ls={14}
                  ts={20}
                  value={name} 
                  onChangeText={onChangeName}
                  // onChangeText={}
                  // error={submit.value && !username.valid}
                />
                <Input
                  label="Amount"
                  placeholder={''+item.amount}
                  ls={14}
                  ts={20}
                  value={amount} 
                  onChangeText={onChangeAmount}
                  // onChangeText={password.set}
                  // error={submit.value && !password.valid}
                />
                <Input
                  label="Description"
                  placeholder={item.description}
                  ls={14}
                  ts={20}
                  value={description} 
                  onChangeText={onChangeDescription}
                  // secureTextEntry
                  // onChangeText={password.set}
                  // error={submit.value && !password.valid}
                />
            </View>
            { isLoading ? <Button text={<ActivityIndicator size="large" color="#00ff00" />} size={20} onPress={onSubmit}/> 
            : <Button text="Update" size={20} onPress={onSubmit}/>}
            <Button text="Go Back" size={20} onPress={() => navigation.goBack()}/>
            
        </KeyboardAvoidingView>}
        </View>
      </SafeAreaView>
    );
}

export default EditExpenses;