$(document).ready(function () {
  /* Team Carousel */
  $(".loop").owlCarousel({
    center: true,
    loop: true,
    margin: 50,
    // autoplay: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  /* Case Carousel */
  $(".case-carousel").owlCarousel({
    center: true,
    loop: true,
    margin: 50,
    nav: true,
    dots: false,
    responsiveClass: true,
    navText: [
      "<i class='fas fa-long-arrow-alt-left'></i>",
      "<i class='fas fa-long-arrow-alt-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });

  $(".technology-carousel").owlCarousel({
    loop: true,
    margin: 50,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        autoplay: true,
        autoplayTimeout: 2000,
      },
      600: {
        items: 2,
        autoplay: true,
        autoplayTimeout: 2000,
      },
      1000: {
        items: 4,
      },
    },
  });

  /* Blog Carousel */
  $(".blog-carousel").owlCarousel({
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});
