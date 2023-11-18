import { View, Image, StyleSheet } from "react-native";
import Fundo from "../../assets/fundoListras.png";
import React from "react";

export default function FundoListrado() {
    return (
        <>
            <Image style={styles.imagem} source={Fundo}/>
        </>
        
    )
}

const styles = StyleSheet.create({
    imagem: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    }
});