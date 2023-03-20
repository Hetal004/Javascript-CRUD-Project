

import { deleteapi } from "./deleteuserAPI.js";

export async function onDelete() {
    
    if (confirm('Are you sure to delete this record ?')) {

        const row = this.parentElement.parentElement;
        console.log(row.cells[0].innerHTML);
        let tmpid = row.cells[0].innerHTML;
        document.getElementById("table").deleteRow(row.rowIndex);
        await deleteapi(tmpid);  
    }
}


