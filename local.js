
// function saveToLocalStorage(event) {
//     event.preventDefault();

//     const NAME = event.target.username.value;
//     const EMAIL = event.target.emailId.value;
//     const PHONE = event.target.phoneNo.value;

//     let userDetails = {
//         NAME,
//         EMAIL,
//         PHONE,
//     }

//     let userDetail = JSON.stringify(userDetails);
//     localStorage.setItem('userDetails', userDetail);
//     // let myObj = JSON.parse(localStorage.getItem('userDetails'));
// };


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

    // let userDetail = JSON.stringify(userDetails);
    // localStorage.setItem('user', userDetail);
    // let myObj = JSON.parse(localStorage.getItem('user'));


    localStorage.setItem(userDetails.EMAIL, JSON.stringify(userDetails));
    // let myObj = JSON.parse(localStorage.getItem('user'));


    const newLi = document.createElement('li');
    const ul = document.getElementById('listitem');

    //newLi.innerHTML = `Name: ${myObj.NAME}, Email: ${myObj.EMAIL}, Phone: ${myObj.PHONE}`;
    newLi.innerHTML = `Name: ${userDetails.NAME}, Email: ${userDetails.EMAIL}, Phone: ${userDetails.PHONE}` + '<button class="delete-btn">delete</button>';
    ul.appendChild(newLi);

    ul.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            deleteItem = event.target.parentElement;
            ul.removeChild(deleteItem);
        }
    })



};
















