import { onLoad } from "./add.js";
import { getapi } from "./getUserById.js";
export async function onEdit() {
    if (confirm('Are you sure to edit this record ?')) {
        const hideform = document.querySelector('.hideform')
        const selectedRow = this.parentElement.parentElement;
        console.log(selectedRow);

        // #fetch id from url
        hideform.style.display = "block";

        let form = document.getElementById('form1');
        const {data:{users}} = await getapi( form.uid);

        form.uid.value = users.id;
        form.userName.value = users.userName;
        form.email.value = users.email;
        form.role.value = users.role;
        document.querySelector(".formtitle h2").innerHTML = 'Update User';
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