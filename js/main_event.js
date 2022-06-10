'use strict';

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//   alert('click');
// };
// btn.onclick = function () {    // теряем функционал первого клика
//   alert('Second click');
// };

// btn.addEventListener('click', () => {
//   alert('click');
// });

// btn.addEventListener('click', () => {   // функционал первого клика сохраняется (и т д)
//   alert('second click');
// });

//-------------- add and remove events listener---------------------
// let i = 0;
// const logElement = (e) => {  // функция выносится в переменную для повторного использования для передачи как callback
//   console.log(e.target);
//   i++;
//   if (i == 1) {
//     btn.removeEventListener('click', logElement);
//   }
// };

// btn.addEventListener('click', logElement);

/* ------всплытие событий -> обработчик событий сначала отрабатывает на самом вложенном элементе, затем выше по
иерархии и т д  */


const logElement = (e) => {
  console.log(e.target);
  console.log(e.type);
};

btn.addEventListener('click', logElement, {once: true}); // once: true - опция eventlistener
overlay.addEventListener('click', logElement);

// prevent default

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
  event.preventDefault();

  console.log(event.target);
}); 