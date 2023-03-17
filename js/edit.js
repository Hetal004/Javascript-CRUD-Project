import { onLoad } from "./add.js";
import { removeBlurEffect, alertprompt } from "./delete.js";
import { getapi } from "./getUserById.js";
import { updateData } from "./updateUserById.js";


const alertbox = document.querySelector('.alert')
const confirm1 = document.querySelector('#okbtn')
const alertbody = document.querySelector('.alert-body')

export function onEdit() {
    alertprompt();
    alertbody.innerHTML = 'Are you sure you want to edit this record ?'; 
    confirm1.addEventListener('click', setData);

    async function setData() {
        removeBlurEffect()
        alertbox.style.display = "none";
        const hideform = document.querySelector('.hideform')
        const selectedRow = this.parentElement.parentElement;
        console.log(selectedRow);

        hideform.style.display = "block";

        let form = document.getElementById('form1');
        const rowId = selectedRow.cells[0].innerHTML;
        console.log(rowId);

        const { data: { id, userName, email, role } } = await getapi(rowId);
        if (rowId === id) {
            form.uid.value = id;
            form.userName.value = userName;
            form.email.value = email;
            form.role.value = role;
            document.querySelector(".formtitle h2").innerHTML = 'Update User';
        }
    }
}

export async function updateUserdata(tmpid) {
    const entry = {
        userName: document.getElementById("userName").value,
        email: document.getElementById("email").value,
        role: document.getElementById("role").value
    };
    const data = await updateData(tmpid, entry);

    const table = document.getElementById("table");
    for (var i = 1; i < table.rows.length;) {
        table.deleteRow(i);
    }
    onLoad();
}