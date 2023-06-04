import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image, View, Text, FlatList, Modal, UIManager, LayoutAnimation } from 'react-native'
import { MyError, Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFontSize, myFonts, myLetSpacing } from '../../ultils/myFonts';
import { bookNow, category, dailySpecial, nearDrivers, notifications, rewards } from './home_data';


if (!ios && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
}
export const HomeScreen = ({ navigation }) => {
    const name = "Someone";
   
    const [i, setI] = useState(0)
    const lenBook = bookNow.length;
   

    // return (<Test />)
    return (
        <SafeAreaView style={styles.container}>


            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>

                <Spacer paddingT={myHeight(3.4)} />

                {/* Morning & Loca */}
                <View style={{ paddingHorizontal: myWidth(6.75) }}>
                    <Text style={styles.textGoodM}>{`Good Morning ${name}!`}</Text>
                </View>


              



                <Spacer paddingT={myHeight(2.5)} />
                {/* Daily Special */}
                <View style={{ paddingHorizontal: myWidth(4), alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.textHeading}>Daily Special</Text>
                    <TouchableOpacity style={{ paddingVertical: myHeight(0.4), paddingStart: myWidth(2) }} activeOpacity={0.6} onPress={() => null}>
                        <Text style={styles.textSeeAll}>See all</Text>
                    </TouchableOpacity>
                </View>

                <Spacer paddingT={myHeight(1.5)} />
                {/* Row */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: myWidth(3.72) }}>
                    <View style={styles.containerDailyS}>
                        {dailySpecial.map((item, i) =>
                            <TouchableOpacity key={i} activeOpacity={0.6} onPress={() => navigation.navigate('RestaurantDetail', { item })} >
                                {/* <DailySpecial item={item} /> */}
                            </TouchableOpacity>
                        )}
                    </View>

                </ScrollView>

            

            </ScrollView>

            {/* Notification Section */}

        </SafeAreaView>
    )
}














const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: myColors.background
    },
    containerCategory: {

        flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-end',
        alignItems: 'center', justifyContent: 'center', paddingHorizontal: myWidth(2)

    },
    containerEachCate: {
        padding: myHeight(1.4),
        borderRadius: myHeight(5),
        backgroundColor: myColors.primaryL,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
    },

    containerBookNow: {
        // width: myWidth(92),
        alignSelf: 'center', height: myHeight(19),
        borderRadius: myWidth(3),
        overflow: 'hidden',
        borderColor: myColors.textL4,


    },
    containerTry: {
        alignSelf: 'center',
        borderRadius: myWidth(3),
        backgroundColor: myColors.background,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
    },
    containerBookNowText: {
        flex: 1,
        paddingVertical: myHeight(1.8),
        paddingHorizontal: myWidth(4.7),
    },
    containerDailyS: {
        flexDirection: 'row',
    },
    containerDot: {
        width: myHeight(1.18),
        height: myHeight(1.18),
        borderRadius: myHeight(1.18),
        marginEnd: myWidth(1.1),
    },
    containerReward: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: myColors.offColor3,
        paddingHorizontal: myWidth(2.5),
        borderRadius: myHeight(2.2),
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 3,

    },
    containerNearDriver: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: myColors.background,
        paddingVertical: myHeight(1.8),

    },
    containerNotification: {
        backgroundColor: myColors.background,
        width: myWidth(100),
        maxHeight: myHeight(80),
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        borderTopStartRadius: myWidth(6),
        borderTopEndRadius: myWidth(6),
    },
    containerNotiCount: {
        paddingHorizontal: myHeight(1.2),
        paddingVertical: myHeight(0.4),
        position: 'absolute',
        backgroundColor: myColors.primaryT,
        bottom: 0,
        borderRadius: myWidth(10),

    },
    containerNotiItem: {
        flexDirection: 'row',
        width: myWidth(100),
        backgroundColor: myColors.primaryT,
        paddingVertical: myHeight(1.3),
        paddingHorizontal: myWidth(4.6),

    },










    //Text
    textGoodM: {
        fontSize: myFontSize.medium0,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textLoc: {
        fontSize: myFontSize.xSmall,
        fontFamily: myFonts.heading,
        color: myColors.textL3,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textCat: {
        fontSize: myFontSize.body2,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textBookNowName: {
        fontSize: myFontSize.xBody,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textBookNow: {
        fontSize: myFontSize.xxSmall,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textHeading: {
        fontSize: myFontSize.xxBody,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textSeeAll: {
        fontSize: myFontSize.body2,
        fontFamily: myFonts.heading,
        color: myColors.primaryT,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },

    textRewardTitle: {
        flex: 1,
        fontSize: myFontSize.body,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,

    },
    textDriverName: {
        flex: 1,
        fontSize: myFontSize.body2,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textDriverTime: {
        flex: 1,
        fontSize: myFontSize.xxSmall,
        fontFamily: myFonts.body,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textNotiSwipe: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.heading,
        color: myColors.primaryT,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
        alignSelf: 'center'
    },
    textNotiCount: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.heading,
        color: myColors.background,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textNotiItem: {
        fontSize: myFontSize.xSmall,
        fontFamily: myFonts.body,
        color: myColors.background,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },










    //Image
    imageLoc: {
        height: myHeight(1.93),
        width: myWidth(3.25),
        resizeMode: 'contain',
    },
    imageCate: {
        height: myWidth(11),
        width: myWidth(11),
        resizeMode: 'contain',

        // height: myHeight(5.37),
        // width: myHeight(5.37),
        // resizeMode: 'cover',
    },

    imageMan: {
        borderRadius: myWidth(3),
        height: myHeight(19),
        width: myWidth(43.2),
        resizeMode: 'stretch',
    },
    imageArrow: {
        height: myHeight(1),
        width: myWidth(3),
        resizeMode: 'stretch',
    },
    imageSpeaker: {
        height: myHeight(3),
        width: myHeight(3),
        resizeMode: 'contain',
    },
    imageGoReward: {
        height: myHeight(1.72),
        paddingHorizontal: myWidth(1.86),
        resizeMode: 'contain',
    },
    imageDriver: {
        height: myHeight(4.3),
        width: myHeight(4.3),
        borderRadius: myHeight(4.3),
        resizeMode: 'contain',
    },
    imageUp: {
        height: myHeight(3.8),
        width: myHeight(3.8),
        resizeMode: 'contain',
    }

})