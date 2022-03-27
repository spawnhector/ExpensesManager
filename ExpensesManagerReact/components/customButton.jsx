import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
const Button = ({ text, onPress , size, color, bg, p, mt}) => {
    
    const styles = StyleSheet.create({
        button: {
            backgroundColor: bg ? bg : '#9374b7',
            alignItems: 'center',
            justifyContent: 'center',
            padding: p ? p : 16,
            borderRadius: 10,
            marginTop: mt ? mt : 10,
        },
        buttonText: {
            color: color ? color : '#fff',
            fontSize: size ? size : 14,
            fontWeight: 'bold',
        }
    });
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  export default Button;