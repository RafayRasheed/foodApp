import React, { useState, useRef } from "react";
import { Text, View, StatusBar, SafeAreaView, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { myHeight, myWidth, Spacer } from "../common";
import { myFontSize, myFonts } from "../../ultils/myFonts";
import { myColors } from "../../ultils/myColors";


const onboardItems = [
    {
        key: 'first',
        image: require('../assets/onboard/maps.png'),
        title: 'Nearby restaurants',
        text: 'You dont have to go far kjil you to find a good restaurant, we have provided all the restaurants that is near you',
    },
    {
        key: 'second',
        image: require('../assets/onboard/order.png'),
        title: 'Select the Favorites Menu',
        text: 'Now eat well, dont leave the house,You can choose your favorite food only with one click',
    },
    {
        key: 'third',
        image: require('../assets/onboard/food.png'),
        title: 'Good food at a cheap price',
        text: 'You can eat at expensive restaurants with affordable price',
    },
]

// Screen
const Content = ({ item, mykey }) => {

    return (
        <View key={mykey} style={{ width: myWidth(100), alignItems: 'center' }}>
            <View style={{ width: myWidth(77), height: myHeight(37), alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ maxWidth: myWidth(77), maxHeight: myHeight(37), paddingHorizontal: 40 }} resizeMode='contain' source={item.image} />
            </View>
            <Spacer paddingT={myHeight(2)} />
            <View style={{ alignItems: 'center' }}>
                <Text style={{
                    paddingHorizontal: myWidth(8), fontSize: myFontSize.xLarge,
                    textAlign: 'center', fontFamily: myFonts.heading,
                    color: myColors.text
                }}>{item.title}</Text>
                <Spacer paddingT={myHeight(2)} />
                <Text style={{
                    width: myWidth(76), fontSize: myFontSize.small,
                    fontFamily: myFonts.body, textAlign: 'center',
                    color: myColors.text
                }}>{item.text}</Text>
            </View>
            <Spacer paddingT={myHeight(13)} />
        </View>
    )
}

export const OnboardScreen = ({ navigation }) => {
    const [i, setI] = useState(0)
    const dotArr = []
    const len = onboardItems.length
    const [ref, setRef] = useState(null);
    const [posX, setPosX] = useState([]);
    const [first, setFirst] = useState(true)

    for (let j = 0; j < len; j++) {
        dotArr.push(<View key={j} style={{
            backgroundColor: j == i ? myColors.primary : myColors.dot,
            height: myHeight(1.25), width: myHeight(1.25), margin: 5, borderRadius: 10
        }} />)
    }

    function Start() {
        const pos = posX[i]
        ref.scrollTo({
            x: pos,
            y: 0,
            animated: false,
        });
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

    return (
        <SafeAreaView style={styles.container}>
            {/* <Content item={onboardItems[i]} mykey={i}/> */}

            <ScrollView ref={ref => setRef(ref)}
                contentContainerStyle={{ alignItems: 'flex-end' }} horizontal
                showsHorizontalScrollIndicator={false}>
                {
                    onboardItems.map((item, ind) =>
                        <View
                            key={ind}
                            onLayout={(event) => {
                                const layout = event.nativeEvent.layout;
                                posX[ind] = layout.x;
                                setPosX(posX);
                                if (0 == ind && first) {
                                    setFirst(false)
                                    Start()
                                }
                            }
                            }>


                            <Content item={item} mykey={item.key} />
                        </View>
                    )
                }
            </ScrollView>


            {/* Bottom , */}
            <View style={styles.bottom}>
                {/* Skip  */}
                <TouchableOpacity onPress={() => i < len - 1 ? navigation.replace('AccountNavigator') : null} style={{ justifyContent: 'center', minWidth: myWidth(9) }}>
                    {i < len - 1 && <Text style={{
                        fontSize: myFontSize.medium, fontFamily: myFonts.body,
                        color: myColors.text
                    }}>Skip</Text>}
                </TouchableOpacity>
                {/* Dots */}
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    {dotArr}
                </View>
                {/* Arrow */}
                <TouchableOpacity
                    onPress={() => i < len - 1 ? onForward() : navigation.replace('AccountNavigator')}>
                    <Image style={{ width: myWidth(3.7), height: myWidth(3.7), resizeMode: 'contain' }} source={require('../assets/onboard/arrow.png')} />
                </TouchableOpacity>
            </View>

            <Spacer paddingT={myHeight(5.4)} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.background,
        justifyContent: 'flex-end',
    },
    bottom: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        paddingHorizontal: 23
    }

})