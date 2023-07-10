import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { myHeight, myWidth, Spacer } from "../../common";
import { myFontSize, myFonts } from "../../../ultils/myFonts";
import { myColors } from "../../../ultils/myColors";

export const CreateAcc = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState()
    const [password, setPass] = useState()
    const [verifyReg, setVerifyReg] = useState(false)

    function verifyName() {
        if (name) {
            return true
        }
        return false
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

    async function register() {

    }

    useEffect(() => {
        if (verifyName() && verifyEmail() && verifyPass()) {
            setVerifyReg(true)
        }
        else {
            setVerifyReg(false)
        }
    }, [name, email, password])

    return (
        <View style={{ flex: 1, width: myWidth(87), justifyContent: 'center' }}>
            {/* Name Portion */}
            <View>
                <Text style={[styles.heading, { color: name ? myColors.offColor : myColors.text }]}>Full Name</Text>
                <TextInput placeholder="Enter Your Full Name"
                    placeholderTextColor={myColors.offColor}
                    style={styles.input} cursorColor={myColors.primary}
                    value={name} onChangeText={setName}
                    onEndEditing={() => verifyName()}
                />
            </View>
            <Spacer paddingT={myHeight(0.98)} />
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
            </View>

            <Spacer paddingT={myHeight(4.1)} />
            <View style={{ alignItems: 'center' }}>
                {/* Button Register */}
                <TouchableOpacity onPress={() => verifyReg ? register() : null} activeOpacity={0.8} style={[styles.button, { backgroundColor: verifyReg ? myColors.primary : myColors.offColor3 }]}>
                    <Text style={styles2(verifyReg).textReg}>Registration</Text>
                </TouchableOpacity>

                <Spacer paddingT={myHeight(0.98)} />
                <View style={{ width: myWidth(47), height: 0.8, backgroundColor: myColors.offColor4 }} />
                <Spacer paddingT={myHeight(0.98)} />

                <TouchableOpacity onPress={() => null} activeOpacity={0.8} style={[styles.button, { backgroundColor: myColors.offColor3 }]}>
                    <Image style={{ resizeMode: 'contain', width: myWidth(5.3), height: myWidth(5.3) }}
                        source={require('../../assets/account/google.png')} />
                    <Spacer paddingEnd={myWidth(6.4)} />
                    <Text style={styles.textGoogle}>Sign up with Google</Text>
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

})
const styles2 = (verifyReg) => StyleSheet.create({
    textReg: {
        color: verifyReg ? myColors.background : myColors.offColor, fontFamily: myFonts.headingBold,
        fontSize: myFontSize.XSmall
    },
})