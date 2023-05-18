import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, SafeAreaView, Image, Text } from 'react-native';
import { myColors } from '../../../ultils/myColors';
import { Spacer, myHeight, myWidth } from '../../common';
import { myFontSize } from '../../../ultils/myFonts';
import { myFonts } from '../../../ultils/myFonts';
import { myLetSpacing } from '../../../ultils/myFonts';


export const FoodDashboard = ({ navigation }) => {
    const [i, setI] = useState(0)
    return (
        <SafeAreaView style={styles.container}>
            <Spacer paddingT={myHeight(1.8)} />
            {/* Top */}
            <View style={styles.containerTop}>
                <Image style={styles.imageLoc} source={require('../../assets/home_main/dashboards/location.png')} />
                <Spacer paddingEnd={myWidth(2)} />
                <Text numberOfLines={2} style={styles.textLoc}>67 Buick boulevard Brampton Canada</Text>
                <Spacer paddingEnd={myWidth(2)} />

                <View style={styles.containerTopDelivery}>
                    <TouchableOpacity onPress={() => setI(0)} activeOpacity={0.6}
                        style={[styles.containerDelivery,
                        i == 0 && { backgroundColor: myColors.primaryT }]}>
                        <Image style={[styles.imageDelivery, i == 0 && { tintColor: myColors.background }]}
                            source={require('../../assets/home_main/dashboards/delivery.png')} />

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setI(1)} activeOpacity={0.6}
                        style={[styles.containerDelivery,
                        i == 1 && { backgroundColor: myColors.primaryT }]}>
                        <Image style={[styles.imageDelivery, i == 1 && { tintColor: myColors.background }]}
                            source={require('../../assets/home_main/dashboards/man_shop.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Mid */}
            <View style={{ paddingHorizontal: myWidth(4) }}>
                <Spacer paddingT={myHeight(2)} />
                {/* Let finds */}
                <Text style={styles.textFind}>Let’s Find</Text>
                <Text style={styles.textFind}>Some Foods!</Text>

                <Spacer paddingT={myHeight(2)} />
                {/* Search */}
                <View style={styles.containerTop}>
                    {/* Filter */}

                </View>

            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.background,
    },
    containerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: myWidth(4),
    },
    containerTopDelivery: {
        flexDirection: 'row',
        height: myHeight(3.76),
        width: myWidth(21),
        borderRadius: myWidth(10),
        backgroundColor: myColors.offColor4,
        overflow: 'hidden'
    },
    containerDelivery: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },


    //Text
    textLoc: {
        flex: 1,
        fontSize: myFontSize.body,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textFind: {
        fontSize: myFontSize.medium0,
        fontFamily: myFonts.heading,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },


    //Image
    imageLoc: {
        width: myHeight(2.6),
        height: myHeight(2.6),
        resizeMode: 'contain',
    },
    imageDelivery: {
        // width: myHeight(2.6),
        height: myHeight(2.15),
        resizeMode: 'contain',
        tintColor: myColors.primaryT
    }
})