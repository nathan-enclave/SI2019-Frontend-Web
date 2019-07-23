import { getAllApi, putApi, postApi, delApi } from "../../../api/crud";


class EngineerContainer {
    add(data) {
        return postApi('engineers', data)
    }
    delete(id) {
        return delApi('engineers', id)
    }
    update(id, data){
        return putApi('engineers', id, data)
    }
    getPagination(limit, offset) {
        return getAllApi('engineers?orderBy=id&filter={"deletedAt":{"$exists":false}, "dateOut":{"$exists":false}}&limit='+limit+'&offset='+offset)
    }
}
export default new EngineerContainer()