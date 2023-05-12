import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Spacer, myHeight, myWidth, storage } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFontSize, myFonts, myLetSpacing } from '../../ultils/myFonts';

const startupData = [
    {
        title: 'Shop Local',
        des: 'Shop anything, anytime, anywhere!',
        image: require('../assets/startup/startup1.png')
    },
    {
        title: 'Book Rides',
        des: 'Use M-Rides to get anywhere in your city!',
        image: require('../assets/startup/startup5.png')
    },
    {
        title: 'Order Food',
        des: 'Order all your favorite cuisines & cravings!',
        image: require('../assets/startup/startup4.png')
    },
    {
        title: 'Send Parcel',
        des: 'Send parcels to anywhere in your city',
        image: require('../assets/startup/startup3.png')
    },


]

export const StartupScreen = ({ navigation }) => {
    const [i, setI] = useState(0)
    const dotArr = []
    const lenStartup = startupData.length
    const width = myWidth(100)
    const [ref, setRef] = useState(null);
    const [posX, setPosX] = useState([]);
    const [scrollTouch, setScrollTouch] = useState(false)
    const [isScrollLas, setIsScrollLas] = useState(false)

    // Loop for dots
    for (let j = 0; j < lenStartup; j++) {
        dotArr.push(<View key={j} style={[styles.containerDot, { backgroundColor: j == i ? myColors.primary : myColors.dot, }]} />)
    }

    function handleScroll(event) {
        if (scrollTouch && !isScrollLas) {
            const a = (event.nativeEvent.contentOffset.x) / width
            var getDecimal = a.toString().split(".")[1];
            if (getDecimal) {
                if (getDecimal[0] < 3 || getDecimal[0] > 7) {
                    const r = Math.round(a)
                    const pos = posX[r]
                    if (pos != undefined) {
                        setI(r)


                    }
                }
            }
        }
    }

    function onForward() {
        setScrollTouch(false)
        const pos = posX[i + 1]
        setI(i + 1)
        ref.scrollTo({
            x: pos,
            y: 0,
            animated: true,
        });
    }

    function onBack() {
        setScrollTouch(false)

        setI(i - 1)
        const pos = posX[i - 1]
        ref.scrollTo({
            x: pos,
            y: 0,
            animated: true,
        });
    }

    function scrollToLast() {
        const pos = posX[lenStartup - 1]
        if (pos) {
            setIsScrollLas(true)
            ref.scrollTo({
                x: pos,
                y: 0,
                animated: true,
            });
            setTimeout(() => setI(lenStartup - 1), 100);

        }
    }
    function onContinue() {
        storage.set('isFirstTime', false)
        if (storage.contains('isFirstTime')) {
            navigation.replace('AccountNavigator')
            return
        }
        console.log('Error!: storage On continue')
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Top --> Skip */}
            <View style={styles.containerTopSkip}>

                {i < lenStartup - 1 &&
                    <TouchableOpacity activeOpacity={0.6} onPress={scrollToLast} style={styles.containerSkip}>
                        <Text style={styles.textSkip}>Skip</Text>
                        <Spacer paddingEnd={myWidth(1)} />
                        <Image style={styles.imageGo} source={require('../assets/startup/go.png')} />
                        <Image style={[styles.imageGo, { marginStart: -myWidth(1) }]} source={require('../assets/startup/go.png')} />
                    </TouchableOpacity>
                }
            </View>

            {/* Mid */}
            <View>
                <ScrollView
                    // onScroll={handleScroll}
                    horizontal
                    onTouchStart={() => setScrollTouch(true)}
                    onScroll={handleScroll}
                    overScrollMode='never'
                    scrollEnabled={i < lenStartup - 1}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ alignItems: 'flex-end' }}
                    pagingEnabled
                    scrollEventThrottle={10}
                    ref={ref => setRef(ref)}
                >
                    {
                        startupData.map((item, i) =>
                            <View
                                onLayout={(event) => {
                                    const layout = event.nativeEvent.layout;
                                    posX[i] = layout.x;
                                    setPosX(posX);

                                }}
                                style={styles.containerMid} key={i}>
                                {/* <Image /> */}
                                <Image style={styles.imageMid} source={item.image} />
                                <Spacer paddingT={myHeight(0.8)} />
                                <Text style={styles.textTitle}> {item.title}</Text>
                                <Spacer paddingT={myHeight(0.8)} />
                                <Text style={styles.textDes}>{item.des}</Text>
                            </View>
                        )
                    }

                </ScrollView>
            </View>

            {/* Bottom * => Start Button & Change*/}
            <View style={styles.containerBottom}>
                <Spacer paddingT={myHeight(12.5)} />
                {i < lenStartup - 1 ?
                    <View style={styles.containerChange}>
                        {/* Arrow Left */}
                        <View style={{ width: myHeight(3) }}>
                            {i > 0 &&
                                <TouchableOpacity style={styles.containerGoLR} activeOpacity={0.6} onPress={() => { if (i > 0) { onBack() } }} >
                                    <Image style={styles.imageGoLR} source={require('../assets/startup/goL.png')} />
                                </TouchableOpacity>
                            }
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            {dotArr}
                        </View>

                        {/* Arrow Right */}
                        <View style={{ width: myHeight(3) }}>
                            <TouchableOpacity style={styles.containerGoLR} activeOpacity={0.6} onPress={() => { if (i < lenStartup - 1) { onForward() } }} >
                                <Image style={styles.imageGoLR} source={require('../assets/startup/goR.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <TouchableOpacity activeOpacity={0.6} onPress={onContinue} style={styles.containerStart}>
                        <Text style={styles.textStart}> Get Started</Text>
                    </TouchableOpacity>
                }
                <Spacer paddingT={myHeight(15)} />


            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: myColors.background,
        justifyContent: 'space-between'
        // paddingBottom: myHeight(8.1),
    },

    containerMid: {
        width: myWidth(100),
        alignItems: 'center',
    },
    containerCross: {
        width: myHeight(1.7),
        height: myHeight(1.7),
        borderRadius: myHeight(0.85),
        marginTop: 3,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: myColors.textL,
    },
    containerTopSkip: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingEnd: myWidth(7),
        height: myHeight(5.2),
    },
    containerSkip: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerBottom: {
        width: myWidth(100),
        // flex:1,
        // height: myHeight(10),
        // position: 'absolute',
        // zIndex: 1,
    },
    containerChange: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: myWidth(12.7),
    },

    containerDot: {
        width: myHeight(1.2),
        height: myHeight(1.2),
        borderRadius: myHeight(0.6),
        marginStart: myWidth(1.2),
    },
    containerStart: {
        backgroundColor: myColors.primaryT,
        paddingVertical: myHeight(1),
        borderRadius: myHeight(3),
        width: myWidth(42),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    containerGoLR: {
        backgroundColor: myColors.primaryT,
        padding: myHeight(1.4),
        borderRadius: myHeight(3),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },


    //Text
    textSkip: {
        fontSize: myFontSize.xxSmall,
        fontFamily: myFonts.body,
        color: myColors.primaryT,
        includeFontPadding: false,
        padding: 0,

    },
    textTitle: {
        fontSize: myFontSize.large,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        includeFontPadding: false,
        padding: 0,

    },
    textDes: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.body,
        color: myColors.text,
        includeFontPadding: false,
        padding: 0,

    },
    textStart: {
        fontSize: myFontSize.xBody,
        fontFamily: myFonts.bodyBold,
        color: myColors.background,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },




    //Image
    imageMid: {
        width: myWidth(86),
        resizeMode: 'contain',
    },
    imageGo: {
        width: myHeight(1.2),
        height: myHeight(1.2),
        resizeMode: 'contain',
    },
    imageGoLR: {
        height: myHeight(1.75),
        width: myHeight(1.75),
        resizeMode: 'contain',
    },
    imageArrow: {
        height: myHeight(5),
        width: myWidth(5),
        resizeMode: 'contain',
    },
})