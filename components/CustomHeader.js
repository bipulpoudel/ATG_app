import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ico from 'react-native-vector-icons/Foundation';
import { TouchableOpacity } from "react-native-gesture-handler";

class CustomHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.leftPart}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Icon name="arrow-back" size={30}></Icon></TouchableOpacity></View>
            <View style={styles.innerPart}>
            </View>
            <View style={styles.rightPart}>
            <Ico name='share' size={30}></Ico>
            </View>
            </View>
        );
    }
}
export default CustomHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor:'white',
        width:'100%',
        height:60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    leftPart:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    innerPart:{
        flex:5,
        alignItems:'center',
        justifyContent:'center',
    },
    rightPart:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
});