// 1

// function sqrNumbers(x1, y1, x2, y2) {
//     console.log(Math.abs(x2 - x1) * Math.abs(y2 - y1));
// }

// sqr(2, 3, 10, 5);
// sqr(10, 5, 2, 3);
// sqr(-5, 8, 10, 5);
// sqr(5, 8, 5, 5);
// sqr(8, 1, 5, 1);


// 2

// function compareNumbers(a, b, n) {
//     let aFixed = Math.floor(a % Math.floor(a) * Math.pow(10, n));
//     let bFixed = Math.floor(b % Math.floor(b) * Math.pow(10, n));
//     console.log(`Дробная часть числа а: ${aFixed}`);
//     console.log(`Дробная часть числа b: ${bFixed}`);
//     console.log(`a > b ? ${aFixed > bFixed}`);
//     console.log(`a >= b ? ${aFixed >= bFixed}`);
//     console.log(`a < b ? ${aFixed < bFixed}`);
//     console.log(`a <= b ? ${aFixed <= bFixed}`);
//     console.log(`a === b ? ${aFixed === bFixed}`);
//     console.log(`a != b ? ${aFixed != bFixed}`);
// }

// compareNumbers(13.123456789, 2.123, 5);
// compareNumbers(13.890123, 2.891564, 2);
// compareNumbers(13.890123, 2.891564, 3);


//3

// function generationOdd(n, m) {
//     let range = Math.abs(n - m) + 1;
//     let min = Math.min(n, m);
//     let result = Math.floor(Math.random() * range) + min;
//     if (result % 2) {
//         console.log(`Раномное число: ${result}`);
//     } else {
//         generationOdd(n, m);
//     }
// }

// generationOdd(0, 100);
// generationOdd(2, 5);
// generationOdd(100, -5);
// generationOdd(-3, -10);