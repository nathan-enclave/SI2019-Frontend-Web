export default async function getDataPag(litmit,offset){
    let response = await fetch('https://si-enclave.herokuapp.com/api/v1/engineers?orderBy=-expYear&filter={"deletedAt":{"$exists":false}, "dateOut":{"$exists":false}}&limit='+litmit+'&offset='+offset); 

    let data = await response.json()
    console.log(data.total);
    
    return data;
    
}
