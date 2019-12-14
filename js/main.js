const btnCollapse = document.querySelector('.collapse-btn')
const navigation__nav = document.querySelector('.navigation__nav')

btnCollapse.addEventListener('click', () => {
    navigation__nav.classList.toggle('open')
})