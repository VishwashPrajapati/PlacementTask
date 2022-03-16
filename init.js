$(".main_slider").slick({
  dots: true,
  responsive: [
    {
      // Settings for below 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      // Settings for below 600px
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      // Settings for below 480px
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

revealAns = (e) => {
  document.getElementById(e).classList.add("show");
};
