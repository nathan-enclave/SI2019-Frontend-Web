export default function sendCode(email) {
    return new Promise((resolve, reject) =>{
    fetch('https://si-enclave.herokuapp.com/api/v1/auth/forget/sendcode', {
        method: 'POST',
        body: JSON.stringify(email)
    })
        // .then((response) =>response.json() )
        .then((response) =>{console.log(response)} )
        .then((responseJson) => {
            resolve(responseJson)
        })
        .catch((error) => {
            reject(error)
        });
    });
}   