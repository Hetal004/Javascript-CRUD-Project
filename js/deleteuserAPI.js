import { getCookie } from "./loginApi.js";
export async function deleteapi(id){
    const token = getCookie("Validtime");

    const url = "https://js-server2.onrender.com/users/" + id ;
try {
const deleteMethod = {
    method: 'DELETE', 
    headers: {
     'Content-type': 'application/json; charset=UTF-8',
     'authorization': `Bearer ${token}`, 
    },
    
   }
   // Make the HTTP Delete call using fetch api
   const response = await  fetch(url , deleteMethod) 

} catch (error) { console.log(error); }
}
