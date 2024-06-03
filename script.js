setTimeout(function(){
	document.getElementById('icon-container').style.display = 'flex';
}, 50);


const modalTrigger = document.getElementsByClassName("triger")[0];

// получаем ширину отображенного содержимого и толщину ползунка прокрутки
const windowInnerWidth = document.documentElement.clientWidth;
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth);

// привязываем необходимые элементы
const bodyElementHTML = document.getElementsByTagName("body")[0];
const modalBackground = document.getElementsByClassName("modalBackground")[0];
const modalClose = document.getElementsByClassName("modalClose")[0];
const modalActive = document.getElementsByClassName("modalActive")[0];
function bodyMargin() {
    bodyElementHTML.style.marginRight = "-" + scrollbarWidth + "px";
}

// при длинной странице - корректируем сразу
bodyMargin();
modalTrigger.addEventListener("click", function () {
    // делаем модальное окно видимым
    modalBackground.style.display = "block";
    // если размер экрана больше 1366 пикселей (т.е. на мониторе может появиться ползунок)
    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }

    // позиционируем наше окно по середине, где 175 - половина ширины модального окна
    modalActive.style.right = "39%";
});
modalClose.addEventListener("click", function () {
    modalBackground.style.display = "none";
    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }
});

// закрытие модального окна на зону вне окна, т.е. на фон
modalBackground.addEventListener("click", function (event) {
    if (event.target === modalBackground) {
        modalBackground.style.display = "none";
        if (windowInnerWidth >= 1366) {
            bodyMargin();
        }
    }
});


const modalTrigger2 = document.getElementsByClassName("triger2")[0];

// привязываем необходимые элементы
const bodyElementHTML2 = document.getElementsByTagName("body")[0];
const modalBackground2 = document.getElementsByClassName("modalBackground2")[0];
const modalClose2 = document.getElementsByClassName("modalClose2")[0];
const modalActive2 = document.getElementsByClassName("modalActive2")[0];
function bodyMargin() {
    bodyElementHTML.style.marginRight = "-" + scrollbarWidth + "px";
}

// при длинной странице - корректируем сразу
bodyMargin();
modalTrigger2.addEventListener("click", function () {
    // делаем модальное окно видимым
    modalBackground2.style.display = "block";
    modalBackground.style.display = 'none';
    // если размер экрана больше 1366 пикселей (т.е. на мониторе может появиться ползунок)
    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }

    // позиционируем наше окно по середине, где 175 - половина ширины модального окна
    modalActive2.style.right = '39%';
});
modalClose2.addEventListener("click", function () {
    modalBackground2.style.display = "none";
    modalBackground.style.display = 'none';
    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }
});

// закрытие модального окна на зону вне окна, т.е. на фон
modalBackground2.addEventListener("click", function (event) {
    if (event.target === modalBackground2) { 
        modalBackground2.style.display = "none";
        if (windowInnerWidth >= 1366) {
            bodyMargin();
        }
    }
});