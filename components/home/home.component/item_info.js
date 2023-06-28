import React from "react"
import { Text, View, Image, StyleSheet } from "react-native"
import { Spacer, myHeight, myWidth } from "../../common"
import { myFontSize, myFonts, myLetSpacing } from "../../../ultils/myFonts"
import { myColors } from "../../../ultils/myColors"


export const ItemInfo = ({ item }) => {
    return (

        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingEnd: myWidth(3),
            backgroundColor: myColors.background,
            elevation: 5, marginVertical: myHeight(1),
            borderRadius: myWidth(2),
            borderWidth: myHeight(0.15),
            borderColor: myColors.divider
        }} >

            <Image
                style={{
                    width: myHeight(10),
                    height: myHeight(10),
                    resizeMode: 'contain',
                }}
                source={item.images[0]}
            />
            <Spacer paddingEnd={myWidth(3)} />

            <View style={{ flex: 1 }}>
                {/* fIRST lINE */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }} >
                    <Text numberOfLines={1}
                        style={[
                            styles.textCommon,
                            {
                                flex: 1,
                                fontSize: myFontSize.xBody,
                                fontFamily: myFonts.heading,
                            },
                        ]}>
                        {item?.name}
                    </Text>
                    <Text numberOfLines={1}
                        style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.xBody,
                                fontFamily: myFonts.heading,
                            },
                        ]}>
                        {'Dill'}
                    </Text>
                </View>
                <Spacer paddingT={myHeight(0.5)} />
                {/* Second Line */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* Price */}
                    <Text numberOfLines={1}
                        style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.xBody,
                                fontFamily: myFonts.bodyBold,
                                color: myColors.primaryT,
                                borderRadius: 100,
                                // paddingHorizontal: myWidth(2.3),
                                // paddingVertical: myHeight(0.15),
                                // backgroundColor: myColors.primary
                            },
                        ]}>
                        {item?.price}
                    </Text>

                    <Spacer paddingEnd={myWidth(2.5)} />
                    {/* Star */}
                    <Image
                        style={{
                            width: myHeight(2.2),
                            height: myHeight(2.2),
                            resizeMode: 'contain',
                        }}
                        source={require('../../assets/home_main/home/star.png')}
                    />
                    <Spacer paddingEnd={myWidth(1.2)} />
                    {/* Rating */}
                    <Text
                        numberOfLines={1}
                        style={[
                            styles.textCommon,
                            {
                                flex: 1,
                                fontSize: myFontSize.body2,
                                fontFamily: myFonts.heading,
                                color: myColors.text3,
                            },
                        ]}>
                        {`${item.rating}  `}
                    </Text>


                    <Text numberOfLines={1}
                        style={[
                            styles.textCommon,
                            {
                                fontSize: myFontSize.xxSmall,
                                fontFamily: myFonts.bodyBold,
                                color: myColors.text,

                            },
                        ]}>
                        {'Restaurant Name'}
                    </Text>
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.background,
    },

    //Text
    textCommon: {
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
});
