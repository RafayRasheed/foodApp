import { Image, TouchableOpacity, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { myColors } from '../../../../ultils/myColors'
import { myWidth, myHeight, Spacer } from '../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../ultils/myFonts'

export const RestaurantInfo = ({ item }) => {

    let items = ''
    item.items.map((item, i) => {
        if (i != 0) {
            items = `${items}- ${item} `
        } else {
            items = `${item} `
        }
    }
    )
    return (
        <View style={styles.container}>
            {/* Image & Others*/}
            <View>
                <Image style={styles.imageRes} source={item.image} />
                {/* Icon */}
                <View style={styles.containerIcon}>
                    <Image style={styles.imageIcon} source={item.icon} />
                    {
                        item.verified &&
                        <View style={styles.containerVeri}>
                            <Image style={styles.imageVeri} source={require('../../../assets/home_main/dashboards/foods/check.png')} />
                        </View>
                    }
                </View>
                {/* Rating */}
                <View style={styles.containerRating}>
                    <Text style={styles.textRating}>{item.rating}</Text>
                    <Spacer paddingEnd={myWidth(1)} />
                    <Image style={styles.imageStar} source={require('../../../assets/home_main/star.png')} />
                </View>
                {/* Heart */}
                <TouchableOpacity activeOpacity={0.7} style={styles.containerHeart}>
                    <Image style={styles.imageHeart} source={require('../../../assets/home_main/dashboards/heart.png')} />
                </TouchableOpacity>
            </View>
            <Spacer paddingT={myHeight(1)} />

            {/* Name */}
            <Text style={styles.textName}>{item.name}</Text>

            {/* Items */}
            <Text numberOfLines={1} style={styles.textItems}>{items}</Text>
            <Spacer paddingT={myHeight(0.5)} />

            {/* Delivery & Time */}
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                {/* Delivery */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.imageDelivery_Time} source={require('../../../assets/home_main/dashboards/foods/bike.png')} />
                    <Spacer paddingEnd={myWidth(1.5)} />
                    <Text numberOfLines={1} style={styles.textDelivery_Time}>{item.delivery}</Text>
                </View>
                <Spacer paddingEnd={myWidth(1)} />

                {/* Time */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.imageDelivery_Time} source={require('../../../assets/home_main/dashboards/foods/clock.png')} />
                    <Spacer paddingEnd={myWidth(1.5)} />
                    <Text numberOfLines={1} style={styles.textDelivery_Time}>{item.deliveryTime}</Text>
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: myWidth(52),
        backgroundColor: myColors.background,
        marginEnd: myWidth(4.6),
        overflow: 'hidden',
    },
    containerIcon: {
        position: 'absolute',
        zIndex: 2,
        right: myWidth(5),
        bottom: -myHeight(1.5),
    },
    containerVeri: {
        position: 'absolute',
        zIndex: 2,
        right: myWidth(0.7),
        bottom: -myHeight(0.1),
        backgroundColor: myColors.darkBlue,
        padding: myHeight(0.085),
        borderRadius: myHeight(2),
    },
    containerRating: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 2,
        left: myWidth(2.3),
        top: myHeight(1),
        backgroundColor: myColors.background,
        paddingHorizontal: myWidth(2.5),
        paddingVertical: myHeight(0.1),
        borderRadius: myWidth(1),
    },
    containerHeart: {
        position: 'absolute',
        zIndex: 2,
        right: myWidth(2.3),
        top: myHeight(0.8),
        backgroundColor: myColors.background,
        padding: myHeight(0.65),
        borderRadius: myWidth(5),
    },

    //Text
    textName: {
        fontSize: myFontSize.body2,
        fontFamily: myFonts.heading,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textItems: {
        fontSize: myFontSize.small,
        fontFamily: myFonts.bodyBold,
        color: myColors.textL4,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textDelivery_Time: {
        // flex: 1,
        fontSize: myFontSize.small2,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textRating: {
        // flex: 1,
        fontSize: myFontSize.xSmall,
        fontFamily: myFonts.heading,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },


    //Images
    imageRes: {
        height: myHeight(13),
        width: myWidth(52),
        resizeMode: 'cover',
        borderRadius: myWidth(2.5),
    },
    imageDelivery_Time: {
        height: myHeight(2),
        width: myHeight(2),
        resizeMode: 'contain',
    },
    imageIcon: {
        height: myHeight(4),
        width: myHeight(4),
        borderRadius: myHeight(4),
        resizeMode: 'contain',
        borderWidth: myHeight(0.2),
        borderColor: myColors.background,
    },
    imageVeri: {
        height: myHeight(0.86),
        width: myHeight(0.86),
        resizeMode: 'contain',
    },
    imageStar: {
        height: myHeight(1.5),
        width: myHeight(1.5),
        resizeMode: 'contain',
    },
    imageHeart: {
        height: myHeight(1.6),
        width: myHeight(1.6),
        resizeMode: 'contain',
    },


})