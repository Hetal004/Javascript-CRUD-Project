import { getCookie } from "./loginApi.js";

export async function getusers() {
   const token = getCookie("Validtime");
    const getUsers = "http://192.168.1.123:3000/users";
    try {
      const response = await fetch(getUsers, {
        headers: {
            'authorization': `Bearer ${token}`,
        }
      });
      const alldata = await response.json();
      // console.log(alldata);
      return alldata;
    } catch (err) {
      console.log(err.message);
    }
  }

