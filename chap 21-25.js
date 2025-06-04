// STRING METHODS
// ( Q1 )  Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your last name:");
    var fullName = firstName + "  " + lastName;
    alert("Hello, " + fullName + "!");

    // ( Q2 ) Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

    var mobileModle = prompt("Enter your favorite mobile name");
     var store = mobileModle.length;
     console.log("My favorite mobile is " + mobileModle + " and lenght of string is " + store);

    // ( Q3 )  Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

    var pak = "pakistani";
    var stor = pak.length 
    console.log( " index of 'n'" + pak.indexOf("n") + " " + "string: " + pak);

    // ( Q4 )  Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

    
    var word = "hello world";
    var str = word.length 
    console.log( " index of 'l'" + word.lastIndexOf("l") + " " + "string: " + word);    

    // ( Q5 )  Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

  
    var paak = "pakistani";
    var stoor = paak.length 
    console.log( "charAt index of 3: " + paak.charAt(3) + " " + "string: " + paak); 

    // ( Q6 )  Repeat Q1 using string concat() method. 

     var firstName = prompt("Enter your first name:");
  var lastName = prompt("Enter your last name:");
  var fullName = firstName.concat(" ", lastName);

  alert("Hello, " + fullName + "!");

// ( Q7 )  Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

 var city = "Hyderabad";
  var replacedCity = city.replace("Hyder", "Islam");
  console.log("city: " + city + "\nafter replacement: " + replacedCity);

// ( Q8 )  Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

var message = "Ali and Sami are best friends. They play cricket and football together.";
 var reple = message.replace("and", "&");
 console.log(reple);
    

// ( Q9 ) Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

let type = "472";
console.log("value: " +type);
console.log("type: " +typeof type);
let newType = Number(type);
console.log( "value: " + newType);
console.log( "type: " + typeof newType);

//  ( Q10 ) Write a program that takes user input. Convert and show the input in capital letters.


var input = "peanuts";
console.log(input.toLocaleUpperCase());

// (Q11)  Write a program that takes user input. Convert and show the input in title case. 

 var userInput = prompt("Enter any text:");
  var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
  console.log("user input: " + userInput);
  
  console.log( "Converted to Title Case: " + titleCase);

// ( Q12 )  Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

 var num = 35.36;
  var result = num.toString().replace(".", "");
  console.log("Number = " +num);
  console.log("Result: " + result);

// ( Q13 )  Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
   

  let user = prompt("Enter a username");

  if (user.includes("@") || user.includes(".") || user.includes(",") || user.includes("!")) {
    alert("Please enter a valid username (No special characters like @ . , !)");
  } else {
    alert("Username accepted: " + user);
  }


// ( Q14 )  You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:


var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Welcome to Y.K Bakery! What do you want to order?");
var searchItem = userInput.toLowerCase();

var found = false;
var index = -1;

for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === searchItem) {
    found = true;
    index = i; 
    break;
  }
}

if (found) {
  console.log(searchItem + " is available at index " + index + " in our bakery.");
} else {
  console.log("Sorry, " + searchItem + " is not available in our bakery.");
}


// (Q16)   Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.

var university = "University of Karachi";
var universityArray = university.split("");

for (var i = 0; i < universityArray.length; i++) {
  console.log(universityArray[i]); 
}

// (Q17)   Write a program to display the last character of a user input.


var userInput = prompt("Enter any word:");
var lastChar = userInput.charAt(userInput.length - 1);
alert( userInput + "\n" + "The last character is: " + lastChar);

// (Q18)   You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.


var sentence = "The quick brown fox jumps over the lazy dog";
var lowercaseSentence = sentence.toLowerCase();
var words = lowercaseSentence.split(" ");

var count = 0;

for (var i = 0; i < words.length; i++) {
  if (words[i] === "the") {
    count++;
  }
}

console.log("The word 'the' appears " + count + " times.");
