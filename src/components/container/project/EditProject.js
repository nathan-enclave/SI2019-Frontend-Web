export default function Edit(data,id){
    let token = localStorage.getItem("sessionToken")
     token = JSON.parse(token).token
    return new Promise((resolve, reject) =>{
    fetch('http://si-enclave.herokuapp.com/api/v1/projects/'+id, { 
        method: 'PUT',
        headers :{
            Authorzation: 'Bearer ' + token,
            Accept: "application/json",
            'access-control-allow-origin': 'http://localhost:3000/',
            'Content-Type': 'application/json'
        },
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
  
  