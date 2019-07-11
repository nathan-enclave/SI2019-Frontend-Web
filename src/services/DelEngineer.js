export default async function DelEngineer(id){
    return new Promise((resolve, reject) =>{
        const url = 'https://si-enclave.herokuapp.com/api/v1/engineers'
        fetch('https://si-enclave.herokuapp.com/api/v1/engineers' + '/' +id, {
            method: 'DELETE',
            body: JSON.stringify(id)
        })
        .then((response) => {
            if(response.status !== 200){
                return response.status
            } else {
                return response.json()
            }
        } )
        .then((responseJson) => {
            resolve(responseJson)
        })
        .catch((error) => {
            reject(error)
        });
    });
  }
  
  