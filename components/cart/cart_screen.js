import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { Spacer, StatusBarShow, StatusbarH, ios, myHeight, myWidth } from '../common';
import { myColors } from '../../ultils/myColors';
import { myFonts, myLetSpacing, myFontSize } from '../../ultils/myFonts';
import { useSelector, useDispatch } from 'react-redux'



export const Cart = ({ navigation }) => {
    const { cart } = useSelector(state => state.cart)
    // const { cartItems } = cart
    const cartsItems = [
        {
            name: 'Burger King (2130Morningsode Ave)', items: 2, price: 'CA$32.38', address: 'Deliver to Block#7'
        },
        {
            name: 'Burger King (2130Morningsode Ave)', items: 2, price: 'CA$32.38', address: 'Deliver to Block#7'
        },
        {
            name: 'Burger King (2130Morningsode Ave)', items: 2, price: 'CA$32.38', address: 'Deliver to Block#7'
        },
        {
            name: 'Burger King (2130Morningsode Ave)', items: 2, price: 'CA$32.38', address: 'Deliver to Block#7'
        },
    ]
    function getCarItems(cartItems) {
        let items = ''
        cartItems.map((item, i) => {
            if (i != 0) {
                items += '  -'
            }
            items += item.item.name
        })
        return items
    }
    return (
        <>
            {/* <StatusBar backgroundColor={orderModal ? '#00000030' : myColors.background} /> */}
            <SafeAreaView style={{ flex: 1, backgroundColor: myColors.background, }}>
                <StatusbarH />
                <Spacer paddingT={myHeight(2)} />

                {/* Content */}
                <ScrollView bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={{
                    paddingHorizontal: myWidth(4), backgroundColor: myColors.background, flexGrow: 1
                }}>
                    <Text style={[styles.textCommon, {
                        fontSize: myFontSize.medium2,
                        fontFamily: myFonts.heading,
                    }]}>Carts</Text>
                    <Spacer paddingT={myHeight(1)} />

                    {
                        cart?.map((res, i) =>
                            <TouchableOpacity activeOpacity={0.85} onPress={() => navigation.navigate('CartDetails')}
                                key={i} >
                                {/* Divider */}
                                {i > 0 && <View style={{ height: myHeight(0.1), backgroundColor: myColors.dot }} />}
                                <Spacer paddingT={myHeight(1.6)} />

                                <View style={{
                                    flexDirection: 'row', paddingBottom: myHeight(2),
                                    alignItems: 'center'
                                }}>
                                    <Image style={{
                                        height: myHeight(7.3),
                                        width: myHeight(7.3),
                                        resizeMode: 'cover',
                                        borderRadius: myWidth(1),
                                        overflow: 'hidden'

                                    }} source={res.restaurant.image} />
                                    <Spacer paddingEnd={myWidth(2.5)} />

                                    {/* Name & Price & Go*/}
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text numberOfLines={1} style={[styles.textCommon, {
                                                fontSize: myFontSize.body3,
                                                fontFamily: myFonts.heading,
                                            }]}>{res.restaurant.name}</Text>

                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <Text numberOfLines={1} style={[styles.textCommon, {
                                                    fontSize: myFontSize.xxSmall,
                                                    fontFamily: myFonts.body,
                                                    color: myColors.textL,
                                                }]}>{getCarItems(res.cartItems)}</Text>
                                            </View>
                                            <Spacer paddingT={myHeight(0.3)} />

                                            <View style={{ flexDirection: 'row' }}>

                                                <Text numberOfLines={1} style={[styles.textCommon, {
                                                    flex: 0.9,
                                                    fontSize: myFontSize.body2,
                                                    fontFamily: myFonts.heading,
                                                    color: myColors.primaryT
                                                }]}>Rs {res.subTotal}</Text>
                                                <Text numberOfLines={1} style={[styles.textCommon, {
                                                    fontSize: myFontSize.body2,
                                                    fontFamily: myFonts.body,
                                                    color: myColors.text
                                                }]}> {res.cartItems.length}  Items</Text>
                                            </View>



                                            {/* <Spacer paddingT={myHeight(0.2)} />
                                            <Text numberOfLines={1} style={[styles.textCommon, {
                                                fontSize: myFontSize.xxSmall,
                                                fontFamily: myFonts.body,
                                                color: myColors.textL4
                                            }]}>{item.address}</Text> */}
                                        </View>
                                        <Spacer paddingEnd={myWidth(2)} />
                                        <Image style={{
                                            height: myHeight(2),
                                            width: myHeight(2),
                                            resizeMode: 'contain',
                                            alignSelf: 'center',
                                            tintColor: myColors.primaryT
                                        }} source={require('../assets/home_main/home/go.png')} />
                                    </View>



                                </View>
                            </TouchableOpacity>

                        )
                    }
                </ScrollView>

            </SafeAreaView>
        </>
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

})