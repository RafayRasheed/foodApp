import { useEffect, useState } from "react"
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { myFontSize, myFonts, myLetSpacing } from "../../ultils/myFonts"
import { myColors } from "../../ultils/myColors"
import { Spacer, ios, myHeight, myWidth } from "../common"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"


export const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [code, setCode] = useState(null)
    const [password, setPass] = useState(null)
    const [verifyLog, setVerifyLog] = useState(false)

    const onSignUp = () => {

    }

    function verifyEmail() {
        if (email) {
            return true
        }
        return false
    }
    function verifyName() {
        if (name) {
            return true
        }
        return false
    }
    function verifyPhone() {
        if (phone) {
            return true
        }
        return false
    }
    function verifyCode() {
        if (code) {
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

    // const KeyboardAware = listenToKeyboardEvents = () =>{
    //     <ScrollView {}
    // }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAwareScrollView>
                {/* <ScrollView contentContainerStyle={{}}> */}

                {/* Content */}
                <View style={styles.containerContent}>
                    <Spacer paddingT={myHeight(6)} />

                    {/* Text Portion */}
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.textSignUp}>Sign Up</Text>
                        <Text style={styles.textWelcome}>Please enter your details</Text>
                    </View>

                    <Spacer paddingT={myHeight(6)} />
                    {/* Input Portion */}
                    <View>
                        {/* Name Portion */}
                        <View style={styles.containerInputPortion}>
                            <Image style={styles.imageInput} source={require('../assets/account/iName.png')} />
                            <Spacer paddingEnd={myWidth(1.8)} />
                            <TextInput placeholder="Full Name"
                                placeholderTextColor={myColors.offColor}
                                selectionColor={myColors.primaryT}
                                style={styles.containerInput} cursorColor={myColors.primaryT}
                                value={name} onChangeText={setName}
                                onEndEditing={() => verifyName()}
                            />
                        </View>
                        <Spacer paddingT={myHeight(1.6)} />

                        {/* Phone Portion */}
                        <View style={styles.containerInputPortion}>
                            <Image style={styles.imageInput} source={require('../assets/account/iPhone.png')} />
                            <Spacer paddingEnd={myWidth(1.8)} />
                            <TextInput placeholder="Phone"
                                keyboardType='phone-pad'
                                placeholderTextColor={myColors.offColor}
                                selectionColor={myColors.primaryT}
                                style={styles.containerInput} cursorColor={myColors.primaryT}
                                value={phone} onChangeText={setPhone}
                                onEndEditing={() => verifyPhone()}
                            />
                        </View>
                        <Spacer paddingT={myHeight(1.6)} />

                        {/* Email Portion */}
                        <View style={styles.containerInputPortion}>
                            <Image style={styles.imageInput} source={require('../assets/account/iEmail.png')} />
                            <Spacer paddingEnd={myWidth(1.8)} />
                            <TextInput placeholder="Email Address"
                                autoCapitalize='none'
                                placeholderTextColor={myColors.offColor}
                                selectionColor={myColors.primaryT}
                                style={styles.containerInput} cursorColor={myColors.primaryT}
                                value={email} onChangeText={setEmail}
                                onEndEditing={() => verifyEmail()}
                            />
                        </View>
                        <Spacer paddingT={myHeight(1.6)} />

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
                        <Spacer paddingT={myHeight(1.6)} />

                        {/* Code Portion */}
                        <View style={styles.containerInputPortion}>
                            <Image style={styles.imageInput} source={require('../assets/account/iName.png')} />
                            <Spacer paddingEnd={myWidth(1.8)} />
                            <TextInput placeholder="Referral Code"
                                autoCapitalize='none'
                                placeholderTextColor={myColors.offColor}
                                selectionColor={myColors.primaryT}
                                style={styles.containerInput} cursorColor={myColors.primaryT}
                                value={code} onChangeText={setCode}
                                onEndEditing={() => verifyCode()}
                            />
                        </View>
                        <Spacer paddingT={myHeight(2.9)} />

                        {/* Sign Button */}
                        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Verification')} style={styles.containerSign}>
                            <Text style={styles.textSignBu}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>


                    <Spacer paddingT={myHeight(4)} />

                    {/* Or sign with */}
                    <View style={styles.containerOrSignWith}>
                        <View style={styles.containerLine} />
                        <TouchableOpacity activeOpacity={0.6} onPress={() => null}>
                            <Text style={styles.textSignWith}>Or sign up with</Text>
                        </TouchableOpacity>
                        <View style={styles.containerLine} />
                    </View>

                    <Spacer paddingT={myHeight(5.1)} />
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

                    <Spacer paddingT={myHeight(5.1)} />

                    {/* Already have an Acc*/}
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={styles.textAlreHaveAcc}>Already have an account? </Text>

                        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
                            <Text style={styles.textSignIn}>Sign In!</Text>
                        </TouchableOpacity>
                    </View>



                    <Spacer paddingT={myHeight(6.5)} />

                    {/* Terms & Policy */}
                    <View style={styles.containerTermCond}>
                        {/* First line */}
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity activeOpacity={0.6} onPress={() => null}>
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
                </View>
                {/* </ScrollView> */}
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerContent: {
        // flex: 1,
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
        paddingVertical: ios ? myHeight(1.3) : myHeight(0.8),
        fontSize: myFontSize.body,
        color: myColors.text, fontFamily: myFonts.bodyBold,
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
        paddingVertical: myHeight(1.3),
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
        letterSpacing: myLetSpacing.common,

    },

    textTermCondColor: {
        fontSize: myFontSize.small,
        fontFamily: myFonts.heading,
        color: myColors.primaryT,
        letterSpacing: myLetSpacing.common,

    },
    textForgot: {
        fontSize: myFontSize.tiny,
        fontFamily: myFonts.body,
        color: myColors.textL2,
        letterSpacing: myLetSpacing.common,

    },

    textSignUp: {
        fontSize: myFontSize.large,
        fontFamily: myFonts.body,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,

    },

    textSignBu: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.headingBold,
        color: myColors.background,
        letterSpacing: myLetSpacing.common,

    },
    textWelcome: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.body,
        color: myColors.offColor,
        letterSpacing: myLetSpacing.common,

    },
    textSignWith: {
        fontSize: myFontSize.xSmall,
        fontFamily: myFonts.heading,
        color: myColors.text,
        paddingHorizontal: myWidth(2.3),
        letterSpacing: myLetSpacing.common,

    },
    textAlreHaveAcc: {
        fontSize: myFontSize.xSmall,
        fontFamily: myFonts.heading,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,

    },
    textSignIn: {
        fontSize: myFontSize.xSmall,
        fontFamily: myFonts.heading,
        color: myColors.primaryT,
        letterSpacing: myLetSpacing.common,

    },
    textSocial: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.headingBold,
        color: myColors.background,
        letterSpacing: myLetSpacing.common,

    },


    //Image 
    imageInput: {
        height: myHeight(2.2),
        width: myHeight(2.2),
        resizeMode: 'contain',
    }

})