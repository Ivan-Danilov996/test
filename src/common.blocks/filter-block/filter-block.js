/* eslint-disable */
const filterBtn = document.querySelector('.filter-btn')
const overlay = document.querySelector('.overlay')
const filterClose = document.querySelector('.filter__close')
const filter = document.querySelector('.filter')
const body = document.body

const buttonHandler = (e) => {
    e.preventDefault()
    overlay.classList.toggle('active')
    filter.classList.toggle('active')
    body.classList.toggle('lock')
}

const overlayHandler = (e) => {
    if (e.target === overlay)  {
        overlay.classList.toggle('active')
        filter.classList.toggle('active')
        body.classList.toggle('lock')
    }
}

filterBtn.addEventListener('click', buttonHandler)
overlay.addEventListener('click', overlayHandler)
filterClose.addEventListener('click', buttonHandler)