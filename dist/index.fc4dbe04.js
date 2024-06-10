/*!
 * Flip 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ !function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], e) : e((t = t || self).window = t.window || {});
}(this, function(e) {
    "use strict";
    function p(t) {
        var e = t.ownerDocument || t;
        !(w in t.style) && "msTransform" in t.style && (k = (w = "msTransform") + "Origin");
        for(; e.parentNode && (e = e.parentNode););
        if (y = window, d = new M, e) {
            a = (g = e).documentElement, b = e.body, (s = g.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none";
            var i = e.createElement("div"), n = e.createElement("div"), r = e && (e.body || e.firstElementChild);
            r && r.appendChild && (r.appendChild(i), i.appendChild(n), i.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"), m = n.offsetParent !== i, r.removeChild(i));
        }
        return e;
    }
    function t() {
        return y.pageYOffset || g.scrollTop || a.scrollTop || b.scrollTop || 0;
    }
    function u() {
        return y.pageXOffset || g.scrollLeft || a.scrollLeft || b.scrollLeft || 0;
    }
    function v(t) {
        return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null);
    }
    function x(t, e) {
        if (t.parentNode && (g || p(t))) {
            var i = v(t), n = i ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", r = i ? e ? "rect" : "g" : "div", a = 2 !== e ? 0 : 100, s = 3 === e ? 100 : 0, o = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", l = g.createElementNS ? g.createElementNS(n.replace(/^https/, "http"), r) : g.createElement(r);
            return e && (i ? (f = f || x(t), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + a + "," + s + ")"), f.appendChild(l)) : (c || ((c = x(t)).style.cssText = o), l.style.cssText = o + "width:0.1px;height:0.1px;top:" + s + "px;left:" + a + "px", c.appendChild(l))), l;
        }
        throw "Need document and parent.";
    }
    function z(t) {
        var e, i = t.getCTM();
        return i || (e = t.style[w], t.style[w] = "none", t.appendChild(s), i = s.getCTM(), t.removeChild(s), e ? t.style[w] = e : t.style.removeProperty(w.replace(/([A-Z])/g, "-$1").toLowerCase())), i || d.clone();
    }
    function A(t, e) {
        var i, n, r, a, s, o, l = v(t), u = t === l, p = l ? C : E, h = t.parentNode;
        if (t === y) return t;
        if (p.length || p.push(x(t, 1), x(t, 2), x(t, 3)), i = l ? f : c, l) u ? (a = -(r = z(t)).e / r.a, s = -r.f / r.d, n = d) : t.getBBox ? (r = t.getBBox(), a = (n = (n = t.transform ? t.transform.baseVal : {}).numberOfItems ? 1 < n.numberOfItems ? function _consolidate(t) {
            for(var e = new M, i = 0; i < t.numberOfItems; i++)e.multiply(t.getItem(i).matrix);
            return e;
        }(n) : n.getItem(0).matrix : d).a * r.x + n.c * r.y, s = n.b * r.x + n.d * r.y) : (n = new M, a = s = 0), e && "g" === t.tagName.toLowerCase() && (a = s = 0), (u ? l : h).appendChild(i), i.setAttribute("transform", "matrix(" + n.a + "," + n.b + "," + n.c + "," + n.d + "," + (n.e + a) + "," + (n.f + s) + ")");
        else {
            if (a = s = 0, m) for(n = t.offsetParent, r = t; (r = r && r.parentNode) && r !== n && r.parentNode;)4 < (y.getComputedStyle(r)[w] + "").length && (a = r.offsetLeft, s = r.offsetTop, r = 0);
            if ("absolute" !== (o = y.getComputedStyle(t)).position && "fixed" !== o.position) for(n = t.offsetParent; h && h !== n;)a += h.scrollLeft || 0, s += h.scrollTop || 0, h = h.parentNode;
            (r = i.style).top = t.offsetTop - s + "px", r.left = t.offsetLeft - a + "px", r[w] = o[w], r[k] = o[k], r.position = "fixed" === o.position ? "fixed" : "absolute", t.parentNode.appendChild(i);
        }
        return i;
    }
    function B(t, e, i, n, r, a, s) {
        return t.a = e, t.b = i, t.c = n, t.d = r, t.e = a, t.f = s, t;
    }
    var g, y, a, b, c, f, d, s, m, i, w = "transform", k = w + "Origin", C = [], E = [], M = ((i = Matrix2D.prototype).inverse = function inverse() {
        var t = this.a, e = this.b, i = this.c, n = this.d, r = this.e, a = this.f, s = t * n - e * i || 1e-10;
        return B(this, n / s, -e / s, -i / s, t / s, (i * a - n * r) / s, -(t * a - e * r) / s);
    }, i.multiply = function multiply(t) {
        var e = this.a, i = this.b, n = this.c, r = this.d, a = this.e, s = this.f, o = t.a, l = t.c, u = t.b, p = t.d, h = t.e, c = t.f;
        return B(this, o * e + u * n, o * i + u * r, l * e + p * n, l * i + p * r, a + h * e + c * n, s + h * i + c * r);
    }, i.clone = function clone() {
        return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
    }, i.equals = function equals(t) {
        var e = this.a, i = this.b, n = this.c, r = this.d, a = this.e, s = this.f;
        return e === t.a && i === t.b && n === t.c && r === t.d && a === t.e && s === t.f;
    }, i.apply = function apply(t, e) {
        void 0 === e && (e = {});
        var i = t.x, n = t.y, r = this.a, a = this.b, s = this.c, o = this.d, l = this.e, u = this.f;
        return e.x = i * r + n * s + l || 0, e.y = i * a + n * o + u || 0, e;
    }, Matrix2D);
    function Matrix2D(t, e, i, n, r, a) {
        void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 1), void 0 === r && (r = 0), void 0 === a && (a = 0), B(this, t, e, i, n, r, a);
    }
    function getGlobalMatrix(e, i, n, r) {
        if (!e || !e.parentNode || (g || p(e)).documentElement === e) return new M;
        var a = function _forceNonZeroScale(t) {
            for(var e, i; t && t !== b;)(i = t._gsap) && i.uncache && i.get(t, "x"), i && !i.scaleX && !i.scaleY && i.renderTransform && (i.scaleX = i.scaleY = 1e-4, i.renderTransform(1, i), e ? e.push(i) : e = [
                i
            ]), t = t.parentNode;
            return e;
        }(e), s = v(e) ? C : E, o = A(e, n), l = s[0].getBoundingClientRect(), h = s[1].getBoundingClientRect(), c = s[2].getBoundingClientRect(), f = o.parentNode, d = !r && function _isFixed(t) {
            return "fixed" === y.getComputedStyle(t).position || ((t = t.parentNode) && 1 === t.nodeType ? _isFixed(t) : void 0);
        }(e), m = new M((h.left - l.left) / 100, (h.top - l.top) / 100, (c.left - l.left) / 100, (c.top - l.top) / 100, l.left + (d ? 0 : u()), l.top + (d ? 0 : t()));
        if (f.removeChild(o), a) for(l = a.length; l--;)(h = a[l]).scaleX = h.scaleY = 0, h.renderTransform(1, h);
        return i ? m.inverse() : m;
    }
    function L(t, e) {
        return t.actions.forEach(function(t) {
            return t.vars[e] && t.vars[e](t);
        });
    }
    function S(t) {
        return "string" == typeof t ? t.split(" ").join("").split(",") : t;
    }
    function V(t) {
        return I(t)[0] || console.warn("Element not found:", t);
    }
    function W(t) {
        return Math.round(1e4 * t) / 1e4 || 0;
    }
    function X(t, e, i) {
        return t.forEach(function(t) {
            return t.classList[i](e);
        });
    }
    function $(t) {
        return t.replace(/([A-Z])/g, "-$1").toLowerCase();
    }
    function _(t, e) {
        var i, n = {};
        for(i in t)e[i] || (n[i] = t[i]);
        return n;
    }
    function ba(t) {
        var e = st[t] = S(t);
        return et[t] = e.concat(nt), e;
    }
    function ea(t, e, i) {
        return t.forEach(function(t) {
            return t.d = function _getDOMDepth(t, e, i) {
                void 0 === i && (i = 0);
                for(var n = t.parentNode, r = 1e3 * Math.pow(10, i) * (e ? -1 : 1), a = e ? 900 * -r : 0; t;)a += r, t = t.previousSibling;
                return n ? a + _getDOMDepth(n, e, i + 1) : a;
            }(i ? t.element : t.t, e);
        }), t.sort(function(t, e) {
            return t.d - e.d;
        }), t;
    }
    function fa(t, e) {
        for(var i, n, r = t.element.style, a = t.css = t.css || [], s = e.length; s--;)n = r[i = e[s]] || r.getPropertyValue(i), a.push(n ? i : Y[i] || (Y[i] = $(i)), n);
        return r;
    }
    function ga(t) {
        var e = t.css, i = t.element.style, n = 0;
        for(t.cache.uncache = 1; n < e.length; n += 2)e[n + 1] ? i[e[n]] = e[n + 1] : i.removeProperty(e[n]);
        !e[e.indexOf("transform") + 1] && i.translate && (i.removeProperty("translate"), i.removeProperty("scale"), i.removeProperty("rotate"));
    }
    function ha(t, e) {
        t.forEach(function(t) {
            return t.a.cache.uncache = 1;
        }), e || t.finalStates.forEach(ga);
    }
    function ja(e, i, n) {
        var r, a, s, o = e.element, l = e.width, p = e.height, h = e.uncache, c = e.getProp, f = o.style, d = 4;
        if ("object" != typeof i && (i = e), tt && 1 !== n) return tt._abs.push({
            t: o,
            b: e,
            a: e,
            sd: 0
        }), tt._final.push(function() {
            return e.cache.uncache = 1, ga(e);
        }), o;
        for(a = "none" === c("display"), e.isVisible && !a || (a && (fa(e, [
            "display"
        ]).display = i.display), e.matrix = i.matrix, e.width = l = e.width || i.width, e.height = p = e.height || i.height), fa(e, R), s = window.getComputedStyle(o); d--;)f[R[d]] = s[R[d]];
        if (f.gridArea = "1 / 1 / 1 / 1", f.transition = "none", f.position = "absolute", f.width = l + "px", f.height = p + "px", f.top || (f.top = "0px"), f.left || (f.left = "0px"), h) r = new pt(o);
        else if ((r = _(e, D)).position = "absolute", e.simple) {
            var m = o.getBoundingClientRect();
            r.matrix = new M(1, 0, 0, 1, m.left + u(), m.top + t());
        } else r.matrix = getGlobalMatrix(o, !1, !1, !0);
        return r = ot(r, e, !0), e.x = P(r.x, .01), e.y = P(r.y, .01), o;
    }
    function ka(t, e) {
        return !0 !== e && (e = I(e), t = t.filter(function(t) {
            if (-1 !== e.indexOf((t.sd < 0 ? t.b : t.a).element)) return !0;
            t.t._gsap.renderTransform(1), t.b.isVisible && (t.t.style.width = t.b.width + "px", t.t.style.height = t.b.height + "px");
        })), t;
    }
    function la(t) {
        return ea(t, !0).forEach(function(t) {
            return (t.a.isVisible || t.b.isVisible) && ja(t.sd < 0 ? t.b : t.a, t.b, 1);
        });
    }
    function pa(t, e) {
        var i, n = t.style || t;
        for(i in e)n[i] = e[i];
    }
    function ra(t) {
        return t.map(function(t) {
            return t.element;
        });
    }
    function sa(t, e, i) {
        return t && e.length && i.add(t(ra(e), i, new ut(e, 0, !0)), 0);
    }
    function ua(t, e) {
        return t instanceof ut ? t : new ut(t, e);
    }
    function va(t, e, i) {
        var n = t.idLookup[i], r = t.alt[i];
        return !r.isVisible || (e.getElementState(r.element) || r).isVisible && n.isVisible ? n : r;
    }
    function za(t) {
        if (t !== l) {
            var e = o.style, i = o.clientWidth === window.outerWidth, n = o.clientHeight === window.outerHeight, r = 4;
            if (t && (i || n)) {
                for(; r--;)j[r] = e[H[r]];
                i && (e.width = o.clientWidth + "px", e.overflowY = "hidden"), n && (e.height = o.clientHeight + "px", e.overflowX = "hidden"), l = t;
            } else if (l) {
                for(; r--;)j[r] ? e[H[r]] = j[r] : e.removeProperty($(H[r]));
                l = t;
            }
        }
    }
    function Aa(t, e, r, i) {
        t instanceof ut && e instanceof ut || console.warn("Not a valid state object.");
        var a, s, o, l, u, p, h, c, f, n, d, m, g, v, y, x = (r = r || {}).clearProps, b = r.onEnter, w = r.onLeave, S = r.absolute, k = r.absoluteOnLeave, C = r.custom, V = r.delay, E = r.paused, M = r.repeat, B = r.repeatDelay, F = r.yoyo, L = r.toggleClass, I = r.nested, P = r.zIndex, A = r.scale, T = r.fade, O = r.stagger, N = r.spin, D = r.prune, Y = ("props" in r ? r : t).props, z = _(r, rt), R = Q.timeline({
            delay: V,
            paused: E,
            repeat: M,
            repeatDelay: B,
            yoyo: F,
            data: "isFlip"
        }), W = z, G = [], j = [], H = [], q = [], $ = !0 === N ? 1 : N || 0, Z = "function" == typeof N ? N : function() {
            return $;
        }, J = t.interrupted || e.interrupted, U = R[1 !== i ? "to" : "from"];
        for(s in e.idLookup)d = e.alt[s] ? va(e, t, s) : e.idLookup[s], u = d.element, n = t.idLookup[s], !t.alt[s] || u !== n.element || !t.alt[s].isVisible && d.isVisible || (n = t.alt[s]), n ? (p = {
            t: u,
            b: n,
            a: d,
            sd: n.element === u ? 0 : d.isVisible ? 1 : -1
        }, H.push(p), p.sd && (p.sd < 0 && (p.b = d, p.a = n), J && fa(p.b, Y ? et[Y] : nt), T && H.push(p.swap = {
            t: n.element,
            b: p.b,
            a: p.a,
            sd: -p.sd,
            swap: p
        })), u._flip = n.element._flip = tt ? tt.timeline : R) : d.isVisible && (H.push({
            t: u,
            b: _(d, {
                isVisible: 1
            }),
            a: d,
            sd: 0,
            entering: 1
        }), u._flip = tt ? tt.timeline : R);
        Y && (st[Y] || ba(Y)).forEach(function(e) {
            return z[e] = function(t) {
                return H[t].a.props[e];
            };
        }), H.finalStates = f = [], m = function run() {
            for(ea(H), za(!0), l = 0; l < H.length; l++)p = H[l], g = p.a, v = p.b, !D || g.isDifferent(v) || p.entering ? (u = p.t, !I || p.sd < 0 || !l || (g.matrix = getGlobalMatrix(u, !1, !1, !0)), v.isVisible && g.isVisible ? (p.sd < 0 ? (h = new pt(u, Y, t.simple), ot(h, g, A, 0, 0, h), h.matrix = getGlobalMatrix(u, !1, !1, !0), h.css = p.b.css, p.a = g = h, T && (u.style.opacity = J ? v.opacity : g.opacity), O && q.push(u)) : 0 < p.sd && T && (u.style.opacity = J ? g.opacity - v.opacity : "0"), ot(g, v, A, Y)) : v.isVisible !== g.isVisible && (v.isVisible ? g.isVisible || (v.css = g.css, j.push(v), H.splice(l--, 1), S && I && ot(g, v, A, Y)) : (g.isVisible && G.push(g), H.splice(l--, 1))), A || (u.style.maxWidth = Math.max(g.width, v.width) + "px", u.style.maxHeight = Math.max(g.height, v.height) + "px", u.style.minWidth = Math.min(g.width, v.width) + "px", u.style.minHeight = Math.min(g.height, v.height) + "px"), I && L && u.classList.add(L)) : H.splice(l--, 1), f.push(g);
            var e;
            if (L && (e = f.map(function(t) {
                return t.element;
            }), I && e.forEach(function(t) {
                return t.classList.remove(L);
            })), za(!1), A ? (z.scaleX = function(t) {
                return H[t].a.scaleX;
            }, z.scaleY = function(t) {
                return H[t].a.scaleY;
            }) : (z.width = function(t) {
                return H[t].a.width + "px";
            }, z.height = function(t) {
                return H[t].a.height + "px";
            }, z.autoRound = r.autoRound || !1), z.x = function(t) {
                return H[t].a.x + "px";
            }, z.y = function(t) {
                return H[t].a.y + "px";
            }, z.rotation = function(t) {
                return H[t].a.rotation + (N ? 360 * Z(t, c[t], c) : 0);
            }, z.skewX = function(t) {
                return H[t].a.skewX;
            }, c = H.map(function(t) {
                return t.t;
            }), !P && 0 !== P || (z.modifiers = {
                zIndex: function zIndex() {
                    return P;
                }
            }, z.zIndex = P, z.immediateRender = !1 !== r.immediateRender), T && (z.opacity = function(t) {
                return H[t].sd < 0 ? 0 : 0 < H[t].sd ? H[t].a.opacity : "+=0";
            }), q.length) {
                O = Q.utils.distribute(O);
                var i = c.slice(q.length);
                z.stagger = function(t, e) {
                    return O(~q.indexOf(e) ? c.indexOf(H[t].swap.t) : t, e, i);
                };
            }
            if (it.forEach(function(t) {
                return r[t] && R.eventCallback(t, r[t], r[t + "Params"]);
            }), C && c.length) for(s in W = _(z, rt), "scale" in C && (C.scaleX = C.scaleY = C.scale, delete C.scale), C)(a = _(C[s], at))[s] = z[s], !("duration" in a) && "duration" in z && (a.duration = z.duration), a.stagger = z.stagger, U.call(R, c, a, 0), delete W[s];
            (c.length || j.length || G.length) && (L && R.add(function() {
                return X(e, L, R._zTime < 0 ? "remove" : "add");
            }, 0) && !E && X(e, L, "add"), c.length && U.call(R, c, W, 0)), sa(b, G, R), sa(w, j, R);
            var n = tt && tt.timeline;
            n && (n.add(R, 0), tt._final.push(function() {
                return ha(H, !x);
            })), o = R.duration(), R.call(function() {
                var t = R.time() >= o;
                t && !n && ha(H, !x), L && X(e, L, t ? "remove" : "add");
            });
        }, k && (S = H.filter(function(t) {
            return !t.sd && !t.a.isVisible && t.b.isVisible;
        }).map(function(t) {
            return t.a.element;
        })), tt ? (S && (y = tt._abs).push.apply(y, ka(H, S)), tt._run.push(m)) : (S && la(ka(H, S)), m());
        var K = tt ? tt.timeline : R;
        return K.revert = function() {
            return lt(K, 1, 1);
        }, K;
    }
    function Da(t) {
        for(var e, i = t.idLookup = {}, n = t.alt = {}, r = t.elementStates, a = r.length; a--;)i[(e = r[a]).id] ? n[e.id] = e : i[e.id] = e;
    }
    var I, Q, tt, r, o, P, T, l, n, h = 1, F = {}, O = 180 / Math.PI, N = Math.PI / 180, D = {}, Y = {}, et = {}, it = S("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), nt = S("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), rt = {
        zIndex: 1,
        kill: 1,
        simple: 1,
        spin: 1,
        clearProps: 1,
        targets: 1,
        toggleClass: 1,
        onComplete: 1,
        onUpdate: 1,
        onInterrupt: 1,
        onStart: 1,
        delay: 1,
        repeat: 1,
        repeatDelay: 1,
        yoyo: 1,
        scale: 1,
        fade: 1,
        absolute: 1,
        props: 1,
        onEnter: 1,
        onLeave: 1,
        custom: 1,
        paused: 1,
        nested: 1,
        prune: 1,
        absoluteOnLeave: 1
    }, at = {
        zIndex: 1,
        simple: 1,
        clearProps: 1,
        scale: 1,
        absolute: 1,
        fitChild: 1,
        getVars: 1,
        props: 1
    }, st = {}, R = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), G = function _parseElementState(t, e, i, n) {
        return t instanceof pt ? t : t instanceof ut ? function _findElStateInState(t, e) {
            return e && t.idLookup[G(e).id] || t.elementStates[0];
        }(t, n) : new pt("string" == typeof t ? V(t) || console.warn(t + " not found") : t, e, i);
    }, ot = function _fit(t, e, i, n, r, a) {
        var s, o, l, u, p, h, c, f = t.element, d = t.cache, m = t.parent, g = t.x, v = t.y, y = e.width, x = e.height, b = e.scaleX, w = e.scaleY, S = e.rotation, k = e.bounds, _ = a && T && T(f, "transform"), C = t, V = e.matrix, E = V.e, M = V.f, B = t.bounds.width !== k.width || t.bounds.height !== k.height || t.scaleX !== b || t.scaleY !== w || t.rotation !== S, F = !B && t.simple && e.simple && !r;
        return F || !m ? (b = w = 1, S = s = 0) : (h = (p = function _getInverseGlobalMatrix(t) {
            var e = t._gsap || Q.core.getCache(t);
            return e.gmCache === Q.ticker.frame ? e.gMatrix : (e.gmCache = Q.ticker.frame, e.gMatrix = getGlobalMatrix(t, !0, !1, !0));
        }(m)).clone().multiply(e.ctm ? e.matrix.clone().multiply(e.ctm) : e.matrix), S = W(Math.atan2(h.b, h.a) * O), s = W(Math.atan2(h.c, h.d) * O + S) % 360, b = Math.sqrt(Math.pow(h.a, 2) + Math.pow(h.b, 2)), w = Math.sqrt(Math.pow(h.c, 2) + Math.pow(h.d, 2)) * Math.cos(s * N), r && (r = I(r)[0], u = Q.getProperty(r), c = r.getBBox && "function" == typeof r.getBBox && r.getBBox(), C = {
            scaleX: u("scaleX"),
            scaleY: u("scaleY"),
            width: c ? c.width : Math.ceil(parseFloat(u("width", "px"))),
            height: c ? c.height : parseFloat(u("height", "px"))
        }), d.rotation = S + "deg", d.skewX = s + "deg"), i ? (b *= y !== C.width && C.width ? y / C.width : 1, w *= x !== C.height && C.height ? x / C.height : 1, d.scaleX = b, d.scaleY = w) : (y = P(y * b / C.scaleX, 0), x = P(x * w / C.scaleY, 0), f.style.width = y + "px", f.style.height = x + "px"), n && pa(f, e.props), F || !m ? (g += E - t.matrix.e, v += M - t.matrix.f) : B || m !== e.parent ? (d.renderTransform(1, d), h = getGlobalMatrix(r || f, !1, !1, !0), o = p.apply({
            x: h.e,
            y: h.f
        }), g += (l = p.apply({
            x: E,
            y: M
        })).x - o.x, v += l.y - o.y) : (p.e = p.f = 0, g += (l = p.apply({
            x: E - t.matrix.e,
            y: M - t.matrix.f
        })).x, v += l.y), g = P(g, .02), v = P(v, .02), !a || a instanceof pt ? (d.x = g + "px", d.y = v + "px", d.renderTransform(1, d)) : _ && _.revert(), a && (a.x = g, a.y = v, a.rotation = S, a.skewX = s, i ? (a.scaleX = b, a.scaleY = w) : (a.width = y, a.height = x)), a || d;
    }, j = [], H = "width,height,overflowX,overflowY".split(","), lt = function _killFlip(t, e, i) {
        if (t && t.progress() < 1 && (!t.paused() || i)) return e && (function _interrupt(t) {
            t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []), t.getChildren(!0, !1, !0).forEach(_interrupt);
        }(t), e < 2 && t.progress(1), t.kill()), !0;
    }, ut = ((n = FlipState.prototype).update = function update(t) {
        var e = this;
        return this.elementStates = this.targets.map(function(t) {
            return new pt(t, e.props, e.simple);
        }), Da(this), this.interrupt(t), this.recordInlineStyles(), this;
    }, n.clear = function clear() {
        return this.targets.length = this.elementStates.length = 0, Da(this), this;
    }, n.fit = function fit(t, e, i) {
        for(var n, r, a = ea(this.elementStates.slice(0), !1, !0), s = (t || this).idLookup, o = 0; o < a.length; o++)n = a[o], i && (n.matrix = getGlobalMatrix(n.element, !1, !1, !0)), (r = s[n.id]) && ot(n, r, e, !0, 0, n), n.matrix = getGlobalMatrix(n.element, !1, !1, !0);
        return this;
    }, n.getProperty = function getProperty(t, e) {
        var i = this.getElementState(t) || D;
        return (e in i ? i : i.props || D)[e];
    }, n.add = function add(t) {
        for(var e, i, n, r = t.targets.length, a = this.idLookup, s = this.alt; r--;)(n = a[(i = t.elementStates[r]).id]) && (i.element === n.element || s[i.id] && s[i.id].element === i.element) ? (e = this.elementStates.indexOf(i.element === n.element ? n : s[i.id]), this.targets.splice(e, 1, t.targets[r]), this.elementStates.splice(e, 1, i)) : (this.targets.push(t.targets[r]), this.elementStates.push(i));
        return t.interrupted && (this.interrupted = !0), t.simple || (this.simple = !1), Da(this), this;
    }, n.compare = function compare(t) {
        function kh(t, e, i) {
            return (t.isVisible !== e.isVisible ? t.isVisible ? f : d : t.isVisible ? c : h).push(i) && m.push(i);
        }
        function lh(t, e, i) {
            return m.indexOf(i) < 0 && kh(t, e, i);
        }
        var e, i, n, r, a, s, o, l, u = t.idLookup, p = this.idLookup, h = [], c = [], f = [], d = [], m = [], g = t.alt, v = this.alt;
        for(n in u)a = g[n], s = v[n], r = (e = a ? va(t, this, n) : u[n]).element, i = p[n], s ? (l = i.isVisible || !s.isVisible && r === i.element ? i : s, (o = !a || e.isVisible || a.isVisible || l.element !== a.element ? e : a).isVisible && l.isVisible && o.element !== l.element ? ((o.isDifferent(l) ? c : h).push(o.element, l.element), m.push(o.element, l.element)) : kh(o, l, o.element), a && o.element === a.element && (a = u[n]), lh(o.element !== i.element && a ? a : o, i, i.element), lh(a && a.element === s.element ? a : o, s, s.element), a && lh(a, s.element === a.element ? s : i, a.element)) : (i ? i.isDifferent(e) ? kh(e, i, r) : h.push(r) : f.push(r), a && lh(a, i, a.element));
        for(n in p)u[n] || (d.push(p[n].element), v[n] && d.push(v[n].element));
        return {
            changed: c,
            unchanged: h,
            enter: f,
            leave: d
        };
    }, n.recordInlineStyles = function recordInlineStyles() {
        for(var t = et[this.props] || nt, e = this.elementStates.length; e--;)fa(this.elementStates[e], t);
    }, n.interrupt = function interrupt(n) {
        var r = this, a = [];
        this.targets.forEach(function(t) {
            var e = t._flip, i = lt(e, n ? 0 : 1);
            n && i && a.indexOf(e) < 0 && e.add(function() {
                return r.updateVisibility();
            }), i && a.push(e);
        }), !n && a.length && this.updateVisibility(), this.interrupted || (this.interrupted = !!a.length);
    }, n.updateVisibility = function updateVisibility() {
        this.elementStates.forEach(function(t) {
            var e = t.element.getBoundingClientRect();
            t.isVisible = !!(e.width || e.height || e.top || e.left), t.uncache = 1;
        });
    }, n.getElementState = function getElementState(t) {
        return this.elementStates[this.targets.indexOf(V(t))];
    }, n.makeAbsolute = function makeAbsolute() {
        return ea(this.elementStates.slice(0), !0, !0).map(ja);
    }, FlipState);
    function FlipState(t, e, i) {
        if (this.props = e && e.props, this.simple = !(!e || !e.simple), i) this.targets = ra(t), this.elementStates = t, Da(this);
        else {
            this.targets = I(t);
            var n = e && (!1 === e.kill || e.batch && !e.kill);
            tt && !n && tt._kill.push(this), this.update(n || !!tt);
        }
    }
    var q, pt = ((q = ElementState.prototype).isDifferent = function isDifferent(t) {
        var e = this.bounds, i = t.bounds;
        return e.top !== i.top || e.left !== i.left || e.width !== i.width || e.height !== i.height || !this.matrix.equals(t.matrix) || this.opacity !== t.opacity || this.props && t.props && JSON.stringify(this.props) !== JSON.stringify(t.props);
    }, q.update = function update(e, i) {
        var n = this, r = n.element, a = Q.getProperty(r), s = Q.core.getCache(r), o = r.getBoundingClientRect(), l = r.getBBox && "function" == typeof r.getBBox && "svg" !== r.nodeName.toLowerCase() && r.getBBox(), p = i ? new M(1, 0, 0, 1, o.left + u(), o.top + t()) : getGlobalMatrix(r, !1, !1, !0);
        n.getProp = a, n.element = r, n.id = function _getID(t) {
            var e = t.getAttribute("data-flip-id");
            return e || t.setAttribute("data-flip-id", e = "auto-" + h++), e;
        }(r), n.matrix = p, n.cache = s, n.bounds = o, n.isVisible = !!(o.width || o.height || o.left || o.top), n.display = a("display"), n.position = a("position"), n.parent = r.parentNode, n.x = a("x"), n.y = a("y"), n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.rotation = a("rotation"), n.skewX = a("skewX"), n.opacity = a("opacity"), n.width = l ? l.width : P(a("width", "px"), .04), n.height = l ? l.height : P(a("height", "px"), .04), e && function _recordProps(t, e) {
            for(var i = Q.getProperty(t.element, null, "native"), n = t.props = {}, r = e.length; r--;)n[e[r]] = (i(e[r]) + "").trim();
            n.zIndex && (n.zIndex = parseFloat(n.zIndex) || 0);
        }(n, st[e] || ba(e)), n.ctm = r.getCTM && "svg" === r.nodeName.toLowerCase() && z(r).inverse(), n.simple = i || 1 === W(p.a) && !W(p.b) && !W(p.c) && 1 === W(p.d), n.uncache = 0;
    }, ElementState);
    function ElementState(t, e, i) {
        this.element = t, this.update(e, i);
    }
    var Z, J = ((Z = FlipAction.prototype).getStateById = function getStateById(t) {
        for(var e = this.states.length; e--;)if (this.states[e].idLookup[t]) return this.states[e];
    }, Z.kill = function kill() {
        this.batch.remove(this);
    }, FlipAction);
    function FlipAction(t, e) {
        this.vars = t, this.batch = e, this.states = [], this.timeline = e.timeline;
    }
    var U, K = ((U = FlipBatch.prototype).add = function add(e) {
        var t = this.actions.filter(function(t) {
            return t.vars === e;
        });
        return t.length ? t[0] : (t = new J("function" == typeof e ? {
            animate: e
        } : e, this), this.actions.push(t), t);
    }, U.remove = function remove(t) {
        var e = this.actions.indexOf(t);
        return 0 <= e && this.actions.splice(e, 1), this;
    }, U.getState = function getState(e) {
        var i = this, t = tt, n = r;
        return (tt = this).state.clear(), this._kill.length = 0, this.actions.forEach(function(t) {
            t.vars.getState && (t.states.length = 0, (r = t).state = t.vars.getState(t)), e && t.states.forEach(function(t) {
                return i.state.add(t);
            });
        }), r = n, tt = t, this.killConflicts(), this;
    }, U.animate = function animate() {
        var t, e, i = this, n = tt, r = this.timeline, a = this.actions.length;
        for(tt = this, r.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(function(t) {
            t.vars.animate && t.vars.animate(t);
            var e, i, n = t.vars.onEnter, r = t.vars.onLeave, a = t.targets;
            a && a.length && (n || r) && (e = new ut, t.states.forEach(function(t) {
                return e.add(t);
            }), (i = e.compare(ht.getState(a))).enter.length && n && n(i.enter), i.leave.length && r && r(i.leave));
        }), la(this._abs), this._run.forEach(function(t) {
            return t();
        }), e = r.duration(), t = this._final.slice(0), r.add(function() {
            e <= r.time() && (t.forEach(function(t) {
                return t();
            }), L(i, "onComplete"));
        }), tt = n; a--;)this.actions[a].vars.once && this.actions[a].kill();
        return L(this, "onStart"), r.restart(), this;
    }, U.loadState = function loadState(n) {
        n = n || function done() {
            return 0;
        };
        var r = [];
        return this.actions.forEach(function(e) {
            if (e.vars.loadState) {
                var i, t = function f(t) {
                    t && (e.targets = t), ~(i = r.indexOf(f)) && (r.splice(i, 1), r.length || n());
                };
                r.push(t), e.vars.loadState(t);
            }
        }), r.length || n(), this;
    }, U.setState = function setState() {
        return this.actions.forEach(function(t) {
            return t.targets = t.vars.setState && t.vars.setState(t);
        }), this;
    }, U.killConflicts = function killConflicts(e) {
        return this.state.interrupt(e), this._kill.forEach(function(t) {
            return t.interrupt(e);
        }), this;
    }, U.run = function run(t, e) {
        var i = this;
        return this !== tt && (t || this.getState(e), this.loadState(function() {
            i._killed || (i.setState(), i.animate());
        })), this;
    }, U.clear = function clear(t) {
        this.state.clear(), t || (this.actions.length = 0);
    }, U.getStateById = function getStateById(t) {
        for(var e, i = this.actions.length; i--;)if (e = this.actions[i].getStateById(t)) return e;
        return this.state.idLookup[t] && this.state;
    }, U.kill = function kill() {
        this._killed = 1, this.clear(), delete F[this.id];
    }, FlipBatch);
    function FlipBatch(t) {
        this.id = t, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new ut, this.timeline = Q.timeline();
    }
    var ht = (Flip.getState = function getState(t, e) {
        var i = ua(t, e);
        return r && r.states.push(i), e && e.batch && Flip.batch(e.batch).state.add(i), i;
    }, Flip.from = function from(t, e) {
        return "clearProps" in (e = e || {}) || (e.clearProps = !0), Aa(t, ua(e.targets || t.targets, {
            props: e.props || t.props,
            simple: e.simple,
            kill: !!e.kill
        }), e, -1);
    }, Flip.to = function to(t, e) {
        return Aa(t, ua(e.targets || t.targets, {
            props: e.props || t.props,
            simple: e.simple,
            kill: !!e.kill
        }), e, 1);
    }, Flip.fromTo = function fromTo(t, e, i) {
        return Aa(t, e, i);
    }, Flip.fit = function fit(t, e, i) {
        var n = i ? _(i, at) : {}, r = i || n, a = r.absolute, s = r.scale, o = r.getVars, l = r.props, u = r.runBackwards, p = r.onComplete, h = r.simple, c = i && i.fitChild && V(i.fitChild), f = G(e, l, h, t), d = G(t, 0, h, f), m = l ? et[l] : nt, g = Q.context();
        return l && pa(n, f.props), fa(d, m), u && ("immediateRender" in n || (n.immediateRender = !0), n.onComplete = function() {
            ga(d), p && p.apply(this, arguments);
        }), a && ja(d, f), n = ot(d, f, s || c, l, c, n.duration || o ? n : 0), g && !o && g.add(function() {
            return function() {
                return ga(d);
            };
        }), o ? n : n.duration ? Q.to(d.element, n) : null;
    }, Flip.makeAbsolute = function makeAbsolute(t, e) {
        return (t instanceof ut ? t : new ut(t, e)).makeAbsolute();
    }, Flip.batch = function batch(t) {
        return F[t = t || "default"] || (F[t] = new K(t));
    }, Flip.killFlipsOf = function killFlipsOf(t, e) {
        (t instanceof ut ? t.targets : I(t)).forEach(function(t) {
            return t && lt(t._flip, !1 !== e ? 1 : 2);
        });
    }, Flip.isFlipping = function isFlipping(t) {
        var e = Flip.getByTarget(t);
        return !!e && e.isActive();
    }, Flip.getByTarget = function getByTarget(t) {
        return (V(t) || D)._flip;
    }, Flip.getElementState = function getElementState(t, e) {
        return new pt(V(t), e);
    }, Flip.convertCoordinates = function convertCoordinates(t, e, i) {
        var n = getGlobalMatrix(e, !0, !0).multiply(getGlobalMatrix(t));
        return i ? n.apply(i) : n;
    }, Flip.register = function register(t) {
        if (o = "undefined" != typeof document && document.body) {
            Q = t, p(o), I = Q.utils.toArray, T = Q.core.getStyleSaver;
            var i = Q.utils.snap(.1);
            P = function _closestTenth(t, e) {
                return i(parseFloat(t) + e);
            };
        }
    }, Flip);
    function Flip() {}
    ht.version = "3.12.5", "undefined" != typeof window && window.gsap && window.gsap.registerPlugin(ht), e.Flip = ht, e.default = ht;
    if (typeof window === "undefined" || window !== e) Object.defineProperty(e, "__esModule", {
        value: !0
    });
    else delete e.default;
});

//# sourceMappingURL=index.fc4dbe04.js.map
