export default async function getTeamPag(litmit,offset){
    let response = await fetch('https://si-enclave.herokuapp.com/api/v1/teams?orderBy=id&limit='+litmit+'&offset='+offset); 
    let data = await response.json()
    return data;    
}
