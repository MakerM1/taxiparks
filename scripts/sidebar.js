const hamburgerMenu = document.getElementById('hamburgerMenu')
const sidebar = document.getElementById('sideBar')

document.addEventListener('load', () => {
    if (document.body.clientWidth <= 1030) {
        sidebar.classList.add('closed')
        console.log('hi')
    } 
})

hamburgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('closed')
    console.log('click')
})