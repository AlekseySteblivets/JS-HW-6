'use strict';

// 6-1-44Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, 
// и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Пиши код ниже этой строки

//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     //     totalPrice += orderedItems[i];
//     // }

//     orderedItems.forEach(element => {
//         totalPrice += element;
//     });

//     // Пиши код выше этой строки
//     return totalPrice;
// }
// console.log(calculateTotalPrice);
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));



// 6-2-44 Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, 
// в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки

//     // for (let i = 0; i < numbers.length; i += 1) {
//     //     if (numbers[i] > value) {
//     //         filteredNumbers.push(numbers[i]);
//     //     }
//     // }
//     numbers.forEach(element => {
//         if (element > value) {
//             filteredNumbers.push(element)
//         }

//     });

//     // Пиши код выше этой строки
//     return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));



// 6-3-44 Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в 
// параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки

//     // for (let i = 0; i < firstArray.length; i += 1) {
//     //     if (secondArray.includes(firstArray[i])) {
//     //         commonElements.push(firstArray[i]);
//     //     }
//     // }

//     firstArray.forEach(element => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element)
//         }
//     });

//     return commonElements;
//     // Пиши код выше этой строки
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));    



// 6-4-44Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// // Пиши код ниже этой строки

// // function calculateTotalPrice(quantity, pricePerItem) {
// //     // Пиши код выше этой строки
// //     return quantity * pricePerItem;
// // }

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));



// 6-5-44Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// // Пиши код ниже этой строки
// // const calculateTotalPrice = (quantity, pricePerItem) => {
// //     return quantity * pricePerItem;
// // };

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// // Пиши код выше этой строки
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));



// 6-6-44ыполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. 
// Замени коллбек - функцию передаваемую в метод forEach() на стрелочную функцию.

// Пиши код ниже этой строки
// const calculateTotalPrice = ((orderedItems) => {
//     let totalPrice = 0;
//     orderedItems.forEach(element => {
//         totalPrice += element;
//         // console.log(totalPrice);
//     });
//     return totalPrice;
// });

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));



// 6-7-44Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.
// Пиши код ниже этой строки

// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach(element => {
//         if (element > value) { filteredNumbers.push(element) }
//     });
//     return filteredNumbers;
// };

// // Пиши код выше этой строки

// // function filterArray(numbers, value) {
// //     const filteredNumbers = [];

// //     numbers.forEach(function (number) {
// //         if (number > value) {
// //             filteredNumbers.push(number);
// //         }
// //     });
// //     return filteredNumbers;
// // }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));



// 6-8-44Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach(element => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });
//     return commonElements;

// };
// // function getCommonElements(firstArray, secondArray) {
// //     const commonElements = [];

// //     firstArray.forEach(function (element) {
// //         if (secondArray.includes(element)) {
// //             commonElements.push(element);
// //         }
// //     });

// //     // Пиши код выше этой строки
// //     return commonElements;
// // }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));



// 6-9-44Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент,
// значение которого это чётное число, добавляя к нему значение параметра value.
// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала,
// наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//     const newArray = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] % 2 === 0) {
//             newArray.push(numbers[i] + value);
//         }
//         else {
//             newArray.push(numbers[i]);
//         }
//     }
//     return newArray;
//     // Пиши код выше этой строки
// }

// // function changeEven(numbers, value) {
// //     // Пиши код ниже этой строки
// //     const newArray = [];
// //     const array = [];
// //     for (let i = 0; i < numbers.length; i += 1) {
// //         const elem = numbers[i] % 2 === 0
// //             ? numbers[i] + value
// //             : numbers[i];
// //         newArray.push(elem);
// //     }
// //     const resultArray = [...array, ...newArray];
// //     return resultArray;
// //     // Пиши код выше этой строки
// // }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));



// 6-10-44Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map()

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map((planet) => planet.length);



console.log(planetsLengths);


