import { useEffect, useState } from "react"
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const SignIn = () => {
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
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => null}>
                        <Text style={styles.textTermCond}>Terms & Conditions </Text>
                    </TouchableOpacity>

                    <Text>and </Text>

                    <TouchableOpacity activeOpacity={0.6} onPress={() => null}>
                        <Text style={styles.textTermCond}>Privacy Policy</Text>
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


    //Text
    textTermCond: {

    },



    //Image 

})