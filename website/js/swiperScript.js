// const slider = document.querySelector('.swiper-container');
// // Инициализируем Swiper
// window.onload = function () {
//     let mySwiper = new Swiper(slider, {
//         slidesPerView: 6,
//         //Стрелки
//         navigator: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev'
//         },
//         // Навигация
//         // Буллеты, текущее положение, прогрессбар
//         pagination: {
//             el: '.swiper-pagination',
//             // Буллеты
//             clickable: true,
//         },
//     });
// }

let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});