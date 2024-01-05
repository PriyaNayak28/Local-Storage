
// document.addEventListener('DOMContentLoaded', function () {

function saveToLocalStorage(event) {
    event.preventDefault();

    const NAME = event.target.username.value;
    const EMAIL = event.target.emailId.value;
    const PHONE = event.target.phoneNo.value;

    localStorage.setItem('name', NAME);
    localStorage.setItem('email', EMAIL);
    localStorage.setItem('phone', PHONE);

};




