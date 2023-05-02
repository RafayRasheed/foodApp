import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

export function printWithPlat(print) {
    console.log(`${Platform.OS} => ${print}`)
}
export function myHeight(per) {
    const myHeight = (per * height) / 100
    printWithPlat(myHeight)
    return myHeight
}
export function myWidth(per) {
    const myHeight = (per * height) / 100
    printWithPlat(myHeight)
    return myHeight
}