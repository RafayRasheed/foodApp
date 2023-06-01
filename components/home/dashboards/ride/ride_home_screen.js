import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { myColors } from '../../../../ultils/myColors'
import { Spacer, myHeight, myWidth } from '../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../ultils/myFonts'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Animated, { SlideInDown, SlideInUp, SlideOutDown } from 'react-native-reanimated'


export const RideHome = ({ navigator }) => {
    const [selectRiderModel, setSelectRiderModel] = useState(true)
    return (
        <>
            <SafeAreaView style={{ backgroundColor: myColors.primaryT }}></SafeAreaView>
            <SafeAreaView style={{ flex: 1 }}>
                <TouchableOpacity style={{ flex: 1 }} activeOpacity={1}
                    onPress={() => setSelectRiderModel(true)}>



                    <MapView
                        zoomEnabled
                        style={{
                            ...StyleSheet.absoluteFillObject,
                        }}
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </TouchableOpacity>
                {/* Select Rider Type */}
                {selectRiderModel &&
                    <Animated.View
                        entering={SlideInDown.duration(1000)}
                        exiting={SlideOutDown}
                        style={{
                            paddingHorizontal: myWidth(4.5),
                            backgroundColor: myColors.background,
                            width: "100%", position: 'absolute', bottom: 0,
                            borderTopStartRadius: myWidth(4),
                            borderTopEndRadius: myWidth(4),
                        }}
                    >
                        <Spacer paddingT={myHeight(0.8)} />

                        {/* Line */}
                        <View style={{
                            width: myWidth(30), height: myHeight(0.7),
                            backgroundColor: myColors.dot, borderRadius: myHeight(2),
                            alignSelf: 'center',
                        }} />
                        <Spacer paddingT={myHeight(0.7)} />
                        {/* Select Ride */}
                        <Text onPress={() => setSelectRiderModel(false)} style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.heading,
                            }
                        ]}>Select Rideshare Type</Text>
                        {/* Choose a type */}
                        <Text onPress={() => setSelectRiderModel(false)} style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.xxSmall,
                                fontFamily: myFonts.body,
                            }
                        ]}>Choose a type or swipe up for more</Text>

                        <Spacer paddingT={myHeight(1.2)} />

                        {/* Cash & Promo Code Button */}
                        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                            {/* Cash Button */}
                            <TouchableOpacity activeOpacity={0.7} onPress={() => null}
                                style={{
                                    paddingHorizontal: myWidth(2.3),
                                    backgroundColor: myColors.offColor6,
                                    paddingVertical: myHeight(1), borderRadius: myHeight(1),
                                    flexDirection: 'row', alignItems: 'center',
                                    width: '46%', justifyContent: 'space-between',
                                }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../../../assets/home_main/dashboards/ride/cash.png')}
                                        style={{
                                            width: myHeight(1.7),
                                            height: myHeight(1.7),
                                            resizeMode: 'contain',
                                            tintColor: myColors.text
                                        }}
                                    />
                                    <Spacer paddingEnd={myWidth(3)} />
                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            fontSize: myFontSize.xxSmall,
                                            fontFamily: myFonts.heading,
                                        }
                                    ]}>CASH</Text>
                                </View>
                                <Image source={require('../../../assets/home_main/go.png')}
                                    style={{
                                        width: myHeight(1.2),
                                        height: myHeight(1.2),
                                        resizeMode: 'contain',
                                        tintColor: myColors.text,
                                        transform: [{ rotate: '90deg' }]
                                    }}
                                />
                            </TouchableOpacity>

                            {/* Promo Code Button */}
                            <TouchableOpacity activeOpacity={0.7} onPress={() => null}
                                style={{
                                    paddingHorizontal: myWidth(2.3),
                                    backgroundColor: myColors.offColor6,
                                    paddingVertical: myHeight(1), borderRadius: myHeight(1),
                                    flexDirection: 'row', alignItems: 'center',
                                    width: '46%', justifyContent: 'space-between',
                                }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../../../assets/home_main/dashboards/ride/discount.png')}
                                        style={{
                                            width: myHeight(1.9),
                                            height: myHeight(1.9),
                                            resizeMode: 'contain',
                                            tintColor: myColors.primaryT
                                        }}
                                    />
                                    <Spacer paddingEnd={myWidth(2)} />
                                    <Text style={[
                                        styles.textCommon,
                                        {
                                            fontSize: myFontSize.xxSmall,
                                            fontFamily: myFonts.heading,
                                            color: myColors.textL3
                                        }
                                    ]}>PROMO CODE</Text>
                                </View>
                                <Image source={require('../../../assets/home_main/go.png')}
                                    style={{
                                        width: myHeight(1.2),
                                        height: myHeight(1.2),
                                        resizeMode: 'contain',
                                        tintColor: myColors.text,
                                        transform: [{ rotate: '90deg' }]
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <Spacer paddingT={myHeight(2.8)} />

                        {/* Schedule & Book Now Code Button */}
                        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                            {/* Schedule Button */}
                            <TouchableOpacity activeOpacity={0.7} onPress={() => null}
                                style={{
                                    borderRadius: myHeight(1), height: myHeight(5),
                                    backgroundColor: myColors.offColor7,
                                    paddingHorizontal: myWidth(5),
                                    flexDirection: 'row', alignItems: 'center',
                                    width: '48.7%', justifyContent: 'space-between',
                                }}>
                                <Image source={require('../../../assets/home_main/dashboards/ride/carwaiting.png')}
                                    style={{
                                        height: myHeight(3),
                                        width: myHeight(3) * 1.5,
                                        resizeMode: 'contain',
                                        tintColor: myColors.text
                                    }}
                                />

                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.heading,
                                        color: myColors.text
                                    }
                                ]}>Schedule</Text>
                            </TouchableOpacity>

                            {/* Book Now Button */}
                            <TouchableOpacity activeOpacity={0.7} onPress={() => null}
                                style={{
                                    backgroundColor: myColors.primaryT,
                                    height: myHeight(5), borderRadius: myHeight(1),
                                    alignItems: 'center',
                                    width: '48.7%', justifyContent: 'center',
                                }}>

                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.heading,
                                        color: myColors.background,
                                        backgroundColor: 'red'
                                    }
                                ]}>Book Now</Text>

                            </TouchableOpacity>
                        </View>
                    </Animated.View>
                }
            </SafeAreaView>

        </>
    )
}
const styles = StyleSheet.create({
    container: {

    },

    textCommon: {
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },

})