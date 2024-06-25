const mainNav=document.getElementById('main-nav');
const toogleMenu=document.getElementById('toogle-menu');
const mainMenu=document.getElementById('main-menu')

toogleMenu.addEventListener('click',()=>{
mainNav.classList.toggle('nav--show');/*este classlist es para que le quite la clase o se lo ponga */
mainMenu.classList.toggle('main-manu--show')
})