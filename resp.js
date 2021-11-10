burger = documnet.querySelector('.burger')
navbar = documnet.querySelector('.navbar')
navList = documnet.querySelector('.nav-List')
rightNav = documnet.querySelector('.rightNav')




burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');
})