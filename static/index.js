function main() {
  fetch("static/data.json")
    .then((data) => {
      data.json().then((elements) => {
        sessionStorage.setItem("elements", JSON.stringify(elements));
        paintElements(elements);
      });
    })
    .catch(console.log);
}

function paintElements(elements) {
  removeCards();
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    const cardString = createCard(
      element.indentifier,
      element.name,
      element.image
    );
    appendCard(cardString);
  }
}

function appendCard(cardString) {
  const divContent = document.createElement("div");
  divContent.innerHTML = cardString;
  document.getElementById("content-cards").appendChild(divContent);
}

function removeCards() {
  const currentCards = document.getElementById("content-cards");
  let child = currentCards.lastElementChild;
  while (child) {
    currentCards.removeChild(child);
    child = currentCards.lastElementChild;
  }
}

function createCard(indentifier, name, image) {
  let cardString = `
    <div class="content-card">
      <img
        src="${image}"
        alt=""
      />
      <p class="text-gray">${indentifier}</p>
      <p>${name}</p>
    </div>
  `;
  return cardString;
}

function searchPokemon (e) {
  let elements = JSON.parse(sessionStorage.getItem('elements'));

  // 1 Line.
  // elements = elements.filter(item => String(item.name).toLowerCase().includes(e.value.toLowerCase()));

  let newElements = [];
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if(String(element.name).toLowerCase().includes(e.value.toLowerCase())) {
      newElements.push(element);
    }
  }

  paintElements(newElements);
}

main();
