import firebase from 'firebase'
import {config} from './config'

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
        console.log('user token: ', token);
        localStorage.setItem('notification-token', token)
        return token;
    } catch (error) {
        console.error(error);
    }
}
