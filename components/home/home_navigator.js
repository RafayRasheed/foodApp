import React from 'react';
import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import { HomeScreen } from "./home_screen";



const HomeTAB = createNativeStackNavigator();

export const HomeNavigator = ({ navigation, route }) => {
    // React.useLayoutEffect(() => {
    //     if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
    //         navigation.setOptions({ tabBarStyle: { display: 'none' } })

    //         // navigation.setOptions({ tabBarStyle: { display: 'none' } });
    //     } else {
    //         // navigation.setOptions({ tabBarStyle: { display: 'flex' } })

    //         navigation.setOptions({
    //             tabBarStyle: {
    //                 display: 'flex',
    //                 backgroundColor: myColors.background,
    //                 paddingHorizontal: myWidth(3.5),
    //                 alignItems: 'center',
    //                 justifyContent: 'center',
    //                 height: myHeight(9.5),
    //                 paddingBottom: ios ? myHeight(2.2) : myHeight(1.5),
    //                 paddingTop: myHeight(2.5),
    //             },
    //         })

    //         // navigation.setOptions({
    //         //     // tabBarStyle: {
    //         //     //     // borderTopLeftRadius: responsiveScreenWidth(8),
    //         //     //     // borderTopRightRadius: responsiveScreenWidth(8),
    //         //     //     // backgroundColor: myColors.background,
    //         //     //     // height: responsiveScreenHeight(7.8),
    //         //     // }
    //         // });
    //     }
    // }, [navigation, route]);
    return (
        <HomeTAB.Navigator
            screenOptions={{
                animation: 'fade',
                headerShown: false
            }}
            initialRouteName="HomeScreen"
        >
            <HomeTAB.Screen component={HomeScreen} name="HomeScreen" />

        </HomeTAB.Navigator>
    )
} 