import { getCookie } from "./loginApi.js";
export async function postapi(entry) {
    const token = getCookie("Validtime");
    const url = "https://js-server2.onrender.com/users"
    console.log(entry)
    try {
        
        const response = await fetch(url, {
            method: 'POST',
            body:JSON.stringify({user: entry}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'authorization': `Bearer ${token}`,
            }
        })
        console.log(response)
        const data2 = await response.body.json();
        console.log(data2)
        return data2;
        
    } catch (error) { console.log(error); }
}

