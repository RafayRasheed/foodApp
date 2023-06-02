import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { myColors } from '../../../../ultils/myColors'
import { Spacer, myHeight, myWidth } from '../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../ultils/myFonts'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export const LocationFromMap = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={{ backgroundColor: myColors.primaryT }}></SafeAreaView>
            <SafeAreaView style={styles.container}>
                <MapView
                    zoomEnabled
                    style={{
                        ...StyleSheet.absoluteFillObject,
                    }}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />


                {/* Bottom Start Container */}
                <View style={styles.containerBoStart}>
                    <Spacer paddingT={myHeight(1.5)} />
                    <Text style={styles.textWelcome}>Set your address spot</Text>
                    <Spacer paddingT={myHeight(1.5)} />

                    <View style={styles.containerDivider} />
                    <Spacer paddingT={myHeight(2.5)} />

                    <TouchableOpacity style={styles.containerConfirmLoc}
                        onPress={() => navigation.navigate('RideHome')} activeOpacity={0.7}>
                        <Text style={styles.textConLoc}>Confirm Location</Text>
                    </TouchableOpacity>

                    <Spacer paddingT={myHeight(4)} />

                </View>
                <View style={{ position: 'absolute' }}>
                    <Spacer paddingT={myHeight(0.7)} />
                    <TouchableOpacity style={{
                        height: myHeight(5),
                        width: myHeight(7),
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                        onPress={() => navigation.goBack()} activeOpacity={0.7}>
                        <Image style={{
                            height: myHeight(3),
                            width: myHeight(3) * 1.4,
                            resizeMode: "contain",
                            tintColor: myColors.text
                        }} source={require('../../../assets/home_main/dashboards/back2.png')} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerBoStart: {
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        width: '100%',
        borderTopStartRadius: myWidth(2.5),
        borderTopEndRadius: myWidth(2.5),
        backgroundColor: myColors.background,
        paddingHorizontal: myWidth(4),
    },
    containerConfirmLoc: {
        backgroundColor: myColors.primaryT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: myHeight(1.2)

    },
    containerImageBack: {
        height: myHeight(5),
        width: myHeight(7),
        alignItems: 'center',
        justifyContent: 'center',

    },
    containerDivider: {
        borderTopWidth: myHeight(0.1),
        borderColor: myColors.offColor2
    },


    //Text
    textWelcome: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.heading,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textConLoc: {
        fontSize: myFontSize.body2,
        fontFamily: myFonts.heading,
        color: myColors.background,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },


    //Image
    imageBack: {
        height: myHeight(3),
        width: myHeight(3) * 1.4,
        resizeMode: "contain",
        tintColor: myColors.text
    }


})