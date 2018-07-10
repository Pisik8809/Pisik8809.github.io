$('.sl__main').slick({
  autoplay: false,
  autoplaySpeed: 5000,
  centerMode: false, //делает отступ на слайде по краям
  centerPadding: '20px',
  dots: false,
  arrows: true,
  fade: false, //переход с затемнением
  infinite: true, //бесконечная прокрутка
  edgeFriction: 0.2, //оттяжка при протяжении последнего слайда
  pauseOnHover: true,
  pauseOnDotsHover: true,
  speed: 600, //speed of switch animation
  cssEase: 'ease-out',
  lazyLoad: 'ondemand', //Accepts 'ondemand' or 'progressive' for lazy load technique.
  vertical: false, //Vertical slide direction
  rows: 1, //Setting this to more than 1 initializes grid mode.
  slidesPerRow: 1, //if row > 1 can be few slides per row
  slidesToShow: 1, //# of slides to show at a time
  slidesToScroll: 1, //# of slides to scroll at a time
  //asNavFor: '.sl2',
  initialSlide: 0, //start from 1-st slide 
  responsive: [
    {
      breakpoint: 480,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

/*$('.sl2').slick({
  autoplay: false,
  centerMode: false, //делает отступ на слайде по краям
  centerPadding: '20px',
  dots: true,
  arrows: false,
  fade: false, //переход с затемнением
  infinite: true, //бесконечная прокрутка
  edgeFriction: 0.2, //оттяжка при протяжении последнего слайда
  pauseOnHover: false,
  pauseOnDotsHover: false,
  speed: 600, //speed of switch animation
  cssEase: 'ease-out',
  lazyLoad: 'progressive', //Accepts 'ondemand' or 'progressive' for lazy load technique.
  vertical: false, //Vertical slide direction
  rows: 1, //Setting this to more than 1 initializes grid mode.
  slidesPerRow: 1, //if row > 1 can be few slides per row
  slidesToShow: 7, //# of slides to show at a time
  slidesToScroll: 1, //# of slides to scroll at a time
  asNavFor: '.sl', //connect with onother slider
  focusOnSelect: true
});*/

$('.sl__bloquotes').slick({
  autoplay: false,
  autoplaySpeed: 5000,
  centerMode: false, //делает отступ на слайде по краям
  centerPadding: '20px',
  dots: true,
  arrows: true,
  fade: false, //переход с затемнением
  infinite: true, //бесконечная прокрутка
  edgeFriction: 0.2, //оттяжка при протяжении последнего слайда
  pauseOnHover: true,
  pauseOnDotsHover: true,
  speed: 600, //speed of switch animation
  cssEase: 'ease-out',
  lazyLoad: 'ondemand', //Accepts 'ondemand' or 'progressive' for lazy load technique.
  vertical: false, //Vertical slide direction
  rows: 1, //Setting this to more than 1 initializes grid mode.
  slidesPerRow: 1, //if row > 1 can be few slides per row
  slidesToShow: 1, //# of slides to show at a time
  slidesToScroll: 1, //# of slides to scroll at a time
  //asNavFor: '.sl2',
  initialSlide: 0, //start from 1-st slide 
  responsive: [
    {
      breakpoint: 480,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

/*$('.sl2').slick({
  autoplay: false,
  centerMode: true, //делает отступ на слайде по краям
  centerPadding: '20px',
  dots: false,
  arrows: false,
  fade: false, //переход с затемнением
  infinite: true, //бесконечная прокрутка
  edgeFriction: 0.2, //оттяжка при протяжении последнего слайда
  pauseOnHover: false,
  pauseOnDotsHover: false,
  speed: 600, //speed of switch animation
  cssEase: 'ease-out',
  lazyLoad: 'progressive', //Accepts 'ondemand' or 'progressive' for lazy load technique.
  vertical: false, //Vertical slide direction
  rows: 1, //Setting this to more than 1 initializes grid mode.
  slidesPerRow: 1, //if row > 1 can be few slides per row
  slidesToShow: 7, //# of slides to show at a time
  slidesToScroll: 1, //# of slides to scroll at a time
  asNavFor: '.sl__bloquotes', //connect with another slider
  focusOnSelect: true
});*/
