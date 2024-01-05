
// document.addEventListener('DOMContentLoaded', function () {

function saveToLocalStorage(event) {
    event.preventDefault();

    const NAME = event.target.username.value;
    const EMAIL = event.target.emailId.value;
    const PHONE = event.target.phoneNo.value;

    let userDetails = {
        NAME,
        EMAIL,
        PHONE,
    }

    let userDetail = JSON.stringify(userDetails);
    localStorage.setItem('userDetails', userDetail);
    // let myObj = JSON.parse(localStorage.getItem('userDetails'));


};




