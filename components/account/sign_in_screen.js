import { useEffect, useState } from "react"
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { myFontSize, myFonts } from "../../ultils/myFonts"
import { myColors } from "../../ultils/myColors"
import { Spacer, myHeight, myWidth } from "../common"


export const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState(null)
    const [password, setPass] = useState(null)

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


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView

                // behavior={(Platform.OS === 'ios') ? "padding" : null}
                // keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
                // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

                style={styles.container}>
                {/* Content */}
                <View style={styles.containerContent}>
                    {/* Text Portion */}
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.textSignIn}>Sign In</Text>
                        <Text style={styles.textWelcome}>Welcome back! Please enter your details</Text>
                    </View>
                    {/* Input Portion */}
                    <View>
                        {/* Email Portion */}
                        <View style={styles.containerInputPortion}>
                            <Image style={styles.imageInput} source={require('../assets/account/iEmail.png')} />
                            <Spacer paddingEnd={myWidth(1.8)} />
                            <TextInput placeholder="Email Address"
                                placeholderTextColor={myColors.offColor}
                                selectionColor={myColors.primaryT}
                                style={styles.containerInput} cursorColor={myColors.primaryT}
                                value={email} onChangeText={setEmail}
                                onEndEditing={() => verifyEmail()}
                            />
                        </View>
                        <Spacer paddingT={myHeight(1.7)} />

                        {/* Password Portion */}
                        <View style={styles.containerInputPortion}>
                            <Image style={styles.imageInput} source={require('../assets/account/iPass.png')} />
                            <Spacer paddingEnd={myWidth(1.5)} />
                            <TextInput placeholder="Password"
                                secureTextEntry
                                placeholderTextColor={myColors.offColor}
                                selectionColor={myColors.primaryT}
                                style={styles.containerInput} cursorColor={myColors.primaryT}
                                value={password} onChangeText={setPass}
                                onEndEditing={() => verifyEmail()}
                            />
                        </View>
                        <Spacer paddingT={myHeight(0.5)} />
                        <TouchableOpacity style={{ alignSelf: 'flex-end', paddingEnd: myWidth(1) }} onPress={() => null} activeOpacity={0.6} >
                            <Text style={styles.textForgot}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Sign Button */}
                    <TouchableOpacity activeOpacity={0.6} onPress={() => null} style={styles.containerSign}>
                        <Text style={styles.textSignInBu}>Sign in</Text>
                    </TouchableOpacity>

                    {/* Or sign with */}
                    <View style={styles.containerOrSignWith}>
                        <View style={styles.containerLine} />
                        <TouchableOpacity activeOpacity={0.6} onPress={() => null}>
                            <Text style={styles.textSignWith}>Or sign in with</Text>
                        </TouchableOpacity>
                        <View style={styles.containerLine} />
                    </View>

                    {/* Social Portion */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {/* Google Button */}
                        <TouchableOpacity activeOpacity={0.6} onPress={() => null}
                            style={[styles.containerSocial, { backgroundColor: myColors.ligBlue }]}>

                            <Text style={styles.textSocial}>Google</Text>
                        </TouchableOpacity>
                        {/* Google Button */}

                        <TouchableOpacity activeOpacity={0.6} onPress={() => null}
                            style={[styles.containerSocial, { backgroundColor: myColors.purple }]}>

                            <Text style={styles.textSocial}>Facebook</Text>
                        </TouchableOpacity>

                        {/* Google Button */}
                        <TouchableOpacity activeOpacity={0.6} onPress={() => null}
                            style={[styles.containerSocial, { backgroundColor: myColors.ligRed }]}>
                            <Text style={styles.textSocial}>Apple</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Dont have an Acc*/}
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={styles.textDontHaveAcc}>Don't have an account? </Text>

                        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.textSignUp}>Sign Up!</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Spacer paddingT={myHeight(15)} />

                {/* Terms & Policy */}
                <View style={styles.containerTermCond}>
                    {/* First line */}
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.replace('StartupScreen')}>
                            <Text style={styles.textTermCondColor}>Terms & Conditions </Text>
                        </TouchableOpacity>

                        <Text style={styles.textTermCond}>and </Text>

                        <TouchableOpacity activeOpacity={0.6} onPress={() => null}>
                            <Text style={styles.textTermCondColor}>Privacy Policy</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Second Line */}
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textTermCond}>Copyrights 2023 </Text>

                        <TouchableOpacity activeOpacity={0.6} onPress={() => null}>
                            <Text style={styles.textTermCondColor}>M-Rides Inc</Text>
                        </TouchableOpacity>
                    </View>
                    <Spacer paddingT={myHeight(1)} />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerContent: {
        flex: 1,
        justifyContent: 'space-around',
        paddingHorizontal: myWidth(10),
    },
    containerInputPortion: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: myHeight(1.47),
        backgroundColor: myColors.primaryL,
        paddingHorizontal: myWidth(2.5),
    },
    containerInput: {
        flex: 1,
        textAlignVertical: 'center',
        paddingVertical: myHeight(1.4),
        fontSize: myFontSize.body, color: myColors.text, fontFamily: myFonts.bodyBold,
        lineHeight: 0
    },
    containerSign: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: myColors.primary,
        paddingVertical: myHeight(1.4),
        borderRadius: myWidth(3.2)

    },
    containerOrSignWith: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    containerLine: {
        flex: 1,
        height: 1,
        backgroundColor: myColors.offColor2,
    },
    containerSocial: {
        paddingHorizontal: myWidth(5.8),
        paddingVertical: myHeight(1.4),
        borderRadius: myWidth(3.5)
    },

    containerTermCond: {
        justifyContent: 'center',
        alignItems: 'center',
    },



    //Text
    textTermCond: {
        fontSize: myFontSize.small,
        fontFamily: myFonts.heading,
        color: myColors.text,
    },

    textTermCondColor: {
        fontSize: myFontSize.small,
        fontFamily: myFonts.heading,
        color: myColors.primaryT,
    },
    textForgot: {
        fontSize: myFontSize.tiny,
        fontFamily: myFonts.body,
        color: myColors.textL2,
    },
    textSignIn: {
        fontSize: myFontSize.large,
        fontFamily: myFonts.body,
        color: myColors.text,
    },
    textSignInBu: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.headingBold,
        color: myColors.background,
    },
    textWelcome: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.body,
        color: myColors.offColor,
    },
    textSignWith: {
        fontSize: myFontSize.xSmall,
        fontFamily: myFonts.heading,
        color: myColors.text,
        paddingHorizontal: myWidth(2.3),
    },
    textDontHaveAcc: {
        fontSize: myFontSize.xSmall,
        fontFamily: myFonts.heading,
        color: myColors.text,
    },

    textSignUp: {
        fontSize: myFontSize.xSmall,
        fontFamily: myFonts.heading,
        color: myColors.primaryT,
    },
    textSocial: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.headingBold,
        color: myColors.background,
    },


    //Image 
    imageInput: {
        height: myHeight(2.2),
        width: myHeight(2.2),
        resizeMode: 'contain',
    }

})