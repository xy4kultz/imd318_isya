// Get the hamburger menu button and the nav list
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

// Add event listener to toggle the 'active' class when the hamburger button is clicked
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});
