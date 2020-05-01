import React, { Component, useState } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import * as Font from 'expo-font';

const SingleTag = (props) => {
        return (
            <View style={styles.container}>
           <Text>{props.name}</Text>
            </View>
        );
}
export default SingleTag;

const styles = StyleSheet.create({
    container: {
        flex:1,
        borderRadius:5,
        borderWidth:1,
        borderColor:'lightgrey',
        marginRight:10,
        marginTop:10,
        marginBottom:10,
        minWidth:100,
        paddingRight:10,
        paddingLeft:10,
        alignItems:'center',
        justifyContent:'center',
    }
});