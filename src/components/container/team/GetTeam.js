export default async function getTeam(litmit,offset){
    let response = await fetch('https://si-enclave.herokuapp.com/api/v1/teams?orderBy=id'); 
    let data = await response.json()
    return data;    
}
