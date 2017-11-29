# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).


#&# My notes
+ Started by making the deck of cards and making a variable that shuffles them.
+ makeDeck function takes the deck and shuffles them and puts two of each card
  onto the table.
+ lessStars counts the clicks and gives the user a star rating based on how many
  or few clicks they needed to complete the game.
+ countMoves counts each time two cards are open at the same time.
+ openModal opens the modal when the game is won so when all the cards have been
  matched.
+ playGame is the function where the actual game happens. After first click, timer
  goes on, and then when you click another it compares the two cards for a match.
  If the cards don't match, they are closed.
+ getDate function makes the timer work.
+ resetGame resets the game when the button is clicked.
