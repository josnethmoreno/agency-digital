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
const sliderLast = document.querySelector('.blog-card:last-of-type')
const sliderLeft = document.querySelector('.blog-slider-left')
const sliderRight = document.querySelector('.blog-slider-right')

let sliderPosition = 0
let sliderMovePX = 380;
let sliderSize = sliderContent.getBoundingClientRect()

const moveToRight = () => {
  sliderContent.style.setProperty('transform', `translateX(${sliderPosition - 380}px)`)
  sliderPosition -= sliderMovePX
  calcPosition()
  console.log(sliderPosition, sliderSize)
}

const moveToLeft = () => {
  sliderContent.style.setProperty('transform', `translateX(${sliderPosition + 380}px)`)
  sliderPosition += sliderMovePX
  calcPosition()
  console.log(sliderPosition)
}

const calcPosition = () => {
  if(sliderPosition === 0) { 
    sliderLeft.disabled = true
    return
   }

   sliderLeft.disabled = false
}

calcPosition()

sliderRight.addEventListener('click', moveToRight)
sliderLeft.addEventListener('click', moveToLeft)

console.log(sliderLast.style.display = 'none')