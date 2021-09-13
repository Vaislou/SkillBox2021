//1

// function generateValidArray(array, invalidArray) {
//     let validArray = []
//     for (let i = 0; i < array.length; i++) {
//         if (!(invalidArray.includes(array[i]))) {
//             validArray.push(array[i]);
//         }
//     }
//     return validArray;
// }
// let first = [
//     'iahme@newshbo.com', 'phem_een1@devoo.site', 'eimad_popsr@isluntvia.com', 
//     'behsun.design@gmailya.com', 'gossa@4su.one', 'llok.rok.71@kelec.cf',
//     '6usama@anuefa.com', 'fsanggyu.kim.7928@sungkian.com'
// ];

// let second = ['behsun.design@gmailya.com', 'llok.rok.71@kelec.cf', 'phem_een1@devoo.site'];

// let correct = [
//     'iahme@newshbo.com', 'eimad_popsr@isluntvia.com', 'gossa@4su.one',
//     '6usama@anuefa.com', 'fsanggyu.kim.7928@sungkian.com'
// ];

// let result = generateValidArray(first, second);

// console.log(result)
// export default {generateValidArray};


// 2

// function generateProductsPricesSum(sumItems, countItems, promo = null) {
//     switch (promo) {
//         case 'ДАРИМ300':
//             (sumItems - 300 > 0) ? sumItems -= 300 : sumItems = 0;
//             if (sumItems == 0) { return `Сумма товаров c учетом промокода "ДАРИМ300": 0` }
//             sumItems = recountPrice(sumItems, countItems);
//             return `Сумма товаров с учетом скидки и промокода 'ДАРИМ300': ${sumItems}`;
//         case 'СКИДКА15':
//             (sumItems >= 20000) ? sumItems = sumItems - (sumItems * 0.15) : sumItems;
//             sumItems = recountPrice(sumItems, countItems);
//             return `Сумма товаров с учетом скидки и промокода 'СКИДКА15': ${sumItems}`;
//         default: 
//             sumItems = recountPrice(sumItems, countItems);
//             return `Такого промокода нет, сумма товаров: ${sumItems}`;
//     }
// }

// function recountPrice(sumItems, countItems) {
//     if (countItems >= 10) { sumItems = sumItems - (sumItems * 0.05) }
//     if (sumItems > 50000) { sumItems = sumItems - ((sumItems - 50000) * 0.2) }
//     return sumItems;
// }

// console.log(generateProductsPricesSum(70000, 12, 'ДАРИМ300'));
// console.log(generateProductsPricesSum(70000, 12, 'СКИДКА15'));
// console.log(generateProductsPricesSum(70000, 12, 'СКИДКА90'));

// console.log(generateProductsPricesSum(300, 2, 'ДАРИМ300'));
// console.log(generateProductsPricesSum(300, 2, 'СКИДКА15'));
// console.log(generateProductsPricesSum(300, 2, 'СКИДКА666'));

// console.log(generateProductsPricesSum(40000, 2, 'ДАРИМ300'));
// console.log(generateProductsPricesSum(40000, 2, 'СКИДКА15'));
// console.log(generateProductsPricesSum(40000, 2, 'СКИДКА666'));

// export default {generateProductsPricesSum};