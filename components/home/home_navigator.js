import React from "react";
import { Text, SafeAreaView, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ios, myHeight, myWidth } from "../common";
import { myColors } from "../../ultils/myColors";
import { myFontSize, myFonts, myLetSpacing } from "../../ultils/myFonts";
import { HomeScreen } from "./home_screen";
import { ActivityScreen } from "../activity/activity_screen";

const Tab = createBottomTabNavigator()

const Icons = {
    HOME: require('../assets/home_main/navigator/home.png'),
    ACTIVITY: require('../assets/home_main/navigator/activity.png'),
    CART: require('../assets/home_main/navigator/cart.png'),
    WALLET: require('../assets/home_main/navigator/wallet.png'),
    ACCOUNT: require('../assets/home_main/navigator/account.png'),
}

const screenOptions = ({ route }) => {
    const name = route.name
    return {
        headerShown: false,
        tabBarStyle: {
            backgroundColor: myColors.background,
            paddingHorizontal: myWidth(3.5),
            alignItems: 'center',
            justifyContent: 'center',
            height: myHeight(9.5),
            paddingBottom: ios ? myHeight(2.5) : myHeight(2),
            paddingTop: myHeight(2.5),

        },
        tabBarLabelStyle: {
            fontSize: myFontSize.tiny,
            fontFamily: myFonts.heading,
            letterSpacing: myLetSpacing.common,
            paddingTop: myHeight(1),
        },
        tabBarActiveTintColor: myColors.primaryT,
        tabBarInactiveTintColor: myColors.text,
        tabBarIcon: ({ color }) => <Image style={{ tintColor: color, width: myWidth(6.5), height: myHeight(2.68), resizeMode: 'contain' }}
            source={Icons[name]} />,
    }
}
const Xr = ({ navigation }) => (
    <SafeAreaView style={{ flex: 1, backgroundColor: myColors.background }}>
        <Text onPress={() => navigation.navigate('SignIn')} style={{}}>Sign Out</Text>
    </SafeAreaView>
)

export const HomeNavigator = ({ route, navigation }) => {
    return (
        <Tab.Navigator
            tabBarActiveTintColor={myColors.primary}
            headerShown={false}
            screenOptions={screenOptions}
            tabBarShowLabel={false}
            initialRouteName="HOME"
        >
            <Tab.Screen name="HOME" component={HomeScreen} />
            <Tab.Screen name="ACTIVITY" component={ActivityScreen} />
            <Tab.Screen name="CART" component={Xr} />
            <Tab.Screen name="WALLET" component={Xr} />
            <Tab.Screen name="ACCOUNT" component={Xr} />

        </Tab.Navigator>


    )
}