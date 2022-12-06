'use strict'

let storeSales = document.getElementById('store-sales');

// console.dir(cookieSection);

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomCookies(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesBought: [],
  cookieSales: function(){
    this.sales = randomCookies(23, 65);
  }
}

  render: function () {

    let articleElm = document.createElement('article')

  coo.appendChild(articleElm);

  let h2Elem = document.createElement('h2');

  h2Elem.innerText = this.name
  articleElm.appendChild(h2Elem);

  let pElem =  document.createElement('p');
  pElem.textContent = this.sales;
  articleElm.appendChild(pElem);

  let ulElem =  document.createElement('ul');
  
  for(let i = 0; i < this.hours.length; i++){
    let liElem = document.createElement('li');
    liElem.textContent = this.hours[i];
    ulElem.appendChild(liElem);
  }



seattle.cookieSales();
console.log(seattle);
seattle.render();


let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieBought: 1.2,
  cookiesBought: [],
}

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookiesBought: 3.7,
  cookiesBought: [],
}

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieBought: 2.3,
  cookiesBought: [],
}

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieBought: 4.6,
  cookiesBought: [],
}