import { RFValue } from "react-native-responsive-fontsize"
import { Dimensions } from "react-native"
const { height } = Dimensions.get('screen')

export const myFonts = {
    //400
    body: 'OpenSans-Regular',
    //500
    bodyBold: 'OpenSans-Medium',
    //600
    heading: 'OpenSans-SemiBold',
    //700
    headingBold: 'OpenSans-Bold',
}

export const myFontSize = {
    tiny: RFValue(10, height),
    // tiny: RFValue(10),
    small: RFValue(11, height),
    // small: RFValue(11),
    xSmall: RFValue(13, height),
    // xSmall: RFValue(13),
    body: RFValue(15, height),
    // body: RFValue(15),
    xBody: RFValue(20, height),
    // xBody: RFValue(20),
    medium: RFValue(25, height),
    // medium: RFValue(25),
    large: RFValue(36, height),
    // large: RFValue(36),
}
