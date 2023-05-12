import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, PixelRatio, Switch, SafeAreaView } from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import { TextInput } from 'react-native-gesture-handler'
import { CountryCodeList } from './types'
import ReactNativePhoneInput from 'react-native-phone-input'
import { Alert, Modal, Pressable } from 'react-native';
import { myColors } from '../../../ultils/myColors'
// import { CountryCode, Country } from './types'

const styles = StyleSheet.create({
    // ...
})

export const Flag = () => {
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

    const phone = useRef()
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View>
            <Text onPress={() => setModalVisible(!modalVisible)}>ok</Text>
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <SafeAreaView style={{ flex: 1, backgroundColor: myColors.background }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                    {/* <ReactNativePhoneInput
            ref={phone}
        /> */}
                </SafeAreaView>
            </Modal>
        </View>
    )


    // return (
    //     <View>
    //         <CountryPicker
    //             closeButtonStyle={{ height: null }}
    //             containerButtonStyle={{ height: 36, }}
    //             // filterProps={(s) => console.log(s)}
    //             renderCountryFilter={({ }) => {
    //                 return (
    //                     <TextInput
    //                         value={''}
    //                         onChangeText={() => value = 'xsx'}
    //                     >
    //                     </TextInput>
    //                 )
    //             }
    //             }
    //             // countryCodes={countryCodes} 
    //             preferredCountries={{}}
    //             {...{

    //                 // withCloseButton: true,
    //                 countryCodes,
    //                 country,
    //                 countryCode,
    //                 withFilter,
    //                 withFlag,
    //                 withCountryNameButton,
    //                 withAlphaFilter,
    //                 withCallingCode,
    //                 withEmoji,
    //                 onSelect,

    //             }

    //             // onSelect=((val)=>console.log(val))
    //             }

    //             visible={true}
    //         />
    //     </View>
    // )
}

// import * as React from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// import Constants from 'expo-constants';
// import CountryPicker, { getAllCountries, getCallingCode } from 'react-native-country-picker-modal';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <CountryPicker 
//           withEmoji
//         />
//         <Text>{getAllCountries !== undefined && 'getAllCountries OK'}</Text>
//         <Text>{getCallingCode !== undefined && 'getCallingCode OK'}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
// });






// import React, { Component } from 'react';
// import { StyleSheet, View } from 'react-native';

// import PhoneInput from 'react-native-phone-input';
// import CountryPicker from 'react-native-country-picker-modal';

// export class Flag extends Component {
//     constructor() {
//         super();

//         this.onPressFlag = this.onPressFlag.bind(this);
//         this.selectCountry = this.selectCountry.bind(this);
//         this.state = {
//             cca2: 'us',
//         };
//     }

//     componentDidMount() {
//         this.setState({
//             pickerData: this.phone.getPickerData(),
//         });
//     }

//     onPressFlag() {
//         console.log(this.countryPicker)
//         this.countryPicker.openModal();
//     }

//     selectCountry(country) {
//         console.log(country)
//         this.phone.selectCountry(country.cca2.toLowerCase());
//         this.setState({ cca2: country.cca2 });
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <PhoneInput
//                     ref={(ref) => {
//                         this.phone = ref;
//                     }}
//                     onPressFlag={this.onPressFlag}
//                 />

//                 <CountryPicker
//                     ref={(ref) => {
//                         this.countryPicker = ref;
//                     }}
//                     onChange={value => this.selectCountry(value)}
//                     translation="eng"
//                     cca2={this.state.cca2}
//                 >
//                     <View />
//                 </CountryPicker>
//             </View>
//         );
//     }
// }

// let styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         padding: 20,
//         paddingTop: 60,
//     },
// });

