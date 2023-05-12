import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native'
import { Spacer, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFontSize, myFonts, myLetSpacing } from '../../ultils/myFonts';
import { bookNow, category, dailySpecial } from './data';
import { DailySpecial } from './home.component/daily_special';
import LinearGradient from 'react-native-linear-gradient';




export const HomeScreen = ({ navigation }) => {
    const name = "MBE";
    const dotArr = []
    const [i, setI] = useState(0)
    const lenBook = bookNow.length;
    const width = myWidth(92)
    for (let j = 0; j < lenBook; j++) {
        dotArr.push(<View key={j} style={[styles.containerDot, { backgroundColor: j == i ? myColors.text : myColors.dot, }]} />)
    }

    function handleScroll(event) {

        const a = (event.nativeEvent.contentOffset.x) / width
        var getDecimal = a.toString().split(".")[1];
        if (getDecimal) {
            if (getDecimal[0] < 5 || getDecimal[0] > 5) {
                const r = Math.round(a)
                setI(r)
                // const pos = posX[r]
                // if (pos != undefined) {
                //     setI(r)


                // }
            }
        }

    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.container}>
                <Spacer paddingT={myHeight(1.8)} />

                {/* Morning & Loca */}
                <View style={{ paddingHorizontal: myWidth(6.75) }}>
                    <Text style={styles.textGoodM}>{`Good Morning ${name}!`}</Text>
                    <Spacer paddingT={myHeight(0.4)} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.imageLoc} source={require('../assets/home_main/location.png')} />
                        <Text style={styles.textLoc}>  Work - 100 Dynamic Drive</Text>
                    </View>
                </View>


                <Spacer paddingT={myHeight(2)} />
                {/* Category */}
                <View style={styles.containerCategory}>
                    {category.map((cat, index) =>
                        <TouchableOpacity key={index} onPress={null} style={{ paddingTop: myHeight(2.2), flexBasis: '23.5%', }} activeOpacity={0.8}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={styles.containerEachCate}>
                                        <Image style={styles.imageCate} source={cat.image} />
                                    </View>
                                    <Spacer paddingT={myHeight(0.3)} />
                                    <Text style={styles.textCat}>{cat.name}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                </View>
                <Spacer paddingT={myHeight(3.44)} />

                {/* Book Now */}
                <LinearGradient style={styles.containerBookNow} colors={['#FFEBCD', 'rgba(255, 235, 205, 0)']} >
                    <ScrollView scrollEventThrottle={1} onScroll={handleScroll} style={{ width: myWidth(92) }} pagingEnabled horizontal showsHorizontalScrollIndicator={false}>
                        {
                            bookNow.map((item, ind) =>
                                <View key={ind} style={{ width: myWidth(92) - 0.5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={styles.containerBookNowText}>
                                        <Text numberOfLines={2} style={styles.textBookNowName}>{item.name}</Text>
                                        <Spacer paddingT={myHeight(3.2)} />
                                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'baseline' }} activeOpacity={0.6} onPress={() => null}>
                                            <Text style={styles.textBookNow}>Book Now    </Text>
                                            <Image style={styles.imageArrow} source={require('../assets/home_main/arrow.png')} />
                                        </TouchableOpacity>
                                    </View>
                                    <Image style={styles.imageMan} source={require('../assets/home_main/man.png')} />
                                </View>
                            )
                        }
                    </ScrollView>
                    {/* Dot */}
                    <View style={{ position: 'absolute', zIndex: 1, left: myWidth(4.2), bottom: myHeight(1.6), flexDirection: 'row' }}>
                        {dotArr}
                    </View>
                </LinearGradient>


                <Spacer paddingT={myHeight(2.6)} />
                {/* Daily Special */}
                <Text style={styles.textDailyS}>Daily Special</Text>
                <Spacer paddingT={myHeight(1.15)} />
                {/* Row */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: myWidth(3.72) }}>
                    <View style={styles.containerDailyS}>
                        {dailySpecial.map((item, i) =>
                            <TouchableOpacity key={i} activeOpacity={0.6} >
                                <DailySpecial item={item} />
                            </TouchableOpacity>
                        )}
                    </View>

                </ScrollView>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.background
    },
    containerCategory: {
        flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-end',
        backgroundColor: myColors.background,
    },
    containerEachCate: {
        padding: myHeight(1.4),
        backgroundColor: myColors.primaryL,
        borderRadius: myHeight(5),

    },
    containerBookNow: {
        // width: myWidth(92),
        alignSelf: 'center', height: myHeight(19),
        borderRadius: myWidth(3),
        borderWidth: 0.5,
        overflow: 'hidden',
        borderColor: myColors.textL4,
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



    //Text
    textGoodM: {
        fontSize: myFontSize.xBody,
        fontFamily: myFonts.heading,
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
        fontSize: myFontSize.xxSmall,
        fontFamily: myFonts.heading,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textBookNowName: {
        fontSize: myFontSize.xBody,
        fontFamily: myFonts.heading,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textBookNow: {
        fontSize: myFontSize.xxSmall,
        fontFamily: myFonts.heading,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textDailyS: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.heading,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        paddingStart: myWidth(4.6),
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
        // height: myHeight(5.37),
        // width: myWidth(11),
        // resizeMode: 'stretch',

        height: myHeight(5.37),
        width: myHeight(5.37),
        resizeMode: 'cover',
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

})