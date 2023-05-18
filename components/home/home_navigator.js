import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import { HomeScreen } from "./home_screen";
import { FoodDashboard } from "./dashboards/food_dashboard_screen";


const HomeTAB = createNativeStackNavigator();

export const HomeNavigator = () => {
    return (
        <HomeTAB.Navigator
            screenOptions={{
                animation: 'fade',
                headerShown: false
            }}
            initialRouteName="HomeScreen"
        >
            <HomeTAB.Screen component={HomeScreen} name="HomeScreen" />
            <HomeTAB.Screen component={FoodDashboard} name="FoodDashboard" />

        </HomeTAB.Navigator>
    )
} 