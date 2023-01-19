import './style.css'
import './reset.css'

const menuButton = document.querySelector('.menu-button')
const menu = document.querySelector('.menu')
const menuItem = document.querySelectorAll('.menu-item')
const filterCloseMenu = document.querySelector('.menu-filter-black')

const toggleMenu = () => {
  menu.classList.toggle('show')
}

const closeMenu = () => {
  menu.classList.remove('show')
}

menuButton.addEventListener('click', toggleMenu)
filterCloseMenu.addEventListener('click', toggleMenu)
menuItem.forEach((item) => {
  item.addEventListener('click', closeMenu)
})



const sliderContent = document.querySelector('.blog-slider-content')
const sliderLast = document.querySelector('.blog-card:last-of-type')
const sliderLeft = document.querySelector('.blog-slider-left')
const sliderRight = document.querySelector('.blog-slider-right')

let sliderPosition = 0
let slideWidth = sliderLast.clientWidth + 16
let sliderMovePX = slideWidth;

console.log(slideWidth)

const moveToRight = () => {
  sliderContent.style.setProperty('transform', `translateX(${sliderPosition - slideWidth}px)`)
  sliderPosition -= sliderMovePX
  calcPosition()
}

const moveToLeft = () => {
  sliderContent.style.setProperty('transform', `translateX(${sliderPosition + slideWidth}px)`)
  sliderPosition += sliderMovePX
  calcPosition()
  console.log(sliderPosition)
}

const calcPosition = () => {
  if(sliderPosition === 0) { 
    sliderLeft.disabled = true
    sliderRight.disabled = false
   return
   }
   sliderLeft.disabled = false
  }

calcPosition()

sliderRight.addEventListener('click', moveToRight)
sliderLeft.addEventListener('click', moveToLeft)

const toShowLast = (entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      sliderRight.disabled = true
    } else {
      sliderRight.disabled = false
    }
  })
}

const observerLast = new IntersectionObserver(toShowLast, {
  root: null,
  rootMargin: '0px',
  threshold: .2
})

observerLast.observe(sliderLast)