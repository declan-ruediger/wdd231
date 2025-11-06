
async function loadSpotlightBusinessSelection() {
    let members = await getBusinessData();
    let spotlightMembers = members.filter((member) => member.membership_level == 1 || member.membership_level == 2);
    spotlightMembers = spotlightMembers.sort((a, b) => Math.random() - 0.5);
    displayBusinesses(spotlightMembers.slice(0, 3));
}

loadSpotlightBusinessSelection();