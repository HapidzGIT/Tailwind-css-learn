
window.onscroll = () => {
    const header = document.querySelector('header')
    const navbarFixed = header.offsetTop

    if( window.pageYOffset > navbarFixed) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}


const hamburger = document.getElementById('hamburger')
const navMenu = document.querySelector('#nav-menu')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})