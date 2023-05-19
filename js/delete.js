import { deleteapi } from "./deleteuserAPI.js";
import { blurevent } from "./add.js";

const alertbox = document.querySelector('.alert')
const cancel = document.querySelectorAll('.cancelAlert')
const container = document.querySelector('.container')
const confirm2 = document.querySelector('.okbtn2')
const alertbody = document.querySelector('.alert-body')
const toast = document.getElementById('toast');
const toastBox = document.querySelector('#toastBox');
const dltToast = document.querySelectorAll('#toastBox .div');
const deleteMsg = "Record Deleted Successfully!";


export function alertprompt() {
    alertbox.style.display = "block";
    blurevent();

    for (let i = 0; i < 2; i++) {
        cancel[i].addEventListener('click', removeBlurEffect);
    }
}

export function removeBlurEffect() {
    alertbox.style.display = "none";
    container.style.filter = "blur(0px)";
}

export function onDelete() {
    const row = this.parentElement.parentElement;
    console.log(row);
    alertprompt();
    alertbody.innerHTML = 'Are you sure you want to delete this record ?'; 
    confirm2.addEventListener('click', async function() {
        console.log("delete confirm...")
        removeBlurEffect()
        console.log(row.cells[0].innerHTML);
        let tmpid = row.cells[0].innerHTML;
        document.getElementById("table").deleteRow(row.rowIndex);
        showToast(deleteMsg);
        await deleteapi(tmpid);
    });
}

function showToast() {
    console.log("toast showed");
    toast.querySelector('.toast-body').innerHTML = `<i class="fa-regular fa-circle-check"></i> ${deleteMsg}` ;
    toast.classList.add('visible');
    const timer = setTimeout(hideToast, 3000);
}

function hideToast() {
    console.log("toast hided");
    toast.classList.remove('visible');
}
