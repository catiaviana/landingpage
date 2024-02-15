const menu = document.querySelector('.menu'); /* refere-se às 3 barras no canto superior direito*/
const NavMenu = document.querySelector('.nav-menu'); /* refere-se ao "HOME" "ABOUT" "MENU" "CONTACT"*/

menu.addEventListener('click', () => {
   menu.classList.toggle('active');
   NavMenu.classList.toggle('active');
})