import { RFValue } from "react-native-responsive-fontsize"
import { Dimensions } from "react-native"
const { height } = Dimensions.get('window')

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
    small: RFValue(11, height),
    xSmall: RFValue(13, height),
    body: RFValue(15, height),
    xBody: RFValue(20, height),
    medium: RFValue(25, height),
    large: RFValue(36, height),
}
