import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, SafeAreaView, Image, Text, ScrollView, StatusBar, Easing } from 'react-native';
import { Loader, MyError, Spacer, errorTime, ios, myHeight, myWidth } from '../common';
import { myFonts, myLetSpacing, myFontSize } from '../../ultils/myFonts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { myColors } from '../../ultils/myColors';
import firestore, { Filter } from '@react-native-firebase/firestore';

import { StatusbarH } from '../common';
import Collapsible from 'react-native-collapsible';
import { useDispatch, useSelector } from 'react-redux';
import { dataFullData, verificationCode } from '../functions/functions';

export const Checkout = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(false)
    const { profile } = useSelector(state => state.profile)

    const { restaurant } = route.params
    const [errorMsg, setErrorMsg] = useState(null)
    const { cart } = useSelector(state => state.cart)
    const resCart = cart.filter(res => res.restaurant.uid == restaurant.uid)[0]
    const [onDelivery, setOnDelivery] = useState(true)
    const total = Math.round(parseInt(resCart.subTotal) + parseInt(restaurant.delivery))


    const [addressUpdate, setAddressUpdate] = useState('WEARTERYTUIOIOIDTAFEGT DY DFY DY D')
    const [address, setAddress] = useState('WEARTERYTUIOIOIDTAFEGT DY DFY DY D')
    const [showAddressModal, setShowAddressModal] = useState(false)


    const [phoneUpdate, setPhoneUpdate] = useState('03308246728')
    const [phone, setPhone] = useState('03308246728')
    const [showPhoneModal, setShowPhoneModal] = useState(false)

    const [showOrderPickModal, setShowOrderPickModal] = useState(null)
    const [orderPickInstru, setOrderPickInstru] = useState(null)
    const dispatch = useDispatch()
    useEffect(() => {

        if (errorMsg) {
            setTimeout(() => {
                setIsLoading(false)
                setErrorMsg(null)
            }
                , errorTime)
        }
    }, [errorMsg])
    function gettingOrders() {
        // -1=rejected
        // -2=cancelled
        // 100= completed
        // 0 = pending 
        // 1 = inProgress
        firestore().collection('orders').doc(profile.uid).collection('orders').get()

            .then(querySnapshot => {

                querySnapshot.forEach(documentSnapshot => {
                    const order = documentSnapshot.data()
                    if (order.status == -1 || order.status == 100 || order.status == -2) {

                    }
                    else if (order.status == 0) {

                    }
                    else {

                    }
                    // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                });
            });
        // .catch((er) => {
        //     // Alert.alert(er.toString())

        //     console.log('Error on Get orders', er)
        // })
    }
    useEffect(() => {
        gettingOrders()
    })
    function onPlaceOrder() {
        if (onAddAddress() && onAddPhone()) {
            setIsLoading(true)
            const dateData = dataFullData()
            const orderId = verificationCode()
            const order = {
                orderId,
                resId: restaurant.uid,
                name: restaurant.name,
                image: restaurant.images[0],
                dateInt: dateData.dateInt,
                date: dateData.date,
                userId: profile.uid,
                address,
                phone,
                cart: {
                    ...resCart,
                    total
                },
                status: 0,
                read: false,
            }
            firestore().collection('orders').doc(restaurant.uid).collection('orders').doc(orderId.toString()).set(order).then((data) => {
                firestore().collection('orders').doc(profile.uid).collection('orders').doc(orderId.toString()).set(order).then((data) => {
                    setIsLoading(false)
                    navigation.navigate('HomeScreen')
                    dispatch(removeResCart({ resId: restaurant.uid }))


                }).catch((er) => {

                    console.log('Error on set order', er)
                    setErrorMsg('Something Wrong')
                })

            }).catch((er) => {
                console.log('Error on set order', er)
                setErrorMsg('Something Wrong')

            })
        }
    }


    function onDeliveryLoc() {
        navigation.navigate('Address', { name: 'Delivery Address' })
    }



    function onAddAddress() {
        if (address) {
            if (address.length > 10) {
                setAddressUpdate(address)
                setShowAddressModal(false)
                return true
            }
            setErrorMsg('Plase add complete address')
            return false
        }
        setErrorMsg('Please Enter a Address')
        return false

    }

    function onAddPhone() {
        if (phone) {
            if (phone.length < 14 && phone.length > 10) {
                setPhoneUpdate(phone)
                setShowPhoneModal(false)
                return true
            }
            setErrorMsg('Invalid Phone Number')
            return false
        }
        setErrorMsg('Please Enter a Phone Number')
        return false

    }



    const PricingRow = ({ title, icon = false, value, fontSize, fontFamily, color = myColors.text }) => (
        <View style={{
            alignItems: 'center', flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text numberOfLines={1} style={[styles.textCommon, {
                    fontSize,
                    fontFamily,
                    color
                }]}>{title}</Text>
                <Spacer paddingEnd={myWidth(1)} />


            </View>
            <Text numberOfLines={1} style={[styles.textCommon, {
                fontSize,
                fontFamily,
                color
            }]}>Rs {value}</Text>
        </View>
    )
    return (
        <>
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: myColors.background,
            }}>
                <StatusbarH />


                <View style={{
                    flexDirection: 'row', paddingHorizontal: myWidth(4),
                    alignItems: 'center'
                }}>
                    {/* Back */}
                    <TouchableOpacity
                        style={{
                            paddingEnd: myWidth(3)
                        }}
                        activeOpacity={0.8}
                        onPress={() => navigation.goBack()}>
                        <Image
                            style={{
                                width: myHeight(2.6),
                                height: myHeight(2.6),
                                resizeMode: 'contain',
                            }}
                            source={require('../assets/home_main/home/back.png')}
                        />
                    </TouchableOpacity>


                    <Text numberOfLines={1} style={[styles.textCommon, {
                        flex: 1,
                        fontFamily: myFonts.bodyBold, fontSize: myFontSize.xBody2
                    }]}>Checkout From {restaurant.name}</Text>

                </View>
                <Spacer paddingT={myHeight(1.2)} />
                {/* Divider */}
                <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />
                {/* Content */}
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: myWidth(4) }}>
                    <Spacer paddingT={myHeight(1)} />
                    {/*  Delivery  & Schedule*/}
                    <View style={{
                        flexDirection: 'row', paddingHorizontal: myWidth(1), paddingVertical: myHeight(0.4),
                        borderRadius: myHeight(10), backgroundColor: myColors.primaryL2, alignSelf: 'center'
                    }}>

                        {/* Delivery */}
                        <TouchableOpacity activeOpacity={0.9} onPress={() => setOnDelivery(true)}
                            style={{
                                backgroundColor: !onDelivery ? myColors.primaryL2 : myColors.primaryT,
                                paddingHorizontal: myWidth(8), paddingVertical: myHeight(0.2), borderRadius: myHeight(10)
                            }}>
                            <Text style={[styles.textCommon, {
                                fontSize: myFontSize.xSmall,
                                fontFamily: myFonts.bodyBold,
                                color: !onDelivery ? myColors.text : myColors.background,
                            }]}>Delivery</Text>
                        </TouchableOpacity>
                    </View>

                    <Spacer paddingT={myHeight(3.5)} />

                    <View style={{ flexDirection: 'row', alignItems: "center" }}
                        activeOpacity={0.8} onPress={() => null}>
                        <Spacer paddingEnd={myHeight(0)} />

                        <Image style={{
                            height: myHeight(3),
                            width: myHeight(3),
                            resizeMode: 'contain',
                            tintColor: myColors.primaryT
                        }} source={require('../assets/home_main/home/clockF.png')} />

                        <Spacer paddingEnd={myWidth(2) + myHeight(0.3)} />
                        <Text numberOfLines={1} style={[styles.textCommon, {
                            flex: 1,
                            fontSize: myFontSize.body3,
                            fontFamily: myFonts.bodyBold,
                        }]}>Delivery Time</Text>

                        {/* time */}
                        <Text numberOfLines={1} style={[styles.textCommon, {
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.bodyBold,
                        }]}>{restaurant.delivery} minutes</Text>


                    </View>

                    <Spacer paddingT={myHeight(2.5)} />

                    {/* Mid Content */}
                    <View>
                        {/* Divider */}
                        <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />

                        {/*Delivery Loc */}
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setShowAddressModal(!showAddressModal)}>
                            <Spacer paddingT={myHeight(2)} />

                            <View style={{ flexDirection: 'row', }}
                                activeOpacity={0.8} onPress={() => null}>
                                <Spacer paddingEnd={myHeight(0.2)} />

                                <Image style={{
                                    height: myHeight(3),
                                    width: myHeight(3),
                                    resizeMode: 'contain',
                                    tintColor: myColors.primaryT

                                }} source={require('../assets/home_main/home/loc.png')} />

                                <Spacer paddingEnd={myWidth(2) + myHeight(0.2)} />

                                <View style={{ flex: 1 }}>
                                    <Text numberOfLines={1} style={[styles.textCommon, {
                                        fontSize: myFontSize.body3,
                                        fontFamily: myFonts.bodyBold,
                                    }]}>{addressUpdate ? addressUpdate : 'Add Location'}</Text>

                                </View>

                                <Image style={{
                                    height: myHeight(2),
                                    width: myHeight(2),
                                    resizeMode: 'contain',
                                    marginTop: myHeight(0.4),
                                    tintColor: myColors.primaryT,
                                    transform: [{ rotate: !showAddressModal ? '90deg' : '270deg' }],

                                }} source={require('../assets/home_main/home/go.png')} />

                            </View>
                            <Spacer paddingT={myHeight(2)} />

                        </TouchableOpacity>

                        <Collapsible collapsed={!showAddressModal}>
                            <TextInput placeholder="Enter  your complete address with house & street number"
                                multiline={true}
                                autoCorrect={false}
                                numberOfLines={2}
                                placeholderTextColor={myColors.offColor}
                                selectionColor={myColors.primary}
                                cursorColor={myColors.primaryT}
                                value={address} onChangeText={setAddress}
                                style={{
                                    height: myHeight(12),
                                    textAlignVertical: 'top',
                                    borderRadius: myWidth(2),
                                    width: '100%',
                                    paddingBottom: ios ? myHeight(1.2) : myHeight(100) > 600 ? myHeight(0.8) : myHeight(0.1),
                                    paddingTop: ios ? myHeight(1.2) : myHeight(100) > 600 ? myHeight(0.8) : myHeight(0.1),
                                    fontSize: myFontSize.body,
                                    color: myColors.text,
                                    includeFontPadding: false,
                                    fontFamily: myFonts.body,
                                    paddingHorizontal: myWidth(3),
                                    backgroundColor: '#F1F1F1'
                                }}
                            />


                            <TouchableOpacity activeOpacity={0.9} onPress={onAddAddress}
                                style={{
                                    backgroundColor: myColors.primaryT,
                                    borderRadius: myHeight(0.8),
                                    paddingVertical: myHeight(1),
                                    marginVertical: myHeight(1.5),
                                    alignItems: 'center',
                                    justifyContent: 'center',

                                }}>

                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.heading,
                                        color: myColors.background,
                                    }
                                ]}>{addressUpdate ? 'Update' : 'ADD'}</Text>
                            </TouchableOpacity>
                        </Collapsible>


                        {/* Divider */}
                        <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />



                        {/*Delivery Loc */}
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setShowPhoneModal(!showPhoneModal)}>
                            <Spacer paddingT={myHeight(2)} />

                            <View style={{ flexDirection: 'row', }}
                                activeOpacity={0.8} onPress={() => null}>
                                <Spacer paddingEnd={myHeight(0.7)} />

                                <Image style={{
                                    height: myHeight(2.5),
                                    width: myHeight(2.5),
                                    resizeMode: 'contain',
                                    tintColor: myColors.primaryT

                                }} source={require('../assets/home_main/home/phone.png')} />

                                <Spacer paddingEnd={myWidth(2) + myHeight(0.5)} />

                                <View style={{ flex: 1 }}>
                                    <Text numberOfLines={1} style={[styles.textCommon, {
                                        fontSize: myFontSize.body3,
                                        fontFamily: myFonts.bodyBold,
                                    }]}>{phoneUpdate ? phoneUpdate : 'Add Phone'}</Text>

                                </View>

                                <Image style={{
                                    height: myHeight(2),
                                    width: myHeight(2),
                                    resizeMode: 'contain',
                                    marginTop: myHeight(0.4),
                                    tintColor: myColors.primaryT,
                                    transform: [{ rotate: !showPhoneModal ? '90deg' : '270deg' }],

                                }} source={require('../assets/home_main/home/go.png')} />

                            </View>
                            <Spacer paddingT={myHeight(2)} />

                        </TouchableOpacity>

                        <Collapsible collapsed={!showPhoneModal}>
                            <TextInput placeholder="Ex 033252453240"
                                autoCorrect={false}
                                placeholderTextColor={myColors.offColor}
                                selectionColor={myColors.primary}
                                cursorColor={myColors.primaryT}
                                value={phone} onChangeText={setPhone}
                                keyboardType='numeric'
                                style={{
                                    marginHorizontal: myWidth(2),
                                    backgroundColor: '#F1F1F5'
                                }}
                            />


                            <TouchableOpacity activeOpacity={0.9} onPress={onAddPhone}
                                style={{
                                    backgroundColor: myColors.primaryT,
                                    borderRadius: myHeight(0.8),
                                    paddingVertical: myHeight(1),
                                    marginVertical: myHeight(1.5),
                                    alignItems: 'center',
                                    justifyContent: 'center',

                                }}>

                                <Text style={[
                                    styles.textCommon,
                                    {
                                        fontSize: myFontSize.body2,
                                        fontFamily: myFonts.heading,
                                        color: myColors.background,
                                    }
                                ]}>{addressUpdate ? 'Update' : 'ADD'}</Text>
                            </TouchableOpacity>
                        </Collapsible>


                        {/* Divider */}
                        <View style={{ borderTopWidth: myHeight(0.18), borderColor: myColors.dot, }} />
                    </View>



                    <Spacer paddingT={myHeight(2.5)} />

                    {/* Pricing */}
                    <View style={{ marginHorizontal: myWidth(2.5) }}>
                        {/* Subtotal  */}
                        <PricingRow title={'Subtotal'} value={resCart.subTotal} fontFamily={myFonts.bodyBold} fontSize={myFontSize.body2} />

                        <Spacer paddingT={myHeight(1)} />
                        {/* Delivery Fees */}
                        <PricingRow title={'Delivery Fees'} icon={true} value={restaurant.delivery} fontFamily={myFonts.body} fontSize={myFontSize.xxSmall} />

                        <Spacer paddingT={myHeight(0.5)} />
                        {/* Delivery Fees */}
                        <PricingRow title={'Fees & Estimated Tax'} icon={true} value={'0'} fontFamily={myFonts.body} fontSize={myFontSize.xxSmall} />


                        <Spacer paddingT={myHeight(1)} />
                        {/* Divider */}
                        <View style={{ borderTopWidth: myHeight(0.15), borderColor: myColors.dot, }} />

                        <Spacer paddingT={myHeight(1)} />
                        {/* Total */}
                        <PricingRow title={'Total'} value={total} fontFamily={myFonts.heading} fontSize={myFontSize.body2} color={myColors.primaryT} />
                    </View>
                </KeyboardAwareScrollView>
                {/* Place Order */}
                <TouchableOpacity activeOpacity={0.9} onPress={onPlaceOrder}
                    style={{
                        backgroundColor: myColors.primaryT,
                        borderRadius: myHeight(0.8),
                        paddingVertical: myHeight(1.1),
                        marginVertical: myHeight(3),
                        marginHorizontal: myWidth(4),
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>

                    <Text style={[
                        styles.textCommon,
                        {
                            fontSize: myFontSize.body2,
                            fontFamily: myFonts.heading,
                            color: myColors.background,
                        }
                    ]}>Place Order</Text>
                </TouchableOpacity>



            </SafeAreaView>


            {isLoading && <Loader />}
            {errorMsg && <MyError message={errorMsg} />}


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