
document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".mySwiper", {
    loop: false,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Breakpoints for smaller device
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 3,
        }
    }
    });
});
