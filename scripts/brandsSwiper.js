import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export function initBrandsSwiper() {
    return new Swiper(".brands-swiper", {
        slidesPerView: "auto",
        spaceBetween: 50, 
        centeredSlides: true,
        grabCursor: true,
        touchRatio: 2,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    })
}