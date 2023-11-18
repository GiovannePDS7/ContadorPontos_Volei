import { View, Image, StyleSheet } from "react-native";
import Fundo from "../../assets/logo2.png";
import React from "react";

export default function FundoLogo2() {
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
        width: '28%',
        height: 125
    }
});