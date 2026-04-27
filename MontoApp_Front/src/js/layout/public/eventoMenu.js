document.getElementById('menuToggle').addEventListener('click', () => {
    const menu = document.getElementById('navMenu');
    // Alternar la clase 'hidden'
    menu.classList.toggle('hidden');
    // Añadir clases para que sea flotante en móvil
    menu.classList.toggle('absolute'); 
    menu.classList.toggle('w-full');
});