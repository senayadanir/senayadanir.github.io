
// Hamburger Menu
const hamburgerBtn = document.getElementById('hamburger-btn');
const mainNavMenu = document.getElementById('main-nav-menu');


if (hamburgerBtn && mainNavMenu) {
    hamburgerBtn.addEventListener('click', function() {
        mainNavMenu.classList.toggle('active');
    });
}


const menuLinks = mainNavMenu ? mainNavMenu.querySelectorAll('a') : [];

menuLinks.forEach(link => {
    link.addEventListener('click', function() {

        if (!link.closest('.dropdown-container')) {
            mainNavMenu.classList.remove('active');
        } else {
        }
    });
});