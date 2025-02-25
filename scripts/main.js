import { linkMenuColorStringRandom } from './linkMenuColorStringRandom.js';
import { addBurgerButtonListener } from './burgerButton.js';
import { initBrandsSwiper } from './brandsSwiper.js';

document.addEventListener('DOMContentLoaded', () => {
    linkMenuColorStringRandom();
    addBurgerButtonListener();
    initBrandsSwiper();
});


