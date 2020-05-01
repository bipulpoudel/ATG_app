import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import * as Font from 'expo-font';

class PostDescription extends Component {
    async componentDidMount(){
        this.loadFont();
    }
    async loadFont(){
        await Font.loadAsync({
            'IBMPlexSans-Bold':require('../../assets/fonts/IBMPlexSans-Bold.ttf'),
            'IBMPlexSans-Regular':require('../../assets/fonts/IBMPlexSans-Regular.ttf'),
            'IBMPlexSans-Medium':require('../../assets/fonts/IBMPlexSans-Medium.ttf'),
        });
}
    render() {
        return (
            <View style={styles.container}>
                {this.props.type === 'text'?<Text style={styles.postText}>{this.props.data}</Text>:<Image style={styles.image} source={{uri: this.props.data}}></Image>}
            </View>
        );
    }
}
export default PostDescription;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    postText:{
        fontSize:20,
        fontFamily:'IBMPlexSans-Regular',
    },
    image:{
        height:400,
        width:400,
    }
});