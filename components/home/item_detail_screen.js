import React, { useEffect, useRef, useState } from 'react';
import {
    ScrollView, StyleSheet, TouchableOpacity, Image,
    View, Text, StatusBar, TextInput,
} from 'react-native';
import { MyError, Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFontSize, myFonts, myLetSpacing } from '../../ultils/myFonts';
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated';

export const ItemDetails = ({ navigation, route }) => {
    const { item } = route.params;

    const [RatingModal, setRatinModal] = useState(false)
    const [starI, setStarI] = useState(undefined)
    const [review, setReview] = useState(null)
    function hideModal() {
        setRatinModal(false)
    }
    function onDone() {
        hideModal()
    }
    return (
        <>

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

                {/* Content */}
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
                                <TouchableOpacity activeOpacity={0.8} onPress={() => setRatinModal(true)}>
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


            {
                RatingModal &&
                <TouchableOpacity activeOpacity={1} onPress={() => null}
                    style={{
                        width: '100%', height: '100%', position: 'absolute',
                        backgroundColor: '#00000050', justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Animated.View
                        entering={ZoomIn.duration(200)}
                        exiting={ZoomOut.duration(50)}
                        style={{
                            paddingHorizontal: myWidth(8), width: myWidth(85),
                            backgroundColor: myColors.background, borderRadius: myWidth(6)
                        }}>

                        <Image
                            style={{
                                width: myHeight(12),
                                height: myHeight(12),
                                resizeMode: 'contain',
                                borderRadius: myHeight(10),
                                borderWidth: myHeight(0.15),
                                marginTop: -myHeight(5),
                                borderColor: myColors.primaryT,
                                alignSelf: 'center',
                                backgroundColor: myColors.background
                            }}
                            source={item.images[0]}
                        />
                        <Spacer paddingT={myHeight(0.5)} />
                        <Text
                            numberOfLines={1}
                            style={[
                                styles.textCommon,
                                {
                                    alignSelf: 'center',
                                    paddingHorizontal: myWidth(4),
                                    fontSize: myFontSize.medium,
                                    fontFamily: myFonts.heading,
                                },
                            ]}>
                            {item.name}

                        </Text>
                        <Spacer paddingT={myHeight(3)} />

                        {/* All Stars */}
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                            <TouchableOpacity activeOpacity={0.9} style={{ paddingHorizontal: myWidth(2.5) }} onPress={() => setStarI(0)}>
                                <Image source={require('../assets/home_main/home/star.png')}
                                    style={[styles.star,
                                    {
                                        tintColor: starI >= 0 ? myColors.star : myColors.offColor
                                    }]}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.9} style={{ paddingHorizontal: myWidth(2.5) }} onPress={() => setStarI(1)}>
                                <Image source={require('../assets/home_main/home/star.png')}
                                    style={[styles.star,
                                    {
                                        tintColor: starI >= 1 ? myColors.star : myColors.offColor
                                    }]}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.9} style={{ paddingHorizontal: myWidth(2.5) }} onPress={() => setStarI(2)}>
                                <Image source={require('../assets/home_main/home/star.png')}
                                    style={[styles.star,
                                    {
                                        tintColor: starI >= 2 ? myColors.star : myColors.offColor
                                    }]}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.9} style={{ paddingHorizontal: myWidth(2.5) }} onPress={() => setStarI(3)}>
                                <Image source={require('../assets/home_main/home/star.png')}
                                    style={[styles.star,
                                    {
                                        tintColor: starI >= 3 ? myColors.star : myColors.offColor
                                    }]}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.9} style={{ paddingHorizontal: myWidth(2.5) }} onPress={() => setStarI(4)}>
                                <Image source={require('../assets/home_main/home/star.png')}
                                    style={[styles.star,
                                    {
                                        tintColor: starI >= 4 ? myColors.star : myColors.offColor
                                    }]}
                                />
                            </TouchableOpacity>
                        </View>

                        <Spacer paddingT={myHeight(3)} />
                        {/* Review Input */}
                        <TextInput placeholder="Write your review"
                            multiline={true}
                            autoCorrect={false}
                            numberOfLines={2}
                            placeholderTextColor={myColors.textL4}
                            selectionColor={myColors.primary}
                            cursorColor={myColors.primaryT}
                            value={review} onChangeText={setReview}
                            style={{
                                height: myHeight(11),
                                textAlignVertical: 'top',
                                borderRadius: myWidth(2),
                                width: '100%',
                                alignSelf: 'center',
                                paddingBottom: ios ? myHeight(1.2) : myHeight(100) > 600 ? myHeight(0.8) : myHeight(0.1),
                                paddingTop: ios ? myHeight(1.2) : myHeight(100) > 600 ? myHeight(1.2) : myHeight(0.1),
                                fontSize: myFontSize.body,
                                color: myColors.text,
                                includeFontPadding: false,
                                fontFamily: myFonts.body,
                                paddingHorizontal: myWidth(3),
                                backgroundColor: '#00000010'
                            }}
                        />

                        <Spacer paddingT={myHeight(2.5)} />

                        {/* Cancle & Done Buttons */}
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <TouchableOpacity activeOpacity={0.8} onPress={hideModal}>
                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.body4,
                                        fontFamily: myFonts.heading,
                                        color: myColors.primaryT,
                                        paddingEnd: myWidth(5)
                                    }
                                ]}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} onPress={onDone}>
                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.body4,
                                        fontFamily: myFonts.heading,
                                        color: myColors.primaryT,
                                    }
                                ]}>Done</Text>
                            </TouchableOpacity>

                        </View>
                        <Spacer paddingT={myHeight(4)} />

                    </Animated.View>

                </TouchableOpacity>
            }
        </>

    )
}


const styles = StyleSheet.create({

    //Text
    textCommon: {
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    star: {
        width: myHeight(4.2),
        height: myHeight(4.2),
        marginEnd: myWidth(0.5),
        resizeMode: 'contain',
    }
})