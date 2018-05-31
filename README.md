# Memory Game Project



How to Play: . . .Click on the squares until you match all of the symbols. Have fun, beat your last time.

Functionality
        -add event listener to each card so that when it is clicked it can respond
        -each card that is clicked needs to be added to the openCards array
          -openCards array can only hold two cards at a time
          -each card that is clicked/added to openCards array needs to have open and show added to they class
          -get the first child this is where the icons are within the <i>
          -check the cards that are in the array to see if class of the first child of each matches
        -if cards match = true, change the classes to card,show, match
          -push those cards to another array called cardMatches
          -cardMatches array needs to be used to end them game when the length is equal to 16
        -if cards match = false, remove the classes open and show from the elements using setTimeout function
          -remove these cards from the openCards array toggle back to just having the card class
        -disable the pointer events for open class so the card doesn't match itself or the matched list will be wrong and the card will stay open alone

End Game
        -trigger on the last click
        -when matchCards.length == 16
            -display a winner modal https://www.w3schools.com/howto/howto_css_modals.asp

Reset Game
        -on refresh the deck needs to be shuffled so create the function and call it (); before everything else happens
        -add event listener to restart icon on click
            -shuffles the deck
            -empties the matchedCards array
            -removes all classes but card from all cards
        -replay button for modal that does the same thing and closes the modal

Timer
        -start at 0 for tenths, secs, mins
        -increment 10ths ++
        -when 10ths>10 zero it out and add to secs, same with secs to min with 60
        -format for single digits so they have a 0
        -timer is triggered on first card click
            -create a trigger to start the function for incrementing. put that trigger condition in the on click function otherwise each click speeds up the clock
        -document.get...innerHTML to insert the time as a string with variables into the modal text and onto the page as div

Star Rating Count
        -create and array that adds every card that is clicked.
        -an attempt should be every two cards so array.length/2 is actually the score
            -save this number into a variable attempts
        -the perfect game would take 16 clicks, thats never going to be a thing set the icons classes to change to empty stars when
            -3stars is attempts <20
            -2stars is attempts <30
            -1stars is attempts >40
        -check the symbol library version because the icon codes change this is 4.6.1
        -add star symbols into the modal html give them the same function as the stars in the header
