export default async function getData(){
    let response = await fetch('https://si-enclave.herokuapp.com/api/v1/projects?filter={"deletedAt": {"$exists": false}}'); 
    let data = await response.json()
    return data;
}
