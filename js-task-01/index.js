//              JS-CLASS-TASK-01
// -> QUESTION:01
//           Welcome Message:
//                      Create a function called displayWelcomeMessage that prompts the user to enter
// their Name and then displays a personalized welcome message such as "Welcome, [name]!" in an alert.
//        function displayWelcomeMessage() {
//               let name = prompt("Enter your name:");
//               alert("Welcome  " + name + "!");
   
// }
// displayWelcomeMessage();

// -> QUESTION:02
//            Quote Generator:
//                           Create a function called generateQuote that randomly selects and returns a quote
//  from an array of predefined quotes.Call this function to display a random quote on the webpage.

let quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "It does not matter how slowly you go as long as you do not stop.",
  "The only way to achieve the impossible is to believe it is possible.",
];

function generateQuote() {
 let   quotesIndexes = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[quotesIndexes];
    alert(randomQuote);
    
}

generateQuote();














// -> QUESTION:03
//             Random Number Generator:
//                                    Write a function called generateRandomNumber that generates and returns a random number between 1 and 100.
// Call this function and display the generated random number on the webpage.

// function generateRandomNumber() {
//     let randomNumber = Math.floor(Math.random() * 100) + 1;
//     alert(randomNumber);
// }
// generateRandomNumber();


