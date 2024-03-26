// Import Readline-Sync to Prompt User for Responses
const readLine = require('readline-sync');

// Variable to Hold User's HP
let hitPoints = 0;

// Array to Hold Player's Inventory
let playerInventory = [];

// Function That Will Determine if an Enemy Appears
function enemyAppears(min, max) {
    /* Random Number to Use for Decision Making */
    const randomNum = Math.random() * (max - min) + min;

    /* If randomNum is Divisible by 3 and 6, Enemy Appears */
    if (randomNum % 3 === 0 && randomNum % 6 === 0) {
        return true;
    } else {
        return false;
    }
}

// Function That Will Determine if an Enemy Attacks
function damageAmount() {
    /* Determines Random Number of Damage Points */
    const damage = Math.random() * (100 - 1) + 1;

    /* Formula That Calcuates Remaining hitPoints From Damage */
    hitPoints = hitPoints - damage;

    /* Return Remaining HP */
    return hitPoints;
}

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
} else if (playerOption === "w") {
    // Call Enemy Appears Function
    let appeared = enemyAppears(1, 101);

    // If Enemy Appears, Call Damage Function to Calculate Damage
    while (appeared) {
        if (hitPoints > 0) {
            // Call Damage Amount Function
            let damageCaused = damageAmount();
            hitPoints = hitPoints - damageCaused;
        } else if (hitPoints <= 0) {
            console.log(`Sorry ${playerName}! You Were Defeated. Better Luck Next Time!`);
            return false;
        }
    }
}
