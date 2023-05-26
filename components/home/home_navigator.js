import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import { HomeScreen } from "./home_screen";
import { FoodDashboard } from "./dashboards/food_dashboard_screen";
import { FilterScreen } from "./dashboards/filter_screen";
import { RestaurantDetail } from "./restaurant_detail_screen";

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
            <HomeTAB.Screen component={FilterScreen} name="Filter" />
            <HomeTAB.Screen component={RestaurantDetail} name="RestaurantDetail" />


        </HomeTAB.Navigator>
    )
} 