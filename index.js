// Import Readline-Sync to Prompt User for Responses
const readLine = require('readline-sync');

// Variable to Hold User's HP
let hitPoints = 0;

// Array to Hold Player's Inventory
let playerInventory = [];

// Introduction to Game
console.log('Welcome to the ultimate adventure game experience! Follow the instructions, and explore!');

// Ask For Player's Name
const playerName = readLine.question('To Begin, Please Enter Your Name: ');

// Ask Player to Enter "w" to Walk, "p" or "print" to Print Status
console.log(`Welcome ${playerName}! Please Enter 'w' to Walk, or 'p' or Type 'print' to Print Your Status`);

// Ask Player to Enter Their Option
let playerOption = readLine.question('Enter "w" to Walk, or "p" or Type "Print" to Print Your Status: ');

// Begin Loop or Logic Depending on Player's Option
if (playerOption === "p" || playerOption === "print") {
    console.log(`Hello! Welcome ${playerName}. Youre Current HP is ${hitPoints}.`);
    if (!playerInventory.length) {
        console.log('You Currently Do Not Have Anything in Your Inventory');
    } else {
        console.log('The Following is What You Currently Have in Inventory: ');
        for (let i = 0; i <= playerInventory.length; i++) {
            console.log(`${playerInventory[i]}\n`);
        }
    }
}
