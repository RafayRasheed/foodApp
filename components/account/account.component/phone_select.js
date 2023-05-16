import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, FlatList } from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import { TextInput } from 'react-native-gesture-handler'
import { phoneCountry } from './types'
import PhoneInput from 'react-native-phone-input'
import { Alert, Modal, Pressable } from 'react-native';
import { myColors } from '../../../ultils/myColors'
import { Spacer, ios, myHeight, myWidth } from '../../common'
import { myFontSize, myFonts, myLetSpacing } from '../../../ultils/myFonts'
// import { CountryCode, Country } from './types'


// const phoneCountry = [
//     {
//         country: 'Pakistan',
//         country_code: 'PK',
//         dial: '+92',
//         flag: require('../../assets/account/flag.png'),

//     },
//     {
//         country: 'Aland Islands',
//         country_code: 'AX',
//         dial: '+21',
//         flag: require('../../assets/account/flag.png'),

//     },
//     {
//         country: 'India',
//         country_code: 'IN',
//         dial: '+51',
//         flag: require('../../assets/account/flag.png'),
//     },
//     {
//         country: 'Ghana',
//         country_code: 'GH',
//         dial: '+201',
//         flag: require('../../assets/account/flag.png'),
//     },

// ]

const Flag = (props, ref) => {
    // const [countryCode, setCountryCode] = useState('PK')
    // const [countryCodes, setCountryCodes] = useState(['PK', 'ID'])
    // const [country, setCountry] = useState('Pakistan')
    // const [withCountryNameButton, setWithCountryNameButton] = useState(false)
    // const [withFlag, setWithFlag] = useState(true)
    // const [withEmoji, setWithEmoji] = useState(true)
    // const [withFilter, setWithFilter] = useState(true)
    // const [withAlphaFilter, setWithAlphaFilter] = useState(false)
    // const [withCallingCode, setWithCallingCode] = useState(false)
    // const onSelect = (country) => {
    //     setCountryCodes(['PK'])
    //     setCountryCode(country.cca2)
    //     setCountry(country)
    // }
    const [country, setCountry] = useState('pk')
    const [countryCode, setCountryCode] = useState()
    const [countryFlag, setCountryFlag] = useState()
    const [countryName, setCountryName] = useState()
    const [phoneValid, setPhoneValid] = useState(false)
    const phone = useRef()
    const [modalVisible, setModalVisible] = useState(false);
    const [search, setSearch] = useState(null)
    const [filterData, setFilterData] = useState(phoneCountry);


    useImperativeHandle(ref, () => ({
        checkNumber: () => {
            if (!phone.current) {
                return null
            }
            return phone.current.isValidNumber()
        },
        setNumber: (val) => {
            const number = countryCode + val
            phone.current.setValue(number)
        },
        getCode: () => {
            return countryCode
        }
    }))

    function onChangeSearch(val) {
        const list = phoneCountry.filter((item) => item.name.includes(val))
        setFilterData(list)
        setSearch(val)
    }
    function onChangeCode(val) {
        setCountryCode(val)
        phone.current.setValue('+923308246780')
        setTimeout(() => {
            const s = phone.current.getISOCode()
            if (s) {
                setCountry(s)
                console.log(phone.current.isValidNumber())
            }
            else {
                setCountryFlag(null)
            }
        }, 100)
    }

    function changeCountry(code) {
        phone.current.selectCountry(code)
        setModalVisible(false)
        // console.log(phone.current.getCountryCode()) //92
        // console.log(phone.current.getValue())  //+923308246...
        // console.log(phone.current.isValidNumber()) // current number is valid
        // console.log(phone.current.getFlag('pk')) //Image
        // console.log(phone.current.getISOCode())  //pk, us
        // console.log(phone.current.setValue('376')) // set complete and update selection number value
        // console.log(phone.current.selectCountry('in'))  set from iso
    }
    function changeData() {
        if (phone.current) {
            setCountryFlag(phone.current.getFlag(country))
            setCountryCode(phone.current.getCountryCode())
            const name = phoneCountry.filter((item) => item.code.toLowerCase() == country)
            setCountryName(name[0].name)

            // console.log("name", name)
        }
    }
    useEffect(() => {
        changeData()
    }, [country])

    return (
        <View style={{}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <PhoneInput
                    ref={phone}
                    onSelectCountry={(c) => {
                        setCountry(c)
                        // changeData()
                    }}
                    onChangePhoneNumber={(s) => console.log('mu', s)}
                    initialCountry={country}
                    onPressFlag={() => phone.current && setModalVisible(true)}
                    initialValue={countryCode}
                    renderFlag={({ imageSource }) =>
                        <View>
                            {countryFlag ?
                                <Image source={countryFlag}
                                    style={{
                                        height: myHeight(1.8), width: myWidth(6.9),
                                        resizeMode: 'contain', alignSelf: 'center'
                                    }} />
                                : <View style={styles.containerEmpty} />
                            }
                        </View>

                    }
                    style={{ width: myWidth(6.9), alignItems: 'center', justifyContent: 'center' }}
                />

                <Text style={styles.textPlus}>+{countryCode}</Text>

                {/* <TextInput
                    keyboardType='phone-pad'
                    editable={false}
                    onPressIn={() => phone.current && setModalVisible(true)} selectionColor={myColors.primaryT}
                    style={styles.containerCode}
                    cursorColor={myColors.primaryT}
                    value={countryCode} onChangeText={(val => onChangeCode(val))}
                /> */}
            </View>


            {/* Slide */}
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <SafeAreaView style={styles.containerModel}>
                    {/* Top Slelect s Country */}
                    <View style={styles.containerTop}>
                        <Spacer paddingEnd={myWidth(3)} />
                        <TouchableOpacity onPress={() => setModalVisible(false)} activeOpacity={0.6}>
                            <Image style={styles.imageCancel} source={require('../../assets/account/close.png')} />
                        </TouchableOpacity>
                        <Spacer paddingEnd={myWidth(16)} />
                        <Text style={styles.textSlelectCountry} onPress={() => setModalVisible(!modalVisible)}>Select a Country</Text>
                    </View>

                    {/* Search */}
                    <View style={styles.containerSearchPortion}>
                        <Image style={styles.imageSearch} source={require('../../assets/account/search.png')} />
                        <Spacer paddingEnd={myWidth(3.5)} />
                        <TextInput placeholder="Search for a country"
                            placeholderTextColor={myColors.offColor}
                            selectionColor={myColors.primaryT}
                            style={styles.containerSearch}
                            cursorColor={myColors.primaryT}
                            value={search} onChangeText={(val) => onChangeSearch(val)}
                        // value={search} onChangeText={(val) => null}
                        />
                    </View>

                    {/* Selected Country */}
                    {countryFlag &&
                        <>
                            <Spacer paddingT={myHeight(0.6)} />

                            <View style={styles.containerDetailItem}>
                                <Image style={styles.imageDetalFlag} source={countryFlag} />
                                <Spacer paddingEnd={myWidth(4)} />
                                <Text style={styles.textName}>{countryName}</Text>
                                <Image style={[styles.imageCheck, {}]} source={require('../../assets/account/check.png')} />
                            </View>
                        </>
                    }

                    <Spacer paddingT={myHeight(1.5)} />
                    {/* <FlatListMy onSelect={changeCountry}/> */}

                    <FlatList
                        data={filterData}
                        ItemSeparatorComponent={() => (
                            <View style={{ backgroundColor: myColors.offColor3, height: myHeight(0.3) }} />
                        )}

                        renderItem={({ item }) => {
                            const image = phone.current.getFlag(item.code.toLowerCase())
                            return (
                                image ?
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => changeCountry(item.code.toLowerCase())} style={styles.containerDetailItem}>

                                        <Image style={styles.imageDetalFlag} source={image} />

                                        <Spacer paddingEnd={myWidth(4)} />
                                        <Text style={styles.textName}>{item.name}</Text>
                                    </TouchableOpacity>
                                    : null
                            )
                        }
                        }
                        keyExtractor={item => item.code}
                    />
                </SafeAreaView>
            </Modal>
        </View>
    )
}
const FlatListMy = ({ filterData, onSelect }) => {
    <FlatList
        data={filterData}
        ItemSeparatorComponent={() => (
            <View style={{ backgroundColor: myColors.offColor3, height: myHeight(0.3) }} />
        )}

        renderItem={({ item }) => {
            const image = phone.current.getFlag(item.code.toLowerCase())
            return (
                image ?
                    <TouchableOpacity activeOpacity={0.5} onPress={() => onSelect(item.code.toLowerCase())} style={styles.containerDetailItem}>

                        <Image style={styles.imageDetalFlag} source={image} />

                        <Spacer paddingEnd={myWidth(4)} />
                        <Text style={styles.textName}>{item.name}</Text>
                    </TouchableOpacity>
                    : null
            )
        }
        }
        keyExtractor={item => item.code}
    />
}
const styles = StyleSheet.create({
    containerModel: {
        flex: 1, backgroundColor: myColors.offColor3
    },
    containerTop: {
        flexDirection: 'row',
        backgroundColor: myColors.primaryT,
        alignItems: 'center',
        paddingVertical: myHeight(1.6)
        // justifyContent:'center',
    },
    containerSearchPortion: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: myWidth(4),
        paddingVertical: myHeight(2.6),
        backgroundColor: myColors.background,
    },
    containerCode: {
        textAlignVertical: 'center',
        fontSize: myFontSize.body,
        color: myColors.text,
        fontFamily: myFonts.bodyBold,
        padding: 0,
        paddingRight: 0,
        includeFontPadding: false,
        paddingEnd: 0,
        backgroundColor: myColors.blue,
    },
    containerSearch: {
        flex: 1,
        textAlignVertical: 'center',
        paddingVertical: ios ? myHeight(1.2) : myHeight(100) > 600 ? myHeight(0.8) : myHeight(0.1),
        fontSize: myFontSize.body,
        color: myColors.text,
        includeFontPadding: false,
        fontFamily: myFonts.body,
        // lineHeight: 0,
    },
    containerDetailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: myWidth(3),
        backgroundColor: myColors.background,
        paddingVertical: myHeight(1.8)
    },
    containerEmpty: {
        height: myHeight(1.8), width: myWidth(6.9), backgroundColor: myColors.offColor
    },



    // Text
    textSlelectCountry: {
        fontSize: myFontSize.medium2,
        fontFamily: myFonts.body,
        color: myColors.background,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        padding: 0,

    },
    textPlus: {
        fontSize: myFontSize.body,
        fontFamily: myFonts.bodyBold,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        textAlignVertical: 'bottom',
        includeFontPadding: false,
        marginBottom: -myHeight(0.09)
        // paddingVertical: 0,
        // backgroundColor: myColors.blue
    },
    textName: {
        fontSize: myFontSize.body2,
        fontFamily: myFonts.heading,
        color: myColors.text,
        letterSpacing: myLetSpacing.common,
        includeFontPadding: false,
        flex: 1,
        padding: 0,
    },



    // Images
    imageCancel: {
        height: myHeight(2.2),
        width: myHeight(2.2),
        resizeMode: 'contain',
        tintColor: myColors.background,
    },
    imageSearch: {
        height: myHeight(2.5),
        width: myHeight(2.5),
        resizeMode: 'contain',
        tintColor: myColors.primaryT,
    },
    imageDetalFlag: {
        height: myHeight(4),
        width: myHeight(4),
        resizeMode: 'contain',
        // backgroundColor:myColors.blue,
    },
    imageCheck: {
        height: myHeight(2.5),
        width: myHeight(2.5),
        resizeMode: 'contain',
        // backgroundColor:myColors.blue,
    },

})

export default forwardRef(Flag);

