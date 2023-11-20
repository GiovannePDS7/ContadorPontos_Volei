import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import FundoLogo3 from "../components/Imagens/FundoLogo3";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TelaHis({ route, navigation }) {
    return (
        <>
            <FundoLogo3 />
            <Text>
                Parabéns {time1} você foi o vencedor da partida!!!
            </Text>
            <Text>
                Infelizmente {time2} você foi o perdedor!
            </Text>

            <View style={styles.grandContainer2} >
                <TouchableOpacity style={styles.buttonNov}>
                    <Text style={styles.txtButton}>CONTAR NOVAMENTE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonHist} onPress={() => {
                    navigation.navigate('Historico')
                }}>
                    <Text style={styles.txtButton}>HISTÓRICO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTelaInicial} onPress={() => {
                    navigation.navigate('Inicial')
                }}>
                    <Text style={styles.txtButton}>Tela Inicial</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

})