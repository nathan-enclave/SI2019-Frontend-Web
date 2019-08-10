import { getAllApi } from "../../../api/crud";

class LocationContainer {   
    getLocation() {
        return getAllApi(`locations?fields=["id","city","country"]&limit=1000`)
    }
}
export default new LocationContainer()