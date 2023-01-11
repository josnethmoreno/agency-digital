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