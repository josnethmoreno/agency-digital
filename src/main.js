import './style.css'
import './reset.css'

const menuButton = document.querySelector('.menu-button')
const menu = document.querySelector('.menu')
const filterCloseMenu = document.querySelector('.menu-filter-black')

const toggleMenu = () => {
  menu.classList.toggle('show')
}

menuButton.addEventListener('click', toggleMenu)
filterCloseMenu.addEventListener('click', toggleMenu)


const slider = document.querySelector('.blog-slider')
const sliderContent = document.querySelector('.blog-slider-content')
const sliderLeft = document.querySelector('.blog-slider-left')
const sliderRight = document.querySelector('.blog-slider-right')

const moveToRight = () => {
  sliderContent.style.transform = translateX(100)
}

sliderRight.addEventListener('click', moveToRight)