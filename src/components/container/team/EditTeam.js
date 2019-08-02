export default function Edit(data,id){
    return new Promise((resolve, reject) =>{
    fetch('https://si-enclave.herokuapp.com/api/v1/teams/'+id, { 
        method: 'PUT',
        // headers: {
        //     Authorization: localStorage()
        // },
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
  
  