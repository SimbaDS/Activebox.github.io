$(function () {    // сектор(функция)
  /* Fixed header */
  let header = $("#header"); //переменная хэдер = выбираем idХэдэр по  селектору
  let intro = $("#intro"); //перменная интро = выбираем idИнтро по  селектору
  let introH = intro.innerHeight(); //высота блока интро методом innHe
  let scrollPos = $(window).scrollTop(); // обращаемся к окну, методу scollTop
  let nav = $("#nav"); //выбираем селектор по id nav
  let navToggle = $("#navToggle"); //выбираем селектор по id navToggle

  checkScroll(scrollPos, introH) //вызов этой функции призагрузке страницы

  $(window).on("scroll resize", function () { // окно, на котором отслеживается событие on scroll, resize, функция
    introH = intro.innerHeight(); //высота блока интро методом innHe
    scrollPos = $(this).scrollTop(); //текущая позиция скролла 
    
    checkScroll(scrollPos, introH) //получаем параметры из этой ф-ии(1) позиция скролла и высота блока

  });

  function  checkScroll(scrollPos, introH){ //проверка скролла- и получаем их здесь(2)
    if (scrollPos > introH) {  //если позиция скролла > высоты блока интро,
      header.addClass("fixed");   // то добавляем хэдеру класс фиксед
    } else {                      // иначе
      header.removeClass("fixed");  // удаляем класс фиксед
    }
  }

  /* Smooth scroll */

  $("[data-scroll]").on("click", function (event) { //выборка элемента на на атрибут дата-скролл. на событие клик, функция(параметр- event(событие))
    event.preventDefault(); //отменяем стандартное поведение ссылки при клике

    let elementID = $(this).data("scroll"); //получаем элементID имеено того дата скролла(this), на который нажали.получаем его дата-атрибут("скролл")
    let elementOffset = $(elementID).offset().top; //получаем позицию элементаID. от его верха     
    
    nav.removeClass("show");

    $("html, body").animate({ //скрол элемента до его позиции- вызываем метод animate
      scrollTop: elementOffset - 70  //отверхней позиции до позиции элемента
    }, 700);  
  });


  /* nav toggle */

  nav = $("#nav"); //выбираем селектор по id nav
  navToggle = $("#navToggle"); //выбираем селектор по id navToggle

  navToggle.on("click", function(event) {  //создаём событие на клик, по кнопке c ID navToggle
    event.preventDefault();

    nav.toggleClass("show");  //добавляем навигации класс show
  });


  /* reviews https://kenwheeler.github.io/slick/ */

  let slider = $("#reviewsSlider");

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });

});
