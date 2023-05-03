import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Spacer, myHeight, myWidth } from '../common';
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

export const StartupScreen = () => {
    const [i, setI] = useState(0)
    const dotArr = []
    const lenStartup = startupData.length
    const width = myWidth(100)
    const [ref, setRef] = useState(null);
    const [posX, setPosX] = useState([]);
    // Loop for dots
    for (let j = 0; j < lenStartup; j++) {
        dotArr.push(<View key={j} style={[styles.containerDot, { backgroundColor: j == i ? myColors.primary : myColors.dot, }]} />)
    }

    function handleScroll(event) {
        const a = (event.nativeEvent.contentOffset.x) / width
        const pos = posX[a]
        console.log(Math.round(a))
        if (pos != undefined) {
            setI(a)
            ref.scrollTo({
                x: pos,
                y: 0,
                animated: true,
            });
        }
    }
    function onForward() {
        const pos = posX[i + 1]
        setI(i + 1)
        ref.scrollTo({
            x: pos,
            y: 0,
            animated: true,
        });
    }
    function onBack() {
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

    return (
        <View style={styles.container}>
            {/* Top --> Skip */}
            {i < lenStartup - 1 &&
                <TouchableOpacity activeOpacity={0.6} onPress={() => null} style={styles.containerSkip}>
                    <Text style={styles.textSkip}>Skip</Text>
                    <Spacer paddingEnd={myWidth(1)} />
                    <View style={styles.containerCross}>
                        <Image style={styles.imageCross} source={require('../assets/startup/cross.png')} />
                    </View>

                </TouchableOpacity>
            }

            {/* Mid */}
            <View>
                <ScrollView
                    // onScroll={handleScroll}
                    horizontal
                    scrollEnabled={false}
                    overScrollMode='never'
                    // scrollEnabled={i < lenStartup - 1}
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
                        <TouchableOpacity activeOpacity={0.6} onPress={() => { if (i > 0) { onBack() } }} >
                            <Image style={styles.imageArrow} source={require('../assets/startup/arrowL.png')} />
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row' }}>
                            {dotArr}
                        </View>

                        <TouchableOpacity activeOpacity={0.6} onPress={() => { if (i < lenStartup - 1) { onForward() } }} >
                            <Image style={styles.imageArrow} source={require('../assets/startup/arrowR.png')} />
                        </TouchableOpacity>
                    </View>
                    :
                    <TouchableOpacity activeOpacity={0.6} onPress={() => null} style={styles.containerStart}>
                        <Text style={styles.textStart}>Get Started</Text>
                    </TouchableOpacity>
                }

            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: myColors.background,
        paddingBottom: myHeight(8.1),
    },
    containerSkip: {
        flexDirection: 'row',
        alignItems: 'center',
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
    containerSkip: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'absolute',
        top: myHeight(1.7),
        end: myWidth(9.3),
        zIndex: 1,
    },
    containerBottom: {
        width: myWidth(100),
        position: 'absolute',
        bottom: myHeight(7),
        zIndex: 1,
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