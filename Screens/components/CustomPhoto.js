import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const CustomPhoto = () => {
        return (
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                    <Text style={styles.text}>Inside</Text>
                </ImageBackground>
            </View>
        );
}
export default CustomPhoto;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});