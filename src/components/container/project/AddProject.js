export default function AddProject(data){
    console.log(data)
    return new Promise((resolve, reject) =>{
    fetch('https://si-enclave.herokuapp.com/api/v1/projects', {
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
  
  