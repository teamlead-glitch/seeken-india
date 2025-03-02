$(document).ready(function () {
    $(window).scroll(function () {
        $(this).scrollTop() > 400 ? $(".scrollup").fadeIn() : $(".scrollup").fadeOut();
    });
}),
    $(document).ready(function () {
        window.onscroll = function () {
            document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? document.getElementById("header").classList.add("shrink") : document.getElementById("header").classList.remove("shrink");
        };
    }),
    $(".closebtn").on("click", function () {
        $(this).parents("div").fadeOut();
    }),
    $("#anchor1").click(function () {
        $("html, body").animate({ scrollTop: $($(this).attr("rel")).offset().top }, 500);
    }),
    $("#anchor2").click(function () {
        $("html, body").animate({ scrollTop: $($(this).attr("rel")).offset().top }, 500);
    }),
    document.addEventListener("DOMContentLoaded", function () {
        let t = document.querySelectorAll(".left-box li"),
            e = document.querySelectorAll(".right-box .content");
        t.forEach((t) => {
            t.addEventListener("click", function () {
                e.forEach((t) => t.classList.remove("active"));
                let o = t.getAttribute("data-target");
                document.getElementById(o).classList.add("active");
            });
        });
    }),
    $(document).ready(function () {
        var t = $(".banner").owlCarousel({
            items: 1,
            loop: !0,
            autoplay: !0,
            autoplayTimeout: 3e3,
            autoplayHoverPause: !0,
            nav: !1,
            dots: !1
        });
        $(".owl-thumb-item").click(function () {
            var e = $(this).data("position");
            t.trigger("to.owl.carousel", [e, 300]), $(".owl-thumb-item").removeClass("active"), $(this).addClass("active");
        }),
            t.on("changed.owl.carousel", function (t) {
                var e = t.item.index - t.relatedTarget._clones.length / 2;
                e < 0 && (e = t.item.count + e), $(".owl-thumb-item").removeClass("active"), $('.owl-thumb-item[data-position="' + e + '"]').addClass("active");
            }),
            $(".owl-thumb-item:first").addClass("active");
    }),
    $(".flashsale").owlCarousel({
        center: !0,
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        nav: !0,
        dots: !1,
        margin: 10,
        navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
        responsive: {
            0: { 
                items: 1.2,  // Show part of adjacent images
                margin: 2,
                center: true 
            },
            768: { items: 1.2, margin: 5,  }, 992: { items: 2 }
        },
    }),
    $(".countdown-container").each(function () {
        let t = $(this).data("endtime"),
            e = new Date().getTime() + 864e5 * t,
            o = $(this);
        function i() {
            let t = new Date().getTime(),
                i = e - t;
            if (i <= 0) {
                o.find(".days").text("0"), o.find(".hours").text("0"), o.find(".minutes").text("0"), o.find(".seconds").text("0");
                return;
            }
            o.find(".days").text(Math.floor(i / 864e5)), o.find(".hours").text(Math.floor((i % 864e5) / 36e5)), o.find(".minutes").text(Math.floor((i % 36e5) / 6e4)), o.find(".seconds").text(Math.floor((i % 6e4) / 1e3));
        }
        i(), setInterval(i, 1e3);
    }),
    $(".category_lists").owlCarousel({
        loop: !0,
        margin: 15,
        autoplay: !0,
        responsiveClass: !0,
        nav: !0,
        dots: !1,
        navText: ['<i class="fa-regular fa-arrow-left-to-arc"></i>', '<i class="fa-regular fa-arrow-right-to-arc"></i>'],
        responsive: { 0: { items: 2, margin: 10 }, 600: { items: 5 }, 1e3: { items: 5 } },
    }),
    $(".top_picks").owlCarousel({
        loop: !0,
        margin: 15,
        autoplay: !0,
        responsiveClass: !0,
        nav: !0,
        dots: !1,
        navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
        responsive: { 0: { items: 1, margin: 10 }, 480: { items: 2 }, 768: { items: 3 }, 1200: { items: 4 } },
    });

$(".relatedproducts").owlCarousel({
    loop: !0,
    margin: 15,
    autoplay: !0,
    responsiveClass: !0,
    nav: !0,
    dots: !1,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    responsive: { 0: { items: 1, margin: 10 }, 480: { items: 2 }, 1e3: { items: 3 }, 1200: { items: 4 } },
});
