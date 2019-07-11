
export default async function getTotal(){
    let response = await fetch('https://si-enclave.herokuapp.com/api/v1/skills?limit=100');
    let data = await response.json()
    data = data.results
    data.map(e => {
        e.value = e.id;
        e.label = e.name;
        delete e.id;
        delete e.name
    })    
    
    return data;
}