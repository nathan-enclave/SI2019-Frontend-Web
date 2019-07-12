export default async function getLang(){
    let response = await fetch('https://si-enclave.herokuapp.com/api/v1/skills/statistic/ratio');
    let data = await response.json()
    return data;
}