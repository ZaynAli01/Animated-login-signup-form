

let registerBtn = document.getElementById('register-btn')
let loginBtn = document.getElementById('login-btn')
let openModalBtn = document.getElementById('modal-open-btn')
let closeModalBtn = document.getElementById('modal-close-btn')
let modal = document.getElementById('modal')
let loginForm = document.getElementById('login-form')


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

