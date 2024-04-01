// Import Readline-Sync to Prompt User for Responses
const readLine = require('readline-sync');


// Variable to Hold User's HP
let hitPoints = 100;

// Variable to Hold Enemy Appeared Boolean
let appeared = false;

// Object to Hold 3 Different Types of Enemies
const enemies = [
    {
        name: 'Dracula',
        hitPoints: 100,
        monsterType: 'vampire'
    },

    {
        name: 'Puff',
        hitPoints: 100,
        monsterType: 'dragon'
    },

    {
        name: 'Harry',
        hitPoints: 100,
        monsterType: 'wizard'
    },

    {
      name: 'Mable',
      hitPoints: 100,
      monsterType: 'banshee'
    },

    {
      name: 'Dorinda',
      hitPoints: 100,
      monsterType: 'troll'
    },

    {
      name: 'Lexi',
      hitPoints: 100,
      monsterType: 'goblin'
    }
  ]

// Array of Inventory Items Awarded to Player If They
// Defeat an Enemy
// Array to Hold Player's Inventory
let playerInventory = [];

// Function That Will Award a Player a Particular Item
// Depending on the Enemy That They Defeated
function awardItem(randomEnemy) {
  if (randomEnemy.name === 'Dracula') {
    playerInventory.push('vampire fang');
    console.log('Congratulations! You Have Defeated Dracula, and Now Have "Vampire Fang" in Your Inventory');
  } else if (randomEnemy.name === 'Puff') {
    playerInventory.push('Dragon Tooth');
    console.log('Congratulations! You Have Defeated Puff. and Now Have "Dragon Tooth" in Your Inventory');
  } else if (randomEnemy.name === 'Mable') {
    playerInventory.push('Claw');
    console.log('Congratulations! You Have Defeated Mable, and Now Have "Claw" in Your Inventory');
  } else if (randomEnemy.name === 'Dorinda') {
    playerInventory.push('scale');
    console.log('Congratulations! You Have Defeated Dorinda, and Now Have "Scale" in Your Inventory');
  } else if (randomEnemy.name === 'Lexi') {
    playerInventory.push('wand');
    console.log('Congratulations! You Have Defeated Lexi, and Now Have "Wand" in Your Inventory');
  } else {
    playerInventory.push('sword');
    console.log('Congratulations! You Have Defeated Harry, and Now Have "Sword" in Your Inventory');
  }
}
// Function to Randomly Pick An Enemy When Attacked
function randomEnemy() {
    // Generate Random Number Between 0 and 2 for Index
    let randomNum = Math.floor(Math.random() * (3 - 0) + 0);
    return enemies[randomNum];
}


// Function That Will Determine if an Enemy Appears
function enemyAppears(min, max) {
    /* Random Number to Use for Decision Making */
    const randomNum = Math.floor(Math.random() * (max - min) + min);
    /* If randomNum is Divisible by 3 and 6, Enemy Appears */
    if (randomNum % 3 === 0) {
        return true;
    } else {
        return false;
    }
}

// Function That Will Determine if an Enemy Attacks
function damageAmount(randomAttacker) {
    /* Determines Random Number of Damage Points */
    const damage = Math.floor(Math.random() * (100 - 1) + 1);

    /* Formula That Calcuates Remaining hitPoints From Damage */
    hitPoints = hitPoints - damage;

    /* Add Points To Random Enemy's HP */
    randomAttacker.hitPoints = randomAttacker.hitPoints + damage;

    /* Display Message Of Enemy Attacking */
    console.log(`${randomAttacker.name} Is Fighting Back. They Took ${damage} HP From You`);
    console.log(`${randomAttacker.name}'s HP Is ${randomAttacker.hitPoints}`);

    /* Edge Case If HP Is Less Than 0, Message Will Not Display */
    if (hitPoints > 0) {
      console.log(`Your Current HP Is ${hitPoints}`);
    } else {
      console.log('Sorry, You Do Not Have Any Current HP to Continue');
      return false;
    }


    /* Return Remaining HP */
    return damage;
}

// Function That Will Run If Player Decides to Run
function runAway() {
 // Random Number for Determination, 1 for True or 2 for False
 let randomNumber = Math.floor(Math.random() * (3 - 1) + 1);

 if (randomNumber === 1) {
    return true;
 } else {
    return false;
 }
}

// Function That Will Run If Player Decides to Attack
function attackEnemy(randomEnemy) {
  // Save Random Enemy As Local Variable
  let randomMonster = randomEnemy;
  /* Determines Random Number of Damage Points */
  const damage = Math.floor(Math.random() * (100 - 1) + 1);
  if (randomMonster.hitPoints > 0) {
    // Damage Amount Function is Provided With The Result
    // of Random Enemy Function As a Parameter
    randomMonster.hitPoints -= damage;

    // Adds Damage HitPoints to Player's HP
    hitPoints += damage;

    // Display Message Regarding Who Attacked and Damage Amount
    // Display Remaining Hit Points Left
    // Display Player's New Total HP
    // Display Enemy's New Total HP
    console.log(
      `You Caused ${randomMonster.name} to Lose ${damage} HP. Your HP is Now ${hitPoints}. ${randomMonster.name}'s HP is ${randomMonster.hitPoints}`
    );

    // Call Damage Amount Function to Have Enemy Attack
    damageAmount(randomMonster);
  }
}

// Function To Ask User What They Would Like to Do
function userInteraction() {
  // Ask Player to Enter "w" to Walk, "p" or "print" to Print Status
  console.log(
    `Please Enter 'w' to Walk, or 'p' or 'print' to Get Your Updated HP Status`
  );

  // Ask Player to Enter Their Option
  let playerOption = readLine.question(
    'Enter "w" to Walk, or "p" or Type "Print" to Print Your Status: '
  ).toLowerCase();

  // Begin Loop or Logic Depending on Player's Option
  if (playerOption === "p" || playerOption === "print") {
    console.log(
      `Hello! Welcome ${playerName}. Your Current HP is ${hitPoints}.`
    );
    if (!playerInventory.length) {
      console.log("You Currently Do Not Have Anything in Your Inventory");
    } else {
      console.log("The Following is What You Currently Have in Inventory: ");
      for (let i = 0; i <= playerInventory.length - 1; i++) {
        console.log(`${playerInventory[i]}\n`);
      }
    }
    //return userInteraction();
  } else if (playerOption === "w") {
    // Call Enemy Appears Function
    appeared = enemyAppears(1, 101);

    // Random Enemy
    let randomAttacker = randomEnemy();

    // If Enemy Appears, Call Damage Function to Calculate Damage
    while (appeared) {
      // Check Before Executing Logic If Player Has Enough
      // HP to Continue The Game
      if (hitPoints <= 0 && randomAttacker.hitPoints > 0) {
        console.log(
          `Sorry ${playerName}! You Were Defeated. Better Luck Next Time!`
        );

        // Exit The Game
        return false;
      } else

      // Check If Enemy Still Has HP
      // If They Don't, Show Winning Message And Call User Interaction Function
      if (randomAttacker.hitPoints <= 0 && hitPoints > 0) {
        // Call awardItem function to Award Player a Certain Item
        // for Defeating Their Enemy
        awardItem(randomAttacker);

        // Remove Enemy From Array If Defeated
        // Get Index Of Enemy
        let index = enemies.indexOf(randomAttacker.name);

        // Remove Enemy From Array
        enemies.splice(index, 1);

        // Call User Interaction To Start Walking Again
        userInteraction();
      }

      console.log("Attacker: ", randomAttacker);
      let decision = readLine.question(
        `${randomAttacker.name} Just Appeared. Enter 'a' to Attack, or 'r' to Run Away.`
      ).toLowerCase();

      // Function That Will Run If Player Decides to Run
      let runsAway = runAway();

      if (decision === "a" && hitPoints > 0) {
        // Function That Will Run If Player Decides to Attack Enemy
        attackEnemy(randomAttacker);
      }

      if (runsAway && decision === "r") {
        // If Player Escapes, Invoke userInteraction Again
        return userInteraction();
      } else if (!runsAway && decision === "r" && hitPoints > 0) {
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

        // Check if Player Still Has HP
        if (hitPoints <= 0) {
          console.log(`You Currently Have No HP Remaining, And Have Been Defeated By ${randomAttacker.name}`);
        } else {
          console.log(`You Currently Have ${hitPoints} HP Remaining`);
        }
      }
    }
  }
  return userInteraction();
}

// Introduction to Game
console.log('Welcome to the ultimate adventure game experience! Follow the instructions, and explore!');

// Ask For Player's Name
const playerName = readLine.question('To Begin, Please Enter Your Name: ');

// Welcome The Player With a Message
console.log(`Welcome ${playerName}! To Being Exploring, Please Enter "w" On Your Keyboard And Press Enter To Begin`);

// To Start Game, Invoke User Interaction Function
userInteraction();
