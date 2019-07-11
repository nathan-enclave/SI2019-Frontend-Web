export default async function AddEngineer(data,id){
    console.log(data)
    return new Promise((resolve, reject) =>{
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
  
  