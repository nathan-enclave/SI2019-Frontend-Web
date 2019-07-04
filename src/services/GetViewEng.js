import { async } from "q";

export default async function getData(){
    let response = await fetch('https://cool-demo-api.herokuapp.com/api/v1/engineers');
    let data = await response.json()
    return data;
}
