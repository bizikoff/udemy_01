'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';

box.style.cssText = 'background-color: blue; width: 340px';

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item => {
  item.style.backgroundColor = 'purple';
});

const div = document.createElement('div');

div.classList.add('black');

// wrapper.append(div); // вставляет элемент в конец родителя
wrapper.prepend(div); // вставляет элемент в конец родителя

// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

// ________________________

div.innerHTML = '<h3>Hello world</h3>';

// div.textContent = 'Hello';   //only text

div.insertAdjacentHTML('beforebegin', '<h2>Zdraste</h2>');

