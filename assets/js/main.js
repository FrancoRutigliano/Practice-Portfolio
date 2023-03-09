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


/* Skills Acordion  */

const skillsContent = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills (){

  let itemClass = this.parentNode.className

  for(i = 0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills__content skills__close'
  }

  if(itemClass === 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'
  }

}

skillsHeader.forEach( (el) => {
  el.addEventListener('click', toggleSkills)
})
