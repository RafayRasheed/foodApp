import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { myColors } from '../../../../ultils/myColors'
import { Spacer, myHeight, myWidth } from '../../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../../ultils/myFonts'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export const RideScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
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
            <SafeAreaView style={{ positions: 'absolute', top: 0, }}>
                <Spacer paddingT={myHeight(0.7)} />
                <TouchableOpacity style={styles.containerImageBack}
                    onPress={() => navigation.goBack()} activeOpacity={0.7}>
                    <Image style={styles.imageBack} source={require('../../../assets/home_main/dashboards/back2.png')} />
                </TouchableOpacity>
            </SafeAreaView>

            {/* Bottom Start Container */}
            <View style={styles.containerBoStart}>
                <Spacer paddingT={myHeight(3.2)} />
                <Text style={styles.textWelcome}>Hi, MBE</Text>
                <Text style={styles.textDropLoc}>Hope you’re having a great day!</Text>

                <Spacer paddingT={myHeight(2.1)} />

                <TouchableOpacity style={styles.containerDropLoc}
                    onPress={() => navigation.navigate('DestinationScreen')} activeOpacity={0.7}>
                    <Text style={styles.textDropLoc}>Enter your Drop off Location</Text>
                </TouchableOpacity>

                <Spacer paddingT={myHeight(4)} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // ...StyleSheet.absoluteFillObject,
        flex: 1,
        backgroundColor: myColors.primary,

    },
    containerBoStart: {
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        width: '100%',
        borderTopStartRadius: myWidth(2),
        borderTopEndRadius: myWidth(2),
        backgroundColor: myColors.background,
        paddingHorizontal: myWidth(4),
    },
    containerDropLoc: {
        borderWidth: myHeight(0.1),
        borderColor: myColors.primaryT,
        padding: myHeight(1),

    },
    containerImageBack: {
        height: myHeight(5),
        width: myHeight(7),
        alignItems: 'center',
        justifyContent: 'center',

    },


    //Text
    textWelcome: {
        fontSize: myFontSize.xBody,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },
    textDropLoc: {
        fontSize: myFontSize.xxSmall,
        fontFamily: myFonts.body,
        color: myColors.text,
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