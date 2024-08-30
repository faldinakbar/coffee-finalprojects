
window.onscroll = function () {
    toggleBackToTopButton();
};
function toggleBackToTopButton() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}
document.addEventListener("scroll", function () {
    const menuTitle = document.querySelector(".menuTitle");
    const posisi = menuTitle.getBoundingClientRect();

    // Periksa apakah elemen berada di dalam viewport
    if (posisi.top >= 0 && posisi.bottom <= window.innerHeight) {
        menuTitle.classList.add("show");
    }
});
document.addEventListener("scroll", function () {
    const menuTitle = document.querySelector(".descriptionTitle");
    const posisi = menuTitle.getBoundingClientRect();

    // Periksa apakah elemen berada di dalam viewport
    if (posisi.top >= 0 && posisi.bottom <= window.innerHeight) {
        menuTitle.classList.add("show");
    }
});
document.addEventListener("scroll", function () {
    const menuTitle = document.querySelector(".deliciousContainer");
    const posisi = menuTitle.getBoundingClientRect();

    // Periksa apakah elemen berada di dalam viewport
    if (posisi.top >= 0 && posisi.bottom <= window.innerHeight) {
        menuTitle.classList.add("show");
    }
});
document.addEventListener("scroll", function () {
    const menuTitle = document.querySelector(".fasttimeContainer");
    const posisi = menuTitle.getBoundingClientRect();

    // Periksa apakah elemen berada di dalam viewport
    if (posisi.top >= 0 && posisi.bottom <= window.innerHeight) {
        menuTitle.classList.add("show");
    }
});
document.addEventListener("scroll", function () {
    const menuTitle = document.querySelector(".satisfiedContainer");
    const posisi = menuTitle.getBoundingClientRect();

    // Periksa apakah elemen berada di dalam viewport
    if (posisi.top >= 0 && posisi.bottom <= window.innerHeight) {
        menuTitle.classList.add("show");
    }
});
document.addEventListener("scroll", function () {
    const menuTitle = document.querySelector(".facilityTitle");
    const posisi = menuTitle.getBoundingClientRect();

    // Periksa apakah elemen berada di dalam viewport
    if (posisi.top >= 0 && posisi.bottom <= window.innerHeight) {
        menuTitle.classList.add("show");
    }
});
document.addEventListener("scroll", function () {
    const menuTitle = document.querySelector(".descriptionFacility");
    const posisi = menuTitle.getBoundingClientRect();

    // Periksa apakah elemen berada di dalam viewport
    if (posisi.top >= 0 && posisi.bottom <= window.innerHeight) {
        menuTitle.classList.add("show");
    }
});
document.addEventListener("scroll", function () {
    const menuTitle = document.querySelector(".maps");
    const posisi = menuTitle.getBoundingClientRect();

    // Periksa apakah elemen berada di dalam viewport
    if (posisi.top >= 0 && posisi.bottom <= window.innerHeight) {
        menuTitle.classList.add("show");
    }
});

document.addEventListener("scroll", function () {
    const menuTitle = document.querySelector(".contactTitle");
    const posisi = menuTitle.getBoundingClientRect();

    // Periksa apakah elemen berada di dalam viewport
    if (posisi.top >= 0 && posisi.bottom <= window.innerHeight) {
        menuTitle.classList.add("show");
    }
});

document.addEventListener("scroll", function () {
    const menuTitle = document.querySelector(".descriptionContact");
    const posisi = menuTitle.getBoundingClientRect();

    // Periksa apakah elemen berada di dalam viewport
    if (posisi.top >= 0 && posisi.bottom <= window.innerHeight) {
        menuTitle.classList.add("show");
    }
});

const navigation = document.getElementById("navigation");
navigation.style.maxHeight = "0px";

function toggleMenu() {
    if(navigation.style.maxHeight == "0px")
    {
        navigation.style.maxHeight = "500px"
    }
    else {
        navigation.style.maxHeight = "0px"
    }
}