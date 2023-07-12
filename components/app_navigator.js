import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StartupScreen } from "./startup/startup_screens"
import { storage } from "./common"
import { StartupNavigator } from "./startup/startup_navigator"
import { HomeBottomNavigator } from "./home/home_bottom_navigator"
import { OnboardScreen } from "./onboard/onboard_screen"
import { AccountNavigator } from "./account/account_navigation"

const AppTAB = createNativeStackNavigator()

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppTAB.Navigator
                initialRouteName="StartupNavigator"
                // initialRouteName={storage.contains('isFirstTime') ? "AccountNavigator" : "StartupScreen"}
                screenOptions={{
                    animation: 'fade',
                    headerShown: false
                }}
            >
                <AppTAB.Screen component={OnboardScreen} name="OnboardScreen" />
                <AppTAB.Screen component={StartupNavigator} name="StartupNavigator" />
                <AppTAB.Screen component={AccountNavigator} name="AccountNavigator" />
                <AppTAB.Screen component={HomeBottomNavigator} name="HomeBottomNavigator" />

            </AppTAB.Navigator>
        </NavigationContainer>
    )
}