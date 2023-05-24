import React from 'react';
import { Dimensions, View, Platform, StatusBar, Text } from 'react-native'
import { MMKV } from 'react-native-mmkv';
import { myColors } from '../ultils/myColors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { myFontSize, myFonts, myLetSpacing } from '../ultils/myFonts';

const { height, width } = Dimensions.get('window')
export const ios = Platform.OS == 'ios'
export const stutusH = StatusBar.currentHeight

export function printWithPlat(print) {
    console.log(`${Platform.OS} => ${print} ${height} ${StatusBar.currentHeight}`)
}
export function myHeight(per) {
    if (ios) {

        return (per * height) / 100
    }
    if (stutusH) {
        return (per * (height - stutusH)) / 100
    }
    return (per * (height)) / 100

}
export function myWidth(per) {
    const myHeight = (per * width) / 100
    return myHeight
}

export const Spacer = ({ paddingEnd = 0, paddingT = 0 }) => (
    <View style={{ paddingEnd: paddingEnd, paddingTop: paddingT }} />
)

export const MyError = ({ message = '' }) => {

    // function isIphoneX() {
    //     const dimen = Dimensions.get('window');
    //     return (
    //         Platform.OS === 'ios' &&
    //         !Platform.isPad &&
    //         !Platform.isTV &&
    //         (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
    //     );
    // }
    // function getStatusBarHeight(skipAndroid) {
    //     return Platform.select({
    //         ios: isIphoneX() ? 44 : 20,
    //         android: skipAndroid ? 0 : StatusBar.currentHeight,
    //         default: 0
    //     })
    // }
    // console.log('k', getStatusBarHeight())
    return (
        <SafeAreaView style={{ zIndex: 1, position: 'absolute' }}>
            <View
                style={{
                    paddingVertical: myHeight(0.7), paddingHorizontal: myWidth(3),
                    width: myWidth(100), backgroundColor: myColors.red, alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        fontSize: myFontSize.body,
                        fontFamily: myFonts.bodyBold,
                        color: myColors.background,
                        letterSpacing: myLetSpacing.common,
                        includeFontPadding: false,
                        padding: 0,
                    }}
                >{message}</Text>
            </View>
        </SafeAreaView>
    )
}

export const storage = new MMKV()