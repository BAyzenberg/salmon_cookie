'use strict';

// table HTML Node
var tableEl = document.getElementById('store-data');

// simple element creation
function createElement(tagType, tagIdentifier, tagIdentifierName, elementContent, parentNode) {
  var element = document.createElement(tagType);
  element.setAttribute(tagIdentifier, tagIdentifierName);
  element.textContent = elementContent;
  // console.log(element);
  //give the Child to the Dom
  parentNode.appendChild(element);
  return element;
}

//createElement('p', 'id', 'myCustomId', 'Hello User', sectionEl);
//<section id = "sectionEl">
  //<p id = "myCustomId">Hello User</p>
//</section>
//createElement('h1', 'class', 'headding-one', 'It Lives!', divEl[0]);

// hours of operation
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
    var range = this.maxCustomers - this.minCustomers + 1;
    // console.log(this.maxCustomers);
    var customers = Math.floor(Math.random() * range) + this.minCustomers;

    // Cookies sold this hour
    var sales = Math.floor(customers * this.avgCookies);
    this.totalSales += sales;
//    console.log(this.totalSales);
    this.hourlySales.push(sales);
  }
};

var stores = [];

function NewStore(name, minCustomers, maxCustomers, avgCookies, tagId){
  var newStoreName = new CookieStore(name, minCustomers, maxCustomers, avgCookies, tagId);
  newStoreName.populateCookieStore();
  // console.log(newStoreName);
  stores.push(newStoreName);
  return newStoreName;
}

//Store Projected Data
//First and Pike Store
NewStore('First and Pike', 23, 65, 6.3, 'pike-store');

// SeaTac Airport Store
NewStore('SeaTac Airport', 3, 24, 1.2, 'airport-store');

// Seattle Center Store
NewStore('SeattleCenter', 11, 38, 3.7, 'center-store');

// Capitol Hill Store
NewStore('Capitol Hill Store', 20, 38, 2.3, 'hill-store');

// Alki Store
NewStore('Alki Store', 2, 16, 4.6, 'alki-store');

//stores output
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

CookieStore.prototype.makeTableRow = function() {
  var rowParent = createElement('tr', 'id', this.tag, this.name, tableEl);
  for (var iHours = 0; iHours < hoursOpen.length; iHours++) {
    createElement('td', 'class', 'table-data', this.hourlySales[iHours], rowParent);
  }
  createElement('td', 'class', 'daily-totals', this.totalSales, rowParent);
};

function makeTable() {
  makeTableHead();
  for (var iStore = 0; iStore < stores.length; iStore++) {
    stores[iStore].makeTableRow();
  }
  makeTableFoot();
}

function burninateTheTable() {
  while (tableEl.hasChildNodes()) {
    tableEl.removeChild(tableEl.firstChild);
  }
}

makeTable();

var storeFormEl = document.getElementById('new-store-form');

storeFormEl.addEventListener('submit', pressSubmit);

function pressSubmit(event){
  event.preventDefault();
  event.stopPropagation();

  var nameNew = event.target.name.value;
  var minCustomers = parseInt(event.target.minCustomers.value);
  var maxCustomers = parseInt(event.target.maxCustomers.value);
  var avgCookies = parseFloat(event.target.avgCookies.value);
  var tagNew = event.target.tag.value;

  console.log(minCustomers);
  console.log(maxCustomers);
  var store = NewStore(nameNew, minCustomers, maxCustomers, avgCookies, tagNew);

  console.log(store);

  burninateTheTable();
  makeTable();
};
