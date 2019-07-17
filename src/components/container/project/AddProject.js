export default function AddProject(data){
    return new Promise((resolve, reject) =>{
    fetch('https://si-enclave.herokuapp.com/api/v1/projects?limit=10&offset=0', {
        method: 'POST',
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
  
  