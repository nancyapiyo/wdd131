const temples = Array.from({ length: 9 }, () => ({
    location: "San Diego California Temple",
    image: "images/san-diego-temple.jpg",
    imageAlt: "San Diego California Temple"
}));

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");
const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");

document.querySelectorAll(".temple-card").forEach((card, index) => {
    const temple = temples[index];
    const image = card.querySelector("img");
    const caption = card.querySelector("figcaption");

    image.src = temple.image;
    image.alt = temple.imageAlt;
    caption.textContent = temple.location;
});

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = new Date(document.lastModified).toLocaleString();