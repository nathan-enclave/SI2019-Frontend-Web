
export default async function getTotal(){
    let response = await fetch('https://si-enclave.herokuapp.com/api/v1/dashboard/total');
    let data = await response.json()
    return data;
}