import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image, View, Text, FlatList, Modal, UIManager, LayoutAnimation } from 'react-native'
import { MyError, Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFontSize, myFonts, myLetSpacing } from '../../ultils/myFonts';
import { ImageZoom } from '@likashefqet/react-native-image-zoom';


export const ImageViewer = ({ navigation, route }) => {
    const { images, i } = route.params
    return (
        <SafeAreaView style={styles.container}>
            <ImageZoom source={images[i]}
                // minScale={0.5}
                // maxScale={3}
                style={{
                    width: myWidth(100), resizeMode: 'contain'
                }} />
            {/* <Image source={images[i]} style={{
                width: myWidth(100), resizeMode: 'contain'
            }} /> */}
            {/* images?.map((image, i) =>
                ) */}

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.text
    },


    //Text
    textCommon: {
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },

})