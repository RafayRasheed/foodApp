import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { myHeight, myWidth, Spacer } from "../common";
import { myFontSize, myFonts } from "../../ultils/myFonts";
import { myColors } from "../../ultils/myColors";
export const NewPass = ({ navigation }) => {
    const [newPass, setNewPass] = useState()
    const [conPass, setConPass] = useState()
    const [verifyPass, setVerifyPass] = useState(false)

    function verifyNewPass() {
        if (newPass) {
            return true
        }
        return false
    }
    function verifyConPass() {
        if (conPass) {
            return true
        }
        return false
    }
    useEffect(() => {
        if (verifyNewPass() && verifyConPass()) {
            setVerifyPass(true)
        }
        else {
            setVerifyPass(false)
        }
    }, [newPass, conPass])

    return (
        <>
            <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', }} style={styles.container}>

                <View style={{ paddingHorizontal: myWidth(6.4) }}>
                    <Spacer paddingT={myHeight(5.78)} />

                    {/* T ForgetPass */}
                    <Text style={styles.textForget}>Change New Password</Text>
                    <Text style={[styles.textLight, { fontSize: myFontSize.XSmall }]}>Enter a different password with the previous</Text>

                    <Spacer paddingT={myHeight(6.9)} />
                    {/* New Pass */}
                    <View >
                        <Text style={[styles.heading, { color: newPass ? myColors.offColor : myColors.text }]}>New Password</Text>
                        <TextInput placeholder="*** *** ***"
                            placeholderTextColor={myColors.offColor}
                            style={styles.input} cursorColor={myColors.primary}
                            value={newPass} onChangeText={setNewPass}
                            onEndEditing={() => verifyNewPass()}
                        />
                    </View>

                    <Spacer paddingT={myHeight(1)} />
                    {/* Con Pass */}
                    <View >
                        <Text style={[styles.heading, { color: conPass ? myColors.offColor : myColors.text }]}>Confirm Password</Text>
                        <TextInput placeholder="*** *** ***"
                            placeholderTextColor={myColors.offColor}
                            style={styles.input} cursorColor={myColors.primary}
                            value={conPass} onChangeText={setConPass}
                            onEndEditing={() => verifyNewPass()}
                        />
                    </View>



                </View>
                <View style={{ alignItems: 'center' }}>
                    {/* Button Submit */}
                    <TouchableOpacity onPress={() => verifyPass ? navigation.replace('DonePass') : null} activeOpacity={0.8}
                        style={styles2(verifyPass).button}>
                        <Text style={styles2(verifyPass).textReg}>Reset Password</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    heading: {
        paddingStart: myWidth(2.7), paddingVertical: myHeight(0.8),
        fontFamily: myFonts.heading, fontSize: myFontSize.XSmall,
    },
    container: {
        flex: 1, backgroundColor: myColors.background,
        paddingVertical: myHeight(8.6)
    },
    input: {
        height: myHeight(5.9), borderWidth: 1, borderRadius: myHeight(1.47),
        borderColor: myColors.border, paddingHorizontal: myWidth(3.3),
        fontSize: myFontSize.XSmall, color: myColors.text, fontFamily: myFonts.bodyBold,
    },
    textForget: {
        fontFamily: myFonts.headingBold, fontSize: myFontSize.large, color: myColors.text,
        paddingVertical: myHeight(0.6)
    },
    textLight: {
        fontFamily: myFonts.bodyBold, color: myColors.offColor, fontSize: myFontSize.medium
    },
    textLight2: {
        fontFamily: myFonts.bodyBold, color: myColors.offColor, fontSize: myFontSize.XSmall,
        paddingStart: myWidth(3.3)
    },
    textSign: {
        fontFamily: myFonts.heading, color: myColors.textL, fontSize: myFontSize.XSmall,
    }
})

const styles2 = (verifyPass) => StyleSheet.create({
    textReg: {
        color: verifyPass ? myColors.background : myColors.offColor, fontFamily: myFonts.headingBold,
        fontSize: myFontSize.XSmall
    },
    button: {
        height: myHeight(6.1), width: myWidth(68.3),
        borderRadius: myHeight(1.47), alignItems: 'center',
        justifyContent: 'center', flexDirection: 'row',
        backgroundColor: verifyPass ? myColors.primary : myColors.offColor3
    }
})