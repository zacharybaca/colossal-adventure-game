// Import Readline-Sync to Prompt User for Responses
const readLine = require('readline-sync');

// Variable to Hold User's HP
let hitPoints = 100;

// Variable to Hold Enemy Appeared Boolean
let appeared = false;

// Object to Hold 3 Different Types of Enemies
const enemies = {
    'vampire': {
        'name': 'Dracula',
        'hitPoints': 100
    },

    'dragon': {
        'name': 'Puff',
        'hitPoints': 100
    },

    'wizard': {
        'name': 'Harry',
        'hitPoints': 100
    }
}

// Array of Inventory Items Awarded to Player If They
// Defeat an Enemy
// Array to Hold Player's Inventory
let playerInventory = [];

// Function That Will Award a Player a Particular Item
// Depending on the Enemy That They Defeated
function awardItem(randomEnemy) {
  if (randomEnemy.name === 'Dracula') {
    playerInventory.push('vampire fang');
  } else if (randomEnemy.name === 'Puff') {
    playerInventory.push('Dragon Tooth');
  } else {
    playerInventory.push('sword');
  }
}
// Function to Randomly Pick An Enemy When Attacked
function randomEnemy() {
    // Generate Random Number Between 0 and 2 for Index
    let randomNum = Math.random() * (3 - 0) + 0;
    return enemies[randomNum];
}


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
function damageAmount(randomAttacker) {
    /* Determines Random Number of Damage Points */
    const damage = Math.random() * (100 - 1) + 1;

    /* Formula That Calcuates Remaining hitPoints From Damage */
    hitPoints = hitPoints - damage;

    /* Add Points To Random Enemy's HP */
    randomAttacker.hitPoints = randomAttacker.hitPoints + damage;

    /* Return Remaining HP */
    return damage;
}

// Function That Will Run If Player Decides to Run
function runAway() {
 // Random Number for Determination, 1 for True or 2 for False
 let randomNumber = Math.random() * (3 - 1) + 1;

 if (randomNumber === 1) {
    return true;
 } else {
    return false;
 }
}

// Function That Will Run If Player Decides to Attack
function attackEnemy(randomEnemy) {
  // Call Damage Amount Function
  let damageCaused = damageAmount(randomEnemy);
  if (randomEnemy.hitPoints > 0) {
    // Damage Amount Function is Provided With The Result
    // of Random Enemy Function As a Parameter
    randomEnemy.hitPoints = randomEnemy.hitPoints - damageCaused;

    // Display Message Regarding Who Attacked and Damage Amount
    // Display Remaining Hit Points Left
    console.log(
      `You Have Attacked ${randomEnemy.name}, and took ${damageCaused} HP from them`
    );
    console.log(`They Currently Have ${randomEnemy.hitPoints} HP Remaining`);
  } else if (randomEnemy.hitPoints <= 0) {
    console.log(`You Have Defeated ${randomEnemy.name}. Awesome Job!`);
    return false;
  }

  // Adds Damage HitPoints to Player's HP
  hitPoints = hitPoints + damageCaused;

  // Display Player's New Total HP
  // Display Enemy's New Total HP
  return `You Caused ${randomEnemy.name} to Lose ${damage} HP. Your HP is Now ${hitPoints}. ${randomEnemy.name}'s HP is ${randomEnemy.hitPoints}`;
}

// Function To Ask User What They Would Like to Do
function userInteraction() {
  // Ask Player to Enter "w" to Walk, "p" or "print" to Print Status
  console.log(
    `Welcome ${playerName}! Please Enter 'w' to Walk, or 'p' or Type 'print' to Print Your Status`
  );

  // Ask Player to Enter Their Option
  let playerOption = readLine.question(
    'Enter "w" to Walk, or "p" or Type "Print" to Print Your Status: '
  );

  // Begin Loop or Logic Depending on Player's Option
  if (playerOption === "p" || playerOption === "print") {
    console.log(
      `Hello! Welcome ${playerName}. Youre Current HP is ${hitPoints}.`
    );
    if (!playerInventory.length) {
      console.log("You Currently Do Not Have Anything in Your Inventory");
    } else {
      console.log("The Following is What You Currently Have in Inventory: ");
      for (let i = 0; i <= playerInventory.length; i++) {
        console.log(`${playerInventory[i]}\n`);
      }
    }
  } else if (playerOption === "w") {
    // Call Enemy Appears Function
    appeared = enemyAppears(1, 101);
  }
}

// Introduction to Game
console.log('Welcome to the ultimate adventure game experience! Follow the instructions, and explore!');

// Ask For Player's Name
const playerName = readLine.question('To Begin, Please Enter Your Name: ');

// To Start Game, Invoke User Interaction Function
userInteraction();

    // If Enemy Appears, Call Damage Function to Calculate Damage
    while (appeared) {
      // Random Enemy
      let randomAttacker = randomEnemy();

      let decision = readLine.question(`${randomAttacker.name} Just Appeared. Enter 'a' to Attack, or 'r' to Run Away.`);

      // Function That Will Run If Player Decides to Run
      let runsAway = runAway();

      // Function That Will Run If Player Decides to Attack Enemy
      let attack = attackEnemy(randomAttacker);

      if (decision === 'a') {
        attack;
      }

      if (runsAway && decision === 'r') {
        // If Player Escapes, Invoke userInteraction Again
        return userInteraction();
      } else {
        if (hitPoints > 0) {
          // Call Damage Amount Function
          // Damage Amount Function is Provided With The Result
          // of Random Enemy Function As a Parameter
          let damageCaused = damageAmount(randomAttacker);
          hitPoints = hitPoints - damageCaused;

          // Display Message Regarding Who Attacked and Damage Amount
          // Display Remaining Hit Points Left
          console.log(
            `You Have Been Attacked By ${randomAttacker.name}, and they took ${damageCaused} HP from you`
          );
          console.log(`You Currently Have ${hitPoints} HP Remaining`);
        } else if (hitPoints <= 0) {
          console.log(
            `Sorry ${playerName}! You Were Defeated. Better Luck Next Time!`
          );
          return false;
        }
      }
    }
