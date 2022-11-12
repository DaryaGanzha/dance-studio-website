// Инициализирую слайдер

let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    // Стрелки
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Навигация
    // Буллеты
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // Делаем точку текущей картинки выделяющейся (динамические буллеты)
        dynamicBullets: true,
    },
    // Скролл
    scroll: {
        el: ".swiper-pagination",
        // Возможность перетаскивать скролл
        draggable: true,
    }
});