import React, { useRef, useState, useEffect } from 'react';
import { Image, Pressable, TouchableOpacity, SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';
import { myColors } from '../../ultils/myColors';
import { myFontSize, myFonts, myLetSpacing } from '../../ultils/myFonts';
import { MyError, Spacer, ios, myHeight, myWidth } from '../common';

export const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        if (errorMessage) {
            setTimeout(() => {
                setErrorMessage(null)
            }, 2000)
        }
    }, [errorMessage])
    // { errorMessage && <MyError message={errorMessage} /> }

    function verifyPhone() {
        if (phone) {

                return true
 
        }

        setErrorMessage('Please Enter a Number')
        return false
    }
    function onChangePhone(val) {
        setPhone(val)
    }
    function onSend() {
        if (verifyPhone()) {
            navigation.navigate('NewPassword')
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            {errorMessage && <MyError message={errorMessage} />}
            <Spacer paddingT={myHeight(7)} />

            <View style={{ paddingHorizontal: myWidth(10), alignItems: 'center' }}>
                {/* Forgot Password */}
                <Text style={styles.textForgotPass}>Forgot Password</Text>
                <Spacer paddingT={myHeight(1.1)} />
                <Text style={styles.textDes}>Enter your Email Address to get link for resetting password</Text>

                <Spacer paddingT={myHeight(3.2)} />

                {/* Phone Portion */}
                <View style={styles.containerInputPortion}>
                    <Spacer paddingEnd={myWidth(1.8)} />
                    <TextInput placeholder="Phone Number"
                        keyboardType='phone-pad'
                        maxLength={14}
                        placeholderTextColor={myColors.offColor}
                        selectionColor={myColors.primaryT}
                        style={styles.containerInput}
                        cursorColor={myColors.primaryT}
                        value={phone} onChangeText={(val) => onChangePhone(val)}
                        onEndEditing={() => verifyPhone()}
                    />
                </View>
                <Spacer paddingT={myHeight(2.2)} />

                {/* Back to sign in */}
                <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('SignIn')}>
                    <Spacer paddingT={myHeight(1)} />
                    <Text style={styles.textBackToSign}>Back to Sign in</Text>
                    <Spacer paddingT={myHeight(1)} />
                </TouchableOpacity>
                <Spacer paddingT={myHeight(2.2)} />

                {/* Sign Button */}
                <TouchableOpacity activeOpacity={0.6} onPress={onSend}
                    onLongPress={() => navigation.navigate('NewPassword')}
                    style={styles.containerSign}>
                    <Text style={styles.textSendBu}>Send</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.background,
    },
    containerInputPortion: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: myHeight(1.47),
        paddingHorizontal: myWidth(2.5),
        borderWidth: myHeight(0.09),
        borderColor: myColors.primaryT,
        backgroundColor: myColors.background,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,

    },
    containerInput: {
        flex: 1,
        textAlignVertical: 'center',
        paddingVertical: ios ? myHeight(1.2) : myHeight(100) > 600 ? myHeight(0.8) : myHeight(0.1),
        fontSize: myFontSize.body,
        color: myColors.text,
        includeFontPadding: false,
        fontFamily: myFonts.bodyBold,


        // lineHeight: 0,


    },
    containerSign: {
        width: myWidth(80),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: myColors.primaryT,
        paddingVertical: myHeight(1.25),
        borderRadius: myWidth(3.2),


    },

    // Text
    textForgotPass: {
        fontSize: myFontSize.large,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,

    },

    textDes: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.body,
        color: myColors.offColor,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
        paddingHorizontal: myWidth(9.5),
        textAlign: 'center',

    },
    textBackToSign: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.heading,
        color: myColors.offColor,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
        textAlign: 'center',

    },
    textSendBu: {
        fontSize: myFontSize.body2,
        fontFamily: myFonts.headingBold,
        color: myColors.background,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },


    //Image 
    imageBack: {
        height: myHeight(2.25),
        width: myHeight(2.25),
        marginStart: myWidth(7.4),
        resizeMode: 'contain',
    },
    imageInput: {
        height: myHeight(2.2),
        width: myHeight(2.2),
        resizeMode: 'contain',
    },


})