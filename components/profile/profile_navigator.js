import React, { useLayoutEffect } from "react";
import { AccScreen } from "./acc_screen";
import { createStackNavigator } from "@react-navigation/stack"
import { Favourite } from "./favourite_screen";
import { Profile } from "./profile_screen";

const ProfileTAB = createStackNavigator()

export const ProfileNavigator = ({ navigation, route }) => {

    return (
        <ProfileTAB.Navigator
            initialRouteName="Profile"
            screenOptions={{
                animation: 'fade',
                headerShown: false
            }}
        >
            <ProfileTAB.Screen
                name='Profile'
                component={Profile}
            />
            <ProfileTAB.Screen
                name='Favourite'
                component={Favourite}
            />
        </ProfileTAB.Navigator>

    )
}