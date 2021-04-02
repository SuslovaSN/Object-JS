'use strict';

const movieDB = {
    movies: [
        "Паразиты",
        "Лига справедливости",
        "Интерстеллар",
        "Одержимость",
        "Ходячие мертвецы"
    ]
};

const movieList = document.querySelector(".interactive__list"),
    addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".add__input");

console.log(movieList);
console.log(addForm);
console.log(addInput);

movieDB.movies.sort();

function addFilm (){
    addForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const newFilm = addInput.value;
    
        if (newFilm) {
            movieDB.movies.push(newFilm);
            movieDB.movies.sort();
            createMovieList(movieDB.movies, movieList);
        }
        addForm.reset();
    }
    );
}

addFilm ();

function createMovieList(films, parent) {
    parent.innerHTML="";

    films.forEach((film,i) => {
        parent.innerHTML += `                        
            <li class="interactive__item">${i+1} ${film}
            </li>`
    });
}

createMovieList(movieDB.movies, movieList);

//ДЗ №3: переопределение consol.log
let oldLog = window.console.log; /*запоминаем старый функционал*/

window.console.log = function () { /*переопределяем новую функцию*/
        Array.prototype.unshift.call(arguments, "Сообщение в консоли:"); /* преобразуем псевдомассив в массив в контексте аргументов функции, добавляем сообщение в начало массива  */
        oldLog.apply(this, arguments);
};

console.log("hi");

//ДЗ №5: добавление блоков через консоль

// Просто цикл:
// for (let i = 0; i < 5; i++){
//     let li = document.createElement("li");
//     li.classList.add("interactive__item");
//     movieList.append(li);

// };

// Функция без условия по количеству li:

// function makeBlock(parent, tag, count) {
//     for (let i = 0; i < count; i++){
//         let child = document.createElement(tag);
//         child.classList.add("interactive__item");
//         parent.append(child);
//     }
// };

// makeBlock(movieList, "li", 8);


// Функция с условием по количеству li:

// function makeBlock(parent, tag, count) {
//     for (let i = 0; i < count; i++){
//         if (count > 5) {
//             alert("Слишком много элементов");
//         }
//         else {
//             let child = document.createElement(tag);
//             child.classList.add("interactive__item");
//             parent.append(child);
//         }
//     }
// };

// makeBlock(movieList, "li", 4);

// Каррирование:

function makeBlock(parent){
    return function(tag){
        return function(count){
                for (let i = 0; i < count; i++){
        if (count > 5) {
            alert("Слишком много элементов");
        }
        else {
            let child = document.createElement(tag);
            child.classList.add("interactive__item");
            parent.append(child);
        }
    }
    }
}
};

makeBlock(movieList)("li")(3);