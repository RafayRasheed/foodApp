import React from "react"
import { Text, View, Image, StyleSheet } from "react-native"
import { Spacer, myHeight, myWidth } from "../../common"
import { myFontSize, myFonts, myLetSpacing } from "../../../ultils/myFonts"
import { myColors } from "../../../ultils/myColors"
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated"

export const Rating = ({ icon, name, starI }) => {
    const [starI, setStarI] = useState(starI)

    return (
        <TouchableOpacity activeOpacity={1} onPress={() => null}
            style={{
                width: '100%', height: '100%', position: 'absolute',
                backgroundColor: '#00000050', justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Animated.View
                entering={ZoomIn.duration(200)}
                exiting={ZoomOut.duration(50)}
                style={{
                    paddingHorizontal: myWidth(8), width: myWidth(85),
                    backgroundColor: myColors.background, borderRadius: myWidth(6)
                }}>
                {/* Rate Content */}
                {/* <Spacer paddingT={myHeight(1.5)} />

            <Text numberOfLines={2} style={[styles.textCommon, {
                fontSize: myFontSize.medium,
                fontFamily: myFonts.bodyBold,
                alignSelf: 'center'

            }]}>Rate Us</Text> */}

                {/* <Spacer paddingT={myHeight(3)} /> */}
                <Image
                    style={{
                        width: myHeight(12),
                        height: myHeight(12),
                        resizeMode: 'contain',
                        borderRadius: myHeight(10),
                        borderWidth: myHeight(0.15),
                        marginTop: -myHeight(5),
                        borderColor: myColors.primaryT,
                        alignSelf: 'center',
                    }}
                    source={icon}
                />
                <Spacer paddingT={myHeight(0.5)} />
                <Text
                    numberOfLines={1}
                    style={[
                        styles.textCommon,
                        {
                            alignSelf: 'center',
                            paddingHorizontal: myWidth(4),
                            fontSize: myFontSize.medium,
                            fontFamily: myFonts.heading,
                        },
                    ]}>
                    {name}

                </Text>
                <Spacer paddingT={myHeight(3)} />

                {/* All Stars */}
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                    <TouchableOpacity activeOpacity={0.9} style={{ paddingHorizontal: myWidth(2.5) }} onPress={() => setStarI(0)}>
                        <Image source={require('../../assets/home_main/home/star.png')}
                            style={[styles.star,
                            {
                                tintColor: starI >= 0 ? myColors.star : myColors.offColor
                            }]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={{ paddingHorizontal: myWidth(2.5) }} onPress={() => setStarI(1)}>
                        <Image source={require('../../assets/home_main/home/star.png')}
                            style={[styles.star,
                            {
                                tintColor: starI >= 1 ? myColors.star : myColors.offColor
                            }]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={{ paddingHorizontal: myWidth(2.5) }} onPress={() => setStarI(2)}>
                        <Image source={require('../../assets/home_main/home/star.png')}
                            style={[styles.star,
                            {
                                tintColor: starI >= 2 ? myColors.star : myColors.offColor
                            }]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={{ paddingHorizontal: myWidth(2.5) }} onPress={() => setStarI(3)}>
                        <Image source={require('../../assets/home_main/home/star.png')}
                            style={[styles.star,
                            {
                                tintColor: starI >= 3 ? myColors.star : myColors.offColor
                            }]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={{ paddingHorizontal: myWidth(2.5) }} onPress={() => setStarI(4)}>
                        <Image source={require('../../assets/home_main/home/star.png')}
                            style={[styles.star,
                            {
                                tintColor: starI >= 4 ? myColors.star : myColors.offColor
                            }]}
                        />
                    </TouchableOpacity>
                </View>

                <Spacer paddingT={myHeight(3)} />
                {/* Review Input */}
                <TextInput placeholder="Write your review"
                    multiline={true}
                    autoCorrect={false}
                    numberOfLines={2}
                    placeholderTextColor={myColors.textL4}
                    selectionColor={myColors.primary}
                    cursorColor={myColors.primaryT}
                    value={review} onChangeText={setReview}
                    style={{
                        height: myHeight(11),
                        textAlignVertical: 'top',
                        borderRadius: myWidth(2),
                        width: '100%',
                        alignSelf: 'center',
                        paddingBottom: ios ? myHeight(1.2) : myHeight(100) > 600 ? myHeight(0.8) : myHeight(0.1),
                        paddingTop: ios ? myHeight(1.2) : myHeight(100) > 600 ? myHeight(1.2) : myHeight(0.1),
                        fontSize: myFontSize.body,
                        color: myColors.text,
                        includeFontPadding: false,
                        fontFamily: myFonts.body,
                        paddingHorizontal: myWidth(3),
                        backgroundColor: '#00000010'
                    }}
                />

                <Spacer paddingT={myHeight(2.5)} />
                {/* <TouchableOpacity activeOpacity={0.8} onPress={null}
                style={{
                    backgroundColor: myColors.primaryT,
                    borderRadius: myHeight(1),
                    paddingVertical: myHeight(1),
                    alignItems: 'center',
                    width: '100%', justifyContent: 'center',
                }}>

                <Text style={[
                    styles.textCommon,
                    {
                        fontSize: myFontSize.body,
                        fontFamily: myFonts.heading,
                        color: myColors.background,
                    }
                ]}>Done</Text>

            </TouchableOpacity> */}
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => {
                        setRatinModal(false)

                    }}>
                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.body4,
                                fontFamily: myFonts.heading,
                                color: myColors.primaryT,
                                paddingEnd: myWidth(5)
                            }
                        ]}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => {
                        setRatinModal(false)
                    }}>
                        <Text style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.body4,
                                fontFamily: myFonts.heading,
                                color: myColors.primaryT,
                            }
                        ]}>Done</Text>
                    </TouchableOpacity>

                </View>
                <Spacer paddingT={myHeight(4)} />

            </Animated.View>

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    //Text
    textCommon: {
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
});