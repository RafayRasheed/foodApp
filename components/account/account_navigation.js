import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { SignIn } from "./sign_in_screen";
import { SignUp } from "./sign_up_screen";
import { Verification } from "./verification_screen";
import { ForgotPassword } from "./forgot_pass_screen";
import { NewPassword } from "./new_pass_screen";
import { DonePassword } from "./done_pass_screen";

const AccountTAB = createNativeStackNavigator();


export const AccountNavigator = () => {
    return (
        <AccountTAB.Navigator
            screenOptions={{
                animation: 'fade',
                headerShown: false
            }}
            initialRouteName="SignIn"
        >
            <AccountTAB.Screen component={SignIn} name="SignIn" />
            <AccountTAB.Screen component={SignUp} name="SignUp" />
            <AccountTAB.Screen component={Verification} name="Verification" />
            <AccountTAB.Screen component={ForgotPassword} name="ForgotPassword" />
            <AccountTAB.Screen component={NewPassword} name="NewPassword" />
            <AccountTAB.Screen component={DonePassword} name="DonePassword" />



        </AccountTAB.Navigator>
    )
} 