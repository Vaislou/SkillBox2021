// 1

// function filterArray(array, key, value) {
//     let result = [];

//     array.map(e => {
//         if (e[key] === value)
//         result.push(e);
//     })

//     return result;
// }

// let obj = [
//     { name: 'Василий', surname: 'Васильев' },
//     { name: 'Иван', surname: 'Иванов' },
//     { name: 'Пётр', surname: 'Петров' }
// ];

// let check = filterArray(obj, 'surname', 'Петров');

// console.log(check)
// console.log(obj)

// export default { filterArray }


// 2, 3

// function createDropList(array, defaultValue = 0) {
//     let newSelect = document.createElement('select');
//     let newOption;
//     if (!Array.isArray(array)) {
//         array = [array];
//     }
//     array.map(e => {
//         if (checkTypeOfElem(e)) {
//             for (let [key, value] of Object.entries(e)) {
//                 if (key == defaultValue) {
//                     newOption = generateListItem(key, value);
//                     newOption.setAttribute('selected', '');
//                     newSelect.append(newOption);
//                 } else {
//                     newOption = generateListItem(key, value)
//                     newSelect.append(newOption);
//                 }
//             }
//         } else {
//             let key = e;
//             let value = key;
//             if (e === defaultValue) {
//                 newOption = generateListItem(key, value);
//                 newOption.setAttribute('selected', '');
//                 newSelect.append(newOption);
//             } else {
//                 newOption = generateListItem(key, value)
//                 newSelect.append(newOption);
//             }
//         }
        
//     });

//     document.body.append(newSelect);
// }

// function generateListItem(key, value) {
//     newOption = document.createElement('option');
//     newOption.value = key;
//     newOption.innerHTML = value;
//     return newOption
// }

// function checkTypeOfElem(e) {
//     return (typeof (e) == 'object');
// }

// let obj = [
//     {0: 'Выберите город'},
//     {1: 'Москва'},
//     {2: 'Минск'},
//     {3: 'Киев'},
//     {4: 'Варшава'}
// ]

// let test1 = [1, 2, 'три', 'четыре']

// let test2 = { value1: 'Значение 1', value2: 'Значение 2' }

// createDropList(test2)