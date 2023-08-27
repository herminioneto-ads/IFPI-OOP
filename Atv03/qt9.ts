const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(number => number * 2);
const sum = doubledNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(doubledNumbers);  // Resultado: [2, 4, 6, 8, 10]
console.log(sum);             // Resultado: 30
