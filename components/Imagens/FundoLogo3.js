import { View, Image, StyleSheet } from "react-native";
import Fundo from "../../assets/logo.png";
import React from "react";

export default function FundoLogo3() {
    return (
        <View>
            <Image style={styles.imagem} source={Fundo}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    imagem: {
        marginTop: '14%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',
        height: 120
    }
});