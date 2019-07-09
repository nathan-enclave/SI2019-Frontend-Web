export default async function AddEngineer(data){
  return new Promise((resolve, reject) =>{
  fetch('https://si-enclave.herokuapp.com/api/v1/engineers', {
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

