

import { deleteapi } from "./deleteuserAPI.js";

const toast = document.getElementById('toast');
const deleteMsg = "Record Deleted Successfully!";

export async function onDelete() {
    
    if (confirm('Are you sure to delete this record ?')) {

        const row = this.parentElement.parentElement;
        console.log(row.cells[0].innerHTML);
        let tmpid = row.cells[0].innerHTML;
        document.getElementById("table").deleteRow(row.rowIndex);
        showToast(deleteMsg);
        await deleteapi(tmpid);  
    }
}

export function showToast(msg) {
    // console.log("toast showed");
    toast.querySelector('.toast-body').innerHTML = `<i class="fa-regular fa-circle-check"></i> ${msg}` ;
    toast.classList.add('visible');
    const timer = setTimeout(hideToast, 4000);
}

function hideToast() {
    // console.log("toast hided");
    toast.classList.remove('visible');
}


