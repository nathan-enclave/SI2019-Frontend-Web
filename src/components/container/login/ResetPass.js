export default function resetPassword(id,data) {
    return new Promise((resolve, reject) =>{
    fetch('https://si-enclave.herokuapp.com/api/v1/auth/forget/resetPassword/' + id, {
        method: 'POST',
        body: JSON.stringify(data)
    })
        // .then((response) =>response.json() )
        .then((response) =>response)
        .then((responseJson) => {
            resolve(responseJson)
        })
        .catch((error) => {
            reject(error)
        });
    });
}   