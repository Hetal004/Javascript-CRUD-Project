export async function updateData(id, entry) {
    const updateUserByIdUrl = "http://192.168.1.123:3000/users/" + id ;
    try {
        const response = await fetch(updateUserByIdUrl, {
            method: 'PUT',
            body:JSON.stringify({ user : entry}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
        const data = await response.json();
        return data;
    }
    catch(err) {
        console.log(err.message);
    }
}
export async function updateInlineData(id, entry) {
    const updateUserByIdUrl = "http://192.168.1.123:3000/users/" + id ;
    try {
        const response = await fetch(updateUserByIdUrl, {
            method: 'PUT',
            body:JSON.stringify({ user : entry}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
        const data = await response;
        return data;
    }
    catch(err) {
        console.log(err.message);
    }
}
