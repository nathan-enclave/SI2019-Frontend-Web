import {getDataByIdApi, getAllApi, putApi, postApi, delApi } from "../../../api/crud";


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
    getPagination(limit, offset,order, field=[]) {
        return getAllApi(`engineers?orderBy=${order}&filter={"deletedAt":{"$exists":false},"dateOut":{"$exists":false}}&limit=${limit}&offset=${offset}&fields=[${field}]`)
    }

    getById(id){
        return getDataByIdApi('engineers', id)
    }
}
export default new EngineerContainer()