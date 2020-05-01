import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class SingleGroup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.name}</Text>
            </View>
        );
    }
}
export default SingleGroup;

const styles = StyleSheet.create({
    container: {
        marginRight:10,
        marginTop:5,
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#f1f3f5',
        borderRadius:10,
        minWidth:'35%',
    },
    text:{
        color:'#92979c',
        fontSize:17,
        fontWeight:'700',
        marginRight:10,
        marginLeft:10,
    }
});