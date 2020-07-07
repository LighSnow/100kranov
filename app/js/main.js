$(document).ready(function () {
  console.log("ready!");

  var btn = $("#button");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0,
      },
      "300"
    );
  });



  if ($(".slider__inner").length > 0) {
    $(".slider__inner").slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
    });
  }

  if ($(".image-carousel-wrapper").length > 0) {
    $(".image-carousel-wrapper").slick({
      slidesToShow: 1,
      infinite: true,
      dots: true
    });
  }

  if ($(".slider-color").length > 0) {
    $(".slider-color").slick({
      dots: true,
      arrows: true,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      responsive: [{
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 851,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 601,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 356,
          settings: {
            slidesToShow: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  }

  // if ($(".slider-card").length > 0) {
  //   $(".slider-card").slick({
  //     slidesToShow: 5,
  //     dots: true,
  //     infinite: false,
  //     responsive: [{
  //         breakpoint: 1250,
  //         settings: {
  //           slidesToShow: 4,
  //         },
  //       },
  //       {
  //         breakpoint: 1000,
  //         settings: {
  //           slidesToShow: 3,
  //           dots: false,
  //         },
  //       },
  //       {
  //         breakpoint: 601,
  //         settings: {
  //           slidesToShow: 2,
  //           dots: false,
  //         },
  //       },
  //       {
  //         breakpoint: 356,
  //         settings: {
  //           slidesToShow: 1,
  //           dots: false,
  //         },
  //       },
  //     ],
  //   });
  //   // setTimeout(() => {
  //   //   $('.slider-card').slick(refresh);
  //   // }, 2000);
  // }
  $('.slider-card').imagesLoaded(function () {
    if ($(".slider-card").length > 0) {
      $(".slider-card").slick({
        slidesToShow: 5,
        dots: true,
        infinite: false,
        responsive: [{
            breakpoint: 1250,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              dots: false,
            },
          },
          {
            breakpoint: 601,
            settings: {
              slidesToShow: 2,
              dots: false,
            },
          },
          {
            breakpoint: 356,
            settings: {
              slidesToShow: 1,
              dots: false,
            },
          },
        ],
      });
      // setTimeout(() => {
      //   $('.slider-card').slick(refresh);
      // }, 2000);
    }
  });

  if ($(".slider-for__inner").length > 0) {
    $(".slider-for__inner").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      infinite: true,
      asNavFor: ".slider-nav__inner",
    });
  }

  if ($(".slider-nav__inner").length > 0) {
    $(".slider-nav__inner").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      focusOnSelect: true,
      vertical: true,
      infinite: true,
      asNavFor: ".slider-for__inner",
      responsive: [{
        breakpoint: 560,
        settings: {
          slidesToShow: 3,
        },
      }, ],
    });
  }

  $("button").click(function (e) {
    var button_classes;
    var counter = $(this).closest(".table__row-number").find(".counter");
    var value = +counter.val();
    button_classes = $(e.currentTarget).prop("class");
    if (button_classes.indexOf("up_count") !== -1) {
      value = value + 1;
    } else {
      value = value - 1;
    }
    value = value < 0 ? 0 : value;
    counter.val(value);
  });

  function watchForHover() {
    var hasHoverClass = false;
    var container = document.body;
    var lastTouchTime = 0;

    function enableHover() {
      // filter emulated events coming from touch events
      if (new Date() - lastTouchTime < 500) return;
      if (hasHoverClass) return;

      container.className += " hasHover";
      hasHoverClass = true;
    }

    function disableHover() {
      if (!hasHoverClass) return;

      container.className = container.className.replace(" hasHover", "");
      hasHoverClass = false;
    }

    function updateLastTouchTime() {
      lastTouchTime = new Date();
    }

    document.addEventListener("touchstart", updateLastTouchTime, true);
    document.addEventListener("touchstart", disableHover, true);
    document.addEventListener("mousemove", enableHover, true);

    enableHover();
  }

  watchForHover();

  // let hover = document.querySelector(".submenu")
  // hover.classList.add("hover");

  // if (window.innerWidth > 850) {
  //   $('.b-menu > li > .submenu').addClass('hover');
  // }

  function checkWidth() {
    var windowWidth = $("body").innerWidth(),
      elem = $(".submenu");
    // menuActive = $(".b-menu>li"); // лучше сохранять объект в переменную, многократно чтобы не насиловать
    // страницу для поиска нужного элемента
    if (windowWidth < 850) {
      elem.removeClass("hover");
    } else {
      elem.addClass("hover");
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function () {
    checkWidth(); // проверит при изменении размера окна клиента
  });

  // $(window).bind("load resize", function () {
  //   if ($(this).width() > 850) {
  //     $('.b-menu > li > .submenu').addClass('hover')
  //   } else {
  //     $('.b-menu > li > .submenu').removeClass('hover')
  //   }
  // })

  // let resize = document.querySelector(".b-menu > li > .submenu");
  // window.addEventListener("resize", function () {
  //   if (window.innerWidth < 851) resize.classList.remove("hover");
  //   if (window.innerWidth > 850) resize.classList.add("hover");
  // });

  // let resize = document.querySelector(".b-menu > li > .submenu");
  // window.addEventListener("resize", function () {
  //   if (window.innerWidth < 851) {
  //     document.querySelectorAll('.b-menu > li > .submenu').forEach(n => n.classList.remove('hover'))
  //   };
  //   if (window.innerWidth > 850) {
  //     document.querySelectorAll('.b-menu > li > .submenu').forEach(n => n.classList.add('hover'))
  //   };
  // });

  $(".burger").click(function () {
    $(".header__nav, .burger, .header__top-right").toggleClass("active");
    $("body").toggleClass("active");
  });

  $(document).on("click", function (e) {
    if (
      $(e.target).closest(".header__nav, .burger, .header__top-right").length ==
      0 &&
      $(".header__nav, .burger, .header__top-right, body").hasClass("active") &&
      $(e.target).closest(".header__nav, .burger, .header__top-right").length ==
      0
    ) {
      $(".header__nav, .burger, .header__top-right, body").toggleClass(
        "active"
      );
    }
  });

  $(".icon-search").click(function () {
    $(".icon-search, .search").toggleClass("active");
  });

  $(document).on("click", function (e) {
    if (
      $(e.target).closest(".icon-search, .search").length == 0 &&
      $(".icon-search, .search").hasClass("active") &&
      $(e.target).closest(".icon-search, .search").length == 0
    ) {
      $(".icon-search, .search").toggleClass("active");
    }
  });

  $(".showcase__catalog-btn").click(function () {
    $(".showcase__catalog-filter, .showcase__catalog-btn").toggleClass(
      "active"
    );
  });

  $(document).on("click", function (e) {
    if (
      $(e.target).closest(".showcase__catalog-btn, .showcase__catalog-filter")
      .length == 0 &&
      $(".showcase__catalog-btn, .showcase__catalog-filter").hasClass(
        "active"
      ) &&
      $(e.target).closest(".showcase__catalog-btn, .showcase__catalog-filter")
      .length == 0
    ) {
      $(".showcase__catalog-btn, .showcase__catalog-filter").toggleClass(
        "active"
      );
    }
  });

  // $(".showcase__catalog-switch").click(function () {
  //   $(".showcase__catalog-item, .showcase__catalog-switch").toggleClass("list");
  // });

  // $('.b-menu li a').click(function () {
  //   $('.b-menu li a').removeClass('active');
  //   $(this).addClass('active');
  //   if ($(this).hasClass('active')) {
  //     $('.b-menu li a').removeClass('active');
  //   }
  //   // $(this).not($(this)).parent().removeClass('active');
  // });

  // if (window.innerWidth < 850) {
  // $('.b-menu li').click(function () {
  //   if ($(this).hasClass('active')) {
  //     $(this).removeClass('active');
  //   } else {
  //     $('.b-menu li.active').removeClass('active');
  //     $(this).addClass('active');
  //   }
  // });
  // }

  $(window).bind("load resize", function () {
    if ($(this).width() < 850) {
      $(".b-menu li").click(function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else {
          $(".b-menu li.active").removeClass("active");
          $(this).addClass("active");
        }
      });
    } else {
      $(".b-menu li").removeClass("active");
    }
  });

  // $(window).on('load, resize', function mobileViewUpdate() {
  //   var viewportWidth = $(window).width();
  //   if (viewportWidth < 850) {
  //     $('.b-menu li').click(function () {
  //       if ($(this).hasClass('active')) {
  //         $(this).removeClass('active');
  //       } else {
  //         $('.b-menu li.active').removeClass('active');
  //         $(this).addClass('active');
  //       }
  //     });
  //   }
  // });

  // var alterClass = function () {
  //   var ww = document.body.clientWidth;
  //   if (ww < 850) {
  //     $('.test').removeClass('blue');
  //   } else if (ww >= 401) {
  //     $('.test').addClass('blue');
  //   };
  // };
  // $(window).resize(function () {
  //   alterClass();
  // });
  // //Fire it when the page first loads:
  // alterClass();

  // $('.filter__item-title').click(function () {
  //   $(this).closest('.filter__item').find('.filter__item-body').toggleClass('show');
  //   $(this).toggleClass('show');
  // });

  // $(window).bind("load resize", function () {
  //   if ($(this).width() < 850) {
  //     $('.b-menu li').addClass('active')
  //   } else {
  //     $('.b-menu li').removeClass('active')
  //   }
  // })

  $(".footer__block.accordion").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(".footer__block.accordion.active").removeClass("active");
      $(this).addClass("active");
    }
  });

  $("#form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      login: {
        required: true,
        minlength: 2,
      },
      password: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
      agree: {
        required: true,
      },
    },
    errorPlacement: function (error, element) {
      return true;
    }
  });

  $("#form-login").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      login: {
        required: true,
        minlength: 2,
      },
      password: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
      agree: {
        required: true,
      },
    },
    errorPlacement: function (error, element) {
      return true;
    }
  });
  $("#form-click").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      login: {
        required: true,
        minlength: 2,
      },
      password: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
      agree: {
        required: true,
      },
    },
    errorPlacement: function (error, element) {
      return true;
    }
  });
  $("#form-contact").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      login: {
        required: true,
        minlength: 2,
      },
      password: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
      agree: {
        required: true,
      },
    },
    errorPlacement: function (error, element) {
      return true;
    }
  });
  $("#form-register").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      login: {
        required: true,
        minlength: 2,
      },
      password: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
      agree: {
        required: true,
      },
      errorPlacement: function (error, element) {
        return true;
      }
    },
  });

  var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 0,
    max = 100,
    from = 0,
    to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 0,
    to: 100,
    onStart: updateInputs,
    onChange: updateInputs,
    force_edges: false, // force UI in the box
    hide_min_max: true, // show/hide MIN and MAX labels
    hide_from_to: true, // show/hide FROM and TO labels
    block: false
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val,
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val,
    });
  });

  $(".filter__item-title").click(function () {
    $(this)
      .closest(".filter__item")
      .find(".filter__item-body")
      .toggleClass("show");
    $(this).toggleClass("show");
  });

  $(".order-toggler").click(function () {
    $(this)
      .closest(".personal-account__order")
      .find(".table")
      .toggleClass("show");
    $(this).toggleClass("show");
  });

  $("select").niceSelect();

  var elementPosition = $("#tabs").offset();

  // $(window).scroll(function () {
  //   if ($(window).scrollTop() > elementPosition.top) {
  //     $("#tabs").addClass("fixed");
  //   } else {
  //     $("#tabs").removeClass("fixed");
  //   }
  // });

  $("#tabs").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });


  // $('.card-product__reviews .tab').on('click', function (event) {
  //   var id = $(this).attr('data-id');
  //   $('.card-product__reviews').find('.tab-item').removeClass('active').hide();
  //   $('.card-product__reviews .reviews-tabs').find('.tab').removeClass('active');
  //   $(this).addClass('active');
  //   $('#' + id).addClass('active').fadeIn();
  //   return false;
  // });

  // $('.wrapper .tab').on('click', function (event) {
  //   var id = $(this).attr('data-id');
  //   $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
  //   $('.wrapper .tabs').find('.tab').removeClass('active');
  //   $(this).addClass('active');
  //   $('#' + id).addClass('active-tab').fadeIn();
  //   return false;
  // });

  // $.fancybox.defaults.thumbs.autoStart = true;

  // $().fancybox({
  //   selector: ".slider-for__inner .slick-slide:not(.slick-cloned)",
  //   backFocus: true,
  // });

  // // $().fancybox({
  // //   selector: ".slider-nav__inner .slick-slide:not(.slick-cloned)",
  // //   backFocus: false,
  // //   afterShow: function (instance, current) {
  // //     current.opts.$orig
  // //       .closest(".slick-initialized")
  // //       .slick("slickGoTo", parseInt(current.index), true);
  // //   },
  // // });

  // $(document).on('click', '.slick-cloned', function(e) {
  //   var $slides = $(this)
  //   .parent()
  //   .children('.slick-slide:not(.slick-cloned)');

  //   $slides
  //     .eq( ( $(this).attr("data-slick-index") || 0) % $slides.length )
  //     .trigger("click.fb-start", { $trigger: $(this) });

  //   return false;
  // });

  $('[data-fancybox="gallery"]').fancybox({
    thumbs: {
      showOnStart: true,
    },
    hash: true,
  });

});

// });