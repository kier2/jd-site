// const navMenu = document.querySelector('.nav-menu')
const navMenuItems = navMenu.querySelectorAll('li')

navMenuItems.forEach(item => {
    item.addEventListener('click', () => {
        checkActive()
        if(!item.classList.contains('active')){
            item.classList.add('active')
        }
    })
})

const checkActive = () => {
    navMenuItems.forEach(item => {
        if(item.classList.contains('active')){
            item.classList.remove('active')
        }
    })
}