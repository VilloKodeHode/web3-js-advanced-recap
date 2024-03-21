const cardsContainerModified = document.getElementById("cards-container");

// To create cards for each person, you can use the following code:


export function showPeople(data) {
  data.map((person) => {
    const card = `
      <div class="card standard-box_style">
        <img src="${person.image}" alt="${person.name}'s profile picture">
        <div class="card-content">
          <h2>${person.name}</h2>
          <p>Age: ${person.age}</p>
          <p>Occupation: ${person.occupation}</p>
        </div>
      </div>
   `;
  
    const newCard = document.createElement("div");
    newCard.innerHTML = card;
    cardsContainerModified.appendChild(newCard);
  });
}
