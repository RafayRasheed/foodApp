import React, { useEffect, useRef, useState } from 'react';
import {
    ScrollView, StyleSheet, TouchableOpacity, Image,
    View, Text, StatusBar,
    Linking, Platform, ImageBackground,
} from 'react-native';
import { MyError, Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFontSize, myFonts, myLetSpacing } from '../../ultils/myFonts';

export const ItemDetails = ({ navigation, route }) => {
    const { item } = route.params;


    return (
        <View style={{ flex: 1, backgroundColor: myColors.background }}>
            <ImageBackground style={{
                width: '100%',
                height: myHeight(33),
                overflow: 'hidden',
            }} source={item?.images[0]}
                resizeMode='cover'
            >
                {/* Back */}
                <TouchableOpacity
                    style={{
                        backgroundColor: myColors.background,
                        padding: myHeight(1),
                        borderRadius: myHeight(5),
                        position: 'absolute',
                        top: StatusBar.currentHeight + myHeight(0.6),
                        left: myWidth(4),
                    }}
                    activeOpacity={0.8}
                    onPress={() => navigation.goBack()}>
                    <Image
                        style={{
                            width: myHeight(2.6),
                            height: myHeight(2.6),
                            resizeMode: 'contain',
                        }}
                        source={require('../assets/home_main/home/back.png')}
                    />
                </TouchableOpacity>

                {/* Heart */}
                <TouchableOpacity
                    style={{
                        backgroundColor: myColors.background,
                        padding: myHeight(1),
                        borderRadius: myHeight(5),
                        position: 'absolute',
                        top: StatusBar.currentHeight + myHeight(0.6),
                        right: myWidth(4),
                    }}
                    activeOpacity={0.8}
                    onPress={null}>
                    <Text>Dill</Text>
                </TouchableOpacity>

            </ImageBackground>
            {/* Content */}
            <View style={{ paddingHorizontal: myWidth(4) }}>


            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.background,
    },

    //Text
    textCommon: {
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
});