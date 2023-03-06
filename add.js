
const btn3 = document.querySelector('.button3')
const btn = document.querySelector('.button')
const cancel = document.querySelector('.button5')

const userEntries = [];


document.getElementById("submit").onclick = function () {

    const table = document.getElementById("table");
    const row = table.insertRow(-1);
    const userName = row.insertCell(0);
    const email = row.insertCell(1);
    const role = row.insertCell(2);
    const action = row.insertCell(3);
    
    userName.innerHTML = document.getElementById("userName").value;
    email.innerHTML = document.getElementById("email").value;
    role.innerHTML = document.getElementById("role").value;
    action.innerHTML = `<button onclick="onEdit(this)">Edit</button>
                       <button onclick="onDelete(this)">Delete</button>`;   

    const entry = {
        id: window.crypto.randomUUID(), // generate unique id for each entry
        userName: document.getElementById("userName").value,
        email: document.getElementById("email").value,
        role: document.getElementById("role").value
    };

    userEntries.push(entry);
    
    return false
}


const hideform = document.querySelector('.hideform')
btn3.addEventListener('click', function () {
    hideform.style.display = "block";
})

const hideFormAgain = document.querySelector('.hideform')
btn.addEventListener('click', function () {
    hideform.style.display = "none";
    resetForm()
    handleStoreInLocal()
}

)
const cancelAddUser = document.querySelector('.hideform')
cancel.addEventListener('click', function () {
    hideform.style.display = "none";
})

function resetForm() {
    document.getElementById("userName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("role").value = "";
    selectedRow = null;
}

function handleStoreInLocal() {

    const userdata = JSON.stringify(userEntries)
    localStorage.setItem("userEntries" , userdata)                                                                                                                         
    
}

function onLoad() {

    const userdata = localStorage.getItem("userEntries")
    const fetcheddata= JSON.parse(userdata)

    
    if (fetcheddata === null) return;
    const datavalues = fetcheddata.values();

    for (const value of datavalues) {
        userEntries.push(value);
        console.log(value);
        const table = document.getElementById("table");
        const row = table.insertRow(-1);
        const userName = row.insertCell(0);
        const email = row.insertCell(1);
        const role = row.insertCell(2);
        const action = row.insertCell(3);

        userName.innerHTML = value.userName;
        email.innerHTML = value.email;
        role.innerHTML = value.role;
        action.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                            <button onclick="onDelete(this)">Delete</button>`;   
      }
}

document.addEventListener('DOMContentLoaded', onLoad);

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
    }
}
