const membershipLevels = [
    {
        name: "NP (Non-Profit)",
        cost: 0,
        benefits: [
            "Special Events"
        ]
    },
    {
        name: "Bronze",
        cost: 100,
        benefits: [
            "Special Events"
        ]
    },
    {
        name: "Silver",
        cost: 200,
        benefits: [
            "Special Events",
            "In Rotation on Home Page"
        ]
    },
    {
        name: "Gold",
        cost: 300,
        benefits: [
            "Special Events",
            "In Rotation on Home Page",
            "Training",
            "Event Discounts"
        ]
    }
]

const membershipLevelsContainer = document.getElementById("membership-levels-container");
const membershipLevelInfoModal = document.querySelector("#membership-levels-modal");

function openModal(course) {
    membershipLevelInfoModal.innerHTML = generateModalInnerHTML(course);
    membershipLevelInfoModal.showModal();
    document.querySelector("#membership-levels-modal > button").addEventListener('click', () => {
        membershipLevelInfoModal.close();
    }); 
}

function displayMembershipLevels(levels) {
    membershipLevelsContainer.innerHTML = "";

    levels.forEach(level => {
        let membershipLevelCard = document.createElement("section");
        membershipLevelCard.classList.add("membership", "card");

        let title = document.createElement("h3");
        title.innerHTML = `${level.name} Membership`;
        membershipLevelCard.appendChild(title);

        let buttonContainer = document.createElement("div");
        buttonContainer.classList.add("flex");

        let openMembershipInfoButton = document.createElement("button")
        openMembershipInfoButton.innerHTML = `More Info`;
        openMembershipInfoButton.addEventListener("click", () => {
            openModal(level);
        }, false)

        buttonContainer.appendChild(openMembershipInfoButton);
        
        membershipLevelCard.appendChild(buttonContainer);

        membershipLevelsContainer.appendChild(membershipLevelCard);
    });

    let total_credits = levels.reduce((acc, current) => acc + current.credits, initalValue = 0)

    document.getElementById("credits-stat").innerHTML = `${total_credits}`;
}

displayMembershipLevels(membershipLevels);

function generateModalInnerHTML(level) {
    return `
        <button></button>
        <h3>${level.name} Membership</h3>
        <p>Cost: $${level.cost} / month</p>
        <p>Benefits:</p>
        <ul><li>${level.benefits.join("</li><li>")}</li></ul>
        `;
}