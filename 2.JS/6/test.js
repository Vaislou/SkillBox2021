// function createRandomDropList() {
//     let newSelect = document.createElement('select');
//     let newOption;
//     let arrayLength = Math.round(Math.random() * 10) + 2;
//     let newArray = [];

//     for (let i = 0; i < arrayLength; i++) {
//         newArray.push(Math.round(Math.random() * 500) + 100);
//     }

//     newArray.map(e => {
//         newOption = document.createElement('option');
//         newOption.innerHTML = e;
//         newSelect.append(newOption);
//     });

//     document.body.append(newSelect)
// }

// createRandomDropList()