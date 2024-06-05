// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
document.addEventListener("DOMContentLoaded", () => {
	console.log("все теги прогрузились");
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.addEventListener("load", function (e) {
	console.log("страница загрузилась");
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

document.addEventListener("click", function (e) {
	const target = e.target;
	const hasClass = target.classList.contains("super_element");
	const tagName = target.tagName.toLowerCase();
	console.log(
		`Класс "super_element" ${
			hasClass ? "присутствует" : "отсутствует"
		} в элементе ${tagName}`
	);
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

const textareaEl = document.querySelector("textarea");
textareaEl.addEventListener("mouseenter", () => {
	console.log("Вы навели на textarea");
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ulEl = document.querySelector("ul");
ulEl.addEventListener("click", function (e) {
	if (e.target.tagName.toLowerCase() === "button") {
		console.log(e.target.textContent);
	}
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// Ответ: Потому что он привязан к конкретному элементу, из за этого он выполняется первым, а потом выполняется клик для всего документа.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const liEl = document.querySelectorAll("li");
liEl.forEach((li, i) => {
	if (i % 2 !== 0) {
		li.style.background = "blue";
	}
});
