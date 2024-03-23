# colossal-adventure-game

## Project Requirements
The year is 1985. Your job is to build a text-based (console) RPG game. (Using readline-sync)

The point of this exercise is to better master Javascript functions, loops, conditionals, and some data types.

- **Watch these workshops to review!**

    [Constructor Functions](https://www.notion.so/Constructor-Functions-6e90bd4b35c745b98fd1aa6c1cd43aed?pvs=21)

    [Loops and Conditionals](https://www.notion.so/Loops-and-Conditionals-e082c2a894ed40d0b67a58052459bc3e?pvs=21)

    [Loops and Conditionals Part II](https://www.notion.so/Loops-and-Conditionals-Part-II-521697e0b76d4a48bfbeccff52e01a7a?pvs=21)


Console must greet player with a fun message

Console must ask for the player's name and store it

## Walking
The console will ask the user to enter a "w" to walk

Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)

Use a while loop to control this flow.

## If a Wild Enemy Appears
The enemy is random (can be chosen out of a minimum of 3 different enemy names)

The user can decide to attack or run

If attacking, a random amount of damage will be dealt between a min and max

If running, there will be a 50% chance of escaping

After the player attacks or runs the enemy attacks back for a random damage amount

The player and enemy will attack each other in a loop until one of them passes out or dies.

If the player kills the enemy you can give the Player some HP and special item that is stored in the inventory . After this, the player will continue walking.

If the enemy kills the player the console prints a cool death message and the game ends

## Inventory
When the player kills enemies, they are awarded with items (optional)

If the user enters 'Print' or 'p' in the console, the console will print the players name, HP, and each item in their inventory 
