console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//1.Create a global variable named basket and set it to an empty array.

let basket = ['A','b','c','d'];

//Create a function called addItem. It should:
//take an input parameter for a string item
//add the new item to the global array basket.
//return true indicating the item was added.

function addItem(item){
    
if (isFull()){
    return false;
}
else{
    basket.push(item);
    return true;
}
        
    }

console.log('Items are added in the basket ',addItem(['Apple']));
console.log('Items are added in the basket ',addItem(['orange']));

console.log('Items in the basket are ',basket);


//2.Create a function called listItems. It should:
//loop over the items in the basket array
//console.log each individual item on a new line


function listItems(){
    for(let i =0; i <basket.length; i++){
        console.log('Each item in the basket ',basket[i]);
        
    }
    return basket;
}
listItems();


//3.Create a function called empty. It should:
//reset the basket to an empty array
//do not use basket = [] to reset the array

function empty(){
    
        basket.splice(0,basket.length);
        console.log('basket is now empty ',basket);

    
    return basket;
}
empty();

//4.Add a global const named maxItems and set it to 5.

//const maxItems = 5;

//5.Create a function called isFull(). It should:
//return false if the basket contains less than max number of items
//return true otherwise (equal or more than maxItems)

function isFull(){
const maxItems = 5;

    if(basket.length < maxItems){
        return false;
    }else{
        return true;
       }
}
//console.log('basket contains less than max number of items ',isFull());

//6.Update the required addItem function to:
//Use the isFull function to prevent more than maxItems from being added to the basket.
//If an item was added to the array, return true
//If there was no room and the item could not be added return false.

// Updated the addItem function at the top of the code above to call isFull before adding a new Item


//7.Create a function called removeItem. It should:
//Take an input parameter for a string item
//Use Array.indexOf to find the index of the first matching item in the basket.
//Use Array.splice to remove the first matching item from the basket.
//Return the item removed or null if the item was not found.
basket.push('Cake','Cupcake','Pie');
function removeItem(item){
   
    //console.log(basket);
    for(let i =0; i < basket.length; i++){
       if(basket[i] === item){      
     let position = basket.indexOf(item); 
     let removed = basket.splice(position,1);  
    return  removed;
       }   
    }
    return null;

}
console.log('Item is removed from basket ',removeItem('Cake'));

console.log(basket);










// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
