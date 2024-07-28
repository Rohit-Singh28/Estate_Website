const signUpForm = document.querySelector('.signupform');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const loginForm = document.querySelector('.loginform');



const setError = (inputField, msg) => {
    let p = inputField.nextElementSibling;
    p.innerText = msg;
    p.classList.remove('valid');
    inputField.classList.remove('valid');
    p.classList.add('tnonvalid');
    inputField.classList.add('nonvalid');
}

const setValid = (inputField, msg) => {
    let p = inputField.nextElementSibling;
    p.innerText = msg;
    inputField.classList.remove('nonvalid');
    p.classList.remove('tnonvalid');
    p.classList.add('tvalid');
    inputField.classList.add('valid');
}

signUpForm.addEventListener("submit",(e) => {
    function toPreventDefault(){
        e.preventDefault();
    }
    checkValidity(toPreventDefault);
})

const checkValidity = (toPreventDefault) => {
    let usernameVal = username.value.trim();
    let emailVal = email.value.trim();
    let passwordVal = password.value.trim();

    
    if (usernameVal == '') {
        setError(username, "username can't be Empty");
        toPreventDefault();
    }
    else {
        setValid(username, "Valid")
    }

    
    if (emailVal == '') {
        setError(email, "email can't be Empty");
        toPreventDefault();
    }
    else {
        setValid(email, "Valid")
    }

    
    if (passwordVal == '') {
        setError(password, "password can't be Empty");
        toPreventDefault();
    }
    else {
        setValid(password, "Valid")
    }
}

