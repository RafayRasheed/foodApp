import React from 'react';
import { Dimensions, View } from 'react-native'

const { height, width } = Dimensions.get('window')

export function printWithPlat(print) {
    console.log(`${Platform.OS} => ${print}`)
}
export function myHeight(per) {
    const myHeight = (per * height) / 100
    return myHeight
}
export function myWidth(per) {
    const myHeight = (per * width) / 100
    return myHeight
}

export const Spacer = ({ paddingEnd = 0, paddingT = 0 }) => (
    <View style={{ paddingEnd: paddingEnd, paddingTop: paddingT }} />
)