// ----------------------- Анимация главного меню (появление бургера и появление/изчезновение) ------------------------------

$(document).ready(function() {
    // --- Появление/изчезновение меню ---
    $(".menu__burger-icon-link").click(function() {
      $('.header__nav-block').slideToggle(300);
    });

    
});

// ----- Отслеживание работы меню в зависимости от разрешения экрана -----

let fixAdaptiveMenu = () => {
    if ($(window).width() > 480) {
        $('.header__nav-block').css({'display':'block'});
    }
    else {
        $('.header__nav-block').css({'display':'none'});
    }
}

window.addEventListener('resize', fixAdaptiveMenu);

