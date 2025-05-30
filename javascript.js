// ARRAYS AND LOOP
// chap 17 to 20

// Q1

let multiArray = [[]];

// Q2

let array = [
      [1, 2, 3, 0],
      [1, 0, 2 , 3 , 1],
    [3, 2, 1 , 0 ]
];

// Q3

for (let i=0; i<=10; i++){
    console.log(i);
}

// Q4

let number = parseInt(prompt("Enter the number to print its multiplication table:"));
let length = parseInt(prompt("Enter the length of the table:"));

console.log("Multiplication Table of " + number);

for (let i = 1; i <= length; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


// Q5


var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

var userinput = prompt("Enter a fruit name to search").toLowerCase();

var fruitFound = false;

for (var i = 0; i < fruits.length; i++) {
    if (userinput == fruits[i]) {
        console.log(`${userinput} is found at index ${i}`);
        fruitFound = true;
    }
}

if (fruitFound == false) {
    console.log(`${userinput} is not found`);
}


// Q6
// a

for(var i=1; i<=15; i++){
    console.log(i);
}
// b

for(var i=10; i>=1; i--){
    console.log(i);
}

// c

for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// d

for (var i = 1; i <= 20; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

// e

for (let i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}


// Q7

let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let userInput = prompt("Welcome to our bakery! What do you want to order?").toLowerCase();

let itemFound = false;

for(let i = 0; i <A.length; i++ ){
    if(userInput===A[i]){
   alert(`${userInput} is available at index ${i} in our bakery.`);
   itemFound = true;
    }
}
if(itemFound==false){
    alert(`sorry ${userInput} is not available in our bakery`);
}

// Q8

let L = [24, 53, 78, 91, 12];

let largest = L[0];  

for (let i = 1; i < L.length; i++) {
  if (L[i] > largest) {
    largest = L[i]; 
  }
}
document.write("Array items: " + L + "<br>");
document.write("The largest number is: " + largest);
document.write("<br><br>");


// Q9

let S = [23, 34, 19, 55, 99];
let lowest = S[0];

for (let i = 1; i < S.length; i++) {
    if (S[i] < lowest) {
        lowest = S[i];
    }
}

document.write("Array items: " + S + "<br>");
document.write("The lowest number is: " + lowest);


// Q10

for(let i = 5; i<=100; i+=5){
    console.log(i);
    
}
