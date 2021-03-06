$('.slider__body').slick({
    infinite: true,
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 600,
    speed: 2500,
    responsive:[
       {
          breakpoint: 1025,
          settings: {
          slidesToShow: 2,
          arrows: false,
          dots: false,
         }
       },
       {
         breakpoint: 769,
          settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false
         }
       }
    ]
});

let categories = document.querySelector('.categories');
let categories__menu_nav = document.querySelector('.categories__nav');

categories.addEventListener('click', () => {
  categories__menu_nav.classList.toggle('active');
});