export async function getToken(entry) {
  try {
    console.log("getToken called..........", entry);

    const res = await fetch("https://js-server2.onrender.com/login", {
      method: "POST",
      body: JSON.stringify(entry),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (!!data.token) {
      window.location = "index.html";
      setCookie("Validtime", data.token, 10);
      
      // setTimeout(function(){
      //   window.location = "http://127.0.0.1:5500/login.html";
      // }, 1 * 60 * 1000);

    } else {
      alert("Invalid credentials.");
    }
  } catch (error) {
    alert("Please try after sometime.");
    return false;
  }

}


function setCookie(c_name, value, exminute) {
  let extime = new Date();
  console.log(extime);
  extime.setMinutes(extime.getMinutes() + exminute);
  console.log(exminute);

  const c_value =
    encodeURI(value) +
    (exminute == null ? "" : "; expires=" + extime.toUTCString());
  document.cookie = c_name + "=" + c_value;
}

export function getCookie(c_name) {
  const nameEQ = c_name + "=";
  let ca = document.cookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

const token = getCookie("Validtime");
export function load(){
  if(token === null){
    window.location="login.html";
  }
}