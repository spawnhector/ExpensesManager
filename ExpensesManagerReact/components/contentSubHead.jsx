
import React, { useState, useEffect } from 'react';
import {  View,StyleSheet } from 'react-native';
// import CustomSearchBar from './customSearchBar';
const ContentSubHead =({navigation,SearchBar})=> {
    

    const styles = StyleSheet.create ({
        contentSubHead: {
            // height: 70,
            top: 95,
            borderColor: 'orange',
            // padding: 5,
            borderTopWidth: 2,
            borderBottomWidth: 2,
            backgroundColor: '#9374b7',
            // flexDirection: 'row',
            
        },
        icon: {
            left: 10
        },
        iconSelect: {
            marginHorizontal: 20,
            flexDirection: 'row',
        }
    });
    

    return (
        <View style={styles.contentSubHead}>
            {SearchBar}
        </View>
    );
}
export default ContentSubHead;