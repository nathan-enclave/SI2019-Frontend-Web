export default function PostData(type, userData) {
    let BaseUrl = 'http://si-enclave.herokuapp.com/api/v1/auth/'

    return new Promise((resolve, reject) =>{
    fetch(BaseUrl + type, {
        method: 'POST',
        body: JSON.stringify(userData)
    })
        .then((response) =>{
            if (response.status === 200) {
                return response.json()
            }else {
                return {
                    status: response.status,
                    statusText: response.statusText
                }
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