import React from 'react';
import { Dimensions, View, Platform, StatusBar } from 'react-native'
import { MMKV } from 'react-native-mmkv';

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

export const storage = new MMKV()