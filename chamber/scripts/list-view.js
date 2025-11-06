const listViewButton = document.querySelector('#list-view-button');

listViewButton.addEventListener('click', () => {
  businessCards.classList.toggle('list-view');
});