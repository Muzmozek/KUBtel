var revapi1073;

$(window).on("load", function () {
    $(".loading").fadeOut("slow", function () {
        $(".cover").fadeOut("slow", function () { });
    });
});

$(document).ready(function () {
    //$(window).bind('orientationchange', check);
    //function check(event) {
    //}
    //check(event);
    //$(".logo a").click(function () {
    //    var o = this;
    //    click_links(o)
    //});s
    var o = !1;

    //$(document).click(function (event) {
    //    var clickover = $(event.target);
    //    var _opened = $(".menu").children().hasClass("container-nav-toggled");
    //    if (_opened === true && !clickover.hasClass("container-nav-toggled")) {
    //        $("#menukubtel").click();
    //    }
    //});

    $.HSCore.components.HSCarousel.init('.js-carousel');

    $(".toggle").bind("click", function () {
        if ($(".menu").children().hasClass("container-nav-toggled")) {
            $(".toggle").removeClass("open");
            $(".menu").fadeOut("slow", function () {
                o = !1;
            });
            $(this).next().find('.container-nav-toggled').removeClass("container-nav-toggled").addClass('container-nav');
        } else {
            $(".toggle").addClass("open");
            $(".menu").fadeIn("slow", function () {
                o = !0
            });
            $(this).next().find('.container-nav').removeClass('container-nav').addClass("container-nav-toggled");
        }
    });

    if ($('#rev_slider_1073_1').revolution === undefined) {
        revslider_showDoubleJqueryError('#rev_slider_1073_1');
    } else {
        revapi1073 = $('#rev_slider_1073_1').show().revolution({
            sliderType: 'standard',
            //jsFileLocation: 'revolution/js/',
            sliderLayout: 'fullscreen',
            dottedOverlay: 'twoxtwo',
            delay: 9000,
            navigation: {
                keyboardNavigation: 'on',
                keyboard_direction: 'horizontal',
                mouseScrollNavigation: 'on',
                mouseScrollReverse: 'default',
                onHoverStop: 'off',
                touch: {
                    touchenabled: 'on',
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: 'vertical',
                    drag_block_vertical: false
                },
                bullets: {
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 1024,
                    style: 'hephaistos',
                    hide_onleave: false,
                    direction: 'vertical',
                    h_align: 'right',
                    v_align: 'center',
                    h_offset: 30,
                    v_offset: 0,
                    space: 5,
                    tmp: ''
                }
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [868, 768, 960, 720],
            lazyType: 'none',
            shadow: 1,
            spinner: 'off',
            stopLoop: 'on',
            stopAfterLoops: 0,
            stopAtSlide: 1,
            shuffle: 'off',
            autoHeight: 'off',
            fullScreenAutoWidth: 'off',
            fullScreenAlignForce: 'off',
            fullScreenOffsetContainer: '.header',
            fullScreenOffset: '',
            disableProgressBar: 'on',
            hideThumbsOnMobile: 'off',
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: 'off',
                nextSlideOnWindowFocus: 'off',
                disableFocusListener: false
            }
        });
    }
    $.HSCore.components.HSDatepicker.init('#datepickerDefault, #datepickerInline, #datepickerInlineFrom, #datepickerFrom, #datepickerTo');
});

$(window).on('load', function () {
    // initialization of header
    $.HSCore.components.HSHeader.init($('#js-header'));
    //$.HSCore.components.HSSmartMenu.init($('.js-smart-menu'));
    $.HSCore.helpers.HSHamburgers.init('.hamburger');

    // initialization of HSMegaMenu component
    $('.js-mega-menu').HSMegaMenu({
        event: 'hover',
        pageContainer: $('.container'),
        breakpoint: 991
    });

    $.HSCore.components.HSScrollNav.init($('#js-scroll-nav'), {
        duration: 700
    });

    //$("#slide-3026-layer-5").css("left", "144%");
    //$("#slide-3026-layer-8").css("left", "22%");
    // initialization of masonry
    $('.masonry-grid').imagesLoaded().then(function () {
        $('.masonry-grid').masonry({
            columnWidth: '.masonry-grid-sizer',
            itemSelector: '.masonry-grid-item',
            percentPosition: true
        });
    });
});

function initMap() {
    $.HSCore.components.HSGMap.init('.js-g-map');
}

var slider = new MasterSlider();

slider.control('arrows', {
    autohide: true,
    overVideo: true
});
slider.control('slideinfo', {
    autohide: false,
    overVideo: true,
    dir: 'h',
    align: 'bottom',
    inset: false,
    margin: 10
});
slider.setup("masterslider", {
    width: 240,
    height: 240,
    minHeight: 0,
    space: 35,
    start: 1,
    grabCursor: true,
    swipe: true,
    mouse: true,
    keyboard: false,
    layout: "partialview",
    wheel: false,
    autoplay: false,
    instantStartLayers: false,
    loop: true,
    shuffle: false,
    preload: 4,
    heightLimit: true,
    autoHeight: false,
    smoothHeight: true,
    endPause: false,
    overPause: true,
    fillMode: "fill",
    centerControls: true,
    startOnAppear: false,
    layersMode: "center",
    autofillTarget: "",
    hideLayers: false,
    fullscreenMargin: 0,
    speed: 20,
    dir: "h",
    viewOption: { centerSpace: 1.6 },
    parallaxMode: 'swipe',
    view: "focus"
});