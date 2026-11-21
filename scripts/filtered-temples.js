const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/salt-lake-temple-159320.jpg"
    },
    {
        templeName: "St. George Utah",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6",
        area: 143969,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/200x320/st-george-utah-temple-1121435-wallpaper.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 58005,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/320x200/san-diego-temple-765109-wallpaper.jpg"
    }
];

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");
const grid = document.querySelector(".temple-grid");
const heading = document.querySelector("main h2");

const filters = {
    home: () => true,
    old: temple => Number(temple.dedicated.split(",")[0]) < 1900,
    new: temple => Number(temple.dedicated.split(",")[0]) > 2000,
    large: temple => temple.area > 90000,
    small: temple => temple.area < 10000
};

function renderTemples(templeList) {
    const cards = templeList.map(temple => {
        const card = document.createElement("article");
        card.className = "temple-card";

        const name = document.createElement("h3");
        name.textContent = `${temple.templeName} Temple`;
        card.appendChild(name);

        [
            ["Location", temple.location],
            ["Dedicated", temple.dedicated],
            ["Area", `${temple.area.toLocaleString("en-US")} square feet`]
        ].forEach(([label, value]) => {
            const detail = document.createElement("p");
            const detailLabel = document.createElement("strong");
            detailLabel.textContent = `${label}: `;
            detail.append(detailLabel, value);
            card.appendChild(detail);
        });

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;
        card.appendChild(image);
        return card;
    });

    grid.replaceChildren(...cards);
}

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        renderTemples(temples.filter(filters[link.dataset.filter]));
        heading.textContent = link.textContent;
        navigation.querySelectorAll("a").forEach(item => item.removeAttribute("aria-current"));
        link.setAttribute("aria-current", "page");

        if (navigation.classList.contains("is-open")) {
            menuToggle.click();
            menuToggle.focus();
        }
    });
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = new Date(document.lastModified).toLocaleString();
renderTemples(temples);
