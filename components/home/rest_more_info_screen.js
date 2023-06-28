import React, { useEffect, useRef, useState } from 'react';
import {
    ScrollView, StyleSheet, TouchableOpacity, Image,
    View, Text, LayoutAnimation, StatusBar,
    Linking, Platform, ImageBackground,
} from 'react-native';
import { MyError, Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFontSize, myFonts, myLetSpacing } from '../../ultils/myFonts';
import { ItemInfo } from './home.component/item_info';
import { ImagesShortViewer } from './home.component/images_short_viewer';
import Collapsible from 'react-native-collapsible';

export const RestaurantMoreDetails = ({ navigation, route }) => {
    const { restaurant } = route.params;
    const [timmingClose, setTimingClose] = useState(true)

    function doThos() {

        const url = "https://www.google.com/maps/place/Millennium+Mall/@24.9094679,67.0433966,13z/data=!3m1!5s0x3eb339223612bfc7:0xc67329732f68fc6e!4m6!3m5!1s0x3eb33922488f3725:0x3bfde63eb356ebc0!8m2!3d24.901187!4d67.1155004!16s%2Fg%2F11bv1cb635?entry=ttu";

        // var splitUrl = url.split('!3d');
        // var latLong = splitUrl[splitUrl.length - 1].split('!4d');
        // var longitude;

        // var regex = new RegExp('@(.*),(.*),');                         
        // var lat_long_match = url.match(regex);
        // var lat = lat_long_match[1];
        // var long = lat_long_match[2];
        var longlat = /\/\@(.*),(.*),/.exec(url);

        const long = longlat[1]; //63.6741553
        const lat = longlat[2]; //-164.9587713
        console.log(lat, long)
        const scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
        const url2 = `https://www.google.com/maps/dir/?api=1&destination=${long},${lat}&dir_action=navigate`;

        Linking.openURL(url2);
    }

    return (
        <View style={{ flex: 1, backgroundColor: myColors.background }}>
            <ImagesShortViewer images={restaurant.images} />
            {/* Back */}
            <TouchableOpacity
                style={{
                    backgroundColor: myColors.background,
                    padding: myHeight(1),
                    borderRadius: myHeight(5),
                    position: 'absolute',
                    top: StatusBar.currentHeight,
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

            {/* Content
            <View style={{
                width: '100%', height: 100, backgroundColor: myColors.background,
                marginTop: -myHeight(0),
            }}>

            </View> */}



            <Spacer paddingT={myHeight(1.5)} />

            {/* name */}
            <Text
                numberOfLines={2}
                style={[
                    styles.textCommon,
                    {
                        paddingHorizontal: myWidth(4),
                        fontSize: myFontSize.medium,
                        fontFamily: myFonts.heading,
                    },
                ]}>
                {restaurant.name}
            </Text>

            <Spacer paddingT={myHeight(2)} />
            {/* Divider */}
            <View style={{ borderTopWidth: myHeight(0.13), borderColor: myColors.offColor, width: "100%" }} />

            <Spacer paddingT={myHeight(2)} />
            {/* loc & copy */}
            <View style={{ flexDirection: "row", }}>
                <View style={{ width: myWidth(15), alignItems: 'center' }}>
                    {/* loc */}
                    <Image style={{
                        height: myHeight(3),
                        width: myHeight(3),
                        resizeMode: 'contain',
                        tintColor: myColors.primaryT
                    }} source={require('../assets/home_main/home/loc.png')} />
                </View>
                {/* Loc */}
                <Text numberOfLines={2} style={{
                    flex: 1,
                    fontSize: myFontSize.xBody,
                    fontFamily: myFonts.bodyBold,
                    color: myColors.text,
                    letterSpacing: myLetSpacing.common,
                    includeFontPadding: false,
                    padding: 0
                }}
                >{restaurant.location} setg setg tgset stsetse tset set set sy e</Text>

                <Spacer paddingEnd={myWidth(1)} />
                {/* copy */}
                <TouchableOpacity activeOpacity={0.85} onPress={() => null}>

                    <Text style={[styles.textCommon, {

                        fontSize: myFontSize.body3,
                        fontFamily: myFonts.bodyBold,
                        color: myColors.primaryT

                    }]}
                    >Open</Text>
                </TouchableOpacity>
                <Spacer paddingEnd={myWidth(4)} />
            </View>

            <Spacer paddingT={myHeight(2)} />
            {/* Divider */}
            <View style={{ borderTopWidth: myHeight(0.13), alignSelf: 'flex-end', borderColor: myColors.offColor, width: "85%" }} />

            <Spacer paddingT={myHeight(2)} />
            {/* clock & open at && plus/minus */}
            <View style={{ flexDirection: "row", }}>
                {/* Clock */}
                <View style={{ width: myWidth(15), alignItems: 'center' }}>
                    {/* clock */}
                    <Image style={{
                        height: myHeight(3),
                        width: myHeight(3),
                        resizeMode: 'contain',
                        tintColor: myColors.primaryT
                    }} source={require('../assets/home_main/home/clock.png')} />
                </View>

                {/* Open at */}
                <Text numberOfLines={2} style={{
                    flex: 1,
                    fontSize: myFontSize.xBody,
                    fontFamily: myFonts.bodyBold,
                    color: myColors.text,
                    letterSpacing: myLetSpacing.common,
                    includeFontPadding: false,
                    padding: 0
                }}
                >{'Open at 9:00 AM'}</Text>
                {/*Go */}
                <TouchableOpacity activeOpacity={0.85} onPress={() => setTimingClose(!timmingClose)}>
                    <Image style={{
                        height: myHeight(2.6),
                        width: myHeight(2.6),
                        resizeMode: 'contain',
                        transform: [{ rotate: timmingClose ? '90deg' : '270deg' }],
                        tintColor: timmingClose ? myColors.primaryT : myColors.offColor
                    }} source={
                        require('../assets/home_main/home/go.png')
                    } />
                </TouchableOpacity>
                <Spacer paddingEnd={myWidth(4)} />
            </View>
            {/* Timmings Collapse */}
            <Collapsible style={{ paddingStart: myWidth(15), paddingEnd: myWidth(4) }} collapsed={timmingClose}>
                {
                    restaurant.timmings?.map((item, i) =>
                        <View key={i}>
                            <Spacer paddingT={myHeight(1)} />

                            <Text numberOfLines={2} style={[styles.textCommon, {
                                flex: 1,
                                fontSize: myFontSize.body3,
                                fontFamily: myFonts.bodyBold,

                            }]}
                            >{item.day}</Text>

                            <Spacer paddingT={myHeight(0.5)} />

                            {
                                item.times?.map((time, key) =>
                                    <Text key={key} numberOfLines={2} style={[styles.textCommon, {
                                        flex: 1,
                                        fontSize: myFontSize.body,
                                        fontFamily: myFonts.bodyBold,
                                        color: myColors.textL

                                    }]}
                                    >{time}</Text>
                                )
                            }
                        </View>
                    )
                }


            </Collapsible>

            <Spacer paddingT={myHeight(2)} />
            {/* Divider */}
            <View style={{ borderTopWidth: myHeight(0.13), borderColor: myColors.offColor, width: "100%" }} />

            {/* <View>
                <Spacer padding={10} />
                <View style={{
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 7, marginTop: -4
                    , paddingHorizontal: 10
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Content text={comment.name} />
                        <Spacer paddingEnd={15} />
                        <Heading text={comment.date} />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RatingStars size={12} rating={comment.rating} />
                    </View>
                </View>

                <View style={{ width:'100%', paddingHorizontal: 10 }}>
                    <Heading text={comment.comment} />
                </View>
                <Spacer padding={7} />

                {index != comments.length - 1 && <Devider />}
            </View> */}

        </View>
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
})