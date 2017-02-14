'use strict';

//var sectionEl = document.getElementById('Hello');
//var divEl = document.getElementsByClassName('other');
var pikeEl = document.getElementById('pike-store');
var airportEl = document.getElementById('airport-store');
var centerEl = document.getElementById('center-store');
var hillEl = document.getElementById('hill-store');
var alkiEl = document.getElementById('alki-store');
var elements = [pikeEl, airportEl, centerEl, hillEl, alkiEl];

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
function customersThisHour(maxCustomers, minCustomers) {
  var range = maxCustomers - minCustomers;
  return Math.floor(Math.random() * range) + minCustomers;
}

// Cookies sold this hour
function cookiesSoldThisHour(customers, avgCookies) {
  return Math.floor(customers * avgCookies);
}

//function to populate array Data
function cookiesSales(maxCustomers, minCustomers, avgCookies) {
  var hourlySales = [];
  for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
    var customers = customersThisHour(maxCustomers, minCustomers);
    var sales = cookiesSoldThisHour(customers, avgCookies);
    stores[iStores].totalSales += sales;
    console.log(hoursOpen[iHours] + ': ' + sales + ' cookies.');
    createElement('li', 'class', 'hourly-sales', hoursOpen[iHours] + ': ' + sales + ' cookies.', elements[iStores]);
    hourlySales.push(sales);
  }
  return hourlySales;
}

// hours of operation
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//Store Projected Data
var pikeStore = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  totalSales: 0
};

var airportStore = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  totalSales: 0
};

var centerStore = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  totalSales: 0
};

var hillStore = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  totalSales: 0
};

var alkiStore = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  totalSales: 0
};
//stores
var stores = [pikeStore, airportStore, centerStore, hillStore, alkiStore];

// populate and display the cookies data
for (var iStores = 0; iStores < stores.length; iStores++) {
  console.log(stores[iStores]);
  stores[iStores].hourlySales = cookiesSales(stores[iStores].maxCustomers, stores[iStores].minCustomers, stores[iStores].avgCookies);
  createElement('li', 'class', 'store-total', 'Total: ' + stores[iStores].totalSales + ' cookies', elements[iStores]);
}
//
// console.log(pikeStore);
// console.log(airportStore);
// console.log(centerStore);
// console.log(hillStore);
// console.log(alkiStore);
