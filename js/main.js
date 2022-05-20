
let popup = document.querySelector('.popup'); // Само окно
let bodyFixed = document.querySelector('body');
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup');
let	submitPupBtn = document.querySelector('.closebtn-popup'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        // popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
        bodyFixed.classList.add('fixed');
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popup.classList.remove('active'); // И с окна
    bodyFixed.classList.remove('fixed');
});


submitPupBtn.addEventListener('click',() => {
	popup.classList.remove('active');
	bodyFixed.classList.remove('fixed');
});

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
    return false;
});

$('.burger-btn').click(function(event) {
    $('.burger-btn, .menu-list__adapt').toggleClass('active');
    $('body').toggleClass('lock');

    $(".menu-list_item").click(function(){
        $(".burger-btn, .menu-list__adapt").removeClass("active");
        $("body").removeClass("lock");
    });
});

