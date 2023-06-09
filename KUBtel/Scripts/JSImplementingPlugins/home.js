﻿function resizeBackgroundHome() {
    var e = 1279,
        t = 942,
        a = e / t;
    if (amplada / alcada > a) var i = amplada,
        s = amplada / a;
    else var s = alcada,
        i = alcada * a;
    $(".scene li.colors").css({
        width: i - 40 + "px",
        height: s - 40 + "px",
        marginTop: -((s - 20) / 2) + "px",
        marginLeft: -((i - 20) / 2) + "px"
    })
}

function resizeWorks() {
    $(".module.project").css(0 != window.orientation ? {
        height: amplada / 2 + "px"
    } : {
        height: amplada + "px"
    }), $(".module.header").css({
        height: alcada + "px"
    }), $(".module.header .content").css({
        height: alcada + "px"
    })
}

function resizeAbout() {
    if ($("body").hasClass("about") && 0 == window.orientation) $(".image-content .content .visible > div:first-child").css({
        height: amplada + "px"
    }), $(".content-image .content .visible > div:first-child").css({
        height: amplada + "px"
    });
    else {
        var e = $(".image-content .content .visible > div:nth-child(2) .animate").outerHeight();
        $(".image-content .content .visible > div:nth-child(1)").css({
            height: e + "px"
        });
        var e = $(".content-image .content .visible > div:nth-child(2) .animate").outerHeight();
        $(".content-image .content .visible > div:nth-child(1)").css({
            height: e + "px"
        })
    }
}

function showFooter(e) {
    $(".overlay").css({
        display: "block"
    }), $("#content").animate({
        top: "-" + $(".footer .container > div").outerHeight() + "px"
    }, {
        duration: 300,
        easing: easingType
    }), $(".overlay").animate({
        opacity: "0.75",
        transform: "translate3d(0, -" + ($(".footer .container > div").outerHeight() + e) + "px, 0)"
    }, {
        duration: 300,
        easing: easingType
    }), $(".modules .active").removeClass("active")
}

function hideFooter() {
    $("#content").animate({
        top: "0px"
    }, {
        duration: 300,
        easing: easingType
    }), $(".overlay").animate({
        opacity: "0",
        transform: "translate3d(0, 0, 0)"
    }, {
        duration: 300,
        easing: easingType,
        complete: $(".overlay").css({
            display: "none"
        })
    }), $(".modules .module:last-child").addClass("active")
}

function nextProject(e, t, a, i) {

    if (!preProcess()) return false;
        
    var s = $(".modules .active");
    if (i) var n = $(".modules .module:nth-child(" + i + ")");
    else var n = $(".modules .active").next("div");
    n.find(".animate").removeClass("visible"), s.find(".container-1").css({
        "-webkit-transform": "translate3d(0px, -" + (alcada + a) + "px, 0px)",
        "-moz-transform": "translate3d(0px, -" + (alcada + a) + "px, 0px)",
        "-ms-transform": "translate3d(0px, -" + (alcada + a) + "px, 0px)",
        transform: "translate3d(0px, -" + (alcada + a) + "px, 0px)",
        "-webkit-transition": e + "ms cubic-bezier(0.5, 0.15, 0.17, 1) 0ms",
        "-moz-transition": e + "ms cubic-bezier(0.5, 0.15, 0.17, 1) 0ms",
        "-ms-transition": e + "ms cubic-bezier(0.5, 0.15, 0.17, 1) 0ms",
        transition: e + "ms cubic-bezier(0.5, 0.15, 0.17, 1) 0ms"
    }), s.find(".container-2").css({
        "-webkit-transform": "translate3d(0px, " + .9 * (alcada + a) + "px, 0px)",
        "-moz-transform": "translate3d(0px, " + .9 * (alcada + a) + "px, 0px)",
        "-ms-transform": "translate3d(0px, " + .9 * (alcada + a) + "px, 0px)",
        transform: "translate3d(0px, " + .9 * (alcada + a) + "px, 0px)",
        "-webkit-transition": e + "ms cubic-bezier(0.5, 0.15, 0.17, 1) 0ms",
        "-moz-transition": e + "ms cubic-bezier(0.5, 0.15, 0.17, 1) 0ms",
        "-ms-transition": e + "ms cubic-bezier(0.5, 0.15, 0.17, 1) 0ms",
        transition: e + "ms cubic-bezier(0.5, 0.15, 0.17, 1) 0ms"
    });
    setTimeout(function() {
        i ? ($(".numbers li.active").removeClass("active"), $(".numbers li:nth-child(" + i + ")").addClass("active")) : $(".numbers li.active").removeClass("active").next("li").addClass("active"), s.css({
            "z-index": "1",
            opacity: "0"
        }), n.css({
            opacity: "1",
            "z-index": "2"
        }), n.find(".page").css({
            opacity: "1"
        }), n.find(".container-1").css({
            "-webkit-transform": "translate3d(0px, 0, 0px)",
            "-moz-transform": "translate3d(0px, 0px, 0px)",
            "-ms-transform": "translate3d(0px, 0px, 0px)",
            transform: "translate3d(0px, 0px, 0px)",
            "-webkit-transition": t + "ms cubic-bezier(0.5, 0.15, 0.17, 1)",
            "-moz-transition": t + "ms cubic-bezier(0.5, 0.15, 0.17, 1)",
            "-ms-transition": t + "ms cubic-bezier(0.5, 0.15, 0.17, 1)",
            transition: t + "ms cubic-bezier(0.5, 0.15, 0.17, 1)"
        }), n.find(".container-2").css({
            "-webkit-transform": "translate3d(0px, 0, 0px)",
            "-moz-transform": "translate3d(0px, 0px, 0px)",
            "-ms-transform": "translate3d(0px, 0px, 0px)",
            transform: "translate3d(0px, 0px, 0px)",
            "-webkit-transition": t + "ms cubic-bezier(0.5, 0.15, 0.17, 1)",
            "-moz-transition": t + "ms cubic-bezier(0.5, 0.15, 0.17, 1)",
            "-ms-transition": t + "ms cubic-bezier(0.5, 0.15, 0.17, 1)",
            transition: t + "ms cubic-bezier(0.5, 0.15, 0.17, 1)"
        })
    }, .95 * e), setTimeout(function() {
        s.css({
            "z-index": ""
        }), s.removeClass("active"), n.addClass("active"), $(".modules .active .content > div").addClass("visible"), $(".modules .active").find(".animate").addClass("visible"), $("body").hasClass("about") && $(".modules .active").find(".anim").addClass("startAnimation")
    }, .95 * e + t);

    postProcess(n.index() + 1);
}

function prevProject(e, t, a, i) {

    if (!preProcess()) return false;

    var s = $(".modules .active");
    if (i) var n = $(".modules .module:nth-child(" + i + ")");
    else var n = $(".modules .active").prev("div");
    n.find(".content > div").removeClass("visible"), n.find(".animate").removeClass("visible"), s.find(".container-1").css({
        "-webkit-transform": "translate3d(0px, " + (alcada + a) + "px, 0px)",
        "-moz-transform": "translate3d(0px, " + (alcada + a) + "px, 0px)",
        "-ms-transform": "translate3d(0px, " + (alcada + a) + "px, 0px)",
        transform: "translate3d(0px, " + (alcada + a) + "px, 0px)",
        "-webkit-transition": "-webkit-transform " + e + "ms cubic-bezier(0.5, 0.15, 0.17, 1) 0ms",
        "-moz-transition": "-moz-transform " + e + "ms cubic-bezier(0.5, 0.15, 0.17, 1) 0ms",
        "-ms-transition": "-ms-transform " + e + "ms cubic-bezier(0.5, 0.15, 0.17, 1) 0ms",
        transition: "transform " + e + "ms cubic-bezier(0.5, 0.15, 0.17, 1) 0ms"
    }), s.find(".container-2").css({
        "-webkit-transform": "translate3d(0px, -" + .9 * (alcada + a) + "px, 0px)",
        "-moz-transform": "translate3d(0px, -" + .9 * (alcada + a) + "px, 0px)",
        "-ms-transform": "translate3d(0px, -" + .9 * (alcada + a) + "px, 0px)",
        transform: "translate3d(0px, -" + .9 * (alcada + a) + "px, 0px)",
        "-webkit-transition": "-webkit-transform " + e + "ms cubic-bezier(0.5, 0.15, 0.17, 1) 0ms",
        "-moz-transition": "-moz-transform " + e + "ms cubic-bezier(0.5, 0.15, 0.17, 1) 0ms",
        "-ms-transition": "-ms-transform " + e + "ms cubic-bezier(0.5, 0.15, 0.17, 1) 0ms",
        transition: "transform " + e + "ms cubic-bezier(0.5, 0.15, 0.17, 1) 0ms"
    }), setTimeout(function() {
        i ? ($(".numbers li.active").removeClass("active"), $(".numbers li:nth-child(" + i + ")").addClass("active")) : $(".numbers li.active").removeClass("active").prev("li").addClass("active"), s.css({
            "z-index": "1",
            opacity: "0"
        }), n.css({
            opacity: "1",
            "z-index": "2"
        }), n.find(".page").css({
            opacity: "1"
        }), n.find(".container-1").css({
            "-webkit-transform": "translate3d(0px, 0px, 0px)",
            "-moz-transform": "translate3d(0px, 0px, 0px)",
            "-ms-transform": "translate3d(0px, 0px, 0px)",
            transform: "translate3d(0px, 0px, 0px)",
            "-webkit-transition": "-webkit-transform " + t + "ms cubic-bezier(0.5, 0.15, 0.17, 1)",
            "-moz-transition": "-moz-transform " + t + "ms cubic-bezier(0.5, 0.15, 0.17, 1)",
            "-ms-transition": "-ms-transform " + t + "ms cubic-bezier(0.5, 0.15, 0.17, 1)",
            transition: "transform " + t + "ms cubic-bezier(0.5, 0.15, 0.17, 1)"
        }), n.find(".container-2").css({
            "-webkit-transform": "translate3d(0px, 0px, 0px)",
            "-moz-transform": "translate3d(0px, 0px, 0px)",
            "-ms-transform": "translate3d(0px, 0px, 0px)",
            transform: "translate3d(0px, 0px, 0px)",
            "-webkit-transition": "-webkit-transform " + t + "ms cubic-bezier(0.5, 0.15, 0.17, 1)",
            "-moz-transition": "-moz-transform " + t + "ms cubic-bezier(0.5, 0.15, 0.17, 1)",
            "-ms-transition": "-ms-transform " + t + "ms cubic-bezier(0.5, 0.15, 0.17, 1)",
            transition: "transform " + t + "ms cubic-bezier(0.5, 0.15, 0.17, 1)"
        })
    }, .95 * e), setTimeout(function() {
        s.css({
            "z-index": ""
        }), s.removeClass("active"), n.addClass("active"), $(".modules .active .content > div").addClass("visible"), $(".modules .active .content").find(".animate").addClass("visible")
    }, .95 * e + t);

    postProcess(n.index() + 1);
}

function preProcess(){

    //Check Mega Menu, if open, disable other functions
    var menuOpenned = $(".toggle").hasClass("open");
    var footerOpenned = $(".overlay").css("display") == "block";
    if (menuOpenned || footerOpenned) return false;
    else return true;
}

function postProcess(currentSlide){

    nextSlideNo = currentSlide + 1; //set next auto slide numbering
    resetSliding();

    // Manipulate logo color
    if (currentSlide == 1 || currentSlide == 2 || currentSlide == 3 || currentSlide == 4 || currentSlide == 5 || currentSlide == 6 || currentSlide == 7 || currentSlide == 8 || currentSlide == 9 || currentSlide == 10) $("#logo").attr("src", "asset/img/mesiniaga-white-logo.png");
    else $("#logo").attr("src","asset/img/mesiniaga-colour-logo.png");
}

function startSliding() {
    //console.log("animating..." + nextSlideNo);
    if (nextSlideNo < 0 || nextSlideNo > totalSlides) nextSlideNo = 1;
    gotoProject(nextSlideNo);
}

function resetSliding() {
    clearInterval(sliding);
    sliding = window.setInterval(startSliding, slidingInterval);
}

function gotoProject(e) {
    e = e, activeProject = $(".modules .active").index() + 1;
    //console.log(e + " - " + activeProject);
    e != activeProject && (e > activeProject ? isMobile.tablet ? nextProject(temps1, temps2, 40, e) : nextProject(temps1, temps2, 0, e) : isMobile.tablet ? prevProject(temps1, temps2, 40, e) : prevProject(temps1, temps2, 0, e));
    
}

function loadRendererMidLargeViewJS() {
    $(window).resize(function () {
        alcada = $(window).height() - 40, amplada = $(window).width() - 40, resizeBackgroundHome()
    }), $(window).on("load", function () {
        resizeBackgroundHome(), isMobile.tablet ? $(".overlay").on("click touchstart", function () { }) : $(".overlay").click(function () {
            hideFooter()
            //}), $(".numbers").css({
            //    marginTop: -$(".numbers").height() / 2 + "px"
        }), $(".header .custom > a").click(function (e) {
            e.preventDefault(), nextProject(temps1, temps2, 0)
        }), $(".loading").fadeOut("slow", function () {
            coverFadeOut(), console.log("page loaded")
        }), $(".modules .module:first-child").addClass("active"), $(".modules .active .container-1").css({
            "backface-visibility": "hidden",
            "-webkit-transform": "translate3d(0,0,0)",
            "-moz-transform": "translate3d(0,0,0)",
            "-ms-transform": "translate3d(0,0,0)",
            transform: "translate3d(0,0,0)"
        }), $(".modules .active .container-2").css({
            "backface-visibility": "hidden",
            "-webkit-transform": "translate3d(0,0,0)",
            "-moz-transform": "translate3d(0,0,0)",
            "-ms-transform": "translate3d(0,0,0)",
            transform: "translate3d(0,0,0)"
        }), $(".modules .active").css({
            opacity: "1"
        }), $(".modules .module:not(.active)").css({
            opacity: "0"
        }), $(".modules .module:not(.active) .container-1").css({
            "backface-visibility": "hidden",
            "-webkit-transform": "translate3d(0px, " + alcada + "px, 0px)",
            "-moz-transform": "translate3d(0px, " + alcada + "px, 0px)",
            "-ms-transform": "translate3d(0px, " + alcada + "px, 0px)",
            transform: "translate3d(0px, " + alcada + "px, 0px)"
        }), $(".modules .module:not(.active) .container-2").css({
            "backface-visibility": "hidden",
            "-webkit-transform": "translate3d(0px, -" + .9 * alcada + "px, 0px)",
            "-moz-transform": "translate3d(0px, -" + .9 * alcada + "px, 0px)",
            "-ms-transform": "translate3d(0px, -" + .9 * alcada + "px, 0px)",
            transform: "translate3d(0px, -" + .9 * alcada + "px, 0px)"
        }), $(".modules .module .page").css({
            "background-color": "#fff"
        }), $(".modules .module:not(.active) .page").css({
            opacity: "0"
        }), $(".modules .module .image").css({
            opacity: "1"
        }), setTimeout(function () {
            $(".modules .active .content > div").addClass("visible")
        }, 1200), isMobile.any ? (console.log("tablet"), $("body").on("click", ".viewcase a", function () { }), $("#content").bind("touchmove", function (e) {
            e.preventDefault()
        }), $("#content").swipe({
            swipeUp: function () {
                $(".modules .active").next("div").length ? nextProject(temps1, temps2, 40) : showFooter(0)
            },
            swipeDown: function () {
                $(".module:first-child").hasClass("active") || ($(".modules .active").prev("div").length ? prevProject(temps1, temps2, 40) : hideFooter())
            },
            threshold: 0
        }), $(".overlay").swipe({
            swipeUp: function () {
                $(".modules .active").next("div").length ? nextProject(temps1, temps2, 40) : showFooter(0)
            },
            swipeDown: function () {
                $(".modules .active").prev("div").length ? prevProject(temps1, temps2, 40) : hideFooter()
            },
            threshold: 0
        })) : $("body").bind("mousewheel", function (e) {

            var t = (new Date).getTime();
            return deltaOfInterest = e.deltaY, 0 != deltaOfInterest ? quietPeriod + animationTime > t - lastAnimation ? void event.preventDefault() : void (0 > deltaOfInterest ? (lastAnimation = t, $(".modules .active").next("div").length ? nextProject(temps1, temps2, 0) : showFooter(20)) : $(".module:first-child").hasClass("active") || (lastAnimation = t, $(".modules .active").prev("div").length ? prevProject(temps1, temps2, 0) : hideFooter())) : void 0
        })
    }), $("body").hasClass("about") && $(window).scroll(function () {
        scrollbar.show();
    });
}

function loadRendererMobileViewJS() {
    alcada = $(window).height();
    amplada = $(window).width();

    $(".home .contentMobile .card-div").on("touchstart", function (e) {

        $(this).siblings().css("opacity", "0.6");
        $(this).css("opacity", "1");

    });

    //$(window).resize(function () { resizeBackgroundHome(), resizeWorks(), resizeAbout() });

    //$(window).on("load", function () {
    //    $(".modules .module .content > div").addClass("visible"), resizeWorks(), resizeAbout(), resizeBackgroundHome();
    //    window.addEventListener("orientationchange", function () { resizeWorks(), resizeAbout() }, !1);
    //    $(".header .custom > a").click(function (e) {
    //        e.preventDefault(), $("html, body").animate({
    //            scrollTop: $(".module:nth-child(2)").offset().top
    //        }, 600, "easeInCubic")
    //    }), $(".loading").fadeOut("slow", function () {
    //        coverFadeOut(), console.log("page loaded")
    //    }), $(".module.project").click(function () {
    //        click_links($(this).find(".viewcase a").attr("href"))
    //    }), isMobile.any && $(".module.project").on("touchstart", function (e) {
    //        $(".module.project").not(e.currentTarget).find(".img").css({
    //            transform: "scale(1)"
    //        }), $(".module.project").not(e.currentTarget).find(".background").css({
    //            opacity: "0"
    //        }), $(".module.project").not(e.currentTarget).find(".info").stop().fadeOut("slow"), $(".module.project").not(e.currentTarget).find(".info").find("span").removeClass("over"), $(".module.project").not(e.currentTarget).find(".text").find("h1").removeClass("over"), $(e.currentTarget).find(".img").css({
    //            transform: "scale(1.05)"
    //        }), $(e.currentTarget).find(".background").css({
    //            opacity: "0.75"
    //        }), $(e.currentTarget).find(".info").stop().fadeIn("slow"), setTimeout(function () {
    //            $(e.currentTarget).find(".info").find("h1").addClass("over")
    //        }, 100), setTimeout(function () {
    //            $(e.currentTarget).find(".info").find("span").addClass("over")
    //        }, 300)
    //    });
    //});
}