const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let dateOfBirth = document.createElement("p");
        let placeOfBirth = document.createElement("p");

        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;

        dateOfBirth.innerHTML = `Date of Birth: ${prophet.birthdate}`;
        placeOfBirth.innerHTML = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `A portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "100%");
        portrait.setAttribute("height", "auto");
    
        card.appendChild(fullName);
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(portrait);

        businessCards.appendChild(card);
    })
}
displayProphets(courses);