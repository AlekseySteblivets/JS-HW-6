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

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths);



// 6-11-44Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг
// (свойство title) из всех объектов массива books.

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const titles = books.map(book => book.title);

// console.log(titles);



// 6-12-44Используя метод flatMap() сделай так, чтобы в переменной genres получился
// массив всех жанров книг(свойство genres) из массива книг books.
// const books = [
//     {
//         title: 'Последнее королевство',
//         author: 'Бернард Корнуэлл',
//         genres: ['приключения', 'историческое']
//     },
//     {
//         title: 'На берегу спокойных вод',
//         author: 'Роберт Шекли',
//         genres: ['фантастика']
//     },
//     {
//         title: 'Красна как кровь',
//         author: 'Ли Танит',
//         genres: ['ужасы', 'мистика']
//     }
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap(book => book.genres);
// console.log(genres);



// 6-13-44Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name)
// из массива объектов в параметре users.

// const users = [
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         skills: ['ipsum', 'lorem'],
//         gender: 'male',
//         age: 37,
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//         gender: 'female',
//         age: 34,
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//         gender: 'male',
//         age: 24,
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         skills: ['adipisicing', 'irure', 'velit'],
//         gender: 'female',
//         age: 21,
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         skills: ['ex', 'culpa', 'nostrud'],
//         gender: 'male',
//         age: 27,
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         skills: ['non', 'amet', 'ipsum'],
//         gender: 'male',
//         age: 38,
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         skills: ['lorem', 'veniam', 'culpa'],
//         gender: 'female',
//         age: 39,
//     },
// ];
// // Пиши код ниже этой строки
// // const getUserNames = users.map(user => user.name);
// const getUserNames = users => users.map(user => user.name);
// // Пиши код выше этой строки

// console.log(getUserNames(users));



// 6-14-44Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов 
// пользователей(свойство email) из массива объектов в параметре users.

// // Пиши код ниже этой строки

// const getUserEmails = users => users.map(user => user.email);
// // Пиши код выше этой строки

// console.log(getUserEmails([
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         skills: ['ipsum', 'lorem'],
//         gender: 'male',
//         age: 37,
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//         gender: 'female',
//         age: 34,
//     }]));



// 6-15-44Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, 
// а в переменной oddNumbers массив нечётных.Обязательно используй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);



// 6-16-44Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, 
// а в переменной uniqueGenres массив уникальных жанров - без повторений.

// const books = [
//     {
//         title: 'Последнее королевство',
//         author: 'Бернард Корнуэлл',
//         genres: ['приключения', 'историческое']
//     },
//     {
//         title: 'На берегу спокойных вод',
//         author: 'Роберт Шекли',
//         genres: ['фантастика', 'мистика']
//     },
//     {
//         title: 'Красна как кровь',
//         author: 'Ли Танит',
//         genres: ['ужасы', 'мистика', 'приключения']
//     }
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((book, index, array) => array.indexOf(book) === index);

// console.log(allGenres);
// console.log(uniqueGenres);



// 6-17-44Используя метод filter() дополни код так, чтобы:
// В переменной topRatedBooks получился массив книг рейтинг которых(свойство rating)
// больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем(свойство author)
// которое совпадает со значением в переменной AUTHOR.

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);



// 6-18-44Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у 
// которых цвет глаз(свойство eyeColor) совпадает со значением параметра color.

// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

// // Пиши код выше этой строки
// console.log(getUsersWithEyeColor([
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male'
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female'
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male'
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female'
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male'
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male'
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female'
//     }
// ], "blue"));



// 6-19-44Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, 
// возраст которых(свойство age) попадает в промежуток от minAge до maxAge.

// // Пиши код ниже этой строки
// const users = [
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//         age: 37
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//         age: 34
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//         age: 24
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//         age: 21
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//         age: 27
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//         age: 38
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//         age: 39
//     }
// ];
// const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age > minAge && user.age < maxAge);

// // Пиши код выше этой строки

// console.log(getUsersWithAge(users, 20, 30));



// 6-20-44Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей 
// у которых есть друг с именем в параметре friendName.Массив друзей пользователя хранится в свойстве friends.

// Пиши код ниже этой строки
// const users = [
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//         age: 37
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//         age: 34
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//         age: 24
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//         age: 21
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//         age: 27
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//         age: 38
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//         age: 39
//     }
// ];
// const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));

// // Пиши код выше этой строки

// console.log(getUsersWithFriend(users, 'Briana Decker'));



// 6-21-44Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends).
// У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

// Пиши код ниже этой строки
// const users = [
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//         age: 37
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//         age: 34
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//         age: 24
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//         age: 21
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//         age: 27
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//         age: 38
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//         age: 39
//     }
// ];

// const getFriends = (users) => {
//     const totalFriends = users.flatMap(user => user.friends);
//     return totalFriends.filter((friend, index, array) => array.indexOf(friend) === index);
// };

// console.log(getFriends(users));



// 6-22-44Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей,
// значение свойства isActive которых true.

// Пиши код ниже этой строки
const users = [
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male',
        age: 37
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female',
        age: 34
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male',
        age: 24
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female',
        age: 21
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        gender: 'male',
        age: 27
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        gender: 'male',
        age: 38
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female',
        age: 39
    }
];
const getActiveUsers = (users) => users.filter(user => user.isActive === true);

// Пиши код выше этой строки
console.log(getActiveUsers(users));
