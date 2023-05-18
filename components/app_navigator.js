import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AccountNavigator } from "./account/account_navigation"
import { StartupScreen } from "./startup/startup_screens"
import { storage } from "./common"
import { StartupNavigator } from "./startup/startup_navigator"
import { HomeBottomNavigator } from "./home/home_bottom_navigator"

const AppTAB = createNativeStackNavigator()

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppTAB.Navigator
                initialRouteName="HomeBottomNavigator"
                // initialRouteName={storage.contains('isFirstTime') ? "AccountNavigator" : "StartupScreen"}
                screenOptions={{
                    animation: 'slide_from_right',
                    headerShown: false
                }}
            >
                <AppTAB.Screen component={StartupNavigator} name="StartupNavigator" />
                <AppTAB.Screen component={AccountNavigator} name="AccountNavigator" />
                <AppTAB.Screen component={HomeBottomNavigator} name="HomeBottomNavigator" />

            </AppTAB.Navigator>
        </NavigationContainer>
    )
}