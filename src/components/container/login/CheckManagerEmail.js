export default function checkManagerEmail(email) {
    let BaseUrl = 'http://si-enclave.herokuapp.com/api/v1/auth/forget'

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + type, {
            method: 'POST',
            body: JSON.stringify(email)
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