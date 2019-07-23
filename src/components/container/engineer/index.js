import { putApi, postApi, delApi } from "../../../api/crud";


class EngineerContainer {
    add(data) {
        return postApi('engineers', data)
    }
    delete(id) {
        return delApi('engineers', id)
    }
    edit(id, data){
        return putApi('engineers', id, data)
    }
}
export default new EngineerContainer()