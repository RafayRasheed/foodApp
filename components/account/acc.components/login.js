import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { myHeight, myWidth, Spacer } from "../../common";
import { myFontSize, myFonts } from "../../../ultils/myFonts";
import { myColors } from "../../../ultils/myColors";


export const Login = ({ navigate }) => {

    const [email, setEmail] = useState()
    const [password, setPass] = useState()
    const [verifyLog, setVerifyLog] = useState(false)

    const onLogin = () => {

    }

    function verifyEmail() {
        if (email) {
            return true
        }
        return false
    }
    function verifyPass() {
        if (password) {
            return true
        }
        return false
    }

    useEffect(() => {
        if (verifyEmail() && verifyPass()) {
            setVerifyLog(true)

        }
        else {
            setVerifyLog(false)
        }
    }, [email, password])

    // useEffect(()=>{
    //     storeData("yes")
    // },[])
    return (
        <View style={{ flex: 1, width: myWidth(87), justifyContent: 'center', }}>
            {/* email Portion */}
            <View>
                <Text style={[styles.heading, { color: email ? myColors.offColor : myColors.text }]}>Email address</Text>
                <TextInput placeholder="Eg namaemail@emailkamu.com"
                    placeholderTextColor={myColors.offColor}
                    style={styles.input} cursorColor={myColors.primary}
                    value={email} onChangeText={setEmail}
                    autoCapitalize='none'
                    onEndEditing={() => verifyEmail()}
                />
            </View>

            <Spacer paddingT={myHeight(0.98)} />
            {/* password Portion */}
            <View>
                <Text style={[styles.heading, { color: password ? myColors.offColor : myColors.text }]}>Password</Text>
                <TextInput placeholder="**** **** ****"
                    placeholderTextColor={myColors.offColor}
                    style={styles.input} cursorColor={myColors.primary}
                    value={password} onChangeText={setPass}
                    onEndEditing={() => verifyPass()}
                    secureTextEntry={true}
                />
                {/* Forget Password */}
                <TouchableOpacity activeOpacity={0.8} style={{ alignSelf: 'flex-end' }}
                    onPress={() => navigate('ForgetPass')}>
                    <Text style={styles.textForgetP}>Forget Password?</Text>
                </TouchableOpacity>
            </View>

            <Spacer paddingT={myHeight(4.1)} />
            <View style={{ alignItems: 'center' }}>
                {/* Button Login */}
                {/* <TouchableOpacity onPress={() => verifyLog ? navigate('HomeNavigator') : null} */}
                <TouchableOpacity onPress={() => verifyLog ? onLogin() : null}
                    activeOpacity={0.8}
                    style={[styles.button, { backgroundColor: verifyLog ? myColors.primary : myColors.offColor3 }]}>
                    <Text style={styles2(verifyLog).textReg}>Login</Text>
                </TouchableOpacity>

                <Spacer paddingT={myHeight(1.5)} />
                <View style={{ width: myWidth(47), height: 0.8, backgroundColor: myColors.offColor4 }} />
                <Spacer paddingT={myHeight(1.5)} />

                <TouchableOpacity onPress={() => null} activeOpacity={0.8} style={[styles.button, { backgroundColor: myColors.offColor3 }]}>
                    <Image style={{ resizeMode: 'contain', width: myWidth(5.3), height: myWidth(5.3) }}
                        source={require('../../assets/account/google.png')} />
                    <Spacer paddingEnd={myWidth(6.4)} />
                    <Text style={styles.textGoogle}>Login with Google</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        paddingStart: myWidth(2.7), paddingVertical: myHeight(0.8),
        fontFamily: myFonts.heading, fontSize: myFontSize.XSmall,
    },
    input: {
        height: myHeight(5.9), borderWidth: 1, borderRadius: myHeight(1.47),
        borderColor: myColors.border, paddingHorizontal: myWidth(3.3),
        fontSize: myFontSize.XSmall, color: myColors.text, fontFamily: myFonts.bodyBold,
    },
    button: {
        height: myHeight(6.1), width: myWidth(68.3),
        borderRadius: myHeight(1.47), alignItems: 'center', justifyContent: 'center',
        flexDirection: 'row',
    },
    textGoogle: {
        color: myColors.black2, fontFamily: myFonts.heading,
        fontSize: myFontSize.XSmall
    },
    textForgetP: {
        fontFamily: myFonts.heading, fontSize: myFontSize.XSmall, color: myColors.primary,
        paddingVertical: myHeight(0.8)
    }

})
const styles2 = (verifyLog) => StyleSheet.create({
    textReg: {
        color: verifyLog ? myColors.background : myColors.offColor, fontFamily: myFonts.headingBold,
        fontSize: myFontSize.xSmall
    },
})