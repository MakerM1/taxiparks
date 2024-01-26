const checkbox = document.getElementById('active')
const text = document.querySelector('.profile__active-check-text')

checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        text.innerHTML = 'active'
    } else {
        text.innerHTML = 'offline'
    }
})