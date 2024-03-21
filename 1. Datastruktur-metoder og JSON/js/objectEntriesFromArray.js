const peopleArray = [
    {
        id: 1,
        name: "Alice",
        age: 28,
        email: "alice@example.com",
    },
    {
        id: 2,
        name: "Bob",
        age: 35,
        email: "bob@example.com",
    },
    {
        id: 3,
        name: "Charlie",
        age: 22,
        email: "charlie@example.com",
    },
    {
        id: 4,
        name: "David",
        age: 40,
        email: "david@example.com",
    },
];

console.log(peopleArray)

const modifiedPeople = peopleArray.map(person => ({
    ...person,
    fullName: `Mr/Ms ${person.name}`,
    diesAtAge: person.age ** 2
}))

console.log("Modified people:", modifiedPeople)

const sortedPeopleByAge = [...peopleArray].sort((a, b) => a.age - b.age)

console.log("Sorted people by age:", sortedPeopleByAge)

const firstPerson = peopleArray[0]
for (const [key, value] of Object.entries(firstPerson)) {
console.log(`${key}: ${value}`)

}
