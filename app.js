'use strict';

//var sectionEl = document.getElementById('Hello');
//var divEl = document.getElementsByClassName('other');
// var pikeEl = document.getElementById('pike-store');
// var airportEl = document.getElementById('airport-store');
// var centerEl = document.getElementById('center-store');
// var hillEl = document.getElementById('hill-store');
// var alkiEl = document.getElementById('alki-store');
// var elements = [pikeEl, airportEl, centerEl, hillEl, alkiEl];

// table HTML Node
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
  var tempStore = new CookieStore(name, minCustomers, maxCustomers, avgCookies, tagId);
  tempStore.populateCookieStore();
  return tempStore;
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

//produce headder
function makeTableHead() {
  var headParent = createElement('thead', 'id', 'table-head', 'Hours', tableEl);
  for (var iHead = 0; iHead < hoursOpen.length; iHead++) {
    createElement('th', 'class', 'time-indicator', hoursOpen[iHead], headParent);
  }
  createElement('th', 'id', 'totals', 'Total', headParent);
}

//produce footer
function makeTableFoot() {
  var footParent = createElement('tfoot', 'id', 'table-foot', 'Totals', tableEl);
  var grandTotal = 0;
  for (var iFoot = 0; iFoot < hoursOpen.length; iFoot++) {
    var hourlyTotal = 0;
    for (var iSubtotal = 0; iSubtotal < stores.length; iSubtotal++) {
      hourlyTotal += stores[iSubtotal].hourlySales[iFoot];
      grandTotal += stores[iSubtotal].hourlySales[iFoot];
    }
    createElement('td', 'class', 'hourly-totals', hourlyTotal, footParent);
  }
  createElement('td', 'id', 'grand-total', grandTotal, footParent);
}

/*
function makeTableBody() {
  for (var iStores = 0; iStores < stores.length; iStores++) {
    console.log(stores[iStores]);
    var rowParent = createElement('tr', 'id', stores[iStores].tag, stores[iStores].name, tableEl);
    for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
      createElement('td', 'class', 'table-data', stores[iStores].hourlySales[iHours], rowParent);
    }
    createElement('td', 'class', 'table-data', stores[iStores].totalSales, rowParent);
  }
}

function makeTable() {
  makeTableHead();
  makeTableBody();
  makeTableFoot();
}
*/

makeTableHead();

var pikeParent = createElement('tr', 'id', pikeStore.tag, pikeStore.name, tableEl);
for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
  createElement('td', 'class', 'table-data', pikeStore.hourlySales[iHours], pikeParent);
}
createElement('td', 'class', 'table-data', pikeStore.totalSales, pikeParent);

var airportParent = createElement('tr', 'id', airportStore.tag, airportStore.name, tableEl);
for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
  createElement('td', 'class', 'table-data', airportStore.hourlySales[iHours], airportParent);
}
createElement('td', 'class', 'table-data', airportStore.totalSales, airportParent);

var centerParent = createElement('tr', 'id', centerStore.tag, centerStore.name, tableEl);
for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
  createElement('td', 'class', 'table-data', centerStore.hourlySales[iHours], centerParent);
}
createElement('td', 'class', 'table-data', centerStore.totalSales, centerParent);

var hillParent = createElement('tr', 'id', hillStore.tag, hillStore.name, tableEl);
for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
  createElement('td', 'class', 'table-data', hillStore.hourlySales[iHours], hillParent);
}
createElement('td', 'class', 'table-data', hillStore.totalSales, hillParent);

var alkiParent = createElement('tr', 'id', alkiStore.tag, alkiStore.name, tableEl);
for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
  createElement('td', 'class', 'table-data', alkiStore.hourlySales[iHours], alkiParent);
}
createElement('td', 'class', 'table-data', alkiStore.totalSales, alkiParent);

makeTableFoot();
