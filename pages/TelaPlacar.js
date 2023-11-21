import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import FundoListrado from "../components/Imagens/FundoListrado";
import FundoLogo3 from "../components/Imagens/FundoLogo3";

export default function TelaPlacar({ route, navigation }) {
    const { time1, time2 } = route.params;
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [valorSet1, setValorSet1] = useState(0);
    const [valorSet2, setValorSet2] = useState(0);


    return (
        <View>
            <FundoListrado />
            <FundoLogo3 />
            <View style={styles.grandContainer}>
                <View style={styles.containerLeft}>
                    <View style={styles.nomeTime}>
                        <Text style={styles.txtTime}>{time1}</Text>
                    </View>
                    <View style={styles.placar}>
                        <Text style={styles.txtPlacar}>{valor1}</Text>
                    </View>

                    <View style={styles.botoes}>

                        <TouchableOpacity style={styles.buttonSub} onPress={() => {
                            if (valor1 >= 1) {
                                setValor1(valor1 - 1)
                            }
                        }}>
                            <Text style={styles.txtButtonSub}>-</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonSoma} onPress={() => {

                            setValor1(valor1 + 1)
                            if (valor1 >= 24) {
                                if (valor1 - valor2 >= 1) {
                                    setValorSet1(valorSet1 + 1);
                                    setValor1(0);
                                    setValor2(0)
                                }
                            }
                            else {
                                if (valorSet1 == 2 && valorSet2 == 2) {
                                    if (valor2 >= 14) {
                                        if (valor2 - valor1 >= 1) {
                                            setValorSet2(valorSet2 + 1);
                                            setValor2(0);
                                            setValor1(0)
                                        }
                                    }
                                }
                            }

                            }
                        }>
                            <Text style={styles.txtButtonSoma}>+</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.linha}></View>

                    <View style={styles.sets}>
                        <Text style={styles.txtSet}> Set: <Text style={styles.txtSet2}>0{valorSet1}</Text></Text>
                    </View>
                </View>

                <View style={styles.containerCenter}></View>

                <View style={styles.containerRight}>
                    <View style={styles.nomeTime}>
                        <Text style={styles.txtTime}>{time2}</Text>
                    </View>

                    <View style={styles.placar}>
                        <Text style={styles.txtPlacar}>{valor2}</Text>
                    </View>

                    <View style={styles.botoes}>
                        <TouchableOpacity style={styles.buttonSub} onPress={() => {
                            if (valor2 >= 1) {
                                setValor2(valor2 - 1)
                            }
                        }}>
                            <Text style={styles.txtButtonSub}>-</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonSoma} onPress={() => {
                            setValor2(valor2 + 1)
                            if (valor2 >= 24) {
                                if (valor2 - valor1 >= 1) {
                                    setValorSet2(valorSet2 + 1);
                                    setValor2(0);
                                    setValor1(0)
                                }
                                if (valorSet1 == 2 && valorSet2 == 2) {
                                    if (valor2 >= 14) {
                                        if (valor2 - valor1 >= 1) {
                                            setValorSet2(valorSet2 + 1);
                                            setValor2(0);
                                            setValor1(0)
                                        }
                                    }
                                }
                                if (valorSet2 == 3) {
                                    navigation.navigate('Historico', { time1, time2, valorSet1, valorSet2 })
                                }
                            }
                        }}>
                            <Text style={styles.txtButtonSoma}>+</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.linha}></View>

                    <View style={styles.sets}>
                        <Text style={styles.txtSet}> Set: <Text style={styles.txtSet2}>0{valorSet2}</Text></Text>
                    </View>
                </View>
            </View>

            <View style={styles.grandContainer2} >
                <TouchableOpacity style={styles.buttonNov} onPress={() => {
                    setValor1(0);
                    setValor2(0);
                    setValorSet1(0);
                    setValorSet2(0);
                }}>
                    <Text style={styles.txtButton}>CONTAR NOVAMENTE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonHist} onPress={() => {
                    navigation.navigate('Historico', { time1, time2, valorSet1, valorSet2 })
                }}>
                    <Text style={styles.txtButton}>HISTÓRICO</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    grandContainer: {
        width: '100%',
        height: 400,
        marginTop: 60,
        flexDirection: 'row',
    },
    grandContainer2: {
        width: '100%',
        height: 160,
        marginTop: 65
    },
    buttonNov: {
        width: '35%',
        height: 40,
        backgroundColor: '#C40000',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonHist: {
        width: '35%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: '#DAA520',
    },
    txtButton: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#fff'
    },
    containerLeft: {
        width: '49.5%',
        height: '100%',
    },
    containerCenter: {
        width: '1%',
        height: '85%',
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5
    },
    containerRight: {
        width: '49.5%',
        height: '100%',
    },
    nomeTime: {
        width: '100%',
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtTime: {
        fontSize: 21
    },
    placar: {
        width: '75%',
        height: '35%',
        backgroundColor: '#000',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtPlacar: {
        fontSize: 100,
        color: '#fff'
    },
    botoes: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    txtButtonSub: {
        fontSize: 70,
        marginRight: 50,
    },
    txtButtonSoma: {
        fontSize: 70,
    },
    linha: {
        width: '85%',
        height: 2,
        backgroundColor: '#000',
        marginTop: 25,
        alignSelf: 'center',
        borderRadius: 20
    },
    sets: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    txtSet: {
        fontSize: 20
    },
    txtSet2: {
        fontSize: 55,
        fontWeight: 'bold',
    }
});
