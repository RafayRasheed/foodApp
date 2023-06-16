import React,{useState} from 'react';
import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import { HomeScreen } from "./home_screen";
import { Categories } from './home_data';
import { CategoryFull } from './category_full_screen';
import { myColors } from '../../ultils/myColors';
import { StatusBar } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { RestaurantDetail } from './restaurant_detail_screen';



const HomeTAB = createNativeStackNavigator();
const hideStatusScreens=['RestaurantDetail']
export const HomeNavigator = ({ navigation, route }) => {
    const [hideStatus, setHideState] = useState(false)
    React.useLayoutEffect(() => {
        if (hideStatusScreens.includes(getFocusedRouteNameFromRoute(route))) {
            setHideState(true)

            // navigation.setOptions({ tabBarStyle: { display: 'none' } });
        } else {
            // navigation.setOptions({ tabBarStyle: { display: 'flex' } })
setHideState(false)
        }
    }, [navigation, route]);
    return (
        <>
         <StatusBar backgroundColor={hideStatus?'transparent':myColors.background} translucent={hideStatus?true:false}/>
       
        <HomeTAB.Navigator
            screenOptions={{
                animation: 'fade',
                headerShown: false
            }}
            initialRouteName="HomeScreen"
        >
            <HomeTAB.Screen component={HomeScreen} name="HomeScreen" />
            <HomeTAB.Screen component={CategoryFull} name="CategoryFull" />
            <HomeTAB.Screen component={RestaurantDetail} name="RestaurantDetail" />

        </HomeTAB.Navigator>
        </>
    )
} 