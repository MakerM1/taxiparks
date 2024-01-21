const hamburgerMenu = document.getElementById('hamburgerMenu')
const sidebar = document.getElementById('sideBar')
const quitButton = document.querySelector('.aside-profile__quit')

if (document.body.clientWidth <= 1030 && document.body.clientWidth > 600) {
    sidebar.classList.add('closed')
    console.log('hi')
} 

if (document.body.clientWidth > 600) {
    hamburgerMenu.addEventListener('click', () => {
        sidebar.classList.toggle('closed')
        console.log('click')
    })
} else if (document.body.clientWidth <= 600) {
    hamburgerMenu.addEventListener('click', () => {
        sidebar.classList.toggle('active')
        console.log('click')
    })

    quitButton.addEventListener('click', () => {
        sidebar.classList.remove('active')
    })
}