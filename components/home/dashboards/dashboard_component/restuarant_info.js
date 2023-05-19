import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
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
                <View style={styles.containerIcon}>
                    <Image style={styles.imageIcon} source={item.icon} />
                    {
                        item.verified &&
                        <View style={styles.containerVeri}>
                            <Image style={styles.imageVeri} source={require('../../../assets/home_main/dashboards/foods/check.png')} />
                        </View>
                    }
                </View>
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


})