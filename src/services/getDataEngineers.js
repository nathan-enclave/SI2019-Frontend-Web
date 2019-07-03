export default async function getData (){
    //https://facebook.github.io/react-native/movies.json'
    let response = await fetch('https://cool-demo-api.herokuapp.com/api/v1/engineers');
    let data = await response.json()
    return data;
    
  }
  