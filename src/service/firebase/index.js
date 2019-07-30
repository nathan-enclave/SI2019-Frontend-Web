import firebase from 'firebase'
import {config} from './config'
// import { Notification } from "../../components/presentation/include/Notification";
export const initializeFirebase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

}

export const askForPermissioToReceiveNotifications = async() => {
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        return token;
    } catch (error) {
        console.error(error);
    }
}

export const handleRealTimeMessage = () => {
    try {
        const messaging = firebase.messaging();
        messaging.onMessage((payload) => {
            console.log('Message received. ', payload);
            return payload.notification
        });
          
    } catch (error) {
        console.log(error)
    }
}