import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Spacer, myHeight, myWidth, printWithPlat } from '../common';
import { myFontSize, myFonts, myLetSpacing } from '../../ultils/myFonts';
import { myColors } from '../../ultils/myColors';
import { Order, history } from './data_activity';
import { History_Order } from './acitvit.component/history_order';

export const ActivityScreen = () => {
    const [i, setI] = useState(0);
    printWithPlat(myHeight(0.06))
    return (
        <SafeAreaView style={styles.container}>
            <Spacer paddingT={myHeight(2)} />
            {/* Top Container */}
            <View style={styles.containerTop}>
                {/* containerActivity_Ic */}
                <View style={styles.containerActivity_Ic}>
                    <Text style={styles.textActivity}>Activity</Text>
                    {/* top icons */}
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity activeOpacity={0.6} onPress={null}>
                            <Image style={styles.imageTopIcon} source={require('../assets/activity/bell.png')} />
                        </TouchableOpacity>
                        <Spacer paddingEnd={myWidth(1.6)} />
                        <TouchableOpacity activeOpacity={0.6} onPress={null}>
                            <Image style={styles.imageTopIcon} source={require('../assets/activity/icon.png')} />
                        </TouchableOpacity>
                        <Spacer paddingEnd={myWidth(1.6)} />
                        <TouchableOpacity activeOpacity={0.6} onPress={null}>
                            <Image style={styles.imageTopIcon} source={require('../assets/activity/search.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Spacer paddingT={myHeight(1.5)} />

                {/* Button Order & History */}
                <View style={styles.containerOrder_Hist}>
                    {/* Order */}
                    <TouchableOpacity activeOpacity={0.6} onPress={() => setI(0)}
                        style={[styles.containerButtonOrder_Hist, { backgroundColor: i == 0 ? myColors.primaryT : myColors.primaryL2 }]}>
                        <Text style={[styles.textHist_Order, { color: i == 0 ? myColors.background : myColors.text }]}>Order</Text>
                    </TouchableOpacity>
                    <Spacer paddingEnd={myWidth(4.2)} />
                    {/* History */}
                    <TouchableOpacity activeOpacity={0.6} onPress={() => setI(1)}
                        style={[styles.containerButtonOrder_Hist, { backgroundColor: i == 1 ? myColors.primaryT : myColors.primaryL2 }]}>
                        <Text style={[styles.textHist_Order, { color: i == 1 ? myColors.background : myColors.text }]}>History</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Spacer paddingT={myHeight(1.72)} />
            <View style={styles.containerLine} />
            <Spacer paddingT={myHeight(0.86)} />

            <ScrollView contentContainerStyle={styles.containerContentScroll}>
                {i == 0 ?
                    Order.map((item, ind) =>
                        <History_Order key={ind} item={item} />)
                    :
                    history.map((item, ind) =>
                        <History_Order key={ind} item={item} />)
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.background
    },
    containerTop: {
        paddingHorizontal: myWidth(5.58),
    },
    containerActivity_Ic: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerOrder_Hist: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerButtonOrder_Hist: {
        paddingHorizontal: myWidth(6.5),
        paddingVertical: myHeight(0.4),
        borderRadius: myWidth(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLine: {
        height: myHeight(0.06),
        backgroundColor: myColors.line,
    },

    containerContentScroll: {
        paddingHorizontal: myWidth(6.5),
    },



    //Text
    textActivity: {
        fontSize: myFontSize.xBody,
        fontFamily: myFonts.heading,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textHist_Order: {
        fontSize: myFontSize.small2,
        fontFamily: myFonts.body,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,

    },


    // Image
    imageTopIcon: {
        height: myHeight(1.5),
        width: myWidth(3),
        resizeMode: 'contain',
    },
})