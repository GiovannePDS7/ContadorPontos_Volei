import React from "react";
import { Text, View, StyleSheet } from "react-native";
import FundoVolei from "../components/Imagens/FundoVolei";
import FundoLogo2 from "../components/Imagens/FundoLogo2";
import InputTimes from "../components/InputTimes/InputTimes";
export default function TelaTimes() {
    return (
        <View>
            <FundoVolei />
            <View style={styles.container}>
                <FundoLogo2 />
                <Text style={styles.txt}>Preencha com o nome dos times que irão jogar!</Text>
                <View style={styles.containerInput}>
                    <InputTimes/>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    containerInput:{
        marginTop: '12%',
    },
    txt: {
        marginTop: '7%',
        fontSize: 35,
        color: "#fff",
        textAlign: 'center',
        fontWeight: 'bold'
    }

});