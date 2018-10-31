const fname = document.getElementById('fname');
const lname = document.getElementById('lname');

const email = document.getElementById('email');
const emailPatt = new RegExp("@");

const phone = document.getElementById('phone');
const phonePatt = /[+]{1}[358]{3}[40]{2}[0-9]{7}/;

const address = document.getElementById('address');
const postal = document.getElementById('postal');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

let isValid = () => {
    if (fname.value.length < 1 ) return false;
    if (lname.value.length < 1 ) return false;
    if (emailPatt.exec(email.value) == null) return false;
    if (phonePatt.exec(phone.value) == null) return false;
    return true;
 };


submit.addEventListener('click', (e) => {
    if ( isValid() ) {
        console.log("form valid");
    } else {
        console.log("FROM INVALID!");
        e.preventDefault();
    }
});