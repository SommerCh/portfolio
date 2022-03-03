// klik med musen
const colors = ['#fde358', '#F24BD6', '#705cf2', '#fee550', '#05dbf2', '#05f240'];

function clickEffect(e) {
    let randomColor = Math.floor(Math.random() * colors.length);
    let newSpan = document.createElement('span');
    newSpan.className = ('clickCirkel');
    newSpan.style.top = `${e.clientY}px`;
    newSpan.style.left = `${e.clientX}px`;
    newSpan.style.borderColor = colors[randomColor];
    document.body.appendChild(newSpan);
    newSpan.addEventListener('animationend', () => {
        newSpan.parentElement.removeChild(newSpan);
    })
};

document.addEventListener('click', clickEffect)

// menu toggle + li close menu
function show() {
    const navbar = document.querySelector(".first-nav");
    const links = document.querySelectorAll('.line-effect');
    navbar.classList.toggle("hide");

    for (const link of links) {
        link.addEventListener('click', function () {
            navbar.classList.add("hide");
        });
    }
};

// active radio buttons
const radios = document.querySelectorAll('.radio');

for (const radio of radios) {
    radio.addEventListener('click', function () {
        radios.forEach(function (radio) {
            radio.classList.remove('active');
        });
        radio.classList.add('active');
    });
};

// night vision style
function changestyle() {
    // single
    document.querySelector(".body-background").classList.toggle("body-background-night");
    document.querySelector(".h1").classList.toggle("h1-night");
    document.querySelector(".nightscan").classList.toggle("nightscan-show");
    // multi
    document.querySelectorAll(".first-nav, .footer").forEach(e => e.classList.toggle("night-green"));
    document.querySelectorAll(".carousel-slider, .video-overlay, .wordpress-overlay, .overlay, .aboutwrapper, .overlay-about").forEach(e => e.classList.toggle("night-border"));
    document.querySelectorAll(".radio, .overlay-box, .box").forEach(e => e.classList.toggle("night-radio"));
    document.querySelectorAll(".box, .dot, label, .underline, input, textarea, .tooltiptext, #next, #prev").forEach(e => e.classList.toggle("night"));
    document.querySelectorAll(".box-header").forEach(e => e.classList.toggle("night-border-buttom"));
    document.querySelectorAll("h2,.h2, h3, h4, h5, form label, .pagelink, .line-effect, .overlay-text p, .overlay-h2, .btn, .overlay-content p, .tech li, strong, .overlay-h1, .wordpress-link, .footer a, .footer p, .close").forEach(e => e.classList.toggle("night-text"));
    document.querySelectorAll(".cls, .menu-p, #down").forEach(e => e.classList.toggle("night-svg"));
    document.querySelectorAll(".cls-7, .cls-10, .cls-14").forEach(e => e.classList.toggle("hide"));
    document.querySelectorAll(".pagelink").forEach(e => e.classList.toggle("night-pagelink"));
    document.querySelectorAll(".line-effect").forEach(e => e.classList.toggle("night-line-effect"));
}


