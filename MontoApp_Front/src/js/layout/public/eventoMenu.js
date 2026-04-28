export function iniciarEventosMenu() {
    document.addEventListener('click', (e) => {
        const menu = document.querySelector('.itemsMenuHamburguesa');
        if (!menu) return; 

        if (e.target.closest('.menuHamburguesa')) {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }

        const isMenuOpen = !menu.classList.contains('hidden');
        const clickedInsideMenu = menu.contains(e.target);
        const clickedInsideHamburguesa = e.target.closest('.menuHamburguesa');

        if (isMenuOpen && !clickedInsideMenu && !clickedInsideHamburguesa) {
            menu.classList.add('hidden');
            menu.classList.remove('flex');
        }

        if (e.target.closest('.enlace')) {
            menu.classList.add('hidden');
            menu.classList.remove('flex');
        }
    });
}