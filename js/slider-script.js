// ------------------------ SLICK SLAIDER (Инициализация, отключение) -------------------------

// ----------- Класс контейнера, в котором располагаются элементы для слайдера -------------
let blockClassToSlide = '.features__columns';
let blockClassToSlide2 = '.from-blog__columns';

// ------- Разрешение экрана, при котором появляется/пропадает слайдер ---------
let slideOnWidth = 1024;


// ----- Инициализация слайдера номер 1 -----
let initSlider = () => {
    $(blockClassToSlide).slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        initialSlide: 0,
    });
}

// ----- Уничтожение слайдера номер 1 -----
let destroySlider = () => {
    $(blockClassToSlide).slick('unslick');
}

// ----- Инициализация слайдера номер 2 -----
let initSlider2 = () => {
    $(blockClassToSlide2).slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        initialSlide: 0,
    });
}

// ----- Уничтожение слайдера номер 2 -----
let destroySlider2 = () => {
    $(blockClassToSlide2).slick('unslick');
}


// ------- slickStatus - флаг, инициализирован ли слайдер. 0 - нет, 1 - да --------
let slickStatus = ($(window).width() <= slideOnWidth) ? 1 : 0;
if (slickStatus) {
    initSlider();
    initSlider2();
    $(blockClassToSlide).slick('setPosition');
    $(blockClassToSlide2).slick('setPosition');
}


// ------- В зависимости от разрешения инициализируем слайдер или выключаем --------
window.onresize = () => {
    let curWidth = $(window).width();
    if (curWidth <= slideOnWidth) {
        if (slickStatus == 0) {
            initSlider();
            initSlider2();
            slickStatus = 1;
        }
    }
    else {
        if (slickStatus == 1) {
            destroySlider();
            destroySlider2();
            slickStatus = 0;
        }
    }
}