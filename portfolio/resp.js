burger= document.querySelector('.burger');
nav = document.querySelector('.menu');
right = document.querySelector('.right');
burger.addEventListener('click', ()=>{
    nav.classList.toggle('v-nav-resp');
    right.classList.toggle('h-nav-resp');
})