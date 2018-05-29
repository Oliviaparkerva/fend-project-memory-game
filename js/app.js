/*
 * Create a list that holds all of your cards
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from */
        //var choices= Array.from(document.getElementsByClassName('card'));
        //var firstChoice = choices.slice(0,8);
        //var secondChoice = choices.slice(8,17);

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the "shuffle" method below w3 was a more understandable format for me
https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php*/

        //function shuffle(choices) {
        //    let ctr = choices.length;
        //    let temp;
        //    let index;
        //
        //    // While there are elements in the array
        //    while (ctr > 0) {
        //// Pick a random index
        //        index = Math.floor(Math.random() * ctr);
        //// Decrease ctr by 1
        //        ctr--;
        //// And swap the last element with it
        //        temp = choices[ctr];
        //        choices[ctr] = choices[index];
        //        choices[index] = temp;
        //    }
        //    return choices;
        //}
        //console.log(shuffle(firstChoice));
        //console.log(shuffle(secondChoice));
/* -loop through each card and create its HTML*/


/* - add each card's HTML to the page
 */

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
*/
        //const cards = document.querySelectorAll('.card');
        //cards.forEach(function(card){
        //	card.addEventListener('click', function (cardClick) {
        //		card.className='card open show';
        //		console.log('A choice has been made!');
        //  })
        //});
/*
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 */



/*
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
	
var allCards = document.querySelectorAll('.card');//gather all the cards into a variable
var openCards=[];//create a list/array for when we open cards, so that we can compare them
        /*
        -add event listener to each card so that when it is clicked it can respond 
        -each card that is clicked needs to be added to the openCards array 
        -each card that is clicked needs to have open and show added to they class
        -add every clicked card to the openCards array and limit it to two cards at a time
    

allCards.forEach(function(card){
    card.addEventListener('click', function (cardClick){
        if(openCards.length>=1){
            setTimeout(function(){
                openCards.forEach(function(card){
                    card.classList.remove('open', 'show');
                });
            }, 100);
        }
        else{
            openCards.push(card);
            card.classList.add('open', 'show');
        }
        console.log(openCards.length);
    });
});

