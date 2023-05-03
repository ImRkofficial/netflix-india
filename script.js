const toggle = document.querySelector('#toggle');
const cont = document.querySelector('.listing-item-content');
const plus = document.querySelector('.fa-plus');
const minus = document.querySelector('.cross');


toggle.addEventListener('click', () => {
    cont.classList.toggle('show-content');
    cont.classList.toggle('listing-item-content');
    minus.classList.toggle('fa-xmark');
    plus.classList.toggle('plus-bar')

    console.log("No error")
});
const toggle2 = document.querySelector('#toggle2');
const cont2 = document.querySelector('.listing-item-content2');
const plus2 = document.querySelectorAll('.fa-plus');
const minus2 = document.querySelectorAll('.cross');

toggle2.addEventListener('click', () => {
    cont2.classList.toggle('show-content2');
    minus2[1].classList.toggle('fa-xmark');
    plus2[1].classList.toggle('plus-bar')
});



const toggle3 = document.querySelector('#toggle3');
const cont3 = document.querySelector('.listing-item-content3');
const plus3 = document.querySelectorAll('.fa-plus');
const minus3 = document.querySelectorAll('.cross');

toggle3.addEventListener('click', () => {
    cont3.classList.toggle('show-content3');
    minus3[2].classList.toggle('fa-xmark');
    plus3[2].classList.toggle('plus-bar')
});



const toggle4 = document.querySelector('#toggle4');
const cont4 = document.querySelector('.listing-item-content4');
const plus4 = document.querySelectorAll('.fa-plus');
const minus4 = document.querySelectorAll('.cross');

toggle4.addEventListener('click', () => {
    cont4.classList.toggle('show-content4');
    minus4[3].classList.toggle('fa-xmark');
    plus4[3].classList.toggle('plus-bar')
});


const toggle5 = document.querySelector('#toggle5');
const cont5 = document.querySelector('.listing-item-content5');
const plus5 = document.querySelectorAll('.fa-plus');
const minus5 = document.querySelectorAll('.cross');

toggle5.addEventListener('click', () => {
    cont5.classList.toggle('show-content5');
    minus5[4].classList.toggle('fa-xmark');
    plus5[4].classList.toggle('plus-bar')
});



const toggle6 = document.querySelector('#toggle6');
const cont6 = document.querySelector('.listing-item-content6');
const plus6 = document.querySelectorAll('.fa-plus');
const minus6 = document.querySelectorAll('.cross');

toggle6.addEventListener('click', () => {
    cont6.classList.toggle('show-content6');
    minus6[5].classList.toggle('fa-xmark');
    plus6[5].classList.toggle('plus-bar')
});