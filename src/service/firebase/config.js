exports.config = {
    apiKey: process.env.FIRE_BASE_API_KEY || 'AIzaSyA3jzx3v2gZS9hRkScN6b31Ca6zX1oeyLc',
    authDomain: process.env.FIRE_BASE_AUTH_DOMAIN || "enclave-storage.firebaseapp.com",
    databaseURL: process.env.FIRE_BASE_DB_URL || "https://enclave-storage.firebaseio.com",
    projectId: process.env.FIRE_BASE_PROJECT_ID || "enclave-storage",
    storageBucket: process.env.FIRE_BASE_STORAGE_BUCKET || "enclave-storage.appspot.com",
    messagingSenderId: process.env.FIRE_BASE_SENDER_ID || "135792169448",
    appId: "1:135792169448:web:0e89f7b61e782bc9"
}
