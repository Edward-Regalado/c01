'use strict'

function getProduct() {
var response = prompt('Would you rather have a house or hotel?');
var item; 

while(response != 'house' && response != 'hotel') {
  item = prompt('Would you rather have a house or hotel? BE SPECIFIC!')
}

if (response === 'house') {
  item = '<img src ="images/house.png">';
} else if (response === 'hotel') { 
  item = '<img src= "images/hotel.png">';
} 
  return item;
}


//helper functions 

function getCount() {
  var count = prompt('Great! How many would you like?');
  while(isNaN(count) || count == '') {
    count = prompt("PLEASE enter a number. How mnay would you like?");
 }
 return count; 
}

//helper function

function showOrder() {
  var result = ''; 
  var itemType = getProduct(); 
  var total = getCount(); 

  for(var i = 0; i < total; i++) {
    result = result + '<p>' + itemType + '</p>';
  }

  return document.write(result);
}
showOrder(); 