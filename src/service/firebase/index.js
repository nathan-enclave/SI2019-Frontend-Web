import firebase from 'firebase/app'
import 'firebase/storage'
var firebaseConfig = {
    apiKey: "AIzaSyA3jzx3v2gZS9hRkScN6b31Ca6zX1oeyLc",
    authDomain: "enclave-storage.firebaseapp.com",
    databaseURL: "https://enclave-storage.firebaseio.com",
    projectId: "enclave-storage",
    storageBucket: "enclave-storage.appspot.com",
    messagingSenderId: "135792169448",
    // appID: "1:135792169448:web:db4e49649399b120",
  };
firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export{
    storage, firebase as default
}

