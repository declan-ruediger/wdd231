import { places } from '../data/places.mjs';

const discoverGrid = document.getElementById("discover-grid");

discoverGrid.innerHTML = "";

places.forEach(place => {
    let placeElement = document.createElement("div");

    placeElement.innerHTML = `
        <h2>${place.name}</h2>
        <figure><img src="images/places/${place.imageUrl}"></figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
    `;

    discoverGrid.appendChild(placeElement);
});

// Handle Welcome Message
let lastVisitString = localStorage.getItem("lastVisit");

if (lastVisitString != null) {
    try {
        let lastVisitDate = new Date(lastVisitString);
        const msToDays = 86400000;

        let daysSinceLastVisit = (Date.now() - lastVisitDate.getTime()) / msToDays;
        let welcomeMessage;
        if (daysSinceLastVisit < 1) {
            welcomeMessage = "Back so soon! Awesome!"
        } else {
            welcomeMessage = `You last visited ${Math.floor(daysSinceLastVisit)} day${Math.floor(daysSinceLastVisit) > 1 ? "s" : ""} ago.`;
        }

        document.getElementById("welcome-message").innerText = welcomeMessage;
    } catch (error) {
        
    }
}

localStorage.setItem("lastVisit", (new Date()).toISOString())