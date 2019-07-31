import {getDataByIdApi, getAllApi, putApi, postApi, delApi } from "../../../api/crud";


class TeamContainer {
    add(data) {
        return postApi('teams', data)
    }
    delete(id) {
        return delApi('teams', id)
    }
    update(id, data){
        return putApi('teams', id, data)
    }
    getPagination(limit, offset) {
        return getAllApi('teams?orderBy=id&limit='+limit+'&offset='+offset)
    }

    getById(id){
        return getDataByIdApi('teams', id)
    }
}
export default new TeamContainer()