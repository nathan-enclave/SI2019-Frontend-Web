export default async function getData(id){
    let response = await fetch('https://si-enclave.herokuapp.com/api/v1/projects/' + id); 
    let data = await response.json()
    return data;
}
