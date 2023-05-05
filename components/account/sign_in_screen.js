import { useEffect, useState } from "react"
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { myFontSize, myFonts } from "../../ultils/myFonts"
import { myColors } from "../../ultils/myColors"

export const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState()
    const [password, setPass] = useState()
    const [verifyLog, setVerifyLog] = useState(false)


    const onLogin = () => {

    }

    function verifyEmail() {
        if (email) {
            return true
        }
        return false
    }
    function verifyPass() {
        if (password) {
            return true
        }
        return false
    }

    useEffect(() => {
        if (verifyEmail() && verifyPass()) {
            setVerifyLog(true)

        }
        else {
            setVerifyLog(false)
        }
    }, [email, password])


    return (
        <SafeAreaView style={styles.container}>
            {/* Content */}
            <View>

            </View>

            {/* terms & Policy */}
            <View style={styles.containerTermCond}>
                {/* First line */}
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.replace('StartupScreen')}>
                        <Text style={styles.textTermCondColor}>Terms & Conditions </Text>
                    </TouchableOpacity>

                    <Text style={styles.textTermCond}>and </Text>

                    <TouchableOpacity activeOpacity={0.6} onPress={() => null}>
                        <Text style={styles.textTermCondColor}>Privacy Policy</Text>
                    </TouchableOpacity>
                </View>
                {/* Second Line */}
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textTermCond}>Copyrights 2023 </Text>

                    <TouchableOpacity activeOpacity={0.6} onPress={() => null}>
                        <Text style={styles.textTermCondColor}>M-Rides Inc</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerTermCond: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerContent: {

    },


    //Text
    textTermCond: {
        fontSize: myFontSize.small,
        fontFamily: myFonts.heading,
        color: myColors.text,
    },

    textTermCondColor: {
        fontSize: myFontSize.small,
        fontFamily: myFonts.heading,
        color: myColors.primary,
    },



    //Image 

})