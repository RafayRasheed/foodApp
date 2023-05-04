import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { SignIn } from "./sign_in_screen";

const AccountTAB = createNativeStackNavigator();

const Test = ({ navigation }) => {
    console.log('ACC')
    return (
        <View>
            <Text onPress={() => navigation.navigate('StartupScreen')}>Sign In</Text>
        </View>
    )
}
export const AccountNavigator = () => {
    return (
        <AccountTAB.Navigator
            screenOptions={{ headerShown: false }}
        >
            <AccountTAB.Screen component={SignIn} name="SignIn" />
        </AccountTAB.Navigator>
    )
} 