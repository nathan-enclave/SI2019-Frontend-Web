
export default async function getTotalSkills(){
    let response = await fetch('https://si-enclave.herokuapp.com/api/v1/skills?limit=100');
    let data = await response.json()
    data = data.results
    data.forEach(e => {
        e.value = e.id;
        e.label = e.name;
        delete e.id;
        delete e.name
    })    
    
    return data;
}