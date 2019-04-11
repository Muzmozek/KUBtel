/********************************************
 * REVOLUTION 5.4.2 EXTENSION - ACTIONS
 * @version: 2.1.0 (15.05.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 *********************************************/
! function ($) {
    "use strict";

    function getScrollRoot() {
        var d, a = document.documentElement,
            b = document.body,
            c = (void 0 !== window.pageYOffset ? window.pageYOffset : null) || b.scrollTop || a.scrollTop;
        return a.scrollTop = b.scrollTop = c + (c > 0) ? -1 : 1, d = a.scrollTop !== c ? a : b, d.scrollTop = c, d
    }
    var _R = jQuery.fn.revolution,
        _ISM = _R.is_mobile(),
        extension = {
            alias: "Actions Min JS",
            name: "revolution.extensions.actions.min.js",
            min_core: "5.4.5",
            version: "2.1.0"
        };
    jQuery.extend(!0, _R, {
        checkActions: function (a, b, c) {
            if ("stop" === _R.compare_version(extension).check) return !1;
            checkActions_intern(a, b, c)
        }
    });
    var checkActions_intern = function (a, b, c) {
        c && jQuery.each(c, function (c, d) {
            d.delay = parseInt(d.delay, 0) / 1e3, a.addClass("tp-withaction"), b.fullscreen_esclistener || "exitfullscreen" != d.action && "togglefullscreen" != d.action || (jQuery(document).keyup(function (b) {
                27 == b.keyCode && jQuery("#rs-go-fullscreen").length > 0 && a.trigger(d.event)
            }), b.fullscreen_esclistener = !0);
            var e = "backgroundvideo" == d.layer ? jQuery(".rs-background-video-layer") : "firstvideo" == d.layer ? jQuery(".tp-revslider-slidesli").find(".tp-videolayer") : jQuery("#" + d.layer);
            switch (-1 != jQuery.inArray(d.action, ["toggleslider", "toggle_mute_video", "toggle_global_mute_video", "togglefullscreen"]) && a.data("togglelisteners", !0), d.action) {
                case "togglevideo":
                    jQuery.each(e, function (b, c) {
                        c = jQuery(c);
                        var d = c.data("videotoggledby");
                        void 0 == d && (d = new Array), d.push(a), c.data("videotoggledby", d)
                    });
                    break;
                case "togglelayer":
                    jQuery.each(e, function (b, c) {
                        c = jQuery(c);
                        var e = c.data("layertoggledby");
                        void 0 == e && (e = new Array), e.push(a), c.data("layertoggledby", e), c.data("triggered_startstatus", d.layerstatus)
                    });
                    break;
                case "toggle_mute_video":
                case "toggle_global_mute_video":
                    jQuery.each(e, function (b, c) {
                        c = jQuery(c);
                        var d = c.data("videomutetoggledby");
                        void 0 == d && (d = new Array), d.push(a), c.data("videomutetoggledby", d)
                    });
                    break;
                case "toggleslider":
                    void 0 == b.slidertoggledby && (b.slidertoggledby = new Array), b.slidertoggledby.push(a);
                    break;
                case "togglefullscreen":
                    void 0 == b.fullscreentoggledby && (b.fullscreentoggledby = new Array), b.fullscreentoggledby.push(a)
            }
            switch (a.on(d.event, function () {
                if ("click" === d.event && a.hasClass("tp-temporarydisabled")) return !1;
                var c = "backgroundvideo" == d.layer ? jQuery(".active-revslide .slotholder .rs-background-video-layer") : "firstvideo" == d.layer ? jQuery(".active-revslide .tp-videolayer").first() : jQuery("#" + d.layer);
                if ("stoplayer" == d.action || "togglelayer" == d.action || "startlayer" == d.action) {
                    if (c.length > 0) {
                        var e = c.data();
                        void 0 !== e.clicked_time_stamp && (new Date).getTime() - e.clicked_time_stamp > 150 && (clearTimeout(e.triggerdelayIn), clearTimeout(e.triggerdelayOut)), e.clicked_time_stamp = (new Date).getTime(), "startlayer" == d.action || "togglelayer" == d.action && "in" != c.data("animdirection") ? (e.animdirection = "in", e.triggerstate = "on", _R.toggleState(e.layertoggledby), _R.playAnimationFrame && (clearTimeout(e.triggerdelayIn), e.triggerdelayIn = setTimeout(function () {
                            _R.playAnimationFrame({
                                caption: c,
                                opt: b,
                                frame: "frame_0",
                                triggerdirection: "in",
                                triggerframein: "frame_0",
                                triggerframeout: "frame_999"
                            })
                        }, 1e3 * d.delay))) : ("stoplayer" == d.action || "togglelayer" == d.action && "out" != c.data("animdirection")) && (e.animdirection = "out", e.triggered = !0, e.triggerstate = "off", _R.stopVideo && _R.stopVideo(c, b), _R.unToggleState(e.layertoggledby), _R.endMoveCaption && (clearTimeout(e.triggerdelayOut), e.triggerdelayOut = setTimeout(function () {
                            _R.playAnimationFrame({
                                caption: c,
                                opt: b,
                                frame: "frame_999",
                                triggerdirection: "out",
                                triggerframein: "frame_0",
                                triggerframeout: "frame_999"
                            })
                        }, 1e3 * d.delay)))
                    }
                } else !_ISM || "playvideo" != d.action && "stopvideo" != d.action && "togglevideo" != d.action && "mutevideo" != d.action && "unmutevideo" != d.action && "toggle_mute_video" != d.action && "toggle_global_mute_video" != d.action ? (d.delay = "NaN" === d.delay || NaN === d.delay ? 0 : d.delay, punchgs.TweenLite.delayedCall(d.delay, function () {
                    actionSwitches(c, b, d, a)
                }, [c, b, d, a])) : actionSwitches(c, b, d, a)
            }), d.action) {
                case "togglelayer":
                case "startlayer":
                case "playlayer":
                case "stoplayer":
                    var e = jQuery("#" + d.layer),
                        f = e.data();
                    e.length > 0 && void 0 !== f && (void 0 !== f.frames && "bytrigger" != f.frames[0].delay || void 0 === f.frames && "bytrigger" !== f.start) && (f.triggerstate = "on")
            }
        })
    },
        actionSwitches = function (tnc, opt, a, _nc) {
            switch (a.action) {
                case "scrollbelow":
                    a.speed = void 0 !== a.speed ? a.speed : 400, a.ease = void 0 !== a.ease ? a.ease : punchgs.Power2.easeOut, _nc.addClass("tp-scrollbelowslider"), _nc.data("scrolloffset", a.offset), _nc.data("scrolldelay", a.delay), _nc.data("scrollspeed", a.speed), _nc.data("scrollease", a.ease);
                    var off = getOffContH(opt.fullScreenOffsetContainer) || 0,
                        aof = parseInt(a.offset, 0) || 0;
                    off = off - aof || 0, opt.scrollRoot = jQuery(document);
                    var sobj = {
                        _y: opt.scrollRoot.scrollTop()
                    };
                    punchgs.TweenLite.to(sobj, a.speed / 1e3, {
                        _y: opt.c.offset().top + jQuery(opt.li[0]).height() - off,
                        ease: a.ease,
                        onUpdate: function () {
                            opt.scrollRoot.scrollTop(sobj._y)
                        }
                    });
                    break;
                case "callback":
                    eval(a.callback);
                    break;
                case "jumptoslide":
                    switch (a.slide.toLowerCase()) {
                        case "+1":
                        case "next":
                            opt.sc_indicator = "arrow", _R.callingNewSlide(opt.c, 1);
                            break;
                        case "previous":
                        case "prev":
                        case "-1":
                            opt.sc_indicator = "arrow", _R.callingNewSlide(opt.c, -1);
                            break;
                        default:
                            var ts = jQuery.isNumeric(a.slide) ? parseInt(a.slide, 0) : a.slide;
                            _R.callingNewSlide(opt.c, ts)
                    }
                    break;
                case "simplelink":
                    window.open(a.url, a.target);
                    break;
                case "toggleslider":
                    opt.noloopanymore = 0, "playing" == opt.sliderstatus ? (opt.c.revpause(), opt.forcepause_viatoggle = !0, _R.unToggleState(opt.slidertoggledby)) : (opt.forcepause_viatoggle = !1, opt.c.revresume(), _R.toggleState(opt.slidertoggledby));
                    break;
                case "pauseslider":
                    opt.c.revpause(), _R.unToggleState(opt.slidertoggledby);
                    break;
                case "playslider":
                    opt.noloopanymore = 0, opt.c.revresume(), _R.toggleState(opt.slidertoggledby);
                    break;
                case "playvideo":
                    tnc.length > 0 && _R.playVideo(tnc, opt);
                    break;
                case "stopvideo":
                    tnc.length > 0 && _R.stopVideo && _R.stopVideo(tnc, opt);
                    break;
                case "togglevideo":
                    tnc.length > 0 && (_R.isVideoPlaying(tnc, opt) ? _R.stopVideo && _R.stopVideo(tnc, opt) : _R.playVideo(tnc, opt));
                    break;
                case "mutevideo":
                    tnc.length > 0 && _R.muteVideo(tnc, opt);
                    break;
                case "unmutevideo":
                    tnc.length > 0 && _R.unMuteVideo && _R.unMuteVideo(tnc, opt);
                    break;
                case "toggle_mute_video":
                    tnc.length > 0 && (_R.isVideoMuted(tnc, opt) ? _R.unMuteVideo(tnc, opt) : _R.muteVideo && _R.muteVideo(tnc, opt)), _nc.toggleClass("rs-toggle-content-active");
                    break;
                case "toggle_global_mute_video":
                    !0 === opt.globalmute ? (opt.globalmute = !1, void 0 != opt.playingvideos && opt.playingvideos.length > 0 && jQuery.each(opt.playingvideos, function (a, b) {
                        _R.unMuteVideo && _R.unMuteVideo(b, opt)
                    })) : (opt.globalmute = !0, void 0 != opt.playingvideos && opt.playingvideos.length > 0 && jQuery.each(opt.playingvideos, function (a, b) {
                        _R.muteVideo && _R.muteVideo(b, opt)
                    })), _nc.toggleClass("rs-toggle-content-active");
                    break;
                case "simulateclick":
                    tnc.length > 0 && tnc.click();
                    break;
                case "toggleclass":
                    tnc.length > 0 && (tnc.hasClass(a.classname) ? tnc.removeClass(a.classname) : tnc.addClass(a.classname));
                    break;
                case "gofullscreen":
                case "exitfullscreen":
                case "togglefullscreen":
                    if (jQuery(".rs-go-fullscreen").length > 0 && ("togglefullscreen" == a.action || "exitfullscreen" == a.action)) {
                        jQuery(".rs-go-fullscreen").removeClass("rs-go-fullscreen");
                        var gf = opt.c.closest(".forcefullwidth_wrapper_tp_banner").length > 0 ? opt.c.closest(".forcefullwidth_wrapper_tp_banner") : opt.c.closest(".rev_slider_wrapper");
                        opt.minHeight = opt.oldminheight, opt.infullscreenmode = !1, opt.c.revredraw(), jQuery(window).trigger("resize"), _R.unToggleState(opt.fullscreentoggledby)
                    } else if (0 == jQuery(".rs-go-fullscreen").length && ("togglefullscreen" == a.action || "gofullscreen" == a.action)) {
                        var gf = opt.c.closest(".forcefullwidth_wrapper_tp_banner").length > 0 ? opt.c.closest(".forcefullwidth_wrapper_tp_banner") : opt.c.closest(".rev_slider_wrapper");
                        gf.addClass("rs-go-fullscreen"), opt.oldminheight = opt.minHeight, opt.minHeight = jQuery(window).height(), opt.infullscreenmode = !0, opt.c.revredraw(), jQuery(window).trigger("resize"), _R.toggleState(opt.fullscreentoggledby)
                    }
                    break;
                default:
                    var obj = {};
                    obj.event = a, obj.layer = _nc, opt.c.trigger("layeraction", [obj])
            }
        },
        getOffContH = function (a) {
            if (void 0 == a) return 0;
            if (a.split(",").length > 1) {
                var b = a.split(","),
                    c = 0;
                return b && jQuery.each(b, function (a, b) {
                    jQuery(b).length > 0 && (c += jQuery(b).outerHeight(!0))
                }), c
            }
            return jQuery(a).height()
        }
}(jQuery);