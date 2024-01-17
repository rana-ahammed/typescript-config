"use strict";
const userForm = document.querySelector('.user-form');
const userName = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const userCountry = document.querySelector('#country');
const userFeedBack = document.querySelector('#feedback');
userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
        userName: userName.value,
        userEmail: userEmail.value,
        userCountry: userCountry.value,
        userFeedBack: userFeedBack.value,
    };
    console.log(data);
});
