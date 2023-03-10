
export async function postapi(entry) {
    const url = "http://192.168.1.123:3000/users"
    console.log(entry)
    try {
        const response = await fetch(url, {
            method: 'POST',
            body:JSON.stringify({user: entry}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        console.log(response)
        const data2 = await response.body.json();
        console.log(data2)
        return data2;
        
    } catch (error) { console.log(error); }
}

