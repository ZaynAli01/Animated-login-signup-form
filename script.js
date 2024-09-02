

let registerBtn = document.getElementById('register-btn')
let loginBtn = document.getElementById('login-btn')
let openModalBtn = document.getElementById('modal-open-btn')
let closeModalBtn = document.getElementById('modal-close-btn')
let modal = document.getElementById('modal')
let loginForm = document.getElementById('login-form')
let signUpLink = document.getElementById('Sign-up-link')
let loginLink = document.getElementById('login-link')
let hangBurger = document.getElementById('hang-burger')
let navBar = document.getElementById('nav-bar')


openModalBtn.addEventListener('click', ()=>{
    modal.classList.add('active-pop')
})

closeModalBtn.addEventListener('click', ()=>{
    modal.classList.remove('active-pop')
})

registerBtn.addEventListener('click', ()=>{
    modal.classList.add('active')
})

loginBtn.addEventListener('click', ()=>{
    modal.classList.remove('active')
})

signUpLink.addEventListener('click', (e)=>{
    e.preventDefault()
    modal.classList.add('active')
})

loginLink.addEventListener('click', (e)=>{
    e.preventDefault()
    modal.classList.remove('active')
})

hangBurger.addEventListener('click', ()=>{
    navBar.classList.add('active')
})



