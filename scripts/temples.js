const temples = Array.from({ length: 9 }, () => ({
    location: "San Diego California",
    image: "images/san-diego-temple.jpg",
    imageAlt: "San Diego California Temple"
}));

const templeGrid = document.querySelector(".temple-grid");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");
const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");

temples.forEach((temple) => {
    const card = document.createElement("figure");
    card.className = "temple-card";

    const image = document.createElement("img");
    image.src = temple.image;
    image.alt = temple.imageAlt;
    image.loading = "lazy";
    image.width = 640;
    image.height = 388;

    const caption = document.createElement("figcaption");
    caption.textContent = temple.location;

    card.append(image, caption);
    templeGrid.append(card);
});

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = new Date(document.lastModified).toLocaleString();