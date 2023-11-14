import { View, Image, StyleSheet } from "react-native";
import Fundo from "../../assets/logo2.png";
import React from "react";

export default function FundoLogo2() {
    return (
        <>
            <Image style={styles.imagem} source={Fundo}></Image>
        </>
    )
}

const styles = StyleSheet.create({
    imagem:{

        width: '100%',
        height: '100%'
    }
});