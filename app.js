const navHam = document.querySelector('.nav-ham');
        const navbar = document.querySelector('.navbar');

        navHam.addEventListener('click', () => {
            navbar.classList.toggle('nav-open');
        });