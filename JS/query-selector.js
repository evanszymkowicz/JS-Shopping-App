//Will only return the first match it finds
var el = document.querySelector('li.hot');
el.className = 'cool';

var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';
