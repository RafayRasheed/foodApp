/**
 * @format
 */

import { Alert, AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import { navigateNoti, navigationRef, notificationListeners } from './components/RootNavigation';
import NavigationService from './components/NavigationService';

messaging().setBackgroundMessageHandler(async remoteMessage => {
    // setTimeout(() => {
    //     NavigationService.navigate("OrderDetails", {})
    // }
    //     , 1000)
    // messaging().onNotificationOpenedApp(async remoteMessage => {
    //     console.log(
    //         ' bACK Notification caused app to open from background state:',
    //         remoteMessage,
    //     );

    messaging().se
    // });
});
messaging().getInitialNotification(async remoteMessage => {
    // navigateNoti('OrderDetails', {})


    console.log('Message handled in the kill!', remoteMessage)


});

AppRegistry.registerComponent(appName, () => App);
