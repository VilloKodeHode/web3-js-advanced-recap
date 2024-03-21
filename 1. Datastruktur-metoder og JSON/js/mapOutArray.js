import people from "../data/people.json" assert {type: "json"}

const cardContainer = document.getElementById("cards-container")

console.log(people)

const peopleArray = [
    {
        id: 1,
        name: "Victor the rainbow wolf",
        age: 32,
        occupation: "Hardwarewolf Engineer",
        image: "public/images/dreamwolf.webp",
    },
    {
        id: 2,
        name: "Kitman the hitman",
        age: 28,
        occupation: "Security Manager",
        image: "public/images/kitman.webp",
    },
    {
        id: 3,
        name: "Pen Gui",
        age: 49,
        occupation: "Sosial relations",
        image: "public/images/penguin_in_the_desert.webp",
    },
    {
        id: 4,
        name: "Paulo Boermann",
        age: 35,
        occupation: "CEO",
        image: "public/images/polar_bear_sherpa.webp",
    },
    {
        id: 5,
        name: "Ralph Pronsky",
        age: 19,
        occupation: "Intern",
        image: "public/images/skating_red_panda.webp",
    },
    {
        id: 6,
        name: "Sputnik Shallow",
        age: 52,
        occupation: "Tech lead",
        image: "public/images/steampunk_sparrow.webp",
    },
    // Add more people as needed
];

function showPeople(data) {
    data.map((person) => {
        const card = `
        <div class="card standard-box-style" key="${person.id}"}>
            <img src="${person.image}" alt="${person.name}'s profile picture">
            <div class="card-content">
                <h2>${person.name}</h2>
                <p>Age: ${person.age}</p>
                <p>Occupation: ${person.occupation}</p>
            </div>
        </div>
        `;
        const newCard = document.createElement("div")
        newCard.innerHTML = card
        cardContainer.appendChild(newCard)
    })
}

showPeople(people)

//! Without using innerHtml:
function showPeoples(data) {
    data.forEach((person) => {
        // Create card container
        const card = document.createElement("div");
        card.classList.add("card", "standard-box_style");

        // Create image element
        const image = document.createElement("img");
        image.src = person.image;
        image.alt = `${person.name}'s profile picture`;

        // Create card content container
        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        // Create heading element
        const heading = document.createElement("h2");
        heading.textContent = person.name;

        // Create paragraph elements
        const ageParagraph = document.createElement("p");
        ageParagraph.textContent = `Age: ${person.age}`;

        const occupationParagraph = document.createElement("p");
        occupationParagraph.textContent = `Occupation: ${person.occupation}`;

        // Append elements to their respective containers
        cardContent.appendChild(heading);
        cardContent.appendChild(ageParagraph);
        cardContent.appendChild(occupationParagraph);

        card.appendChild(image);
        card.appendChild(cardContent);

        // Append the card to the cardsContainer
        cardContainer.appendChild(card);
    });
}

// Call the showPeople function with your data
// showPeoples(peopleArray);