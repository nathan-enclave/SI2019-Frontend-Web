
export default async function getTotalProject(){
    let response = await fetch('https://si-enclave.herokuapp.com/api/v1/projects?limit=1000&offset=0');
    let data = await response.json()
    data = data.results
    data.forEach(e => {
        e.value = e.id;
        e.label = e.firstName;
        delete e.id;
        delete e.firstName
    })    
    
    return data;
}