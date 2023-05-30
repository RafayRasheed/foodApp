import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import { DestinationScreen } from "./destination_screen";
import { RideScreen } from "./ride_screen_dashboard";


const RideTAB = createNativeStackNavigator();

export const RideNavigator = () => {
    return (
        <RideTAB.Navigator
            screenOptions={{
                animation: 'fade',
                headerShown: false
            }}
            initialRouteName="RideScreen"
        >
            <RideTAB.Screen component={RideScreen} name="RideScreen" />
            <RideTAB.Screen component={DestinationScreen} name="DestinationScreen" />

        </RideTAB.Navigator>
    )
} 