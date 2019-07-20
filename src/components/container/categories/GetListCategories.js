
export default async function getTotalCategories(){
    let response = await fetch('https://si-enclave.herokuapp.com/api/v1/categories?limit=10&offset=0');
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