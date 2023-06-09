/************************************************
 * REVOLUTION 5.4.2 EXTENSION - LAYER ANIMATION
 * @version: 3.6.3 (17.05.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 ************************************************/
! function (a) {
    "use strict";

    function w(a, b, c, d, e, f, g) {
        var h = a.find(b);
        h.css("borderWidth", f + "px"), h.css(c, 0 - f + "px"), h.css(d, "0px solid transparent"), h.css(e, g)
    }
    var b = jQuery.fn.revolution,
        e = (b.is_mobile(), b.is_android(), {
            alias: "LayerAnimation Min JS",
            name: "revolution.extensions.layeranimation.min.js",
            min_core: "5.4.5",
            version: "3.6.3"
        });
    jQuery.extend(!0, b, {
        updateMarkup: function (a, b) {
            var c = jQuery(a).data();
            if (void 0 !== c.start && !c.frames_added && void 0 === c.frames) {
                var d = new Array,
                    e = t(m(), c.transform_in, void 0, !1),
                    f = t(m(), c.transform_out, void 0, !1),
                    g = t(m(), c.transform_hover, void 0, !1);
                jQuery.isNumeric(c.end) && jQuery.isNumeric(c.start) && jQuery.isNumeric(e.speed) && (c.end = parseInt(c.end, 0) - (parseInt(c.start, 0) + parseFloat(e.speed, 0))), d.push({
                    frame: "0",
                    delay: c.start,
                    from: c.transform_in,
                    to: c.transform_idle,
                    split: c.splitin,
                    speed: e.speed,
                    ease: e.anim.ease,
                    mask: c.mask_in,
                    splitdelay: c.elementdelay
                }), d.push({
                    frame: "5",
                    delay: c.end,
                    to: c.transform_out,
                    split: c.splitout,
                    speed: f.speed,
                    ease: f.anim.ease,
                    mask: c.mask_out,
                    splitdelay: c.elementdelay
                }), c.transform_hover && d.push({
                    frame: "hover",
                    to: c.transform_hover,
                    style: c.style_hover,
                    speed: g.speed,
                    ease: g.anim.ease,
                    splitdelay: c.elementdelay
                }), c.frames = d
            }
            if (!c.frames_added) {
                if (c.inframeindex = 0, c.outframeindex = -1, c.hoverframeindex = -1, void 0 !== c.frames)
                    for (var h = 0; h < c.frames.length; h++) void 0 !== c.frames[h].sfx_effect && c.frames[h].sfx_effect.indexOf("block") >= 0 && (0 === h ? (c.frames[h].from = "o:0", c.frames[h].to = "o:1") : c.frames[h].to = "o:0", c._sfx = "block"), void 0 === c.frames[0].from && (c.frames[0].from = "o:inherit"), 0 === c.frames[0].delay && (c.frames[0].delay = 20), "hover" === c.frames[h].frame ? c.hoverframeindex = h : "frame_999" !== c.frames[h].frame && "frame_out" !== c.frames[h].frame && "last" !== c.frames[h].frame && "end" !== c.frames[h].frame || (c.outframeindex = h), void 0 !== c.frames[h].split && c.frames[h].split.match(/chars|words|lines/g) && (c.splittext = !0);
                c.outframeindex = -1 === c.outframeindex ? -1 === c.hoverframeindex ? c.frames.length - 1 : c.frames.length - 2 : c.outframeindex, c.frames_added = !0
            }
        },
        animcompleted: function (a, c) {
            var d = a.data(),
                e = d.videotype,
                f = d.autoplay,
                g = d.autoplayonlyfirsttime;
            void 0 != e && "none" != e && (1 == f || "true" == f || "on" == f || "1sttime" == f || g ? (("carousel" !== c.sliderType || "carousel" === c.sliderType && "on" === c.carousel.showLayersAllTime && a.closest("li").hasClass("active-revslide") || "carousel" === c.sliderType && "on" !== c.carousel.showLayersAllTime && a.closest("li").hasClass("active-revslide")) && b.playVideo(a, c), b.toggleState(a.data("videotoggledby")), (g || "1sttime" == f) && (d.autoplayonlyfirsttime = !1, d.autoplay = "off")) : ("no1sttime" == f && (d.datasetautoplay = "on"), b.unToggleState(a.data("videotoggledby"))))
        },
        handleStaticLayers: function (a, b) {
            var c = parseInt(a.data("startslide"), 0),
                d = parseInt(a.data("endslide"), 0);
            c < 0 && (c = 0), d < 0 && (d = b.realslideamount), 0 === c && d === b.realslideamount - 1 && (d = b.realslideamount + 1), a.data("startslide", c), a.data("endslide", d)
        },
        animateTheCaptions: function (a) {
            if ("stop" === b.compare_version(e).check) return !1;
            var c = a.opt,
                d = a.slide,
                f = a.recall,
                g = a.maintimeline,
                h = a.preset,
                i = a.startslideanimat,
                j = "carousel" === c.sliderType ? 0 : c.width / 2 - c.gridwidth[c.curWinRange] * c.bw / 2,
                k = 0,
                l = d.data("index");
            if (c.layers = c.layers || new Object, c.layers[l] = c.layers[l] || d.find(".tp-caption"), c.layers.static = c.layers.static || c.c.find(".tp-static-layers").find(".tp-caption"), void 0 === c.timelines && b.createTimelineStructure(c), c.conh = c.c.height(), c.conw = c.c.width(), c.ulw = c.ul.width(), c.ulh = c.ul.height(), c.debugMode) {
                d.addClass("indebugmode"), d.find(".helpgrid").remove(), c.c.find(".hglayerinfo").remove(), d.append('<div class="helpgrid" style="width:' + c.gridwidth[c.curWinRange] * c.bw + "px;height:" + c.gridheight[c.curWinRange] * c.bw + 'px;"></div>');
                var m = d.find(".helpgrid");
                m.append('<div class="hginfo">Zoom:' + Math.round(100 * c.bw) + "% &nbsp;&nbsp;&nbsp; Device Level:" + c.curWinRange + "&nbsp;&nbsp;&nbsp; Grid Preset:" + c.gridwidth[c.curWinRange] + "x" + c.gridheight[c.curWinRange] + "</div>"), c.c.append('<div class="hglayerinfo"></div>'), m.append('<div class="tlhg"></div>')
            }
            void 0 !== l && c.layers[l] && jQuery.each(c.layers[l], function (a, d) {
                var e = jQuery(this);
                b.updateMarkup(this, c), b.prepareSingleCaption({
                    caption: e,
                    opt: c,
                    offsetx: j,
                    offsety: k,
                    index: a,
                    recall: f,
                    preset: h
                }), h && 0 !== i || b.buildFullTimeLine({
                    caption: e,
                    opt: c,
                    offsetx: j,
                    offsety: k,
                    index: a,
                    recall: f,
                    preset: h,
                    regenerate: 0 === i
                }), f && "carousel" === c.sliderType && "on" === c.carousel.showLayersAllTime && b.animcompleted(e, c)
            }), c.layers.static && jQuery.each(c.layers.static, function (a, d) {
                var e = jQuery(this),
                    g = e.data();
                !0 !== g.hoveredstatus && !0 !== g.inhoveroutanimation ? (b.updateMarkup(this, c), b.prepareSingleCaption({
                    caption: e,
                    opt: c,
                    offsetx: j,
                    offsety: k,
                    index: a,
                    recall: f,
                    preset: h
                }), h && 0 !== i || !0 === g.veryfirstststic || (b.buildFullTimeLine({
                    caption: e,
                    opt: c,
                    offsetx: j,
                    offsety: k,
                    index: a,
                    recall: f,
                    preset: h,
                    regenerate: 0 === i
                }), g.veryfirstststic = !0), f && "carousel" === c.sliderType && "on" === c.carousel.showLayersAllTime && b.animcompleted(e, c)) : b.prepareSingleCaption({
                    caption: e,
                    opt: c,
                    offsetx: j,
                    offsety: k,
                    index: a,
                    recall: f,
                    preset: h
                })
            });
            var n = -1 === c.nextSlide || void 0 === c.nextSlide ? 0 : c.nextSlide;
            void 0 !== c.rowzones && (n = n > c.rowzones.length ? c.rowzones.length : n), void 0 != c.rowzones && c.rowzones.length > 0 && void 0 != c.rowzones[n] && n >= 0 && n <= c.rowzones.length && c.rowzones[n].length > 0 && b.setSize(c), h || void 0 !== i && (void 0 !== l && jQuery.each(c.timelines[l].layers, function (a, d) {
                var e = d.layer.data();
                "none" !== d.wrapper && void 0 !== d.wrapper || ("keep" == d.triggerstate && "on" === e.triggerstate ? b.playAnimationFrame({
                    caption: d.layer,
                    opt: c,
                    frame: "frame_0",
                    triggerdirection: "in",
                    triggerframein: "frame_0",
                    triggerframeout: "frame_999"
                }) : d.timeline.restart())
            }), c.timelines.staticlayers && jQuery.each(c.timelines.staticlayers.layers, function (a, d) {
                var e = d.layer.data(),
                    f = n >= d.firstslide && n <= d.lastslide,
                    g = n < d.firstslide || n > d.lastslide,
                    h = d.timeline.getLabelTime("slide_" + d.firstslide),
                    i = d.timeline.getLabelTime("slide_" + d.lastslide),
                    j = e.static_layer_timeline_time,
                    k = "in" === e.animdirection || "out" !== e.animdirection && void 0,
                    l = "bytrigger" === e.frames[0].delay,
                    o = (e.frames[e.frames.length - 1].delay, e.triggered_startstatus),
                    p = e.lasttriggerstate;
                !0 !== e.hoveredstatus && 1 != e.inhoveroutanimation && (void 0 !== j && k && ("keep" == p ? (b.playAnimationFrame({
                    caption: d.layer,
                    opt: c,
                    frame: "frame_0",
                    triggerdirection: "in",
                    triggerframein: "frame_0",
                    triggerframeout: "frame_999"
                }), e.triggeredtimeline.time(j)) : !0 !== e.hoveredstatus && d.timeline.time(j)), "reset" === p && "hidden" === o && (d.timeline.time(0), e.animdirection = "out"), f ? k ? n === d.lastslide && (d.timeline.play(i), e.animdirection = "in") : (l || "in" === e.animdirection || d.timeline.play(h), ("visible" == o && "keep" !== p || "keep" === p && !0 === k || "visible" == o && void 0 === k) && (d.timeline.play(h + .01), e.animdirection = "in")) : g && k && d.timeline.play("frame_999"))
            })), void 0 != g && setTimeout(function () {
                g.resume()
            }, 30)
        },
        prepareSingleCaption: function (a) {
            var c = a.caption,
                d = c.data(),
                e = a.opt,
                f = a.recall,
                g = a.recall,
                i = (a.preset, jQuery("body").hasClass("rtl"));
            if (d._pw = void 0 === d._pw ? c.closest(".tp-parallax-wrap") : d._pw, d._lw = void 0 === d._lw ? c.closest(".tp-loop-wrap") : d._lw, d._mw = void 0 === d._mw ? c.closest(".tp-mask-wrap") : d._mw, d._responsive = d.responsive || "on", d._respoffset = d.responsive_offset || "on", d._ba = d.basealign || "grid", d._gw = "grid" === d._ba ? e.width : e.ulw, d._gh = "grid" === d._ba ? e.height : e.ulh, d._lig = void 0 === d._lig ? c.hasClass("rev_layer_in_group") ? c.closest(".rev_group") : c.hasClass("rev_layer_in_column") ? c.closest(".rev_column_inner") : c.hasClass("rev_column_inner") ? c.closest(".rev_row") : "none" : d._lig, d._column = void 0 === d._column ? c.hasClass("rev_column_inner") ? c.closest(".rev_column") : "none" : d._column, d._row = void 0 === d._row ? c.hasClass("rev_column_inner") ? c.closest(".rev_row") : "none" : d._row, d._ingroup = void 0 === d._ingroup ? !(c.hasClass("rev_group") || !c.closest(".rev_group")) : d._ingroup, d._isgroup = void 0 === d._isgroup ? !!c.hasClass("rev_group") : d._isgroup, d._nctype = d.type || "none", d._cbgc_auto = void 0 === d._cbgc_auto ? "column" === d._nctype && d._pw.find(".rev_column_bg_auto_sized") : d._cbgc_auto, d._cbgc_man = void 0 === d._cbgc_man ? "column" === d._nctype && d._pw.find(".rev_column_bg_man_sized") : d._cbgc_man, d._slideid = d._slideid || c.closest(".tp-revslider-slidesli").data("index"), d._id = void 0 === d._id ? c.data("id") || c.attr("id") : d._id, d._slidelink = void 0 === d._slidelink ? void 0 !== c.hasClass("slidelink") && c.hasClass("slidelink") : d._slidelink, void 0 === d._li && (c.hasClass("tp-static-layer") ? (d._isstatic = !0, d._li = c.closest(".tp-static-layers"), d._slideid = "staticlayers") : d._li = c.closest(".tp-revslider-slidesli")), d._row = void 0 === d._row ? "column" === d._nctype && d._pw.closest(".rev_row") : d._row, void 0 === d._togglelisteners && c.find(".rs-toggled-content") ? (d._togglelisteners = !0, void 0 === d.actions && c.click(function () {
                b.swaptoggleState(c)
            })) : d._togglelisteners = !1, "fullscreen" == e.sliderLayout && (a.offsety = d._gh / 2 - e.gridheight[e.curWinRange] * e.bh / 2), ("on" == e.autoHeight || void 0 != e.minHeight && e.minHeight > 0) && (a.offsety = e.conh / 2 - e.gridheight[e.curWinRange] * e.bh / 2), a.offsety < 0 && (a.offsety = 0), e.debugMode) {
                c.closest("li").find(".helpgrid").css({
                    top: a.offsety + "px",
                    left: a.offsetx + "px"
                });
                var k = e.c.find(".hglayerinfo");
                c.on("hover, mouseenter", function () {
                    var a = "";
                    c.data() && jQuery.each(c.data(), function (b, c) {
                        "object" != typeof c && (a = a + '<span style="white-space:nowrap"><span style="color:#27ae60">' + b + ":</span>" + c + "</span>&nbsp; &nbsp; ")
                    }), k.html(a)
                })
            }
            if ("off" === (void 0 === d.visibility ? "oon" : v(d.visibility, e)[e.forcedWinRange] || v(d.visibility, e) || "ooon") || d._gw < e.hideCaptionAtLimit && "on" == d.captionhidden || d._gw < e.hideAllCaptionAtLimit ? d._pw.addClass("tp-hidden-caption") : d._pw.removeClass("tp-hidden-caption"), d.layertype = "html", a.offsetx < 0 && (a.offsetx = 0), void 0 != d.thumbimage && void 0 == d.videoposter && (d.videoposter = d.thumbimage), c.find("img").length > 0) {
                var n = c.find("img");
                d.layertype = "image", 0 == n.width() && n.css({
                    width: "auto"
                }), 0 == n.height() && n.css({
                    height: "auto"
                }), void 0 == n.data("ww") && n.width() > 0 && n.data("ww", n.width()), void 0 == n.data("hh") && n.height() > 0 && n.data("hh", n.height());
                var o = n.data("ww"),
                    p = n.data("hh"),
                    q = "slide" == d._ba ? e.ulw : e.gridwidth[e.curWinRange],
                    r = "slide" == d._ba ? e.ulh : e.gridheight[e.curWinRange];
                o = v(n.data("ww"), e)[e.curWinRange] || v(n.data("ww"), e) || "auto", p = v(n.data("hh"), e)[e.curWinRange] || v(n.data("hh"), e) || "auto";
                var s = "full" === o || "full-proportional" === o,
                    t = "full" === p || "full-proportional" === p;
                if ("full-proportional" === o) {
                    var u = n.data("owidth"),
                        x = n.data("oheight");
                    u / q < x / r ? (o = q, p = x * (q / u)) : (p = r, o = u * (r / x))
                } else o = s ? q : !jQuery.isNumeric(o) && o.indexOf("%") > 0 ? o : parseFloat(o), p = t ? r : !jQuery.isNumeric(p) && p.indexOf("%") > 0 ? p : parseFloat(p);
                o = void 0 === o ? 0 : o, p = void 0 === p ? 0 : p, "off" !== d._responsive ? ("grid" != d._ba && s ? jQuery.isNumeric(o) ? n.css({
                    width: o + "px"
                }) : n.css({
                    width: o
                }) : jQuery.isNumeric(o) ? n.css({
                    width: o * e.bw + "px"
                }) : n.css({
                    width: o
                }), "grid" != d._ba && t ? jQuery.isNumeric(p) ? n.css({
                    height: p + "px"
                }) : n.css({
                    height: p
                }) : jQuery.isNumeric(p) ? n.css({
                    height: p * e.bh + "px"
                }) : n.css({
                    height: p
                })) : n.css({
                    width: o,
                    height: p
                }), d._ingroup && "row" !== d._nctype && (void 0 !== o && !jQuery.isNumeric(o) && "string" === jQuery.type(o) && o.indexOf("%") > 0 && punchgs.TweenLite.set([d._lw, d._pw, d._mw], {
                    minWidth: o
                }), void 0 !== p && !jQuery.isNumeric(p) && "string" === jQuery.type(p) && p.indexOf("%") > 0 && punchgs.TweenLite.set([d._lw, d._pw, d._mw], {
                    minHeight: p
                }))
            }
            if ("slide" === d._ba) a.offsetx = 0, a.offsety = 0;
            else if (d._isstatic && void 0 !== e.carousel && void 0 !== e.carousel.horizontal_align && "carousel" === e.sliderType) {
                switch (e.carousel.horizontal_align) {
                    case "center":
                        a.offsetx = 0 + (e.ulw - e.gridwidth[e.curWinRange] * e.bw) / 2;
                        break;
                    case "left":
                        break;
                    case "right":
                        a.offsetx = e.ulw - e.gridwidth[e.curWinRange] * e.bw
                }
                a.offsetx = a.offsetx < 0 ? 0 : a.offsetx
            }
            var A = "html5" == d.audio ? "audio" : "video";
            if (c.hasClass("tp-videolayer") || c.hasClass("tp-audiolayer") || c.find("iframe").length > 0 || c.find(A).length > 0) {
                if (d.layertype = "video", b.manageVideoLayer && b.manageVideoLayer(c, e, f, g), !f && !g) {
                    d.videotype;
                    b.resetVideo && b.resetVideo(c, e, a.preset)
                }
                var D = d.aspectratio;
                void 0 != D && D.split(":").length > 1 && b.prepareCoveredVideo(D, e, c);
                var n = c.find("iframe") ? c.find("iframe") : n = c.find(A),
                    E = !c.find("iframe"),
                    F = c.hasClass("coverscreenvideo");
                n.css({
                    display: "block"
                }), void 0 == c.data("videowidth") && (c.data("videowidth", n.width()), c.data("videoheight", n.height()));
                var o = v(c.data("videowidth"), e)[e.curWinRange] || v(c.data("videowidth"), e) || "auto",
                    p = v(c.data("videoheight"), e)[e.curWinRange] || v(c.data("videoheight"), e) || "auto";
                o = "auto" === o || !jQuery.isNumeric(o) && o.indexOf("%") > 0 ? "auto" === o ? "auto" : "grid" === d._ba ? e.gridwidth[e.curWinRange] * e.bw : d._gw : parseFloat(o) * e.bw + "px", p = "auto" === p || !jQuery.isNumeric(p) && p.indexOf("%") > 0 ? "auto" === p ? "auto" : "grid" === d._ba ? e.gridheight[e.curWinRange] * e.bw : d._gh : parseFloat(p) * e.bh + "px", d.cssobj = void 0 === d.cssobj ? y(c, 0) : d.cssobj;
                var G = z(d.cssobj, e);
                if ("auto" == G.lineHeight && (G.lineHeight = G.fontSize + 4), c.hasClass("fullscreenvideo") || F) {
                    a.offsetx = 0, a.offsety = 0, c.data("x", 0), c.data("y", 0);
                    var H = d._gh;
                    "on" == e.autoHeight && (H = e.conh), c.css({
                        width: d._gw,
                        height: H
                    })
                } else punchgs.TweenLite.set(c, {
                    paddingTop: Math.round(G.paddingTop * e.bh) + "px",
                    paddingBottom: Math.round(G.paddingBottom * e.bh) + "px",
                    paddingLeft: Math.round(G.paddingLeft * e.bw) + "px",
                    paddingRight: Math.round(G.paddingRight * e.bw) + "px",
                    marginTop: G.marginTop * e.bh + "px",
                    marginBottom: G.marginBottom * e.bh + "px",
                    marginLeft: G.marginLeft * e.bw + "px",
                    marginRight: G.marginRight * e.bw + "px",
                    borderTopWidth: Math.round(G.borderTopWidth * e.bh) + "px",
                    borderBottomWidth: Math.round(G.borderBottomWidth * e.bh) + "px",
                    borderLeftWidth: Math.round(G.borderLeftWidth * e.bw) + "px",
                    borderRightWidth: Math.round(G.borderRightWidth * e.bw) + "px",
                    width: o,
                    height: p
                });
                (0 == E && !F || 1 != d.forcecover && !c.hasClass("fullscreenvideo") && !F) && (n.width(o), n.height(p)), d._ingroup && null !== d.videowidth && void 0 !== d.videowidth && !jQuery.isNumeric(d.videowidth) && d.videowidth.indexOf("%") > 0 && punchgs.TweenLite.set([d._lw, d._pw, d._mw], {
                    minWidth: d.videowidth
                })
            }
            B(c, e, 0, d._responsive), c.hasClass("tp-resizeme") && c.find("*").each(function () {
                B(jQuery(this), e, "rekursive", d._responsive)
            });
            var I = c.outerHeight(),
                J = c.css("backgroundColor");
            w(c, ".frontcorner", "left", "borderRight", "borderTopColor", I, J), w(c, ".frontcornertop", "left", "borderRight", "borderBottomColor", I, J), w(c, ".backcorner", "right", "borderLeft", "borderBottomColor", I, J), w(c, ".backcornertop", "right", "borderLeft", "borderTopColor", I, J), "on" == e.fullScreenAlignForce && (a.offsetx = 0, a.offsety = 0), "block" === d._sfx && void 0 === d._bmask && (d._bmask = jQuery('<div class="tp-blockmask"></div>'), d._mw.append(d._bmask)), d.arrobj = new Object, d.arrobj.voa = v(d.voffset, e)[e.curWinRange] || v(d.voffset, e)[0], d.arrobj.hoa = v(d.hoffset, e)[e.curWinRange] || v(d.hoffset, e)[0], d.arrobj.elx = v(d.x, e)[e.curWinRange] || v(d.x, e)[0], d.arrobj.ely = v(d.y, e)[e.curWinRange] || v(d.y, e)[0];
            var K = 0 == d.arrobj.voa.length ? 0 : d.arrobj.voa,
                L = 0 == d.arrobj.hoa.length ? 0 : d.arrobj.hoa,
                M = 0 == d.arrobj.elx.length ? 0 : d.arrobj.elx,
                N = 0 == d.arrobj.ely.length ? 0 : d.arrobj.ely;
            d.eow = c.outerWidth(!0), d.eoh = c.outerHeight(!0), 0 == d.eow && 0 == d.eoh && (d.eow = e.ulw, d.eoh = e.ulh);
            var O = "off" !== d._respoffset ? parseInt(K, 0) * e.bw : parseInt(K, 0),
                P = "off" !== d._respoffset ? parseInt(L, 0) * e.bw : parseInt(L, 0),
                Q = "grid" === d._ba ? e.gridwidth[e.curWinRange] * e.bw : d._gw,
                R = "grid" === d._ba ? e.gridheight[e.curWinRange] * e.bw : d._gh;
            "on" == e.fullScreenAlignForce && (Q = e.ulw, R = e.ulh), "none" !== d._lig && void 0 != d._lig && (Q = d._lig.width(), R = d._lig.height(), a.offsetx = 0, a.offsety = 0), M = "center" === M || "middle" === M ? Q / 2 - d.eow / 2 + P : "left" === M ? P : "right" === M ? Q - d.eow - P : "off" !== d._respoffset ? M * e.bw : M, N = "center" == N || "middle" == N ? R / 2 - d.eoh / 2 + O : "top" == N ? O : "bottom" == N ? R - d.eoh - O : "off" !== d._respoffset ? N * e.bw : N, i && !d._slidelink && (M += d.eow), d._slidelink && (M = 0), d.calcx = parseInt(M, 0) + a.offsetx, d.calcy = parseInt(N, 0) + a.offsety;
            var S = c.css("z-Index");
            if ("row" !== d._nctype && "column" !== d._nctype) punchgs.TweenLite.set(d._pw, {
                zIndex: S,
                top: d.calcy,
                left: d.calcx,
                overwrite: "auto"
            });
            else if ("row" !== d._nctype) punchgs.TweenLite.set(d._pw, {
                zIndex: S,
                width: d.columnwidth,
                top: 0,
                left: 0,
                overwrite: "auto"
            });
            else if ("row" === d._nctype) {
                var T = "grid" === d._ba ? Q + "px" : "100%";
                punchgs.TweenLite.set(d._pw, {
                    zIndex: S,
                    width: T,
                    top: 0,
                    left: a.offsetx,
                    overwrite: "auto"
                })
            }
            if (void 0 !== d.blendmode && punchgs.TweenLite.set(d._pw, {
                mixBlendMode: d.blendmode
            }), "row" === d._nctype && (d.columnbreak <= e.curWinRange ? c.addClass("rev_break_columns") : c.removeClass("rev_break_columns")), "on" == d.loopanimation && punchgs.TweenLite.set(d._lw, {
                minWidth: d.eow,
                minHeight: d.eoh
            }), "column" === d._nctype) {
                var U = void 0 !== c[0]._gsTransform ? c[0]._gsTransform.y : 0,
                    V = parseInt(d._column[0].style.paddingTop, 0);
                punchgs.TweenLite.set(c, {
                    y: 0
                }), punchgs.TweenLite.set(d._cbgc_man, {
                    y: parseInt(V + d._column.offset().top - c.offset().top, 0)
                }), punchgs.TweenLite.set(c, {
                    y: U
                })
            }
            d._ingroup && "row" !== d._nctype && (void 0 !== d._groupw && !jQuery.isNumeric(d._groupw) && d._groupw.indexOf("%") > 0 && punchgs.TweenLite.set([d._lw, d._pw, d._mw], {
                minWidth: d._groupw
            }), void 0 !== d._grouph && !jQuery.isNumeric(d._grouph) && d._grouph.indexOf("%") > 0 && punchgs.TweenLite.set([d._lw, d._pw, d._mw], {
                minHeight: d._grouph
            }))
        },
        createTimelineStructure: function (a) {
            function b(a, b, c, d) {
                var f, e = new punchgs.TimelineLite({
                    paused: !0
                });
                c = c || new Object, c[a.attr("id")] = c[a.attr("id")] || new Object, "staticlayers" === d && (c[a.attr("id")].firstslide = a.data("startslide"), c[a.attr("id")].lastslide = a.data("endslide")), a.data("slideid", d), c[a.attr("id")].defclasses = f = a[0].className, c[a.attr("id")].wrapper = f.indexOf("rev_layer_in_column") >= 0 ? a.closest(".rev_column_inner") : f.indexOf("rev_column_inner") >= 0 ? a.closest(".rev_row") : f.indexOf("rev_layer_in_group") >= 0 ? a.closest(".rev_group") : "none", c[a.attr("id")].timeline = e, c[a.attr("id")].layer = a, c[a.attr("id")].triggerstate = a.data("lasttriggerstate"), c[a.attr("id")].dchildren = f.indexOf("rev_row") >= 0 ? a[0].getElementsByClassName("rev_column_inner") : f.indexOf("rev_column_inner") >= 0 ? a[0].getElementsByClassName("tp-caption") : f.indexOf("rev_group") >= 0 ? a[0].getElementsByClassName("rev_layer_in_group") : "none", a.data("timeline", e)
            }
            a.timelines = a.timelines || new Object, a.c.find(".tp-revslider-slidesli, .tp-static-layers").each(function () {
                var c = jQuery(this),
                    d = c.data("index");
                a.timelines[d] = a.timelines[d] || {}, a.timelines[d].layers = a.timelines[d].layers || new Object, c.find(".tp-caption").each(function (c) {
                    b(jQuery(this), a, a.timelines[d].layers, d)
                })
            })
        },
        buildFullTimeLine: function (a) {
            var g, h, c = a.caption,
                d = c.data(),
                e = a.opt,
                f = {},
                j = q();
            if (g = e.timelines[d._slideid].layers[d._id], !g.generated || !0 === a.regenerate) {
                if (h = g.timeline, g.generated = !0, void 0 !== d.current_timeline && !0 !== a.regenerate ? (d.current_timeline_pause = d.current_timeline.paused(), d.current_timeline_time = d.current_timeline.time(), d.current_is_nc_timeline = h === d.current_timeline, d.static_layer_timeline_time = d.current_timeline_time) : (d.static_layer_timeline_time = d.current_timeline_time, d.current_timeline_time = 0, d.current_timeline && d.current_timeline.clear()), h.clear(), f.svg = void 0 != d.svg_src && c.find("svg"), f.svg && (d.idlesvg = o(d.svg_idle, n()), punchgs.TweenLite.set(f.svg, d.idlesvg.anim)), -1 !== d.hoverframeindex && void 0 !== d.hoverframeindex && !c.hasClass("rs-hover-ready")) {
                    if (c.addClass("rs-hover-ready"), d.hovertimelines = {}, d.hoveranim = t(j, d.frames[d.hoverframeindex].to), d.hoveranim = x(d.hoveranim, d.frames[d.hoverframeindex].style), f.svg) {
                        var l = o(d.svg_hover, n());
                        void 0 != d.hoveranim.anim.color && (l.anim.fill = d.hoveranim.anim.color, d.idlesvg.anim.css.fill = f.svg.css("fill")), d.hoversvg = l
                    }
                    c.hover(function (a) {
                        var b = {
                            caption: jQuery(a.currentTarget),
                            opt: e,
                            firstframe: "frame_0",
                            lastframe: "frame_999"
                        },
                            d = (i(b), b.caption),
                            g = d.data(),
                            h = g.frames[g.hoverframeindex];
                        g.forcehover = h.force, g.hovertimelines.item = punchgs.TweenLite.to(d, h.speed / 1e3, g.hoveranim.anim), (g.hoverzIndex || g.hoveranim.anim && g.hoveranim.anim.zIndex) && (g.basiczindex = void 0 === g.basiczindex ? g.cssobj.zIndex : g.basiczindex, g.hoverzIndex = void 0 === g.hoverzIndex ? g.hoveranim.anim.zIndex : g.hoverzIndex, g.inhoverinanimation = !0, 0 === h.speed && (g.inhoverinanimation = !1), g.hovertimelines.pwhoveranim = punchgs.TweenLite.to(g._pw, h.speed / 1e3, {
                            overwrite: "auto",
                            zIndex: g.hoverzIndex
                        }), g.hovertimelines.pwhoveranim.eventCallback("onComplete", function (a) {
                            a.inhoverinanimation = !1
                        }, [g])), f.svg && (g.hovertimelines.svghoveranim = punchgs.TweenLite.to([f.svg, f.svg.find("path")], h.speed / 1e3, g.hoversvg.anim)), g.hoveredstatus = !0
                    }, function (a) {
                        var b = {
                            caption: jQuery(a.currentTarget),
                            opt: e,
                            firstframe: "frame_0",
                            lastframe: "frame_999"
                        },
                            d = (i(b), b.caption),
                            g = d.data(),
                            h = g.frames[g.hoverframeindex];
                        g.hoveredstatus = !1, g.inhoveroutanimation = !0, g.hovertimelines.item.pause(), g.hovertimelines.item = punchgs.TweenLite.to(d, h.speed / 1e3, jQuery.extend(!0, {}, g._gsTransformTo)), 0 == h.speed && (g.inhoveroutanimation = !1), g.hovertimelines.item.eventCallback("onComplete", function (a) {
                            a.inhoveroutanimation = !1
                        }, [g]), void 0 !== g.hovertimelines.pwhoveranim && (g.hovertimelines.pwhoveranim = punchgs.TweenLite.to(g._pw, h.speed / 1e3, {
                            overwrite: "auto",
                            zIndex: g.basiczindex
                        })), f.svg && punchgs.TweenLite.to([f.svg, f.svg.find("path")], h.speed / 1e3, g.idlesvg.anim)
                    })
                }
                for (var m = 0; m < d.frames.length; m++)
                    if (m !== d.hoverframeindex) {
                        var p = m === d.inframeindex ? "frame_0" : m === d.outframeindex || "frame_999" === d.frames[m].frame ? "frame_999" : "frame_" + m;
                        d.frames[m].framename = p, g[p] = {}, g[p].timeline = new punchgs.TimelineLite({
                            align: "normal"
                        });
                        var r = d.frames[m].delay,
                            u = (d.triggered_startstatus, void 0 !== r ? jQuery.inArray(r, ["slideenter", "bytrigger", "wait"]) >= 0 ? r : parseInt(r, 0) / 1e3 : "wait");
                        void 0 !== g.firstslide && "frame_0" === p && (h.addLabel("slide_" + g.firstslide + "_pause", 0), h.addPause("slide_" + g.firstslide + "_pause"), h.addLabel("slide_" + g.firstslide, "+=0.005")), void 0 !== g.lastslide && "frame_999" === p && (h.addLabel("slide_" + g.lastslide + "_pause", "+=0.01"), h.addPause("slide_" + g.lastslide + "_pause"), h.addLabel("slide_" + g.lastslide, "+=0.005")), jQuery.isNumeric(u) ? h.addLabel(p, "+=" + u) : (h.addLabel("pause_" + m, "+=0.01"), h.addPause("pause_" + m), h.addLabel(p, "+=0.01")), h = b.createFrameOnTimeline({
                            caption: a.caption,
                            timeline: h,
                            label: p,
                            frameindex: m,
                            opt: e
                        })
                    }
                a.regenerate || (d.current_is_nc_timeline && (d.current_timeline = h), d.current_timeline_pause ? h.pause(d.current_timeline_time) : h.time(d.current_timeline_time))
            }
        },
        createFrameOnTimeline: function (a) {
            var b = a.caption,
                c = b.data(),
                d = a.label,
                e = a.timeline,
                i = a.frameindex,
                j = a.opt,
                n = b,
                o = {},
                q = j.timelines[c._slideid].layers[c._id],
                r = c.frames.length - 1,
                v = c.frames[i].split,
                w = c.frames[i].split_direction,
                x = c.frames[i].sfx_effect,
                y = !1;
            if (w = void 0 === w ? "forward" : w, -1 !== c.hoverframeindex && c.hoverframeindex == r && (r -= 1), o.content = new punchgs.TimelineLite({
                align: "normal"
            }), o.mask = new punchgs.TimelineLite({
                align: "normal"
            }), void 0 === e.vars.id && (e.vars.id = Math.round(1e5 * Math.random())), "column" === c._nctype && (e.add(punchgs.TweenLite.set(c._cbgc_man, {
                visibility: "visible"
            }), d), e.add(punchgs.TweenLite.set(c._cbgc_auto, {
                visibility: "hidden"
            }), d)), c.splittext && 0 === i) {
                void 0 !== c.mySplitText && c.mySplitText.revert();
                var z = b.find("a").length > 0 ? b.find("a") : b;
                c.mySplitText = new punchgs.SplitText(z, {
                    type: "chars,words,lines",
                    charsClass: "tp-splitted tp-charsplit",
                    wordsClass: "tp-splitted tp-wordsplit",
                    linesClass: "tp-splitted tp-linesplit"
                }), b.addClass("splitted")
            }
            void 0 !== c.mySplitText && v && v.match(/chars|words|lines/g) && (n = c.mySplitText[v], y = !0);
            var D, E, A = i !== c.outframeindex ? t(m(), c.frames[i].to, void 0, y, n.length - 1) : void 0 !== c.frames[i].to && null === c.frames[i].to.match(/auto:auto/g) ? t(p(), c.frames[i].to, 1 == j.sdir, y, n.length - 1) : t(p(), c.frames[c.inframeindex].from, 0 == j.sdir, y, n.length - 1),
                B = void 0 !== c.frames[i].from ? t(A, c.frames[c.inframeindex].from, 1 == j.sdir, y, n.length - 1) : void 0,
                C = c.frames[i].splitdelay;
            if (0 !== i || a.fromcurrentstate ? E = u(c.frames[i].mask) : D = u(c.frames[i].mask), A.anim.ease = void 0 === c.frames[i].ease ? punchgs.Power1.easeInOut : c.frames[i].ease, void 0 !== B && (B.anim.ease = void 0 === c.frames[i].ease ? punchgs.Power1.easeInOut : c.frames[i].ease, B.speed = void 0 === c.frames[i].speed ? B.speed : c.frames[i].speed, B.anim.x = B.anim.x * j.bw || s(B.anim.x, j, c.eow, c.eoh, c.calcy, c.calcx, "horizontal"), B.anim.y = B.anim.y * j.bw || s(B.anim.y, j, c.eow, c.eoh, c.calcy, c.calcx, "vertical")), void 0 !== A && (A.anim.ease = void 0 === c.frames[i].ease ? punchgs.Power1.easeInOut : c.frames[i].ease, A.speed = void 0 === c.frames[i].speed ? A.speed : c.frames[i].speed, A.anim.x = A.anim.x * j.bw || s(A.anim.x, j, c.eow, c.eoh, c.calcy, c.calcx, "horizontal"), A.anim.y = A.anim.y * j.bw || s(A.anim.y, j, c.eow, c.eoh, c.calcy, c.calcx, "vertical")), b.data("iframes") && e.add(punchgs.TweenLite.set(b.find("iframe"), {
                autoAlpha: 1
            }), d + "+=0.001"), i === c.outframeindex && (c.frames[i].to && c.frames[i].to.match(/auto:auto/g), A.speed = void 0 === c.frames[i].speed || "inherit" === c.frames[i].speed ? c.frames[c.inframeindex].speed : c.frames[i].speed, A.anim.ease = void 0 === c.frames[i].ease || "inherit" === c.frames[i].ease ? c.frames[c.inframeindex].ease : c.frames[i].ease, A.anim.overwrite = "auto"), 0 !== i || a.fromcurrentstate) 0 === i && a.fromcurrentstate && (A.speed = B.speed);
            else {
                if (n != b) {
                    var F = jQuery.extend({}, A.anim, !0);
                    e.add(punchgs.TweenLite.set(b, A.anim), d), A = m(), A.ease = F.ease, void 0 !== F.filter && (A.anim.filter = F.filter), void 0 !== F["-webkit-filter"] && (A.anim["-webkit-filter"] = F["-webkit-filter"])
                }
                B.anim.visibility = "hidden", B.anim.immediateRender = !0, A.anim.visibility = "visible"
            }
            a.fromcurrentstate && (A.anim.immediateRender = !0);
            var G = -1;
            if (0 === i && !a.fromcurrentstate && void 0 !== c._bmask && void 0 !== x && x.indexOf("block") >= 0 || i === c.outframeindex && !a.fromcurrentstate && void 0 !== c._bmask && void 0 !== x && x.indexOf("block") >= 0) {
                var H = 0 === i ? B.speed / 1e3 / 2 : A.speed / 1e3 / 2,
                    I = [{
                        scaleY: 1,
                        scaleX: 0,
                        transformOrigin: "0% 50%"
                    }, {
                        scaleY: 1,
                        scaleX: 1,
                        ease: A.anim.ease
                    }],
                    J = {
                        scaleY: 1,
                        scaleX: 0,
                        transformOrigin: "100% 50%",
                        ease: A.anim.ease
                    };
                switch (G = void 0 === C ? H : C + H, x) {
                    case "blocktoleft":
                    case "blockfromright":
                        I[0].transformOrigin = "100% 50%", J.transformOrigin = "0% 50%";
                        break;
                    case "blockfromtop":
                    case "blocktobottom":
                        I = [{
                            scaleX: 1,
                            scaleY: 0,
                            transformOrigin: "50% 0%"
                        }, {
                            scaleX: 1,
                            scaleY: 1,
                            ease: A.anim.ease
                        }], J = {
                            scaleX: 1,
                            scaleY: 0,
                            transformOrigin: "50% 100%",
                            ease: A.anim.ease
                        };
                        break;
                    case "blocktotop":
                    case "blockfrombottom":
                        I = [{
                            scaleX: 1,
                            scaleY: 0,
                            transformOrigin: "50% 100%"
                        }, {
                            scaleX: 1,
                            scaleY: 1,
                            ease: A.anim.ease
                        }], J = {
                            scaleX: 1,
                            scaleY: 0,
                            transformOrigin: "50% 0%",
                            ease: A.anim.ease
                        }
                }
                I[0].background = c.frames[i].sfxcolor, e.add(o.mask.fromTo(c._bmask, H, I[0], I[1], C), d), e.add(o.mask.to(c._bmask, H, J, G), d)
            }
            if (y) var K = k(n.length - 1, w);
            if (0 !== i || a.fromcurrentstate)
                if ("block" === c._sfx_out && i === c.outframeindex) e.add(o.content.staggerTo(n, .001, {
                    autoAlpha: 0,
                    delay: G
                }), d), e.add(o.content.staggerTo(n, A.speed / 1e3 / 2 - .001, {
                    x: 0,
                    delay: G
                }), d + "+=0.001");
                else if (y && void 0 !== K) {
                    var L = {
                        to: l(A.anim)
                    };
                    for (var M in n) {
                        var O = jQuery.extend({}, A.anim);
                        for (var P in L.to) O[P] = parseInt(L.to[P].values[L.to[P].index], 0), L.to[P].index = L.to[P].index < L.to[P].len ? L.to[P].index + 1 : 0;
                        void 0 !== c.frames[i].color && (O.color = c.frames[i].color), void 0 !== c.frames[i].bgcolor && (O.backgroundColor = c.frames[i].bgcolor), e.add(o.content.to(n[K[M]], A.speed / 1e3, O, C * M), d)
                    }
                } else void 0 !== c.frames[i].color && (A.anim.color = c.frames[i].color), void 0 !== c.frames[i].bgcolor && (A.anim.backgroundColor = c.frames[i].bgcolor), e.add(o.content.staggerTo(n, A.speed / 1e3, A.anim, C), d);
            else if ("block" === c._sfx_in) e.add(o.content.staggerFromTo(n, .05, {
                x: 0,
                y: 0,
                autoAlpha: 0
            }, {
                    x: 0,
                    y: 0,
                    autoAlpha: 1,
                    delay: G
                }), d);
            else if (y && void 0 !== K) {
                var L = {
                    from: l(B.anim),
                    to: l(A.anim)
                };
                for (var M in n) {
                    var N = jQuery.extend({}, B.anim),
                        O = jQuery.extend({}, A.anim);
                    for (var P in L.from) N[P] = parseInt(L.from[P].values[L.from[P].index], 0), L.from[P].index = L.from[P].index < L.from[P].len ? L.from[P].index + 1 : 0;
                    O.ease = N.ease, void 0 !== c.frames[i].color && (N.color = c.frames[i].color, O.color = c.cssobj.styleProps.color), void 0 !== c.frames[i].bgcolor && (N.backgroundColor = c.frames[i].bgcolor, O.backgroundColor = c.cssobj.styleProps["background-color"]), e.add(o.content.fromTo(n[K[M]], B.speed / 1e3, N, O, C * M), d)
                }
            } else void 0 !== c.frames[i].color && (B.anim.color = c.frames[i].color, A.anim.color = c.cssobj.styleProps.color), void 0 !== c.frames[i].bgcolor && (B.anim.backgroundColor = c.frames[i].bgcolor, A.anim.backgroundColor = c.cssobj.styleProps["background-color"]), e.add(o.content.staggerFromTo(n, B.speed / 1e3, B.anim, A.anim, C), d);
            return void 0 === E || !1 === E || 0 === i && a.ignorefirstframe || (E.anim.ease = void 0 === E.anim.ease || "inherit" === E.anim.ease ? c.frames[0].ease : E.anim.ease, E.anim.overflow = "hidden", E.anim.x = E.anim.x * j.bw || s(E.anim.x, j, c.eow, c.eoh, c.calcy, c.calcx, "horizontal"), E.anim.y = E.anim.y * j.bw || s(E.anim.y, j, c.eow, c.eoh, c.calcy, c.calcx, "vertical")), 0 === i && D && !1 !== D && !a.fromcurrentstate || 0 === i && a.ignorefirstframe ? (E = new Object, E.anim = new Object, E.anim.overwrite = "auto", E.anim.ease = A.anim.ease, E.anim.x = E.anim.y = 0, D && !1 !== D && (D.anim.x = D.anim.x * j.bw || s(D.anim.x, j, c.eow, c.eoh, c.calcy, c.calcx, "horizontal"), D.anim.y = D.anim.y * j.bw || s(D.anim.y, j, c.eow, c.eoh, c.calcy, c.calcx, "vertical"), D.anim.overflow = "hidden")) : 0 === i && e.add(o.mask.set(c._mw, {
                overflow: "visible"
            }), d), void 0 !== D && void 0 !== E && !1 !== D && !1 !== E ? e.add(o.mask.fromTo(c._mw, B.speed / 1e3, D.anim, E.anim, C), d) : void 0 !== E && !1 !== E && e.add(o.mask.to(c._mw, A.speed / 1e3, E.anim, C), d), e.addLabel(d + "_end"), c._gsTransformTo && i === r && c.hoveredstatus && (c.hovertimelines.item = punchgs.TweenLite.to(b, 0, c._gsTransformTo)), c._gsTransformTo = !1, o.content.eventCallback("onStart", f, [i, q, c._pw, c, e, A.anim, b, a.updateStaticTimeline, j]), o.content.eventCallback("onUpdate", g, [d, c._id, c._pw, c, e, i, jQuery.extend(!0, {}, A.anim), a.updateStaticTimeline, b, j]), o.content.eventCallback("onComplete", h, [i, c.frames.length, r, c._pw, c, e, a.updateStaticTimeline, b, j]), e
        },
        endMoveCaption: function (a) {
            a.firstframe = "frame_0", a.lastframe = "frame_999";
            var c = i(a),
                d = a.caption.data();
            if (void 0 !== a.frame ? c.timeline.play(a.frame) : (!c.static || a.currentslide >= c.removeonslide || a.currentslide < c.showonslide) && (c.outnow = new punchgs.TimelineLite, c.timeline.pause(), !0 === d.visibleelement && b.createFrameOnTimeline({
                caption: a.caption,
                timeline: c.outnow,
                label: "outnow",
                frameindex: a.caption.data("outframeindex"),
                opt: a.opt,
                fromcurrentstate: !0
            }).play()), a.checkchildrens && c.timeline_obj && c.timeline_obj.dchildren && "none" !== c.timeline_obj.dchildren && c.timeline_obj.dchildren.length > 0)
                for (var e = 0; e < c.timeline_obj.dchildren.length; e++) b.endMoveCaption({
                    caption: jQuery(c.timeline_obj.dchildren[e]),
                    opt: a.opt
                })
        },
        playAnimationFrame: function (a) {
            a.firstframe = a.triggerframein, a.lastframe = a.triggerframeout;
            var e, c = i(a),
                d = a.caption.data(),
                f = 0;
            for (var g in d.frames) d.frames[g].framename === a.frame && (e = f), f++;
            void 0 !== d.triggeredtimeline && d.triggeredtimeline.pause(), d.triggeredtimeline = new punchgs.TimelineLite, c.timeline.pause();
            var h = !0 === d.visibleelement;
            d.triggeredtimeline = b.createFrameOnTimeline({
                caption: a.caption,
                timeline: d.triggeredtimeline,
                label: "triggered",
                frameindex: e,
                updateStaticTimeline: !0,
                opt: a.opt,
                ignorefirstframe: !0,
                fromcurrentstate: h
            }).play()
        },
        removeTheCaptions: function (a, c) {
            if ("stop" === b.compare_version(e).check) return !1;
            var f = a.data("index"),
                g = new Array;
            c.layers[f] && jQuery.each(c.layers[f], function (a, b) {
                g.push(b)
            });
            var h = b.currentSlideIndex(c);
            g && jQuery.each(g, function (a) {
                var d = jQuery(this);
                "carousel" === c.sliderType && "on" === c.carousel.showLayersAllTime ? (clearTimeout(d.data("videoplaywait")), b.stopVideo && b.stopVideo(d, c), b.removeMediaFromList && b.removeMediaFromList(d, c), c.lastplayedvideos = []) : (E(d), clearTimeout(d.data("videoplaywait")), b.endMoveCaption({
                    caption: d,
                    opt: c,
                    currentslide: h
                }), b.removeMediaFromList && b.removeMediaFromList(d, c), c.lastplayedvideos = [])
            })
        }
    });
    var f = function (a, c, d, e, f, g, h, i, j) {
        var k = {};
        if (k.layer = h, k.eventtype = 0 === a ? "enterstage" : a === e.outframeindex ? "leavestage" : "framestarted", k.layertype = h.data("layertype"), e.active = !0, k.frame_index = a, k.layersettings = h.data(), j.c.trigger("revolution.layeraction", [k]), "on" == e.loopanimation && D(e._lw, j.bw), "enterstage" === k.eventtype && (e.animdirection = "in", e.visibleelement = !0, b.toggleState(e.layertoggledby)), "none" !== c.dchildren && void 0 !== c.dchildren && c.dchildren.length > 0)
            if (0 === a)
                for (var l = 0; l < c.dchildren.length; l++) jQuery(c.dchildren[l]).data("timeline").play(0);
            else if (a === e.outframeindex)
                for (var l = 0; l < c.dchildren.length; l++) b.endMoveCaption({
                    caption: jQuery(c.dchildren[l]),
                    opt: j,
                    checkchildrens: !0
                });
        punchgs.TweenLite.set(d, {
            visibility: "visible"
        }), e.current_frame = a, e.current_timeline = f, e.current_timeline_time = f.time(), i && (e.static_layer_timeline_time = e.current_timeline_time), e.last_frame_started = a
    },
        g = function (a, b, c, d, e, f, g, h, i, j) {
            "column" === d._nctype && C(i, j), punchgs.TweenLite.set(c, {
                visibility: "visible"
            }), d.current_frame = f, d.current_timeline = e, d.current_timeline_time = e.time(), h && (d.static_layer_timeline_time = d.current_timeline_time), void 0 !== d.hoveranim && !1 === d._gsTransformTo && (d._gsTransformTo = g, d._gsTransformTo && d._gsTransformTo.startAt && delete d._gsTransformTo.startAt, void 0 === d.cssobj.styleProps.css ? d._gsTransformTo = jQuery.extend(!0, {}, d.cssobj.styleProps, d._gsTransformTo) : d._gsTransformTo = jQuery.extend(!0, {}, d.cssobj.styleProps.css, d._gsTransformTo)), d.visibleelement = !0
        },
        h = function (a, c, d, e, f, g, h, i, j) {
            var k = {};
            k.layer = i, k.eventtype = 0 === a ? "enteredstage" : a === c - 1 || a === d ? "leftstage" : "frameended", k.layertype = i.data("layertype"), k.layersettings = i.data(), j.c.trigger("revolution.layeraction", [k]), "leftstage" !== k.eventtype && b.animcompleted(i, j), "leftstage" === k.eventtype && b.stopVideo && b.stopVideo(i, j), "column" === f._nctype && (punchgs.TweenLite.to(f._cbgc_man, .01, {
                visibility: "hidden"
            }), punchgs.TweenLite.to(f._cbgc_auto, .01, {
                visibility: "visible"
            })), "leftstage" === k.eventtype && (f.active = !1, punchgs.TweenLite.set(e, {
                visibility: "hidden",
                overwrite: "auto"
            }), f.animdirection = "out", f.visibleelement = !1, b.unToggleState(f.layertoggledby)), f.current_frame = a, f.current_timeline = g, f.current_timeline_time = g.time(), h && (f.static_layer_timeline_time = f.current_timeline_time)
        },
        i = function (a) {
            var b = {};
            return a.firstframe = void 0 === a.firstframe ? "frame_0" : a.firstframe, a.lastframe = void 0 === a.lastframe ? "frame_999" : a.lastframe, b.id = a.caption.data("id") || a.caption.attr("id"), b.slideid = a.caption.data("slideid") || a.caption.closest(".tp-revslider-slidesli").data("index"), b.timeline_obj = a.opt.timelines[b.slideid].layers[b.id], b.timeline = b.timeline_obj.timeline, b.ffs = b.timeline.getLabelTime(a.firstframe), b.ffe = b.timeline.getLabelTime(a.firstframe + "_end"), b.lfs = b.timeline.getLabelTime(a.lastframe), b.lfe = b.timeline.getLabelTime(a.lastframe + "_end"), b.ct = b.timeline.time(), b.static = void 0 != b.timeline_obj.firstslide || void 0 != b.timeline_obj.lastslide, b.static && (b.showonslide = b.timeline_obj.firstslide, b.removeonslide = b.timeline_obj.lastslide), b
        },
        j = function (a) {
            for (var c, d, b = a.length; 0 !== b;) d = Math.floor(Math.random() * b), b -= 1, c = a[b], a[b] = a[d], a[d] = c;
            return a
        },
        k = function (a, b) {
            var c = new Array;
            switch (b) {
                case "forward":
                case "random":
                    for (var d = 0; d <= a; d++) c.push(d);
                    "random" === b && (c = j(c));
                    break;
                case "backward":
                    for (var d = 0; d <= a; d++) c.push(a - d);
                    break;
                case "middletoedge":
                    var e = Math.ceil(a / 2),
                        f = e - 1,
                        g = e + 1;
                    c.push(e);
                    for (var d = 0; d < e; d++) f >= 0 && c.push(f), g <= a && c.push(g), f-- , g++;
                    break;
                case "edgetomiddle":
                    for (var f = a, g = 0, d = 0; d <= Math.floor(a / 2); d++) c.push(f), g < f && c.push(g), f-- , g++
            }
            return c
        },
        l = function (a) {
            var b = {};
            for (var c in a) "string" == typeof a[c] && a[c].indexOf("|") >= 0 && (void 0 === b[c] && (b[c] = {
                index: 0
            }), b[c].values = a[c].replace("[", "").replace("]", "").split("|"), b[c].len = b[c].values.length - 1);
            return b
        },
        m = function (a) {
            return a = void 0 === a ? new Object : a, a.anim = void 0 === a.anim ? new Object : a.anim, a.anim.x = void 0 === a.anim.x ? 0 : a.anim.x, a.anim.y = void 0 === a.anim.y ? 0 : a.anim.y, a.anim.z = void 0 === a.anim.z ? 0 : a.anim.z, a.anim.rotationX = void 0 === a.anim.rotationX ? 0 : a.anim.rotationX, a.anim.rotationY = void 0 === a.anim.rotationY ? 0 : a.anim.rotationY, a.anim.rotationZ = void 0 === a.anim.rotationZ ? 0 : a.anim.rotationZ, a.anim.scaleX = void 0 === a.anim.scaleX ? 1 : a.anim.scaleX, a.anim.scaleY = void 0 === a.anim.scaleY ? 1 : a.anim.scaleY, a.anim.skewX = void 0 === a.anim.skewX ? 0 : a.anim.skewX, a.anim.skewY = void 0 === a.anim.skewY ? 0 : a.anim.skewY, a.anim.opacity = void 0 === a.anim.opacity ? 1 : a.anim.opacity, a.anim.transformOrigin = void 0 === a.anim.transformOrigin ? "50% 50%" : a.anim.transformOrigin, a.anim.transformPerspective = void 0 === a.anim.transformPerspective ? 600 : a.anim.transformPerspective, a.anim.rotation = void 0 === a.anim.rotation ? 0 : a.anim.rotation, a.anim.force3D = void 0 === a.anim.force3D ? "auto" : a.anim.force3D, a.anim.autoAlpha = void 0 === a.anim.autoAlpha ? 1 : a.anim.autoAlpha, a.anim.visibility = void 0 === a.anim.visibility ? "visible" : a.anim.visibility, a.anim.overwrite = void 0 === a.anim.overwrite ? "auto" : a.anim.overwrite, a.speed = void 0 === a.speed ? .3 : a.speed, a.filter = void 0 === a.filter ? "blur(0px) grayscale(0%) brightness(100%)" : a.filter, a["-webkit-filter"] = void 0 === a["-webkit-filter"] ? "blur(0px) grayscale(0%) brightness(100%)" : a["-webkit-filter"], a
        },
        n = function () {
            var a = new Object;
            return a.anim = new Object, a.anim.stroke = "none", a.anim.strokeWidth = 0, a.anim.strokeDasharray = "none", a.anim.strokeDashoffset = "0", a
        },
        o = function (a, b) {
            var c = a.split(";");
            return c && jQuery.each(c, function (a, c) {
                var d = c.split(":"),
                    e = d[0],
                    f = d[1];
                "sc" == e && (b.anim.stroke = f), "sw" == e && (b.anim.strokeWidth = f), "sda" == e && (b.anim.strokeDasharray = f), "sdo" == e && (b.anim.strokeDashoffset = f)
            }), b
        },
        p = function () {
            var a = new Object;
            return a.anim = new Object, a.anim.x = 0, a.anim.y = 0, a.anim.z = 0, a
        },
        q = function () {
            var a = new Object;
            return a.anim = new Object, a.speed = .2, a
        },
        r = function (a, b, c, d, e) {
            if (e = void 0 === e ? "" : e, jQuery.isNumeric(parseFloat(a))) return parseFloat(a) + e;
            if (void 0 === a || "inherit" === a) return b + "ext";
            if (a.split("{").length > 1) {
                var f = a.split(","),
                    g = parseFloat(f[1].split("}")[0]);
                if (f = parseFloat(f[0].split("{")[1]), void 0 !== c && void 0 !== d) {
                    parseInt(Math.random() * (g - f), 0), parseInt(f, 0);
                    for (var h = 0; h < d; h++) a = a + "|" + (parseInt(Math.random() * (g - f), 0) + parseInt(f, 0)) + e;
                    a += "]"
                } else a = Math.random() * (g - f) + f
            }
            return a
        },
        s = function (a, b, c, d, e, f, g) {
            return !jQuery.isNumeric(a) && a.match(/%]/g) ? (a = a.split("[")[1].split("]")[0], "horizontal" == g ? a = (c + 2) * parseInt(a, 0) / 100 : "vertical" == g && (a = (d + 2) * parseInt(a, 0) / 100)) : (a = "layer_left" === a ? 0 - c : "layer_right" === a ? c : a, a = "layer_top" === a ? 0 - d : "layer_bottom" === a ? d : a, a = "left" === a || "stage_left" === a ? 0 - c - f : "right" === a || "stage_right" === a ? b.conw - f : "center" === a || "stage_center" === a ? b.conw / 2 - c / 2 - f : a, a = "top" === a || "stage_top" === a ? 0 - d - e : "bottom" === a || "stage_bottom" === a ? b.conh - e : "middle" === a || "stage_middle" === a ? b.conh / 2 - d / 2 - e : a), a
        },
        t = function (a, b, c, d, e) {
            var f = new Object;
            if (f = jQuery.extend(!0, {}, f, a), void 0 === b) return f;
            var g = b.split(";"),
                h = "";
            return g && jQuery.each(g, function (a, b) {
                var g = b.split(":"),
                    i = g[0],
                    j = g[1];
                c && "none" !== c && void 0 != j && j.length > 0 && j.match(/\(R\)/) && (j = j.replace("(R)", ""), j = "right" === j ? "left" : "left" === j ? "right" : "top" === j ? "bottom" : "bottom" === j ? "top" : j, "[" === j[0] && "-" === j[1] ? j = j.replace("[-", "[") : "[" === j[0] && "-" !== j[1] ? j = j.replace("[", "[-") : "-" === j[0] ? j = j.replace("-", "") : j[0].match(/[1-9]/) && (j = "-" + j)), void 0 != j && (j = j.replace(/\(R\)/, ""), "rotationX" != i && "rX" != i || (f.anim.rotationX = r(j, f.anim.rotationX, d, e, "deg")), "rotationY" != i && "rY" != i || (f.anim.rotationY = r(j, f.anim.rotationY, d, e, "deg")), "rotationZ" != i && "rZ" != i || (f.anim.rotation = r(j, f.anim.rotationZ, d, e, "deg")), "scaleX" != i && "sX" != i || (f.anim.scaleX = r(j, f.anim.scaleX, d, e)), "scaleY" != i && "sY" != i || (f.anim.scaleY = r(j, f.anim.scaleY, d, e)), "opacity" != i && "o" != i || (f.anim.opacity = r(j, f.anim.opacity, d, e)), "fb" == i && (h = "" === h ? "blur(" + parseInt(j, 0) + "px)" : h + " blur(" + parseInt(j, 0) + "px)"), "fg" == i && (h = "" === h ? "grayscale(" + parseInt(j, 0) + "%)" : h + " grayscale(" + parseInt(j, 0) + "%)"), "fbr" == i && (h = "" === h ? "brightness(" + parseInt(j, 0) + "%)" : h + " brightness(" + parseInt(j, 0) + "%)"), 0 === f.anim.opacity && (f.anim.autoAlpha = 0), f.anim.opacity = 0 == f.anim.opacity ? 1e-4 : f.anim.opacity, "skewX" != i && "skX" != i || (f.anim.skewX = r(j, f.anim.skewX, d, e)), "skewY" != i && "skY" != i || (f.anim.skewY = r(j, f.anim.skewY, d, e)), "x" == i && (f.anim.x = r(j, f.anim.x, d, e)), "y" == i && (f.anim.y = r(j, f.anim.y, d, e)), "z" == i && (f.anim.z = r(j, f.anim.z, d, e)), "transformOrigin" != i && "tO" != i || (f.anim.transformOrigin = j.toString()), "transformPerspective" != i && "tP" != i || (f.anim.transformPerspective = parseInt(j, 0)), "speed" != i && "s" != i || (f.speed = parseFloat(j)))
            }), "" !== h && (f.anim["-webkit-filter"] = h, f.anim.filter = h), f
        },
        u = function (a) {
            if (void 0 === a) return !1;
            var b = new Object;
            b.anim = new Object;
            var c = a.split(";");
            return c && jQuery.each(c, function (a, c) {
                c = c.split(":");
                var d = c[0],
                    e = c[1];
                "x" == d && (b.anim.x = e), "y" == d && (b.anim.y = e), "s" == d && (b.speed = parseFloat(e)), "e" != d && "ease" != d || (b.anim.ease = e)
            }), b
        },
        v = function (a, b, c) {
            if (void 0 == a && (a = 0), !jQuery.isArray(a) && "string" === jQuery.type(a) && (a.split(",").length > 1 || a.split("[").length > 1)) {
                a = a.replace("[", ""), a = a.replace("]", "");
                var d = a.match(/'/g) ? a.split("',") : a.split(",");
                a = new Array, d && jQuery.each(d, function (b, c) {
                    c = c.replace("'", ""), c = c.replace("'", ""), a.push(c)
                })
            } else {
                var e = a;
                jQuery.isArray(a) || (a = new Array, a.push(e))
            }
            var e = a[a.length - 1];
            if (a.length < b.rle)
                for (var f = 1; f <= b.curWinRange; f++) a.push(e);
            return a
        },
        x = function (a, b) {
            if (void 0 === b) return a;
            b = b.replace("c:", "color:"), b = b.replace("bg:", "background-color:"), b = b.replace("bw:", "border-width:"), b = b.replace("bc:", "border-color:"), b = b.replace("br:", "borderRadius:"), b = b.replace("bs:", "border-style:"), b = b.replace("td:", "text-decoration:"), b = b.replace("zi:", "zIndex:");
            var c = b.split(";");
            return c && jQuery.each(c, function (b, c) {
                var d = c.split(":");
                d[0].length > 0 && ("background-color" === d[0] && d[1].indexOf("gradient") >= 0 && (d[0] = "background"), a.anim[d[0]] = d[1])
            }), a
        },
        y = function (a, b) {
            var e, c = new Object,
                d = !1;
            if ("rekursive" == b && (e = a.closest(".tp-caption")) && a.css("fontSize") === e.css("fontSize") && a.css("fontWeight") === e.css("fontWeight") && a.css("lineHeight") === e.css("lineHeight") && (d = !0), c.basealign = a.data("basealign") || "grid", c.fontSize = d ? void 0 === e.data("fontsize") ? parseInt(e.css("fontSize"), 0) || 0 : e.data("fontsize") : void 0 === a.data("fontsize") ? parseInt(a.css("fontSize"), 0) || 0 : a.data("fontsize"), c.fontWeight = d ? void 0 === e.data("fontweight") ? parseInt(e.css("fontWeight"), 0) || 0 : e.data("fontweight") : void 0 === a.data("fontweight") ? parseInt(a.css("fontWeight"), 0) || 0 : a.data("fontweight"), c.whiteSpace = d ? void 0 === e.data("whitespace") ? e.css("whitespace") || "normal" : e.data("whitespace") : void 0 === a.data("whitespace") ? a.css("whitespace") || "normal" : a.data("whitespace"), c.textAlign = d ? void 0 === e.data("textalign") ? e.css("textalign") || "inherit" : e.data("textalign") : void 0 === a.data("textalign") ? a.css("textalign") || "inherit" : a.data("textalign"), c.zIndex = d ? void 0 === e.data("zIndex") ? e.css("zIndex") || "inherit" : e.data("zIndex") : void 0 === a.data("zIndex") ? a.css("zIndex") || "inherit" : a.data("zIndex"), -1 !== jQuery.inArray(a.data("layertype"), ["video", "image", "audio"]) || a.is("img") ? c.lineHeight = 0 : c.lineHeight = d ? void 0 === e.data("lineheight") ? parseInt(e.css("lineHeight"), 0) || 0 : e.data("lineheight") : void 0 === a.data("lineheight") ? parseInt(a.css("lineHeight"), 0) || 0 : a.data("lineheight"), c.letterSpacing = d ? void 0 === e.data("letterspacing") ? parseFloat(e.css("letterSpacing"), 0) || 0 : e.data("letterspacing") : void 0 === a.data("letterspacing") ? parseFloat(a.css("letterSpacing")) || 0 : a.data("letterspacing"), c.paddingTop = void 0 === a.data("paddingtop") ? parseInt(a.css("paddingTop"), 0) || 0 : a.data("paddingtop"), c.paddingBottom = void 0 === a.data("paddingbottom") ? parseInt(a.css("paddingBottom"), 0) || 0 : a.data("paddingbottom"), c.paddingLeft = void 0 === a.data("paddingleft") ? parseInt(a.css("paddingLeft"), 0) || 0 : a.data("paddingleft"), c.paddingRight = void 0 === a.data("paddingright") ? parseInt(a.css("paddingRight"), 0) || 0 : a.data("paddingright"), c.marginTop = void 0 === a.data("margintop") ? parseInt(a.css("marginTop"), 0) || 0 : a.data("margintop"), c.marginBottom = void 0 === a.data("marginbottom") ? parseInt(a.css("marginBottom"), 0) || 0 : a.data("marginbottom"), c.marginLeft = void 0 === a.data("marginleft") ? parseInt(a.css("marginLeft"), 0) || 0 : a.data("marginleft"), c.marginRight = void 0 === a.data("marginright") ? parseInt(a.css("marginRight"), 0) || 0 : a.data("marginright"), c.borderTopWidth = void 0 === a.data("bordertopwidth") ? parseInt(a.css("borderTopWidth"), 0) || 0 : a.data("bordertopwidth"), c.borderBottomWidth = void 0 === a.data("borderbottomwidth") ? parseInt(a.css("borderBottomWidth"), 0) || 0 : a.data("borderbottomwidth"), c.borderLeftWidth = void 0 === a.data("borderleftwidth") ? parseInt(a.css("borderLeftWidth"), 0) || 0 : a.data("borderleftwidth"), c.borderRightWidth = void 0 === a.data("borderrightwidth") ? parseInt(a.css("borderRightWidth"), 0) || 0 : a.data("borderrightwidth"), "rekursive" != b) {
                if (c.color = void 0 === a.data("color") ? "nopredefinedcolor" : a.data("color"), c.whiteSpace = d ? void 0 === e.data("whitespace") ? e.css("whiteSpace") || "nowrap" : e.data("whitespace") : void 0 === a.data("whitespace") ? a.css("whiteSpace") || "nowrap" : a.data("whitespace"), c.textAlign = d ? void 0 === e.data("textalign") ? e.css("textalign") || "inherit" : e.data("textalign") : void 0 === a.data("textalign") ? a.css("textalign") || "inherit" : a.data("textalign"), c.fontWeight = d ? void 0 === e.data("fontweight") ? parseInt(e.css("fontWeight"), 0) || 0 : e.data("fontweight") : void 0 === a.data("fontweight") ? parseInt(a.css("fontWeight"), 0) || 0 : a.data("fontweight"), c.minWidth = void 0 === a.data("width") ? parseInt(a.css("minWidth"), 0) || 0 : a.data("width"), c.minHeight = void 0 === a.data("height") ? parseInt(a.css("minHeight"), 0) || 0 : a.data("height"), void 0 != a.data("videowidth") && void 0 != a.data("videoheight")) {
                    var f = a.data("videowidth"),
                        g = a.data("videoheight");
                    f = "100%" === f ? "none" : f, g = "100%" === g ? "none" : g, a.data("width", f), a.data("height", g)
                }
                c.maxWidth = void 0 === a.data("width") ? parseInt(a.css("maxWidth"), 0) || "none" : a.data("width"), c.maxHeight = -1 !== jQuery.inArray(a.data("type"), ["column", "row"]) ? "none" : void 0 === a.data("height") ? parseInt(a.css("maxHeight"), 0) || "none" : a.data("height"), c.wan = void 0 === a.data("wan") ? parseInt(a.css("-webkit-transition"), 0) || "none" : a.data("wan"), c.moan = void 0 === a.data("moan") ? parseInt(a.css("-moz-animation-transition"), 0) || "none" : a.data("moan"), c.man = void 0 === a.data("man") ? parseInt(a.css("-ms-animation-transition"), 0) || "none" : a.data("man"), c.ani = void 0 === a.data("ani") ? parseInt(a.css("transition"), 0) || "none" : a.data("ani")
            }
            return c.styleProps = {
                borderTopLeftRadius: a[0].style.borderTopLeftRadius,
                borderTopRightRadius: a[0].style.borderTopRightRadius,
                borderBottomRightRadius: a[0].style.borderBottomRightRadius,
                borderBottomLeftRadius: a[0].style.borderBottomLeftRadius,
                background: a[0].style.background,
                boxShadow: a[0].style.boxShadow,
                "background-color": a[0].style["background-color"],
                "border-top-color": a[0].style["border-top-color"],
                "border-bottom-color": a[0].style["border-bottom-color"],
                "border-right-color": a[0].style["border-right-color"],
                "border-left-color": a[0].style["border-left-color"],
                "border-top-style": a[0].style["border-top-style"],
                "border-bottom-style": a[0].style["border-bottom-style"],
                "border-left-style": a[0].style["border-left-style"],
                "border-right-style": a[0].style["border-right-style"],
                "border-left-width": a[0].style["border-left-width"],
                "border-right-width": a[0].style["border-right-width"],
                "border-bottom-width": a[0].style["border-bottom-width"],
                "border-top-width": a[0].style["border-top-width"],
                color: a[0].style.color,
                "text-decoration": a[0].style["text-decoration"],
                "font-style": a[0].style["font-style"]
            }, "" !== c.styleProps.background && void 0 !== c.styleProps.background && c.styleProps.background !== c.styleProps["background-color"] || delete c.styleProps.background, "" == c.styleProps.color && (c.styleProps.color = a.css("color")), c
        },
        z = function (a, b) {
            var c = new Object;
            return a && jQuery.each(a, function (d, e) {
                var f = v(e, b)[b.curWinRange];
                c[d] = void 0 !== f ? f : a[d]
            }), c
        },
        A = function (a, b, c, d) {
            return a = jQuery.isNumeric(a) ? a * b + "px" : a, a = "full" === a ? d : "auto" === a || "none" === a ? c : a
        },
        B = function (a, b, c, d) {
            var e = a.data();
            e = void 0 === e ? {} : e;
            try {
                if ("BR" == a[0].nodeName || "br" == a[0].tagName) return !1
            } catch (a) { }
            e.cssobj = void 0 === e.cssobj ? y(a, c) : e.cssobj;
            var f = z(e.cssobj, b),
                g = b.bw,
                h = b.bh;
            "off" === d && (g = 1, h = 1), "auto" == f.lineHeight && (f.lineHeight = f.fontSize + 4);
            var i = {
                Top: f.marginTop,
                Bottom: f.marginBottom,
                Left: f.marginLeft,
                Right: f.marginRight
            };
            if ("column" === e._nctype && (punchgs.TweenLite.set(e._column, {
                paddingTop: Math.round(f.marginTop * h) + "px",
                paddingBottom: Math.round(f.marginBottom * h) + "px",
                paddingLeft: Math.round(f.marginLeft * g) + "px",
                paddingRight: Math.round(f.marginRight * g) + "px"
            }), i = {
                Top: 0,
                Bottom: 0,
                Left: 0,
                Right: 0
            }), !a.hasClass("tp-splitted")) {
                a.css("-webkit-transition", "none"), a.css("-moz-transition", "none"), a.css("-ms-transition", "none"), a.css("transition", "none");
                if ((void 0 !== a.data("transform_hover") || void 0 !== a.data("style_hover")) && punchgs.TweenLite.set(a, f.styleProps), punchgs.TweenLite.set(a, {
                    fontSize: Math.round(f.fontSize * g) + "px",
                    fontWeight: f.fontWeight,
                    letterSpacing: Math.floor(f.letterSpacing * g) + "px",
                    paddingTop: Math.round(f.paddingTop * h) + "px",
                    paddingBottom: Math.round(f.paddingBottom * h) + "px",
                    paddingLeft: Math.round(f.paddingLeft * g) + "px",
                    paddingRight: Math.round(f.paddingRight * g) + "px",
                    marginTop: i.Top * h + "px",
                    marginBottom: i.Bottom * h + "px",
                    marginLeft: i.Left * g + "px",
                    marginRight: i.Right * g + "px",
                    borderTopWidth: Math.round(f.borderTopWidth * h) + "px",
                    borderBottomWidth: Math.round(f.borderBottomWidth * h) + "px",
                    borderLeftWidth: Math.round(f.borderLeftWidth * g) + "px",
                    borderRightWidth: Math.round(f.borderRightWidth * g) + "px",
                    lineHeight: Math.round(f.lineHeight * h) + "px",
                    textAlign: f.textAlign,
                    overwrite: "auto"
                }), "rekursive" != c) {
                    var k = "slide" == f.basealign ? b.ulw : b.gridwidth[b.curWinRange],
                        l = "slide" == f.basealign ? b.ulh : b.gridheight[b.curWinRange],
                        m = A(f.maxWidth, g, "none", k),
                        n = A(f.maxHeight, h, "none", l),
                        o = A(f.minWidth, g, "0px", k),
                        p = A(f.minHeight, h, "0px", l);
                    if (o = void 0 === o ? 0 : o, p = void 0 === p ? 0 : p, m = void 0 === m ? "none" : m, n = void 0 === n ? "none" : n, e._isgroup && ("#1/1#" === o && (o = m = k), "#1/2#" === o && (o = m = k / 2), "#1/3#" === o && (o = m = k / 3), "#1/4#" === o && (o = m = k / 4), "#1/5#" === o && (o = m = k / 5), "#1/6#" === o && (o = m = k / 6), "#2/3#" === o && (o = m = k / 3 * 2), "#3/4#" === o && (o = m = k / 4 * 3), "#2/5#" === o && (o = m = k / 5 * 2), "#3/5#" === o && (o = m = k / 5 * 3), "#4/5#" === o && (o = m = k / 5 * 4), "#3/6#" === o && (o = m = k / 6 * 3), "#4/6#" === o && (o = m = k / 6 * 4), "#5/6#" === o && (o = m = k / 6 * 5)), e._ingroup && (e._groupw = o, e._grouph = p), punchgs.TweenLite.set(a, {
                        maxWidth: m,
                        maxHeight: n,
                        minWidth: o,
                        minHeight: p,
                        whiteSpace: f.whiteSpace,
                        textAlign: f.textAlign,
                        overwrite: "auto"
                    }), "nopredefinedcolor" != f.color && punchgs.TweenLite.set(a, {
                        color: f.color,
                        overwrite: "auto"
                    }), void 0 != e.svg_src) {
                        var q = "nopredefinedcolor" != f.color && void 0 != f.color ? f.color : void 0 != f.css && "nopredefinedcolor" != f.css.color && void 0 != f.css.color ? f.css.color : void 0 != f.styleProps.color ? f.styleProps.color : void 0 != f.styleProps.css && void 0 != f.styleProps.css.color && f.styleProps.css.color;
                        0 != q && (punchgs.TweenLite.set(a.find("svg"), {
                            fill: q,
                            overwrite: "auto"
                        }), punchgs.TweenLite.set(a.find("svg path"), {
                            fill: q,
                            overwrite: "auto"
                        }))
                    }
                }
                "column" === e._nctype && (void 0 === e._column_bg_set && (e._column_bg_set = a.css("backgroundColor"), e._column_bg_image = a.css("backgroundImage"), e._column_bg_image_repeat = a.css("backgroundRepeat"), e._column_bg_image_position = a.css("backgroundPosition"), e._column_bg_image_size = a.css("backgroundSize"), e._column_bg_opacity = a.data("bgopacity"), e._column_bg_opacity = void 0 === e._column_bg_opacity ? 1 : e._column_bg_opacity, punchgs.TweenLite.set(a, {
                    backgroundColor: "transparent",
                    backgroundImage: ""
                })), setTimeout(function () {
                    C(a, b)
                }, 1), e._cbgc_auto && e._cbgc_auto.length > 0 && (e._cbgc_auto[0].style.backgroundSize = e._column_bg_image_size, jQuery.isArray(f.marginLeft) ? punchgs.TweenLite.set(e._cbgc_auto, {
                    borderTopWidth: f.marginTop[b.curWinRange] * h + "px",
                    borderLeftWidth: f.marginLeft[b.curWinRange] * g + "px",
                    borderRightWidth: f.marginRight[b.curWinRange] * g + "px",
                    borderBottomWidth: f.marginBottom[b.curWinRange] * h + "px",
                    backgroundColor: e._column_bg_set,
                    backgroundImage: e._column_bg_image,
                    backgroundRepeat: e._column_bg_image_repeat,
                    backgroundPosition: e._column_bg_image_position,
                    opacity: e._column_bg_opacity
                }) : punchgs.TweenLite.set(e._cbgc_auto, {
                    borderTopWidth: f.marginTop * h + "px",
                    borderLeftWidth: f.marginLeft * g + "px",
                    borderRightWidth: f.marginRight * g + "px",
                    borderBottomWidth: f.marginBottom * h + "px",
                    backgroundColor: e._column_bg_set,
                    backgroundImage: e._column_bg_image,
                    backgroundRepeat: e._column_bg_image_repeat,
                    backgroundPosition: e._column_bg_image_position,
                    opacity: e._column_bg_opacity
                }))), setTimeout(function () {
                    a.css("-webkit-transition", a.data("wan")), a.css("-moz-transition", a.data("moan")), a.css("-ms-transition", a.data("man")), a.css("transition", a.data("ani"))
                }, 30)
            }
        },
        C = function (a, b) {
            var c = a.data();
            if (c._cbgc_man && c._cbgc_man.length > 0) {
                var e, f, h;
                jQuery.isArray(c.cssobj.marginLeft) ? (c.cssobj.marginLeft[b.curWinRange] * b.bw, e = c.cssobj.marginTop[b.curWinRange] * b.bh, f = c.cssobj.marginBottom[b.curWinRange] * b.bh, c.cssobj.marginRight[b.curWinRange] * b.bw) : (c.cssobj.marginLeft * b.bw, e = c.cssobj.marginTop * b.bh, f = c.cssobj.marginBottom * b.bh, c.cssobj.marginRight * b.bw), h = c._row.hasClass("rev_break_columns") ? "100%" : c._row.height() - (e + f) + "px", c._cbgc_man[0].style.backgroundSize = c._column_bg_image_size, punchgs.TweenLite.set(c._cbgc_man, {
                    width: "100%",
                    height: h,
                    backgroundColor: c._column_bg_set,
                    backgroundImage: c._column_bg_image,
                    backgroundRepeat: c._column_bg_image_repeat,
                    backgroundPosition: c._column_bg_image_position,
                    overwrite: "auto",
                    opacity: c._column_bg_opacity
                })
            }
        },
        D = function (a, b) {
            var c = a.data();
            if (a.hasClass("rs-pendulum") && void 0 == c._loop_timeline) {
                c._loop_timeline = new punchgs.TimelineLite;
                var d = void 0 == a.data("startdeg") ? -20 : a.data("startdeg"),
                    e = void 0 == a.data("enddeg") ? 20 : a.data("enddeg"),
                    f = void 0 == a.data("speed") ? 2 : a.data("speed"),
                    g = void 0 == a.data("origin") ? "50% 50%" : a.data("origin"),
                    h = void 0 == a.data("easing") ? punchgs.Power2.easeInOut : a.data("easing");
                d *= b, e *= b, c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                    force3D: "auto",
                    rotation: d,
                    transformOrigin: g
                }, {
                        rotation: e,
                        ease: h
                    })), c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                        force3D: "auto",
                        rotation: e,
                        transformOrigin: g
                    }, {
                            rotation: d,
                            ease: h,
                            onComplete: function () {
                                c._loop_timeline.restart()
                            }
                        }))
            }
            if (a.hasClass("rs-rotate") && void 0 == c._loop_timeline) {
                c._loop_timeline = new punchgs.TimelineLite;
                var d = void 0 == a.data("startdeg") ? 0 : a.data("startdeg"),
                    e = void 0 == a.data("enddeg") ? 360 : a.data("enddeg"),
                    f = void 0 == a.data("speed") ? 2 : a.data("speed"),
                    g = void 0 == a.data("origin") ? "50% 50%" : a.data("origin"),
                    h = void 0 == a.data("easing") ? punchgs.Power2.easeInOut : a.data("easing");
                d *= b, e *= b, c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                    force3D: "auto",
                    rotation: d,
                    transformOrigin: g
                }, {
                        rotation: e,
                        ease: h,
                        onComplete: function () {
                            c._loop_timeline.restart()
                        }
                    }))
            }
            if (a.hasClass("rs-slideloop") && void 0 == c._loop_timeline) {
                c._loop_timeline = new punchgs.TimelineLite;
                var i = void 0 == a.data("xs") ? 0 : a.data("xs"),
                    j = void 0 == a.data("ys") ? 0 : a.data("ys"),
                    k = void 0 == a.data("xe") ? 0 : a.data("xe"),
                    l = void 0 == a.data("ye") ? 0 : a.data("ye"),
                    f = void 0 == a.data("speed") ? 2 : a.data("speed"),
                    h = void 0 == a.data("easing") ? punchgs.Power2.easeInOut : a.data("easing");
                i *= b, j *= b, k *= b, l *= b, c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                    force3D: "auto",
                    x: i,
                    y: j
                }, {
                        x: k,
                        y: l,
                        ease: h
                    })), c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                        force3D: "auto",
                        x: k,
                        y: l
                    }, {
                            x: i,
                            y: j,
                            onComplete: function () {
                                c._loop_timeline.restart()
                            }
                        }))
            }
            if (a.hasClass("rs-pulse") && void 0 == c._loop_timeline) {
                c._loop_timeline = new punchgs.TimelineLite;
                var m = void 0 == a.data("zoomstart") ? 0 : a.data("zoomstart"),
                    n = void 0 == a.data("zoomend") ? 0 : a.data("zoomend"),
                    f = void 0 == a.data("speed") ? 2 : a.data("speed"),
                    h = void 0 == a.data("easing") ? punchgs.Power2.easeInOut : a.data("easing");
                c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                    force3D: "auto",
                    scale: m
                }, {
                        scale: n,
                        ease: h
                    })), c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                        force3D: "auto",
                        scale: n
                    }, {
                            scale: m,
                            onComplete: function () {
                                c._loop_timeline.restart()
                            }
                        }))
            }
            if (a.hasClass("rs-wave") && void 0 == c._loop_timeline) {
                c._loop_timeline = new punchgs.TimelineLite;
                var o = void 0 == a.data("angle") ? 10 : parseInt(a.data("angle"), 0),
                    p = void 0 == a.data("radius") ? 10 : parseInt(a.data("radius"), 0),
                    f = void 0 == a.data("speed") ? -20 : a.data("speed"),
                    g = void 0 == a.data("origin") ? "50% 50%" : a.data("origin"),
                    q = g.split(" "),
                    r = new Object;
                q.length >= 1 ? (r.x = q[0], r.y = q[1]) : (r.x = "50%", r.y = "50%"), p *= b;
                var s = (parseInt(r.x, 0) / 100 - .5) * a.width(),
                    t = (parseInt(r.y, 0) / 100 - .5) * a.height(),
                    u = -1 * p + t,
                    v = 0 + s,
                    w = {
                        a: 0,
                        ang: o,
                        element: a,
                        unit: p,
                        xoffset: v,
                        yoffset: u
                    },
                    x = parseInt(o, 0),
                    y = new punchgs.TweenLite.fromTo(w, f, {
                        a: 0 + x
                    }, {
                            a: 360 + x,
                            force3D: "auto",
                            ease: punchgs.Linear.easeNone
                        });
                y.eventCallback("onUpdate", function (a) {
                    var b = a.a * (Math.PI / 180),
                        c = a.yoffset + a.unit * (1 - Math.sin(b)),
                        d = a.xoffset + Math.cos(b) * a.unit;
                    punchgs.TweenLite.to(a.element, .1, {
                        force3D: "auto",
                        x: d,
                        y: c
                    })
                }, [w]), y.eventCallback("onComplete", function (a) {
                    a._loop_timeline.restart()
                }, [c]), c._loop_timeline.append(y)
            }
        },
        E = function (a) {
            a.closest(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function () {
                var a = this;
                void 0 != a._loop_timeline && (a._loop_timeline.pause(), a._loop_timeline = null)
            })
        }
}(jQuery);