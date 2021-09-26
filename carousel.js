const carouselWrapper = document.querySelector('.works-carousel')
const carousel = document.querySelector('.works-inner-items')
const carouselItem = document.querySelectorAll('.works-inner-item')

const navLeft = document.querySelector('.carou-nav-left')
const navRight = document.querySelector('.carou-nav-right')

const currentWidth = carouselWrapper.clientWidth
let counter = 0

navLeft.addEventListener('click', () => {
    counter--
    navRight.removeAttribute('disabled')
    navRight.classList.remove('disabled')
    carousel.style.transform = 'translateX('+ -currentWidth * counter + 'px)' 
})
navRight.addEventListener('click', () => {
    counter++
    navLeft.removeAttribute('disabled')
    navLeft.classList.remove('disabled')
    carousel.style.transform = 'translateX('+ -currentWidth * counter + 'px)'
})

carousel.addEventListener('transitionend', () => {
    if(carouselItem[counter].id === 'first-item'){
        navLeft.classList.add('disabled')
        navLeft.setAttribute('disabled', 'disabled')
    }
    else if(carouselItem[counter].id === 'last-item'){
        navRight.classList.add('disabled')
        navRight.setAttribute('disabled', 'disabled')
    }
    else{
        navRight.removeAttribute('disabled')
        navRight.classList.remove('disabled')
        navLeft.removeAttribute('disabled')
        navLeft.classList.remove('disabled')
    }
})






