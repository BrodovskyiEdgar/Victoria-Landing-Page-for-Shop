export function addBurgerButtonListener() {
    const burgerButtonElement = document.querySelector('[data-js-burger]');
    const menuMobileElement = document.querySelector('[data-js-menu');
    const phoneNumberElement = document.querySelector('[data-js-phone]');
    const socialIconsElements = document.querySelector('[data-js-social-icons]');
    const navigationElement = document.querySelector('[data-js-navigation]');

    burgerButtonElement.addEventListener('click', () => {
        burgerButtonElement.classList.toggle('active');
        menuMobileElement.classList.toggle('active');
        phoneNumberElement.classList.toggle('active');
        socialIconsElements.classList.toggle('active');
        navigationElement.classList.toggle('active'); 
    })
}