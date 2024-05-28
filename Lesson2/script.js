const blockEl = document.querySelector("#block");
console.log(blockEl);

const paragraphEl = document.querySelector("p.www");
console.log(paragraphEl);

const paragraphElClon = document.querySelectorAll(".www");
console.log(paragraphElClon);

// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/
// Дан тег <img class="photo" src="" alt="">
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета

const linkEL = document.querySelector(".link");
linkEL.href = "https://developer.mozilla.org/ru/";
linkEL.textContent = "link text js";
console.dir(linkEL);

const imgEl = document.querySelector(".photo");
imgEl.src =
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcAOQOXpz3-LzbrnJJkZnn5jejcz7HPJyAkw&s";

const divEl = document.querySelector(".content");
const parEl = document.createElement("p");
parEl.textContent = "Новый текстовый элемент";
divEl.appendChild(parEl);
parEl.remove();

// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

const buttonEl = document.querySelector("button");
divEl.appendChild(buttonEl);

let count = 0;
buttonEl.onclick = function () {
	count++;
	console.log(`Нажато ${count} раз`);
};

// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const newButtonEl = document.createElement("button");
newButtonEl.textContent = "Отправить";
divEl.appendChild(newButtonEl);
newButtonEl.onclick = function () {
	newButtonEl.textContent = "Текст отправлен";
};
console.dir(newButtonEl);


