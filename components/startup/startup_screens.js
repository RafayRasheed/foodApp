import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { myHeight } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFonts } from '../../ultils/myFonts';
import { RFValue } from 'react-native-responsive-fontsize';

export const StartupScreen = () => {
    return (
        <View style={styles.container}>
            {/* Top --> Skip */}
            <View>
                <Text style={styles.textSkip}>Skip</Text>
                {/* <Image /> */}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: myColors.background,
        // paddingTop: myHeight(4.3),
        paddingBottom: myHeight(8.1),
    },
    containerSkip: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    //Text
    textSkip: {
        fontSize: RFValue(15),
        fontFamily: myFonts.body,
        color: myColors.textL
    },
})