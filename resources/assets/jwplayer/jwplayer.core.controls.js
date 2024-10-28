/*! For license information please see jwplayer.core.controls.js.LICENSE.txt */
(self.webpackChunkjwplayer = self.webpackChunkjwplayer || []).push([[581, 681, 716], {
    4406: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var i = t.kind || "cc";
            return t.default || t.defaulttrack ? "default" : t._id || t.file || i + e
        }
        function o(t, e) {
            var i = t.label || t.name || t.language;
            return i || (i = "Unknown CC",
            (e += 1) > 1 && (i += " [" + e + "]")),
            {
                label: i,
                unknownCount: e
            }
        }
        i.d(e, {
            M: function() {
                return n
            },
            _: function() {
                return o
            }
        })
    },
    7582: function(t, e, i) {
        "use strict";
        i.d(e, {
            V: function() {
                return p
            },
            x: function() {
                return d
            }
        });
        var n = i(6840)
          , o = i(8958)
          , a = i(8027)
          , r = i(9730)
          , s = i(2395)
          , l = i(1009)
          , c = i(6438);
        function u(t) {
            throw new c.rG(null,t)
        }
        function d(t, e, n) {
            t.xhr = (0,
            a.h)(t.file, (function(a) {
                !function(t, e, n, a) {
                    var d, p, w = t.responseXML ? t.responseXML.firstChild : null;
                    if (w)
                        for ("xml" === (0,
                        r.r1)(w) && (w = w.nextSibling); w && w.nodeType === w.COMMENT_NODE; )
                            w = w.nextSibling;
                    try {
                        if (w && "tt" === (0,
                        r.r1)(w)) {
                            if (!t.responseXML)
                                throw new Error("Empty XML response");
                            d = function(t) {
                                t || u(306007);
                                var e = []
                                  , i = t.getElementsByTagName("p")
                                  , n = 30
                                  , o = t.getElementsByTagName("tt");
                                if (o && o[0]) {
                                    var a = parseFloat(o[0].getAttribute("ttp:frameRate") || "");
                                    isNaN(a) || (n = a)
                                }
                                i || u(306005),
                                i.length || (i = t.getElementsByTagName("tt:p")).length || (i = t.getElementsByTagName("tts:p"));
                                for (var r = 0; r < i.length; r++) {
                                    for (var s = i[r], c = s.getElementsByTagName("br"), d = 0; d < c.length; d++) {
                                        var p = c[d];
                                        p && p.parentNode && p.parentNode.replaceChild(t.createTextNode("\r\n"), p)
                                    }
                                    var h = s.innerHTML || s.textContent || s.text || ""
                                      , w = (0,
                                    l.fy)(h).replace(/>\s+</g, "><").replace(/(<\/?)tts?:/g, "$1").replace(/<br.*?\/>/g, "\r\n");
                                    if (w) {
                                        var f = s.getAttribute("begin") || ""
                                          , g = s.getAttribute("dur") || ""
                                          , j = s.getAttribute("end") || ""
                                          , m = {
                                            begin: (0,
                                            l.m9)(f, n),
                                            text: w
                                        };
                                        j ? m.end = (0,
                                        l.m9)(j, n) : g && (m.end = (m.begin || 0) + (0,
                                        l.m9)(g, n)),
                                        e.push(m)
                                    }
                                }
                                return e.length || u(306005),
                                e
                            }(t.responseXML),
                            p = h(d),
                            delete e.xhr,
                            n(p)
                        } else {
                            var f = t.responseText;
                            f.indexOf("WEBVTT") >= 0 ? i.e(347).then(function(t) {
                                return i(2906).default
                            }
                            .bind(null, i)).catch((0,
                            o.Jt)(301131)).then((function(t) {
                                var i = new t(window);
                                p = [],
                                i.oncue = function(t) {
                                    p.push(t)
                                }
                                ,
                                i.onflush = function() {
                                    delete e.xhr,
                                    n(p)
                                }
                                ,
                                i.parse(f)
                            }
                            )).catch((function(t) {
                                delete e.xhr,
                                a((0,
                                c.Mm)(null, c.Y7, t))
                            }
                            )) : (d = (0,
                            s.Z)(f),
                            p = h(d),
                            delete e.xhr,
                            n(p))
                        }
                    } catch (t) {
                        delete e.xhr,
                        a((0,
                        c.Mm)(null, c.Y7, t))
                    }
                }(a, t, e, n)
            }
            ), (function(t, e, i, o) {
                n((0,
                c.l9)(o, c.Y7))
            }
            ))
        }
        function p(t) {
            t && t.forEach((function(t) {
                var e = t.xhr;
                e && (e.onload = null,
                e.onreadystatechange = null,
                e.onerror = null,
                "abort"in e && e.abort()),
                delete t.xhr
            }
            ))
        }
        function h(t) {
            return t.map((function(t) {
                return new n.Z(t.begin,t.end,t.text)
            }
            ))
        }
    },
    2395: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return o
            }
        });
        var n = i(1009);
        function o(t) {
            var e = []
              , i = (t = (0,
            n.fy)(t)).split("\r\n\r\n");
            1 === i.length && (i = t.split("\n\n"));
            for (var o = 0; o < i.length; o++)
                if ("WEBVTT" !== i[o]) {
                    var r = a(i[o]);
                    r.text && e.push(r)
                }
            return e
        }
        function a(t) {
            var e = {}
              , i = t.split("\r\n");
            1 === i.length && (i = t.split("\n"));
            var o = 1;
            if (i[0].indexOf(" --\x3e ") > 0 && (o = 0),
            i.length > o + 1 && i[o + 1]) {
                var a = i[o]
                  , r = a.indexOf(" --\x3e ");
                r > 0 && (e.begin = (0,
                n.m9)(a.substr(0, r)),
                e.end = (0,
                n.m9)(a.substr(r + 5)),
                e.text = i.slice(o + 1).join("\r\n"))
            }
            return e
        }
    },
    6840: function(t, e) {
        "use strict";
        var i = window.VTTCue;
        function n(t) {
            return "string" == typeof t && (!!{
                start: !0,
                middle: !0,
                end: !0,
                left: !0,
                right: !0
            }[t.toLowerCase()] && t.toLowerCase())
        }
        if (!i) {
            var o = "auto";
            (i = function(t, e, i) {
                var a = this;
                a.hasBeenReset = !1;
                var r = ""
                  , s = !1
                  , l = t
                  , c = e
                  , u = i
                  , d = null
                  , p = ""
                  , h = !0
                  , w = o
                  , f = "start"
                  , g = o
                  , j = 100
                  , m = "middle";
                Object.defineProperty(a, "id", {
                    enumerable: !0,
                    get: function() {
                        return r
                    },
                    set: function(t) {
                        r = "" + t
                    }
                }),
                Object.defineProperty(a, "pauseOnExit", {
                    enumerable: !0,
                    get: function() {
                        return s
                    },
                    set: function(t) {
                        s = !!t
                    }
                }),
                Object.defineProperty(a, "startTime", {
                    enumerable: !0,
                    get: function() {
                        return l
                    },
                    set: function(t) {
                        if ("number" != typeof t)
                            throw new TypeError("Start time must be set to a number.");
                        l = t,
                        this.hasBeenReset = !0
                    }
                }),
                Object.defineProperty(a, "endTime", {
                    enumerable: !0,
                    get: function() {
                        return c
                    },
                    set: function(t) {
                        if ("number" != typeof t)
                            throw new TypeError("End time must be set to a number.");
                        c = t,
                        this.hasBeenReset = !0
                    }
                }),
                Object.defineProperty(a, "text", {
                    enumerable: !0,
                    get: function() {
                        return u
                    },
                    set: function(t) {
                        u = "" + t,
                        this.hasBeenReset = !0
                    }
                }),
                Object.defineProperty(a, "region", {
                    enumerable: !0,
                    get: function() {
                        return d
                    },
                    set: function(t) {
                        d = t,
                        this.hasBeenReset = !0
                    }
                }),
                Object.defineProperty(a, "vertical", {
                    enumerable: !0,
                    get: function() {
                        return p
                    },
                    set: function(t) {
                        var e = function(t) {
                            return "string" == typeof t && !!{
                                "": !0,
                                lr: !0,
                                rl: !0
                            }[t.toLowerCase()] && t.toLowerCase()
                        }(t);
                        if (!1 === e)
                            throw new SyntaxError("An invalid or illegal string was specified.");
                        p = e,
                        this.hasBeenReset = !0
                    }
                }),
                Object.defineProperty(a, "snapToLines", {
                    enumerable: !0,
                    get: function() {
                        return h
                    },
                    set: function(t) {
                        h = !!t,
                        this.hasBeenReset = !0
                    }
                }),
                Object.defineProperty(a, "line", {
                    enumerable: !0,
                    get: function() {
                        return w
                    },
                    set: function(t) {
                        if ("number" != typeof t && t !== o)
                            throw new SyntaxError("An invalid number or illegal string was specified.");
                        w = t,
                        this.hasBeenReset = !0
                    }
                }),
                Object.defineProperty(a, "lineAlign", {
                    enumerable: !0,
                    get: function() {
                        return f
                    },
                    set: function(t) {
                        var e = n(t);
                        if (!e)
                            throw new SyntaxError("An invalid or illegal string was specified.");
                        f = e,
                        this.hasBeenReset = !0
                    }
                }),
                Object.defineProperty(a, "position", {
                    enumerable: !0,
                    get: function() {
                        return g
                    },
                    set: function(t) {
                        if (t < 0 || t > 100)
                            throw new Error("Position must be between 0 and 100.");
                        g = t,
                        this.hasBeenReset = !0
                    }
                }),
                Object.defineProperty(a, "size", {
                    enumerable: !0,
                    get: function() {
                        return j
                    },
                    set: function(t) {
                        if (t < 0 || t > 100)
                            throw new Error("Size must be between 0 and 100.");
                        j = t,
                        this.hasBeenReset = !0
                    }
                }),
                Object.defineProperty(a, "align", {
                    enumerable: !0,
                    get: function() {
                        return m
                    },
                    set: function(t) {
                        var e = n(t);
                        if (!e)
                            throw new SyntaxError("An invalid or illegal string was specified.");
                        m = e,
                        this.hasBeenReset = !0
                    }
                }),
                a.displayState = void 0
            }
            ).prototype.getCueAsHTML = function() {
                return window.WebVTT.convertCueToDOMTree(window, this.text)
            }
        }
        e.Z = i
    },
    287: function(t, e, i) {
        "use strict";
        function n(t) {
            return new Promise((function(e, i) {
                if (t.paused)
                    return i(o("NotAllowedError", 0, "play() failed."));
                var n = function() {
                    t.addEventListener("playing", a),
                    t.addEventListener("abort", a),
                    t.addEventListener("error", a),
                    t.addEventListener("pause", a)
                }
                  , a = function(r) {
                    if (t.removeEventListener("play", n),
                    t.removeEventListener("playing", a),
                    t.removeEventListener("pause", a),
                    t.removeEventListener("abort", a),
                    t.removeEventListener("error", a),
                    "playing" !== r.type) {
                        var s = 'The play() request was interrupted by a "' + r.type + '" event.';
                        return "error" === r.type ? i(o("NotSupportedError", 9, s)) : i(o("AbortError", 20, s))
                    }
                    e()
                };
                t.addEventListener("play", n)
            }
            ))
        }
        function o(t, e, i) {
            var n = new Error(i);
            return n.name = t,
            n.code = e,
            n
        }
        i.d(e, {
            Z: function() {
                return n
            }
        })
    },
    3985: function(t, e, i) {
        "use strict";
        function n(t, e) {
            return t !== 1 / 0 && Math.abs(t) >= Math.max(a(e), 0)
        }
        function o(t, e) {
            var i = "VOD";
            return t === 1 / 0 ? i = "LIVE" : t < 0 && (i = n(t, a(e)) ? "DVR" : "LIVE"),
            i
        }
        function a(t) {
            return void 0 === t ? 120 : Math.max(t, 0)
        }
        i.d(e, {
            s: function() {
                return n
            },
            v: function() {
                return o
            }
        })
    },
    2308: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return a
            }
        });
        var n, o = i(4806);
        function a(t) {
            return n || (n = new DOMParser),
            (0,
            o.gB)((0,
            o.oH)(n.parseFromString(t, "image/svg+xml").documentElement))
        }
    },
    4699: function(t, e, i) {
        "use strict";
        i.d(e, {
            R: function() {
                return d
            }
        });
        var n, o = i(5322), a = i(7880), r = i(8958), s = i(1026), l = i(8700), c = i(6286), u = i(4806), d = {
            back: !0,
            backgroundOpacity: 50,
            edgeStyle: null,
            fontSize: 14,
            fontOpacity: 100,
            fontScale: .05,
            preprocessor: o.yR,
            windowOpacity: 0
        }, p = function(t) {
            var e, s, p, h, w, f, g, j, m, v = this, b = t.player;
            function y() {
                (0,
                o.xV)(e.fontSize) && (b.get("containerHeight") ? j = d.fontScale * (e.userFontScale || 1) * e.fontSize / d.fontSize : b.once("change:containerHeight", y, this))
            }
            function k() {
                var t = b.get("containerHeight");
                if (t) {
                    var e;
                    if (b.get("fullscreen") && a.OS.iOS)
                        e = null;
                    else {
                        var i = t * j;
                        e = Math.round(10 * function(t) {
                            var e = b.get("mediaElement");
                            if (e && e.videoHeight) {
                                var i = e.videoWidth
                                  , n = e.videoHeight
                                  , o = i / n
                                  , r = b.get("containerHeight")
                                  , s = b.get("containerWidth");
                                if (b.get("fullscreen") && a.OS.mobile) {
                                    var l = window.screen;
                                    l.orientation && (r = l.availHeight,
                                    s = l.availWidth)
                                }
                                if (s && r && i && n)
                                    return (s / r > o ? r : n * s / i) * j
                            }
                            return t
                        }(i)) / 10
                    }
                    b.get("renderCaptionsNatively") ? function(t, e) {
                        var i = "#" + t + " .jw-video::-webkit-media-text-track-display";
                        e && (e += "px",
                        a.OS.iOS && (0,
                        c.iv)(i, {
                            fontSize: "inherit"
                        }, t, !0)),
                        m.fontSize = e,
                        (0,
                        c.iv)(i, m, t, !0)
                    }(b.get("id"), e) : (0,
                    c.oB)(w, {
                        fontSize: e
                    })
                }
            }
            function x(t, e, i) {
                var n = (0,
                c.HY)("#000000", i);
                "dropShadow" === t ? e.textShadow = "0 2px 1px " + n : "raised" === t ? e.textShadow = "0 0 5px " + n + ", 0 1px 5px " + n + ", 0 2px 5px " + n : "depressed" === t ? e.textShadow = "0 -2px 1px " + n : "uniform" === t && (e.textShadow = "-2px 0 1px " + n + ",2px 0 1px " + n + ",0 -2px 1px " + n + ",0 2px 1px " + n + ",-1px 1px 1px " + n + ",1px 1px 1px " + n + ",1px -1px 1px " + n + ",1px 1px 1px " + n)
            }
            (w = document.createElement("div")).className = "jw-captions jw-reset",
            this.show = function() {
                (0,
                u.cn)(w, "jw-captions-enabled")
            }
            ,
            this.hide = function() {
                (0,
                u.IV)(w, "jw-captions-enabled")
            }
            ,
            this.populate = function(t) {
                b.get("renderCaptionsNatively") || (p = [],
                s = t,
                t ? this.selectCues(t, h) : this.renderCues())
            }
            ,
            this.resize = function() {
                k(),
                this.renderCues(!0)
            }
            ,
            this.renderCues = function(t) {
                t = !!t,
                n && n.processCues(window, p, w, t)
            }
            ,
            this.selectCues = function(t, e) {
                if (t && t.data && e && !b.get("renderCaptionsNatively")) {
                    var i = this.getAlignmentPosition(t, e);
                    !1 !== i && (p = this.getCurrentCues(t.data, i),
                    this.renderCues(!0))
                }
            }
            ,
            this.getCurrentCues = function(t, e) {
                return (0,
                o.hX)(t, (function(t) {
                    return e >= t.startTime && (!t.endTime || e <= t.endTime)
                }
                ))
            }
            ,
            this.getAlignmentPosition = function(t, e) {
                var i = t.source
                  , n = e.metadata
                  , a = e.currentTime;
                return i && n && (0,
                o.hj)(n[i]) && (a = n[i]),
                a
            }
            ,
            this.clear = function() {
                (0,
                u.cS)(w)
            }
            ,
            this.setup = function(t, i) {
                f = document.createElement("div"),
                g = document.createElement("span"),
                f.className = "jw-captions-window jw-reset",
                g.className = "jw-captions-text jw-reset",
                e = (0,
                o.l7)({}, d, i),
                j = d.fontScale;
                var n = function() {
                    y(e.fontSize);
                    var i = e.windowColor
                      , n = e.windowOpacity
                      , o = e.edgeStyle;
                    m = {};
                    var r = {};
                    !function(t, e) {
                        var i = e.color
                          , n = e.fontOpacity;
                        if ((i || n !== d.fontOpacity) && (t.color = (0,
                        c.HY)(i || "#ffffff", n)),
                        e.back) {
                            var o = e.backgroundColor
                              , a = e.backgroundOpacity;
                            o === d.backgroundColor && a === d.backgroundOpacity || (t.backgroundColor = (0,
                            c.HY)(o, a))
                        } else
                            t.background = "transparent";
                        e.fontFamily && (t.fontFamily = e.fontFamily),
                        e.fontStyle && (t.fontStyle = e.fontStyle),
                        e.fontWeight && (t.fontWeight = e.fontWeight),
                        e.textDecoration && (t.textDecoration = e.textDecoration)
                    }(r, e),
                    (i || n !== d.windowOpacity) && (m.backgroundColor = (0,
                    c.HY)(i || "#000000", n)),
                    x(o, r, e.fontOpacity),
                    e.back || null !== o || x("uniform", r),
                    (0,
                    c.oB)(f, m),
                    (0,
                    c.oB)(g, r),
                    function(t, e) {
                        k(),
                        function(t, e) {
                            a.Browser.safari && (0,
                            c.iv)("#" + t + " .jw-video::-webkit-media-text-track-display-backdrop", {
                                backgroundColor: e.backgroundColor
                            }, t, !0),
                            (0,
                            c.iv)("#" + t + " .jw-video::-webkit-media-text-track-display", m, t, !0),
                            (0,
                            c.iv)("#" + t + " .jw-video::cue", e, t, !0)
                        }(t, e),
                        function(t, e) {
                            (0,
                            c.iv)("#" + t + " .jw-text-track-display", m, t),
                            (0,
                            c.iv)("#" + t + " .jw-text-track-cue", e, t)
                        }(t, e)
                    }(t, r)
                };
                n(),
                f.appendChild(g),
                w.appendChild(f),
                b.change("captionsTrack", (function(t, e) {
                    this.populate(e)
                }
                ), this),
                b.set("captions", e),
                b.on("change:captions", (function(t, i) {
                    e = i,
                    n()
                }
                ))
            }
            ,
            this.element = function() {
                return w
            }
            ,
            this.destroy = function() {
                b.off(null, null, this),
                this.off()
            }
            ;
            var C = function(t) {
                h = t,
                v.selectCues(s, h)
            };
            b.on("change:playlistItem", (function() {
                h = null,
                p = []
            }
            ), this),
            b.on(l.NZ, (function(t) {
                p = [],
                C(t)
            }
            ), this),
            b.on(l.R2, C, this),
            b.on("subtitlesTrackData", (function() {
                this.selectCues(s, h)
            }
            ), this),
            b.on("change:captionsList", (function t(e, o) {
                var a = this;
                1 !== o.length && (e.get("renderCaptionsNatively") || n || (i.e(63).then(function(t) {
                    n = i(9731).default
                }
                .bind(null, i)).catch((0,
                r.Jt)(301121)).catch((function(t) {
                    a.trigger(l.cM, t)
                }
                )),
                e.off("change:captionsList", t, this)))
            }
            ), this)
        };
        (0,
        o.l7)(p.prototype, s.ZP),
        e.Z = p
    },
    3388: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return r
            }
        });
        var n = i(2308)
          , o = i(3569)
          , a = i(8395);
        function r(t, e, i, r) {
            var s = document.createElement("div");
            s.className = "jw-icon jw-icon-inline jw-button-color jw-reset " + t,
            s.setAttribute("role", "button"),
            s.setAttribute("tabindex", "0"),
            i && s.setAttribute("aria-label", i),
            s.style.display = "none";
            var l = (0,
            a.Z)(s, e || o.Z.noop);
            return r && Array.prototype.forEach.call(r, (function(t) {
                "string" == typeof t ? s.appendChild((0,
                n.Z)(t)) : s.appendChild(t)
            }
            )),
            {
                ui: l,
                element: function() {
                    return s
                },
                toggle: function(t) {
                    t ? this.show() : this.hide()
                },
                show: function() {
                    s.style.display = ""
                },
                hide: function() {
                    s.style.display = "none"
                }
            }
        }
    },
    4739: function(t, e, i) {
        "use strict";
        i.d(e, {
            w: function() {
                return s
            }
        });
        var n = i(6286)
          , o = i(2308)
          , a = i(8395)
          , r = {};
        function s(t) {
            if (!r[t]) {
                var e = Object.keys(r);
                e.length > 10 && delete r[e[0]];
                var i = (0,
                o.Z)(t);
                r[t] = i
            }
            return r[t].cloneNode(!0)
        }
        var l = function() {
            function t(t, e, i, o, r) {
                var l, c = document.createElement("div");
                c.className = "jw-icon jw-icon-inline jw-button-color jw-reset " + (r || ""),
                c.setAttribute("button", o),
                c.setAttribute("role", "button"),
                c.setAttribute("tabindex", "0"),
                e && c.setAttribute("aria-label", e),
                t && "<svg" === t.substring(0, 4) ? l = s(t) : ((l = document.createElement("div")).className = "jw-icon jw-button-image jw-button-color jw-reset",
                t && (0,
                n.oB)(l, {
                    backgroundImage: "url(" + t + ")"
                })),
                c.appendChild(l),
                (0,
                a.Z)(c, i, this),
                c.addEventListener("mousedown", (function(t) {
                    t.preventDefault()
                }
                )),
                this.id = o,
                this.buttonElement = c
            }
            var e = t.prototype;
            return e.element = function() {
                return this.buttonElement
            }
            ,
            e.toggle = function(t) {
                t ? this.show() : this.hide()
            }
            ,
            e.show = function() {
                this.buttonElement.style.display = ""
            }
            ,
            e.hide = function() {
                this.buttonElement.style.display = "none"
            }
            ,
            t
        }();
        e.Z = l
    },
    2067: function(t, e, i) {
        "use strict";
        i.d(e, {
            s: function() {
                return s
            },
            k: function() {
                return l
            }
        });
        var n = i(4806)
          , o = i(3060)
          , a = i(8395);
        function r(t, e) {
            return r = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            r(t, e)
        }
        var s = function() {
            function t(t, e, i) {
                void 0 === i && (i = o.Ge),
                this.el = (0,
                n.az)(i(t)),
                this.ui = (0,
                a.Z)(this.el, e, this)
            }
            return t.prototype.destroy = function() {
                this.el.parentNode && this.el.parentNode.removeChild(this.el),
                this.ui.destroy()
            }
            ,
            t
        }()
          , l = function(t) {
            var e, i;
            function a(e, i, n) {
                return void 0 === n && (n = o.dr),
                t.call(this, e, i, n) || this
            }
            i = t,
            (e = a).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            r(e, i);
            var s = a.prototype;
            return s.activate = function() {
                this.active || ((0,
                n.og)(this.el, "jw-settings-item-active", !0),
                this.el.setAttribute("aria-checked", "true"),
                this.active = !0)
            }
            ,
            s.deactivate = function() {
                this.active && ((0,
                n.og)(this.el, "jw-settings-item-active", !1),
                this.el.setAttribute("aria-checked", "false"),
                this.active = !1)
            }
            ,
            a
        }(s)
    },
    2180: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return f
            }
        });
        var n = i(5053)
          , o = i(1026)
          , a = i(4806)
          , r = i(3388)
          , s = i(2431)
          , l = i(2067)
          , c = i(666)
          , u = i(9189)
          , d = i(8280)
          , p = i(6887);
        function h(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function w(t, e) {
            return w = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            w(t, e)
        }
        var f = function(t) {
            var e, i;
            function o(e, i, n, o, r) {
                var s;
                return void 0 === r && (r = c.qF),
                (s = t.call(this) || this).open = s.open.bind(h(s)),
                s.close = s.close.bind(h(s)),
                s.toggle = s.toggle.bind(h(s)),
                s.name = e,
                s.title = i || e,
                s.localizedPrevious = o.prev,
                s.isSubmenu = !!n,
                s.el = (0,
                a.az)(r(s.isSubmenu, e, s.title)),
                s.buttonContainer = s.el.querySelector(".jw-" + s.name + "-topbar-buttons"),
                s.children = {},
                s.openMenus = [],
                s.items = [],
                s.visible = !1,
                s.parentMenu = n,
                s.mainMenu = s.parentMenu ? s.parentMenu.mainMenu : h(s),
                s.categoryButton = null,
                s.closeButton = s.mainMenu.closeButton,
                s.isSubmenu && (s.parentMenu.name === s.mainMenu.name && (s.categoryButton = s.createCategoryButton()),
                s.parentMenu.parentMenu && !s.mainMenu.backButton && (s.mainMenu.backButton = s.createBackButton(s.localizedPrevious)),
                s.itemsContainer = s.createItemsContainer(),
                s.parentMenu.appendMenu(h(s))),
                s
            }
            i = t,
            (e = o).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            w(e, i);
            var f = o.prototype;
            return f.createItemsContainer = function() {
                var t = this
                  , e = this.el.querySelector(".jw-settings-submenu-items")
                  , i = this.mainMenu.closeButton && this.mainMenu.closeButton.element()
                  , o = this.mainMenu.backButton && this.mainMenu.backButton.element()
                  , r = this.categoryButton && this.categoryButton.element()
                  , s = new n.ZP(e);
                return s.on("keydown", (function(n) {
                    if (event.target.parentNode === e) {
                        var s, l = n.sourceEvent, c = n.target, d = t.topbar && t.topbar.firstChild, p = document.getElementsByClassName("jw-icon-settings")[0], h = r ? (0,
                        a.AH)(r) : i, w = r ? (0,
                        a.i3)(r) : o, f = (0,
                        a.AH)(c) || d || e.firstChild, g = (0,
                        a.i3)(c) || d || e.lastChild, j = l && (0,
                        u.ku)(l.key);
                        switch (j) {
                        case "Tab":
                            s = l.shiftKey ? w : h;
                            break;
                        case "Left":
                            s = w || t.close(n) && p;
                            break;
                        case "Up":
                            s = g;
                            break;
                        case "Right":
                            s = h;
                            break;
                        case "Down":
                            s = f;
                            break;
                        case "Esc":
                            s = p,
                            t.mainMenu.close(event)
                        }
                        s && s.focus(),
                        l.preventDefault(),
                        "Esc" !== j && l.stopPropagation()
                    }
                }
                )),
                s
            }
            ,
            f.createCategoryButton = function() {
                return function(t) {
                    var e = t.name
                      , i = t.title
                      , n = {
                        captions: "cc-off",
                        audioTracks: "audio-tracks",
                        quality: "quality-100",
                        playbackRates: "playback-rate"
                    }[e];
                    if (n || t.icon) {
                        var o = (0,
                        r.Z)("jw-settings-" + e + " jw-submenu-" + e, (function(e) {
                            t.open(e)
                        }
                        ), i, [t.icon && (0,
                        a.az)(t.icon) || (0,
                        s.W)(n)])
                          , l = o.element();
                        return l.setAttribute("name", e),
                        l.setAttribute("role", "button"),
                        l.setAttribute("type", "button"),
                        l.setAttribute("aria-expanded", "false"),
                        l.setAttribute("aria-controls", t.el.id),
                        "ontouchstart"in window || (o.tooltip = (0,
                        d.i)(l, e, i)),
                        o.ui.directSelect = !0,
                        o
                    }
                }(this)
            }
            ,
            f.createBackButton = function(t) {
                var e = this
                  , i = (0,
                r.Z)("jw-settings-back", (function(t) {
                    var i = e.mainMenu.backButtonTarget;
                    i && i.open(t)
                }
                ), t, [(0,
                s.W)("arrow-left")]);
                return (0,
                a.SH)(this.mainMenu.topbar.el, i.element()),
                i
            }
            ,
            f.setBackButtonAriaLabel = function(t) {
                var e = this.mainMenu.backButton.element()
                  , i = t ? this.localizedPrevious + " - " + t : this.localizedPrevious;
                e.setAttribute("aria-label", i)
            }
            ,
            f.createTopbar = function() {
                var t = (0,
                a.az)('<div class="jw-reset jw-submenu-topbar"></div>')
                  , e = this.itemsContainer.el
                  , i = this.mainMenu
                  , o = this.categoryButton;
                return this.topbarUI = new n.ZP(t).on("keydown", (function(t) {
                    var n = t.sourceEvent
                      , r = function() {
                        o ? ((0,
                        a.i3)(o.element()).focus(),
                        n.preventDefault()) : i.backButton.element().focus()
                    }
                      , s = function() {
                        o ? ((0,
                        a.AH)(o.element()).focus(),
                        n.preventDefault()) : i.closeButton.element().focus()
                    };
                    switch ((0,
                    u.ku)(n.key)) {
                    case "Up":
                        e.lastChild.focus();
                        break;
                    case "Down":
                        e.firstChild.focus();
                        break;
                    case "Left":
                        r();
                        break;
                    case "Right":
                        s();
                        break;
                    case "Tab":
                        n.shiftKey ? r() : s()
                    }
                }
                )),
                (0,
                a.SH)(this.el, t),
                t
            }
            ,
            f.createItems = function(t, e, i, n) {
                var o = this;
                void 0 === i && (i = {}),
                void 0 === n && (n = l.k);
                var r = this.name;
                return t.map((function(t, s) {
                    var l, c, u;
                    switch (r) {
                    case "quality":
                        "Auto" === t.label && 0 === s ? (l = "" + i.defaultText,
                        u = ' <span class="jw-reset jw-auto-label"></span>') : l = t.label;
                        break;
                    case "captions":
                        l = "Off" !== t.label && "off" !== t.id || 0 !== s ? t.label : i.defaultText;
                        break;
                    case "playbackRates":
                        c = t,
                        l = (0,
                        p.t6)(i.tooltipText) ? "x" + t : t + "x";
                        break;
                    case "audioTracks":
                        l = t.name
                    }
                    l || (l = t,
                    "object" == typeof t && (l.options = i));
                    var d = new n(l,function(t) {
                        if (!d.active) {
                            if (d.deactivate) {
                                o.items.filter((function(t) {
                                    return !0 === t.active
                                }
                                )).forEach((function(t) {
                                    t.deactivate()
                                }
                                ));
                                var i = o.mainMenu.backButtonTarget;
                                i ? i.open(t) : o.mainMenu.close(t)
                            }
                            d.activate && d.activate(),
                            e(c || s)
                        }
                    }
                    .bind(o));
                    return u && d.el.appendChild((0,
                    a.az)(u)),
                    d
                }
                ))
            }
            ,
            f.setMenuItems = function(t, e) {
                var i = this;
                t ? (this.destroyItems(),
                t.forEach((function(t) {
                    i.items.push(t),
                    i.itemsContainer.el.appendChild(t.el)
                }
                )),
                e > -1 && this.items[e].activate(),
                this.categoryButton && this.categoryButton.show()) : this.removeMenu()
            }
            ,
            f.appendMenu = function(t) {
                if (t) {
                    var e = t.el
                      , i = t.name
                      , n = t.categoryButton;
                    if (this.children[i] = t,
                    n) {
                        var o = this.mainMenu.buttonContainer
                          , a = o.querySelector(".jw-settings-sharing")
                          , r = "quality" === i ? o.firstChild : a || this.closeButton.element();
                        o.insertBefore(n.element(), r)
                    }
                    this.mainMenu.el.appendChild(e),
                    this.mainMenu.trigger("menuAppended", i)
                }
            }
            ,
            f.removeMenu = function(t) {
                if (!t)
                    return this.parentMenu.removeMenu(this.name);
                var e = this.children[t];
                e && (delete this.children[t],
                e.destroy(),
                this.mainMenu.trigger("menuRemoved", t))
            }
            ,
            f.open = function(t) {
                var e, i = this.mainMenu.visible;
                if (this.items.length) {
                    var n = t && t.sourceEvent
                      , o = this.topbar ? this.topbar.firstChild : this.items[0].el
                      , a = this.items[this.items.length - 1].el
                      , r = n && "keydown" === n.type
                      , s = "Up" === (r && (0,
                    u.ku)(n.key)) ? a : o;
                    if (!this.visible || this.openMenus.length) {
                        var l = this.mainMenu
                          , c = this.parentMenu
                          , d = this.categoryButton;
                        if (c.openMenus.push(this.name),
                        c.openMenus.length > 1 && c.closeChildren(this.name),
                        d && d.element().setAttribute("aria-expanded", "true"),
                        c.isSubmenu) {
                            c.el.classList.remove("jw-settings-submenu-active"),
                            l.topbar.el.classList.add("jw-nested-menu-open");
                            var p = l.topbar.el.querySelector(".jw-settings-topbar-text");
                            p.setAttribute("name", this.title),
                            p.innerText = this.title;
                            var h = c.title;
                            this.setBackButtonAriaLabel(h),
                            l.backButton.show(),
                            this.mainMenu.backButtonTarget = this.parentMenu,
                            this.buttonContainer && this.buttonContainer.el.setAttribute("aria-expanded", !0),
                            e = p
                        } else
                            l.topbar.el.classList.remove("jw-nested-menu-open"),
                            l.backButton && l.backButton.hide(),
                            this.mainMenu.backButtonTarget && (this.mainMenu.backButtonTarget = null);
                        this.el.classList.add("jw-settings-submenu-active"),
                        i && r ? e = s : i || (l.open(t),
                        e = d.element(),
                        d && d.tooltip && !r && (d.tooltip.suppress = !0)),
                        this.openMenus.length && this.closeChildren(),
                        this.el.scrollTop = 0,
                        this.visible = !0,
                        this.el.setAttribute("aria-expanded", "true"),
                        e && setTimeout((function() {
                            e.focus()
                        }
                        ))
                    } else
                        this.items.length && r && s.focus()
                }
            }
            ,
            f.close = function(t) {
                var e = this;
                this.visible && (this.visible = !1,
                this.el.setAttribute("aria-expanded", "false"),
                this.el.classList.remove("jw-settings-submenu-active"),
                this.buttonContainer && this.buttonContainer.el.setAttribute("aria-expanded", !1),
                this.categoryButton && this.categoryButton.element().setAttribute("aria-expanded", "false"),
                this.parentMenu.openMenus = this.parentMenu.openMenus.filter((function(t) {
                    return t !== e.name
                }
                )),
                !this.mainMenu.openMenus.length && this.mainMenu.visible && this.mainMenu.close(t),
                this.openMenus.length && this.closeChildren())
            }
            ,
            f.closeChildren = function(t) {
                var e = this;
                this.openMenus.forEach((function(i) {
                    if (i !== t) {
                        var n = e.children[i];
                        n && n.close()
                    }
                }
                ))
            }
            ,
            f.toggle = function(t, e) {
                if (e && this.mainMenu.visible)
                    return this.mainMenu.close(t);
                this.visible ? this.close(t) : this.open(t)
            }
            ,
            f.destroyItems = function() {
                this.items.forEach((function(t) {
                    t.destroy()
                }
                )),
                this.items = []
            }
            ,
            f.destroy = function() {
                var t = this;
                Object.keys(this.children).map((function(e) {
                    t.children[e].destroy()
                }
                )),
                this.categoryButton && (this.parentMenu.buttonContainer.removeChild(this.categoryButton.element()),
                this.categoryButton.ui.destroy()),
                this.topbarUI && this.topbarUI.destroy(),
                this.destroyItems(),
                this.itemsContainer.destroy();
                var e = this.parentMenu.openMenus
                  , i = e.indexOf(this.name);
                e.length && i > -1 && this.openMenus.splice(i, 1),
                delete this.parentMenu,
                this.visible = !1,
                this.el.parentNode && this.el.parentNode.removeChild(this.el),
                this.off()
            }
            ,
            o
        }(o.ZP)
    },
    9189: function(t, e, i) {
        "use strict";
        i.d(e, {
            JU: function() {
                return c
            },
            ku: function() {
                return u
            },
            MR: function() {
                return h
            },
            dt: function() {
                return w
            }
        });
        var n, o, a = ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "ff00ff", "#00ffff"], r = ["Arial", "Courier", "Georgia", "Impact", "Lucida Console", "Tahoma", "Times New Roman", "Trebuchet MS", "Verdana"], s = ["100%", "75%", "50%", "25%", "0%"], l = [100, 75, 50, 25, 0], c = function(t) {
            return [{
                name: "color",
                label: t.color,
                options: n || d(t),
                values: a,
                defaultVal: "#ffffff"
            }, {
                name: "fontOpacity",
                label: t.fontOpacity,
                options: ["100%", "75%", "25%"],
                values: [100, 75, 25],
                defaultVal: 100
            }, {
                name: "userFontScale",
                label: t.userFontScale,
                options: ["200%", "175%", "150%", "125%", "100%", "75%", "50%"],
                values: [2, 1.75, 1.5, 1.25, 1, .75, .5],
                defaultVal: 1
            }, {
                name: "fontFamily",
                label: t.fontFamily,
                options: r,
                values: r,
                defaultVal: "Arial"
            }, {
                name: "edgeStyle",
                label: t.edgeStyle,
                options: o || p(t),
                values: ["none", "raised", "depressed", "uniform", "dropShadow"],
                defaultVal: "none"
            }, {
                name: "backgroundColor",
                label: t.backgroundColor,
                options: n || d(t),
                values: a,
                defaultVal: "#000000"
            }, {
                name: "backgroundOpacity",
                label: t.backgroundOpacity,
                options: s,
                values: l,
                defaultVal: 50
            }, {
                name: "windowColor",
                label: t.windowColor,
                options: n || d(t),
                values: a,
                defaultVal: "#000000"
            }, {
                name: "windowOpacity",
                label: t.windowOpacity,
                options: ["100%", "75%", "50%", "25%", "0%"],
                values: l,
                defaultVal: 0
            }]
        }, u = function(t) {
            return t && t.replace(/(Arrow|ape)/, "")
        }, d = function(t) {
            var e = t.white
              , i = t.black
              , o = t.red
              , a = t.green
              , r = t.blue
              , s = t.yellow
              , l = t.magenta
              , c = t.cyan;
            return n = [e, i, o, a, r, s, l, c]
        }, p = function(t) {
            var e = t.none
              , i = t.raised
              , n = t.depressed
              , a = t.uniform
              , r = t.dropShadow;
            return o = [e, i, n, a, r]
        };
        function h() {
            var t = this;
            Object.keys(this.children).map((function(e) {
                t.children[e].destroy()
            }
            )),
            this.model && (this.model.off(null, null, this),
            delete this.model),
            this.off()
        }
        function w(t, e) {
            t && e > -1 && (t.items.forEach((function(t) {
                t.deactivate()
            }
            )),
            t.items[e].activate())
        }
    },
    8280: function(t, e, i) {
        "use strict";
        i.d(e, {
            i: function() {
                return o
            }
        });
        var n = i(4806);
        function o(t, e, i, o, a) {
            var r = document.createElement("div");
            r.className = "jw-reset-text jw-tooltip jw-tooltip-" + e,
            r.setAttribute("dir", "auto");
            var s = document.createElement("div");
            s.className = "jw-text",
            r.appendChild(s),
            t.appendChild(r);
            var l = {
                dirty: !!i,
                opened: !1,
                text: i,
                touchEvent: !1,
                suppress: !1,
                open: function() {
                    l.touchEvent || (l.suppress ? l.suppress = !1 : (c(!0),
                    o && o()))
                },
                close: function() {
                    l.touchEvent || (c(!1),
                    a && a())
                },
                setText: function(t) {
                    t !== l.text && (l.text = t,
                    l.dirty = !0),
                    l.opened && c(!0)
                }
            }
              , c = function(t) {
                t && l.dirty && ((0,
                n.nh)(s, l.text),
                l.dirty = !1),
                l.opened = t,
                (0,
                n.og)(r, "jw-open", t)
            };
            return t.addEventListener("mouseover", l.open),
            t.addEventListener("focus", l.open),
            t.addEventListener("blur", l.close),
            t.addEventListener("mouseout", l.close),
            t.addEventListener("touchstart", (function() {
                l.touchEvent = !0
            }
            ), {
                passive: !0
            }),
            l
        }
    },
    2998: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return u
            }
        });
        var n = i(7880)
          , o = i(1026)
          , a = i(5053)
          , r = i(3347)
          , s = i(4806);
        function l(t, e) {
            return l = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            l(t, e)
        }
        var c = function(t) {
            var e = (0,
            s.A8)(t)
              , i = window.pageXOffset;
            return i && n.OS.android && document.body.parentElement && document.body.parentElement.getBoundingClientRect().left >= 0 && (e.left -= i,
            e.right -= i),
            e
        }
          , u = function(t) {
            var e, i;
            function n(e, i) {
                var n;
                return (n = t.call(this) || this).className = e + " jw-background-color jw-reset",
                n.orientation = i,
                n
            }
            i = t,
            (e = n).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            l(e, i);
            var o = n.prototype;
            return o.setup = function() {
                var t, e;
                this.el = (0,
                s.az)((void 0 === (t = this.className) && (t = ""),
                void 0 === (e = "jw-slider-" + this.orientation) && (e = ""),
                '<div class="' + t + " " + e + ' jw-reset" aria-hidden="true"><div class="jw-slider-container jw-reset"><div class="jw-rail jw-reset"></div><div class="jw-buffer jw-reset"></div><div class="jw-progress jw-reset"></div><div class="jw-knob jw-reset"></div></div></div>')),
                this.elementRail = this.el.getElementsByClassName("jw-slider-container")[0],
                this.elementBuffer = this.el.getElementsByClassName("jw-buffer")[0],
                this.elementProgress = this.el.getElementsByClassName("jw-progress")[0],
                this.elementThumb = this.el.getElementsByClassName("jw-knob")[0],
                this.ui = new a.ZP(this.element(),{
                    preventScrolling: !0
                }).on("dragStart", this.dragStart, this).on("drag", this.dragMove, this).on("dragEnd", this.dragEnd, this).on("click", this.tap, this)
            }
            ,
            o.dragStart = function() {
                this.trigger("dragStart"),
                this.railBounds = c(this.elementRail)
            }
            ,
            o.dragEnd = function(t) {
                this.dragMove(t),
                this.trigger("dragEnd")
            }
            ,
            o.dragMove = function(t) {
                var e, i, n = this.railBounds = this.railBounds ? this.railBounds : c(this.elementRail);
                return "pointercancel" === t.sourceEvent.type || (i = "horizontal" === this.orientation ? (e = t.pageX) < n.left ? 0 : e > n.right ? 100 : 100 * (0,
                r.v)((e - n.left) / n.width, 0, 1) : (e = t.pageY) >= n.bottom ? 0 : e <= n.top ? 100 : 100 * (0,
                r.v)((n.height - (e - n.top)) / n.height, 0, 1),
                this.render(i),
                this.update(i)),
                !1
            }
            ,
            o.tap = function(t) {
                this.railBounds = c(this.elementRail),
                this.dragMove(t)
            }
            ,
            o.limit = function(t) {
                return t
            }
            ,
            o.update = function(t) {
                this.trigger("update", {
                    percentage: t
                })
            }
            ,
            o.render = function(t) {
                t = Math.max(0, Math.min(t, 100));
                var e = this.elementThumb
                  , i = this.elementProgress;
                "horizontal" === this.orientation ? (e.style.left = t + "%",
                i.style.width = t + "%") : (e.style.bottom = t + "%",
                i.style.height = t + "%")
            }
            ,
            o.updateBuffer = function(t) {
                this.elementBuffer.style.width = t + "%"
            }
            ,
            o.element = function() {
                return this.el
            }
            ,
            n
        }(o.ZP)
    },
    6452: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return y
            }
        });
        var n = i(5322)
          , o = i(3347)
          , a = i(6286)
          , r = i(7958)
          , s = i(4806)
          , l = i(5053)
          , c = i(2998)
          , u = i(9590)
          , d = i(8027)
          , p = i(2395)
          , h = function() {
            function t(t, e, i) {
                this.time = t,
                this.text = e,
                this.el = document.createElement("div");
                var n = "jw-cue jw-reset";
                i && "string" == typeof i && (n += " jw-cue-type-" + i),
                this.el.className = n
            }
            return t.prototype.align = function(t) {
                if ("%" === this.time.toString().slice(-1))
                    this.pct = this.time;
                else {
                    var e = this.time / t * 100;
                    this.pct = e + "%"
                }
                this.el.style.left = this.pct
            }
            ,
            t
        }()
          , w = {
            loadChapters: function(t) {
                (0,
                d.h)(t, this.chaptersLoaded.bind(this), this.chaptersFailed, {
                    plainText: !0
                })
            },
            chaptersLoaded: function(t) {
                var e = (0,
                p.Z)(t.responseText);
                if (Array.isArray(e)) {
                    var i = this._model.get("cues").concat(e);
                    this._model.set("cues", i)
                }
            },
            chaptersFailed: function() {},
            addCue: function(t) {
                this.cues.push(new h(t.begin,t.text,t.cueType))
            },
            drawCues: function() {
                var t = this
                  , e = this._model.get("duration");
                !e || e <= 0 || this.cues.forEach((function(i) {
                    i.align(e),
                    t.elementRail.appendChild(i.el)
                }
                ))
            },
            setActiveCue: function(t) {
                this.activeCue = this.cues.reduce((function(e, i) {
                    return t < i.time ? e : e ? i.time > e.time ? i : e : i
                }
                ), null)
            },
            resetCues: function() {
                this.cues.forEach((function(t) {
                    t.el.parentNode && t.el.parentNode.removeChild(t.el)
                }
                )),
                this.cues = []
            }
        };
        function f(t) {
            this.begin = t.begin,
            this.end = t.end,
            this.img = t.text
        }
        var g = {
            loadThumbnails: function(t) {
                t && (this.vttPath = t.split("?")[0].split("/").slice(0, -1).join("/"),
                this.individualImage = null,
                (0,
                d.h)(t, this.thumbnailsLoaded.bind(this), this.thumbnailsFailed.bind(this), {
                    plainText: !0
                }))
            },
            thumbnailsLoaded: function(t) {
                var e = (0,
                p.Z)(t.responseText);
                Array.isArray(e) && (e.forEach((function(t) {
                    this.thumbnails.push(new f(t))
                }
                ), this),
                this.drawCues(),
                this.showThumbnail(0))
            },
            thumbnailsFailed: function() {},
            chooseThumbnail: function(t) {
                var e = this.thumbnails
                  , i = (0,
                n.e1)(e, {
                    end: t
                }, (0,
                n.Cb)("end"));
                i >= e.length && (i = e.length - 1);
                var o = e[i].img;
                return o.indexOf("://") < 0 && (o = this.vttPath ? this.vttPath + "/" + o : o),
                o
            },
            loadThumbnail: function(t) {
                var e = this.chooseThumbnail(t)
                  , i = {
                    margin: "0 auto",
                    backgroundPosition: "0 0"
                };
                if (e.indexOf("#xywh") > 0)
                    try {
                        var o = /(.+)#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(e);
                        if (!o)
                            throw new Error("No match for expected thumbnail pattern");
                        e = o[1];
                        var a = parseInt(o[2])
                          , r = parseInt(o[3]);
                        i.backgroundPosition = -1 * a + "px " + -1 * r + "px",
                        i.width = o[4],
                        this.timeTip.setWidth(+i.width),
                        i.height = o[5]
                    } catch (t) {
                        return
                    }
                else if (!this.individualImage) {
                    var s = this.individualImage = new Image;
                    s.onload = (0,
                    n.ak)((function() {
                        s.onload = null,
                        this.timeTip.image({
                            width: s.width,
                            height: s.height
                        }),
                        this.timeTip.setWidth(s.width)
                    }
                    ), this),
                    s.src = e
                }
                return i.backgroundImage = 'url("' + e + '")',
                i
            },
            showThumbnail: function(t) {
                this._model.get("containerWidth") <= 420 || !this.thumbnails || this.thumbnails.length < 1 || this.timeTip.image(this.loadThumbnail(t))
            },
            resetThumbnails: function() {
                this.timeTip.image({
                    backgroundImage: "",
                    width: 0,
                    height: 0
                }),
                this.thumbnails = []
            }
        };
        function j(t, e) {
            t.prototype = Object.create(e.prototype),
            t.prototype.constructor = t,
            m(t, e)
        }
        function m(t, e) {
            return m = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            m(t, e)
        }
        var v = function(t) {
            function e() {
                return t.apply(this, arguments) || this
            }
            j(e, t);
            var i = e.prototype;
            return i.setup = function() {
                this.textChapter = document.createElement("span"),
                this.textChapter.className = "jw-time-chapter jw-text jw-reset",
                this.textChapter.style.display = "none",
                this.textTime = document.createElement("span"),
                this.textTime.className = "jw-time-time jw-text jw-reset",
                this.img = document.createElement("div"),
                this.img.className = "jw-time-thumb jw-reset",
                this.containerWidth = 0,
                this.textLength = 0,
                this.dragJustReleased = !1;
                var t = document.createElement("div");
                t.className = "jw-time-tip jw-reset",
                t.appendChild(this.img),
                t.appendChild(this.textChapter),
                t.appendChild(this.textTime),
                this.addContent(t)
            }
            ,
            i.image = function(t) {
                (0,
                a.oB)(this.img, t)
            }
            ,
            i.update = function(t, e) {
                this.textTime && (this.textTime.textContent = t,
                e ? this.textChapter && (this.textChapter.textContent = e,
                this.textChapter.style.removeProperty("display")) : this.textChapter && (this.textChapter.style.display = "none",
                this.textChapter.textContent = ""))
            }
            ,
            i.getWidth = function() {
                return this.containerWidth || this.setWidth(),
                this.containerWidth
            }
            ,
            i.setWidth = function(t) {
                t ? this.containerWidth = t + 16 : this.tooltip && (this.containerWidth = (0,
                s.A8)(this.container).width + 16)
            }
            ,
            i.resetWidth = function() {
                this.containerWidth = 0
            }
            ,
            e
        }(u.Z)
          , b = function(t) {
            function e(e, i, o) {
                var a, r, s;
                return (a = t.call(this, "jw-slider-time", "horizontal") || this)._model = e,
                a._api = i,
                a.timeUpdateKeeper = o,
                a.timeTip = new v("jw-tooltip-time",null,!0),
                a.timeTip.setup(),
                a.cues = [],
                a.seekThrottled = (0,
                n.P2)(a.performSeek, 400),
                a._updateAriaTextLimitedThrottled = (r = (0,
                n.P2)(a.updateAriaText, 1e3),
                4,
                s = 0,
                (0,
                n.l7)((function() {
                    if (++s < 4) {
                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                            e[i] = arguments[i];
                        return r.apply(this, e)
                    }
                }
                ), {
                    reset: function() {
                        s = 0
                    },
                    shush: function() {
                        s = 1 / 0
                    }
                })),
                a.setup(),
                a
            }
            j(e, t);
            var i = e.prototype;
            return i.setup = function() {
                var e = this;
                t.prototype.setup.call(this),
                this._model.on("change:duration", this.onDuration, this).on("change:cues", this.updateCues, this).on("seeked", (function() {
                    e._model.get("scrubbing") || (e._updateAriaTextLimitedThrottled.reset(),
                    e._updateAriaTextLimitedThrottled())
                }
                )),
                this._model.change("position", this.onPosition, this).change("buffer", this.onBuffer, this).change("streamType", this.onStreamType, this),
                this._model.player.change("playlistItem", this.onPlaylistItem, this);
                var i = this.el;
                (0,
                s.P$)(i, "tabindex", "0"),
                (0,
                s.P$)(i, "role", "slider"),
                (0,
                s.P$)(i, "aria-label", this._model.get("localization").slider),
                i.removeAttribute("aria-hidden"),
                this.elementRail.appendChild(this.timeTip.element()),
                this.ui = (this.ui || new l.ZP(i)).on("move drag", this.showTimeTooltip, this).on("dragEnd out", this.hideTimeTooltip, this).on("click", (function() {
                    return i.focus()
                }
                )).on("focus", (function() {
                    return e._updateAriaTextLimitedThrottled.reset()
                }
                )).on("blur", (function() {
                    return e._updateAriaTextLimitedThrottled.shush()
                }
                ))
            }
            ,
            i.update = function(e) {
                this.seekTo = e,
                this.seekThrottled(),
                t.prototype.update.apply(this, [e])
            }
            ,
            i.dragStart = function() {
                this._model.set("scrubbing", !0),
                t.prototype.dragStart.call(this)
            }
            ,
            i.dragEnd = function(e) {
                t.prototype.dragEnd.apply(this, [e]),
                this._model.set("scrubbing", !1)
            }
            ,
            i.onBuffer = function(t, e) {
                this.updateBuffer(e)
            }
            ,
            i.onPosition = function(t, e) {
                this.updateTime(e, t.get("duration"))
            }
            ,
            i.onDuration = function(t, e) {
                this.updateTime(t.get("position"), e),
                (0,
                s.P$)(this.el, "aria-valuemin", 0),
                (0,
                s.P$)(this.el, "aria-valuemax", Math.abs(e)),
                this.drawCues()
            }
            ,
            i.onStreamType = function(t, e) {
                this.streamType = e
            }
            ,
            i.updateTime = function(t, e) {
                var i = 0;
                if (e)
                    if ("DVR" === this.streamType) {
                        var n = this._model.get("dvrSeekLimit")
                          , o = e + n;
                        i = (o - (t + n)) / o * 100
                    } else
                        "VOD" !== this.streamType && this.streamType || (i = t / e * 100);
                this._updateAriaTextLimitedThrottled(),
                this.render(i)
            }
            ,
            i.onPlaylistItem = function(t, e) {
                this.reset();
                var i = t.get("cues");
                !this.cues.length && i.length && this.updateCues(null, i);
                var o = e.tracks;
                (0,
                n.S6)(o, (function(t) {
                    t && t.kind && "thumbnails" === t.kind.toLowerCase() ? this.loadThumbnails(t.file) : t && t.kind && "chapters" === t.kind.toLowerCase() && this.loadChapters(t.file)
                }
                ), this)
            }
            ,
            i.performSeek = function() {
                var t, e = this.seekTo, i = this._model.get("duration");
                if (0 === i)
                    this._api.play({
                        reason: "interaction"
                    });
                else if ("DVR" === this.streamType) {
                    var n = this._model.get("seekRange") || {
                        start: 0
                    }
                      , o = this._model.get("dvrSeekLimit");
                    t = n.start + (-i - o) * e / 100,
                    this._api.seek(t, {
                        reason: "interaction"
                    })
                } else
                    t = e / 100 * i,
                    this._api.seek(Math.min(t, i - .25), {
                        reason: "interaction"
                    })
            }
            ,
            i.showTimeTooltip = function(t) {
                var e = this._model.get("duration");
                if (0 !== e) {
                    var i, n = this._model.get("containerWidth"), l = (0,
                    s.A8)(this.elementRail), c = t.pageX ? t.pageX - l.left : t.x, u = (c = (0,
                    o.v)(c, 0, l.width)) / l.width, d = e * u;
                    e < 0 && (d = (e += this._model.get("dvrSeekLimit")) - (d = e * u));
                    var p = (0,
                    r.timeFormat)(d, !0)
                      , h = this.timeTip;
                    if (this.setActiveCue(d),
                    this.activeCue)
                        h.update(p, this.activeCue.text),
                        i = this.activeCue.text.length + p.length;
                    else {
                        var w = p;
                        e < 0 && d > -1 && (w = "Live"),
                        h.update(w),
                        i = w.length
                    }
                    this.textLength !== i && (this.textLength = i,
                    h.resetWidth()),
                    this.showThumbnail(d),
                    (0,
                    s.cn)(h.el, "jw-open");
                    var f = h.getWidth()
                      , g = n - l.width
                      , j = 0;
                    f > g && (j = (f - g) / 2);
                    var m = Math.round(4 * Math.min(l.width - j, Math.max(j, c))) / 4;
                    (0,
                    a.vs)(h.el, "translateX(" + m + "px)")
                }
            }
            ,
            i.hideTimeTooltip = function() {
                (0,
                s.IV)(this.timeTip.el, "jw-open")
            }
            ,
            i.updateCues = function(t, e) {
                var i = this;
                this.resetCues(),
                e && e.length && (e.forEach((function(t) {
                    i.addCue(t)
                }
                )),
                this.drawCues())
            }
            ,
            i.updateAriaText = function() {
                var t = this._model
                  , e = this.el
                  , i = t.get("position")
                  , n = t.get("duration");
                "DVR" === this.streamType && (i = (n = Math.abs(n)) + i);
                var o = (0,
                r.timeFormatAria)(i) + " of " + (0,
                r.timeFormatAria)(n);
                this.timeUpdateKeeper.textContent = o,
                (0,
                s.P$)(e, "aria-valuetext", o),
                (0,
                s.P$)(e, "aria-valuenow", i)
            }
            ,
            i.reset = function() {
                this.resetThumbnails(),
                this.timeTip.resetWidth(),
                this.textLength = 0,
                this._updateAriaTextLimitedThrottled.reset()
            }
            ,
            e
        }(c.Z);
        (0,
        n.l7)(b.prototype, w, g);
        var y = b
    },
    9590: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return s
            }
        });
        var n = i(1026)
          , o = i(4806)
          , a = i(2308);
        function r(t, e) {
            return r = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            r(t, e)
        }
        var s = function(t) {
            var e, i;
            function n(e, i, n, o) {
                var r;
                (r = t.call(this) || this).el = document.createElement("div");
                var s, l, c = "jw-icon jw-icon-tooltip " + e + " jw-button-color jw-reset";
                return n || (c += " jw-hidden"),
                i && (l = i,
                (s = r.el) && l && (s.setAttribute("aria-label", l),
                s.setAttribute("role", "button"),
                s.setAttribute("tabindex", "0"))),
                r.el.className = c,
                r.tooltip = document.createElement("div"),
                r.tooltip.className = "jw-overlay jw-reset",
                r.openClass = "jw-open",
                r.componentType = "tooltip",
                r.el.appendChild(r.tooltip),
                o && o.length > 0 && Array.prototype.forEach.call(o, (function(t) {
                    "string" == typeof t ? r.el.appendChild((0,
                    a.Z)(t)) : r.el.appendChild(t)
                }
                )),
                r
            }
            i = t,
            (e = n).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            r(e, i);
            var s = n.prototype;
            return s.addContent = function(t) {
                this.content && this.removeContent(),
                this.content = t,
                this.tooltip.appendChild(t)
            }
            ,
            s.removeContent = function() {
                this.content && (this.tooltip.removeChild(this.content),
                this.content = null)
            }
            ,
            s.hasContent = function() {
                return !!this.content
            }
            ,
            s.element = function() {
                return this.el
            }
            ,
            s.openTooltip = function(t) {
                this.isOpen || (this.trigger("open-" + this.componentType, t, {
                    isOpen: !0
                }),
                this.isOpen = !0,
                (0,
                o.og)(this.el, this.openClass, this.isOpen))
            }
            ,
            s.closeTooltip = function(t) {
                this.isOpen && (this.trigger("close-" + this.componentType, t, {
                    isOpen: !1
                }),
                this.isOpen = !1,
                (0,
                o.og)(this.el, this.openClass, this.isOpen))
            }
            ,
            s.toggleOpenState = function(t) {
                this.isOpen ? this.closeTooltip(t) : this.openTooltip(t)
            }
            ,
            n
        }(n.ZP)
    },
    379: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return P
            }
        });
        var n = i(5322)
          , o = i(7880)
          , a = i(8700)
          , r = i(2431)
          , s = i(4739)
          , l = i(6452)
          , c = i(9590)
          , u = i(2998)
          , d = i(5053)
          , p = i(4806);
        function h(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function w(t, e) {
            t.prototype = Object.create(e.prototype),
            t.prototype.constructor = t,
            f(t, e)
        }
        function f(t, e) {
            return f = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            f(t, e)
        }
        var g = function(t) {
            function e(e, i, n) {
                var o, a = "jw-slider-volume";
                return "vertical" === e && (a += " jw-volume-tip"),
                (o = t.call(this, a, e) || this).setup(),
                o.element().classList.remove("jw-background-color"),
                (0,
                p.P$)(n, "tabindex", "0"),
                (0,
                p.P$)(n, "aria-label", i),
                (0,
                p.P$)(n, "aria-orientation", e),
                (0,
                p.P$)(n, "aria-valuemin", 0),
                (0,
                p.P$)(n, "aria-valuemax", 100),
                (0,
                p.P$)(n, "role", "slider"),
                o.uiOver = new d.ZP(n).on("click", (function() {}
                )),
                o
            }
            return w(e, t),
            e
        }(u.Z)
          , j = function(t) {
            function e(e, i, n, o, a) {
                var r;
                (r = t.call(this, i, n, !0, o) || this)._model = e,
                r.horizontalContainer = a;
                var s = e.get("localization").volumeSlider;
                return r.horizontalSlider = new g("horizontal",s,a),
                r.verticalSlider = new g("vertical",s,r.tooltip),
                a.appendChild(r.horizontalSlider.element()),
                r.addContent(r.verticalSlider.element()),
                r.verticalSlider.on("update", (function(t) {
                    this.trigger("update", t)
                }
                ), h(r)),
                r.horizontalSlider.on("update", (function(t) {
                    this.trigger("update", t)
                }
                ), h(r)),
                r.horizontalSlider.uiOver.on("keydown", (function(t) {
                    var e = t.sourceEvent;
                    switch (e.keyCode) {
                    case 37:
                        e.stopPropagation(),
                        r.trigger("adjustVolume", -10);
                        break;
                    case 39:
                        e.stopPropagation(),
                        r.trigger("adjustVolume", 10)
                    }
                }
                )),
                r.ui = new d.ZP(r.el,{
                    directSelect: !0
                }).on("click", r.handleClick, h(r)).on("enter", (function() {
                    return r.trigger("toggleValue")
                }
                )),
                r.addSliderHandlers(r.ui),
                r.addSliderHandlers(r.horizontalSlider.uiOver),
                r.addSliderHandlers(r.verticalSlider.uiOver),
                r._model.change("audioMode", r.updateSlider, h(r)),
                r
            }
            w(e, t);
            var i = e.prototype;
            return i.updateSlider = function(t, e) {
                var i = t.get("horizontalVolumeSlider") || e;
                (0,
                p.og)(this.element(), "jw-flag-horizontal-slider", !!i)
            }
            ,
            i.addSliderHandlers = function(t) {
                var e = this.openSlider
                  , i = this.closeSlider;
                t.on("over", e, this).on("out", i, this).on("focus", e, this).on("blur", i, this)
            }
            ,
            i.openSlider = function(e) {
                t.prototype.openTooltip.call(this, e),
                (0,
                p.og)(this.horizontalContainer, this.openClass, !0)
            }
            ,
            i.closeSlider = function(e) {
                t.prototype.closeTooltip.call(this, e),
                (0,
                p.og)(this.horizontalContainer, this.openClass, !1),
                this.horizontalContainer.blur()
            }
            ,
            i.handleClick = function(t) {
                o.OS.mobile ? this.toggleOpenState(t) : this.trigger("toggleValue")
            }
            ,
            i.destroy = function() {
                this.horizontalSlider.uiOver.destroy(),
                this.verticalSlider.uiOver.destroy(),
                this.ui.destroy()
            }
            ,
            e
        }(c.Z)
          , m = i(3388)
          , v = i(8280)
          , b = i(1026)
          , y = i(9002)
          , k = i(7958)
          , x = i(1876)
          , C = i(8395);
        function M(t, e) {
            var i = document.createElement("div");
            return i.className = "jw-icon jw-icon-inline jw-text jw-reset " + t,
            e && (0,
            p.P$)(i, "role", e),
            i
        }
        function T(t) {
            var e = document.createElement("div");
            return e.className = "jw-reset " + t,
            e
        }
        function _(t, e) {
            if ("WebKitPlaybackTargetAvailabilityEvent"in window) {
                var i = (0,
                m.Z)("jw-icon-airplay jw-off", t, e.airplay, (0,
                r.o)("airplay-off,airplay-on"));
                return (0,
                v.i)(i.element(), "airplay", e.airplay),
                i
            }
            if (o.Browser.chrome && window.chrome) {
                var n = document.createElement("google-cast-launcher");
                (0,
                p.P$)(n, "tabindex", "-1"),
                n.className += " jw-reset";
                var a = (0,
                m.Z)("jw-icon-cast", null, e.cast);
                a.ui.off();
                var s = a.element();
                return s.style.cursor = "pointer",
                s.appendChild(n),
                a.button = n,
                (0,
                v.i)(s, "chromecast", e.cast),
                a
            }
        }
        function S(t, e, i) {
            if (!o.OS.mobile && "disabled" !== t && (o.Browser.chrome && !(0,
            y.yS)() || o.Browser.edge || o.Browser.safari)) {
                var n = (0,
                m.Z)("jw-icon-pip jw-off", e, i.pipIcon, (0,
                r.o)("pip-on,pip-off"));
                return (0,
                v.i)(n.element(), "pip", i.pipIcon),
                n
            }
        }
        function E(t, e) {
            return t.filter((function(t) {
                return !e.some((function(e) {
                    return e.id + e.btnClass === t.id + t.btnClass && t.callback === e.callback
                }
                ))
            }
            ))
        }
        var A = function(t, e) {
            e.forEach((function(e) {
                e.element && (e = e.element()),
                t.appendChild(e)
            }
            ))
        }
          , P = function() {
            function t(t, e, i) {
                var s = this;
                (0,
                n.l7)(this, b.ZP),
                this._api = t,
                this._model = e,
                this._isMobile = o.OS.mobile,
                this._volumeAnnouncer = i.querySelector(".jw-volume-update");
                var c, u, h, w = e.get("localization"), f = new l.Z(e,t,i.querySelector(".jw-time-update")), g = this.menus = [];
                this.ui = [];
                var y = ""
                  , k = w.volume;
                if (this._isMobile) {
                    if (!(e.get("sdkplatform") || o.OS.iOS && o.OS.version.major < 10)) {
                        var E = (0,
                        r.o)("volume-0,volume-100");
                        h = (0,
                        m.Z)("jw-icon-volume", (function() {
                            t.setMute()
                        }
                        ), k, E)
                    }
                } else {
                    (u = document.createElement("div")).className = "jw-horizontal-volume-container";
                    var P = (c = new j(e,"jw-icon-volume",k,(0,
                    r.o)("volume-0,volume-50,volume-100"),u)).element();
                    g.push(c),
                    (0,
                    p.P$)(P, "role", "group"),
                    e.change("mute", (function(t, e) {
                        var i = e ? w.unmute : w.mute;
                        (0,
                        p.P$)(P, "aria-label", i + " button")
                    }
                    ), this)
                }
                var z = (0,
                m.Z)("jw-icon-next", (function() {
                    t.next({
                        feedShownId: y,
                        reason: "interaction"
                    })
                }
                ), w.next, (0,
                r.o)("next"))
                  , I = (0,
                m.Z)("jw-icon-settings jw-settings-submenu-button", (function(t) {
                    s.trigger("settingsInteraction", "quality", !0, t)
                }
                ), w.settings, (0,
                r.o)("settings"));
                (0,
                p.P$)(I.element(), "aria-controls", "jw-settings-menu"),
                (0,
                p.P$)(I.element(), "aria-expanded", !1);
                var L = (0,
                m.Z)("jw-icon-cc jw-settings-submenu-button", (function(t) {
                    s.trigger("settingsInteraction", "captions", !1, t)
                }
                ), w.cc, (0,
                r.o)("cc-off,cc-on"));
                (0,
                p.P$)(L.element(), "aria-controls", "jw-settings-submenu-captions");
                var B = (0,
                m.Z)("jw-text-live", (function() {
                    s.goToLiveEdge()
                }
                ), w.liveBroadcast);
                B.element().textContent = w.liveBroadcast;
                var O, V, R = this.elements = {
                    alt: ("jw-text-alt",
                    O = "status",
                    V = document.createElement("span"),
                    V.className = "jw-text jw-reset-text jw-text-alt",
                    (0,
                    p.P$)(V, "role", O),
                    (0,
                    p.P$)(V, "dir", "auto"),
                    V),
                    play: (0,
                    m.Z)("jw-icon-playback", (function() {
                        t.playToggle({
                            reason: "interaction"
                        })
                    }
                    ), w.play, (0,
                    r.o)("play,pause,stop")),
                    rewind: (0,
                    m.Z)("jw-icon-rewind", (function() {
                        s.rewind()
                    }
                    ), w.rewind, (0,
                    r.o)("rewind")),
                    live: B,
                    next: z,
                    elapsed: M("jw-text-elapsed", "timer"),
                    countdown: M("jw-text-countdown", "timer"),
                    time: f,
                    duration: M("jw-text-duration", "timer"),
                    mute: h,
                    volumetooltip: c,
                    horizontalVolumeContainer: u,
                    cast: _((function() {
                        t.castToggle()
                    }
                    ), w),
                    pip: S(e.get("pipIcon"), (function() {
                        t.setPip()
                    }
                    ), w),
                    imaFullscreen: (0,
                    m.Z)("jw-icon-fullscreen", (function() {
                        t.setFullscreen()
                    }
                    ), w.fullscreen, (0,
                    r.o)("fullscreen-off,fullscreen-on")),
                    fullscreen: (0,
                    m.Z)("jw-icon-fullscreen", (function() {
                        t.setFullscreen()
                    }
                    ), w.fullscreen, (0,
                    r.o)("fullscreen-off,fullscreen-on")),
                    spacer: T("jw-spacer"),
                    buttonContainer: T("jw-button-container"),
                    settingsButton: I,
                    captionsButton: L
                }, F = (0,
                v.i)(L.element(), "captions", w.cc), H = function(t) {
                    var e = t.get("captionsList")[t.get("captionsIndex")]
                      , i = w.cc;
                    e && "Off" !== e.label && (i = e.label),
                    F.setText(i)
                }, Z = (0,
                v.i)(R.play.element(), "play", w.play);
                this.setPlayText = function(t) {
                    Z.setText(t)
                }
                ;
                var N = R.next.element()
                  , q = (0,
                v.i)(N, "next", w.nextUp, (function() {
                    var t = e.get("nextUp");
                    t && (y = (0,
                    x.B)(x.F),
                    s.trigger("nextShown", {
                        mode: t.mode,
                        ui: "nextup",
                        itemsShown: [t],
                        feedData: t.feedData,
                        reason: "hover",
                        feedShownId: y
                    }))
                }
                ), (function() {
                    y = ""
                }
                ));
                (0,
                p.P$)(N, "dir", "auto"),
                (0,
                v.i)(R.rewind.element(), "rewind", w.rewind),
                (0,
                v.i)(R.settingsButton.element(), "settings", w.settings);
                var U = [(0,
                v.i)(R.fullscreen.element(), "fullscreen", w.fullscreen), (0,
                v.i)(R.imaFullscreen.element())];
                (0,
                p.cn)(R.imaFullscreen.element(), "jw-fullscreen-ima");
                var D = [R.play, R.rewind, R.next, R.volumetooltip, R.imaFullscreen, R.mute, R.horizontalVolumeContainer, R.alt, R.live, R.elapsed, R.countdown, R.duration, R.spacer, R.cast, R.captionsButton, R.settingsButton, R.pip, R.fullscreen].filter((function(t) {
                    return t
                }
                ))
                  , W = [R.time, R.buttonContainer].filter((function(t) {
                    return t
                }
                ));
                this.el = document.createElement("div"),
                this.el.className = "jw-controlbar jw-reset",
                A(R.buttonContainer, D),
                A(this.el, W);
                var Q = e.get("logo");
                if (Q && "control-bar" === Q.position && this.addLogo(Q),
                R.play.show(),
                R.fullscreen.show(),
                R.imaFullscreen.show(),
                R.mute && R.mute.show(),
                R.pip && R.pip.show(),
                e.change("volume", this.onVolume, this),
                e.change("mute", (function(t, e) {
                    s.renderVolume(e, t.get("volume"))
                }
                ), this),
                e.change("state", this.onState, this),
                e.change("duration", this.onDuration, this),
                e.change("position", this.onElapsed, this),
                e.change("fullscreen", (function(t, e) {
                    for (var i = [s.elements.fullscreen.element(), s.elements.imaFullscreen.element()], n = 0; n < i.length; n++) {
                        var o = i[n];
                        (0,
                        p.og)(i[n], "jw-off", e);
                        var a = t.get("fullscreen") ? w.exitFullscreen : w.fullscreen;
                        U[n].setText(a),
                        (0,
                        p.P$)(o, "aria-label", a)
                    }
                }
                ), this),
                e.change("allowFullscreen", this.onAllowFullscreenToggle, this),
                e.change("pip", (function(t, e) {
                    s.elements.pip && (0,
                    p.og)(s.elements.pip.element(), "jw-off", e)
                }
                ), this),
                e.change("mediaType", (function(t, e) {
                    s.elements.pip && s.elements.pip.toggle("audio" !== e)
                }
                ), this),
                e.change("streamType", this.onStreamTypeChange, this),
                e.change("dvrLive", (function(t, e) {
                    var i = w.liveBroadcast
                      , n = w.notLive
                      , o = s.elements.live.element()
                      , a = !1 === e;
                    (0,
                    p.og)(o, "jw-dvr-live", a),
                    (0,
                    p.P$)(o, "aria-label", a ? n : i),
                    o.textContent = a ? n : i
                }
                ), this),
                e.change("altText", this.setAltText, this),
                e.change("customButtons", this.updateButtons, this),
                e.on("change:captionsIndex", H, this),
                e.on("change:captionsList", H, this),
                e.change("nextUp", (function(t, e) {
                    y = (0,
                    x.B)(x.F);
                    var i = w.nextUp;
                    e && e.title && (i += ": " + e.title),
                    q.setText(i),
                    R.next.toggle(!!e)
                }
                ), this),
                e.change("audioMode", this.onAudioMode, this),
                R.cast && (e.change("castAvailable", this.onCastAvailable, this),
                e.change("castActive", this.onCastActive, this)),
                R.volumetooltip && (R.volumetooltip.on("update", (function(t) {
                    var e = t.percentage;
                    this._api.setVolume(e)
                }
                ), this),
                R.volumetooltip.on("toggleValue", (function() {
                    this._api.setMute()
                }
                ), this),
                R.volumetooltip.on("adjustVolume", (function(t) {
                    this.trigger("adjustVolume", t)
                }
                ), this)),
                R.cast && R.cast.button) {
                    var Y = R.cast.ui.on("click enter", (function(t) {
                        "keydown" === t.type && R.cast.button.click(),
                        this._model.set("castClicked", !0)
                    }
                    ), this);
                    this.ui.push(Y)
                }
                var $ = (0,
                C.Z)(R.duration, (function() {
                    if ("DVR" === this._model.get("streamType")) {
                        var t = this._model.get("position")
                          , e = this._model.get("dvrSeekLimit");
                        this._api.seek(Math.max(-e, t), {
                            reason: "interaction"
                        })
                    }
                }
                ), this);
                this.ui.push($);
                var K = new d.ZP(this.el).on("click drag", (function() {
                    this.trigger(a.xf)
                }
                ), this);
                this.ui.push(K),
                g.forEach((function(t) {
                    t.on("open-tooltip", s.closeMenus, s)
                }
                ))
            }
            var e = t.prototype;
            return e.onVolume = function(t, e) {
                this.renderVolume(t.get("mute"), e)
            }
            ,
            e.renderVolume = function(t, e) {
                var i = this.elements.mute
                  , n = this.elements.volumetooltip;
                if (i && ((0,
                p.og)(i.element(), "jw-off", t),
                (0,
                p.og)(i.element(), "jw-full", !t)),
                n) {
                    var o = t ? 0 : e
                      , a = n.element();
                    n.verticalSlider.render(o),
                    n.horizontalSlider.render(o);
                    var r = n.tooltip
                      , s = n.horizontalContainer;
                    (0,
                    p.og)(a, "jw-off", t),
                    (0,
                    p.og)(a, "jw-full", e >= 75 && !t),
                    (0,
                    p.P$)(r, "aria-valuenow", o),
                    (0,
                    p.P$)(s, "aria-valuenow", o);
                    var l = "Volume " + o + "%";
                    (0,
                    p.P$)(r, "aria-valuetext", l),
                    (0,
                    p.P$)(s, "aria-valuetext", l),
                    document.activeElement !== r && document.activeElement !== s && (this._volumeAnnouncer.textContent = l)
                }
            }
            ,
            e.onCastAvailable = function(t, e) {
                this.elements.cast.toggle(e)
            }
            ,
            e.onCastActive = function(t, e) {
                this.elements.fullscreen.toggle(!e),
                this.elements.imaFullscreen.toggle(!e),
                this.elements.pip && this.elements.pip.toggle(!e),
                this.elements.cast.button && (0,
                p.og)(this.elements.cast.button, "jw-off", !e)
            }
            ,
            e.onElapsed = function(t, e) {
                var i, n, o = t.get("duration");
                if ("DVR" === t.get("streamType")) {
                    var a = Math.ceil(e)
                      , r = this._model.get("dvrSeekLimit");
                    i = n = a >= -r ? "" : "-" + (0,
                    k.timeFormat)(-(e + r)),
                    t.set("dvrLive", a >= -r)
                } else
                    i = (0,
                    k.timeFormat)(e),
                    n = (0,
                    k.timeFormat)(o - e);
                this.elements.elapsed.textContent = i,
                this.elements.countdown.textContent = n
            }
            ,
            e.onDuration = function(t, e) {
                this.elements.duration.textContent = (0,
                k.timeFormat)(Math.abs(e))
            }
            ,
            e.onAudioMode = function(t, e) {
                var i = this.elements.time.element();
                e ? this.elements.buttonContainer.insertBefore(i, this.elements.elapsed) : (0,
                p.SH)(this.el, i)
            }
            ,
            e.element = function() {
                return this.el
            }
            ,
            e.setAltText = function(t, e) {
                this.elements.alt.textContent = e
            }
            ,
            e.closeMenus = function(t) {
                this.menus.forEach((function(e) {
                    t && t.target === e.el || e.closeTooltip(t)
                }
                ))
            }
            ,
            e.rewind = function() {
                var t, e = 0, i = this._model.get("currentTime");
                i ? t = i - 10 : (t = this._model.get("position") - 10,
                "DVR" === this._model.get("streamType") && (e = this._model.get("duration"))),
                this._api.seek(Math.max(t, e), {
                    reason: "interaction"
                })
            }
            ,
            e.onState = function(t, e) {
                var i = t.get("localization")
                  , n = i.play;
                this.setPlayText(n),
                e === a.r0 && ("LIVE" !== t.get("streamType") ? (n = i.pause,
                this.setPlayText(n)) : (n = i.stop,
                this.setPlayText(n))),
                (0,
                p.P$)(this.elements.play.element(), "aria-label", n)
            }
            ,
            e.onAllowFullscreenToggle = function(t, e) {
                [this.elements.fullscreen.element(), this.elements.imaFullscreen.element()].forEach((function(t) {
                    (0,
                    p.og)(t, "jw-fullscreen-disallowed", !e)
                }
                ))
            }
            ,
            e.onStreamTypeChange = function(t, e) {
                var i = "LIVE" === e
                  , n = "DVR" === e;
                this.elements.rewind && this.elements.rewind.toggle(!i),
                this.elements.live.toggle(i || n),
                (0,
                p.P$)(this.elements.live.element(), "tabindex", i ? "-1" : "0"),
                this.elements.duration.style.display = n ? "none" : "",
                this.onDuration(t, t.get("duration")),
                this.onState(t, t.get("state"))
            }
            ,
            e.addLogo = function(t) {
                var e = this.elements.buttonContainer
                  , i = new s.Z(t.file,this._model.get("localization").logo,(function() {
                    t.link && (0,
                    p.nG)(t.link, "_blank", {
                        rel: "noreferrer"
                    })
                }
                ),"logo","jw-logo-button");
                t.link || (0,
                p.P$)(i.element(), "tabindex", "-1"),
                e.insertBefore(i.element(), e.querySelector(".jw-spacer").nextSibling)
            }
            ,
            e.goToLiveEdge = function() {
                if ("DVR" === this._model.get("streamType")) {
                    var t = Math.min(this._model.get("position"), -1)
                      , e = this._model.get("dvrSeekLimit");
                    this._api.seek(Math.max(-e, t), {
                        reason: "interaction"
                    }),
                    this._api.play({
                        reason: "interaction"
                    })
                }
            }
            ,
            e.updateButtons = function(t, e, i) {
                if (e) {
                    var n, o, a = this.elements.buttonContainer;
                    e !== i && i ? (n = E(e, i),
                    o = E(i, e),
                    this.removeButtons(a, o)) : n = e;
                    for (var r = n.length - 1; r >= 0; r--) {
                        var l = n[r]
                          , c = new s.Z(l.img,l.tooltip,l.callback,l.id,l.btnClass);
                        l.tooltip && (0,
                        v.i)(c.element(), l.id, l.tooltip);
                        var u = void 0;
                        "related" === c.id ? u = this.elements.settingsButton.element() : "share" === c.id ? u = a.querySelector('[button="related"]') || this.elements.settingsButton.element() : (u = this.elements.spacer.nextSibling) && "logo" === u.getAttribute("button") && (u = u.nextSibling),
                        a.insertBefore(c.element(), u)
                    }
                }
            }
            ,
            e.removeButtons = function(t, e) {
                for (var i = e.length; i--; ) {
                    var n = t.querySelector('[button="' + e[i].id + '"]');
                    n && t.removeChild(n)
                }
            }
            ,
            e.toggleCaptionsButtonState = function(t) {
                var e = this.elements.captionsButton;
                e && (0,
                p.og)(e.element(), "jw-off", !t)
            }
            ,
            e.destroy = function() {
                var t = this;
                this._model.off(null, null, this),
                Object.keys(this.elements).forEach((function(e) {
                    var i = t.elements[e];
                    i && "function" == typeof i.destroy && t.elements[e].destroy()
                }
                )),
                this.ui.forEach((function(t) {
                    t.destroy()
                }
                )),
                this.ui = []
            }
            ,
            t
        }()
    },
    1823: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return p
            }
        });
        var n = function(t, e) {
            return void 0 === t && (t = ""),
            void 0 === e && (e = ""),
            '<div class="jw-display-icon-container jw-display-icon-' + t + ' jw-reset"><div class="jw-icon jw-icon-' + t + ' jw-button-color jw-reset" role="button" tabindex="0" aria-label="' + e + '"></div></div>'
        }
          , o = i(8395)
          , a = function() {
            function t(t, e, i) {
                var n = i.querySelector(".jw-icon");
                this.el = i,
                this.ui = (0,
                o.Z)(n, (function() {
                    var i = t.get("position")
                      , n = t.get("duration")
                      , o = i - 10
                      , a = 0;
                    "DVR" === t.get("streamType") && (a = n),
                    e.seek(Math.max(o, a))
                }
                ))
            }
            return t.prototype.element = function() {
                return this.el
            }
            ,
            t
        }()
          , r = i(1026)
          , s = i(4806);
        function l(t, e) {
            return l = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            l(t, e)
        }
        var c = function(t) {
            var e, i;
            function n(e, i, n) {
                var a;
                a = t.call(this) || this;
                var r = e.get("localization")
                  , l = n.querySelector(".jw-icon");
                if (a.icon = l,
                a.el = n,
                a.ui = (0,
                o.Z)(l, (function(t) {
                    a.trigger(t.type)
                }
                )),
                e.on("change:state", (function(t, e) {
                    var i;
                    switch (e) {
                    case "buffering":
                        i = r.buffer;
                        break;
                    case "playing":
                        i = r.pause;
                        break;
                    case "idle":
                    case "paused":
                        i = r.playback;
                        break;
                    case "complete":
                        i = r.replay;
                        break;
                    default:
                        i = ""
                    }
                    "" !== i ? l.setAttribute("aria-label", i) : l.removeAttribute("aria-label")
                }
                )),
                e.get("displayPlaybackLabel")) {
                    var c = a.icon.getElementsByClassName("jw-idle-icon-text")[0];
                    c || (c = (0,
                    s.az)('<div class="jw-idle-icon-text">' + r.playback + "</div>"),
                    (0,
                    s.cn)(a.icon, "jw-idle-label"),
                    a.icon.appendChild(c))
                }
                return a
            }
            return i = t,
            (e = n).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            l(e, i),
            n.prototype.element = function() {
                return this.el
            }
            ,
            n
        }(r.ZP)
          , u = function() {
            function t(t, e, i) {
                var n = i.querySelector(".jw-icon");
                this.ui = (0,
                o.Z)(n, (function() {
                    e.next({
                        reason: "interaction"
                    })
                }
                )),
                t.change("nextUp", (function(t, e) {
                    i.style.visibility = e ? "" : "hidden"
                }
                )),
                this.el = i
            }
            return t.prototype.element = function() {
                return this.el
            }
            ,
            t
        }()
          , d = i(2431)
          , p = function() {
            function t(t, e) {
                var i;
                this.el = (0,
                s.az)((i = t.get("localization"),
                '<div class="jw-display jw-reset"><div class="jw-display-container jw-reset"><div class="jw-display-controls jw-reset">' + n("rewind", i.rewind) + n("display", i.playback) + n("next", i.next) + "</div></div></div>"));
                var o = this.el.querySelector(".jw-display-controls")
                  , r = {};
                h("rewind", (0,
                d.o)("rewind"), a, o, r, t, e),
                h("display", (0,
                d.o)("play,pause,buffer,replay"), c, o, r, t, e),
                h("next", (0,
                d.o)("next"), u, o, r, t, e),
                this.container = o,
                this.buttons = r
            }
            var e = t.prototype;
            return e.element = function() {
                return this.el
            }
            ,
            e.destroy = function() {
                var t = this.buttons;
                Object.keys(t).forEach((function(e) {
                    t[e].ui && t[e].ui.destroy()
                }
                ))
            }
            ,
            t
        }();
        function h(t, e, i, n, o, a, r) {
            var s = n.querySelector(".jw-display-icon-" + t)
              , l = n.querySelector(".jw-icon-" + t);
            e.forEach((function(t) {
                l.appendChild(t)
            }
            )),
            o[t] = new i(a,r,s)
        }
    },
    2431: function(t, e, i) {
        "use strict";
        i.d(e, {
            W: function() {
                return at
            },
            o: function() {
                return rt
            }
        });
        var n = i(1975)
          , o = i.n(n)
          , a = i(6614)
          , r = i.n(a)
          , s = i(3446)
          , l = i.n(s)
          , c = i(9359)
          , u = i.n(c)
          , d = i(3578)
          , p = i.n(d)
          , h = i(1885)
          , w = i.n(h)
          , f = i(4455)
          , g = i.n(f)
          , j = i(2978)
          , m = i.n(j)
          , v = i(8680)
          , b = i.n(v)
          , y = i(9744)
          , k = i.n(y)
          , x = i(3e3)
          , C = i.n(x)
          , M = i(3284)
          , T = i.n(M)
          , _ = i(7704)
          , S = i.n(_)
          , E = i(7084)
          , A = i.n(E)
          , P = i(1850)
          , z = i.n(P)
          , I = i(757)
          , L = i.n(I)
          , B = i(2690)
          , O = i.n(B)
          , V = i(869)
          , R = i.n(V)
          , F = i(7433)
          , H = i.n(F)
          , Z = i(8328)
          , N = i.n(Z)
          , q = i(8931)
          , U = i.n(q)
          , D = i(8585)
          , W = i.n(D)
          , Q = i(1562)
          , Y = i.n(Q)
          , $ = i(8361)
          , K = i.n($)
          , J = i(4697)
          , X = i.n(J)
          , G = i(2425)
          , tt = i.n(G)
          , et = i(3236)
          , it = i.n(et)
          , nt = i(2308)
          , ot = null;
        function at(t) {
            var e = ct().querySelector(st(t));
            return e ? lt(e) : null
        }
        function rt(t) {
            var e = ct().querySelectorAll(t.split(",").map(st).join(","));
            return Array.prototype.map.call(e, (function(t) {
                return lt(t)
            }
            ))
        }
        function st(t) {
            return ".jw-svg-icon-" + t
        }
        function lt(t) {
            return t.cloneNode(!0)
        }
        function ct() {
            return ot || (ot = (0,
            nt.Z)("<xml>" + o() + r() + l() + u() + p() + w() + g() + m() + b() + k() + C() + T() + S() + A() + z() + L() + O() + R() + H() + N() + U() + K() + X() + W() + Y() + tt() + it() + "</xml>")),
            ot
        }
    },
    3060: function(t, e, i) {
        "use strict";
        i.d(e, {
            Ge: function() {
                return a
            },
            v2: function() {
                return r
            },
            dr: function() {
                return s
            }
        });
        var n = i(2690)
          , o = i.n(n)
          , a = function(t) {
            return '<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="' + t + '" dir="auto">' + t + "</button>"
        }
          , r = function(t) {
            var e = t.label;
            return '<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="' + e + '" aria-controls="jw-settings-submenu-' + t.name + '" aria-expanded="false" dir="auto">' + e + "<div class='jw-reset jw-settings-value-wrapper'><div class=\"jw-reset-text jw-settings-content-item-value\">" + t.currentSelection + '</div><div class="jw-reset-text jw-settings-content-item-arrow">' + o() + "</div></div></button>"
        }
          , s = function(t) {
            return '<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="' + t + '" role="menuitem" aria-checked="false" dir="auto">' + t + "</button>"
        }
    },
    666: function(t, e, i) {
        "use strict";
        i.d(e, {
            qF: function() {
                return n
            },
            E6: function() {
                return o
            },
            Z2: function() {
                return a
            }
        });
        var n = function(t, e) {
            return t ? '<div id="jw-settings-submenu-' + e + '" class="jw-reset jw-settings-submenu jw-settings-submenu-' + e + '" role="menu" aria-expanded="false"><div class="jw-reset jw-settings-submenu-items"></div></div>' : '<div id="jw-settings-menu" class="jw-reset jw-settings-menu" aria-expanded="false"><div class="jw-reset jw-settings-topbar"><div class="jw-reset jw-settings-topbar-text" tabindex="0"></div><div class="jw-reset jw-settings-topbar-buttons"></div></div></div>'
        }
          , o = function(t, e) {
            return t ? '<div id="jw-settings-submenu-' + e + '" class="jw-reset jw-settings-submenu jw-settings-submenu-' + e + '" role="menu" aria-expanded="false"><div class="jw-reset jw-settings-submenu-items"></div></div>' : '<div id="jw-settings-menu-tizen" class="jw-reset jw-settings-menu-tizen" aria-expanded="false"></div>'
        }
          , a = function(t, e, i) {
            return '<div id="jw-settings-submenu-' + e + '" class="jw-reset jw-settings-submenu-tizen jw-settings-submenu-' + e + '"><div class="jw-reset jw-reset-text jw-settings-topbar-text">' + i + '</div><div class="jw-reset jw-settings-submenu-items"></div></div>'
        }
    },
    2043: function(t, e, i) {
        "use strict";
        var n = i(6286)
          , o = i(4806)
          , a = i(7880)
          , r = function() {
            function t(t) {
                this.model = t.player,
                this.truncated = t.get("__ab_truncated") && !a.Browser.ie
            }
            var e = t.prototype;
            return e.hide = function() {
                (0,
                n.oB)(this.el, {
                    display: "none"
                })
            }
            ,
            e.show = function() {
                (0,
                n.oB)(this.el, {
                    display: ""
                })
            }
            ,
            e.setup = function(t) {
                if (this.el = t,
                this.el) {
                    var e = this.el.getElementsByTagName("div");
                    this.title = e[0],
                    this.description = e[1],
                    this.truncated && this.el.classList.add("jw-ab-truncated"),
                    this.model.on("change:logoWidth", this.update, this),
                    this.model.change("playlistItem", this.playlistItem, this)
                }
            }
            ,
            e.update = function(t) {
                var e = {}
                  , i = t.get("logo");
                if (i) {
                    var o = 1 * parseInt(("" + i.margin).replace("px", ""))
                      , a = t.get("logoWidth") + (isNaN(o) ? 0 : o + 10);
                    "top-left" === i.position ? e.paddingLeft = a : "top-right" === i.position && (e.paddingRight = a)
                }
                (0,
                n.oB)(this.el, e)
            }
            ,
            e.playlistItem = function(t, e) {
                if (e)
                    if (t.get("displaytitle") || t.get("displaydescription")) {
                        var i = ""
                          , n = "";
                        "string" == typeof e.title && t.get("displaytitle") && (i = e.title),
                        "string" == typeof e.description && t.get("displaydescription") && (n = e.description),
                        this.updateText(i, n)
                    } else
                        this.hide()
            }
            ,
            e.updateText = function(t, e) {
                this.title && this.description && ((0,
                o.nh)(this.title, (0,
                o.Ww)(t)),
                (0,
                o.nh)(this.description, (0,
                o.Ww)(e)),
                this.title.firstChild || this.description.firstChild ? this.show() : this.hide())
            }
            ,
            e.element = function() {
                return this.el
            }
            ,
            t
        }();
        e.Z = r
    },
    8395: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return o
            }
        });
        var n = i(5053);
        function o(t, e, i) {
            return new n.ZP(t).on("click enter", e, i)
        }
    },
    7571: function(t, e, i) {
        "use strict";
        i.d(e, {
            i: function() {
                return o
            },
            d: function() {
                return a
            }
        });
        var n = i(4806);
        function o(t) {
            var e = -1;
            return t >= 1280 ? e = 7 : t >= 960 ? e = 6 : t >= 800 ? e = 5 : t >= 640 ? e = 4 : t >= 540 ? e = 3 : t >= 420 ? e = 2 : t >= 320 ? e = 1 : t >= 250 && (e = 0),
            e
        }
        function a(t, e) {
            var i = "jw-breakpoint-" + e;
            (0,
            n.L_)(t, /jw-breakpoint--?\d+/, i)
        }
    },
    599: function(t, e, i) {
        "use strict";
        i.d(e, {
            FM: function() {
                return a
            },
            xq: function() {
                return r
            },
            Sf: function() {
                return s
            }
        });
        var n = i(1009)
          , o = i(6286);
        function a(t) {
            return t.replace(/^(.*\/)?(.*)-?.*\.(css).*$/, "$2")
        }
        function r(t) {
            t || (t = {});
            var e = t.active
              , i = t.inactive
              , n = t.background
              , o = {};
            return o.controlbar = function(t) {
                if (t || e || i || n) {
                    var o = {};
                    return t = t || {},
                    o.iconsActive = t.iconsActive || e,
                    o.icons = t.icons || i,
                    o.text = t.text || i,
                    o.background = t.background || n,
                    o
                }
            }(t.controlbar),
            o.timeslider = function(t) {
                if (t || e) {
                    var i = {};
                    return t = t || {},
                    i.progress = t.progress || e,
                    i.rail = t.rail,
                    i
                }
            }(t.timeslider),
            o.menus = function(t) {
                if (t || e || i || n) {
                    var o = {};
                    return t = t || {},
                    o.text = t.text || i,
                    o.textActive = t.textActive || e,
                    o.background = t.background || n,
                    o
                }
            }(t.menus),
            o.tooltips = function(t) {
                if (t || i || n) {
                    var e = {};
                    return t = t || {},
                    e.text = t.text || i,
                    e.background = t.background || n,
                    e
                }
            }(t.tooltips),
            o
        }
        function s(t, e) {
            var i;
            function a(e, i, a, r) {
                if (a) {
                    e = (0,
                    n.O4)(e, "#" + t + (r ? "" : " "));
                    var s = {};
                    s[i] = a,
                    (0,
                    o.iv)(e.join(", "), s, t)
                }
            }
            e && (e.controlbar && function(e) {
                a([".jw-controlbar .jw-icon-inline.jw-text", ".jw-title-primary", ".jw-title-secondary"], "color", e.text),
                e.icons && (a([".jw-button-color:not(.jw-icon-cast)", ".jw-button-color.jw-toggle.jw-off:not(.jw-icon-cast)"], "color", e.icons),
                a([".jw-display-icon-container .jw-button-color"], "color", e.icons),
                (0,
                o.iv)("#" + t + " .jw-icon-cast google-cast-launcher.jw-off", "{--disconnected-color: " + e.icons + "}", t)),
                e.iconsActive && (a([".jw-display-icon-container .jw-button-color:hover", ".jw-display-icon-container .jw-button-color:focus"], "color", e.iconsActive),
                a([".jw-button-color.jw-toggle:not(.jw-icon-cast)", ".jw-button-color:hover:not(.jw-icon-cast)", ".jw-button-color:focus:not(.jw-icon-cast)", ".jw-button-color.jw-toggle.jw-off:hover:not(.jw-icon-cast)"], "color", e.iconsActive),
                a([".jw-svg-icon-buffer"], "fill", e.icons),
                (0,
                o.iv)("#" + t + " .jw-icon-cast:hover google-cast-launcher.jw-off", "{--disconnected-color: " + e.iconsActive + "}", t),
                (0,
                o.iv)("#" + t + " .jw-icon-cast:focus google-cast-launcher.jw-off", "{--disconnected-color: " + e.iconsActive + "}", t),
                (0,
                o.iv)("#" + t + " .jw-icon-cast google-cast-launcher.jw-off:focus", "{--disconnected-color: " + e.iconsActive + "}", t),
                (0,
                o.iv)("#" + t + " .jw-icon-cast google-cast-launcher", "{--connected-color: " + e.iconsActive + "}", t),
                (0,
                o.iv)("#" + t + " .jw-icon-cast google-cast-launcher:focus", "{--connected-color: " + e.iconsActive + "}", t),
                (0,
                o.iv)("#" + t + " .jw-icon-cast:hover google-cast-launcher", "{--connected-color: " + e.iconsActive + "}", t),
                (0,
                o.iv)("#" + t + " .jw-icon-cast:focus google-cast-launcher", "{--connected-color: " + e.iconsActive + "}", t)),
                a([" .jw-settings-topbar", ":not(.jw-state-idle) .jw-controlbar", ".jw-flag-audio-player .jw-controlbar"], "background", e.background, !0)
            }(e.controlbar),
            e.timeslider && function(t) {
                var e = t.progress;
                "none" !== e && (a([".jw-progress", ".jw-knob"], "background-color", e),
                a([".jw-buffer"], "background-color", (0,
                o.HY)(e, 50))),
                a([".jw-rail"], "background-color", t.rail),
                a([".jw-background-color.jw-slider-time", ".jw-slider-time .jw-cue"], "background-color", t.background)
            }(e.timeslider),
            e.menus && (a([".jw-option", ".jw-toggle.jw-off", ".jw-skip .jw-skip-icon", ".jw-nextup-tooltip", ".jw-nextup-close", ".jw-settings-content-item", ".jw-related-title"], "color", (i = e.menus).text),
            a([".jw-option.jw-active-option", ".jw-option:not(.jw-active-option):hover", ".jw-option:not(.jw-active-option):focus", ".jw-settings-content-item:hover", ".jw-nextup-tooltip:hover", ".jw-nextup-tooltip:focus", ".jw-nextup-close:hover"], "color", i.textActive),
            a([".jw-nextup", ".jw-settings-menu"], "background", i.background)),
            e.tooltips && function(t) {
                a([".jw-skip", ".jw-tooltip .jw-text", ".jw-time-tip .jw-text"], "background-color", t.background),
                a([".jw-time-tip", ".jw-tooltip"], "color", t.background),
                a([".jw-skip"], "border", "none"),
                a([".jw-skip .jw-text", ".jw-skip .jw-icon", ".jw-time-tip .jw-text", ".jw-tooltip .jw-text"], "color", t.text)
            }(e.tooltips),
            e.menus && function(e) {
                if (e.textActive) {
                    var i = {
                        color: e.textActive,
                        borderColor: e.textActive,
                        stroke: e.textActive
                    };
                    (0,
                    o.iv)("#" + t + " .jw-color-active", i, t),
                    (0,
                    o.iv)("#" + t + " .jw-color-active-hover:hover", i, t)
                }
                if (e.text) {
                    var n = {
                        color: e.text,
                        borderColor: e.text,
                        stroke: e.text
                    };
                    (0,
                    o.iv)("#" + t + " .jw-color-inactive", n, t),
                    (0,
                    o.iv)("#" + t + " .jw-color-inactive-hover:hover", n, t)
                }
            }(e.menus))
        }
    },
    6453: function(t, e, i) {
        "use strict";
        i.r(e),
        i.d(e, {
            default: function() {
                return Qe
            }
        });
        var n = i(1918)
          , o = i(8700)
          , a = i(5322)
          , r = i(1096)
          , s = i(738)
          , l = i(5010)
          , c = ["notVisible", "always", "never"]
          , u = i(2503)
          , d = i(6632)
          , p = i(5980)
          , h = i(3155)
          , w = i(1009)
          , f = i(1026)
          , g = i(168)
          , j = function() {
            function t(t) {
                this.callback = t
            }
            var e = t.prototype;
            return e.async = function() {
                for (var t = this, e = arguments.length, i = new Array(e), n = 0; n < e; n++)
                    i[n] = arguments[n];
                return Promise.resolve().then((function() {
                    if (null !== t.callback)
                        return t.callback.apply(t, i)
                }
                ))
            }
            ,
            e.cancel = function() {
                this.callback = null
            }
            ,
            e.cancelled = function() {
                return null === this.callback
            }
            ,
            t
        }();
        function m(t) {
            return new j(t)
        }
        var v = i(6438);
        function b(t, e) {
            var i = this.mediaModel
              , n = (0,
            a.l7)({}, e, {
                type: t
            });
            switch (t) {
            case o.oZ:
                if (i.get(o.oZ) === n.mediaType)
                    return;
                i.set(o.oZ, n.mediaType);
                break;
            case o.ug:
                return void i.set(o.ug, (0,
                a.l7)({}, e));
            case o.gy:
                if (e[o.gy] === this.model.getMute())
                    return;
                break;
            case o.uc:
                var r = e.newstate;
                r === o.bc && (this.thenPlayPromise.cancel(),
                i.srcReset());
                var s = i.attributes.mediaState;
                i.attributes.mediaState = r,
                i.trigger("change:mediaState", i, r, s);
                break;
            case o.Ms:
                return this.beforeComplete = !0,
                this.trigger(o.s$, n),
                void (this.attached && !this.background && this._playbackComplete());
            case o.Ew:
                i.get("setup") ? (this.thenPlayPromise.cancel(),
                i.srcReset()) : (t = o.cM,
                n.code += 1e5);
                break;
            case o.rx:
                var l = e
                  , c = l.duration
                  , u = l.metadataType
                  , d = l.seekRange;
                u || (n.metadataType = "unknown"),
                (0,
                a.qh)(c) && (i.set("seekRange", d),
                i.set("duration", c));
                break;
            case o.uT:
                i.set("buffer", e.bufferPercent);
            case o.R2:
                var p = e;
                i.set("seekRange", p.seekRange),
                i.set("position", p.position),
                i.set("currentTime", p.currentTime);
                var h = p.duration;
                (0,
                a.qh)(h) && i.set("duration", h),
                t === o.R2 && "starttime"in this.item && delete this.item.starttime;
                break;
            case o.aQ:
                var w = this.mediaElement;
                w && w.paused && i.set("mediaState", "paused");
                break;
            case o.UZ:
                i.set(o.UZ, e.levels);
            case o.aM:
                var f = e
                  , g = f.currentQuality
                  , j = f.levels;
                g > -1 && j.length > 1 && i.set("currentLevel", parseInt(g));
                break;
            case o.j0:
                i.set(o.j0, e.tracks);
            case o._B:
                var m = e
                  , v = m.currentTrack
                  , b = m.tracks;
                v > -1 && b.length > 0 && v < b.length && i.set("currentAudioTrack", parseInt(v))
            }
            this.trigger(t, n)
        }
        function y(t, e) {
            var i = this.model;
            switch (t) {
            case o.uc:
                return;
            case o.yH:
                return void i.set(o.yH, e[o.yH]);
            case o.gy:
                return void i.set(o.gy, e[o.gy]);
            case o.TJ:
                return void i.set("playbackRate", e.playbackRate);
            case o.rx:
                (0,
                a.l7)(i.get("itemMeta"), e.metadata);
                break;
            case o.aM:
                i.persistQualityLevel(e.currentQuality, e.levels);
                break;
            case o.UF:
                i.persistVideoSubtitleTrack(e.currentTrack, e.tracks);
                break;
            case o.R2:
                e.targetLatency && i.set("dvrSeekLimit", e.targetLatency);
            case o.NZ:
            case o.aQ:
            case o.h7:
            case o.jt:
            case "subtitlesTracksData":
                i.trigger(t, e);
                break;
            case o.qG:
                return void i.persistBandwidthEstimate(e.bandwidthEstimate)
            }
            this.trigger(t, e)
        }
        var k = i(7880)
          , x = i(8653)
          , C = i(9157);
        function M(t, e) {
            t.prototype = Object.create(e.prototype),
            t.prototype.constructor = t,
            T(t, e)
        }
        function T(t, e) {
            return T = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            T(t, e)
        }
        var _ = function(t) {
            function e() {
                var e;
                return (e = t.call(this) || this).providerController = null,
                e._provider = null,
                e.addAttributes({
                    mediaModel: new E,
                    minDvrWindow: C.ni,
                    dvrSeekLimit: C.OG
                }),
                e
            }
            M(e, t);
            var i = e.prototype;
            return i.setup = function(t) {
                return t = t || {},
                this._normalizeConfig(t),
                (0,
                a.l7)(this.attributes, t, C.bv),
                this.providerController = new g.Z(this.getConfiguration()),
                this.setAutoStart(),
                this
            }
            ,
            i.getConfiguration = function() {
                var t = this.clone()
                  , e = t.mediaModel.attributes;
                return Object.keys(C.L4).forEach((function(i) {
                    t[i] = e[i]
                }
                )),
                t.instreamMode = !!t.instream,
                delete t.instream,
                delete t.mediaModel,
                t
            }
            ,
            i.persistQualityLevel = function(t, e) {
                var i = e[t] || {}
                  , n = i.label
                  , o = (0,
                a.qh)(i.bitrate) ? i.bitrate : null;
                this.set("bitrateSelection", o),
                this.set("qualityLabel", n)
            }
            ,
            i.setActiveItem = function(t) {
                var e = this.get("playlist")[t];
                this.resetItem(e),
                this.attributes.playlistItem = null,
                this.set("item", t),
                this.set("minDvrWindow", e.minDvrWindow),
                this.set("dvrSeekLimit", e.dvrSeekLimit || C.OG),
                this.set("playlistItem", e)
            }
            ,
            i.setMediaModel = function(t) {
                this.mediaModel && this.mediaModel !== t && this.mediaModel.off(),
                t = t || new E,
                this.mediaModel = t,
                function(t) {
                    var e = t.get("mediaState");
                    t.trigger("change:mediaState", t, e, e)
                }(t)
            }
            ,
            i.destroy = function() {
                this.attributes._destroyed = !0,
                this.off(),
                this._provider && (this._provider.off(null, null, this),
                this._provider.destroy(),
                this._provider = null),
                this.mediaModel && this.mediaModel.off(),
                this.providerController = null
            }
            ,
            i.getVideo = function() {
                return this._provider
            }
            ,
            i.setFullscreen = function(t) {
                (t = !!t) !== this.get("fullscreen") && this.set("fullscreen", t)
            }
            ,
            i.getProviders = function() {
                return this.providerController
            }
            ,
            i.setVolume = function(t) {
                if ((0,
                a.qh)(t)) {
                    var e = Math.min(Math.max(0, t), 100);
                    this.set("volume", e);
                    var i = 0 === e;
                    i !== this.getMute() && this.setMute(i)
                }
            }
            ,
            i.getMute = function() {
                return this.get("autostartMuted") || this.get("mute")
            }
            ,
            i.setMute = function(t) {
                if (void 0 === t && (t = !this.getMute()),
                this.set("mute", !!t),
                !t) {
                    var e = Math.max(10, this.get("volume"));
                    this.set("autostartMuted", !1),
                    this.setVolume(e)
                }
            }
            ,
            i.setStreamType = function(t) {
                this.set("streamType", t),
                "LIVE" === t && this.setPlaybackRate(1)
            }
            ,
            i.setProvider = function(t) {
                this._provider = t,
                S(this, t)
            }
            ,
            i.resetProvider = function() {
                this._provider = null,
                this.set("provider", void 0)
            }
            ,
            i.setPlaybackRate = function(t) {
                (0,
                a.hj)(t) && (t = Math.max(Math.min(t, 4), .25),
                "LIVE" === this.get("streamType") && (t = 1),
                this.set("defaultPlaybackRate", t),
                this._provider && this._provider.setPlaybackRate && this._provider.setPlaybackRate(t))
            }
            ,
            i.persistCaptionsTrack = function() {
                var t = this.get("captionsTrack");
                t ? this.set("captionLabel", t.name) : this.set("captionLabel", "Off")
            }
            ,
            i.setVideoSubtitleTrack = function(t, e) {
                this.set("captionsIndex", t),
                t && e && t <= e.length && e[t - 1].data && this.set("captionsTrack", e[t - 1])
            }
            ,
            i.persistVideoSubtitleTrack = function(t, e) {
                this.setVideoSubtitleTrack(t, e),
                this.persistCaptionsTrack()
            }
            ,
            i.setAutoStart = function(t) {
                void 0 !== t && this.set("autostart", t);
                var e = !(!k.OS.mobile || !this.get("autostart"));
                this.set("playOnViewable", e || "viewable" === this.get("autostart"))
            }
            ,
            i.resetItem = function(t) {
                var e = t ? (0,
                w.m9)(t.starttime) : 0
                  , i = t ? (0,
                w.m9)(t.duration) : 0
                  , n = this.mediaModel;
                this.set("playRejected", !1),
                this.attributes.itemMeta = {},
                n.set("position", e),
                n.set("currentTime", 0),
                n.set("duration", i)
            }
            ,
            i.persistBandwidthEstimate = function(t) {
                (0,
                a.qh)(t) && this.set("bandwidthEstimate", t)
            }
            ,
            i._normalizeConfig = function(t) {
                var e = t.floating;
                e && e.disabled && delete t.floating
            }
            ,
            e
        }(x.Z)
          , S = function(t, e) {
            t.set("provider", e.getName()),
            !0 === t.get("instreamMode") && (e.instreamMode = !0),
            t.setPlaybackRate(t.get("defaultPlaybackRate")),
            t.set("supportsPlaybackRate", e.supportsPlaybackRate),
            t.set("playbackRate", e.getPlaybackRate()),
            t.set("renderCaptionsNatively", e.renderNatively)
        }
          , E = function(t) {
            function e() {
                var e;
                return (e = t.call(this) || this).addAttributes({
                    mediaState: o.bc
                }),
                e
            }
            return M(e, t),
            e.prototype.srcReset = function() {
                (0,
                a.l7)(this.attributes, {
                    setup: !1,
                    started: !1,
                    preloaded: !1,
                    visualQuality: null,
                    buffer: 0,
                    currentTime: 0
                })
            }
            ,
            e
        }(x.Z)
          , A = _;
        function P(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function z(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function I(t, e) {
            return I = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            I(t, e)
        }
        var L = function(t) {
            var e, i;
            function n(e, i) {
                var n;
                return (n = t.call(this) || this).attached = !0,
                n.beforeComplete = !1,
                n.item = null,
                n.mediaModel = new E,
                n.model = i,
                n.provider = e,
                n.providerListener = b,
                n.thenPlayPromise = m((function() {}
                )),
                e.off(),
                e.on("all", n.providerListener, z(n)),
                n.eventQueue = new u.Z(z(n),["trigger"],(function() {
                    return !n.attached || n.background
                }
                )),
                n
            }
            i = t,
            (e = n).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            I(e, i);
            var r, s, l = n.prototype;
            return l.play = function(t) {
                var e = this.item
                  , i = this.model
                  , n = this.mediaModel
                  , o = this.provider;
                if (t || (t = i.get("playReason")),
                i.set("playRejected", !1),
                n.get("setup"))
                    return o.play() || Promise.resolve();
                n.set("setup", !0);
                var a = this._loadAndPlay(e, o);
                return n.get("started") ? a : this._playAttempt(a, t)
            }
            ,
            l.stop = function() {
                var t = this.provider;
                this.beforeComplete = !1,
                t.stop()
            }
            ,
            l.pause = function() {
                this.provider.pause()
            }
            ,
            l.preload = function() {
                var t = this.item
                  , e = this.mediaModel
                  , i = this.provider;
                !t || t && "none" === t.preload || !this.attached || this.setup || this.preloaded || (e.set("preloaded", !0),
                i.preload(t))
            }
            ,
            l.destroy = function() {
                var t = this.provider
                  , e = this.mediaModel;
                this.off(),
                e.off(),
                t.off(),
                this.eventQueue.destroy(),
                this.detach(),
                t.getContainer() && t.remove(),
                this.eventQueue && this.eventQueue.destroy(),
                delete t.instreamMode,
                this.thenPlayPromise && this.thenPlayPromise.cancel(),
                this.provider = this.mediaModel = this.model = this.eventQueue = this.item = this.providerListener = this.thenPlayPromise = null
            }
            ,
            l.attach = function() {
                var t = this.model
                  , e = this.provider;
                t.setPlaybackRate(t.get("defaultPlaybackRate")),
                e.attachMedia(),
                this.attached = !0,
                this.eventQueue.flush(),
                this.beforeComplete && this._playbackComplete()
            }
            ,
            l.detach = function() {
                var t = this.provider;
                this.thenPlayPromise.cancel();
                var e = t.detachMedia();
                return this.attached = !1,
                e
            }
            ,
            l._playAttempt = function(t, e) {
                var i = this
                  , n = this.item
                  , r = this.mediaModel
                  , s = this.model
                  , l = this.provider
                  , c = l ? l.video : null;
                return this.trigger(o.cq, {
                    item: n,
                    playReason: e
                }),
                (c ? c.paused : s.get(o.uc) !== o.r0) || s.set(o.uc, o.Kb),
                t.then((function() {
                    r.get("setup") && (r.set("started", !0),
                    r === s.mediaModel && function(t) {
                        var e = t.get("mediaState");
                        t.trigger("change:mediaState", t, e, e)
                    }(r))
                }
                )).catch((function(t) {
                    if (i.item && r === s.mediaModel) {
                        if (s.set("playRejected", !0),
                        c && c.paused) {
                            if (c.src === location.href)
                                return i._loadAndPlay(n, l);
                            r.set("mediaState", o._5)
                        }
                        var u = (0,
                        a.l7)(new v.rG(null,(0,
                        v.nm)(t),t), {
                            error: t,
                            item: n,
                            playReason: e
                        });
                        throw delete u.key,
                        i.trigger(o.Je, u),
                        t
                    }
                }
                ))
            }
            ,
            l._playbackComplete = function() {
                var t = this.item
                  , e = this.provider;
                t && delete t.starttime,
                this.beforeComplete = !1,
                e.setState(o.xQ),
                this.trigger(o.Ms, {})
            }
            ,
            l._loadAndPlay = function() {
                var t = this
                  , e = this.item
                  , i = this.provider
                  , n = i.load(e);
                if (n) {
                    var o = m((function() {
                        return t.provider.play() || Promise.resolve()
                    }
                    ));
                    return this.thenPlayPromise = o,
                    n.then((function() {
                        return o.async()
                    }
                    ))
                }
                return i.play() || Promise.resolve()
            }
            ,
            r = n,
            (s = [{
                key: "audioTrack",
                get: function() {
                    return this.provider.getCurrentAudioTrack()
                },
                set: function(t) {
                    this.provider.setCurrentAudioTrack(t)
                }
            }, {
                key: "quality",
                get: function() {
                    return this.provider.getCurrentQuality()
                },
                set: function(t) {
                    this.provider.setCurrentQuality(t)
                }
            }, {
                key: "audioTracks",
                get: function() {
                    return this.provider.getAudioTracks()
                }
            }, {
                key: "background",
                get: function() {
                    if (!this.attached)
                        return !1;
                    var t = this.provider;
                    if (!t.video)
                        return !1;
                    var e = t.getContainer();
                    return !e || e && !e.contains(t.video)
                },
                set: function(t) {
                    var e = this.provider;
                    if (e.video) {
                        var i = e.getContainer();
                        i && (t ? this.background || (this.thenPlayPromise.cancel(),
                        this.pause(),
                        e.removeFromContainer ? e.removeFromContainer() : i.removeChild(e.video),
                        this.container = null) : (this.eventQueue.flush(),
                        this.beforeComplete && this._playbackComplete()))
                    } else
                        t ? this.detach() : this.attach()
                }
            }, {
                key: "container",
                get: function() {
                    return this.provider.getContainer()
                },
                set: function(t) {
                    this.provider.setContainer(t)
                }
            }, {
                key: "mediaElement",
                get: function() {
                    return this.provider.video
                }
            }, {
                key: "preloaded",
                get: function() {
                    return this.mediaModel.get("preloaded")
                }
            }, {
                key: "qualities",
                get: function() {
                    return this.provider.getQualityLevels()
                }
            }, {
                key: "setup",
                get: function() {
                    return this.mediaModel.get("setup")
                }
            }, {
                key: "started",
                get: function() {
                    return this.mediaModel.get("started")
                }
            }, {
                key: "activeItem",
                set: function(t) {
                    var e = this.mediaModel = new E
                      , i = t ? (0,
                    w.m9)(t.starttime) : 0
                      , n = t ? (0,
                    w.m9)(t.duration) : 0
                      , o = e.attributes;
                    e.srcReset(),
                    o.position = i,
                    o.duration = n,
                    this.item = t,
                    this.provider.init(t)
                }
            }, {
                key: "controls",
                set: function(t) {
                    this.provider.setControls(t)
                }
            }, {
                key: "mute",
                set: function(t) {
                    this.provider.mute(t)
                }
            }, {
                key: "position",
                set: function(t) {
                    var e = this.provider;
                    this.model.get("scrubbing") && e.fastSeek ? e.fastSeek(t) : e.seek(t)
                }
            }, {
                key: "subtitles",
                set: function(t) {
                    this.provider.setSubtitlesTrack && this.provider.setSubtitlesTrack(t)
                }
            }, {
                key: "volume",
                set: function(t) {
                    this.provider.volume(t)
                }
            }]) && P(r.prototype, s),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            n
        }(f.ZP)
          , B = i(4570);
        function O(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function V(t) {
            var e = "function" == typeof Map ? new Map : void 0;
            return V = function(t) {
                if (null === t || (i = t,
                -1 === Function.toString.call(i).indexOf("[native code]")))
                    return t;
                var i;
                if ("function" != typeof t)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t))
                        return e.get(t);
                    e.set(t, n)
                }
                function n() {
                    return R(t, arguments, Z(this).constructor)
                }
                return n.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                H(n, t)
            }
            ,
            V(t)
        }
        function R(t, e, i) {
            return R = F() ? Reflect.construct : function(t, e, i) {
                var n = [null];
                n.push.apply(n, e);
                var o = new (Function.bind.apply(t, n));
                return i && H(o, i.prototype),
                o
            }
            ,
            R.apply(null, arguments)
        }
        function F() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }
        function H(t, e) {
            return H = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            H(t, e)
        }
        function Z(t) {
            return Z = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            Z(t)
        }
        var N = function(t) {
            var e, i;
            function n(e) {
                var i;
                return (i = t.call(this, e) || this).code = v._M,
                i
            }
            return i = t,
            (e = n).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            H(e, i),
            n
        }(V(Error))
          , q = function() {
            function t(t, e, i) {
                var n = this;
                this.index = t,
                this.model = e,
                this.api = i,
                this.promise = new Promise((function(t, e) {
                    n.resolve = t,
                    n.reject = e
                }
                )),
                this.async = null,
                this.asyncPromise = null,
                this.rejected = !1
            }
            var e, i, n = t.prototype;
            return n.run = function() {
                var t = this
                  , e = this.api
                  , i = this.async
                  , n = this.index
                  , o = this.model
                  , a = this.resolve
                  , r = this.reject
                  , s = this.promise
                  , l = o.get("playlist")
                  , c = this.getItem(n);
                if (!c) {
                    var u = -1 === n ? "No recs item" : "No playlist item at index " + n;
                    this.rejected = !0,
                    r(new Error(u))
                }
                if (i) {
                    this.clear();
                    var d = this.asyncPromise = i.call(e, c, n);
                    d && d.then ? d.then((function(e) {
                        if (e && e !== c && l === o.get("playlist")) {
                            var i = t.replace(e);
                            if (i)
                                return void a(i)
                        }
                        a(c)
                    }
                    )).catch((function(e) {
                        var i = new N("Item skipped by playlist item callback");
                        i.sourceError = e,
                        t.rejected = !0,
                        r(i)
                    }
                    )) : this.asyncPromise = null
                }
                return this.asyncPromise || a(c),
                s
            }
            ,
            n.getItem = function(t) {
                var e = this.model;
                return -1 === t ? e.get("nextUp") : e.get("playlist")[t]
            }
            ,
            n.replace = function(t) {
                var e = this.index
                  , i = this.model
                  , n = (0,
                p.YF)(i, new B.Z(t), t.feedData || {});
                if (n)
                    return -1 === e ? i.set("nextUp", n) : i.get("playlist")[e] = n,
                    n
            }
            ,
            n.clear = function() {
                this.async = null
            }
            ,
            n.destroy = function() {
                this.model = this.api = this.promise = this.resolve = this.reject = this.async = this.asyncPromise = null
            }
            ,
            e = t,
            (i = [{
                key: "callback",
                set: function(t) {
                    this.async = t
                }
            }, {
                key: "skipped",
                get: function() {
                    return this.rejected
                }
            }]) && O(e.prototype, i),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function U(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function D(t, e) {
            return D = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            D(t, e)
        }
        function W(t, e) {
            t.off().on("all", e.mediaControllerListener, e)
        }
        function Q(t) {
            return t && t.sources && t.sources[0]
        }
        var Y = function(t) {
            var e, i;
            function n(e, i, n) {
                var o, a, r;
                return (o = t.call(this) || this).adPlaying = !1,
                o.apiContext = n,
                o.background = (a = null,
                r = null,
                {
                    setNext: function(t, e) {
                        r = {
                            item: t,
                            loadPromise: e
                        }
                    },
                    isNext: function(t) {
                        return !(!r || JSON.stringify(r.item.sources[0]) !== JSON.stringify(t.sources[0]))
                    },
                    updateNext: function(t) {
                        r && (r.item = t)
                    },
                    clearNext: function() {
                        r = null
                    },
                    get nextLoadPromise() {
                        return r ? r.loadPromise : null
                    },
                    get currentMedia() {
                        return a
                    },
                    set currentMedia(t) {
                        a = t
                    }
                }),
                o.mediaPool = i,
                o.mediaController = null,
                o.mediaControllerListener = y,
                o.model = e,
                o.providers = new g.Z(e.getConfiguration()),
                o.loadPromise = null,
                o.backgroundLoading = e.get("backgroundLoading"),
                o.asyncItems = [],
                o.itemSetContext = 0,
                o.backgroundLoading || e.set("mediaElement", o.mediaPool.getPrimedElement()),
                o
            }
            i = t,
            (e = n).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            D(e, i);
            var r, s, l = n.prototype;
            return l.asyncActiveItem = function(t) {
                var e = this
                  , i = this.model
                  , n = setTimeout((function() {
                    i.set(o.uc, o.Kb)
                }
                ), 50);
                return this.getAsyncItem(t).run().then((function(t) {
                    return clearTimeout(n),
                    t
                }
                )).catch((function(o) {
                    if (clearTimeout(n),
                    t < i.get("playlist").length - 1)
                        return e.setActiveItem(t + 1).then((function() {
                            return null
                        }
                        ));
                    throw o
                }
                ))
            }
            ,
            l.setActiveItem = function(t) {
                var e = this
                  , i = this.background
                  , n = this.mediaController
                  , o = this.model
                  , a = o.get("playlist")[t];
                o.attributes.itemReady = !1,
                n && (n.mediaModel.off(),
                o.attributes.mediaModel = new E,
                o.mediaModel.attributes = n.mediaModel.clone()),
                i.isNext(a) || this._destroyBackgroundMedia();
                var r = this.itemSetContext = Math.random();
                return this.loadPromise = this.asyncActiveItem(t).then((function(a) {
                    if (null === a || r !== e.itemSetContext || null === e.providers)
                        return null;
                    o.setActiveItem(t);
                    var s = Q(a);
                    if (!s)
                        return Promise.reject(new v.rG(v.ul,v.o2));
                    if (i.isNext(a))
                        return e._destroyActiveMedia(),
                        e._activateBackgroundMedia();
                    if (n) {
                        if (o.get("castActive") || e._providerCanPlay(n.provider, s))
                            return n.activeItem = a,
                            e._setActiveMedia(n),
                            n;
                        e._destroyActiveMedia()
                    }
                    return e._setupMediaController(s).then((function(t) {
                        if (r === e.itemSetContext)
                            return t.activeItem = a,
                            e._setActiveMedia(t),
                            t
                    }
                    )).catch((function(t) {
                        throw e._destroyActiveMedia(),
                        t
                    }
                    ))
                }
                ))
            }
            ,
            l.setAttached = function(t) {
                var e = this.mediaController;
                if (this.attached = t,
                e) {
                    if (!t) {
                        var i = e.detach()
                          , n = e.item
                          , o = e.mediaModel.get("position");
                        return o && (n.starttime = o),
                        i
                    }
                    e.attach()
                }
            }
            ,
            l.playVideo = function(t) {
                var e, i = this, n = this.mediaController, a = this.model;
                if (!a.get("playlistItem"))
                    return Promise.reject(new Error("No media"));
                if (t || (t = a.get("playReason")),
                n)
                    e = n.play(t);
                else {
                    a.set(o.uc, o.Kb);
                    var r = m((function(e) {
                        if (i.mediaController && i.mediaController.mediaModel === e.mediaModel)
                            return e.play(t);
                        throw new Error("Playback cancelled.")
                    }
                    ));
                    e = (this.loadPromise || Promise.resolve()).catch((function(t) {
                        throw r.cancel(),
                        t
                    }
                    )).then((function() {
                        return r.async()
                    }
                    ))
                }
                return e
            }
            ,
            l.stopVideo = function() {
                var t = this.mediaController
                  , e = this.model
                  , i = e.get("playlist")[e.get("item")];
                e.attributes.playlistItem = i,
                e.resetItem(i),
                t && t.stop()
            }
            ,
            l.preloadVideo = function() {
                var t = this.background
                  , e = this.mediaController || t.currentMedia;
                e && e.preload()
            }
            ,
            l.pause = function() {
                var t = this.mediaController;
                t && t.pause()
            }
            ,
            l.castVideo = function(t, e) {
                var i = this.model;
                i.attributes.itemReady = !1;
                var n = (0,
                a.l7)({}, e)
                  , o = n.starttime = i.mediaModel.get("currentTime");
                this._destroyActiveMedia();
                var r = new L(t,i);
                r.activeItem = n,
                this._setActiveMedia(r),
                i.mediaModel.set("currentTime", o)
            }
            ,
            l.stopCast = function() {
                var t = this.model
                  , e = t.get("item");
                t.get("playlist")[e].starttime = t.mediaModel.get("currentTime"),
                this.stopVideo(),
                this.setActiveItem(e).catch((function() {}
                ))
            }
            ,
            l.backgroundActiveMedia = function() {
                this.adPlaying = !0;
                var t = this.background
                  , e = this.mediaController;
                e && (t.currentMedia && this._destroyMediaController(t.currentMedia),
                e.background = !0,
                t.currentMedia = e,
                this.mediaController = null)
            }
            ,
            l.restoreBackgroundMedia = function() {
                this.adPlaying = !1;
                var t = this.background
                  , e = this.mediaController
                  , i = t.currentMedia;
                if (i) {
                    if (e && e !== i)
                        return this._destroyMediaController(i),
                        void (t.currentMedia = null);
                    var n = i.mediaModel.attributes;
                    n.mediaState === o.bc ? n.mediaState = o._5 : n.mediaState !== o._5 && (n.mediaState = o.Kb),
                    this._setActiveMedia(i),
                    i.background = !1,
                    t.currentMedia = null
                }
            }
            ,
            l.backgroundLoad = function(t, e) {
                var i = this
                  , n = this.background
                  , o = this.getAsyncItem(e).run().then((function(t) {
                    n.updateNext(t);
                    var e = Q(t);
                    return i._setupMediaController(e).then((function(e) {
                        return e.activeItem = t,
                        e.preload(),
                        e
                    }
                    ))
                }
                )).catch((function() {
                    n.clearNext()
                }
                ));
                n.setNext(t, o)
            }
            ,
            l.forwardEvents = function() {
                var t = this.mediaController;
                t && W(t, this)
            }
            ,
            l.routeEvents = function(t) {
                var e = this.mediaController;
                e && (e.off(),
                t && W(e, t))
            }
            ,
            l.destroy = function() {
                this.off(),
                this._destroyBackgroundMedia(),
                this._destroyActiveMedia(),
                this.asyncItems && this.asyncItems.forEach((function(t) {
                    t && t.destroy()
                }
                )),
                this.asyncItems = this.loadPromise = this.mediaControllerListener = this.model = this.providers = this.apiContext = null
            }
            ,
            l._setActiveMedia = function(t) {
                var e = this.model
                  , i = t.mediaModel
                  , n = t.provider;
                !function(t, e) {
                    var i = t.get("mediaContainer");
                    i ? e.container = i : t.once("change:mediaContainer", (function(t, i) {
                        e.container = i
                    }
                    ))
                }(e, t),
                this.mediaController = t,
                e.set("mediaElement", t.mediaElement),
                e.setMediaModel(i),
                e.setProvider(n),
                W(t, this),
                e.set("itemReady", !0)
            }
            ,
            l._destroyActiveMedia = function() {
                var t = this.mediaController
                  , e = this.model;
                t && t.provider && (t.detach(),
                this._destroyMediaController(t),
                e.resetProvider(),
                this.mediaController = null)
            }
            ,
            l._destroyBackgroundMedia = function() {
                var t = this.background;
                this._destroyMediaController(t.currentMedia),
                t.currentMedia = null,
                this._destroyBackgroundLoadingMedia()
            }
            ,
            l._destroyMediaController = function(t) {
                var e = this.mediaPool;
                t && t.provider && (e.recycle(t.mediaElement),
                t.destroy())
            }
            ,
            l._setupMediaController = function(t) {
                var e = this
                  , i = this.model
                  , n = this.providers
                  , o = function(t) {
                    return new L(new t(i.get("id"),i.getConfiguration(),e.primedElement),i)
                }
                  , a = n.choose(t)
                  , r = a.provider
                  , s = a.name;
                return r ? Promise.resolve(o(r)) : n.load(s).then((function(t) {
                    return o(t)
                }
                ))
            }
            ,
            l._activateBackgroundMedia = function() {
                var t = this
                  , e = this.background
                  , i = this.background.nextLoadPromise
                  , n = this.model;
                return this._destroyMediaController(e.currentMedia),
                e.currentMedia = null,
                i.then((function(i) {
                    if (i)
                        return e.clearNext(),
                        t.adPlaying ? (n.attributes.itemReady = !0,
                        e.currentMedia = i) : (t._setActiveMedia(i),
                        i.background = !1),
                        i
                }
                ))
            }
            ,
            l._destroyBackgroundLoadingMedia = function() {
                var t = this
                  , e = this.background
                  , i = this.background.nextLoadPromise;
                i && i.then((function(i) {
                    t._destroyMediaController(i),
                    e.clearNext()
                }
                ))
            }
            ,
            l._providerCanPlay = function(t, e) {
                var i = this.providers.choose(e).provider;
                return i && t && t instanceof i
            }
            ,
            l.setMute = function(t) {
                var e = this.background
                  , i = this.mediaController
                  , n = this.mediaPool;
                i && (i.mute = t),
                e.currentMedia && (e.currentMedia.mute = t),
                n.syncMute(t)
            }
            ,
            l.setVolume = function(t) {
                var e = this.background
                  , i = this.mediaController
                  , n = this.mediaPool;
                i && (i.volume = t),
                e.currentMedia && (e.currentMedia.volume = t),
                n.syncVolume(t)
            }
            ,
            l.getAsyncItem = function(t) {
                var e = this.asyncItems[t];
                return e || ((e = this.asyncItems[t] = new q(t,this.model,this.apiContext)).callback = this.model.get("playlistItemCallback")),
                e
            }
            ,
            l.clearItemPromises = function() {
                this.asyncItems.forEach((function(t) {
                    t && t.reject(new Error("Item playback aborted"))
                }
                )),
                this.asyncItems.length = 0
            }
            ,
            r = n,
            (s = [{
                key: "audioTrack",
                get: function() {
                    var t = this.mediaController;
                    return t ? t.audioTrack : -1
                },
                set: function(t) {
                    var e = this.mediaController;
                    e && (e.audioTrack = parseInt(t, 10) || 0)
                }
            }, {
                key: "audioTracks",
                get: function() {
                    var t = this.mediaController;
                    if (t)
                        return t.audioTracks
                }
            }, {
                key: "beforeComplete",
                get: function() {
                    var t = this.mediaController
                      , e = this.background.currentMedia;
                    return !(!t && !e) && (t ? t.beforeComplete : e.beforeComplete)
                }
            }, {
                key: "primedElement",
                get: function() {
                    return this.backgroundLoading ? this.mediaPool.getPrimedElement() : this.model.get("mediaElement")
                }
            }, {
                key: "quality",
                get: function() {
                    return this.mediaController ? this.mediaController.quality : -1
                },
                set: function(t) {
                    var e = this.mediaController;
                    e && (e.quality = parseInt(t, 10) || 0)
                }
            }, {
                key: "qualities",
                get: function() {
                    var t = this.mediaController;
                    return t ? t.qualities : null
                }
            }, {
                key: "position",
                set: function(t) {
                    var e = this.mediaController;
                    e && (e.item.starttime = t,
                    e.attached && (e.position = t))
                }
            }, {
                key: "subtitles",
                set: function(t) {
                    var e = this.mediaController;
                    e && (e.subtitles = t)
                }
            }, {
                key: "itemCallback",
                set: function(t) {
                    this.model.set("playlistItemCallback", t),
                    this.asyncItems.forEach((function(e) {
                        e && (e.callback = t)
                    }
                    ))
                }
            }]) && U(r.prototype, s),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            n
        }(f.ZP);
        function $(t) {
            return t === o.xQ || t === o.Vy ? o.bc : t
        }
        function K(t, e, i) {
            if ((e = $(e)) !== (i = $(i))) {
                var n = e.replace(/(?:ing|d)$/, "")
                  , a = function(t, e) {
                    return t === o.Kb ? e === o.nQ ? e : o.ik : e
                }(e, t.mediaModel.get("mediaState"))
                  , r = {
                    type: n,
                    newstate: e,
                    oldstate: i,
                    reason: a
                };
                "play" === n ? r.playReason = t.get("playReason") : "pause" === n && (r.pauseReason = t.get("pauseReason")),
                this.trigger(n, r)
            }
        }
        var J = i(3893);
        function X(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function G(t, e) {
            return G = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            G(t, e)
        }
        var tt = function(t) {
            var e, i;
            function n(e, i) {
                var n, o, a = (n = t.call(this, e, i) || this).model = new A;
                if (n.playerModel = e,
                n.provider = null,
                n.backgroundLoading = e.get("backgroundLoading"),
                a.mediaModel.attributes.mediaType = "video",
                n.backgroundLoading)
                    o = i.getAdElement();
                else {
                    o = e.get("mediaElement"),
                    a.attributes.mediaElement = o,
                    a.attributes.mediaSrc = o.src;
                    var r = n.srcResetListener = function() {
                        n.srcReset()
                    }
                    ;
                    o.addEventListener("emptied", r),
                    o.playbackRate = o.defaultPlaybackRate = 1
                }
                return n.mediaPool = (0,
                J.Z)(o, i),
                n
            }
            i = t,
            (e = n).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            G(e, i);
            var r, s, l = n.prototype;
            return l.setup = function() {
                var t = this.model
                  , e = this.playerModel
                  , i = this.primedElement
                  , n = e.attributes
                  , a = e.mediaModel;
                t.setup({
                    id: n.id,
                    volume: n.volume,
                    instreamMode: !0,
                    edition: n.edition,
                    mediaContext: a,
                    mute: n.mute,
                    streamType: "VOD",
                    autostartMuted: n.autostartMuted,
                    autostart: n.autostart,
                    advertising: n.advertising,
                    sdkplatform: n.sdkplatform,
                    skipButton: !1
                }),
                t.on("change:state", K, this),
                t.on(o.pn, (function(t) {
                    this.trigger(o.pn, t)
                }
                ), this),
                i.paused || i.pause()
            }
            ,
            l.setActiveItem = function(e) {
                var i = this;
                return this.stopVideo(),
                this.provider = null,
                t.prototype.setActiveItem.call(this, e).then((function(t) {
                    return i.trigger(o.$_),
                    i._setProvider(t.provider),
                    i.playVideo()
                }
                ))
            }
            ,
            l.usePsuedoProvider = function(t) {
                t && (this._setProvider(t),
                t.off(o.pn),
                t.on(o.pn, (function(t) {
                    this.trigger(o.pn, t)
                }
                ), this))
            }
            ,
            l._setProvider = function(t) {
                var e = this;
                if (t && this.mediaPool) {
                    this.provider = t;
                    var i = this.model
                      , n = this.playerModel
                      , r = "vpaid" === t.type;
                    t.off(),
                    t.on("all", (function(t, e) {
                        r && t === o.Ms || this.trigger(t, (0,
                        a.l7)({}, e, {
                            type: t
                        }))
                    }
                    ), this);
                    var s = i.mediaModel;
                    t.on(o.uc, (function(t) {
                        t.oldstate = t.oldstate || i.get(o.uc),
                        s.set("mediaState", t.newstate)
                    }
                    )),
                    t.on(o.h7, this._nativeFullscreenHandler, this),
                    s.on("change:mediaState", (function(t, i) {
                        e._stateHandler(i)
                    }
                    )),
                    t.attachMedia(),
                    t.volume(n.get("volume")),
                    t.mute(n.getMute()),
                    t.setPlaybackRate && t.setPlaybackRate(1),
                    n.on("change:volume", (function(t, e) {
                        this.volume = e
                    }
                    ), this),
                    n.on("change:mute", (function(t, e) {
                        this.mute = e,
                        e || (this.volume = n.get("volume"))
                    }
                    ), this),
                    n.on("change:autostartMuted", (function(t, e) {
                        e || (i.set("autostartMuted", e),
                        this.mute = n.get("mute"))
                    }
                    ), this)
                }
            }
            ,
            l.destroy = function() {
                var t = this.model
                  , e = this.mediaPool
                  , i = this.playerModel;
                t.off(),
                this.provider = null;
                var n = e.getPrimedElement();
                if (this.backgroundLoading) {
                    e.clean();
                    var o = i.get("mediaContainer");
                    n.parentNode === o && o.removeChild(n)
                } else
                    n && (n.removeEventListener("emptied", this.srcResetListener),
                    n.src !== t.get("mediaSrc") && this.srcReset())
            }
            ,
            l.srcReset = function() {
                var t = this.playerModel
                  , e = t.get("mediaModel")
                  , i = t.getVideo();
                e.srcReset(),
                i && (i.src = null)
            }
            ,
            l._nativeFullscreenHandler = function(t) {
                this.model.trigger(o.h7, t),
                this.trigger(o.UW, {
                    fullscreen: t.jwstate
                })
            }
            ,
            l._stateHandler = function(t) {
                var e = this.model;
                switch (t) {
                case o.r0:
                case o._5:
                    e.set(o.uc, t)
                }
            }
            ,
            r = n,
            (s = [{
                key: "mute",
                set: function(e) {
                    var i = this.mediaController
                      , n = this.model
                      , o = this.provider;
                    n.set("mute", e),
                    t.prototype.setMute.call(this, e),
                    i || o.mute(e)
                }
            }, {
                key: "volume",
                set: function(e) {
                    var i = this.mediaController
                      , n = this.model
                      , o = this.provider;
                    n.set("volume", e),
                    t.prototype.setVolume.call(this, e),
                    i || o.volume(e)
                }
            }]) && X(r.prototype, s),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            n
        }(Y)
          , et = {
            skipoffset: null,
            tag: null
        }
          , it = function(t, e, i, n) {
            var r, s, l, c, u = this, d = this, p = new tt(e,n), f = 0, g = {}, j = null, m = {}, v = I, b = !1, y = !1, k = !1, x = !1, C = function(t) {
                y || ((t = t || {}).hasControls = !!e.get("controls"),
                u.trigger(o.l5, t),
                p.model.get("state") === o._5 ? t.hasControls && p.playVideo().catch((function() {}
                )) : p.pause())
            }, M = function() {
                y || p.model.get("state") === o._5 && e.get("controls") && (t.setFullscreen(),
                t.play())
            };
            function T() {
                p.model.set("playRejected", !0)
            }
            function _() {
                f++,
                d.loadItem(r).catch((function() {}
                ))
            }
            function S(t, e) {
                "complete" !== t && (e = e || {},
                m.tag && !e.tag && (e.tag = m.tag),
                this.trigger(t, e),
                "mediaError" !== t && "error" !== t || this.loadNextItemOnError())
            }
            function E(t) {
                var e = t.newstate
                  , i = t.oldstate || p.model.get("state");
                i !== e && A((0,
                a.l7)({
                    oldstate: i
                }, g, t))
            }
            function A(e) {
                var i = e.newstate;
                i === o.r0 ? t.trigger(o.WE, e) : i === o._5 && t.trigger(o.Ax, e)
            }
            function P(e) {
                var i = e.duration
                  , n = e.position
                  , o = p.model.mediaModel || p.model;
                o.set("duration", i),
                o.set("position", n),
                c || (c = ((0,
                w.U5)(l, i) || i) - h.l_),
                !b && n >= Math.max(c, h.HB) && (t.preloadNextItem(),
                b = !0)
            }
            function z(t) {
                var e = {};
                m.tag && (e.tag = m.tag),
                this.trigger(o.Ms, e),
                I.call(this, t)
            }
            function I(t) {
                g = {},
                r && f + 1 < r.length ? _() : (t.type === o.Ms && this.trigger(o.V$, {}),
                this.destroy())
            }
            function L() {
                !y && i && i.clickHandler() && i.clickHandler().setAlternateClickHandlers(C, M)
            }
            function B(n) {
                n.width && n.height && i && i.resizeMedia(),
                e.get("pip") && t.requestPip(p.primedElement)
            }
            this.init = function() {
                if (!k && !y) {
                    k = !0,
                    g = {},
                    p.setup(),
                    p.on("all", S, this),
                    p.on(o.Je, T, this),
                    p.on(o.R2, P, this),
                    p.on(o.Ms, z, this),
                    p.on(o.rx, B, this),
                    p.on(o.uc, E, this),
                    j = t.detachMedia();
                    var n = p.primedElement;
                    if (e.get("mediaContainer").appendChild(n),
                    e.set("instream", p),
                    p.model.set("state", o.Kb),
                    i) {
                        var a = i.clickHandler();
                        a && a.setAlternateClickHandlers((function() {}
                        ), null)
                    }
                    return this.setText(e.get("localization").loadingAd),
                    x = t.isBeforeComplete() || e.get("state") === o.xQ,
                    this
                }
            }
            ,
            this.enableAdsMode = function(n) {
                var a = this;
                if (!k && !y)
                    return t.routeEvents({
                        mediaControllerListener: function(t, e) {
                            a.trigger(t, e)
                        }
                    }),
                    e.set("instream", p),
                    p.model.set("state", o.r0),
                    function(n) {
                        if (i) {
                            var a = i.clickHandler();
                            a && a.setAlternateClickHandlers((function(i) {
                                y || ((i = i || {}).hasControls = !!e.get("controls"),
                                d.trigger(o.l5, i),
                                n && (e.get("state") === o._5 ? t.playVideo() : (t.pause(),
                                n && (t.trigger(o.Rt, {
                                    clickThroughUrl: n
                                }),
                                window.open(n)))))
                            }
                            ), null)
                        }
                    }(n),
                    this
            }
            ,
            this.setEventData = function(t) {
                g = t
            }
            ,
            this.setState = function(t) {
                var e = t.newstate
                  , i = p.model;
                t.oldstate = i.get("state"),
                i.set("state", e),
                A(t)
            }
            ,
            this.setTime = function(e) {
                P(e),
                t.trigger(o.uL, e)
            }
            ,
            this.loadNextItemOnError = function() {
                r && f + 1 < r.length && _()
            }
            ,
            this.loadItem = function(t, i) {
                if (y || !k)
                    return Promise.reject(new Error("Instream not setup"));
                g = {};
                var n = t;
                Array.isArray(t) ? (s = i || s,
                t = (r = t)[f],
                s && (i = s[f])) : n = [t];
                var c = p.model;
                c.set("playlist", n),
                e.set("hideAdsControls", !1),
                t.starttime = 0,
                d.trigger(o.gO, {
                    index: f,
                    item: t
                }),
                m = (0,
                a.l7)({}, et, i),
                L(),
                c.set("skipButton", !1);
                var u = !e.get("backgroundLoading") && j ? j.then((function() {
                    return p.setActiveItem(f)
                }
                )) : p.setActiveItem(f);
                return b = !1,
                void 0 !== (l = t.skipoffset || m.skipoffset) && d.setupSkipButton(l, m),
                u
            }
            ,
            this.setupSkipButton = function(t, e, i) {
                var n = p.model;
                v = i || I,
                n.set("skipMessage", e.skipMessage),
                n.set("skipText", e.skipText),
                n.set("skipOffset", t),
                n.attributes.skipButton = !1,
                n.set("skipButton", !0)
            }
            ,
            this.applyProviderListeners = function(t) {
                p.usePsuedoProvider(t),
                L()
            }
            ,
            this.play = function() {
                g = {},
                p.playVideo()
            }
            ,
            this.pause = function() {
                g = {},
                p.pause()
            }
            ,
            this.skipAd = function(t) {
                var i = e.get("autoPause").pauseAds
                  , n = "autostart" === e.get("playReason")
                  , a = e.get("viewable");
                !i || n || a || (this.noResume = !0);
                var r = o.k3;
                this.trigger(r, t),
                v.call(this, {
                    type: r
                })
            }
            ,
            this.replacePlaylistItem = function(t) {
                y || (e.set("playlistItem", t),
                p.srcReset())
            }
            ,
            this.destroy = function() {
                y || (y = !0,
                this.trigger("destroyed"),
                this.off(),
                i && i.clickHandler() && i.clickHandler().revertAlternateClickHandlers(),
                e.off(null, null, p),
                p.off(null, null, d),
                p.destroy(),
                k && p.model && (e.attributes.state = o._5),
                t.forwardEvents(),
                e.set("instream", null),
                p = null,
                g = {},
                j = null,
                k && !e.attributes._destroyed && (t.attachMedia(),
                e.get("pip") && t.requestPip(),
                this.noResume || (x ? t.stopVideo() : t.playVideo())))
            }
            ,
            this.getState = function() {
                return !y && p.model.get("state")
            }
            ,
            this.setText = function(t) {
                return y || !i || i.setAltText(t || ""),
                this
            }
            ,
            this.hide = function() {
                y || e.set("hideAdsControls", !0)
            }
            ,
            this.getMediaElement = function() {
                return y ? null : p.primedElement
            }
            ,
            this.setSkipOffset = function(t) {
                l = t > 0 ? t : null,
                p && p.model.set("skipOffset", l)
            }
        };
        (0,
        a.l7)(it.prototype, f.ZP);
        var nt = it
          , ot = i(7582)
          , at = i(4406)
          , rt = function(t) {
            var e = this
              , i = []
              , n = {}
              , a = 0
              , r = 0;
            function s(t) {
                t.data = t.data || [],
                t.name = t.label || t.name || t.language;
                var e = (0,
                at.M)(t, i.length);
                if (!t.name) {
                    var o = (0,
                    at._)(t, a);
                    t.name = o.label,
                    a = o.unknownCount
                }
                t._id = e,
                n[e] = t,
                (i = i.filter((function(t) {
                    return t._id !== e
                }
                ))).push(t)
            }
            function l() {
                for (var t = [{
                    id: "off",
                    label: "Off"
                }], e = 0; e < i.length; e++)
                    t.push({
                        id: i[e]._id,
                        label: i[e].name || "Unknown CC",
                        language: i[e].language
                    });
                return t
            }
            function c(e) {
                var n = r = e
                  , o = t.get("captionLabel");
                if ("Off" !== o) {
                    for (var a = 0; a < i.length; a++) {
                        var s = i[a];
                        if (o && o === s.name) {
                            n = a + 1;
                            break
                        }
                        s.default || s.defaulttrack || "default" === s._id ? n = a + 1 : s.autoselect
                    }
                    var l;
                    l = n,
                    i.length ? t.setVideoSubtitleTrack(l, i) : t.set("captionsIndex", l)
                } else
                    t.set("captionsIndex", 0)
            }
            function u() {
                var e = l();
                d(e) !== d(t.get("captionsList")) && (t.set("captionsList", e),
                c(r))
            }
            function d(t) {
                return t.map((function(t) {
                    return t.id + "-" + t.label
                }
                )).join(",")
            }
            t.on("change:playlistItem", (function(t) {
                i = [],
                n = {},
                a = 0;
                var e = t.attributes;
                e.captionsIndex = 0,
                e.captionsList = l(),
                t.set("captionsTrack", null)
            }
            ), this),
            t.on("change:itemReady", (function() {
                var i = t.get("playlistItem").tracks
                  , a = i && i.length;
                if (a && !t.get("renderCaptionsNatively"))
                    for (var r = function(t) {
                        var a, r = i[t];
                        r.includedInManifest || "subtitles" !== (a = r.kind) && "captions" !== a || n[r._id] || (r.sideloaded = !0,
                        s(r),
                        (0,
                        ot.x)(r, (function(t) {
                            !function(t, e) {
                                t.data = e
                            }(r, t)
                        }
                        ), (function(t) {
                            e.trigger(o.cM, t)
                        }
                        )))
                    }, l = 0; l < a; l++)
                        r(l);
                u()
            }
            ), this),
            t.on("change:captionsIndex", (function(t, e) {
                var n = null;
                0 !== e && (n = i[e - 1]),
                t.set("captionsTrack", n)
            }
            ), this),
            this.setSubtitlesTracks = function(t) {
                Array.isArray(t) && (t.length ? (t.forEach((function(t) {
                    return s(t)
                }
                )),
                i.sort((function(e, i) {
                    var n = t.indexOf(e);
                    if (-1 === n)
                        return 1;
                    var o = t.indexOf(i);
                    return -1 === o ? -1 : n - o
                }
                ))) : (i = [],
                n = {},
                a = 0),
                u())
            }
            ,
            this.selectDefaultIndex = c,
            this.getCurrentIndex = function() {
                return t.get("captionsIndex")
            }
            ,
            this.getCaptionsList = function() {
                return t.get("captionsList")
            }
            ,
            this.destroy = function() {
                this.off(null, null, this)
            }
        };
        (0,
        a.l7)(rt.prototype, f.ZP);
        var st = rt
          , lt = i(3057)
          , ct = i(4949);
        function ut(t) {
            try {
                return t.getBoundingClientRect()
            } catch (t) {}
        }
        var dt = i(6252)
          , pt = i(1909)
          , ht = i(7571)
          , wt = i(599)
          , ft = i(3886)
          , gt = i(4806)
          , jt = i(9002)
          , mt = i(6286)
          , vt = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
        function bt(t, e, i) {
            for (var n = t.requestFullscreen || t.webkitRequestFullscreen || t.webkitRequestFullScreen || t.mozRequestFullScreen || t.msRequestFullscreen, o = e.exitFullscreen || e.webkitExitFullscreen || e.webkitCancelFullScreen || e.mozCancelFullScreen || e.msExitFullscreen, a = !(!n || !o), r = vt.length; r--; )
                e.addEventListener(vt[r], i);
            return {
                events: vt,
                supportsDomFullscreen: function() {
                    return a
                },
                requestFullscreen: function() {
                    n.call(t, {
                        navigationUI: "hide"
                    })
                },
                exitFullscreen: function() {
                    null !== this.fullscreenElement() && o.apply(e)
                },
                fullscreenElement: function() {
                    var t = e.fullscreenElement
                      , i = e.webkitCurrentFullScreenElement
                      , n = e.mozFullScreenElement
                      , o = e.msFullscreenElement;
                    return null === t ? t : t || i || n || o
                },
                destroy: function() {
                    for (var t = vt.length; t--; )
                        e.removeEventListener(vt[t], i)
                }
            }
        }
        var yt = bt.requestFullscreen
          , kt = bt.requestFullscreen
          , xt = i(5053);
        function Ct(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function Mt(t, e) {
            return Mt = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Mt(t, e)
        }
        var Tt = function(t) {
            var e, i;
            function n(e, i) {
                var n;
                return (n = t.call(this) || this).revertAlternateClickHandlers(),
                n.domElement = i,
                n.model = e,
                n.ui = new xt.ZP(i).on("click", n.clickHandler, Ct(n)).on("doubleClick", (function() {
                    this.alternateDoubleClickHandler ? this.alternateDoubleClickHandler() : this.trigger("doubleClick")
                }
                ), Ct(n)),
                n
            }
            i = t,
            (e = n).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            Mt(e, i);
            var a = n.prototype;
            return a.destroy = function() {
                this.ui && (this.ui.destroy(),
                this.ui = null,
                this.domElement = null,
                this.model = null,
                this.revertAlternateClickHandlers())
            }
            ,
            a.clickHandler = function(t) {
                this.model && (this.alternateClickHandler ? this.alternateClickHandler(t) : this.trigger(o.ot))
            }
            ,
            a.element = function() {
                return this.domElement
            }
            ,
            a.setAlternateClickHandlers = function(t, e) {
                this.alternateClickHandler = t,
                this.alternateDoubleClickHandler = e || null
            }
            ,
            a.revertAlternateClickHandlers = function() {
                this.alternateClickHandler = null,
                this.alternateDoubleClickHandler = null
            }
            ,
            n
        }(f.ZP)
          , _t = i(4699)
          , St = i(8395)
          , Et = {
            linktarget: "_blank",
            margin: 8,
            hide: !1,
            position: "top-right"
        };
        function At(t) {
            var e, i;
            (0,
            a.l7)(this, f.ZP);
            var n = new Image;
            this.setup = function() {
                (i = (0,
                a.l7)({}, Et, t.get("logo"))).position = i.position || Et.position,
                i.hide = "true" === i.hide.toString(),
                i.file && "control-bar" !== i.position && (e || (e = (0,
                gt.az)('<div class="jw-logo jw-logo-' + i.position + (i.hide ? " jw-hide" : "") + ' jw-reset"></div>')),
                t.set("logo", i),
                n.onload = function() {
                    var n = this.height
                      , o = this.width
                      , a = {
                        backgroundImage: 'url("' + this.src + '")'
                    };
                    if (i.margin !== Et.margin) {
                        var r = /(\w+)-(\w+)/.exec(i.position);
                        3 === r.length && (a["margin-" + r[1]] = i.margin,
                        a["margin-" + r[2]] = i.margin)
                    }
                    var s = .15 * t.get("containerHeight")
                      , l = .15 * t.get("containerWidth");
                    if (n > s || o > l) {
                        var c = o / n;
                        l / s > c ? (n = s,
                        o = s * c) : (o = l,
                        n = l / c)
                    }
                    a.width = Math.round(o),
                    a.height = Math.round(n),
                    (0,
                    mt.oB)(e, a),
                    t.set("logoWidth", a.width)
                }
                ,
                n.src = i.file,
                i.link && (e.setAttribute("tabindex", "0"),
                e.setAttribute("aria-label", t.get("localization").logo)),
                this.ui = (0,
                St.Z)(e, (function() {
                    this.trigger(o.Ib, {
                        link: i.link,
                        linktarget: i.linktarget
                    })
                }
                ), this))
            }
            ,
            this.setContainer = function(t) {
                e && t.appendChild(e)
            }
            ,
            this.element = function() {
                return e
            }
            ,
            this.position = function() {
                return i.position
            }
            ,
            this.destroy = function() {
                n.onload = null,
                this.ui && this.ui.destroy()
            }
        }
        var Pt = function() {
            function t(t) {
                this.model = t,
                this.image = null
            }
            var e = t.prototype;
            return e.setup = function(t) {
                this.el = t,
                this.hasZoomThumbnail = this.model.get("_abZoomThumbnail"),
                this.hasZoomThumbnail && (this.zoomOriginX = Math.ceil(100 * Math.random()) + "%",
                this.zoomOriginY = Math.ceil(100 * Math.random()) + "%",
                this.model.on("change:viewable", this.pauseZoomThumbnail, this),
                this.model.on("change:isFloating", this.enableZoomThumbnail, this))
            }
            ,
            e.setImage = function(t) {
                var e = this.image;
                e && (e.onload = null),
                this.image = null;
                var i = "";
                "string" == typeof t && (i = 'url("' + t + '")',
                (e = this.image = new Image).src = t),
                this.hasZoomThumbnail ? (this.imageEl = document.createElement("div"),
                (0,
                mt.oB)(this.imageEl, {
                    backgroundImage: i
                }),
                this.el && this.el.appendChild(this.imageEl),
                this.enableZoomThumbnail()) : (0,
                mt.oB)(this.el, {
                    backgroundImage: i
                })
            }
            ,
            e.enableZoomThumbnail = function() {
                var t = this;
                this.hasZoomThumbnail && !this.model.get("isFloating") && (clearTimeout(this.zoomThumbnailTimeout),
                this.zoomThumbnailTimeout = window.setTimeout((function() {
                    t.imageEl && (t.imageEl.classList.add("jw-ab-zoom-thumbnail"),
                    t.imageEl.style.transformOrigin = t.zoomOriginX + " " + t.zoomOriginY)
                }
                ), 2e3))
            }
            ,
            e.pauseZoomThumbnail = function() {
                clearTimeout(this.zoomThumbnailTimeout),
                this.imageEl && (this.imageEl.style.animationPlayState = this.model.get("viewable") ? "running" : "paused")
            }
            ,
            e.removeZoomThumbnail = function() {
                clearTimeout(this.zoomThumbnailTimeout),
                this.imageEl && this.imageEl.classList.remove("jw-ab-zoom-thumbnail")
            }
            ,
            e.resize = function(t, e, i) {
                var n, o = this;
                if ("uniform" === i) {
                    if (t && (this.playerAspectRatio = t / e),
                    !this.playerAspectRatio || !this.image || "complete" !== (n = this.model.get("state")) && "idle" !== n && "error" !== n && "buffering" !== n)
                        return;
                    var a = this.image
                      , r = null;
                    if (a) {
                        if (0 === a.width)
                            return void (a.onload = function() {
                                o.resize(t, e, i)
                            }
                            );
                        var s = a.width / a.height;
                        Math.abs(this.playerAspectRatio - s) < .09 && (r = "cover")
                    }
                    (0,
                    mt.oB)(this.el, {
                        backgroundSize: r
                    })
                }
            }
            ,
            e.element = function() {
                return this.el
            }
            ,
            e.destroy = function() {
                this.hasZoomThumbnail && (this.removeZoomThumbnail(),
                this.model.off(null, null, this))
            }
            ,
            t
        }()
          , zt = i(3296)
          , It = function(t) {
            var e = new Pt(t)
              , i = e.setImage.bind(e);
            return (e = (0,
            a.l7)(e, f.ZP)).setImage = function(t, n, o, a) {
                if (i(t),
                n) {
                    var r = a._model;
                    new zt.Z("posterItem",e.el,o,a,(function() {
                        e.trigger("videoThumbnailFirstFrame", {
                            feedData: o.feedData,
                            target: o,
                            ui: "poster",
                            viewable: r.get("viewable")
                        })
                    }
                    )).init()
                }
            }
            ,
            e
        }
          , Lt = i(2043)
          , Bt = function() {
            function t(t) {
                this.container = t,
                this.input = t.querySelector(".jw-media")
            }
            var e = t.prototype;
            return e.disable = function() {
                var t = this.container;
                t && ((0,
                gt.IV)(t, "jw-floating-dragged"),
                (0,
                gt.IV)(t, "jw-floating-dragging"),
                Rt(t, "auto")),
                this.ui && (this.ui.destroy(),
                this.ui = null)
            }
            ,
            e.enable = function() {
                var t, e, i, n, o, a, r, s, l = this.container, c = this.input, u = 0, d = 0;
                this.ui = new xt.ZP(c,{
                    preventScrolling: !0
                }).on("dragStart", (function(i) {
                    var n = i.pageX
                      , c = i.pageY
                      , u = window
                      , d = u.innerWidth
                      , p = u.innerHeight
                      , h = l.offsetLeft
                      , w = l.offsetTop
                      , f = l.offsetWidth
                      , g = l.offsetHeight;
                    t = n,
                    e = c,
                    o = -h,
                    a = -w,
                    r = Ot(d, h, f),
                    s = Ot(p, w, g),
                    (0,
                    gt.cn)(l, "jw-floating-dragged"),
                    (0,
                    gt.cn)(l, "jw-floating-dragging"),
                    Rt(l, "transform")
                }
                )).on("drag", (function(c) {
                    var p = c.pageX
                      , h = c.pageY;
                    i = Vt(u, p, t, r, o),
                    n = Vt(d, h, e, s, a),
                    (0,
                    mt.vs)(l, "translate(" + i + "px, " + n + "px)")
                }
                )).on("dragEnd", (function() {
                    (0,
                    gt.IV)(l, "jw-floating-dragging"),
                    Rt(l, "auto"),
                    u = i,
                    d = n
                }
                ))
            }
            ,
            t
        }()
          , Ot = function(t, e, i) {
            return t - e - i
        }
          , Vt = function(t, e, i, n, o) {
            return Math.max(Math.min(t + e - i, n), o)
        }
          , Rt = function(t, e) {
            return (0,
            mt.oB)(t, {
                willChange: e
            })
        };
        function Ft(t, e, i, n) {
            var o = {
                width: e
            };
            if (n && void 0 !== i && t.set("aspectratio", null),
            !t.get("aspectratio")) {
                var r = i;
                (0,
                a.hj)(r) && 0 !== r && (r = Math.max(r, 44)),
                o.height = r
            }
            return o
        }
        var Ht = null
          , Zt = {
            floatingPlayer: Ht
        };
        Object.defineProperty(Zt, "floatingPlayer", {
            get: function() {
                return Ht
            },
            set: function(t) {
                if (t !== Ht) {
                    Ht = t;
                    var e = qt.slice();
                    qt.length = 0,
                    e.forEach((function(t) {
                        t.startFloating()
                    }
                    ))
                }
            }
        });
        var Nt, qt = [], Ut = function(t) {
            var e = qt.indexOf(t);
            -1 !== e && qt.splice(e, 1)
        }, Dt = function() {
            function t(t, e, i, n) {
                void 0 === n && (n = k.OS.mobile),
                this._playerEl = i.player,
                this._wrapperEl = i.wrapper,
                this._preview = i.preview,
                this._model = t,
                this._floatingUI = new Bt(this._wrapperEl),
                this._floatingStoppedForever = !1,
                this._lastIntRatio = 0,
                this._playerBounds = e,
                this._isMobile = n,
                this._mobileCheckCanFire = !0,
                this._inTransition = !1,
                this._boundThrottledMobileFloatScrollHandler = this.throttledMobileFloatScrollHandler.bind(this),
                this._boundInitFloatingBehavior = this.initFloatingBehavior.bind(this)
            }
            var e = t.prototype;
            return e.setup = function() {
                this._model.change("floating", this._boundInitFloatingBehavior)
            }
            ,
            e.initFloatingBehavior = function() {
                if (!this._floatingStoppedForever && (ct.Z.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler),
                Ut(this),
                this.getFloatingConfig())) {
                    var t = this.getFloatMode();
                    "notVisible" === t ? this._isMobile ? (ct.Z.addScrollHandler(this._boundThrottledMobileFloatScrollHandler),
                    this._boundThrottledMobileFloatScrollHandler()) : this.checkFloatIntersection() : "always" === t ? this.startFloating() : "never" === t && this.stopFloating()
                }
            }
            ,
            e.updatePlayerBounds = function(t) {
                this._playerBounds = t
            }
            ,
            e.getFloatingConfig = function() {
                return this._model.get("floating")
            }
            ,
            e.getFloatMode = function() {
                var t = this.getFloatingConfig();
                return t && t.mode || "notVisible"
            }
            ,
            e.resize = function() {
                this._model.get("isFloating") && this.updateFloatingSize()
            }
            ,
            e.fosMobileBehavior = function() {
                return this._isMobile && !(0,
                gt.UM)() && !this._model.get("fullscreen")
            }
            ,
            e.shouldFloatOnViewable = function() {
                var t = this._model.get("state");
                return t !== o.bc && t !== o.Vy && t !== o.xQ
            }
            ,
            e.startFloating = function(t) {
                var e = this
                  , i = this._playerBounds;
                if (null === this.getFloatingPlayer()) {
                    this.setFloatingPlayer(this._playerEl),
                    this.transitionFloating(!0),
                    this._model.set("isFloating", !0),
                    (0,
                    gt.cn)(this._playerEl, "jw-flag-floating"),
                    t && ((0,
                    mt.oB)(this._wrapperEl, {
                        transform: "translateY(-" + (62 - i.top) + "px)"
                    }),
                    window.setTimeout((function() {
                        (0,
                        mt.oB)(e._wrapperEl, {
                            transform: "translateY(0)",
                            transition: "transform 150ms cubic-bezier(0, 0.25, 0.25, 1)"
                        })
                    }
                    ))),
                    window.setTimeout((function() {
                        e.transitionFloating(!1)
                    }
                    ), 50);
                    var n = this._preview.el;
                    (0,
                    mt.oB)(this._playerEl, {
                        backgroundImage: n.style.backgroundImage
                    }),
                    this.updateFloatingSize(),
                    this._model.get("instreamMode") || this._floatingUI.enable()
                } else
                    this.getFloatingPlayer() !== this._playerEl && "always" === this.getFloatMode() && (this,
                    -1 === qt.indexOf(this) && qt.push(this))
            }
            ,
            e.stopFloating = function(t, e) {
                var i = this;
                if (t && (this._floatingStoppedForever = !0,
                ct.Z.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler)),
                this.getFloatingPlayer() === this._playerEl) {
                    this.transitionFloating(!0),
                    this.setFloatingPlayer(null),
                    this._model.set("isFloating", !1);
                    var n = this._playerBounds
                      , o = function() {
                        (0,
                        gt.IV)(i._playerEl, "jw-flag-floating"),
                        i._model.trigger("forceAspectRatioChange", {}),
                        (0,
                        mt.oB)(i._playerEl, {
                            backgroundImage: null
                        }),
                        (0,
                        mt.oB)(i._wrapperEl, {
                            maxWidth: null,
                            width: null,
                            height: null,
                            transform: null,
                            transition: null,
                            "transition-timing-function": null
                        }),
                        window.setTimeout((function() {
                            i.transitionFloating(!1)
                        }
                        ), 50)
                    };
                    e ? ((0,
                    mt.oB)(this._wrapperEl, {
                        transform: "translateY(-" + (62 - n.top) + "px)",
                        "transition-timing-function": "ease-out"
                    }),
                    window.setTimeout(o, 150)) : o(),
                    this.disableFloatingUI()
                }
            }
            ,
            e.transitionFloating = function(t) {
                this._inTransition = t;
                var e = this._wrapperEl;
                (0,
                mt.oB)(e, {
                    display: t ? "none" : null
                }),
                t || this._model.trigger("forceResponsiveListener", {})
            }
            ,
            e.isInTransition = function() {
                return this._inTransition
            }
            ,
            e.updateFloatingSize = function() {
                var t = this._playerBounds
                  , e = this._model.get("width")
                  , i = this._model.get("height")
                  , n = Ft(this._model, e);
                if (n.maxWidth = Math.min(400, t.width),
                !this._model.get("aspectratio")) {
                    var o = t.width
                      , r = t.height / o || .5625;
                    (0,
                    a.hj)(e) && (0,
                    a.hj)(i) && (r = i / e),
                    this._model.trigger("forceAspectRatioChange", {
                        ratio: 100 * r + "%"
                    })
                }
                (0,
                mt.oB)(this._wrapperEl, n)
            }
            ,
            e.enableFloatingUI = function() {
                this._floatingUI.enable()
            }
            ,
            e.disableFloatingUI = function() {
                this._floatingUI.disable()
            }
            ,
            e.setFloatingPlayer = function(t) {
                Zt.floatingPlayer = t
            }
            ,
            e.getFloatingPlayer = function() {
                return Zt.floatingPlayer
            }
            ,
            e.destroy = function() {
                this.getFloatingPlayer() === this._playerEl && this.setFloatingPlayer(null),
                this.getFloatingConfig() && this._isMobile && ct.Z.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler),
                Ut(this),
                this._model.off("change:floating", this._boundInitFloatingBehavior)
            }
            ,
            e.updateFloating = function(t, e) {
                t < .5 && !(0,
                jt.cL)() && this.shouldFloatOnViewable() ? this.startFloating(e) : this.stopFloating(!1, e)
            }
            ,
            e.checkFloatOnScroll = function() {
                if ("notVisible" === this.getFloatMode()) {
                    var t = this._model.get("isFloating")
                      , e = this._playerBounds
                      , i = e.top < 62
                      , n = window.scrollY || window.pageYOffset
                      , o = i ? e.top <= n : e.top <= n + 62;
                    !t && o ? this.updateFloating(0, i) : t && !o && this.updateFloating(1, i)
                }
            }
            ,
            e.throttledMobileFloatScrollHandler = function() {
                var t = this;
                this.fosMobileBehavior() && this._model.get("inDom") && (clearTimeout(this._mobileDebounceTimeout),
                this._mobileDebounceTimeout = window.setTimeout(this.checkFloatOnScroll.bind(this), 150),
                this._mobileCheckCanFire && (this._mobileCheckCanFire = !1,
                this.checkFloatOnScroll(),
                window.setTimeout((function() {
                    t._mobileCheckCanFire = !0
                }
                ), 50)))
            }
            ,
            e.checkFloatIntersection = function(t) {
                var e = "number" == typeof t
                  , i = e ? t : this._lastIntRatio;
                this._canFloat = this._canFloat || i >= .5,
                !this.getFloatingConfig() || "notVisible" !== this.getFloatMode() || this.fosMobileBehavior() || this._floatingStoppedForever || this._canFloat && this.updateFloating(i),
                e && (this._lastIntRatio = t)
            }
            ,
            e.updateStyles = function() {
                !this._floatingStoppedForever && this.getFloatingConfig() && "notVisible" === this.getFloatMode() && this._boundThrottledMobileFloatScrollHandler()
            }
            ,
            t
        }(), Wt = i(1726);
        i(2858);
        var Qt = k.OS.mobile
          , Yt = k.Browser.ie
          , $t = function(t, e) {
            var i, n, r, s, l = this, c = (0,
            a.l7)(this, f.ZP, {
                isSetup: !1,
                api: t,
                model: e
            }), u = e.get("localization"), d = (0,
            gt.az)('<div id="' + e.get("id") + '" class="jwplayer jw-reset jw-state-setup" tabindex="0" aria-label="' + (u.player || "") + '" role="application"><div class="jw-aspect jw-reset"></div><div class="jw-wrapper jw-reset"><div class="jw-top jw-reset"></div><div class="jw-aspect jw-reset"></div><div class="jw-media jw-reset"></div><div class="jw-preview jw-reset"></div><div class="jw-title jw-reset-text" dir="auto"><div class="jw-title-primary jw-reset-text"></div><div class="jw-title-secondary jw-reset-text"></div></div><div class="jw-overlays jw-reset"></div><div class="jw-hidden-accessibility"><span class="jw-time-update" aria-live="assertive"></span><span class="jw-volume-update" aria-live="assertive"></span></div></div></div>'), p = d.querySelector(".jw-wrapper"), h = d.querySelector(".jw-media"), w = new It(e,t), g = new Lt.Z(e), j = new _t.Z(e);
            j.on("all", c.trigger, c);
            var m = -1
              , v = -1
              , b = -1
              , y = e.get("floating");
            this.dismissible = y && y.dismissible;
            var x, C, M, T = {}, _ = new Dt(e,T,{
                player: d,
                wrapper: p,
                preview: w
            }), S = null, E = null, A = !1, P = null;
            function z() {
                (0,
                pt.W)(v),
                v = (0,
                pt.U)(I)
            }
            function I() {
                c.isSetup && !_.isInTransition() && (c.updateBounds(),
                c.updateStyles(),
                c.checkResized())
            }
            function L(t, i) {
                if ((0,
                a.hj)(t) && (0,
                a.hj)(i)) {
                    var n = (0,
                    ht.i)(t);
                    (0,
                    ht.d)(d, n);
                    var o = n < 2;
                    (0,
                    gt.og)(d, "jw-flag-small-player", o),
                    (0,
                    gt.og)(d, "jw-orientation-portrait", i > t)
                }
                if (e.get("controls")) {
                    var r = function(t) {
                        var e = t.get("height");
                        if (t.get("aspectratio"))
                            return !1;
                        if ("string" == typeof e && e.indexOf("%") > -1)
                            return !1;
                        var i = 1 * e || NaN;
                        return !!(i = isNaN(i) ? t.get("containerHeight") : i) && !!(i && i <= 44)
                    }(e);
                    (0,
                    gt.og)(d, "jw-flag-audio-player", r),
                    e.set("audioMode", r)
                }
            }
            function B() {
                e.get("pip") || e.set("visibility", function(t, e) {
                    if (t.get("fullscreen"))
                        return 1;
                    if (!t.get("activeTab"))
                        return 0;
                    if (t.get("isFloating"))
                        return 1;
                    var i = t.get("intersectionRatio");
                    return void 0 === i && (i = function(t) {
                        var e = document.documentElement
                          , i = document.body
                          , n = {
                            top: 0,
                            left: 0,
                            right: e.clientWidth || i.clientWidth,
                            width: e.clientWidth || i.clientWidth,
                            bottom: e.clientHeight || i.clientHeight,
                            height: e.clientHeight || i.clientHeight
                        };
                        if (!i.contains(t))
                            return 0;
                        if ("none" === window.getComputedStyle(t).display)
                            return 0;
                        var o = ut(t);
                        if (!o)
                            return 0;
                        for (var a, r, s, l, c, u, d, p, h = o, w = t.parentNode, f = !1; !f; ) {
                            var g = null;
                            if (w === i || w === e || 1 !== w.nodeType ? (f = !0,
                            g = n) : "visible" !== window.getComputedStyle(w).overflow && (g = ut(w)),
                            g && (a = g,
                            r = h,
                            s = void 0,
                            l = void 0,
                            c = void 0,
                            u = void 0,
                            d = void 0,
                            p = void 0,
                            s = Math.max(a.top, r.top),
                            l = Math.min(a.bottom, r.bottom),
                            c = Math.max(a.left, r.left),
                            p = l - s,
                            !(h = (d = (u = Math.min(a.right, r.right)) - c) >= 0 && p >= 0 && {
                                top: s,
                                bottom: l,
                                left: c,
                                right: u,
                                width: d,
                                height: p
                            })))
                                return 0;
                            w = w.parentNode
                        }
                        var j = o.width * o.height
                          , m = h.width * h.height;
                        return j ? m / j : 0
                    }(e),
                    window.top !== window.self && i) ? 0 : i
                }(e, d))
            }
            function O(t, e) {
                var i = {
                    controls: e
                };
                e ? (Nt = ft.v.controls) ? V() : (i.loadPromise = (0,
                ft.z)().then((function(e) {
                    Nt = e;
                    var i = t.get("controls");
                    return i && V(),
                    i
                }
                )),
                i.loadPromise.catch((function(t) {
                    c.trigger(o.cM, t)
                }
                ))) : c.removeControls(),
                n && r && c.trigger(o.Hy, i)
            }
            function V() {
                var t = new Nt(document,c.element());
                c.addControls(t)
            }
            function R(t, e, i) {
                e && !i && (G(0, t.get("state")),
                c.updateStyles())
            }
            function F(t) {
                E && E.mouseMove(t)
            }
            function H(t) {
                E && !E.showing && "IFRAME" === t.target.nodeName && E.userActive()
            }
            function Z(t) {
                E && E.showing && (t.relatedTarget && !d.contains(t.relatedTarget) || !t.relatedTarget && k.Features.iframe) && E.userActive()
            }
            function N(t, e) {
                (0,
                gt.L_)(d, /jw-stretch-\S+/, "jw-stretch-" + e)
            }
            function q(t, e) {
                (0,
                gt.og)(d, "jw-flag-aspect-mode", !!e);
                var i = d.querySelectorAll(".jw-aspect");
                (0,
                mt.oB)(i, {
                    paddingTop: e || null
                }),
                c.isSetup && e && !t.get("isFloating") && (0,
                mt.oB)(d, Ft(t, t.get("width")))
            }
            function U(i) {
                i.link ? (t.pause({
                    reason: "interaction"
                }),
                t.setFullscreen(!1),
                (0,
                gt.nG)(i.link, i.linktarget, {
                    rel: "noreferrer"
                })) : e.get("controls") && t.playToggle({
                    reason: "interaction"
                })
            }
            this.updateBounds = function() {
                (0,
                pt.W)(v);
                var t = st()
                  , i = document.body.contains(t)
                  , o = (0,
                gt.A8)(t)
                  , a = Math.round(o.width)
                  , s = Math.round(o.height);
                if (T = (0,
                gt.A8)(d),
                _.updatePlayerBounds(T),
                a === n && s === r)
                    return n && r || z(),
                    void e.set("inDom", i);
                a && s || n && r || z(),
                (a || s || i) && (e.set("containerWidth", a),
                e.set("containerHeight", s)),
                e.set("inDom", i),
                i && ct.Z.observe(d)
            }
            ,
            this.updateStyles = function() {
                var t = e.get("containerWidth")
                  , i = e.get("containerHeight");
                L(t, i),
                E && E.resize(t, i),
                W(t, i),
                j.resize(),
                _.updateStyles()
            }
            ,
            this.checkResized = function() {
                var t = e.get("containerWidth")
                  , i = e.get("containerHeight")
                  , a = e.get("isFloating");
                if (t !== n || i !== r) {
                    this.resizeListener || (this.resizeListener = new Wt.Z(p,this,e)),
                    n = t,
                    r = i,
                    c.trigger(o.sF, {
                        width: t,
                        height: i
                    });
                    var l = (0,
                    ht.i)(t);
                    S !== l && (S = l,
                    c.trigger(o.Bs, {
                        breakpoint: S
                    }))
                }
                a !== s && (s = a,
                c.trigger(o.RF, {
                    floating: a
                }),
                B())
            }
            ,
            this.responsiveListener = z,
            this.setup = function() {
                var n, a, r, s;
                w.setup(d.querySelector(".jw-preview")),
                g.setup(d.querySelector(".jw-title")),
                (i = new At(e)).setup(),
                i.setContainer(p),
                i.on(o.Ib, U),
                j.setup(d.id, e.get("captions")),
                g.element().parentNode.insertBefore(j.element(), g.element()),
                n = t,
                r = new Tt(a = e,h),
                s = a.get("controls"),
                r.on({
                    click: function() {
                        if (c.trigger(o.cy),
                        st().focus(),
                        E) {
                            if (k.OS.mobile) {
                                var t = a.get("state");
                                if (s && (t === o.bc || t === o.xQ || a.get("instream") && t === o._5) && n.playToggle({
                                    reason: "interaction"
                                }),
                                s && t === o._5) {
                                    if (a.get("instream") || a.get("castActive") || "audio" === a.get("mediaType"))
                                        return;
                                    (0,
                                    gt.og)(d, "jw-flag-controls-hidden"),
                                    c.dismissible && (0,
                                    gt.og)(d, "jw-floating-dismissible", (0,
                                    gt.pv)(d, "jw-flag-controls-hidden")),
                                    j.renderCues(!0)
                                } else
                                    E.showing ? E.userInactive() : E.userActive();
                                return
                            }
                            it() ? E.settingsMenu.close() : a.get("displayStats") ? a.set("displayStats", !1) : n.playToggle({
                                reason: "interaction"
                            })
                        }
                    },
                    doubleClick: function() {
                        return E && n.setFullscreen()
                    }
                }),
                Qt || (d.addEventListener("mousemove", F),
                d.addEventListener("mouseover", H),
                d.addEventListener("mouseout", Z)),
                x = r,
                M = new xt.ZP(d).on("click", (function() {}
                )),
                C = function(t, e, i, n) {
                    var o = function() {
                        return n.get("ampController") && !k.OS.iOS && !k.Browser.safari
                    };
                    return bt.requestFullscreen = function() {
                        if (!o())
                            return yt.call(bt)
                    }
                    ,
                    bt.exitFullscreen = function() {
                        if (!o())
                            return kt.call(bt)
                    }
                    ,
                    bt(t, e, i)
                }(d, document, Y, e),
                e.on("change:hideAdsControls", (function(t, e) {
                    (0,
                    gt.og)(d, "jw-flag-ads-hide-controls", e)
                }
                )),
                e.on("change:scrubbing", (function(t, e) {
                    (0,
                    gt.og)(d, "jw-flag-dragging", e)
                }
                )),
                e.on("change:playRejected", (function(t, e) {
                    (0,
                    gt.og)(d, "jw-flag-play-rejected", e)
                }
                )),
                e.on(o.h7, Q),
                e.on("change:" + o.ug, (function() {
                    W(),
                    j.resize()
                }
                )),
                e.player.on("change:errorEvent", X),
                e.change("stretching", N);
                var l = e.get("width")
                  , u = e.get("height")
                  , f = Ft(e, l, u);
                (0,
                mt.oB)(d, f),
                e.change("aspectratio", q),
                L(l, u),
                e.get("controls") || ((0,
                gt.cn)(d, "jw-flag-controls-hidden"),
                (0,
                gt.IV)(d, "jw-floating-dismissible")),
                Yt && (0,
                gt.cn)(d, "jw-ie");
                var m = e.get("skin") || {};
                m.name && (0,
                gt.L_)(d, /jw-skin-\S+/, "jw-skin-" + m.name);
                var v = (0,
                wt.xq)(m);
                (0,
                wt.Sf)(e.get("id"), v),
                e.set("mediaContainer", h),
                e.set("iFrame", k.Features.iframe),
                e.set("activeTab", (0,
                dt.Z)()),
                e.set("touchMode", Qt && ("string" == typeof u || u >= 44)),
                ct.Z.add(this),
                e.get("enableGradient") && !Yt && (0,
                gt.cn)(d, "jw-ab-drop-shadow"),
                this.isSetup = !0,
                e.trigger("viewSetup", d);
                var b = document.body.contains(d);
                b && ct.Z.observe(d),
                e.set("inDom", b),
                e.on("forceAspectRatioChange", (function(t) {
                    var i = t.ratio || e.get("aspectratio");
                    q(e, i)
                }
                )),
                e.on("forceResponsiveListener", z),
                _.setup()
            }
            ,
            this.init = function() {
                this.updateBounds(),
                e.on("change:fullscreen", D),
                e.on("change:pip", at),
                e.on("change:activeTab", B),
                e.on("change:fullscreen", B),
                e.on("change:intersectionRatio", B),
                e.on("change:visibility", R),
                e.on("instreamMode", (function(t) {
                    t ? nt() : ot()
                }
                )),
                B(),
                1 !== ct.Z.size() || e.get("visibility") || R(e, 1, 0);
                var t = e.player;
                e.change("state", G),
                t.change("controls", O),
                e.change("streamType", K),
                e.change("mediaType", J),
                t.change("playlistItem", (function(t, e) {
                    et(t, e)
                }
                )),
                n = r = null,
                this.initFloatingBehavior(),
                this.checkResized()
            }
            ,
            this.initFloatingBehavior = function() {
                _.initFloatingBehavior()
            }
            ,
            this.addControls = function(i) {
                var a = this;
                E = i,
                (0,
                gt.IV)(d, "jw-flag-controls-hidden"),
                (0,
                gt.og)(d, "jw-floating-dismissible", this.dismissible),
                i.enable(t, e),
                r && (L(n, r),
                i.resize(n, r),
                j.renderCues(!0)),
                i.on("userActive userInactive", (function() {
                    var t = e.get("state");
                    t !== o.r0 && t !== o.Kb || j.renderCues(!0)
                }
                )),
                i.on("dismissFloating", (function() {
                    a.stopFloating(!0),
                    e.get("autoPause") && !e.get("autoPause").pauseAds && e.get("instream") || t.pause({
                        reason: "interaction"
                    })
                }
                )),
                i.on("all", c.trigger, c),
                e.get("instream") && E.setupInstream()
            }
            ,
            this.removeControls = function() {
                E && (E.disable(e),
                E = null),
                (0,
                gt.cn)(d, "jw-flag-controls-hidden"),
                (0,
                gt.IV)(d, "jw-floating-dismissible")
            }
            ;
            var D = function(e, i) {
                if (i && E && e.get("autostartMuted") && E.unmuteAutoplay(t, e),
                C.supportsDomFullscreen())
                    i ? C.requestFullscreen() : C.exitFullscreen(),
                    $(d, i);
                else if (Yt)
                    $(d, i);
                else {
                    var n = e.get("instream")
                      , o = n ? n.provider : null
                      , a = e.getVideo() || o;
                    a && a.setFullscreen && a.setFullscreen(i)
                }
            };
            function W(t, i) {
                if ((t && !isNaN(1 * t) || (t = e.get("containerWidth"))) && (i && !isNaN(1 * i) || (i = e.get("containerHeight")))) {
                    w && w.resize(t, i, e.get("stretching"));
                    var n = e.getVideo();
                    n && n.resize(t, i, e.get("stretching"))
                }
            }
            function Q(t) {
                k.OS.mobile && ((0,
                gt.og)(d, "jw-flag-ios-fullscreen", t.jwstate),
                Y(t))
            }
            function Y(t) {
                var i = e.get("fullscreen")
                  , n = void 0 !== t.jwstate ? t.jwstate : function() {
                    if (C.supportsDomFullscreen()) {
                        var t = C.fullscreenElement();
                        return !(!t || t !== d)
                    }
                    return e.getVideo().getFullScreen()
                }();
                i !== n && e.set("fullscreen", n),
                z(),
                clearTimeout(m),
                m = setTimeout(W, 200)
            }
            function $(t, e) {
                (0,
                gt.og)(t, "jw-flag-fullscreen", e),
                (0,
                mt.oB)(document.body, {
                    overflowY: e ? "hidden" : ""
                }),
                e && E && E.userActive(),
                W(),
                z()
            }
            function K(t, e) {
                var i = "LIVE" === e;
                (0,
                gt.og)(d, "jw-flag-live", i)
            }
            function J(t, e) {
                var i = "audio" === e;
                (0,
                gt.og)(d, "jw-flag-media-audio", i),
                i && t.get("pip") && t.set("pip", !1);
                var n = i ? h : h.nextSibling;
                w.el.parentNode.insertBefore(w.el, n)
            }
            function X(t, e) {
                if (e) {
                    var i = (0,
                    lt.Z)(t, e);
                    lt.Z.cloneIcon && i.querySelector(".jw-icon").appendChild(lt.Z.cloneIcon("error")),
                    g.hide(),
                    d.appendChild(i.firstChild),
                    (0,
                    gt.og)(d, "jw-flag-audio-player", !!t.get("audioMode"))
                } else
                    g.playlistItem(t, t.get("playlistItem"))
            }
            function G(t, e, i) {
                if (c.isSetup) {
                    if (i === o.Vy) {
                        var n = d.querySelector(".jw-error-msg");
                        n && n.parentNode.removeChild(n)
                    }
                    (0,
                    pt.W)(b),
                    e === o.r0 ? tt(e) : b = (0,
                    pt.U)((function() {
                        return tt(e)
                    }
                    ))
                }
            }
            function tt(t) {
                switch (e.get("controls") && t !== o._5 && (0,
                gt.pv)(d, "jw-flag-controls-hidden") && ((0,
                gt.IV)(d, "jw-flag-controls-hidden"),
                (0,
                gt.og)(d, "jw-floating-dismissible", c.dismissible)),
                (0,
                gt.L_)(d, /jw-state-\S+/, "jw-state-" + t),
                t) {
                case o.Vy:
                    c.stopFloating();
                case o.bc:
                case o.xQ:
                    j && j.hide(),
                    w && w.enableZoomThumbnail();
                    break;
                default:
                    j && (j.show(),
                    t === o._5 && E && !E.showing && j.renderCues(!0)),
                    w && w.removeZoomThumbnail()
                }
            }
            this.resize = function(t, i) {
                var n = Ft(e, t, i, !0);
                void 0 !== t && void 0 !== i && (e.set("width", t),
                e.set("height", i)),
                (0,
                mt.oB)(d, n),
                _.resize(),
                I()
            }
            ,
            this.resizeMedia = W,
            this.setPosterImage = function(t, e) {
                e.setImage(t && t.image)
            }
            ;
            var et = function(t, e) {
                l.setPosterImage(e, w),
                Qt && function(t, e) {
                    var i = t.get("mediaElement");
                    if (i) {
                        var n = (0,
                        gt.bJ)(e.title || "");
                        i.setAttribute("title", n.textContent)
                    }
                }(t, e)
            }
              , it = function() {
                var t = E && E.settingsMenu;
                return !(!t || !t.visible)
            }
              , nt = function() {
                (0,
                gt.cn)(d, "jw-flag-ads"),
                E && E.setupInstream(),
                _.disableFloatingUI()
            }
              , ot = function() {
                if (x) {
                    E && E.destroyInstream(e),
                    _.getFloatingPlayer() !== d || (0,
                    jt.cL)() || _.enableFloatingUI(),
                    c.setAltText(""),
                    (0,
                    gt.IV)(d, ["jw-flag-ads", "jw-flag-ads-hide-controls"]),
                    e.set("hideAdsControls", !1);
                    var t = e.getVideo();
                    t && t.setContainer(h),
                    x.revertAlternateClickHandlers()
                }
            }
              , at = function(t, e) {
                e ? c.requestPip() : document.pictureInPictureElement && document.exitPictureInPicture()
            };
            function rt() {
                if (P) {
                    var t = P
                      , e = t.video
                      , i = t.enter
                      , n = t.leave;
                    e.removeEventListener("loadedmetadata", i),
                    e.removeEventListener("leavepictureinpicture", n)
                }
            }
            function st() {
                return e.get("isFloating") ? p : d
            }
            this.requestPip = function(t) {
                var i = t || e.get("mediaElement");
                if (i.requestPictureInPicture) {
                    rt();
                    var n = function t() {
                        rt(),
                        i.requestPictureInPicture().then((function() {
                            A || (A = !0,
                            c.trigger("pipEnter", {
                                video: i
                            })),
                            i.addEventListener("leavepictureinpicture", o)
                        }
                        )),
                        i.removeEventListener("loadedmetadata", t)
                    }
                      , o = function t() {
                        i.removeEventListener("leavepictureinpicture", t),
                        A && (A = !1,
                        c.trigger("pipLeave", {
                            video: i
                        }),
                        e.set("pip", !1),
                        document.pictureInPictureElement && document.exitPictureInPicture())
                    };
                    i.readyState ? n() : i.addEventListener("loadedmetadata", n),
                    P = {
                        video: i,
                        enter: n,
                        leave: o
                    }
                }
            }
            ,
            this.setAltText = function(t) {
                e.set("altText", t)
            }
            ,
            this.clickHandler = function() {
                return x
            }
            ,
            this.getContainer = this.element = function() {
                return d
            }
            ,
            this.getWrapper = function() {
                return p
            }
            ,
            this.controlsContainer = function() {
                return E ? E.element() : null
            }
            ,
            this.getSafeRegion = function(t) {
                void 0 === t && (t = !0);
                var e = {
                    x: 0,
                    y: 0,
                    width: n || 0,
                    height: r || 0
                };
                return E && t && (e.height -= E.controlbarHeight()),
                e
            }
            ,
            this.setCaptions = function(t) {
                j.clear(),
                j.setup(e.get("id"), t),
                j.resize()
            }
            ,
            this.setIntersection = function(t) {
                var i = Math.round(100 * t.intersectionRatio) / 100;
                e.set("intersectionRatio", i),
                this.checkFloatIntersection(i)
            }
            ,
            this.checkFloatIntersection = function(t) {
                _.checkFloatIntersection(t)
            }
            ,
            this.stopFloating = function(t, e) {
                _.stopFloating(t, e)
            }
            ,
            this.destroy = function() {
                e.destroy(),
                w.destroy(),
                ct.Z.unobserve(d),
                ct.Z.remove(this),
                this.isSetup = !1,
                this.off(),
                (0,
                pt.W)(v),
                clearTimeout(m),
                M && (M.destroy(),
                M = null),
                C && (C.destroy(),
                C = null),
                E && E.disable(e),
                x && (x.destroy(),
                d.removeEventListener("mousemove", F),
                d.removeEventListener("mouseout", Z),
                d.removeEventListener("mouseover", H),
                x = null),
                j.destroy(),
                i && (i.destroy(),
                i = null),
                (0,
                mt.oI)(e.get("id")),
                this.resizeListener && (this.resizeListener.destroy(),
                delete this.resizeListener),
                _.destroy()
            }
        }
          , Kt = !1
          , Jt = window.$sf
          , Xt = function(t, e) {
            this.playerElement = t,
            this.wrapperElement = e
        };
        (0,
        a.l7)(Xt.prototype, {
            setup: function(t) {
                var e = (0,
                gt.az)(function(t) {
                    return '<span class="jw-text jw-reset">' + t + "</span>"
                }(t));
                this.wrapperElement.appendChild(e),
                (0,
                gt.cn)(this.playerElement, "jw-flag-top")
            }
        });
        var Gt, te = Xt, ee = i(3236), ie = i.n(ee), ne = i(4739), oe = i(2977), ae = function(t, e) {
            var n = "free" === e.get("edition");
            n && !Gt && (i(678),
            Gt = !0);
            var a = new $t(t,e)
              , r = a.setup;
            if (a.setPosterImage = function(i, n) {
                var o = (0,
                oe.Cz)(i.images)
                  , r = i && i.image
                  , s = a.model.get("containerWidth");
                s && (r = (0,
                oe.Bf)(i, (0,
                oe.IJ)(s))),
                o ? (k.OS.mobile || o.reverse(),
                i.videoThumbnail = o[0].src,
                n.on("videoThumbnailFirstFrame", (function(e) {
                    t.trigger("videoThumbFirstFrame", e)
                }
                )),
                n.setImage(r, !0, i, e)) : n.setImage(r)
            }
            ,
            a.setup = function() {
                var t = this;
                r.call(this),
                e.get("displayHeading") && new te(a.getContainer(),a.getContainer().querySelector(".jw-top")).setup(e.get("localization").advertising.displayHeading),
                e.change("castAvailable", (function(e, i) {
                    var n = e.get("cast");
                    Object(n) === n && (0,
                    gt.og)(t.getContainer(), "jw-flag-cast-available", i)
                }
                ), this),
                e.change("castActive", (function(e, i) {
                    var n = e.get("airplayActive");
                    (0,
                    gt.og)(t.getContainer(), "jw-flag-casting", i || !1),
                    (0,
                    gt.og)(t.getContainer(), "jw-flag-airplay-casting", n || !1)
                }
                ), this)
            }
            ,
            n) {
                var s = a.addControls;
                a.addControls = function(t) {
                    s.call(this, t);
                    var e = document.querySelector(".jw-logo-button");
                    if (e) {
                        var i = (0,
                        ne.w)(ie());
                        e.appendChild(i)
                    }
                }
            }
            var l = e.get("advertising");
            return l && l.outstream && function(t, e) {
                Kt || (Kt = !0,
                i(8206));
                var n = e.model
                  , a = e.getSafeRegion;
                e.getSafeRegion = function(t) {
                    var e = a.call(this, t);
                    return e.height = this.api.getHeight(),
                    e
                }
                ,
                n.on("change:mediaState", (function(i, r) {
                    if (r === o.ik || r === o.r0) {
                        if (n.off("change:mediaState", null, e),
                        Jt && Jt.ext && Jt.ext.supports()["exp-push"]) {
                            var s = Jt.ext.geom()
                              , l = s.exp
                              , c = s.self
                              , u = Math.min(t.getHeight() - c.h, l.yx ? 1 / 0 : l.b)
                              , d = Math.min(t.getWidth() - c.w, l.xs ? 1 / 0 : l.r);
                            (u > 0 || d > 0) && Jt.ext.expand({
                                b: Math.max(0, u),
                                r: Math.max(0, d),
                                push: !0
                            })
                        }
                        (0,
                        gt.IV)(e.getContainer(), "jw-flag-outstream-pending"),
                        e.getSafeRegion = a,
                        e.responsiveListener()
                    }
                }
                ), e);
                var r = e.setup;
                e.setup = function() {
                    r.call(this),
                    (0,
                    gt.cn)(this.getContainer(), "jw-flag-outstream jw-flag-outstream-pending")
                }
                ;
                var s = n.get("advertising");
                s.dismissible && (e.dismissible = !0,
                e.on("dismissFloating", (function() {
                    t.remove()
                }
                ))),
                Jt && Jt.ext && t.once(o.Rc, (function() {
                    Jt.ext.register(t.getWidth(), t.getHeight())
                }
                )),
                t.once(o.V$, (function() {
                    e.stopFloating(!0),
                    "close" === s.endstate && ((0,
                    gt.cn)(e.getContainer(), "jw-flag-outstream-close"),
                    Jt && Jt.ext && Jt.ext.collapse())
                }
                ))
            }(t, a),
            a
        };
        function re(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function se(t, e, i) {
            return e && re(t.prototype, e),
            i && re(t, i),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        function le(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function ce(t, e) {
            t.prototype = Object.create(e.prototype),
            t.prototype.constructor = t,
            ue(t, e)
        }
        function ue(t, e) {
            return ue = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            ue(t, e)
        }
        var de = /^change:(.+)$/;
        function pe(t, e, i) {
            Object.keys(e).forEach((function(n) {
                n in e && e[n] !== i[n] && t.trigger("change:" + n, t, e[n], i[n])
            }
            ))
        }
        function he(t, e) {
            t && t.off(null, null, e)
        }
        var we, fe, ge = function(t) {
            function e(e, i) {
                var n;
                return (n = t.call(this) || this)._model = e,
                n._mediaModel = null,
                (0,
                a.l7)(e.attributes, {
                    altText: "",
                    fullscreen: !1,
                    logoWidth: 0,
                    scrubbing: !1
                }),
                e.on("all", (function(t, o, a, r) {
                    o === e && (o = le(n)),
                    i && !i(t, o, a, r) || n.trigger(t, o, a, r)
                }
                ), le(n)),
                e.on("change:mediaModel", (function(t, e) {
                    n.mediaModel = e
                }
                ), le(n)),
                n
            }
            ce(e, t);
            var i = e.prototype;
            return i.get = function(t) {
                var e = this._mediaModel;
                return e && t in e.attributes ? e.get(t) : this._model.get(t)
            }
            ,
            i.set = function(t, e) {
                return this._model.set(t, e)
            }
            ,
            i.getVideo = function() {
                return this._model.getVideo()
            }
            ,
            i.destroy = function() {
                he(this._model, this),
                he(this._mediaModel, this),
                this.off()
            }
            ,
            se(e, [{
                key: "mediaModel",
                set: function(t) {
                    var e = this
                      , i = this._mediaModel;
                    he(i, this),
                    this._mediaModel = t,
                    t.on("all", (function(i, n, o, a) {
                        n === t && (n = e),
                        e.trigger(i, n, o, a)
                    }
                    ), this),
                    i && pe(this, t.attributes, i.attributes)
                }
            }]),
            e
        }(x.Z), je = function(t) {
            function e(e) {
                var i;
                return (i = t.call(this, e, (function(t) {
                    var e = i._instreamModel;
                    if (e) {
                        var n = de.exec(t);
                        if (n && n[1]in e.attributes)
                            return !1
                    }
                    return !0
                }
                )) || this)._instreamModel = null,
                i._playerViewModel = new ge(i._model),
                e.on("change:instream", (function(t, e) {
                    i.instreamModel = e ? e.model : null
                }
                ), le(i)),
                i
            }
            ce(e, t);
            var i = e.prototype;
            return i.get = function(t) {
                var e = this._mediaModel;
                if (e && t in e.attributes)
                    return e.get(t);
                var i = this._instreamModel;
                return i && t in i.attributes ? i.get(t) : this._model.get(t)
            }
            ,
            i.getVideo = function() {
                var e = this._instreamModel;
                return e && e.getVideo() ? e.getVideo() : t.prototype.getVideo.call(this)
            }
            ,
            i.destroy = function() {
                t.prototype.destroy.call(this),
                he(this._instreamModel, this)
            }
            ,
            se(e, [{
                key: "player",
                get: function() {
                    return this._playerViewModel
                }
            }, {
                key: "instreamModel",
                set: function(t) {
                    var e = this
                      , i = this._instreamModel;
                    if (i || t)
                        if (he(i, this),
                        this._model.off("change:mediaModel", null, this),
                        this._instreamModel = t,
                        this.trigger("instreamMode", !!t),
                        t)
                            t.on("all", (function(i, n, o, a) {
                                n === t && (n = e),
                                e.trigger(i, n, o, a)
                            }
                            ), this),
                            t.change("mediaModel", (function(t, i) {
                                e.mediaModel = i
                            }
                            ), this),
                            pe(this, t.attributes, this._model.attributes);
                        else if (i) {
                            this._model.change("mediaModel", (function(t, i) {
                                e.mediaModel = i
                            }
                            ), this);
                            var n = (0,
                            a.l7)({}, this._model.attributes, i.attributes);
                            pe(this, this._model.attributes, n)
                        }
                }
            }]),
            e
        }(ge), me = i(287), ve = (we = window).URL && we.URL.createObjectURL ? we.URL : we.webkitURL || we.mozURL, be = window.Blob;
        function ye(t, e) {
            var i = e.muted;
            if (!fe)
                try {
                    fe = new be([new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101, 101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111, 118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107, 0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0, 0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105, 110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116, 98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0, 0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0, 1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1, 2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0, 0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111, 111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118, 102, 53, 54, 46, 52, 48, 46, 49, 48, 49])],{
                        type: "video/mp4"
                    })
                } catch (t) {
                    return Promise.resolve()
                }
            return k.OS.tizen ? Promise.resolve() : (t.muted = i,
            t.src = ve.createObjectURL(fe),
            t.play() || (0,
            me.Z)(t))
        }
        var ke = "autoplayMuted"
          , xe = "autoplayDisabled"
          , Ce = {};
        var Me = i(3985)
          , Te = i(3759)
          , _e = i(722);
        function Se(t, e) {
            return Se = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Se(t, e)
        }
        var Ee = "tabVisible"
          , Ae = function(t) {
            var e, i;
            function n() {
                return t.apply(this, arguments) || this
            }
            return i = t,
            (e = n).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            Se(e, i),
            n.prototype.getFirstFrame = function() {
                var t = this.between(o.cq, o.FU)
                  , e = this.between(Ee, o.FU);
                return e && t && e > 0 && e < t ? e : t
            }
            ,
            n
        }(_e.Z);
        function Pe(t, e) {
            e.off(o.cq, t._onPlayAttempt),
            e.off(o.Gj, t._triggerFirstFrame),
            e.off(o.R2, t._onTime),
            t.off("change:activeTab", t._onTabVisible),
            t._triggerFirstFrame = t._onTime = null
        }
        var ze = function() {}
          , Ie = function() {};
        (0,
        a.l7)(ze.prototype, {
            destroy: function() {
                var t, e;
                this.off(),
                this.stop(),
                (0,
                s.c)(this, this.originalContainer),
                this._view && this._view.destroy(),
                this._model && (t = this._model,
                e = this._programController,
                t._onTabVisible && Pe(t, e),
                t._qoeItem = t._triggerFirstFrame = t._onTime = t._onPlayAttempt = t._onTabVisible = null,
                this._model.destroy()),
                this._apiQueue && this._apiQueue.destroy(),
                this._captions && this._captions.destroy(),
                this._programController && this._programController.destroy(),
                this.instreamDestroy(!0),
                this._view = this._model = this._apiQueue = this._captions = this._programController = null,
                this.clearSetupVars && this.clearSetupVars()
            },
            playerSetup: function(t, e, i, n, w, g) {
                var j, b, y, x, C = this, M = this, T = M._model = new A, _ = !1, S = !1, E = null, P = m(Z), z = m(Ie);
                M.originalContainer = M.currentContainer = i,
                M._events = n,
                M.trigger = function(t, e) {
                    var i = function(t, e, i) {
                        var n = i;
                        switch (e) {
                        case "time":
                        case "beforePlay":
                        case "pause":
                        case "play":
                        case "ready":
                            var o = t.get("viewable");
                            void 0 !== o && (n = (0,
                            a.l7)({}, i, {
                                viewable: o
                            }))
                        }
                        return n
                    }(T, t, e);
                    return f.ZP.trigger.call(this, t, i)
                }
                ;
                var I = new u.Z(M,["trigger"],(function() {
                    return !0
                }
                ))
                  , L = function(t, e) {
                    M.trigger(t, e)
                };
                T.setup(t);
                var B = T.get("backgroundLoading")
                  , O = new je(T);
                (j = this._view = new ae(e,O)).on("all", (function(t, e) {
                    e && e.doNotForward || L(t, e)
                }
                ), M),
                O.on("viewSetup", (function(t) {
                    (0,
                    s.c)(C, t)
                }
                ));
                var V, R = this._programController = new Y(T,g,e._publicApi);
                ft(),
                R.on("all", L, M).on("subtitlesTracks", (function(t) {
                    if (b) {
                        b.setSubtitlesTracks(t.tracks);
                        var e = b.getCurrentIndex();
                        e > 0 && pt(e, t.tracks)
                    }
                }
                ), M).on(o.Ms, (function() {
                    Promise.resolve().then(dt)
                }
                ), M).on(o.Ew, M.triggerError, M),
                V = R,
                T.change("mediaModel", (function(t, e, i) {
                    t._qoeItem && i && t._qoeItem.end(i.get("mediaState")),
                    t._qoeItem = new Ae,
                    t._qoeItem.tick(o.gO),
                    t._qoeItem.start(e.get("mediaState")),
                    function(t, e) {
                        t._onTabVisible && Pe(t, e);
                        var i, n, a = !1;
                        t._triggerFirstFrame = function(i) {
                            if (!a && e.mediaController) {
                                var n = e.mediaController.mediaModel
                                  , r = n.attributes.mediaState;
                                if (r === o.r0 || r === o._5 || i.type === o.Gj) {
                                    a = !0;
                                    var s = t._qoeItem;
                                    s.tick(o.FU);
                                    var l = s.getFirstFrame();
                                    e.trigger(o.FU, {
                                        loadTime: l
                                    }),
                                    n.off("change:" + o.ug, null, n),
                                    n.change(o.ug, (function(t, i) {
                                        i && e.trigger(o.ug, i)
                                    }
                                    ), n),
                                    Pe(t, e)
                                }
                            }
                        }
                        ,
                        t._onTime = (i = t._triggerFirstFrame,
                        n = 0,
                        function(t) {
                            var e = t.position;
                            e > n && i(t),
                            n = e
                        }
                        ),
                        t._onPlayAttempt = function() {
                            this._qoeItem.tick(o.cq)
                        }
                        ,
                        t._onTabVisible = function(t, e) {
                            e ? t._qoeItem.tick(Ee) : t._qoeItem.tick("tabHidden")
                        }
                        ,
                        t.on("change:activeTab", t._onTabVisible),
                        e.on(o.cq, t._onPlayAttempt, t),
                        e.once(o.Gj, t._triggerFirstFrame),
                        e.on(o.R2, t._onTime)
                    }(t, V),
                    e.on("change:mediaState", (function(e, i, n) {
                        i !== n && (t._qoeItem.end(n),
                        t._qoeItem.start(i))
                    }
                    ))
                }
                )),
                M.clearSetupVars = function() {
                    I && I.destroy(),
                    M = R = T = j = P = z = gt = I = null
                }
                ,
                T.on(o.pn, M.triggerError, M),
                T.on("change:state", (function(t, e, i) {
                    $() || K.call(C, t, e, i)
                }
                ), this),
                T.on("change:castState", (function(t, e) {
                    M.trigger(o.pi, e)
                }
                )),
                T.on("change:fullscreen", (function(t, e) {
                    M.trigger(o.UW, {
                        fullscreen: e
                    }),
                    e && t.set("playOnViewable", !1)
                }
                )),
                T.on("change:volume", (function(t, e) {
                    M.trigger(o.yH, {
                        volume: e
                    })
                }
                )),
                T.on("change:mute", (function(t) {
                    M.trigger(o.gy, {
                        mute: t.getMute()
                    })
                }
                )),
                T.on("change:playbackRate", (function(t, e) {
                    M.trigger(o.QF, {
                        playbackRate: e,
                        position: t.get("position")
                    })
                }
                ));
                var F = function t(e, i) {
                    "clickthrough" === i || "interaction" === i || "external" === i ? (T.set("playOnViewable", !1),
                    T.off("change:playReason change:pauseReason", t)) : !i && T.get("autostart") && "playing" === $() && T.set("playReason", "autostart")
                };
                function H(t, e) {
                    (0,
                    a.o8)(e) || T.set("viewable", Math.round(e))
                }
                T.on("change:playReason change:pauseReason", F),
                M.on(o.WE, (function(t) {
                    return F(0, t.playReason)
                }
                )),
                M.on(o.Ax, (function(t) {
                    return F(0, t.pauseReason)
                }
                )),
                T.on("change:scrubbing", (function(t, e) {
                    e ? (E = T.get("state") !== o._5,
                    at({
                        reason: "interaction"
                    })) : E && X({
                        reason: "interaction"
                    })
                }
                )),
                T.on("change:captionsList", (function(t, e) {
                    M.trigger(o.SL, {
                        tracks: e,
                        track: T.get("captionsIndex") || 0
                    })
                }
                )),
                T.on("change:mediaModel", (function(t, e) {
                    var i = this;
                    t.set("errorEvent", void 0),
                    e.change("mediaState", (function(e, i) {
                        var n;
                        t.get("errorEvent") || t.set(o.uc, (n = i) === o.ik || n === o.nQ ? o.Kb : n)
                    }
                    ), this),
                    e.change("duration", (function(e, i) {
                        if (0 !== i) {
                            var n = t.get("minDvrWindow")
                              , o = (0,
                            Me.v)(i, n);
                            t.setStreamType(o)
                        }
                    }
                    ), this);
                    var n = "autoplay" === (t.get("related") || {}).oncomplete
                      , a = t.get("item") + 1
                      , r = t.get("playlist")[a];
                    (r || n) && e.on("change:position", (function t(o, s) {
                        if (n && !r && (a = -1,
                        r = T.get("nextUp")),
                        r && !r.daiSetting) {
                            var l = e.get("duration");
                            s && l > 0 && s >= l - h.l_ && (e.off("change:position", t, i),
                            B ? R.backgroundLoad(r, a) : R.getAsyncItem(a).run())
                        }
                    }
                    ), this)
                }
                )),
                (b = this._captions = new st(T)).on("all", L, M),
                this.playerReady = function() {
                    j.once(o.sF, (function() {
                        try {
                            T.change("visibility", H),
                            I.off(),
                            M.trigger(o.Rc, {
                                setupTime: 0
                            }),
                            T.change("playlist", (function(t, e) {
                                if (e.length) {
                                    var i = {
                                        playlist: e
                                    }
                                      , n = T.get("feedData");
                                    n && (i.feedData = (0,
                                    a.l7)({}, n)),
                                    M.trigger(o.Ow, i)
                                }
                            }
                            )),
                            T.change("playlistItem", (function(t, e) {
                                if (e) {
                                    var i = e.title
                                      , n = e.image;
                                    if ("mediaSession"in navigator && window.MediaMetadata && (i || n))
                                        try {
                                            navigator.mediaSession.metadata = new window.MediaMetadata({
                                                title: i,
                                                artist: window.location.hostname,
                                                artwork: [{
                                                    src: n || ""
                                                }]
                                            })
                                        } catch (t) {}
                                    t.set("cues", []),
                                    M.trigger(o.gO, {
                                        index: T.get("item"),
                                        item: e
                                    })
                                }
                            }
                            )),
                            I.flush(),
                            I.destroy(),
                            I = null,
                            T.change("viewable", N),
                            T.change("viewable", W),
                            T.get("autoPause").viewability ? T.change("viewable", Q) : T.once("change:autostartFailed change:mute", (function(t) {
                                t.off("change:viewable", W)
                            }
                            )),
                            Z(),
                            T.on("change:itemReady", (function(t, e) {
                                e && (gt.flush(),
                                T.get("pip") && !M._instreamAdapter && j.requestPip())
                            }
                            ))
                        } catch (t) {
                            M.triggerError((0,
                            v.Mm)(v.ud, v.YQ, t))
                        }
                    }
                    )),
                    j.init()
                }
                ;
                var Z = function() {
                    if (gt) {
                        var t = function(t) {
                            for (var e = (t || "").replace(/^\?/, "").split("&"), i = -1, n = 0; n < e.length; n++)
                                if (/^jw_start=/.test(e[n])) {
                                    i = n;
                                    break
                                }
                            if (-1 === i)
                                return -1;
                            var o = parseFloat(e[i].replace("jw_start=", ""));
                            return "number" != typeof o || isNaN(o) || o < 0 ? -1 : o
                        }(window.location.search);
                        T.get("generateSEOMetadata") && t >= 0 ? (C._model.setAutoStart("viewable"),
                        lt.call(C, t)) : !0 !== T.get("autostart") || T.get("playOnViewable") || et("autostart"),
                        gt.flush()
                    }
                };
                function N(t, e) {
                    M.trigger("viewable", {
                        viewable: e
                    }),
                    q()
                }
                function q() {
                    if ((r.Z[0] === e || 1 === T.get("viewable")) && "idle" === T.get("state") && !1 === T.get("autostart"))
                        if (!g.primed() && k.OS.android) {
                            var t = g.getTestElement()
                              , i = M.getMute();
                            Promise.resolve().then((function() {
                                return ye(t, {
                                    muted: i
                                })
                            }
                            )).then((function() {
                                "idle" === T.get("state") && R.preloadVideo()
                            }
                            )).catch(Ie)
                        } else
                            R.preloadVideo()
                }
                function U(t) {
                    M._instreamAdapter.noResume = !t,
                    t || ot({
                        reason: "viewable"
                    })
                }
                function D(t) {
                    t || (M.pause({
                        reason: "viewable"
                    }),
                    T.set("playOnViewable", !t))
                }
                function W(t, e) {
                    var i = $();
                    if (t.get("playOnViewable")) {
                        if (e) {
                            var n = "viewable"
                              , a = t.get("autoPause").pauseAds
                              , r = t.get("pauseReason");
                            J() === o.bc ? et(n) : i && !a || "interaction" === r || X({
                                reason: n
                            })
                        } else
                            k.OS.mobile && !i && (M.pause({
                                reason: "autostart"
                            }),
                            T.set("playOnViewable", !0));
                        k.OS.mobile && i && U(e)
                    }
                }
                function Q(t, e) {
                    var i = t.get("state")
                      , n = $()
                      , a = t.get("playReason");
                    n ? t.get("autoPause").pauseAds ? D(e) : U(e) : i === o.r0 || i === o.Kb ? D(e) : i === o.bc && "playlist" === a && t.once("change:state", (function() {
                        D(e)
                    }
                    ))
                }
                function $() {
                    var t = M._instreamAdapter;
                    return !!t && t.getState()
                }
                function J() {
                    return $() || T.get("state")
                }
                function X(t) {
                    if (P.cancel(),
                    S = !1,
                    T.get("state") === o.Vy)
                        return Promise.resolve();
                    var i = tt(t);
                    T.set("playReason", i);
                    var n = $();
                    return n ? (T.get("autostart") && "paused" === n && T.set("playReason", "autostart"),
                    M._instreamAdapter.off("state", rt, M),
                    e.pauseAd(!1, t),
                    Promise.resolve()) : T.get("state") === o.xQ ? (it(!0),
                    M.setItemIndex(0).then((function() {
                        return G(t, i)
                    }
                    ))) : G(t, i)
                }
                function G(t, e) {
                    if (!_ && (_ = !0,
                    M.trigger(o.$j, {
                        playReason: e,
                        startTime: t && t.startTime ? t.startTime : T.get("playlistItem").starttime
                    }),
                    _ = !1,
                    (0,
                    Te.C)() && !g.primed() && g.prime(),
                    "playlist" === e && T.get("autoPause").viewability && Q(T, T.get("viewable")),
                    x)) {
                        if ((0,
                        Te.C)() && !B) {
                            var i = T.get("mediaElement");
                            M._instreamAdapter && (i.preload = "none"),
                            i.load()
                        }
                        return x = !1,
                        y = null,
                        Promise.resolve()
                    }
                    return R.playVideo(e).then(g.played)
                }
                function tt(t) {
                    return t && t.reason ? t.reason : "unknown"
                }
                function et(t) {
                    if (J() === o.bc) {
                        P = m(Z);
                        var e = T.get("advertising");
                        (function(t, e) {
                            var i = e.cancelable
                              , n = e.muted
                              , o = void 0 !== n && n
                              , a = e.allowMuted
                              , r = void 0 !== a && a
                              , s = e.timeout
                              , l = void 0 === s ? 1e4 : s
                              , c = t.getTestElement()
                              , u = o ? "muted" : "" + r;
                            Ce[u] || (Ce[u] = ye(c, {
                                muted: o
                            }).catch((function(t) {
                                if (!i.cancelled() && !1 === o && r)
                                    return ye(c, {
                                        muted: o = !0
                                    });
                                throw t
                            }
                            )).then((function() {
                                return o ? (Ce[u] = null,
                                ke) : "autoplayEnabled"
                            }
                            )).catch((function(t) {
                                throw clearTimeout(d),
                                Ce[u] = null,
                                t.reason = xe,
                                t
                            }
                            )));
                            var d, p = Ce[u].then((function(t) {
                                if (clearTimeout(d),
                                i.cancelled()) {
                                    var e = new Error("Autoplay test was cancelled");
                                    throw e.reason = "cancelled",
                                    e
                                }
                                return t
                            }
                            )), h = new Promise((function(t, e) {
                                d = setTimeout((function() {
                                    Ce[u] = null;
                                    var t = new Error("Autoplay test timed out");
                                    t.reason = "timeout",
                                    e(t)
                                }
                                ), l)
                            }
                            ));
                            return Promise.race([p, h])
                        }
                        )(g, {
                            cancelable: P,
                            muted: M.getMute(),
                            allowMuted: !e || e.autoplayadsmuted
                        }).then((function(e) {
                            return T.set("canAutoplay", e),
                            e !== ke || M.getMute() || (T.set("autostartMuted", !0),
                            ft(),
                            T.once("change:autostartMuted", (function(t) {
                                t.off("change:viewable", W),
                                M.trigger(o.gy, {
                                    mute: T.getMute()
                                })
                            }
                            ))),
                            b && M.getMute() && T.get("enableDefaultCaptions") && b.selectDefaultIndex(1),
                            X({
                                reason: t
                            }).catch((function() {
                                M._instreamAdapter || T.set("autostartFailed", !0),
                                y = null
                            }
                            ))
                        }
                        )).catch((function(t) {
                            if (T.set("canAutoplay", xe),
                            T.set("autostart", !1),
                            !P.cancelled()) {
                                var e = (0,
                                v.nm)(t);
                                M.trigger(o.wh, {
                                    reason: t.reason,
                                    code: e,
                                    error: t
                                })
                            }
                        }
                        ))
                    }
                }
                function it(t) {
                    if (P.cancel(),
                    gt.empty(),
                    $()) {
                        var e = M._instreamAdapter;
                        return e && (e.noResume = !0),
                        void (y = function() {
                            return R.stopVideo()
                        }
                        )
                    }
                    y = null,
                    !t && (S = !0),
                    _ && (x = !0),
                    T.set("errorEvent", void 0),
                    R.stopVideo()
                }
                function ot(t) {
                    var e = tt(t);
                    T.set("pauseReason", e),
                    T.set("playOnViewable", "viewable" === e)
                }
                function at(t) {
                    y = null,
                    P.cancel();
                    var i = $();
                    if (i && i !== o._5)
                        return ot(t),
                        void (i === o.Kb ? (M._instreamAdapter.once("state", rt, M),
                        M._instreamAdapter.noResume = !0) : e.pauseAd(!0, t));
                    switch (T.get("state")) {
                    case o.Vy:
                        return;
                    case o.r0:
                    case o.Kb:
                        ot(t),
                        R.pause();
                        break;
                    default:
                        _ && (x = !0)
                    }
                }
                function rt() {
                    var t = T.get("pauseReason");
                    e.pauseAd(!0, {
                        reason: t
                    })
                }
                function lt(t, e) {
                    var i = T.get("state");
                    if (i !== o.Vy) {
                        e && i === o.r0 && T.get("playReason") !== e.reason && T.set("playReason", e.reason),
                        R.position = t;
                        var n = i === o.bc;
                        T.get("scrubbing") || !n && i !== o.xQ || (n && ((e = e || {}).startTime = t),
                        this.play(e))
                    }
                }
                function ct(t, e) {
                    M.instreamDestroy(),
                    it(!0),
                    M.setItemIndex(t),
                    M.play(e)
                }
                function ut(t) {
                    ct(T.get("item") + 1, t)
                }
                function dt() {
                    M.completeCancelled() || (y = M.completeHandler,
                    M.shouldAutoAdvance() ? M.nextItem() : T.get("repeat") ? ut({
                        reason: "repeat"
                    }) : (k.OS.iOS && wt(!1),
                    T.set("playOnViewable", !1),
                    T.set("state", o.xQ),
                    M.trigger(o.V$, {})))
                }
                function pt(t, e) {
                    t = parseInt(t, 10) || 0,
                    T.persistVideoSubtitleTrack(t, e),
                    R.subtitles = t,
                    M.trigger(o.Z_, {
                        tracks: ht(),
                        track: t
                    })
                }
                function ht() {
                    return b ? b.getCaptionsList() : []
                }
                function wt(t) {
                    T.get("pip") && T.set("pip", !1),
                    (0,
                    a.jn)(t) || (t = !T.get("fullscreen")),
                    !T.get("allowFullscreen") && t || (T.set("fullscreen", t),
                    M._instreamAdapter && M._instreamAdapter._adModel && M._instreamAdapter._adModel.set("fullscreen", t))
                }
                function ft() {
                    R.setMute(T.getMute()),
                    R.setVolume(T.get("volume"))
                }
                this.preload = q,
                this.load = function(t, e) {
                    var i, n = M._instreamAdapter;
                    switch (n && (n.noResume = !0),
                    M.trigger("destroyPlugin", {}),
                    it(!0),
                    R.clearItemPromises(),
                    P.cancel(),
                    P = m(Z),
                    z.cancel(),
                    (0,
                    Te.C)() && g.prime(),
                    typeof t) {
                    case "string":
                        T.attributes.item = 0,
                        T.attributes.itemReady = !1,
                        z = m((function(t) {
                            if (t)
                                return M.updatePlaylist((0,
                                p.ZP)(t.playlist), t)
                        }
                        )),
                        i = function(t) {
                            var e = this;
                            return new Promise((function(i, n) {
                                var a = new d.Z;
                                a.on(o.Ow, (function(t) {
                                    i(t)
                                }
                                )),
                                a.on(o.pn, n, e),
                                a.load(t)
                            }
                            ))
                        }(t).then((function(t) {
                            return z.async(t)
                        }
                        ));
                        break;
                    case "object":
                        T.attributes.item = 0,
                        i = M.updatePlaylist((0,
                        p.ZP)(t), e || {});
                        break;
                    case "number":
                        i = M.setItemIndex(t);
                        break;
                    default:
                        return
                    }
                    i.catch((function(t) {
                        M.triggerError((0,
                        v.l9)(t, v.DD))
                    }
                    )),
                    i.then((function() {
                        return P.async()
                    }
                    )).catch(Ie)
                }
                ,
                this.play = function(t) {
                    return X(t).catch(Ie)
                }
                ,
                this.pause = at,
                this.seek = lt,
                this.stop = it,
                this.playlistItem = ct,
                this.playlistNext = ut,
                this.playlistPrev = function(t) {
                    ct(T.get("item") - 1, t)
                }
                ,
                this.setCurrentCaptions = pt,
                this.setCurrentQuality = function(t) {
                    R.quality = t
                }
                ,
                this.setFullscreen = wt,
                this.setAllowFullscreen = function(t) {
                    T.set("allowFullscreen", t),
                    !t && T.get("fullscreen") && M.setFullscreen(!1)
                }
                ,
                this.setPip = function(t) {
                    T.get("fullscreen") && T.set("fullscreen", !1),
                    (0,
                    a.jn)(t) || (t = !T.get("pip")),
                    T.set("pip", t)
                }
                ,
                this.getCurrentQuality = function() {
                    return R.quality
                }
                ,
                this.getQualityLevels = function() {
                    return R.qualities
                }
                ,
                this.setCurrentAudioTrack = function(t) {
                    R.audioTrack = t
                }
                ,
                this.getCurrentAudioTrack = function() {
                    return R.audioTrack
                }
                ,
                this.getAudioTracks = function() {
                    return R.audioTracks
                }
                ,
                this.getCurrentCaptions = function() {
                    return b ? b.getCurrentIndex() : -1
                }
                ,
                this.getCaptionsList = ht,
                this.getVisualQuality = function() {
                    var t = this._model.get("mediaModel");
                    return t ? t.get(o.ug) : null
                }
                ,
                this.getConfig = function() {
                    return this._model ? this._model.getConfiguration() : void 0
                }
                ,
                this.getState = J,
                this.next = Ie,
                this.completeHandler = dt,
                this.completeCancelled = function() {
                    return (t = T.get("state")) !== o.bc && t !== o.xQ && t !== o.Vy || !!S && (S = !1,
                    !0);
                    var t
                }
                ,
                this.shouldAutoAdvance = function() {
                    return T.get("item") !== T.get("playlist").length - 1
                }
                ,
                this.nextItem = function() {
                    ut({
                        reason: "playlist"
                    })
                }
                ,
                this.setConfig = function(t) {
                    !function(t, e) {
                        var i = t._model
                          , n = i.attributes;
                        if (e.height && (e.height = (0,
                        l.a)(e.height),
                        e.width = e.width || n.width),
                        e.width && (e.width = (0,
                        l.a)(e.width),
                        e.aspectratio ? (n.width = e.width,
                        delete e.width) : e.height = n.height),
                        e.width && e.height && !e.aspectratio && t._view.resize(e.width, e.height),
                        e.floating) {
                            var o = i.get("floating") || {}
                              , r = (0,
                            a.l7)({}, o, e.floating);
                            -1 === c.indexOf(r.mode) ? delete e.floating : e.floating = r
                        }
                        Object.keys(e).forEach((function(o) {
                            var a = e[o];
                            if (void 0 !== a)
                                switch (o) {
                                case "aspectratio":
                                    i.set(o, (0,
                                    l.R)(a, n.width));
                                    break;
                                case "autostart":
                                    !function(t, e, i) {
                                        t.setAutoStart(i),
                                        "idle" === t.get("state") && !0 === i && e.play({
                                            reason: "autostart"
                                        })
                                    }(i, t, a);
                                    break;
                                case "mute":
                                    t.setMute(a);
                                    break;
                                case "volume":
                                    t.setVolume(a);
                                    break;
                                case "playbackRateControls":
                                case "playbackRates":
                                case "repeat":
                                case "stretching":
                                case "floating":
                                    i.set(o, a)
                                }
                        }
                        ))
                    }(M, t)
                }
                ,
                this.setItemIndex = function(t) {
                    R.stopVideo();
                    var e = T.get("playlist").length
                      , i = (0,
                    p.bx)(t, e);
                    return R.setActiveItem(i).catch((function(t) {
                        if (t.code === v._M) {
                            if (R.asyncItems.reduce((function(t, e) {
                                return t && e.skipped
                            }
                            ), !0))
                                throw t;
                            var e = C.shouldAutoAdvance;
                            return C.shouldAutoAdvance = function() {
                                return !1
                            }
                            ,
                            dt(),
                            T.attributes.itemReady = !0,
                            void (C.shouldAutoAdvance = e)
                        }
                        t.code >= 151 && t.code <= 162 && (t = (0,
                        v.l9)(t, v.EY)),
                        C.triggerError((0,
                        v.Mm)(v.ul, v.tJ, t))
                    }
                    ))
                }
                ,
                this.detachMedia = function() {
                    if (_ && (x = !0),
                    T.get("autoPause").viewability && Q(T, T.get("viewable")),
                    !B)
                        return R.setAttached(!1);
                    R.backgroundActiveMedia()
                }
                ,
                this.attachMedia = function() {
                    B ? R.restoreBackgroundMedia() : R.setAttached(!0),
                    "function" == typeof y && y()
                }
                ,
                this.routeEvents = function(t) {
                    return R.routeEvents(t)
                }
                ,
                this.forwardEvents = function() {
                    return R.forwardEvents()
                }
                ,
                this.playVideo = function(t) {
                    return R.playVideo(t)
                }
                ,
                this.stopVideo = function() {
                    return R.stopVideo()
                }
                ,
                this.castVideo = function(t, e) {
                    return R.castVideo(t, e)
                }
                ,
                this.stopCast = function() {
                    return R.stopCast()
                }
                ,
                this.backgroundActiveMedia = function() {
                    return R.backgroundActiveMedia()
                }
                ,
                this.restoreBackgroundMedia = function() {
                    return R.restoreBackgroundMedia()
                }
                ,
                this.preloadNextItem = function() {
                    R.background.currentMedia && R.preloadVideo()
                }
                ,
                this.isBeforeComplete = function() {
                    return R.beforeComplete
                }
                ,
                this.setVolume = function(t) {
                    T.setVolume(t),
                    ft()
                }
                ,
                this.setMute = function(t) {
                    T.setMute(t),
                    ft()
                }
                ,
                this.setPlaybackRate = function(t) {
                    T.setPlaybackRate(t)
                }
                ,
                this.getProvider = function() {
                    return T.get("provider")
                }
                ,
                this.getWidth = function() {
                    return T.get("containerWidth")
                }
                ,
                this.getHeight = function() {
                    return T.get("containerHeight")
                }
                ,
                this.getItemQoe = function() {
                    return T._qoeItem
                }
                ,
                this.setItemCallback = function(t) {
                    R.itemCallback = t
                }
                ,
                this.getItemPromise = function(t) {
                    var e = T.get("playlist");
                    if (t < -1 || t > e.length - 1 || isNaN(t))
                        return null;
                    var i = R.getAsyncItem(t);
                    return i ? i.promise : null
                }
                ,
                this.addButton = function(t, e, i, n, o) {
                    var a = T.get("customButtons") || []
                      , r = !1
                      , s = {
                        img: t,
                        tooltip: e,
                        callback: i,
                        id: n,
                        btnClass: o
                    };
                    a = a.reduce((function(t, e) {
                        return e.id === n ? (r = !0,
                        t.push(s)) : t.push(e),
                        t
                    }
                    ), []),
                    r || a.unshift(s),
                    T.set("customButtons", a)
                }
                ,
                this.removeButton = function(t) {
                    var e = T.get("customButtons") || [];
                    e = e.filter((function(e) {
                        return e.id !== t
                    }
                    )),
                    T.set("customButtons", e)
                }
                ,
                this.resize = j.resize,
                this.getSafeRegion = j.getSafeRegion,
                this.setCaptions = j.setCaptions,
                this.checkBeforePlay = function() {
                    return _
                }
                ,
                this.setControls = function(t) {
                    (0,
                    a.jn)(t) || (t = !T.get("controls")),
                    T.set("controls", t),
                    R.controls = t
                }
                ,
                this.addCues = function(t) {
                    this.setCues(T.get("cues").concat(t))
                }
                ,
                this.setCues = function(t) {
                    T.set("cues", t)
                }
                ,
                this.setPlaylistItem = function(t, e) {
                    var i = T.get("playlist")
                      , n = (0,
                    p.bx)(t, i.length)
                      , o = R.getAsyncItem(n);
                    if (o.replace(e)) {
                        var a = i[n];
                        e && e !== a && (R.asyncItems[n] = null,
                        o.reject(new Error("Item replaced"))),
                        n === T.get("item") && "idle" === T.get("state") && this.setItemIndex(n)
                    }
                }
                ,
                this.isBeforePlay = this.checkBeforePlay,
                this.createInstream = function() {
                    return this.instreamDestroy(),
                    this._instreamAdapter = new nt(this,T,j,g),
                    this._instreamAdapter
                }
                ,
                this.instreamDestroy = function(t) {
                    this._instreamAdapter && (t && (this._instreamAdapter.noResume = !0),
                    this._instreamAdapter.destroy(),
                    this._instreamAdapter = null)
                }
                ;
                var gt = this._apiQueue = new u.Z(this,["play", "pause", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setAllowFullscreen", "setFullscreen"],(function() {
                    return !C._model.get("itemReady") || I
                }
                ));
                gt.queue.push.apply(gt.queue, w),
                j && j.setup()
            },
            requestPip: function(t) {
                this._view && this._view.requestPip(t)
            },
            get: function(t) {
                if (t in C.L4) {
                    var e = this._model.get("mediaModel");
                    return e ? e.get(t) : C.L4[t]
                }
                return this._model.get(t)
            },
            getContainer: function() {
                return this.currentContainer || this.originalContainer
            },
            getMute: function() {
                return this._model.getMute()
            },
            triggerError: function(t) {
                var e = this._model;
                t.message = e.get("localization").errors[t.key],
                delete t.key,
                e.set("errorEvent", t),
                e.set("state", o.Vy),
                e.once("change:state", (function() {
                    this.set("errorEvent", void 0)
                }
                ), e),
                this.trigger(o.pn, t)
            },
            updatePlaylist: function(t, e) {
                var i = this._model;
                try {
                    var n = (0,
                    p.s7)(t, i, e);
                    (0,
                    p._)(n);
                    var o = (0,
                    a.l7)({}, e);
                    delete o.playlist,
                    i.set("feedData", o),
                    i.set("playlist", n)
                } catch (t) {
                    return Promise.reject(t)
                }
                return 1 === t.length && 1 === t[0].sources.length && "mp4" === t[0].sources[0].type && i.get("repeat") ? (i.set("repeat", !1),
                i.set("loop", !0)) : i.set("loop", !1),
                this.setItemIndex(i.get("item"))
            }
        });
        var Le = ze
          , Be = "afs_ads ad-placement"
          , Oe = i(9165)
          , Ve = i(6245)
          , Re = i(8958)
          , Fe = i(5090)
          , He = i(4255);
        function Ze(t, e, n, a) {
            if (function(t, e, i) {
                var n = t.get("related")
                  , o = e.getPlaylist()
                  , a = !(!n || !n.file) || !!i.recommendations;
                return (o.length > 1 || a) && (!1 !== t.get("controls") || !n.disableRelated)
            }(t, e, a))
                return function(t, e) {
                    return i.e(365).then(function(n) {
                        if (!t.attributes._destroyed && !e.getPlugin("related")) {
                            var o = new Fe.Z;
                            return o.name = "related",
                            o.js = i(8222).default,
                            o
                        }
                    }
                    .bind(null, i)).catch((0,
                    Re.Ep)(301129))
                }(t, e).then((function(i) {
                    var o = e.getPlugin("related");
                    if (!o) {
                        var a = t.get("related");
                        (o = (0,
                        He.MK)(i, a, e)).on("nextUp", (function(e) {
                            var i = null;
                            e === Object(e) && ((i = (0,
                            B.Z)(e)).sources = (0,
                            p.T5)(i, t),
                            i.feedType = e.feedType),
                            t.set("nextUp", i)
                        }
                        )),
                        o.on("warning", (function(t) {
                            n.trigger("warning", t)
                        }
                        )),
                        o.setup(t),
                        o.addToPlayer.call(e)
                    }
                }
                )).catch((function(e) {
                    return e.message = e.message || t.get("localization").errors[e.key],
                    delete e.key,
                    n.trigger(o.cM, e),
                    e
                }
                ))
        }
        var Ne, qe = i(560), Ue = [], De = !1, We = function(t) {
            var e = t.search
              , i = t.hash
              , n = t.origin
              , o = t.pathname
              , a = "jw_start={seek_to_second_number}";
            if (e) {
                for (var r = e.replace(/^\?/, "").split("&"), s = -1, l = 0; l < r.length; l++)
                    if (/^jw_start=/.test(r[l])) {
                        s = l;
                        break
                    }
                -1 !== s ? r[s] = a : r.push(a),
                e = "?" + r.join("&")
            } else
                e = "?" + a;
            return (n || "") + (o || "") + (e || "") + (i || "")
        };
        Le.prototype.osPlayerSetup = Le.prototype.playerSetup,
        Le.prototype.playerSetup = function(t, e, r, s, l, c) {
            var u = this;
            this.osPlayerSetup(t, e, r, s, l, c);
            var d, p = this.shouldAutoAdvance, h = this._model, w = this._view, f = this.modelShim, g = function(t) {
                var e, i, n = !1;
                return t && ((i = document.createElement("div")).className = Be,
                i.innerHTML = "&nbsp;",
                i.style.width = "1px",
                i.style.height = "1px",
                i.style.position = "absolute",
                i.style.background = "transparent",
                e = i,
                t.element().appendChild(e)),
                {
                    onReady: function() {
                        if (n)
                            return !0;
                        t && document.body.contains(t.element()) && (null !== e.offsetParent && e.className === Be && "" !== e.innerHTML && 0 !== e.clientHeight || (n = !0)),
                        n && this.trigger("adBlock")
                    },
                    getAdBlock: function() {
                        return n
                    }
                }
            }(w), j = h.get("advertising");
            if (f && f.attributes.ampController) {
                var m = f.attributes.ampController
                  , v = this.playerReady;
                this.ampController = m,
                delete f.attributes.ampController,
                this.playerReady = function() {
                    v.apply(this, arguments),
                    m.ready(h)
                }
            }
            t.analytics && (t.sdkplatform = t.sdkplatform || t.analytics.sdkplatform),
            h.once("change:visibility", (function() {
                g.onReady.call(u)
            }
            )),
            this.next = function(t) {
                t = t || {};
                var i = e.getPlugin("related");
                y.call(this, i, "nextClick", t.feedShownId, (function() {
                    return i.next(t)
                }
                ))
            }
            ;
            var b = this.nextItem;
            this.nextItem = function() {
                var t = e.getPlugin("related");
                y.call(this, t, "nextAutoAdvance"),
                b.call(this)
            }
            ;
            var y = function(t, e, i, n) {
                if (t) {
                    var o = h.get("nextUp");
                    o && this.trigger(e, {
                        mode: o.mode,
                        ui: "nextup",
                        feedShownId: i,
                        target: o,
                        itemsShown: [o],
                        feedData: o.feedData
                    }),
                    "function" == typeof n && n()
                }
            };
            function x() {
                return d || (d = i.e(926).then(function(t) {
                    return new (0,
                    i(8460).default)(w,h,e)
                }
                .bind(null, i)).catch((function(t) {
                    throw t
                }
                )).catch((function(t) {
                    console.error("jwplayer.stats:", t)
                }
                ))),
                d
            }
            function C(t, i) {
                g.onReady(),
                Ze(h, e, this, i)
            }
            this.updatePlaylist = function(t, i) {
                var o = this
                  , a = [];
                return h.get("mobileSdk") || !function(t) {
                    return window.WebGLRenderingContext && t.some((function(t) {
                        return t.stereomode && t.stereomode.length > 0
                    }
                    ))
                }(t) || e.getPlugin("vr") || console.warn("Playlist contains 360° or VR media. JW Player 360°/VR support is now deprecated"),
                (0,
                n.w0)(t) && a.push((0,
                n.lD)(h.get("edition"))),
                (0,
                Ve.g)(t, "images", "image"),
                a.length ? (h.attributes.itemReady = !1,
                Promise.all(a).then((function() {
                    return Le.prototype.updatePlaylist.call(o, t, i)
                }
                ))) : Le.prototype.updatePlaylist.call(this, t, i)
            }
            ,
            this.shouldAutoAdvance = function() {
                var t = h.get("related")
                  , e = h.get("nextUp");
                return e && "playlist" === e.mode ? !!t.shouldAutoAdvance : p.call(this)
            }
            ,
            e.getAdBlock = g.getAdBlock,
            this.once(o.gO, (function(t) {
                h.on("change:playlistItem", C, this),
                !(j && j.outstream) && h.get("cast") ? (!(h.get("cast") || {}).customAppId && (0,
                n.w0)(h.get("playlist")) || T.apply(this),
                _.apply(this)) : S(),
                Ze(h, e, this, t.item),
                h.get("generateSEOMetadata") && function(t, e) {
                    De || (setTimeout((function() {
                        Ue.push(function(t, e) {
                            var i, n = t.title, o = t.description, r = t.image, s = t.sources, l = t.pubdate, c = t.mediaid, u = l ? new Date(1e3 * l).toISOString() : void 0, d = ((0,
                            a.sE)(s, (function(t) {
                                return "video/mp4" === t.type
                            }
                            )) || s[0]).file, p = e.getConfig();
                            (0,
                            qe.Z)() ? c && p.pid && (i = "https://cdn.jwplayer.com/players/" + c + "-" + p.pid + ".html") : i = window.location.href;
                            var h, w = e.get("duration");
                            return w && (h = "PT" + Math.floor(w / 60) + "M" + Math.round(w) % 60 + "S"),
                            {
                                "@context": "https://schema.org",
                                "@type": "VideoObject",
                                name: n,
                                description: o,
                                thumbnailUrl: r,
                                uploadDate: u,
                                duration: h,
                                contentUrl: d,
                                embedUrl: i,
                                potentialAction: {
                                    "@type": "SeekToAction",
                                    target: We(window.location),
                                    "startOffset-input": "required name=seek_to_second_number"
                                }
                            }
                        }(t, e))
                    }
                    ), 750),
                    clearTimeout(Ne),
                    Ne = setTimeout((function() {
                        var t = document.createElement("script");
                        t.setAttribute("type", "application/ld+json"),
                        t.setAttribute("id", "__jw-ld-json"),
                        Ue.length > 1 ? t.innerText = JSON.stringify(Ue) : t.innerText = JSON.stringify(Ue[0]),
                        document.head.appendChild(t),
                        De = !0
                    }
                    ), 1e3))
                }(t.item, this),
                this.getContainer().addEventListener("keydown", (function(t) {
                    "n" === t.key && (h.set("displayStats", !h.get("displayStats")),
                    x())
                }
                ), this),
                h.on("change:displayStats", (function(t, e) {
                    e ? x().then((function(t) {
                        return t.show()
                    }
                    )) : !1 === e && x().then((function(t) {
                        return t.hide()
                    }
                    ))
                }
                ), this)
            }
            ), this);
            var M = function(t) {
                u.trigger(o.cM, t)
            };
            function T() {
                if (window.chrome && k.Browser.chrome)
                    return function(t, e, n) {
                        i.e(977).then(function(n) {
                            var o = new (0,
                            i(777).default)(t,e);
                            return t.castToggle = o.castToggle.bind(t._castController),
                            t._castController = o,
                            t.stopCasting = o.stopCasting,
                            o.init()
                        }
                        .bind(null, i)).catch((0,
                        Re.Jt)(301161)).catch(n)
                    }(this, h, M)
            }
            function _() {
                if (window.WebKitPlaybackTargetAvailabilityEvent && !h.get("playlist").some((function(t) {
                    return !(0,
                    Oe.H)(t.sources[0])
                }
                )))
                    return function(t, e, n) {
                        return i.e(520).then(function(n) {
                            var o = i(6342).default;
                            t._airplayController = new o(t,e),
                            t.castToggle = t._airplayController.airplayToggle.bind(t._airplayController)
                        }
                        .bind(null, i)).catch((0,
                        Re.Jt)(301162)).catch(n)
                    }(this, h, M);
                S()
            }
            function S() {
                var t = h.getVideo();
                t && t.video && (t.video.webkitWirelessVideoPlaybackDisabled = !0)
            }
            j && j.outstream && function(t, e) {
                var i = t._model
                  , n = t._view
                  , r = !1
                  , s = e.height
                  , l = e.width
                  , c = t.getHeight;
                t.getHeight = function() {
                    var t = i.get("aspectratio");
                    return t ? Math.round(i.get("containerWidth") * parseFloat(t) / 100) : s
                }
                ;
                var u, d = t.getWidth;
                t.getWidth = function() {
                    return (0,
                    a.hj)(l) ? l : d.call(this)
                }
                ,
                t.getSafeRegion = function(t) {
                    return n.getSafeRegion(t)
                }
                ,
                t.resize = function(t, e) {
                    return n.resize(t, e)
                }
                ,
                u = n.resize,
                n.resize = function(t, e) {
                    return s = e,
                    l = t,
                    u.call(n, t, e)
                }
                ,
                i.setAutoStart("viewable"),
                t.setMute(!0),
                t.setItemIndex = function() {
                    return i.setActiveItem(0),
                    Promise.resolve()
                }
                ,
                t.updatePlaylist = function() {
                    return i.set("playlist", [{
                        sources: [{}]
                    }]),
                    i.attributes.itemReady = !0,
                    this.setItemIndex(0)
                }
                ;
                var p = t.createInstream;
                t.createInstream = function() {
                    var e = p.call(this);
                    return e.noResume = !0,
                    r = !1,
                    e.on("state", (function(e) {
                        var i = e.newstate;
                        i !== o.ik && i !== o.r0 || (t.attachMedia = w,
                        t.getHeight = c,
                        t.getWidth = d,
                        n && (n.resize = u),
                        r = !0)
                    }
                    )),
                    e
                }
                ;
                var h = t.attachMedia;
                t.attachMedia = t.playerDestroy;
                var w = function() {
                    return r || i.set("repeat", !1),
                    i.get("backgroundLoading") || this._programController.mediaPool.clean(),
                    i.set("state", o.xQ),
                    this._programController.trigger(o.Ms, {}),
                    h.call(this)
                };
                t._programController.playVideo = function() {
                    return Promise.resolve()
                }
            }(this, t)
        }
        ;
        var Qe = Le
    },
    3414: function(t, e, i) {
        "use strict";
        i.d(e, {
            B: function() {
                return n
            },
            K: function() {
                return o
            }
        });
        var n = [40, 120, 320, 480, 640, 720, 1280, 1920]
          , o = 4500
    },
    2977: function(t, e, i) {
        "use strict";
        i.d(e, {
            Cz: function() {
                return o
            },
            IJ: function() {
                return a
            },
            Bf: function() {
                return r
            }
        });
        var n = i(3414)
          , o = function(t) {
            if (t && t.length) {
                var e = t.filter((function(t) {
                    return t.type && t.type.match(/video/)
                }
                ));
                if (e && e.length)
                    return e
            }
            return !1
        };
        function a(t) {
            for (var e = 0, i = n.B[e]; i < t && e < n.B.length; )
                i = n.B[e++];
            return i
        }
        function r(t, e) {
            var i = t.mediaid
              , n = t.image;
            return i || n ? i && new RegExp("jwplayer.com/v2/media/" + i).test(n) ? "https://cdn.jwplayer.com/v2/media/" + i + "/poster.jpg?width=" + e : n : ""
        }
    },
    6245: function(t, e, i) {
        "use strict";
        i.d(e, {
            g: function() {
                return a
            }
        });
        var n, o = i(1876);
        function a(t, e, i) {
            var a = function() {
                try {
                    n = window.localStorage.jwplayerLocalId
                } catch (t) {}
                return n = n || (0,
                o.B)(12)
            }();
            t.forEach((function(t) {
                var n = t.variations;
                if (n && n[e]) {
                    n.selected = n.selected || {};
                    var o = function(t, e) {
                        for (var i = function(t) {
                            for (var e = 1794770992, i = 0, n = t.length; i < n; i++)
                                e ^= t.charCodeAt(i),
                                e += (e << 1) + (e << 4) + (e << 7) + (e << 8) + (e << 24);
                            return e >>> 0
                        }(t), n = i % 2520, o = e.reduce((function(t, e) {
                            return t + e.weight
                        }
                        ), 0), a = 0, r = 0; r < e.length; r++) {
                            var s = e[r];
                            if ((a += 2520 * s.weight / o) > n)
                                return s
                        }
                    }(a, n[e])
                      , r = o[i];
                    r && (t[i] = r,
                    n.selected[e] = o)
                }
            }
            ))
        }
    },
    3296: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return l
            }
        });
        var n = i(4806)
          , o = i(7880)
          , a = i(1909)
          , r = i(9739)
          , s = i(287)
          , l = function() {
            function t(t, e, i, n, o) {
                this.hoverElement = e,
                this.item = i,
                this.model = n,
                this.onView = o,
                this.type = t,
                this.container = null,
                this.played = !1,
                this.seeking = !1,
                this.completed = !1,
                this.src = i.videoThumbnail,
                this.video = (0,
                r.V)({
                    class: "jw-reset jw-video-thumbnail"
                }),
                this.video.muted = !0,
                this.onPlay = this.onPlay.bind(this),
                this.onPause = this.onPause.bind(this),
                this.onEnded = this.onEnded.bind(this),
                this.onError = this.onError.bind(this)
            }
            var e = t.prototype;
            return e.adapt = function() {
                var t = this.video;
                switch (this.type) {
                case "overlayItem":
                    this.container = this.hoverElement.querySelector(".jw-related-item-poster"),
                    this.container && this.container.parentElement && !this.hoverElement.className.match(/jw-related-item-next-up/) && (this.hoverElement = this.container.parentElement);
                    break;
                case "widgetItem":
                    this.container = this.hoverElement.querySelector(".jw-related-shelf-item-image");
                    break;
                case "shelfItem":
                default:
                    break;
                case "posterItem":
                    t.setAttribute("loop", "")
                }
                this.container || (this.container = (0,
                n.az)('<div class="jw-video-thumbnail-generated"></div>'))
            }
            ,
            e.onPlay = function() {
                var t = this.video;
                return this.src ? ((0,
                n.cn)(this.video, "jw-video-thumbnail-visible"),
                t && !t.src && (t.src = this.src,
                t.load()),
                this.completed && (t.currentTime = 0,
                (0,
                n.IV)(t, "jw-video-thumbnail-completed"),
                this.completed = !1),
                o.OS.iOS ? Promise.resolve(this.seekPlay()) : this.asyncPlay()) : this.destroy()
            }
            ,
            e.onPause = function() {
                (0,
                n.IV)(this.video, "jw-video-thumbnail-visible"),
                this.seeking = !1,
                this.video.pause()
            }
            ,
            e.onEnded = function() {
                "posterItem" !== this.type && (0,
                n.cn)(this.video, "jw-video-thumbnail-completed"),
                this.completed = !0,
                this.seeking = !1
            }
            ,
            e.onFirstFrame = function() {
                this.played = !0,
                "function" == typeof this.onView && this.onView(this.item)
            }
            ,
            e.onError = function() {
                this.destroy()
            }
            ,
            e.onViewPoster = function(t, e) {
                if (e)
                    return this.onPlay();
                this.onPause()
            }
            ,
            e.asyncPlay = function() {
                var t = this
                  , e = this.video;
                return (e.play() || (0,
                s.Z)(e)).then((function() {
                    t.played || t.onFirstFrame()
                }
                )).catch((function(e) {
                    if (20 !== e.code)
                        return 9 !== e.code && "Failed to load because no supported source was found." !== e.message ? t.seekPlay() : void t.destroy()
                }
                ))
            }
            ,
            e.seekPlay = function() {
                var t = this
                  , e = this.video
                  , i = e.hasAttribute("loop")
                  , n = this.seek = function(o) {
                    if (t.seeking) {
                        if (!e.duration)
                            return (0,
                            a.U)(n);
                        r || (r = o);
                        var s = (o - r) / 1e3;
                        i ? s %= e.duration : s = Math.min(s, e.duration),
                        e.currentTime = s,
                        e.duration > s || i ? (0,
                        a.U)(n) : t.onEnded()
                    }
                }
                  , o = this.handleSeek = function() {
                    t.onFirstFrame(),
                    t.video.removeEventListener("seeked", o)
                }
                  , r = 0;
                this.played || this.video.addEventListener("seeked", o),
                this.seeking = !0,
                (0,
                a.U)(n)
            }
            ,
            e.addEventListeners = function() {
                "posterItem" === this.type ? (this.model.once("change:state", this.destroy, this),
                this.model.on("change:viewable", this.onViewPoster, this)) : (o.OS.mobile || (this.hoverElement.addEventListener("mouseenter", this.onPlay),
                this.hoverElement.addEventListener("mouseleave", this.onPause)),
                this.video.addEventListener("ended", this.onEnded)),
                this.video.addEventListener("error", this.onError)
            }
            ,
            e.removeEventListeners = function() {
                "posterItem" === this.type ? (this.model.off("change: state", this.destroy, this),
                this.model.off("change:viewable", this.onViewPoster, this)) : (o.OS.mobile || (this.hoverElement.removeEventListener("mouseenter", this.onPlay),
                this.hoverElement.removeEventListener("mouseleave", this.onPause)),
                this.video.removeEventListener("ended", this.onEnded)),
                this.video.removeEventListener("error", this.onError),
                this.handleSeek && this.video.removeEventListener("seeked", this.handleSeek)
            }
            ,
            e.init = function() {
                this.adapt(this.hoverElement.className),
                (0,
                n.cn)(this.container, "jw-video-thumbnail-container"),
                "widgetItem" === this.type ? (0,
                n.SH)(this.container, this.video) : this.container.appendChild(this.video),
                this.container.parentElement && "posterItem" !== this.type ? "shelfItem" === this.type && (0,
                n.SH)(this.hoverElement, this.container) : this.hoverElement.appendChild(this.container),
                this.addEventListeners(),
                "posterItem" === this.type && this.model.get("viewable") && this.onViewPoster(null, !0)
            }
            ,
            e.isDestroyed = function() {
                return !this.video
            }
            ,
            e.destroy = function() {
                this.isDestroyed() || (this.removeEventListeners(),
                this.seeking = !1,
                this.seek && (0,
                a.W)(this.seek),
                this.onPause(),
                this.video.removeAttribute("src"),
                this.video.load(),
                this.container.removeChild(this.video),
                this.video = null,
                this.container.className.match(/jw-video-thumbnail-generated/) ? this.container.parentNode.removeChild(this.container) : (0,
                n.IV)(this.container, "jw-video-thumbnail-container"),
                this.container = null)
            }
            ,
            t
        }()
    },
    5639: function(t, e, i) {
        "use strict";
        i.r(e),
        i.d(e, {
            default: function() {
                return Ot
            }
        });
        var n = {};
        i.r(n),
        i.d(n, {
            email: function() {
                return vt
            },
            embed: function() {
                return yt
            },
            facebook: function() {
                return ht
            },
            link: function() {
                return bt
            },
            linkedin: function() {
                return ft
            },
            pinterest: function() {
                return gt
            },
            reddit: function() {
                return jt
            },
            tumblr: function() {
                return mt
            },
            twitter: function() {
                return wt
            }
        });
        var o = i(7880)
          , a = i(8700)
          , r = i(1026)
          , s = i(3347)
          , l = i(4806)
          , c = i(7866)
          , u = i(3388)
          , d = i(379)
          , p = i(1823)
          , h = i(5322)
          , w = i(6286)
          , f = i(5053)
          , g = i(2431)
          , j = i(1009)
          , m = i(1876)
          , v = i(7958)
          , b = i(8395)
          , y = function() {
            function t(t, e, i) {
                (0,
                h.l7)(this, r.ZP),
                this._model = t,
                this._api = e,
                this._playerElement = i,
                this.localization = t.get("localization"),
                this.state = "tooltip",
                this.enabled = !1,
                this.shown = !1,
                this.feedShownId = "",
                this.closeUi = null,
                this.tooltipUi = null,
                this.reset()
            }
            var e = t.prototype;
            return e.setup = function(t) {
                this.container = t.createElement("div"),
                this.container.className = "jw-nextup-container jw-reset";
                var e, i, n, a, r = (0,
                l.az)((void 0 === e && (e = ""),
                void 0 === i && (i = ""),
                void 0 === n && (n = ""),
                void 0 === a && (a = ""),
                '<div class="jw-nextup jw-background-color jw-reset' + (o.Browser.firefox ? " jw-nextup-firefox-pip-fix" : "") + '"><div class="jw-nextup-tooltip jw-reset"><div class="jw-nextup-thumbnail jw-reset"></div><div class="jw-nextup-body jw-reset"><div class="jw-nextup-header jw-reset">' + e + '</div><div class="jw-nextup-title jw-reset-text" dir="auto">' + i + '</div><div class="jw-nextup-duration jw-reset">' + n + '</div></div></div><button type="button" class="jw-icon jw-nextup-close jw-reset" aria-label="' + a + '"></button></div>'));
                r.querySelector(".jw-nextup-close").appendChild((0,
                g.W)("close")),
                this.addContent(r),
                this.closeButton = this.content.querySelector(".jw-nextup-close"),
                this.closeButton.setAttribute("aria-label", this.localization.close),
                this.tooltip = this.content.querySelector(".jw-nextup-tooltip");
                var s = this._model
                  , c = s.player;
                this.enabled = !1,
                s.on("change:nextUp", this.onNextUp, this),
                c.change("duration", this.onDuration, this),
                c.change("position", this.onElapsed, this),
                c.change("streamType", this.onStreamType, this),
                c.change("state", (function(t, e) {
                    "complete" === e && this.toggle(!1)
                }
                ), this),
                this.closeUi = (0,
                b.Z)(this.closeButton, (function() {
                    this.nextUpSticky = !1,
                    this.toggle(!1)
                }
                ), this),
                this.tooltipUi = new f.ZP(this.tooltip).on("click", this.click, this)
            }
            ,
            e.loadThumbnail = function(t) {
                return this.nextUpImage = new Image,
                this.nextUpImage.onload = function() {
                    this.nextUpImage.onload = null
                }
                .bind(this),
                this.nextUpImage.src = t,
                {
                    backgroundImage: 'url("' + t + '")'
                }
            }
            ,
            e.click = function() {
                var t = this.feedShownId;
                this.reset(),
                this._api.next({
                    feedShownId: t,
                    reason: "interaction"
                })
            }
            ,
            e.toggle = function(t, e) {
                if (this.enabled && ((0,
                l.og)(this.container, "jw-nextup-sticky", !!this.nextUpSticky),
                this.shown !== t)) {
                    this.shown = t,
                    (0,
                    l.og)(this.container, "jw-nextup-container-visible", t),
                    (0,
                    l.og)(this._playerElement, "jw-flag-nextup", t);
                    var i = this._model.get("nextUp");
                    t && i ? (this.feedShownId = (0,
                    m.B)(m.F),
                    this.trigger("nextShown", {
                        mode: i.mode,
                        ui: "nextup",
                        itemsShown: [i],
                        feedData: i.feedData,
                        reason: e,
                        feedShownId: this.feedShownId
                    })) : this.feedShownId = ""
                }
            }
            ,
            e.setNextUpItem = function(t) {
                var e = this;
                setTimeout((function() {
                    var i = t.mediaid
                      , n = t.image
                      , o = t.title
                      , a = t.duration;
                    if (e.thumbnail = e.content.querySelector(".jw-nextup-thumbnail"),
                    (0,
                    l.og)(e.content, "jw-nextup-thumbnail-visible", !!n),
                    n || i) {
                        var r;
                        r = i ? "https://cdn.jwplayer.com/v2/media/" + i + "/poster.jpg?width=120" : n;
                        var s = e.loadThumbnail(r);
                        (0,
                        w.oB)(e.thumbnail, s)
                    }
                    e.header = e.content.querySelector(".jw-nextup-header"),
                    e.header.textContent = (0,
                    l.az)(e.localization.nextUp).textContent,
                    e.title = e.content.querySelector(".jw-nextup-title"),
                    e.title.textContent = o ? (0,
                    l.az)(o).textContent : "",
                    a && (e.duration = e.content.querySelector(".jw-nextup-duration"),
                    e.duration.textContent = "number" == typeof a ? (0,
                    v.timeFormat)(a) : a)
                }
                ), 500)
            }
            ,
            e.onNextUp = function(t, e) {
                this.reset(),
                e || (e = {
                    showNextUp: !1
                }),
                this.enabled = !(!e.title && !e.image),
                this.enabled && (e.showNextUp || (this.nextUpSticky = !1,
                this.toggle(!1)),
                this.setNextUpItem(e))
            }
            ,
            e.onDuration = function(t, e) {
                if (e) {
                    var i = t.get("nextupoffset")
                      , n = -10;
                    i && (n = (0,
                    j.U5)(i, e)),
                    n < 0 && (n += e),
                    (0,
                    j.zz)(i) && e - 5 < n && (n = e - 5),
                    this.offset = n
                }
            }
            ,
            e.onElapsed = function(t, e) {
                var i = this.nextUpSticky;
                if (this.enabled && !1 !== i) {
                    var n = e >= this.offset;
                    n && void 0 === i ? (this.nextUpSticky = n,
                    this.toggle(n, "time")) : !n && i && this.reset()
                }
            }
            ,
            e.onStreamType = function(t, e) {
                "VOD" !== e && (this.nextUpSticky = !1,
                this.toggle(!1))
            }
            ,
            e.element = function() {
                return this.container
            }
            ,
            e.addContent = function(t) {
                this.content && this.removeContent(),
                this.content = t,
                this.container.appendChild(t)
            }
            ,
            e.removeContent = function() {
                this.content && (this.container.removeChild(this.content),
                this.content = null)
            }
            ,
            e.reset = function() {
                this.nextUpSticky = void 0,
                this.toggle(!1)
            }
            ,
            e.destroy = function() {
                this.off(),
                this._model.off(null, null, this),
                this.closeUi && this.closeUi.destroy(),
                this.tooltipUi && this.tooltipUi.destroy()
            }
            ,
            t
        }()
          , k = {
            link: function(t) {
                var e = t.link
                  , i = t.title;
                return '<a href="' + (e || "") + '" class="jw-rightclick-link jw-reset-text" target="_blank" rel="noreferrer" dir="auto">' + t.logo + (i || "") + "</a>"
            },
            share: function(t, e) {
                return '<button type="button" class="jw-reset-text jw-rightclick-link jw-share-item" dir="auto">' + e.sharing.heading + "</button>"
            },
            pip: function(t, e) {
                return '<button type="button" class="jw-reset-text jw-rightclick-link jw-pip-item" dir="auto">' + e.pipIcon + "</button>"
            },
            keyboardShortcuts: function(t, e) {
                return '<button type="button" class="jw-reset-text jw-rightclick-link jw-shortcuts-item" dir="auto">' + e.shortcuts.keyboardShortcuts + "</button>"
            },
            button: function(t) {
                var e = t.title;
                return '<button type="button" class="jw-reset-text jw-rightclick-link jw-' + t.button.name + '-item" dir="auto">' + e + "</button>"
            }
        }
          , x = i(6834)
          , C = i(9002)
          , M = i(6887)
          , T = {
            free: 0,
            pro: 1,
            premium: 2,
            ads: 3,
            invalid: 4,
            enterprise: 6,
            trial: 7,
            platinum: 8,
            starter: 9,
            business: 10,
            developer: 11
        };
        function _(t) {
            var e = (0,
            l.az)(t)
              , i = e.querySelector(".jw-rightclick-logo");
            return i && i.appendChild((0,
            g.W)("jwplayer-logo")),
            e
        }
        function S(t, e) {
            return S = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            S(t, e)
        }
        var E = function(t) {
            var e, i;
            function n() {
                return t.apply(this, arguments) || this
            }
            i = t,
            (e = n).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            S(e, i);
            var o = n.prototype;
            return o.buildArray = function() {
                var e = this.model
                  , i = t.prototype.buildArray.call(this)
                  , n = e.get("localization")
                  , o = n.abouttext
                  , a = n.videoInfo
                  , r = i.items;
                if (o) {
                    for (var s, l, c = 0; c < r.length; c++)
                        if (r[c].featured) {
                            l = r[c],
                            s = c;
                            break
                        }
                    if (l) {
                        l.showLogo = !1;
                        var u = {
                            title: o,
                            type: "link",
                            link: e.get("aboutlink") || l.link
                        };
                        r[s] = u
                    }
                }
                return this.shareHandler && r.unshift({
                    type: "share"
                }),
                i.items.splice(0, 0, {
                    type: "button",
                    title: a,
                    button: {
                        name: "stats"
                    }
                }),
                i
            }
            ,
            o.enableSharing = function(t) {
                var e = this;
                this.shareHandler = function() {
                    e.mouseOverContext = !1,
                    e.hideMenu(),
                    t()
                }
            }
            ,
            o.addHideMenuHandlers = function() {
                var e = this;
                t.prototype.addHideMenuHandlers.call(this);
                var i = this.el.querySelector(".jw-share-item");
                i && i.addEventListener("click", this.shareHandler);
                var n = this.el.querySelector(".jw-stats-item");
                n && (this.statsHandler = function() {
                    var t = e.model;
                    e.mouseOverContext = !1,
                    e.hideMenu(),
                    t.set("displayStats", !t.get("displayStats"))
                }
                ,
                n.addEventListener("click", this.statsHandler))
            }
            ,
            o.removeHideMenuHandlers = function() {
                if (t.prototype.removeHideMenuHandlers.call(this),
                this.el) {
                    var e = this.el.querySelector(".jw-share-item");
                    e && e.removeEventListener("click", this.shareHandler);
                    var i = this.el.querySelector(".jw-stats-item");
                    i && i.removeEventListener("click", this.statsHandler)
                }
            }
            ,
            n
        }(function() {
            function t(t) {
                this.shortcutsTooltip = t
            }
            var e = t.prototype;
            return e.buildArray = function() {
                var t = x.i.split("+")[0]
                  , e = this.model
                  , i = e.get("edition")
                  , n = e.get("localization").poweredBy
                  , a = '<span class="jw-reset">HauNYTB.COM</span>'
                  , r = {
                    items: [{
                        title: (0,
                        M.t6)(n) ? a + " " + n : n + " " + a,
                        type: "link",
                        featured: !0,
                        showLogo: !0,
                        link: "https://haunytb.com"
                    }]
                }
                  , s = r.items;
                return this.shortcutsTooltip && s.splice(s.length - 1, 0, {
                    type: "keyboardShortcuts"
                }),
                this.pipMenu = !o.OS.mobile && "disabled" !== e.get("pipIcon") && (o.Browser.chrome && !(0,
                C.yS)() || o.Browser.edge || o.Browser.safari),
                this.pipMenu && s.splice(s.length - 1, 0, {
                    type: "pip"
                }),
                r
            }
            ,
            e.rightClick = function(t) {
                if (this.lazySetup(),
                this.mouseOverContext)
                    return !1;
                this.hideMenu(),
                this.showMenu(t),
                this.addHideMenuHandlers()
            }
            ,
            e.getOffset = function(t) {
                var e = (0,
                l.A8)(this.wrapperElement)
                  , i = t.pageX - e.left
                  , n = t.pageY - e.top;
                return this.model.get("touchMode") && (n -= 100),
                {
                    x: i,
                    y: n
                }
            }
            ,
            e.showMenu = function(t) {
                var e = this
                  , i = this.getOffset(t);
                return this.el.style.left = i.x + "px",
                this.el.style.top = i.y + "px",
                this.outCount = 0,
                (0,
                l.cn)(this.playerContainer, "jw-flag-rightclick-open"),
                (0,
                l.cn)(this.el, "jw-open"),
                clearTimeout(this._menuTimeout),
                this._menuTimeout = setTimeout((function() {
                    return e.hideMenu()
                }
                ), 3e3),
                !1
            }
            ,
            e.hideMenu = function(t) {
                t && this.el && this.el.contains(t.target) || ((0,
                l.IV)(this.playerContainer, "jw-flag-rightclick-open"),
                (0,
                l.IV)(this.el, "jw-open"))
            }
            ,
            e.lazySetup = function() {
                var t, e, i, n = this, o = (t = this.buildArray(),
                e = this.model.get("localization"),
                '<div class="jw-rightclick jw-reset"><ul class="jw-rightclick-list jw-reset">' + (void 0 === (i = t.items) ? [] : i).map((function(t) {
                    return function(t, e) {
                        var i = t.featured
                          , n = t.showLogo
                          , o = t.type;
                        return t.logo = n ? '<span class="jw-rightclick-logo jw-reset"></span>' : "",
                        '<li class="jw-reset jw-rightclick-item ' + (i ? "jw-featured" : "") + '">' + k[o](t, e) + "</li>"
                    }(t, e)
                }
                )).join("") + "</ul></div>");
                if (this.el) {
                    if (this.html !== o) {
                        this.html = o;
                        var a = _(o);
                        (0,
                        l.EU)(this.el);
                        for (var r = a.childNodes.length; r--; )
                            this.el.appendChild(a.firstChild)
                    }
                } else
                    this.html = o,
                    this.el = _(this.html),
                    this.wrapperElement.appendChild(this.el),
                    this.hideMenuHandler = function(t) {
                        (0,
                        f.dO)(t) || n.hideMenu(t)
                    }
                    ,
                    this.overHandler = function() {
                        n.mouseOverContext = !0
                    }
                    ,
                    this.outHandler = function(t) {
                        n.mouseOverContext = !1,
                        t.relatedTarget && !n.el.contains(t.relatedTarget) && ++n.outCount > 1 && n.hideMenu()
                    }
                    ,
                    this.pipHandler = function() {
                        n.model.set("pip", !n.model.get("pip"))
                    }
                    ,
                    this.shortcutsTooltipHandler = function() {
                        n.mouseOverContext = !1,
                        n.hideMenu(),
                        n.shortcutsTooltip.open()
                    }
            }
            ,
            e.setup = function(t, e, i) {
                this.wrapperElement = i,
                this.model = t,
                this.mouseOverContext = !1,
                this.playerContainer = e,
                this.ui = new f.ZP(i).on("longPress", this.rightClick, this)
            }
            ,
            e.addHideMenuHandlers = function() {
                this.removeHideMenuHandlers(),
                this.wrapperElement.addEventListener("touchstart", this.hideMenuHandler),
                document.addEventListener("touchstart", this.hideMenuHandler),
                o.OS.mobile || (this.wrapperElement.addEventListener("click", this.hideMenuHandler),
                document.addEventListener("click", this.hideMenuHandler),
                this.el.addEventListener("mouseover", this.overHandler),
                this.el.addEventListener("mouseout", this.outHandler)),
                this.pipMenu && this.el.querySelector(".jw-pip-item").addEventListener("click", this.pipHandler),
                this.shortcutsTooltip && this.el.querySelector(".jw-shortcuts-item").addEventListener("click", this.shortcutsTooltipHandler)
            }
            ,
            e.removeHideMenuHandlers = function() {
                this.wrapperElement && (this.wrapperElement.removeEventListener("click", this.hideMenuHandler),
                this.wrapperElement.removeEventListener("touchstart", this.hideMenuHandler)),
                this.el && (this.el.removeEventListener("mouseover", this.overHandler),
                this.el.removeEventListener("mouseout", this.outHandler),
                this.pipMenu && this.el.querySelector(".jw-pip-item").removeEventListener("click", this.pipHandler),
                this.shortcutsTooltip && this.el.querySelector(".jw-shortcuts-item").removeEventListener("click", this.shortcutsTooltipHandler)),
                document.removeEventListener("click", this.hideMenuHandler),
                document.removeEventListener("touchstart", this.hideMenuHandler)
            }
            ,
            e.destroy = function() {
                clearTimeout(this._menuTimeout),
                this.removeHideMenuHandlers(),
                this.el && (this.hideMenu(),
                this.hideMenuHandler = null,
                this.el = null),
                this.wrapperElement && (this.wrapperElement.oncontextmenu = null,
                this.wrapperElement = null),
                this.model && (this.model = null),
                this.ui && (this.ui.destroy(),
                this.ui = null)
            }
            ,
            t
        }())
          , A = i(2180)
          , P = i(2067)
          , z = i(3060)
          , I = i(4699)
          , L = i(9189);
        function B(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function O(t, e) {
            return O = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            O(t, e)
        }
        function V(t, e, i, n) {
            if (t && "Auto" === t[0].label && i && i.items.length) {
                var o = i.items[0].el.querySelector(".jw-auto-label")
                  , a = t[e.index] || {
                    label: ""
                };
                o.textContent = n ? "" : a.label
            }
        }
        var R = function(t) {
            var e, i;
            function n(e, i, n, o) {
                var a, r, s, c;
                return (a = t.call(this, "settings", o.settings, null, o) || this).api = e,
                a.model = i,
                a.localization = o,
                a.controlbar = n,
                a.closeButton = function(t, e, i) {
                    var n = (0,
                    u.Z)("jw-settings-close", e, i.close, [(0,
                    g.W)("close")]);
                    return n.show(),
                    n.ui.on("keydown", (function(t) {
                        var i = t.sourceEvent
                          , n = (0,
                        L.ku)(i.key);
                        ("Enter" === n || "Right" === n || "Tab" === n && !i.shiftKey) && e(t)
                    }
                    ), this),
                    t.appendChild(n.element()),
                    n
                }(a.el.querySelector(".jw-" + a.name + "-topbar-buttons"), a.close, o),
                a.backButtonTarget = null,
                a.defaultChild = null,
                a.topbar = (r = B(a),
                s = r.closeButton,
                c = r.el.querySelector(".jw-settings-topbar"),
                new f.ZP(c).on("keydown", (function(t) {
                    var e, i, n = t.sourceEvent, o = t.target, a = (0,
                    l.AH)(o), c = (0,
                    l.i3)(o), u = function(e) {
                        c ? e || c.focus() : r.close(t)
                    };
                    switch ((0,
                    L.ku)(n.key)) {
                    case "Esc":
                        r.close(t);
                        break;
                    case "Left":
                        u();
                        break;
                    case "Right":
                        a && s.element() && o !== s.element() && a.focus();
                        break;
                    case "Tab":
                        n.shiftKey && u(!0);
                        break;
                    case "Up":
                    case "Down":
                    case "Enter":
                        e = o.getAttribute("name"),
                        !(i = r.children[e]) && e && r.backButtonTarget && (i = r.backButtonTarget.children[e]),
                        i && i.open && i.open(t)
                    }
                    if (n.stopPropagation(),
                    /13|32|37|38|39|40/.test(n.keyCode))
                        return n.preventDefault(),
                        !1
                }
                ))),
                a.onDocumentClick = a.onDocumentClick.bind(B(a)),
                a.addEventListeners(),
                a
            }
            i = t,
            (e = n).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            O(e, i);
            var o = n.prototype;
            return o.setupMenu = function(t, e, i, n, o, a) {
                if (!i || i.length <= 1)
                    this.removeMenu(t);
                else {
                    var r = this.children[t];
                    r || (r = new A.Z(t,e,this,this.localization)),
                    r.setMenuItems(r.createItems(i, n, a), o);
                    var s = r.categoryButton && r.categoryButton.element();
                    this.buttonContainer.firstChild === s && (this.defaultChild = r)
                }
            }
            ,
            o.onLevels = function(t, e) {
                var i = this
                  , n = {
                    defaultText: this.localization.auto
                };
                this.setupMenu("quality", this.localization.hd, e, (function(t) {
                    return i.api.setCurrentQuality(t)
                }
                ), t.get("currentLevel") || 0, n)
            }
            ,
            o.onCurrentLevel = function(t, e) {
                var i = this.children.quality
                  , n = t.get("visualQuality");
                n && i && V(t.get("levels"), n.level, i, e),
                i.items[e].active || (0,
                L.dt)(i, e)
            }
            ,
            o.onVisualQuality = function(t, e) {
                var i = this.children.quality;
                e && i && V(t.get("levels"), e.level, i, t.get("currentLevel"))
            }
            ,
            o.onAudioTracks = function(t, e) {
                var i = this;
                this.setupMenu("audioTracks", this.localization.audioTracks, e, (function(t) {
                    return i.api.setCurrentAudioTrack(t)
                }
                ), t.get("currentAudioTrack"))
            }
            ,
            o.onAudioTrackIndex = function(t, e) {
                this.children.audioTracks && (0,
                L.dt)(this.children.audioTracks, e)
            }
            ,
            o.onCaptionsList = function(t, e) {
                var i = this
                  , n = {
                    defaultText: this.localization.off
                }
                  , o = t.get("captionsIndex");
                this.setupMenu("captions", this.localization.cc, e, (function(t) {
                    return i.api.setCurrentCaptions(t)
                }
                ), o, n);
                var a = this.children.captions;
                if (a && !a.children.captionsSettings) {
                    a.topbar = a.topbar || a.createTopbar(),
                    (0,
                    l.EU)(a.topbar);
                    var r = this.localization.captionsStyles
                      , s = new A.Z("captionsSettings",r.subtitleSettings,a,this.localization)
                      , c = s.open;
                    s.open = function(t) {
                        var e = s.visible;
                        c.call(s, t),
                        e || i.trigger("captionStylesOpened")
                    }
                    ;
                    var u = s.destroy;
                    s.destroy = function(t) {
                        a.topbar.parentNode.removeChild(a.topbar),
                        a.topbar = null,
                        a.topbarUI.destroy(),
                        u.call(s, t)
                    }
                    ;
                    var d = new P.s(this.localization.settings,s.open);
                    a.topbar.appendChild(d.el);
                    var p = t.get("captions");
                    !function e(n) {
                        var o = new P.s(i.localization.reset,(function() {
                            i.model.set("captions", (0,
                            h.l7)({}, I.R)),
                            e(!0)
                        }
                        ));
                        o.el.classList.add("jw-settings-reset");
                        var a = [];
                        (0,
                        L.JU)(r).forEach((function(e) {
                            !n && p && p[e.name] ? e.val = p[e.name] : e.val = e.defaultVal;
                            var o = e.values.indexOf(e.val);
                            e.currentSelection = e.options[o];
                            var r = new A.Z(e.name,e.label,s,i.localization)
                              , l = new P.s(e,r.open,z.v2);
                            r.buttonContainer = l;
                            var c = r.createItems(e.options, (function(n) {
                                var o = l.el.querySelector(".jw-settings-content-item-value");
                                !function(e, n) {
                                    var o = t.get("captions")
                                      , a = e.name
                                      , r = e.values[n]
                                      , s = (0,
                                    h.l7)({}, o);
                                    s[a] = r,
                                    i.model.set("captions", s)
                                }(e, n),
                                o.innerText = e.options[n]
                            }
                            ), null);
                            r.setMenuItems(c, e.values.indexOf(e.val) || 0),
                            a.push(l)
                        }
                        )),
                        a.push(o),
                        s.setMenuItems(a)
                    }()
                }
            }
            ,
            o.onPlaylistItem = function() {
                this.removeMenu("captions"),
                this.removeMenu("audioTracks"),
                this.removeMenu("quality"),
                this.controlbar.elements.captionsButton.hide(),
                this.visible && this.close()
            }
            ,
            o.onCaptionsIndex = function(t, e) {
                var i = this.children.captions;
                i && (0,
                L.dt)(i, e),
                this.controlbar.toggleCaptionsButtonState(!!e)
            }
            ,
            o.onPlaybackRates = function(t, e) {
                var i = this;
                !e && t && (e = t.get("playbackRates"));
                var n = this.localization
                  , o = this.children;
                if (t.get("supportsPlaybackRate") && "LIVE" !== t.get("streamType") && t.get("playbackRateControls")) {
                    var a = e.indexOf(t.get("playbackRate"))
                      , r = {
                        tooltipText: n.playbackRates
                    };
                    this.setupMenu("playbackRates", this.localization.playbackRates, e, (function(t) {
                        return i.api.setPlaybackRate(t)
                    }
                    ), a, r)
                } else
                    o.playbackRates && this.removeMenu("playbackRates")
            }
            ,
            o.onPlaybackRate = function(t, e) {
                var i = t.get("playbackRates")
                  , n = -1;
                i && (n = i.indexOf(e)),
                (0,
                L.dt)(this.children.playbackRates, n)
            }
            ,
            o.onPlaybackRateControls = function(t) {
                this.onPlaybackRates(t)
            }
            ,
            o.onCastActive = function(t, e, i) {
                e !== i && (e ? (this.removeMenu("audioTracks"),
                this.removeMenu("quality"),
                this.removeMenu("playbackRates"),
                this.children.captions && this.children.captions.removeMenu("captionsSettings")) : (this.onAudioTracks(t, t.get("audioTracks")),
                this.onLevels(t, t.get("levels")),
                this.onPlaybackRates(t, t.get("playbackRates")),
                this.onCaptionsList(t, t.get("captionsList"))))
            }
            ,
            o.onChangeStreamType = function() {
                this.onPlaybackRates(this.model)
            }
            ,
            o.onDocumentClick = function(t) {
                /jw-(settings|video|nextup-close|sharing-link|share-item)/.test(t.target.className) || this.close()
            }
            ,
            o.addEventListeners = function() {
                var t = this.updateControlbarButtons
                  , e = this.model;
                this.on("menuAppended menuRemoved", t, this),
                e.change("levels", this.onLevels, this),
                e.on("change:currentLevel", this.onCurrentLevel, this),
                e.on("change:visualQuality", this.onVisualQuality, this),
                e.change("audioTracks", this.onAudioTracks, this),
                e.on("change:currentAudioTrack", this.onAudioTrackIndex, this),
                e.change("captionsList", this.onCaptionsList, this),
                e.on("change:playlistItem", this.onPlaylistItem, this),
                e.change("captionsIndex", this.onCaptionsIndex, this),
                e.change("playbackRates", this.onPlaybackRates, this),
                e.change("playbackRate", this.onPlaybackRate, this),
                e.on("change:playbackRateControls", this.onPlaybackRateControls, this),
                e.on("change:castActive", this.onCastActive, this),
                e.on("change:streamType", this.onChangeStreamType, this)
            }
            ,
            o.open = function(t) {
                if (!this.visible) {
                    var e = this.controlbar.elements.settingsButton.element();
                    e && e.setAttribute("aria-expanded", !0),
                    this.el.parentNode.classList.add("jw-settings-open"),
                    this.trigger("visibility", {
                        visible: !0,
                        evt: t
                    }),
                    document.addEventListener("click", this.onDocumentClick),
                    this.el.setAttribute("aria-expanded", "true"),
                    this.visible = !0
                }
            }
            ,
            o.close = function(t) {
                var e, i = (0,
                L.ku)(t && t.sourceEvent && t.sourceEvent.key), n = this.controlbar.elements.settingsButton.element();
                switch (n && n.setAttribute("aria-expanded", !1),
                this.el.setAttribute("aria-expanded", "false"),
                this.el.parentNode.classList.remove("jw-settings-open"),
                this.trigger("visibility", {
                    visible: !1,
                    evt: t
                }),
                document.removeEventListener("click", this.onDocumentClick),
                this.visible = !1,
                this.openMenus.length && this.closeChildren(),
                i) {
                case "Right":
                    e = (0,
                    l.AH)(n);
                    break;
                case "Left":
                    e = (0,
                    l.i3)(n);
                    break;
                case "Tab":
                    if (t.shiftKey) {
                        e = (0,
                        l.i3)(n);
                        break
                    }
                case "Enter":
                case "Esc":
                    e = n
                }
                e && e.focus({
                    preventScroll: !event
                })
            }
            ,
            o.updateControlbarButtons = function(t) {
                var e = this.children
                  , i = this.controlbar
                  , n = this.model
                  , o = !!e.quality || !!e.playbackRates || !!e.audioTracks || Object.keys(e).length > 1;
                i.elements.settingsButton.toggle(o),
                e.captions && i.toggleCaptionsButtonState(!!n.get("captionsIndex"));
                var a = i.elements[t + "Button"];
                if (a) {
                    var r = !!e[t];
                    a.toggle(r)
                } else if (o)
                    for (var s = Object.keys(this.children), l = 0; l < s.length; l++) {
                        var c = this.children[s[l]]
                          , u = c.categoryButton && c.categoryButton.element();
                        this.buttonContainer.firstChild === u && (this.defaultChild = c)
                    }
            }
            ,
            o.destroy = function() {
                L.MR.call(this),
                document.removeEventListener("click", this.onDocumentClick)
            }
            ,
            n
        }(A.Z)
          , F = i(7571)
          , H = i(3057)
          , Z = i(1096);
        function N(t, e, i, n) {
            var o, a = !1, r = i.get("localization").shortcuts, s = (0,
            l.az)(function(t, e) {
                return '<div class="jw-shortcuts-tooltip jw-modal jw-reset" title="' + e + '"><span class="jw-hidden" id="jw-shortcuts-tooltip-explanation">Press shift question mark to access a list of keyboard shortcuts</span><div class="jw-reset jw-shortcuts-container"><div class="jw-reset jw-shortcuts-header"><span class="jw-reset jw-shortcuts-title">' + e + '</span><button role="switch" aria-label="' + e + '" class="jw-reset jw-switch"><span class="jw-reset jw-switch-knob"></span><span class="jw-reset-text jw-switch-enabled">Enabled</span><span class="jw-reset-text jw-switch-disabled">Disabled</span></button></div><div class="jw-reset jw-shortcuts-tooltip-list"><div class="jw-shortcuts-tooltip-descriptions jw-reset">' + t.map((function(t) {
                    return '<div class="jw-shortcuts-row jw-reset"><span class="jw-shortcuts-description jw-reset">' + t.description + '</span><span class="jw-shortcuts-key jw-reset">' + t.key + "</span></div>"
                }
                )).join("") + "</div></div></div></div>"
            }(function(t) {
                var e = t.playPause
                  , i = t.volumeToggle
                  , n = t.fullscreenToggle
                  , o = t.seekPercent
                  , a = t.increaseVolume
                  , r = t.decreaseVolume
                  , s = t.seekForward
                  , l = t.seekBackward;
                return [{
                    key: t.spacebar,
                    description: e
                }, {
                    key: "↑",
                    description: a
                }, {
                    key: "↓",
                    description: r
                }, {
                    key: "→",
                    description: s
                }, {
                    key: "←",
                    description: l
                }, {
                    key: "c",
                    description: t.captionsToggle
                }, {
                    key: "f",
                    description: n
                }, {
                    key: "m",
                    description: i
                }, {
                    key: "0-9",
                    description: o
                }]
            }(r), r.keyboardShortcuts)), c = new f.ZP(s.querySelector(".jw-switch")), d = function() {
                c.el.setAttribute("aria-checked", i.get("enableShortcuts")),
                (0,
                l.cn)(s, "jw-open"),
                s.querySelector(".jw-shortcuts-close").focus(),
                document.addEventListener("click", h),
                a = !0,
                n(!0)
            }, p = function() {
                (0,
                l.IV)(s, "jw-open"),
                document.removeEventListener("click", h),
                a = !1,
                n(!1)
            }, h = function(t) {
                var e = t.target;
                /jw-shortcuts|jw-switch/.test(e.className) || p()
            };
            return o = (0,
            u.Z)("jw-shortcuts-close", p, i.get("localization").close, [(0,
            g.W)("close")]),
            (0,
            l.SH)(s, o.element()),
            o.show(),
            t.appendChild(s),
            c.on("click", (function(t) {
                var e = t.currentTarget
                  , n = "true" !== e.getAttribute("aria-checked");
                e.setAttribute("aria-checked", n.toString()),
                i.set("enableShortcuts", n)
            }
            )),
            {
                el: s,
                open: d,
                close: p,
                destroy: function() {
                    p(),
                    c.destroy()
                },
                toggleVisibility: function() {
                    a ? p() : d()
                }
            }
        }
        function q(t, e) {
            return q = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            q(t, e)
        }
        var U = function(t) {
            var e, i;
            function n(e, i) {
                var n;
                return (n = t.call(this) || this).element = (0,
                l.az)(function(t) {
                    return '<div class="jw-float-icon jw-icon jw-button-color jw-reset" aria-label=' + t + ' tabindex="0"></div>'
                }(i)),
                n.element.appendChild((0,
                g.W)("close")),
                n.ui = (0,
                b.Z)(n.element, (function() {
                    n.trigger(a.xf)
                }
                )),
                e.appendChild(n.element),
                n
            }
            return i = t,
            (e = n).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            q(e, i),
            n.prototype.destroy = function() {
                this.element && (this.ui.destroy(),
                this.element.parentNode.removeChild(this.element),
                this.element = null)
            }
            ,
            n
        }(r.ZP);
        function D(t, e) {
            return D = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            D(t, e)
        }
        i(977),
        i(1334);
        var W = o.OS.mobile ? 4e3 : 2e3
          , Q = [27];
        H.Z.cloneIcon = g.W,
        Z.Z.forEach((function(t) {
            if (t.getState() === a.Vy) {
                var e = t.getContainer().querySelector(".jw-error-msg .jw-icon");
                e && !e.hasChildNodes() && e.appendChild(H.Z.cloneIcon("error"))
            }
        }
        ));
        var Y = function(t) {
            var e, i;
            function n(e, i) {
                var n;
                return (n = t.call(this) || this).activeTimeout = -1,
                n.inactiveTime = 0,
                n.context = e,
                n.controlbar = null,
                n.displayContainer = null,
                n.backdrop = null,
                n.enabled = !0,
                n.instreamState = null,
                n.keydownCallback = null,
                n.keyupCallback = null,
                n.blurCallback = null,
                n.mute = null,
                n.nextUpToolTip = null,
                n.playerContainer = i,
                n.wrapperElement = i.querySelector(".jw-wrapper"),
                n.rightClickMenu = null,
                n.settingsMenu = null,
                n.shortcutsTooltip = null,
                n.showing = !1,
                n.muteChangeCallback = null,
                n.unmuteCallback = null,
                n.logo = null,
                n.div = null,
                n.dimensions = {},
                n.userInactiveTimeout = function() {
                    var t = n.inactiveTime - (0,
                    c.z)();
                    n.inactiveTime && t > 16 ? n.activeTimeout = setTimeout(n.userInactiveTimeout, t) : n.playerContainer.querySelector(".jw-tab-focus") ? n.resetActiveTimeout() : n.userInactive()
                }
                ,
                n
            }
            i = t,
            (e = n).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            D(e, i);
            var r = n.prototype;
            return r.resetActiveTimeout = function() {
                clearTimeout(this.activeTimeout),
                this.activeTimeout = -1,
                this.inactiveTime = 0
            }
            ,
            r.enable = function(t, e) {
                var i = this
                  , n = this.context.createElement("div");
                n.className = "jw-controls jw-reset",
                this.div = n;
                var r = this.context.createElement("div");
                r.className = "jw-controls-backdrop jw-reset",
                this.backdrop = r,
                this.logo = this.playerContainer.querySelector(".jw-logo");
                var c = e.get("touchMode");
                if (this.focusPlayerElement = function() {
                    e.get("isFloating") ? i.wrapperElement.querySelector("video").focus({
                        preventScroll: !0
                    }) : i.playerContainer.focus({
                        preventScroll: !0
                    })
                }
                ,
                !this.displayContainer) {
                    var h = new p.Z(e,t);
                    h.buttons.display.on("click enter", (function() {
                        i.trigger(a.cy),
                        i.userActive(1e3),
                        t.playToggle({
                            reason: "interaction"
                        }),
                        i.focusPlayerElement()
                    }
                    )),
                    this.div.appendChild(h.element()),
                    this.displayContainer = h
                }
                o.OS.mobile || (this.shortcutsTooltip = new N(this.wrapperElement,t,e,(function(t) {
                    t || i.focusPlayerElement()
                }
                ))),
                this.rightClickMenu = new E(this.shortcutsTooltip),
                c && (0,
                l.cn)(this.playerContainer, "jw-flag-touch"),
                this.rightClickMenu.setup(e, this.playerContainer, this.wrapperElement);
                var w = e.get("floating");
                w && (new U(n,e.get("localization").close).on(a.xf, (function() {
                    return i.trigger("dismissFloating", {
                        doNotForward: !0
                    })
                }
                )),
                !1 !== w.dismissible && (0,
                l.cn)(this.playerContainer, "jw-floating-dismissible"));
                var f = this.controlbar = new d.Z(t,e,this.playerContainer.querySelector(".jw-hidden-accessibility"));
                if (f.on(a.xf, (function() {
                    i.off("userInactive", i.focusPlayerElement, i),
                    i.once("userInactive", i.focusPlayerElement, i),
                    i.userActive()
                }
                )),
                f.on("nextShown", (function(t) {
                    this.trigger("nextShown", t)
                }
                ), this),
                f.on("adjustVolume", C, this),
                e.get("nextUpDisplay") && !f.nextUpToolTip) {
                    var j = new y(e,t,this.playerContainer);
                    j.on("all", this.trigger, this),
                    j.setup(this.context),
                    f.nextUpToolTip = j,
                    this.div.appendChild(j.element())
                }
                this.div.appendChild(f.element());
                var m = e.get("localization")
                  , v = this.settingsMenu = new R(t,e.player,this.controlbar,m)
                  , b = null;
                v.on("menuVisibility", (function(n) {
                    var o = n.visible
                      , r = n.evt
                      , s = e.get("state")
                      , l = {
                        reason: "settingsInteraction"
                    }
                      , c = i.controlbar.elements.settingsButton
                      , u = "keydown" === (r && r.sourceEvent || r || {}).type
                      , d = o || u ? 0 : W;
                    i.userActive(d),
                    (0,
                    F.i)(e.get("containerWidth")) < 2 && (o && s === a.r0 ? t.pause(l) : o || s !== a._5 || b !== a.r0 || t.play(l)),
                    b = s,
                    !o && u && c ? c.element().focus() : r && i.focusPlayerElement()
                }
                )),
                v.on("captionStylesOpened", (function() {
                    return i.trigger("captionStylesOpened")
                }
                )),
                f.on("settingsInteraction", (function(t, e, i) {
                    if (e)
                        return v.defaultChild.toggle(i, !0);
                    v.children[t].toggle(i)
                }
                )),
                o.OS.mobile ? this.div.appendChild(v.el) : (this.playerContainer.setAttribute("aria-describedby", "jw-shortcuts-tooltip-explanation"),
                this.div.insertBefore(v.el, f.element()));
                var k = function(e) {
                    if (e.get("autostartMuted")) {
                        var n = function() {
                            return i.unmuteAutoplay(t, e)
                        }
                          , a = function(t, e) {
                            e || n()
                        };
                        o.OS.mobile && (i.mute = (0,
                        u.Z)("jw-autostart-mute jw-off", n, e.get("localization").unmute, [(0,
                        g.W)("volume-0")]),
                        i.mute.show(),
                        i.div.appendChild(i.mute.element())),
                        f.renderVolume(!0, e.get("volume")),
                        (0,
                        l.cn)(i.playerContainer, "jw-flag-autostart"),
                        e.on("change:autostartFailed", n, i),
                        e.on("change:autostartMuted change:mute", a, i),
                        i.muteChangeCallback = a,
                        i.unmuteCallback = n
                    }
                };
                function x(i) {
                    var n = 0
                      , o = e.get("duration")
                      , a = e.get("position");
                    if ("DVR" === e.get("streamType")) {
                        var r = e.get("dvrSeekLimit");
                        n = o,
                        o = Math.max(a, -r)
                    }
                    var l = (0,
                    s.v)(a + i, n, o);
                    t.seek(l, {
                        reason: "interaction"
                    })
                }
                function C(i) {
                    var n = (0,
                    s.v)(e.get("volume") + i, 0, 100);
                    t.setVolume(n)
                }
                e.once("change:autostartMuted", k),
                k(e);
                var M = function(n) {
                    if (n.ctrlKey || n.metaKey)
                        return !0;
                    var o = !i.settingsMenu || !i.settingsMenu.visible
                      , a = !0 === e.get("enableShortcuts")
                      , r = i.instreamState;
                    if (a || -1 !== Q.indexOf(n.keyCode)) {
                        switch (n.keyCode) {
                        case 27:
                            if (e.get("fullscreen"))
                                t.setFullscreen(!1),
                                i.playerContainer.blur(),
                                i.userInactive();
                            else {
                                var s = t.getPlugin("related");
                                s && s.close({
                                    type: "escape"
                                })
                            }
                            i.rightClickMenu.el && i.rightClickMenu.hideMenuHandler(),
                            e.get("displayStats") && e.set("displayStats", !1),
                            i.shortcutsTooltip && i.shortcutsTooltip.close();
                            break;
                        case 13:
                        case 32:
                            if (document.activeElement.classList.contains("jw-switch") && 13 === n.keyCode)
                                return !0;
                            t.playToggle({
                                reason: "interaction"
                            });
                            break;
                        case 37:
                            !r && o && x(-5);
                            break;
                        case 39:
                            !r && o && x(5);
                            break;
                        case 38:
                            o && C(10);
                            break;
                        case 40:
                            o && C(-10);
                            break;
                        case 67:
                            var l = t.getCaptionsList().length;
                            if (l) {
                                var c = (t.getCurrentCaptions() + 1) % l;
                                t.setCurrentCaptions(c)
                            }
                            break;
                        case 77:
                            t.setMute();
                            break;
                        case 70:
                            t.setFullscreen();
                            break;
                        case 191:
                            i.shortcutsTooltip && i.shortcutsTooltip.toggleVisibility();
                            break;
                        default:
                            if (n.keyCode >= 48 && n.keyCode <= 59) {
                                var u = (n.keyCode - 48) / 10 * e.get("duration");
                                t.seek(u, {
                                    reason: "interaction"
                                })
                            }
                        }
                        return /13|32|37|38|39|40/.test(n.keyCode) ? (n.preventDefault(),
                        !1) : void 0
                    }
                };
                this.playerContainer.addEventListener("keydown", M),
                this.keydownCallback = M;
                var T = function(t) {
                    switch (t.keyCode) {
                    case 9:
                        var e = i.playerContainer.contains(t.target) ? 0 : W;
                        i.userActive(e);
                        break;
                    case 32:
                        t.preventDefault()
                    }
                };
                this.playerContainer.addEventListener("keyup", T),
                this.keyupCallback = T;
                var _ = function(t) {
                    i.off("userInactive", i.focusPlayerElement, i);
                    var e = t.relatedTarget || document.querySelector(":focus");
                    e && (i.playerContainer.contains(e) || i.userInactive())
                };
                this.playerContainer.addEventListener("blur", _, !0),
                this.blurCallback = _;
                var S = function t() {
                    "jw-shortcuts-tooltip-explanation" === i.playerContainer.getAttribute("aria-describedby") && i.playerContainer.removeAttribute("aria-describedby"),
                    i.playerContainer.removeEventListener("blur", t, !0)
                };
                this.shortcutsTooltip && (this.playerContainer.addEventListener("blur", S, !0),
                this.onRemoveShortcutsDescription = S),
                this.userActive(),
                this.addControls(),
                this.addBackdrop(),
                e.set("controlsEnabled", !0)
            }
            ,
            r.addControls = function() {
                this.wrapperElement.appendChild(this.div)
            }
            ,
            r.disable = function(t) {
                var e = this.nextUpToolTip
                  , i = this.settingsMenu
                  , n = this.controlbar
                  , o = this.rightClickMenu
                  , a = this.shortcutsTooltip
                  , r = this.playerContainer
                  , s = this.div;
                clearTimeout(this.activeTimeout),
                this.activeTimeout = -1,
                this.off(),
                t.off(null, null, this),
                t.set("controlsEnabled", !1),
                s.parentNode && ((0,
                l.IV)(r, "jw-flag-touch"),
                s.parentNode.removeChild(s)),
                n && n.destroy(),
                o && o.destroy(),
                this.keydownCallback && r.removeEventListener("keydown", this.keydownCallback),
                this.keyupCallback && r.removeEventListener("keyup", this.keyupCallback),
                this.blurCallback && r.removeEventListener("blur", this.blurCallback),
                this.onRemoveShortcutsDescription && r.removeEventListener("blur", this.onRemoveShortcutsDescription),
                this.displayContainer && this.displayContainer.destroy(),
                e && e.destroy(),
                i && i.destroy(),
                t.get("displayStats") && t.set("displayStats", !1),
                a && a.destroy(),
                this.removeBackdrop()
            }
            ,
            r.controlbarHeight = function() {
                return this.dimensions.cbHeight || (this.dimensions.cbHeight = this.controlbar.element().clientHeight),
                this.dimensions.cbHeight
            }
            ,
            r.element = function() {
                return this.div
            }
            ,
            r.resize = function() {
                this.dimensions = {}
            }
            ,
            r.unmuteAutoplay = function(t, e) {
                var i = !e.get("autostartFailed")
                  , n = e.get("mute");
                i ? n = !1 : e.set("playOnViewable", !1),
                this.muteChangeCallback && (e.off("change:autostartMuted change:mute", this.muteChangeCallback),
                this.muteChangeCallback = null),
                this.unmuteCallback && (e.off("change:autostartFailed", this.unmuteCallback),
                this.unmuteCallback = null),
                e.set("autostartFailed", void 0),
                e.set("autostartMuted", void 0),
                t.setMute(n),
                this.controlbar.renderVolume(n, e.get("volume")),
                this.mute && this.mute.hide(),
                (0,
                l.IV)(this.playerContainer, "jw-flag-autostart"),
                this.userActive()
            }
            ,
            r.mouseMove = function(t) {
                var e = this.controlbar.element().contains(t.target)
                  , i = this.controlbar.nextUpToolTip && this.controlbar.nextUpToolTip.element().contains(t.target)
                  , n = this.logo && this.logo.contains(t.target)
                  , o = e || i || n ? 0 : W;
                this.userActive(o)
            }
            ,
            r.userActive = function(t) {
                void 0 === t && (t = W),
                t > 0 ? (this.inactiveTime = (0,
                c.z)() + t,
                -1 === this.activeTimeout && (this.activeTimeout = setTimeout(this.userInactiveTimeout, t))) : this.resetActiveTimeout(),
                this.showing || ((0,
                l.IV)(this.playerContainer, "jw-flag-user-inactive"),
                this.showing = !0,
                this.trigger("userActive"))
            }
            ,
            r.userInactive = function() {
                clearTimeout(this.activeTimeout),
                this.activeTimeout = -1,
                this.settingsMenu.visible || (this.inactiveTime = 0,
                this.showing = !1,
                (0,
                l.cn)(this.playerContainer, "jw-flag-user-inactive"),
                this.trigger("userInactive"))
            }
            ,
            r.addBackdrop = function() {
                var t = this.instreamState ? this.div : this.wrapperElement.querySelector(".jw-captions");
                this.wrapperElement.insertBefore(this.backdrop, t)
            }
            ,
            r.removeBackdrop = function() {
                var t = this.backdrop.parentNode;
                t && t.removeChild(this.backdrop)
            }
            ,
            r.setupInstream = function() {
                this.instreamState = !0,
                this.userActive(),
                this.addBackdrop(),
                this.settingsMenu && this.settingsMenu.close(),
                (0,
                l.IV)(this.playerContainer, "jw-flag-autostart"),
                this.controlbar.elements.time.element().setAttribute("tabindex", "-1")
            }
            ,
            r.destroyInstream = function(t) {
                this.instreamState = null,
                this.addBackdrop(),
                t.get("autostartMuted") && (0,
                l.cn)(this.playerContainer, "jw-flag-autostart"),
                this.controlbar.elements.time.element().setAttribute("tabindex", "0")
            }
            ,
            n
        }(r.ZP)
          , $ = i(8711)
          , K = i.n($)
          , J = i(1983)
          , X = i.n(J)
          , G = i(1277)
          , tt = i.n(G)
          , et = i(7928)
          , it = i.n(et)
          , nt = i(5484)
          , ot = i.n(nt)
          , at = i(6598)
          , rt = i.n(at)
          , st = i(8053)
          , lt = i.n(st)
          , ct = i(1666)
          , ut = i.n(ct)
          , dt = i(4375)
          , pt = i.n(dt)
          , ht = {
            label: "facebook",
            src: "http://www.facebook.com/sharer/sharer.php?u=[URL]",
            svg: K(),
            jwsource: "fb"
        }
          , wt = {
            label: "twitter",
            src: "http://twitter.com/intent/tweet?url=[URL]",
            svg: rt(),
            jwsource: "twi"
        }
          , ft = {
            label: "linkedin",
            src: "https://www.linkedin.com/cws/share?url=[URL]",
            svg: X(),
            jwsource: "lkn"
        }
          , gt = {
            label: "pinterest",
            src: "http://pinterest.com/pin/create/button/?url=[URL]",
            svg: tt(),
            jwsource: "pin"
        }
          , jt = {
            label: "reddit",
            src: "http://www.reddit.com/submit?url=[URL]",
            svg: it(),
            jwsource: "rdt"
        }
          , mt = {
            label: "tumblr",
            src: "http://tumblr.com/widgets/share/tool?canonicalUrl=[URL]",
            svg: ot(),
            jwsource: "tbr"
        }
          , vt = {
            label: "email",
            src: "mailto:?body=[URL]",
            svg: lt(),
            jwsource: "em"
        }
          , bt = {
            label: "link",
            svg: ut(),
            jwsource: "cl"
        }
          , yt = {
            label: "embed",
            svg: pt(),
            jwsource: "ceb"
        }
          , kt = i(549)
          , xt = i.n(kt)
          , Ct = !1
          , Mt = function(t, e, o, a) {
            (0,
            h.l7)(this, r.ZP);
            var s, c, u = this, d = [ht, wt, vt];
            function p(t, e) {
                var i = t.indexOf("MEDIAID");
                return i > 0 && e ? t.replace("MEDIAID", e) : -1 === i ? t : void 0
            }
            function w(t) {
                o.trigger("settingsInteraction", "sharing", !1, t)
            }
            function f(t, e) {
                var i = /([?&]jwsource)=?[^&]*/;
                if (i.test(t))
                    return t.replace(i, "$1=" + e);
                var n = -1 === t.indexOf("?") ? "?" : "&";
                return "" + t + n + "jwsource=" + e
            }
            function g(t) {
                u.trigger("click", {
                    method: t
                })
            }
            return function() {
                if (Array.isArray(e.sites)) {
                    var i = [];
                    (0,
                    h.S6)(e.sites, (function(t) {
                        (0,
                        h.HD)(t) && n[t] ? i.push(n[t]) : (0,
                        h.Kn)(t) && i.push(t)
                    }
                    )),
                    d = i
                }
                t.addButton(xt(), a, w, "share", "jw-settings-sharing");
                var r = o.el.querySelector(".jw-settings-sharing");
                r.setAttribute("aria-controls", "jw-settings-submenu-sharing"),
                r.setAttribute("role", "button")
            }(),
            this.getShareMethods = function() {
                return function() {
                    var i, n, o = t.getPlaylistItem(), a = d.filter((function(t) {
                        return "link" === t.label
                    }
                    ))[0];
                    i = o.mediaid,
                    n = window.location.toString(),
                    window.top !== window && (n = document.referrer),
                    e.link && (n = p(e.link, i) || n),
                    s = n,
                    a ? -1 === a.src.indexOf(s) && (a.src = s) : d.push((0,
                    h.l7)({
                        src: f(s, bt.jwsource)
                    }, bt));
                    var r = d.filter((function(t) {
                        return "embed" === t.label
                    }
                    ));
                    c = function(t) {
                        var i = null;
                        return e.code && (i = p(e.code, t) || i),
                        i
                    }(o.mediaid) || e.code,
                    r[0] ? r[0].src = decodeURIComponent(c) : e.code && d.push((0,
                    h.l7)({
                        src: decodeURIComponent(c)
                    }, yt))
                }(),
                d
            }
            ,
            this.getHeading = function() {
                return a
            }
            ,
            this.onSubmenuToggle = function(t, e) {
                void 0 === e && (e = "interaction"),
                t && !Ct && (Ct = !0,
                i(3484)),
                u.trigger(t ? "open" : "close", {
                    visible: t,
                    method: e
                })
            }
            ,
            this.action = function(e) {
                var i = d[e].label;
                "embed" !== i && "link" !== i ? function(e) {
                    var i = e.src;
                    if ((0,
                    h.mf)(i))
                        i(s);
                    else if (null != i) {
                        var n = encodeURIComponent(f(s, e.jwsource || "share"))
                          , o = i.replace(/\[URL\]/gi, n);
                        i === o && (o = i + n),
                        t.pause({
                            reason: "sharing"
                        }),
                        (0,
                        l.nG)(o, "_blank", {
                            rel: "noreferrer"
                        }),
                        window.focus()
                    }
                    g(e.label)
                }(d[e]) : g(i)
            }
            ,
            this.open = function() {
                o.trigger("sharingApi", !0)
            }
            ,
            this.close = function() {
                o.trigger("sharingApi", !1)
            }
            ,
            this
        }
          , Tt = function(t, e) {
            var i = (0,
            l.az)('<div class="jw-skip jw-reset" tabindex="0" role="button"><span class="jw-text jw-skiptext jw-reset"></span><span class="jw-icon jw-icon-inline jw-skip-icon jw-reset"></span></div>');
            i.querySelector(".jw-icon").appendChild((0,
            g.W)("next")),
            this.el = i,
            this.skiptext = this.el.querySelector(".jw-skiptext"),
            this.skipUI = (0,
            b.Z)(this.el, this.skipAd, this),
            this.model = t,
            this.skipMessage = t.get("skipText") || "",
            this.skipMessageCountdown = t.get("skipMessage") || "",
            this.waitTime = (0,
            j.U5)(t.get("skipOffset")),
            t.change("duration", (function(i, n) {
                n && (this.waitTime || (this.waitTime = (0,
                j.U5)(i.get("skipOffset"), n)),
                this.el.parentNode !== e && this.waitTime + 2 < n && (t.change("position", (function(t, e) {
                    var i = this.waitTime - (e || 0);
                    i > 0 ? this.updateMessage(this.skipMessageCountdown.replace(/(\b)xx(s?\b)/gi, "$1" + Math.ceil(i) + "$2")) : null !== this.waitTime && (this.updateMessage(this.skipMessage),
                    this.skippable = !0,
                    (0,
                    l.cn)(this.el, "jw-skippable"))
                }
                ), this),
                e.appendChild(this.el)))
            }
            ), this)
        };
        (0,
        h.l7)(Tt.prototype, r.ZP, {
            updateMessage: function(t) {
                (0,
                l.nh)(this.skiptext, t),
                this.el.setAttribute("aria-label", t)
            },
            skipAd: function() {
                this.skippable && (this.skipUI.off(),
                this.trigger(a.k3))
            },
            destroy: function() {
                this.model.off(null, null, this),
                this.skipUI && this.skipUI.destroy(),
                this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el)
            }
        });
        var _t = Tt
          , St = function(t, e, i) {
            this.api = t,
            this.playerElement = e,
            this.wrapperElement = i
        };
        (0,
        h.l7)(St.prototype, {
            setup: function(t) {
                var e = this;
                this.element = (0,
                l.az)(function(t) {
                    return '<div class="jw-dismiss-icon jw-icon jw-reset" aria-label=' + t + ' tabindex="0"></div>'
                }(t)),
                this.element.appendChild((0,
                g.W)("close")),
                this.ui = (0,
                b.Z)(this.element, (function() {
                    e.api.remove()
                }
                ), this),
                this.wrapperElement.insertBefore(this.element, this.wrapperElement.firstChild),
                (0,
                l.cn)(this.playerElement, "jw-flag-top")
            },
            destroy: function() {
                this.element && (this.ui.destroy(),
                this.wrapperElement.removeChild(this.element),
                this.element = null)
            }
        });
        var Et = St
          , At = function(t) {
            var e = t.label
              , i = t.src
              , n = t.options
              , o = t.displayText
              , a = t.svg
              , r = void 0 === a ? "" : a
              , s = t.icon
              , l = void 0 === s ? "" : s
              , c = l ? '<img src="' + l + '" class="jw-svg-icon"/>' : r;
            return "link" === e || "embed" === e ? '<div class="jw-reset jw-settings-content-item jw-sharing-copy"><button class="jw-reset jw-sharing-link" aria-checked="false" type="button" role="button">' + c + " " + (o || e) + '</button><textarea readonly="true" class="jw-reset jw-sharing-textarea">' + i + '</textarea><div class="jw-reset jw-tooltip jw-tooltip-sharing-' + (o || e) + '"><div class="jw-text">' + n.copyText + "</div></div></div>" : '<button class="jw-reset jw-settings-content-item jw-sharing-link" aria-checked="false" type="button" role="menuitem">' + c + " " + (o || e) + "</button>"
        };
        function Pt(t, e) {
            return Pt = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Pt(t, e)
        }
        var zt = function(t) {
            var e, i;
            function n(e, i, n) {
                var o;
                return void 0 === n && (n = At),
                (o = t.call(this, e, i, n) || this).content = e,
                o.el && e.label ? (o.el.setAttribute("aria-label", e.label),
                o.el.setAttribute("role", "button"),
                o.el.setAttribute("tabindex", "0"),
                o) : function(t) {
                    if (void 0 === t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(o)
            }
            i = t,
            (e = n).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            Pt(e, i);
            var o = n.prototype;
            return o.activate = function() {
                if ("embed" === this.content.label || "link" === this.content.label) {
                    var t = this.el.querySelector(".jw-sharing-textarea");
                    if (t.select(),
                    document.execCommand("copy")) {
                        var e = t.nextSibling;
                        (0,
                        l.cn)(e, "jw-open"),
                        setTimeout((function() {
                            (0,
                            l.IV)(e, "jw-open")
                        }
                        ), 1e3)
                    } else
                        window.prompt("Copy the text below", this.content.src);
                    t.blur()
                }
            }
            ,
            o.destroy = function() {
                this.ui.destroy()
            }
            ,
            n
        }(P.s);
        function It(t, e) {
            return It = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            It(t, e)
        }
        var Lt = function(t) {
            var e, i;
            function n() {
                return t.apply(this, arguments) || this
            }
            i = t,
            (e = n).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            It(e, i);
            var o = n.prototype;
            return o.createCategoryButton = function() {
                return "sharing" === this.name && (this.icon = xt()),
                t.prototype.createCategoryButton.call(this, this.title)
            }
            ,
            o.createItems = function(e, i, n, o) {
                return "sharing" === this.name && (o = zt),
                t.prototype.createItems.apply(this, [e, i, n, o])
            }
            ,
            n
        }(A.Z);
        function Bt(t, e) {
            return Bt = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Bt(t, e)
        }
        var Ot = function(t) {
            var e, i;
            function n(e, i) {
                var n;
                return (n = t.call(this, e, i) || this).playerContainer = i,
                n.sharing = null,
                n.sharingApi = !1,
                n.dismissButton = null,
                n.skipButton = null,
                n
            }
            i = t,
            (e = n).prototype = Object.create(i.prototype),
            e.prototype.constructor = e,
            Bt(e, i);
            var o = n.prototype;
            return o.disable = function(e) {
                t.prototype.disable.call(this, e),
                this.dismissButton && (this.dismissButton.destroy(),
                this.dismissButton = null)
            }
            ,
            o.enable = function(e, i) {
                var n = this;
                t.prototype.enable.call(this, e, i),
                i.change("instream", (function() {
                    n._destroySkipButton()
                }
                )),
                i.change("skipButton", (function(t, i) {
                    n._destroySkipButton(),
                    i && (n.skipButton = new _t(t,n.div),
                    n.skipButton.on(a.k3, (function() {
                        t.set("skipButton", !1),
                        e.skipAd()
                    }
                    )),
                    n.controlbar.adSkipButton = n.skipButton)
                }
                ));
                var o = i.get("localization")
                  , r = i.get("advertising");
                r && r.outstream && r.dismissible && (this.dismissButton = new Et(e,this.playerContainer,this.playerContainer.querySelector(".jw-top")),
                this.dismissButton.setup(o.close));
                var s = i.get("sharing");
                if (!this.sharing && s) {
                    var l = this.controlbar
                      , c = this.settingsMenu
                      , u = o.sharing;
                    this.sharing = new Mt(e,s,l,u.heading),
                    e.addPlugin("sharing", this.sharing),
                    i.change("playlistItem", (function() {
                        var t = n.sharing.getShareMethods().map((function(t) {
                            var e = u[t.label];
                            return e && (t.displayText = e),
                            t
                        }
                        ));
                        c.removeMenu("sharing");
                        var e = new Lt("sharing",o.sharing.heading,c,o)
                          , i = e.open
                          , a = e.close
                          , r = o.sharing.copied;
                        e.open = function(t) {
                            e.visible || n._onSharingActive(!0),
                            i(t)
                        }
                        ,
                        e.close = function(t) {
                            e.visible && n._onSharingActive(!1),
                            a(t)
                        }
                        ,
                        e.setMenuItems(e.createItems(t, n.sharing.action, {
                            copyText: r
                        })),
                        e.el.classList.add("jw-sharing-menu")
                    }
                    )),
                    this._addSharingApiEvent(l, c),
                    this.rightClickMenu.enableSharing(this.sharing.open)
                }
            }
            ,
            o._destroySkipButton = function() {
                this.skipButton && (this.skipButton.destroy(),
                this.skipButton = null,
                this.controlbar.adSkipButton = null)
            }
            ,
            o._addSharingApiEvent = function(t, e) {
                var i = this;
                t.on("sharingApi", (function(t) {
                    var n = e.children.sharing;
                    n && (i.sharingApi = !0,
                    t && !n.visible ? (e.children.sharing.open(),
                    i.sharing.onSubmenuToggle(!0, "api")) : !t && n.visible && (e.close(),
                    i.sharing.onSubmenuToggle(!1, "api")))
                }
                ))
            }
            ,
            o._onSharingActive = function(t) {
                this.sharingApi ? this.sharingApi = !1 : this.sharing.onSubmenuToggle(t)
            }
            ,
            n
        }(Y)
    },
    5185: function(t, e, i) {
        "use strict";
        var n = i(8081)
          , o = i.n(n)
          , a = i(3645)
          , r = i.n(a)()(o());
        r.push([t.id, '@font-face{font-family: haunytb;src: url(data:font/opentype;charset=utf-8;base64,AAEAAAATAQAABAAwRkZUTViEk/oAAAE8AAAAHEdERUYFdAO8AAABWAAAAERHUE9TLB8NDgAAAZwAAAZmR1NVQqfrm7kAAAgEAAACok9TLzJrg4C7AAAKqAAAAGBjbWFwAcNB5wAACwgAAAPmY3Z0IAsQCc4AAA7wAAAAKGZwZ21TtC nAAAPGAAAAmVnYXNwAAAAEAAAEYAAAAAIZ2x5ZnfrNZcAABGIAAEXzGhlYWQAIgxyAAEpVAAAADZoaGVhEakHVQABKYwAAAAkaG10eGBHf3MAASmwAAAFsGxvY2FuyCWwAAEvYAAAAtptYXhwAosBzgABMjwAAAAgbmFtZSosivgAATJcAAACBXBvc3QpBlKHAAE0ZAAABrNwcmVwP3pTiQABOxgAAAEDd2ViZqx0UD8AATwcAAAABgAAAAEAAAAAyYlvMQAAAADClcfWAAAAAMxlXPIAAQAAAA4AAAA8AAAAAAACAAcAAQAIAAEACQAJAAIACgB AAEAfwCBAAIAggFOAAEBTwFPAAIBUAFrAAEABAAAAAIAAAABAAAACgAwAD4AAiAgICAADmxhdG4AGgAEAAAAAP//AAEAAAAEAAAAAP//AAEAAAABa2VybgAIAAAAAQAAAAEABAACAAAAAgAKAMQAAQCqAAQAAAAGABYAVACCAJQAngCkAA8Ao/ aAKX/mgCm/5oAp//NAKj/mgCr/2YArf9mAK7/mgCvAB8AsP/hALEADAC1/5oAuf aAL//wwDP/9kACwCj/64Apf uAKb/rgCn/64AqP uAKv/rgCt/64Arv uALEACAC3/4UAuf uAAQAp/ FAK3/ZgC5/2YAv//DAAIAuf9mAL//hQABAUX/1wABAUb/1wABAAYAOAA6ADsAPQFFAUYAAgUoAAQAAAOUBBAADwAeAAD/1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/mgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP72/vYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/XAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7h/uEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/XAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/1//X/9cAAAAAAAAAAAAAAAAAAAAAAAAAAP/X/9cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8z/zMAAAAAAAD/hf8z/zP/rv FAAAAAAAAAAD/ZgAA/4X/XP8z/zP/M//D/zP/hQAAAAAAAAAAAAAAAP8z/zMAAAAAAAD/hf u/67/rgAAAAAAAAAAAAAAAAAA/8P/M/9cAAD/XP/X/1z/rgAAAAAAAAAAAAAAAP8z/zMAAAAAAAD/1/9x/3H/rgAAAAAAAAAAAAAAAAAAAAD/M/9cAAD/M//X/zP/rgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKf F/4UAAAAAAAD/1wAAAAAAAABSAAAAEABSAFIAAAAAAFIAAAAAAAAAAAAAAAAAAAAAAAAAKQAQAAAAAP9c/1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP F/4UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/XP8z/zMAAAAAAAAAAP u/1wAAP uAAAAAP8z/64AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/XP9c/1wAAAAAAAAAAAAA/4UAAAAAAAAAAP9c/64AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8K/woAAAAAAAD/M/9c/1wAAAAAAAAAAP FAAAAAAAAAAD/XP8zAAD/M/ u/zP/XP9c/zMAAAAAAAAAAP9c/1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAFAAlACUACwAqACoAAQAwADAADAA0ADQAAgA2ADYAAwA4ADgABAA6ADoABQA7ADsABgA9AD0ADQBKAEoABwBWAFYACABaAFoACQBbAFsACgBdAF0ADgCDAIgACwCgAKAADQDAAMAADgDCAMIADgDKAMoADADSANIADQACAC4AEAAQAAIAEQARAAcAEgASAAMAHgAeAAgAHwAfAAkAJQAlABMAOAA4AAQAOgA6AAUAOwA7AAYAPQA9ABEARQBFABQARwBHABUASQBJABYASgBKABwATQBNABcAUQBRAA0AUgBSAB0AUwBTABgAVABUABoAVQBVABsAVgBWAAoAVwBXABAAWABYAAEAWQBZABkAWgBaAA4AWwBbAAsAXABcAA8AXQBdABIAgwCJABMAoACgABEAogCiABwAowCpABQAqgCqABUAqwCuABYArwCyABcAtAC0AB0AtQC5ABgAuwC7ABgAvAC/ABkAwADAABIAwgDCABIAzQDNABgAzwDPABAA0gDSABEBRgFGAAwBaAFpABwAAQAaACUAKgAwADQANgA4ADoAOwA9AEoAVgBaAFsAXQCDAIQAhQCGAIcAiACgAMAAwgDKANIBRgAAAAEAAAAKADoAkAACICAgIAAObGF0bgAeAAQAAAAA//8AAwABAAMABQAEAAAAAP//AAQAAAACAAQABgAHYWFsdAAsZnJhYwAyZnJhYwA4b3JkbgA b3JkbgBEc3VwcwBKc3VwcwBQAAAAAQAAAAAAAQACAAAAAQABAAAAAQAEAAAAAQADAAAAAQAGAAAAAQAFAAcAEAAYACAAKAAwADgAQAABAAAAAQA4AAQAAAABAEIABAAAAAEA8gABAAAAAQGiAAEAAAABAawAAQAAAAEBtgABAAAAAQHAAAIACgACAWoBawABAAIARQBTAAEArgADAAwAUACOAAYADgAYACIALAA0ADwBTwAEABMAFAAUAU8ABAFSABQAFAFPAAQBXQAUABQACQADABMAFAAJAAMBUgAUAAkAAwFdABQABgAOABYAHgAmAC4ANgCAAAMAEwAWAIAAAwFSABYAgAADAV0AFgB/AAMAEwAYAH8AAwFSABgAfwADAV0AGAADAAgAEAAYAIEAAwATABgAgQADAVIAGACBAAMBXQAYAAEAAwAUABUAFwABAK4AAwAMAFAAjgAGAA4AGAAiACwANAA8AU8ABAATABQAFAFPAAQBUgAUABQBTwAEAV0AFAAUAAkAAwATABQACQADAVIAFAAJAAMBXQAUAAYADgAWAB4AJgAuADYAgAADABMAFgCAAAMBUgAWAIAAAwFdABYAfwADABMAGAB/AAMBUgAYAH8AAwFdABgAAwAIABAAGACBAAMAEwAYAIEAAwFSABgAgQADAV0AGAABAAMAFAAVABcAAgAKAAIBagFrAAEAAgBFAFMAAgAKAAIBagFrAAEAAgBFAFMAAgAKAAIBagFrAAEAAgBFAFMAAgAKAAIBagFrAAEAAgBFAFMAAAADBIUBkAAFAAQFMwTNAAAAmgUzBM0AAALNAGYCQgAAAgsFAgICBAIDAwAAAAMAAAAAAAAAAAAAAABBREJFAEAADfsCBpr mgAACYMCgCAAAf//9wAAA8MGCAAAACAABAAAAAMAAAADAAAAHAABAAAAAAHcAAMAAQAAABwABAHAAAAAbABAAAUALAANAH4A/wEDAREBKQExAUIBUwFhAWkBeAF AZIBoQGwAscCyQLdAwkDIwOpA7wDwB75IBAgFCAaIB4gIiAmIDAgOiBEIKwhEyEiISYhLiICIgYiDyISIhUiGiIeIisiSCJgImUlyuAA wL//wAAAA0AIACgAQIBEAEoATEBQQFSAWABaAF4AX0BkgGgAa8CxgLJAtgDCQMjA6kDvAPAHqAgECATIBggHCAgICYgMCA5IEQgrCETISIhJiEuIgIiBiIPIhEiFSIZIh4iKyJIImAiZCXK4AD7Af////b/5P/D/8H/tf f/5j/if96/27/aP9a/1b/Q/82/yn FP4T/gX92v3B/Tz9Kv0n4kjhMuEw4S3hLOEr4SjhH EX4Q7gp BB4DPgMOAp31bfU99L30rfSN9F30LfNt8a3wPfANucIWcGZwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYCCgAAAAABAAABAAAAAAAAAAAAAAAAAAAAAQACAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgACEAIgAjACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA AD8AQABBAEIAQwBEAEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgBfAGAAYQBiAAAAhwCIAIoAjACUAJkAnwCkAKMApQCnAKYAqACqAKwAqwCtAK4AsACvALEAsgC0ALYAtQC3ALkAuAC9ALwAvgC/AUsAcwBlAGYAagFNAHkAogBxAGwBVQB3AGsBYwCJAJsBYAB0AWQBZQBoAHgBWAFbAVoA5wFhAG0AfQDlAKkAuwCCAGQAbwFfANUBYgFZAG4AfgFOAGMAgwCGAJgAzADNAUMBRAFIAUkBRQFGALoBZgDCANIBUgFTAVABUQFoAWkBTAB6AUcBSgFPAIUAjQCEAI4AiwCQAJEAkgCPAJYAlwAAAJUAnQCeAJwAyQDaAOEAcgDdAN4A3wB7AOIA4ADbAAAAAAPDBggAoACMAJMAlwCYAKQA6gCsAKgAowCkAJwArACwAOkApgB1sAAssAATS7BMUFiwSnZZsAAjPxiwBitYPVlLsExQWH1ZINSwARMuGC2wASwg2rAMKy2wAixLUlhFI1khLbADLGkYILBAUFghsEBZLbAELLAGK1ghIyF6WN0bzVkbS1JYWP0b7VkbIyGwBStYsEZ2WVjdG81ZWVkYLbAFLA1cWi2wBiyxIgGIUFiwIIhcXBuwAFktsAcssSQBiFBYsECIXFwbsABZLbAILBIRIDkvLbAJLCB9sAYrWMQbzVkgsAMlSSMgsAQmSrAAUFiKZYphILAAUFg4GyEhWRuKimEgsABSWDgbISFZWRgtsAossAYrWCEQGxAhWS2wCywg0rAMKy2wDCwgL7AHK1xYICBHI0ZhaiBYIGRiOBshIVkbIVktsA0sEhEgIDkvIIogR4pGYSOKIIojSrAAUFgjsABSWLBAOBshWRsjsABQWLBAZTgbIVlZLbAOLLAGK1g91hghIRsg1opLUlggiiNJILAAVVg4GyEhWRshIVlZLbAPLCMg1iAvsAcrXFgjIFhLUxshsAFZWIqwBCZJI4ojIIpJiiNhOBshISEhWRshISEhIVktsBAsINqwEistsBEsINKwEistsBIsIC wBytcWCAgRyNGYWqKIEcjRiNhamAgWCBkYjgbISFZGyEhWS2wEywgiiCKhyCwAyVKZCOKB7AgUFg8G8BZLbAULLMAQAFAQkIBS7gQAGMAS7gQAGMgiiCKVVggiiCKUlgjYiCwACNCG2IgsAEjQlkgsEBSWLIAIABDY0KyASABQ2NCsCBjsBllHCFZGyEhWS2wFSywAUNjI7AAQ2MjLQAAAAABAAH//wAPAAUAAAAABAAFmgADAAYACQAMAA8AADERIRElCQETIQkFEQQA/GYBXf6jPgK4/qT pAFcAVz 4QFdBZr6ZsMCCgIK 48CCwLC/fYCCv2a/fYEFAAAAAIA5//lAc0GCAALAA8ASACyCQAAK7EDCemyDQIAKwGwEC wANaxBhHpsQYR6bMPBgAIK7EMC mwDC xDwvpsREBK7EPDBESsQkDOTkAsQ0DERKwDDkwMTc0NjMyFhUUBiMiJhMRMxHnRC8vREQvL0QfqFovQkIvL0ZGAQ4Ez/sxAAAAAAIA0QNoAtcGCAADAAcAQACyAAIAK7AEM7QDCQAHBCuwBjIBsAgvsAPWtAIOAB4EK7ACELEHASu0Bg4AHgQrsQkBK7EHAhESsQEEOTkAMDETMwMjATMDI9HAJHcBIcAldwYI/WACoP1gAAAAAAIAWgAABJMGCAAbAB8BTgCyGgAAK7IVFhkzMzOyBwIAK7IICwwzMzOyBAEAK7MDEB4fJBczsQUD6bMGCQoNJBcytAABGgUNK7MCERwdJBczsQAD6bMUFxgbJBcyAbAgL7Aa1rEZDumwGRCxBwErsQgO6bIHCAors0AHBAkrsxYIBwgrsRUO6bIVFgors0AVEwkrsAgQsQsBK7EMDOmxIQErsDYauj8d9WQAFSsKuj8S9SMAFSsKsBoQswIaBxMrswMaBxMrswYaBxMrsBkQswkZCBMrsBYQswoWCxMrsBUQsw0VDBMrsxAVDBMrsxEVDBMrsxQVDBMrsBYQsxcWCxMrsBkQsxgZCBMrsBoQsxsaBxMrsBkQsxwZCBMrsBYQsx0WCxMrsx4WCxMrsBkQsx8ZCBMrA0AQAgMGCQoNEBEUFxgbHB0eHy4uLi4uLi4uLi4uLi4uLi6wQBoAMDETNTMTIzUzEzMDMxMzAzMVIwMzFSMDIxMjAyMTNzMTI1rsO9v0SZ5K/kiiSLzXO8/sUptQ/FaaULr8PPwByZ8BX58Bov5eAaL Xp/ oZ/ NwHJ/jcByZ8BXwAAAwCY/xQEVgbpAC0ANgA/AJQAsikAACuxBgjpsikGCiuzQCkoCSuyJgAAK7IUAgArsRsI6bA0MrIUGwors0AUEgkrshECACsBsEAvsAzWsS4K6bAAINYRsQEN6bAuELEoASuyBhEzMjIytCcOAB4EK7ITGzcyMjKwJxCxOgErsSEK6bFBASuxOicRErAYOQCxGwYREkAKAAEMFxghLjM3PyQXOTAxEzceAxcRLgM1ND4CNzUzFR4BFwcuAScRHgMVFA4CBxUjNS4DExQeAhcRDgEBPgE1NC4CJ5ilBjBJXzdGg2Q OGKFTIdorS HH1xCTItpPTlljVKHVJR0UO0jNkMjUm0BRmJvIztMJwF3LzVjSzIEAnEdRWF8VlCFZT8L0tIOgFxYNVwN/gYhTGSHXFaYe1YQ4tUEQG2NA2YrQTUpDwHBEIL7uSGdZzFNPjETAAAAAAUAQv/lBiEGIwATACcAKwA/AFMAmgCyOwAAK7ArM7FFBOmyBQIAK7ApM7EjBOmyGQEAK7EPBOm0MU87GQ0rsTEE6QGwVC wANa0FA4AHgQrsBQQsR4BK7QKDgAeBCuwChCxLAErtEAOAB4EK7BAELFKASu0Ng4AHgQrsVUBK7EeFBESsw8FKCskFzmxSkARErMpMTsqJBc5ALFPRRESsTYsOTmxIxkRErEKADk5MDETND4CMzIeAhUUDgIjIi4CNxQeAjMyPgI1NC4CIyIOAhMBFwkBND4CMzIeAhUUDgIjIi4CNxQeAjMyPgI1NC4CIyIOAkI3XH1IRn5cODhefUVGfV43gyI6TisrTTojIzpNKytOOiJ/A4NS/IMB1TdcfUhGflw4OF59RUZ9XjeDIzlOKytOOSMjOU4rK045IwTRSHpdMzNdekhIeVwzM1p7SCtKNyEhN0orK0w3ISE3TPsfBggx fMBUEh7XDMzXHtISHhcNDRae0crSTghIThJKytMNyEhN0wAAwBQ/ UFfwYjACoAOwBLAGwAsiAAACuyJgAAK7EwA myEAIAK7FJBekBsEwvsADWsSsL6bArELELASuxPAzpsDwQsUYBK7EVDemxTQErsTwLERKxBjk5ObBGEbQQJjA2GiQXObAVErA1OQCxSTARErYACxUeITZAJBc5MDETND4CPwEuAzU0PgIzMh4CFRQOAgcBNxcHASMnDgMjIi4CNxQeAjMyPgI3AQcOAxMUFh8BNz4DNTQmIyIGUD9riUgSGzUtHDNafUhCdlo1L05iMQFFr3zEAQbZpjNxe4dIWKN9SqgtSmI3OW9kXSn qEorXEov7z4hJA8hRTgiZERIYgGLYJR3Yi8MJUxQWC9KeVYvLVBvQ0ZsXU0l/mDLZ X rtkvVkYpQG6caTdlTC8pP0wlAboxH0FQYAMUO1ovMwoZMzlGL0hVYgAAAAABAMkDaAGJBggAAwAiALIAAgArtAMJAAcEKwGwBC wA9a0Ag4AHgQrsQUBKwAwMRMzAyPJwCV2Bgj9YAABAL7 FAIKBk4AEQAzALIFAgArAbASL7AA1rEJC mwCRCxDQErsAUysQwO6bAGMrETASuxCQARErECEDk5ADAxEzQaAjcXBgIVFBIXByYKAr4TK0g1kVhMTFiRNUgrEwIxfQETARIBCHNG6f4Q/v7 EepGcwEIARMBEgAAAQBC/hQBjQZOABEAMwCyBwIAKwGwEi wANawBjKxEQ7psAcysBEQsQMBK7EMC mxEwErsQwDERKxCg45OQAwMRM2EjU0Aic3FhoCFRQKAgdCWEtLWJE1SCsSEitINf5a6QHw/v4B8OlGc/74/u7 7X19/u7 7f74cwAAAAEA3wMvA98GCAAOACMAsgMCACsBsA8vsALWtAUOAB4EK7EQASuxBQIRErALOQAwMRM3BQMzAyUXBRcHJwcnN98xAQ8NmgwBDjH 6rJ9oKB8tAS6lGUBH/7hZZRN4lzy8lziAAABAIcAHQRmA/wACwBMALIDAQArsAAvsAczsQED6bAFMrIAAQors0AACgkrAbAML7AK1rACMrEJDOmwBDKyCQoKK7NACQcJK7IKCQors0AKAAkrsQ0BKwAwMRM1IREzESEVIREjEYcBoKABn/5hoAG8oAGg/mCg/mEBnwAAAQB3/qABzQDhAAMAIACwAy 0AQkACAQrAbAEL7AA1rQCEQAMBCuxBQErADAxGwEXA3e mOj zQIUNf30AAAAAAEABAGiAagCOQADACIAsAAvsQEG6bEBBukBsAQvsQALK7QDEQAKBCuxBQErADAxEzUhFQQBpAGil5cAAAEAyf/lAa4AywALACkAsgkAACuxAwnpsgkAACuxAwnpAbAML7AA1rEGEemxBhHpsQ0BKwAwMTc0NjMyFhUUBiMiJslDLy9ERC8vQ1ovQkIvL0ZGAAEAJf6 BGoGmgADAA8AsAEvAbAEL7EFASsAMDETARcBJQO h/xA/vwHnj74YgAAAAIATv/lBKAGIwAXAC8ARgCyEwAAK7EfA myBwIAK7ErA kBsDAvsADWsRgK6bAYELEmASuxDgrpsTEBK7EmGBESshMHKzk5OQCxKx8RErEOADk5MDETND4EMzIeBBUUAg4BIyIuAQI3HgUzMj4ENzYuAiMiDgJOGjxYe55iYp57WDsbSo3Pg4XNjUqsAhAlPFRuSEhuVDslEQICJVqTbW2TWiUDAlC0sqR9Skp9pLK0UI/ 4 OOjuMBHYc1iouFZkBAZoWLiDdS38uNjcvfAAABAUQAAALwBggABQAhALIEAAArsgECACuxAAPpAbAGL7AE1rEDCumxBwErADAxATchESMRAURaAVKsBWig fgFaAAAAAEAVAAABDsGIwAeAFIAsgAAACuxHAPpshQCACuxCQPpsgkUCiuzQAkPCSsBsB8vsA/WsQ4K6bAOELEEASuxHQrpsBkysSABK7EEDhESsRQcOTkAsQkcERKxBBk5OTAxMwE ATU0LgIjIg4CByM AzMyHgIVFAcBIRVUAtMvOTFUbkBGclAtAqwCSn sZmCwhk90/ekCiwNWN39MP29QLTFUdUNksH9KRHmoZL6I/YygAAAAAAEAdf/lBB8GIwAyAIcAsi4AACuxBgPpsgYuCiuzQAYACSuyHgIAK7EXA myFx4KK7NAFxsJK7QPDi4eDSuxDwPpAbAzL7Ab1rEaCumwACDWEbEBC mwGhCxCwErsSkK6bAUINYRsSMK6bE0ASuxFBoRErQGDh4mLiQXOQCxDgYRErELKTk5sA8RsCY5sBcSsCM5MDETMx4DMzI AjU0Jgc1PgM1NCYjIgYHIz4BMzIeAhUUBgceARUUDgIjIi4CdagCM1BoPD9vUi27jT1vVDGTe3V/CqoS279conVDaF5xbEyBsGNepnpKAZE7YkgnMVRxP5OSBKACGTdeSnuTiW 44D5unF5mvS8z0XdmqHlEPnCeAAIADAAABI0GXgAJAA0ARACyCAAAK7IBAgArtAAKCAENK7ADM7EAA mwBTIBsA4vsAjWsAsysQcK6bACMrEPASuxBwgRErABOQCxAQoRErAMOTAxNwEzETMVIxUjNSUhESMMA78Evr6s/hYB6gT6BWT7PKD6 qACugAAAAABACv/5QQ7BggAIwB5ALIhAAArsQQD6bISAgArsRUD6bQWDiESDSuxFgfpAbAkL7AJ1rEcCumxJQErsDYauj0v7TgAFSsKsBIusBYusBIQsRUM Q6wFhCxEQz5ALARLgGzERIVFi4uLi6wQBoBsRwJERKxExQ5OQCxDgQRErIAARw5OTkwMT8BHgEzMj4CNTQuAiMiBgcTIRUhAzcyHgIVFA4CIyImK4k1s25Wjmg5O2iOUFCTQuACZv4TZVxzvIhLWJnPd5rx mJeeTxqkVRSimQ3NysC46D twhUkcVxeciUUpIAAAAAAgBa/ UEgwYjABoALgBVALIWAAArsSAD6bIEAgArsgwBACuxKgPpAbAvL7AA1rEbCumwGxCxJQErsREK6bEwASuxJRsRErQEBQwWBiQXOQCxKiARErERADk5sQQMERKwBTkwMRM0NjcBFwEXPgE3NjMyHgIVFA4CIyIuAjcUHgIzMj4CNTQuAiMiDgJaUjsCAIH nAQQIREhJGi3h05UkcNsb8GRVKw3Y4NMTIJjNzljg0lMg2M3AfZqt1ECu2D IAQGBwQGUom7aG/AklJUkMBpTIVjOTljhUxMgGE3N2GBAAAAAQBI/ UE2wYIAAUAGgCyBQAAK7IDAgArsQID6QGwBi xBwErADAxNwEhNSEBSANs/LQEc/v0NQUzoPndAAAAAAMAoP/lBE4GIwAfADMARwCAALIbAAArsSUD6bILAgArsUMD6bQ5LxsLDSuxOQXpAbBIL7AA1rEgCumwIBCwNCDWEbEGDOmwBi xNAzpsCAQsSoBK7EWCumwPiDWEbEQDemxSQErsT40ERK1CxMbJS8DJBc5ALEvJRESsRYAOTmwORGxEwM5ObBDErEQBjk5MDETNDY3LgE1ND4CMzIeAhUUBgceARUUDgIjIi4CNxQeAjMyPgI1NC4CIyIOAhMUHgIzMj4CNTQuAiMiDgKgdG9aYkN1nlpannREYltvdUh/rGRkrX9HrC9QbEA/bVAvL1BtPz9tUC8eLEdiODdiSCsrSGI3N2NHLAGwd8sxM7hnXJ5yQkJynlxmuTMxy3dkqHtERHuoYj1tUC8vUG09PW1QLy9QbAKNN2NJLCxJYzc3YEopKUpgAAACAFz/5QSFBiMAGAAsAF0Asg4AACuyBQIAK7EoA m0FB4OBQ0rsRQD6QGwLS wANaxGQrpsBkQsSMBK7EKCumxLgErsSMZERK0DgUPFBAkFzkAsRQOERKwDzmwHhGxEBE5ObAoErEKADk5MDETND4CMzIeAhUUBgcBJwEnDgEjIi4CNxQeAjMyPgI1NC4CIyIOAlxUksJtbcKRVFQ7/gCBAWQEH0MjareHTKw3Y4NMSoJjOTljgkpMg2M3BBRvv49SUo /b2i2VP1DWAHqBAoKT4y6b0yBYDg4YIFMSoJjOTljgwACAMn/5QGuA90ACwAXAC8AsgkAACuxAwnpsg8BACuxFQnpAbAYL7AA1rAMMrEGEemwEjKxBhHpsRkBKwAwMTc0NjMyFhUUBiMiJhE0NjMyFhUUBiMiJslDLy9ERC8vQ0MvL0RELy9DWi9CQi8vRkYDQi9BQS8vRkUAAAAAAgB7/qAB4QPdAAMADwAmALIHAQArsQ0J6QGwEC wBNaxChHpsREBK7EKBBESsQECOTkAMDEbARcDEzQ2MzIWFRQGIyIme76Y6BNELy9DQy8vRP7NAhQ1/fQEzS9BQS8vRkUAAAEAhwAdBGYD/AAGABEAsgIBACsBsAcvsQgBKwAwMRM1ARUJARWHA9/9DwLxAcWPAaiu/r7 v64AAgCHAR0EZgL8AAMABwAaALAAL7EBA mwBC xBQPpAbAIL7EJASsAMDETNSEVATUhFYcD3/whA98BHZ fAT goAAAAAABAIcAHQRmA/wABgARALIEAQArAbAHL7EIASsAMDE3NQkBNQEVhwLy/Q4D3x2uAUEBQq7 WI8AAAIAf//lA2gGIwA5AEUA2wCyQwAAK7E9CemyBQIAK7EzA m0IRZDBQ0rsSED6bIWIQors0AWGwkrAbBGL7AA1rE2C mwJiDWEbETC mwNhCxOgErsUAR6bBAELEwASuxCgvpsBsg1hGxHA3psUcBK7A2GroSssLLABUrCg6wKxCwLcCxEAz5sA7Asw8QDhMrsCsQsywrLRMrsiwrLSCKIIojBg4REjmyDxAOERI5ALUQKw4PLC0uLi4uLi4BtRArDg8sLS4uLi4uLrBAGgGxQDoRErMFFiEzJBc5ALEzFhESswomODkkFzkwMRM0PgIzMh4CFRQGBw4BBw4BFRQWMzI AjUzFg4CIyIuAjU0PgI3PgM1NCYjIgYVFBcjEzQ2MzIWFRQGIyImfz1niUxOh2I5Nzc1mERCW2JGKz8nFaUCL1p9SUh7WDMrTmQ7MV9HLndcWHEMqvZELy9DQy8vRATFUIFcMTpih05MkzMvNBQSSk5GXiE3RidKgWA4NFp5R0ZkSjMTDh8xTj9ed3VWMTH8Ai9CQi8vRkYAAAACAEr/5QYfBiMATABcAOIAskgAACuxQAXpsgUCACuxNgXptBdQSAUNK7AsM7EXBemwETKyUBcKK7NAUCUJK7AmMrQhWEgFDSuxIQTpAbBdL7AA1rE7DumwOxCxHAErsU0O6bBNELExASuxCw7psV4BK7A2Gro WPGJABUrCrAlLg6wVcAFsSYE Q6wJ8CwVRCzJFUlEyuyJFUlIIogiiMGDhESOQCyJCdVLi4uAbQkJSYnVS4uLi4usEAaAbExTRESQAkFFyEUKTZAQ0gkFzmwCxGwMjkAsRdAERKwQjmwUBGwFDmwWBKzCxwAOyQXOTAxEzQSNiQzMhYXHgEVFAYHDgEnLgEnDgEjIi4CNTQ AjMyFhc3MwMOARQWMzI Ajc2LgIjIg4CFRQeAjMgNxcOAyMiJCYCJRQWMzI Ajc2JiMiDgJKedUBHKSH9GZofkI9SqhKKzkKNYZcRHxeOjxsmmBOhT0dkWYGChIbI09GMQQIUZzXfYnmqF5ntPGMAQSDjzV1hZtdpv7g130BzXBtRGJBJQYOdGs9a0srAwSqASXXeVRcXOqPf BPYlMEAkA7NUg6ZolOXK HUkBQff32GT01I0Nvi0qH05RLYq7wi5PwrFxeaB0xJRd51QElbWiONVRrN3uZO151AAACAAwAAAWLBlIABgAJACwAsgAAACuwAjOyAQIAK7QFBwABDSuxBQPpAbAKL7ELASsAsQEHERKwCTkwMTMJASMDIQMBIQEMAskCtr62/Wy6AQACCv7 BlL5rgG2/koCVgJrAAAAAwCcAAAEKwYIABQAIQAuAGQAsgAAACuxFQPpsgICACuxLgPptCIhAAINK7EiBekBsC8vsADWsRUK6bAiMrAVELEoASuxBwrpsxsHKAgrsQ8K6bEwASuxGygRErAKOQCxIRURErAPObAiEbAKObAuErAHOTAxMxEzMh4CFRQGBx4DFRQOAiMnMzI AjU0LgIrATUzMj4CNTQuAisBnP5ovI5SSk5GbEwnVpjIc7qsSI1wRk55lUaVQUqDYjo2XoNQQwYIKWKgd16ZNhBMan9Gc6NpL6AWPm5YWm05E5MPNWhaWGc1DgAAAAEARP/lBTUGIwAgAD0AshwAACuxFQPpsgUCACuxCwPpAbAhL7AA1rEQCumxIgErALEVHBESsBk5sAsRsgAIGDk5ObAFErAHOTAxEzQSNiQzIBcVLgEjIg4CFRQeAjMyNjcVDgEjIiQmAkR/2wElpQECy1z0h4HjqGJiquWBg/RcZO57pP7c24EC/qYBJdt/mNVgbWix539/57BpcVzVSFB91wEhAAAAAAIAnAAABRkGCAASACMAPgCyEgAAK7ETA myAgIAK7EjA kBsCQvsADWsRMK6bATELEcASuxCgrpsSUBKwCxExIRErAQObAjEbAKOTAxMxEhMh4CFxYSFRQCBw4DIyczMj4CNz4BNTQmJy4BKwGcASJWoJSNRIV7e4FGi5aiWnJ9RoJ5cTVgYWVkauyJfQYIDilKOXP 1a6q/t1yPU0rDqAMIz8xWuqBhfJYXjcAAAAAAQCcAAADvAYIAAsARwCyAAAAK7EJA myAQIAK7EEA m0BQgAAQ0rsQUD6QGwDC wANaxCQrpsAQysgkACiuzQAkLCSuwAjKzQAkHCSuxDQErADAxMxEhFSERIRUhESEVnAMg/YwCYv2eAnQGCKD NqD9oqAAAAAAAQCcAAADWgYIAAkAQACyAAAAK7IBAgArsQQD6bQFCAABDSuxBQPpAbAKL7AA1rEJCumwBDKyCQAKK7NACQMJK7NACQcJK7ELASsAMDEzESEVIREhFSERnAK /e4CAv3 Bgig/jag/QIAAAAAAQBC/ UGOAYjAC4ARACyKgAAK7EXA myBQIAK7EMA m0HR4qBQ0rsR0D6QGwLy wANaxEQrpsTABKwCxHh0RErIAESE5OTmwDBGxCAk5OTAxEzQSNiQzMgQXByYkIyIOAhUUFhceATMyPgI1ITUhFhUUBw4CBwYEIyIkJgJCf9kBJ6XNAUZ7fWL6yF5apiXlZW5XtkxZ5g/jUCgwEEBSM/NWr 0KKk/uDXfwMApgEl2X uoHWJmmix6YN74VhWb0aBsGygFhY2NEeHfz57h3/XASEAAAAAAQCkAAAFEgYIAAsAPwCyAAAAK7AHM7IBAgArsAUztAMKAAENK7EDA kBsAwvsADWsQsK6bACMrALELEIASuwBDKxBwrpsQ0BKwAwMTMRMxEhETMRIxEhEaSsAxasrPzqBgj9jgJy fgC9v0KAAAAAAEAoAAAAUwGCAADACEAsgAAACuyAQIAKwGwBC wANaxAwrpsQMK6bEFASsAMDEzETMRoKwGCPn4AAAAAAH/ef9gAeMGCAAUAC4AsgQAACuxEgPpsgAAACuyCgIAKwGwFS wCdaxDArpsRYBKwCxCgQRErABOTAxBzceATMyPgI1ETMRFAYHDgEjIiaHYClSOz9EHwasFDkvjk5OiS2FJzFCYnAuBMb7Oly7TD9AQgAAAQCcAAAE2QYIAAsAMACyAAAAK7AHM7IBAgArsAQzAbAML7AA1rELCumwAjKxDQErALEBABESsQMJOTkwMTMRMxEBMwkBIwEHEZysApHo/SsC7e39hysGCP1rApX9MfzHAsUr/WYAAAABAJwAAALyBggABQAsALIAAAArsQMD6bIBAgArAbAGL7AA1rEDCumyAwAKK7NAAwUJK7EHASsAMDEzETMRIRWcrAGqBgj6mKAAAAAAAQAr/8EHAgZgAAsAgwCyAAAAK7MEBQgLJBczsgECACuwAzMBsAwvsADWsQsQ6bALELEFASuxBBDpsQ0BK7A2Gro 3vQEABUrCrAAELABwA6wCxCwCsC6wSL0BAAVKwoOsAUQsAbABbAEELADwAMAsQYKLi4BswEDBgouLi4usEAaALEBABESsgIHCTk5OTAxMwkDIwMjCQEjAysBOQIyAjMBObDHBP4P/hAExwZg vAFEPmgBBT7rQRTwAAAAAAQCm/7oGBgZKAAcAOACyAAAAK7AFM7IDAgArsAEzAbAIL7AA1rEHCumwBxCxAgErsQUK6bEJASsAsQMAERKxAgY5OTAxMxEBETMRARGmBLSs 0wGSvsSBKz5sgTs 1oAAgBO/ UGmAYjABMAJwBEALIPAAArsRkD6bIFAgArsSMD6QGwKC wANaxFArpsBQQsR4BK7EKCumxKQErsR4UERKxDwU5OQCxIxkRErEKADk5MDETNBI2JDMyBBYSFRQCBgQjIiQmAjcUHgIzMj4CNTQuAiMiDgJOf9sBJaamASTcf3/c/tympv7b23 sYqzog4PnrGNjqueFheiqYgMCpgEj23192/7dpqb 3dd9fdcBI6iD565nZ67ng4PqrmRkruoAAAIAnAAAA8cGCAAQAB0AQgCyAAAAK7ICAgArsR0D6bQPEQACDSuxDwPpAbAeL7AA1rEQCumwETKwEBCxFwErsQgK6bEfASsAsR0RERKwCDkwMTMRMzIWFx4BFRQGBw4BKwEZATMyPgI1NC4CKwGc/mTHVFZYTEhOwGB9ckh/YDpGc49MPwYIGDo7vWhesjxCJP1cA0QYQGpUXm01DgAAAAACAE7/5QagBiMAFwAuAFIAshMAACuwDjOxHQPpsgUCACuxKgPpAbAvL7AA1rEYCumwGBCxJQErsQoK6bEwASuxJRgRErMFDxMNJBc5ALEdExESsBA5sCoRsgoNADk5OTAxEzQSNiQzMgQWEhUUAgcXIycOASMiJCYCNxQeAjMyNjcBMwE2NTQuAiMiDgJOf9sBJaaoASTaf3Fv6NuBYP10pv7b23 sYqzog1a6SP6L4QELqmOq54WF6KpiAwKmASPbfX/b/tumov72deuLSFB91wEjqIPnrmc NQF3/umy oPqrmRkruoAAgCcAAAEGQYIAA8AHABOALIAAAArsAszsgICACuxHAPpAbAdL7AA1rEPCumwEDKwDxCxFgErsQcK6bEeASuxFg8RErENCjk5sAcRsAw5ALEcABESsgcNEDk5OTAxMxEzMh4CFRQGBwEjASMZATMyPgI1NC4CKwGc32/Knl7PtAHs0/4tKzVKi29DQW2NTjMGCCNepoO05RH9TAKm/VoDPRM7bVpecTcQAAAAAAEAUv/lBBkGIwA7AF0AsjcAACuxBgPpshsCACuxIgPpAbA8L7AW1rEnCumwACDWEbEBC mwJxCxCwErsTIK6bE9ASuxCycRErUGEhsfLjckFzmwMhGwHjkAsSIGERK1AAEWHh8yJBc5MDETNx4DMzI AjU0LgIvAS4DNTQ AjMyFhcHLgEjIg4CFRQeAh8BHgMVFA4CIyIuAlKoCDVQaz09c1g2Mk9nNV5Ee1w1RXmcVoHRPYkveWIzXUcpL0ZWJmdMhWY8TIWwZVygfVYBdS87aU4tLVBvQUReRjMYKR9GWnlUWpFnN31zWFBYIz9YNjFLOikSLSFMZIVcZq9/SjpolAAAAQAUAAADrgYIAAcAOgCyBgAAK7IBAgArsQAD6bADMgGwCC wBtaxBQrpsgUGCiuzQAUDCSuyBgUKK7NABgAJK7EJASsAMDETNSEVIREjERQDmv6HrAVooKD6mAVoAAAAAQCY/ UE5QYIACUAQwCyHgAAK7ELA myAQIAK7AUMwGwJi wANaxAwrpsAMQsRMBK7EWCumxJwErsQMAERKwJDmwExGwHjmwFhKwGDkAMDETETMRHAEeARceATMyNjc AjQ1ETMRFA4CBw4BIyImJy4DmKwMHRozrlZUpjYfHg6sCBo4LVDbdW/STjM7HwoCQgPG/GkrWltUJEhMSEElVlxfLQOX/Do/cmpiL1ZbUE4xZW55AAAAAAEADP kBPIGCAAFACEAsgUAACuyAAIAK7ADMwGwBi xBwErALEABRESsAI5MDETMwkBMwEMuwG4Abi7/Y0GCPtnBJn5nAAAAAEAG/ wCKIGWAAJACoAsgkAACuwBzOyAAIAK7EDBTMzAbAKL7ELASsAsQAJERKyAgQIOTk5MDETMwkDMwkCG7oBlQH0AfQBlbv9sP4M/gwGCPt7BNX7KwSF agE2/slAAEAGwAABGgGCAALACYAsgAAACuwCDOyAgIAK7AFMwGwDC xDQErALECABESsQQKOTkwMTMJATMJATMJASMJARsByP5fxAE8ATvF/l4ByMT nv6dAx8C6f27AkX9F/zhAnv9hQABABAAAASwBggACAAwALIHAAArsgACACuwAzMBsAkvsAfWsQYK6bEKASuxBgcRErACOQCxAAcRErACOTAxEzMJATMBESMREMcBiQGJx/4GrAYI/VACsPyQ/WgCmAAAAAABAB0AAASFBggABwAeALIAAAArsQUD6bIDAgArsQID6QGwCC xCQErADAxMwEhNSEBIRUdA0n9IQP /LQDNgVooPqYoAAAAAABANX FAJaBk4ABwA3ALIBAgArsQQH6bAAL7EFB kBsAgvsADWtAcRAAsEK7ACMrEFC m0BxEACwQrsAMysQkBKwAwMRMRIRUjETMV1QGF3d3 FAg6mPj2mAAAAAEAJf/DBGoGmgADABQAsgMAACuwAS8BsAQvsQUBKwAwMRM3AQclhwO hQZcPvlmPQAAAAABACv FAGwBk4ABwBAALIEAgArsQMH6bAHL7EAB kBsAgvsAfWsAMytAYRAAsEK7AGELEBC mwAS wBhC0BxEACwQrsAcvsQkBKwAwMRMzESM1IREhK93dAYX e/6sBwqY98YAAQCHApMEZgYIAAYAEQCyAQIAKwGwBy xCAErADAxEwEzASMJAYcBppQBpbb x/7CApMDdfyLAqD9YAAAAQAA/wAEAP9mAAMAHQCwAy 0AAQAFAQrtAAEABQEKwGwBC xBQErADAxFSEVIQQA/ACaZgAAAAABAKAEagI/BfQAAwAgALADL7QBCQALBCsBsAQvsADWtAIRAAoEK7EFASsAMDETNxMHoKzzZgWmTv6wOgACAEr/5QQKA90AFQApAFoAsg0AACuyEQAAK7EbB myCgEAK7IFAQArsSUG6QGwKi wANaxFgvpsBYQsQ0BK7EJIDIysQwN6bErASuxDRYRErMFERslJBc5ALElGxEStAAJDg8IJBc5MDETND4CMzIWFzM1MxEjNSMGIyIuAjcUHgIzMj4CNTQuAiMiDgJKP3esbWKsOwSkpAR/zGqreT oKU91TlB3UiktUnlMSHJSLQHfZruLUlZOivw9haBUjLZxSINnPTtlg0lIf144OmB9AAAAAAIAk//lBFQGmgAWACoAWACyAAAAK7IRAAArsRwH6bIHAQArsSYG6bABLwGwKy wANaxFg3psQIXMjKwFhCxIQErsQwL6bEsASuxIRYRErMHERwmJBc5ALEmHBEStAQMFBUDJBc5MDEzETMRMz4BMzIeAhUUDgIjIiYnIxUDFB4CMzI AjU0LgIjIg4Ck6QEO61iaq14QEJ2qmtkrDwECClQdU1Qd1IpLVJ5TEhyUi0GmvyfTlZSi7hnZLiMVFJOhQHsSINnPTtlg0lIf144OmB9AAAAAQA7/ UDbQPdACMAPgCyHwAAK7EXB myBQEAK7ENBukBsCQvsADWsRIL6bElASsAsRcfERKwHDmwDRGzAAkaGyQXObAFErAIOTAxEzQ AjMyFhcVIy4BIyIOAhUUHgIzMjY3MxUOASMiLgI7Uoy6ak6aQQQ5j2NKfFo0L1Z7TGiWOwVIlFZtvIlOAeFqu4lOMS/ZSFo6YoFISIBjOVhO2y80Toe7AAAAAgBK/ UECgaaABYAKgBYALINAAArshIAACuxHAfpsgUBACuxJgbpsAovAbArL7AA1rEXC mwFxCxDQErsQkhMjKxDA3psSwBK7ENFxESswUSHCYkFzkAsSYcERK0AAkODwgkFzkwMRM0PgIzMhYXMxEzESM1Iw4BIyIuAjcUHgIzMj4CNTQuAiMiDgJKP3esbWKsOwSkpAQ7rmJqq3k/qClPdU5Qd1IpLVJ5TEhyUi0B32a7i1JWTgNh WaFTlJUjLZxSINnPTtlg0lIf144OmB9AAACAEb/5QPiA90AHgApAE0AshoAACuxEwfpsgUBACuxJQbptB8OGgUNK7EfBOkBsCovsADWsQ4L6bIOAAorswAOCwkrsSsBKwCxDhMRErEWFzk5sB8RsQALOTkwMRM0PgIzMh4BFxYVFAchFB4CMzI2NxcOASMiLgI3IS4DIyIOAkY9d65xda91GhYB/Q0vUnRGaI4vi0bjk22ue0GwAj8IM0pgNTVjUDUB1Wq/jVJYl2JQVxMURHRWM3FWUIGOToW13TNcRicnRlwAAAABAFAAAAJCBrQAHABlALIbAAArshACACuxCQjpsgEBACuwFjOxAAfpsBgyAbAdL7Ab1rACMrEaDemwFTKyGhsKK7NAGhgJK7AMMrIbGgors0AbAAkrsR4BK7EaGxESsAU5ALEQARESsA05sAkRsAw5MDETNTMRNDY3PgEzMhYXFS4BIyIOAhURMxUjESMRUFoKISmFSh07HR0zHzE4GAT09KQDK5gBfzuJNUI3CgqmCgwiRGJA/ruY/NUDKwAAAAACAD/95wQAA90AKwA/AHQAsicAACuxMQfpsgoBACuyBQEAK7E7BumwFC xHQfpsh0UCiuzQB0ZCSsBsEAvsADWsSwL6bAaMrAsELEZDemwGS wLBCxIgErsQk2MjKxDA3psUEBK7EiLBEStAUUJzE7JBc5ALE7FBESswAJCCMkFzkwMRM0PgIzMhYXMzUzERQOAgcOASMiLgInMx4BMzI Aj0BIw4BIyIuAjcUHgIzMj4CNTQuAiMiDgI/QnmsamSpOwSkBBMmJUTEbWSsfUoCpAKshV55RhgEO7BjaKp5QKgpUHVOUHZSKS1SeExIc1ItAd1ku41UVk6K/Gw5bWZiMFZUPnOjZ4ecQm6SUXNMVFKMtnNIg2c9O2WDSUh/Xjg6YH0AAQCcAAADngaaABoARwCyAAAAK7ANM7IHAQArsRQG6bABLwGwGy wANaxGgzpsAIysBoQsQ4BK7ENDemxHAErsQ4aERKwBzkAsQcUERKxAwQ5OTAxMxEzERc ATMyHgIVESMRNC4CIyIOAhURnKMFM4VaZH9KG6QKJ1JIVGAvDQaa/LgERklDc5hU/cUCHzltTzJIb4c//jcAAAAAAgCYAAABgQWiAAsADwA8ALIMAAArsg0BACuwCS xAwnpAbAQL7AA1rEGEemxBhHpswwGAAgrsQ8N6bERASuxDwwRErEJAzk5ADAxEzQ2MzIWFRQGIyImExEzEZhFLy9GRi8vRSKkBS0vRkYvMURE wQDw/w9AAAAAgCY/eMBgQWiAAsADwA6ALINAQArsAwvsAkvsQMJ6QGwEC wANaxBhHpsQYR6bMMBgAIK7EPDemxEQErsQ8MERKxCQM5OQAwMRM0NjMyFhUUBiMiJhMRMxGYRS8vRkYvL0UipAUtL0ZGLzFERPjnBeD6IAABAJMAAAO BpoACwAwALIAAAArsAczsgQBACuwAS8BsAwvsADWsQsN6bACMrENASsAsQQAERKxAwk5OTAxMxEzEQEzCQEjAQcRk6QBX9v ZAHp2f59Kwaa 8QBZf5m/dcBtiv dQAAAAEAmAAAATsGmgADAB8AsgAAACuwAS8BsAQvsADWsQMM6bEDDOmxBQErADAxMxEzEZijBpr5ZgAAAQCcAAAFiQPdAC0AbgCyAAAAK7ETIDMzsgEBACuyBwEAK7ANM7EnBumwGjIBsC4vsADWsS0M6bACMrAtELEhASuxIAzpsCAQsRQBK7ETDemxLwErsSEtERKwBzmwIBGwCjmwFBKwDTkAsScAERKwCjmwARGxAwQ5OTAxMxEzFTM ATMyFhc ATMyHgIVESMRNC4CIyIOAhURIxE0LgIjIg4CFRGcowUndkpWjScrnlhcd0YapAgjRUBIUSsNowsjQzxIVSsNA8NpO0hUTFBQRXGRTP22Ai8vY1E0PmBzN/4CAiMtZlY6QmR3N/4OAAAAAQCcAAADngPdABoASQCyAAAAK7ANM7IBAQArsgcBACuxFAbpAbAbL7AA1rEaDOmwAjKwGhCxDgErsQ0N6bEcASuxDhoRErAHOQCxARQRErEDBDk5MDEzETMVMz4BMzIeAhURIxE0LgIjIg4CFRGcowUzhVpkf0obpAonUkhUYC8NA8N1RklDc5hU/cUCHzltTzJIb4c//jcAAAAAAgBG/ UEOQPdABMAJwBEALIPAAArsRkH6bIFAQArsSMG6QGwKC wANaxFAzpsBQQsR4BK7EKDOmxKQErsR4UERKxDwU5OQCxIxkRErEKADk5MDETND4CMzIeAhUUDgIjIi4CNxQeAjMyPgI1NC4CIyIOAkZNirhqarmKTVCJuWhouIlQozJaf0tMf1oyMlp/TEx WjIB32q5i1BQi7hrarmJTk6JuWxKgGM3N2OBSUqBYDo6YIEAAAIAk/3jBFQD3QAWACoAWACyEQAAK7EcB myAQEAK7IHAQArsSYG6bAALwGwKy wANaxFg3psQIXMjKwFhCxIQErsQwL6bEsASuxIRYRErMHERwmJBc5ALEmHBEStAQMFBUDJBc5MDETETMVMz4BMzIeAhUUDgIjIiYnIxEDFB4CMzI AjU0LgIjIg4Ck6QEO61kaqt2QkB2rG1irDwECClQdU1Qd1IpLVJ5TEhyUi394wXgilBUVI24ZWa4jFBUTv1cBAlIg2c9O2WDSUh/Xjg6YH0AAgBK/eMECgPdABYAKgBYALISAAArsRwH6bIKAQArsgUBACuxJgbpsA0vAbArL7AA1rEXC mwFxCxDQErsQkhMjKxDA3psSwBK7ENFxESswUSHCYkFzkAsSYcERK0AAkODwgkFzkwMRM0PgIzMhYXMzUzESMRIw4BIyIuAjcUHgIzMj4CNTQuAiMiDgJKP3mqa2KuOwSkpAQ7rGJtrHc/qClPdU5Qd1IpLVJ5TEhyUi0B3WS7jVRUUIr6IAKkTlRQjLZ1SINnPTtlg0lIf144OmB9AAABAJMAAAKkA90AFAA7ALIAAAArsgEBACuyBwEAK7EOBukBsBUvsADWsRQN6bACMrEWASsAsQ4AERKwCzmwARGyAwQKOTk5MDEzETMVMz4BMzIWFwcuASMiDgIVEZOkBCtbTylII04ZKSBETCUIA8NpOUoYFZUQG0xvey/ HwAAAAEATP/lAuUD3QAuAFoAsiwAACuxBAfpshMBACuxGgbpAbAvL7AO1rEdDumwHRCxBwErsScL6bEwASuxHQ4RErABObAHEbUECxMXISwkFzmwJxKwFjkAsRoEERK1AAEOFhcnJBc5MDE/AR4BMzI2NTQuBDU0PgIzMhYXBy4BIyIGFRQeAhceAxUUDgIjIiZMkR9UUkJZP2JvYkAtUGc7VIshiRBGLStMJz1QKytQPSczWnVDe7LZPkRWUkE1QjErQF5MPWVHJ2ZMSCc8PC8hLyceExItQFg9RHVSL4EAAAAAAQA/AAAB9AUdAAsATgCyCgAAK7IBAQArsAUzsQAH6bAHMrIBAAors0ABAwkrAbAML7AK1rACMrEJDemwBDKyCQoKK7NACQcJK7IKCQors0AKAAkrsQ0BKwAwMRM1MxEzETMVIxEjET9lpKyspAMrmAFa/qaY/NUDKwAAAAEAj//lA4kDwwAZADcAshUAACuxCAfpsgEBACuwDjMBsBovsADWsQMN6bADELENASuxEA3psRsBK7ENAxESsBU5ADAxExEzERQeAjMyPgI1ETMRFA4CIyIuAo kDCtZSUpYKwykJ1qRa2qSWicBmAIr/ec9bVIxMVJtPQIZ/dVgoHNAQHOfAAABAAL/wQOyA8MABQAhALIFAAArsgABACuwAzMBsAYvsQcBKwCxAAURErACOTAxEzMJATMBAroBHwEfuP4pA8P9eAKI /4AAAABAAb/vAYOBAwACQAqALIJAAArsAczsgABACuxAwUzMwGwCi xCwErALEACRESsgIECDk5OTAxEzMJAzMJAga7ARwBKwEtAR 6/iP 1/7XA8P9dALV/SsCjPv5As39MwABAAIAAAP6A8MACwAmALIAAAArsAgzsgIBACuwBTMBsAwvsQ0BKwCxAgARErEECjk5MDEzCQEzGwEzCQEjCQECAZr ocn8/M3 nwGQx/7P/s0CAAHD/rgBSP49/gABh/55AAAAAf/8/eMEAAPDAAcAHwCyAAEAK7ADM7AGLwGwCC xCQErALEABhESsAI5MDEDMwkBMwEjAQS AVQBOLr9OboBNwPD/U0Cs/ogAncAAAEAFAAABBQDwwAHAB4AsgAAACuxBQfpsgMBACuxAgfpAbAIL7EJASsAMDEzASE1IQEhFRQCt/3LA379TAKYAyuY/NWYAAAAAAEAaP4UAkYGTgAuAEkAsgwCACuxDwfpsCQvsSEH6QGwLy wKdawBjKxHgvpsBIysh4pCiuzQB4jCSuwDTKxMAErsR4pERKwGDkAsQ8hERKxByk5OTAxEzU AzURND4COwEVIyIGFREUDgIHHgMVERQWOwEVIyIuAjURNC4CaDM IQglNT4WllI3Eyk1MwsKNDUpEjhSlhc9NSUIIT0B8IMQN1JrQwF/PWdKJ5hUR/59WoJWLwYGL1aDWv5/SFSYJ0pnPQF9RGxSNwAAAAEB P5KApgGSgADABwAsgECACsBsAQvsADWsQMM6bEDDOmxBQErADAxAREzEQH4oP5KCAD4AAAAAQBm/hQCRAZOAC4ASQCyFQIAK7EUB mwLi xAAfpAbAvL7AE1rAPMrEoC mwGzKyBCgKK7NABC4JK7AUMrEwASuxKAQRErAKOQCxFAARErEbKDk5MDETMzI2NRE0PgI3LgM1ETQmKwE1MzIeAhURFB4CFxUOAxURFA4CKwFmUjcTKTUzCwo0NSkSOFKWFz01JQghOzY1PCEIJTU Fpb rFRIAYFag1YvBgYvVoFbAYNIU5gnSmY /oFEalI3EIMQOFJtQ/6DPWdKJwAAAQCHAVwEZgLHAB8ANACwFi wHzOxDQPpsBwvsQUD6bAQMgGwIC xIQErALENFhESsQAaOTmxBRwRErEKETk5MDETPgMzMhYXHgMzMjY3Fw4DIyImJy4BIyIGB4cXOUZWMTV1NRs1My8VK04YixQ5RlYzNW0vRGgpK0obAZo9bVQvOiMQJyEWc1Q6PW1ULzweLUJxVAAAAAACAOf9ugHNA90ACwAPADsAsgMBACuxCQnpAbAQL7AA1rEGEemxBhHpsw8GAAgrsQwL6bAML7EPC mxEQErsQ8MERKxCQM5OQAwMRM0NjMyFhUUBiMiJhMRMxHnRC8vREQvL0QfqANtL0FBLy9GRfp9BM/7MQAAAAACAMMANwPyBeEAHwAqAIcAsBsvsBgzsSUG6bAQMrIbJQors0AbGgkrsAwvsA8vsCYzsQgG6bAFMrIIDwors0AIBgkrAbArL7AA1rEgC mwIBCxGgErsQUlMjK0GQ4AHgQrsQcPMjKyGRoKK7NAGRUJK7AKMrEsASsAsSUbERKwFTmwDBGzABMUICQXObEIDxESsAo5MDETND4CNzUzFRYXFSMuAScRPgE3MxUOAQcVIzUuAzcUHgIXEQ4Dwz9xnWGHhXEFLXpKTn0rBDeAQ4dannVBpyNEYj47Y0QlAwper4taDNnVDE7ZOVgL/T8KXzvbJTcE5ugKWIeoZz10YEMNArsMQmBzAAABAEz/4QSgBiMATwEhALJGAAArsUdPMzOxOwjpsDoys0w7RggrsQMI6bIXAgArsSII6bQKC0YXDSuwLDOxCgTpsC4yAbBQL7AS1rEnEOmyEicKK7NAEgoJK7AnELEGASuxMhDpsC8ysjIGCiuzQDIuCSuwMhCxHQErsRwL6bFRASuwNhq67A7DMAAVKwqwRy4OsEnABbE6CPkOsDjAsDgQszk4OhMrsEkQs0hJRxMrsjk4OiCKIIojBg4REjmySElHERI5ALNJODlILi4uLgG1STg5OkdILi4uLi4usEAaAbEnEhESsgMMTzk5ObAGEbBMObAyErIrLDU5OTmwHRGzFyI7RiQXObAcErBAOQCxA0wRErE1QTk5sAoRsTJAOTmxIgsRErISHB05OTkwMTc ATc ATU0JichNTMnLgM1ND4CMzIeAhUHNC4CIyIOAhUUHgIXIRUjHgEVFAYHFx4DMzI AjcXDgMjIiYnLgEjIgYHTDGXYx0kBgj /M0nGS8lFkl9plxkp3RCqB9BaUs7Z04tJzlAFgEj9gYIJh0KG1JUUBgjNy0jEIwXPVBgOD9/PD1xMz9aHztQdQIpYDYZMhmDTC9YWmA4XqJ0Qkh7qmItQnxhOStKZjw9c25tNYMXLxY3dy8FChwdFR0rNxtUL1ZCJyUXFyRHNgAAAgBtAGYEgQRmACMANwCRALIzAQArsQkE6bIGAQArsgQBACuyDAEAK7IOAQArsBsvsSkE6QGwOC wANa0JA4AHgQrsCQQsS4BK7QSDgAeBCuxOQErsSQAERK0AwQFHyEkFzmwLhG0BgwYHjMkFzmwEhK1DQ8OFRYXJBc5ALEpGxEStRYYFx4fICQXObAzEbMDDxUhJBc5sAkSsQUNOTkwMRM0NjcnNxc ATMyFhc3FwceARUUBgcXBycOASMiJicHJzcuATceAzMyPgI3Ni4CJw4DbTM5UkpWVJljYppUVklSOTQzOlJJVlSaYmKaVFZKUjkzgwI9a41QUI1qPgICO2uRUlSQajsCZliUWFJKVjs7OztWSlJYlFhYk1hSSlY7PDw7VkpSWJNYToloPj5oik1SjGQ5AgI5ZIwAAAEAJwAABMcGCAAWAHIAsg4AACuyAAIAK7ADM7IVAQArsAUzsRQE6bAHMrQREA4VDSuwCzOxEQTpsAkyAbAXL7AO1rASMrENCumwCTKyDQ4KK7NADQsJK7AGMrIODQors0AOEAkrsBQysRgBK7ENDhESsAI5ALEUERESsAI5MDETMwkBMwEhFSEHIRUhESMRITUhJyE1ISfHAYkBicf wgEp/otwAeX G6z GgHmcf6LASkGCP1UAqz914PNg/30AgyDzYMAAAAAAgH4/0oCmAVKAAMABwAdAAGwCC wANawBDKxAwzpsAYysQMM6bEJASsAMDEFETMRAxEzEQH4oKCgtgIA/gAEAAIA/gAAAAAAAgDR/n0D7AYjAEIAVgCVALILAgArsRUD6bIVCwors0AVEQkrsCwvsTUD6bI1LAors0A1MQkrAbBXL7AA1rAxMrFDCumwMjKwQxCwGCDWEbEGC mwBi xGAvpsEUysEMQsU0BK7ASMrEiCumwETKwOCDWEbEnC mxWAErsRgGERKwPzmwOBFACQsVAxwlLDVIUiQXOQCxFTURErMGJUhSJBc5MDETNDY3LgE1ND4CMzIWFx4BFyMuASMiBhUUHgIXHgMVFAYHFhcUDgIjIi4CJzMUFjMyNjU0LgInLgEnLgE3FB4CMzI AjU0LgIjIg4C0W5pVl4/a4tOUKYvJyACowZhZlx9M1JsODdqUjR1Y7QBPGaLUGKKWisEpmBxYnEpQlYtN38vQjusIz1SLy9SPiUlPlIvL1I9IwJUcbIrK5NjUINcMUhBNZJCdX9sYztONSUVFDNUeVpzojNcz1SBXC83Z5NaaIVoZDlNMyUQFzMnM4lUL1I9JSU9Ui8vUj0jIz1SAAIApgTHAxcFpAALABcALwCwCS wFTOxAwnpsA8ysQMJ6QGwGC wANaxBhHpsAYQsQwBK7ESEemxGQErADAxEzQ2MzIWFRQGIyImJTQ2MzIWFRQGIyImpj8vL0A/MC8/AZNALy9AQC8vQAU1L0BALy8/Py8vQEAvLz8/AAADABD/5QZWBiMAEwAnAE0AmwCyDwAAK7QZBAAgBCuyBQIAK7QjBAAgBCu0SUAPBQ0rtEkEACAEK7JASQors0BARAkrtC02DwUNK7QtBAAgBCuyNi0KK7NANjMJKwGwTi wANa0FA4AHgQrsBQQsSgBK7Q7DgAeBCuwOxCxHgErtAoOAB4EK7FPASuxHjsRErcPGQUjLTJESSQXOQCxNkARErQKFB4AKCQXOTAxEzQSNiQzMgQWEhUUAgYEIyIkJgI3FB4CMzI AjU0LgIjIg4CBTQ AjMyHgIXIy4BIyIOAhUUHgIzMjY3Mw4DIyIuAhB92QElqKgBJdl9fdn 26io/tvZfXttuviJifi7bGy7 ImJ LptAQs9c6NpRn9iQw99EoZmVHdQJStUd05mfRd9CkRkf0ZmpHU/AwSmASXXfX3X/tumpv7b13191wElpo32uGlpuPaNjfa4aWm49odiq3pGKU5wSFZeO2B3PEh6XDZjWEhzUCtIfaYAAAIAKwPBApwGIwAVACcAcgCyCgIAK7IFAgArtCMEABQEK7IbAQArtBEEABQEK7IMAQArsw0RGwgrsyINEQ4rAbAoL7AA1rQWDgASBCuwFhCxDQErsQkgMjK0DA4AEgQrsSkBK7ENFhESswURGyMkFzkAsSMbERK0AAkODwgkFzkwMRM0PgIzMhYXMzUzESM1IwYjIi4CNxQeAjMyPgI1NCYjIg4CKylObkg/bycEa2sEUIdGbk4paxo1TjEzTjYab2IvTDccBPA9cVQxMy9R/b9QYDFUbkQrUD4kIj5QK1h7IzlMAAIAVABEA3UDoAAFAAsAABMBFwkBBxMBFwkBB1QBWG3 6wEVbQQBWG3 6wEVbQHsAbRW/qL rFQBqAG0Vv6i/qxUAAAAAQCHANMEZgL8AAUAMACwAC xAQPpsgABCiuzQAAECSsBsAYvsATWsQMO6bIEAwors0AEAAkrsQcBKwAwMRM1IREjEYcD358CXKD91wGJAAABAAQBogGoAjkAAwAiALAAL7EBBumxAQbpAbAEL7EACyu0AxEACgQrsQUBKwAwMRM1IRUEAaQBopeXAAAEABD/5QZWBiMAEwAnADkARgCyALIPAAArtBkEACAEK7IFAgArtCMEACAEK7Q6OA8FDSuwNDO0OgQAIAQrsjg6CiuzQDgoCSuwNTK0KUYPBQ0rtCkEACAEKwGwRy wANa0FA4AHgQrsBQQsSgBK7Q5DgAeBCuwOjKwORCxQAErtC8OAB4EK7AvELEeASu0Cg4AHgQrsUgBK7FAOREStQ8ZIwU2NCQXObAvEbA1OQCxOjgRErMKFB4AJBc5sEYRsS9AOTkwMRM0EjYkMzIEFhIVFAIGBCMiJCYCNxQeAjMyPgI1NC4CIyIOAgERITIeAhUUDgIHASMBIxkBMzIWPgE1NC4CKwEQfdkBJaioASXZfX3Z/tuoqP7b2X17bbr4iYn4u2xsu/iJifi6bQF9AX07cVY1K0lnOQEIk/76lJQpZlxAKT5MIuoDBKYBJdd9fdf 26am/tvXfX3XASWmjfa4aWm49o2N9rhpabj2/cMDahI1WkZCWDkbAv5tAZP bQIOAhMxNSErFgkAAAABAKIE6QNeBXUAAwAXALAAL7EBBOmxAQTpAbAEL7EFASsAMDETNSEVogK8BOmMjAACAGYDvALNBiMAEwAlAE4AsgUCACu0IQQAFAQrsA8vtBcEABQEKwGwJi wANa0FA4AEgQrsBQQsRwBK7QKDgASBCuxJwErsRwUERKxDwU5OQCxIRcRErEKADk5MDETND4CMzIeAhUUDgIjIi4CNxQWMzI AjU0LgIjIg4CZjBTcUA/b1QxMVRvPz9yUTJjeVgrSzogIDpNKytMOh4E8D9vVDExVG8/P3JRMjJRcUBYeSA4TisrSzohITpLAAIAhwAABGYD/AADAA8AXwCyAAAAK7EBA myBwEAK7QFBAAHDSuwCzOxBQPpsAkysgQFCiuzQAQOCSsBsBAvsA7WsAYysQ0M6bAIMrINDgors0ANAwkrsAoysg4NCiuzQA4ACSuwBDKxEQErADAxMzUhFQE1IREzESEVIREjEYcD3/whAaCgAZ/ YaCgoAIjoAE5/seg/sYBOgAAAAEANQJ1Ar4GIwAbAFwAshACACu0BwQAIAQrsgcQCiuzQAcLCSuwAC 0GQQAIAQrAbAcL7AL1rQKDgAeBCuwChCxBAErtBoOAB4EK7AVMrEdASuxBAoRErEQGTk5ALEHGRESsQQVOTkwMRMBPgE1NCYjIgYVIz4DMzIeAhUUBgcBIRU1AdUfG2tSXGJ7Ai9ScUFEclQxHiP rgGTAnUCACNJL05aYlI9aUwtKUhkPjFqJ/6RagAAAAABAEoCZAKqBiMALACQALIaAgArtBMEACAEK7ITGgors0ATFwkrsCgvtAQEACAEK7IEKAors0AEAAkrsAovtAsEACAEKwGwLS wANa0AQ4AHgQrsBcg1hG0Fg4AHgQrsAEQsQcBK7AOMrQlDgAeBCuwHzKxLgErsQcWERK0BAoaIigkFzkAsQoEERKxByU5ObALEbAiObATErAfOTAxEzMUFjMyNjU0Jgc1MjY1NC4CIyIGByM ATMyHgIVFAYHHgEVFAYjIi4CSntmTFJmbF1Qax0vOx1ETQl7DI59PWdOK0Q9SkWuiT1rUDEDZEhNYkxQXgRqSkYlOSUUR0JvhSVCXjk9cR0df0eDkCVEXgAAAAEAoARqAj8F9AADACAAsAMvtAEJAAsEKwGwBC wANa0AhEACgQrsQUBKwAwMRsBFwGg86z xwSkAVBO/sQAAAABAI/94wOJA8MAGQBFALIVAAArsQgH6bIBAQArsA4zsAAvAbAaL7AA1rEZDemwAjKwGRCxDQErsRAN6bEbASuxDRkRErAVOQCxCBURErAYOTAxExEzERQeAjMyPgI1ETMRFA4CIyImJxGPpAwrWUlKWCsMpCdakWs1YkL94wXg/ec9bVIxMVJtPQIZ/dVgoHNAIUD9nQAAAAEAef7HBEYGCAATAFYAsgUCACuxDATpsAcysgwFCiuzQAwOCSuwCTIBsBQvsA7WtA0OAB4EK7ANELQAEQAIBCuwAC wDRCxCgErtAkOAB4EK7IJCgors0AJBgkrsRUBKwAwMRMmPgIzIRUjESMRIxEjESIuAnkGO3WoZgIVd4WmhVaWbkQD ly8mF6F UQGvPlEA307caEAAQDJAZgBrgJ9AAsAIgCwCS xAwnpsQMJ6QGwDC wANaxBhHpsQYR6bENASsAMDETNDYzMhYVFAYjIibJQy8vREQvL0MCDC9CQi8vRUUAAAABAKD aAH8/9EAAwAiALIBAAArtAMJAAwEKwGwBC wANa0AhEADAQrsQUBKwAwMRsBFwOgxJjq/qIBLz7 1QAAAQDpAnUCCgYSAAUALQCyAQIAK7QABAAgBCuyAAEKK7NAAAQJKwGwBi wBNa0Aw4AHgQrsQcBKwAwMRM3MxEjEek85XsFqGr8YwMzAAIAEAPBAqQGIwATACcATgCyBQIAK7QjBAAUBCuwDy 0GQQAFAQrAbAoL7AA1rQUDgASBCuwFBCxHgErtAoOABIEK7EpASuxHhQRErEPBTk5ALEjGRESsQoAOTkwMRM0PgIzMh4CFRQOAiMiLgI3FB4CMzI AjU0LgIjIg4CEDRYeEZGd1ozM1p5RER4WjRrITtSMTFSPCAgPFIxMVI7IQTwP3FSMTFScT8/b1IvL1JuQi1OPCAgPE4tK1A5IyM5UAAAAAACAIsARAOsA6AABQALAAA3CQE3CQE3CQE3CQGLARX 620BWP6o7wEV/uttAVj qJgBVAFeVv5M/lhUAVQBXlb TP5YAAQAzf/lBpgGIwAFAAkAEwAXAJEAshIAACuwCTOyBwIAK7IBAgArtAAEACAEK7IAAQors0AABAkrsgsBACu0ChQJCw0rsA0ztAoEACAEK7APMgGwGC wBNa0Aw4AHgQrsAMQsRIBK7AVMrQRDgAeBCuwDDKxGQErsQMEERKwBjmwEhG0BwgJChQkFzmwERKwCzkAsQASERKxBhY5ObABEbAIOTAxEzczESMREwEXASUBMxEzFSMVIzUlIREjzTvmezkDg1r8fQGmAm8Ce3t7/tkBJwQFqGr8YwMz m8GDDH587EDPf0tapaWagGFAAAAAAMAzf/lBpgGIwAFAAkAJQCuALIJAAArsgoAACu0IwQAIAQrsgcCACuyAQIAK7QABAAgBCuyAAEKK7NAAAQJK7QRGgQHDSu0EQQAIAQrshEaCiuzQBEVCSsBsCYvsATWtAMOAB4EK7ADELEVASu0FA4AHgQrsBQQsQ4BK7QkDgAeBCuwHzKxJwErsQMEERKwCTmwFRGwCjmxDhQRErMHCBojJBc5ALEjChESsAY5sBERsQ4fOTmxAQARErAIOTAxEzczESMRAwEXASUBPgE1NCYjIgYVIz4DMzIeAhUUBgcBIRXNO Z7IwODWvx9AmQB1R8ba1JcYnsCL1JxQURyVDIfI/6uAZQFqGr8YwMz m8GDDH58xsCACNKL05aY1I9aUwtKUhkPTFrJ/6RagAAAAAEAKT/5QbBBiMALAAwADoAPgD4ALI5AAArsDAzshoCACuwLjO0EwQAIAQrshMaCiuzQBMXCSuyMgEAK7IIAQArtDE7MDINK7A0M7QxBAAgBCuwNjK0BCgwMg0rtAQEACAEK7IEKAors0AEAAkrtAoLMhoNK7QKBAAgBCsBsD8vsADWtAEOAB4EK7ABELAWINYRtBcOAB4EK7AXL7QWDgAeBCuwARCxBwErsA4ytCUOAB4EK7AfMrAlELE5ASuwPDK0OA4AHgQrsDMysUABK7EHFhEStgQKGiIoLTAkFzmxOSURErIuMTs5OTkAsQQoERKxPT45ObAyEbAlObELChESsCI5sBMRsB85MDETMxQWMzI2NTQmBzUyNjU0LgIjIgYHIz4BMzIeAhUUBgceARUUBiMiLgIJARcBJQEzETMVIxUjNSUhESOke2ZMUmZsXFBqHS87HURNCXoMjX09Z04rRD1KRa6JPWtQMQF/A4Na/H0BWAJvAnt7e/7ZAScEA2RITWJMUF4EakpGJTklFEdCb4UlQl45PXEdHX9Hg5AlRF787AYMMfnzsQM9/S1qlpZqAYUAAgB//agDaAPdADkARQDsALI9AQArsUMJ6bA1L7EpA mwDC xFwPpsgwXCiuzQAwSCSsBsEYvsADWsSYL6bAmELARINYRsRIL6bASL7ERC mwJhCxOgErsUAR6bBAELEsASuxMA3psDAQsBwg1hGxCQvpsAkvsRwL6bFHASuwNhq6E0PC AAVKwoOsAQQsAbAsSMM bAhwLAEELMFBAYTK7AjELMiIyETK7IFBAYgiiCKIwYOERI5siIjIRESOQC1BiEEBSIjLi4uLi4uAbUGIQQFIiMuLi4uLi6wQBoBsUA6ERKzDBcpNSQXOQCxDCkRErMAHC4vJBc5MDEXNDY3PgE3PgE1NCYjIg4CFSMmPgIzMh4CFRQOAgcOAxUUFjMyNjU0JzMXFA4CIyIuAgE0NjMyFhUUBiMiJn83ODWXREJcY0UrQCcUpgIvWn1KSHpYNCtOZzkxXkgtd1xYcQ2qCD1miktOh2M5AQZELy9DQy8vROdMkzMvMxUSSk5GXiE3RidKgWA3M1p7RkZjSjMTEB0xTj9ed3RWMTJtUIFcMTljhwSfL0RDMC9DQwADAAwAAAWLCAYABgAKAA0ALACyAAAAK7ACM7IBAgArtAULAAENK7EFA kBsA4vsQ8BKwCxAQsRErANOTAxMwkBIwMhAxM3EwcBIQEMAskCtr62/Wy646z0Z/7kAgr /gZS a4Btv5KB7hO/rA5 9kCawAAAAMADAAABYsIBgAGAAkADQAsALIAAAArsAIzsgECACu0BQcAAQ0rsQUD6QGwDi xDwErALEBBxESsAk5MDEzCQEjAyEDASEBAxMXAQwCyQK2vrb9bLoBAAIK/v6B9Kz xgZS a4Btv5KAlYCawH1AVBO/sUAAwAMAAAFiwf4AAYADAAPACwAsgAAACuwAjOyAQIAK7QFDQABDSuxBQPpAbAQL7ERASsAsQENERKwDzkwMTMJASMDIQMTCQEHJwcDIQEMAskCtr62/Wy6wgFAAUN2zcs3Agr /gZS a4Btv5KBucBEf7vXK6u 8sCawAAAAMADAAABYsHvAAGACIAJQBLALIAAAArsAIzsgECACu0BSMAAQ0rsQUD6bAfL7EMBemwFTKzEgwfCCuxGQXpsCIyAbAmL7EnASsAsQEjERKwJTmxEhkRErAHOTAxMwkBIwMhAxM AzMyFhceATMyNjcXDgEjIiYnLgEjIgYHAyEBDALJAra tv1sup0SKjE9Jy9SJSdAHCs2EmAdcEwlTiYnSCErKxACAgr /gZS a4Btv5KBxcfOS8aHBMQH0AiTURiHBMQHTwi 48CawAAAAAEAAwAAAWLB7YABgASABUAIQBhALIAAAArsAIzsgECACu0BRMAAQ0rsQUD6bAQL7AfM7EKCemwGTIBsCIvsAfWsQ0R6bANELEWASuxHBHpsSMBK7ENBxESsBM5sBYRsQEVOTmwHBKwFDkAsQETERKwFTkwMTMJASMDIQMTNDYzMhYVFAYjIiYTIQETNDYzMhYVFAYjIiYMAskCtr62/Wy6ykAvL0BALy9ANgIK/v5WQC8vPz8vL0AGUvmuAbb SgdILz8/Ly9AQPs9AmsChy8/Py8vQEAAAAAEAAwAAAWLCAwABgAJABkAJQBvALIAAAArsAIzsgECACu0BQcAAQ0rsQUD6bAXL7QdBAAUBCuwIy 0DwQAFAQrAbAmL7AK1rQaDgASBCuwGhCxIAErtBQOABIEK7EnASuxIBoRErMBCRcPJBc5ALEBBxESsAk5sSMdERKxFAo5OTAxMwkBIwMhAwEhAQM0PgIzMh4CFRQGIyImNxQWMzI2NTQmIyIGDALJAra tv1sugEAAgr /ssfN0opKUc4H3NUVHVnOSkpNzcpKTkGUvmuAbb SgJWAmsChSlHOB4eOEcpVHV1VCk6OikpNzcAAAACAAwAAAfwBggADwASAD8AsgwAACuwADOxCQPpsgECACuxBAPptA4QDAENK7EOA m0BQgMAQ0rsQUD6QGwEy xFAErALEEBRESsBI5MDEzASEXIRMhFyETIRchAyEDASEDDAKwAqZG/Y/BAmBI/Z38AnNE/Nu3/W22AQACBP4GCKD NKD9pKABsv5OAlICYAACAET aAU1BiMAIAAkAEIAsiIAACuyHAAAK7EVA myBQIAK7ELA kBsCUvsADWsRAK6bEmASsAsRUcERKwGTmwCxGyAAgYOTk5sAUSsAc5MDETNBI2JDMgFxUuASMiDgIVFB4CMzI2NxUOASMiJCYCARMXA0R/2wElpQECy1z0h4HjqGJiquWBg/RcZO57pP7c24EB7cWX6QL pgEl23 Y1WBtaLHnf3/nsGlxXNVIUH3XASH8SAEvPv7VAAIAnAAAA7wIBgALAA8ATwCyAAAAK7EJA myAQIAK7EEA m0BQgAAQ0rsQUD6QGwEC wANaxCQrpsAQysgkACiuzQAkLCSuwAjKzQAkHCSuxEQErsQkAERKwDDkAMDEzESEVIREhFSERIRUBNxMHnAMg/YwCYv2eAnT9Zaz0ZwYIoP42oP2ioAe4Tv6wOQAAAAIAnAAAA7wIBgALAA8ARwCyAAAAK7EJA myAQIAK7EEA m0BQgAAQ0rsQUD6QGwEC wANaxCQrpsAQysgkACiuzQAkLCSuwAjKzQAkHCSuxEQErADAxMxEhFSERIRUhESEVARMXAZwDIP2MAmL9ngJ0/er0rP7GBgig/jag/aKgBrYBUE7 xQACAJwAAAO8B/gACwARAE8AsgAAACuxCQPpsgECACuxBAPptAUIAAENK7EFA kBsBIvsADWsQkK6bAEMrIJAAors0AJCwkrsAIys0AJBwkrsRMBK7EJABESsAw5ADAxMxEhFSERIRUhESEVCQIHJwecAyD9jAJi/Z4CdP0lAUABQ3bNywYIoP42oP2ioAbnARH 71yurgAAAAMAnAAAA7wHtgALABcAIwB1ALIAAAArsQkD6bIBAgArsQQD6bQFCAABDSuxBQPpsBUvsCEzsQ8J6bAbMgGwJC wANaxCQrpsAQysgkACiuzQAkLCSuwAjKzQAkHCSuwABCwDCDWEbESEemwCRCxGAErsR4R6bElASuxEgkRErEPFTk5ADAxMxEhFSERIRUhESEVATQ2MzIWFRQGIyImJTQ2MzIWFRQGIyImnAMg/YwCYv2eAnT9MD8vL0BALy8/AZNALy8/Py8vQAYIoP42oP2ioAdILz8/Ly9AQC8vPz8vL0BAAAL/8gAAAZEIBgADAAcAJQCyBAAAK7IFAgArAbAIL7AE1rEHCumxCQErsQcEERKwAzkAMDEDNxMHAxEzEQ6s82aLrAe4Tv6wOfmDBgj5 AAAAgBYAAAB AgGAAMABwAnALIEAAArsgUCACsBsAgvsATWsQcK6bEJASuxBwQRErEBAzk5ADAxGwEXAQMRMxFY9Kz xh6sBrYBUE7 xfmDBgj5 AAAAv 0AAACNwf4AAUACQAnALIGAAArsgcCACsBsAovsAbWsQkK6bELASuxCQYRErEEATk5ADAxAwkBBycHExEzEUwBQAFDds3Ld6wG5wER/u9crq75dQYI fgAAAAD/7wAAAItB7YACwAPABsAQACyDAAAK7INAgArsAkvsBkzsQMJ6bATMgGwHC wANaxBhHpsAYQsQwBK7EPCumwDxCxEAsrsRYR6bEdASsAMDEDNDYzMhYVFAYjIiYTETMREzQ2MzIWFRQGIyImREAvL0BALy9A5KwEPy8vQD8wLz8HSC8/Py8vQED45wYI fgHSC8/Py8vQEAAAAACAAAAAAUZBggAFgArAG8AshQAACuxFwPpsgQCACuxJwPptAEAFAQNK7AqM7EBBemwKDIBsCwvsBXWsAIysRcK6bAnMrIXFQors0AXKgkrshUXCiuzQBUACSuwFxCxIAErsQwK6bEtASsAsRcUERKwEjmxAQARErEMIDk5MDERNTMRITIeAhcWEhUUAgcOAyMhERMzMj4CNz4BNTQmJy4BKwERIRUhnAEiVqCUjUSFe3uBRouWolr 4qx9RoJ5cTVgYWVkauyJfQES/u4C9pMCfw4pSjlz/tWuqv7dcj1NKw4C9v2qDCM/MVrqgYXyWF43/iGTAAAAAAIApv 6BgYHvAAHACMAaQCyAAAAK7AFM7IDAgArsAEzsCAvsQ0F6bAWMrMTDSAIK7EaBemwIzIBsCQvsADWsQcK6bAHELECASuxBQrpsSUBK7ECBxESsQgXOTkAsQMAERKxAgY5ObEgGhESsAg5sQ0TERKwFzkwMTMRAREzEQEREz4DMzIWFx4BMzI2NxcOASMiJicuASMiBgemBLSs 0yeEikxPicvUiQnQBwrNhJgHXBMJU0nJ0ghKysQBkr7EgSs bIE7PtaBxcfOS8aHBMQH0AiTURiHBMQHTwiAAAAAwBO/ UGmAgGABMAJwArAEcAsg8AACuxGQPpsgUCACuxIwPpAbAsL7AA1rEUCumwFBCxHgErsQoK6bEtASuxHhQRErMPBSgqJBc5ALEjGRESsQoAOTkwMRM0EjYkMzIEFhIVFAIGBCMiJCYCNxQeAjMyPgI1NC4CIyIOAgE3EwdOf9sBJaamASTcf3/c/tympv7b23 sYqzog4PnrGNjqueFheiqYgFYrPRnAwKmASPbfX3b/t2mpv7d13191wEjqIPnrmdnrueDg quZGSu6gQxTv6wOQAAAwBO/ UGmAgGABMAJwArAEcAsg8AACuxGQPpsgUCACuxIwPpAbAsL7AA1rEUCumwFBCxHgErsQoK6bEtASuxHhQRErMPBSgqJBc5ALEjGRESsQoAOTkwMRM0EjYkMzIEFhIVFAIGBCMiJCYCNxQeAjMyPgI1NC4CIyIOAgETFwFOf9sBJaamASTcf3/c/tympv7b23 sYqzog4PnrGNjqueFheiqYgH8863 xgMCpgEj23192/7dpqb 3dd9fdcBI6iD565nZ67ng4PqrmRkruoDLwFQTv7FAAAAAAMATv/lBpgH AATACcALQBHALIPAAArsRkD6bIFAgArsSMD6QGwLi wANaxFArpsBQQsR4BK7EKCumxLwErsR4UERKzDwUoKiQXOQCxIxkRErEKADk5MDETNBI2JDMyBBYSFRQCBgQjIiQmAjcUHgIzMj4CNTQuAiMiDgIJAgcnB05/2wElpqYBJNx/f9z 3Kam/tvbf6xirOiDg esY2Oq54WF6KpiATcBQAFDd8zLAwKmASPbfX3b/t2mpv7d13191wEjqIPnrmdnrueDg quZGSu6gNgARH 71yurgAAAwBO/ UGmAe8ABMAJwBDAGYAsg8AACuxGQPpsgUCACuxIwPpsEAvsS0F6bA2MrMzLUAIK7E6BemwQzIBsEQvsADWsRQK6bAUELEeASuxCgrpsUUBK7EeFBESsw8FKDckFzkAsSMZERKxCgA5ObEzOhESsCg5MDETNBI2JDMyBBYSFRQCBgQjIiQmAjcUHgIzMj4CNTQuAiMiDgIBPgMzMhYXHgEzMjY3Fw4BIyImJy4BIyIGB05/2wElpqYBJNx/f9z 3Kam/tvbf6xirOiDg esY2Oq54WF6KpiARISKjE9Jy9SJSc/HSs1E2AdcEwlTicnRyErKxADAqYBI9t9fdv 3aam/t3XfX3XASOog euZ2eu54OD6q5kZK7qA5AfOS8aHBMQH0AiTURiHBMQHTwiAAAEAE7/5QaYB7YAEwAnADMAPwBqALIPAAArsRkD6bIFAgArsSMD6bAxL7A9M7ErCemwNzIBsEAvsADWsRQK6bAUELEoASuxLhHpsC4QsTQBK7E6EemwOhCxHgErsQoK6bFBASuxNC4RErMPGSMFJBc5ALEjGRESsQoAOTkwMRM0EjYkMzIEFhIVFAIGBCMiJCYCNxQeAjMyPgI1NC4CIyIOAgE0NjMyFhUUBiMiJiU0NjMyFhUUBiMiJk5/2wElpqYBJNx/f9z 3Kam/tvbf6xirOiDg esY2Oq54WF6KpiAUFALy9AQC8vQAGUPy8vQD8wLz8DAqYBI9t9fdv 3aam/t3XfX3XASOog euZ2eu54OD6q5kZK7qA8EvPz8vL0BALy8/Py8vQEAAAAABAIcAHQRmA/wACwAUALIDAQArsAUzAbAML7ENASsAMDE3CQE3CQEXCQEHCQGHAX/ gXEBfwF9cv6BAX9y/oP gY0BfwF/cf6BAX9x/oH gXABf/6BAAAAAwBO/ UGmAYjABsAJwAzAHQAshMAACuwFzOxKwPpsgUCACuwCTOxIwPpAbA0L7AA1rEcCumwHBCxMAErsQ4K6bE1ASuxHAARErEXGDk5sDARtwgFExYZCyAoJBc5sA4SsQkKOTkAsSsTERKwGDmwIxG3AAsOCBkWHzMkFzmwBRKwCjkwMRM0EjYkMzIEFzcXBxYSFRQCBgQjIiQnByc3JgI3FBYXAS4BIyIOAhMeATMyPgI1NCYnTn/bASWmkwEGabxevFxpf9z 3KaW/vZruFq2WmSsSEEDf1DLdIXoqmLlVMt1g esY0pEAwKmASPbfWJZu1y7aP72mKb 3dd9ZVq4YLZoAQWVcchSA31CS2Su6v2USE5nrueDc8tWAAAAAgCY/ UE5QgGACUAKQBHALIeAAArsQsD6bIBAgArsBQzAbAqL7AA1rEDCumwAxCxEwErsRYK6bErASuxAwARErAkObATEbIeJig5OTmwFhKwGDkAMDETETMRHAEeARceATMyNjc AjQ1ETMRFA4CBw4BIyImJy4DATcTB5isDB0aM65WVKY2Hx4OrAgaOC1Q23Vv0k4zOx8KAQas82YCQgPG/GkrWltUJEhMSEElVlxfLQOX/Do/cmpiL1ZbUE4xZW55BbhO/rA5AAAAAgCY/ UE5QgGACUAKQBHALIeAAArsQsD6bIBAgArsBQzAbAqL7AA1rEDCumwAxCxEwErsRYK6bErASuxAwARErAkObATEbIeJig5OTmwFhKwGDkAMDETETMRHAEeARceATMyNjc AjQ1ETMRFA4CBw4BIyImJy4DARMXAZisDB0aM65WVKY2Hx4OrAgaOC1Q23Vv0k4zOx8KAarzrP7HAkIDxvxpK1pbVCRITEhBJVZcXy0Dl/w6P3JqYi9WW1BOMWVueQS2AVBO/sUAAgCY/ UE5Qf4ACUAKwBHALIeAAArsQsD6bIBAgArsBQzAbAsL7AA1rEDCumwAxCxEwErsRYK6bEtASuxAwARErAkObATEbIeJig5OTmwFhKwGDkAMDETETMRHAEeARceATMyNjc AjQ1ETMRFA4CBw4BIyImJy4DEwkBBycHmKwMHRozrlZUpjYfHg6sCBo4LVDbdW/STjM7HwrlAT8BRHfNygJCA8b8aStaW1QkSExIQSVWXF8tA5f8Oj9yamIvVltQTjFlbnkE5wER/u9crq4AAAADAJj/5QTlB7YAJQAxAD0AXACyHgAAK7ELA myAQIAK7AUM7AvL7A7M7EpCemwNTIBsD4vsADWsQMK6bADELEmASuxLBHpsCwQsTIBK7E4EemwOBCxEwErsRYK6bE/ASuxMiwRErEeCzk5ADAxExEzERwBHgEXHgEzMjY3PgI0NREzERQOAgcOASMiJicuAxM0NjMyFhUUBiMiJiU0NjMyFhUUBiMiJpisDB0aM65WVKY2Hx4OrAgaOC1Q23Vv0k4zOx8K7UAvLz8/Ly9AAZQ/Ly9AQC8vPwJCA8b8aStaW1QkSExIQSVWXF8tA5f8Oj9yamIvVltQTjFlbnkFSC8/Py8vQEAvLz8/Ly9AQAAAAAIAEAAABLAIBgAIAAwANQCyBwAAK7IAAgArsAMzAbANL7AH1rAJMrEGCumxDgErsQYHERKxAgw5OQCxAAcRErACOTAxEzMJATMBESMRGwEXARDHAYkBicf BqwC9Kz xwYI/VACsPyQ/WgCmAQeAVBO/sUAAgCcAAADxwYIABIAHwBLALIAAAArsgECACu0ERMAAQ0rsRED6bQDHwABDSuxAwPpAbAgL7AA1rESCumxAhMyMrASELEZASuxCgrpsSEBKwCxHxMRErAKOTAxMxEzETMyFhceARUUBgcOASsBGQEzMj4CNTQuAisBnKxSZMdUVlhMSE7AYH1ySH9gOkZzj0w/Bgj 4Rg5O71pXrI7QiX ewIlGEBqVF5tNQ8AAAEAOf/lBFQGtAA7AJUAsjoAACuyHQAAK7EeB myMgIAK7ELBumyAQEAK7EAB mzKQEACCuxKgfpshMBACsBsDwvsDrWsAIysTkN6bA5ELEAEemwAC wORCxIwErsRgL6bMQGCMIK7EvDemwLy xEA3psi8QCiuzQC8dCSuwKTKxPQErsSMAERKxCxM5OQCxADoRErEYIzk5sTIqERKwEDkwMRM1MxE0PgI3PgEzMh4CFRQGBx4DFRQOAgc1PgM1NCYnLgEnNTI AjU0JiMiBgcOARURIxE5WgcQHxo5s1pUkWs9WFRMe1YtYKLVdVaacERMRTuQSDlhRymHZEJ7GBcEpAMrmAEmKVRSTCFKRTlnjVRcpikbZoOcTXnNmFYCmAZCbpZYVqQ1LScGmCBCXDtmfDpBNZY5 2IDKwADAEr/5QQKBfQAFQApAC0AXACyDQAAK7IRAAArsRsH6bIKAQArsgUBACuxJQbpAbAuL7AA1rEWC mwFhCxDQErsQkgMjKxDA3psS8BK7ENFhEStQURGyUqLCQXOQCxJRsRErQACQ4PCCQXOTAxEzQ AjMyFhczNTMRIzUjBiMiLgI3FB4CMzI AjU0LgIjIg4CEzcTB0o/d6xtYqw7BKSkBH/Maqt5P6gpT3VOUHdSKS1SeUxIclItPaz0ZwHfZruLUlZOivw9haBUjLZxSINnPTtlg0lIf144OmB9A3dO/rA6AAADAEr/5QQKBfQAFQApAC0AYwCyDQAAK7IRAAArsRsH6bIKAQArsgUBACuxJQbpAbAuL7AA1rEWC mwFhCxDQErsQkgMjKxDA3psS8BK7ENFhEStgURGyUqKy0kFzmwDBGwLDkAsSUbERK0AAkODwgkFzkwMRM0PgIzMhYXMzUzESM1IwYjIi4CNxQeAjMyPgI1NC4CIyIOAhsBFwFKP3esbWKsOwSkpAR/zGqreT oKU91TlB3UiktUnlMSHJSLeH0rP7GAd9mu4tSVk6K/D2FoFSMtnFIg2c9O2WDSUh/Xjg6YH0CdQFQTv7EAAMASv/lBAoFqAAVACkALwBjALINAAArshEAACuxGwfpsgoBACuyBQEAK7ElBukBsDAvsADWsRYL6bAWELENASuxCSAyMrEMDemxMQErsQ0WERK2BREbJSorLSQXObAMEbAsOQCxJRsRErQACQ4PCCQXOTAxEzQ AjMyFhczNTMRIzUjBiMiLgI3FB4CMzI AjU0LgIjIg4CEwkBBycHSj93rG1irDsEpKQEf8xqq3k/qClPdU5Qd1IpLVJ5TEhyUi0cAUABQ3bNywHfZruLUlZOivw9haBUjLZxSINnPTtlg0lIf144OmB9AmkBEP7wXa6uAAADAEr/5QQKBS8AFQAxAEUAiQCyDQAAK7IRAAArsTcH6bIKAQArsgUBACuxQQbpsC4vsRsF6bAkMrMhGy4IK7EoBemwMTIBsEYvsADWsTIL6bAyELENASuxCTwyMrEMDemxRwErsTIAERKwFjmwDRG3BREbJCgxN0EkFzmwDBKwJTkAsUENERK0AAkIDg8kFzmxISgRErAWOTAxEzQ AjMyFhczNTMRIzUjBiMiLgITPgMzMhYXHgEzMjY3Fw4BIyImJy4BIyIGBwMUHgIzMj4CNTQuAiMiDgJKP3esbWKsOwSkpAR/zGqreT kEikxPiYvUiUnQBwrNhJgHXBMJU0nJ0ghKysQYClPdU5Qd1IpLVJ5TEhyUi0B32a7i1JWTor8PYWgVIy2Aw4fOS8bHRIQHz8jTkRiHRIQHjwj/bNIg2c9O2WDSUh/Xjg6YH0AAAAEAEr/5QQKBaQAFQApADUAQQCLALINAAArshEAACuxGwfpsgoBACuyBQEAK7ElBumwMy wPzOxLQnpsDkyAbBCL7AA1rEWC mwFhCxKgErsTAR6bAwELENASuxCSAyMrEMDemzPAwNCCuxNhHpsDYvsTwR6bFDASuxNjARErMRBSUbJBc5sDwRsQgPOTkAsSUNERK0AAkIDg8kFzkwMRM0PgIzMhYXMzUzESM1IwYjIi4CNxQeAjMyPgI1NC4CIyIOAhM0NjMyFhUUBiMiJiU0NjMyFhUUBiMiJko/d6xtYqw7BKSkBH/Maqt5P6gpT3VOUHdSKS1SeUxIclItJT8vL0BALy8/AZNALy8/Py8vQAHfZruLUlZOivw9haBUjLZxSINnPTtlg0lIf144OmB9AwYvQEAvLz8/Ly9AQC8vPz8AAAAEAEr/5QQKBfoAFQApADkARQCgALINAAArshEAACuxGwfpsgoBACuyBQEAK7ElBumwNy 0PQQAFAQrsEMvtC8EABQEKwGwRi wANaxFgvpsBYQsSoBK7Q6DgASBCuwOhCxQAErtDQOABIEK7A0ELENASuxCSAyMrEMDemxRwErsUA6ERK1EQUlGzcvJBc5sQ00ERKxCA85OQCxJQ0RErQACQgODyQXObFDPRESsTQqOTkwMRM0PgIzMhYXMzUzESM1IwYjIi4CNxQeAjMyPgI1NC4CIyIOAhM0PgIzMh4CFRQGIyImNxQWMzI2NTQmIyIGSj93rG1irDsEpKQEf8xqq3k/qClPdU5Qd1IpLVJ5TEhyUi2XHzdKKSlINx9zVFR1ZzkpKTc3KSk5Ad9mu4tSVk6K/D2FoFSMtnFIg2c9O2WDSUh/Xjg6YH0DBClINx8fN0gpVHV1VCk5OSkpNzcAAwA7/ UGeQPdADgATABXAOQAsjQAACuwLjOxPgfpsCcyshQBACuxExwzM7ENBumxDlMyMrRNIjQUDSuwSDOxTQTpsQUF6QGwWC wANaxOQ3psDkQsUMBK7EiCumxWQErsDYauhFbwmYAFSsKsBMuDrARwAWxDgb5DrAQwLAQELMPEA4TK7ARELMSERMTK7ISERMgiiCKIwYOERI5sg8QDhESOQCzEBEPEi4uLi4BtRARDg8SEy4uLi4uLrBAGgGxQzkRErMNBRQ0JBc5sCIRshkIMTk5OQCxIj4RErQAKisxOSQXObEFNBESsAg5sA0RsBk5MDETND4CMzIWFzQuAiMiBgc1PgEzMh4CFz4BMzIeAgchFB4CMzI2NxcOASMiJicOASMiLgI3FB4CMzI AjU0LgIjIg4CJSEuAyMiDgI7SHOPSFCBQRxAak5Mk0hOk1A1bV5OFjnQbHWudTcE/QovUnVFaI4vjEbjlG3CQTu3d0iTd0ykL0ZWJylcTDM1UFglJ1ZILwK0AkAIM0pgNjViUDUBG1R4TiUlLUh1VC0lGZwXIhYxTDNgZliXxWtEdFYzcVZQgY5fYGhXI0p1WC8 JRAQJ0IxLz0lERMpQf4zXEYnJ0ZcAAIAO/5oA20D3QAjACcAQwCyJQAAK7IfAAArsRcH6bIFAQArsQ0G6QGwKC wANaxEgvpsSkBKwCxFx8RErAcObANEbMACRobJBc5sAUSsAg5MDETND4CMzIWFxUjLgEjIg4CFRQeAjMyNjczFQ4BIyIuAgETFwM7Uoy6ak6aQQQ5j2NKfFo0L1Z7TGiWOwVIlFZtvIlOAQDFmOoB4Wq7iU4xL9lIWjpigUhIgGM5WE7bLzROh7v9LQEvPv7VAAAAAAMARv/lA EF9AAbAB8AKgBAALIXAAArsRAH6bIFAQArsSYG6bQgCxcFDSuxIATpAbArL7AA1rELC mxLAErALELEBESsRMUOTmwIBGwADkwMRM0PgIzMh4CByEUHgIzMjY3Fw4BIyIuAhM3EwcBIS4DIyIOAkY9d65xda91NQb9DS9SdEZoji LRuOTba57Qa6s82b yQI/CDNKYDU1Y1A1AdVqv41SWJfFa0R0VjNxVlCBjk6FtQQ5Tv6wOv3gM1xGJydGXAAAAwBG/ UD4QX0ABsAJgAqAEAAshcAACuxEAfpsgUBACuxIgbptBwLFwUNK7EcBOkBsCsvsADWsQsL6bEsASsAsQsQERKxExQ5ObAcEbAAOTAxEzQ AjMyHgIHIRQeAjMyNjcXDgEjIi4CNyEuAyMiDgIbARcBRj13rnF1r3U1Bv0NL1J0RmiOL4tG45NtrntBsAI/CDNKYDU1Y1A1mvOs/scB1Wq/jVJYl8VrRHRWM3FWUIGOToW13TNcRicnRlwCJwFQTv7EAAADAEb/5QPhBagAGwAhACwASACyFwAAK7EQB myBQEAK7EoBum0IgsXBQ0rsSIE6QGwLS wANaxCwvpsS4BK7ELABESsBw5ALELEBESsRMUOTmwIhGwADkwMRM0PgIzMh4CByEUHgIzMjY3Fw4BIyIuAhMJAQcnBwMhLgMjIg4CRj13rnF1r3U1Bv0NL1J0RmiOL4tG45NtrntBjQE/AUR3zcpSAj8IM0pgNTVjUDUB1Wq/jVJYl8VrRHRWM3FWUIGOToW1AysBEP7wXa6u/g8zXEYnJ0ZcAAAEAEb/5QPhBaQAGwAnADIAPgB/ALIXAAArsRAH6bIFAQArsS4G6bQoCxcFDSuxKATpsCUvsDwzsR8J6bA2MgGwPy wANaxCwvpsxwLAAgrsSIR6bALELEzASuxORHpsUABK7EiCxESsh8lKDk5ObAzEbMQFwUuJBc5sDkSsCk5ALELEBESsRMUOTmwKBGwADkwMRM0PgIzMh4CByEUHgIzMjY3Fw4BIyIuAhM0NjMyFhUUBiMiJhMhLgMjIg4CATQ2MzIWFRQGIyImRj13rnF1r3U1Bv0NL1J0RmiOL4tG45NtrntBlUAvLz8/Ly9AGwI/CDNKYDU1Y1A1AXE/Ly9AQC8vPwHVar NUliXxWtEdFYzcVZQgY5OhbUDyC9AQC8vPz/9RDNcRicnRlwCuC9AQC8vPz8AAAACAAoAAAGqBfQAAwAHACUAsgQAACuyBQEAKwGwCC wBNaxBw3psQkBK7EHBBESsAM5ADAxEzcTBwMRMxEKrPRmiqQFpk7 sDr7lgPD/D0AAAIAcQAAAhAF9AADAAcAJQCyBAAAK7IFAQArAbAIL7AE1rEHDemxCQErsQcEERKwAzkAMDEbARcBAxEzEXHzrP7HHaQEpAFQTv7E 5YDw/w9AAAAAAL/ywAAAk4F5QAFAAkAJwCyBgAAK7IHAQArAbAKL7AG1rEJDemxCwErsQkGERKxBAE5OQAwMQMJAQcnBxMRMxE1AT8BRHfNy3ukBNUBEP7wXK6u 4cDw/w9AAAAA//VAAACRgWkAAsADwAbAEAAsgwAACuyDQEAK7AJL7AZM7EDCemwEzIBsBwvsADWsQYR6bAGELEMASuxDw3psA8QsRABK7EWEemxHQErADAxAzQ2MzIWFRQGIyImExEzERM0NjMyFhUUBiMiJitALy8/Py8vQOWkCkAvL0BALy9ABTUvQEAvLz8/ voDw/w9BTUvQEAvLz8/AAAAAgBG/ cENwamACwAQABwALIoAAArsTIH6bIFAQArsTwF6bAaLwGwQS wANaxLQvpsC0QsTcBK7EjDOmxQgErsS0AERKxDxM5ObA3EUAJBQ4KFBoQHigcJBc5sCMSsBs5ALE8MhESsSMAOTmwBRGwCjmwGhK0DQ4TGR4kFzkwMRM0PgIzMh4CFy4BJwUnJS4BJzceAxclFwUeBRUUDgIjIi4CNxQeAjMyPgI1NC4CIyIOAkZFgbVuRGpOMxEzuW/ 8FABCht0cVszSj07IwEbUv7tGVReYk4xXpOzVGq4ik2mNV57SEx8WjIyWH1LTH1cMwHhYLeNVB8pLQ6P8mi2VLIXXEZeITErLR 9VLkZU3eYttd5kc FQFCKuGpQg14zOWOBR0aBYjw4YIEAAgCcAAADngWqABoANgB8ALIAAAArsA0zsgEBACuyBwEAK7EUBumwMy xIAXpsCkysyYgMwgrsS0F6bA2MgGwNy wANaxGgzpsAIysBoQsQ4BK7ENDemxOAErsRoAERKxGzY5ObAOEbQHICYtMyQXObANErEpKjk5ALEHFBESsAM5sSYtERKwGzkwMTMRMxUzPgEzMh4CFREjETQuAiMiDgIVEQM AzMyFhceATMyNjcXDgEjIiYnLgEjIgYHnKMFM4VaZH9KG6QKJ1JIVGAvDYkSKjE9Jy9SJSc/HSs1E2AdcEwlTicnRyErKxADw3VGSUNzmFT9xQIfOW1PMkhvhz/ NwUEHzkvGx0SEB8/I05EYh0SEB07IwAAAAADAEb/5QQ5BfQAEwAnACsARwCyDwAAK7EZB myBQEAK7EjBukBsCwvsADWsRQM6bAUELEeASuxCgzpsS0BK7EeFBESsw8FKCokFzkAsSMZERKxCgA5OTAxEzQ AjMyHgIVFA4CIyIuAjcUHgIzMj4CNTQuAiMiDgITNxMHRk2KuGpquYpNUIm5aGi4iVCjMlp/S0x/WjIyWn9MTH5aMjas82YB32q5i1BQi7hrarmJTk6JuWxKgGM3N2OBSUqBYDo6YIEDe07 sDoAAAADAEb/5QQ5BfQAEwAnACsARwCyDwAAK7EZB myBQEAK7EjBukBsCwvsADWsRQM6bAUELEeASuxCgzpsS0BK7EeFBESsw8FKCokFzkAsSMZERKxCgA5OTAxEzQ AjMyHgIVFA4CIyIuAjcUHgIzMj4CNTQuAiMiDgIbARcBRk2KuGpquYpNUIm5aGi4iVCjMlp/S0x/WjIyWn9MTH5aMtrzrP7HAd9quYtQUIu4a2q5iU5OiblsSoBjNzdjgUlKgWA6OmCBAnkBUE7 xAADAEb/5QQ5BagAEwAnAC0ARwCyDwAAK7EZB myBQEAK7EjBukBsC4vsADWsRQM6bAUELEeASuxCgzpsS8BK7EeFBESsw8FKCokFzkAsSMZERKxCgA5OTAxEzQ AjMyHgIVFA4CIyIuAjcUHgIzMj4CNTQuAiMiDgITCQEHJwdGTYq4amq5ik1QibloaLiJUKMyWn9LTH9aMjJaf0xMfloyFQE/AUR3zcoB32q5i1BQi7hrarmJTk6JuWxKgGM3N2OBSUqBYDo6YIECbQEQ/vBdrq4AAAMARv/lBDkFLwATAC8AQwB0ALIPAAArsTUH6bIFAQArsT8G6bAsL7EZBemwIjKzHxksCCuxJgXpsC8yAbBEL7AA1rEwDOmwMBCxOgErsQoM6bFFASuxMAARErAUObA6EbUPGSImLwUkFzmwChKwIzkAsT81ERKxCgA5ObEfJhESsBQ5MDETND4CMzIeAhUUDgIjIi4CEz4DMzIWFx4BMzI2NxcOASMiJicuASMiBgcDFB4CMzI AjU0LgIjIg4CRk2KuGpquYpNUIm5aGi4iVCTEikyPScvUiUnPx0rNRNgHXBMJU4nJ0chKysRVDJaf0tMf1oyMlp/TEx WjIB32q5i1BQi7hrarmJTk6JuQMUHzkvGx0SEB8/I05EYh0SEB48I/2oSoBjNzdjgUlKgWA6OmCBAAAAAAQARv/lBDkFpAATACcAMwA/AGoAsg8AACuxGQfpsgUBACuxIwbpsDEvsD0zsSsJ6bA3MgGwQC wANaxFAzpsBQQsSgBK7EuEemwLhCxNAErsToR6bA6ELEeASuxCgzpsUEBK7E0LhESsw8ZIwUkFzkAsSMZERKxCgA5OTAxEzQ AjMyHgIVFA4CIyIuAjcUHgIzMj4CNTQuAiMiDgITNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiZGTYq4amq5ik1QibloaLiJUKMyWn9LTH9aMjJaf0xMfloyH0AvLz8/Ly9AAZQ/Ly9AQC8vPwHfarmLUFCLuGtquYlOTom5bEqAYzc3Y4FJSoFgOjpggQMKL0BALy8/Py8vQEAvLz8/AAAAAAMAhwAUBGYEBAADAA8AGwAwALITAQArsRkJ6bANL7EHCemwAC xAQPpAbAcL7AE1rAQMrEKEemwFjKxHQErADAxEzUhFQE0NjMyFhUUBiMiJhE0NjMyFhUUBiMiJocD3/2cRi8vRkYvL0ZGLy9GRi8vRgG8oKD zS9GRi8xREQDNy9GRi8xQ0MAAAAAAwAp/8cEVgP0ABsAJwAxAHgAshsAACuyFwAAK7EqB myCQEAK7EjBumyDQEAKwGwMi wBNaxHAzpsBwQsS8BK7ESDOmxMwErsRwEERKxARs5ObAvEbUMFxoJICgkFzmwEhKxDQ85OQCxKhcRErEAGjk5sCMRtQEPEgQfMSQXObAJErEMDjk5MDE/AS4BNTQ AjMyFhc3FwceARUUDgIjIiYnBxMUFhcBLgEjIg4CExYzMj4CNTQnKYs1OU2KuGpcpECHUIkzOVCJuGlan0KLcB8dAespaj5MfloyilR4TH9aMjwXi0KfXGq5i1A7NYdOiT jXGq5iU46M4sCGjtpKwHsIyU6YIH lkQ3Y4FJdVQAAAAAAgCP/ UDiQX0ABkAHQBCALIVAAArsQgH6bIBAQArsA4zAbAeL7AA1rEDDemwAxCxDQErsRAN6bEfASuxAwARErAaObANEbMVGxwdJBc5ADAxExEzERQeAjMyPgI1ETMRFA4CIyIuAhM3EwePpAwrWUlKWCsMpCdakWtqklonXazzZgGYAiv95z1tUjExUm09Ahn91WCgc0BAc58Eb07 sDoAAAACAI//5QOJBfQAGQAdAEIAshUAACuxCAfpsgEBACuwDjMBsB4vsADWsQMN6bADELENASuxEA3psR8BK7ENAxESsxUaGx0kFzmwEBGwHDkAMDETETMRFB4CMzI AjURMxEUDgIjIi4CARMXAY kDCtZSUpYKwykJ1qRa2qSWicBAPSs/scBmAIr/ec9bVIxMVJtPQIZ/dVgoHNAQHOfA20BUE7 xAAAAAACAI//5QOJBeUAGQAfAEgAshUAACuxCAfpsgEBACuwDjMBsCAvsADWsQMN6bADELENASuxEA3psSEBK7EDABESsBo5sA0RsxUbHR8kFzmwEBKwHDkAMDETETMRFB4CMzI AjURMxEUDgIjIi4CEwkBBycHj6QMK1lJSlgrDKQnWpFrapJaJzwBPwFEd83LAZgCK/3nPW1SMTFSbT0CGf3VYKBzQEBznwOeARD 8FyurgAAAAADAI//5QOJBaQAGQAlADEAYgCyFQAAK7EIB myAQEAK7AOM7AjL7AvM7EdCemwKTIBsDIvsADWsQMN6bAaINYRsSAR6bADELENASuxEA3psBAQsCwg1hGxJhHpsCYvsSwR6bEzASuxJiARErEVCDk5ADAxExEzERQeAjMyPgI1ETMRFA4CIyIuAhM0NjMyFhUUBiMiJiU0NjMyFhUUBiMiJo kDCtZSUpYKwykJ1qRa2qSWidGQC8vPz8vL0ABk0AvL0BALy9AAZgCK/3nPW1SMTFSbT0CGf3VYKBzQEBznwP L0BALy8/Py8vQEAvLz8/AAAAAv/8/eMEAAX0AAcACwAfALIAAQArsAMzsAYvAbAML7ENASsAsQAGERKwAjkwMQMzCQEzASMBAxMXAQS AVQBOLr9OboBNwz0rP7GA8P9TQKz iACdwRKAVBO/sQAAAAAAgCT/eMEVAaaABYAKgBWALIRAAArsRwH6bIHAQArsSYG6bAAL7ABLwGwKy wANaxFg3psQIXMjKwFhCxIQErsQwL6bEsASuxIRYRErMHERwmJBc5ALEmHBEStAQMFBUDJBc5MDETETMRMz4BMzIeAhUUDgIjIiYnIxEDFB4CMzI AjU0LgIjIg4Ck6QEO61kaqt2QkB2rG1irDwECClQdU1Qd1IpLVJ5TEhyUi394wi3/J9QVFSNuGVmuIxQVE79XAQJSINnPTtlg0lIf144OmB9AAAD//z94wQABaQABwATAB8ATgCyAAEAK7ADM7AGL7ARL7AdM7ELCemwFzIBsCAvsAjWsQ4R6bAOELEUASuxGhHpsSEBK7EOCBESsAU5sBQRsQIHOTkAsQAGERKwAjkwMQMzCQEzASMBAzQ2MzIWFRQGIyImJTQ2MzIWFRQGIyImBL4BVAE4uv05ugE35T8vL0A/MC8/AZNALy9AQC8vQAPD/U0Cs/ogAncE2y9AQC8vPz8vL0BALy8/PwAAAAMADAAABYsHtgAGABgAGwBBALIAAAArsAIzsgECACu0BRkAAQ0rsQUD6bAUL7ELBOmyCxQKK7NACw8JK7AHMgGwHC xHQErALEBGRESsBs5MDEzCQEjAyEDEzMeATMyNjczDgMjIi4CEyEBDALJAra tv1surKNG1xMTFwajgg8WnM/PXNbPUYCCv7 BlL5rgG2/koHtkZFRkU/Z0knJ0ln t8CawAAAAMASv/lBAoFfwAVACkAOwB4ALINAAArshEAACuxHAfpsgoBACuyBQEAK7EmBumwNy xLgTpsi43CiuzQC4yCSuwKjIBsDwvsADWsRcL6bAXELENASuxCSEyMrEMDemxPQErsQ0XERK2BREcJioxNyQXObAMEbAyOQCxJg0RErQACQgODyQXOTAxEzQ AjMyFhczNTMRIzUjBiMiLgI2FRQeAjMyPgI1NC4CIyIOAQMzHgEzMjY3Mw4DIyIuAko/d6xtYqw7BKSkBH/Maqt5P6gpT3VOUHdSKS1SeUxIclIhjRtcTExcGo4IPFpzPz1zWz0B32a7i1JWTor8PYWgVIy2tENIg2c9O2WDSUh/Xjg6YALTRkVGRT9nSScnSWcAAAIAAAAABRkGCAAWACsAbwCyFAAAK7EXA myBAIAK7EnA m0AQAUBA0rsCozsQEF6bAoMgGwLC wFdawAjKxFwrpsCcyshcVCiuzQBcqCSuyFRcKK7NAFQAJK7AXELEgASuxDArpsS0BKwCxFxQRErASObEBABESsQwgOTkwMRE1MxEhMh4CFxYSFRQCBw4DIyEREzMyPgI3PgE1NCYnLgErAREhFSGcASJWoJSNRIV7e4FGi5aiWv7irH1GgnlxNWBhZWRq7Il9ARL 7gL2kwJ/DilKOXP 1a6q/t1yPU0rDgL2/aoMIz8xWuqBhfJYXjf IZMAAAAAAgBI/ UEpgaaAB4AMgCAALIVAAArshoAACuxJAfpsgUBACuxLgbpsAsvsBIzsQwG6bAQMrAOLwGwMy wANaxHwvpsB8QsRUBK7IJDSkyMjKxFA3psA8yshQVCiuzQBQSCSuyFRQKK7NAFQsJK7E0ASuxFR8RErMFGiQuJBc5ALEuFREStAAJCBYXJBc5MDETND4CMzIWFzMRITUhNTMVMxUjESM1Iw4BIyIuAjcUHgIzMj4CNTQuAiMiDgJIP3esbWKsOwT 7AEUpJ6epAQ7rmNqqnk/qClPdU5Qd1IpLlF5TEhyUi0B32a7i1JWTgHRlvr6lvr2hU5SVIy2cUiDZz07ZYNJSH9eODpgfQAAAAAC/5IAAAJfB/AAGwAfAE4AshwAACuyHQIAK7AYL7EFBemwDjKzCwUYCCuxEgXpsBsyAbAgL7Ac1rEfCumxIQErsR8cERKxFhU5OQCxGBIRErAAObEFCxESsA85MDEDPgMzMhYXHgEzMjY3Fw4BIyImJy4BIyIGBxMRMxFuEikxPicvUiUnPx0rNRJhHXFMJU0nJ0ghKysQqqwHSh85LxsdEhAfPyNORGIdEhAdOyP5BgYI fgAAAAAAv oAAACdQUvABsAHwBEALIcAAArsh0BACuwGC xBQXpsA4yswsFGAgrsRIF6bAbMgGwIC wHNaxHw3psSEBKwCxGBIRErAAObEFCxESsA85MDEDPgMzMhYXHgEzMjY3Fw4BIyImJy4BIyIGBxMRMxFYEikxPicvUiUnPx0rNRJhHXFLJU4nJ0ggKysRrqQEiR85LxsdEhAfPyNORGIdEhAePCP7xwPD/D0AAAEAugAAAV4DwwADACEAsgAAACuyAQEAKwGwBC wANaxAw3psQMN6bEFASsAMDEzETMRuqQDw/w9AAAAAAEAAAAAAvIGCAANAEcAsgwAACuxCQPpsgMCACsBsA4vsAzWsAIysQkK6bAEMrIJDAors0AJCwkrsgwJCiuzQAwBCSuxDwErALEDCRESsQANOTkwMRE1NxEzESUVBREhFSERnKwBCv72Aar9qgIppGQC1/2arKSs/aKgAo0AAAAAAQAfAAAB8gaaAAsANwCyCgAAK7ADLwGwDC wCtawAjKxCQ3psAQysgkKCiuzQAkHCSuyCgkKK7NACgEJK7ENASsAMDETNTcRMxE3FQcRIxEfl6SYmKQCkZJkAxP9XGSRZfycAvYAAAACAE7/5Qj8BiMAHgAyAJoAshUAACuxEgPpshoAACuxJAPpsgoCACuxDQPpsgUCACuxLgPptA4RGgUNK7EOA kBsDMvsADWsR8K6bAfELEWASuwCTKxEgrpsA0ysBIQsSkO6bApL7ISKQors0ASFAkrsAsys0ASEAkrsTQBK7EWHxESswUXJC4kFzkAsRESERKxFhc5ObAOEbIAHyk5OTmwDRKxCQg5OTAxEzQSNiQzMgQXMxEhFSERIRUhESEVIREjBgQnIiQmAjcUHgIzMj4CNTQuAiMiDgJOf9sBJaa4AT1pBAMn/YUCaP2YAnv82QRk/r64pv7b23 sYqzog4PnrGNjqueFheiqYgMCpgEj232unAEvoP42oP2ioAEpmqwCfdcBI6iD565nZ67ng4PqrmRkruoAAAADAEb/5Qc/A90AKwA/AEoAcwCyJwAAK7AdM7ExB mwFjKyBQEAK7ALM7E7BumwRjK0QBEnBQ0rsUAE6QGwSy wANaxLAvpsCwQsTYBK7ERCumxTAErsTYsERKwJzmwERGxCCI5OQCxETERErIZGiI5OTmwQBGyACw2OTk5sDsSsAg5MDETND4CMx4BFz4BNzIeAgchFB4CMzI2NxcOASMiLgInDgMjIi4CNxQeAjMyPgI1NC4CIyIOAiUhLgMjIg4CRk2KuGqH6Ds51H11sHY4B/0JL1J0RmiOL4tG45M7d2tWGx9dcX1AaLiJUKgxWn9MTH5aMjJafkxMf1oxA2gCQAg0SmA1NWNQNQHfarmLUAR3bnF0BFiXxWtEdFYzcVZQgY4fO1c1N1c5H06JuWxKgGM3N2OBSUqBYDo6YIEfM1xGJydGXAAAAgBS/ UEGQf4ADsAQQBpALI3AAArsQYD6bIbAgArsSID6QGwQi wFtaxJwrpsAAg1hGxAQvpsCcQsQsBK7EyCumxQwErsScBERKwPDmwCxFACQYSGx8uNz0/QSQXObAyErEeQDk5ALEiBhEStQABFh4fMiQXOTAxEzceAzMyPgI1NC4CLwEuAzU0PgIzMhYXBy4BIyIOAhUUHgIfAR4DFRQOAiMiLgITNxc3FwFSqAg1UGs9PXNYNjJPZzVeRHtcNUV5nFaB0T2JL3liM11HKS9GViZnTIVmPEyFsGVcoH1WrHfNy3T wQF1LztpTi0tUG9BRF5GMxgpH0ZaeVRakWc3fXNYUFgjP1g2MUs6KRItIUxkhVxmr39KOmiUBoFcrq5c/u8AAAACAEz/5QLlBeUALgA0AGIAsiwAACuxBAfpshMBACuxGgbpAbA1L7AO1rEdDumwHRCxBwErsScL6bE2ASuxHQ4RErEBMDk5sAcRtwQLExchLDE0JBc5sCcSshYyMzk5OQCxGgQRErUAAQ4WFyckFzkwMT8BHgEzMjY1NC4ENTQ AjMyFhcHLgEjIgYVFB4CFx4DFRQOAiMiJgM3FzcXAUyRH1RSQlk/Ym9iQC1QZztUiyGJEEYtK0wnPVArK1A9JzNadUN7sht3zcp1/sHZPkRWUkE1QjErQF5MPWVHJ2ZMSCc8PC8hLyceExItQFg9RHVSL4EFI1yurlz 8AACAJj/5QTlB/AAJQBBAG4Ash4AACuxCwPpsgECACuwFDOwPi xKwXpsDQyszErPggrsTgF6bBBMgGwQi wANaxAwrpsAMQsRMBK7EWCumxQwErsQMAERKwJDmwExGyHiY1OTk5sBYSsBg5ALE HhESsCY5sSsxERKwNTkwMRMRMxEcAR4BFx4BMzI2Nz4CNDURMxEUDgIHDgEjIiYnLgMTPgMzMhYXHgEzMjY3Fw4BIyImJy4BIyIGB5isDB0aM65WVKY2Hx4OrAgaOC1Q23Vv0k4zOx8KvhIpMT4nL1IlJz8dKzUSYR1xTCVNJydIISsrEAJCA8b8aStaW1QkSExIQSVWXF8tA5f8Oj9yamIvVltQTjFlbnkFSh85LxsdEhAfPyNORGIdEhAdOyMAAAAAAgCP/ UDiQUxABkANQB0ALIVAAArsQgH6bIBAQArsA4zsDIvsR8F6bAoMrMlHzIIK7EsBemwNTIBsDYvsADWsQMN6bADELENASuxEA3psTcBK7EDABESsRo1OTmwDRG0FR8lLDIkFzmwEBKxKCk5OQCxMhURErAaObEfJRESsCk5MDETETMRFB4CMzI AjURMxEUDgIjIi4CEz4DMzIWFx4BMzI2NxcOASMiJicuASMiBgePpAwrWUlKWCsMpCdakWtqklonFxIpMT4nL1IlJz8dKzUSYR1xTCVNJydIISsrEAGYAiv95z1tUjExUm09Ahn91WCgc0BAc58DVB85LxsdEhAfPyNORGIdEhAdOyMAAAAAAwAQAAAEsAe2AAgAFAAgAGMAsgcAACuyAAIAK7ADM7ASL7AeM7EMCemwGDIBsCEvsAfWsQYK6bMPBgcIK7EJEemwCS xDxHpsAYQsRUBK7EbEemxIgErsQcJERKxDBI5ObEGDxESsAI5ALEABxESsAI5MDETMwkBMwERIxEDNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYQxwGJAYnH/gasy0AvL0BALy9AAZRALy8/Py8vQAYI/VACsPyQ/WgCmASwLz8/Ly9AQC8vPz8vL0BAAAIAHQAABIUH AAHAA0AHgCyAAAAK7EFA myAwIAK7ECA kBsA4vsQ8BKwAwMTMBITUhASEVATcXNxcBHQNJ/SED/vy0Azb8wHfNynX wQVooPqYoAecXK6uXP7vAAAAAAIAFAAABBQF5QAHAA0AHgCyAAAAK7EFB myAwEAK7ECB kBsA4vsQ8BKwAwMTMBITUhASEVATcXNxcBFAK3/csDfv1MApj8 nbNy3X wAMrmPzVmAWJXK6uXP7wAAAAAAEACv7hBE4GtAApARUAshYCACuxEQPpsgoBACuxCx0zM7EJBOmxCCAyMrAAL7EBB kBsCovsSsBK7A2Gro/A/TOABUrCg6wBRCwDMCxJBL5sBrAsAUQswYFDBMrswcFDBMrBbMIBQwTK7MLBQwTK7o 1/PgABUrC7AkELMbJBoTK7McJBoTKwWzHSQaEyuzICQaEyu6Ptfz4AAVKwuzISQaEyuzIiQaEyuzIyQaEyuyBgUMIIogiiMGDhESObAHObIjJBoREjmwIjmwITmwHDmwGzkAQAsHDBwhBQYaGyIjJC4uLi4uLi4uLi4uAUAPBwgLDBwdICEFBhobIiMkLi4uLi4uLi4uLi4uLi4usEAaAQCxFgoRErAUObAREbATOTAxEzcXMj4CNxMjNzMTPgMzMhcHJiMiBgcOAQcDMwcjAw4DBw4BIwohRlxsQCEMdagWrDoMK052WUpBHzMzK0IWFBcLM/YX93cIExgjGT3JaP7pmgJAaItKAnuLAURMhWI5GpoXGSkpZiv 6Yv9fStjYlwlWkoAAAIATP/lB04GIwAdADEAZwCyGQAAK7EjA myDQIAK7IFAgArsS0D6QGwMi wANaxHgrpsB4QsSgBK7EUCumwFBCxDQErsQ4K6bEzASuxKB4RErEZBTk5sBQRsQoROTmxDg0RErAPOQCxLSMRErMAERQKJBc5MDETNBI2JDMyHgIXPgE3Mw4BBx4BFRQCBgQjIiQmAjcUHgIzMj4CNTQuAiMiDgJMf9sBJaZoxayRNz9LBK4Id2sXG3/c/tympv7b23 sYqzog4PnrGJiqueFheiqYgMCpgEj2301X4dSP6tonvdcQotIpv7d13191wEjqIPnrmdnrueDg quZGSu6gACAET/5QS4A90AGgAuAFsAshYAACuxIAfpsgUBACuwCzOxKgbpAbAvL7AA1rEbDOmwGxCxJQErsREN6bMLESUIK7EMDumxMAErsSUbERKxFgU5ObALEbEIDzk5ALEqIBESsgAPCDk5OTAxEzQ AjMyFhc ATUzFAYHFgcUDgIjIi4CNxQeAjMyPgI1NC4CIyIOAkRNirhqe89GLTGNWEkhAVCJuGlouIpPozJafkxMf1oxMVp/TEx WjIB32q5i1BoWiNeQWqiOVRlarmJTk6JuWxKgGM3N2OBSUqBYDo6YIEAAAABAJj/5QYZBggALwBdALIoAAArsQsD6bIBAgArsRQZMzMBsDAvsADWsQMK6bADELETASuxIArpsBUysCAQsRkBK7EaDumxMQErsQMAERKwLjmwExGwKDmwIBKwIjkAsQELERKxFh85OTAxExEzERwBHgEXHgEzMjY3PgI0NREzET4BNzMUDgIHERQOAgcOASMiJicuA5isDB0aM65WVKY2Hx4OrEhUApYwT3FECBo4LVDbdW/STjM7HwoCQgPG/GkrWltUJEhMSEElVlxfLQOX/r81rl5QmYNrIf4yP3JqYi9WW1BOMWVueQAAAAEAj//lBJ4DwwAhAFEAsh0AACuxCAfpsgEBACuxDhMzMwGwIi wANaxAw3psAMQsQ0BK7EYDemwDzKwGBCxEwErsRQO6bEjASuxDQMRErAdOQCxAQgRErEQFzk5MDETETMRFB4CMzI AjURMxU ATczDgEHFRQOAiMiLgKPpAwrWUlKWCsMpEJDAo4ClH8nWpFrapJaJwGYAiv95z1tUjExUm09Ahn M3JZltE9h2Cgc0BAc58AAAABAKAEeQMjBeUABQArALAFL7ADM7QBCQAMBCsBsAYvsADWtAIRAAcEK7EHASsAsQEFERKwBDkwMRMJAQcnB6ABPwFEd83LBNUBEP7wXK6uAAEAoAR5AyMF5QAFACoAsAUvtAMJAAwEKwGwBi wANa0BBEABwQrsQcBKwCxAwURErEBAjk5MDETNxc3FwGgd8zLdf7ABYlcrq5c/vAAAAAAAQCiBOkDXgV1AAMAFwCwAC xAQTpsQEE6QGwBC xBQErADAxEzUhFaICvATpjIwAAQCiBKQDQgW6ABEAKwCwDS xBATpsgQNCiuzQAQICSuwADIBsBIvsADWtAgRAAcEK7ETASsAMDETMx4BMzI2NzMOAyMiLgKijRtcTExcGo4IPFpzPz1zWz0FukZFRkU/Z0knJ0lnAAABAQAE3QHdBboACwAiALAJL7EDCemxAwnpAbAML7AA1rEGEemxBhHpsQ0BKwAwMQE0NjMyFhUUBiMiJgEAQC8vPz8vL0AFTC8/Py8vQEAAAAIAoARqAi8F gAPABsATACwDS 0EwQAFAQrsBkvtAUEABQEKwGwHC wANa0EA4AEgQrsBAQsRYBK7QKDgASBCuxHQErsRYQERKxDQU5OQCxGRMRErEKADk5MDETND4CMzIeAhUUBiMiJjcUFjMyNjU0JiMiBqAeOEkpKUg3H3NUVHRmOSkpODgpKTkFMylINx8fN0gpVHV1VCk5OSkpNzcAAAAAAQCg/lICFAAAABgAPQCyBQAAK7AUL7EPBOkBsBkvsADWtAwOAB4EK7IMAAors0AMBwkrsRoBKwCxDxQRErASObAFEbEAETk5MDEXND4CNzMVDgMVFBYzMjcHBiMiLgKgHDI9H4MZOTEhRis/OxQ9RCtQPSfwJ0g7NBIEECs2OyExKyWHHxgyRwAAAAABAKAEtANtBaoAGwAzALAYL7EFBemwDjKzCwUYCCuxEgXpsBsyAbAcL7EdASsAsRgSERKwADmxBQsRErAPOTAxEz4DMzIWFx4BMzI2NxcOASMiJicuASMiBgegEikxPicvUiUnPx0rNRJhHXFMJU0nJ0ghKysQBQQfOS8bHRIQHz8jTkRiHRIQHTsjAAIAtASqAwoGDAADAAcAMgCyAQIAK7AFM7QDCQAMBCuwBzIBsAgvsADWtAYRAAcEK7EJASuxBgARErECBDk5ADAxGwEXAzcTFwO0eZzD8HmbwgTBAUsc/roXAUsc/roAAAH 8ASyALQGcwAaAEMAsBcvtAUEACAEKwGwGy wANa0Gg4AHgQrsBoQsRQBK7QIDgAeBCuxGgARErAZObAUEbMOBQ8XJBc5sAgSsAw5ADAxASY AjMyFhUUBgcOAQcjPgE3NjU0JiMiBhf 8AoaP1s1Zn8vLRApDYEIISVYNy89OhAFdzdcRCVrZC1YHQolISM/FzNAMS9MOwAAAAEBAP5vAd3/TAALACIAsAkvsQMJ6bEDCekBsAwvsADWsQYR6bEGEemxDQErADAxATQ2MzIWFRQGIyImAQBALy8/Py8vQP7dL0BALy8/PwAAAQBxAAAF8gYbADEAhQCyAAAAK7AaM7EBBOmwGDKyDQIAK7EmBOkBsDIvsAjWsSsM6bIrCAors0ArMQkrsggrCiuzQAgACSuwKxCxIQErsRIM6bISIQors0ASGgkrsiESCiuzQCEbCSuxMwErsSErERK0Aw0CGBckFzkAsQEAERKxHDA5ObAmEbMIEiErJBc5MDEzNSE1LgM1NBI ATMyHgESFRQOAgcVIRUhNT4DNTQuAiMiDgIVFB4CFxVxAVY9b1Y0abb4kZj2rl41WnE5AVj940J8Yzs/f799d76HSDxifUGDBjOMrs90ogERwm15yf74j3nVsoovBoNgKYWz34Vt37RzY6zlg33dt4cpYAABAI/94wOJA8MAGQBFALIVAAArsQgH6bIBAQArsA4zsAAvAbAaL7AA1rEZDemwAjKwGRCxDQErsRAN6bEbASuxDRkRErAVOQCxCBURErAYOTAxExEzERQeAjMyPgI1ETMRFA4CIyImJxGPpAwrWUlKWCsMpCdakWs1YkL94wXg/ec9bVIxMVJtPQIZ/dVgoHNAIUD9nQAAAAEAFAAABNsEeQAiAKgAshoAACuwDDOyHwEAK7EFETMzsQME6bMiGgMIKwGwIy wH9axEgzpsBIQsRABK7EHDumxJAErsDYauj9G9mUAFSsKDrAbELAdwLEXDvmwFcCzFhcVEyuwGxCzHBsdEyuyHBsdIIogiiMGDhESObIWFxUREjkAtRUWFxscHS4uLi4uLgG1FRYXGxwdLi4uLi4usEAaAbEHEBESsA05ALEDHxESsAA5MDETPgEzIQcjERQeAhcjLgE1ESEOBQcjPgEaATciBgcUK5aBA4UQuwcIDgabEBf XgQRFh8jJxSeITctHQRtcCMEPRshif1YRmhMNxcbkY0Ct0iyvcCwljNY/gEUARVxDw4AAAADAAz bwWLBlIABgAJABUARACyAAAAK7ACM7IBAgArsBMvsQ0J6bQFBwABDSuxBQPpAbAWL7AK1rEQEemxFwErsRAKERKxAQk5OQCxAQcRErAJOTAxMwkBIwMhAwEhAQM0NjMyFhUUBiMiJgwCyQK2vrb9bLoBAAIK/v51QC8vPz8vL0AGUvmuAbb SgJWAmv6HC9AQC8vPz8AAAADAEr bwQKA90AFQApADUAdACyDQAAK7IRAAArsRsH6bIKAQArsgUBACuxJQbpsDMvsS0J6QGwNi wANaxFgvpsBYQsSoBK7EwEemwMBCxDQErsQkgMjKxDA3psTcBK7EwKhESsxEFJRskFzmwDRGxCA85OQCxJQ0RErQACQgODyQXOTAxEzQ AjMyFhczNTMRIzUjBiMiLgI3FB4CMzI AjU0LgIjIg4CEzQ2MzIWFRQGIyImSj93rG1irDsEpKQEf8xqq3k/qClPdU5Qd1IpLVJ5TEhyUi3tQC8vPz8vL0AB32a7i1JWTor8PYWgVIy2cUiDZz07ZYNJSH9eODpgffyuL0BALy8/PwAAAwAMAAAFiwi5AAYACQAkAHMAsgAAACuwAjOyAQIAK7QFBwABDSuxBQPpsCEvtA8EACAEKwGwJS wCta0JA4AHgQrsCQQsR4BK7QSDgAeBCuxJgErsSQKERKwIzmwHhG1CQEYDxkhJBc5sBISsBY5ALEBBxESsAk5sCERsgoSGDk5OTAxMwkBIwMhAwEhAQMmPgIzMhYVFAYHDgEHIz4BNzY1NCYjIgYXDALJAra tv1sugEAAgr /tkKGj9bNWZ/Ly0QKQ2BCCElWDcvPToQBlL5rgG2/koCVgJrAvw3XEQla2QtWB0KJSEjPxczQDEvTDsAAAMASv/lBAoGAAAVACkARACqALINAAArshEAACuxGwfpsgoBACuyBQEAK7ElBumwQS 0LwQAIAQrAbBFL7AA1rEWC mwFhCxKgErtEQOAB4EK7BEELE ASu0Mg4AHgQrsDIQsQ0BK7EJIDIysQwN6bFGASuxKhYRErArObBEEbBDObA ErcRBSUbOC85QSQXObAyEbA2ObANErEIDzk5ALElDREStAAJCA4PJBc5sUEKERKyKjI4OTk5MDETND4CMzIWFzM1MxEjNSMGIyIuAjcUHgIzMj4CNTQuAiMiDgITJj4CMzIWFRQGBw4BByM ATc2NTQmIyIGF0o/d6xtYqw7BKSkBH/Maqt5P6gpT3VOUHdSKS1SeUxIclItiQoaP1s1Zn8vLRApDYEIISVYNy89OhAB32a7i1JWTor8PYWgVIy2cUiDZz07ZYNJSH9eODpgfQLVN1xEJWtkLVgdCiUhIz8XM0AxL0w7AAAEAAwAAAWbCOQABgAMAA8AEwAsALIAAAArsAIzsgECACu0BQ0AAQ0rsQUD6QGwFC xFQErALEBDRESsA85MDEzCQEjAyEDEwkBBycHAyEJARMXAQwCyQK2vrb9bLrCAUABQ3bNyzcCCv7 ASvzrP7HBlL5rgG2/koG5wER/u9crq77ywJrAtMBUE7 xAAAAAAEAEr/5QUaBnkAFQApAC8AMwBnALINAAArshEAACuxGwfpsgoBACuyBQEAK7ElBukBsDQvsADWsRYL6bAWELENASuxCSAyMrEMDemxNQErsQ0WERK2BREbJSorLSQXObAMEbIsMDM5OTkAsSUbERK0AAkODwgkFzkwMRM0PgIzMhYXMzUzESM1IwYjIi4CNxQeAjMyPgI1NC4CIyIOAhMJAQcnByUTFwFKP3esbWKsOwSkpAR/zGqreT oKU91TlB3UiktUnlMSHJSLRwBQAFDds3LAfjzrP7HAd9mu4tSVk6K/D2FoFSMtnFIg2c9O2WDSUh/Xjg6YH0CaQEQ/vBdrq7uAVBO/sQAAAAABAAMAAAFiwjZAAYADAAPABMALACyAAAAK7ACM7IBAgArtAUNAAENK7EFA kBsBQvsRUBKwCxAQ0RErAPOTAxMwkBIwMhAxMJAQcnBwMhARM3EwcMAskCtr62/Wy6wgFAAUN2zcs3Agr /k6s82YGUvmuAbb SgbnARH 71yurvvLAmsDyk7 sDoAAAAEAEr/5QRDBn0AFQApAC8AMwBoALINAAArshEAACuxGwfpsgoBACuyBQEAK7ElBukBsDQvsADWsRYL6bAWELENASuxCSAyMrEMDemxNQErsQ0WERJACQURGyUqKy0wMSQXObAMEbEsMzk5ALElGxEStAAJDg8IJBc5MDETND4CMzIWFzM1MxEjNSMGIyIuAjcUHgIzMj4CNTQuAiMiDgITCQEHJwcBNxMHSj93rG1irDsEpKQEf8xqq3k/qClPdU5Qd1IpLVJ5TEhyUi0cAUABQ3bNywEhrPNmAd9mu4tSVk6K/D2FoFSMtnFIg2c9O2WDSUh/Xjg6YH0CaQEQ/vBdrq4B9E7 sDoAAAAABAAMAAAFiwlhAAYADAAPACoAegCyAAAAK7ACM7IBAgArtAUNAAENK7EFA mwJy 0FQQAIAQrAbArL7AQ1rQqDgAeBCuwKhCxJAErtBgOAB4EK7EsASuxKhARErEKKTk5sCQRtgQOFR4fCSckFzmwGBKxAxw5OQCxAQ0RErAPObAnEbQIChAYHiQXOTAxMwkBIwMhAxMJAQcnBwMhARMmPgIzMhYVFAYHDgEHIz4BNzY1NCYjIgYXDALJAra tv1susIBQAFDds3LNwIK/v5zCho/WzVmfy8tECkNgQghJVg3Lz06EAZS a4Btv5KBucBEf7vXK6u 8sCawOkN1xEJWtkLVgdCiUhIz8XM0AxL0w7AAAABABK/ UEgwcXABUAKQAvAEoAugCyDQAAK7IRAAArsRsH6bIKAQArsgUBACuxJQbpsDAvsEcvtDUEACAEKwGwSy wANaxFgvpsBYQsTABK7RKDgAeBCuwShCxDQErsQkgMjKxDA3ps0QMDQgrtDgOAB4EK7FMASuxMBYRErcFERslKisuMSQXObENABESsi0/STk5ObAMEbQsNT5CRyQXObA4ErA8OQCxJQ0RErQACQgODyQXObEwChEStCstOz5CJBc5sEcRsThEOTkwMRM0PgIzMhYXMzUzESM1IwYjIi4CNxQeAjMyPgI1NC4CIyIOAhMJAQcnBwEmPgIzMhYVFAYHDgEHIz4BNzY1NCYjIgYXSj93rG1irDsEpKQEf8xqq3k/qClPdU5Qd1IpLVJ5TEhyUi0cAUABQ3bNywE8Cho/WzVmfy8tECkNgQghJVg3Lz06EAHfZruLUlZOivw9haBUjLZxSINnPTtlg0lIf144OmB9AmkBEP7wXa6uAeA3XEQla2QtWB0KJSEjPxczQDEvTDsAAAAABAAMAAAFiwkUAAYAIgAoACsAUQCyAAAAK7ACM7IBAgArtAUpAAENK7EFA mwHy xDAXpsBUysxIMHwgrsRkF6bAiMgGwLC xLQErALEBKRESsCs5sBkRsSQmOTmwEhKwBzkwMTMJASMDIQMTPgMzMhYXHgEzMjY3Fw4BIyImJy4BIyIGBwMJAQcnBwMhAQwCyQK2vrb9bLqcEikxPicvUiUnPx0rNRJhHXFMJU0nJ0ghKysQPgFAAUN2zcs3Agr /gZS a4Btv5KCG4fOS8bHRIQHz8jTkRiHRIQHTsj/skBEf7vXK6u 8sCawAEAEr/5QQKBtsAFQAxAEUASwCYALINAAArshEAACuxNwfpsi4CACuxGwXpsCQysyEbLggrsSgF6bAxMrIWAgArsgoBACuyBQEAK7FBBukBsEwvsADWsTIL6bAyELENASuxCTwyMrEMDemxTQErsTIAERKwFjmwDRFACwURGyQoMTdBRkdJJBc5sAwSsSVIOTkAsUENERK0AAkIDg8kFzmxKAoRErFHSTk5MDETND4CMzIWFzM1MxEjNSMGIyIuAhM AzMyFhceATMyNjcXDgEjIiYnLgEjIgYHAxQeAjMyPgI1NC4CIyIOAhMJAQcnB0o/d6xtYqw7BKSkBH/Maqt5P54SKTE Jy9SJSc/HSs1EmEdcUwlTScnSCErKxBaKU91TlB3UiktUnlMSHJSLRwBQAFDds3LAd9mu4tSVk6K/D2FoFSMtgS6HzkvGx0SEB8/I05EYh0SEB07I/wHSINnPTtlg0lIf144OmB9AmkBEP7wXa6uAAAABAAM/m8Fiwf4AAYADAAPABsARwCyAAAAK7ACM7IBAgArsBkvsRMJ6bQFDQABDSuxBQPpAbAcL7AQ1rEWEemxHQErsRYQERKzAQsPCCQXOQCxAQ0RErAPOTAxMwkBIwMhAxMJAQcnBwMhAQM0NjMyFhUUBiMiJgwCyQK2vrb9bLrCAUABQ3bNyzcCCv7 dUAvLz8/Ly9ABlL5rgG2/koG5wER/u9crq77ywJr hwvQEAvLz8/AAAAAAQASv5vBAoFqgAVACkALwA7AIYAsg0AACuyEQAAK7EcB myCgEAK7IFAQArsSYG6bA5L7EzCekBsDwvsADWsRcL6bAXELEwASuxNhHpsDYQsQ0BK7EJITIysQwN6bE9ASuxMBcRErEqLzk5sDYRtREFJhwuKyQXObANErIIDy05OTmwDBGwLDkAsSYNERK0AAkIDg8kFzkwMRM0PgIzMhYXMzUzESM1IwYjIi4CNhUUHgIzMj4CNTQuAiMiDgEDCQEHJwcTNDYzMhYVFAYjIiZKP3esbWKsOwSkpAR/zGqreT oKU91TlB3UiktUnlMSHJSEgE/AUR3zcteQC8vPz8vL0AB32a7i1JWTor8PYWgVIy2tENIg2c9O2WDSUh/Xjg6YAHuARD 8FyurvqfL0BALy8/PwAAAAQADAAABYsJQgAGABgAGwAfAEEAsgAAACuwAjOyAQIAK7QFGQABDSuxBQPpsBQvsQsE6bILFAors0ALDwkrsAcyAbAgL7EhASsAsQEZERKwGzkwMTMJASMDIQMTMx4BMzI2NzMOAyMiLgITIQEDExcBDALJAra tv1surKNG1xMTFwajgg8WnM/PXNbPUYCCv7 RfOs/scGUvmuAbb SgewRkVGRT9nSScnSWf65QJrAzEBUE7 xAAEAEr/5QQKBwYAFQApADsAPwB ALINAAArshEAACuxGwfpsgoBACuyBQEAK7ElBumwNy xLgTpsi43CiuzQC4yCSuwKjIBsEAvsADWsRYL6bAWELENASuxCSAyMrEMDemxQQErsQ0WERJACgURGyUqMTc8PT8kFzmwDBGxMj45OQCxJQ0RErQACQgODyQXOTAxEzQ AjMyFhczNTMRIzUjBiMiLgI3FB4CMzI AjU0LgIjIg4CEzMeATMyNjczDgMjIi4CJRMXAUo/d6xtYqw7BKSkBH/Maqt5P6gpT3VOUHdSKS1SeUxIclItDI0bXExMXBqOCDxacz89c1s9AQ/zrP7HAd9mu4tSVk6K/D2FoFSMtnFIg2c9O2WDSUh/Xjg6YH0DUEZFRkU/Z0knJ0lndgFQTv7EAAAEAAwAAAWLCUQABgAYABwAHwBBALIAAAArsAIzsgECACu0BR0AAQ0rsQUD6bAUL7ELBOmyCxQKK7NACw8JK7AHMgGwIC xIQErALEBHRESsB85MDEzCQEjAyEDEzMeATMyNjczDgMjIi4CEzcTBwMhAQwCyQK2vrb9bLqyjRtcTExcGo4IPFpzPz1zWz0JrPNm/AIK/v4GUvmuAbb Sge0RkVGRT9nSScnSWcBgU7 sDr6nAJrAAAABABK/ UECgcGABUAKQA7AD8AewCyDQAAK7IRAAArsRsH6bIKAQArsgUBACuxJQbpsDcvsS4E6bIuNwors0AuMgkrsCoyAbBAL7AA1rEWC mwFhCxDQErsQkgMjKxDA3psUEBK7ENFhESQAkFERslKjE3PD4kFzmwDBGwMjkAsSUNERK0AAkIDg8kFzkwMRM0PgIzMhYXMzUzESM1IwYjIi4CNxQeAjMyPgI1NC4CIyIOAhMzHgEzMjY3Mw4DIyIuAgM3EwdKP3esbWKsOwSkpAR/zGqreT oKU91TlB3UiktUnlMSHJSLQyNG1xMTFwajgg8WnM/PXNbPQKs82YB32a7i1JWTor8PYWgVIy2cUiDZz07ZYNJSH9eODpgfQNQRkVGRT9nSScnSWcBeE7 sDoAAAAEAAwAAAWLCYMABgAYABsANgCQALIAAAArsAIzsgECACu0BRkAAQ0rsQUD6bAUL7ELBOmyCxQKK7NACw8JK7AHMrAzL7QhBAAgBCsBsDcvsBzWtDYOAB4EK7A2ELEwASu0JA4AHgQrsTgBK7E2HBESsQg1OTmwMBG3CxQbASohKzMkFzmwJBKxDig5OQCxARkRErAbObEzCxESshwkKjk5OTAxMwkBIwMhAxMzHgEzMjY3Mw4DIyIuAhMhAQMmPgIzMhYVFAYHDgEHIz4BNzY1NCYjIgYXDALJAra tv1surKNG1xMTFwajgg8WnM/PXNbPUYCCv7 ygoaP1s1Zn8vLRApDYEIISVYNy89OhAGUvmuAbb SgeuRkVGRT9nSScnSWf65wJrA8Y3XEQla2QtWB0KJSEjPxczQDEvTDsAAAQASv/lBAoHSgAVACkAOwBWANMAsg0AACuyEQAAK7EbB myCgEAK7IFAQArsSUG6bA3L7EuBOmyLjcKK7NALjIJK7AqMrA8L7BTL7RBBAAgBCsBsFcvsADWsRYL6bAWELE8ASu0Vg4AHgQrsFYQsVABK7REDgAeBCuwRBCxDQErsQkgMjKxDA3psVgBK7E8FhESsSo9OTmwVhGxK1U5ObBQEkAKEQUlGzcuSkFLUyQXObBEEbExSDk5sA0SsQgPOTkAsSUNERK0AAkIDg8kFzmxPC4RErJHSk45OTmwUxGxRFA5OTAxEzQ AjMyFhczNTMRIzUjBiMiLgI3FB4CMzI AjU0LgIjIg4CEzMeATMyNjczDgMjIi4CEyY AjMyFhUUBgcOAQcjPgE3NjU0JiMiBhdKP3esbWKsOwSkpAR/zGqreT oKU91TlB3UiktUnlMSHJSLQyNG1xMTFwajgg8WnM/PXNbPXUKGj9bNWZ/Ly0QKQ2BCCElWDcvPToQAd9mu4tSVk6K/D2FoFSMtnFIg2c9O2WDSUh/Xjg6YH0DUEZFRkU/Z0knJ0lnAQ43XEQla2QtWB0KJSEjPxczQDEvTDsABAAMAAAFiwjwAAYAIgA0ADcAYACyAAAAK7ACM7IBAgArtAU1AAENK7EFA mwMC xJwTpsicwCiuzQCcrCSuwIzKwHy xDAXpsBUysxIMHwgrsRkF6bAiMgGwOC xOQErALEBNRESsDc5sRIZERKwBzkwMTMJASMDIQMTPgMzMhYXHgEzMjY3Fw4BIyImJy4BIyIGDwEzHgEzMjY3Mw4DIyIuAhMhAQwCyQK2vrb9bLqcEikxPicvUiUnPx0rNRJhHXFMJU0nJ0ghKysQTo0bXExMXBqOCDxacz89c1s9RgIK/v4GUvmuAbb SghKHzkvGx0SEB8/I05EYh0SEB07I0ZGRUZFP2dJJydJZ/rhAmsAAAAABABK/ UECgauABUAMQBFAFcAqwCyDQAAK7IRAAArsTgH6bIuAgArsRsF6bAkMrIhAgArsSgF6bAxMrIWAgArsiUCACuyCgEAK7IFAQArsUIG6bRTSkIhDSuxUwTpskpTCiuzQEpOCSuwRjIBsFgvsADWsTML6bAzELENASuxCT0yMrEMDemxWQErsTMAERKwFjmwDRFACwURGyQoMThCRk1TJBc5sAwSsSVOOTkAsUINERK0AAkIDg8kFzkwMRM0PgIzMhYXMzUzESM1IwYjIi4CEz4DMzIWFx4BMzI2NxcOASMiJicuASMiBgcCFRQeAjMyPgI1NC4CIyIOAQMzHgEzMjY3Mw4DIyIuAko/d6xtYqw7BKSkBH/Maqt5P54SKTE Jy9SJSc/HSs1EmEdcUwlTScnSCErKxBaKU91TlB3UiktUnlMSHJSIY0bXExMXBqOCDxacz89c1s9Ad9mu4tSVk6K/D2FoFSMtgSNHzkvGx0SEB8/I05EYh0SEB07I/x3Q0iDZz07ZYNJSH9eODpgAtNGRUZFP2dJJydJZwAEAAz bwWLB7YABgAYABsAJwBcALIAAAArsAIzsgECACuwJS xHwnptAUZAAENK7EFA mwFC xCwTpsgsUCiuzQAsPCSuwBzIBsCgvsBzWsSIR6bEpASuxIhwRErMBFBsLJBc5ALEBGRESsBs5MDEzCQEjAyEDEzMeATMyNjczDgMjIi4CEyEBAzQ2MzIWFRQGIyImDALJAra tv1surKNG1xMTFwajgg8WnM/PXNbPUYCCv7 dUAvLz8/Ly9ABlL5rgG2/koHtkZFRkU/Z0knJ0ln t8Ca/ocL0BALy8/PwAAAAAEAEr bwQKBX8AFQApADsARwCbALINAAArshEAACuxGwfpsgoBACuyBQEAK7ElBumwRS xPwnpsDcvsS4E6bIuNwors0AuMgkrsCoyAbBIL7AA1rEWC mwFhCxPAErsUIR6bBCELENASuxCSAyMrEMDemxSQErsTwWERKxKis5ObBCEbURBSUbNy4kFzmwDRKyCA8xOTk5sAwRsDI5ALElDREStAAJCA4PJBc5MDETND4CMzIWFzM1MxEjNSMGIyIuAjcUHgIzMj4CNTQuAiMiDgITMx4BMzI2NzMOAyMiLgITNDYzMhYVFAYjIiZKP3esbWKsOwSkpAR/zGqreT oKU91TlB3UiktUnlMSHJSLQyNG1xMTFwajgg8WnM/PXNbPdlALy8/Py8vQAHfZruLUlZOivw9haBUjLZxSINnPTtlg0lIf144OmB9A1BGRUZFP2dJJydJZ/mdL0BALy8/PwAAAAIAnP5vA7wGCAALABcAWQCyAAAAK7EJA myAQIAK7EEA mwFS xDwnptAUIAAENK7EFA kBsBgvsADWsQkK6bAEMrIJAAors0AJCwkrsAIys0AJBwkrsAkQsQwBK7ESEemxGQErADAxMxEhFSERIRUhESEVATQ2MzIWFRQGIyImnAMg/YwCYv2eAnT9 EAvLz8/Ly9ABgig/jag/aKg/t0vQEAvLz8/AAMARv5vA ED3QAbACYAMgBlALIXAAArsRAH6bIFAQArsSIG6bAwL7EqCem0HAsXBQ0rsRwE6QGwMy wANaxCwvpsAsQsScBK7EtEemxNAErsScLERKwHDmwLRGzEBciBSQXOQCxCxARErETFDk5sBwRsAA5MDETND4CMzIeAgchFB4CMzI2NxcOASMiLgI3IS4DIyIOAhM0NjMyFhUUBiMiJkY9d65xda91NQb9DS9SdEZoji LRuOTba57QbACPwgzSmA1NWNQNaZALy8/Py8vQAHVar NUliXxWtEdFYzcVZQgY5OhbXdM1xGJydGXPxgL0BALy8/PwAAAAIAnAAAA7wIuQALACYAmgCyAAAAK7EJA myAQIAK7EEA m0BQgAAQ0rsQUD6bAjL7QRBAAgBCsBsCcvsADWsQkK6bAEMrIJAAors0AJCwkrsAIys0AJBwkrsAkQsQwBK7QmDgAeBCuwJhCxIAErtBQOAB4EK7EoASuxCQARErANObEmDBESsCU5sCARsxoRGyMkFzmwFBKwGDkAsSMBERKyDBQaOTk5MDEzESEVIREhFSERIRUBJj4CMzIWFRQGBw4BByM ATc2NTQmIyIGF5wDIP2MAmL9ngJ0/ZIKGj9bNWZ/Ly0QKQ2BCCElWDcvPToQBgig/jag/aKgB703XEQla2QtWB0KJSEjPxczQDEvTDsAAAMARv/lA EGAAAbACYAQQCXALIXAAArsRAH6bIFAQArsSIG6bQcCxcFDSuxHATpsD4vtCwEACAEKwGwQi wANaxCwvpsAsQsScBK7RBDgAeBCuwQRCxOwErtC8OAB4EK7FDASuxJwsRErEcKDk5sEERsEA5sDsStwUQIhc1LDY JBc5sC8RsDM5ALELEBESsRMUOTmwHBGwADmxPgURErInLzU5OTkwMRM0PgIzMh4CByEUHgIzMjY3Fw4BIyIuAjchLgMjIg4CEyY AjMyFhUUBgcOAQcjPgE3NjU0JiMiBhdGPXeucXWvdTUG/Q0vUnRGaI4vi0bjk22ue0GwAj8IM0pgNTVjUDVECho/WzVmfy8tECkNgQghJVg3Lz06EAHVar NUliXxWtEdFYzcVZQgY5OhbXdM1xGJydGXAKHN1xEJWtkLVgdCiUhIz8XM0AxL0w7AAAAAgCcAAADvAfwAAsAJwBwALIAAAArsQkD6bIBAgArsQQD6bQFCAABDSuxBQPpsCQvsREF6bAaMrMXESQIK7EeBemwJzIBsCgvsADWsQkK6bAEMrIJAAors0AJCwkrsAIys0AJBwkrsSkBK7EJABESsQwnOTkAsRceERKwDDkwMTMRIRUhESEVIREhFQE AzMyFhceATMyNjcXDgEjIiYnLgEjIgYHnAMg/YwCYv2eAnT9ARIpMT4nL1IlJz8dKzUSYR1xTCVNJydIISsrEAYIoP42oP2ioAdKHzkvGx0SEB8/I05EYh0SEB07IwADAEb/5QPhBTEAGwA3AEIAZwCyFwAAK7EQB myBQEAK7E Bum0OAsXBQ0rsTgE6bA0L7EhBemwKjKzJyE0CCuxLgXpsDcyAbBDL7AA1rELC mxRAErsQsAERKwHDkAsQsQERKxExQ5ObA4EbAAObEnLhESsBw5MDETND4CMzIeAgchFB4CMzI2NxcOASMiLgITPgMzMhYXHgEzMjY3Fw4BIyImJy4BIyIGBwMhLgMjIg4CRj13rnF1r3U1Bv0NL1J0RmiOL4tG45NtrntBahIpMT4nL1IlJz8dKzUSYR1xTCVNJydIISsrEB4CPwgzSmA1NWNQNQHVar NUliXxWtEdFYzcVZQgY5OhbUDHh85LxsdEhAfPyNORGIdEhAdOyP DzNcRicnRlwAAAADAJwAAARoCToACwARABUATwCyAAAAK7EJA myAQIAK7EEA m0BQgAAQ0rsQUD6QGwFi wANaxCQrpsAQysgkACiuzQAkLCSuwAjKzQAkHCSuxFwErsQkAERKwDDkAMDEzESEVIREhFSERIRUJAgcnBwETFwGcAyD9jAJi/Z4CdP0lAUABQ3bNywFz86z xwYIoP42oP2ioAbnARH 71yurgFfAVBO/sQAAAAABABG/ UE0AZ5ABsAIQAsADAASACyFwAAK7EQB myBQEAK7EoBum0IgsXBQ0rsSIE6QGwMS wANaxCwvpsTIBK7ELABESsBw5ALELEBESsRMUOTmwIhGwADkwMRM0PgIzMh4CByEUHgIzMjY3Fw4BIyIuAhMJAQcnBwMhLgMjIg4CARMXAUY9d65xda91NQb9DS9SdEZoji LRuOTba57QY0BPwFEd83KUgI/CDNKYDU1Y1A1AjPzrP7HAdVqv41SWJfFa0R0VjNxVlCBjk6FtQMrARD 8F2urv4PM1xGJydGXAKsAVBO/sQAAAADAJwAAAQOCNUACwARABUATwCyAAAAK7EJA myAQIAK7EEA m0BQgAAQ0rsQUD6QGwFi wANaxCQrpsAQysgkACiuzQAkLCSuwAjKzQAkHCSuxFwErsQkAERKwDDkAMDEzESEVIREhFSERIRUJAgcnBwE3EwecAyD9jAJi/Z4CdP0lAUABQ3bNywEZrPNmBgig/jag/aKgBucBEf7vXK6uAfxO/rA6AAAEAEb/5QQGBoEAGwAhACwAMABIALIXAAArsRAH6bIFAQArsSgG6bQiCxcFDSuxIgTpAbAxL7AA1rELC mxMgErsQsAERKwHDkAsQsQERKxExQ5ObAiEbAAOTAxEzQ AjMyHgIHIRQeAjMyNjcXDgEjIi4CEwkBBycHAyEuAyMiDgIBNxMHRj13rnF1r3U1Bv0NL1J0RmiOL4tG45NtrntBjQE/AUR3zcpSAj8IM0pgNTVjUDUBaazzZgHVar NUliXxWtEdFYzcVZQgY5OhbUDKwEQ/vBdrq7 DzNcRicnRlwDtk7 sDoAAwCcAAAERwl3AAsAEQAsAKgAsgAAACuxCQPpsgECACuxBAPptAUIAAENK7EFA mwKS 0FwQAIAQrAbAtL7AA1rEJCumwBDKyCQAKK7NACQsJK7ACMrNACQcJK7AJELESASu0LA4AHgQrsCwQsSYBK7QaDgAeBCuxLgErsQkAERKwDDmwEhGzDRAREyQXObAsErEPKzk5sCYRtA4XICEpJBc5sBoSsB45ALEpAREStA0PEhogJBc5MDEzESEVIREhFSERIRUJAgcnBwEmPgIzMhYVFAYHDgEHIz4BNzY1NCYjIgYXnAMg/YwCYv2eAnT9JQFAAUN2zcsBLQoaP1s1Zn8vLRApDYEIISVYNy89OhAGCKD NqD9oqAG5wER/u9crq4B8DdcRCVrZC1YHQolISM/FzNAMS9MOwAAAAQARv/lBFYHFwAbACEALABHALkAshcAACuxEAfpsgUBACuxKAbptCILFwUNK7EiBOmwLS wRC 0MgQAIAQrAbBIL7AA1rELC mwCxCxLQErtEcOAB4EK7BHELFBASu0NQ4AHgQrsUkBK7ELABESsBw5sC0RQAkFEBcdICEiKC4kFzmwRxKxH0Y5ObBBEbcTFCMyOzweRCQXObA1ErIKCTk5OTkAsQsQERKxExQ5ObAiEbAAObEtBREStB0fODs/JBc5sEQRsTVBOTkwMRM0PgIzMh4CByEUHgIzMjY3Fw4BIyIuAhMJAQcnBwMhLgMjIg4CASY AjMyFhUUBgcOAQcjPgE3NjU0JiMiBhdGPXeucXWvdTUG/Q0vUnRGaI4vi0bjk22ue0GNAT8BRHfNylICPwgzSmA1NWNQNQGUCho/WzVmfy8tECkNgQghJVg3Lz06EAHVar NUliXxWtEdFYzcVZQgY5OhbUDKwEQ/vBdrq7 DzNcRicnRlwDnjdcRCVrZC1YHQolISM/FzNAMS9MOwAAAwCcAAADvAkOAAsAJwAtAHoAsgAAACuxCQPpsgECACuxBAPptAUIAAENK7EFA mwJC xEQXpsBoysxcRJAgrsR4F6bAnMgGwLi wANaxCQrpsAQysgkACiuzQAkLCSuwAjKzQAkHCSuxLwErsQkAERKyDCcoOTk5ALEeARESsSkrOTmwFxGwDDkwMTMRIRUhESEVIREhFQE AzMyFhceATMyNjcXDgEjIiYnLgEjIgYHAwkBBycHnAMg/YwCYv2eAnT9ARIpMT4nL1IlJz8dKzUSYR1xTCVNJydIISsrEEABQAFDds3LBgig/jag/aKgCGgfOS8bHRIQHz8jTkRiHRIQHTsj/s8BEf7vXK6uAAAEAEb/5QPhBsEAGwA3AD0ASABxALIXAAArsRAH6bI0AgArsSEF6bAqMrInAgArsS4F6bA3MrIcAgArsgUBACuxRAbptD4LFwUNK7E BOkBsEkvsADWsQsL6bFKASuxCwARErEcODk5ALELEBESsRMUOTmwPhGwADmxLgURErE5Ozk5MDETND4CMzIeAgchFB4CMzI2NxcOASMiLgITPgMzMhYXHgEzMjY3Fw4BIyImJy4BIyIGBwMJAQcnBwMhLgMjIg4CRj13rnF1r3U1Bv0NL1J0RmiOL4tG45NtrntBZhIpMT4nL1IlJz8dKzUSYR1xTCVNJydIISsrED0BPwFEd83KUgI/CDNKYDU1Y1A1AdVqv41SWJfFa0R0VjNxVlCBjk6FtQSuHzkvGx0SEB8/I05EYh0SEB07I/7NARD 8F2urv4PM1xGJydGXAAAAAADAJz bwO8CCsACwARAB0AbwCyAAAAK7EJA myAQIAK7EEA mwGy xFQnptAUIAAENK7EFA kBsB4vsADWsQkK6bAEMrIJAAors0AJCwkrsAIys0AJBwkrsAkQsRIBK7EYEemxHwErsQkAERKwDDmwEhGwETmwGBKxEA05OQAwMTMRIRUhESEVIREhFQkCBycHEzQ2MzIWFRQGIyImnAMg/YwCYv2eAnT9JgE/AUR3zcteQC8vPz8vL0AGCKD NqD9oqAHGwEQ/vBcrq74Hi9AQC8vPz8AAAAEAEb bwPhBaoAGwAhACwAOABvALIXAAArsRAH6bIFAQArsSgG6bA2L7EwCem0IgsXBQ0rsSIE6QGwOS wANaxCwvpsAsQsS0BK7EzEemxOgErsQsAERKwHDmwLRGxISI5ObAzErUQFwUgKB0kFzkAsQsQERKxExQ5ObAiEbAAOTAxEzQ AjMyHgIHIRQeAjMyNjcXDgEjIi4CEwkBBycHAyEuAyMiDgITNDYzMhYVFAYjIiZGPXeucXWvdTUG/Q0vUnRGaI4vi0bjk22ue0GLAT8BRHfNy08CPwgzSmA1NWNQNaZALy8/Py8vQAHVar NUliXxWtEdFYzcVZQgY5OhbUDLQEQ/vBcrq7 DDNcRicnRlz8YC9AQC8vPz8AAAACACEAAAHlCLkAGgAeAG0AshsAACuyHAIAK7AXL7QFBAAgBCsBsB8vsADWtBoOAB4EK7AaELEbASuxHgrpsB4QsRQBK7QIDgAeBCuxIAErsRoAERKwGTmxHhsRErQOBRIXDyQXObEIFBESsAw5ALEXHBESsggADjk5OTAxEyY AjMyFhUUBgcOAQcjPgE3NjU0JiMiBhcTETMRIQoaP1s1Zn8vLRApDYEIISVYNy89OhAFrAe9N1xEJWtkLVgdCiUhIz8XM0AxL0w7 EMGCPn4AAAAAAIAOQAAAf4F/gAaAB4AbQCyGwAAK7IcAQArsBcvtAUEACAEKwGwHy wANa0Gg4AHgQrsBoQsRsBK7EeDemwHhCxFAErtAgOAB4EK7EgASuxGgARErAZObEeGxEStA4FEhcPJBc5sQgUERKwDDkAsRccERKyCA4AOTk5MDETJj4CMzIWFRQGBw4BByM ATc2NTQmIyIGFxMRMxE5Chs/WzVmfy8tECoMgQghJVg3Lz06EAakBQI3XUMla2QtWB0KJSEjQBYzQDEvTDv6/gPD/D0AAAAAAgCJ/m8BZgYIAAsADwA8ALIMAAArsg0CACuwCS xAwnpAbAQL7AA1rEGEemxBhHpswwGAAgrsQ8K6bERASuxDwwRErEJAzk5ADAxEzQ2MzIWFRQGIyImExEzEYlALy8/Py8vQBes/t0vQEAvLz8/AVIGCPn4AAAAAwCY/m8BgQWiAAsAFwAbAEgAshgAACuyGQEAK7AVL7EPCemwCS xAwnpAbAcL7AY1rEbDemzGxgMDiuwADOxEhHpsAYysR0BK7EbGBESswkPFQMkFzkAMDETNDYzMhYVFAYjIiYTNDYzMhYVFAYjIiYTETMRmEUvL0ZGLy9FCEAvLz8/Ly9AGqQFLS9GRi8xRET54S9AQC8vPz8BUgPD/D0AAAADAE7 bwaYBiMAEwAnADMAWQCyDwAAK7EZA myBQIAK7EjA mwMS xKwnpAbA0L7AA1rEUCumwFBCxKAErsS4R6bAuELEeASuxCgrpsTUBK7EuKBESsw8ZIwUkFzkAsSMZERKxCgA5OTAxEzQSNiQzMgQWEhUUAgYEIyIkJgI3FB4CMzI AjU0LgIjIg4CATQ2MzIWFRQGIyImTn/bASWmpgEk3H9/3P7cpqb 29t/rGKs6IOD56xjY6rnhYXoqmICCkAvLz8/Ly9AAwKmASPbfX3b/t2mpv7d13191wEjqIPnrmdnrueDg quZGSu6vtWL0BALy8/PwAAAAADAEb bwQ5A90AEwAnADMAWQCyDwAAK7EZB myBQEAK7EjBumwMS xKwnpAbA0L7AA1rEUDOmwFBCxKAErsS4R6bAuELEeASuxCgzpsTUBK7EuKBESsw8ZIwUkFzkAsSMZERKxCgA5OTAxEzQ AjMyHgIVFA4CIyIuAjcUHgIzMj4CNTQuAiMiDgITNDYzMhYVFAYjIiZGTYq4amq5ik1QibloaLiJUKMyWn9LTH9aMjJaf0xMfloy6EAvLz8/Ly9AAd9quYtQUIu4a2q5iU5OiblsSoBjNzdjgUlKgWA6OmCB/LIvQEAvLz8/AAMATv/lBpgIuQATACcAQgCPALIPAAArsRkD6bIFAgArsSMD6bA/L7QtBAAgBCsBsEMvsADWsRQK6bAUELEoASu0Qg4AHgQrsEIQsTwBK7QwDgAeBCuwMBCxHgErsQoK6bFEASuxKBQRErApObBCEbBBObA8ErcPGSMFNi03PyQXObAwEbA0OQCxIxkRErEKADk5sT8FERKyKDA2OTk5MDETNBI2JDMyBBYSFRQCBgQjIiQmAjcUHgIzMj4CNTQuAiMiDgIBJj4CMzIWFRQGBw4BByM ATc2NTQmIyIGF05/2wElpqYBJNx/f9z 3Kam/tvbf6xirOiDg esY2Oq54WF6KpiAaQKGj9bNWZ/Ly0QKQ2BCCElWDcvPToQAwKmASPbfX3b/t2mpv7d13191wEjqIPnrmdnrueDg quZGSu6gQ2N1xEJWtkLVgdCiUhIz8XM0AxL0w7AAAAAAMARv/lBDkGcwATACcAQgCPALIPAAArsRkH6bIFAQArsSMG6bA/L7QtBAAgBCsBsEMvsADWsRQM6bAUELEoASu0Qg4AHgQrsEIQsTwBK7QwDgAeBCuwMBCxHgErsQoM6bFEASuxKBQRErApObBCEbBBObA8ErcPGSMFNi03PyQXObAwEbA0OQCxIxkRErEKADk5sT8FERKyKDA2OTk5MDETND4CMzIeAhUUDgIjIi4CNxQeAjMyPgI1NC4CIyIOAhMmPgIzMhYVFAYHDgEHIz4BNzY1NCYjIgYXRk2KuGpquYpNUIm5aGi4iVCjMlp/S0x/WjIyWn9MTH5aMoIKGj9bNWZ/Ly0QKQ2BCCElWDcvPToQAd9quYtQUIu4a2q5iU5OiblsSoBjNzdjgUlKgWA6OmCBA0w3XEQla2QtWB0KJSEjPxczQDEvTDsABABO/ UGmAjZABMAJwAtADEAUACyDwAAK7EZA myBQIAK7EjA kBsDIvsADWsRQK6bAUELEeASuxCgrpsTMBK7EeFBEStg8FKCouLzEkFzmwChGwMDkAsSMZERKxCgA5OTAxEzQSNiQzMgQWEhUUAgYEIyIkJgI3FB4CMzI AjU0LgIjIg4CCQIHJwclExcBTn/bASWmpgEk3H9/3P7cpqb 29t/rGKs6IOD56xjY6rnhYXoqmIBNwFAAUN3zMsB/vOs/scDAqYBI9t9fdv 3aam/t3XfX3XASOog euZ2eu54OD6q5kZK7qA2ABEf7vXK6u/gFQTv7EAAAABABG/ UFBAaFABMAJwAtADEATgCyDwAAK7EZB myBQEAK7EjBukBsDIvsADWsRQM6bAUELEeASuxCgzpsTMBK7EeFBEStA8FKCouJBc5sAoRsDE5ALEjGRESsQoAOTkwMRM0PgIzMh4CFRQOAiMiLgI3FB4CMzI AjU0LgIjIg4CEwkBBycHJRMXAUZNirhqarmKTVCJuWhouIlQozJaf0tMf1oyMlp/TEx WjIVAT8BRHfNygHy86z xwHfarmLUFCLuGtquYlOTom5bEqAYzc3Y4FJSoFgOjpggQJtARD 8F2urvoBUE7 xAAEAE7/5QaYCOYAEwAnAC0AMQBJALIPAAArsRkD6bIFAgArsSMD6QGwMi wANaxFArpsBQQsR4BK7EKCumxMwErsR4UERK1DwUoKi4wJBc5ALEjGRESsQoAOTkwMRM0EjYkMzIEFhIVFAIGBCMiJCYCNxQeAjMyPgI1NC4CIyIOAgkCBycHATcTB05/2wElpqYBJNx/f9z 3Kam/tvbf6xirOiDg esY2Oq54WF6KpiATcBQAFDd8zLATOs82YDAqYBI9t9fdv 3aam/t3XfX3XASOog euZ2eu54OD6q5kZK7qA2ABEf7vXK6uAg1O/rA6AAAABABG/ UEZgZtABMAJwAtADEATwCyDwAAK7EZB myBQEAK7EjBukBsDIvsADWsRQM6bAUELEeASuxCgzpsTMBK7EeFBEStQ8FKCouLyQXObAKEbAxOQCxIxkRErEKADk5MDETND4CMzIeAhUUDgIjIi4CNxQeAjMyPgI1NC4CIyIOAhMJAQcnBwE3EwdGTYq4amq5ik1QibloaLiJUKMyWn9LTH9aMjJaf0xMfloyFQE/AUR3zcoBVKzzZgHfarmLUFCLuGtquYlOTom5bEqAYzc3Y4FJSoFgOjpggQJtARD 8F2urgHkTv6wOgAEAE7/5QaYCTEAEwAnAC0ASACZALIPAAArsRkD6bIFAgArsSMD6bBFL7QzBAAgBCsBsEkvsADWsRQK6bAUELEuASu0SA4AHgQrsEgQsUIBK7Q2DgAeBCuwNhCxHgErsQoK6bFKASuxLhQRErcPBRkjKCksLyQXObBIEbErRzk5sEIStDM8PSpFJBc5sDYRsDo5ALEjGRESsQoAOTmxRQURErQpKy42PCQXOTAxEzQSNiQzMgQWEhUUAgYEIyIkJgI3FB4CMzI AjU0LgIjIg4CCQIHJwcBJj4CMzIWFRQGBw4BByM ATc2NTQmIyIGF05/2wElpqYBJNx/f9z 3Kam/tvbf6xirOiDg esY2Oq54WF6KpiATcBQAFDd8zLAWEKGj9bNWZ/Ly0QKQ2BCCElWDcvPToQAwKmASPbfX3b/t2mpv7d13191wEjqIPnrmdnrueDg quZGSu6gNgARH 71yurgGqN1xEJWtkLVgdCiUhIz8XM0AxL0w7AAQARv/lBLgG5AATACcALQBIAJ0Asg8AACuxGQfpsgUBACuxIwbpsEUvtDMEACAEKwGwSS wANaxFAzpsBQQsS4BK7RIDgAeBCuwSBCxHgErsD0ysQoM6bAKELFCCyu0Ng4AHgQrsUoBK7EuFBEStw8FGSMoKSwvJBc5sR4AERKxKkc5ObAKEbMzPEBFJBc5sDYSsDo5ALEjGRESsQoAOTmxRQURErQpKy42PCQXOTAxEzQ AjMyHgIVFA4CIyIuAjcUHgIzMj4CNTQuAiMiDgITCQEHJwcBJj4CMzIWFRQGBw4BByM ATc2NTQmIyIGF0ZNirhqarmKTVCJuWhouIlQozJaf0tMf1oyMlp/TEx WjIVAT8BRHfNygGBCho/WzVmfy8tECkNgQghJVg3Lz06EAHfarmLUFCLuGtquYlOTom5bEqAYzc3Y4FJSoFgOjpggQJtARD 8F2urgGtN1xEJWtkLVgdCiUhIz8XM0AxL0w7AAQATv/lBpgJDAATACcAQwBJAHAAsg8AACuxGQPpsgUCACuxIwPpsEAvsS0F6bA2MrMzLUAIK7E6BemwQzIBsEovsADWsRQK6bAUELEeASuxCgrpsUsBK7EeFBEStQ8FKDdERiQXOQCxIxkRErEKADk5sToFERKxRUc5ObAzEbAoOTAxEzQSNiQzMgQWEhUUAgYEIyIkJgI3FB4CMzI AjU0LgIjIg4CAT4DMzIWFx4BMzI2NxcOASMiJicuASMiBgcDCQEHJwdOf9sBJaamASTcf3/c/tympv7b23 sYqzog4PnrGNjqueFheiqYgETEikxPicvUiUnPx0rNRJhHXFMJU0nJ0ghKysQQAFAAUN3zMsDAqYBI9t9fdv 3aam/t3XfX3XASOog euZ2eu54OD6q5kZK7qBN8fOS8bHRIQHz8jTkRiHRIQHTsj/tEBEf7vXK6uAAAABABG/ UEOQbDABMALwBDAEkAfgCyDwAAK7E1B myLAIAK7EZBemwIjKyHwIAK7EmBemwLzKyFAIAK7IFAQArsT8G6QGwSi wANaxMAzpsDAQsToBK7EKDOmxSwErsTAAERKwFDmwOhG3DxkiJi8FREYkFzmwChKwIzkAsT81ERKxCgA5ObEmBRESsUVHOTkwMRM0PgIzMh4CFRQOAiMiLgITPgMzMhYXHgEzMjY3Fw4BIyImJy4BIyIGBwMUHgIzMj4CNTQuAiMiDgITCQEHJwdGTYq4amq5ik1QibloaLiJUJMSKTE Jy9SJSc/HSs1EmEdcUwlTScnSCErKxBUMlp/S0x/WjIyWn9MTH5aMhUBPwFEd83KAd9quYtQUIu4a2q5iU5OibkEqB85LxsdEhAfPyNORGIdEhAdOyP8FEqAYzc3Y4FJSoFgOjpggQJtARD 8F2urgAEAE7 bwaYB/wAEwAnAC0AOQBrALIPAAArsRkD6bIFAgArsSMD6bA3L7ExCekBsDovsADWsRQK6bAUELEuASuxNBHpsDQQsR4BK7EKCumxOwErsS4UERKxKC05ObA0EbUPGSMpLAUkFzmwHhKxKis5OQCxIxkRErEKADk5MDETNBI2JDMyBBYSFRQCBgQjIiQmAjcUHgIzMj4CNTQuAiMiDgIJAgcnBxM0NjMyFhUUBiMiJk5/2wElpqYBJNx/f9z 3Kam/tvbf6xirOiDg esY2Oq54WF6KpiATcBPwFEd83LX0AvLz8/Ly9AAwKmASPbfX3b/t2mpv7d13191wEjqIPnrmdnrueDg quZGSu6gNlARD 8FyurvhNL0BALy8/PwAABABG/m8EOQWqABMAJwAtADkAawCyDwAAK7EZB myBQEAK7EjBumwNy xMQnpAbA6L7AA1rEUDOmwFBCxLgErsTQR6bA0ELEeASuxCgzpsTsBK7EuFBESsSgtOTmwNBG1DxkjKSwFJBc5sB4SsSorOTkAsSMZERKxCgA5OTAxEzQ AjMyHgIVFA4CIyIuAjcUHgIzMj4CNTQuAiMiDgITCQEHJwcTNDYzMhYVFAYjIiZGTYq4amq5ik1QibloaLiJUKMyWn9LTH9aMjJaf0xMfloyFQE/AUR3zctfQC8vPz8vL0AB32q5i1BQi7hrarmJTk6JuWxKgGM3N2OBSUqBYDo6YIECbwEQ/vBcrq76ny9AQC8vPz8AAAMATP/lB04IOgAdADEANQBqALIZAAArsSMD6bINAgArsgUCACuxLQPpAbA2L7AA1rEeCumwHhCxKAErsRQK6bAUELENASuxDgrpsTcBK7EoHhESsxkFMjQkFzmwFBGxChE5ObEODRESsA85ALEtIxESswARFAokFzkwMRM0EjYkMzIeAhc ATczDgEHHgEVFAIGBCMiJCYCNxQeAjMyPgI1NC4CIyIOAgETFwFMf9sBJaZoxayRNz9LBK4Id2sXG3/c/tympv7b23 sYqzog4PnrGJiqueFheiqYgGq86z xwMCpgEj2301X4dSP6tonvdcQotIpv7d13191wEjqIPnrmdnrueDg quZGSu6gNjAVBO/sQAAAADAET/5QS4BfQAGgAuADIAXgCyFgAAK7EgB myBQEAK7ALM7EqBukBsDMvsADWsRsM6bAbELElASuxEQ3pswsRJQgrsQwO6bE0ASuxJRsRErMWBS8xJBc5sAsRsQgPOTkAsSogERKyAA8IOTk5MDETND4CMzIWFz4BNTMUBgcWBxQOAiMiLgI3FB4CMzI AjU0LgIjIg4CGwEXAURNirhqe89GLTGNWEkhAVCJuGlouIpPozJafkxMf1oxMVp/TEx WjKI86z xwHfarmLUGhaI15BaqI5VGVquYlOTom5bEqAYzc3Y4FJSoFgOjpggQJ5AVBO/sQAAAMATP/lB04IOgAdADEANQBqALIZAAArsSMD6bINAgArsgUCACuxLQPpAbA2L7AA1rEeCumwHhCxKAErsRQK6bAUELENASuxDgrpsTcBK7EoHhESsxkFMjQkFzmwFBGxChE5ObEODRESsA85ALEtIxESswARFAokFzkwMRM0EjYkMzIeAhc ATczDgEHHgEVFAIGBCMiJCYCNxQeAjMyPgI1NC4CIyIOAgE3EwdMf9sBJaZoxayRNz9LBK4Id2sXG3/c/tympv7b23 sYqzog4PnrGJiqueFheiqYgGqrPNmAwKmASPbfTVfh1I/q2ie91xCi0im/t3XfX3XASOog euZ2eu54OD6q5kZK7qBGVO/rA6AAMARP/lBLgF9AAaAC4AMgBeALIWAAArsSAH6bIFAQArsAszsSoG6QGwMy wANaxGwzpsBsQsSUBK7ERDemzCxElCCuxDA7psTQBK7ElGxESsxYFLzEkFzmwCxGxCA85OQCxKiARErIADwg5OTkwMRM0PgIzMhYXPgE1MxQGBxYHFA4CIyIuAjcUHgIzMj4CNTQuAiMiDgITNxMHRE2KuGp7z0YtMY1YSSEBUIm4aWi4ik jMlp TEx/WjExWn9MTH5aMois82YB32q5i1BoWiNeQWqiOVRlarmJTk6JuWxKgGM3N2OBSUqBYDo6YIEDe07 sDoAAAAAAwBM/ UHTgi5AB0AMQBMAKwAshkAACuxIwPpsg0CACuyBQIAK7EtA mwSS 0NwQAIAQrAbBNL7AA1rEeCumwHhCxMgErtEwOAB4EK7BMELFGASu0Og4AHgQrsDoQsSgBK7EUCumwFBCxDQErsQ4K6bFOASuxMh4RErAzObBMEbBLObBGErcZIy0FQDdBSSQXObA6EbA ObEUKBESsQoROTkAsS0jERKzABEUCiQXObFJDRESsjI6QDk5OTAxEzQSNiQzMh4CFz4BNzMOAQceARUUAgYEIyIkJgI3FB4CMzI AjU0LgIjIg4CASY AjMyFhUUBgcOAQcjPgE3NjU0JiMiBhdMf9sBJaZoxayRNz9LBK4Id2sXG3/c/tympv7b23 sYqzog4PnrGJiqueFheiqYgGmCho/WzVmfy8tECkNgQghJVg3Lz06EAMCpgEj2301X4dSP6tonvdcQotIpv7d13191wEjqIPnrmdnrueDg quZGSu6gQ2N1xEJWtkLVgdCiUhIz8XM0AxL0w7AAMARP/lBLgGAAAaAC4ASQCoALIWAAArsSAH6bIFAQArsAszsSoG6bBGL7Q0BAAgBCsBsEovsADWsRsM6bAbELEvASu0SQ4AHgQrsEkQsUMBK7Q3DgAeBCuwNxCxJQErsREN6bMLESUIK7EMDumxSwErsS8bERKwMDmwSRGwSDmwQxK3FiAqBT00PkYkFzmwNxGwOzmxESURErEIDzk5ALEqIBESsgAPCDk5ObFGBRESsi83PTk5OTAxEzQ AjMyFhc ATUzFAYHFgcUDgIjIi4CNxQeAjMyPgI1NC4CIyIOAhMmPgIzMhYVFAYHDgEHIz4BNzY1NCYjIgYXRE2KuGp7z0YtMY1YSSEBUIm4aWi4ik jMlp TEx/WjExWn9MTH5aMo4KGj9bNWZ/Ly0QKQ2BCCElWDcvPToQAd9quYtQaFojXkFqojlUZWq5iU5OiblsSoBjNzdjgUlKgWA6OmCBAtk3XEQla2QtWB0KJSEjPxczQDEvTDsAAAAAAwBM/ UHTgfwAB0AMQBNAIkAshkAACuxIwPpsg0CACuyBQIAK7EtA mwSi xNwXpsEAysz03SggrsUQF6bBNMgGwTi wANaxHgrpsB4QsSgBK7EUCumwFBCxDQErsQ4K6bFPASuxKB4RErMZBTJBJBc5sBQRsQoROTmxDg0RErAPOQCxLSMRErMAERQKJBc5sT1EERKwMjkwMRM0EjYkMzIeAhc ATczDgEHHgEVFAIGBCMiJCYCNxQeAjMyPgI1NC4CIyIOAgE AzMyFhceATMyNjcXDgEjIiYnLgEjIgYHTH/bASWmaMWskTc/SwSuCHdrFxt/3P7cpqb 29t/rGKs6IOD56xiYqrnhYXoqmIBFRIpMT4nL1IlJz8dKzUSYR1xTCVNJydIISsrEAMCpgEj2301X4dSP6tonvdcQotIpv7d13191wEjqIPnrmdnrueDg quZGSu6gPDHzkvGx0SEB8/I05EYh0SEB07IwADAET/5QS4BTEAGgA2AEoAhwCyFgAAK7E8B myBQEAK7ALM7FGBumwMy xIAXpsCkysyYgMwgrsS0F6bA2MgGwSy wANaxNwzpsDcQsUEBK7ERDemzCxFBCCuxDA7psUwBK7E3ABESsBs5sEERtRYgKS02BSQXObALErIIDyo5OTkAsUY8ERKyAA8IOTk5sSYtERKwGzkwMRM0PgIzMhYXPgE1MxQGBxYHFA4CIyIuAhM AzMyFhceATMyNjcXDgEjIiYnLgEjIgYHAxQeAjMyPgI1NC4CIyIOAkRNirhqe89GLTGNWEkhAVCJuGlouIpPlRIpMT4nL1IlJz8dKzUSYR1xTCVNJydIISsrEFYyWn5MTH9aMTFaf0xMfloyAd9quYtQaFojXkFqojlUZWq5iU5OibkDFh85LxsdEhAfPyNORGIdEhAdOyP9pkqAYzc3Y4FJSoFgOjpggQADAEz bwdOBiMAHQAxAD0AdQCyGQAAK7EjA myDQIAK7IFAgArsS0D6bA7L7E1CekBsD4vsADWsR4K6bAeELEyASuxOBHpsDgQsSgBK7EUCumwFBCxDQErsQ4K6bE/ASuxODIRErMZIy0FJBc5sRQoERKxChE5OQCxLTsRErIAEQo5OTkwMRM0EjYkMzIeAhc ATczDgEHHgEVFAIGBCMiJCYCNxQeAjMyPgI1NC4CIyIOAgE0NjMyFhUUBiMiJkx/2wElpmjFrJE3P0sErgh3axcbf9z 3Kam/tvbf6xirOiDg esYmKq54WF6KpiAgxALy8/Py8vQAMCpgEj2301X4dSP6tonvdcQotIpv7d13191wEjqIPnrmdnrueDg quZGSu6vtWL0BALy8/PwAAAwBE/m8EuAPdABoALgA6AHIAshYAACuxIAfpsgUBACuwCzOxKgbpsDgvsTIJ6QGwOy wANaxGwzpsBsQsS8BK7E1EemwNRCxJQErsREN6bMLESUIK7EMDumxPAErsTUvERKzFiAqBSQXObERJRESsQgPOTkAsSogERKyAA8IOTk5MDETND4CMzIWFz4BNTMUBgcWBxQOAiMiLgI3FB4CMzI AjU0LgIjIg4CEzQ2MzIWFRQGIyImRE2KuGp7z0YtMY1YSSEBUIm4aWi4ik jMlp TEx/WjExWn9MTH5aMupALy8/Py8vQAHfarmLUGhaI15BaqI5VGVquYlOTom5bEqAYzc3Y4FJSoFgOjpggfyyL0BALy8/PwAAAAACAJj bwTlBggAJQAxAFsAsh4AACuxCwPpsgECACuwFDOwLy xKQnpAbAyL7AA1rEDCumwAxCxJgErsSwR6bAsELETASuxFgrpsTMBK7EDABESsCQ5sSwmERKxHgs5ObEWExESsBg5ADAxExEzERwBHgEXHgEzMjY3PgI0NREzERQOAgcOASMiJicuAwE0NjMyFhUUBiMiJpisDB0aM65WVKY2Hx4OrAgaOC1Q23Vv0k4zOx8KAbZALy8/Py8vQAJCA8b8aStaW1QkSExIQSVWXF8tA5f8Oj9yamIvVltQTjFlbnn83S9AQC8vPz8AAAACAI/ bwOJA8MAGQAlAEsAshUAACuxCAfpsgEBACuwDjOwIy xHQnpAbAmL7AA1rEDDemwAxCxGgErsSAR6bAgELENASuxEA3psScBK7EgGhESsRUIOTkAMDETETMRFB4CMzI AjURMxEUDgIjIi4CATQ2MzIWFRQGIyImj6QMK1lJSlgrDKQnWpFrapJaJwEPQC8vPz8vL0ABmAIr/ec9bVIxMVJtPQIZ/dVgoHNAQHOf/aYvQEAvLz8/AAIAmP/lBOUIuQAlAEAAggCyHgAAK7ELA myAQIAK7AUM7A9L7QrBAAgBCsBsEEvsADWsQMK6bADELEmASu0QA4AHgQrsEAQsToBK7QuDgAeBCuwLhCxEwErsRYK6bFCASuxJgMRErAnObBAEbA/ObA6ErUeCzQrNT0kFzmwLhGwMjkAsT0BERKyJi40OTk5MDETETMRHAEeARceATMyNjc AjQ1ETMRFA4CBw4BIyImJy4DASY AjMyFhUUBgcOAQcjPgE3NjU0JiMiBheYrAwdGjOuVlSmNh8eDqwIGjgtUNt1b9JOMzsfCgFSCho/WzVmfy8tECkNgQghJVg3Lz06EAJCA8b8aStaW1QkSExIQSVWXF8tA5f8Oj9yamIvVltQTjFlbnkFvTdcRCVrZC1YHQolISM/FzNAMS9MOwAAAgCP/ UDiQYAABkANACLALIVAAArsQgH6bIBAQArsA4zsDEvtB8EACAEKwGwNS wANaxAw3psAMQsRoBK7Q0DgAeBCuwNBCxDQErsRAN6bMiEA0IK7QuDgAeBCuwLi 0Ig4AHgQrsTYBK7EaAxESsBs5sDQRsDM5sC4StRUIKB8pMSQXObAiEbAmOQCxMQERErIaIig5OTkwMRMRMxEUHgIzMj4CNREzERQOAiMiLgITJj4CMzIWFRQGBw4BByM ATc2NTQmIyIGF4 kDCtZSUpYKwykJ1qRa2qSWie1Cho/WzVmfy8tECkNgQghJVg3Lz06EAGYAiv95z1tUjExUm09Ahn91WCgc0BAc58DzTdcRCVrZC1YHQolISM/FzNAMS9MOwAAAAACAJj/5QYZCDoALwAzAGEAsigAACuxCwPpsgECACuxFBkzMwGwNC wANaxAwrpsAMQsRMBK7EgCumwFTKwIBCxGQErsRoO6bE1ASuxAwARErAuObATEbIoMDI5OTmwIBKwIjkAsQELERKxFh85OTAxExEzERwBHgEXHgEzMjY3PgI0NREzET4BNzMUDgIHERQOAgcOASMiJicuAwETFwGYrAwdGjOuVlSmNh8eDqxIVAKWME9xRAgaOC1Q23Vv0k4zOx8KAZPzrP7HAkIDxvxpK1pbVCRITEhBJVZcXy0Dl/6/Na5eUJmDayH Mj9yamIvVltQTjFlbnkE6gFQTv7EAAAAAAIAj//lBJ4F9AAhACUAXACyHQAAK7EIB myAQEAK7EOEzMzAbAmL7AA1rEDDemwAxCxDQErsRgN6bAPMrAYELETASuxFA7psScBK7ENAxESsx0iIyUkFzmwGBGwJDkAsQEIERKxEBc5OTAxExEzERQeAjMyPgI1ETMVPgE3Mw4BBxUUDgIjIi4CGwEXAY kDCtZSUpYKwykQkMCjgKUfydakWtqklon4vOs/scBmAIr/ec9bVIxMVJtPQIZ/jNyWZbRPYdgoHNAQHOfA20BUE7 xAAAAgCY/ UGGQg6AC8AMwBhALIoAAArsQsD6bIBAgArsRQZMzMBsDQvsADWsQMK6bADELETASuxIArpsBUysCAQsRkBK7EaDumxNQErsQMAERKwLjmwExGyKDAyOTk5sCASsCI5ALEBCxESsRYfOTkwMRMRMxEcAR4BFx4BMzI2Nz4CNDURMxE ATczFA4CBxEUDgIHDgEjIiYnLgMBNxMHmKwMHRozrlZUpjYfHg6sSFQCljBPcUQIGjgtUNt1b9JOMzsfCgFqrPNmAkIDxvxpK1pbVCRITEhBJVZcXy0Dl/6/Na5eUJmDayH Mj9yamIvVltQTjFlbnkF7E7 sDoAAAIAj//lBJ4F9AAhACUAXACyHQAAK7EIB myAQEAK7EOEzMzAbAmL7AA1rEDDemwAxCxDQErsRgN6bAPMrAYELETASuxFA7psScBK7ENAxESsx0iIyUkFzmwGBGwJDkAsQEIERKxEBc5OTAxExEzERQeAjMyPgI1ETMVPgE3Mw4BBxUUDgIjIi4CEzcTB4 kDCtZSUpYKwykQkMCjgKUfydakWtqklonuazzZgGYAiv95z1tUjExUm09Ahn M3JZltE9h2Cgc0BAc58Eb07 sDoAAAAAAgCY/ UGGQi5AC8ASgCiALIoAAArsQsD6bIBAgArsRQZMzOwRy 0NQQAIAQrAbBLL7AA1rEDCumwAxCxMAErtEoOAB4EK7BKELFEASu0OA4AHgQrsDgQsRMBK7EgCumwFTKwIBCxGQErsRoO6bFMASuxMAMRErAxObBKEbBJObBEErUoCz41P0ckFzmwOBGwPDmxIBMRErAiOQCxAQsRErEWHzk5sEcRsjA4Pjk5OTAxExEzERwBHgEXHgEzMjY3PgI0NREzET4BNzMUDgIHERQOAgcOASMiJicuAwEmPgIzMhYVFAYHDgEHIz4BNzY1NCYjIgYXmKwMHRozrlZUpjYfHg6sSFQCljBPcUQIGjgtUNt1b9JOMzsfCgFmCho/WzVmfy8tECkNgQghJVg3Lz06EAJCA8b8aStaW1QkSExIQSVWXF8tA5f vzWuXlCZg2sh/jI/cmpiL1ZbUE4xZW55Bb03XEQla2QtWB0KJSEjPxczQDEvTDsAAAACAI//5QSeBgAAIQA8AKMAsh0AACuxCAfpsgEBACuxDhMzM7A5L7QnBAAgBCsBsD0vsADWsQMN6bADELEiASu0PA4AHgQrsDwQsQ0BK7EYDemwDzKzKhgNCCu0Ng4AHgQrsDYvtCoOAB4EK7AYELETASuxFA7psT4BK7EiAxESsCM5sDwRsDs5sDYStR0IMCcxOSQXObAqEbAuOQCxAQgRErEQFzk5sDkRsiIqMDk5OTAxExEzERQeAjMyPgI1ETMVPgE3Mw4BBxUUDgIjIi4CEyY AjMyFhUUBgcOAQcjPgE3NjU0JiMiBhePpAwrWUlKWCsMpEJDAo4ClH8nWpFrapJaJ7UKGj9bNWZ/Ly0QKQ2BCCElWDcvPToQAZgCK/3nPW1SMTFSbT0CGf4zclmW0T2HYKBzQEBznwPNN1xEJWtkLVgdCiUhIz8XM0AxL0w7AAAAAgCY/ UGGQfwAC8ASwCLALIoAAArsQsD6bIBAgArsRQZMzOwSC xNQXpsD4yszs1SAgrsUIF6bBLMgGwTC wANaxAwrpsAMQsRMBK7EgCumwFTKwIBCxGQErsRoO6bFNASuxAwARErAuObATEbMoMD5CJBc5sCASsSI/OTkAsQELERKxFh85ObFIKBESsDA5sTU7ERKwPzkwMRMRMxEcAR4BFx4BMzI2Nz4CNDURMxE ATczFA4CBxEUDgIHDgEjIiYnLgMTPgMzMhYXHgEzMjY3Fw4BIyImJy4BIyIGB5isDB0aM65WVKY2Hx4OrEhUApYwT3FECBo4LVDbdW/STjM7HwrVEikxPicvUiUnPx0rNRJhHXFMJU0nJ0ghKysQAkIDxvxpK1pbVCRITEhBJVZcXy0Dl/6/Na5eUJmDayH Mj9yamIvVltQTjFlbnkFSh85LxsdEhAfPyNORGIdEhAdOyMAAAAAAgCP/ UEngUxACEAPQCOALIdAAArsQgH6bIBAQArsQ4TMzOwOi xJwXpsDAysy0nOggrsTQF6bA9MgGwPi wANaxAw3psAMQsQ0BK7EYDemwDzKwGBCxEwErsRQO6bE/ASuxAwARErEiPTk5sA0RtB0nLTQ6JBc5sBgSsTAxOTkAsQEIERKxEBc5ObE6HRESsCI5sSctERKwMTkwMRMRMxEUHgIzMj4CNREzFT4BNzMOAQcVFA4CIyIuAhM AzMyFhceATMyNjcXDgEjIiYnLgEjIgYHj6QMK1lJSlgrDKRCQwKOApR/J1qRa2qSWichEikxPicvUiUnPx0rNRJhHXFMJU0nJ0ghKysQAZgCK/3nPW1SMTFSbT0CGf4zclmW0T2HYKBzQEBznwNUHzkvGx0SEB8/I05EYh0SEB07IwACAJj bwYZBggALwA7AG0AsigAACuxCwPpsgECACuxFBkzM7A5L7EzCekBsDwvsADWsQMK6bADELEwASuxNhHpsDYQsRMBK7EgCumwFTKwIBCxGQErsRoO6bE9ASuxNjARErEoCzk5sSATERKwIjkAsQELERKxFh85OTAxExEzERwBHgEXHgEzMjY3PgI0NREzET4BNzMUDgIHERQOAgcOASMiJicuAwE0NjMyFhUUBiMiJpisDB0aM65WVKY2Hx4OrEhUApYwT3FECBo4LVDbdW/STjM7HwoBzEAvLz8/Ly9AAkIDxvxpK1pbVCRITEhBJVZcXy0Dl/6/Na5eUJmDayH Mj9yamIvVltQTjFlbnn83S9AQC8vPz8AAAIAj/5vBJ4DwwAhAC0AZQCyHQAAK7EIB myAQEAK7EOEzMzsCsvsSUJ6QGwLi wANaxAw3psAMQsSIBK7EoEemwKBCxDQErsRgN6bAPMrAYELETASuxFA7psS8BK7EoIhESsR0IOTkAsQEIERKxEBc5OTAxExEzERQeAjMyPgI1ETMVPgE3Mw4BBxUUDgIjIi4CATQ2MzIWFRQGIyImj6QMK1lJSlgrDKRCQwKOApR/J1qRa2qSWicBGUAvLz8/Ly9AAZgCK/3nPW1SMTFSbT0CGf4zclmW0T2HYKBzQEBzn/2mL0BALy8/PwAAAgAQAAAEsAg6AAgADAAyALIHAAArsgACACuwAzMBsA0vsAfWsQYK6bEOASuxBgcRErECCjk5ALEABxESsAI5MDETMwkBMwERIxEDNxMHEMcBiQGJx/4GrHqs82YGCP1QArD8kP1oApgFVE7 sDoAAAL//P3jBAAF9AAHAAsAHwCyAAEAK7ADM7AGLwGwDC xDQErALEABhESsAI5MDEDMwkBMwEjAQM3EwcEvgFUATi6/Tm6ATeJrPNmA8P9TQKz iACdwVMTv6wOgAAAgAQ/m8EsAYIAAgAFABPALIHAAArsgACACuwAzOwEi xDAnpAbAVL7AH1rEGCumwBhCzGwYPDiuxCRHpsAkvsQ8R6bEWASuxBgcRErICDBI5OTkAsQAHERKwAjkwMRMzCQEzAREjEQM0NjMyFhUUBiMiJhDHAYkBicf BqwaQC8vPz8vL0AGCP1QArD8kP1oApj8RS9AQC8vPz8AAv/8/eMEAAPDAAcAEwAvALIAAQArsAMzsAYvsBIvsQwJ6QGwFC wCdaxDxHpsRUBKwCxAAwRErECBzk5MDEDMwkBMwEjARI1NDYzMhYVFAYjIgS AVQBOLr9OboBN5JALy8/Py8vA8P9TQKz iACd/5ULy9AQC8vPwAAAAIAEAAABLAIuQAIACMAdQCyBwAAK7IAAgArsAMzsCAvtA4EACAEKwGwJC wCda0Iw4AHgQrsCMQsQcLK7EGCumwBhCxHQErtBEOAB4EK7ElASuxIwkRErAiObAGEbUCDhcYGyAkFzmxER0RErAVOQCxAAcRErACObAgEbIJERc5OTkwMRMzCQEzAREjEQMmPgIzMhYVFAYHDgEHIz4BNzY1NCYjIgYXEMcBiQGJx/4GrH4KGj9bNWZ/Ly0QKQ2BCCElWDcvPToQBgj9UAKw/JD9aAKYBSU3XEQla2QtWB0KJSEjPxczQDEvTDsAAv/8/eMEAAZzAAcAIgBoALIAAQArsAMzsAYvsB8vtA0EACAEKwGwIy wCNa0Ig4AHgQrsCIQsRwBK7QQDgAeBCuxJAErsSIIERKxBSE5ObAcEbUCDRYHFx8kFzmwEBKwFDkAsQAGERKwAjmwHxGyCBAWOTk5MDEDMwkBMwEjAQMmPgIzMhYVFAYHDgEHIz4BNzY1NCYjIgYXBL4BVAE4uv05ugE3jQoaP1s1Zn8vLRApDYEIISVYNy89OhADw/1NArP6IAJ3BR03XEQla2QtWB0KJSEjPxczQDEvTDsAAAACABAAAASwB/AACAAkAFsAsgcAACuyAAIAK7ADM7AhL7EOBemwFzKzFA4hCCuxGwXpsCQyAbAlL7AH1rEGCumxJgErsQYHERKyAh4fOTk5ALEABxESsAI5sSEbERKwCTmxDhQRErAYOTAxEzMJATMBESMRAT4DMzIWFx4BMzI2NxcOASMiJicuASMiBgcQxwGJAYnH/gas/u4SKTE Jy9SJSc/HSs1EmEdcUwlTScnSCErKxAGCP1QArD8kP1oApgEsh85LxsdEhAfPyNORGIdEhAdOyMAAAAC//z94wQABTEABwAjAEYAsgABACuwAzOwBi wIC xDQXpsBYysxMNIAgrsRoF6bAjMgGwJC xJQErALEABhESsAI5sSAaERKwCDmxDRMRErAXOTAxAzMJATMBIwkBPgMzMhYXHgEzMjY3Fw4BIyImJy4BIyIGBwS AVQBOLr9OboBN/7mEikxPicvUiUnPx0rNRJhHXFMJU0nJ0ghKysQA8P9TQKz iACdwQxHzkvGx0SEB8/I05EYh0SEB07IwABAAQBogGoAjkAAwAiALAAL7EBBumxAQbpAbAEL7EACyu0AxEACgQrsQUBKwAwMRM1IRUEAaQBopeXAAABAAABogQAAjkAAwAXALAAL7EBBumxAQbpAbAEL7EFASsAMDERNSEVBAABopeXAAABAQoBogb2AjkAAwAXALAAL7EBBumxAQbpAbAEL7EFASsAMDEBNSEVAQoF7AGil5cAAAAAAQB9A EB1QYjAAMAIgCyAQIAK7QDCQAIBCsBsAQvsADWtAIRAAwEK7EFASsAMDEbARcDfelvwQQZAgor/ekAAAEAewPhAdMGIwADACIAsgECACu0AwkACAQrAbAEL7AA1rQCEQAMBCuxBQErADAxGwEXA3vAmOoEDAIXN/31AAABAH3 oAHVAOEAAwAgALADL7QBCQAIBCsBsAQvsADWtAIRAAwEK7EFASsAMDEbARcDfcCY6f7NAhQ1/fQAAAAAAgB9A EDLQYjAAMABwAeALIBAgArsAUztAMJAAgEK7AHMgGwCC xCQErADAxGwEXAzcTFwN96W/BwelvwAQZAgor/ek4Agor/ekAAAIAfQPhAy0GIwADAAcAHgCyAQIAK7AFM7QDCQAIBCuwBzIBsAgvsQkBKwAwMRsBFwM3ExcDfcCY6enBl kEDAIXN/31KwIXN/31AAACAH3 oAM7AOEAAwAHABwAsAMvsAcztAEJAAgEK7AFMgGwCC xCQErADAxGwEXAzcTFwN9wJjp98GX6f7NAhQ1/fQtAhQ1/fQAAAAAAQC0/rIECAYIAAsATgCyAwIAK7IAAQArsAczsQED6bAFMrIAAQors0AACgkrAbAML7AK1rACMrEJC mwBDKyCQoKK7NACQcJK7IKCQors0AKAAkrsQ0BKwAwMRM1IREzESEVIREjEbQBVqgBVv6qqAPunwF7/oWf sQFPAAAAAABALT sgQIBggAEwBlALIHAgArsgQBACuwCzOxBQPpsAkysAAvsA8zsQED6bANMrIAAQors0AAEgkrAbAUL7AS1rECBjIysREL6bEIDDIyshESCiuzQBEPCSuwCjKyEhEKK7NAEgAJK7AEMrEVASsAMDE3NSERITUhETMRIRUhESEVIREjEbQBVv6qAVaoAVb qgFW/qqoZqAC6J8Be/6Fn/0YoP5MAbQAAAAAAQDdAYMD4QSHABMALgCwDy 0BQkABwQrtAUJAAcEKwGwFC wANa0ChEABwQrtAoRAAcEK7EVASsAMDETND4CMzIeAhUUDgIjIi4C3TxojVBQjWk9PWuLUFCLaD4DBFCNaT09aY1QUI1pOztpjQAAAAMA5f/lBxsAywALABcAIwBFALIJAAArsRUhMzOxAwnpsQ8bMjKyCQAAK7EDCekBsCQvsADWsQYR6bAGELEMASuxEhHpsBIQsRgBK7EeEemxJQErADAxNzQ2MzIWFRQGIyImJTQ2MzIWFRQGIyImJTQ2MzIWFRQGIyIm5UQvL0RELy9EAqhELy9ERC8vRAKoRC8vREQvL0RaL0JCLy9GRi8vQkIvL0ZGLy9CQi8vRkYABwBG/ UJbQYjABMAJwArAD8AUwBnAHsAzgCyOwAAK7ErYzMzsUUE6bBtMrIFAgArsCkzsSME6bIZAQArsQ8E6bQxTzsZDSuwdzOxMQTpsFkyAbB8L7AA1rQUDgAeBCuwFBCxHgErtAoOAB4EK7AKELEsASu0QA4AHgQrsEAQsUoBK7Q2DgAeBCuwNhCxVAErtGgOAB4EK7BoELFyASu0Xg4AHgQrsX0BK7EeFBESsw8FKCskFzmxSkARErMpMTsqJBc5sXJoERKxY1k5OQCxT0URErM2LFReJBc5sSMZERKxCgA5OTAxEzQ AjMyHgIVFA4CIyIuAjcUHgIzMj4CNTQuAiMiDgITARcJATQ AjMyHgIVFA4CIyIuAjcUHgIzMj4CNTQuAiMiDgIFND4CMzIeAhUUDgIjIi4CNxQeAjMyPgI1NC4CIyIOAkY3XH1IRn5cODhefUVGfV43gyM5TisrTjkjIzlOKytOOSN/A4NS/IMB1TdcfUhGfl03N199RUZ9XjeDIzlOKytOOSMjOU4rK045IwLEOFx8SEZ/XDg4Xn1GRnxeOIMjOk0rK046IiI6TisrTTojBNFIel0zM116SEh5XDMzWntIK0o3ISE3SisrTDchITdM x8GCDH58wFQSHtcMzNce0hIeFw0NFp7RytJOCEhOEkrK0w3ISE3TCtIe1wzM1x7SEh4XDQ0WntHK0k4ISE4SSsrTDchITdMAAABAFQARAIZA6AABQAgAAGwBi wANa0BBEACgQrsQcBK7EEABESsQIDOTkAMDETARcJAQdUAVht/usBFW0B7AG0Vv6i/qxUAAABAIsARAJQA6AABQAhAAGwBi wANawAjK0BBEACgQrsQcBK7EEABESsAE5ADAxNwkBNwkBiwEV/uttAVj qJgBVAFeVv5M/lgAAAAAAf62/ UCkwYjAAMAFgCyAwAAK7IBAgArAbAEL7EFASsAMDElARcB/rYDg1r8fRcGDDH58wAAAAABADv/5wSJBiEANQBfALIyAAArsSsG6bIQAgArsRcH6bIKAQArsBwzsQkE6bAeMrQBADIKDSuwJzOxAQTpsCUyAbA2L7AF1rEiC mxNwErsSIFERKxCzU5OQCxACsRErAuObEXChESsBQ5MDETNzMuATU0NjUjNzM AzMyFhcVLgEjIg4CByEHIRQGFRQWFSEHIR4BMzI2NxUOASMiAAM7L2kCAgKWL3MSU4vJh4G8LzOse2KUaD4KAp4v/X8CAgJDL/3 HdW2eaY5KbyJ7P7ZKQIvgxAwFhcrEIN905xYRCWqMUhBc5xagxAtFRksEYPR4UgzrCVAARsBLQACAET/8AQOBqIAKwA5AFgAsiIAACuxGQTpsjQCACu0CQQAIAQrAbA6L7AD1rAnMrEsDumwEzKwLBCxMQErtA4OABIEK7E7ASuxMSwRErIJGSI5OTkAsTQZERK2DgMeHygrLCQXOTAxEz4BNxE0PgIzMh4CFRQOAgcVFB4CMzI AjcXDgEjIi4CJzUOAQcBPgM1NCYjIg4CFUQvWik9YHs SGhGIEN7rGsrRloxN19QPRVNStSGYIlYLQQfQSMBGEyBYDhKXB9ENyUBmilHJwJemMt7NTpgg0pozcvIZUVchFMnKT9OJUSLi0Nxk1IbFzcbAW9QoqOkVG2FJ1yYbgAAAgBKAqoHPQYIAAcAFgB8ALIBAgArsQkMMzO0AAQAIAQrsgMQFDIyMrIAAQors0AABgkrsggOEjIyMgGwFy wBta0BQ4AHgQrsgUGCiuzQAUDCSuyBgUKK7NABgAJK7AFELEIASu0Fg4AHgQrsBYQsQ8BK7QODgAeBCuxGAErsQ8WERKxCgw5OQAwMRM1IRUhESMRAREzEwEzESMRIwEjASMRSgK6/uF7AkDP AEAzHoF/tpQ/uEEBY17e/0dAuP9HQNe/ZQCbPyiAuP9HQLj/R0AAAABAHEAAAXyBhsAMQCFALIAAAArsBozsQEE6bAYMrINAgArsSYE6QGwMi wCNaxKwzpsisICiuzQCsxCSuyCCsKK7NACAAJK7ArELEhASuxEgzpshIhCiuzQBIaCSuyIRIKK7NAIRsJK7EzASuxISsRErQDDQIYFyQXOQCxAQARErEcMDk5sCYRswgSISskFzkwMTM1ITUuAzU0Ej4BMzIeARIVFA4CBxUhFSE1PgM1NC4CIyIOAhUUHgIXFXEBVj1vVjRptviRmPauXjVacTkBWP3jQnxjOz9/v313vodIPGJ9QYMGM4yuz3SiARHCbXnJ/viPedWyii8Gg2AphbPfhW3ftHNjrOWDfd23hylgAAIASv/nBzkGIwAfADAAcQCyGwAAK7QUBAAUBCuyBQIAK7QrBAAUBCu0DCIbBQ0rtAwEABQEKwGwMS wANa0DxEADQQrsCAysA8QsSUBK7QKEQANBCuxMgErsSUPERKyBRQbOTk5sAoRsRcYOTkAsQwUERKxFxg5ObAiEbAAOTAxEzQSNiQzMgQWEh0BISIHERQXFgQzMiQ3MwYEIyIkJgIlFDMhMjcRNCcmJCMiBAcGB0qL8gFBubgBQ/KL mMKARNoARegrgElaIF5/pTZuP6 8osBRwsETQoBF2j 7Z e/uloFAEDAqYBI9t9fdv 3aYUC/5OHRRtf457jal91wEjyQ4OAbQfFmh6f2sUIQAAAgBg/ 4EXAa8ACgAPQBvALIkAAArsS4E6bITAgArsRoE6bIXAgArtAU5JBoNK7EFBOkBsD4vsADWsSkO6bApELEOASuxHw7psT8BK7EpABESsRYXOTmwDhG0BRMaJDQkFzkAsTkuERKzAAsfCiQXObAFEbAOObATErAWOTAxEzQ AjMyHgIXMz4BNTQuAiMiBgcnPgEzMh4BEhUUAg4BIyIuAjcUHgI7ATI AjcuAyMiDgJgToWsYFCBXz8MAgQBRnWcVmqWLzk3t4lvzJ5gSpPdkm hbTOeKUxqQgJSh2JADAw6VnBESH1eNwHsgc6SUDFITBkUPBWW865eQydzK09mz/7H077 tPaNWo 4X1KMZDlcm8ttJVhJNER1nQAAAgBGAAAFcwYtAAUAEwAqALIAAAArsQYE6bICAgArAbAUL7EVASsAsQYAERKxAQQ5ObACEbANOTAxMzUBMwEVJSEBLgMnIw4DB0YCPboCNvt2A97 sBAsLScKCAghKSkObwWkRxgQNcK3FwayUfWmhrLQABADn/KwXuBgIACwBOALAAL7EDBzMzsQEE6bIAAQors0AACgkrsAUyAbAML7AK1rEJDumyCgkKK7NACgAJK7AJELEGASuxBQ7psgUGCiuzQAUDCSuxDQErADAxEzUhFSMRIxEhESMROQW1 pz9eZwFc4 P bgGSPm4BkgAAQAz/ysEsAYCAA0AMACyCgAAK7ENBumwBi xAwTpAbAOL7EPASsAsQoNERKwADmwBhGwATmwAxKwAjkwMRcJATUhFSEVCQEVIRUhMwJl/bYEP/ygAiP9sgOu 4NqAv0DAG JCP05/R8IlgAAAQCHAbwEZgJcAAMAFwCwAC xAQPpsQED6QGwBC xBQErADAxEzUhFYcD3wG8oKAAAf62/ UCkwYjAAMAFgCyAwAAK7IBAgArAbAEL7EFASsAMDElARcB/rYDg1r8fRcGDDH58wAAAAABAMkBmAGuAn0ACwAiALAJL7EDCemxAwnpAbAML7AA1rEGEemxBhHpsQ0BKwAwMRM0NjMyFhUUBiMiJslDLy9ERC8vQwIML0JCLy9FRQAAAAEATP60BQYHIwAPAG8AAbAQL7AK1rQLDgAeBCuxEQErsDYauj5W8X4AFSsKBLAKLg6wB8AEsQsT Q6wDMCwBxCzCAcKEyuzCQcKEyuyCAcKIIogiiMGDhESObAJOQC1CQoLDAcILi4uLi4uAbMJDAcILi4uLrBAGgEAMDETJQEeARczPgE3ATMBIwEHTAEtAScKFAkCBBAKAaZ5/gqP/paoAtl1/LwnVCAfUykHGfeRBAI/AAMAcwEdBloD1wAoADsATgBhALIFAQArsA8ztDcEABQEK7BJMrAkL7AaM7QsBAAUBCuwQTIBsE8vsADWtCkOABIEK7ApELFGASu0FQ4AEgQrsVABK7FGKREStQUPGiQyPCQXOQCxNywRErIAHwo5OTkwMRM0PgIzMh4CFz4DMzIeAh0BFA4CIyIuAicOAyMiLgI3FBY7ATI AjcuAyMiDgIFHgMzMj4CNTQmKwEiDgJzNV5/TD9xZF8tLVpkc0hKdlQvOV57QjViY2g8LVxmdUNEeVw1bINtAjdgWU0jJ05YZj01VTkfAsc5XFRSLTVVOR DYwI5Z1hLAndMgV41LUxiMzFgTi8zWn1MBFCDXDEgRGREM2BMLTVcf0Zkji9KVCUtXEovK0ZeKT1fPyErRlgteYU4TVQAAAEAG/6gAvgHVgAxAGkAsC8vtAQEACAEK7AeL7QXBAAgBCsBsDIvsBHWsAkysSQO6bAkELAnINYRsQ8O6bAPL7EnDumwJBCwKSDWEbEMDumwDC xKQ7psTMBKwCxBC8RErAAObAeEbMBERspJBc5sBcSsBo5MDETNx4BMzI2Nz4DNTQKAjU0Njc ATMyFhcHLgEjIgYHDgEVFBoCFRQGBw4BIyImGxwQNiMdNxQQHRcMCgwLOEEpbTcjRxEbEC0XHT8WKyMKCgo7JSV0QitS/sVyCBQaGRQ Wn1WhwEfASABHYG03EEtJxQLbgoOGB0xuqCB/un 5P7jhbTPOjk1GAACAGgBLwSNA7oAGQA3AFwAsBAvsBkztAkEABQEK7AWL7QDBAAUBCuwDDKwKi wNzO0IwQAFAQrsDIvtB0EABQEK7AmMgGwOC xOQErALEWCRESsQcUOTmwAxGxBg05ObEjKhESsRouOTkwMRM ATMyFhceATMyNjcXDgEjIiYnLgEjIgYHAz4BMzIWFx4BMzI2NxcOASMiLgInLgEjIg4CB2g1nmNSfS85XkJGYDFBLYtoRnFSNWY6UGgpRjWeY1J9LztePkhiL0EtiWgjPj1EKTVmOik/NS8VAW1icEMZHTBRVDtWezEvHS9oQgG2YnFDGSEtVFI5WHsMGSUWHS8dLT0hAAEAcwBaBIUEhQATACwAsAAvsA8ztAEEACAEK7ANMrAEL7ALM7QFBAAgBCuwCTIBsBQvsRUBKwAwMRM1IRMhNSETFwchFSEDIRUhAyc3cwGDmf3kAkV7UmYBZv5vmgIr/ap7VGsBZGkBSmgBBiffaP62af72J MAAAIAcwAIBIUFLQADAAsAFgCwAC 0AQQAIAQrAbAML7ENASsAMDE3NSEVATUBFQEVARVzBBL7/AP /HMDjQhrawK/bgH4ff5SBP5OfQACAHUACASDBS0AAwALABYAsAAvtAEEACAEKwGwDC xDQErADAxNzUhFSU1ATUBNQEVdQQO/AADi/x1A/4Ia2vHfQGwBAGwff4IbgAAAgB7/5oEiQZoAAUAFwATALAFL7EKBOkBsBgvsRkBKwAwMRMBMwkBIwkBHgEXMz4BNwkBLgEnIw4BB3sByYEBxP44gv7NAUwOFQQIBhkKAUj tgwXCAQIFRADAANo/Jj8mgNq/YcjNxQUQhYCcwJ3Gz8WGzkcAAAAAQAAAAADwwPDAAMAADERIREDwwPD/D0AAwA3AAADjwa0ABwAKAAsAKQAshsAACuwKTOyEAIAK7EJCOmyAQEAK7EWKjMzsQAH6bAYMrQgJgAJDSuxIAnpAbAtL7Ab1rACMrEaDemwFTKyGhsKK7NAGhgJK7AMMrIbGgors0AbAAkrsBoQsSkBK7EsDemwLBCzGywjDiuxHRHpsB0vsSMR6bEuASuxGhsRErAFObAdEbAJObEsKRESsSYgOTkAsRAgERKwDTmwCRGwDDkwMRM1MxE0Njc ATMyFhcVLgEjIg4CFREzFSMRIxEBNDYzMhYVFAYjIiYTETMRN1oLICmFSh07HR0zHzE3GQT09KQCFUYvL0VFLy9GI6QDK5gBfzuJNUI3CgqmCgwiRGJA/ruY/NUDKwICL0ZGLzFERPsEA8P8PQAAAgA3AAADbQa0ABwAIAB8ALIbAAArsB0zshACACuxCQjpsgEBACuwFjOxAAfpsBgysx4QCQgrsAwzAbAhL7Ab1rACMrEaDemwFTKyGhsKK7NAGhgJK7AMMrIbGgors0AbAAkrsBoQsR0BK7EgDemxIgErsRobERKwBTmwHRGwCTkAsRABERKwDTkwMRM1MxE0Njc ATMyFhcVLgEjIg4CFREzFSMRIxEBETMRN1oLICmFSh07HR0zHzE3GQT09KQCOKQDK5gBfzuJNUI3CgqmCgwiRGJA/ruY/NUDK/zVBpr5ZgAAAgArA8ECnAYjABUAJwByALIKAgArsgUCACu0IwQAFAQrshsBACu0EQQAFAQrsgwBACuzDREbCCuzIg0RDisBsCgvsADWtBYOABIEK7AWELENASuxCSAyMrQMDgASBCuxKQErsQ0WERKzBREbIyQXOQCxIxsRErQACQ4PCCQXOTAxEzQ AjMyFhczNTMRIzUjBiMiLgI3FB4CMzI AjU0JiMiDgIrKU5uSD9vJwRrawRQh0ZuTilrGjVOMTNONhpvYi9MNxwE8D1xVDEzL1H9v1BgMVRuRCtQPiQiPlArWHsjOUwAAgAQA8ECpAYjABMAJwBOALIFAgArtCMEABQEK7APL7QZBAAUBCsBsCgvsADWtBQOABIEK7AUELEeASu0Cg4AEgQrsSkBK7EeFBESsQ8FOTkAsSMZERKxCgA5OTAxEzQ AjMyHgIVFA4CIyIuAjcUHgIzMj4CNTQuAiMiDgIQNFh4RkZ3WjMzWnlERHhaNGshO1IxMVI8ICA8UjExUjshBPA/cVIxMVJxPz9vUi8vUm5CLU48ICA8Ti0rUDkjIzlQAAAAAAEAAAACBmY/MqFEXw889QAfCAAAAAAAzGVc8gAAAADMZVzy/rb9qAltCYMAAAAIAAIAAAAAAAAAAQAACYP9gAAACbL tv62CW0AAQAAAAAAAAAAAAAAAAAAAWwEAAAAAAAAAAPoAAACdgAAAnYAAAK0AOcDpwDRBO0AWgTtAJgGYABCBY8AUAJPAMkCSwC AksAQgS8AN8E7QCHAnYAdwGpAAQCdgDJBI8AJQTtAE4E7QFEBO0AVATtAHUE7QAMBO0AKwTtAFoE7QBIBO0AoATtAFwCdgDJAnYAewTtAIcE7QCHBO0AhwPnAH8GZgBKBZcADASLAJwFvABEBWwAnARFAJwD0gCcBo8AQgW2AKQB6QCgAoP/eQTjAJwDAACcBysAKwasAKYG5QBOBAYAnAblAE4EVgCcBHgAUgPCABQFegCYBP0ADAi6ABsEgwAbBL4AEASwAB0ChQDVBI8AJQKFACsE7QCHBAAAAALdAKAEnQBKBJ0AkwPOADsEnQBKBCYARgIxAFAEowA/BDkAnAIYAJgCGACYA8IAkwHQAJgGJACcBDkAnAR AEYEnQCTBJ0ASgKuAJMDMQBMAesAPwQYAI8DtAACBhQABgP7AAID //8BCYAFAKsAGgEjwH4AqwAZgTtAIcCdgAAArQA5wTtAMME7QBMBO0AbQTtACcEjwH4BLwA0QO8AKYGZgAQAsQAKwQAAFQE7QCHAakABAZmABAD/QCiAzMAZgTtAIcC8wA1AvMASgLdAKAEGACPBLwAeQJ2AMkCmQCgAvMA6QKyABAEAACLB2QAzQdkAM0HZACkA cAfwWXAAwFlwAMBZcADAWXAAwFlwAMBZcADAgAAAwFvABEBEUAnARFAJwERQCcBEUAnAHp//IB6QBYAen/tAHp/7wFbAAABqwApgblAE4G5QBOBuUATgblAE4G5QBOBO0AhwblAE4FegCYBXoAmAV6AJgFegCYBL4AEAQGAJwEnQA5BJ0ASgSdAEoEnQBKBJ0ASgSdAEoEnQBKBr4AOwPOADsEJgBGBCYARgQmAEYEJgBGAhgACgIYAHECGP/LAhj/1QR8AEYEOQCcBH4ARgR AEYEfgBGBH4ARgR AEYE7QCHBH4AKQQYAI8EGACPBBgAjwQYAI8D //8BJ0AkwP7//wFlwAMBJ0ASgVsAAAEnQBIAen/kgIY/6gCGAC6AwAAAAIQAB8JhQBOB4UARgR4AFIDMQBMBXoAmAQYAI8EvgAQBLAAHQQmABQE7QAKBuUATAR AEQFygCYBGQAjwPCAKADwgCgA/0AogPhAKIC3QEAAswAoAKyAKAEDACgA7wAtAAA/vAC3QEABmYAcQQYAI8FBgAUBZcADASdAEoFlwAMBJ0ASgWXAAwEnQBKBZcADASdAEoFlwAMBJ0ASgWXAAwEnQBKBZcADASdAEoFlwAMBJ0ASgWXAAwEnQBKBZcADASdAEoFlwAMBJ0ASgWXAAwEnQBKBEUAnAQmAEYERQCcBCYARgRFAJwEJgBGBEUAnAQmAEYERQCcBCYARgRFAJwEJgBGBEUAnAQmAEYERQCcBCYARgHpACECGAA5AekAiQIYAJgG5QBOBH4ARgblAE4EfgBGBuUATgR AEYG5QBOBH4ARgblAE4EfgBGBuUATgR AEYG5QBOBH4ARgblAEwEfgBEBuUATAR AEQG5QBMBH4ARAblAEwEfgBEBuUATAR AEQFegCYBBgAjwV6AJgEGACPBcoAmARkAI8FygCYBGQAjwXKAJgEZACPBggAmARkAI8FygCYBGQAjwS ABAD //8BL4AEAP7//wEvgAQA/v//AS ABAD //8AakABAQAAAAIAAEKAk8AfQJPAHsCTwB9A6cAfQOnAH0DtgB9BLwAtAS8ALQEvADdCAAA5QmyAEYCowBUAqMAiwFJ/rYE7QA7BEMARAeFAEoGZgBxB4UASgTOAGAFuABGBisAOQTlADME7QCHAUn tgJ2AMkFBgBMBswAcwMaABsE QBoBPkAcwT5AHME QB1BQYAewPCAAAEJgA3BAIANwLEACsCsgAQAAAAKgAqACoAKgAqAGwAogF AigC7AOSA7AD7gQsBF4EnAS8BNoFBAUcBYQFpgYABooGyAc8B64HzghyCOQJIglUCXAJkgmuCnwLcgukDBgMbAzEDQANNg2iDdoN A4yDmYOjA7sDxwPfg/OEEIQmBEaEUoRphHKEfoSLBJcEoASrhLIEvoTGBM0E1ITvBQmFHoU5BVKFaoWPBaKFsYXABc0F1AXyBgWGHIY3BlGGYYZ9ho0GnganBrMGv4bJBtIG64byhwwHHwcfBy4HTweOh7YHzwfYCAiIGAhHiGQIbIh2iH4Ir4i1iM0I4Ij3iRmJIYk0iUeJUYlZiWMJe4mECaIJyAn ijQKQopRCmCKeoqVirOKxYrdCu8LAAsTCy LOYtEC0 LYwuCC54LuQvUi/CMFww8jEeMa4yFDJ6MuQzbDOmM/w0mjUMNYI1/DakN0Y39jjiOUI5pjoKOnY7Ejs6O2Q7kjvgPHY9BD1qPdA Oj7WP2Y/rEA2QIhA3EE2QbBB4EJKQqhC/EOMRAhEkETsRUJFYEWgRdRGcEcUR6hIJki SUhJsEngShBK3EtcS85MREygTMhM8E0ITTxNZE22TfxOQk5yTsBO6E9wT7xQSFCWURxRllJMUpRTGlNgU ZUcFU8VbJWblbKV2ZXwlheWLpZVFn0WtZbYFwwXKJdVF2oXiZesF9cX9JgaGC YTRhiGH8YppjZGPsZJRlAGWQZfpmZGagZvJncGfmaJRpOmm4ai5qqGsea9xslm1Cbe5ugG8Mb5hwFHCecRpx4nKgc1h0BnSedSx1pHYCdqJ3Nne4eCJ4onkMecp6dHsoe8h8VnzMfQR9Mn2Afb5 NH6kfxB/cH Of6Z/wH/ggACAIIBGgGyAkoDSgSiBYIG4gsqC7oMUgzCDroQuhJiFIIWohjiGcoawhuaG/ocah0KHnIg4iLiJOol2iZyJwon igqKoIsSi4SL5gAAAAEAAAFsAHwABwAAAAAAAgABAAIAFgAAAQABTgAAAAAAAAARANIAAQAAAAAAAQAAAAAAAQAAAAAAAgABAAAAAQAAAAAAAwAAAAEAAQAAAAAABAAfAAEAAQAAAAAABgABACAAAwABBAkAAQAEACEAAwABBAkAAgAAACUAAwABBAkAAwAAACUAAwABBAkABAAEACUAAwABBAkABQB4ACkAAwABBAkABgACAKEAAwABBAkADQAUAKMAAwABBAkADgAUALcAAwABBAkAEAAaAMsAAwABBAkAEQAIAOUAAwABBAkAyAAWAO0AAwABBAkAyQAwAQN/RnV0dXJhIFN0ZCBCb29rIFJlZ3VsYXIgV2ViZm9udH8ALgB/AC4AfwBWAGUAcgBzAGkAbwBuACAAMgAuADAAMgA1ADsAUABTACAAMAAwADIALgAwADAAMAA7AGgAbwB0AGMAbwBuAHYAIAAxAC4AMAAuADUAMAA7AG0AYQBrAGUAbwB0AGYALgBsAGkAYgAyAC4AMAAuADEANgA5ADcAMAB/AGkAZABlAHMAaQBnAG4ALgB2AG4AaQBkAGUAcwBpAGcAbgAuAHYAbgBGAHUAdAB1AHIAYQAgAFMAdABkACAAVgBOAEIAbwBvAGsAVwBlAGIAZgBvAG4AdAAgADEALgAwAFQAaAB1ACAAQQB1AGcAIAAzADAAIAAxADQAOgAwADkAOgA1ADUAIAAyADAAMQAyAAAAAAIAAAAAAAD/ZwBmAAAAAAAAAAAAAAAAAAAAAAAAAAABbAAAAAEAAgECAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgACEAIgAjACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA AD8AQABBAEIAQwBEAEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgBfAGAAYQEDAKMAhACFAL0AlgDoAIYAjgCLAJ0AqQCkAQQAigDaAIMAkwDyAPMAjQCXAIgAwwDeAPEAngCqAPUA9AD2AKIArQDJAMcArgBiAGMAkABkAMsAZQDIAMoAzwDMAM0AzgDpAGYA0wDQANEArwBnAPAAkQDWANQA1QBoAOsA7QCJAGoAaQBrAG0AbABuAKAAbwBxAHAAcgBzAHUAdAB2AHcA6gB4AHoAeQB7AH0AfAC4AKEAfwB AIAAgQDsAO4AugEFAQYBBwEBAQgBCQDXAOIA4wCwALEA5ADlAQoBCwC7AOYA5wCmAQwBDQEOAQ8A2ADhARAA2wDcAN0A4ADZAN8BEQESARMBFACbARUBFgEXARgBGQEaARsBHAEdAR4BHwEgASEBIgEjASQBJQEmAScBKAEpASoBKwEsAS0BLgEvATABMQEyATMBNAE1ATYBNwE4ATkBOgE7ATwBPQE AT8BQAFBAUIBQwFEAUUBRgFHAUgBSQFKAUsBTAFNAU4BTwFQAVEBUgFTAVQBVQFWAVcBWAFZAVoBWwFcAV0BXgFfAWABYQFiAWMBZAFlAWYBZwFoAWkBagFrAWwBbQFuAW8AsgCzALYAtwDEALQAtQDFAIIAwgCHAKsAxgC AL8AvAFwAXEAjACfAXIAmAFzAJoAmQDvAXQBdQClAJIAnACnAI8AlACVALkBdgDAAMEBdwF4B3VuaTAwMEQHdW5pMDBBMAd1bmkwMEFEBkFicmV2ZQZhYnJldmUGRGNyb2F0Bkl0aWxkZQZpdGlsZGUGVXRpbGRlBnV0aWxkZQVPaG9ybgVvaG9ybgVVaG9ybgV1aG9ybgd1bmkwMkM5DWhvb2thYm92ZWNvbWIMZG90YmVsb3djb21iB3VuaTAzQTkHdW5pMDNCQwd1bmkxRUEwB3VuaTFFQTEHdW5pMUVBMgd1bmkxRUEzB3VuaTFFQTQHdW5pMUVBNQd1bmkxRUE2B3VuaTFFQTcHdW5pMUVBOAd1bmkxRUE5B3VuaTFFQUEHdW5pMUVBQgd1bmkxRUFDB3VuaTFFQUQHdW5pMUVBRQd1bmkxRUFGB3VuaTFFQjAHdW5pMUVCMQd1bmkxRUIyB3VuaTFFQjMHdW5pMUVCNAd1bmkxRUI1B3VuaTFFQjYHdW5pMUVCNwd1bmkxRUI4B3VuaTFFQjkHdW5pMUVCQQd1bmkxRUJCB3VuaTFFQkMHdW5pMUVCRAd1bmkxRUJFB3VuaTFFQkYHdW5pMUVDMAd1bmkxRUMxB3VuaTFFQzIHdW5pMUVDMwd1bmkxRUM0B3VuaTFFQzUHdW5pMUVDNgd1bmkxRUM3B3VuaTFFQzgHdW5pMUVDOQd1bmkxRUNBB3VuaTFFQ0IHdW5pMUVDQwd1bmkxRUNEB3VuaTFFQ0UHdW5pMUVDRgd1bmkxRUQwB3VuaTFFRDEHdW5pMUVEMgd1bmkxRUQzB3VuaTFFRDQHdW5pMUVENQd1bmkxRUQ2B3VuaTFFRDcHdW5pMUVEOAd1bmkxRUQ5B3VuaTFFREEHdW5pMUVEQgd1bmkxRURDB3VuaTFFREQHdW5pMUVERQd1bmkxRURGB3VuaTFFRTAHdW5pMUVFMQd1bmkxRUUyB3VuaTFFRTMHdW5pMUVFNAd1bmkxRUU1B3VuaTFFRTYHdW5pMUVFNwd1bmkxRUU4B3VuaTFFRTkHdW5pMUVFQQd1bmkxRUVCB3VuaTFFRUMHdW5pMUVFRAd1bmkxRUVFB3VuaTFFRUYHdW5pMUVGMAd1bmkxRUYxBllncmF2ZQZ5Z3JhdmUHdW5pMUVGNAd1bmkxRUY1B3VuaTFFRjYHdW5pMUVGNwd1bmkxRUY4B3VuaTFFRjkHdW5pMjAxMARFdXJvCWFmaWk2MTI4OQllc3RpbWF0ZWQHdW5pMjIwNgd1bmkyMjE1B3VuaTIyMTkHdW5pRTAwMAphLnN1cGVyaW9yCm8uc3VwZXJpb3IAuAH/hbABjQBLsAhQWLEBAY5ZsUYGK1ghsBBZS7AUUlghsIBZHbAGK1xYALADIEWwAytEsAcgRbIDlAIrsAMrRLAGIEWyB3oCK7ADK0SwBSBFsgZgAiuwAytEsAQgRbIFOgIrsAMrRLAIIEW6AAMBEwACK7ADK0SwCSBFsggSAiuwAytEAbAKIEWwAytEsA4gRbIKTgIrsQNGditEsA0gRbIOWAIrsQNGditEsAwgRboADQYWAAIrsQNGditEsAsgRbIMVgIrsQNGditEsA8gRboACn//AAIrsQNGditEsBAgRboADwEjAAIrsQNGditEsBEgRbIQGwIrsQNGditEWbAUKwAAAVA/rHMAAA==);font-weight: 400;font-style: normal}.jw-controls,.jw-controls-backdrop,.jw-flag-small-player .jw-settings-menu,.jw-overlays,.jw-settings-submenu{height:100%;width:100%}.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-settings-menu .jw-icon::after{position:absolute;right:0}.jw-controls,.jw-controls-backdrop,.jw-overlays,.jw-settings-item-active::before{top:0;position:absolute;left:0}.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-settings-menu .jw-icon::after{position:absolute;bottom:0;left:0}.jw-nextup-close{position:absolute;top:0;right:0}.jw-controls,.jw-flag-small-player .jw-settings-menu,.jw-overlays{position:absolute;bottom:0;right:0}.jw-controlbar .jw-tooltip::after,.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-settings-menu .jw-icon::after,.jw-settings-menu .jw-tooltip::after,.jw-text-live::before,.jw-time-tip::after{content:"";display:block}.jw-svg-icon{height:24px;width:24px;fill:currentColor;pointer-events:none}.jw-icon{height:44px;width:44px;background-color:transparent;outline:0}.jw-icon.jw-tab-focus:focus{border:solid 2px #4d90fe}.jw-icon-airplay .jw-svg-icon-airplay-off{display:none}.jw-off.jw-icon-airplay .jw-svg-icon-airplay-off{display:block}.jw-icon-airplay .jw-svg-icon-airplay-on{display:block}.jw-off.jw-icon-airplay .jw-svg-icon-airplay-on{display:none}.jw-icon-cc .jw-svg-icon-cc-off{display:none}.jw-off.jw-icon-cc .jw-svg-icon-cc-off{display:block}.jw-icon-cc .jw-svg-icon-cc-on{display:block}.jw-off.jw-icon-cc .jw-svg-icon-cc-on{display:none}.jw-icon-fullscreen .jw-svg-icon-fullscreen-off{display:none}.jw-off.jw-icon-fullscreen .jw-svg-icon-fullscreen-off{display:block}.jw-icon-fullscreen .jw-svg-icon-fullscreen-on{display:block}.jw-off.jw-icon-fullscreen .jw-svg-icon-fullscreen-on{display:none}.jw-icon-pip .jw-svg-icon-pip-off{display:none}.jw-off.jw-icon-pip .jw-svg-icon-pip-off{display:block}.jw-icon-pip .jw-svg-icon-pip-on{display:block}.jw-off.jw-icon-pip .jw-svg-icon-pip-on{display:none}.jw-icon-volume .jw-svg-icon-volume-0{display:none}.jw-off.jw-icon-volume .jw-svg-icon-volume-0{display:block}.jw-icon-volume .jw-svg-icon-volume-100{display:none}.jw-full.jw-icon-volume .jw-svg-icon-volume-100{display:block}.jw-icon-volume .jw-svg-icon-volume-50{display:block}.jw-full.jw-icon-volume .jw-svg-icon-volume-50,.jw-off.jw-icon-volume .jw-svg-icon-volume-50{display:none}.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon::after{height:100%;width:24px;box-shadow:inset 0 -3px 0 -1px currentColor;margin:auto;opacity:0;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-icon-volume.jw-open::after,.jw-settings-menu .jw-icon[aria-checked=true]::after,.jw-settings-open .jw-icon-settings::after{opacity:1}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-audio-tracks,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-cc,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-fullscreen,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-hd,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-settings,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-settings-sharing,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player).jw-flag-cast-available .jw-icon-airplay,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player).jw-flag-cast-available .jw-icon-cast{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-volume,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-text-live{bottom:6px}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-volume::after{display:none}.jw-controls,.jw-overlays{pointer-events:none}.jw-controls-backdrop{display:block;background:linear-gradient(to bottom,transparent,rgba(0,0,0,.4) 77%,rgba(0,0,0,.4) 100%) 100% 100%/100% 240px no-repeat transparent;transition:opacity 250ms cubic-bezier(0,.25,.25,1),background-size 250ms cubic-bezier(0,.25,.25,1);pointer-events:none}.jw-overlays{cursor:auto}.jw-controls{overflow:hidden}.jw-flag-small-player .jw-controls{text-align:center}.jw-text{height:1em;font-family:haunytb;font-size:.75em;font-style:normal;font-weight:400;color:#fff;text-align:center;font-variant:normal;font-stretch:normal}.jw-autostart-mute,.jw-controlbar,.jw-display-icon-container .jw-icon,.jw-nextup-container,.jw-overlays .jw-plugin,.jw-skip{pointer-events:all}.jw-error .jw-display-icon-container,.jwplayer .jw-display-icon-container{width:auto;height:auto;box-sizing:content-box}.jw-display{display:flex;flex-direction:column;justify-content:center;height:100%;padding:57px 0;position:relative;width:100%}.jw-flag-dragging .jw-display{display:none}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-display-container{text-align:center}.jw-display-controls{display:inline-block}.jwplayer .jw-display-icon-container{float:left}.jw-display-icon-container{display:inline-block;padding:5.5px;margin:0 22px}.jw-display-icon-container .jw-icon{height:75px;width:75px;cursor:pointer;display:flex;justify-content:center;align-items:center}.jw-display-icon-container .jw-icon .jw-svg-icon{height:33px;width:33px;padding:0;position:relative}.jw-display-icon-container .jw-icon .jw-svg-icon-rewind{padding:.2em .05em}.jw-breakpoint--1 .jw-nextup-container{display:none}.jw-breakpoint--1 .jw-display-icon-next,.jw-breakpoint--1 .jw-display-icon-rewind,.jw-breakpoint-0 .jw-display-icon-next,.jw-breakpoint-0 .jw-display-icon-rewind{display:none}.jw-breakpoint--1.jw-flag-touch .jw-display .jw-icon,.jw-breakpoint--1.jw-flag-touch .jw-display .jw-svg-icon,.jw-breakpoint-0.jw-flag-touch .jw-display .jw-icon,.jw-breakpoint-0.jw-flag-touch .jw-display .jw-svg-icon{z-index:100;position:relative}.jw-breakpoint--1 .jw-display .jw-icon,.jw-breakpoint--1 .jw-display .jw-svg-icon,.jw-breakpoint-0 .jw-display .jw-icon,.jw-breakpoint-0 .jw-display .jw-svg-icon{width:44px;height:44px;line-height:44px}.jw-breakpoint--1 .jw-display .jw-icon:before,.jw-breakpoint--1 .jw-display .jw-svg-icon:before,.jw-breakpoint-0 .jw-display .jw-icon:before,.jw-breakpoint-0 .jw-display .jw-svg-icon:before{width:22px;height:22px}.jw-breakpoint-1 .jw-display .jw-icon,.jw-breakpoint-1 .jw-display .jw-svg-icon{width:44px;height:44px;line-height:44px}.jw-breakpoint-1 .jw-display .jw-icon:before,.jw-breakpoint-1 .jw-display .jw-svg-icon:before{width:22px;height:22px}.jw-breakpoint-1 .jw-display .jw-icon.jw-icon-rewind:before{width:33px;height:33px}.jw-breakpoint-2 .jw-display .jw-icon,.jw-breakpoint-2 .jw-display .jw-svg-icon,.jw-breakpoint-3 .jw-display .jw-icon,.jw-breakpoint-3 .jw-display .jw-svg-icon{width:77px;height:77px;line-height:77px}.jw-breakpoint-2 .jw-display .jw-icon:before,.jw-breakpoint-2 .jw-display .jw-svg-icon:before,.jw-breakpoint-3 .jw-display .jw-icon:before,.jw-breakpoint-3 .jw-display .jw-svg-icon:before{width:38.5px;height:38.5px}.jw-breakpoint-4 .jw-display .jw-icon,.jw-breakpoint-4 .jw-display .jw-svg-icon,.jw-breakpoint-5 .jw-display .jw-icon,.jw-breakpoint-5 .jw-display .jw-svg-icon,.jw-breakpoint-6 .jw-display .jw-icon,.jw-breakpoint-6 .jw-display .jw-svg-icon,.jw-breakpoint-7 .jw-display .jw-icon,.jw-breakpoint-7 .jw-display .jw-svg-icon{width:88px;height:88px;line-height:88px}.jw-breakpoint-4 .jw-display .jw-icon:before,.jw-breakpoint-4 .jw-display .jw-svg-icon:before,.jw-breakpoint-5 .jw-display .jw-icon:before,.jw-breakpoint-5 .jw-display .jw-svg-icon:before,.jw-breakpoint-6 .jw-display .jw-icon:before,.jw-breakpoint-6 .jw-display .jw-svg-icon:before,.jw-breakpoint-7 .jw-display .jw-icon:before,.jw-breakpoint-7 .jw-display .jw-svg-icon:before{width:44px;height:44px}.jw-controlbar{display:flex;flex-flow:row wrap;align-items:center;justify-content:center;position:absolute;left:0;bottom:0;width:100%;border:none;border-radius:0;background-size:auto;box-shadow:none;max-height:72px;transition:250ms cubic-bezier(0,.25,.25,1);transition-property:opacity,visibility;transition-delay:0s}.jw-flag-touch.jw-breakpoint-0 .jw-controlbar .jw-icon-inline{height:40px}.jw-breakpoint-7 .jw-controlbar{max-height:140px}.jw-breakpoint-7 .jw-controlbar .jw-button-container{padding:0 48px 20px}.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-tooltip{margin-bottom:-7px}.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-icon-volume .jw-overlay{padding-bottom:40%}.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-text{font-size:1em}.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-text.jw-text-elapsed{justify-content:flex-end}.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-icon-inline:not(.jw-text-live),.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-icon-volume{height:60px;width:60px}.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-icon-inline:not(.jw-text-live) .jw-svg-icon,.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-icon-volume .jw-svg-icon{height:30px;width:30px}.jw-breakpoint-7 .jw-controlbar .jw-slider-time{padding:0 60px;height:34px}.jw-breakpoint-7 .jw-controlbar .jw-slider-time .jw-slider-container{height:10px}.jw-controlbar .jw-button-image{background:no-repeat 50% 50%;background-size:contain;max-height:24px}.jw-controlbar .jw-spacer{margin:0 auto}.jw-controlbar .jw-icon.jw-button-color:hover{color:#fff}.jw-button-container{display:flex;flex-flow:row nowrap;flex:1 1 auto;align-items:center;justify-content:flex-start;width:100%;padding:0 12px}.jw-slider-horizontal{background-color:transparent}.jw-icon-inline{position:relative}.jw-icon-inline,.jw-icon-tooltip{height:44px;width:44px;align-items:center;display:flex;justify-content:center}.jw-icon-inline:not(.jw-text),.jw-icon-tooltip,.jw-slider-horizontal{cursor:pointer}.jw-text-duration,.jw-text-elapsed{justify-content:flex-start;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.jw-icon-tooltip{position:relative}.jw-icon-display:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-knob:hover,.jw-option:before:hover{color:#fff}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip,.jw-time-tip{pointer-events:none}.jw-icon-cast{display:none;margin:0;padding:0}.jw-icon-cast google-cast-launcher{background-color:transparent;border:none;padding:0;width:24px;height:24px;cursor:pointer}.jw-fullscreen-ima{display:none}.jw-icon-inline.jw-icon-volume{display:none}.jwplayer .jw-text-countdown{display:none}.jw-flag-small-player .jw-display{padding-top:0;padding-bottom:0}.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-next,.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-playback,.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-rewind{display:none}.jw-flag-ads-vpaid:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-user-inactive.jw-state-buffering:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-user-inactive.jw-state-playing:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar{visibility:hidden;pointer-events:none;opacity:0;transition-delay:0s,250ms}.jw-flag-ads-vpaid:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop,.jw-flag-user-inactive.jw-state-buffering:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop,.jw-flag-user-inactive.jw-state-playing:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop{opacity:0}.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-countdown{display:flex}.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint--1 .jw-text-duration,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint--1 .jw-text-elapsed,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-duration,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-elapsed{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-related-btn,.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-slider-volume,.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-text-countdown{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-controlbar{flex-direction:column-reverse}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-button-container{height:30px}.jw-breakpoint--1.jw-flag-ads:not(.jw-flag-audio-player) .jw-icon-fullscreen,.jw-breakpoint--1.jw-flag-ads:not(.jw-flag-audio-player) .jw-icon-volume{display:none}.jwplayer:not(.jw-breakpoint--1) .jw-text-duration:before,.jwplayer:not(.jw-breakpoint-0) .jw-text-duration:before{content:"/";padding-right:1ch;padding-left:1ch}.jwplayer:not(.jw-flag-user-inactive) .jw-controlbar{will-change:transform}.jwplayer:not(.jw-flag-user-inactive) .jw-controlbar .jw-text{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.jwplayer:not(.jw-flag-fullscreen) .jw-fullscreen-disallowed{display:none}.jw-slider-container{display:flex;align-items:center;position:relative;touch-action:none}.jw-buffer,.jw-progress,.jw-rail{position:absolute;cursor:pointer}.jw-progress{background-color:#f2f2f2}.jw-rail{background-color:rgba(255,255,255,.3)}.jw-buffer{background-color:rgba(255,255,255,.3)}.jw-knob{height:13px;width:13px;background-color:#fff;border-radius:50%;box-shadow:0 0 10px rgba(0,0,0,.4);opacity:1;pointer-events:none;position:absolute;-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0);transition:150ms cubic-bezier(0,.25,.25,1);transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.jw-flag-dragging .jw-slider-time .jw-knob,.jw-icon-volume:active .jw-slider-volume .jw-knob{box-shadow:0 0 26px rgba(0,0,0,.2),0 0 10px rgba(0,0,0,.4),0 0 0 6px rgba(255,255,255,.2)}.jw-slider-horizontal,.jw-slider-vertical{display:flex}.jw-slider-horizontal .jw-slider-container{height:5px;width:100%}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-cue,.jw-slider-horizontal .jw-knob,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{top:50%}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-cue,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{-webkit-transform:translate(0,-50%);transform:translate(0,-50%)}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{height:5px}.jw-slider-horizontal .jw-rail{width:100%}.jw-slider-vertical{align-items:center;flex-direction:column}.jw-slider-vertical .jw-slider-container{height:88px;width:5px}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-knob,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{left:50%}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{height:100%;width:5px;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;bottom:0}.jw-slider-vertical .jw-knob{-webkit-transform:translate(-50%,50%);transform:translate(-50%,50%)}.jw-slider-time.jw-tab-focus:focus .jw-rail{outline:solid 2px #4d90fe}.jw-horizontal-volume-container .jw-slider-volume,.jw-slider-time{height:17px;width:100%;align-items:center;background:transparent none;padding:0 12px}.jw-slider-time .jw-cue{background-color:rgba(33,33,33,.8);cursor:pointer;position:absolute;width:6px}.jw-horizontal-volume-container,.jw-slider-time{z-index:1;outline:0}.jw-horizontal-volume-container .jw-buffer,.jw-horizontal-volume-container .jw-cue,.jw-horizontal-volume-container .jw-progress,.jw-horizontal-volume-container .jw-rail,.jw-slider-time .jw-buffer,.jw-slider-time .jw-cue,.jw-slider-time .jw-progress,.jw-slider-time .jw-rail{-webkit-backface-visibility:hidden;backface-visibility:hidden;height:100%;-webkit-transform:translate(0,-50%) scale(1,.6);transform:translate(0,-50%) scale(1,.6);transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out}.jw-flag-dragging .jw-horizontal-volume-container .jw-buffer,.jw-flag-dragging .jw-horizontal-volume-container .jw-cue,.jw-flag-dragging .jw-horizontal-volume-container .jw-progress,.jw-flag-dragging .jw-horizontal-volume-container .jw-rail,.jw-flag-dragging .jw-slider-time .jw-buffer,.jw-flag-dragging .jw-slider-time .jw-cue,.jw-flag-dragging .jw-slider-time .jw-progress,.jw-flag-dragging .jw-slider-time .jw-rail,.jw-flag-touch .jw-horizontal-volume-container .jw-buffer,.jw-flag-touch .jw-horizontal-volume-container .jw-cue,.jw-flag-touch .jw-horizontal-volume-container .jw-progress,.jw-flag-touch .jw-horizontal-volume-container .jw-rail,.jw-flag-touch .jw-slider-time .jw-buffer,.jw-flag-touch .jw-slider-time .jw-cue,.jw-flag-touch .jw-slider-time .jw-progress,.jw-flag-touch .jw-slider-time .jw-rail,.jw-horizontal-volume-container:focus .jw-buffer,.jw-horizontal-volume-container:focus .jw-cue,.jw-horizontal-volume-container:focus .jw-progress,.jw-horizontal-volume-container:focus .jw-rail,.jw-horizontal-volume-container:hover .jw-buffer,.jw-horizontal-volume-container:hover .jw-cue,.jw-horizontal-volume-container:hover .jw-progress,.jw-horizontal-volume-container:hover .jw-rail,.jw-slider-time:focus .jw-buffer,.jw-slider-time:focus .jw-cue,.jw-slider-time:focus .jw-progress,.jw-slider-time:focus .jw-rail,.jw-slider-time:hover .jw-buffer,.jw-slider-time:hover .jw-cue,.jw-slider-time:hover .jw-progress,.jw-slider-time:hover .jw-rail{-webkit-transform:translate(0,-50%) scale(1,1);transform:translate(0,-50%) scale(1,1)}.jw-horizontal-volume-container:focus .jw-knob,.jw-horizontal-volume-container:hover .jw-knob,.jw-slider-time:focus .jw-knob,.jw-slider-time:hover .jw-knob{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}.jw-horizontal-volume-container .jw-rail,.jw-slider-time .jw-rail{background-color:rgba(255,255,255,.2)}.jw-horizontal-volume-container .jw-buffer,.jw-slider-time .jw-buffer{background-color:rgba(255,255,255,.4)}.jw-flag-touch .jw-horizontal-volume-container::before,.jw-flag-touch .jw-slider-time::before{height:44px;width:100%;content:"";position:absolute;display:block;bottom:calc(100% - 17px);left:0}.jw-breakpoint-0.jw-flag-touch .jw-horizontal-volume-container::before,.jw-breakpoint-0.jw-flag-touch .jw-slider-time::before{height:34px}.jw-horizontal-volume-container.jw-tab-focus:focus .jw-rail,.jw-slider-time.jw-tab-focus:focus .jw-rail{outline:solid 2px #4d90fe}.jw-flag-horizontal-slider .jw-overlay{display:none}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container{display:flex;transition:width .3s cubic-bezier(0,.25,.25,1);width:0}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open{width:140px}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open .jw-slider-volume,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open .jw-slider-volume{padding-right:24px;opacity:1}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume{transition:opacity .3s;opacity:0}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume .jw-knob,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume .jw-knob{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.jw-flag-audio-player .jw-button-container .jw-icon,.jwplayer:not(.jw-flag-small-player) .jw-button-container .jw-icon{flex:0 0 auto}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time{height:17px;padding:0}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time .jw-slider-container{height:10px}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time .jw-knob{border-radius:0;border:1px solid rgba(0,0,0,.75);height:12px;width:10px}.jw-breakpoint-0 .jw-slider-time{height:11px}.jw-horizontal-volume-container{display:none}.jw-modal{width:284px}.jw-breakpoint-5 .jw-modal,.jw-breakpoint-6 .jw-modal,.jw-breakpoint-7 .jw-modal{height:232px}.jw-breakpoint-3 .jw-modal,.jw-breakpoint-4 .jw-modal{height:192px}.jw-breakpoint-2 .jw-modal,.jw-flag-small-player .jw-modal{bottom:0;right:0;height:100%;width:100%;max-height:none;max-width:none;z-index:2}.jwplayer .jw-rightclick{display:none;position:absolute;white-space:nowrap}.jwplayer .jw-rightclick.jw-open{display:block}.jwplayer .jw-rightclick .jw-rightclick-list{border-radius:1px;list-style:none;margin:0;padding:0}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item{background-color:rgba(0,0,0,.8);border-bottom:1px solid #444;margin:0}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-logo{color:#fff;display:inline-flex;padding:0 10px 0 0;vertical-align:middle}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-logo .jw-svg-icon{height:20px;width:20px}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-link{border:none;color:#fff;display:block;font-size:11px;font-weight:400;line-height:1em;padding:15px 23px;text-align:start;text-decoration:none;width:100%}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item:last-child{border-bottom:none}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item:hover{cursor:pointer}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured{vertical-align:middle}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured .jw-rightclick-link{color:#fff}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured .jw-rightclick-link span{color:#fff;font-size:12px}.jwplayer .jw-rightclick .jw-rightclick-link{border:none;background-color:transparent;outline:0;cursor:pointer}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;pointer-events:auto;transition-delay:0s}.jw-icon-tooltip.jw-open .jw-overlay:focus{outline:0}.jw-icon-tooltip.jw-open .jw-overlay:focus.jw-tab-focus{outline:solid 2px #4d90fe}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-slider-time .jw-icon-tooltip.jw-open .jw-overlay{pointer-events:none}.jw-volume-tip{padding:13px 0 26px}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip,.jw-time-tip{height:auto;width:100%;box-shadow:0 0 10px rgba(0,0,0,.4);color:#fff;display:block;margin:0 0 14px;pointer-events:none;position:relative;z-index:0}.jw-controlbar .jw-tooltip::after,.jw-settings-menu .jw-tooltip::after,.jw-time-tip::after{top:100%;position:absolute;left:50%;height:14px;width:14px;border-radius:1px;background-color:currentColor;-webkit-transform-origin:75% 50%;transform-origin:75% 50%;-webkit-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg);z-index:-1}.jw-controlbar .jw-tooltip .jw-text,.jw-settings-menu .jw-tooltip .jw-text,.jw-time-tip .jw-text{background-color:#fff;border-radius:1px;color:#000;font-size:10px;height:auto;line-height:1;padding:7px 10px;display:inline-block;min-width:100%;vertical-align:middle;min-height:2.4em}.jw-controlbar .jw-overlay{position:absolute;bottom:100%;left:50%;margin:0;min-height:44px;min-width:44px;opacity:0;pointer-events:none;transition:150ms cubic-bezier(0,.25,.25,1);transition-property:opacity,visibility;transition-delay:0s,150ms;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);width:100%;z-index:1}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;padding:0 .5em;font-size:.8em;margin:0}.jw-controlbar .jw-option::before{padding-right:.125em}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip{position:absolute;bottom:100%;left:50%;opacity:0;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);transition:.1s 0s cubic-bezier(0,.25,.25,1);transition-property:opacity,visibility,-webkit-transform;transition-property:opacity,transform,visibility;transition-property:opacity,transform,visibility,-webkit-transform;visibility:hidden;white-space:nowrap;width:auto;z-index:1}.jw-controlbar .jw-tooltip.jw-open,.jw-settings-menu .jw-tooltip.jw-open{opacity:1;-webkit-transform:translate(-50%,-10px);transform:translate(-50%,-10px);transition-duration:150ms;transition-delay:.5s,0s,.5s;visibility:visible}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen{left:auto;right:0;-webkit-transform:translate(0,0);transform:translate(0,0)}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen.jw-open,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen.jw-open{-webkit-transform:translate(0,-10px);transform:translate(0,-10px)}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen::after,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen::after{left:auto;right:9px}.jw-tooltip-time{height:auto;width:0;bottom:100%;line-height:normal;padding:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jw-tooltip-time .jw-overlay{bottom:0;min-height:0;width:auto}.jw-tooltip{bottom:57px;display:none;position:absolute}.jw-tooltip .jw-text{height:100%;white-space:nowrap;text-overflow:ellipsis;direction:unset;max-width:246px;overflow:hidden}.jw-flag-audio-player .jw-tooltip{display:none}.jw-flag-small-player .jw-time-thumb{display:none}.jwplayer .jw-shortcuts-tooltip{top:50%;position:absolute;left:50%;background:rgba(38,38,38,.8);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:none;color:#fff;pointer-events:all;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;overflow:hidden;flex-direction:column;z-index:1}.jwplayer .jw-shortcuts-tooltip.jw-open{display:flex}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-close{flex:0 0 auto;margin:5px 5px 5px auto}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container{display:flex;flex:1 1 auto;flex-flow:column;font-size:12px;margin:0 20px 20px;overflow-y:auto;padding:5px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container::-webkit-scrollbar{background-color:transparent;width:6px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container::-webkit-scrollbar-thumb{background-color:#fff;border:1px solid #262626;border-radius:6px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-title{font-weight:700}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-header{align-items:center;display:flex;justify-content:space-between;margin-bottom:10px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list{display:flex;max-width:340px;margin:0 10px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-tooltip-descriptions{width:100%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row{display:flex;align-items:center;justify-content:space-between;margin:10px 0;width:100%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row .jw-shortcuts-description{margin-right:10px;max-width:70%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row .jw-shortcuts-key{background:#fefefe;color:#333;overflow:hidden;padding:7px 10px;text-overflow:ellipsis;white-space:nowrap}.jw-skip{color:rgba(255,255,255,.8);cursor:default;position:absolute;display:flex;right:.75em;bottom:56px;padding:.5em;border:1px solid #333;background-color:#000;align-items:center;height:2em}.jw-skip.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jw-skip.jw-skippable{cursor:pointer;padding:.25em .75em}.jw-skip.jw-skippable:hover{cursor:pointer;color:#fff}.jw-skip.jw-skippable .jw-skip-icon{display:inline;height:24px;width:24px;margin:0}.jw-breakpoint-7 .jw-skip{padding:1.35em 1em;bottom:130px}.jw-breakpoint-7 .jw-skip .jw-text{font-size:1em;font-weight:400}.jw-breakpoint-7 .jw-skip .jw-icon-inline{height:30px;width:30px}.jw-breakpoint-7 .jw-skip .jw-icon-inline .jw-svg-icon{height:30px;width:30px}.jw-skip .jw-skip-icon{display:none;margin-left:-.75em;padding:0 .5em;pointer-events:none}.jw-skip .jw-skip-icon .jw-svg-icon-next{display:block;padding:0}.jw-skip .jw-skip-icon,.jw-skip .jw-text{vertical-align:middle;font-size:.7em}.jw-skip .jw-text{font-weight:700}.jw-cast{background-size:cover;display:none;height:100%;position:relative;width:100%}.jw-cast-container{background:linear-gradient(180deg,rgba(25,25,25,.75),rgba(25,25,25,.25),rgba(25,25,25,0));left:0;padding:20px 20px 80px;position:absolute;top:0;width:100%}.jw-cast-text{color:#fff;font-size:1.6em}.jw-breakpoint--1 .jw-cast-text,.jw-breakpoint-0 .jw-cast-text{font-size:1.15em}.jw-breakpoint-1 .jw-cast-text,.jw-breakpoint-2 .jw-cast-text,.jw-breakpoint-3 .jw-cast-text{font-size:1.3em}.jw-nextup-container{position:absolute;bottom:66px;left:0;background-color:transparent;cursor:pointer;margin:0 auto;padding:12px;pointer-events:none;right:0;text-align:right;visibility:hidden;width:100%}.jw-info-open .jw-nextup-container,.jw-settings-open .jw-nextup-container{display:none}.jw-breakpoint-7 .jw-nextup-container{padding:60px}.jw-flag-small-player .jw-nextup-container{padding:0 12px 0 0}.jw-flag-small-player .jw-nextup-container .jw-nextup-close,.jw-flag-small-player .jw-nextup-container .jw-nextup-duration,.jw-flag-small-player .jw-nextup-container .jw-nextup-title{display:none}.jw-flag-small-player .jw-nextup-container .jw-nextup-tooltip{height:30px}.jw-flag-small-player .jw-nextup-container .jw-nextup-header{font-size:12px}.jw-flag-small-player .jw-nextup-container .jw-nextup-body{justify-content:center;align-items:center;padding:.75em .3em}.jw-flag-small-player .jw-nextup-container .jw-nextup-thumbnail{width:50%}.jw-flag-small-player .jw-nextup-container .jw-nextup{max-width:65px}.jw-flag-small-player .jw-nextup-container .jw-nextup.jw-nextup-thumbnail-visible{max-width:120px}.jw-nextup{background:rgba(38,38,38,.8);border-radius:0;box-shadow:0 0 10px rgba(0,0,0,.5);color:rgba(255,255,255,.8);display:inline-block;max-width:280px;overflow:hidden;opacity:0;position:relative;width:64%;pointer-events:all;-webkit-transform:translate(0,-5px);transform:translate(0,-5px);transition:150ms cubic-bezier(0,.25,.25,1);transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform;transition-delay:0s}.jw-nextup:hover .jw-nextup-tooltip{color:#fff}.jw-nextup.jw-nextup-thumbnail-visible{max-width:400px}.jw-nextup.jw-nextup-thumbnail-visible .jw-nextup-thumbnail{display:block}.jw-nextup-container-visible{visibility:visible}.jw-nextup-container-visible .jw-nextup{opacity:1;-webkit-transform:translate(0,0);transform:translate(0,0);transition-delay:0s,0s,150ms}.jw-nextup-tooltip{display:flex;height:80px}.jw-nextup-thumbnail{width:120px;background-position:center;background-size:cover;flex:0 0 auto;display:none}.jw-nextup-body{flex:1 1 auto;overflow:hidden;padding:.75em .875em;display:flex;flex-flow:column wrap;justify-content:space-between}.jw-nextup-header,.jw-nextup-title{font-size:14px;line-height:1.35}.jw-nextup-header{font-weight:700}.jw-nextup-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.jw-nextup-duration{align-self:flex-end;text-align:right;font-size:12px}.jw-nextup-close{height:24px;width:24px;border:none;color:rgba(255,255,255,.8);cursor:pointer;margin:6px;visibility:hidden}.jw-nextup-close:hover{color:#fff}.jw-nextup-sticky .jw-nextup-close{visibility:visible}.jw-nextup-firefox-pip-fix{background:#262626}.jw-autostart-mute{position:absolute;bottom:0;right:12px;height:44px;width:44px;background-color:rgba(33,33,33,.4);padding:5px 4px 5px 6px;display:none}.jwplayer.jw-flag-autostart:not(.jw-flag-media-audio) .jw-nextup{display:none}.jw-settings-menu{position:absolute;bottom:57px;right:12px;align-items:flex-start;background-color:#262626;display:none;flex-flow:column nowrap;max-width:284px;pointer-events:auto}.jw-settings-open .jw-settings-menu{display:flex}.jw-breakpoint-7 .jw-settings-menu{bottom:130px;right:60px;max-height:none;max-width:none;height:35%;width:25%}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline{height:60px;width:60px}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline .jw-svg-icon{height:30px;width:30px}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline .jw-tooltip .jw-text{font-size:1em}.jw-breakpoint-7 .jw-settings-menu .jw-settings-back{min-width:60px}.jw-breakpoint-5 .jw-settings-menu,.jw-breakpoint-6 .jw-settings-menu{height:232px;width:284px;max-height:232px}.jw-breakpoint-3 .jw-settings-menu,.jw-breakpoint-4 .jw-settings-menu{height:192px;width:284px;max-height:192px}.jw-breakpoint-2 .jw-settings-menu{height:179px;width:284px;max-height:179px}.jw-flag-small-player .jw-settings-menu{max-width:none}.jw-settings-menu .jw-icon.jw-button-color::after{height:100%;width:24px;box-shadow:inset 0 -3px 0 -1px currentColor;margin:auto;opacity:0;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-settings-menu .jw-icon.jw-button-color[aria-expanded=true]::after{opacity:1}.jw-settings-menu .jw-settings-reset{text-decoration:underline}.jw-settings-topbar{align-items:center;background-color:rgba(0,0,0,.4);display:flex;flex:0 0 auto;padding:3px 5px 0;width:100%}.jw-settings-topbar.jw-nested-menu-open{padding:0}.jw-settings-topbar.jw-nested-menu-open .jw-icon:not(.jw-settings-close):not(.jw-settings-back){display:none}.jw-settings-topbar.jw-nested-menu-open .jw-svg-icon-close{width:20px}.jw-settings-topbar.jw-nested-menu-open .jw-svg-icon-arrow-left{height:12px}.jw-settings-topbar.jw-nested-menu-open .jw-settings-topbar-text{display:block;outline:0}.jw-settings-topbar .jw-settings-back{min-width:44px}.jw-settings-topbar .jw-settings-topbar-buttons{display:inherit;width:100%;height:100%}.jw-settings-topbar .jw-settings-topbar-text{display:none;color:#fff;font-size:13px;width:100%}.jw-settings-topbar .jw-settings-close{margin-left:auto}.jw-settings-submenu{display:none;flex:1 1 auto;overflow-y:auto;padding:8px 20px 0 5px}.jw-settings-submenu::-webkit-scrollbar{background-color:transparent;width:6px}.jw-settings-submenu::-webkit-scrollbar-thumb{background-color:#fff;border:1px solid #262626;border-radius:6px}.jw-settings-submenu.jw-settings-submenu-active{display:block}.jw-settings-submenu .jw-submenu-topbar{box-shadow:0 2px 9px 0 #1d1d1d;background-color:#2f2d2d;margin:-8px -20px 0 -5px}.jw-settings-submenu .jw-submenu-topbar .jw-settings-content-item{cursor:pointer;text-align:right;padding-right:15px;text-decoration:underline}.jw-settings-submenu .jw-settings-value-wrapper{float:right;display:flex;align-items:center}.jw-settings-submenu .jw-settings-value-wrapper .jw-settings-content-item-arrow{display:flex}.jw-settings-submenu .jw-settings-value-wrapper .jw-svg-icon-arrow-right{width:8px;margin-left:5px;height:12px}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item{font-size:1em;padding:11px 15px 11px 30px}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item .jw-settings-item-active::before{justify-content:flex-end}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item .jw-auto-label{font-size:.85em;padding-left:10px}.jw-flag-touch .jw-settings-submenu{overflow-y:scroll;-webkit-overflow-scrolling:touch}.jw-auto-label{font-size:10px;font-weight:initial;opacity:.75;padding-left:5px}.jw-settings-content-item{position:relative;color:rgba(255,255,255,.8);cursor:pointer;font-size:12px;line-height:1;padding:7px 0 7px 15px;width:100%;text-align:left;outline:0}.jw-settings-content-item:hover{color:#fff}.jw-settings-content-item:focus{font-weight:700}.jw-flag-small-player .jw-settings-content-item{line-height:1.75}.jw-settings-content-item.jw-tab-focus:focus{border:solid 2px #4d90fe}.jw-settings-item-active{font-weight:700;position:relative}.jw-settings-item-active::before{height:100%;width:1em;align-items:center;content:"\\2022";display:inline-flex;justify-content:center}.jw-breakpoint-2 .jw-settings-open .jw-display-container,.jw-flag-small-player .jw-settings-open .jw-display-container,.jw-flag-touch .jw-settings-open .jw-display-container{display:none}.jw-breakpoint-2 .jw-settings-open.jw-controls,.jw-flag-small-player .jw-settings-open.jw-controls,.jw-flag-touch .jw-settings-open.jw-controls{z-index:1}.jw-flag-small-player .jw-settings-open .jw-controlbar{display:none}.jw-settings-open .jw-icon-settings::after{opacity:1}.jw-settings-open .jw-tooltip-settings{display:none}.jw-sharing-link{cursor:pointer}.jw-shortcuts-container .jw-switch{position:relative;display:flex;align-items:center;transition:ease-out .15s;transition-property:opacity,background;border-radius:18px;width:80px;height:20px;padding:10px;background:rgba(80,80,80,.8);cursor:pointer;font-size:inherit;vertical-align:middle;outline:0}.jw-shortcuts-container .jw-switch.jw-tab-focus{border:solid 2px #4d90fe}.jw-shortcuts-container .jw-switch .jw-switch-knob{position:absolute;left:1px;transition:ease-out .15s;box-shadow:0 0 10px rgba(0,0,0,.4);border-radius:13px;width:15px;height:15px;background:#fefefe}.jw-shortcuts-container .jw-switch .jw-switch-disabled,.jw-shortcuts-container .jw-switch .jw-switch-enabled{position:absolute;transition:inherit;color:#fefefe}.jw-shortcuts-container .jw-switch .jw-switch-disabled{right:8px}.jw-shortcuts-container .jw-switch .jw-switch-enabled{left:8px;opacity:0}.jw-shortcuts-container .jw-switch[aria-checked=true]{background:#475470}.jw-shortcuts-container .jw-switch[aria-checked=true] .jw-switch-disabled{opacity:0}.jw-shortcuts-container .jw-switch[aria-checked=true] .jw-switch-enabled{opacity:1}.jw-shortcuts-container .jw-switch[aria-checked=true] .jw-switch-knob{left:60px}.jw-idle-icon-text{display:none;line-height:1;position:absolute;text-align:center;text-indent:.35em;top:100%;white-space:nowrap;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.jw-idle-label{border-radius:50%;color:#fff;-webkit-filter:drop-shadow(1px 1px 5px rgba(12, 26, 71, .25));filter:drop-shadow(1px 1px 5px rgba(12, 26, 71, .25));font:400 16px/1 haunytb;position:relative;transition:background-color 150ms cubic-bezier(0,.25,.25,1);transition-property:background-color,-webkit-filter;transition-property:background-color,filter;transition-property:background-color,filter,-webkit-filter;-webkit-font-smoothing:antialiased}.jw-state-idle .jw-icon-display.jw-idle-label .jw-idle-icon-text{display:block}.jw-state-idle .jw-icon-display.jw-idle-label .jw-svg-icon-play{-webkit-transform:scale(.7,.7);transform:scale(.7,.7)}.jw-breakpoint--1.jw-state-idle .jw-icon-display.jw-idle-label,.jw-breakpoint-0.jw-state-idle .jw-icon-display.jw-idle-label{font-size:12px}@supports ((-webkit-filter: drop-shadow(0 0 3px #000)) or (filter: drop-shadow(0 0 3px #000))){.jwplayer.jw-ab-drop-shadow .jw-controls .jw-icon.jw-text,.jwplayer.jw-ab-drop-shadow .jw-controls .jw-svg-icon,.jwplayer.jw-ab-drop-shadow .jw-slider-container .jw-rail,.jwplayer.jw-ab-drop-shadow .jw-title{text-shadow:none;box-shadow:none;-webkit-filter:drop-shadow(0 2px 3px rgba(0, 0, 0, .3));filter:drop-shadow(0 2px 3px rgba(0, 0, 0, .3))}.jwplayer.jw-ab-drop-shadow .jw-button-color{opacity:.8;transition-property:color,opacity}.jwplayer.jw-ab-drop-shadow .jw-button-color:not(:hover){color:#fff;opacity:.8}.jwplayer.jw-ab-drop-shadow .jw-button-color:hover{opacity:1}.jwplayer.jw-ab-drop-shadow .jw-controls-backdrop{background-image:linear-gradient(to bottom, hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0.00787) 10.79%, hsla(0, 0%, 0%, 0.02963) 21.99%, hsla(0, 0%, 0%, 0.0625) 33.34%, hsla(0, 0%, 0%, 0.1037) 44.59%, hsla(0, 0%, 0%, 0.15046) 55.48%, hsla(0, 0%, 0%, 0.2) 65.75%, hsla(0, 0%, 0%, 0.24954) 75.14%, hsla(0, 0%, 0%, 0.2963) 83.41%, hsla(0, 0%, 0%, 0.3375) 90.28%, hsla(0, 0%, 0%, 0.37037) 95.51%, hsla(0, 0%, 0%, 0.39213) 98.83%, hsla(0, 0%, 0%, 0.4));mix-blend-mode:multiply;transition-property:opacity}.jw-state-idle.jwplayer.jw-ab-drop-shadow .jw-controls-backdrop{background-image:linear-gradient(to bottom, hsla(0, 0%, 0%, 0.2), hsla(0, 0%, 0%, 0.19606) 1.17%, hsla(0, 0%, 0%, 0.18519) 4.49%, hsla(0, 0%, 0%, 0.16875) 9.72%, hsla(0, 0%, 0%, 0.14815) 16.59%, hsla(0, 0%, 0%, 0.12477) 24.86%, hsla(0, 0%, 0%, 0.1) 34.25%, hsla(0, 0%, 0%, 0.07523) 44.52%, hsla(0, 0%, 0%, 0.05185) 55.41%, hsla(0, 0%, 0%, 0.03125) 66.66%, hsla(0, 0%, 0%, 0.01481) 78.01%, hsla(0, 0%, 0%, 0.00394) 89.21%, hsla(0, 0%, 0%, 0));background-size:100% 7rem;background-position:50% 0}.jwplayer.jw-ab-drop-shadow.jw-state-idle .jw-controls{background-color:transparent}}.jw-video-thumbnail-container{position:relative;overflow:hidden}.jw-video-thumbnail-container:not(.jw-related-shelf-item-image){height:100%;width:100%}.jw-video-thumbnail-container.jw-video-thumbnail-generated{position:absolute;top:0;left:0}.jw-related-item-content:hover .jw-video-thumbnail-container,.jw-related-shelf-item:hover .jw-video-thumbnail-container,.jw-video-thumbnail-container:hover{cursor:pointer}.jw-related-item-content:hover .jw-video-thumbnail-container .jw-video-thumbnail:not(.jw-video-thumbnail-completed),.jw-related-shelf-item:hover .jw-video-thumbnail-container .jw-video-thumbnail:not(.jw-video-thumbnail-completed),.jw-video-thumbnail-container:hover .jw-video-thumbnail:not(.jw-video-thumbnail-completed){opacity:1}.jw-video-thumbnail-container .jw-video-thumbnail{position:absolute;top:50%;left:50%;bottom:unset;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:100%;height:auto;min-width:100%;min-height:100%;opacity:0;transition:opacity .3s ease;object-fit:cover;background:#000}.jw-related-item-next-up .jw-video-thumbnail-container .jw-video-thumbnail{height:100%;width:auto}.jw-video-thumbnail-container .jw-video-thumbnail.jw-video-thumbnail-visible:not(.jw-video-thumbnail-completed){opacity:1}.jw-video-thumbnail-container .jw-video-thumbnail.jw-video-thumbnail-completed{opacity:0}.jw-video-thumbnail-container .jw-video-thumbnail~.jw-svg-icon-play{display:none}.jw-video-thumbnail-container .jw-video-thumbnail+.jw-related-shelf-item-aspect{pointer-events:none}.jw-video-thumbnail-container .jw-video-thumbnail+.jw-related-item-poster-content{pointer-events:none}.jw-preview{overflow:hidden}.jw-preview .jw-ab-zoom-thumbnail{all:inherit;-webkit-animation:jw-ab-zoom-thumbnail-animation 10s infinite;animation:jw-ab-zoom-thumbnail-animation 10s infinite}@-webkit-keyframes jw-ab-zoom-thumbnail-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}50%{-webkit-transform:scale(1.25,1.25);transform:scale(1.25,1.25)}100%{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes jw-ab-zoom-thumbnail-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}50%{-webkit-transform:scale(1.25,1.25);transform:scale(1.25,1.25)}100%{-webkit-transform:scale(1,1);transform:scale(1,1)}}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-state-idle .jw-controls{background:rgba(0,0,0,.4)}.jw-state-idle.jw-flag-cardboard-available .jw-controlbar .jw-icon:not(.jw-icon-cardboard):not(.jw-icon-cast):not(.jw-icon-airplay),.jw-state-idle.jw-flag-cardboard-available .jw-controlbar .jw-slider-time,.jw-state-idle.jw-flag-cast-available:not(.jw-flag-audio-player) .jw-controlbar .jw-icon:not(.jw-icon-cardboard):not(.jw-icon-cast):not(.jw-icon-airplay),.jw-state-idle.jw-flag-cast-available:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-time{display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon:focus{border:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon .jw-svg-icon-buffer{-webkit-animation:jw-spin 2s linear infinite;animation:jw-spin 2s linear infinite;display:block}@-webkit-keyframes jw-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes jw-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.jwplayer.jw-state-buffering .jw-icon-playback .jw-svg-icon-play{display:none}.jwplayer.jw-state-buffering .jw-icon-display .jw-svg-icon-pause{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-playing .jw-icon-playback .jw-svg-icon-play{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-playing .jw-icon-playback .jw-svg-icon-pause{display:block}.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio) .jw-controls-backdrop{opacity:0}.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio) .jw-logo-bottom-left,.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio):not(.jw-flag-autostart) .jw-logo-bottom-right{bottom:0}.jwplayer .jw-icon-playback .jw-svg-icon-stop{display:none}.jwplayer.jw-state-complete .jw-svg-icon-pause,.jwplayer.jw-state-error .jw-svg-icon-pause,.jwplayer.jw-state-idle .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-svg-icon-pause{display:none}.jwplayer.jw-state-buffering .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-complete .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-error .jw-icon-display .jw-svg-icon-play{display:none}.jwplayer:not(.jw-state-buffering) .jw-svg-icon-buffer{display:none}.jwplayer:not(.jw-state-complete) .jw-svg-icon-replay{display:none}.jwplayer:not(.jw-state-error) .jw-svg-icon-error{display:none}.jwplayer.jw-state-complete .jw-display .jw-icon-display .jw-svg-icon-replay{display:block}.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-state-complete .jw-controls{background:rgba(0,0,0,.4);height:100%}.jw-state-idle .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-complete .jw-icon-playback .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-icon-playback .jw-svg-icon-pause{display:none}.jw-state-idle .jw-display-icon-next,.jw-state-idle .jw-display-icon-rewind,.jwplayer.jw-state-buffering .jw-display-icon-next,.jwplayer.jw-state-buffering .jw-display-icon-rewind,.jwplayer.jw-state-complete .jw-display-icon-next,.jwplayer.jw-state-complete .jw-display-icon-rewind,body .jw-error .jw-display-icon-next,body .jw-error .jw-display-icon-rewind,body .jwplayer.jw-state-error .jw-display-icon-next,body .jwplayer.jw-state-error .jw-display-icon-rewind{display:none}body .jw-error .jw-icon-display,body .jwplayer.jw-state-error .jw-icon-display{cursor:default}body .jw-error .jw-icon-display .jw-svg-icon-error,body .jwplayer.jw-state-error .jw-icon-display .jw-svg-icon-error{display:block}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-preview{display:none}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title{padding-top:4px}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title-primary{width:auto;display:inline-block;padding-right:.5ch}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title-secondary{width:auto;display:inline-block;padding-left:0}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-controlbar,body .jwplayer.jw-state-error .jw-controlbar{display:none}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-settings-menu,body .jwplayer.jw-state-error .jw-settings-menu{height:100%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-display,body .jwplayer.jw-state-error .jw-display{padding:0}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-logo-bottom-left,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-logo-bottom-right,body .jwplayer.jw-state-error .jw-logo-bottom-left,body .jwplayer.jw-state-error .jw-logo-bottom-right{bottom:0}.jwplayer.jw-state-playing.jw-flag-user-inactive .jw-display{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-state-paused:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting):not(.jw-flag-play-rejected) .jw-display,.jwplayer.jw-state-playing:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display{display:none}.jwplayer.jw-state-paused.jw-flag-play-rejected:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display-icon-next,.jwplayer.jw-state-paused.jw-flag-play-rejected:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display-icon-rewind{display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-text,.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-flag-casting:not(.jw-flag-audio-player) .jw-cast{display:block}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-display-icon-container{display:none}.jwplayer.jw-flag-casting .jw-captions,.jwplayer.jw-flag-casting .jw-icon-audio-tracks,.jwplayer.jw-flag-casting .jw-icon-fullscreen,.jwplayer.jw-flag-casting .jw-icon-hd{display:none}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-icon-volume{display:none}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-icon-airplay{color:#fff}.jw-state-paused.jw-flag-casting:not(.jw-flag-audio-player) .jw-display,.jw-state-playing.jw-flag-casting:not(.jw-flag-audio-player) .jw-display{display:flex}.jwplayer.jw-flag-cast-available .jw-icon-airplay,.jwplayer.jw-flag-cast-available .jw-icon-cast{display:flex}.jwplayer.jw-flag-cardboard-available .jw-icon-cardboard{display:flex}.jwplayer.jw-flag-live .jw-display-icon-rewind{visibility:hidden}.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time,.jwplayer.jw-flag-live .jw-controlbar .jw-text-countdown,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:flex}.jwplayer.jw-flag-live .jw-controlbar .jw-overlay:after{display:none}.jwplayer.jw-flag-live .jw-nextup-container{bottom:44px}.jwplayer.jw-flag-live .jw-text-duration,.jwplayer.jw-flag-live .jw-text-elapsed{display:none}.jwplayer.jw-flag-live .jw-text-live{cursor:default}.jwplayer.jw-flag-live .jw-text-live:hover{color:rgba(255,255,255,.8)}.jwplayer.jw-flag-live.jw-state-buffering .jw-icon-playback .jw-svg-icon-stop,.jwplayer.jw-flag-live.jw-state-playing .jw-icon-playback .jw-svg-icon-stop{display:block}.jwplayer.jw-flag-live.jw-state-buffering .jw-icon-playback .jw-svg-icon-pause,.jwplayer.jw-flag-live.jw-state-playing .jw-icon-playback .jw-svg-icon-pause{display:none}.jw-text-live{height:24px;width:auto;align-items:center;border-radius:1px;color:rgba(255,255,255,.8);display:flex;font-size:12px;font-weight:700;margin-right:10px;padding:0 1ch;text-rendering:geometricPrecision;text-transform:uppercase;transition:150ms cubic-bezier(0,.25,.25,1);transition-property:box-shadow,color}.jw-text-live::before{height:8px;width:8px;background-color:currentColor;border-radius:50%;margin-right:6px;opacity:1;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-text-live.jw-dvr-live{box-shadow:inset 0 0 0 2px currentColor}.jw-text-live.jw-dvr-live::before{opacity:.5}.jw-text-live.jw-dvr-live:hover{color:#fff}.jwplayer.jw-flag-controls-hidden .jw-logo.jw-hide{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-flag-controls-hidden:not(.jw-flag-casting) .jw-logo-top-right{top:0}.jwplayer.jw-flag-controls-hidden .jw-plugin{bottom:.5em}.jwplayer.jw-flag-controls-hidden:not(.jw-flag-touch.jw-breakpoint-4):not(.jw-flag-touch.jw-breakpoint-5):not(.jw-flag-touch.jw-breakpoint-6):not(.jw-flag-touch.jw-breakpoint-7) .jw-nextup-container{-webkit-transform:translateY(66px);transform:translateY(66px)}.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-4 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-5 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-6 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-7 .jw-nextup-container{-webkit-transform:translateY(4.25em);transform:translateY(4.25em)}.jw-flag-controls-hidden .jw-controlbar,.jw-flag-controls-hidden .jw-display{visibility:hidden;pointer-events:none;opacity:0;transition-delay:0s,250ms}.jw-flag-controls-hidden .jw-controls-backdrop{opacity:0}.jw-flag-controls-hidden .jw-logo{visibility:visible}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-logo.jw-hide{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-casting) .jw-logo-top-right{top:0}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-plugin{bottom:.5em}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-touch.jw-breakpoint-4):not(.jw-flag-touch.jw-breakpoint-5):not(.jw-flag-touch.jw-breakpoint-6):not(.jw-flag-touch.jw-breakpoint-7) .jw-nextup-container{-webkit-transform:translateY(66px);transform:translateY(66px)}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-4 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-5 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-6 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-7 .jw-nextup-container{-webkit-transform:translateY(4.25em);transform:translateY(4.25em)}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-controls-hidden) .jw-media{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-casting .jw-display{display:flex}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-ads) .jw-autostart-mute{display:flex}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting .jw-nextup-container{bottom:66px}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting.jw-state-idle .jw-nextup-container{display:none}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-captions.jw-captions-enabled,.jwplayer.jw-flag-ads .jw-logo,.jwplayer.jw-flag-ads .jw-nextup-container,.jwplayer.jw-flag-ads .jw-preview,.jwplayer.jw-flag-ads .jw-text-duration,.jwplayer.jw-flag-ads .jw-text-elapsed{display:none}.jwplayer.jw-flag-ads video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-display,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-next,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-rewind{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player.jw-state-buffering .jw-display-icon-display{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar{flex-direction:column-reverse}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time{height:auto;padding:0;pointer-events:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-slider-container{height:5px}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-buffer,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-cue,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-icon-settings,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-knob,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-rail{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-progress{-webkit-transform:none;transform:none;top:auto}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline:not(.jw-icon-playback):not(.jw-icon-fullscreen):not(.jw-icon-volume),.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip:not(.jw-icon-volume),.jwplayer.jw-flag-ads .jw-controlbar .jw-tooltip{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-volume-tip{padding:13px 0}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:flex}.jwplayer.jw-flag-ads .jw-fullscreen-ima{display:none}.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid) .jw-controls .jw-controlbar,.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-autostart .jw-controls .jw-controlbar{display:flex;pointer-events:all;visibility:visible;opacity:1}.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-autostart.jw-flag-user-inactive .jw-controls-backdrop,.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-user-inactive .jw-controls-backdrop{opacity:1;background-size:100% 60px}.jwplayer.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-ads-vpaid .jw-skip,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-skip{display:none}.jwplayer.jw-flag-ads-vpaid.jw-flag-small-player .jw-controls{background:0 0}.jwplayer.jw-flag-ads-vpaid.jw-flag-small-player .jw-controls::after{content:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls,.jwplayer.jw-flag-ads-hide-controls .jw-controls-backdrop{display:none!important}.jw-flag-overlay-open-related .jw-controls,.jw-flag-overlay-open-related .jw-logo,.jw-flag-overlay-open-related .jw-title{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-flag-touch.jw-breakpoint-4 .jw-captions,.jw-flag-touch.jw-breakpoint-4 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-5 .jw-captions,.jw-flag-touch.jw-breakpoint-5 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-6 .jw-captions,.jw-flag-touch.jw-breakpoint-6 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-7 .jw-captions,.jw-flag-touch.jw-breakpoint-7 .jw-nextup-container{bottom:4.25em}.jw-flag-touch .jw-controlbar .jw-icon-volume{display:flex}.jw-flag-touch .jw-display,.jw-flag-touch .jw-display-container,.jw-flag-touch .jw-display-controls{pointer-events:none}.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-rewind,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-rewind{display:none}.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display{display:none}.jw-flag-audio-player{background-color:#000}.jw-flag-audio-player .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:0 0}.jw-flag-audio-player:not(.jw-flag-live) .jw-spacer{display:none}.jw-flag-audio-player .jw-display,.jw-flag-audio-player .jw-nextup-container,.jw-flag-audio-player .jw-preview,.jw-flag-audio-player .jw-title{display:none}.jw-flag-audio-player .jw-controlbar{position:relative}.jw-flag-audio-player .jw-controlbar .jw-button-container{padding-right:3px;padding-left:0;justify-content:flex-start}.jw-flag-audio-player .jw-controlbar .jw-icon-inline,.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jw-flag-audio-player .jw-controlbar .jw-icon-airplay,.jw-flag-audio-player .jw-controlbar .jw-icon-cast,.jw-flag-audio-player .jw-controlbar .jw-icon-next,.jw-flag-audio-player .jw-controlbar .jw-icon-playback,.jw-flag-audio-player .jw-controlbar .jw-icon-rewind,.jw-flag-audio-player .jw-controlbar .jw-icon-volume,.jw-flag-audio-player .jw-controlbar .jw-logo-button,.jw-flag-audio-player .jw-controlbar .jw-text-duration,.jw-flag-audio-player .jw-controlbar .jw-text-elapsed,.jw-flag-audio-player .jw-controlbar .jw-text-live{display:flex;flex:0 0 auto}.jw-flag-audio-player .jw-controlbar .jw-text-countdown,.jw-flag-audio-player .jw-controlbar .jw-text-duration{padding-right:10px}.jw-flag-audio-player .jw-controlbar .jw-slider-time{flex:0 1 auto;align-items:center;display:flex;order:1}.jw-flag-audio-player .jw-controlbar .jw-icon-volume{margin-right:0;transition:margin-right 150ms cubic-bezier(0,.25,.25,1)}.jw-flag-audio-player .jw-controlbar .jw-icon-volume .jw-overlay{display:none}.jw-flag-audio-player .jw-controlbar .jw-horizontal-volume-container~.jw-slider-time{transition:opacity .3s,width .3s}.jw-flag-audio-player .jw-controlbar .jw-horizontal-volume-container.jw-open~.jw-slider-time{flex:1 1 auto;width:auto}.jw-flag-audio-player .jw-controlbar .jw-slider-volume~.jw-icon-volume{margin-right:140px}.jw-flag-audio-player.jw-breakpoint-1 .jw-horizontal-volume-container.jw-open~.jw-slider-time,.jw-flag-audio-player.jw-breakpoint-2 .jw-horizontal-volume-container.jw-open~.jw-slider-time{opacity:0}.jw-flag-audio-player.jw-flag-small-player .jw-text-duration,.jw-flag-audio-player.jw-flag-small-player .jw-text-elapsed{display:none}.jw-flag-audio-player.jw-flag-ads .jw-slider-time{display:none}.jw-hidden{display:none}', ""]),
        e.Z = r
    },
    2337: function(t, e, i) {
        "use strict";
        var n = i(8081)
          , o = i.n(n)
          , a = i(3645)
          , r = i.n(a)()(o());
        r.push([t.id, '.jw-reset{text-align:left;direction:ltr}.jw-reset,.jw-reset-text{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:haunytb;font-size:1em;line-height:1em;list-style:none;text-transform:none;vertical-align:baseline;border:0;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}body .jw-error,body .jwplayer.jw-state-error{height:100%;width:100%}.jw-title{position:absolute;top:0}.jw-background-color{background:rgba(0,0,0,.4)}.jw-text{color:rgba(255,255,255,.8)}.jw-knob{color:rgba(255,255,255,.8);background-color:#fff}.jw-button-color{color:rgba(255,255,255,.8)}:not(.jw-flag-touch) .jw-button-color:not(.jw-logo-button):focus,:not(.jw-flag-touch) .jw-button-color:not(.jw-logo-button):hover{color:#fff}.jw-toggle{color:#fff}.jw-toggle.jw-off{color:rgba(255,255,255,.8)}.jw-toggle.jw-off:focus{color:#fff}.jw-toggle:focus{outline:0}:not(.jw-flag-touch) .jw-toggle.jw-off:hover{color:#fff}.jw-rail{background:rgba(255,255,255,.3)}.jw-buffer{background:rgba(255,255,255,.3)}.jw-progress{background:#f2f2f2}.jw-time-tip,.jw-volume-tip{border:0}.jw-slider-volume.jw-volume-tip.jw-background-color.jw-slider-vertical{background:0 0}.jw-skip{padding:.5em;outline:0}.jw-skip .jw-skip-icon,.jw-skip .jw-skiptext{color:rgba(255,255,255,.8)}.jw-skip.jw-skippable:focus .jw-skip-icon,.jw-skip.jw-skippable:hover .jw-skip-icon{color:#fff}.jw-icon-cast google-cast-launcher{--connected-color:#fff;--disconnected-color:rgba(255, 255, 255, 0.8)}.jw-icon-cast google-cast-launcher:focus{outline:0}.jw-icon-cast google-cast-launcher.jw-off{--connected-color:rgba(255, 255, 255, 0.8)}.jw-icon-cast:focus google-cast-launcher{--connected-color:#fff;--disconnected-color:#fff}.jw-icon-cast:hover google-cast-launcher{--connected-color:#fff;--disconnected-color:#fff}.jw-nextup-container{bottom:2.5em;padding:5px .5em}.jw-nextup{border-radius:0}.jw-color-active{color:#fff;stroke:#fff;border-color:#fff}:not(.jw-flag-touch) .jw-color-active-hover:focus,:not(.jw-flag-touch) .jw-color-active-hover:hover{color:#fff;stroke:#fff;border-color:#fff}.jw-color-inactive{color:rgba(255,255,255,.8);stroke:rgba(255,255,255,.8);border-color:rgba(255,255,255,.8)}:not(.jw-flag-touch) .jw-color-inactive-hover:hover{color:rgba(255,255,255,.8);stroke:rgba(255,255,255,.8);border-color:rgba(255,255,255,.8)}.jw-option{color:rgba(255,255,255,.8)}.jw-option.jw-active-option{color:#fff;background-color:rgba(255,255,255,.1)}:not(.jw-flag-touch) .jw-option:hover{color:#fff}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:haunytb;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0}.jwplayer *{box-sizing:inherit}.jwplayer.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jwplayer.jw-flag-aspect-mode{height:auto!important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jw-media,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-plugin{position:absolute;bottom:66px}.jw-breakpoint-7 .jw-plugin{bottom:132px}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-captions,.jw-preview,.jw-title{pointer-events:none}.jw-logo,.jw-media{pointer-events:all}.jw-wrapper{background-color:#000;position:absolute;top:0;left:0;right:0;bottom:0}.jw-hidden-accessibility{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.jw-contract-trigger::before{content:"";overflow:hidden;width:200%;height:200%;display:block;position:absolute;top:0;left:0}.jwplayer .jw-media video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:0 0;-webkit-tap-highlight-color:transparent;-webkit-focus-ring-color:transparent;outline:0}.jwplayer .jw-media video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform .jw-media video{object-fit:contain}.jwplayer.jw-stretch-none .jw-media video{object-fit:none}.jwplayer.jw-stretch-fill .jw-media video{object-fit:cover}.jwplayer.jw-stretch-exactfit .jw-media video{object-fit:fill}.jw-preview{position:absolute;display:none;opacity:1;visibility:visible;width:100%;height:100%;background:#000 no-repeat 50% 50%}.jw-error .jw-preview,.jwplayer .jw-preview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-title{display:none;padding-top:20px;width:100%;z-index:1}.jw-title-primary,.jw-title-secondary{color:#fff;padding-left:20px;padding-right:20px;padding-bottom:.5em;overflow:hidden;text-overflow:ellipsis;direction:unset;white-space:nowrap;width:100%}.jw-title-primary{font-size:1.625em}.jw-breakpoint-2 .jw-title-primary,.jw-breakpoint-3 .jw-title-primary{font-size:1.5em}.jw-flag-small-player .jw-title-primary{font-size:1.25em}.jw-breakpoint-0 .jw-ab-truncated .jw-title-primary,.jw-breakpoint-1 .jw-ab-truncated .jw-title-primary,.jw-breakpoint-2 .jw-ab-truncated .jw-title-primary{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;padding-bottom:0;margin-bottom:.5em;white-space:pre-wrap;line-height:1.2}.jw-breakpoint-1 .jw-ab-truncated .jw-title-primary{font-size:1.25em}.jw-breakpoint-0 .jw-ab-truncated .jw-title-primary{font-size:1em}.jw-breakpoint-0 .jw-ab-truncated .jw-title-secondary,.jw-breakpoint-1 .jw-ab-truncated .jw-title-secondary,.jw-breakpoint-2 .jw-ab-truncated .jw-title-secondary,.jw-flag-small-player .jw-title-secondary,.jw-title-secondary:empty{display:none}.jw-captions{position:absolute;width:100%;height:100%;text-align:center;display:none;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-decoration:none;pointer-events:none;overflow:hidden;top:0}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{display:inline-block;color:#fff;background-color:#000;word-wrap:normal;word-break:normal;white-space:pre-line;font-style:normal;font-weight:400;text-align:center;text-decoration:none}.jw-text-track-display{font-size:inherit;line-height:1.5}.jw-text-track-cue{background-color:rgba(0,0,0,.5);color:#fff;padding:.1em .3em}.jwplayer video::-webkit-media-controls{display:none;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-display{min-width:-webkit-min-content}.jwplayer video::cue{background-color:rgba(0,0,0,.5)}.jwplayer video::-webkit-media-controls-panel-container{display:none}.jwplayer.jw-flag-media-audio.jw-state-playing .jw-captions,.jwplayer.jw-state-playing:not(.jw-flag-user-inactive):not(.jw-flag-controls-hidden) .jw-captions,.jwplayer:not(.jw-flag-controls-hidden):not(.jw-state-playing) .jw-captions{max-height:calc(100% - 60px)}.jwplayer.jw-flag-media-audio.jw-state-playing:not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container,.jwplayer.jw-state-playing:not(.jw-flag-user-inactive):not(.jw-flag-controls-hidden):not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container,.jwplayer:not(.jw-flag-controls-hidden):not(.jw-state-playing):not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container{max-height:calc(100% - 60px)}.jw-logo{position:absolute;margin:20px;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto;outline:0}.jw-logo.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jw-flag-audio-player .jw-logo{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{left:0}.jw-logo-bottom-right{right:0}.jw-logo-bottom-left,.jw-logo-bottom-right{bottom:44px;transition:bottom 150ms cubic-bezier(0,.25,.25,1)}.jw-state-idle .jw-logo{z-index:1}.jw-state-setup .jw-wrapper{background-color:inherit}.jw-state-setup .jw-controls,.jw-state-setup .jw-controls-backdrop,.jw-state-setup .jw-logo{visibility:hidden}span.jw-break{display:block}body .jw-error,body .jwplayer.jw-state-error{background-color:#333;color:#fff;font-size:16px;display:table;opacity:1;position:relative}body .jw-error .jw-display,body .jwplayer.jw-state-error .jw-display{display:none}body .jw-error .jw-media,body .jwplayer.jw-state-error .jw-media{cursor:default}body .jw-error .jw-preview,body .jwplayer.jw-state-error .jw-preview{background-color:#333}body .jw-error .jw-error-msg,body .jwplayer.jw-state-error .jw-error-msg{background-color:#000;border-radius:2px;display:flex;flex-direction:row;align-items:stretch;padding:20px}body .jw-error .jw-error-msg .jw-icon,body .jwplayer.jw-state-error .jw-error-msg .jw-icon{height:30px;width:30px;margin-right:20px;flex:0 0 auto;align-self:center}body .jw-error .jw-error-msg .jw-icon:empty,body .jwplayer.jw-state-error .jw-error-msg .jw-icon:empty{display:none}body .jw-error .jw-error-msg .jw-info-container,body .jwplayer.jw-state-error .jw-error-msg .jw-info-container{margin:0;padding:0}body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg,body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg{flex-direction:column}body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-error-text,body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-error-text,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-error-text,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-error-text{text-align:center}body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-icon,body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-icon,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-icon,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-icon{flex:.5 0 auto;margin-right:0;margin-bottom:20px}.jwplayer.jw-state-error.jw-breakpoint-2 .jw-error-msg .jw-break,.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg .jw-break,.jwplayer.jw-state-error.jw-flag-small-player .jw-error-msg .jw-break{display:inline}.jwplayer.jw-state-error.jw-breakpoint-2 .jw-error-msg .jw-break:before,.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg .jw-break:before,.jwplayer.jw-state-error.jw-flag-small-player .jw-error-msg .jw-break:before{content:" "}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg{height:100%;width:100%;top:0;position:absolute;left:0;background:#000;-webkit-transform:none;transform:none;padding:4px 16px;z-index:1}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg.jw-info-overlay{max-width:none;max-height:none}.jw-state-idle .jw-title,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player):not(.jw-flag-overlay-open-related) .jw-title,body .jwplayer.jw-state-error .jw-title{display:block}.jw-state-idle .jw-preview,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player):not(.jw-flag-overlay-open-related) .jw-preview,body .jwplayer.jw-state-error .jw-preview{display:block}.jw-state-idle .jw-captions,.jwplayer.jw-state-complete .jw-captions,body .jwplayer.jw-state-error .jw-captions{display:none}.jw-state-idle video::-webkit-media-text-track-container,.jwplayer.jw-state-complete video::-webkit-media-text-track-container,body .jwplayer.jw-state-error video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-fullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-controls-hidden .jw-media{cursor:default}.jw-flag-audio-player .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:0 0}.jw-flag-floating{background-size:cover;background-color:#000}.jw-flag-floating .jw-wrapper{position:fixed;z-index:2147483647;top:auto;bottom:1rem;left:auto;right:1rem;max-width:400px;max-height:400px;margin:0 auto}@media screen and (min-width:481px){.jw-flag-floating .jw-wrapper:not(.jw-floating-dragged){-webkit-animation:jw-float-to-bottom 150ms cubic-bezier(0,.25,.25,1) forwards 1;animation:jw-float-to-bottom 150ms cubic-bezier(0,.25,.25,1) forwards 1}}@media screen and (max-width:480px){.jw-flag-floating .jw-wrapper{width:100%;left:0;right:0}}.jw-flag-floating .jw-wrapper.jw-floating-dragging{transition:none!important}.jw-flag-floating .jw-wrapper .jw-media{touch-action:none}@media screen and (max-device-width:480px) and (orientation:portrait){.jw-flag-touch.jw-flag-floating .jw-wrapper{-webkit-animation:none;animation:none;top:0;margin-top:62px;bottom:auto;max-width:none;max-height:none}}.jw-flag-floating .jw-float-icon{pointer-events:all;cursor:pointer;display:none}.jw-flag-floating .jw-float-icon .jw-svg-icon{-webkit-filter:drop-shadow(0 0 1px #000);filter:drop-shadow(0 0 1px #000)}.jw-flag-floating.jw-floating-dismissible .jw-dismiss-icon{display:none}.jw-flag-floating.jw-floating-dismissible.jw-flag-ads .jw-float-icon{display:flex}.jw-flag-floating.jw-floating-dismissible.jw-state-paused .jw-logo,.jw-flag-floating.jw-floating-dismissible:not(.jw-flag-user-inactive) .jw-logo{display:none}.jw-flag-floating.jw-floating-dismissible.jw-state-paused .jw-float-icon,.jw-flag-floating.jw-floating-dismissible:not(.jw-flag-user-inactive) .jw-float-icon{display:flex}.jw-float-icon{display:none;position:absolute;top:3px;right:5px;align-items:center;justify-content:center}@-webkit-keyframes jw-float-to-bottom{from{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes jw-float-to-bottom{from{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.jw-flag-top{margin-top:2em;overflow:visible}.jw-top{height:2em;line-height:2;pointer-events:none;text-align:center;opacity:.8;position:absolute;top:-2em;width:100%}.jw-top .jw-icon{cursor:pointer;pointer-events:all;height:auto;width:auto}.jw-top .jw-text{color:#555}', ""]),
        e.Z = r
    },
    3591: function(t, e, i) {
        "use strict";
        var n = i(8081)
          , o = i.n(n)
          , a = i(3645)
          , r = i.n(a)()(o());
        r.push([t.id, ".jw-logo-button{pointer-events:none;width:132px}.jw-svg-icon-watermark{color:#ff0046;width:96px}.jw-controlbar .jw-svg-icon-jwplayer-logo{display:none;color:#ff0046}.jw-flag-small-player .jw-logo-button{width:44px}.jw-flag-small-player .jw-svg-icon-watermark{display:none}.jw-flag-small-player .jw-controlbar .jw-svg-icon-jwplayer-logo{display:block}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-logo-button{bottom:6px}.jwplayer.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-icon-inline.jw-logo-button{width:186px}.jwplayer.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-svg-icon-watermark{width:150px}", ""]),
        e.Z = r
    },
    2792: function(t, e, i) {
        "use strict";
        var n = i(8081)
          , o = i.n(n)
          , a = i(3645)
          , r = i.n(a)()(o());
        r.push([t.id, ".jw-flag-outstream.jw-state-complete .jw-controls,.jw-flag-outstream.jw-state-complete .jw-controls-backdrop{display:none}.jw-flag-outstream.jw-state-complete .jw-media{pointer-events:none}.jw-flag-outstream.jw-state-complete .jw-preview{background-color:#f2f2f2}.jw-flag-outstream .jw-wrapper{transition:-webkit-transform 250ms cubic-bezier(0,.25,.25,1);transition:transform 250ms cubic-bezier(0,.25,.25,1);transition:transform 250ms cubic-bezier(0,.25,.25,1), -webkit-transform 250ms cubic-bezier(0,.25,.25,1)}.jw-flag-outstream .jw-dismiss-icon{position:absolute;right:0;bottom:0}.jw-flag-outstream-close{max-height:1px;-webkit-animation:250ms jw-outstream-collapse 1 step-end;animation:250ms jw-outstream-collapse 1 step-end}@-webkit-keyframes jw-outstream-collapse{0%{max-height:initial}100%{max-height:1px}}@keyframes jw-outstream-collapse{0%{max-height:initial}100%{max-height:1px}}.jw-flag-outstream-close .jw-wrapper{-webkit-transform:scaleY(0);transform:scaleY(0)}.jw-flag-outstream-pending{max-height:1px;max-width:100%}.jw-flag-outstream-pending.jw-flag-top{margin-top:0;overflow:hidden}.jw-flag-outstream-pending .jw-wrapper{-webkit-transform:scaleY(0);transform:scaleY(0)}", ""]),
        e.Z = r
    },
    8406: function(t, e, i) {
        "use strict";
        var n = i(8081)
          , o = i.n(n)
          , a = i(3645)
          , r = i.n(a)()(o());
        r.push([t.id, '.jw-settings-content-item .jw-svg-icon{margin-right:1em;height:16px;width:16px;padding:0}.jw-settings-content-item .jw-tooltip{bottom:12px;left:50px;width:60px}.jw-settings-content-item .jw-tooltip.jw-open{transition:none}.jw-sharing-link{display:flex;align-items:center;line-height:16px;text-transform:capitalize}.jw-sharing-link:focus,.jw-sharing-link:hover{text-decoration:none}.jw-sharing-copy:after{background-color:#fff;border-radius:50px;bottom:20px;color:#000;content:"Copied";display:block;font-size:13px;font-weight:700;opacity:0;margin-left:-25px;left:50%;position:absolute;text-align:center;-webkit-transform:translateY(10px);transform:translateY(10px);transition:all .2s ease-in-out;visibility:hidden;width:60px}.jw-sharing-copy-textarea-copied:after{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);visibility:visible}.jw-sharing-copy .jw-sharing-link{padding:0}.jw-sharing-copy .jw-sharing-link:focus,.jw-sharing-copy .jw-sharing-link:hover{color:#fff}.jw-sharing-copy:focus,.jw-sharing-link:focus{outline:0}.jw-sharing-copy:active,.jw-sharing-link:active{color:#fff;font-weight:700}.jw-sharing-textarea{display:flex;opacity:0;height:1px;cursor:pointer}', ""]),
        e.Z = r
    },
    3645: function(t) {
        "use strict";
        t.exports = function(t) {
            var e = [];
            return e.toString = function() {
                return this.map((function(e) {
                    var i = ""
                      , n = void 0 !== e[5];
                    return e[4] && (i += "@supports (".concat(e[4], ") {")),
                    e[2] && (i += "@media ".concat(e[2], " {")),
                    n && (i += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")),
                    i += t(e),
                    n && (i += "}"),
                    e[2] && (i += "}"),
                    e[4] && (i += "}"),
                    i
                }
                )).join("")
            }
            ,
            e.i = function(t, i, n, o, a) {
                "string" == typeof t && (t = [[null, t, void 0]]);
                var r = {};
                if (n)
                    for (var s = 0; s < this.length; s++) {
                        var l = this[s][0];
                        null != l && (r[l] = !0)
                    }
                for (var c = 0; c < t.length; c++) {
                    var u = [].concat(t[c]);
                    n && r[u[0]] || (void 0 !== a && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")),
                    u[5] = a),
                    i && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"),
                    u[2] = i) : u[2] = i),
                    o && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"),
                    u[4] = o) : u[4] = "".concat(o)),
                    e.push(u))
                }
            }
            ,
            e
        }
    },
    8081: function(t) {
        "use strict";
        t.exports = function(t) {
            return t[1]
        }
    },
    1334: function() {
        !function() {
            if ("undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof HTMLElement) {
                var t = !1;
                try {
                    var e = document.createElement("div");
                    e.addEventListener("focus", (function(t) {
                        t.preventDefault(),
                        t.stopPropagation()
                    }
                    ), !0),
                    e.focus(Object.defineProperty({}, "preventScroll", {
                        get: function() {
                            t = !0
                        }
                    }))
                } catch (t) {}
                if (void 0 === HTMLElement.prototype.nativeFocus && !t) {
                    HTMLElement.prototype.nativeFocus = HTMLElement.prototype.focus;
                    var i = function(t) {
                        for (var e = 0; e < t.length; e++)
                            t[e][0].scrollTop = t[e][1],
                            t[e][0].scrollLeft = t[e][2];
                        t = []
                    };
                    HTMLElement.prototype.focus = function(t) {
                        if (t && t.preventScroll) {
                            var e = function(t) {
                                for (var e = t.parentNode, i = [], n = document.scrollingElement || document.documentElement; e && e !== n; )
                                    (e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth) && i.push([e, e.scrollTop, e.scrollLeft]),
                                    e = e.parentNode;
                                return e = n,
                                i.push([e, e.scrollTop, e.scrollLeft]),
                                i
                            }(this);
                            this.nativeFocus(),
                            "function" == typeof setTimeout ? setTimeout((function() {
                                i(e)
                            }
                            ), 0) : i(e)
                        } else
                            this.nativeFocus()
                    }
                }
            }
        }()
    },
    977: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i(3379)
          , o = i.n(n)
          , a = i(7795)
          , r = i.n(a)
          , s = i(569)
          , l = i.n(s)
          , c = i(3565)
          , u = i.n(c)
          , d = i(9216)
          , p = i.n(d)
          , h = i(4589)
          , w = i.n(h)
          , f = i(5185)
          , g = {};
        g.styleTagTransform = w(),
        g.setAttributes = u(),
        g.insert = l().bind(null, "head"),
        g.domAPI = r(),
        g.insertStyleElement = p(),
        o()(f.Z, g),
        e.default = f.Z && f.Z.locals ? f.Z.locals : void 0
    },
    2858: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i(3379)
          , o = i.n(n)
          , a = i(7795)
          , r = i.n(a)
          , s = i(569)
          , l = i.n(s)
          , c = i(3565)
          , u = i.n(c)
          , d = i(9216)
          , p = i.n(d)
          , h = i(4589)
          , w = i.n(h)
          , f = i(2337)
          , g = {};
        g.styleTagTransform = w(),
        g.setAttributes = u(),
        g.insert = l().bind(null, "head"),
        g.domAPI = r(),
        g.insertStyleElement = p(),
        o()(f.Z, g),
        e.default = f.Z && f.Z.locals ? f.Z.locals : void 0
    },
    678: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i(3379)
          , o = i.n(n)
          , a = i(7795)
          , r = i.n(a)
          , s = i(569)
          , l = i.n(s)
          , c = i(3565)
          , u = i.n(c)
          , d = i(9216)
          , p = i.n(d)
          , h = i(4589)
          , w = i.n(h)
          , f = i(3591)
          , g = {};
        g.styleTagTransform = w(),
        g.setAttributes = u(),
        g.insert = l().bind(null, "head"),
        g.domAPI = r(),
        g.insertStyleElement = p(),
        o()(f.Z, g),
        e.default = f.Z && f.Z.locals ? f.Z.locals : void 0
    },
    8206: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i(3379)
          , o = i.n(n)
          , a = i(7795)
          , r = i.n(a)
          , s = i(569)
          , l = i.n(s)
          , c = i(3565)
          , u = i.n(c)
          , d = i(9216)
          , p = i.n(d)
          , h = i(4589)
          , w = i.n(h)
          , f = i(2792)
          , g = {};
        g.styleTagTransform = w(),
        g.setAttributes = u(),
        g.insert = l().bind(null, "head"),
        g.domAPI = r(),
        g.insertStyleElement = p(),
        o()(f.Z, g),
        e.default = f.Z && f.Z.locals ? f.Z.locals : void 0
    },
    3484: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i(3379)
          , o = i.n(n)
          , a = i(7795)
          , r = i.n(a)
          , s = i(569)
          , l = i.n(s)
          , c = i(3565)
          , u = i.n(c)
          , d = i(9216)
          , p = i.n(d)
          , h = i(4589)
          , w = i.n(h)
          , f = i(8406)
          , g = {};
        g.styleTagTransform = w(),
        g.setAttributes = u(),
        g.insert = l().bind(null, "head"),
        g.domAPI = r(),
        g.insertStyleElement = p(),
        o()(f.Z, g),
        e.default = f.Z && f.Z.locals ? f.Z.locals : void 0
    },
    3379: function(t) {
        "use strict";
        var e = [];
        function i(t) {
            for (var i = -1, n = 0; n < e.length; n++)
                if (e[n].identifier === t) {
                    i = n;
                    break
                }
            return i
        }
        function n(t, n) {
            for (var a = {}, r = [], s = 0; s < t.length; s++) {
                var l = t[s]
                  , c = n.base ? l[0] + n.base : l[0]
                  , u = a[c] || 0
                  , d = "".concat(c, " ").concat(u);
                a[c] = u + 1;
                var p = i(d)
                  , h = {
                    css: l[1],
                    media: l[2],
                    sourceMap: l[3],
                    supports: l[4],
                    layer: l[5]
                };
                if (-1 !== p)
                    e[p].references++,
                    e[p].updater(h);
                else {
                    var w = o(h, n);
                    n.byIndex = s,
                    e.splice(s, 0, {
                        identifier: d,
                        updater: w,
                        references: 1
                    })
                }
                r.push(d)
            }
            return r
        }
        function o(t, e) {
            var i = e.domAPI(e);
            return i.update(t),
            function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer)
                        return;
                    i.update(t = e)
                } else
                    i.remove()
            }
        }
        t.exports = function(t, o) {
            var a = n(t = t || [], o = o || {});
            return function(t) {
                t = t || [];
                for (var r = 0; r < a.length; r++) {
                    var s = i(a[r]);
                    e[s].references--
                }
                for (var l = n(t, o), c = 0; c < a.length; c++) {
                    var u = i(a[c]);
                    0 === e[u].references && (e[u].updater(),
                    e.splice(u, 1))
                }
                a = l
            }
        }
    },
    569: function(t) {
        "use strict";
        var e = {};
        t.exports = function(t, i) {
            var n = function(t) {
                if (void 0 === e[t]) {
                    var i = document.querySelector(t);
                    if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement)
                        try {
                            i = i.contentDocument.head
                        } catch (t) {
                            i = null
                        }
                    e[t] = i
                }
                return e[t]
            }(t);
            if (!n)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            n.appendChild(i)
        }
    },
    9216: function(t) {
        "use strict";
        t.exports = function(t) {
            var e = document.createElement("style");
            return t.setAttributes(e, t.attributes),
            t.insert(e, t.options),
            e
        }
    },
    3565: function(t, e, i) {
        "use strict";
        t.exports = function(t) {
            var e = i.nc;
            e && t.setAttribute("nonce", e)
        }
    },
    7795: function(t) {
        "use strict";
        t.exports = function(t) {
            var e = t.insertStyleElement(t);
            return {
                update: function(i) {
                    !function(t, e, i) {
                        var n = "";
                        i.supports && (n += "@supports (".concat(i.supports, ") {")),
                        i.media && (n += "@media ".concat(i.media, " {"));
                        var o = void 0 !== i.layer;
                        o && (n += "@layer".concat(i.layer.length > 0 ? " ".concat(i.layer) : "", " {")),
                        n += i.css,
                        o && (n += "}"),
                        i.media && (n += "}"),
                        i.supports && (n += "}");
                        var a = i.sourceMap;
                        a && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")),
                        e.styleTagTransform(n, t, e.options)
                    }(e, t, i)
                },
                remove: function() {
                    !function(t) {
                        if (null === t.parentNode)
                            return !1;
                        t.parentNode.removeChild(t)
                    }(e)
                }
            }
        }
    },
    4589: function(t) {
        "use strict";
        t.exports = function(t, e) {
            if (e.styleSheet)
                e.styleSheet.cssText = t;
            else {
                for (; e.firstChild; )
                    e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(t))
            }
        }
    },
    1850: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-airplay-off" viewBox="0 0 240 240" focusable="false"><path d="M210,55v100h-50l20,20h45c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V40c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0H15c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v130c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h45l20-20H30V55H210 M60,205l60-70l60,70H60L60,205z"></path></svg>'
    },
    7084: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-airplay-on" viewBox="0 0 240 240" focusable="false"><path d="M229.9,40v130c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0h-44l-17-20h46V55H30v100h47l-17,20h-45c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V40c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h209.8c2.6-0.2,4.8,1.8,5,4.4C229.9,39.7,229.9,39.9,229.9,40z M104.9,122l15-18l15,18l11,13h44V75H50v60h44L104.9,122z M179.9,205l-60-70l-60,70H179.9z"></path></svg>'
    },
    757: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-arrow-left" viewBox="0 0 240 240" focusable="false"><path d="M55.4,104.4c-1.1,1.1-2.2,2.3-3.1,3.6c-6.9,9.9-4.4,23.5,5.5,30.4L159.7,240l33.9-33.9l-84.9-84.9l84.9-84.9L157.3,0L55.4,104.4L55.4,104.4z"></path></svg>'
    },
    2690: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-arrow-right" viewBox="0 0 240 240" focusable="false"><path d="M183.6,104.4L81.8,0L45.4,36.3l84.9,84.9l-84.9,84.9L79.3,240l101.9-101.7c9.9-6.9,12.4-20.4,5.5-30.4C185.8,106.7,184.8,105.4,183.6,104.4L183.6,104.4z"></path></svg>'
    },
    8328: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-audio-tracks" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M35,34h160v20H35V34z M35,94h160V74H35V94z M35,134h60v-20H35V134z M160,114c-23.4-1.3-43.6,16.5-45,40v50h20c5.2,0.3,9.7-3.6,10-8.9c0-0.4,0-0.7,0-1.1v-20c0.3-5.2-3.6-9.7-8.9-10c-0.4,0-0.7,0-1.1,0h-10v-10c1.5-17.9,17.1-31.3,35-30c17.9-1.3,33.6,12.1,35,30v10H185c-5.2-0.3-9.7,3.6-10,8.9c0,0.4,0,0.7,0,1.1v20c-0.3,5.2,3.6,9.7,8.9,10c0.4,0,0.7,0,1.1,0h20v-50C203.5,130.6,183.4,112.7,160,114z"></path></svg>'
    },
    1975: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-buffer" viewBox="0 0 240 240" focusable="false"><path d="M120,186.667a66.667,66.667,0,0,1,0-133.333V40a80,80,0,1,0,80,80H186.667A66.846,66.846,0,0,1,120,186.667Z"></path></svg>'
    },
    7704: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-cc-off" viewBox="0 0 240 240" focusable="false"><path d="M99.4,97.8c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6c0,9.6,11.6,11.4,17.7,5.5c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9C107.9,100,103.8,97.8,99.4,97.8z M144.1,97.8c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6c0,9.6,11.6,11.4,17.7,5.5c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9C152.6,100,148.5,97.8,144.1,97.8L144.1,97.8z M200,60v120H40V60H200 M215,40H25c-2.7,0-5,2.2-5,5v150c0,2.7,2.2,5,5,5h190c2.7,0,5-2.2,5-5V45C220,42.2,217.8,40,215,40z"></path></svg>'
    },
    3284: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-cc-on" viewBox="0 0 240 240" focusable="false"><path d="M215,40H25c-2.7,0-5,2.2-5,5v150c0,2.7,2.2,5,5,5h190c2.7,0,5-2.2,5-5V45C220,42.2,217.8,40,215,40z M108.1,137.7c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9c-2.4-3.7-6.5-5.9-10.9-5.9c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6C90.4,141.7,102,143.5,108.1,137.7z M152.9,137.7c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9c-2.4-3.7-6.5-5.9-10.9-5.9c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6C135.2,141.7,146.8,143.5,152.9,137.7z"></path></svg>'
    },
    2425: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-close" viewBox="0 0 240 240" focusable="false"><path d="M134.8,120l48.6-48.6c2-1.9,2.1-5.2,0.2-7.2c0,0-0.1-0.1-0.2-0.2l-7.4-7.4c-1.9-2-5.2-2.1-7.2-0.2c0,0-0.1,0.1-0.2,0.2L120,105.2L71.4,56.6c-1.9-2-5.2-2.1-7.2-0.2c0,0-0.1,0.1-0.2,0.2L56.6,64c-2,1.9-2.1,5.2-0.2,7.2c0,0,0.1,0.1,0.2,0.2l48.6,48.7l-48.6,48.6c-2,1.9-2.1,5.2-0.2,7.2c0,0,0.1,0.1,0.2,0.2l7.4,7.4c1.9,2,5.2,2.1,7.2,0.2c0,0,0.1-0.1,0.2-0.2l48.7-48.6l48.6,48.6c1.9,2,5.2,2.1,7.2,0.2c0,0,0.1-0.1,0.2-0.2l7.4-7.4c2-1.9,2.1-5.2,0.2-7.2c0,0-0.1-0.1-0.2-0.2L134.8,120z"></path></svg>'
    },
    8585: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-fullscreen-off" viewBox="0 0 240 240" focusable="false"><path d="M109.2,134.9l-8.4,50.1c-0.4,2.7-2.4,3.3-4.4,1.4L82,172l-27.9,27.9l-14.2-14.2l27.9-27.9l-14.4-14.4c-1.9-1.9-1.3-3.9,1.4-4.4l50.1-8.4c1.8-0.5,3.6,0.6,4.1,2.4C109.4,133.7,109.4,134.3,109.2,134.9L109.2,134.9z M172.1,82.1L200,54.2L185.8,40l-27.9,27.9l-14.4-14.4c-1.9-1.9-3.9-1.3-4.4,1.4l-8.4,50.1c-0.5,1.8,0.6,3.6,2.4,4.1c0.5,0.2,1.2,0.2,1.7,0l50.1-8.4c2.7-0.4,3.3-2.4,1.4-4.4L172.1,82.1z"></path></svg>'
    },
    1562: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-fullscreen-on" viewBox="0 0 240 240" focusable="false"><path d="M96.3,186.1c1.9,1.9,1.3,4-1.4,4.4l-50.6,8.4c-1.8,0.5-3.7-0.6-4.2-2.4c-0.2-0.6-0.2-1.2,0-1.7l8.4-50.6c0.4-2.7,2.4-3.4,4.4-1.4l14.5,14.5l28.2-28.2l14.3,14.3l-28.2,28.2L96.3,186.1z M195.8,39.1l-50.6,8.4c-2.7,0.4-3.4,2.4-1.4,4.4l14.5,14.5l-28.2,28.2l14.3,14.3l28.2-28.2l14.5,14.5c1.9,1.9,4,1.3,4.4-1.4l8.4-50.6c0.5-1.8-0.6-3.6-2.4-4.2C197,39,196.4,39,195.8,39.1L195.8,39.1z"></path></svg>'
    },
    3236: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-jwplayer-logo" viewBox="0 0 992 1024" focusable="false"><path d="M144 518.4c0 6.4-6.4 6.4-6.4 0l-3.2-12.8c0 0-6.4-19.2-12.8-38.4 0-6.4-6.4-12.8-9.6-22.4-6.4-6.4-16-9.6-28.8-6.4-9.6 3.2-16 12.8-16 22.4s0 16 0 25.6c3.2 25.6 22.4 121.6 32 140.8 9.6 22.4 35.2 32 54.4 22.4 22.4-9.6 28.8-35.2 38.4-54.4 9.6-25.6 60.8-166.4 60.8-166.4 6.4-12.8 9.6-12.8 9.6 0 0 0 0 140.8-3.2 204.8 0 25.6 0 67.2 9.6 89.6 6.4 16 12.8 28.8 25.6 38.4s28.8 12.8 44.8 12.8c6.4 0 16-3.2 22.4-6.4 9.6-6.4 16-12.8 25.6-22.4 16-19.2 28.8-44.8 38.4-64 25.6-51.2 89.6-201.6 89.6-201.6 6.4-12.8 9.6-12.8 9.6 0 0 0-9.6 256-9.6 355.2 0 25.6 6.4 48 12.8 70.4 9.6 22.4 22.4 38.4 44.8 48s48 9.6 70.4-3.2c16-9.6 28.8-25.6 38.4-38.4 12.8-22.4 25.6-48 32-70.4 19.2-51.2 35.2-102.4 51.2-153.6s153.6-540.8 163.2-582.4c0-6.4 0-9.6 0-12.8 0-9.6-6.4-19.2-16-22.4-16-6.4-32 0-38.4 12.8-6.4 16-195.2 470.4-195.2 470.4-6.4 12.8-9.6 12.8-9.6 0 0 0 0-156.8 0-288 0-70.4-35.2-108.8-83.2-118.4-22.4-3.2-44.8 0-67.2 12.8s-35.2 32-48 54.4c-16 28.8-105.6 297.6-105.6 297.6-6.4 12.8-9.6 12.8-9.6 0 0 0-3.2-115.2-6.4-144-3.2-41.6-12.8-108.8-67.2-115.2-51.2-3.2-73.6 57.6-86.4 99.2-9.6 25.6-51.2 163.2-51.2 163.2v3.2z"></path></svg>'
    },
    4455: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-next" viewBox="0 0 240 240" focusable="false"><path d="M165,60v53.3L59.2,42.8C56.9,41.3,55,42.3,55,45v150c0,2.7,1.9,3.8,4.2,2.2L165,126.6v53.3h20v-120L165,60L165,60z"></path></svg>'
    },
    3578: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-pause" viewBox="0 0 240 240" focusable="false"><path d="M100,194.9c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H65c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V45c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h30c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V194.9z M180,45.1c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6V195c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V45.1z"></path></svg>'
    },
    4697: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-pip-off" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 5.75V9.75H22V4.78C22 4.21116 21.5389 3.75 20.97 3.75H2.03C1.46116 3.75 1 4.21113 1 4.78V17.72C1 18.2889 1.46119 18.75 2.03 18.75H12V16.75H3V5.75H20ZM14 13.25C14 12.6977 14.4477 12.25 15 12.25H22C22.5523 12.25 23 12.6977 23 13.25V19.25C23 19.8023 22.5523 20.25 22 20.25H15C14.4477 20.25 14 19.8023 14 19.25V13.25ZM10 9.25L8.20711 11.0429L10.7071 13.5429L9.29289 14.9571L6.79289 12.4571L5 14.25V9.25H10Z"></path></svg>'
    },
    8361: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-pip-on" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 5.125V9.125H22V4.155C22 3.58616 21.5389 3.125 20.97 3.125H2.03C1.46116 3.125 1 3.58613 1 4.155V17.095C1 17.6639 1.46119 18.125 2.03 18.125H12V16.125H3V5.125H20ZM14 11.875C14 11.3227 14.4477 10.875 15 10.875H22C22.5523 10.875 23 11.3227 23 11.875V17.875C23 18.4273 22.5523 18.875 22 18.875H15C14.4477 18.875 14 18.4273 14 17.875V11.875ZM6 12.375L7.79289 10.5821L5.29288 8.0821L6.7071 6.66788L9.20711 9.16789L11 7.375V12.375H6Z"></path></svg>'
    },
    9359: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-play" viewBox="0 0 240 240" focusable="false"><path d="M62.8,199.5c-1,0.8-2.4,0.6-3.3-0.4c-0.4-0.5-0.6-1.1-0.5-1.8V42.6c-0.2-1.3,0.7-2.4,1.9-2.6c0.7-0.1,1.3,0.1,1.9,0.4l154.7,77.7c2.1,1.1,2.1,2.8,0,3.8L62.8,199.5z"></path></svg>'
    },
    3446: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-error" viewBox="0 0 36 36" style="width:100%;height:100%;" focusable="false"><path d="M34.6 20.2L10 33.2 27.6 16l7 3.7a.4.4 0 0 1 .2.5.4.4 0 0 1-.2.2zM33.3 0L21 12.2 9 6c-.2-.3-.6 0-.6.5V25L0 33.6 2.5 36 36 2.7z"></path></svg>'
    },
    869: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-playback-rate" viewBox="0 0 240 240" focusable="false"><path d="M158.83,48.83A71.17,71.17,0,1,0,230,120,71.163,71.163,0,0,0,158.83,48.83Zm45.293,77.632H152.34V74.708h12.952v38.83h38.83ZM35.878,74.708h38.83V87.66H35.878ZM10,113.538H61.755V126.49H10Zm25.878,38.83h38.83V165.32H35.878Z"></path></svg>'
    },
    8931: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-quality-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M55,200H35c-3,0-5-2-5-4c0,0,0,0,0-1v-30c0-3,2-5,4-5c0,0,0,0,1,0h20c3,0,5,2,5,4c0,0,0,0,0,1v30C60,198,58,200,55,200L55,200z M110,195v-70c0-3-2-5-4-5c0,0,0,0-1,0H85c-3,0-5,2-5,4c0,0,0,0,0,1v70c0,3,2,5,4,5c0,0,0,0,1,0h20C108,200,110,198,110,195L110,195z M160,195V85c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v110c0,3,2,5,4,5c0,0,0,0,1,0h20C158,200,160,198,160,195L160,195z M210,195V45c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v150c0,3,2,5,4,5c0,0,0,0,1,0h20C208,200,210,198,210,195L210,195z"></path></svg>'
    },
    6614: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-replay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M120,41.9v-20c0-5-4-8-8-4l-44,28a5.865,5.865,0,0,0-3.3,7.6A5.943,5.943,0,0,0,68,56.8l43,29c5,4,9,1,9-4v-20a60,60,0,1,1-60,60H40a80,80,0,1,0,80-79.9Z"></path></svg>'
    },
    1885: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-rewind" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M113.2,131.078a21.589,21.589,0,0,0-17.7-10.6,21.589,21.589,0,0,0-17.7,10.6,44.769,44.769,0,0,0,0,46.3,21.589,21.589,0,0,0,17.7,10.6,21.589,21.589,0,0,0,17.7-10.6,44.769,44.769,0,0,0,0-46.3Zm-17.7,47.2c-7.8,0-14.4-11-14.4-24.1s6.6-24.1,14.4-24.1,14.4,11,14.4,24.1S103.4,178.278,95.5,178.278Zm-43.4,9.7v-51l-4.8,4.8-6.8-6.8,13-13a4.8,4.8,0,0,1,8.2,3.4v62.7l-9.6-.1Zm162-130.2v125.3a4.867,4.867,0,0,1-4.8,4.8H146.6v-19.3h48.2v-96.4H79.1v19.3c0,5.3-3.6,7.2-8,4.3l-41.8-27.9a6.013,6.013,0,0,1-2.7-8,5.887,5.887,0,0,1,2.7-2.7l41.8-27.9c4.4-2.9,8-1,8,4.3v19.3H209.2A4.974,4.974,0,0,1,214.1,57.778Z"></path></svg>'
    },
    7433: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M204,145l-25-14c0.8-3.6,1.2-7.3,1-11c0.2-3.7-0.2-7.4-1-11l25-14c2.2-1.6,3.1-4.5,2-7l-16-26c-1.2-2.1-3.8-2.9-6-2l-25,14c-6-4.2-12.3-7.9-19-11V35c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v28c-6.7,3.1-13,6.7-19,11L56,60c-2.2-0.9-4.8-0.1-6,2L35,88c-1.6,2.2-1.3,5.3,0.9,6.9c0,0,0.1,0,0.1,0.1l25,14c-0.8,3.6-1.2,7.3-1,11c-0.2,3.7,0.2,7.4,1,11l-25,14c-2.2,1.6-3.1,4.5-2,7l16,26c1.2,2.1,3.8,2.9,6,2l25-14c5.7,4.6,12.2,8.3,19,11v28c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6v-28c7-2.3,13.5-6,19-11l25,14c2.5,1.3,5.6,0.4,7-2l15-26C206.7,149.4,206,146.7,204,145z M120,149.9c-16.5,0-30-13.4-30-30s13.4-30,30-30s30,13.4,30,30c0.3,16.3-12.6,29.7-28.9,30C120.7,149.9,120.4,149.9,120,149.9z"></path></svg>'
    },
    2978: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-stop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M190,185c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H55c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V55c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h130c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V185z"></path></svg>'
    },
    8680: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.6,39.1,116.4,39.9,116.4,42.8z M212.3,96.4l-14.6-14.6l-23.6,23.6l-23.6-23.6l-14.6,14.6l23.6,23.6l-23.6,23.6l14.6,14.6l23.6-23.6l23.6,23.6l14.6-14.6L188.7,120L212.3,96.4z"></path></svg>'
    },
    3e3: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.5,42.8v154.4c0,2.8-1.7,3.6-3.8,1.7l-54.1-48H29c-2.8,0-5.2-2.3-5.2-5.2V94.3c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48C114.8,39.2,116.5,39.9,116.5,42.8z"></path><path d="M136.2,160v-20c11.1,0,20-8.9,20-20s-8.9-20-20-20V80c22.1,0,40,17.9,40,40S158.3,160,136.2,160z"></path><path d="M216.2,120c0-44.2-35.8-80-80-80v20c33.1,0,60,26.9,60,60s-26.9,60-60,60v20C180.4,199.9,216.1,164.1,216.2,120z"></path></svg>'
    },
    9744: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.7,39.1,116.4,39.9,116.4,42.8z M178.2,120c0-22.7-18.5-41.2-41.2-41.2v20.6c11.4,0,20.6,9.2,20.6,20.6c0,11.4-9.2,20.6-20.6,20.6v20.6C159.8,161.2,178.2,142.7,178.2,120z"></path></svg>'
    },
    8053: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-email" viewBox="0 0 160 160" focusable="false"><path d="M147.3,27.9H11.9L10,29.8v97a3.02,3.02,0,0,0,2.8,3.2H146.6a3.02,3.02,0,0,0,3.2-2.8V31C150.5,29.2,149.2,27.9,147.3,27.9ZM125.6,40.7,80.3,77.1,35,40.7Zm12.1,76.6H22.8V47.7l57.5,46,57.5-46-.1,69.6Z"></path></svg>'
    },
    8711: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M137.8,15H22.1A7.127,7.127,0,0,0,15,22.1V137.8a7.28,7.28,0,0,0,7.1,7.2H84.5V95H67.6V75.5H84.5v-15a23.637,23.637,0,0,1,21.3-25.9,28.08,28.08,0,0,1,4.1-.1c7.2,0,13.7.6,14.9.6V52.7H114.4c-8.5,0-9.7,3.9-9.7,9.7V74.7h19.5l-2.6,19.5H104.7v50.7h33.1a7.3,7.3,0,0,0,7.2-7.2V22A7.13,7.13,0,0,0,137.8,15Z"></path></svg>'
    },
    1983: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M135.237,15.006H24.739A9.427,9.427,0,0,0,15,24.107V135.256a9.553,9.553,0,0,0,9.365,9.737h110.9a9.427,9.427,0,0,0,9.737-9.1V24.081A9.461,9.461,0,0,0,135.237,15.006Zm-81.9,110.512H34.476V63.774h19.5v61.744ZM43.576,55.31A10.994,10.994,0,0,1,32.513,44.45v-.2a11.05,11.05,0,0,1,22.1,0A10.537,10.537,0,0,1,44.6,55.283l-.051,0A4.07,4.07,0,0,1,43.576,55.31Zm81.9,70.208h-19.5v-29.9c0-7.164,0-16.265-9.737-16.265s-11.7,7.8-11.7,16.265v29.9h-19.5V63.774h18.2v8.464h0a19.766,19.766,0,0,1,18.2-9.738c19.5,0,23.4,13,23.4,29.266v33.8h.637Z"></path></svg>'
    },
    1277: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-pinterest" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M80,15A65.127,65.127,0,0,0,15,80a66.121,66.121,0,0,0,39,59.8,62.151,62.151,0,0,1,1.3-14.9c1.3-5.2,8.5-35.1,8.5-35.1a26.386,26.386,0,0,1-2-10.4c0-9.7,5.9-16.9,12.4-16.9,5.9,0,8.5,4.5,8.5,9.7a128.456,128.456,0,0,1-5.9,22.7,9.646,9.646,0,0,0,6.6,12,8.105,8.105,0,0,0,3.8.3c12.4,0,20.8-15.6,20.8-34.4,0-14.3-9.7-24.7-27.3-24.7a30.869,30.869,0,0,0-31.8,30v1.2a19.8,19.8,0,0,0,4.5,13,2.586,2.586,0,0,1,.6,3.3c0,1.3-1.3,3.9-1.3,5.2-.6,2-2,2-3.3,2-9.1-3.9-13-13.6-13-24.7,0-18.2,15.6-40.3,46.1-40.3a38.763,38.763,0,0,1,40.9,36.7v.4c0,25.4-14.3,44.9-35.1,44.9A18.163,18.163,0,0,1,72.7,112s-3.9,14.9-4.5,17.6a46.615,46.615,0,0,1-6.5,13.7,79.828,79.828,0,0,0,18.2,1.9A65.1,65.1,0,0,0,80,15Z"></path></svg>'
    },
    7928: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-reddit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M136.7,60.7a18.265,18.265,0,0,0-11.6,4.1,83.108,83.108,0,0,0-40-11.5l8.1-25.1,21.1,4.7a14.927,14.927,0,1,0,14.9-16.2,15.418,15.418,0,0,0-13.6,8.1L90.5,18.7a3.75,3.75,0,0,0-4.7,2.7h0L77,52.6A93.15,93.15,0,0,0,34.2,64.1,19.471,19.471,0,0,0,23.3,60,19.137,19.137,0,0,0,5,78.3a19.777,19.777,0,0,0,7.5,14.9v4.1a38.88,38.88,0,0,0,20.4,31.9,85.678,85.678,0,0,0,46.8,12.2,93.7,93.7,0,0,0,46.8-12.2,38.741,38.741,0,0,0,20.4-31.9V93.2A18.324,18.324,0,0,0,155,78.3,18.952,18.952,0,0,0,136.7,60.7Zm-7.5-35.3a6.459,6.459,0,0,1,6.8,6v.8a6.744,6.744,0,0,1-6.8,6.8,6.459,6.459,0,0,1-6.8-6v-.8A7.312,7.312,0,0,1,129.2,25.4ZM47.1,89.2A10.2,10.2,0,1,1,57.3,99.4,10.514,10.514,0,0,1,47.1,89.2Zm57,29.8a31.975,31.975,0,0,1-24.4,7.5h0A34.711,34.711,0,0,1,55.3,119a3.821,3.821,0,1,1,5.2-5.6l.2.2a26.476,26.476,0,0,0,19,5.4h0a28.644,28.644,0,0,0,19-5.4,4,4,0,0,1,5.4,0c2,1.3,2,3.4,0,5.4Zm-2-19.7a10.2,10.2,0,1,1,10.2-10.2,10.514,10.514,0,0,1-10.2,10.2Z"></path></svg>'
    },
    5484: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-tumblr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M115.3,131.6a30.935,30.935,0,0,1-22,7.3h-.7c-28,0-34.6-20.6-34.6-32.7v-34H46.7A2.9,2.9,0,0,1,44,69.5h0V54.2a6.2,6.2,0,0,1,2.7-4,30.359,30.359,0,0,0,20-27.3,3.574,3.574,0,0,1,3-4,1.7,1.7,0,0,1,1,0H87.4a2.9,2.9,0,0,1,2.7,2.7V48.3h19.3a3.18,3.18,0,0,1,2.7,2V69.6a2.9,2.9,0,0,1-2.7,2.7H90v31.3a8.709,8.709,0,0,0,7.4,9.9,5.7,5.7,0,0,0,1.3.1,58.63,58.63,0,0,0,7.3-1.3,4.953,4.953,0,0,1,2.7-.7c.7,0,1.3.7,2,2l5.3,15.3C115.3,129.6,116,130.3,115.3,131.6Z"></path></svg>'
    },
    6598: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M56.8,132.5a75.177,75.177,0,0,0,75.3-75.1V54A53.405,53.405,0,0,0,145,40.5a58.075,58.075,0,0,1-15.4,3.9,27.138,27.138,0,0,0,11.6-14.8A53.038,53.038,0,0,1,124.5,36a25.736,25.736,0,0,0-19.3-8.4A26.12,26.12,0,0,0,78.8,53.4V54a16.5,16.5,0,0,0,.7,5.8,71.966,71.966,0,0,1-54.1-27,23.9,23.9,0,0,0-3.9,13.5A26.043,26.043,0,0,0,33.1,68.2,27.018,27.018,0,0,1,20.9,65v.7A26.15,26.15,0,0,0,42.1,91.4a24.149,24.149,0,0,1-7.1.7,12.625,12.625,0,0,1-5.1-.7,25.657,25.657,0,0,0,24.5,18A53.519,53.519,0,0,1,21.6,121a19.683,19.683,0,0,1-6.4-.7,80.388,80.388,0,0,0,41.6,12.2"></path></svg>'
    },
    4375: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-embed" viewBox="0 0 160 160" focusable="false"><path d="M153.224,81.594,126.971,54.685,117.6,64.061l21.846,21.846L117.6,107.752l8.719,8.719L152.567,90.22a5.583,5.583,0,0,0,1.406-7.782,6.067,6.067,0,0,0-.75-.844ZM33.12,54.685,6.868,80.938A5.973,5.973,0,0,0,6.68,89.47l.188.188L33.12,117.128l9.376-9.376-22.5-21.846L42.5,64.061ZM53.747,134.1,94.437,21.5,106.345,25.9,65.654,138.5Z"></path></svg>'
    },
    1666: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-link" viewBox="0 0 160 160" focusable="false"><path d="M79.4,99.6H92.5v2a33.6,33.6,0,0,1-9.8,24.2l-9.8,9.8a34.716,34.716,0,0,1-48.4,0,34.716,34.716,0,0,1,0-48.4l9.2-10.5a33.6,33.6,0,0,1,24.2-9.8h1.9V80H58.5a19.359,19.359,0,0,0-15.1,6.5l-9.8,9.8a20.976,20.976,0,0,0-.5,29.6l.5.5a20.976,20.976,0,0,0,29.6.5l.5-.5,9.8-9.8a20.905,20.905,0,0,0,6.5-15h0v-2ZM135,24.4h0a34.716,34.716,0,0,0-48.4,0L76.1,34.2a33.6,33.6,0,0,0-9.8,24.2v2H79.4v-2a19.359,19.359,0,0,1,6.5-15.1l9.8-9.8a20.976,20.976,0,0,1,29.6-.5l.5.5a20.976,20.976,0,0,1,.5,29.6l-.5.5-10.5,9.8a20.905,20.905,0,0,1-15,6.5H99V93h1.3a33.6,33.6,0,0,0,24.2-9.8l9.8-9.8A34.89,34.89,0,0,0,135,24.4ZM63,106.2l42.5-42.5-9.8-9.8L53.2,96.4Z"></path></svg>'
    },
    549: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-sharing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M175,160c-6.9,0.2-13.6,2.6-19,7l-62-39c0.8-2.6,1.2-5.3,1-8c0.2-2.7-0.2-5.4-1-8l62-39c5.4,4.4,12.1,6.8,19,7c16.3,0.3,29.7-12.6,30-28.9c0-0.4,0-0.7,0-1.1c0-16.5-13.5-30-30-30s-30,13.5-30,30c-0.2,2.7,0.2,5.4,1,8L84,97c-5.4-4.4-12.1-6.8-19-7c-16.5,0-30,13.5-30,30s13.5,30,30,30c6.9-0.2,13.6-2.6,19-7l62,39c-0.8,2.6-1.2,5.3-1,8c0,16.5,13.5,30,30,30s30-13.5,30-30S191.6,160,175,160z"></path></svg>'
    }
}]);
