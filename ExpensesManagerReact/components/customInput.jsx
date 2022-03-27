import { View,
    StyleSheet } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { useEffect } from "react";
import { useRef } from "react";
import * as Animatable from 'react-native-animatable';

  
const Input = ({ label, error, ts, ls, ...props}) => {
    
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
        fontSize: ls ? ls : 10,
        color: '#b4b6b8',
        },
        input: {
        color: '#353031',
        fontWeight: 'bold',
        fontSize: ts ? ts : 14,
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

    const Error = ({ display = false }) => {
        const viewElement = useRef(null);
      
        useEffect(() => {
          if (display) {
            viewElement.current.animate('shake', 500, 'linear');
          } else {
            viewElement.current.animate('bounceOut', 500);
          }
        }, [display]);
      
        const viewStyles = [styles.error, { opacity: 0 }];
      
        if (display) {
          viewStyles.push({ opacity: 1 });
        }
      
        return (
          <Animatable.View style={viewStyles} ref={viewElement}>
            <Text style={styles.errorText}>X</Text>
          </Animatable.View>
        );
    };
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>{label}</Text>
  
        <View style={styles.row}>
          <TextInput autoCapitalize="none" style={styles.input} {...props} />
  
          <Error display={error} />
        </View>
      </View>
    );
  };

export default Input;