let colours = Array.of(1);
let moreNumbers = Array.of(4, 5, 6);

let colors = ["red", "blue", "green"]; 
console.log(colors[0]);  "red"
console.log(colors[2]);  "green"


let fruits = ["orange", "Banana", "apple"];
console.log(fruits.length); // Output: 3

let ages = [32, 33, 16, 40];
let adults = ages.filter(age => age >= 18);
console.log(adults); // Output: [32, 33, 40]

let colors = ["red", "blue", "green"];

for (const color of colors) {
    console.log(color);
}
let colors = ["red", "blue", "green"];
let [firstColor, secondColor] = colors;

console.log(firstColor); // Outputs: "red"
console.log(secondColor); // Outputs: "blue