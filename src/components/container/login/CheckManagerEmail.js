export default function checkManagerEmail(email) {
    return new Promise((resolve, reject) =>{
    fetch('https://si-enclave.herokuapp.com/api/v1/auth/forget', {
        method: 'POST',
        body: JSON.stringify(email)
    })
        .then((response) =>response.json() )
        .then((responseJson) => {
            resolve(responseJson)
        })
        .catch((error) => {
            reject(error)
        });
    });
}   