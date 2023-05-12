import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AccountNavigator } from "./account/account_navigation"
import { StartupScreen } from "./startup/startup_screens"
import { storage } from "./common"
import { HomeNavigator } from "./home/home_navigator"

const AppTAB = createNativeStackNavigator()

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppTAB.Navigator
                initialRouteName="AccountNavigator"
                // initialRouteName={storage.contains('isFirstTime') ? "AccountNavigator" : "StartupScreen"}
                screenOptions={{
                    animation: 'slide_from_right',
                    headerShown: false
                }}
            >
                <AppTAB.Screen component={StartupScreen} name="StartupScreen" />
                <AppTAB.Screen component={AccountNavigator} name="AccountNavigator" />
                <AppTAB.Screen component={HomeNavigator} name="HomeNavigator" />

            </AppTAB.Navigator>
        </NavigationContainer>
    )
}