//Adds items to the start and the end of the list
var list = document.getElementsByTagName('ul')[0];
//Add a new item to the bottom of the list
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('half and half');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);
//Add new item to the start of the list
var newItemFirst = document.createElement('li');
var newTextItem = document.createTextNode('lettuce');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

var listItems = document.querySelectorAll('li');
//Add a class of cool to all listItems
var i;
for (i = 0; i < listItems.length; i++) {
  listItems[1].className = 'cool';
}
//Add number of items in the list to the header
var heading = document.querySelector('h2'); //the h2 element
var headingText = heading.firstChild.nodeValue; //h2 text
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading; //update h2
