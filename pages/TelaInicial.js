import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";

import FundoListrado from "../components/Imagens/FundoListrado";
import FundoLogo from "../components/Imagens/FundoLogo";
export default function TelaInicial({ navigation }) {
    return (
        <View>
            <FundoListrado />
            <FundoLogo />
            <View style={styles.container} >
                <View style={styles.ContainerSlogan}>
                    <Text style={styles.txtSlogan}>Conte os pontos de uma partida de vôlei conosco</Text>
                </View>
                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.buttonTimes} onPress={() => navigation.navigate('Times')}>
                        <Text style={styles.txtTimes}>Cadastrar Os Times</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonHist}>
                        <Text style={styles.txtHist}>Histórico</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    ContainerSlogan: {
        width: '80%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    txtSlogan: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonTimes: {
        width: '80%',
        height: 60,
        backgroundColor: '#C40000',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: 60
    },
    txtTimes: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonHist: {
        width: '80%',
        height: 60,
        backgroundColor: '#DAA520',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: 30
    },
    txtHist: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    },
    containerBtn: {
        marginTop: '20%'
    }
});
