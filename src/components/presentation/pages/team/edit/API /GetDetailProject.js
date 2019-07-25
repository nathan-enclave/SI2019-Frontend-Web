
export default async function getTotalProject(){
    let response = await fetch('https://si-enclave.herokuapp.com/api/v1/projects?limit=1000&offset=0');
    let data = await response.json()       
    return data;
}