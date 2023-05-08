import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { SignIn } from "./sign_in_screen";
import { SignUp } from "./sign_up_screen";
import { Verification } from "./verification";

const AccountTAB = createNativeStackNavigator();


export const AccountNavigator = () => {
    return (
        <AccountTAB.Navigator
            screenOptions={{
                animation: 'fade',
                headerShown: false
            }}
            initialRouteName="Verification"
        >
            <AccountTAB.Screen component={SignIn} name="SignIn" />
            <AccountTAB.Screen component={SignUp} name="SignUp" />
            <AccountTAB.Screen component={Verification} name="Verification" />

        </AccountTAB.Navigator>
    )
} 