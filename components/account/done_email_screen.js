import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { myHeight, myWidth, Spacer } from "../common";
import { myFontSize, myFonts } from "../../ultils/myFonts";
import { myColors } from "../../ultils/myColors";
export const DoneEmail = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.containerMid}>
                {/* V Done */}
                <View style={styles.containerDone}>
                    <Image style={{ width: '32%', height: '20.7%', }}
                        source={require('../assets/account/check.png')} />
                </View>

                <Spacer paddingT={myHeight(3.5)} />
                {/* T Success */}
                <Text style={styles.textSucc}>Success</Text>

                <Spacer paddingT={myHeight(1)} />
                {/* T Check */}
                <Text style={styles.textCheck}>Please check your email for create a new password</Text>

                <Spacer paddingT={myHeight(3.4)} />
                {/* T Resubmet */}
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textLight}>Can't get email?</Text>
                    <TouchableOpacity onPress={() => navigation.replace("NewPass")} activeOpacity={0.6}>
                        <Text style={styles.textResub}> Resubmit</Text>
                    </TouchableOpacity>
                </View>


            </View>
            <View style={{ alignItems: 'center' }}>
                {/* Button Submit */}
                <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8}
                    style={styles.button}>
                    <Text style={styles.textReg}>Back Email</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: myColors.background,
        paddingVertical: myHeight(8.6),
        flexGrow: 1, justifyContent: 'space-between',
    },
    containerMid: {
        flex: 1, paddingHorizontal: myWidth(12.26), alignItems: 'center', justifyContent: 'center'
    },
    containerDone: {
        width: myHeight(10), height: myHeight(10),
        borderRadius: myHeight(5), backgroundColor: myColors.primary, justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: myHeight(6.1), width: myWidth(68.3),
        borderRadius: myHeight(1.47), alignItems: 'center',
        justifyContent: 'center', flexDirection: 'row',
        backgroundColor: myColors.primary
    },
    textReg: {
        color: myColors.background, fontFamily: myFonts.headingBold,
        fontSize: myFontSize.XSmall
    },
    textSucc: {
        fontSize: myFontSize.xLarge, fontFamily: myFonts.headingBold, color: myColors.text
    },
    textCheck: {
        fontSize: myFontSize.medium, fontFamily: myFonts.bodyBold, color: myColors.text,
        textAlign: 'center'
    },
    textLight: {
        fontFamily: myFonts.headingBold, color: myColors.textL, fontSize: myFontSize.medium
    },

    textResub: {
        fontFamily: myFonts.headingBold, color: myColors.primary, fontSize: myFontSize.medium,
    }
})
