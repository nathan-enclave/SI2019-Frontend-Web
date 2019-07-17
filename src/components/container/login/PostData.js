export default function PostData(type, userData) {
    let BaseUrl = 'http://si-enclave.herokuapp.com/api/v1/auth/'

    return new Promise((resolve, reject) =>{
    fetch(BaseUrl + type, {
        method: 'POST',
        body: JSON.stringify(userData)
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