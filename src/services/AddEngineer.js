export default async function AddEngineer(data){
    console.log(data)
    fetch('https://serverapp-api.herokuapp.com/api/v1/engineers', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })  
      console.log(JSON.stringify(data))
}
