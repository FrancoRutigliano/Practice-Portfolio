/* Menu display*/ 

const navMenu = document.querySelector('#nav-menu')
const navToggle = document.querySelector('#nav-toggle')
const navClose = document.querySelector('#nav-close')

/* Remove Menu mobile*/
const navLink = document.querySelectorAll('.nav__link')

if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}


if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

const linkAction = () => {
  const navMenu = document.querySelector('#nav-menu')
  
  navMenu.classList.remove('show-menu')

}

navLink.forEach(n => n.addEventListener('click', linkAction))
