import { RFValue } from "react-native-responsive-fontsize"
import { Dimensions } from "react-native"
import { ios } from "../components/common"
const { height } = Dimensions.get('screen')
const myHeight = ios ? height : height - 30;
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
    tiny: RFValue(8), //done 10
    small: RFValue(9), // done 11
    xSmall: RFValue(10.5), //done 13
    body: RFValue(12), //done 15
    xBody: RFValue(15), //done 20
    medium: RFValue(20), // n done 25
    xMedium: RFValue(26), // done 32
    large: RFValue(29.5), //done 36

    // tiny: RFValue(10, myHeight),
    // small: RFValue(11, myHeight),
    // xSmall: RFValue(13, myHeight),
    // body: RFValue(15, myHeight),
    // xBody: RFValue(20, myHeight),
    // medium: RFValue(25, myHeight),
    // large: RFValue(36, myHeight),
}
