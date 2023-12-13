
const krop = document.querySelector("body");
const firkant = document.getElementById("kasse");
let scrollPosition;

function flytFirkant() {
    scrollPosition = Math.round(window.scrollY);
    scrollPosition = scrollPosition/8;
    firkant.style.top = scrollPosition + "px";
}

krop.onscroll = flytFirkant;