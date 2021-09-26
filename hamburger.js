const openMenuBtn = document.querySelector('.hamburger-menu')
const navMenu = document.querySelector('.nav-menu')
const closeMenuBtn = document.querySelector('.close-menu')

openMenuBtn.addEventListener('click', () => {
    navMenu.classList.add('toggle')
})
closeMenuBtn.addEventListener('click', () => {
    navMenu.classList.remove('toggle')
})