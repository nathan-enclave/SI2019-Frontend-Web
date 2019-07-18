import {storage} from "../firebase";
import {getTimeForSlug} from "../../utils/commonHelper";

export async function handleUpload(image) {
    const imageName = `${getTimeForSlug()}-${image.name}`
    const store = storage.ref(`images/${imageName}`)
    await store.put(image);
    return storage
        .ref('images')
        .child(imageName)
        .getDownloadURL()
   
}
