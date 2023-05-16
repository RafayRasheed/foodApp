import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Spacer, myHeight, myWidth } from '../../common';
import { myColors } from '../../../ultils/myColors';
import { myFontSize, myFonts, myLetSpacing } from '../../../ultils/myFonts';


export const History_Order = ({ item }) => {
    return (
        <View>
            <View style={styles.container}>
                {/* Content */}
                <View style={styles.containerContent}>
                    <Image style={styles.imageMain} source={item.image} />

                    {/* Text */}
                    <View style={styles.containerText}>
                        <View>
                            <Text numberOfLines={1} style={styles.textName}>{item.name}</Text>
                            <Text numberOfLines={1} style={styles.textTime_Status}>{item.date}</Text>
                        </View>
                        <Text numberOfLines={1} style={styles.textTime_Status}>{item.price} - {item.status}</Text>

                    </View>

                    {/* Button  Invoice & Rebook/TrackOrder*/}
                    <View style={styles.containerOrder_Reb}>
                        {/* Order */}
                        <TouchableOpacity activeOpacity={0.6} onPress={() => console.log('Invoice')}
                            style={styles.containerButtonOrder_Reb}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.imageDown_Rel} source={require('../../assets/activity/download.png')} />
                                <Spacer paddingEnd={myWidth(1.7)} />
                                <Text style={styles.textReb_Order}>Invoice</Text>
                            </View>
                        </TouchableOpacity>
                        {
                            item.track ?
                                <TouchableOpacity activeOpacity={0.6} onPress={() => console.log('Rebook')}
                                    style={styles.containerButtonTrack}>
                                    <Text style={styles.textReb_Order}>Track Order</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity activeOpacity={0.6} onPress={() => console.log('Rebook')}
                                    style={styles.containerButtonOrder_Reb}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={styles.imageDown_Rel} source={require('../../assets/activity/reload.png')} />
                                        <Spacer paddingEnd={myWidth(1.62)} />
                                        <Text style={styles.textReb_Order}>Rebook</Text>
                                    </View>
                                </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
            <View style={styles.containerDivider} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: myHeight(1.4),
    },
    containerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerDivider: {
        height: myHeight(0.16),
        backgroundColor: myColors.divider,
    },
    containerText: {
        flex: 1, justifyContent: 'space-between',
        paddingHorizontal: myWidth(2),
        paddingBottom: myHeight(0.3)
    },

    containerOrder_Reb: {
        justifyContent: 'space-between',
    },
    containerButtonOrder_Reb: {
        paddingStart: myWidth(3),
        paddingEnd: myWidth(5),
        paddingVertical: myHeight(0.45),
        borderRadius: myWidth(10),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: myColors.primaryL2,
    },
    containerButtonTrack: {
        // paddingHorizontal: myWidth(0),
        paddingVertical: myHeight(0.45),
        borderRadius: myWidth(10),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: myColors.primaryL2,
    },


    // Text
    textName: {
        fontSize: myFontSize.small2,
        fontFamily: myFonts.body,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textTime_Status: {
        fontSize: myFontSize.tiny,
        fontFamily: myFonts.body,
        color: myColors.textL4,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textReb_Order: {
        fontSize: myFontSize.small2,
        fontFamily: myFonts.body,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },




    // Image
    imageMain: {
        height: myHeight(6.5),
        width: myWidth(14),
        resizeMode: 'cover'
    },
    imageDown_Rel: {
        height: myHeight(1.34),
        width: myWidth(2.32),
        resizeMode: 'contain',
    },
})