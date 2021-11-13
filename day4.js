// 1. Shuffle the array
// Imagine the supplied array is like a pack of cards. Write a function to shuffle this array in to a
// completely new and entirely random order, much like shuffling a pack of cards.
// const shuffle = (someArray) => {
// // your code
// }
// console.log(shuffle([10, 12, 15])) // [12, 15, 10]

// arr1 = [10, 12, 15];

// console.log(arr1.sort(() => (Math.random() > .5) ? 1 : -1))


// 3. Order the arrays by sum, ascending or descending
// Given an array of arrays (ie. a multidimensional array), each containing only numeric values,
// order these arrays by the sum of the elements within.

// const orderBySum = (someArray) => {
//     var1 [num1,num2] = someArray[0];
//     var2 [num3,num4] = someArray[1];
//     var1 [num5,num6] = someArray[2];

//     let numbers = [5, 13, 1, 44, 32, 15, 500]
    
//     }

//     console.log(orderBySum([[1,3], [4,2], [2,1]]))

// 4. Find the odd one out. Find the odd one out in the provided array. All array elements are equal, except one. Your
// function must return this odd one out.

// const findOddOneOut = (someArray) => {
// // your code
// }
// console.log(findOddOneOut(["a", "a", "b", "a"])) // b

// function findOddOneOut(ar, ar_size)
//     {
//         // Do XOR of all elements and return
//         let res = ar[0];
//         for (let i = 1; i < ar_size; i++)
//             res = res ^ ar[i];
 
//         return res;
//     }
 
// // Driver code 
//         let ar = ["a", "a", "b", "a"];
//         let n = ar.length;
//         console.log ("Odd one is "
//             + findOddOneOut(ar, n));

// 5. Find the smallest and largest numbers. Deduce the smallest and the largest number from the supplied numeric array. Return an array
// containing these numbers, smallest number first. 
//     numbers = [14, 28, 3, 8, 2]
// const findSmallestAndLargestNumbers = (someArray) => {
    

//     var largest = numbers[0];
//     var smallest = numbers[0];
    
//     for (var i = 1; i < numbers.length; i++) {
    
//       if (numbers[i] > largest) {
//         largest = numbers[i];
//       } else if (numbers[i] < smallest) {
//         smallest = numbers[i];
//       }
//     }

//     console.log('The largest number is:', largest);
//     console.log('The smallest number is:', smallest);
// }

// findSmallestAndLargestNumbers(numbers)

// 6. Split the numeric array by odd/even. Write a function to separate a single array in to two separate arrays. 
// The supplied array will only contain numeric values. Your function should output two arrays: one containing odd numbers,
//  the other containing even numbers. The returned arrays should be ordered appropriately, with distinct values only 
//  (no duplicates). The even array should be returned first.

// arr6 = [2, 3, 7, 6, 2, 4, 9]

// const splitByOddAndEven = (someArray) => {

//     var oddArr=[];
//     var evenArr=[];

//     for (var i = 0; i < arr6.length; ++i) {
//         if ((arr6[i] % 2) == 1) {
//             oddArr.push(arr6[i]);
//         }
//     }

//     for (var i = 0; i < arr6.length; ++i) {
//         if ((arr6[i] % 2) == 0) {
//             evenArr.push(arr6[i]);
//         }
//     }
    

//     console.log(evenArr);
//     console.log(oddArr);
// }
    
// splitByOddAndEven(arr6);

//7. Return only unique values

// arr7 = [1, 1, 2, 3, 3, 4, 4, 5];

// const onlyUnique=(someArray)=>{
//   var unique=[]
//   for(let i=0;i<someArray.length;i++){
//       let num=someArray[i]
//       let count=0
//       for(let j=0;j<someArray.length;j++){
//         if(num===someArray[j]){
//           count++;
//         }
//       }
//       if(count==1){
//         unique.push(num);
//       }
//   }
//   console.log(unique)
// }

// onlyUnique(arr7);


