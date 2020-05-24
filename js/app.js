

$('#slider-js').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: false
});
$(".js-slider-prev").on("click", function() {
        $('#slider-js').slick("slickPrev");
    });

    $(".js-slider-next").on("click", function() {
        $('#slider-js').slick("slickNext");
    });