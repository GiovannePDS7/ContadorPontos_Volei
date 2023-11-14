import { View, Image, StyleSheet } from "react-native";
import Fundo from "../../assets/logo.png";
import React from "react";

export default function FundoLogo() {
    return (
        <View style={styles.logo}>
            <Image style={styles.imagem} source={Fundo} />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 380,
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagem: {
        width: '48%',
        height: '48%'
    }
});
