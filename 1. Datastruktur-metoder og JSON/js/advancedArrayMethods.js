let numbers = [1, 2, 3, 4, 5]
console.log(numbers)
const squaredNumbers = numbers.map(num => num * num)
console.log(squaredNumbers)

const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers)

const oddNumbers = numbers.filter(num => num % 2 !== 0)
console.log(oddNumbers)



const sumOfNumbers = numbers.reduce((accumulator, currentValue) =>
    accumulator + currentValue, 0
)


console.log(sumOfNumbers)

const sumOfArray = (arr) => {
    return arr.reduce((accumulator, currentValue) =>
        accumulator + currentValue, 0
    )
}

console.log("sum of even array is:", sumOfArray(evenNumbers))
console.log("sum of odd array is:", sumOfArray(oddNumbers))

const colors = ['red', 'green', 'blue'];
colors.forEach(color => console.log(color))

const numberHasZero = numbers.includes(0)
console.log(numberHasZero)

const hasEvenNumber = numbers.some(num => num % 2 === 0)
console.log(hasEvenNumber)

const allEvenNumbers = numbers.every(num => num % 2 === 0)
console.log(allEvenNumbers)

numbers = [2, 4, 6, 8, 10]

const allEvenNumbersAgain = numbers.every(num => num % 2 === 0)
console.log(allEvenNumbersAgain)



