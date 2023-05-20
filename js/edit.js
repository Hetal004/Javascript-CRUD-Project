import { onLoad } from "./add.js";
import { getapi } from "./getUserById.js";
import { updateData} from "./updateUserById.js";

export async function onEdit() {
    if (confirm('Are you sure to edit this record ?')) {
        const hideform = document.querySelector('.bgEvents')
        const container = document.querySelector(".container");
        const selectedRow = this.parentElement.parentElement;

        hideform.style.display = "flex";
        container.style.filter = "blur(8px)";
        
        let form = document.getElementById('form1');
        const rowId = selectedRow.cells[0].innerHTML;

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

export function editInlineData() {
    if (this.hasAttribute('data-clicked')) {
        return;
    }

    this.setAttribute('data-clicked', 'yes');
    this.setAttribute('data-text', this.innerHTML);

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.value = this.innerHTML;
    input.style.width = this.offsetWidth - (this.clientLeft * 2) + "px";
    input.style.height = this.offsetHeight;
    input.style.border = "0px";
    input.style.borderradius = "0px";
    input.style.fontFamily = "inherit";
    input.style.fontSize = "inherit";
    input.style.textAlign = "inherit";
    input.style.backgroundColor = "#a9d9f8";

    input.onblur = async function () {
            let td = input.parentElement;
            let orig_text = input.parentElement.getAttribute('data-text');
            let curr_text = this.value;
            const parentrow = input.parentElement.parentElement;
            const id = parentrow.firstChild;
            const userName = id.nextSibling;
            const email = userName.nextSibling;
            const role = email.nextSibling;
            const tmpid = parentrow.firstChild.innerHTML;

            if (orig_text != curr_text) {
                td.removeAttribute('data-clicked');
                td.removeAttribute('data-text');
                td.innerHTML = curr_text;
                td.style.cssText = 'padding : 5px';
                console.log(orig_text + ' is changed to ' + curr_text);
            }
            else {
                td.removeAttribute('data-clicked');
                td.removeAttribute('data-text');
                td.innerHTML = curr_text;
                td.style.cssText = 'padding : 5px';
                console.log('No change in data !!');
            }

            // save the data 
            const entry = {
                userName: userName.innerHTML,
                email: email.innerHTML,
                role: role.innerHTML
            };

            if (entry.userName != "" && entry.email != "" && entry.role != "") {
                const data = await updateData(tmpid, entry);
            }
            else {
                td.innerHTML = orig_text;
                alert('Field should not be kept empty!');
            }
     
    }
    
    this.innerHTML = "";
    this.style.cssText = 'padding : 5px';
    this.append(input);
    this.firstElementChild.select();
}
