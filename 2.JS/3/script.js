//1

// function checkPassword(password) {
//     if (password.length >= 4 && (password.includes('-') || password.includes('_'))) {
//         console.log(`Пароль надежный`);
//     } else {
//         console.log(`Пароль недостаточно надежный`);
//     }
// }

// checkPassword('1234-');
// checkPassword('4321_');
// checkPassword('qaz-xsw');
// checkPassword('_zxd');

// checkPassword('_-a')
// checkPassword('qaz')
// checkPassword('_-3')
// checkPassword('123456789');


//2

// function transformUserInfo(name, surname) {
//     let changedName = name.toLowerCase().split('');
//     changedName[0] = changedName[0].toUpperCase();
//     changedName = changedName.join('');

//     let changedSurname = surname.toLowerCase().split('');
//     changedSurname[0] = changedSurname[0].toUpperCase();
//     changedSurname = changedSurname.join('');

//     console.log(`Имя пользователя: ${changedName}`);
//     console.log(`Фамилия пользователя: ${changedSurname}`);

//     (changedName === name) ? console.log('Имя осталось без изменений') : console.log('Имя было преобразовано');
//     (changedSurname === surname) ? console.log('Фамилия осталась без изменений') : console.log('Фамилия была преобразована');
// }

// transformUserInfo('Иван', 'иванОв');
// transformUserInfo('сергей', 'сергеев');
// transformUserInfo('ПЕТР', 'ПЕТРОВ');
// transformUserInfo('васиЛиЙ', 'Васильев');
// transformUserInfo('Александр', 'Александрович');