/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import { navigateNoti, navigationRef } from './components/RootNavigation';
import * as RootNavigation from './components/RootNavigation';

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});
messaging().getInitialNotification(async remoteMessage => {
    // navigateNoti('OrderDetails', {})
    RootNavigation.navigate("OrderDetails", {});

    console.log('Message handled in the kill!', remoteMessage);
});
AppRegistry.registerComponent(appName, () => App);
