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
        <View style={{ flex: 1, backgroundColor: myColors.primaryL3, }}>
            {/* Top */}
            <View style={{
                paddingHorizontal: myWidth(4), position: 'absolute', width: '100%',
                marginTop: StatusBar.currentHeight + myHeight(0.6), zIndex: 10,
                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
            }}
            >
                {/* Back */}
                <TouchableOpacity
                    style={{
                        backgroundColor: myColors.background,
                        padding: myHeight(1),
                        borderRadius: myHeight(5),
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
                    }}
                    activeOpacity={0.8}
                    onPress={null}>
                    <Text>Dill</Text>
                </TouchableOpacity>

            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                {/* Name & Image */}
                <View style={{}}>
                    {/* Image */}
                    <View style={{
                        alignSelf: 'center', marginBottom: myHeight(3),
                        overflow: 'hidden', backgroundColor: myColors.background,
                        elevation: 12, borderRadius: myHeight(60),
                        marginTop: StatusBar.currentHeight + myHeight(1.5)
                    }}>

                        <Image style={{
                            height: myHeight(26),
                            width: myHeight(26),
                            resizeMode: 'cover',
                        }}
                            source={item?.images[0]}
                        />
                    </View>

                    {/* Name */}
                    <Text
                        style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.medium2,
                                fontFamily: myFonts.heading,
                                color: myColors.text,
                                textAlign: 'center',
                                marginTop: -myHeight(1)
                            },
                        ]}>{item.name}</Text>

                    <Spacer paddingT={myHeight(7.5)} />
                </View>

                {/* Content */}
                <View style={{
                    paddingHorizontal: myWidth(4), backgroundColor: myColors.background,
                    borderTopStartRadius: myWidth(7.5), borderTopEndRadius: myWidth(7.5),
                    marginTop: -myHeight(4.5), flex: 1
                }}>

                    {/* DIVIDER */}
                    {/* <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.divider, }} /> */}
                    <Spacer paddingT={myHeight(1.8)} />

                    {/* Price & Rating & Rate Us */}
                    <View style={{ flexDirection: 'row', paddingHorizontal: myWidth(1) }}>

                        {/* Price */}
                        <Text
                            style={[
                                styles.textCommon,
                                {
                                    flex: 1,
                                    fontSize: myFontSize.medium3,
                                    fontFamily: myFonts.heading,
                                    color: myColors.primaryT,
                                },
                            ]}>{item.price}
                        </Text>

                        {/* Rating */}
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            {/* Star */}
                            <Image
                                style={{
                                    width: myHeight(2.3),
                                    height: myHeight(2.3),
                                    resizeMode: 'contain',
                                }}
                                source={require('../assets/home_main/home/star.png')}
                            />
                            <Spacer paddingEnd={myWidth(1.5)} />
                            {/* Rating */}
                            <Text
                                style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.xBody,
                                        fontFamily: myFonts.heading,
                                        color: myColors.text,
                                    },
                                ]}>
                                {`${item.rating} `}
                            </Text>

                            <Text
                                style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.body3,
                                        fontFamily: myFonts.heading,
                                        color: myColors.textL4,
                                    },
                                ]}>
                                {`( ${item.noOfRatings} )`}
                            </Text>

                            <Spacer paddingEnd={myWidth(5)} />
                            {/* Rate us */}
                            <TouchableOpacity activeOpacity={0.8} onPress={() => null}>
                                <Text
                                    numberOfLines={2}
                                    style={[
                                        styles.textCommon,
                                        {
                                            fontSize: myFontSize.body4,
                                            fontFamily: myFonts.bodyBold,
                                            color: myColors.primaryT,
                                        },
                                    ]}>Rate Us!</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <Spacer paddingT={myHeight(1.5)} />
                    <Text
                        style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.body3,
                                fontFamily: myFonts.heading,
                                color: myColors.text,
                            },
                        ]}>Details</Text>

                    <Spacer paddingT={myHeight(0.3)} />
                    {/* Description */}
                    <Text
                        style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.bodyBold,
                                color: myColors.textL4,
                            },
                        ]}>
                        {item.description}
                    </Text>

                    <Spacer paddingT={myHeight(1.5)} />


                    <View style={{ borderTopWidth: myHeight(0.2), borderColor: myColors.dot, }} />

                    {/* <View style={{
                        width: myWidth(100), marginStart: -myWidth(4),
                        height: myHeight(1), backgroundColor: myColors.dot
                    }} /> */}

                </View>

            </ScrollView>
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