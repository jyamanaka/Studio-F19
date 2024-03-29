!(function(n, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t((n.d3 = n.d3 || {}));
})(this, function(n) {
  "use strict";
  function t(n) {
    return function(t, e) {
      return n(t.outer.value, e.outer.value);
    };
  }
  function e(n) {
    return function() {
      return n;
    };
  }
  function r() {
    function n(n) {
      var t = d3
          .nest()
          .key(p)
          .entries(n),
        e = t.length,
        g = [],
        d = d3.range(e),
        y = [],
        m = [];
      m.groups = new Array(e);
      var A = m.groups,
        b = void 0;
      m.innergroups = [];
      var x = m.innergroups,
        M = [],
        I = void 0,
        N = void 0,
        P = void 0,
        k = void 0,
        S = void 0,
        T = void 0,
        _ = void 0,
        w = void 0,
        j = void 0,
        z = void 0,
        C = void 0,
        E = !1,
        G = void 0;
      (I = 0), (b = 0);
      for (var L = 0; L < e; L += 1) {
        for (_ = t[L].values.length, w = 0, k = 0; k < _; k += 1)
          w += v(t[L].values[k]);
        g.push(w), y.push(d3.range(_)), (b += _), (I += w);
      }
      i &&
        d.sort(function(n, t) {
          return i(g[n], g[t]);
        }),
        l &&
          y.forEach(function(n, e) {
            n.sort(function(n, r) {
              return l(s(t[e].values[n]), s(t[e].values[r]));
            });
          });
      var O = I * (o / u);
      S = 0;
      for (var q = 0; q < e; q += 1)
        if (((j = g[d[q]] + O), (S += j) > (I + e * O) / 2)) {
          (z = I + e * O - (S - j)), (G = z / j < 0.5 ? d[q] : d[q - 1]);
          break;
        }
      var B = (I * f) / (1 - f);
      (I += B), (I = Math.max(0, u - o * e) / I);
      var D = I ? o : u / e,
        F = new Array(b);
      (N = 0.25 * B * I), (C = 0);
      for (var H = 0; H < e; H += 1) {
        var J = d[H],
          K = t[J].key;
        for (P = N, T = y[J].length, k = 0; k < T; k += 1) {
          var Q = E ? y[J][T - 1 - k] : y[J][k];
          _ = v(t[J].values[Q]);
          var R = s(t[J].values[Q]),
            U = N;
          N += _ * I;
          var V = N;
          (F[C] = {
            index: J,
            subindex: Q,
            startAngle: U,
            endAngle: V,
            value: _,
            outername: K,
            innername: R,
            groupStartAngle: P
          }),
            M[R] || ((M[R] = !0), x.push({ name: R })),
            (C += 1);
        }
        (A[J] = {
          index: J,
          startAngle: P,
          endAngle: N,
          value: g[J],
          outername: K
        }),
          (N += D),
          G === J && (N += 0.5 * B * I),
          N > Math.PI && (E = !0);
      }
      l &&
        x.sort(function(n, t) {
          return l(n.name, t.name);
        });
      for (var W = x.length, X = 0; X < W; X += 1)
        (x[X].x = 0),
          (x[X].y = (-W * c) / 2 + X * c),
          (x[X].offset = h(x[X].name, X));
      C = 0;
      for (var Y = 0; Y < e; Y += 1) {
        var Z = d[Y];
        for (T = y[Z].length, k = 0; k < T; k += 1) {
          var $ = F[C],
            nn = $.innername,
            tn = r(nn, "name", x);
          $.value && m.push({ inner: tn, outer: $ }), (C += 1);
        }
      }
      return a ? m.sort(a) : m;
    }
    function r(n, t, e) {
      for (var r = 0; r < e.length; r += 1) if (e[r][t] === n) return e[r];
      return null;
    }
    var u = 2 * Math.PI,
      o = 0,
      i = null,
      l = null,
      a = null,
      f = 0.2,
      c = 20,
      h = function() {
        return 30;
      },
      v = function(n) {
        return n.value;
      },
      s = function(n) {
        return n.inner;
      },
      p = function(n) {
        return n.outer;
      };
    return (
      (n.padAngle = function(t) {
        return arguments.length ? ((o = Math.max(0, t)), n) : o;
      }),
      (n.inner = function(t) {
        return arguments.length ? ((s = t), n) : s;
      }),
      (n.outer = function(t) {
        return arguments.length ? ((p = t), n) : p;
      }),
      (n.value = function(t) {
        return arguments.length ? ((v = t), n) : v;
      }),
      (n.heightInner = function(t) {
        return arguments.length ? ((c = t), n) : c;
      }),
      (n.widthInner = function(t) {
        return arguments.length
          ? ((h = "function" == typeof t ? t : e(+t)), n)
          : h;
      }),
      (n.emptyPerc = function(t) {
        return arguments.length
          ? ((f = t < 1 ? Math.max(0, t) : Math.max(0, 0.01 * t)), n)
          : f;
      }),
      (n.sortGroups = function(t) {
        return arguments.length ? ((i = t), n) : i;
      }),
      (n.sortSubgroups = function(t) {
        return arguments.length ? ((l = t), n) : l;
      }),
      (n.sortLooms = function(e) {
        return arguments.length
          ? (null == e ? (a = null) : ((a = t(e))._ = e), n)
          : a && a._;
      }),
      n
    );
  }
  function u() {
    function n() {
      for (
        var n = void 0, e = arguments.length, A = Array(e), b = 0;
        b < e;
        b++
      )
        A[b] = arguments[b];
      var x = t.call(A),
        M = a.apply(this, x),
        I = l.apply(this, x);
      x[0] = M;
      var N = +f.apply(this, x),
        P = h.apply(this, x) - o,
        k = c.apply(this, x) - o,
        S = v.apply(this, x) - o,
        T = N * r(P),
        _ = N * u(P),
        w = N * r(S),
        j = N * u(S);
      x[0] = I;
      var z = s.apply(this, x),
        C = p.apply(this, x),
        E = g.apply(this, x),
        G = void 0,
        L = void 0,
        O = void 0,
        q = void 0,
        B = k + o > Math.PI && k + o < i;
      B && (E = -E), (z += E);
      var D = B ? -y : y;
      m || ((n = d3.path()), (m = n));
      var F = (B ? -1 : 1) * d;
      return (
        (T += F),
        (w += F),
        m.moveTo(T, _),
        m.arc(F, 0, N, P, S),
        (G = d3.interpolateNumber(F, w)(0.5)),
        (L = d3.interpolateNumber(0, j)(0.5)),
        (!B && w < z) || (B && w > z)
          ? ((O = z + (z - w) / 2),
            (q = d3.interpolateNumber(C + D / 2, j)(0.5)))
          : ((O = d3.interpolateNumber(z, w)(0.25)), (q = C + D / 2)),
        m.bezierCurveTo(G, L, O, q, z, C + D / 2),
        m.lineTo(z, C - D / 2),
        (G = d3.interpolateNumber(F, T)(0.5)),
        (L = d3.interpolateNumber(0, _)(0.5)),
        (!B && T < z) || (B && T > z)
          ? ((O = z + (z - T) / 2),
            (q = d3.interpolateNumber(C - D / 2, _)(0.5)))
          : ((O = d3.interpolateNumber(z, T)(0.25)), (q = C - D / 2)),
        m.bezierCurveTo(O, q, G, L, T, _),
        m.closePath(),
        n ? ((m = null), "" + n || null) : null
      );
    }
    var t = Array.prototype.slice,
      r = Math.cos,
      u = Math.sin,
      o = Math.PI / 2,
      i = 2 * Math.PI,
      l = function(n) {
        return n.inner;
      },
      a = function(n) {
        return n.outer;
      },
      f = function() {
        return 100;
      },
      c = function(n) {
        return n.groupStartAngle;
      },
      h = function(n) {
        return n.startAngle;
      },
      v = function(n) {
        return n.endAngle;
      },
      s = function(n) {
        return n.x;
      },
      p = function(n) {
        return n.y;
      },
      g = function(n) {
        return n.offset;
      },
      d = 50,
      y = 0,
      m = null;
    return (
      (n.radius = function(t) {
        return arguments.length
          ? ((f = "function" == typeof t ? t : e(+t)), n)
          : f;
      }),
      (n.groupStartAngle = function(t) {
        return arguments.length
          ? ((c = "function" == typeof t ? t : e(+t)), n)
          : c;
      }),
      (n.startAngle = function(t) {
        return arguments.length
          ? ((h = "function" == typeof t ? t : e(+t)), n)
          : h;
      }),
      (n.endAngle = function(t) {
        return arguments.length
          ? ((v = "function" == typeof t ? t : e(+t)), n)
          : v;
      }),
      (n.x = function(t) {
        return arguments.length ? ((s = t), n) : s;
      }),
      (n.y = function(t) {
        return arguments.length ? ((p = t), n) : p;
      }),
      (n.offset = function(t) {
        return arguments.length ? ((g = t), n) : g;
      }),
      (n.thicknessInner = function(t) {
        return arguments.length ? ((y = t), n) : y;
      }),
      (n.inner = function(t) {
        return arguments.length ? ((l = t), n) : l;
      }),
      (n.outer = function(t) {
        return arguments.length ? ((a = t), n) : a;
      }),
      (n.pullout = function(t) {
        return arguments.length ? ((d = t), n) : d;
      }),
      (n.context = function(t) {
        return arguments.length ? ((m = null == t ? null : t), n) : m;
      }),
      n
    );
  }
  (n.loom = r),
    (n.string = u),
    Object.defineProperty(n, "__esModule", { value: !0 });
});