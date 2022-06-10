/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против..."
    ]
  };

  const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]');


  addForm.addEventListener('submit', (event) => {           // работа с формой
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {                                          // test on clear string

      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }

      if (favorite) {
        console.log('Добавляем любимый фильм');
      }

      movieDB.movies.push(newFilm);                         // push data to array
      sortArr(movieDB.movies);                              // sort array

      createMovieList(movieDB.movies, movieList);           // function create new list
    }

    event.target.reset();                                   // clear form


  });
  const blockAdv = (arr) => {                               // function for delete adv
    arr.forEach(item => {
      item.remove();
    });
  };

  const makeChanges = (replaceGenre, bgSection) => {       // may replace arguments
    genre.textContent = replaceGenre;

    bgSection.style.backgroundImage = 'url("img/bg.jpg")';
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  function createMovieList(films, parent) {
    parent.innerHTML = '';                                        // clearing html in elemnt

    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML +=                                        // create html structure
        `<li class="promo__interactive-item"> ${i + 1} ${film}
      <div class="delete"></div>
     </li>`;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {    // перебераем массив кнопок
      btn.addEventListener('click', () => {                       // добавляем событие
        btn.parentElement.remove();                               // удаляем родительский элемент
        movieDB.movies.splice(i, 1);                              // удаляем элемент из массива
        createMovieList(films, parent);                           // use recursion for sorting list by name and number
      });
    });
  }

  blockAdv(adv);
  makeChanges('драма', poster);
  createMovieList(movieDB.movies, movieList);

});