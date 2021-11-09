//finding most used and least used letters
const text = 'ooooooiewruewh'

//console.log(text.length) 

// var getMax = function (str) {
//     var max = 0,
//         maxChar = '';
//      str.split('').forEach(function(char){
//        if(str.split(char).length > max) {
//            max = str.split(char).length;
//            maxChar = char;
//         }
//      });
//      return console.log('Most used letter is', maxChar, 'is and used', max, 'times');
//    };

// getMax(text);

var getMin = function (str) {
    var min = str.length,
        minChar = '';
     str.split('').forEach(function(char){
       if(str.split(char).length < min && str.split(char).length !==0) {
           min = str.split(char).length;
           minChar = char;
        }
     });
     return console.log('Least used letter is', minChar, 'is and used', min, 'times');
   };

getMin(text);