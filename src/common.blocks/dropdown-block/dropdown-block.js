/* eslint-disable */

const headerNavigation = document.querySelector('.header-navigation')
const dropdown = document.querySelector('.dropdown')

headerNavigation.addEventListener('mouseover', e => {
    const target = e.target
    if(target.closest('.header-navigation__item_head') || target.closest('.dropdown')) {
        dropdown.classList.add('active')
    } else {
        dropdown.classList.remove('active')
    }
})


headerNavigation.addEventListener('mouseout', e => {
    dropdown.classList.remove('active')
})