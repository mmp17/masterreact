//array of objects
var cars = [
    {type: 'sport'}, 
    {type: '4x4'}, 
    {type: 'sport'}]

const newCars = cars.map(item => {
    if(item.type === 'sport') {
        return {...item, speed: 400}
    } else {
        return {...item, speed:200}
    }
});

//console.log(newCars)

var carTypes = cars.map(item => {return item.type});
console.log(carTypes)

