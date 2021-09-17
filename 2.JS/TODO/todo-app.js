(function() {
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button
        };
    }

    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem(name) {
        let item = document.createElement('li');
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        return {
            item,
            doneButton,
            deleteButton,
        };
    }

    function createTodoApp(container, title = 'Список дел', array = {name: 'Тест', done: false}) {

        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();
        let namePage = window.location.pathname.split('/').pop();

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        todoItemForm.button.setAttribute('disabled', 'true');

        todoItemForm.input.addEventListener('input', function() {
            if (todoItemForm.input.value.length > 0) {
                todoItemForm.button.removeAttribute('disabled');
            } else {
                todoItemForm.button.setAttribute('disabled', 'true');
            }
        });

        function addItemButtonsActivities(itemName) {
            itemName.doneButton.addEventListener('click', function() {
                itemName.item.classList.toggle('list-group-item-success');
                setLocalStorage();
            });

            itemName.deleteButton.addEventListener('click', function() {
                if (confirm('Вы уверены ?')) {
                    itemName.item.remove();
                    setLocalStorage();
                }
            });
        };

        todoItemForm.form.addEventListener('submit', function(e) {
            e.preventDefault();

            if (!todoItemForm.input.value) {
                return;
            }

            let todoItem = createTodoItem(todoItemForm.input.value);

            addItemButtonsActivities(todoItem);

            todoList.append(todoItem.item);

            todoItemForm.input.value = '';
            todoItemForm.button.setAttribute('disabled', 'true');

            setLocalStorage();
        });

        if (array.done) {
            let todoItemStart = createTodoItem(array.name);

            addItemButtonsActivities(todoItemStart);

            todoList.append(todoItemStart.item);

            // setLocalStorage();
        }

        

        // LocalStorage
        // localStorage.clear()

        function setLocalStorage() {
            let pageContent = JSON.stringify(todoList.innerHTML);
            localStorage.setItem(namePage, pageContent)
        }

        todoList.innerHTML = JSON.parse(localStorage.getItem(namePage));

        let successButtons = document.querySelectorAll('.btn-success'),
            dangerButtons = document.querySelectorAll('.btn-danger'),
            listItems = document.querySelectorAll('.list-group-item');

        successButtons.forEach(function(elem, index) {
            elem.addEventListener('click', function() {
                listItems[index].classList.toggle('list-group-item-success');
                setLocalStorage();
            });
        });
        
        dangerButtons.forEach(function(elem, index) {
            elem.addEventListener('click', function() {
                if (confirm('Вы уверены ?')) {
                    listItems[index].remove();
                    setLocalStorage();
                }
            })
        })
    }


    window.createTodoApp = createTodoApp;

})();