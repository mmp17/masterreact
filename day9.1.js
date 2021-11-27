//ES6 higher order functions
var companies = [
{"name":"McKenzie, Stroman and DuBuque","price":6.7,"category":"Temp Fencing, Decorative Fencing and Gates","quantity":10},
{"name":"Leffler and Sons","price":4.39,"category":"Doors, Frames & Hardware","quantity":4},
{"name":"Okuneva-Moore","price":2.16,"category":"Sitework & Site Utilities","quantity":4},
{"name":"Crooks-Rath","price":3.34,"category":"Retaining Wall and Brick Pavers","quantity":10},
{"name":"Reynolds, O'Hara and Jacobs","price":3.65,"category":"Electrical","quantity":6},
{"name":"Gerlach Group","price":9.3,"category":"Framing (Wood)","quantity":9},
{"name":"Little-Goodwin","price":2.02,"category":"Structural and Misc Steel (Fabrication)","quantity":1},
{"name":"McDermott Inc","price":8.3,"category":"Framing (Steel)","quantity":7},
{"name":"Bauch-McCullough","price":8.15,"category":"Wall Protection","quantity":1},
{"name":"Gerlach and Sons","price":3.76,"category":"Elevator","quantity":6}]

//foor loop. for loop repeats until a specified condition evaluates to false. for statement creates a loop that consists of 
//three optional expressions, enclosed in parentheses and separated by semicolons

// let totalSum = 0;
// for (let i=0; i<companies.length; i++) {
//     totalSum = totalSum + (companies[i].price * companies[i].quantity);
// }
//console.log(totalSum); //323.03

//forEach. The forEach() method executes a provided function once for each array element.

// let totalForEach = 0;
// companies.forEach(i => {
//     totalForEach += (i.price * i.quantity)
// })

// console.log(totalForEach);//323.03

//Reduce. The reduce() method executes a reducer function for each value of an array. 
//reduce() returns a single value which is the function's accumulated result.

// let reducer = companies.reduce((total, i, arr) => {
//     total += (i.price * i.quantity);
//     return total
// },0);

// console.log(reducer); //323.03

// const reducerFn = (value) => {
//     return companies.reduce((a, value) => {
//         return a += value.price * value.quantity
//     }, 0)
// }

// console.log(reducerFn())//323.03