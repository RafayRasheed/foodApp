import React, { useEffect, useRef, useState } from "react"
import { View, Text, Keyboard, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { myColors } from "../../ultils/myColors";
import { myFontSize, myFonts } from "../../ultils/myFonts";
import { Spacer, ios, myHeight, myWidth } from "../common";

export const Verification = () => {
    const lenCode = 4;
    const [focus, setFocus] = useState(0)
    const arrayVer = []
    const arrayVer2 = []

    const [varValues, setVarValues] = useState([null, null, null, null])
    const focusKey = useRef(null)
    const refArr = useRef([null, null, null, null])
    const [valInp, setValInp] = useState('')
    const [finalVeriVal, setFinalVeriVal] = useState('')

    useEffect(() => {
        setTimeout(() => openKey(), 100);
    }, [])

    function openKey() {
        if (focusKey) {
            focusKey.current.focus()
            return
        }
        setTimeout(() => openKey(), 100);

    }
    function removeValue() {
        if (varValues[focus] == null && focus != 0) {
            varValues[focus - 1] = null
            setVarValues(varValues)
            setFocus(focus - 1)
            return
        }
        varValues[focus] = null
        setVarValues(varValues)
    }

    function allValue(val) {
        varValues[focus] = val
        setVarValues(varValues)

        if (focus < lenCode - 1) {
            setFocus(focus + 1)
            return
        }
        // setFocus(0)
    }
    for (let j = 0; j < lenCode; j++) {
        const val = varValues[j]
        arrayVer2.push(
            <TouchableOpacity activeOpacity={0.9} onPress={() => setFocus(j)} key={j}
                style={[styles.containerInput, { borderWidth: 1, borderColor: focus == j ? myColors.primaryT : myColors.primaryL }]}>
                <Text
                    style={[styles.textInput, val == null ? { color: myColors.primaryL } : { color: myColors.primaryT }]}
                >{val == null ? 0 : val}</Text>
            </TouchableOpacity>
        )
    }

    for (let j = 0; j < lenCode; j++) {
        const val = varValues[j]
        const ref = refArr[j]
        arrayVer.push(
            <TextInput ref={ref => refArr[j] = ref} value={val} keyboardShouldPersistTaps="always" blurOnSubmit={false} key={j} onFocus={() => setFocus(j)} keyboardType={'numeric'} placeholder="0" placeholderTextColor={myColors.primaryL}
                style={focus == j ? styles.containerInputFocus : styles.containerInputNotFocus}
                onChangeText={(v) => {
                    varValues[j] = v[v.length - 1]
                    console.log(arrayVer)
                    setVarValues(varValues)
                    setFocus(focus + 1)
                    refArr[focus + 1].focus()
                }}
            />
        )
    }
    return (
        <SafeAreaView style={styles.container}>

            <TextInput
                autoFocus={true}

                ref={focusKey}
                value={valInp}
                // keyboardType={""}
                keyboardType={'numeric'}
                // onChangeText={removeValue}
                onChangeText={(val) => {
                    console.log(val)
                    if (val.length > valInp.length) {
                        allValue(val[val.length - 1])
                    }
                    else {
                        removeValue()
                    }
                    setValInp(val)

                }}
                // returnKeyType={ios ? 'done' : 'next'}

                style={{ display: 'none' }} />
            <View>
                <Spacer paddingT={myHeight(2)} />
                <View style={{ flexDirection: 'row', paddingHorizontal: myWidth(7.5), justifyContent: 'space-between', alignItems: 'center' }}>
                    {arrayVer}
                </View>
                <Spacer paddingT={myHeight(2)} />
                <View style={{ flexDirection: 'row', paddingHorizontal: myWidth(7.5), justifyContent: 'space-between', alignItems: 'center' }}>
                    {arrayVer2}
                </View>
                <Text style={{ alignSelf: 'center' }}>Press</Text>
            </View>


        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerInput: {
        backgroundColor: myColors.primaryL,
        paddingHorizontal: myWidth(7),
        paddingVertical: myHeight(2),
        borderRadius: myWidth(3),
        // borderWidth:1, borderColor:myColors.primaryT
    },

    containerInputFocus: {
        backgroundColor: myColors.primaryL,
        paddingHorizontal: myWidth(6.4),
        paddingVertical: myHeight(2),
        borderRadius: myWidth(3),
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: myFontSize.xMedium,
        fontFamily: myFonts.body,
        borderWidth: 1,
        borderColor: myColors.primaryT,
        color: myColors.primaryT

    },
    containerInputNotFocus: {
        backgroundColor: myColors.primaryL,
        paddingHorizontal: myWidth(6.4),
        paddingVertical: myHeight(2),
        borderRadius: myWidth(3),
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: myFontSize.xMedium,
        fontFamily: myFonts.body,
        borderWidth: 1,
        borderColor: myColors.primaryL,
        color: myColors.primaryT
    },
    //Text
    textInput: {
        fontSize: myFontSize.xMedium,
        fontFamily: myFonts.body,
    },
    textInput: {
        fontSize: myFontSize.xMedium,
        fontFamily: myFonts.body,
    },




})