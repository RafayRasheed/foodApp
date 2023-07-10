import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { myHeight, myWidth, Spacer } from "../common";
import { myFontSize, myFonts } from "../../ultils/myFonts";
import { myColors } from "../../ultils/myColors";
export const ForgetPassword = ({ navigation }) => {
    const [email, setEmail] = useState()
    const [verifyPass, setVerifyPass] = useState(false)

    function verifyEmail() {
        if (email) {
            return true
        }
        return false
    }
    useEffect(() => {
        if (verifyEmail()) {
            setVerifyPass(true)

        }
        else {
            setVerifyPass(false)
        }
    }, [email])

    return (
        <>
            <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', }} style={styles.container}>

                <View style={{ paddingHorizontal: myWidth(6.4) }}>
                    <Spacer paddingT={myHeight(5.78)} />

                    {/* T ForgetPass */}
                    <Text style={styles.textForget}>Forget Password</Text>
                    <Text style={[styles.textLight, { fontSize: myFontSize.medium }]}>Enter your registered email below</Text>

                    <Spacer paddingT={myHeight(6.9)} />
                    {/* Email Portion */}
                    <View >
                        <Text style={[styles.heading, { color: email ? myColors.offColor : myColors.text }]}>Email address</Text>
                        <TextInput placeholder="Eg namaemail@emailkamu.com"
                            placeholderTextColor={myColors.offColor}
                            style={styles.input} cursorColor={myColors.primary}
                            value={email} onChangeText={setEmail}
                            onEndEditing={() => verifyEmail()}
                        />
                    </View>

                    <Spacer paddingT={myHeight(1.9)} />
                    {/* T Remember Pass */}
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textLight2}>Remember the password?</Text>
                        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.6}>
                            <Text style={styles.textSign}> Sign in</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ alignItems: 'center' }}>
                    {/* Button Submit */}
                    <TouchableOpacity onPress={() => verifyPass ? navigation.navigate('DoneEmail') : null} activeOpacity={0.8}
                        style={styles2(verifyPass).button}>
                        <Text style={styles2(verifyPass).textReg}>Submit</Text>
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
        fontFamily: myFonts.heading, color: myColors.primary, fontSize: myFontSize.XSmall,
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