
var food = [
    {
        "name": "McKenzie, Stroman and DuBuque",
        "price": 6.7,
        "category": "breakfast",
        "quantity": 10
    },
    {
        "name": "Leffler and Sons",
        "price": 4.39,
        "category": "lunch",
        "quantity": 4
    },
    {
        "name": "Okuneva-Moore",
        "price": 2.16,
        "category": "dinner",
        "quantity": 4
    },
    {
        "name": "Crooks-Rath",
        "price": 3.34,
        "category": "lunch",
        "quantity": 10
    },
    {
        "name": "Reynolds, O'Hara and Jacobs",
        "price": 3.65,
        "category": "breakfast",
        "quantity": 6
    },
    {
        "name": "Gerlach Group",
        "price": 9.3,
        "category": "dinner",
        "quantity": 9
    },
    {
        "name": "Little-Goodwin",
        "price": 2.02,
        "category": "breakfast",
        "quantity": 1
    },
    {
        "name": "McDermott Inc",
        "price": 8.3,
        "category": "lunch",
        "quantity": 7
    },
    {
        "name": "Bauch-McCullough",
        "price": 8.15,
        "category": "dinner",
        "quantity": 1
    },
    {
        "name": "Gerlach and Sons",
        "price": 3.76,
        "category": "lunch",
        "quantity": 6
    }
]

// let reducer = food.reduce((result, item) => {
//     const {category, price, quantity} = item;
//     const totalItemPrice = price * quantity;
//     if(item.category === 'lunch') {
//         result.lunch += totalItemPrice
//     } else if (category === 'dinner') {
//         result.dinner += totalItemPrice
//     } else {
//         result.breakfast += totalItemPrice
//     }

//     return result;
// },{breakfast: 0, lunch: 0, dinner: 0})

// console.log(reducer);


const highLowPrice = food.map(item => {
    if(item.price <= 3) {
        return {...item, PriceRate: 'Inexpensive'}
    } 
    else if (item.price > 3 && item.price <= 7) {
        return {...item, PriceRate: 'Moderate'}
    } else {
        return {...item, PriceRate: 'Expensive'}
    }
});

console.log(highLowPrice);