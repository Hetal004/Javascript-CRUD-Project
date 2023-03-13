import { updateUserdata, onEdit } from './edit.js';
import {onDelete} from './delete.js';
import { postapi } from './createUser.js';
import { getusers } from './getAllUsers.js';

const createUserBtn = document.querySelector('.button3')
const btn = document.querySelector('.button')
const cancel = document.querySelector('.button5')
const blur = document.querySelector('.button3')

export const userEntries = [];

document.getElementById("submit").onclick = async function (e) {
    e.preventDefault();
    validate()
    let tmpid = document.getElementById("uid").value;
    // console.log(tmpid);
    if (tmpid == "" ) {
        // console.log("submit ...");
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
        const textForEditButton = document.createTextNode("Edit");
        editButton.appendChild(textForEditButton);
        editButton.addEventListener("click", onEdit);
        action.appendChild(editButton);

        const deleteButton = document.createElement("button");
        const textForDeleteButton = document.createTextNode("Delete");
        deleteButton.appendChild(textForDeleteButton);
        deleteButton.addEventListener("click", onDelete);
        action.appendChild(deleteButton);
        
        // userEntries.push(entry);
        
        // handleStoreInLocal()
        const data = await postapi(entry)
        
        // console.log(data);
       
    }
    else {
        // console.log(tmpid);
        validate() 
        updateUserdata(tmpid)
    }
    // const hideFormAgain = document.querySelector('.hideform')
    hideform.style.display = "none";
    return false
    
}


const container = document.querySelector('.container')
blur.addEventListener('click', function () {
    container.style.filter = "blur(8px)";
        
})

const hideform = document.querySelector('.hideform')
createUserBtn.addEventListener('click', function () {
    hideform.style.display = "block";
    resetForm();
})

// const hideFormAgain = document.querySelector('.hideform')
btn.addEventListener('click', function () {
    
    hideform.style.display = "none";
    container.style.filter = "blur(0px)";
    resetForm()
    // handleStoreInLocal()
}

)
cancel.addEventListener('click', function () {
    hideform.style.display = "none";
    container.style.filter = "blur(0px)";
    resetForm()
})

function resetForm(input) {
    document.getElementById("uid").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("role").value = "";
    
    const formField = input;

    formField.classList.remove('success');
    formField.classList.remove('error');
    formField.classList.add('clear');
    // selectedRow = null;
}

// export function handleStoreInLocal() {

//     const userdata = JSON.stringify(userEntries)
//     localStorage.setItem("userEntries", userdata)
// }

export async function onLoad() {
    // console.log("onload...");

    const {data: {users}} = await getusers();
    // console.log(users);
    for (let i = 0; i < users.length; i++) {
            const table = document.getElementById("table");
            const row = table.insertRow(-1);
            
            const id2 = row.insertCell(0);
            const userName2 = row.insertCell(1);
            const email2 = row.insertCell(2);
            const role2 = row.insertCell(3);
            const action = row.insertCell(4);

            // console.log(users[i].id);
            id2.innerHTML = users[i].id;
            userName2.innerHTML = users[i].userName;
            email2.innerHTML = users[i].email;
            role2.innerHTML = users[i].role;

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

    // }
}
document.addEventListener('DOMContentLoaded', onLoad);


const userNameEl = document.querySelector('#userName');
const emailEl = document.querySelector('#email');
const roleEl = document.querySelector('#role');
const form = document.querySelector("#form1"); 


const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const checkUsername = () => {
    // console.log('Checking username')
    let valid = false;

    const min = 3,
        max = 25;

    const userName = userNameEl.value.trim();

    if (!isRequired(userName)) {
        showErrorMessage(userNameEl, 'Username cannot be blank.');
        showError(userNameEl);
    } else if (!isBetween(userName.length, min, max)) {
        showErrorMessage(userNameEl, `Username must be between ${min} and ${max} characters.`)
        showError(userNameEl);
    } else {
        showSuccessMessage(userNameEl);
        showSuccess(userNameEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showErrorMessage(emailEl, 'Email cannot be blank.');
        showError(emailEl);
    } else if (!isEmailValid(email)) {
        showErrorMessage(emailEl, 'Email is not valid.')
        showError(emailEl);
    } else {
        showSuccessMessage(emailEl);
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};


const checkRole = () => {
    let valid = false;
    const role = roleEl.value.trim();
    if (!isRequired(role)) {
        showErrorMessage(roleEl, 'Role cannot be blank.');
        showError(roleEl);
    } else {
        showSuccessMessage(roleEl);
        showSuccess(roleEl);
        valid = true;
    }
    return valid;
};

const showError = (input) => {

    const formField = input;

    formField.classList.remove('success');
    formField.classList.add('error');

};
const showErrorMessage = (input, message) => {

    const formField = input.parentElement;

    const error = formField.querySelector('small');
    error.textContent = message;
};



const showSuccess = (input) => {

    const formField = input;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

 }
const showSuccessMessage = (input) => {

    const formField = input.parentElement;

    const error = formField.querySelector('small');
    error.textContent = '' ;
 }

const validate = () => {
    // console.log("validate called...")

    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isRoleValid = checkRole();  

    let isFormValid = (isUsernameValid &&
        isEmailValid &&
        isRoleValid) ;
       

    // submit to the server if the form is valid
    if (isFormValid) {
        return true   
    }
    else{
        alert('Please enter valid details.')
        return  false;
    }
    
};

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'userName':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'role':
            checkRole();
            break;
    }
}));

