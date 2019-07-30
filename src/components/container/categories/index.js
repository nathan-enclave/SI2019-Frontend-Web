import  {getDataByIdApi, getAllApi, putApi, postApi, delApi } from "../../../api/crud";


class CategoryContainer {
    add(data) {
        return postApi('categories', data)
    }
    delete(id) {
        return delApi('categories', id)
    }
    update(id, data){
        return putApi('categories', id, data)
    }
    getAll() {
        return getAllApi('categories')
    }
    getById(id){
        return getDataByIdApi('categories', id)
    }
}
export default new CategoryContainer()