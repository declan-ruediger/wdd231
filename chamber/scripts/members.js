const businessCards = document.querySelector('#business-cards');

const url = 'data/members.json';

async function getBusinessData() {
    const response = await fetch(url);
    return await response.json();
}

const displayBusinesses = (members) => {
    businessCards.innerHTML = "";

    members.forEach(member => {
        let card = document.createElement("section");
        card.classList.add("card");
        card.classList.add("business");
        // let headerDiv =  document.createElement("div");
        // let nameElement = document.createElement("name")
        // let pictureDiv = document.createElement("div");
        // let detailsDiv = document.createElement("div");


        // let fullName = document.createElement("h2");
        // let portrait = document.createElement("img");
        // let dateOfBirth = document.createElement("p");
        // let placeOfBirth = document.createElement("p");

        // fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;

        // dateOfBirth.innerHTML = `Date of Birth: ${prophet.birthdate}`;
        // placeOfBirth.innerHTML = `Place of Birth: ${prophet.birthplace}`;

        // portrait.setAttribute("src", prophet.imageurl);
        // portrait.setAttribute("alt", `A portrait of ${prophet.name} ${prophet.lastname}`);
        // portrait.setAttribute("loading", "lazy");
        // portrait.setAttribute("width", "100%");
        // portrait.setAttribute("height", "auto");
    
        // card.appendChild(fullName);
        // card.appendChild(dateOfBirth);
        // card.appendChild(placeOfBirth);
        // card.appendChild(portrait);
        
        card.innerHTML = `
                <div>
                    <h3>${member.name}</h3>
                    <p>${member.tagline}</p>
                </div>
                <div>
                    <img src="images/members/${member.image}" alt="${member.name} Logo">
                </div>
                <div>
                    <p><strong>EMAIL:</strong> ${member.email}</p>
                    <p><strong>PHONE:</strong> ${member.phone_number}</p>
                    <p><strong>URL:  </strong> ${member.website}</p>
                </div>
            `;

        businessCards.appendChild(card);
    })
}