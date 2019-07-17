export default function DelEngineer(id){
    return new Promise((resolve, reject) =>{
    fetch('https://si-enclave.herokuapp.com/api/v1/teams/' +id, {
        method: 'DELETE',
        body: JSON.stringify(id)
    })
        .then((response) => {
            console.log(response);
            if(response.status !==200) {
                return response.status
            }
            else{
                return response.json()
            }
        })
        .then((responseJson) => {
            resolve(responseJson)
        })
        .catch((error) => {
            reject(error)
        });
    });
  }
  
  