
import React, {useEffect} from "react";
import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";
import Button from "../components/customButton";
const ExpensesCreated = ({navigation, goBack, action}) => {
    let animation = React.createRef();

    useEffect(() => {
        animation.current.play()
    }, [])

    const styles = StyleSheet.create({
        headerHead: {
            color: '#9374b7',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 34,
            marginBottom: 10,
            top: 20
        },
        buttonContainer: {
            top: 20
        }
    });
    return(
        <View>
           <LottieView
                ref={animation}
                loop={false}
                style={{
                   width: 300,
                   height: 300
                }}
                source={require('../assets/98741-success.json')}
           />
            <Text style={styles.headerHead}>Expenses {action} </Text>
            <View style={styles.buttonContainer}>
                <Button text="Visit Expenses List" size={20} onPress={() => navigation.navigate('ExpensesList')}/>
                <Button text="Go Back" size={20} onPress={() => goBack(false)}/>
            </View>
        </View>
    )
}
export default ExpensesCreated;