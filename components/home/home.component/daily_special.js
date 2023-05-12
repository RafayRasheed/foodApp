import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { Spacer, myHeight, myWidth } from '../../common';
import { myFontSize, myFonts, myLetSpacing } from '../../../ultils/myFonts';
import { myColors } from '../../../ultils/myColors';
export const DailySpecial = ({ item }) => {
    return (
        <View style={{ paddingEnd: myWidth(2.3) }}>
            <Image source={item.image} style={styles.imageMain} />
            <View style={{ paddingStart: myWidth(0.7) }}>
                <Text style={styles.textName} numberOfLines={1}>{item.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.textDist_Rat} numberOfLines={1}>{item.distance}</Text>
                    <Spacer paddingEnd={myWidth(2)} />
                    <Image style={styles.imageStar} source={require('../../assets/home_main/start.png')} />
                    <Text style={styles.textDist_Rat} numberOfLines={1}>  {item.rating}</Text>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textName: {
        maxWidth: myWidth(30),
        fontSize: myFontSize.small2,
        fontFamily: myFonts.body,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,

    },
    textDist_Rat: {
        fontSize: myFontSize.tiny,
        fontFamily: myFonts.body,
        color: myColors.textL4,
        includeFontPadding: false,
        padding: 0,
    },
    imageMain: {
        width: myWidth(34),
        height: myHeight(16.5),
        resizeMode: 'stretch',
        borderRadius: myHeight(1)
    },
    imageStar: {
        width: myHeight(1.18),
        height: myHeight(1.18),
        resizeMode: 'stretch',
    },
})