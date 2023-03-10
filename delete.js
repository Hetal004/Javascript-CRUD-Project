export function onDelete() {
    if (confirm('Are you sure to delete this record ?')) {

        const row = this.parentElement.parentElement;
        console.log(row.cells[0].innerHTML);
        let tmpid = row.cells[0].innerHTML;
        document.getElementById("table").deleteRow(row.rowIndex);
        deleteUserData(tmpid);
    }
}

function deleteUserData(tmpid) {
    console.log("deleteUserData called...");

    try {
        const userdata = localStorage.getItem("userEntries")
        console.log(userdata)
        const fetcheddata = JSON.parse(userdata)
        console.log(fetcheddata)
        console.log(fetcheddata.length)

        for (let i = 0; i < fetcheddata.length; i++) {
            if (fetcheddata[i].id == tmpid) {
                console.log(fetcheddata[i].id);

                const deleteItem = fetcheddata.filter(deleteItem => deleteItem.id != fetcheddata[i].id);
                console.log(deleteItem);
                const userdata2 = JSON.stringify(deleteItem)
                console.log(userdata2)
                localStorage.setItem("userEntries", userdata2)
            }
        }
    }
    catch (err) {
        console.log(err.message);
    }
}

