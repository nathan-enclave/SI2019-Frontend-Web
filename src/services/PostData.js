export function PostData(type,userData){
  let BaseUrl = 'https://facebook.github.io/react-native/movies.json';  
  //https://facebook.github.io/react-native/movies.json'
  return new Promise((resolve,reject) =>{
    fetch(BaseUrl+type,{
       method : 'POST',
       body : JSON.stringify(userData)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      resolve(responseJson);
    })
    .catch((error) => {
      reject(error);
    });
});
}
