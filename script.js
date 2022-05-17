// Задания
// Код для заданий лежит в папке project.


// Найти все параграфы на странице и установить цвет фона #ff0000


// Найти элемент с id="optionsList". Вывести в консоль. Найти родительский элемент и вывести в консоль. Найти дочерние ноды, если они есть, и вывести в консоль названия и тип нод.


// Установите в качестве контента элемента с классом testParagraph следующий параграф 
// This is a paragraph


// Получить элементы 

// , вложенные в элемент с классом main-header и вывеcти их в консоль. Каждому из элементов присвоить новый класс nav-item.


// Найти все элементы с классом section-title. Удалить этот класс у элементов.


const allParagraphs = document.querySelectorAll('p');
    allParagraphs.forEach(element => {
        element.classList.add("change");
    });


const getElementById = document.getElementById("optionsList"); 
console.log(getElementById);  

const getParent = document.getElementById('optionsList').parentNode;
console.log(getParent); 

const getChildren = document.getElementById('optionsList').children;
console.log(getChildren);

const elemByClass = document.querySelector("#testParagraph");
elemByClass.innerHTML = '<p>This is a paragraph</p>'; 

const elem = document.querySelector('.main-header');
const elements = elem.querySelectorAll('*');
console.log(elements);

 elements.forEach(element =>{
    element.classList.add("nav-item");
 });

const removeClass = document.querySelectorAll('.section-title');

const getElementByClassNme = document.getElementsByClassName('section-title');
console.log(getElementByClassNme); //Найти все элементы с классом section-title. Удалить этот класс у элементов. ( ТАКОГО КЛАССА ИЗНАЧАЛЬНО НЕТ. УДАЛЯТЬ НЕЧЕГО)










