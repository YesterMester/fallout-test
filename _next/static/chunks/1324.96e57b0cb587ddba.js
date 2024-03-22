(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1324], {
        4644: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n(5304),
                i = n(4033);
            n(2265);
            var r = n(7437);
            t.default = function(e) {
                var t = (0, i.useRouter)(),
                    n = function(e) {
                        var n = e.target.closest("a");
                        if (n && n.href.startsWith(window.location.origin)) {
                            e.preventDefault();
                            var o = n.href.replace(window.location.origin, "");
                            t.push(o)
                        }
                    };
                if (e.isTitle) {
                    var a = e.content;
                    return /^<p>((.|\n)*)<\/p>$/.test(a) && (a = a.substr(3, a.length - 7)), (0, r.jsx)("span", {
                        onClick: n,
                        className: e.className,
                        dangerouslySetInnerHTML: {
                            __html: a
                        }
                    })
                }
                var s = e.content;
                return s && (s = s.replace(/"\/uploads\//g, '"'.concat(o.Z.contentUrl, "/uploads/"))), (0, r.jsx)("div", {
                    onClick: n,
                    className: e.className,
                    dangerouslySetInnerHTML: {
                        __html: s
                    }
                })
            }
        },
        1324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var o = n(2265),
                i = n(9094),
                r = n(6159),
                a = n(7437),
                s = function() {
                    var e = (0, o.useContext)(r.LoadingContext),
                        t = e.loadingSaves,
                        n = e.loadingSaveAdd;
                    return n || t || n ? (0, a.jsx)(i.Z, {
                        center: !0
                    }) : null
                };
            n(1479), n(4989);
            var c = n(5304),
                l = function(e) {
                    var t = (0, o.useRef)(null),
                        n = (0, o.useContext)(r.LoadingContext).loadingSaves,
                        i = e.source;
                    (0, o.useEffect)(function() {
                        if (null !== t && null !== t.current) {
                            var n = t.current,
                                o = Dos(n, {
                                    emulatorFunction: "dosboxWorker"
                                });
                            return e.setDos(o),
                                function() {
                                    o.stop()
                                }
                        }
                    }, [t, Dos]);
                    var s = e.setCi;
                    return (0, o.useEffect)(function() {
                        var t = function(t) {
                            t && t.layersConfig && (t.storedLayersConfig = t.layersConfig, e.mobileMode ? t.enableMobileControls() : t.disableMobileControls())
                        };
                        if (null !== e.dos && !n) {
                            if (0 === e.saves.length) e.dos.run(e.source).then(function(n) {
                                s(n), console.log(n), t(e.dos)
                            });
                            else {
                                var o = "".concat(c.Z.api.saveFiles, "/").concat(e.saves[0].data);
                                e.dos.run(e.source, o + "#").then(function(n) {
                                    s(n), console.log(n), t(e.dos)
                                })
                            }
                        }
                    }, [e.dos, i, n, e.saves]), (0, a.jsx)("div", {
                        ref: t,
                        className: "js-dos",
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    })
                },
                u = n(9891),
                d = n(4001),
                f = n.n(d),
                v = n(4644),
                g = n(5539),
                h = n(2050),
                m = n(9330),
                w = function() {
                    var e = (0, o.useState)({
                            width: void 0,
                            height: void 0
                        }),
                        t = e[0],
                        n = e[1];
                    return (0, o.useEffect)(function() {
                        function e() {
                            n({
                                width: window.innerWidth,
                                height: window.innerHeight
                            })
                        }
                        return window.addEventListener("resize", e), e(),
                            function() {
                                return window.removeEventListener("resize", e)
                            }
                    }, []), t
                },
                p = function(e) {
                    var t, n = w().width,
                        i = (0, o.useContext)(h.UserContext).user_id,
                        s = (0, o.useContext)(r.LoadingContext),
                        l = s.setLoadingSaves,
                        d = s.setLoadingSaveAdd,
                        p = (0, o.useContext)(g.NotificationContext).addFloatingNotification,
                        b = (0, o.useState)(!1),
                        x = b[0],
                        y = b[1],
                        j = (0, o.useState)(!1),
                        L = j[0],
                        S = j[1],
                        C = (0, o.useState)(!1),
                        N = C[0],
                        k = C[1],
                        E = e.setSaves;
                    (0, o.useEffect)(function() {
                        "" !== i && (l(!0), fetch(c.Z.api.saves + "/" + e.gameName + "/" + i, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            credentials: "include"
                        }).then(m.d).then(function(e) {
                            return e.json()
                        }).then(function(e) {
                            E(e), l(!1), e.length && p({
                                type: "success",
                                text: "Your save has been loaded.",
                                showBell: !0
                            })
                        }).catch(function(e) {
                            console.log(e), l(!1)
                        }))
                    }, [i, e.gameName]), (0, o.useEffect)(function() {
                        e.dos && (e.dos.layersConfig && (e.dos.storedLayersConfig = e.dos.layersConfig), e.mobileMode ? e.dos.enableMobileControls() : e.dos.disableMobileControls())
                    }, [e.mobileMode, e.dos]);
                    var H = e.setMobile;
                    (0, o.useEffect)(function() {
                        n && n > 991 ? H(!1) : H(!0)
                    }, [n]), (0, o.useEffect)(function() {
                        if (n && n < 991) {
                            var t;
                            null !== (t = e.dos) && void 0 !== t && t.layers.keyboardVisible || O()
                        }
                    }, [n]);
                    var M = function() {
                            void 0 !== document.activeElement && null !== document.activeElement && "[object HTMLButtonElement]" === document.activeElement.toString() && document.activeElement.blur(), document.body.focus()
                        },
                        z = (t = (0, u.Z)(f().mark(function t(n) {
                            var o, r, a;
                            return f().wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n.preventDefault(), M(), !(null !== e.ci)) {
                                            t.next = 11;
                                            break
                                        }
                                        return t.next = 5, e.ci.persist();
                                    case 5:
                                        o = t.sent, d(!0), r = new Blob([o.buffer], {
                                            type: "octet/stream"
                                        }), (a = new FormData).append("save", r, "file.zip"), fetch(c.Z.api.saves + "/" + e.gameName + "/" + i + "/1", {
                                            method: "POST",
                                            credentials: "include",
                                            body: a
                                        }).then(m.d).then(function(e) {
                                            return e.json()
                                        }).then(function() {
                                            d(!1), p({
                                                type: "success",
                                                text: "Your save has been stored.",
                                                showBell: !0
                                            })
                                        }).catch(function(e) {
                                            console.log(e), d(!1), p({
                                                type: "warning",
                                                text: "Cant store this save",
                                                showBell: !0
                                            })
                                        });
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }, t)
                        })), function(e) {
                            return t.apply(this, arguments)
                        }),
                        O = function() {
                            M(), null != e.dos && (e.mobileMode ? (e.setMobile(!1), setTimeout(function() {
                                var t;
                                null === (t = e.dos) || void 0 === t || t.layers.toggleKeyboard(), S(!L)
                            }, 50)) : (e.dos.layers.toggleKeyboard(), S(!L)))
                        };
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)("div", {
                            className: "controls fixed bottom-0 left-0 w-full z-50 flex items-center justify-between px-16 py-2 bg-white",
                            children: [e.infoBox && e.infoBox.length > 0 ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("button", {
                                    "data-title": "More information",
                                    title: "More information",
                                    className: "relative h-6 w-6 flex items-center justify-between info-button ".concat(x ? "active" : ""),
                                    onClick: function() {
                                        return y(!x)
                                    },
                                    children: (0, a.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: 1.5,
                                        stroke: "currentColor",
                                        className: "w-6 h-6",
                                        children: (0, a.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                                        })
                                    })
                                }), x ? (0, a.jsx)("div", {
                                    className: "show-info",
                                    children: (0, a.jsx)(v.default, {
                                        content: e.infoBox,
                                        isTitle: !0
                                    })
                                }) : null]
                            }) : null, (0, a.jsx)("button", {
                                "data-title": "DOS menu",
                                title: "DOS menu",
                                className: "relative h-6 w-6 flex items-center justify-between keyboard-button",
                                onClick: function() {
                                    var e = document.querySelector(".game-box-wrapper>.js-dos>.flex-grow-0>div>.filter>.h-4.w-4.my-4");
                                    e ? e.click() : (e = document.querySelector(".game-box-wrapper>.js-dos>.flex-grow-0>.h-full>.bg-gray-300>.filter>.h-4.w-4")) && e.click()
                                },
                                children: (0, a.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 1.5,
                                    stroke: "currentColor",
                                    className: "w-6 h-6",
                                    children: (0, a.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                                    })
                                })
                            }), (0, a.jsx)("button", {
                                "data-title": "Save progress",
                                title: "Save progress",
                                className: "relative h-6 w-6 flex items-center justify-between store",
                                onClick: z,
                                children: (0, a.jsxs)("svg", {
                                    className: "w-6 h-6",
                                    viewBox: "0 0 24 24",
                                    role: "img",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    stroke: "#000000",
                                    strokeWidth: "1",
                                    strokeLinecap: "square",
                                    strokeLinejoin: "miter",
                                    fill: "none",
                                    color: "#000000",
                                    children: [(0, a.jsx)("path", {
                                        d: "M17.2928932,3.29289322 L21,7 L21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 L16.5857864,3 C16.8510029,3 17.1053568,3.10535684 17.2928932,3.29289322 Z"
                                    }), (0, a.jsx)("rect", {
                                        width: "10",
                                        height: "8",
                                        x: "7",
                                        y: "13"
                                    }), (0, a.jsx)("rect", {
                                        width: "8",
                                        height: "5",
                                        x: "8",
                                        y: "3"
                                    })]
                                })
                            }), (0, a.jsx)("button", {
                                "data-title": "Show keyboard",
                                title: "Show keyboard",
                                className: "relative h-6 w-6 flex items-center justify-between fullscreen-button xl:hidden keyboard",
                                onClick: O,
                                children: (0, a.jsx)("svg", {
                                    stroke: "currentColor",
                                    fill: "currentColor",
                                    className: "w-6 h-6",
                                    strokeWidth: "0",
                                    viewBox: "0 0 576 512",
                                    height: "1em",
                                    width: "1em",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, a.jsx)("path", {
                                        d: "M64 112c-8.8 0-16 7.2-16 16V384c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H64zM0 128C0 92.7 28.7 64 64 64H512c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM176 320H400c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm-72-72c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H200c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H200c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H280c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H280c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H360c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H360c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H440c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H440c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16z"
                                    })
                                })
                            }), (0, a.jsx)("button", {
                                "data-title": "Toggle fullscreen",
                                title: "Toggle fullscreen",
                                className: "relative h-6 w-6 flex items-center justify-between fullscreen-button ".concat(N ? "active" : ""),
                                onClick: function() {
                                    M(), null !== e.dos && (e.dos.layers.toggleFullscreen(), k(!N))
                                },
                                children: (0, a.jsx)("svg", {
                                    strokeWidth: "0",
                                    viewBox: "0 0 16 16",
                                    className: "w-4 h-4",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, a.jsx)("path", {
                                        fillRule: "evenodd",
                                        d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"
                                    })
                                })
                            })]
                        })
                    })
                },
                b = function(e) {
                    var t = e.gameName,
                        n = (0, o.useContext)(h.UserContext).user_id,
                        i = (0, o.useState)(null),
                        r = i[0],
                        s = i[1],
                        l = (0, o.useMemo)(function() {
                            return new Date().toISOString()
                        }, [t]),
                        u = (0, o.useState)(0),
                        d = u[0],
                        f = u[1],
                        v = (0, o.useState)(!0),
                        g = v[0],
                        m = v[1],
                        w = o.useRef(d);
                    return (0, o.useEffect)(function() {
                        return null === r && s(window.setInterval(function() {
                                if (!document.hidden && g) {
                                    var e = w.current + 1;
                                    w.current = e, f(e)
                                }
                            }, 1e3)),
                            function() {
                                r && window.clearInterval(r)
                            }
                    }, []), (0, o.useEffect)(function() {
                        var e = function(e) {
                                return "boolean" == typeof e ? e ? m(!0) : m(!1) : document.hidden ? m(!1) : m(!0)
                            },
                            t = function() {
                                return e(!1)
                            },
                            n = function() {
                                return e(!0)
                            };
                        return document.addEventListener("visibilitychange", e), document.addEventListener("blur", t), window.addEventListener("blur", t), window.addEventListener("focus", n), document.addEventListener("focus", n),
                            function() {
                                window.removeEventListener("blur", e), document.removeEventListener("blur", t), window.removeEventListener("focus", t), document.removeEventListener("focus", n), document.removeEventListener("visibilitychange", n)
                            }
                    }, []), (0, o.useEffect)(function() {
                        var e = function() {
                            if (null !== n) {
                                var e = {
                                        user_guid: n,
                                        game: t,
                                        play_length: w.current,
                                        play_start: l
                                    },
                                    o = new Blob([JSON.stringify(e)], {
                                        type: "application/json"
                                    });
                                e.play_length > 10 && navigator.sendBeacon(c.Z.api.activity, o)
                            }
                        };
                        return window.addEventListener("unload", e),
                            function() {
                                window.removeEventListener("unload", e)
                            }
                    }, []), (0, o.useEffect)(function() {
                        return function() {
                            if (null !== n) {
                                var e = {
                                        user_guid: n,
                                        game: t,
                                        play_length: w.current,
                                        play_start: l
                                    },
                                    o = new Blob([JSON.stringify(e)], {
                                        type: "application/json"
                                    });
                                e.play_length > 10 && navigator.sendBeacon(c.Z.api.activity, o)
                            }
                        }
                    }, []), (0, a.jsx)(a.Fragment, {})
                },
                x = function(e) {
                    var t = (0, o.useState)([]),
                        n = t[0],
                        i = t[1],
                        r = (0, o.useState)(null),
                        c = r[0],
                        u = r[1],
                        d = (0, o.useState)(null),
                        f = d[0],
                        v = d[1],
                        g = (0, o.useState)(!1),
                        h = g[0],
                        m = g[1];
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(s, {}), (0, a.jsx)(l, {
                            source: e.source,
                            dos: c,
                            ci: f,
                            saves: n,
                            mobileMode: h,
                            setDos: u,
                            setCi: v
                        }), (0, a.jsx)(p, {
                            dos: c,
                            ci: f,
                            gameName: e.gameName,
                            mobileMode: h,
                            setSaves: i,
                            setMobile: m,
                            infoBox: e.infoBox
                        }), (0, a.jsx)(b, {
                            gameName: e.gameName
                        })]
                    })
                }
        },
        6159: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LoadingContext: function() {
                    return r
                }
            });
            var o = n(2265),
                i = n(7437),
                r = (0, o.createContext)({
                    loadingSaves: !1,
                    loadingSaveAdd: !1,
                    loadingLogin: !1,
                    loadingUsernameLogin: !1,
                    loadingGameRate: !1,
                    loadingUser: !1,
                    setLoadingSaves: function() {
                        return null
                    },
                    setLoadingSaveAdd: function() {
                        return null
                    },
                    setLoadingLogin: function() {
                        return null
                    },
                    setLoadingUsernameLogin: function() {
                        return null
                    },
                    setLoadingGameRate: function() {
                        return null
                    },
                    setLoadingUser: function() {
                        return null
                    }
                });
            t.default = function(e) {
                var t = (0, o.useState)(!1),
                    n = t[0],
                    a = t[1],
                    s = (0, o.useState)(!1),
                    c = s[0],
                    l = s[1],
                    u = (0, o.useState)(!1),
                    d = u[0],
                    f = u[1],
                    v = (0, o.useState)(!1),
                    g = v[0],
                    h = v[1],
                    m = (0, o.useState)(!1),
                    w = m[0],
                    p = m[1],
                    b = (0, o.useState)(!1),
                    x = b[0],
                    y = b[1];
                return (0, i.jsx)(r.Provider, {
                    value: {
                        loadingSaves: n,
                        loadingSaveAdd: c,
                        loadingLogin: d,
                        loadingUsernameLogin: g,
                        loadingGameRate: w,
                        loadingUser: x,
                        setLoadingSaves: a,
                        setLoadingSaveAdd: l,
                        setLoadingLogin: f,
                        setLoadingUsernameLogin: h,
                        setLoadingGameRate: p,
                        setLoadingUser: y
                    },
                    children: e.children
                })
            }
        },
        5539: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NotificationContext: function() {
                    return l
                }
            });
            var o = n(941),
                i = n(8629),
                r = n(2265),
                a = n(7437);

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, o)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach(function(t) {
                        (0, i.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var l = (0, r.createContext)({
                floatingNotificationId: 1,
                floatingNotifications: [],
                addFloatingNotification: function() {
                    return null
                },
                updateNotifications: function() {
                    return null
                },
                deleteFloatingNotification: function() {
                    return null
                }
            });
            t.default = function(e) {
                var t = (0, r.useState)(1),
                    n = t[0],
                    i = t[1],
                    s = (0, r.useState)([]),
                    u = s[0],
                    d = s[1];
                return (0, a.jsx)(l.Provider, {
                    value: {
                        floatingNotificationId: n,
                        floatingNotifications: u,
                        addFloatingNotification: function(e) {
                            var t = c(c({}, e), {}, {
                                id: n + 1,
                                validFrom: new Date,
                                goingToShow: !0,
                                goingToHide: !1
                            });
                            d([].concat((0, o.Z)(u), [t])), i(n + 1)
                        },
                        updateNotifications: function(e) {
                            var t = [];
                            e.forEach(function(e) {
                                var n = Number(new Date().getTime() - new Date(e.validFrom).getTime());
                                n < 4500 ? e.goingToShow = !0 : n > 4500 && (e.goingToHide = !0), n < 5200 && t.push(e)
                            }), d(t)
                        },
                        deleteFloatingNotification: function(e) {
                            var t = u.findIndex(function(t) {
                                return t.id === e
                            });
                            void 0 !== t && d([].concat((0, o.Z)(u.slice(0, t)), (0, o.Z)(u.slice(t + 1))))
                        }
                    },
                    children: e.children
                })
            }
        },
        4989: function() {},
        1479: function() {},
        4033: function(e, t, n) {
            e.exports = n(8523)
        },
        941: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var o = n(6015),
                i = n(909);

            function r(e) {
                return function(e) {
                    if (Array.isArray(e)) return (0, o.Z)(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || (0, i.Z)(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        }
    }
]);