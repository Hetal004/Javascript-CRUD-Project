export async function deleteapi(id){
    const url = "http://192.168.1.123:3000/users/" + id ;
try {
const deleteMethod = {
    method: 'DELETE', 
    headers: {
     'Content-type': 'application/json; charset=UTF-8' 
    },
    
   }
   // Make the HTTP Delete call using fetch api
   const response = await  fetch(url , deleteMethod) 

} catch (error) { console.log(error); }
}
