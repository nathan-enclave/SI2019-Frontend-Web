import { getAllApi } from "../../../api/crud";


class SkillContainer {
    getAll(){
        return getAllApi('skills?limit=1000')
    }
}
export default new SkillContainer()