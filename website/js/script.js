(function() {
    document.addEventListener("DOMContentLoaded", () => {
        pageLoadTime()
        activePage()
    })
})();

function pageLoadTime() {
    const startTime = new Date().getTime()
    const selector = document.querySelector(".page-loading")

    window.addEventListener('load', () => {
        selector.innerHTML = "Время загрузки: " + ((new Date().getTime() - startTime) / 1000) + " сек"
    })
}

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

    if (document.location.pathname.includes("yourTrajectory.html")) {
        [...navigationLinks].find(link => link.dataset.link === 'yourTrajectory').classList.add('button-active')
    }

    if (document.location.pathname.includes("reviews.html")) {
        [...navigationLinks].find(link => link.dataset.link === 'reviews').classList.add('button-active')
    }
}

