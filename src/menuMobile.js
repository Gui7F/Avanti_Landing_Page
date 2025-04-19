export const initMenuMobile = () =>{
    const menuMobile = document.getElementById('menuMobile');
    const menuMobileContent = document.getElementById('menuContentMobile');
    const buttonClose = document.getElementById('closeMenuMobile');
    const buttonOpen = document.getElementById('openMenuMobile');
    const overlayClose = document.getElementById('overlayClose');
    const itemMenu = document.querySelectorAll('.itemMenu p');

    buttonOpen.addEventListener('click', () => {
        menuMobile.classList.remove('opacity-0');
        menuMobile.classList.add('opacity-100'); 
        menuMobile.classList.remove('pointer-events-none');       
        menuMobileContent.classList.remove('translate-x-[-100%]');
        menuMobileContent.classList.add('translate-x-0');
        buttonOpen.classList.add('hidden');
    });

    buttonClose.addEventListener('click', () => {
        menuMobile.classList.remove('opacity-100');
        menuMobile.classList.add('opacity-0'); 
        menuMobile.classList.add('pointer-events-none'); 
        menuMobileContent.classList.remove('translate-x-0');
        menuMobileContent.classList.add('translate-x-[-100%]');
        buttonOpen.classList.remove('hidden');
    });

    overlayClose.addEventListener('click', () => {
        menuMobile.classList.remove('opacity-100');
        menuMobile.classList.add('opacity-0'); 
        menuMobile.classList.add('pointer-events-none'); 
        menuMobileContent.classList.remove('translate-x-0');
        menuMobileContent.classList.add('translate-x-[-100%]');
        buttonOpen.classList.remove('hidden');
    });

    itemMenu.forEach((item) => {
        item.addEventListener('click', () => {
            menuMobile.classList.remove('opacity-100');
            menuMobile.classList.add('opacity-0'); 
            menuMobile.classList.add('pointer-events-none'); 
            menuMobileContent.classList.remove('translate-x-0');
            menuMobileContent.classList.add('translate-x-[-100%]');
            buttonOpen.classList.remove('hidden');
        });
    });
}