import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image, View, Text, FlatList, Modal } from 'react-native'
import { Spacer, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFontSize, myFonts, myLetSpacing } from '../../ultils/myFonts';
import { bookNow, category, dailySpecial, nearDrivers, notifications, rewards } from './home_data';
import { DailySpecial } from './home.component/daily_special';
import LinearGradient from 'react-native-linear-gradient';




export const HomeScreen = ({ navigation }) => {
    const name = "MBE";
    const dotArr = []
    const [notificationVisible, setNotificatonVisible] = useState(false)
    const [notificationExpand, setNotificatonExpand] = useState(false)
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
            }
        }

    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.container}>

                <Spacer paddingT={myHeight(3)} />

                {/* Morning & Loca */}
                <View style={{ paddingHorizontal: myWidth(6.75) }}>
                    <Text style={styles.textGoodM}>{`Good Morning ${name}!`}</Text>
                    {/* <Spacer paddingT={myHeight(0.4)} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.imageLoc} source={require('../assets/home_main/location.png')} />
                        <Text style={styles.textLoc}>  Work - 100 Dynamic Drive</Text>
                    </View> */}
                </View>

                <Spacer paddingT={myHeight(1)} />

                {/* Category */}
                <View style={styles.containerCategory}>
                    {category.map((cat, index) =>
                        <TouchableOpacity key={index} onPress={null} style={{ paddingTop: myHeight(2.5), flexBasis: '23.5%', }} activeOpacity={0.8}>
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
                <Spacer paddingT={myHeight(4.44)} />

                {/* Book Now */}
                <View style={styles.containerTry}>
                    <LinearGradient style={styles.containerBookNow} colors={['#FFEBCD', 'rgba(255, 235, 205, 0)']} >
                        <ScrollView scrollEventThrottle={1} onScroll={handleScroll} style={{ width: myWidth(92) }} pagingEnabled horizontal showsHorizontalScrollIndicator={false}>
                            {
                                bookNow.map((item, ind) =>
                                    <View key={ind} style={{ width: myWidth(92) - 0, flexDirection: 'row', justifyContent: 'space-between' }}>
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
                </View>


                <Spacer paddingT={myHeight(3.5)} />
                {/* Daily Special */}
                <View style={{ paddingHorizontal: myWidth(4), alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.textHeading}>Daily Special</Text>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => null}>
                        <Text style={[styles.textHeading, { color: myColors.primaryT }]}>See all</Text>
                    </TouchableOpacity>
                </View>

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

                {/* Rewards */}
                <View style={{ paddingHorizontal: myWidth(4) }}>
                    <Spacer paddingT={myHeight(3)} />
                    <Text style={styles.textHeading}>Exclusive Reward</Text>
                    <Spacer paddingT={myHeight(1.15)} />
                    {rewards.map((item, i) =>
                        <View key={i}>

                            <View style={styles.containerReward}>
                                <Image style={styles.imageSpeaker} source={require('../assets/home_main/speaker.png')} />
                                <Spacer paddingEnd={myWidth(3)} />
                                <Text numberOfLines={1} style={styles.textRewardTitle}>{item.title}</Text>
                                <TouchableOpacity activeOpacity={0.6} onPress={() => null}>
                                    <Spacer paddingT={myHeight(2.15)} />
                                    <Image style={styles.imageGoReward} source={require('../assets/home_main/go.png')} />
                                    <Spacer paddingT={myHeight(2.15)} />
                                </TouchableOpacity>
                            </View>
                            <Spacer paddingT={myHeight(1.15)} />

                        </View>
                    )}
                </View>

                {/* Near Drivers */}
                <View style={{ paddingHorizontal: myWidth(4) }}>
                    <Spacer paddingT={myHeight(3)} />
                    <Text style={styles.textHeading}>Nearby Drivers</Text>
                    <Spacer paddingT={myHeight(0.15)} />
                    {nearDrivers.map((item, i) =>
                        <View key={i}>
                            {i != 0 && <View style={{ borderColor: myColors.textL4, borderTopWidth: myHeight(0.1) }} />}
                            <TouchableOpacity activeOpacity={0.6} onPress={() => null}
                                style={styles.containerNearDriver}>
                                <Image style={styles.imageDriver} source={item.image} />
                                <Spacer paddingEnd={myWidth(3)} />
                                <View style={{ flex: 1 }}>
                                    <Text numberOfLines={1} style={styles.textDriverName}>{item.name}</Text>
                                    <Text numberOfLines={1} style={styles.textDriverTime}>{item.time}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                    {/* <ScrollView bounces={false} horizontal contentContainerStyle={{ width: '100%' }}>

                        <FlatList
                            data={nearDrivers}
                            ItemSeparatorComponent={() => (
                                <View style={{ borderColor: myColors.textL4, borderTopWidth: myHeight(0.1) }} />
                            )}

                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity activeOpacity={0.6} onPress={() => null}
                                        style={styles.containerNearDriver}>
                                        <Image style={styles.imageDriver} source={item.image} />
                                        <Spacer paddingEnd={myWidth(3)} />
                                        <View style={{ flex: 1 }}>
                                            <Text numberOfLines={1} style={styles.textDriverName}>{item.name}</Text>
                                            <Text numberOfLines={1} style={styles.textDriverTime}>{item.time}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                            }
                            keyExtractor={item => item.name}
                        />
                    </ScrollView> */}

                </View>
            </ScrollView>
            {/* Notification Section */}

            <View style={styles.containerNotification}>

                <TouchableOpacity activeOpacity={0.6} onPress={() => null}>
                    <Spacer paddingT={myHeight(0.5)} />
                    <Image style={[styles.imageUp, notificationExpand && { transform: [{ rotate: '180deg' }] }]} source={require('../assets/home_main/up.png')} />
                    <Spacer paddingT={myHeight(0.5)} />
                </TouchableOpacity>
                {
                    notifications.map((item, i) =>
                        <View>
                            <Text>{item.estimateTime}</Text>
                        </View>
                    )
                }
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: myColors.background
    },
    containerCategory: {
        flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-end',
        backgroundColor: myColors.background,

    },
    containerEachCate: {
        padding: myHeight(1.4),
        borderRadius: myHeight(5),
        backgroundColor: myColors.primaryL,
        elevation: 5,
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
        width: '100%',
        height: 200,
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        borderTopStartRadius: myWidth(6),
        borderTopEndRadius: myWidth(6),
    },



    //Text
    textGoodM: {
        fontSize: myFontSize.xBody,
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
        fontSize: myFontSize.xxSmall,
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
        fontSize: myFontSize.body,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
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