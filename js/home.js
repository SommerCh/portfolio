// show about
const overlay = document.querySelector('.overlay-about')
const aboutMe = document.querySelector('.aboutbutton');
aboutMe.addEventListener('click', function () {
    overlay.classList.toggle("visi");
});

// close about overlay on x
const closebutton = document.querySelector(".close");
closebutton.addEventListener("click", function () {
    this.parentElement.classList.remove("visi")
});

// show resume
const resume = document.querySelector('.modal');
const modal = document.querySelector('.modalbutton')
modal.addEventListener('click', function () {
    resume.classList.add("visi");
});

// close resume on page click
window.onclick = function (event) {
    if (event.target == resume) {
        resume.classList.remove("visi");
    }
};