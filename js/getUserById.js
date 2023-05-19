import { getCookie } from "./loginApi.js";

export async function getapi(id) {
    const token = getCookie("Validtime");

    const getUserByIdUrl = "http://localhost:3000/users/" + id ;
    try {const response = await fetch(getUserByIdUrl,{
        headers: {
            'authorization': `Bearer ${token}`,
        }
    });
    const data = await response.json();
    console.log(data);
    return data;

    } catch (error) {console.log(error);}
    
    
}
// const users = getapi(getUserByIdUrl);
// console.log(users);