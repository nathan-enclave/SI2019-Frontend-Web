import {getDataByIdApi, getAllApi, putApi, postApi, delApi } from "../../../api/crud";


class DashboardContainer {
    getStatistic(subUrl){
        return getAllApi('subUrl')
    }
}
export default new DashboardContainer()