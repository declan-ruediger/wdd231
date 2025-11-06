
async function loadAllBusinesses() {
    members = await getBusinessData();
    displayBusinesses(members);
}

loadAllBusinesses();