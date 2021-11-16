// var array =
// {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//     lat: "-37.3159",
//     lng: "81.1496",
//     },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets",
//     },
//     }

//     var {id, username, address: {city, geo:{lng, lat}}} = array;
   
//     console.log(username, id, address.city);

var button = document.getElementById('button')

button.addEventListener('click', function(event){
    var imageurl = document.getElementById('url').value
    var img = document.createElement('img')
    img.src = imageurl
    document.body.appendChild(img)
})

// function addimage() {
//     var img = new Image();
//     img.src = document.getElementById('imagename')
//     img_home.appendChild(img);
// }