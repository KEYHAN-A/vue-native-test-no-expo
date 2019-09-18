import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

const configure = () => {
    PushNotification.configure({

        onRegister: function (token) {
            //process token
        },

        onNotification: function (notification) {
            notification.finish(PushNotificationIOS.FetchResult.NoData);
        },

        permissions: {
            alert: true,
            badge: true,
            sound: true
        },

        popInitialNotification: true,
        requestPermissions: true,

    })
};
const localNotification = () => {
    PushNotification.localNotificationSchedule({
        message: 'Hello Paribu!',
        date: new Date(Date.now() + 6 * 1000)
    })
};


export {
    configure,
    localNotification
};