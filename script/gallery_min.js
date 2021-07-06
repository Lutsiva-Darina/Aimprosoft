var $slickEl = $('.center');
$slickEl.slick({
  centerMode: true,
  centerPadding: '30px',
  slidesToShow: 4,
  focusOnSelect: true,
  dots: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});