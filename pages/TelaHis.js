import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FundoLogo3 from "../components/Imagens/FundoLogo3";
import FundoListrado from "../components/Imagens/FundoListrado";
const TelaHis = ({ route }) => {
    const { time1 = '', time2 = '', valorSet1 = '', valorSet2 = '' } = route.params || {};
    const [informacao, setInformacao] = useState({});

    const salvarInformacao = async (chave, valor) => {
        const valorString = JSON.stringify(valor);
        await AsyncStorage.setItem(chave, valorString);

    };

    const recuperarInformacao = async (chave) => {
        const valorString = await AsyncStorage.getItem(chave);

        if (valorString !== null) {
            const valorObjeto = JSON.parse(valorString);
            setInformacao(valorObjeto);
        }
    };

    useEffect(() => {
        const chave = time1;

        salvarInformacao(chave, { time1, time2, valorSet1, valorSet2 }).then(() => {
            recuperarInformacao(chave);
        });
    }, [time1, time2, valorSet1, valorSet2]);

    return (
        <>
            <FundoListrado />
            <FundoLogo3 />
            <Text style={styles.title}>Histórico</Text>
            <View style={styles.grandContainer}>
                <View style={styles.containerLeft}>
                    <Text style={styles.time1}>{informacao.time1 || 'Não disponível'}</Text>
                    <Text style={styles.sets}>Sets</Text>
                    <Text style={styles.pontos}>0{informacao.valorSet2 || 'Não disponível'}</Text> 
                </View>

                <View style={styles.linha}></View>

                <View style={styles.containerRight}>
                    <Text style={styles.time2}>{informacao.time2 || 'Não disponível'}</Text>
                    <Text style={styles.sets}>Sets</Text>
                    <Text style={styles.pontos}>0{informacao.valorSet1 || 'Não disponível'}</Text>
                </View >
            </View>
        </>
    );
};

export default TelaHis;

const styles = StyleSheet.create({
    grandContainer: {
        width: '100%',
        height: 180,
        marginTop: 40,
        flexDirection: 'row'
    },
    containerLeft: {
        width: '49.5%',
        height: '100%',
    },
    containerRight: {
        width: '49.5%',
        height: '100%',
    },
    linha: {
        width: '1%',
        height: '90%',
        backgroundColor: '#000',
        borderRadius: 20,
        alignSelf: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 70,
        color: '#DAA520',
        fontWeight: 'bold',
        marginTop: 20
    },
    time1:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    time2:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }, 
    sets:{
        textAlign: 'center',
        fontSize: 20,
        marginTop: 3
    },
    pontos:{
        textAlign: 'center',
        fontSize: 100,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#DAA520'
    }
});

