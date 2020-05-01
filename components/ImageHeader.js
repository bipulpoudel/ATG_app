import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
} from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';
import Ico from 'react-native-vector-icons/Foundation';

class ImageHeader extends Component {
    render() {
        return (
            <ImageBackground style={styles.container} source={{uri:this.props.image}}>
            <View style={styles.header}>
                <View style={styles.leftPart}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}><View style={styles.iconCircle}><Icon name="arrow-back" color="white" size={25} style={styles.icon}></Icon></View></TouchableOpacity></View>
                <View style={styles.innerPart}>
                </View>
                <View style={styles.rightPart}>
                <View style={styles.iconCircle}>
                <Ico name='share' color='white' size={25}  style={styles.icon}></Ico>
                </View>
                </View>
            </View>
            </ImageBackground>
        );
    }
}
export default ImageHeader;

const styles = StyleSheet.create({
    container: {
        height:300,
        width:'100%',
        top:0,
    },
    header:{
        flexDirection:'row',
        width:'100%',
        height:60,
    },
    leftPart:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    innerPart:{
        flex:4,
        alignItems:'center',
        justifyContent:'center',
    },
    rightPart:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    iconCircle:{
        width:40,
        height:40,
        backgroundColor:'#495057',
        borderRadius:40/2,
        alignItems:'center',
        justifyContent:'center',
    }
});