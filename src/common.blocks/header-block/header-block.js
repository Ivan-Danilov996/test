/* eslint-disable */
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const body = document.body
const menuClose = document.querySelector('.menu__close')


const buttonHandler = (e) => {
    e.preventDefault()
    menu.classList.toggle('active')
    body.classList.toggle('lock')
}

burger.addEventListener('click', buttonHandler)
menuClose.addEventListener('click', buttonHandler)


