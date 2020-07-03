// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

document.getElementById("display-element").innerHTML = currentDate;
}

const myName = "Ulysses"
const userAge = 20
const firstNum = 7
const secondNum = 62
const secondString = "9"

// Write a JavaScript program to convert a number to a string.
const numToString = (number) => {
  return number.toString();
}

// Write a JavaScript program to convert a string to the number.
const stringToNum = (string) => {
  return parseInt(string);
}




// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
//boolean
let booleanVar = true;
//null
const nullVar = null;
//undefined
const undefinedVar = undefined;
//NaN
const myNan = -2 ;
//string
const myString = "stringy string"
// your variable
const myBool = false;

const isTypeOf = (data) => {
  return console.log(typeof data);
}

 
  

  
// Write a JavaScript program that adds 2 numbers together.
const addTwoNumbers = (num1, num2) => {
  return num1 + num2
}




// Write a JavaScript program that runs only when 2 things are true.
const truthyValue = true;
const secondTruthy = 69;
const falsyValue = false;
const secondFalsy = "";

const bothAreTrue = (v1, v2) => {
  if (v1 && v2) {
    return "Both are true";
  }
}


// Write a JavaScript program that runs when 1 of 2 things are true.
const eitherOrIsTrue = (v1, v2) => {
  if (v1 || v2) {
    return "One of them is true";
  }
}



// Write a JavaScript program that runs when both things are not true.  
const bothFalsey = (v1, v2) => {
  if (!v1 && !v2) {
    return "neither are true";
  }
}
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
