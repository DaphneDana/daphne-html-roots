//  const menu = document.querySelector('#mobile-menu');
//  const menuLinks = document.querySelector('.navbar__menu');

//  menu.addEventListener('click', function() {
//     menu.classList.toggle('is-active');
//     menuLinks.classList.toggle('active');
//  }  
        const mobileMenu = document.getElementById('mobile-menu');
        const navbarMenu = document.querySelector('.navbar_menu');

        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('is-active');
            navbarMenu.classList.toggle('active');
        });
   