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
    getPagination(limit, offset,field=[]) {
        // return getAllApi('projects?orderBy=id&filter={"deletedAt":{"$exists":false}}&limit='+limit+'&offset='+offset)
        return getAllApi(`projects?orderBy=id&filter={"deletedAt":{"$exists":false}}&limit=${limit}&offset=${offset}&fields=[${field}]`)
        
    }
    getPending(limit, offset,field=[]) {
        return getAllApi(`projects?orderBy=id&filter={"deletedAt":{"$exists":false},"status":"pending"}&limit=${limit}&offset=${offset}&fields=[${field}]`)
        
    }
    getById(id){
        return getDataByIdApi('projects', id)
    }
}
export default new ProjectContainer()