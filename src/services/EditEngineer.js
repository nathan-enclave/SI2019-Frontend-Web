export default async function AddEngineer(data,id){
    return new Promise((resolve, reject) =>{
        console.log('https://si-enclave.herokuapp.com/api/v1/engineers' +'/'+id)
    fetch('https://si-enclave.herokuapp.com/api/v1/engineers' +'/'+id, {
        method: 'PUT',
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((responseJson) => {
            
            resolve(responseJson)
        })
        .catch((error) => {
            reject(error)
        });
    });
  }
  
  