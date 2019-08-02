export default async function getData(){
    let response = await fetch('https://si-enclave.herokuapp.com/api/v1/engineers?filter={"deletedAt": {"$exists": false}}'); 
    // let response = await fetch('http://localhost:3001/api/v1/engineers?filter={"deletedAt": {"$exists": false}}'); 
    let data = await response.json()
    return data;
}
