/* eslint-disable */
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const body = document.body
const menuClose = document.querySelector('.menu__close')
const headerNavigation = document.querySelector('.header-navigation')
const dropdown = document.querySelector('.dropdown')

const buttonHandler = (e) => {
    e.preventDefault()
    menu.classList.toggle('active')
    body.classList.toggle('lock')
}

burger.addEventListener('click', buttonHandler)
menuClose.addEventListener('click', buttonHandler)


headerNavigation.addEventListener('mouseenter', e=> {
    dropdown.classList.add('active')
    console.log(e.currentTarget)
})

headerNavigation.addEventListener('mouseleave', e=> {
    dropdown.classList.remove('active')
})
