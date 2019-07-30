import  {getDataByIdApi, getAllApi, putApi, postApi, delApi } from "../../../api/crud";


class ProjectContainer {
    add(data) {
        return postApi('projects', data)
    }
    delete(id) {
        return delApi('projects', id)
    }
    update(id, data){
        return putApi('projects', id, data)
    }
    getPagination(limit, offset) {
        return getAllApi('projects?orderBy=id&filter={"deletedAt":{"$exists":false}}&limit='+limit+'&offset='+offset)
    }
    getById(id){
        return getDataByIdApi('projects', id)
    }
}
export default new ProjectContainer()