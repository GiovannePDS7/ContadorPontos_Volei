import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function InputTimes() {
    const navigation = useNavigation();
    const [time1, setTime1] = useState('')
    const [time2, setTime2] = useState('')
    return (
        <View>
            <View style={styles.inputT1}>
                <Text style={styles.txtTimes}>Time 1</Text>
                <TextInput style={styles.InputTimes} placeholder="nome do time 1" placeholderTextColor="#fff" value={time1} onChangeText={setTime1}/>
            </View>
            <View style={styles.inputT2}>
                <Text style={styles.txtTimes}>Time 2</Text>
                <TextInput style={styles.InputTimes} placeholder="nome do time 2" placeholderTextColor="#fff" value={time2} onChangeText={setTime2} />
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Placar', {time1, time2})}>
                    <Text style={styles.txtbtn}>Entrar!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnHis}>
                    <Text style={styles.txtbtnHis}>Acessar histórico</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    txtbtnHis: {
        fontSize: 19,
        color: '#fff'
    },
    btnHis: {
        marginTop: '5%',
        width: '31%',
        alignSelf: 'center'
    },
    txtbtn: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '15%',
        backgroundColor: '#fff',
        width: '60%',
        borderRadius: 15,
        height: 60,

    },
    txtTimes: {
        textAlign: 'center',
        fontSize: 35,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: '6%'
    },
    InputTimes: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        height: 40,
        width: '78%',
        color: '#fff',
        fontSize: 20,
    },
    inputT1: {
        alignItems: 'center',
        marginBottom: '8%'
    },
    inputT2: {
        alignItems: 'center',
    },
    btnContainer: {
        marginTop: '10%',
    },
});
