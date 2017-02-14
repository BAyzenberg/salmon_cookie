'use strict';

//var sectionEl = document.getElementById('Hello');
//var divEl = document.getElementsByClassName('other');
// var pikeEl = document.getElementById('pike-store');
// var airportEl = document.getElementById('airport-store');
// var centerEl = document.getElementById('center-store');
// var hillEl = document.getElementById('hill-store');
// var alkiEl = document.getElementById('alki-store');
// var elements = [pikeEl, airportEl, centerEl, hillEl, alkiEl];

// table ID
var tableEl = document.getElementById('store-data');

// simple element creation
function createElement(tagType, tagIdentifier, tagIdentifierName, elementContent, parentNode) {
  var element = document.createElement(tagType);
  element.setAttribute(tagIdentifier, tagIdentifierName);
  element.textContent = elementContent;
  console.log(element);
  //give the Child to the Dom
  parentNode.appendChild(element);
  return element;
}

//createElement('p', 'id', 'myCustomId', 'Hello User', sectionEl);
//<section id = "sectionEl">
  //<p id = "myCustomId">Hello User</p>
//</section>
//createElement('h1', 'class', 'headding-one', 'It Lives!', divEl[0]);

//Customers per hour
function customersThisHour(maxCustomers, minCustomers) {
  var range = maxCustomers - minCustomers + 1;
  return Math.floor(Math.random() * range) + minCustomers;
}

// Cookies sold this hour
function cookiesSoldThisHour(customers, avgCookies) {
  return Math.floor(customers * avgCookies);
}

// hours of operation
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function CookieStore(name, minCustomers, maxCustomers, avgCookies, tagId){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.hourlySales = [];
  this.totalSales = 0;
  this.tag = tagId;
}

CookieStore.prototype.populateCookieStore = function () {
  for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
    var customers = customersThisHour(this.maxCustomers, this.minCustomers);
    var sales = cookiesSoldThisHour(customers, this.avgCookies);
    this.totalSales += sales;
//    console.log(this.totalSales);
    this.hourlySales.push(sales);
  }
};

function NewStore(name, minCustomers, maxCustomers, avgCookies, tagId){
  var temp = new CookieStore(name, minCustomers, maxCustomers, avgCookies, tagId);
  temp.populateCookieStore();
  return temp;
}

//var g = new CookieStore('First and Pike', 23, 65, 6.3);
//Store Projected Data
//First and Pike Store
var pikeStore = NewStore('First and Pike', 23, 65, 6.3, 'pike-store');

// SeaTac Airport Store
var airportStore = NewStore('SeaTac Airport', 3, 24, 1.2, 'airport-store');

// Seattle Center Store
var centerStore = NewStore('SeattleCenter', 11, 38, 3.7, 'center-store');

// Capitol Hill Store
var hillStore = NewStore('Capitol Hill Store', 20, 38, 2.3, 'hill-store');

// Alki Store
var alkiStore = NewStore('Alki Store', 2, 16, 4.6, 'alki-store');

//stores output
var stores = [pikeStore, airportStore, centerStore, hillStore, alkiStore];
// populate and display the cookies data

for (var iStores = 0; iStores < stores.length; iStores++) {
  console.log(stores[iStores]);
  var rowParent = createElement('tr', 'id', stores[iStores].tag, stores[iStores].name, tableEl);
  for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
    createElement('td', 'class', 'table-data', stores[iStores].hourlySales[iHours], rowParent);
  }
  createElement('td', 'class', 'table-data', stores[iStores].totalSales, rowParent);
}
