'use strict';

const now = new Date('2023-08-25');  /*отсчет  идет в милисек, с 1970 года*/
// new Date.parse('2023-08-25');  /*то же самое, что и сверху*/

console.log(now.setHours(40));
console.log(now);

// console.log(now.getFullYear());  /*год*/
// console.log(now.getMonth());  /*сентябрь = 08, смещ на 1, отсчет с 0*/
// console.log(now.getDate());  /*от 1 до 31*/
// console.log(now.getDay());  /*воскресенье = 0, понедельник = 1*/
// console.log(now.getHours());  /*показвает сист время*/
// console.log(now.getUTCHours());  /*показвает UTC*/

// console.log(now.getTimezoneOffset());  /*ввдет -180, те 3ч*/
// console.log(now.getTime());  /*1692896167413 милисек с 1970г*/

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} милисекунд`);