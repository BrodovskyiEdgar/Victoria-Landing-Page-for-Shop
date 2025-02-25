export function linkMenuColorStringRandom() {
    document.querySelectorAll('.navigation__link').forEach(link => {
        link.addEventListener('mouseenter', () => {
            const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Генерация случайного цвета
            link.style.setProperty('--link-color', randomColor); // 
        });
    });
}


/* Тут надо делать делегирование!!!!!!! */