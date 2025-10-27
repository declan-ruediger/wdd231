const toggle_button_id = "nav-toggle-button";

let navBarVisible = true;

function toggleVisibilityOfNavBarLinks() {
    if (navBarVisible) {
        setVisibilityOfNavBarLinks("hidden");
    } else {
        setVisibilityOfNavBarLinks("visible");
    }
}

function setVisibilityOfNavBarLinks(visibility_setting) {
    let display_value = ""
    switch (visibility_setting) {
        case "visible":
            display_value = "block";
            navBarVisible = true;
            break;
        case "hidden":
            display_value = "none";
            navBarVisible = false;
            break;
        default:
            TypeError();

    }
    let nav_bar = document.getElementById("nav-bar");
    for (i = 0; i < nav_bar.children.length; i++) {
        let element = nav_bar.children[i];
        if (element.tagName == "A" & element.id != toggle_button_id) {
            element.style = `display: ${display_value};`;
        }
    }
}

// TODO: if mobile
if (true) {
    let nav_bar = document.getElementById("nav-bar");

    setVisibilityOfNavBarLinks("hidden");

    let toggle_button_template = document.createElement("a");
    toggle_button_template.id = toggle_button_id;
    toggle_button_template.className = "toggle-button";
    toggle_button_template.innerHTML = "X";
    toggle_button_template.addEventListener("click", toggleVisibilityOfNavBarLinks);

    // show hamburger icon
    nav_bar.appendChild(
        toggle_button_template
    );
    //toogle nav a's from viewable to not viewable
}
// on hamburger click:
// change hamburger to x

// on x click, close hamburger

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Manaus Brazil Temple",
        location: "Manaus–AM, Brazil",
        dedicated: "2012, June, 10",
        area: 32032,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/138-Manaus-Brazil-Temple.jpg"
    },
    {
        templeName: "Bountiful Utah Temple",
        location: "Utah, USA",
        dedicated: "1995, January, 8-14",
        area: 104000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-40955-main.jpg"
    },
    {
        templeName: "Boise Idaho Temple",
        location: "Idaho, USA",
        dedicated: "1984, May, 25-30",
        area: 35868,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/boise-idaho-temple/boise-idaho-temple-41667-main.jpg"
    }
];

function updateTempleCards(temples) {
    document.getElementById("temples-container").innerHTML = "";

    temples.forEach(temple => {
        document.getElementById("temples-container").innerHTML +=
            `<figure> \
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy"> \
                <p>${temple.templeName}</p> \
                <p>${temple.location}</p> \
                <p>Dedicated: ${temple.dedicated}</p> \
                <p>Area: ${temple.area.toLocaleString()}f<sup>2</sup></p> \
            </figure>`;
    });
}

updateTempleCards(temples);

function updateFilter(element) {
    let filter_name = element.textContent;

    let filter_lambda = (t) => {};

    switch (filter_name) {
        case "Home":
            filter_lambda = (t) => true;
            break;
        case "Old":
            filter_lambda = (t) => parseInt(t.dedicated.substring(0,5)) < 1900;
            break;
        case "New":
            filter_lambda = (t) => parseInt(t.dedicated.substring(0,5)) > 2000;
            break;
        case "Large":
            filter_lambda = (t) => t.area > 90000;
            break;
        case "Small":
            filter_lambda = (t) => t.area < 10000;
            break;
        default:
            TypeError();
    }
    
    updateTempleCards(temples.filter(filter_lambda));
}