//alert(1)
//header
$(window).scroll(function () {
  var sc = $(window).scrollTop();
  if (sc > 100) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
});

//Mobile Navigation
$("#toggle").click(function () {
  $(this).toggleClass("active");
  $("#overlay").toggleClass("open");
});

//Accordion

(function ($) {
  $.fn.smk_Accordion = function (options) {
    if (this.length > 1) {
      this.each(function () {
        $(this).smk_Accordion(options);
      });
      return this;
    }

    // Defaults
    var settings = $.extend(
      {
        animation: true,
        showIcon: true,
        closeAble: false,
        closeOther: true,
        slideSpeed: 150,
        activeIndex: false,
      },
      options
    );

    // Cache current instance
    // To avoid scope issues, use 'plugin' instead of 'this'
    // to reference this class from internal events and functions.
    var plugin = this;

    //"Constructor"
    var init = function () {
      plugin.createStructure();
      plugin.clickHead();
    };

    // Add .smk_accordion class
    this.createStructure = function () {
      //Add Class
      plugin.addClass("smk_accordion");
      if (settings.showIcon) {
        plugin.addClass("acc_with_icon");
      }

      //Create sections if they were not created already
      if (plugin.find(".accordion_in").length < 1) {
        plugin.children().addClass("accordion_in");
      }

      //Add classes to accordion head and content for each section
      plugin.find(".accordion_in").each(function (index, elem) {
        var childs = $(elem).children();
        $(childs[0]).addClass("acc_head");
        $(childs[1]).addClass("acc_content");
      });

      //Append icon
      if (settings.showIcon) {
        plugin.find(".acc_head").prepend('<div class="acc_icon_expand"></div>');
      }

      //Hide inactive
      plugin
        .find(".accordion_in .acc_content")
        .not(".acc_active .acc_content")
        .hide();

      //Active index
      if (settings.activeIndex === parseInt(settings.activeIndex)) {
        if (settings.activeIndex === 0) {
          plugin.find(".accordion_in").addClass("acc_active").show();
          plugin
            .find(".accordion_in .acc_content")
            .addClass("acc_active")
            .show();
        } else {
          plugin
            .find(".accordion_in")
            .eq(settings.activeIndex - 1)
            .addClass("acc_active")
            .show();
          plugin
            .find(".accordion_in .acc_content")
            .eq(settings.activeIndex - 1)
            .addClass("acc_active")
            .show();
        }
      }
    };

    // Action when the user click accordion head
    this.clickHead = function () {
      plugin.on("click", ".acc_head", function () {
        var s_parent = $(this).parent();

        if (s_parent.hasClass("acc_active") == false) {
          if (settings.closeOther) {
            plugin.find(".acc_content").slideUp(settings.slideSpeed);
            plugin.find(".accordion_in").removeClass("acc_active");
          }
        }

        if (s_parent.hasClass("acc_active")) {
          if (false !== settings.closeAble) {
            s_parent.children(".acc_content").slideUp(settings.slideSpeed);
            s_parent.removeClass("acc_active");
          }
        } else {
          $(this).next(".acc_content").slideDown(settings.slideSpeed);
          s_parent.addClass("acc_active");
        }
      });
    };

    //"Constructor" init
    init();
    return this;
  };
})(jQuery);

//datepicker
$(function () {
  $("#date").datepicker({
    dateFormat: "dd-M-yy",
    minDate: 1,
  });

  $(".date-icon").on("click", function () {
    $("#date").focus();
  });
});

//Modal
var ModalEffects = (function () {
  function init() {
    var overlay = document.querySelector(".md-overlay");

    [].slice
      .call(document.querySelectorAll(".md-trigger"))
      .forEach(function (el, i) {
        var modal = document.querySelector("#" + el.getAttribute("data-modal")),
          close = modal.querySelector(".md-close");

        function removeModal(hasPerspective) {
          classie.remove(modal, "md-show");

          if (hasPerspective) {
            classie.remove(document.documentElement, "md-perspective");
          }
        }

        function removeModalHandler() {
          removeModal(classie.has(el, "md-setperspective"));
        }

        el.addEventListener("click", function (ev) {
          classie.add(modal, "md-show");
          overlay.removeEventListener("click", removeModalHandler);
          overlay.addEventListener("click", removeModalHandler);

          if (classie.has(el, "md-setperspective")) {
            setTimeout(function () {
              classie.add(document.documentElement, "md-perspective");
            }, 25);
          }
        });

        close.addEventListener("click", function (ev) {
          ev.stopPropagation();
          removeModalHandler();
        });
      });
  }

  init();
})();

//initialize
$(document).ready(function () {
  //img-drag
  $("img").on("dragstart", function (event) {
    event.preventDefault();
  });
  //scroll-up
  $(".up").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
  //slider
  $(".slider").owlCarousel({
    loop: true,
    dots: true,
    nav: false,
    mouseDrag: false,
    autoplay: true,
    smartSpeed: 500,
    autoplayTimeout: 5000,
    animateIn: "zoomIn",
    animateOut: "zoomOut",
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  //carousel
  $(".carousel").owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
        // center: true,
        // margin: 16,
      },
      575: {
        items: 2,
      },
      767: {
        items: 3,
      },
      1280: {
        items: 4,
      },
    },
    // onInitialized: function () {
    //   var carouselWidth = $(".custom-carousel.carousel").width();
    //   var itemWidth = carouselWidth / 2;
    //   $(".owl-item").width(itemWidth);
    // },
  });

  //carousel3
  $(".hotselling-carousel").owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    autoplay: true,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
        // center: true,
        // margin: 16,
      },
      767: {
        items: 3,
      },
      991: {
        items: 3,
      },
    },
  });

  //carousel4
  $(".highlight-carousel").owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    autoplay: true,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
        // center: true,
        // margin: 16,
      },
      767: {
        items: 3,
      },
      991: {
        items: 4,
      },
    },
  });
  //carousel4
  $(".article-carousel").owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
        // center: true,
        // margin: 16,
      },
      767: {
        items: 3,
      },
      991: {
        items: 4,
      },
    },
  });
  //accodion
  $(".accordion").smk_Accordion();

  $(document).on("scroll", onScroll);
  //smoothscroll
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $("a").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    var target = this.hash,
      menu = target;
    $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },
        500,
        "swing",
        function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        }
      );
  });

  // show package-navbar on scroll
  var prevScrollTop = $(window).scrollTop();

  $(window).on("scroll", function (e) {
    var $src = $(".package-navbar");
    var currentScrollTop = $(this).scrollTop();
    console.log(currentScrollTop);
    var width = $(window).width();
    if (width <= 767) {
      var screen = 1050;
      var last = 3650;
    } else {
      var screen = 890;
      var last = 2720;
    }
    console.log(currentScrollTop);
    //currentScrollTop >= prevScrollTop &&
    if (currentScrollTop >= screen && currentScrollTop < last) {
      $src.css({
        position: "fixed",
        top: "80px",
      });
      $(".package-navbar").slideDown();
    } else {
      $src.css({
        position: "static",
      });
      $(".package-navbar").hide();
    }

    prevScrollTop = currentScrollTop;
  });

  //fancybox
  $(".zoom").fancybox({
    transitionEffect: "zoom-in-out",
  });
});
//initialize

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $("#scroll-nav a").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $("#scroll-nav ul li a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
