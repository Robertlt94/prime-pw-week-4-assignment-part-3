console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

// ***** addItem FUNCTION MOVED TO STRETCH SECTION BELOW *****
// function addItem( item ) {
//     basket.push( item );
//     return console.log( 'Added', item, 'to your cart!');
// }

// addItem( 'soccerBall' );
// console.log( basket );
//pushes items into basket

function listItems( basket ) {
    for(i=0; i<basket.length; i++){
        console.log(basket[i]);
    }
}

addItem( 'footBall' );
console.log( basket );
// added a second item

listItems( basket );
// lists off all items individually as listItes loops through basket

function empty( basket ) {
    for( i=0; i<basket.length; i++ ) {
        if( basket.length > 0 ) {
            basket.length = 0;
            return console.log('Your basket is now empty.');
    }  
    }
    return console.log('Your basket is already empty.');
}
// resets basket to it's original value of nothing by removing 

console.log( basket );
// current items in basket

empty( basket );
console.log( basket );
// basket has been emptied


// final test
addItem( 'grapes' );
addItem( 'mangos' );
addItem( 'oranges' );
console.log( basket );
listItems( basket );
empty( basket );
console.log( basket );

// ************STRETCH**************

// const maxItems = 5;

function isFull( basket ) {
    if( basket.length > maxItems ) {
        console.log( 'ERROR: Your cart has too many items in it!' );
        return console.log ( 'true' )
    } else if( basket.length === maxItems ) {
        console.log( 'Your cart is full!' );
        return console.log( 'true' )
    } else {
        console.log( 'You can still fit', maxItems - basket.length, 'into the cart.');
        return console.log( 'false' )
    }
}

addItem( 'baseballCards' );
listItems( basket );
console.log( basket );
isFull( basket );

addItem( 'yuGiOhCards' );
addItem( 'soccerCards' );
addItem( 'basketballCards' );
isFull( basket );

addItem( 'pokemonCards');
isFull( basket );

function addItem( item ) {
    if( basket.length < maxItems ) {
        basket.push( item );
        console.log( 'Added', item, 'to your cart!');
        return console.log( 'true, item has been added!' );
    } else {
        return console.log( 'false, no more space in basket!' );
}
}

addItem( 'footballCards' );
console.log( basket );
listItems( basket );

function removeItem( item ) {
    let itemIndex = basket.indexOf( item );
    if(itemIndex >= 0) {
        basket.splice( itemIndex, 1);
        return console.log( item, 'was removed!');
    } else{
        return console.log( 'unable to locate', item);
    }
}

removeItem( 'baseballCards' );
listItems( basket );
removeItem( 'basketballCards' );
listItems( basket );
removeItem( 'digimonCards' );
listItems( basket );