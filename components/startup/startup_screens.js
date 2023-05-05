import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Spacer, myHeight, myWidth, storage } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFontSize, myFonts } from '../../ultils/myFonts';

const startupData = [
    {
        title: 'Shop Local',
        des: 'Shop anything, anytime, anywhere',
        image: require('../assets/startup/startup1.png')
    },
    {
        title: 'Book Rides',
        des: 'Use M-Rides to get anywhere in your city!',
        image: require('../assets/startup/startup2.png')
    },
    {
        title: 'Order Food',
        des: 'Order all your favorites cuisines & cravings!',
        image: require('../assets/startup/startup3.png')
    },
    {
        title: 'Send Parcel',
        des: 'Send parcels to anywhere in your city',
        image: require('../assets/startup/startup4.png')
    },
    {
        title: '',
        des: 'Earn coins from all services to use in app!',
        image: require('../assets/startup/startup5.png')
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
    // Loop for dots
    for (let j = 0; j < lenStartup; j++) {
        dotArr.push(<View key={j} style={[styles.containerDot, { backgroundColor: j == i ? myColors.primary : myColors.dot, }]} />)
    }

    function handleScroll(event) {
        if (scrollTouch) {
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

    useEffect(() => {
        console.log(i)
    }, [i])

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
                    <TouchableOpacity activeOpacity={0.6} onPress={onContinue} style={styles.containerSkip}>

                        <Text style={styles.textSkip}>Skip</Text>
                        <Spacer paddingEnd={myWidth(1)} />
                        <View style={styles.containerCross}>
                            <Image style={styles.imageCross} source={require('../assets/startup/cross.png')} />
                        </View>


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
                {i < lenStartup - 1 ?
                    <View style={styles.containerChange}>
                        {/* Arrow Left */}
                        <TouchableOpacity style={{ width: myWidth(6), }} activeOpacity={0.6} onPress={() => { if (i > 0) { onBack() } }} >
                            {i > 0 && <Image style={styles.imageArrow} source={require('../assets/startup/arrowL.png')} />}
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row' }}>
                            {dotArr}
                        </View>

                        {/* Arrow Right */}
                        <TouchableOpacity style={{ width: myWidth(6), }} activeOpacity={0.6} onPress={() => { if (i < lenStartup - 1) { onForward() } }} >
                            <Image style={styles.imageArrow} source={require('../assets/startup/arrowR.png')} />
                        </TouchableOpacity>
                    </View>
                    :
                    <TouchableOpacity activeOpacity={0.6} onPress={() => null} style={styles.containerStart}>
                        <Text style={styles.textStart} onPress={onContinue}>Get Started</Text>
                    </TouchableOpacity>
                }

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
        paddingEnd: myWidth(9.3),
        height: myHeight(5.2),


    },
    containerSkip: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerBottom: {
        width: myWidth(100),
        height: myHeight(10),
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
        backgroundColor: myColors.primary,
        paddingVertical: myHeight(1),
        borderRadius: myHeight(3),
        width: myWidth(42),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',

    },




    //Text
    textSkip: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.body,
        color: myColors.textL
    },
    textTitle: {
        fontSize: myFontSize.large,
        fontFamily: myFonts.body,
        color: myColors.text
    },
    textDes: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.body,
        color: myColors.text
    },
    textStart: {
        fontSize: myFontSize.xBody,
        fontFamily: myFonts.body,
        color: myColors.background
    },




    //Image
    imageMid: {
        width: myWidth(86),
        resizeMode: 'contain',
    },
    imageCross: {
        width: myHeight(0.75),
        height: myHeight(0.75),
        resizeMode: 'contain',
    },
    imageArrow: {
        height: myHeight(5),
        width: myWidth(5),
        resizeMode: 'contain',
    },
})