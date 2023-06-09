import React, { useLayoutEffect, useState } from "react";
import { Image, ScrollView } from "react-native";
import { View, Text, Dimensions, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { myHeight, myWidth, Spacer, StatusbarH } from "../common";
import { myFontSize, myFonts } from "../../ultils/myFonts";
import { myColors } from "../../ultils/myColors";
import { Login } from "./acc.components/login";
import { CreateAcc } from "./acc.components/create_acc";
import Animated, { SlideInDown } from "react-native-reanimated";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


export const AccScreen = ({ navigation }) => {
    const [onAcc, setOnAcc] = useState(false)
    const [onLogin, setOnLogin] = useState(false)

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            {/* <StatusBar backgroundColor={onAcc ? '#00000029' : myColors.background} /> */}
            <StatusbarH />
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Spacer paddingT={myHeight(6)} />

                <Image resizeMode="contain" style={{
                    maxWidth: myWidth(75),
                    maxHeight: myHeight(27.7)
                }}
                    source={require('../assets/account/welcome.png')} />

                <Spacer paddingT={myHeight(8.5)} />
                {/* T Welcome */}
                <Text style={styles.textWel}>Welcome</Text>

                <Spacer paddingT={myHeight(1)} />
                {/* T Detail */}
                <Text style={styles.textDetail}>
                    Before enjoying Food media services Please register first</Text>
                <Spacer paddingT={myHeight(11)} />

                {/* B Create Acc */}
                <TouchableOpacity activeOpacity={0.8} style={[styles.bigButton, { backgroundColor: myColors.primary }]}
                    onPress={() => {
                        setOnAcc(true)
                        setOnLogin(false)
                    }}
                >
                    <Text style={styles.textCreateAcc}>Create Account</Text>
                </TouchableOpacity>

                <Spacer paddingT={myHeight(2)} />
                {/* B Create Login */}
                <TouchableOpacity activeOpacity={0.8} style={[styles.bigButton, { backgroundColor: myColors.lightGree }]}
                    onPress={() => {
                        setOnAcc(true)
                        setOnLogin(true)
                    }}>
                    <Text style={styles.textLogin}>Login</Text>
                </TouchableOpacity>

                <View style={{ flex: 1 }} />
                {/* T Term & Policy */}
                <Text style={styles.textTerm}>By logging in or registering, you have agreed to
                    <Text onPress={() => null} style={{ color: myColors.primary }}> The Terms and Conditions</Text> And
                    <Text onPress={() => null} style={{ color: myColors.primary }}> Privacy Policy</Text>
                </Text>
                <Spacer paddingT={myHeight(2)} />
            </View>





            {
                onAcc &&
                <TouchableOpacity activeOpacity={0.95} onPress={() => setOnAcc(false)}
                    style={{
                        height: '100%', width: '100%', position: 'absolute', zIndex: 2,
                        backgroundColor: '#00000050', justifyContent: 'flex-end'
                    }}>
                    <Animated.View entering={SlideInDown} style={{ minHeight: myHeight(71), width: myWidth(100), backgroundColor: myColors.background, borderTopStartRadius: 36, borderTopEndRadius: 36, alignItems: 'center' }}>

                        <Spacer paddingT={myHeight(1)} />
                        {/* Back line */}
                        <View style={{ width: myWidth(15), height: myHeight(0.8), borderRadius: 20, backgroundColor: myColors.dot }} />

                        <Spacer paddingT={myHeight(3)} />
                        {/* Navigator */}
                        <View style={{ alignSelf: 'flex-start', flexDirection: 'row' }}>
                            <Spacer paddingEnd={myWidth(9.6)} />
                            <View style={{ flexDirection: 'row', width: myWidth(63.5), justifyContent: 'space-between' }}>
                                <TouchableOpacity activeOpacity={0.7} onPress={() => setOnLogin(false)} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: myFontSize.xBody, fontFamily: myFonts.heading, color: onLogin ? myColors.textL4 : myColors.primary }}>Create Account</Text>
                                    <Spacer paddingT={myHeight(0.2)} />
                                    <View style={{ width: '80%', height: 3, backgroundColor: onLogin ? myColors.background : myColors.primary }} />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.7} onPress={() => setOnLogin(true)} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: myFontSize.xBody, fontFamily: myFonts.heading, color: onLogin ? myColors.primary : myColors.textL4 }}>Login</Text>
                                    <Spacer paddingT={myHeight(0.2)} />
                                    <View style={{ width: '80%', height: 3, backgroundColor: onLogin ? myColors.primary : myColors.background }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* <Spacer paddingT={myHeight(4.4)}/> */}
                        {onLogin ? <Login navigate={navigation.navigate} /> : <CreateAcc />}
                        {/* <Spacer paddingT={myHeight(4)}/> */}

                    </Animated.View>
                </TouchableOpacity>
            }

        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center', 
        backgroundColor: myColors.background,

    },

    textTerm: {
        maxWidth: myWidth(85), textAlign: 'center',
        color: myColors.text, fontSize: myFontSize.body,
        textTransform: 'capitalize',
    },

    bigButton: {
        width: myWidth(68), height: myHeight(6.1),
        borderRadius: myHeight(1.47), justifyContent: 'center',
        alignItems: 'center',
    },
    textWel: {
        color: myColors.black, fontSize: myFontSize.large, fontFamily: myFonts.heading
    },
    textDetail: {
        maxWidth: myWidth(66.6), color: myColors.textL4, fontSize: myFontSize.body2,
        fontFamily: myFonts.bodyBold, textTransform: 'capitalize', textAlign: 'center'
    },
    textCreateAcc: {
        color: myColors.background, fontSize: myFontSize.XSmall, fontFamily: myFonts.headingBold,
    },
    textLogin: {
        color: myColors.primary, fontSize: myFontSize.XSmall, fontFamily: myFonts.headingBold
    },




})