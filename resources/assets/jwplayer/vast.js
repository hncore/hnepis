!function() {
    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(t)
    }
    function t(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        for (var i = 0; i < t.length; i++) {
            var r = t[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function r(e, t, r) {
        return t && i(e.prototype, t),
        r && i(e, r),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function a(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i,
        e
    }
    function n() {
        return (n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i)
                    Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function o(e, t) {
        return (o = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function l(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function d(e, t) {
        if (t && ("object" == typeof t || "function" == typeof t))
            return t;
        if (void 0 !== t)
            throw new TypeError("Derived constructors may only return object or undefined");
        return l(e)
    }
    function u(e) {
        var t = function() {
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
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var i, r = s(e);
            if (t) {
                var a = s(this).constructor;
                i = Reflect.construct(r, arguments, a)
            } else
                i = r.apply(this, arguments);
            return d(this, i)
        }
    }
    function c(e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = s(e)); )
            ;
        return e
    }
    function h() {
        return (h = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
            var r = c(e, t);
            if (r) {
                var a = Object.getOwnPropertyDescriptor(r, t);
                return a.get ? a.get.call(arguments.length < 3 ? e : i) : a.value
            }
        }
        ).apply(this, arguments)
    }
    function p(e) {
        return function(e) {
            if (Array.isArray(e))
                return v(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return v(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === i && e.constructor && (i = e.constructor.name);
            if ("Map" === i || "Set" === i)
                return Array.from(e);
            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                return v(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, r = new Array(t); i < t; i++)
            r[i] = e[i];
        return r
    }
    var f, m = "click", y = "play", g = "error", k = "complete", P = ["adImpression", "adError", "adPodError"], A = ["adStarted", "adComplete", "adImpression", "adClick", "adSkipped", "adError", "adPlay", "adPause", "adMeta"], w = (a(f = {}, ["instream"], 1),
    a(f, ["banner"], 2),
    a(f, ["article"], 3),
    a(f, ["feed"], 4),
    a(f, ["floating"], 5),
    a(f, ["interstitial"], 5),
    a(f, ["slider"], 5),
    f), b = function() {
        function e(i, r, a) {
            t(this, e),
            this.debugTrackFn = i,
            this.div = null,
            this.elem = null,
            this.environment = r,
            this.utils = a
        }
        return r(e, [{
            key: "addCompanion",
            value: function(e, t) {
                if (this.div = e,
                this.elem = document.getElementById(this.div.id),
                !this.elem)
                    return !1;
                for (var i = 0; i < t.length; i++)
                    if (this.fitsDiv(t[i]))
                        return this.placeCompanion(t[i]),
                        !0;
                return !1
            }
        }, {
            key: "removeCompanion",
            value: function() {
                this.elem.innerHTML = ""
            }
        }, {
            key: "sendPings",
            value: function(e) {
                (e = e.creativeView) && (e.forEach((function(e) {
                    (new Image).src = e
                }
                )),
                "function" == typeof this.debugTrackFn && this.debugTrackFn({
                    type: "companion",
                    data: {
                        trackers: e
                    }
                }))
            }
        }, {
            key: "placeCompanion",
            value: function(e) {
                var t = this;
                if (this.removeCompanion(),
                "html" === e.type) {
                    var i = document.createElement("div");
                    i.innerHTML = e.source;
                    var r = i.getElementsByTagName("script");
                    return r.length && r.forEach((function(e) {
                        new t.utils.scriptloader(e.src).load(),
                        e.parentElement.removeChild(e)
                    }
                    )),
                    this.elem.appendChild(i),
                    void this.sendPings(e.trackers)
                }
                if ("iframe" === e.type) {
                    var a = document.createElement("iframe");
                    return a.height = this.div.height,
                    a.width = this.div.width,
                    a.src = e.source,
                    a.scrolling = "no",
                    a.style.border = "none",
                    a.marginWidth = 0,
                    a.marginHeight = 0,
                    this.sendPings(e.trackers),
                    this.elem.innerHTML = "",
                    void this.elem.appendChild(a)
                }
                if ("application/x-shockwave-flash" === e.type) {
                    var n = document.createElement("object");
                    return n.setAttribute("type", "application/x-shockwave-flash"),
                    n.setAttribute("data", e.source),
                    n.setAttribute("width", "100%"),
                    n.setAttribute("height", "100%"),
                    n.setAttribute("tabindex", 0),
                    E(n, "allowfullscreen", "true"),
                    E(n, "allowscriptaccess", "always"),
                    E(n, "seamlesstabbing", "true"),
                    E(n, "wmode", "opaque"),
                    this.elem.appendChild(n),
                    void this.sendPings(e.trackers)
                }
                var s = new Image;
                s.src = e.source,
                e.clickthrough && (s.onclick = function() {
                    t.utils.openLink(e.clickthrough, "_blank", {
                        rel: "noreferrer"
                    })
                }
                ),
                this.elem.innerHTML = "",
                this.elem.appendChild(s),
                this.sendPings(e.trackers)
            }
        }, {
            key: "fitsDiv",
            value: function(e) {
                return e.width === this.div.width && e.height === this.div.height
            }
        }]),
        e
    }();
    function E(e, t, i) {
        var r = document.createElement("param");
        r.setAttribute("name", t),
        r.setAttribute("value", i),
        e.appendChild(r)
    }
    var T = document.createElement("img")
      , _ = document.createElement("img");
    T.src = _.src = 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="%23191919"/><line stroke="%23CCC" stroke-width="6" x1="32" y1="20" x2="32" y2="44"/><line stroke="%23CCC" stroke-width="6" x1="20" y1="32" x2="44" y2="32"/></svg>',
    T.className = "jw-vast-nonlinear-open-button",
    _.className = "jw-vast-nonlinear-close-button";
    var I = function() {
        function e(i, r, a, s, o) {
            t(this, e),
            this.player = i,
            this.environment = i.getEnvironment(),
            this.div = s,
            this.staticURL = r,
            this.clickURL = a,
            this.loadTimer = -1,
            this.animationTimer = -1,
            this.banner = null,
            n(this, i.Events),
            this.banner = document.createElement("img"),
            this.banner.className = "jw-banner",
            this.banner.id = this.player.id + "_vast_static",
            this.div.appendChild(T),
            this.div.appendChild(this.banner),
            this.div.appendChild(_),
            this.loadTimer = setTimeout(this.imageLoadError.bind(this), o),
            this.banner.onerror = this.imageLoadError.bind(this),
            this.banner.onload = this.onLoaded.bind(this),
            this.banner.src = this.staticURL
        }
        return r(e, [{
            key: "onLoaded",
            value: function() {
                if (clearTimeout(this.loadTimer),
                0 !== this.banner.naturalWidth) {
                    this.removeBannerEventListeners();
                    var e = this.player.utils;
                    e.addClass(this.div, "jw-vast-nonlinear-active"),
                    e.style(_, {
                        bottom: this.banner.height - 8,
                        left: this.banner.width
                    }, !0),
                    new e.UI(this.banner).on("click", this.sendClick.bind(this)),
                    _.onclick = _.ontouchstart = this.collapse.bind(this),
                    T.onclick = T.ontouchstart = this.expand.bind(this),
                    this.trigger(y)
                } else
                    this.imageLoadError()
            }
        }, {
            key: "imageLoadError",
            value: function() {
                clearTimeout(this.loadTimer),
                this.trigger(g),
                this.removeBanner()
            }
        }, {
            key: "sendClick",
            value: function() {
                this.trigger(m)
            }
        }, {
            key: "collapse",
            value: function(e) {
                var t = this;
                e.preventDefault(),
                this.player.utils.addClass(this.div, "jw-vast-nonlinear-collapsed"),
                this.animationTimer = setTimeout((function() {
                    t.remove(t.banner),
                    t.remove(_),
                    t.animationTimer = -1
                }
                ), 250)
            }
        }, {
            key: "expand",
            value: function(e) {
                -1 === this.animationTimer && (e.preventDefault(),
                this.player.utils.removeClass(this.div, "jw-vast-nonlinear-collapsed"),
                this.div.appendChild(this.banner),
                this.div.appendChild(_))
            }
        }, {
            key: "remove",
            value: function(e) {
                this.div.contains(e) && this.div.removeChild(e)
            }
        }, {
            key: "removeBannerEventListeners",
            value: function() {
                this.banner.onload = this.banner.onerror = null
            }
        }, {
            key: "removeBanner",
            value: function() {
                this.removeBannerEventListeners(),
                this.remove(this.banner)
            }
        }, {
            key: "removeListeners",
            value: function() {
                clearTimeout(this.loadTimer),
                clearTimeout(this.animationTimer),
                _.onclick = _.ontouchstart = T.onclick = T.ontouchstart = null,
                this.off(),
                this.removeBannerEventListeners()
            }
        }, {
            key: "stop",
            value: function() {
                this.player.utils.removeClass(this.div, "jw-vast-nonlinear-active jw-vast-nonlinear-collapsed"),
                this.removeBanner(),
                this.remove(_),
                this.remove(T)
            }
        }]),
        e
    }()
      , C = function() {
        function e(i, r) {
            t(this, e),
            this.player = i,
            this.div = r,
            this.startTime = 0,
            this.minDur = 0,
            this.environment = i.getEnvironment(),
            n(this, i.Events),
            this.type = "static",
            i.on("time", this.dispatchTime, this)
        }
        return r(e, [{
            key: "playAd",
            value: function(e, t, i, r, a) {
                this.minDur = this.player.utils.seconds(i),
                this.adTag = r,
                this.static && (this.static.removeListeners(),
                this.static.stop()),
                this.player.utils.addClass(this.div, "jw-vast-nonlinear"),
                this.static = new I(this.player,e,t,this.div,a),
                this.static.on(y, this.startAd, this),
                this.static.on(m, this.clickHandler, this),
                this.static.on(g, this.errorHandler, this)
            }
        }, {
            key: "dispatchTime",
            value: function(e) {
                this.trigger("time", e)
            }
        }, {
            key: "startAd",
            value: function() {
                this.startTime = this.player.getPosition(),
                this.minDur > 0 && (0 === this.startTime ? this.on("time", this.startTimingAd, this) : this.on("time", this.timeAd, this)),
                this.sendEvent(y)
            }
        }, {
            key: "startTimingAd",
            value: function(e) {
                this.startTime = e.position,
                this.off("time", this.startTimingAd, this),
                this.on("time", this.timeAd, this)
            }
        }, {
            key: "timeAd",
            value: function(e) {
                e.position - this.startTime > this.minDur && (this.off("time", this.timeAd, this),
                this.stop())
            }
        }, {
            key: "clickHandler",
            value: function() {
                this.sendEvent(m)
            }
        }, {
            key: "errorHandler",
            value: function() {
                this.sendEvent(g)
            }
        }, {
            key: "sendEvent",
            value: function(e, t) {
                (t = t || {}).tag = t.tag || this.adTag,
                this.trigger(e, t)
            }
        }, {
            key: "removeEvents",
            value: function() {
                this.off()
            }
        }, {
            key: "getState",
            value: function() {
                return "playing"
            }
        }, {
            key: "stop",
            value: function() {
                this.startTime && this.static && (this.startTime = 0,
                this.minDur = 0,
                this.off("time", this.startTimingAd, this),
                this.off("time", this.timeAd, this),
                this.static.removeListeners(),
                this.static.stop(),
                this.sendEvent(k))
            }
        }, {
            key: "pause",
            value: function() {}
        }]),
        e
    }()
      , S = /^(https?:\/\/).*.(?:ampproject.org|bing-amp.com)\/(?:.\/)*(.*)\/amp.*$/;
    var R = new RegExp(/^[^/]*:\/\/\/?([^\/]*)/);
    function x(e) {
        var t = e.match(R);
        return t && t.length > 1 ? t[1] : ""
    }
    var j, O = new RegExp(/^[^:\/?#]+:?\/\/[^\/?#]+/);
    function M() {
        var e, t, i = null !== document.referrer.match(O) ? (e = document.referrer,
        (t = e.match(S)) && t.length > 1 ? "".concat(t[1]).concat(t[2]) : e) : "";
        if (window.top !== window.self) {
            try {
                return {
                    url: window.top.location.href,
                    domain: window.top.document.domain,
                    referrer: i
                }
            } catch (e) {}
            return {
                url: i,
                domain: x(i),
                referrer: ""
            }
        }
        return {
            url: document.location.href,
            domain: document.domain,
            referrer: i
        }
    }
    function V(e) {
        var t = e.advertising;
        if (t && t.placement) {
            var i = t.placement.toLowerCase();
            if (w[i])
                return w[i]
        }
        return w[t && t.outstream ? "article" : "instream"]
    }
    function B(e, t, i, r) {
        var a = L(e, i, r)
          , s = t.adErrorCode || 60900;
        return n(a, {
            message: t.message,
            code: t.code >= 100 && t.code <= 1008 ? t.code : 900,
            adErrorCode: s
        }),
        10402 === s || 50004 === s || 50400 === s ? a.timeout = i ? i.creativeTimeout : r.creativeTimeout : 11007 !== s && 10301 !== s && 60006 !== s || (a.timeout = i ? i.requestTimeout : r.requestTimeout),
        void 0 !== t.id && (a.id = t.id),
        void 0 !== t.sourceError && (a.sourceError = t.sourceError),
        void 0 !== t.tag && (a.tag = t.tag),
        void 0 !== t.vmap && (a.vmap = t.vmap),
        a
    }
    function L(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          , r = {
            client: "vast"
        };
        if (null === e)
            return r;
        var a = e.bidding
          , s = e.config
          , o = e.item
          , l = e.player;
        e.isDestroyed() || (r.placement = V(l.getConfig()));
        var d = i.schedule;
        if (d)
            return n(r, {
                item: o,
                tag: d.getVMAP(),
                adbreaks: d.getAllAds().map((function(e) {
                    var t = {
                        type: e._type,
                        offset: e._offSet
                    };
                    if (e._vmap ? t.vmap = e._vmap : t.adbreak = n({}, e._adbreak),
                    a) {
                        var i = a.getBid(e.adPlayId);
                        i && n(t, i.getEventObject())
                    }
                    return t
                }
                ))
            });
        if (s.preloadAds && (r.preloadAds = i.preload || t && t._preload || !1),
        i.jwpseg && (r.jwpseg = i.jwpseg),
        t) {
            var u = e.getAdIds(t, i)
              , c = u.adBreakId
              , h = u.adPlayId;
            if (n(r, {
                adBreakId: c,
                adPlayId: h,
                offset: t._offSet
            }),
            a) {
                var p = a.getBid(h);
                p && n(r, p.getEventObject())
            }
        }
        var v = t && (i.tag || t._currentTag);
        if (v && (n(r, {
            id: t._id,
            tag: v,
            adposition: t._position,
            sequence: t._adPodIndex + 1,
            witem: t._waterfallIndex + 1,
            wcount: t._adQueue ? t._adQueue.length : 1,
            adsystem: t.adsystem || ""
        }),
        t.adServingId && (r.adServingId = t.adServingId),
        void 0 !== t.skipoffset && (r.skipoffset = t.skipoffset),
        t.wrappedTags && n(r, {
            wrapperAdSystem: t.wrapper || "",
            wrappedTags: t.wrappedTags.slice(1)
        }),
        t._adbreak && (r.adschedule = t._adbreak,
        r.adschedule.offset = t._offSet)),
        t && t.companions && i.companions)
            return r.companions = i.companions,
            r;
        if (t && t.response) {
            var f = e.params;
            n(r, {
                adtitle: t.adTitle || "",
                description: t.description || "",
                adId: t.adId || "",
                adVerifications: t.adVerifications || null,
                advertiser: t.advertiser || "",
                advertiserId: t.advertiserId || "",
                creativeId: t.creativeId || "",
                creativeAdId: t.creativeAdId || "",
                dealId: t.dealId || "",
                request: t.request,
                response: t.response,
                conditionalAd: t.conditionalAd,
                conditionalAdOptOut: f.conditionaladoptout,
                vastversion: t.vastversion,
                clickThroughUrl: t.clickthrough,
                duration: i.duration,
                linear: i.linear
            }),
            "boolean" == typeof t.mediaFileCompliance && (r.mediaFileCompliance = t.mediaFileCompliance,
            t.nonComplianceReasons && (r.nonComplianceReasons = t.nonComplianceReasons)),
            t.selectedMedia && (r.mediafile = {
                file: t.selectedMedia.file
            }),
            i.metadata && (r.adMessage = f.dynamicMessage || "",
            t.companions && (r.companions = t.companions),
            t.sequence && (r.podMessage = f.podMessage || ""),
            void 0 !== t.skipoffset && n(r, {
                skipMessage: f.skipMessage,
                skipText: f.skipText
            }))
        } else
            r.item = o;
        return r
    }
    function H(e) {
        return e.isBeforePlay() || 0 === e.getPosition() && "idle" === e.getState() ? "pre" : e.isBeforeComplete() || e.getPosition() === e.getDuration() ? "post" : "mid"
    }
    var D = (a(j = {}, ["instream"], 1),
    a(j, ["banner"], 2),
    a(j, ["article"], 3),
    a(j, ["feed"], 4),
    a(j, ["floating"], 5),
    a(j, ["interstitial"], 5),
    a(j, ["slider"], 5),
    j)
      , q = new RegExp(/^[^/]*:\/\/\/?([^\/]*)/);
    function N(e) {
        var t = e.match(q);
        return t && t.length > 1 ? t[1] : ""
    }
    var F = new RegExp(/^[^:\/?#]+:?\/\/[^\/?#]+/);
    var U = /^(https?:\/\/).*.(?:ampproject.org|bing-amp.com)\/(?:.\/)*(.*)\/amp.*$/;
    function Q(e) {
        var t = new RegExp("[?&]".concat(e, "=([^&]*)"))
          , i = document.location.search.match(t);
        if (i)
            return decodeURIComponent(i[1])
    }
    function X() {
        if (Q("isAMP")) {
            var e = Q("consentValue")
              , t = Q("consentGdpr");
            if (e || t)
                return {
                    gdprApplies: t,
                    consentData: e
                }
        }
    }
    var W = null
      , z = {
        gdprApplies: !0,
        consentData: ""
    }
      , G = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
        return null === W && (W = new Promise((function(e) {
            var t = window.__tcfapi || $("__tcfapi");
            if (t)
                return t("getTCData", 2, (function(t, i) {
                    e(!1 !== i ? {
                        gdprApplies: t.gdprApplies,
                        consentData: t.tcString,
                        addtlConsent: t.addtlConsent
                    } : null)
                }
                ));
            var i = window.__cmp || $("__cmp");
            if (i)
                return i("getConsentData", null, (function(t, i) {
                    e(!1 !== i ? {
                        gdprApplies: t.gdprApplies || t.isUserInEu,
                        consentData: t.consentData
                    } : null)
                }
                ));
            var r = X();
            return e(r || {
                gdprApplies: !1,
                consentData: ""
            })
        }
        )).then((function(e) {
            return e && (z = e),
            z
        }
        ))),
        Promise.race([W, new Promise((function(t) {
            setTimeout(t, e, z)
        }
        ))])
    }
      , $ = function(e) {
        var t = function(e) {
            for (var t = window; t; ) {
                try {
                    if (t.frames[e])
                        break
                } catch (e) {}
                t = t === window.top ? null : t.parent
            }
            return t
        }("".concat(e, "Locator"));
        return null !== t && function(i, r, n, s) {
            var o = J();
            window.addEventListener("message", (function t(i) {
                var r = i ? i.data : {};
                if ("string" == typeof r)
                    try {
                        r = JSON.parse(r)
                    } catch (e) {
                        r = {}
                    }
                var a = "".concat(e, "Return");
                r[a] && r[a].callId === o && (removeEventListener("message", t),
                n(r[a].returnValue, r[a].success))
            }
            ), !1);
            var l = void 0 !== s ? "version" : "parameter"
              , d = a({}, ["".concat(e, "Call")], a({
                command: i,
                callId: o,
                parameter: s
            }, [l], r));
            t.postMessage(JSON.stringify(d), "*")
        }
    }
      , J = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    function Y(e) {
        var t = e.advertising;
        if (t && t.placement) {
            var i = t.placement.toLowerCase();
            if (D[i])
                return D[i]
        }
        return D[t && t.outstream ? "article" : "instream"]
    }
    function K() {
        var e, t, i = null !== document.referrer.match(F) ? (e = document.referrer,
        (t = e.match(U)) && t.length > 1 ? "".concat(t[1]).concat(t[2]) : e) : "";
        if (window.top !== window.self) {
            try {
                return {
                    url: window.top.location.href,
                    domain: window.top.document.domain,
                    referrer: i
                }
            } catch (e) {}
            return {
                url: i,
                domain: N(i),
                referrer: ""
            }
        }
        return {
            url: document.location.href,
            domain: document.domain,
            referrer: i
        }
    }
    function Z(e, t) {
        var i, r = e.getPlugin("inference"), a = t.jwpseg_client_side, n = t.jwpseg || [];
        if (!a || !a.length || !r)
            return n;
        try {
            i = r.predict(a, t)
        } catch (e) {
            return t.jwpseg || []
        }
        var s = Object.keys(i).filter((function(e) {
            return i[e]
        }
        ))
          , o = n.filter((function(e) {
            return -1 === a.indexOf(e)
        }
        ));
        return [].concat(p(s), p(o))
    }
    function ee(e, t, i) {
        var r = te(e, t, i);
        return n(r, {
            message: "Ad Error: bidding plugin unavailable",
            code: 900,
            adErrorCode: 60008
        }),
        r
    }
    function te(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          , r = {
            client: e.client
        }
          , a = e.bidding
          , s = e.item
          , o = e.player;
        if (e.isDestroyed() || n(r, {
            placement: Y(o.getConfig()),
            viewable: o.getViewable()
        }),
        i.jwpseg && (r.jwpseg = i.jwpseg),
        t) {
            var l = e.getAdIds(t, i)
              , d = l.adBreakId
              , u = l.adPlayId;
            if (n(r, {
                adBreakId: d,
                adPlayId: u,
                offset: t._offSet
            }),
            a) {
                var c = a.getBid(u);
                c && n(r, c.getEventObject())
            }
        }
        return r.item = s,
        r
    }
    function ie(e, t, i, r) {
        return {
            client: r,
            message: e,
            adErrorCode: t,
            id: "-1",
            placement: Y(i),
            tag: ""
        }
    }
    var re = /^((https?:)?\/\/)?(secure)?pubads\.g\.doubleclick\.net\/gampad\/ads\?[\S]*$/;
    function ae(e, t, i, r, a) {
        var n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
        if (!e)
            return Promise.resolve(e);
        var s = le(t, i)
          , o = K();
        -1 !== e.indexOf("__jwpseg__") && (n.jwpseg = s.jwpseg),
        e = ne(e, "__random-number__", Math.random() * Math.pow(10, 18)),
        e = ne(e, "__timestamp__", (new Date).getTime()),
        e = ne(e, "__page-url__", encodeURIComponent(s.pageUrl || o.url)),
        e = ne(e, "__referrer__", encodeURIComponent(s.referrer || o.referrer)),
        e = ne(e, "__player-height__", s.playerHeight),
        e = ne(e, "__player-width__", s.playerWidth),
        e = ne(e, "__item-duration__", s.itemDuration),
        e = ne(e, "__jwpseg__", s.jwpseg),
        e = ne(e, "__domain__", encodeURIComponent(s.domain || o.domain)),
        e = ne(e, "__placement__", s.placement),
        e = ne(e, "__device-ua__", encodeURIComponent(s.userAgent)),
        e = a.companion ? ne(e, "__companion-div__", a.companion.id) : ne(e, "__companion-div__", "");
        for (var l = Object.keys(s).filter((function(e) {
            return -1 !== e.indexOf("item")
        }
        )), d = l.map((function(e) {
            var t = e.match(/item([\w]+?)(List)?$/);
            if (t)
                return t[1].toLowerCase()
        }
        )), u = null, c = /__item-([\w-]+?)(-list)?__/g, h = e; null !== (u = c.exec(h)); ) {
            var p = u[0]
              , v = u[1]
              , f = l[d.indexOf(v)]
              , m = "";
            if (i.hasOwnProperty(v) && "string" == typeof i[v] || f) {
                m = f ? s[f] : i[v];
                var y = !1 === a.truncateMacros ? 4096 : 1e3;
                m.length > y && (m = m.substring(0, y));
                var g = u[2] ? "," : null;
                m = m.split(g).map(encodeURIComponent)
            }
            e = ne(e, p, m)
        }
        if ("vast" === r) {
            var k = t.getConfig().autostart ? 1 : 0
              , P = t.getMute() ? 1 : 0;
            e = oe(e, k, P)
        }
        if ("googima" === r && i.title && -1 === e.indexOf("vid_t=")) {
            var A = i.title.substring(0, 100).replace(/[^\x00-\x7F]/g, "");
            e += se(e) + "vid_t=" + encodeURIComponent(A)
        }
        return -1 !== e.indexOf("__gdpr__") || -1 !== e.indexOf("__gdpr_consent__") || -1 !== e.indexOf("__addtl_consent__") ? G().then((function(t) {
            var i = t.gdprApplies
              , r = t.consentData
              , a = t.addtlConsent;
            return e = ne(e, "__gdpr__", i ? 1 : 0),
            e = ne(e, "__addtl_consent__", a || ""),
            ne(e, "__gdpr_consent__", r || "")
        }
        )).catch((function() {
            return e
        }
        )) : Promise.resolve(e)
    }
    function ne(e, t, i) {
        return e.replace(t, i)
    }
    function se(e) {
        return -1 !== e.indexOf("?") ? "&" : "?"
    }
    function oe(e, t, i) {
        return re.test(e) && (e = "".concat(e, "&vpa=").concat(t, "&vpmute=").concat(i)),
        e
    }
    function le(e, t) {
        var i, r, a, s = e.getConfig(), o = e.getPlaylistItem() === t;
        return n({
            playerHeight: e.getHeight() || s.height || "",
            playerWidth: e.getWidth() || s.width || "",
            itemDuration: o ? (i = e.getDuration(),
            r = 3,
            a = Math.pow(10, r),
            Math.round(i * a) / a || "") : "",
            item: t,
            jwpseg: Z(e, t),
            placement: Y(s),
            userAgent: navigator.userAgent
        }, s.advertising ? s.advertising.ampMacros : {})
    }
    var de = Array.prototype
      , ue = de.forEach
      , ce = de.map
      , he = function() {};
    function pe(e, t, i) {
        if (ke(e, "VMAP", "vmap").length)
            return function(e, t, i) {
                var r = [];
                we(ke(e, "VMAP", "vmap")[0], "version") || me(r, "VMAP Schema Error: version missing from VMAP tag", "-1");
                var a = ke(e, "AdBreak", "vmap");
                a.length || ye();
                for (var n = e.lookupNamespaceURI("vmap"), s = {}, o = 0; o < a.length; o++) {
                    var l = {}
                      , d = {}
                      , u = a[o]
                      , c = we(u, "timeOffset")
                      , h = we(u, "breakId")
                      , v = we(u, "breakType")
                      , f = we(ke(u, "AdSource", "vmap")[0], "id")
                      , m = ke(u, "AdTagURI", "vmap")[0]
                      , y = ke(u, "VASTData", "vmap")[0] || ke(u, "VASTAdData", "vmap")[0]
                      , g = we(m, "templateType")
                      , k = Ee(m)
                      , P = Ae(n, u, "Tracking", "vmap");
                    if (v || me(r, "VMAP Schema Error: missing breakType on AdBreak", h),
                    y || g || me(r, "VMAP Schema Error: missing templateType on AdBreak", h),
                    c || me(r, "VMAP Schema Error: missing timeOffset on AdBreak", h),
                    l._type = v,
                    l._vmap = {
                        id: f,
                        breakid: h,
                        timeoffset: c
                    },
                    y)
                        l._adXML = ve(Pe(y, "VAST"));
                    else {
                        if ("vast2" !== g && "vast3" !== g && "vast4" !== g)
                            continue;
                        l._adQueue = [k],
                        l._waterfallIndex = 0
                    }
                    var A = [];
                    if (P)
                        for (var w = 0; w < P.length; w++) {
                            be(d, P[w]);
                            var b = we(P[w], "event");
                            A.push(b)
                        }
                    if ((A.indexOf("breakStart") < 0 || A.indexOf("breakEnd") < 0 || A.indexOf("error") < 0) && me(r, "Tracking events are missing breakStart, breakEnd, or error for AdBreak", h),
                    l._trackers = d,
                    l._type = v,
                    c && !s[c])
                        s[c] = l,
                        s[c]._pod = l._adQueue ? p(l._adQueue) : [];
                    else if (c && s[c]) {
                        var E;
                        if (l._adQueue)
                            (E = s[c]._pod).push.apply(E, p(l._adQueue))
                    }
                }
                Object.keys(s).forEach((function(e) {
                    var r = s[e];
                    switch (r._pod && r._pod.length <= 1 && delete r._pod,
                    e) {
                    case "start":
                        r._offSet = "pre",
                        t.setPreRoll(r);
                        break;
                    case "100%":
                    case "end":
                        r._offSet = "post",
                        t.setPostRoll(r);
                        break;
                    default:
                        if (/^#/.test(e))
                            break;
                        /^\d\d?(?:\.\d+)?%$/.test(e) ? r._offSet = e : r._offSet = i.seconds(e),
                        t.addMidRoll(r)
                    }
                }
                )),
                t.preRoll || t.midRolls.length || t.postRoll || ye();
                return t.sort(null, !0),
                r
            }(e, t, i);
        if (ke(e, "Playlist", "vmap").length)
            return function(e, t, i) {
                var r = ke(e, "Playlist", "vmap")[0]
                  , a = r.getElementsByTagName("Preroll")[0]
                  , n = r.getElementsByTagName("Postroll")[0]
                  , s = fe(a, "pre")
                  , o = fe(n, "post");
                s && t.setPreRoll(s);
                o && t.setPostRoll(o);
                for (var l = r.getElementsByTagName("Midroll"), d = 0; d < l.length; d++) {
                    var u = l[d]
                      , c = i.seconds(u.getAttribute("timeOffset"))
                      , h = fe(u, c);
                    t.addMidRoll(h)
                }
                return []
            }(e, t, i);
        throw new Error("No VMAP tag in response")
    }
    function ve(e) {
        return e.ownerDocument instanceof Document ? e.outerHTML || (new XMLSerializer).serializeToString(e) : null
    }
    function fe(e, t) {
        if (!e)
            return null;
        var i = e.getElementsByTagName("Ad");
        if (!i.length)
            return null;
        var r = {
            _offSet: t
        };
        if (1 === i.length)
            r._adQueue = [i[0].textContent.trim()];
        else {
            r._pod = [];
            for (var a = 0; a < i.length; a++)
                r._pod.push(i[a].textContent.trim())
        }
        return r
    }
    function me(e, t, i) {
        e.push({
            message: t,
            code: 1002,
            adErrorCode: 70001,
            id: i
        })
    }
    function ye() {
        var e = new Error("No AdBreaks in VMAP");
        throw e.adErrorCode = 60005,
        e
    }
    var ge = function() {
        function i(e, r) {
            t(this, i),
            this.utils = r,
            this._error = null,
            this._version = null,
            e && this.parse(e)
        }
        return r(i, [{
            key: "error",
            value: function() {
                return this._error
            }
        }, {
            key: "version",
            value: function() {
                return this._version
            }
        }, {
            key: "parse",
            value: function(e, t) {
                var i, r = this;
                "VAST" === e.nodeName ? i = e : (i = Pe(e, "VAST")) || (i = Pe(e, "VideoAdServingTemplate")),
                i || this.throwError(101, "Invalid VAST response");
                var a = "VideoAdServingTemplate" === i.tagName ? 1 : parseFloat(we(i, "version") || 0);
                this._version = a;
                var n, s = ke(i, "Ad"), o = ce.call(s, (function(i) {
                    var n = r.parseAd(a, i);
                    return n.vastversion = a,
                    n.response = e,
                    n.request = t || null,
                    n
                }
                ));
                return o.length || (n = ke(i, "Error"),
                ue.call(n, (function(e) {
                    var t = Ee(e).replace("[ERRORCODE]", 303);
                    (new Image).src = t
                }
                ))),
                o
            }
        }, {
            key: "parseAd",
            value: function(t, i, r) {
                r = r || {};
                var a, s, o, l, d, u = Pe(i, "InLine"), c = Pe(i, "Wrapper"), h = u || c, p = Pe(h, "Advertiser"), v = Pe(h, "AdVerifications");
                return v && (r.adVerifications = (s = ke(v, "Verification"),
                o = [],
                ue.call(s, (function(e) {
                    var t = we(e, "vendor")
                      , i = Pe(e, "JavaScriptResource")
                      , r = Pe(e, "ExecutableResource")
                      , a = Ee(Pe(e, "VerificationParameters"))
                      , n = ke(Pe(e, "TrackingEvents"), "Tracking")
                      , s = {}
                      , l = {
                        vendor: t,
                        verificationParameters: a,
                        trackers: s
                    };
                    i && (l.javaScriptResource = {
                        url: Ee(i),
                        apiFramework: we(i, "apiFramework"),
                        browserOptional: we(i, "browserOptional")
                    }),
                    r && (l.executableResource = {
                        url: Ee(r),
                        apiFramework: we(r, "apiFramework"),
                        type: we(r, "type")
                    }),
                    ue.call(n, (function(e) {
                        be(s, e)
                    }
                    )),
                    o.push(l)
                }
                )),
                o)),
                r.sequence = we(i, "sequence"),
                r.adId = we(i, "id"),
                r.adTitle = Ee(Pe(h, "AdTitle")),
                r.advertiser = Ee(p),
                r.advertiserId = we(p, "id"),
                r.description = Ee(Pe(h, "Description")),
                r.dealId = Ee(Pe(h, "DealId")),
                (!t || t > 4.2 || t < 2) && this.throwError(102, "Vast version not supported"),
                t >= 4 && (r.conditionalAd = !!we(i, "conditionalAd")),
                h ? (_e(h, "Impression", (a = function(e, t, i) {
                    var r = ke(Pe(e, "Creatives"), "Creative")
                      , a = {}
                      , n = {
                        trackers: a
                    };
                    n.adServingId = Ee(Pe(e, "AdServingId")),
                    n.adsystem = Ee(Pe(e, "AdSystem"));
                    var s = ke(e, "Category");
                    return n.categories = ce.call(s, (function(e) {
                        return Ee(e)
                    }
                    )),
                    ue.call(r, (function(e) {
                        var r = Pe(e, "Linear")
                          , s = Pe(e, "NonLinear")
                          , o = ke(Pe(e, "TrackingEvents"), "Tracking");
                        if (t >= 4) {
                            var l = ke(e, "UniversalAdId");
                            n.universalAdId = ce.call(l, (function(e) {
                                return {
                                    universalAdIdRegistry: we(e, "idRegistry") || "unknown",
                                    universalAdIdValue: Ee(e) || we(e, "idValue") || "unknown"
                                }
                            }
                            ))
                        }
                        n.creativeId = we(e, "id"),
                        n.creativeAdId = we(e, "adId"),
                        r && (n.linear = !0),
                        (r || s) && ue.call(o, (function(e) {
                            be(a, e)
                        }
                        ));
                        var d = Ee(Pe(e, "AdParameters"));
                        if (d && (n.adParams = d),
                        r) {
                            var u = Pe(r, "VideoClicks")
                              , c = Ee(Pe(u, "ClickThrough"))
                              , h = ke(u, "ClickTracking")
                              , p = we(r, "skipoffset")
                              , v = Ee(Pe(r, "Duration"));
                            ue.call(h, (function(e) {
                                Te(a, "click", Ee(e))
                            }
                            )),
                            v && (n.duration = i.seconds(v)),
                            c && (n.clickthrough = c),
                            void 0 !== p && (n.skipoffset = p),
                            function(e, t) {
                                var i = ke(Pe(e, "MediaFiles"), "MediaFile")
                                  , r = t.media ? t.media : [];
                                t.media = r.concat(ce.call(i, (function(e) {
                                    return {
                                        type: we(e, "type"),
                                        file: Ee(e),
                                        adType: we(e, "apiFramework") || "",
                                        width: parseInt(we(e, "width"), 10) || 0,
                                        height: parseInt(we(e, "height"), 10) || 0,
                                        bitrate: parseInt(we(e, "bitrate"), 10) || null,
                                        maxBitrate: parseInt(we(e, "maxBitrate"), 10) || null
                                    }
                                }
                                )).filter((function(e) {
                                    return e.file
                                }
                                )))
                            }(r, n),
                            function(e, t) {
                                var i = ke(e, "Icon");
                                t.icons = Array.prototype.reduce.call(i, (function(e, t) {
                                    var i, r;
                                    if (i = Pe(t, "StaticResource"))
                                        r = we(i, "creativeType");
                                    else if (i = Pe(t, "IFrameResource"))
                                        r = "iframe";
                                    else {
                                        if (!(i = Pe(t, "HTMLResource")))
                                            return e;
                                        r = "html"
                                    }
                                    var a = Ee(i)
                                      , n = {};
                                    n.iconClick = Ee(Pe(t, "IconClickTracking")) || null,
                                    n.iconView = Ee(Pe(t, "IconViewTracking")) || null;
                                    var s = we(t, "xPosition").toLowerCase()
                                      , o = we(t, "yPosition").toLowerCase()
                                      , l = {};
                                    return "left" === s || "right" === s ? l[s] = 0 : l.left = parseInt(s, 10) || 0,
                                    "top" === o || "bottom" === o ? l[o] = 0 : l.top = parseInt(o, 10) || 0,
                                    l.width = parseInt(we(t, "width"), 10) || 0,
                                    l.height = parseInt(we(t, "height"), 10) || 0,
                                    e.push({
                                        program: we(t, "program"),
                                        style: l,
                                        apiFramework: we(t, "apiFramework"),
                                        offset: we(t, "offset") || "00:00:00",
                                        duration: we(t, "duration") || null,
                                        clickThrough: Ee(Pe(t, "IconClickThrough")),
                                        trackers: n,
                                        resource: {
                                            resourceType: r,
                                            resourceSource: a
                                        }
                                    }),
                                    e
                                }
                                ), t.icons || [])
                            }(r, n)
                        } else if (s) {
                            var f = Ee(Pe(s, "NonLinearClickThrough"));
                            f && (n.clickthrough = f),
                            function(e, t) {
                                var i = []
                                  , r = Pe(e, "StaticResource");
                                r && (i.push({
                                    type: we(r, "creativeType"),
                                    file: Ee(r),
                                    adType: we(Pe(e, "NonLinear"), "apiFramework") || "static",
                                    minDuration: we(Pe(e, "NonLinear"), "minSuggestedDuration") || "00:00:00"
                                }),
                                t.media = i)
                            }(e, n)
                        } else
                            !function(e, t) {
                                var i = ke(Pe(e, "CompanionAds"), "Companion")
                                  , r = t.companions ? t.companions : [];
                                ue.call(i, (function(e) {
                                    var t, i, a = Pe(e, "StaticResource"), n = Pe(e, "IFrameResource"), s = Pe(e, "HTMLResource"), o = {};
                                    if (a)
                                        t = we(a, "creativeType"),
                                        i = Ee(a);
                                    else if (n)
                                        t = "iframe",
                                        i = Ee(n);
                                    else {
                                        if (!s)
                                            return;
                                        t = "html",
                                        i = Ee(s)
                                    }
                                    var l = ke(Pe(e, "TrackingEvents"), "Tracking");
                                    ue.call(l, (function(e) {
                                        var t = we(e, "event");
                                        Te(o, t, Ee(e))
                                    }
                                    ));
                                    var d = Ee(Pe(e, "CompanionClickThrough"));
                                    r.push({
                                        width: parseInt(we(e, "width"), 10),
                                        height: parseInt(we(e, "height"), 10),
                                        type: t,
                                        source: i,
                                        trackers: o,
                                        clickthrough: d
                                    })
                                }
                                )),
                                t.companions = r
                            }(e, n)
                    }
                    )),
                    n
                }(h, t, this.utils)).trackers),
                _e(h, "Error", a.trackers),
                _e(h, "NotViewable", a.trackers),
                _e(h, "Viewable", a.trackers),
                function(e) {
                    var t = {};
                    e.media && e.media.forEach((function(e) {
                        var i = e.type
                          , r = "application/x-mpegURL" === i || "vnd.apple.mpegURL" === i;
                        "vpaid" === e.adType.toLowerCase() || r || (t[i] = t[i] || 0,
                        t[i]++)
                    }
                    ));
                    e.mediaFileCompliance = !0,
                    Object.keys(t).forEach((function(i) {
                        var r = t[i];
                        r < 3 && (e.mediaFileCompliance = !1,
                        e.nonComplianceReasons = e.nonComplianceReasons || [],
                        e.nonComplianceReasons.push("".concat(i, " has only ").concat(r, " qualities")))
                    }
                    ))
                }(a),
                c && (a.wrappedURI = Ee(Pe(c, "VASTAdTagURI")) || Ee(Pe(c, "VASTAdTagURL")),
                a.followAdditionalWrappers = JSON.parse(we(c, "followAdditionalWrappers")),
                a.allowMultipleAds = JSON.parse(we(c, "allowMultipleAds")),
                a.fallbackOnNoAd = JSON.parse(we(c, "fallbackOnNoAd"))),
                l = a,
                d = n({}, r),
                Object.keys(l).forEach((function(t) {
                    var i = l[t];
                    Array.isArray(d[t]) ? d[t] = d[t].concat(i) : "object" === e(d[t]) && null !== d[t] ? d[t] = n(d[t], i) : d[t] = i
                }
                )),
                a = d) : this.throwError(303, "No ads", 10303),
                a
            }
        }, {
            key: "throwError",
            value: function(e, t, i) {
                throw this._error = new Error(t),
                this._error.code = e,
                this._error.adErrorCode = i || 1e4 + e,
                this._error
            }
        }]),
        i
    }();
    function ke(e, t, i) {
        var r = [];
        return e && (r = e.getElementsByTagName(t),
        i && r && 0 === r.length && (r = e.getElementsByTagName("".concat(i, ":").concat(t)))),
        r
    }
    function Pe(e, t) {
        if (e) {
            var i = e.getElementsByTagName(t);
            if (i)
                return i[0]
        }
        return null
    }
    function Ae(e, t, i, r) {
        var a = [];
        return e || t ? a = t.getElementsByTagNameNS ? t.getElementsByTagNameNS(e, i) : t.getElementsByTagName("".concat(r, ":").concat(i)) : a
    }
    function we(e, t) {
        return e ? e.getAttribute(t) : null
    }
    function be(e, t) {
        var i = we(t, "event");
        if ("progress" === i) {
            var r = we(t, "offset");
            i = "".concat(i, "_").concat(r)
        }
        Te(e, i, Ee(t))
    }
    function Ee(e) {
        if (e) {
            var t = e.textContent || e.text;
            if (t)
                return t.trim()
        }
        return ""
    }
    function Te(e, t, i) {
        e[t] || (e[t] = []),
        i && (e[t].push(i),
        Ie(i))
    }
    function _e(e, t, i) {
        var r = ke(e, t);
        ce.call(r, (function(e) {
            Te(i, t.toLowerCase(), Ee(e))
        }
        ))
    }
    var Ie = function(e) {
        (e.indexOf("[REGULATIONS]") >= 0 || e.indexOf("[GDPRCONSENT]") >= 0) && (G().catch(he),
        Ie = he)
    };
    function Ce(e) {
        e.onload = e.onreadystatechange = e.onerror = null,
        "abort"in e && e.abort()
    }
    var Se = function() {
        function e(i, r) {
            t(this, e),
            this.adRules = i,
            this.utils = r,
            this.preRoll = null,
            this.vmap = null,
            this.postRoll = null,
            this.midRolls = [],
            this.playedMidRolls = [],
            this.duration = 0,
            this._vmapPromise = null,
            this._vmapXHR = null
        }
        return r(e, [{
            key: "load",
            value: function(e, t, i, r) {
                var a = this;
                if (this._vmapPromise)
                    return this._vmapPromise;
                null !== this._vmapXHR && (Ce(this._vmapXHR),
                this._vmapXHR = null);
                var s = ae(this.getVMAP(), e, t, i, r);
                return this._vmapPromise = s.then((function(t) {
                    return new Promise((function(i, n) {
                        a._vmapXHR = e.utils.ajax({
                            url: t,
                            withCredentials: r.withCredentials,
                            retryWithoutCredentials: !0,
                            requireValidXML: !0,
                            timeout: a.requestTimeout
                        }, i, (function(e, t, i, r) {
                            return n(r)
                        }
                        ))
                    }
                    )).then((function(r) {
                        return a._vmapXHR = null,
                        e.trigger("adLoadedXML", {
                            client: i,
                            tag: t,
                            xml: r.responseXML
                        }),
                        pe(r.responseXML, a, e.utils).map((function(e) {
                            return n(e, {
                                vmap: t
                            })
                        }
                        ))
                    }
                    )).catch((function(i) {
                        a._vmapXHR = null;
                        var r = {
                            id: "-1",
                            vmap: t
                        };
                        if (i.message)
                            n(r, {
                                message: "VMAP Schema Error: ".concat(i.message),
                                code: 1002,
                                adErrorCode: i.adErrorCode || 11002
                            });
                        else {
                            var s = {
                                1: {
                                    code: 1007,
                                    message: "Timeout"
                                },
                                602: {
                                    code: 1e3,
                                    message: "Invalid XML"
                                },
                                default: {
                                    code: 1008,
                                    message: e.getConfig().localization.errors[i.key]
                                }
                            }
                              , o = s[i.code] || s.default;
                            e.utils.log(o.message),
                            n(r, {
                                message: "Error Loading VMAP Schedule",
                                code: o.code,
                                adErrorCode: o.code + 1e4
                            })
                        }
                        throw r
                    }
                    ))
                }
                )),
                this._vmapPromise
            }
        }, {
            key: "canWaterfall",
            value: function(e) {
                return e._adQueue && e._waterfallIndex + 1 < e._adQueue.length
            }
        }, {
            key: "getPreRoll",
            value: function(e) {
                return e && "none" === this.adRules.startOnSeek ? null : Re(this.preRoll, this.requestTimeout, this.creativeTimeout)
            }
        }, {
            key: "getPostRoll",
            value: function(e) {
                var t = Re(this.postRoll, this.requestTimeout, this.creativeTimeout);
                return this.adRules.timeBetweenAdsAllowsAdPlayback(t, e) ? t : null
            }
        }, {
            key: "getMidRollAtIndex",
            value: function(e) {
                return Re(this.midRolls[e], this.requestTimeout, this.creativeTimeout)
            }
        }, {
            key: "getLastMidRollIndexBetweenTime",
            value: function(e, t, i) {
                if (e > t)
                    return null;
                this.sort(i);
                for (var r = this.midRolls.length; r--; ) {
                    var a = this.midRolls[r]
                      , n = xe(this.midRolls[r]._offSet, i);
                    if (e >= n)
                        return null;
                    if (t >= n) {
                        var s = Re(a, this.requestTimeout, this.creativeTimeout);
                        if (!this.adRules.timeBetweenAdsAllowsAdPlayback(s))
                            return null;
                        if (!this.adRules.timeBetweenAds) {
                            if (this.playedMidRolls.indexOf(r) >= 0)
                                return null;
                            this.playedMidRolls.push(r)
                        }
                        return r
                    }
                }
                return null
            }
        }, {
            key: "peek",
            value: function(e, t, i) {
                if (this.midRolls.length > this.playedMidRolls.length) {
                    this.sort(i);
                    for (var r = 0; this.midRolls[r]; ) {
                        var a = xe(this.midRolls[r]._offSet, i);
                        if (a >= e && -1 === this.playedMidRolls.indexOf(r)) {
                            var n = J() + 1e3 * (a - e);
                            return a <= t && this.adRules.timeBetweenAdsAllowsAdPlayback(null, n) ? r : null
                        }
                        r += 1
                    }
                }
                var s = J() + 1e3 * (i - e);
                return this.postRoll && t >= i && this.adRules.timeBetweenAdsAllowsAdPlayback(null, s) ? -1 : null
            }
        }, {
            key: "getNextMidrollIndex",
            value: function(e, t, i) {
                if (this.adRules.timeBetweenAds || this.adRules.startOnSeek)
                    return this.getLastMidRollIndexBetweenTime(e, t, i);
                if (this.midRolls.length > this.playedMidRolls.length) {
                    var r = this.getClosestIndex(t, i);
                    if (r >= 0 && this.playedMidRolls.indexOf(r) < 0)
                        return this.playedMidRolls.push(r),
                        r
                }
                return null
            }
        }, {
            key: "getMidRolls",
            value: function() {
                var e = this;
                return this.midRolls.map((function(t) {
                    return Re(t, e.requestTimeout, e.creativeTimeout)
                }
                ))
            }
        }, {
            key: "reset",
            value: function() {
                null !== this._vmapXHR && (Ce(this._vmapXHR),
                this._vmapXHR = null),
                this.playedMidRolls = [],
                this.duration = 0
            }
        }, {
            key: "setPreRoll",
            value: function(e) {
                this.resetBreakId(e),
                this.preRoll = e
            }
        }, {
            key: "addMidRoll",
            value: function(e) {
                this.resetBreakId(e),
                this.midRolls.push(e),
                this.duration = 0
            }
        }, {
            key: "setPostRoll",
            value: function(e) {
                this.resetBreakId(e),
                this.postRoll = e
            }
        }, {
            key: "sort",
            value: function(e, t) {
                (!e || e < 1) && (e = 1),
                (this.duration !== e || t) && (this.duration = e,
                this.midRolls.sort((function(t, i) {
                    return xe(t._offSet, e) - xe(i._offSet, e)
                }
                )),
                function(e, t) {
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i];
                        t ? r._vmap.item = i + 1 : (r._adbreak = {
                            item: i + 1,
                            breakid: r._breakId
                        },
                        r._pod ? r._adbreak.pod = r._pod : r._adbreak.tags = r._adQueue)
                    }
                }(this.getAllAds(), t))
            }
        }, {
            key: "getAllAds",
            value: function() {
                var e = this.preRoll ? [this.preRoll] : []
                  , t = this.postRoll ? [this.postRoll] : [];
                return e.concat(this.midRolls, t)
            }
        }, {
            key: "setVMAP",
            value: function(e) {
                this.vmap = e
            }
        }, {
            key: "isVMAP",
            value: function() {
                return !!this.vmap
            }
        }, {
            key: "getVMAP",
            value: function() {
                return this.vmap
            }
        }, {
            key: "getClosestIndex",
            value: function(e, t) {
                this.sort(t);
                for (var i = this.midRolls.length; i--; )
                    if (e >= xe(this.midRolls[i]._offSet, t))
                        return i;
                return -1
            }
        }, {
            key: "resetBreakId",
            value: function(e) {
                e.adBreakId = this.utils.genId(12)
            }
        }, {
            key: "resetAllBreakIds",
            value: function() {
                var e = this;
                this.getAllAds().forEach((function(t) {
                    e.resetBreakId(t)
                }
                ))
            }
        }, {
            key: "destroy",
            value: function() {
                this.reset(),
                this.adRules.destroy()
            }
        }]),
        e
    }();
    function Re(e, t, i) {
        var r;
        if (null !== e)
            return Object.keys(e).forEach((function(t) {
                var i = e[t];
                (r = r || {})[t] = "_adQueue" === t || "_pod" === t ? i.slice() : i
            }
            )),
            r ? (r.requestTimeout = t,
            r.creativeTimeout = i,
            r._errors = [],
            r._waterfallIndex = 0,
            r._adPodIndex = 0,
            r) : void 0
    }
    function xe(e, t) {
        return "%" === e.toString().slice(-1) ? t * parseFloat(e.slice(0, -1)) / 100 : parseFloat(e)
    }
    var je = function() {
        function e(i) {
            t(this, e),
            this.utils = i
        }
        return r(e, [{
            key: "getSchedule",
            value: function(e, t) {
                var i = new Se(t,this.utils);
                if (i.requestTimeout = Me(e.requestTimeout, 5e3),
                i.creativeTimeout = Me(e.creativeTimeout, 5e3),
                e.tag)
                    i.setPreRoll({
                        _offSet: "pre",
                        _adQueue: Oe(e.tag),
                        _waterfallIndex: 0
                    });
                else if ("string" == typeof e.vastxml)
                    i.setPreRoll({
                        _offSet: "pre",
                        _adXML: e.vastxml
                    });
                else {
                    if ("string" == typeof e.schedule)
                        return i.setVMAP(e.schedule),
                        i;
                    if ("string" == typeof e.adschedule)
                        return i.setVMAP(e.adschedule),
                        i;
                    !function(e, t, i) {
                        var r = t.schedule || t.adschedule;
                        if (!r)
                            return;
                        var a = {};
                        Object.keys(r).forEach((function(e) {
                            var t = r[e];
                            t.ad && (n(t, t.ad),
                            delete t.ad);
                            var s = function(e, t) {
                                if ("start" === e || "0%" === e || !e && 0 !== e)
                                    return "pre";
                                if ("end" === e || "100%" === e)
                                    return "post";
                                if ("pre" === e || "post" === e || (e + "").indexOf("%") >= 0)
                                    return e;
                                var i = t.seconds(e);
                                if ("number" == typeof i)
                                    return i;
                                return !1
                            }(t.offset, i)
                              , o = Me(t.requestTimeout, 5e3)
                              , l = Me(t.creativeTimeout, 5e3)
                              , d = a[s];
                            if (d) {
                                if ("nonlinear" === t.type)
                                    return;
                                "nonlinear" === d._type && (d = null)
                            }
                            var u = a[s] = d || {
                                _offSet: s,
                                _type: t.type,
                                _breakId: e,
                                adBreakId: i.genId(12),
                                requestTimeout: o,
                                creativeTimeout: l
                            };
                            !1 === s && i.log("Error: ad offset format not supported", s);
                            var c = t.skipoffset;
                            if (void 0 !== c && void 0 === u.skipoffset && (u.skipoffset = c),
                            "string" == typeof t.adm)
                                u.adm = t.adm;
                            else if (t.pod) {
                                var h = u._pod || [];
                                u._pod = h.concat(t.pod)
                            } else if (t.tag) {
                                var p = function(e, t) {
                                    if (!t)
                                        return e;
                                    var i = e.indexOf("?") >= 0 ? "&" : "?"
                                      , r = e.indexOf("cust_params=")
                                      , a = "cust_params=".length
                                      , n = ""
                                      , s = "";
                                    if (Object.keys(t).forEach((function(e) {
                                        var i = t[e];
                                        n = "".concat(n).concat(s).concat(e, "=").concat(i),
                                        s = "&"
                                    }
                                    )),
                                    n = encodeURIComponent(n),
                                    r >= 0) {
                                        var o = e.substr(0, r + a)
                                          , l = e.substr(r + a);
                                        return "".concat(o).concat(n, "%26").concat(l)
                                    }
                                    return "".concat(e).concat(i).concat("cust_params=").concat(n)
                                }(t.tag, t.custParams);
                                u._adQueue && (u._pod = [u._adQueue[0]],
                                delete u._adQueue),
                                u._pod ? u._pod.push(Oe(p)[0]) : u._adQueue = Oe(p)
                            } else {
                                if ("string" != typeof t.vastxml)
                                    return void i.log("Error: no ad tag provided");
                                u._adXML = t.vastxml
                            }
                        }
                        )),
                        Object.keys(a).forEach((function(i) {
                            var r = a[i];
                            switch (r.skipoffset = void 0 !== r.skipoffset ? r.skipoffset : t.skipoffset,
                            i) {
                            case "pre":
                                e.setPreRoll(r);
                                break;
                            case "post":
                                e.setPostRoll(r);
                                break;
                            default:
                                e.addMidRoll(r)
                            }
                        }
                        ))
                    }(i, e, this.utils)
                }
                return i.sort(),
                i
            }
        }, {
            key: "getOptParams",
            value: function(e, t) {
                var i = {
                    cuetext: t.cuetext,
                    dynamicMessage: t.admessage,
                    loadingAd: t.loadingAd,
                    podMessage: t.podmessage,
                    skipoffset: e.skipoffset,
                    skipMessage: t.skipmessage,
                    skipText: t.skiptext,
                    omidAccessMode: e.omidAccessMode || "full",
                    omidSupport: e.omidSupport || "auto",
                    allowedOmidVendors: e.allowedOmidVendors || [],
                    vpaidcontrols: e.vpaidcontrols || !1,
                    conditionaladoptout: e.conditionaladoptout || !1,
                    requestFilter: e.requestFilter,
                    trackingFilter: e.trackingFilter,
                    withCredentials: void 0 === e.withCredentials || e.withCredentials
                }
                  , r = e.companiondiv;
                return r && (i.companion = {
                    id: r.id,
                    height: r.height,
                    width: r.width
                }),
                i
            }
        }, {
            key: "getAdRules",
            value: function(e) {
                var t = e.rules || {}
                  , i = parseInt(t.frequency, 10);
                return {
                    startOn: t.startOn || 1,
                    frequency: isNaN(i) ? 1 : i,
                    timeBetweenAds: t.timeBetweenAds || 0,
                    startOnSeek: t.startOnSeek || null,
                    deferAds: t.deferAds || null
                }
            }
        }]),
        e
    }();
    function Oe(e) {
        return Array.isArray(e) ? e.slice(0) : [e]
    }
    function Me(e, t) {
        return 0 === e ? 1 / 0 : e || t
    }
    var Ve = function() {
        function e(i, r) {
            t(this, e),
            this.player = i,
            this.options = r,
            this.client = r.client,
            this.ignoreStartOnSeek = !1,
            this.reset(),
            r.timeBetweenAds && i.on({
                adBreakStart: this.handleAdBreakStart,
                adSkipped: this.handleAdSkipped,
                adComplete: this.handleAdComplete,
                adBreakEnd: this.handleAdBreakEnd,
                destroyPlugin: this.destroy
            }, this)
        }
        return r(e, [{
            key: "timeBetweenAds",
            get: function() {
                return this.options.timeBetweenAds
            }
        }, {
            key: "startOnSeek",
            get: function() {
                return this.ignoreStartOnSeek ? null : this.options.startOnSeek
            }
        }, {
            key: "shouldDeferAds",
            value: function() {
                return this.options.deferAds && !this.player.getConfig().activeTab
            }
        }, {
            key: "clearStartOnSeek",
            value: function() {
                this.ignoreStartOnSeek = !0
            }
        }, {
            key: "sendAdBreakIgnored",
            value: function(e, t) {
                e && this.player.trigger("adBreakIgnored", function(e, t) {
                    var i = {};
                    return e && (i = {
                        id: e._breakId,
                        tag: e._adQueue && e._adQueue.length > 0 ? e._adQueue[0] : e._adXML,
                        offset: e._offSet
                    }),
                    n(i, {
                        timeSinceLastAd: t,
                        type: "adBreakIgnored"
                    })
                }(e, t, this.client))
            }
        }, {
            key: "rulesAllowAdPlayback",
            value: function(e) {
                var t = this.options
                  , i = 0 === t.frequency && 1 === e
                  , r = e >= t.startOn && (e - t.startOn) % t.frequency == 0;
                return i || r
            }
        }, {
            key: "handleAdBreakStart",
            value: function() {
                this.adSkipped = !1,
                this.adComplete = !1
            }
        }, {
            key: "handleAdComplete",
            value: function() {
                this.adComplete = !0
            }
        }, {
            key: "handleAdSkipped",
            value: function() {
                this.adSkipped = !0
            }
        }, {
            key: "handleAdBreakEnd",
            value: function() {
                !this.adSkipped && this.adComplete && (this.recentCompletedAdTime = J())
            }
        }, {
            key: "timeBetweenAdsAllowsAdPlayback",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : J();
                if (this.options.timeBetweenAds) {
                    var i = (t - this.recentCompletedAdTime) / 1e3;
                    if (i < this.options.timeBetweenAds)
                        return this.sendAdBreakIgnored(e, i),
                        !1
                }
                return !0
            }
        }, {
            key: "reset",
            value: function() {
                this.ignoreStartOnSeek = !1,
                this.recentCompletedAdTime = 0
            }
        }, {
            key: "destroy",
            value: function() {
                this.player.off(null, null, this)
            }
        }]),
        e
    }()
      , Be = function() {}
      , Le = function() {
        function e(i, r, a, s, o) {
            t(this, e),
            n(this, i.Events),
            this.client = "shared",
            this.player = i,
            this.item = a,
            this.config = s,
            this.casting = o;
            var l = i.utils
              , d = new je(l);
            this.adRules = new Ve(i,d.getAdRules(s)),
            "string" == typeof r ? (this.schedule = new Se(this.adRules,l),
            this.schedule.setPreRoll({
                tag: r
            })) : (this.schedule = r,
            r.resetAllBreakIds()),
            this.vmapPromise = null,
            this.lastTimeEvent = null,
            this.prerollPromise = null,
            this.midrollPromise = {},
            this.postrollPromise = null,
            this.next = null,
            this.nextPlaylistItemPromise = null,
            this.relatedNextUp = null,
            this.bidding = i.getPlugin("bidding"),
            this.bids = [],
            this.bidsPromises = [],
            this.bidsPromise = null,
            this._events = []
        }
        return r(e, [{
            key: "attachListeners",
            value: function() {
                this.player.on({
                    all: this.onAll,
                    beforePlay: this.checkPreroll,
                    relatedReady: this.relatedReady,
                    cast: this.onCast,
                    destroyBidding: this.destroyBids
                }, this)
            }
        }, {
            key: "onAll",
            value: function(e, t) {
                "time" === e ? this.checkMidrolls(t) : "beforeComplete" === e && this.checkPostrolls(t)
            }
        }, {
            key: "relatedReady",
            value: function() {
                var e = this;
                if (this.config.preloadAds) {
                    var t = this.player.getPlugin("related");
                    t && t.on("nextUp", (function(t) {
                        t && "discovery" === t.mode && (e.relatedNextUp = t)
                    }
                    ))
                }
            }
        }, {
            key: "onCast",
            value: function(e) {
                this.casting = !!e.active
            }
        }, {
            key: "init",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                  , i = arguments.length > 1 ? arguments[1] : void 0;
                if (this.schedule.isVMAP() && (i.requestTimeout = this.schedule.requestTimeout,
                i.creativeTimeout = this.schedule.creativeTimeout,
                this.vmapPromise = this.schedule.load(this.player, this.item, this.client, i)),
                this.bidsPromise = this.vmapPromise || Promise.resolve(),
                this.bidsPromise = null !== t ? this.bidsPromise.then((function() {
                    if (!e.isDestroyed()) {
                        if (e.bidding)
                            return e.createBidsPromise(t, i);
                        var r = ee(e, null, i);
                        e.player.trigger("adError", r)
                    }
                }
                )).catch(Be) : this.bidsPromise.catch(Be),
                this.config.preloadAds)
                    if (1 === i.playlistItemEventCount) {
                        var r = this.player.getConfig().autostart;
                        !1 === r || "viewable" === r && 0 === this.player.getViewable() ? this.loadPreroll(i).catch((function(t) {
                            return e.isDestroyed() ? null : e.enqueueAdEvent("adError", t, {
                                preload: !0
                            })
                        }
                        )) : this.player.once("autostartNotAllowed", (function() {
                            e.loadPreroll(i).catch((function(t) {
                                return e.isDestroyed() ? null : e.enqueueAdEvent("adError", t, {
                                    preload: !0
                                })
                            }
                            ))
                        }
                        ))
                    } else
                        i.preloadPreroll && this.loadPreroll(i).catch((function(t) {
                            return e.isDestroyed() ? null : e.enqueueAdEvent("adError", t, {
                                preload: !0
                            })
                        }
                        ));
                return this.bidsPromise
            }
        }, {
            key: "createBidsPromise",
            value: function(e, t) {
                var i = this
                  , r = this.player
                  , a = parseInt(e.bidOnBreaks, 10);
                return a = a > 0 ? a : 1 / 0,
                this.bids = this.schedule.getAllAds().slice(0, a).map((function(a) {
                    var s = i.getAdIds(a).adPlayId
                      , o = r.getConfig()
                      , l = i.config.skipoffset
                      , d = null != l && l >= 0
                      , u = Z(r, i.item)
                      , c = {
                        id: s,
                        offset: e.offset,
                        jwpseg: u,
                        placement: Y(o),
                        tag: a._adQueue ? a._adQueue[0] : a._currentTag,
                        adClient: i.client
                    };
                    "vast" === i.client && (c.skipoffset = d ? l : -1);
                    var h = i.bidding.createNewBid(c, {
                        getURLParts: K
                    });
                    i.player.trigger("adBidRequest", te(i, a, n({
                        jwpseg: u
                    }, t))),
                    h.init();
                    var p = h.start().then((function(e) {
                        var r = e.result;
                        if (!i.isDestroyed()) {
                            var n = Promise.resolve();
                            return r && !r.error && (a.jwpseg = u,
                            r.adm ? (a._adXML = r.adm,
                            a._adQueue && a._adQueue.length && a._adQueue.unshift(r.adm)) : r.tag && (n = ae(r.tag, i.player, i.item, i.client, {}, a).then((function(e) {
                                "vast" === i.client ? (a._adQueue = a._adQueue || [],
                                a._adQueue.unshift(e)) : a._adQueue = [e]
                            }
                            )))),
                            i.player.trigger("adBidResponse", te(i, a, t)),
                            n
                        }
                    }
                    ));
                    return i.bidsPromises.push(p),
                    h
                }
                )),
                Promise.all(this.bidsPromises)
            }
        }, {
            key: "checkPreroll",
            value: function(e) {
                var t = this;
                if (this.bidTimeoutStarted || (this.bidTimeoutStarted = !0,
                this.bids.forEach((function(e) {
                    return e.timeout()
                }
                ))),
                !(this.casting || this.preRollPlayed || this.adRules.shouldDeferAds())) {
                    this.preRollPlayed = !0;
                    var i = (e || {}).startTime || this.player.getPosition();
                    this.lastTimeEvent = i || this.lastTimeEvent;
                    var r = this.schedule.getPreRoll(i);
                    if (r || this.vmapPromise) {
                        (null !== this.vmapPromise || r && "nonlinear" !== r._type) && this.startBlocking(),
                        this.bidsPromise.then((function() {
                            if (!t.isDestroyed()) {
                                var e = t.schedule.getPreRoll(i);
                                e && "nonlinear" !== e._type && t.triggerAdBreakEvents(e, "pre")
                            }
                        }
                        )),
                        i ? "none" === this.adRules.startOnSeek && (this.prerollPromise = null) : this.adRules.clearStartOnSeek();
                        var a = e && e.playReason ? e.playReason : "external";
                        this.playPreroll({
                            adBlock: this.adBlockErrorDetected,
                            startTime: i,
                            reason: a
                        })
                    }
                }
            }
        }, {
            key: "checkMidrolls",
            value: function(e) {
                var t = this;
                if (!this.casting && 0 !== e.duration && !this.adRules.shouldDeferAds()) {
                    var i = this.schedule.getNextMidrollIndex(this.lastTimeEvent, e.position, e.duration);
                    if (this.lastTimeEvent = e.position,
                    null !== i) {
                        var r = this.schedule.getMidRollAtIndex(i);
                        "nonlinear" !== r._type && (this.startBlocking(),
                        this.triggerAdBreakEvents(r, "mid")),
                        this.playMidrollAtIndex(i, {
                            adBlock: this.adBlockErrorDetected
                        })
                    } else if (!this.preRollPlayed && this.schedule.getClosestIndex(e.position, e.duration) < 0)
                        this.checkPreroll(e);
                    else if (this.config.preloadAds) {
                        var a = e.position + 5
                          , n = this.schedule.peek(e.position, a, e.duration);
                        if (null !== n && n >= 0)
                            this.loadMidrollAtIndex(n, {
                                adBlock: this.adBlockErrorDetected,
                                preload: !0
                            }).catch(Be);
                        else if (-1 === n) {
                            var s = J() + 1e3 * (e.duration - e.position);
                            this.loadPostroll({
                                adBlock: this.adBlockErrorDetected,
                                preload: !0,
                                startTime: s
                            }).catch(Be)
                        } else if (null === this.next && null === this.nextPlaylistItemPromise && a > e.duration) {
                            var o = this.player.getPlaylistIndex() + 1
                              , l = this.player.getPlaylistItem(o);
                            if (this.nextPlaylistRelated = !!this.relatedNextUp,
                            l || this.relatedNextUp) {
                                var d = this.relatedNextUp ? -1 : o;
                                this.nextPlaylistItemPromise = Promise.resolve(this.player.getPlaylistItemPromise(d)).then((function() {
                                    t.isDestroyed() || (t.trigger("preloadNext", {
                                        item: t.player.getPlaylistItem(o) || t.relatedNextUp,
                                        index: d
                                    }),
                                    t.relatedNextUp = null,
                                    t.nextPlaylistItemPromise = null)
                                }
                                )).catch(Be)
                            }
                        }
                    }
                }
            }
        }, {
            key: "checkPostrolls",
            value: function(e) {
                if (!(this.casting || this.adRules.shouldDeferAds() || this.isDestroyed())) {
                    var t = this.schedule.getPostRoll();
                    t && ("nonlinear" !== t._type && (this.startBlocking(),
                    this.triggerAdBreakEvents(t, "post")),
                    this.playPostroll(e))
                }
            }
        }, {
            key: "getAdIds",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = t.tagIndex
                  , r = t.podIndex
                  , a = e.adRequestIds && void 0 !== i ? e.adRequestIds[i] : null;
                if (!a) {
                    var n = r || e._adPodIndex || 0
                      , s = "p".concat(n, "w").concat(e._waterfallIndex || 0);
                    "p0w0" === s ? a = e.adBreakId : (e.adPlayIds = e.adPlayIds || {},
                    a = e.adPlayIds[s] = e.adPlayIds[s] || this.player.utils.genId(12))
                }
                return {
                    adBreakId: e.adBreakId,
                    adPlayId: a
                }
            }
        }, {
            key: "loadPreroll",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.prerollPromise || (this.prerollPromise = this.bidsPromise.then((function() {
                    if (!e.isDestroyed()) {
                        var i = e.schedule.getPreRoll(t.startTime);
                        return i ? (i._position = "pre",
                        i._preload = !0,
                        e.loadAd(i, t)) : void 0
                    }
                }
                ))),
                this.prerollPromise
            }
        }, {
            key: "loadMidrollAtIndex",
            value: function(e, t) {
                var i = this;
                return this.midrollPromise[e] || (this.midrollPromise[e] = this.bidsPromise.then((function() {
                    if (!i.isDestroyed()) {
                        var r = i.schedule.getMidRollAtIndex(e);
                        return r ? (r._position = "mid",
                        r._preload = !0,
                        i.loadAd(r, t)) : void 0
                    }
                }
                ))),
                this.midrollPromise[e]
            }
        }, {
            key: "loadPostroll",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.postrollPromise || (this.postrollPromise = this.bidsPromise.then((function() {
                    if (!e.isDestroyed()) {
                        var i = e.schedule.getPostRoll(t.startTime);
                        return i ? (i._position = "post",
                        i._preload = !0,
                        e.loadAd(i, t)) : void 0
                    }
                }
                ))),
                this.postrollPromise
            }
        }, {
            key: "playPreroll",
            value: function(e) {
                var t = this;
                this.prerollPromise ? this.playPreloadedPromise(this.prerollPromise, e) : this.bidsPromise.then((function() {
                    if (!t.isDestroyed()) {
                        var i = t.schedule.getPreRoll();
                        i ? (i._position = "pre",
                        t.startAdBreak(i, e)) : t.stopBlocking()
                    }
                }
                ))
            }
        }, {
            key: "playMidrollAtIndex",
            value: function(e) {
                var t = this;
                this.midrollPromise[e] ? this.playPreloadedPromise(this.midrollPromise[e]) : this.bidsPromise.then((function() {
                    var i = t.schedule.getMidRollAtIndex(e);
                    i && (i._position = "mid",
                    t.startAdBreak(i))
                }
                ))
            }
        }, {
            key: "playPostroll",
            value: function(e) {
                var t = this;
                this.postrollPromise ? this.playPreloadedPromise(this.postrollPromise) : this.bidsPromise.then((function() {
                    var i = t.schedule.getPostRoll();
                    i && (i._position = "post",
                    t.startAdBreak(i, e))
                }
                ))
            }
        }, {
            key: "isDestroyed",
            value: function() {
                return null === this.player
            }
        }, {
            key: "destroy",
            value: function() {
                this.destroyBids(),
                this.player.off(null, null, this),
                this.player = null
            }
        }, {
            key: "destroyBids",
            value: function() {
                this.bids.forEach((function(e) {
                    return e.stop()
                }
                )),
                this.bidsPromises = [],
                this.bids = []
            }
        }, {
            key: "enqueueAdEvent",
            value: function(e, t, i) {
                this._events.push({
                    type: e,
                    event: t
                }),
                i.preload || this.dequeueAdEvents()
            }
        }, {
            key: "dequeueAdEvents",
            value: function() {}
        }, {
            key: "triggerAdBreakEvents",
            value: function() {}
        }, {
            key: "startBlocking",
            value: function() {}
        }, {
            key: "stopBlocking",
            value: function() {}
        }, {
            key: "loadAd",
            value: function() {}
        }, {
            key: "playPreloadedPromise",
            value: function() {}
        }, {
            key: "startAdBreak",
            value: function() {}
        }]),
        e
    }()
      , He = function() {
        function e(i, r, a, s, o, l, d) {
            t(this, e),
            n(this, i.Events),
            this.player = i,
            this.startingSize = i.getWidth() * i.getHeight();
            var u = l.allowedOmidVendors;
            try {
                var c = [];
                s.forEach((function(e) {
                    var t = e.javaScriptResource
                      , i = e.vendor
                      , a = e.verificationParameters
                      , n = e.trackers;
                    u.length && u.indexOf(i) < 0 ? d("verificationNotExecuted", n.verificationNotExecuted, {
                        "[REASON]": 1
                    }) : t ? t.url ? c.push(new r.VerificationScriptResource(t.url,i,a,l.omidAccessMode)) : d("verificationNotExecuted", n.verificationNotExecuted, {
                        "[REASON]": 3
                    }) : d("verificationNotExecuted", n.verificationNotExecuted, {
                        "[REASON]": 2
                    })
                }
                ));
                var h = new r.Partner("JWPlayer",i.version)
                  , p = new r.Context(h,c,location.href);
                p.setVideoElement(a),
                p.underEvaluation = !0,
                p.setServiceWindow(window);
                var v = this.adSession = new r.AdSession(p);
                if (!v.isSupported())
                    return;
                this.adEvents = new r.AdEvents(v),
                this.mediaEvents = new r.MediaEvents(v),
                o && v.setCreativeType("video"),
                v.start()
            } catch (e) {
                return null
            }
        }
        return r(e, [{
            key: "resetResizeTimeout",
            value: function() {
                var e = this;
                clearTimeout(this.resizeTimer),
                this.isFullscreen || (this.resizeTimer = setTimeout((function() {
                    if (e.mediaEvents) {
                        var t = e.player.getWidth()
                          , i = e.player.getHeight();
                        t * i > e.startingSize ? e.mediaEvents.playerStateChange("expanded") : t * i < e.startingSize ? e.mediaEvents.playerStateChange("collapsed") : e.mediaEvents.playerStateChange("normal")
                    }
                }
                ), 250))
            }
        }, {
            key: "trackEvent",
            value: function(e) {
                var t, i;
                if (this.adEvents && this.mediaEvents)
                    try {
                        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
                            a[n - 1] = arguments[n];
                        switch (e) {
                        case "mediaLoaded":
                            this.adEvents.loaded();
                            break;
                        case "click":
                            this.mediaEvents.adUserInteraction("click");
                            break;
                        case "close":
                            this.finishSession();
                            break;
                        case "complete":
                            this.mediaEvents.complete(),
                            this.finishSession();
                            break;
                        case "firstQuartile":
                            this.mediaEvents.firstQuartile();
                            break;
                        case "fullscreen":
                            this.isFullscreen = a[0],
                            this.resetResizeTimeout(),
                            this.isFullscreen && this.mediaEvents.playerStateChange("fullscreen");
                            break;
                        case "impression":
                            (t = this.mediaEvents).start.apply(t, a),
                            this.adEvents.impressionOccurred(),
                            this.startingSize = this.player.getWidth() * this.player.getHeight(),
                            this.isFullscreen = this.player.getFullscreen();
                            break;
                        case "midpoint":
                            this.mediaEvents.midpoint();
                            break;
                        case "mute":
                            this.mediaEvents.volumeChange(0);
                            break;
                        case "pause":
                            this.mediaEvents.pause();
                            break;
                        case "resize":
                            this.resetResizeTimeout();
                            break;
                        case "resume":
                            this.mediaEvents.resume();
                            break;
                        case "skip":
                            this.mediaEvents.skipped(),
                            this.finishSession();
                            break;
                        case "thirdQuartile":
                            this.mediaEvents.thirdQuartile();
                            break;
                        case "unmute":
                            this.mediaEvents.volumeChange(this.player.getVolume() / 100);
                            break;
                        case "volume":
                            (i = this.mediaEvents).volumeChange.apply(i, a);
                            break;
                        case "bufferStart":
                            this.mediaEvents.bufferStart();
                            break;
                        case "bufferFinish":
                            this.mediaEvents.bufferFinish()
                        }
                    } catch (e) {
                        console.warn(e),
                        this.adEvents = this.mediaEvents = null
                    }
            }
        }, {
            key: "finishSession",
            value: function() {
                this.adSession && (this.adSession.finish(),
                this.adSession = null,
                this.adEvents = null,
                this.mediaEvents = null)
            }
        }]),
        e
    }()
      , De = null
      , qe = null;
    function Ne(e) {
        return function(e) {
            if (qe)
                return qe;
            var t = ["//", "ssl.p.jwpcdn.com/player/lib/omid/v/1.3.15/omweb-v1.js"];
            "file:" === document.location.protocol && t.unshift("https:");
            var i = new (0,
            e.scriptloader)(t.join(""));
            return qe = i.load()
        }(e).then((function() {
            return function(e) {
                if (De)
                    return De;
                if (window.OmidSessionClient && OmidSessionClient.default)
                    return De = Promise.resolve();
                var t = ["//", "ssl.p.jwpcdn.com/player/lib/omid/v/1.3.15/omid-session-client-v1.js"];
                "file:" === document.location.protocol && t.unshift("https:");
                var i = new (0,
                e.scriptloader)(t.join(""));
                return De = i.load()
            }(e)
        }
        ))
    }
    var Fe = [];
    var Ue = function() {
        function e(i, r, a, n, s, o) {
            var l = this;
            t(this, e);
            var d = r || {};
            this.ad = i,
            this.map = d,
            this.omidDeferredEvents = [],
            o && i.adVerifications && "disabled" !== s.omidSupport && (o.on("mediaLoaded", (function() {
                o.off(null, null, l),
                l.trackOmidEvent("mediaLoaded")
            }
            ), this),
            Ne(n.utils).then((function() {
                var e = window.OmidSessionClient.default
                  , t = o.getMediaElement();
                l.omidTracker = new He(n,e,t,i.adVerifications,i.linear,s,l.trackPingsByUrl.bind(l)),
                l.omidDeferredEvents.forEach((function(e) {
                    var t = e.type
                      , i = e.args;
                    l.trackOmidEvent.apply(l, [t].concat(p(i)))
                }
                )),
                l.omidDeferredEvents = []
            }
            ))),
            this.debugTrackFn = a,
            this.trackerPlayerUtils = function(e) {
                return {
                    getPosition: function() {
                        return e.getPosition()
                    },
                    getFile: function() {
                        return e.getPlaylistItem().file
                    },
                    getPlacement: function() {
                        return V(e.getConfig())
                    },
                    getUserAgent: function() {
                        return navigator.userAgent
                    }
                }
            }(n),
            this.trackingFilter = s.trackingFilter,
            this.lastQuartile = 0,
            this.progressEvents = [],
            this.breakStarted = !1,
            this.started = !1,
            this.firedError = !1,
            this.hasComp = !1,
            this.buffering = !1,
            Object.keys(d).forEach((function(e) {
                if (d.hasOwnProperty(e) && 0 === e.indexOf("progress")) {
                    var t = "".concat(e.split("_")[1])
                      , i = {
                        key: e,
                        offset: t,
                        tracked: !1,
                        percentage: !1
                    };
                    /^\d+%$/.test(t) ? (i.percentage = !0,
                    i.offset = parseFloat(t)) : i.offset = n.utils.seconds(t),
                    l.progressEvents.push(i)
                }
            }
            )),
            this.setFactories()
        }
        return r(e, [{
            key: "getUrls",
            value: function(e) {
                return this.map.hasOwnProperty(e) ? this.map[e] : []
            }
        }, {
            key: "addUrl",
            value: function(e, t) {
                this.map.hasOwnProperty(e) || (this.map[e] = []),
                this.map[e].push(t)
            }
        }, {
            key: "trackPingsByUrl",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , r = this.trackingFilter
                  , a = []
                  , n = []
                  , s = [];
                if (t.length) {
                    i = this.replaceMacros(i),
                    t.forEach((function(e) {
                        if (e) {
                            if (Object.keys(i).forEach((function(t) {
                                e = e.replace(t, i[t])
                            }
                            )),
                            r && !1 === r(e))
                                return void n.push(e);
                            var t = new Image;
                            t.src = e,
                            a.push(e),
                            s.push(t)
                        }
                    }
                    )),
                    Array.prototype.push.apply(Fe, s);
                    for (var o = Fe.length; o-- && (Fe[o].width || Fe[o].complete); )
                        Fe.length = o
                }
                "function" == typeof this.debugTrackFn && this.debugTrackFn({
                    type: "ping",
                    data: {
                        pingType: e,
                        urls: a,
                        filteredUrls: n,
                        images: s
                    }
                })
            }
        }, {
            key: "trackPings",
            value: function(e, t) {
                var i = this.getUrls(e);
                this.trackPingsByUrl(e, i, t)
            }
        }, {
            key: "trackOmidEvent",
            value: function(e) {
                for (var t, i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
                    r[a - 1] = arguments[a];
                this.omidTracker ? (t = this.omidTracker).trackEvent.apply(t, [e].concat(r)) : this.omidDeferredEvents.push({
                    type: e,
                    args: r
                })
            }
        }, {
            key: "replaceMacros",
            value: function(e) {
                var t, i, r, a, n, s, o, l = z, d = l.gdprApplies, u = l.consentData;
                return e["[ADSERVINGID]"] = encodeURIComponent(this.ad.adServingId || ""),
                e["[ASSETURI]"] = encodeURIComponent(this.trackerPlayerUtils.getFile()),
                e["[CACHEBUSTING]"] = Math.random().toString().slice(2, 10),
                e["[CONTENTPLAYHEAD]"] = encodeURIComponent((t = this.trackerPlayerUtils.getPosition(),
                i = ("0" + Math.floor(t / 3600)).slice(-2),
                r = ("0" + Math.floor((t - 3600 * i) / 60)).slice(-2),
                i + ":" + r + ":" + ("0" + Math.floor(t - 3600 * i - 60 * r)).slice(-2) + "." + (t % 1).toFixed(3).toString().slice(2, 5))),
                e["[DEVICEUA]"] = encodeURIComponent(this.trackerPlayerUtils.getUserAgent()),
                e["[GDPRCONSENT]"] = u,
                e["[PAGEURL]"] = encodeURIComponent(M().url),
                e["[PLACEMENTTYPE]"] = this.trackerPlayerUtils.getPlacement(),
                e["[REGULATIONS]"] = d ? "gdpr" : "",
                e["[TIMESTAMP]"] = encodeURIComponent((a = new Date,
                n = a.getTime(),
                s = a.getTimezoneOffset() / 60,
                o = 6e4 * a.getTimezoneOffset(),
                new Date(n - o).toISOString().slice(0, -1) + (s > 0 ? "-" : "+") + ("0" + s).slice(-2))),
                e
            }
        }, {
            key: "start",
            value: function() {
                this.started = !0,
                this.trackPings("start")
            }
        }, {
            key: "breakStart",
            value: function() {
                this.breakStarted = !0,
                this.trackPings("breakStart")
            }
        }, {
            key: "time",
            value: function(e, t) {
                if (!(t <= 1)) {
                    for (var i = (4 * e + .05) / t | 0; i > this.lastQuartile && this.lastQuartile < 3; )
                        this.lastQuartile++,
                        1 === this.lastQuartile ? (this.trackPings("firstQuartile"),
                        this.trackOmidEvent("firstQuartile")) : 2 === this.lastQuartile ? (this.trackPings("midpoint"),
                        this.trackOmidEvent("midpoint")) : 3 === this.lastQuartile && (this.trackPings("thirdQuartile"),
                        this.trackOmidEvent("thirdQuartile"));
                    this.trackProgress(e, t)
                }
            }
        }, {
            key: "trackProgress",
            value: function(e, t) {
                for (var i = this.progressEvents.length; i--; ) {
                    var r = this.progressEvents[i];
                    if (!r.tracked) {
                        var a = r.offset;
                        r.percentage && (a = t * a / 100),
                        e >= a && (r.tracked = !0,
                        this.trackPings(r.key))
                    }
                }
            }
        }, {
            key: "error",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 900;
                this.firedError = !0;
                var t = {};
                t["[ERRORCODE]"] = e,
                this.trackPings("error", t)
            }
        }, {
            key: "factory",
            value: function(e) {
                var t = this;
                return function() {
                    if (t.trackPings(e),
                    "fullscreen" !== e) {
                        for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++)
                            r[a] = arguments[a];
                        t.trackOmidEvent.apply(t, [e].concat(r))
                    }
                }
            }
        }, {
            key: "setFactories",
            value: function() {
                this.creativeView = this.factory("creativeView"),
                this.click = this.factory("click"),
                this.skip = this.factory("skip"),
                this.complete = this.factory("complete"),
                this.pause = this.factory("pause"),
                this.resume = this.factory("resume"),
                this.mute = this.factory("mute"),
                this.unmute = this.factory("unmute"),
                this.fullscreen = this.factory("fullscreen"),
                this.expand = this.factory("expand"),
                this.collapse = this.factory("collapse"),
                this.acceptInvitation = this.factory("acceptInvitation"),
                this.close = this.factory("close"),
                this.rewind = this.factory("rewind"),
                this.impression = this.factory("impression"),
                this.viewable = this.factory("viewable"),
                this.notViewable = this.factory("notviewable"),
                this.breakEnd = this.factory("breakEnd")
            }
        }]),
        e
    }()
      , Qe = function() {
        function i(e, r, a, s, o) {
            t(this, i),
            this._scheduledAd = e,
            this.player = r,
            this.options = a,
            this.item = a.item,
            this.params = a.params || {},
            this.wrapperOptions = s || {},
            "boolean" != typeof this.wrapperOptions.followAdditionalAds && (this.wrapperOptions.followAdditionalAds = !0),
            "boolean" != typeof this.wrapperOptions.allowMultipleAds && (this.wrapperOptions.allowMultipleAds = !0),
            this.debugTrackFn = o,
            n(this, r.Events),
            this._history = [],
            this.loadedAds = [],
            this.parser = null,
            this.promise = null,
            this.xmlhttp = null,
            this.wrappedTags = null,
            this.options.isPodItemLoader || (e.adPlayIds = {})
        }
        return r(i, [{
            key: "load",
            value: function(e) {
                var t = this;
                if (null === this.promise) {
                    this._history.push(e);
                    var i = this.options.requestFilter;
                    this.promise = new Promise((function(r, a) {
                        t.xmlhttp = t.player.utils.ajax({
                            url: e,
                            withCredentials: t.params.withCredentials,
                            retryWithoutCredentials: !0,
                            requireValidXML: !0,
                            timeout: t._scheduledAd.requestTimeout,
                            requestFilter: i
                        }, r, (function(e, t, i, r) {
                            return a(r)
                        }
                        ))
                    }
                    )).catch((function(i) {
                        if (null !== t.player)
                            throw t.ajaxError(i, e)
                    }
                    )).then((function(i) {
                        if (null !== t.player) {
                            var r = i.responseXML || i.responseText;
                            return t.trigger("adLoadedXML", {
                                tag: e,
                                xml: r
                            }),
                            t.parseXMLString(r, e)
                        }
                    }
                    ))
                }
                return this.promise
            }
        }, {
            key: "destroy",
            value: function() {
                var e;
                (e = this.xmlhttp) && (e.onload = null,
                e.onreadystatechange = null,
                e.onerror = null,
                e.abort && e.abort()),
                this.player = null,
                this.xmlhttp = null
            }
        }, {
            key: "scheduledAd",
            value: function() {
                return this._scheduledAd
            }
        }, {
            key: "allAds",
            value: function() {
                return this.loadedAds
            }
        }, {
            key: "podMultipleVastLoaders",
            value: function(e) {
                var t = this
                  , i = e.map((function(e) {
                    return e.then((function(e) {
                        var i = e.adPod();
                        if (i.length)
                            return i;
                        var r = e.adBuffet();
                        return r.length ? [r[0]] : Promise.reject({
                            vloader: t,
                            message: "No compatible ad"
                        })
                    }
                    )).catch((function(e) {
                        return {
                            error: e
                        }
                    }
                    ))
                }
                ));
                return Promise.all(i).then((function(e) {
                    var i = 0
                      , r = e.reduce((function(e, r, a) {
                        if (r.error)
                            return r.error.tagIndex = a,
                            t.trigger("adPodError", r.error),
                            e;
                        if (r.length && 0 !== a) {
                            var n = "p".concat(i, "w").concat(t._scheduledAd._waterfallIndex);
                            t._scheduledAd.adPlayIds[n] = t._scheduledAd.adRequestIds[a]
                        }
                        return r.forEach((function(t) {
                            t.sequence = ++i,
                            e.push(t)
                        }
                        )),
                        e
                    }
                    ), []);
                    return r.length ? (t.loadedAds = r,
                    t) : null
                }
                ))
            }
        }, {
            key: "adPod",
            value: function() {
                var e = [];
                return this.loadedAds.forEach((function(t) {
                    t.sequence && e.push(t)
                }
                )),
                e.sort((function(e, t) {
                    return e.sequence - t.sequence
                }
                )),
                e
            }
        }, {
            key: "adBuffet",
            value: function() {
                var e = [];
                return this.loadedAds.forEach((function(t) {
                    t.sequence || e.push(t)
                }
                )),
                e
            }
        }, {
            key: "parseXMLString",
            value: function(t, r) {
                var a = this;
                return null === this.parser && (this.parser = new ge(null,this.player.utils)),
                new Promise((function(i) {
                    var r, n = (r = t,
                    ("object" === ("undefined" == typeof Node ? "undefined" : e(Node)) ? r instanceof Node : r && "object" === e(r) && "number" == typeof r.nodeType && "string" == typeof r.nodeName) ? t : a.player.utils.parseXML(t));
                    if (null === n) {
                        throw {
                            message: "Invalid XML",
                            code: 100
                        }
                    }
                    return i(a.parser.parse(n, a.xmlhttp))
                }
                )).catch((function(e) {
                    if (null !== a.player) {
                        var t = e.code || 900
                          , i = e.adErrorCode || 1e4 + t;
                        throw a.sendErrorEvent(e.message, t, i, r)
                    }
                }
                )).then((function(e) {
                    if (null === a.player)
                        return null;
                    if (0 === e.length)
                        throw a.sendErrorEvent("No ads", 303, 10303, r);
                    var t = e.filter((function(e) {
                        return !e.sequence
                    }
                    )).map((function(e) {
                        return e._currentTag = r,
                        e
                    }
                    ));
                    a.wrapperOptions.allowMultipleAds ? a.loadedAds = e : a.loadedAds = t,
                    a.options.wrapper = a.options.wrapper || [];
                    var n = a.options
                      , s = n.adsystem
                      , o = n.dealId;
                    s && a.options.wrapper.push(s),
                    o && (a.options.wrapperDealId = o),
                    a.options.adsystem = a.loadedAds[0].adsystem,
                    a.options.dealId = a.loadedAds[0].dealId;
                    var l = [];
                    return e.forEach((function(e, r) {
                        if (e.wrappedURI) {
                            if (!1 === a.wrapperOptions.followAdditionalWrappers)
                                return;
                            a.options.wrappedTags = a.options.wrappedTags || [a._scheduledAd._currentTag],
                            a.options.wrappedTags.push(e.wrappedURI);
                            var n = new i(a._scheduledAd,a.player,a.options,{
                                fallbackOnNoAd: e.fallbackOnNoAd,
                                allowMultipleAds: e.allowMultipleAds,
                                followAdditionalWrappers: e.followAdditionalWrappers
                            },a.debugTrackFn);
                            n.on("adLoadedXML", (function(e) {
                                a.trigger("adLoadedXML", e)
                            }
                            ), a);
                            var s = ae(e.wrappedURI, a.player, a.item, "vast", a.params, e).then((function(e) {
                                return n.load(e)
                            }
                            )).then((function(t) {
                                n.off("adLoadedXML", null, a);
                                var i, r, s, o = (i = e,
                                r = t.allAds(),
                                s = [],
                                r.forEach((function(e) {
                                    var t, r;
                                    i.companions && (e.companions = (e.companions ? e.companions : []).concat(i.companions)),
                                    i.trackers && (e.trackers = (t = e.trackers,
                                    r = i.trackers,
                                    t = t || {},
                                    Object.keys(r).forEach((function(e) {
                                        var i = r[e];
                                        t[e] ? t[e] = t[e].concat(i) : t[e] = i
                                    }
                                    )),
                                    t)),
                                    i.sequence && (e.sequence = i.sequence),
                                    i._currentTag && (e._currentTag = i._currentTag),
                                    i.adVerifications && (e.adVerifications = (e.adVerifications ? e.adVerifications : []).concat(i.adVerifications)),
                                    s.push(e)
                                }
                                )),
                                s), l = a.loadedAds.indexOf(e);
                                Array.prototype.splice.apply(a.loadedAds, [l, 1].concat(o))
                            }
                            )).catch((function(i) {
                                n.off("adLoadedXML", null, a);
                                var s = a.sendAdpodErrorEvent(i, e, r)
                                  , o = e.fallbackOnNoAd && e.sequence && t.length
                                  , l = a.loadedAds.indexOf(e);
                                if (o)
                                    return e.loadError = s,
                                    void i.vloader.destroy();
                                if (a.loadedAds.splice(l, 1),
                                i.vloader.destroy(),
                                "adPodError" !== s.type)
                                    throw s;
                                a.trigger("adPodError", s)
                            }
                            ));
                            l.push(s)
                        } else
                            a.options.wrapper.length && (e.wrapper = a.options.wrapper,
                            e.wrappedTags = a.options.wrappedTags,
                            e.dealId = a.options.wrapperDealId)
                    }
                    )),
                    Promise.all(l)
                }
                )).then((function() {
                    if (null === a.player)
                        return null;
                    var e = a.loadedAds.filter((function(e) {
                        return !e.sequence
                    }
                    ));
                    a.loadedAds.forEach((function(t, i) {
                        if (t.loadError)
                            if (e.length) {
                                var r = a.loadedAds[i + 1]
                                  , s = r && !r.sequence ? r : e[0];
                                a.loadedAds[i] = n({}, s, {
                                    sequence: t.sequence
                                })
                            } else
                                a.trigger("adPodError", t.loadError)
                    }
                    ));
                    var t = a.loadedAds.slice(0)
                      , i = t.length;
                    t.forEach((function(e) {
                        e.media && e.media.length || t.length--
                    }
                    ));
                    var r = 0 === i
                      , s = t.length !== i;
                    if (r || s)
                        throw a.sendErrorEvent("Ad Tag Empty", 101, 10101, a._history[a._history.length - 1]);
                    return a
                }
                ))
            }
        }, {
            key: "ajaxError",
            value: function(e, t) {
                if (this.player.getAdBlock())
                    return this.sendErrorEvent("Ad playback blocked by an ad blocker", 900, 60003, t);
                var i = e.code;
                if (601 === i || 602 === i)
                    return this.sendErrorEvent("Invalid XML", 100, 10100, t);
                var r = this.options.wrappedTags && this.options.wrappedTags.length
                  , a = r ? 301 : 900
                  , n = r ? 10301 : 60006;
                return this.sendErrorEvent(e.message || "Error loading file", a, n, t)
            }
        }, {
            key: "firstUrl",
            value: function() {
                return this._history && this._history.length ? this._history[0] : ""
            }
        }, {
            key: "sendAdpodErrorEvent",
            value: function(e, t, i) {
                var r = e.message
                  , a = e.code
                  , n = e.adErrorCode
                  , s = e.url;
                if (1 === this.loadedAds.length)
                    return this.sendErrorEvent(r, a, n, s, i);
                var o = {
                    message: r,
                    code: a,
                    adErrorCode: n,
                    podIndex: i,
                    vloader: this,
                    tag: this.firstUrl() || s,
                    type: "adPodError"
                };
                return this.trackError(o, t),
                this.wrappedTags = s,
                o
            }
        }, {
            key: "sendErrorEvent",
            value: function(e, t, i, r, a) {
                var n = {
                    message: e,
                    code: t,
                    adErrorCode: i,
                    podIndex: a,
                    vloader: this,
                    tag: this.firstUrl() || r,
                    adsystem: this.options.adsystem || ""
                };
                return this.options.wrappedTags && (n.wrapperAdSystem = this.options.wrapper || "",
                n.wrappedTags = this.options.wrappedTags),
                this.trackError(n),
                n
            }
        }, {
            key: "trackError",
            value: function(e, t) {
                var i = e.vloader.allAds();
                if (i && i.length) {
                    var r = t || i[0];
                    if (r) {
                        var a = r.trackers;
                        if (a && a.error)
                            new Ue(r,a,this.debugTrackFn,this.player,this.options).error(e.code)
                    }
                }
            }
        }]),
        i
    }();
    var Xe = function() {
        function e(i, r, a, s, o) {
            var l = this;
            t(this, e),
            this.player = i,
            this.state = i.state,
            this.vpaidURL = a,
            this.adTag = s,
            this.adParams = o.adParams,
            this.vpaidControls = o.vpaidControls,
            this.remainingTimeInterval = null,
            this.type = "vpaid",
            this.instream = r || i.createInstream(),
            this.vpaidState = {
                linear: !1,
                expanded: !1,
                remainingTime: -1
            },
            this.paused = !1,
            n(this, i.Events),
            this.setMuteCallback = function() {
                l.handleMute ? l.setMute() : l.handleMute = !0
            }
            ,
            this.playerContainer = this.player.getContainer(),
            o.adOptOut ? setTimeout((function() {
                l.sendEvent("error", {
                    message: "Conditional ad rejected",
                    code: 408
                })
            }
            ), 0) : this.iframe = function(e, t, i, r) {
                var a = document.createElement("iframe");
                a.setAttribute("allow", "autoplay"),
                a.src = "javascript:false",
                a.classList.add("jw-vpaid-iframe"),
                a.scrolling = "no",
                i.querySelector(".jw-media").appendChild(a);
                var n = a.contentWindow.document;
                return n.open().write("\n    <body onload=\"\n        var js = document.createElement('script');\n        js.src = '".concat(t, "';\n        js.addEventListener('load', function() { window.myCallback(); });\n        document.body.appendChild(js);\"\n    style=\"margin: 0\">")),
                a.contentWindow.myCallback = r,
                n.close(),
                a
            }(i.utils, this.vpaidURL, this.playerContainer, this.callback.bind(this))
        }
        return r(e, [{
            key: "sendEvent",
            value: function(e, t) {
                (t = t || {}).tag || (t.tag = this.adTag),
                this.trigger(e, t)
            }
        }, {
            key: "sendTimeEvent",
            value: function(e, t, i) {
                var r = t.getAdDuration()
                  , a = t.getAdRemainingTime()
                  , s = n({
                    duration: r
                }, i);
                this.sendEvent(e, s),
                a > 0 && (s.position = r - a,
                this.trigger("time", s))
            }
        }, {
            key: "handleQuartile",
            value: function(e, t) {
                this.sendTimeEvent("quartile", e, {
                    quartile: t
                })
            }
        }, {
            key: "genEvent",
            value: function(e) {
                var t = this;
                return function(i) {
                    t.on(e, i)
                }
            }
        }, {
            key: "setMute",
            value: function() {
                var e = 0 === this.vpaidAd.getAdVolume();
                this.player.getMute() !== e && this.player.setMute(e)
            }
        }, {
            key: "prepareNonlinearAd",
            value: function() {
                if (this.player.utils.style(this.iframe, {
                    height: 150
                }),
                this.iframe.classList.add("jw-vpaid-non-linear"),
                this.resize(null, 150),
                this.instream) {
                    this.instream.noResume = !0,
                    this.instream.applyProviderListeners(null),
                    this.instream.destroy(),
                    this.instream = null;
                    var e = this.playerContainer.querySelector(".jw-media")
                      , t = e.querySelector("video,audio");
                    e.insertBefore(t, this.iframe),
                    t.play()
                }
            }
        }, {
            key: "progressInterval",
            value: function(e) {
                var t = this;
                if (clearInterval(this.remainingTimeInterval),
                e && e.getAdRemainingTime) {
                    var i = -1;
                    this.remainingTimeInterval = setInterval((function() {
                        if (!t.paused) {
                            var r = e.getAdRemainingTime();
                            isNaN(r) || r <= 0 || i === r || (i = r,
                            t.sendTimeEvent("remainingTimeChange", e, {
                                remainingTime: r
                            }))
                        }
                    }
                    ), 250)
                }
            }
        }, {
            key: "genListeners",
            value: function(e) {
                var t = this;
                return {
                    AdLoaded: function() {
                        e.setAdVolume(t.getPlayerVolume()),
                        e.startAd()
                    },
                    AdStarted: function() {
                        var i = e.getAdDuration ? e.getAdDuration() : 0
                          , r = !e.getAdLinear || e.getAdLinear()
                          , a = r ? "linear" : "nonlinear";
                        if (r) {
                            t.instream = t.instream || t.player.createInstream(),
                            t.vpaidControls || t.instream.hide();
                            var n = t.instream.getMediaElement();
                            t.player.getPip() && t.player.requestPip(n),
                            t.progressInterval(e)
                        } else
                            t.prepareNonlinearAd();
                        t.sendEvent("impression", {
                            linear: a,
                            duration: i
                        }),
                        t.sendEvent("play", {
                            oldstate: "buffering",
                            newstate: "playing",
                            linear: a
                        }),
                        t.handleMute = !0,
                        e.subscribe(t.setMuteCallback, "AdVolumeChange", e)
                    },
                    AdVideoStart: function() {
                        t.sendEvent("started")
                    },
                    AdStopped: function() {
                        t.sendEvent("stopped")
                    },
                    AdPaused: function() {
                        t.paused || (t.paused = !0,
                        t.sendEvent("pause", {
                            newstate: "paused",
                            oldstate: "playing"
                        }))
                    },
                    AdPlaying: function() {
                        if (t.paused) {
                            var i = !e.getAdLinear || e.getAdLinear() ? "linear" : "nonlinear";
                            t.paused = !1,
                            t.sendEvent("play", {
                                newstate: "playing",
                                oldstate: "paused",
                                linear: i
                            })
                        }
                    },
                    AdLinearChange: function() {
                        !e.getAdLinear || e.getAdLinear() ? (t.player.utils.style(t.iframe, {
                            height: "100%"
                        }),
                        t.player.off(null, null, t),
                        t.instream = t.instream || t.player.createInstream(),
                        t.instream.init(),
                        t.vpaidControls || t.instream.hide()) : t.prepareNonlinearAd()
                    },
                    AdDurationChange: function() {
                        t.sendTimeEvent("remainingTimeChange", e, {
                            isDurationChange: !0,
                            remainingTime: e.getAdRemainingTime()
                        })
                    },
                    AdRemainingTimeChange: function() {
                        t.paused || t.sendTimeEvent("remainingTimeChange", e, {
                            remainingTime: e.getAdRemainingTime()
                        })
                    },
                    AdExpandedChange: function() {
                        t.sendEvent("expandedChange", {
                            expanded: e.getAdExpanded()
                        })
                    },
                    AdSkippableStateChange: function() {
                        t.sendEvent("skippableStateChange", {
                            skippable: e.getAdSkippableState()
                        })
                    },
                    AdSkipped: function() {
                        t.sendEvent("skipped")
                    },
                    AdVideoFirstQuartile: function() {
                        t.handleQuartile(e, 1)
                    },
                    AdVideoMidpoint: function() {
                        t.handleQuartile(e, 2)
                    },
                    AdVideoThirdQuartile: function() {
                        t.handleQuartile(e, 3)
                    },
                    AdVideoComplete: function() {
                        t.sendEvent("complete")
                    },
                    AdUserClose: function() {
                        t.sendEvent("close")
                    },
                    AdClickThru: function(e, i, r) {
                        t.sendEvent("click", {
                            id: i,
                            url: e,
                            playerHandles: r
                        })
                    },
                    AdError: function(e) {
                        var i = function(e) {
                            if (e) {
                                var t = e.match(/\b(?:[34])[0-9]{2}\b/);
                                if (t)
                                    return parseInt(t[0], 10);
                                if (e.match(/timeout/i))
                                    return e.match(/vpaid|vast/i) ? 301 : 402;
                                if (e.match(/found/i))
                                    return 401;
                                if (e.match(/supported/i))
                                    return 403;
                                if (e.match(/(?:displaying|media file)/i))
                                    return 405
                            }
                            return 901
                        }(e);
                        t.sendEvent("error", {
                            message: e,
                            code: i,
                            adErrorCode: 5e4 + i
                        })
                    }
                }
            }
        }, {
            key: "callback",
            value: function() {
                try {
                    this.vpaidAd = this.iframe.contentWindow.getVPAIDAd();
                    var e = this.vpaidAd.handshakeVersion("2.0");
                    if (parseFloat(e) < 1)
                        throw new Error("Invalid vpaid version in handshake")
                } catch (e) {
                    return void this.sendEvent("error", {
                        message: e.message || "VPAID general error",
                        code: 901,
                        adErrorCode: 51901
                    })
                }
                var t = this.vpaidAd
                  , i = this.genListeners(t);
                Object.keys(i).forEach((function(e) {
                    t.subscribe(i[e], e, t)
                }
                )),
                this.listeners = i;
                var r = {
                    AdParameters: this.adParams
                }
                  , a = this.iframe.contentWindow.document.createElement("div");
                a.className = "jw-vpaid-wrapper",
                a.style.height = "100%",
                this.iframe.contentWindow.document.body.appendChild(a),
                this.vpaidURL.indexOf("//imasdk.googleapis.com/js/sdkloader/vpaid_adapter.js") >= 0 && (this.iframe.contentWindow.HTMLVideoElement = HTMLVideoElement);
                var n = {
                    videoSlot: this.instream.getMediaElement(),
                    slot: a
                };
                t.initAd(this.player.getWidth(), this.player.getHeight(), "normal", 1e3, r, n),
                t.setAdVolume(this.getPlayerVolume())
            }
        }, {
            key: "play",
            value: function() {
                this.vpaidAd.resumeAd()
            }
        }, {
            key: "pause",
            value: function() {
                this.vpaidAd.pauseAd()
            }
        }, {
            key: "skip",
            value: function() {
                return !(!this.vpaidAd.skipAd || !this.vpaidAd.getAdSkippableState()) && (this.vpaidAd.skipAd(),
                !0)
            }
        }, {
            key: "stop",
            value: function() {
                if (this.vpaidAd)
                    try {
                        this.vpaidAd.stopAd()
                    } catch (e) {}
            }
        }, {
            key: "getPlayerVolume",
            value: function() {
                return this.player.getMute() ? 0 : this.player.getVolume() / 100
            }
        }, {
            key: "setVolume",
            value: function(e) {
                this.handleMute = !1,
                this.vpaidAd.setAdVolume(e / 100)
            }
        }, {
            key: "resize",
            value: function(e, t) {
                if (this.vpaidAd && this.vpaidAd.resizeAd) {
                    var i = this.player.getFullscreen() || document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen ? "fullscreen" : "normal";
                    this.vpaidAd.resizeAd(e || this.player.getWidth(), t || this.player.getHeight(), i)
                }
            }
        }, {
            key: "destroy",
            value: function() {
                var e = this;
                if (this.removeEvents(),
                clearInterval(this.remainingTimeInterval),
                this.vpaidAd)
                    try {
                        var t = this.listeners
                          , i = this.vpaidAd;
                        Object.keys(t).forEach((function(e) {
                            i.unsubscribe(t[e], e, i)
                        }
                        )),
                        i.unsubscribe(this.setMuteCallback, "AdVolumeChange", i)
                    } catch (e) {}
                setTimeout((function() {
                    e.iframe && e.iframe.parentNode && e.iframe.parentNode.removeChild(e.iframe)
                }
                ), 0),
                this.vpaidAd = null,
                this.player = null,
                this.instream = null
            }
        }, {
            key: "removeEvents",
            value: function() {
                this.player && this.player.off(null, null, this),
                this.off()
            }
        }, {
            key: "attachMedia",
            value: function() {}
        }, {
            key: "detachMedia",
            value: function() {}
        }, {
            key: "volume",
            value: function() {}
        }, {
            key: "mute",
            value: function() {}
        }, {
            key: "getState",
            value: function() {
                return this.vpaidState.linear ? this.paused ? "paused" : "playing" : "idle"
            }
        }]),
        e
    }();
    var We = function() {
        function e(i, r, a) {
            t(this, e),
            this.player = i,
            this.icon = r,
            this.div = a;
            var n = this.utils = i.utils;
            this.images = [],
            this.iconContainer = function(e, t) {
                var i = document.createElement("div");
                return i.className = "jw-ad-icon-container",
                t.style(i, e),
                i
            }(r.style, n);
            var s = function(e, t) {
                var i, r = e.resourceSource, a = e.resourceType;
                switch (a) {
                case "iframe":
                    (i = document.createElement("iframe")).src = r,
                    i.scrolling = "no";
                    break;
                case "html":
                    i = document.createElement("div"),
                    t.replaceInnerHtml(i, r);
                    break;
                default:
                    (i = document.createElement("img")).src = r,
                    i.setAttribute("type", a)
                }
                return t.addClass(i, "jw-ad-icon"),
                i
            }(r.resource, n);
            this.iconContainer.appendChild(s),
            a.appendChild(this.iconContainer);
            var o = 1e3 * n.seconds(r.offset);
            o > 0 ? this.showTimeout = setTimeout(this.show.bind(this), o) : this.show(),
            this.ui = new n.UI(this.iconContainer).on("click", this.clickHandler, this)
        }
        return r(e, [{
            key: "clickHandler",
            value: function() {
                this.player.pause({
                    reason: "clickthrough"
                }),
                this.sendPing(this.icon.trackers.iconClick),
                this.utils.openLink(this.icon.clickThrough, "_blank", {
                    rel: "noreferrer"
                })
            }
        }, {
            key: "show",
            value: function() {
                clearTimeout(this.showTimeout),
                this.utils.addClass(this.iconContainer, "jw-ad-icon-active"),
                this.sendPing(this.icon.trackers.iconView),
                this.icon.duration && (this.duration = this.utils.seconds(this.icon.duration),
                this.beginningPosition = this.utils.seconds(this.icon.offset))
            }
        }, {
            key: "updateTime",
            value: function(e) {
                e - this.beginningPosition >= this.duration && this.remove()
            }
        }, {
            key: "sendPing",
            value: function(e) {
                if (e) {
                    var t = this.images
                      , i = new Image;
                    i.src = e;
                    for (var r = t.length; r-- && (t[r].width || t[r].complete); )
                        t.length = r;
                    t.push(i)
                }
            }
        }, {
            key: "remove",
            value: function() {
                clearTimeout(this.showTimeout),
                this.div.contains(this.iconContainer) && this.div.removeChild(this.iconContainer),
                this.ui && (this.ui.destroy(),
                this.ui = null)
            }
        }]),
        e
    }();
    var ze = function() {
        function e(i, r, a) {
            t(this, e),
            this.player = r,
            this.playlistItemManager = a;
            var s = a.adPlayerProperties
              , o = s.staticPlayer
              , l = s.companion
              , d = s.div
              , u = s.optionalParams;
            this.staticPlayer = o,
            this.companion = l,
            this.div = d,
            this.optionalParams = u,
            this.omidSupport = u.omidSupport,
            this.debugTrackFn = u.debugTrackFn,
            this.scheduledAd = i.scheduledAd(),
            this.vastBuffet = i.adBuffet(),
            this.vastAdPod = i.adPod(),
            this.vastAd = this.vastBuffet.length ? this.vastBuffet[0] : null,
            this.adType = null,
            this.vpaidPlayer = null,
            this.instreamPlayer = null,
            this.blockingInstreamPlayer = null,
            this.mediaType = null,
            this.adPodItems = null,
            this.creativeTimeout = null,
            this.vastOptions = null,
            this.duration = 0,
            this.position = 0,
            this.initialIndex = 0,
            this.viewablePlayedTime = 0,
            this.adViewableImpressionHandler = r.utils.noop,
            this.lastPosition = null,
            this.reason = null,
            n(this, r.Events)
        }
        return r(e, [{
            key: "init",
            value: function(e, t) {
                return this.init = function() {
                    throw new Error("Adplayer can only be initialized once")
                }
                ,
                this.blockingInstreamPlayer = e,
                this.reason = t,
                this.prepareAdPod() ? (this.player.on("fullscreen", this.playerFullscreenHandler, this),
                this.player.on("volume", this.playerVolumeHandler, this),
                this.player.on("mute", this.muteHandler, this),
                this.player.on("resize", this.playerResizeHandler, this),
                this.playAd()) : Promise.reject()
            }
        }, {
            key: "prepareAdPod",
            value: function() {
                var e, t = this, i = null, r = 0, a = [];
                if (this.vastAd && (Je(this.vastAd, this.debugTrackFn, this.player, this.optionalParams, this.blockingInstreamPlayer),
                (i = this.prepareAdPodItem(this.vastAd)) && "vpaid" === i.adType && !$e(this.vastAd) && (i = null)),
                this.vastAdPod)
                    for (var n = null, s = 0; s < this.vastAdPod.length; s++) {
                        var o = this.vastAdPod[s];
                        Je(o, this.debugTrackFn, this.player, this.optionalParams, this.blockingInstreamPlayer);
                        var l = this.prepareAdPodItem(o);
                        if (l) {
                            if (n !== l.adType && "instream" === n)
                                break;
                            if (n = l.adType,
                            "vpaid" !== l.adType || $e(o)) {
                                var d = a.length + r === s;
                                l && d && a.push(l)
                            } else
                                r++
                        } else
                            r++
                    }
                return a.length || i ? (a.length ? (e = a,
                this.vastOptions = [],
                e.forEach((function(e) {
                    t.vastOptions.push(t.getInstreamOptions(e.vastAd))
                }
                ))) : (e = i,
                this.vastOptions = this.getInstreamOptions(this.vastAd)),
                this.adPodItems = e,
                !0) : (this.scheduledAd._pod && this.scheduledAd._pod.length || this.adError("No Compatible Creatives", 403),
                !1)
            }
        }, {
            key: "prepareAdPodItem",
            value: function(e) {
                e.tracker.linear = "linear";
                var t = "".concat(e.media[0].adType).toLowerCase() || "instream";
                "vpaid" !== t || $e(e) || (t = "instream");
                var i = {
                    vastAd: e,
                    sources: [],
                    adType: t
                };
                void 0 !== this.scheduledAd.skipoffset && (i.skipoffset = this.scheduledAd.skipoffset);
                var r = e.media
                  , a = {};
                if (r.forEach((function(e, t) {
                    i.sources.push({
                        file: e.file,
                        mimeType: e.type,
                        type: ("" + e.type).replace(/^(?:video|audio)\/(?:x-)?/, ""),
                        id: t
                    }),
                    a[e.file] = {
                        width: e.width || 0,
                        height: e.height || 0,
                        bitrate: e.bitrate || e.maxBitrate,
                        id: t
                    }
                }
                )),
                "instream" === t && (i.sources = function(e) {
                    var t;
                    t = jwplayer.api.availableProviders.filter((function(e) {
                        return "flash" !== e.name
                    }
                    ));
                    var i = e.filter((function(e) {
                        return t.some((function(t) {
                            return t.supports(e)
                        }
                        ))
                    }
                    ))
                      , r = i.filter((function(e) {
                        return "3gpp" !== e.type
                    }
                    ));
                    return r.length ? r : i
                }(i.sources)),
                0 === i.sources.length)
                    return null;
                var n = this.player.getSafeRegion(!1).width
                  , s = this.player.getConfig().bandwidthEstimate || 5e5
                  , o = function() {
                    var e = s / 1e3 * .95
                      , t = i.sources.map((function(e) {
                        return a[e.file]
                    }
                    ))
                      , r = t.filter((function(e) {
                        return e.width >= n
                    }
                    )).sort((function(e, t) {
                        return e.width - t.width
                    }
                    ));
                    r.length || (r = t.sort((function(e, t) {
                        return t.width - e.width
                    }
                    )));
                    var o = r.filter((function(e) {
                        return e.width === r[0].width
                    }
                    ));
                    if (o.length > 1) {
                        var l = o.reduce((function(t, i) {
                            return i.bitrate < e && i.bitrate > t.bitrate ? i : t
                        }
                        ))
                          , d = o.reduce((function(t, i) {
                            return i.bitrate >= e && i.bitrate < t.bitrate ? i : t
                        }
                        ));
                        return l || d
                    }
                    return o[0]
                }().id;
                return i.vastAd.selectedMedia = i.sources.filter((function(e) {
                    return e.id === o
                }
                ))[0],
                this.mediaType = i.vastAd.selectedMedia.mimeType.toLowerCase(),
                i.sources = [i.vastAd.selectedMedia],
                i
            }
        }, {
            key: "getInstreamOptions",
            value: function(e) {
                return {
                    skipoffset: this.getSkipOffset(e),
                    skipMessage: this.optionalParams.skipMessage,
                    skipText: this.optionalParams.skipText
                }
            }
        }, {
            key: "getSkipOffset",
            value: function(e) {
                var t = [this.scheduledAd.skipoffset, this.optionalParams.skipoffset, e.skipoffset].filter((function(e) {
                    return null != e
                }
                ));
                return e.skipoffset = t.length ? this.player.utils.seconds(t[0]) : void 0,
                e.skipoffset
            }
        }, {
            key: "getVastAd",
            value: function() {
                var e, t = this.scheduledAd._adPodIndex;
                if (this.adPodItems) {
                    if ((e = this.adPodItems.length ? this.adPodItems[t] : this.adPodItems).vastAd)
                        return e.vastAd
                } else if (this.vastAdPod && this.vastAdPod.length)
                    return this.vastAdPod[t];
                return this.vastAd
            }
        }, {
            key: "adError",
            value: function(e, t, i) {
                clearTimeout(this.creativeTimeout),
                this.creativeTimeout = null;
                var r = this.getVastAd();
                Ye(r),
                t = t || 900;
                var a = "vpaid" === this.adType ? 5e4 : 1e4;
                i = i || a + t;
                var s = n({}, this.scheduledAd, r)
                  , o = {
                    jwpseg: s.jwpseg
                }
                  , l = B(this.playlistItemManager, {
                    message: e,
                    code: t,
                    adErrorCode: i
                }, s, o);
                this.vastAdPod && this.scheduledAd._adPodIndex < this.vastAdPod.length - 1 ? this.triggerEvent("adPodError", l) : (r.tracker.error(l.code),
                this.triggerEvent("adError", l),
                this.removePlayerListeners())
            }
        }, {
            key: "playAd",
            value: function() {
                var e = this.scheduledAd._adPodIndex
                  , t = this.adPodItems[e] || this.adPodItems;
                if (this.adType = t.adType,
                this.blockingInstreamPlayer) {
                    var i = this.optionalParams.loadingAd;
                    this.blockingInstreamPlayer.setText(i)
                }
                if ("vpaid" === this.adType)
                    return this.playVpaid(t.vastAd);
                if ("static" === this.adType)
                    return this.playStatic(),
                    Promise.resolve();
                var r = Array.isArray(this.adPodItems) ? this.adPodItems.slice(e) : this.adPodItems
                  , a = Array.isArray(this.vastOptions) ? this.vastOptions.slice(e) : this.vastOptions;
                return this.initialIndex = e,
                this.playInstream(r, a).catch(this.player.utils.noop)
            }
        }, {
            key: "clearVpaidBlocking",
            value: function() {
                var e = this.vpaidPlayer.instream;
                e && e !== this.blockingInstreamPlayer && (this.vpaidPlayer.instream = null,
                this.clearBlocking(e))
            }
        }, {
            key: "clearBlocking",
            value: function(e) {
                (e = e || this.blockingInstreamPlayer) && e !== this.instreamPlayer && e.destroy()
            }
        }, {
            key: "getState",
            value: function() {
                return this.instreamPlayer ? this.instreamPlayer.getState() : this.vpaidPlayer ? this.vpaidPlayer.getState() : ""
            }
        }, {
            key: "clearNonlinear",
            value: function() {
                this.staticPlayer.stop(),
                this.vpaidPlayer && (this.clearVpaidBlocking(),
                this.vpaidPlayer && (this.vpaidPlayer.stop(),
                this.vpaidPlayer.destroy(),
                this.vpaidPlayer = null))
            }
        }, {
            key: "destroy",
            value: function() {
                if (this.off(),
                this.removePlayerListeners(),
                clearTimeout(this.creativeTimeout),
                this.creativeTimeout = null,
                this.instreamPlayer) {
                    var e = this.instreamPlayer;
                    this.instreamPlayer = null,
                    this.clearBlocking(e)
                }
                this.vpaidPlayer && (this.clearVpaidBlocking(),
                this.vpaidPlayer && (this.vpaidPlayer.destroy(),
                this.vpaidPlayer = null)),
                this.clearNonlinear(),
                Ye(this.vastAd),
                this.player = null,
                this.instreamPlayer = null,
                this.scheduledAd = null,
                this.vastBuffet = null,
                this.vastAd = null,
                this.vastAdPod = null
            }
        }, {
            key: "pause",
            value: function(e) {
                var t = e.reason;
                this.reason = t || "external",
                this.instreamPlayer ? this.instreamPlayer.pause() : this.vpaidPlayer && this.vpaidPlayer.pause()
            }
        }, {
            key: "play",
            value: function(e) {
                var t = e.reason;
                this.reason = t || "external",
                this.instreamPlayer ? this.instreamPlayer.play() : this.vpaidPlayer && this.vpaidPlayer.play()
            }
        }, {
            key: "skip",
            value: function() {
                if (this.instreamPlayer) {
                    var e = this.getSkipOffset(this.getVastAd());
                    if (e > 0 && this.position < e)
                        return;
                    this.instreamPlayer.skipAd()
                } else
                    this.vpaidPlayer && this.vpaidPlayer.skip()
            }
        }, {
            key: "removePlayerListeners",
            value: function() {
                this.player && (this.player.off("fullscreen", this.playerFullscreenHandler, this),
                this.player.off("volume", this.playerVolumeHandler, this),
                this.player.off("mute", this.muteHandler, this),
                this.player.off("viewable", this.viewableHandler, this),
                this.player.off("resize", this.playerResizeHandler, this)),
                this.instreamPlayer && this.instreamPlayer.off(null, null, this),
                this.vpaidPlayer && (this.vpaidPlayer.removeEvents(),
                this.clearVpaidBlocking(),
                this.vpaidPlayer && (this.vpaidPlayer.destroy(),
                this.vpaidPlayer = null)),
                this.staticPlayer.stop(),
                this.staticPlayer.removeEvents()
            }
        }, {
            key: "adEventObject",
            value: function(e) {
                var t = this.getVastAd()
                  , i = n({}, this.scheduledAd, t)
                  , r = L(this.playlistItemManager, i);
                return r.viewable = this.player.getViewable(),
                this.adPodItems && this.adPodItems.length && (r.sequence = this.scheduledAd._adPodIndex + 1,
                r.podcount = this.adPodItems.length),
                this.mediaType && (r.creativetype = this.mediaType),
                this.scheduledAd._vmap && (r.vmap = this.scheduledAd._vmap),
                -1 !== A.indexOf(e) && (r.universalAdId = t.universalAdId,
                r.categories = t.categories),
                r
            }
        }, {
            key: "playStatic",
            value: function() {
                this.vastAd.tracker.linear = "nonlinear";
                var e = this.vastAd.media[0];
                this.vastAd.selectedMedia = e;
                var t = this.vastAd.clickthrough || ""
                  , i = this.staticPlayer;
                i.removeEvents(),
                i.on("play", this.impressionHandler, this),
                i.on("play", this.playHandler, this),
                i.on("complete", this.combinedCompleteHandler, this),
                i.on("click", this.clickStaticHandler, this),
                i.on("error", this.staticErrorHandler, this),
                i.playAd(e.file, t, e.minDuration, this.scheduledAd._currentTag, this.scheduledAd.requestTimeout),
                this.clearBlocking()
            }
        }, {
            key: "creativeAdError",
            value: function(e, t, i) {
                if (this.adError(e, t, i),
                this.adPodItems && this.adPodItems.length - 1 > this.scheduledAd._adPodIndex) {
                    if (this.vpaidPlayer && (this.vpaidPlayer.destroy(),
                    this.vpaidPlayer = null),
                    "instream" === this.adType && this.instreamPlayer)
                        return void this.instreamPlayer.loadNextItemOnError();
                    this.scheduledAd._adPodIndex++,
                    this.playAd()
                }
            }
        }, {
            key: "playVpaid",
            value: function(e) {
                var t = this;
                clearTimeout(this.creativeTimeout),
                this.creativeTimeout = setTimeout((function() {
                    t.creativeAdError("VPAID tag communication timeout", 900, 50004)
                }
                ), this.scheduledAd.creativeTimeout),
                this.vastAd = e;
                var i = $e(e)
                  , r = this.optionalParams.conditionaladoptout && e.conditionalAd;
                if (this.vastAd.selectedMedia = i,
                this.mediaType = i.type,
                "flash" === Ge(i))
                    return this.creativeAdError("Flash creatives are not supported", 403, 10403),
                    Promise.reject();
                var a = {
                    adParams: this.vastAd.adParams,
                    vpaidControls: this.optionalParams.vpaidcontrols,
                    adOptOut: r
                };
                return this.vpaidPlayer = new Xe(this.player,this.blockingInstreamPlayer,i.file,this.scheduledAd._currentTag,a),
                this.blockingInstreamPlayer && this.blockingInstreamPlayer.applyProviderListeners(this.vpaidPlayer),
                this.vpaidPlayer.on("play", this.playHandler, this),
                this.vpaidPlayer.on("pause", this.pauseHandler, this),
                this.vpaidPlayer.on("quartile", this.quartileHandler, this),
                this.vpaidPlayer.on("remainingTimeChange", this.remainingTimeHandler, this),
                this.vpaidPlayer.on("click", this.clickVpaidHandler, this),
                this.vpaidPlayer.on("error", this.playbackErrorHandler, this),
                this.vpaidPlayer.on("impression", this.impressionHandler, this),
                this.vpaidPlayer.on("expandedChange", this.vpaidExpandedHandler, this),
                this.vpaidPlayer.on("close", this.adCloseHandler, this),
                this.vpaidPlayer.on("skipped", this.vpaidAdSkipped, this),
                this.vpaidPlayer.on("stopped", this.endOfVpaidAdHandler, this),
                this.vpaidPlayer.on("complete", this.adCompleteHandler, this),
                this.vpaidPlayer.on("started", this.adStartedHandler, this),
                this.vpaidPlayer.on("skippableStateChange", this.skippableStateChangeHandler, this),
                Promise.resolve()
            }
        }, {
            key: "skippableStateChangeHandler",
            value: function(e) {
                e.skippable && this.blockingInstreamPlayer && (this.blockingInstreamPlayer.off("adSkipped", this.skipVpaidAd, this),
                this.blockingInstreamPlayer.setupSkipButton(0, this.optionalParams, this.player.utils.noop),
                this.blockingInstreamPlayer.on("adSkipped", this.skipVpaidAd, this))
            }
        }, {
            key: "playInstream",
            value: function(e, t) {
                var i = this
                  , r = this.player.getEnvironment().OS;
                if (r.android && 2 === r.version.major && 3 === r.version.minor)
                    return this.adError("Android 2.3 not supported", 900, 60007),
                    Promise.reject();
                clearTimeout(this.creativeTimeout),
                this.blockingInstreamPlayer ? this.instreamPlayer = this.blockingInstreamPlayer : this.instreamPlayer = this.player.createInstream().init(),
                this.instreamPlayer.on("play", this.playHandler, this),
                this.instreamPlayer.on("pause", this.pauseHandler, this),
                this.instreamPlayer.on("state", this.stateHandler, this),
                this.instreamPlayer.on("time", this.timeHandler, this),
                this.instreamPlayer.on("playlistItem", this.playlistItemHandler, this),
                this.instreamPlayer.on("complete", this.adCompleteHandler, this),
                this.instreamPlayer.on("playlistComplete", this.endOfAdBreakHandler, this),
                this.instreamPlayer.on("mute", this.muteHandler, this),
                this.instreamPlayer.on("instreamClick", this.clickInstreamHandler, this),
                this.instreamPlayer.on("adSkipped", this.adSkipped, this),
                this.instreamPlayer.on("error", this.playbackErrorHandler, this),
                this.instreamPlayer.on("mediaError", this.playbackErrorHandler, this),
                this.instreamPlayer.on("destroyed", (function() {
                    i.instreamPlayer = null
                }
                ), this);
                var a = this.instreamPlayer.loadItem(e, t);
                return this.clearBlocking(),
                a
            }
        }, {
            key: "playerFullscreenHandler",
            value: function(e) {
                var t = this.getVastAd().tracker;
                t.trackOmidEvent("fullscreen", e.fullscreen),
                e.fullscreen && t.started && t.fullscreen()
            }
        }, {
            key: "playerResizeHandler",
            value: function(e) {
                this.getVastAd().tracker.trackOmidEvent("resize", e.width, e.height),
                this.vpaidPlayer && this.vpaidPlayer.resize(e.width, e.height)
            }
        }, {
            key: "playerVolumeHandler",
            value: function(e) {
                this.getVastAd().tracker.trackOmidEvent("volume", e.volume / 100),
                this.vpaidPlayer && this.vpaidPlayer.setVolume(e.volume)
            }
        }, {
            key: "playlistItemHandler",
            value: function(e) {
                var t = this;
                this.instreamPlayer && (clearTimeout(this.creativeTimeout),
                this.creativeTimeout = setTimeout((function() {
                    t.creativeAdError("Video creative timeout", 402, 10402)
                }
                ), this.scheduledAd.creativeTimeout),
                this.scheduledAd._adPodIndex = e.index + this.initialIndex,
                this.scheduledAd._adPodIndex > 0 && this.triggerEvent("adItem"))
            }
        }, {
            key: "impressionHandler",
            value: function(e) {
                var t = this.getVastAd()
                  , i = t.tracker
                  , r = n({}, this.scheduledAd, t)
                  , a = e.duration || t.duration || this.getDurationFromVideoTag()
                  , s = this.player.getVolume() / 100;
                i.impression(a, s),
                this.player.getViewable() ? i.viewable() : i.notViewable(),
                this.triggerEvent("adImpression", L(this.playlistItemManager, r, {
                    duration: a,
                    linear: e.linear || i.linear
                })),
                this.setupViewableListener()
            }
        }, {
            key: "viewableHandler",
            value: function(e) {
                e.viewable ? (this.viewablePlayedTime = 0,
                this.lastPosition = null,
                this.adViewableImpressionHandler = this.adViewableHandler) : this.adViewableImpressionHandler = this.player.utils.noop
            }
        }, {
            key: "bufferStartHandler",
            value: function(e) {
                e.buffering = !0,
                e.trackOmidEvent("bufferStart")
            }
        }, {
            key: "bufferFinishHandler",
            value: function(e) {
                e.buffering = !1,
                e.trackOmidEvent("bufferFinish")
            }
        }, {
            key: "stateHandler",
            value: function(e) {
                var t = e.oldstate
                  , i = e.newstate;
                if (i !== t || "playing" === i) {
                    var r = "loading" === i || "stalled" === i
                      , a = this.getVastAd().tracker;
                    !r && a.buffering ? this.bufferFinishHandler(a) : r && a.started && this.bufferStartHandler(a)
                }
            }
        }, {
            key: "playHandler",
            value: function(e) {
                var t = this;
                clearTimeout(this.creativeTimeout),
                this.creativeTimeout = null;
                var i, r = this.getVastAd(), a = r.tracker;
                if (a.started)
                    "paused" === e.oldstate && (a.resume(),
                    this.dispatchPlay(e));
                else {
                    this.vpaidPlayer && (a.linear = e.linear),
                    this.instreamPlayer && this.impressionHandler({
                        linear: a.linear
                    });
                    var s = n({}, this.scheduledAd, r)
                      , o = L(this.playlistItemManager, s, {
                        linear: a.linear,
                        metadata: !0
                    });
                    if (this.triggerEvent("adMeta", o),
                    r.companions) {
                        var l = L(this.playlistItemManager, s, {
                            companions: (i = r.companions,
                            i.map((function(e) {
                                var t, i = "iframe" === e.type || "html" === e.type ? e.type : "static";
                                return e.trackers && e.trackers.creativeView && e.trackers.creativeView.length && (t = e.trackers.creativeView),
                                {
                                    width: e.width,
                                    height: e.height,
                                    type: i,
                                    resource: e.source,
                                    creativeview: t,
                                    click: e.clickthrough
                                }
                            }
                            )))
                        });
                        this.triggerEvent("adCompanions", l)
                    }
                    r.icons && (r.iconInstances = r.icons.map((function(e) {
                        return new We(t.player,e,t.div)
                    }
                    )));
                    var d, u = this.companion;
                    d = this.player.utils.flashVersion() > 9 ? r.companions : function(e) {
                        if (e)
                            return e.filter((function(e) {
                                return e.type.indexOf("flash") < 0
                            }
                            ));
                        return []
                    }(r.companions),
                    this.optionalParams.companion && d && d.length && (a.hasComp = u.addCompanion(this.optionalParams.companion, d)),
                    a.start(),
                    a.creativeView(),
                    this.dispatchPlay(e)
                }
            }
        }, {
            key: "pauseHandler",
            value: function(e) {
                clearTimeout(this.creativeTimeout),
                this.creativeTimeout = null,
                this.getVastAd().tracker.pause(),
                null === this.reason && "vpaid" === this.adType && (this.reason = "external"),
                this.setState(e)
            }
        }, {
            key: "remainingTimeHandler",
            value: function(e) {
                var t = this;
                e.duration ? this.duration = e.duration : this.duration = Math.max(1, this.duration, e.remainingTime);
                var i = e.remainingTime >= 0 ? this.duration - e.remainingTime : 0;
                this.position === i ? this.creativeTimeout = this.creativeTimeout || setTimeout((function() {
                    t.creativeAdError("Video stall", 400)
                }
                ), this.scheduledAd.creativeTimeout) : this.creativeTimeout && (clearTimeout(this.creativeTimeout),
                this.creativeTimeout = null),
                this.timeHandler({
                    position: i,
                    duration: this.duration,
                    isDurationChange: e.isDurationChange
                })
            }
        }, {
            key: "quartileHandler",
            value: function(e) {
                if (e.duration)
                    this.duration = e.duration;
                else {
                    var t = 4 * e.remainingTime / (4 - e.quartile);
                    this.duration = Math.max(this.duration, 1, t)
                }
                this.timeHandler({
                    position: this.duration * e.quartile * .25,
                    duration: this.duration
                })
            }
        }, {
            key: "adViewableHandler",
            value: function(e) {
                var t = e.position;
                null === this.lastPosition && (this.lastPosition = t);
                var i = t - this.lastPosition;
                this.lastPosition = t,
                i = Math.min(Math.max(0, i), 4),
                this.viewablePlayedTime += i,
                this.viewablePlayedTime >= 2 && (this.player.off("viewable", this.viewableHandler, this),
                this.adViewableImpressionHandler = this.player.utils.noop,
                this.triggerEvent("adViewableImpression", {}))
            }
        }, {
            key: "timeHandler",
            value: function(e) {
                var t = this.getVastAd()
                  , i = e.position
                  , r = e.duration;
                this.adViewableImpressionHandler(e);
                var a = r - i
                  , n = t.tracker
                  , s = this.optionalParams.dynamicMessage || ""
                  , o = this.optionalParams.podMessage || "";
                if (s && a > 0) {
                    if (s = s.replace(/(\b)xx(s?\b)/gi, "$1".concat(Math.ceil(a), "$2")),
                    this.adPodItems && this.adPodItems.length > 1 && o) {
                        var l = this.scheduledAd._adPodIndex + 1;
                        s = (o = (o = o.replace(/__AD_POD_CURRENT__/g, "".concat(l))).replace(/__AD_POD_LENGTH__/g, "".concat(this.adPodItems.length))) + " " + s
                    }
                    this.instreamPlayer ? this.instreamPlayer.setText(s) : this.vpaidPlayer && this.vpaidPlayer.instream && this.vpaidPlayer.instream.setText(s)
                }
                if (!e.isDurationChange) {
                    n && n.time(i, r),
                    t.iconInstances && t.iconInstances.forEach((function(e) {
                        e.updateTime(i)
                    }
                    ));
                    var d = {};
                    d.position = this.position = i,
                    d.duration = r,
                    this.triggerEvent("adTime", d)
                }
            }
        }, {
            key: "combinedCompleteHandler",
            value: function() {
                this.adCompleteHandler(),
                this.endOfAdBreakHandler()
            }
        }, {
            key: "adCompleteHandler",
            value: function() {
                clearTimeout(this.viewableTimeout);
                var e = this.getVastAd();
                Ye(e);
                var t = e.tracker;
                t.firedError || (t.complete(),
                this.triggerEvent("adComplete"))
            }
        }, {
            key: "adCloseHandler",
            value: function() {
                clearTimeout(this.viewableTimeout);
                var e = this.getVastAd().tracker;
                e.firedError || e.close()
            }
        }, {
            key: "adStartedHandler",
            value: function() {
                this.triggerEvent("adStarted")
            }
        }, {
            key: "endOfVpaidAdHandler",
            value: function() {
                if (clearTimeout(this.viewableTimeout),
                this.adPodItems && this.adPodItems.length - 1 > this.scheduledAd._adPodIndex)
                    return this.vpaidPlayer && (this.vpaidPlayer.destroy(),
                    this.vpaidPlayer = null),
                    this.scheduledAd._adPodIndex++,
                    void this.playAd();
                this.endOfAdBreakHandler()
            }
        }, {
            key: "endOfAdBreakHandler",
            value: function() {
                this.removePlayerListeners(),
                this.trigger("adPlayComplete")
            }
        }, {
            key: "muteHandler",
            value: function(e) {
                var t = this.getVastAd().tracker;
                t && (e.mute ? t.mute() : t.unmute(),
                this.vpaidPlayer && this.vpaidPlayer.setVolume(e.mute ? 0 : this.player.getVolume()))
            }
        }, {
            key: "clickStaticHandler",
            value: function() {
                var e = this.getVastAd();
                this.player.pause({
                    reason: "clickthrough"
                }),
                this.clickThrough(e)
            }
        }, {
            key: "clickVpaidHandler",
            value: function(e) {
                var t = this.getVastAd()
                  , i = !0;
                e && void 0 !== e.url && (!1 === e.playerHandles && (i = !1),
                t.clickthrough = e.url),
                this.clickThrough(t, i)
            }
        }, {
            key: "clickInstreamHandler",
            value: function() {
                "paused" !== this.instreamPlayer.getState() && this.clickThrough(this.getVastAd())
            }
        }, {
            key: "playbackErrorHandler",
            value: function(e) {
                var t = e.message || "Error Playing Ad Tag"
                  , i = e.code;
                i && 232404 === i ? i = 403 : (!i || i <= 4 || i > 901) && (i = 405),
                this.vpaidPlayer && "function" == typeof this.vpaidPlayer.off ? (this.vpaidPlayer.off(),
                this.creativeAdError(t, i, e.adErrorCode)) : this.adError(t, i, e.adErrorCode)
            }
        }, {
            key: "staticErrorHandler",
            value: function() {
                this.adError("Unable to fetch NonLinear resource", 502)
            }
        }, {
            key: "vpaidExpandedHandler",
            value: function(e) {
                var t = this.getVastAd().tracker;
                e.expanded ? t.expand() : t.collapse()
            }
        }, {
            key: "getDurationFromVideoTag",
            value: function() {
                var e = this.blockingInstreamPlayer ? this.blockingInstreamPlayer.getMediaElement() : null;
                return e ? e.duration : 0
            }
        }, {
            key: "setupViewableListener",
            value: function() {
                this.player.off("viewable", this.viewableHandler, this),
                this.player.on("viewable", this.viewableHandler, this),
                this.viewableHandler({
                    viewable: this.player.getViewable()
                })
            }
        }, {
            key: "dispatchPlay",
            value: function(e) {
                "static" === this.adType || "vpaid" === this.adType && "linear" !== e.linear || (null === this.reason && "vpaid" === this.adType && (this.reason = "external"),
                this.setState(e))
            }
        }, {
            key: "setState",
            value: function(e) {
                var t = e.newstate
                  , i = e.oldstate
                  , r = "playing" === t
                  , a = this.adEventObject(r ? "adPlay" : "adPause");
                (a.newstate = t,
                null !== this.reason) && (a[r ? "playReason" : "pauseReason"] = this.reason,
                this.reason = null);
                this.vpaidPlayer ? (a.oldstate = i,
                this.vpaidPlayer.trigger("state", a)) : this.instreamPlayer.setEventData(a)
            }
        }, {
            key: "clickThrough",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                e.tracker.click();
                var i = {};
                e.clickthrough && (i.clickThroughUrl = e.clickthrough),
                this.reason = "clickthrough",
                this.triggerEvent("adClick", i),
                window.jwcast && window.jwcast.player.id || e.clickthrough && t && window.open(e.clickthrough)
            }
        }, {
            key: "skipVpaidAd",
            value: function() {
                this.vpaidPlayer && this.vpaidPlayer.skip() && this.vpaidAdSkipped()
            }
        }, {
            key: "vpaidAdSkipped",
            value: function() {
                this.adSkipped(),
                this.endOfVpaidAdHandler()
            }
        }, {
            key: "adSkipped",
            value: function() {
                clearTimeout(this.viewableTimeout);
                var e = this.getVastAd();
                e.tracker.skip(),
                Ye(e);
                var t = "vpaid" === this.adType ? void 0 : this.getSkipOffset(e);
                this.triggerEvent("adSkipped", {
                    duration: e.duration,
                    skipoffset: t,
                    position: this.position,
                    watchedPastSkipPoint: this.position - t
                })
            }
        }, {
            key: "triggerEvent",
            value: function(e, t) {
                var i = this.adEventObject(e);
                t && n(i, t),
                this.trigger(e, i),
                -1 === P.indexOf(e) && this.player.trigger(e, i)
            }
        }]),
        e
    }();
    function Ge(e) {
        return function(e) {
            return "application/javascript" === e.type || "application/x-javascript" === e.type
        }(e) ? "html5" : "flash"
    }
    function $e(e) {
        for (var t, i = 0; i < e.media.length; i++) {
            var r = e.media[i];
            if ("html5" === Ge(r)) {
                t = r;
                break
            }
        }
        return t
    }
    function Je(e, t, i, r, a) {
        e.tracker = new Ue(e,e.trackers,t,i,r,a)
    }
    function Ye(e) {
        e && e.iconInstances && (e.iconInstances.forEach((function(e) {
            e.remove()
        }
        )),
        e.iconInstances = null)
    }
    var Ke = function() {}
      , Ze = function(e) {
        !function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            Object.defineProperty(e, "prototype", {
                value: Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                writable: !1
            }),
            t && o(e, t)
        }(a, e);
        var i = u(a);
        function a(e, r, s, o, d, u, c) {
            var h;
            return t(this, a),
            (h = i.call(this, e, r, s, o, c)).client = "vast",
            h.config = o,
            h.item = s,
            h.params = d,
            h.player = e,
            h.adPlayerProperties = u,
            h._vloaderQueue = [],
            h._events = [],
            h.adPlayerQueue = [],
            h.qoe = new e.utils.Timer,
            h.reason = null,
            h._debugTrackFn = o.debug && o.trackFn ? o.trackFn : null,
            n(l(h), e.Events),
            h
        }
        return r(a, [{
            key: "init",
            value: function(e, t) {
                var i = this
                  , r = h(s(a.prototype), "init", this).call(this, e, t);
                return this.vmapPromise && this.vmapPromise.then((function(e) {
                    !i.isDestroyed() && e && e.length && e.forEach((function(e) {
                        var r = B(i, e, null, t);
                        i.dispatchAdError(r)
                    }
                    ))
                }
                )).catch((function(e) {
                    if (!i.isDestroyed()) {
                        var r = B(i, e, null, t);
                        i.enqueueAdEvent("adError", r, t)
                    }
                }
                )),
                r
            }
        }, {
            key: "adPlayerImpressionHandler",
            value: function(e) {
                et(e) && (this.qoe.tick("adImpression".concat(e.id)),
                e.timeLoading = this.qoe.between("adBreakStart", "adImpression".concat(e.id))),
                this.player.trigger("adImpression", e)
            }
        }, {
            key: "playAdAPI",
            value: function(e) {
                var t = this;
                this.startBlocking(),
                Promise.resolve(e).then((function() {
                    if (!t.isDestroyed())
                        return t.triggerAdBreakEvents(e),
                        t.startAdBreak(e, {
                            adBlock: t.adBlockErrorDetected,
                            reason: "external"
                        })
                }
                )).catch((function(e) {
                    return t.isDestroyed() ? null : t.dispatchFatalAdError(e)
                }
                ))
            }
        }, {
            key: "tryPlayAd",
            value: function(e, t) {
                var i = this;
                return this.reason = t.reason || this.reason,
                this.dequeueAdEvents(),
                e ? ("nonlinear" === e.scheduledAd()._type && this.stopBlocking(),
                this.playAd(e).catch((function(r) {
                    return i.isDestroyed() ? null : i.adWaterfall(e, r, t)
                }
                ))) : (this.stopBlocking(),
                null)
            }
        }, {
            key: "playAd",
            value: function(e) {
                var t = this
                  , i = e.scheduledAd();
                return 0 === i._waterfallIndex && this.clearNonlinearAd(),
                this.removeVastLoader(e),
                new Promise((function(i, r) {
                    var a = new ze(e,t.player,t);
                    a.on("adPlayComplete", i),
                    a.on("adError", r),
                    a.on("adImpression", t.adPlayerImpressionHandler.bind(t)),
                    a.on("adMeta", t.player.trigger),
                    a.on("adPodError", t.dispatchAdError.bind(t)),
                    a.init(t.blockingInstreamPlayer, t.reason).catch(Ke),
                    t.reason = null,
                    t.adInstreamPlayer = t.blockingInstreamPlayer,
                    t.blockingInstreamPlayer = null,
                    t.adPlayerQueue.push(a)
                }
                )).then((function() {
                    t.isDestroyed() || "nonlinear" === i._type || t.stopBlocking()
                }
                ))
            }
        }, {
            key: "pauseAd",
            value: function(e, t) {
                if (this.adPlayerQueue.length) {
                    var i = this.adPlayerQueue[this.adPlayerQueue.length - 1];
                    e ? i.pause(t || {}) : i.play(t || {})
                }
            }
        }, {
            key: "skipAd",
            value: function() {
                this.adPlayerQueue.length && this.adPlayerQueue[this.adPlayerQueue.length - 1].skip()
            }
        }, {
            key: "dispatchFatalAdError",
            value: function(e) {
                e && e.adErrorCode || (e = B(this, {
                    message: "An unexpected ad error has occurred",
                    sourceError: e
                })),
                this.dequeueAdEvents(),
                this.dispatchAdError(e),
                this.destroyPlayers(),
                this.stopBlocking()
            }
        }, {
            key: "destroyPlayers",
            value: function() {
                this.adPlayerQueue.forEach((function(e) {
                    return e.destroy()
                }
                )),
                this.adPlayerQueue.splice(0)
            }
        }, {
            key: "dispatchAdError",
            value: function(e) {
                et(e) && (this.qoe.tick("adError".concat(e.id)),
                e.timeLoading = this.qoe.between("adBreakStart", "adError".concat(e.id))),
                this.vmapTracker && this.vmapTracker.error(e.code),
                50004 !== e.adErrorCode && 50901 !== e.adErrorCode || !this.player.getAdBlock() || (this.adBlockErrorDetected = !0);
                var t = 70001 === e.adErrorCode ? "adWarning" : "adError";
                this.player.trigger(t, e)
            }
        }, {
            key: "clearNonlinearAd",
            value: function() {
                this.adPlayerQueue.length && this.adPlayerQueue[this.adPlayerQueue.length - 1].clearNonlinear()
            }
        }, {
            key: "getVMAPTracker",
            value: function(e) {
                if (!e._vmapTracker) {
                    var t = new Ue(e,e._trackers,this._debugTrackFn,this.player,this.config);
                    e._vmapTracker = this.vmapTracker = t
                }
                return e._vmapTracker
            }
        }, {
            key: "_loadTag",
            value: function(e, t) {
                var i = e._adQueue[e._waterfallIndex];
                return this._loadTagUrl(e, i, t)
            }
        }, {
            key: "_loadTagUrl",
            value: function(e, t, i) {
                var r = this;
                return ae(t, this.player, this.item, this.client, this.params, e).then((function(a) {
                    "function" == typeof r._debugTrackFn && r._debugTrackFn({
                        type: "tagReplacement",
                        data: {
                            actualTag: a,
                            originalTag: t
                        }
                    });
                    var s = r._createVastLoader(e, i)
                      , o = s.load(a);
                    return i.isPodItemLoader ? i.tagIndex && (s.scheduledAd().adRequestIds[i.tagIndex] = r.player.utils.genId(12)) : e._currentTag = a,
                    r._dispatchAdRequest(e, n({
                        tag: a
                    }, i)),
                    o
                }
                ))
            }
        }, {
            key: "_loadPods",
            value: function(e, t) {
                var i = this;
                e.adRequestIds = [];
                var r = this._createVastLoader(e, t)
                  , a = e._pod.map((function(r, a) {
                    var s = n({
                        tag: r,
                        isPodItemLoader: !0,
                        tagIndex: a
                    }, t)
                      , o = i._loadTagUrl(e, r, s).catch((function(e) {
                        return e.tagIndex = a,
                        Promise.reject(e)
                    }
                    ))
                      , l = function() {
                        return i.isDestroyed() ? null : i._dispatchAdLoaded(e, s)
                    };
                    return o.then(l).catch(Ke),
                    o.catch(l).catch(Ke),
                    o
                }
                ));
                return r.podMultipleVastLoaders(a)
            }
        }, {
            key: "_loadXML",
            value: function(e, t) {
                var i = this;
                return e._currentTag = e._currentTag || e._adXML.toString(),
                this.bidsPromise.then((function() {
                    return i._dispatchAdRequest(e, t),
                    i._createVastLoader(e, t).parseXMLString(e._adXML, e._currentTag)
                }
                ))
            }
        }, {
            key: "_dispatchAdRequest",
            value: function(e, t) {
                var i = L(this, e, n({
                    jwpseg: e.jwpseg
                }, t));
                this.player.trigger("adRequest", i),
                this.qoe.tick("adLoading".concat(i.id))
            }
        }, {
            key: "_dispatchAdLoaded",
            value: function(e, t) {
                var i = L(this, e, t)
                  , r = i.id;
                this.qoe.tick("adLoaded".concat(r)),
                i.timeLoading = this.qoe.between("adLoading".concat(r), "adLoaded".concat(r)),
                this.player.trigger("adLoaded", i)
            }
        }, {
            key: "_handleVastLoadError",
            value: function(e, t, i) {
                var r = e.vloader;
                return this.removeVastLoader(r),
                this._getVloaderErrorObject(e, t, i)
            }
        }, {
            key: "_vloaderWaterfall",
            value: function(e, t) {
                var i = this._handleVastLoadError(e, null, t)
                  , r = e.vloader;
                return this.adWaterfall(r, i, t)
            }
        }, {
            key: "adWaterfall",
            value: function(e, t, i) {
                var r = e.scheduledAd();
                if (this.schedule.canWaterfall(r))
                    return r.jwpseg = null,
                    r._adXML = null,
                    r._waterfallIndex += 1,
                    this.enqueueAdEvent("adError", t, i),
                    this.startAdBreak(r, i);
                throw t
            }
        }, {
            key: "_createVastLoader",
            value: function(e) {
                var t = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = this.config
                  , a = new Qe(e,this.player,n({
                    requestFilter: r.requestFilter,
                    trackingFilter: r.trackingFilter,
                    item: this.item,
                    params: this.params
                }, i));
                this._vloaderQueue.push(a);
                var s = 0;
                return a.on("adPodError", (function(r) {
                    s += 1;
                    var n = t._getVloaderErrorObject(r, null, i);
                    if (t.enqueueAdEvent("adError", n, i),
                    !(a._scheduledAd._pod && a._scheduledAd._pod.length === s)) {
                        var o = L(t, e, {
                            podIndex: a._scheduledAd._adPodIndex,
                            tagIndex: s
                        }, i);
                        t.enqueueAdEvent("adItem", o, i)
                    }
                }
                )),
                a.on("adLoadedXML", (function(e) {
                    t.player.trigger("adLoadedXML", n(L(t, null), e))
                }
                )),
                a
            }
        }, {
            key: "_getVloaderErrorObject",
            value: function(e, t, i) {
                e.wrapperAdSystem && e.wrapperAdSystem.length !== e.wrappedTags.length && (e.wrapperAdSystem.push(e.adsystem),
                e.adsystem = "");
                var r = n({
                    adsystem: e.adsystem,
                    wrapper: e.wrapperAdSystem,
                    wrappedTags: e.wrappedTags
                }, e.vloader.scheduledAd());
                return B(this, e, r, n({
                    tag: e.tag,
                    tagIndex: e.tagIndex || t,
                    podIndex: e.podIndex
                }, n({
                    jwpseg: r.jwpseg
                }, i)))
            }
        }, {
            key: "dequeueAdEvents",
            value: function() {
                var e = this;
                this._events.forEach((function(t) {
                    var i = t.type
                      , r = t.event;
                    "adError" === i ? e.dispatchAdError(r) : e.player.trigger(i, r)
                }
                )),
                this._events.splice(0)
            }
        }, {
            key: "triggerAdBreakEvents",
            value: function(e) {
                var t = this
                  , i = this.getVMAPTracker(e);
                this.blockingInstreamPlayer.once("destroyed", (function() {
                    t.qoe.clear("adBreakStart"),
                    i.breakEnd(),
                    t.player.trigger("adBreakEnd", L(t, e))
                }
                )),
                this.qoe.tick("adBreakStart"),
                i.breakStart();
                var r = L(this, e);
                this.player.trigger("adBreakStart", r),
                this.player.trigger("adItem", r)
            }
        }, {
            key: "startBlocking",
            value: function() {
                this.blockingInstreamPlayer || (this.blockingInstreamPlayer = this.player.createInstream().init(),
                this.blockingInstreamPlayer.setText(null))
            }
        }, {
            key: "stopBlocking",
            value: function() {
                if (this.blockingInstreamPlayer || this.adInstreamPlayer) {
                    var e = this.blockingInstreamPlayer || this.adInstreamPlayer;
                    this.blockingInstreamPlayer = null,
                    e.destroy()
                }
                this.adInstreamPlayer = null
            }
        }, {
            key: "loadAd",
            value: function(e) {
                var t = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = this.player.utils;
                if (e._id = e._id || r.genId(12),
                e._vmapTracker = this.getVMAPTracker(e),
                e._adQueue || e._adXML || e._pod) {
                    if (i.adBlock)
                        throw B(this, {
                            message: "Ad playback blocked by an ad blocker",
                            adErrorCode: 600003
                        }, e, i);
                    var a;
                    if (e._pod)
                        return this._loadPods(e, i);
                    var n = function() {
                        return t.isDestroyed() ? null : t._dispatchAdLoaded(e, i)
                    };
                    return (a = e._adXML ? this._loadXML(e, i) : this._loadTag(e, i)).then(n).catch(Ke),
                    a.catch(n).catch(Ke),
                    a.catch((function(e) {
                        return t.isDestroyed() ? null : t._vloaderWaterfall(e, i)
                    }
                    ))
                }
                r.log("scheduled ad has no url or xml", e)
            }
        }, {
            key: "playPreloadedPromise",
            value: function(e) {
                var t = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e.then((function(e) {
                    return t.tryPlayAd(e, i)
                }
                )).catch((function(e) {
                    t.isDestroyed() || (t.dispatchAdError(e),
                    t.stopBlocking())
                }
                ))
            }
        }, {
            key: "startAdBreak",
            value: function(e) {
                var t = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = this.bidsPromise.then((function() {
                    return t.loadAd(e, i)
                }
                ));
                return r.then((function(e) {
                    return t.tryPlayAd(e, i)
                }
                )).catch((function(e) {
                    t.dispatchAdError(e),
                    t.stopBlocking()
                }
                ))
            }
        }, {
            key: "removeVastLoader",
            value: function(e) {
                var t = this._vloaderQueue.indexOf(e);
                -1 !== t && (e.destroy(),
                this._vloaderQueue.splice(t, 1))
            }
        }, {
            key: "isDestroyed",
            value: function() {
                return null === this.player
            }
        }, {
            key: "destroy",
            value: function() {
                this._vloaderQueue.forEach((function(e) {
                    return e.destroy()
                }
                )),
                this.clearNonlinearAd(),
                this.stopBlocking(),
                h(s(a.prototype), "destroy", this).call(this)
            }
        }]),
        a
    }(Le);
    function et(e) {
        return e.tag && (void 0 === e.podcount || 1 === e.sequence)
    }
    var tt = function() {}
      , it = function() {
        function e(i, r, a) {
            t(this, e),
            this.player = i,
            this.pluginConfig = r,
            this.adClient = a;
            var n = this.configParser = new je(i.utils)
              , s = this.adRules = new Ve(i,n.getAdRules(r),a);
            this.emptySchedule = new Se(s,i.utils)
        }
        return r(e, [{
            key: "getAdRules",
            value: function() {
                return this.adRules
            }
        }, {
            key: "resetDefaultSchedule",
            value: function(e) {
                var t = void 0 === this.pluginConfig.withCredentials || this.pluginConfig.withCredentials
                  , i = this.defaultSchedule = this.configParser.getSchedule(this.pluginConfig, this.adRules);
                i.isVMAP() && i.load(this.player, e, this.adClient, {
                    withCredentials: t
                }).catch(tt)
            }
        }, {
            key: "getSchedule",
            value: function(e, t) {
                return t > 0 && !this.adRules.rulesAllowAdPlayback(t) ? this.emptySchedule : e && e.adschedule ? this.configParser.getSchedule(e, this.adRules) : (this.resetDefaultSchedule(e),
                this.defaultSchedule)
            }
        }, {
            key: "getOptParams",
            value: function(e, t) {
                return this.configParser.getOptParams(e, t)
            }
        }, {
            key: "reset",
            value: function() {
                this.adRules.reset()
            }
        }, {
            key: "destroy",
            value: function() {
                this.emptySchedule && this.emptySchedule.destroy(),
                this.defaultSchedule && this.defaultSchedule.destroy()
            }
        }]),
        e
    }()
      , rt = {}
      , at = {}
      , nt = {};
    function st(e, t) {
        var i = rt[t];
        return i || (rt[t] = new Promise((function(i, r) {
            var a = 'unlimited';
            if ("unlimited" === a)
                return r();
            var n = ["//", "entitlements.jwplayer.com", "/", a.token(), ".json"];
            "file:" === window.location.protocol && n.unshift("https:"),
            e.ajax(n.join(""), (function(e) {
                var t = e && e.response;
                t ? i(t) : r()
            }
            ), (function() {
                r()
            }
            ), {
                timeout: 1e4,
                responseType: "json"
            })
        }
        )))
    }
    function ot(e, t) {
        var i = at[t];
        return i || (at[t] = st(e, t).catch((function() {
            return {}
        }
        )).then((function(e) {
            if (!1 === e.canUseVPB)
                throw new Error("Not entitled for Player Bidding")
        }
        )))
    }
    var lt = function(e, t, i) {
        var r = nt[t];
        return r || (nt[t] = st(e, t).catch((function() {
            return {}
        }
        )).then((function(e) {
            var t, r;
            if (!0 === i.outstream ? (t = !1 !== e.canPlayOutstreamAds,
            r = "Outstream Ad Limit Reached") : (t = !1 !== e.canPlayAds,
            r = "Ad Limit Reached"),
            !1 === t)
                throw new Error(r);
            return {
                message: "Can Play Ads"
            }
        }
        )))
    }
      , dt = function() {};
    var ut = function() {};
    !function(e) {
        if (e && "undefined" != typeof window) {
            var t = document.createElement("style");
            t.setAttribute("media", "screen"),
            t.innerHTML = e,
            document.head.appendChild(t)
        }
    }(".jwplayer.jw-flag-time-slider-above .jw-vpaid-non-linear{bottom:66px}.jwplayer.jw-breakpoint-7 .jw-vpaid-non-linear{bottom:132px}.jwplayer.jw-flag-user-inactive:not(.jw-state-paused) .jw-vpaid-non-linear{bottom:.5em}.jwplayer .jw-vpaid-non-linear{bottom:60px}.jwplayer .jw-vpaid-iframe{border:0;width:100%;height:100%;position:absolute;overflow:hidden}.jwplayer .jw-plugin-vast.jw-plugin{top:0;width:100%;pointer-events:none}.jwplayer .jw-plugin-vast.jw-plugin *{pointer-events:all}.jwplayer .jw-plugin-vast .jw-ad-icon-container{position:absolute;display:none;pointer-events:all;cursor:pointer}.jwplayer .jw-plugin-vast .jw-ad-icon-container.jw-ad-icon-active{display:block}.jwplayer .jw-plugin-vast .jw-ad-icon-container iframe{pointer-events:none;border:none;height:100%;width:100%;margin:0}.jw-plugin-vast.jw-vast-nonlinear-active .jw-banner{opacity:1}.jw-plugin-vast.jw-vast-nonlinear-active .jw-vast-nonlinear-close-button{margin:0 auto;opacity:.75}.jw-plugin-vast.jw-vast-nonlinear-active:hover .jw-vast-nonlinear-close-button{opacity:1}.jw-plugin-vast.jw-vast-nonlinear-collapsed .jw-vast-nonlinear-open-button{margin:0 auto;opacity:.5}.jw-plugin-vast.jw-vast-nonlinear-collapsed .jw-banner,.jw-plugin-vast.jw-vast-nonlinear-collapsed .jw-vast-nonlinear-close-button{opacity:0}.jw-plugin-vast.jw-vast-nonlinear-collapsed:hover .jw-vast-nonlinear-open-button{opacity:1}.jw-plugin-vast.jw-vast-nonlinear-collapsed:hover .jw-vast-nonlinear-close-button{opacity:0}.jw-plugin-vast .jw-vast-nonlinear-close-button,.jw-plugin-vast .jw-vast-nonlinear-open-button{position:absolute;right:0;bottom:0;left:0;display:block;margin:auto;width:18px;height:18px;cursor:pointer;opacity:0;transition:opacity .2s ease}.jw-plugin-vast .jw-vast-nonlinear-close-button{transform:rotate(45deg)}"),
    (window.jwplayerPluginJsonp || window.jwplayer().registerPlugin)("vast", "8.1", (function(e, t, i) {
        var r, a, s, o, l = new it(e,t,"vast"), d = e.getConfig(), u = e.getEnvironment(), c = t.debug && t.trackFn ? t.trackFn : null, h = e.utils, p = this, v = {
            withCredentials: void 0 === t.withCredentials || t.withCredentials
        }, f = !1, m = 0, y = !1;
        function g(i, r, a) {
            var d = l.getSchedule(i, r)
              , u = new Ze(e,d,i,t,a,s,y);
            return u.init(o, a).then((function() {
                u.isDestroyed() || e.trigger("adSchedule", L(u, null, {
                    schedule: d
                }))
            }
            )).catch(ut),
            u.on("preloadNext", (function(e) {
                var t = n({}, a, {
                    preloadPreroll: !0,
                    playlistItemEventCount: m + 1
                });
                u.next = g(e.item, t.playlistItemEventCount, t)
            }
            ), p),
            u
        }
        function k(t) {
            r && (t && (a = r.next,
            f = r.nextPlaylistRelated),
            r.schedule.reset(),
            r.off(null, null, p),
            r.destroy(),
            r = null),
            l.reset(),
            e.setCues([])
        }
        function P(t) {
            var i = t.getMidRolls()
              , r = [];
            i.length && i.forEach((function(e) {
                "nonlinear" !== e._type && r.push({
                    begin: e._offSet,
                    text: v.cuetext,
                    cueType: "ads"
                })
            }
            )),
            e.addCues(r)
        }
        (function(e) {
            try {
                var t = e.settings.mediationLayerAdServer || "jwp"
                  , i = !!e.bidders.length;
                return ("jwp" === t || "jwpspotx" === t) && i
            } catch (e) {
                return !1
            }
        }
        )(t.bids) && (o = n({}, t.bids)),
        function(e, t, i, r) {
            var a, n = t.key, s = e.utils, o = lt(s, n, i);
            o.catch(dt),
            i.bids && (a = ot(s, n)).catch(dt),
            e.on("ready", (function() {
                a && a.catch((function(i) {
                    e.trigger("destroyBidding"),
                    e.trigger("adError", ie(i.message, 60009, t, r))
                }
                )),
                o.catch((function(i) {
                    e.trigger("destroyPlugin", i),
                    e.trigger("adError", ie(i.message, 60002, t, r))
                }
                ))
            }
            ))
        }(e, d, t, "vast"),
        "enabled" === t.omidSupport && Ne(h).catch(h.noop),
        this.version = "8.11.0",
        n(this, e.Events),
        h.addClass(i, "jw-plugin-vast"),
        e.on({
            ready: function() {
                d.localization = e.getConfig().localization,
                (v = l.getOptParams(t, d.localization.advertising)).debugTrackFn = c,
                s = {
                    staticPlayer: new C(e,i),
                    companion: new b(c,u,{
                        openLink: h.openLink
                    }),
                    div: i,
                    optionalParams: v
                }
            },
            cast: function(e) {
                y = !!e.active
            },
            play: function(e) {
                p.trigger("playing", e)
            },
            playlistItem: function(t) {
                m += 1,
                k(!0);
                var i = e.getPlaylistItem(t.index);
                a && i !== a.item && !f && (a.off(null, null, p),
                a.destroy(),
                a = null,
                f = !1);
                v.playlistItemEventCount = m,
                (r = a || g(i, m, v)).attachListeners(),
                a = null,
                f = !1,
                r.schedule.isVMAP() ? r.vmapPromise.then((function() {
                    r.isDestroyed() || P(r.schedule)
                }
                )).catch(ut) : P(r.schedule)
            },
            playlistComplete: k,
            complete: function() {
                r && r.clearNonlinearAd()
            },
            destroyPlugin: k,
            destroyBidding: function() {
                o = null
            }
        }, this),
        e.pauseAd = function(e, t) {
            e = "boolean" != typeof e || e,
            r && r.pauseAd(e, t)
        }
        ,
        e.playAd = function(t) {
            var i, a = 0 === v.requestTimeout ? 1 / 0 : v.requestTimeout, n = 0 === v.creativeTimeout ? 1 / 0 : v.creativeTimeout;
            i = Array.isArray(t) ? t.slice(0) : [t];
            var s = h.genId
              , o = {
                _id: s(12),
                _adQueue: i,
                _waterfallIndex: 0,
                _adPodIndex: 0,
                adBreakId: s(12),
                _offset: 0,
                _position: H(e),
                requestTimeout: a || 5e3,
                creativeTimeout: n || 15e3
            };
            r ? (r.clearNonlinearAd(),
            r.playAdAPI(o)) : e.once("playlistItem", (function() {
                return r.playAdAPI(o)
            }
            ))
        }
        ,
        e.skipAd = function() {
            r && r.skipAd()
        }
        ,
        this.destroy = k
    }
    ))
}();
