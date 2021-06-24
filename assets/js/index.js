const responsiveMenu = document.getElementById('responsiveMenu')
const closeBtn = document.getElementById('closeBtn')



const showMenu = () =>{
    responsiveMenu.classList.remove('hide')
}



closeBtn.addEventListener('click', () => {
    responsiveMenu.classList.add('hide')
})
