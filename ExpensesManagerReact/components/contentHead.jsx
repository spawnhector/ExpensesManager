
import { Text, View, TouchableOpacity, StyleSheet,SafeAreaView, ScrollView, } from 'react-native';
import ContentSubHead from './contentSubHead';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { faHome } from "@fortawesome/free-solid-svg-icons";
const ContentHead =({title,navigation,searchBar,h})=> {
    const styles = StyleSheet.create ({
        contentHead: {
            height: h ? h : 230,
            // borderBottomWidth: 2,
            // borderColor: 'orange',
            top:20
        },
        headerHead: {
        color: '#9374b7',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 34,
        top: 30
        },
        icon: {
            // left: 10,
            top:30,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 40,
        },
        iconSelect: {
            flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        }
    });
    const BackIcon = () => {
        return <TouchableOpacity style={styles.icon} onPress={()=> navigation.goBack()}>
            <Icon name="angle-left" size={30}  color="#900" />
        </TouchableOpacity>;
    };
    const HomeIcon = () => {
        return <TouchableOpacity style={styles.icon} onPress={()=> navigation.navigate('Home')}>
            <Icon name="home" size={30} color="#900" />
        </TouchableOpacity>;
    };
    return (
        <View  style={styles.contentHead}>
            <View  style={styles.iconSelect}>
                <BackIcon/>
                <Text style={styles.headerHead}>{title}</Text>
                <HomeIcon/>
            </View>
        {searchBar ? <ContentSubHead navigation={navigation} SearchBar={searchBar}/> : <></>}
        </View>
    );
}
export default ContentHead;