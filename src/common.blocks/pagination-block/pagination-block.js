/* eslint-disable */
const paginations = [...document.querySelectorAll('.pagination__item')]
const arrowBtn = document.querySelector('.pagination__next-item')

paginations.forEach((button, i, array) => {
    button.addEventListener('click', e => {
        e.preventDefault()
        const clickedBtn = e.currentTarget
        if(!clickedBtn.classList.contains('active')) {
            array.forEach(btn => {
                btn.classList.remove('active')
            })
            clickedBtn.classList.add('active')
        }
    })
})

arrowBtn.addEventListener('click', e => {
    e.preventDefault()
    const index = paginations.findIndex(btn => btn.classList.contains('active'))
    if(index !== paginations.length -1) {
        paginations[index].classList.remove('active')
        paginations[index+1].classList.add('active')
    }
})