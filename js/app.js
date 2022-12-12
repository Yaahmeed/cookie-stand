'use strict';

// *WINDOW INTO THE DOM*

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let allStores = [];

let storeTable = document.getElementById('Store-table');

// *STEP 1: ELEMENT TO LISTEN TO

let addStoreForm = document.getElementById('addStore');

// *HELPER FUNCTIONS*

// Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createHeader() {
  let rowElem = document.createElement('tr');
  storeTable.appendChild(rowElem);

  let cityName = document.createElement('tr');
  rowElem.appendChild(cityName);

  for (let i = 0; i < storeHours.length; i++) {
    let hours = document.createElement('td');
    hours.textContent = storeHours[i];
    rowElem.appendChild(hours);
  }

  let dailyTotal = document.createElement('td');
  dailyTotal.textContent = 'Daily Store Totals';
  rowElem.appendChild(dailyTotal);
}

function createFooter() {
  let footer = document.getElementById('tfoot');
  storeTable.appendChild(footer);

  let row = document.createElement('tr');
  row.id = 'finalRow';
  footer.appendChild(row);

  let totals = document.createElement('td');
  totals.textContent = 'Totals';
  row.appendChild(totals);

  let dailyTotalCookies = 0;
  for (let i = 0; i < storeHours.length; i++) {
    let allCookiesThisHour = 0;

    for (let j = 0; j < allStores.length; j++) {
      let cookiesThisHour = allStores[j].hourlyCookie[i];
      allCookiesThisHour += cookiesThisHour;
    }
    dailyTotalCookies += allCookiesThisHour;

    let storeTotals = document.createElement('td');
    storeTotals.textContent = allCookiesThisHour;
    row.appendChild(storeTotals);
  }
  let grandTotal = document.createElement('td');
  grandTotal.textContent = dailyTotalCookies;
  row.appendChild(grandTotal);
}

function handleSubmit(event) {
  event.preventDefault();

  let name = event.target.newStore.value;
  let min = +event.target.minCust.value;
  let max = +event.target.maxCust.value;
  let averageCookie = +event.target.avgCookie.value;
  let newStore = new Stores(name, min, max, averageCookie);
  console.log(newStore);

  document.getElementById('finalRow').remove();

  newStore.render();
  createFooter();

  addStoreForm.reset();
}

// *CONSTRUCTOR*

function Stores(name, min, max, averageCookie) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.averageCookie = averageCookie;
  this.hourlyCookie = [];
  this.totalCookie = 0;

  allStores.push(this);
  // console.log(name);
}

Stores.prototype.getTotalCookie = function() {
  for (let i = 0; i < this.hourlyCookie.length; i++) {
    let thisHour = this.hourlyCookie[i];
    this.totalCookie += thisHour;
  }
};

Stores.prototype.calcHourlyCookie = function() {
  for (let i = 0; i < storeHours.length; i++) {
    this.hourlyCookie.push(Math.ceil(randomCustomer(this.min, this.max) * this.averageCookie));
  }
};

new Stores('Seattle', 23, 65, 6.3);
new Stores('Tokyo', 3, 24, 1.2);
new Stores('Dubai', 11, 38, 3.7);
new Stores('Paris', 20, 38, 2.3);
new Stores('Lima', 2, 16, 4.6);

Stores.prototype.render = function() {
  this.calcHourlyCookie();
  this.getTotalCookie();

  let rowElem = document.createElement('tr');
  storeTable.appendChild(rowElem);

  let cityName = document.createElement('th');
  cityName.textContent = this.name;
  rowElem.appendChild(cityName);

  for (let i = 0; i < this.hourlyCookie.length; i++) {
    let tableCell = document.createElement('td');
    tableCell.textContent = this.hourlyCookie[i];
    rowElem.appendChild(tableCell);
  }

  let totalsCell = document.createElement('td');
  totalsCell.textContent = this.totalCookie;
  rowElem.appendChild(totalsCell);

};

console.log(allStores);

// *STEP 2: EVENT LISTENER
// *EXECUTABLE CODE*

createHeader();

addStoreForm.addEventListener('submit', handleSubmit);

for (let i = 0; i < allStores.length; i++) {
  allStores[i].render();
}

createFooter();
