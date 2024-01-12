var hamberger = document.querySelector(".hamberger");
hamberger.onclick = function() {
    var navBar = document.querySelector(".menu");
    navBar.classList.toggle("active");
}