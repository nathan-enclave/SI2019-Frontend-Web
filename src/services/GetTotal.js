
export default async function getTotal(){
    let response = await fetch('https://cool-demo-api.herokuapp.com/api/v1/dashboard');
    let data = await response.json()
    return data;
}