'use strict';

//var sectionEl = document.getElementById('Hello');
//var divEl = document.getElementsByClassName('other');

// simple element creation, may be a constructor
function createElement(tagType, tagIdentifier, tagIdentifierName, elementContent, sectionId) {
  var element = document.createElement(tagType);
  element.setAttribute(tagIdentifier, tagIdentifierName);
  element.textContent = elementContent;
  console.log(element);
  //give the Child to the Dom
  sectionId.appendChild(element);
}

//createElement('p', 'id', 'addedContent', 'Hello User', sectionEl);
//createElement('h1', 'class', 'headding-one', 'It Lives!', divEl[0]);

//Customers per hour
function customersThisHour() {
  var range = maxCustomers - minCustomers;
  return Math.floor(Math.random() * range) + minCustomers;
}

// Cookies sold this hour
function cookiesSoldThisHour() {
  return Math.foor(customers * avgCookies);
}

//Store Projected Data
var pikeStore = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  hourlySales: []
};

var airportStore = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  hourlySales: []
};

var centerStore = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  hourlySales: []
};

var hillStore = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  hourlySales: []
};

var alkiStore = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  hourlySales: []
};

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//function to populate array Data
function cookiesSales() {
  for (var i = 0; i < hoursOpen.length; i++) {
    var customers = customersThisHour();
    var sales = cookiesSoldThisHour();
    console.log(hoursOpen[i] + ': ' + sales + ' cookies.');
    hourlySales.push(sales);
  }
}

console.log(pikeStore);
console.log(airportStore);
console.log(centerStore);
console.log(hillStore);
console.log(alkiStore);
