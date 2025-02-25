document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Portofolio Siap!");
});

function toggleMenu(){
    document.querySelector(".nav-links ul").classList.toggle("show");
}

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});