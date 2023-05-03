import { RFValue } from "react-native-responsive-fontsize"
import { myHeight } from "../components/common"
import { Dimensions } from "react-native"
const { height } = Dimensions.get('window')
export const myFonts = {
    body: 'OpenSans-Regular',
    bodyBold: '',
    heading: '',
}

export const myFontSize = {
    body: RFValue(15, height),
    xBody: RFValue(20, height),
    medium: RFValue(25, height),
    large: RFValue(36, height),
}