import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import { FoodScreen } from "./food_screen";
import { FilterScreen } from "./filter_screen";


const FoodTAB = createNativeStackNavigator();

export const FoodNavigator = () => {
    return (
        <FoodTAB.Navigator
            screenOptions={{
                animation: 'fade',
                headerShown: false
            }}
            initialRouteName="FoodScreen"
        >
            <FoodTAB.Screen component={FoodScreen} name="FoodScreen" />
            <FoodTAB.Screen component={FilterScreen} name="FilterScreen" />

        </FoodTAB.Navigator>
    )
} 