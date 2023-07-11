import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ios, myHeight, myWidth, Spacer } from "../../common";
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
                <Text style={[styles.heading, { color: name ? myColors.textL4 : myColors.text }]}>Full Name</Text>
                <View style={styles.containerInput}>

                    <TextInput placeholder="Enter Your Full Name"
                        placeholderTextColor={myColors.textL4}
                        // ={false}
                        autoCorrect={false}
                        style={styles.input} cursorColor={myColors.primary}
                        value={name} onChangeText={setName}
                        onEndEditing={() => verifyName()}
                    />
                </View>
            </View>
            <Spacer paddingT={myHeight(0.98)} />
            {/* email Portion */}
            <View>
                <Text style={[styles.heading, { color: email ? myColors.textL4 : myColors.text }]}>Email address</Text>
                <View style={styles.containerInput}>

                    <TextInput placeholder="Eg namaemail@emailkamu.com"
                        placeholderTextColor={myColors.textL4}
                        autoCorrect={false}
                        style={styles.input} cursorColor={myColors.primary}
                        value={email} onChangeText={setEmail}
                        autoCapitalize='none'
                        onEndEditing={() => verifyEmail()}
                    />
                </View>

            </View>

            <Spacer paddingT={myHeight(0.98)} />
            {/* password Portion */}
            <View>
                <Text style={[styles.heading, { color: password ? myColors.textL4 : myColors.text }]}>Password</Text>
                <View style={styles.containerInput}>
                    <TextInput placeholder="Password"
                        placeholderTextColor={myColors.textL4}
                        style={styles.input} cursorColor={myColors.primary}
                        value={password} onChangeText={setPass}
                        onEndEditing={() => verifyPass()}
                        secureTextEntry={true}
                    />
                </View>
            </View>

            <Spacer paddingT={myHeight(4.1)} />
            <View style={{ alignItems: 'center' }}>
                {/* Button Register */}
                <TouchableOpacity onPress={() => verifyReg ? register() : null} activeOpacity={0.8} style={[styles.button, { backgroundColor: verifyReg ? myColors.primary : myColors.offColor4 }]}>
                    <Text style={styles2(verifyReg).textReg}>Registration</Text>
                </TouchableOpacity>

                <Spacer paddingT={myHeight(0.98)} />
                <View style={{ width: myWidth(47), height: 0.8, backgroundColor: myColors.textL44 }} />
                <Spacer paddingT={myHeight(0.98)} />

                <TouchableOpacity onPress={() => null} activeOpacity={0.8} style={[styles.button, { backgroundColor: myColors.offColor4 }]}>
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
        paddingVertical: myHeight(0.8),
        fontFamily: myFonts.heading, fontSize: myFontSize.body,
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: myWidth(2.5),
        paddingHorizontal: myWidth(2),
        borderWidth: myHeight(0.12),
        borderColor: myColors.textL4,
        backgroundColor: myColors.background,
    },

    input: {
        flex: 1,
        textAlignVertical: 'center',
        paddingVertical: ios ? myHeight(1) : myHeight(100) > 600 ? myHeight(0.8) : myHeight(0.2),
        fontSize: myFontSize.body,
        color: myColors.text,
        includeFontPadding: false,
        fontFamily: myFonts.bodyBold,
    },
    button: {
        height: myHeight(6.1), width: myWidth(68.3),
        borderRadius: myHeight(1.47), alignItems: 'center', justifyContent: 'center',
        flexDirection: 'row',
    },
    textGoogle: {
        color: myColors.black2, fontFamily: myFonts.heading,
        fontSize: myFontSize.body
    },

})
const styles2 = (verifyReg) => StyleSheet.create({
    textReg: {
        color: verifyReg ? myColors.background : myColors.textL4, fontFamily: myFonts.headingBold,
        fontSize: myFontSize.body
    },
})