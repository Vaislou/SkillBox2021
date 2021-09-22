document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const list = document.createElement('ul');
    list.classList.add('list-group', 'list-group-numbered')
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item','list-group-item-action');
    const listItemLink = document.createElement('a');
    listItemLink.classList.add('list__link');
    listItemLink.href = '#'
    listItemLink.target = '_blank';
    const navMenu = document.createElement('nav');
    const navList = document.createElement('ul');
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');

    navMenu.classList.add('mt-3')
    navList.classList.add('pagination', 'justify-content-center');
    navItem.classList.add('page-item');
    navLink.classList.add('page-link');
    navLink.href = '#';

    let counter = 1;

    async function getPostsList() {
        const response = await fetch(`https://gorest.co.in/public-api/posts?page=${counter}`);
        const data = await response.json();
        
        generateList(data);
    }
    getPostsList();

    function generateList(data) {
        list.innerHTML = ''
        data.data.forEach(e => {
            listItemLink.textContent = e.title;
            listItem.append(listItemLink);
            list.append(listItem.cloneNode(true));
        })
        container.append(list);
    }
    
    createNav();
    toNextPage();

    function createNav() {
        navItem.append(navLink);
        navList.append(navItem.cloneNode(true));
        navList.append(navItem.cloneNode(true));
        navList.append(navItem.cloneNode(true));
        navList.append(navItem.cloneNode(true));
        navList.append(navItem.cloneNode(true));
        navMenu.append(navList);
        container.append(navMenu);
        setNavValue();
    }

    function setNavValue() {
        const navLinks = document.querySelectorAll('.page-link');
        const navItems = document.querySelectorAll('.page-item');
        navLinks[0].textContent = 'Previous';
        navItems[0].classList.add('prev');
        if (counter === 1) {
            navItems[0].classList.add('disabled');
        } else {
            navItems[0].classList.remove('disabled');
        }
        navLinks[1].textContent = counter;
        navLinks[2].textContent = counter + 1;
        navLinks[3].textContent = counter + 2;
        navLinks[navLinks.length - 1].textContent = 'Next';
        navItems[navItems.length - 1].classList.add('next');
        

    }

    function toNextPage() {
        const nextLink = document.querySelector('.next');
        nextLink.addEventListener('click', () => {
            counter++;
            getPostsList()
            console.log(counter)
        })
    }
    
})