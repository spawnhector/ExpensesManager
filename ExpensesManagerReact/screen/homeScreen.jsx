
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView
  } from 'react-native';

  import Button from '../components/customButton';
const HomeScreen = ({navigation}) => {
    
    const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#fff',
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
        top: -70
        },
        inputContainer: {
        backgroundColor: '#f4f6f8',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginVertical: 5,
        },
        row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        },
        inputLabel: {
        fontSize: 10,
        color: '#b4b6b8',
        },
        input: {
        color: '#353031',
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 3,
        marginRight: 10,
        flex: 1,
        },
        error: {
        backgroundColor: '#cc0011',
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        },
        errorText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
        },
    });
    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.headerHead}>Expenses Manager</Text>
          
          <Button text="Create Expenses" size={25} onPress={() => navigation.navigate('CreateExpenses')}/>
          <Button text="Expenses List" size={25} onPress={() => navigation.navigate('ExpensesList')}/>
        </SafeAreaView>
    );
}
export default HomeScreen;