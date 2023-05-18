import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text } from 'react-native';
import { myColors } from '../../../ultils/myColors';
import { Spacer, ios, myHeight, myWidth } from '../../common';
import { myFontSize } from '../../../ultils/myFonts';
import { myFonts } from '../../../ultils/myFonts';
import { myLetSpacing } from '../../../ultils/myFonts';


export const FoodDashboard = ({ navigation }) => {
    const [i, setI] = useState(0)
    const [search, setSearch] = useState(null)

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

                <Spacer paddingT={myHeight(2.2)} />
                {/* Search */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.containerSearchPortion}>
                        <Image style={styles.imageSearch} source={require('../../assets/home_main/dashboards/search.png')} />
                        <Spacer paddingEnd={myWidth(3.5)} />
                        <TextInput placeholder="Search Any Item"
                            placeholderTextColor={myColors.textL5}
                            selectionColor={myColors.text}
                            style={styles.containerSearch}
                            cursorColor={myColors.primaryT}
                            value={search} onChangeText={setSearch}
                        // value={search} onChangeText={(val) => null}
                        />
                    </View>
                    <Spacer paddingEnd={myWidth(3.7)} />
                    {/* Filter */}
                    <TouchableOpacity onPress={() => null} activeOpacity={0.6}
                        style={styles.containerFilter}>
                        <Image style={styles.imageFilter}
                            source={require('../../assets/home_main/dashboards/filter.png')} />
                    </TouchableOpacity>


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
    containerFilter: {
        height: myHeight(4.6),
        width: myWidth(10),
        justifyContent: 'center',
        alignItems: 'center',
        // paddingVertical: myHeight(1.6),
        // paddingHorizontal: myWidth(2.8),
        backgroundColor: myColors.primaryT,
        borderRadius: myWidth(2),

    },
    containerSearchPortion: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: myWidth(3),
        paddingVertical: myHeight(0.2),
        backgroundColor: myColors.offColor5,
        borderRadius: myWidth(3.5),
    },
    containerSearch: {
        flex: 1,
        textAlignVertical: 'center',
        paddingVertical: ios ? myHeight(1.2) : myHeight(100) > 600 ? myHeight(0.8) : myHeight(0.1),
        fontSize: myFontSize.xxSmall,
        color: myColors.text,
        includeFontPadding: false,
        fontFamily: myFonts.bodyBold,
        // lineHeight: 0,
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
    },
    imageFilter: {
        width: myHeight(2.15),
        height: myHeight(1.6),
        resizeMode: 'contain',
    },
    imageSearch: {
        height: myHeight(2.15),
        width: myHeight(2.15),
        resizeMode: 'contain',
        tintColor: myColors.textL5
    },
})