// 1

// function generateArr(n, m, count) {
//     let min = Math.min(n, m);
//     let avg = Math.abs(n - m);
//     let result = [];

//     for (let i = 0; i < count; i++) {
//         result.push(Math.round(Math.random() * avg) + min);
//     }

//     console.log(result)
// }

// generateArr(0, 100, 100);
// generateArr(2, 5, 50);
// generateArr(100, -5, 70);
// generateArr(-3, -10, 42);


//2

// function reverseString(str) {
//     console.log(str.split('').reverse().join(''));
// }

// reverseString('Привет, мир!');
// reverseString('1');
// reverseString('');

//3

// function destroyTank(roadMines) {
//     let count = 0;
//     let tankLiveArr = ['Танк переместился на '];
//     for (let i = 0; i < roadMines.length; i++) {
//         tankLiveArr.push(`${i + 1}, `);
//         if (roadMines[i] && count == 0) {
//             tankLiveArr.push('танк поврежден, танк переместился на ')
//             count++;
//         } else if (roadMines[i] && count == 1) {
//             tankLiveArr.push('танк уничтожен.');
//             break;
//         } 
//     }
//     console.log(tankLiveArr);
// }

// destroyTank([true, true, true, true, true, true, true, true, true, true]);
// destroyTank([true, false, false, false, false, false, false, false, false, true]);
// destroyTank([false, false, false, true, false, false, false, false, false, false]);
// destroyTank([false, false, false, false, false, false, false, false, false, false]);


// 4

// let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let daysOfMounth = [];

// for (let i = 1; i <= 31; i++) {
//     daysOfMounth.push(i);
// }

// function generateByDate(dateValue) {
//     let startIndex = daysOfWeek.indexOf(dateValue);
//     for (let i = 0; i < daysOfMounth.length; i++) {
//         console.log(`${daysOfMounth[i]} января, ${daysOfWeek[startIndex]}`);
//         if (startIndex == daysOfWeek.length - 1) {
//             startIndex = 0;
//         } else {
//             startIndex++;
//         }
//     }
// }

// generateByDate('Вторник');
// generateByDate('Четверг');
// generateByDate('Воскресенье');