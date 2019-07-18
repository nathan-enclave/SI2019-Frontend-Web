export default async function getTeamDetail(id){
    let response = await fetch('https://si-enclave.herokuapp.com/api/v1/teams/' + id); 
    let data = await response.json()
    return data;
}
