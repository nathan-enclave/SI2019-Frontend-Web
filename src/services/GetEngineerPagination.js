export default function getDataPagination(litmit, offset) {
    // let response = await
    // fetch('https://si-enclave.herokuapp.com/api/v1/engineers?orderBy=id&filter={"d
    // eletedAt":{"$exists":false}}&limit='+litmit+'&offset='+offset).json(); // let
    // data = await response.json() return response;
    return fetch('https://si-enclave.herokuapp.com/api/v1/engineers?orderBy=id&filter={"deletedAt"' +
            ':{"$exists":false}}&limit=' + litmit + '&offset=' + offset).then(res=> res.json())

}
