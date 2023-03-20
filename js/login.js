import { getToken } from "./loginApi.js";

const login = document.querySelector("#login");
login.addEventListener("click", async function () {
  const entry = {
    username: document.getElementById("userName").value,
    password: document.getElementById("password").value,
  };
  await getToken(entry);

});

