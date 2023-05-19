import { getCookie } from "./loginApi.js";
export async function updateData(id, entry) {
    const token = getCookie("Validtime");
    const updateUserByIdUrl = "https://js-server2.onrender.com/users/" + id ;
    try {
        const response = await fetch(updateUserByIdUrl, {
            method: 'PUT',
            body:JSON.stringify({ user : entry}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'authorization': `Bearer ${token}`,
            }
        });
        const data = await response.json();
        return data;
    }
    catch(err) {
        console.log(err.message);
    }
}
