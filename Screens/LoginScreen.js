import React, { Component, useState } from "react";
import { 
    View,
    StyleSheet,
    Text
} from "react-native";

import {Item, Input, Label,Card,CardItem, Button } from 'native-base';
import {userLogin} from '../api/index';
import {storeId} from '../LocalStorage/index';

const LoginScreen = (props) => {
    const [email,SetEmail] = useState();
    const [password,SetPassword] = useState();
    const pid = '5ea992f166e603359fe0c382';
    const login = async () => {
        const requiredData = await userLogin(email,password);
        await storeId(pid);
        if(requiredData.error_code == 0){
            props.navigation.navigate('Post');
        }
        alert(requiredData.msg);
    }
        return (
            <View style={styles.container}>
            <Text style={{fontSize:30,margin:20,fontWeight:'bold'}}>Login App</Text>
            <CardItem>
                <Input placeholder="Email" style={styles.input} value={email} onChangeText={(value) => SetEmail(value)}/>
            </CardItem>
            <CardItem>
                <Input placeholder="Password" style={styles.input} value={password} onChangeText={(value) => SetPassword(value)} secureTextEntry={true}/>
            </CardItem>
            <CardItem>
                <Button block style={styles.button} onPress={login}><Text style={{color:'white'}}>Login</Text></Button>
            </CardItem>
            </View>
        );
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',
    },
    input:{
        borderColor:'black',
        borderWidth:1,
    },
    button:{
        width:200,
    }
});