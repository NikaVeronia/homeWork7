const openNav = document.getElementById('openNav');
const closeNav = document.getElementById('closeNav');
const navbar = document.getElementById('navbar');
const logo=document.getElementById('logo');
const navAccount=document.getElementById('navAccount');
openNav.addEventListener('click', function() {
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'block';
        openNav.style.display='none';
        logo.style.display='none';
        closeNav.style.display='block';
        navAccount.style.display='flex';
    } else {
        navbar.style.display = 'none';
        openNav.style.display='block';
        logo.style.display='flex';
        closeNav.style.display='block';
        navAccount.style.display='none';
    }
});
closeNav.addEventListener('click', function() {
    if (navbar.style.display == 'block') {
        navbar.style.display = 'none';
        openNav.style.display='block';
        logo.style.display='flex';
        navAccount.style.display='none';
    } else {
        navbar.style.display = 'block'; 
        logo.style.display='none'; 
        navAccount.style.display='flex';
    }
});
