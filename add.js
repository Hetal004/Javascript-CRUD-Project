import { updateUserdata, onEdit } from './edit.js';
import {onDelete} from './delete.js';
// const updateUserdata = require("./edit.js");

const btn3 = document.querySelector('.button3')
const btn = document.querySelector('.button')
const cancel = document.querySelector('.button5')

const userEntries = [];

document.getElementById("submit").onclick = function () {
    let tmpid = document.getElementById("uid").value;
    console.log(tmpid);
    if (tmpid == "") {
        console.log("submit ...");
        const table = document.getElementById("table");
        const row = table.insertRow(-1);
        const entry = {
            id: window.crypto.randomUUID(), // generate unique id for each entry
            userName: document.getElementById("userName").value,
            email: document.getElementById("email").value,
            role: document.getElementById("role").value
        };
        const id = row.insertCell(0);
        const userName = row.insertCell(1);
        const email = row.insertCell(2);
        const role = row.insertCell(3);
        const action = row.insertCell(4);

        id.innerHTML = entry.id;
        userName.innerHTML = entry.userName;
        email.innerHTML = entry.email;
        role.innerHTML = entry.role;
        const editButton = document.createElement("button");
        editButton.addEventListener("click", onEdit);
        action.appendChild(editButton);
        // action.innerHTML = `<button onClick="${onEdit(this)}">Edit</button>
        //     <button onclick="${onDelete(this)}">Delete</button>`;

        userEntries.push(entry);
        handleStoreInLocal()
    }
    else {
        console.log(tmpid);
        updateUserdata(tmpid)
    }
    // const hideFormAgain = document.querySelector('.hideform')
    hideform.style.display = "none";
    return false
}

const hideform = document.querySelector('.hideform')
btn3.addEventListener('click', function () {
    hideform.style.display = "block";
    resetForm();
})

const cancelAddUser = document.querySelector('.hideform')
cancel.addEventListener('click', function () {
    hideform.style.display = "none";
})

function resetForm() {
    document.getElementById("uid").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("role").value = "";
    // selectedRow = null;
}

export function handleStoreInLocal() {

    const userdata = JSON.stringify(userEntries)
    localStorage.setItem("userEntries", userdata)
}

export function onLoad() {
    console.log("onload...");
    const userdata = localStorage.getItem("userEntries")
    const fetcheddata = JSON.parse(userdata)

    if (fetcheddata == null) return;
    const datavalues = fetcheddata.values();
    for (const value of datavalues) {
        userEntries.push(value);
        console.log(value);
        const table = document.getElementById("table");
        const row = table.insertRow(-1);

        const id = row.insertCell(0);
        const userName = row.insertCell(1);
        const email = row.insertCell(2);
        const role = row.insertCell(3);
        const action = row.insertCell(4);

        id.innerHTML = value.id;
        userName.innerHTML = value.userName;
        email.innerHTML = value.email;
        role.innerHTML = value.role;

        const editButton = document.createElement("button");
        const textForEditButton = document.createTextNode("Edit");
        editButton.appendChild(textForEditButton);
        editButton.addEventListener("click", onEdit);
        action.appendChild(editButton);

        const deleteButton = document.createElement("button");
        const textForDeleteButton = document.createTextNode("Delete");
        deleteButton.appendChild(textForDeleteButton);
        deleteButton.addEventListener("click", onDelete);
        action.appendChild(deleteButton);

    }
}
document.addEventListener('DOMContentLoaded', onLoad);

