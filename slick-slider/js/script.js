$(document).ready(function(){
    $('.slider').slick({
        arrows: true,//Стрелки
        dots: true,//Точки
        adaptiveHeight: true,//Автоматическая высота слайда
        slidesToShow: 3,//Кол-во слайдов для показа
        slidesToScroll: 1,//Кол-во прокручиваемых слайдов за раз
        speed: 300,//Скорость прокрутки в миллисек
        easing: 'ease',//Способ прокрутки
        infinite: true,//Бесконечность слайдера
        initialSlide: 3,//Номер слайда при старте
        autoplay: false,//Автопрокрутка
        autoplaySpeed: 1500,//Таймер автопрокрутки
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,//Захват мышкой на ПК
        swipe: true,//Захват слайда на мобилке
        touchThreshold: 10,//Момент срабатывания слайда, частей
        touchMove: true, //Все возможности touch-скрина
        waitForAnimate: true,//Пауза при прокрутке
        centerMode: true,//Центральный слайдер
        variableWidth: false,//Ширина слайда по его содержимому
        rows: 1,//Кол-во рядов
        slidesPerRow: 1,//Кол-во слайдов в ряду
        vertical: false,//Вертикальный слайдер
        verticalSwiping: false,//Свайпинг по вертикали
        asNavFor: '.sliderbig',//Привязать прокрутку к другому слайдеру
        responsive: [//Поменять свой-ва при нужной ширине
            {
                breakpoints: 768,
                setting: {
                    slidesToShow: 2
                }
            },
            {
                breakpoints: 480,
                setting: {
                    slidesToShow: 1
                }
            }
        ],
        mobileFirst: false,
        /*
        appendArrows: '.content',//Переместить стрелки внутрь нужного дива
        appendDots: '.content'//Переместить точки внутрь нужного дива
        */
    });
    $('.sliderbig').slick({
        arrows: false,
        fade: true,//Плавная смена слайдов
        asNavFor: '.slider'//Привязать прокрутку к другому слайдеру
    });
});
