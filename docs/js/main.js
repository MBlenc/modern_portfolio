// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show")); // for each item add the show class

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show")); // for each item add the show class

    //Set Menu State
    showMenu = false;
  }
}

// Lightbox stuff
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll("img");
images.forEach(image => {
  // Listens for clicks to activate the lightbox
  image.addEventListener("click", e => {
    lightbox.classList.add("active"); //adds the 'active' class
    const img = document.createElement("img"); //new image variable created
    img.src = image.src; //same as current
    // One image at a time by removing the first child
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    // adds to the lightbox
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener("click", e => {
  if (e.target !== e.currentTarget) return; // stops clicking on the image from exiting the lightbox
  lightbox.classList.remove("active");
});
