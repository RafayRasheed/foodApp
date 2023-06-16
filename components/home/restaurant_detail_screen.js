import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image, View, Text, FlatList, Modal, UIManager, LayoutAnimation } from 'react-native'
import { MyError, Spacer, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFontSize, myFonts, myLetSpacing } from '../../ultils/myFonts';
import { Categories, Restaurants, bookNow, category, dailySpecial, nearDrivers, notifications, rewards } from './home_data'
import { ResturantH } from './home.component/resturant_hori';
import { Banners } from './home.component/banner';
import { ImagesShortViewer } from './home.component/images_short_viewer';

if (!ios && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
}
export const RestaurantDetail = ({ navigation, route }) => {

    const restaurant = route.params.item
    return (

        <View style={styles.container}>

        <ImagesShortViewer images={restaurant.images}/>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >

                <Spacer paddingT={myHeight(1.4)} />


                <Spacer paddingT={myHeight(1.5)} />


                <Spacer paddingT={myHeight(1.5)} />
                {/* CAtegories*/}
                <View>
                    {/* Categories & see all*/}
                    <View style={{
                        paddingHorizontal: myWidth(3), alignItems: 'center', flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={[styles.textCommon, {
                            fontSize: myFontSize.xxBody,
                            fontFamily: myFonts.bodyBold,
                        }]}>Categories</Text>

                        {/* See all */}
                        <TouchableOpacity style={{
                            flexDirection: 'row', alignItems: 'center', paddingVertical: myHeight(0.4),
                            paddingStart: myWidth(2)
                        }} activeOpacity={0.6} onPress={() => navigation.navigate('CategoryFull')}>

                            <Text
                                style={[styles.textCommon, {
                                    fontSize: myFontSize.body2,
                                    fontFamily: myFonts.bodyBold,
                                    color: myColors.primaryT
                                }]}>See All</Text>
                            <Image style={{
                                height: myHeight(1.5), width: myHeight(1.5), marginStart: myWidth(1),
                                resizeMode: 'contain', tintColor: myColors.primaryT
                            }} source={require('../assets/home_main/home/go.png')} />
                        </TouchableOpacity>
                    </View>

                    <Spacer paddingT={myHeight(0.3)} />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: myWidth(1) }}>

                        {Categories.slice(0, 4).map((item, i) =>

                            <View key={i} style={{ padding: myHeight(1.4), paddingEnd: myWidth(2) }}>
                                <TouchableOpacity activeOpacity={0.8} style={{
                                    flexDirection: 'row', alignItems: 'center', borderRadius: myHeight(15),
                                    backgroundColor: myColors.background,
                                    // backgroundColor:myColors.primaryL,  
                                    padding: myHeight(0.8), elevation: 8
                                }}>
                                    <View style={{
                                        height: myHeight(5), width: myHeight(5), borderRadius: myHeight(5),
                                        backgroundColor: '#00000008',
                                        // backgroundColor:myColors.background, 
                                        alignItems: 'center', justifyContent: 'center'
                                    }} >
                                        <Image style={{
                                            maxHeight: myHeight(4.2), maxWidth: myHeight(4.2),
                                            resizeMode: 'contain',
                                        }} source={item.image} />
                                    </View>

                                    <Spacer paddingEnd={myWidth(2)} />
                                    <Text
                                        style={[styles.textCommon, {
                                            fontSize: myFontSize.body2,
                                            fontFamily: myFonts.heading,
                                        }]}>{item.name}</Text>
                                    <Spacer paddingEnd={myWidth(2.7)} />

                                </TouchableOpacity>
                            </View>
                        )}
                    </ScrollView>

                </View>

            </ScrollView>

        </View>
    )
}






const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.background
    },


    //Text
    textCommon: {
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,
    },

})