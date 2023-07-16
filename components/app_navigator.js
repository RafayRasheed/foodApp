import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StartupNavigator } from "./startup/startup_navigator"
import { HomeBottomNavigator } from "./home/home_bottom_navigator"
import { AccountNavigator } from "./account/account_navigation"
import { ImageViewer } from "./common/image_viewer"
import { AccountNavigator2 } from "./account1/acc_stack"
import { storage } from "./common"
import { createStackNavigator } from "@react-navigation/stack"
import { containFirstTime, containLogin } from "./functions/storageMMKV"

const AppTAB = createStackNavigator()

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppTAB.Navigator
                // initialRouteName="StartupNavigator"
                initialRouteName={containFirstTime() ? containLogin() ? 'HomeBottomNavigator' : "AccountNavigator" : "StartupScreen"}
                screenOptions={{
                    animation: 'fade',
                    headerShown: false
                }}
            >
                <AppTAB.Screen component={StartupNavigator} name="StartupNavigator" />
                <AppTAB.Screen component={AccountNavigator2} name="AccountNavigator" />
                <AppTAB.Screen component={HomeBottomNavigator} name="HomeBottomNavigator" />
                <AppTAB.Screen component={ImageViewer} name="ImageViewer" />

            </AppTAB.Navigator>
        </NavigationContainer>
    )
}