const nav = document.querySelector("nav");
const hamburger = document.createElement("div");
hamburger.innerHTML = "&#9776;";
hamburger.style.fontSize = "30px";
hamburger.style.cursor = "pointer";
hamburger.style.display = "none";
nav.appendChild(hamburger);

const links = document.querySelectorAll("nav a");
for (let i = 0; i < links.length - 1; i++) {
  links[i].style.display = "none";
}

let menuOpen = false;
hamburger.addEventListener("click", () => {
  if (!menuOpen) {
    hamburger.innerHTML = "&times;";
    for (let i = 0; i < links.length - 1; i++) {
      links[i].style.display = "block";
    }
    menuOpen = true;
  } else {
    hamburger.innerHTML = "&#9776;";
    for (let i = 0; i < links.length - 1; i++) {
      links[i].style.display = "none";
    }
    menuOpen = false;
}
})