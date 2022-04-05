console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem( item ) {
    basket.push( item );
    return console.log( 'Added', item, 'to your cart!');
}

addItem( 'soccerBall' );
console.log( basket );
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