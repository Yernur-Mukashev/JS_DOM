// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const linkEl = document.querySelector('#super_link');
console.log(linkEl);
const linkElById = document.getElementById('super_link');
console.log(linkElById);

//2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const cardLinks = document.querySelectorAll('.card-link');
cardLinks.forEach((element) => {
	element.textContent = 'ссылка';
});

//3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const cardBody = document.querySelectorAll('.card-body .card-link');
console.log(cardBody);

//4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const dataNumber = document.querySelector('[data-number="50"]');
console.log(dataNumber);

//5. Выведите содержимое тега title в консоль.
console.log(document.title);

//6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const cardTitleEl = document.querySelector('.card-title').parentNode;
console.log(cardTitleEl);

//7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const cardEl = document.querySelector('.card');
const parEl = document.createElement('p');
parEl.textContent = 'Привет';
cardEl.prepend(parEl);

//8. Удалите тег h6 на странице.
const elementDel = document.querySelector('h6');
elementDel.remove();