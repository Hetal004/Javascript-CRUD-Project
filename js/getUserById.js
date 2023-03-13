
export async function getapi() {
    const getUserByIdUrl = "http://192.168.1.123:3000/users/";
    try {const response = await fetch(getUserByIdUrl);
    const data = await response.json();
    console.log(data);
    return data;

    } catch (error) {console.log(error);}
    
    
}
// const users = getapi(getUserByIdUrl);
// console.log(users);