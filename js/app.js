'use strict';


// ************************* Global **********************************

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomNumCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//***************************** DOM Window ************************

let storeSection = document.getElementById('store-sales');

// console.dir(cookieSection);

// ***************************** Helper Function **********************




// ************************* constructor *********************

function store(name, minCust, maxCust, avgSales) {
this.name = name;
this.minCust = minCust;
this.maxCust = this.maxCust;
this.avgSales= this.avgSalest;
this.total = 0;
this.averageCookiesBought = [];
this.total = 0;
}

let Seattle = new store('Seattle', 23, 65, 6.3, [], 0);
let Tokyo = new store ('Tokoyo', 3, 24, 1.2)
let Dubai = new store('Dubai', 11, 38, 3.7);
let Paris = new store ('Paris', 20,38, 2.3);
let Lima = new store('lima', 2, 16, 4.6);

// ************************* prototype method **************

store.prototype.getRandom = functions () {
  return (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
};

store.prototype.cookieSales = function () {
  for(let i = 0; i < hours.length; i++){
    let cookiesNeeded = this.CustPerHr() * this.avgCookieBought;
    this.cookiesBought.push(cookiesNeeded);
    this.total = this.total + cookiesNeeded
    }      
      },



store.prototype.render = function () {
  this.cookieSales();
  let trElem =  document.createElement('tr');
  tableSelector.appendChild(trElem)

  // for(let i = 0; i < this.hours.length; i++){
  //   let liElem = document.createElement('li');
  //   liElem.textContent = this.hours[i];
  //   ulElem.appendChild(liElem);
  //   }

  let tdElem = document.createElement('td');
  tdElem.textContent = this. namee;
  
  


}

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 25, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);
let cities = [seattle, tokyo, dubai, paris, lima];
for (let city of cities) {
  city.cookieSales();
  city.render();
}











// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieBought: 6.3,
//   cookiesBought: [],
//   total: 0,
//   CustPerHr: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSales: function(){
//     for(let i = 0; i < hours.length; i++){
//       let cookiesNeeded = this.CustPerHr() * this.avgCookieBought;
//       this.cookiesBought.push(cookiesNeeded);
//       this.total = this.total + cookiesNeeded
// }      
//   },
  
//   render: function(){
//     this.cookieSales();
//     let ulElem = document.createElement('ul');
//     storeSection.appendChild(ulElem);
  
//     // ** ${hours[i]}: ${this.cookieBought[i]} cookies
  
//   }
//   function
// };



// CustPerHr * avgCookieBought = cookiesNeeded






//   render: function () {

//     let articleElm = document.createElement('article')

//   coo.appendChild(articleElm);

//   let h2Elem = document.createElement('h2');

//   h2Elem.innerText = this.name
//   articleElm.appendChild(h2Elem);

//   let pElem =  document.createElement('p');
//   pElem.textContent = this.sales;
//   articleElm.appendChild(pElem);

//   let ulElem =  document.createElement('ul');
  
//   for(let i = 0; i < this.hours.length; i++){
//     let liElem = document.createElement('li');
//     liElem.textContent = this.hours[i];
//     ulElem.appendChild(liElem);
//   }



// seattle.cookieSales();
// console.log(seattle);
// seattle.render();


// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieBought: 1.2,
//   cookiesBought: [],
// }

// let dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookiesBought: 3.7,
//   cookiesBought: [],
// }

// let paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieBought: 2.3,
//   cookiesBought: [],
// }

// let lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieBought: 4.6,
//   cookiesBought: [],
// }