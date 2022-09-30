(function() {
    document.addEventListener("DOMContentLoaded", () => {
        pageLoadTime()
        activePage()
        // displayActiveButton()
    })
})();

function pageLoadTime() {
    const startTime = new Date().getTime()
    const selector = document.querySelector(".page-loading")

    window.addEventListener('load', () => {
        selector.innerHTML = "Время загрузки: " + ((new Date().getTime() - startTime) / 1000) + " сек"
    })
}

// function highlightSelectedButton() {
//     const buttonIndex = document.querySelector(".button-index")
//     const buttonGallery = document.querySelector(".button-gallery")
//     const buttonDirections =  document.querySelector(".button-directions")
//     const buttonLessons =  document.querySelector(".button-lessons")
//
//     buttonIndex.addEventListener('mouseenter', () => {
//         buttonIndex.style.color = "#CE1E80"
//     })
//     buttonIndex.addEventListener('mouseout', () => {
//         buttonIndex.style.color = "black"
//     })
//
//     buttonGallery.addEventListener('mouseenter', () => {
//         buttonGallery.style.color = "#CE1E80"
//     })
//     buttonGallery.addEventListener('mouseout', () => {
//         buttonGallery.style.color = "black"
//     })
//
//     buttonDirections.addEventListener('mouseout', () => {
//         buttonDirections.style.color = "black"
//     })
//     buttonDirections.addEventListener('mouseenter', () => {
//         buttonDirections.style.color = "#CE1E80"
//     })
//
//     buttonLessons.addEventListener('mouseout', () => {
//         buttonLessons.style.color = "black"
//     })
//     buttonLessons.addEventListener('mouseenter', () => {
//         buttonLessons.style.color = "#CE1E80"
//     })
// }

function activePage() {
    const navigationLinks = document.querySelectorAll('.button');
    if (document.location.pathname.includes("index.html")) {
        [...navigationLinks].find(link => link.dataset.link === 'index').classList.add('button-active')
    }

    if (document.location.pathname.includes("lessons.html")) {
        [...navigationLinks].find(link => link.dataset.link === 'lessons').classList.add('button-active')
    }

    if (document.location.pathname.includes("gallery.html")) {
        [...navigationLinks].find(link => link.dataset.link === 'gallery').classList.add('button-active')
    }

    if (document.location.pathname.includes("directions.html")) {
        [...navigationLinks].find(link => link.dataset.link === 'directions').classList.add('button-active')
    }
}
