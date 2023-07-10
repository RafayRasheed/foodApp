import React, { useLayoutEffect } from "react";
import { AccScreen } from "./acc_screen";
import { ForgetPassword } from "./forget_p_screen";
import { DoneEmail } from "./done_email_screen";
import { DonePass } from "./done_pass_screen";
import { NewPass } from "./new_pass_screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { myColors } from "../../ultils/myColors";

const AccountStack = createNativeStackNavigator()

export const AccountNavigator = ({ navigation, route }) => {
    useLayoutEffect(() => {
        StatusBar.setBackgroundColor(myColors.background)
    }
        , [navigation, route])
    return (
        <AccountStack.Navigator
            screenOptions={{
                animation: 'fade',
                headerShown: false
            }}
        >
            <AccountStack.Screen
                name='Welcome'
                component={AccScreen}
            />
            <AccountStack.Screen
                name='ForgetPass'
                component={ForgetPassword}
            />
            <AccountStack.Screen
                name="DoneEmail"
                component={DoneEmail}
            />
            <AccountStack.Screen
                name="NewPass"
                component={NewPass}
            />
            <AccountStack.Screen
                name="DonePass"
                component={DonePass}
            />

        </AccountStack.Navigator>

    )
}