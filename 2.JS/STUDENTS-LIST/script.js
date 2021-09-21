document.addEventListener('DOMContentLoaded', () => {

    let tableBody = document.querySelector('.table__body');
    tableBody.innerHTML = localStorage.getItem('table');

    //Open Form
    let addFormBtn = document.querySelector('.btn__add');
    let addForm = document.querySelector('.add__form');

    addFormBtn.addEventListener('click', () => {
        document.querySelector('.add__form-wrapper').classList.toggle('add__form-wrapper_active')
        addForm.classList.toggle('add__form_active');
    });


    //Date

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    if (day < 10) {
        day = `0${day}`;
    }

    if (month < 10) {
        month = `0${month}`;
    }

    today = `${year}-${month}-${day}`;

    document.getElementById('inputBirthday').setAttribute('max', today);
    document.getElementById('inputStartYear').setAttribute('max', year);

    function calculateAge(dateStr) {
        let birthday = new Date(dateStr);
        let age = year - birthday.getFullYear();
        let birthdayMonth = month - birthday.getMonth() + 1;
        if (birthdayMonth < 0 || (birthdayMonth === 0 && day < birthday.getDate())) {
            age--;
        }
        return age;
    }

    function calculateCourse(yearStr) {
        let courseYear = year - +yearStr;
        if (month >= 9) {
            courseYear++;
        }
        if (courseYear > 4) {
            return `end education`;
        } else {
            return courseYear;
        }
    }

    //Add student to table
    let student = {
        firstName: '',
        lastName: '',
        middleName: '',
        birthday: '',
        beginYear: '',
        faculty: ''
    };

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        student.firstName = document.getElementById('inputFirstName').value.trim();
        student.lastName = document.getElementById('inputLastName').value.trim();
        student.middleName = document.getElementById('inputMiddleName').value.trim();
        student.birthday = `${document.getElementById('inputBirthday').value.trim()} (${calculateAge(document.getElementById('inputBirthday').value.trim())})`;
        student.beginYear = `${document.getElementById('inputStartYear').value.trim()} - ${+document.getElementById('inputStartYear').value.trim() + 4} (${calculateCourse(document.getElementById('inputStartYear').value.trim())})`;
        student.faculty = document.getElementById('inputFaculty').value.trim();
        
        let tableRow = document.createElement('tr');
        tableRow.classList.add('table__row');
        let tableBody = document.querySelector('.table__body') 

        for (let i = 0; i < Object.keys(student).length; i++) {   
            let tableRowItem = document.createElement('td');
            tableRowItem.textContent = Object.values(student)[i];
            tableRow.append(tableRowItem);
        }

        tableBody.append(tableRow);  

        addForm.querySelectorAll('input').forEach(e => e.value = '');

        localStorage.setItem('table', document.querySelector('.table__body').innerHTML);
    });

    //Filter by TH

    let table = document.querySelector('.table');
    let tableHead = table.querySelector('thead');
    let arrTableHeadItems = tableHead.querySelectorAll('th');
    arrTableHeadItems.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            let arrayTableBodyItems = Array.prototype.slice.call(table.querySelectorAll('.table__row'), 0);
            tableBody.innerHTML = localStorage.getItem('table');
            arrayTableBodyItems.sort((a, b) => {
                let first = a.childNodes[index].innerHTML;
                let second = b.childNodes[index].innerHTML;
                if (first > second) {
                    return 1;
                }
                if (second > first) {
                    return -1;
                }
                return 0;
            });
            tableBody.innerHTML = '';
            for (item of arrayTableBodyItems) {
                tableBody.append(item);
            }
        });
    });

    //Filter by filter-form

    const filterForm = document.querySelector('.filter__form');
    const filterInputs = filterForm.querySelectorAll('.form-control');

    changeTableByInputFilter(0);
    changeTableByInputFilter(1);
    changeTableByInputFilter(2);
    changeTableByInputFilter(3);

    function changeTableByInputFilter(index) {
        filterInputs[index].addEventListener('input', () => {
            tableBody.innerHTML = localStorage.getItem('table');
            let arrayTableBodyItems = Array.prototype.slice.call(table.querySelectorAll('.table__row'), 0);
            console.log(arrayTableBodyItems)
            let result = arrayTableBodyItems.filter(item => {
                if (index === 0) {
                    return item.childNodes[0].innerHTML.includes(filterInputs[index].value) ||
                        item.childNodes[1].innerHTML.includes(filterInputs[index].value) || 
                        item.childNodes[2].innerHTML.includes(filterInputs[index].value);
                } else if (index === 1) {
                    return item.childNodes[5].innerHTML.includes(filterInputs[index].value);
                } else if (index === 2) {
                    return item.childNodes[4].innerHTML.startsWith(filterInputs[index].value);
                } else if (index === 3) {
                    return item.childNodes[4].innerHTML.startsWith(filterInputs[index].value, 7);
                }
            })
            tableBody.innerHTML = '';
            for(item of result) {
                tableBody.append(item);
            }  
        })
    }
});