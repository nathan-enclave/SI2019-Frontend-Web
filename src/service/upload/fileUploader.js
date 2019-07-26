import {initializeFirebase} from "../firebase";
import firebase from 'firebase/app'
import 'firebase/storage'
import {getTimeForSlug} from "../../utils/commonHelper";

initializeFirebase()
const storage = firebase.storage()

export async function handleUpload(image) {
    const imageName = `${getTimeForSlug()}-${image.name}`
    const store = storage.ref(`images/${imageName}`)
    await store.put(image);
    return storage
        .ref('images')
        .child(imageName)
        .getDownloadURL()
   
}
