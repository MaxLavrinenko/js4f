
// 1) створити функцію яка приймає масив та виводить його
// let arr = [2,4,5,6,1,2];
// function myFuncArr (arr = 'no array'){
//     document.write(`Show array  ${arr} ,<br>`);
//     document.write(`<hr>`);}
// //myFuncArr(randomArr);
// //////////////////////////////////////////////////////////

// // 2) створити функцію яка заповнює масив рандомними числами та виводить його.
// // Для виведення використати попередню функцію.
// let randomArr = [];
// function random(random = []){
//     for (let i = 0; i < arguments.length; i++) {
//         const argument = Math.random();
//         console.log(argument);
//         randomArr.push(argument);
//     }
// }
// random(1,2,3,4,5);
// console.log(randomArr);
// myFuncArr(randomArr);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// 6) створити функцію яка повертає найменьше число з масиву
// let arr = [2,4,5,6,1,2];
// function min(array = []){
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] < min){
//             min = array[i];
//         }
//     }
//     return min;
// }
// let minimal = min(arr);
// console.log(minimal);
/////////////////////////////////

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// 5) створити функцію яка повертає найбільше число з масиву
// let arr = [2,4,5,6,1,2];
// function max(array= []){
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]>max){
//             max = array[i];
//         }
//     }
//     return max;
// }
//
// let maximal = max(arr);
// console.log(maximal);
///////////////////////////////

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// let arr = [2,4,5,6,1,2];
// function summator (array = []){
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum+=arrayElement;
//     }
//     return sum;
// }
// let sum = summator(arr)
// console.log(sum);
////////////////////////////////////////

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [2,4,5,6,1,2];
// function sered(array = []){
//     let elem = 0;
//     let ser = 0;
//     for (const arrayElement of array) {
//         elem +=arrayElement;
//     }
//     ser = elem/array.length;
//     return ser;
// }
// let ser = sered(arr);
// console.log(ser);
////////////////////////////////////////

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let objArr = [{name:'Dima',age:30,},{car:'Toyota', model:'Camry'},{name:'Oleg', age: 33},{car:'Honda', model:'Civic'}]
// function keyArray(arrays = []){
//     let keyArr = [];
//     for (const array of arrays) {
//         for(arr in array){
//             keyArr.push(arr);
//         }
//     }
//     return keyArr;
// }
// let keyArr = keyArray(objArr);
// console.log(keyArr);
///////////////////////////////////////////

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//////////////////
// let objArr = [{name:'Dima',age:30,},{car:'Toyota', model:'Camry'},{name:'Oleg', age: 33},{car:'Honda', model:'Civic'}]
// function keyArray(arrays = []){
//     let keyArr = [];
//     for (const array of arrays) {
//         for(arr in array){
//             keyArr.push(array[arr]);
//         }
//     }
//     return keyArr;
// }
// let keyArr = keyArray(objArr);
// console.log(keyArr);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
/////////////////////////////////////
// let arr1=[1,2,3,4];
// let arr2=[2,3,4,5];
// let arrsum=[];
// function arrSum(arrAs = [],arrBs = []){
//     for (let i = 0; i < arrAs.length; i++) {
//         arrsum.push(arrAs[i]+arrBs[i]);
//     }
// }
// arrSum(arr1,arr2);
// console.log(arrsum);

//////============================================================================
//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
// let arr = [2,4,6,8,54,67,345,318];
// function myFunction (array = []){
//     let min =array[0];
//     let max =array[0];
//     for (let i = 0; i < array.length; i++) {
//         if( array[i]>max){
//             max = array[i];
//         }
//         if( array[i]<min){
//             min = array[i];
//         }
//     }
//     console.log(max);
//     return min;
// }
// let maxMin = myFunction(arr);
// console.log(maxMin);
// /////////////////////////////////////////////////

//- Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
 // Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// let objArr = [{name:'Dima',age:30,},{car:'Toyota', model:'Camry'},{name:'Oleg', age: 33},{car:'Honda', model:'Civic'}]
// function keyArray(arrays = []){
//     let keyArr = [];
//     let sw = confirm('"Ok" = Value , Canсel = Kеy');
//     for (const array of arrays) {
//         for(arr in array){
//             sw === true? keyArr.push(array[arr]) : keyArr.push(arr);
//             }
//         }
//     return keyArr;
//     }
// let keyArr = keyArray(objArr);
// console.log(keyArr);
////////////////////////////////////////////
//- Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
  //EXAMPLE:
  //foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
  //foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
  //foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ] 
// let arr = [9,8,0,4];
// function foo (array =[],index){
//     for (let i = 0; i<array.length;i++){
//         let sh = array[i];
//         if ( i === index){
//             array[i] = array[i + 1];
//             array[i + 1] = sh
//         }
//     }
// return array;
// }
// let res = foo(arr,2);
// console.log(res);
