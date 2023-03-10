import { onLoad } from "./add.js";
export function onEdit() {
    if (confirm('Are you sure to edit this record ?')) {
        const hideform = document.querySelector('.hideform')
        const selectedRow = this.parentElement.parentElement;
        console.log(selectedRow);
        let form = document.getElementById('form1');
        form.uid.value = selectedRow.cells[0].innerHTML;
        form.name.value = selectedRow.cells[1].innerHTML;
        form.email.value = selectedRow.cells[2].innerHTML;
        form.role.value = selectedRow.cells[3].innerHTML;
        document.getElementById("form_title").innerHTML = 'Update User';
        hideform.style.display = "block";
    }
}
export function updateUserdata(tmpid) {
        try {
            const userdata = localStorage.getItem("userEntries")
            const fetcheddata = JSON.parse(userdata)
            console.log(fetcheddata);
            for (let i = 0; i < fetcheddata.length; i++) {
                console.log(fetcheddata[i].id);
                if (fetcheddata[i].id == tmpid) {
                    fetcheddata[i].userName = document.getElementById("userName").value,
                        fetcheddata[i].email = document.getElementById("email").value,
                        fetcheddata[i].role = document.getElementById("role").value
                    }
                }
            const userdata2 = JSON.stringify(fetcheddata)
            localStorage.setItem("userEntries", userdata2)
            console.log(userEntries);
        }
        catch (err) {
            console.log(err.message);
        }

        const table = document.getElementById("table");
        for (var i = 1; i < table.rows.length;) {
            table.deleteRow(i);
        }
        userEntries.length = 0;
        onLoad();    
}