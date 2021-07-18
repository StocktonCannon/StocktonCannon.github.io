const menubutton = document.querySelector('#menubutton');
const mainnav = document.getElementById('home-menu');

menubutton.addEventListener('click', openMenu);

function openMenu() {
    let menuitems = document.querySelectorAll('.menuitem');
    menuitems.forEach(element => {
        element.classList.toggle('hidden');
      
    
    })
    if (menubutton.innerHTML === "Close Menu") {
        menubutton.innerHTML = "Menu"
    } else {
        menubutton.innerHTML = "Close Menu"
    }
}