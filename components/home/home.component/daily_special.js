import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { Spacer, myHeight, myWidth } from '../../common';
import { myFontSize, myFonts, myLetSpacing } from '../../../ultils/myFonts';
import { myColors } from '../../../ultils/myColors';
import { isExperimentalWebImplementationEnabled } from 'react-native-gesture-handler/lib/typescript/EnableExperimentalWebImplementation';
export const DailySpecial = ({ item }) => {
    return (
        <View style={{ paddingEnd: myWidth(2.3) }}>
            <Image source={item.image} style={styles.imageMain} />
            <View style={{ paddingStart: myWidth(0.7) }}>
                <Text style={styles.textName} numberOfLines={1}>{item.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.textDist_Rat} numberOfLines={1}>{item.distance}</Text>
                    <Spacer paddingEnd={myWidth(3)} />
                    <Image style={styles.imageStar} source={require('../../assets/home_main/star.png')} />
                    <Text style={styles.textDist_Rat} numberOfLines={1}> {item.rating}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textName: {
        width: myWidth(35),
        fontSize: myFontSize.xxSmall,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,

    },
    textDist_Rat: {
        fontSize: myFontSize.xSmall,
        fontFamily: myFonts.bodyBold,
        color: myColors.textL4,
        includeFontPadding: false,
        padding: 0,
    },
    imageMain: {
        // change width must change textName width as well
        width: myWidth(35),
        height: myHeight(16.5),
        resizeMode: 'cover',
        borderRadius: myHeight(1)
    },
    imageStar: {
        width: myHeight(1.18),
        height: myHeight(1.18),
        resizeMode: 'contain',
    },
})