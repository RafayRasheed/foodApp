// import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import { StartupScreen } from "./startup_screens";
import { Started } from "./started_screen";
import { createStackNavigator } from "@react-navigation/stack"

const AccountTAB = createStackNavigator();

export const StartupNavigator = () => {
    return (
        <AccountTAB.Navigator
            screenOptions={{
                animation: 'fade',
                headerShown: false
            }}
            initialRouteName="StartupScreen"
        >
            <AccountTAB.Screen component={StartupScreen} name="StartupScreen" />
            <AccountTAB.Screen component={Started} name="Started" />

        </AccountTAB.Navigator>
    )
} 