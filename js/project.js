// video slider
let slideNumber = 1;
showSlide(slideNumber);

function plusDivs(next) {
    showSlide(slideNumber += next);
}

function showSlide(next) {
    let slides = document.querySelectorAll(".carousel-slider");
    if (next > slides.length) {
        slideNumber = 1
    };

    for (const slide of slides) {
        slide.style.display = "none";
    }

    slides[slideNumber - 1].style.display = "flex";
};

// gallery
let images = document.querySelectorAll('.gallery-image');

for (const img of images) {
    img.addEventListener('click', function () {
        img.classList.toggle("big-image");
    });
}

// show video-info
function projectInfo() {
    document.querySelectorAll(".video-overlay").forEach(e => e.classList.toggle("visi"));
}

// close x's on overlay
const closebuttons = document.getElementsByClassName("close");

for (const closebutton of closebuttons) {
    closebutton.addEventListener("click", function () {
        document.querySelectorAll(".video-overlay").forEach(e => e.classList.remove("visi"))
    });
}

// wordpress
const getPosts = "https://blog.multimediedesign.nu//wp-json/wp/v2/posts/"

fetch(getPosts).then(
    response => {
        return response.json();
    }).then(data => {

    for (let dat of data) {

        viewPosts.innerHTML +=
            `<div class="wordpress-content">
          <div class="wordpress-overlay">
            <h4 class="wordpress-title"> ${dat.title.rendered} </h4>
            <a class="wordpress-link" href="${dat.guid.rendered}" target="_blank">Se mere her</a>
          </div>
          <img src="${dat.featured_media_src_url}" alt="web">
       </div>`
    }

}).catch(err => {
    console.log('Error: ' + err)
})