async function getToken(entry) {
  try {
    console.log("getToken called..........", entry);

    const res = await fetch("http://192.168.1.123:3000/login", {
      method: "POST",
      body: JSON.stringify(entry),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.info("data", data);
  } catch (error) {
    console.info(error);
  }
}


const login = document.querySelector("#login");
login.addEventListener("click", async function () {
  const entry = {
    username: document.getElementById("userName").value,
    password: document.getElementById("password").value,
  };
  console.log(entry);
  const authentication = await getToken(entry);
  console.info(authentication); 

    if (authentication == true) {
      window.location = "index.html";
    } else{
      alert('Invalid Username or password..')
    }
});
