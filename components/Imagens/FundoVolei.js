import { View, Image, StyleSheet } from "react-native";
import Fundo from "../../assets/fundoVolei.png";
import React from "react";

export default function FundoVolei() {
    return (
        <>

            <Image style={styles.imagem} source={Fundo}></Image>
        </>
    )
}

const styles = StyleSheet.create({
    imagem: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
});