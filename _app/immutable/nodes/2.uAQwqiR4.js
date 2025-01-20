import {
  j as Xt,
  w as Kt,
  e as L,
  a as z,
  t as D,
  f as J,
  s as ne,
  g as be,
} from "../chunks/disclose-version.BaI7zO9q.js";
import { i as oe } from "../chunks/legacy.DpXSs_uL.js";
import {
  al as Gt,
  w as Jt,
  aw as kt,
  x as ve,
  A as Oe,
  y as Qt,
  J as ea,
  au as At,
  H as ta,
  z as ft,
  B as We,
  G as xe,
  ax as Te,
  C as zt,
  D as Tt,
  F as aa,
  W as Ct,
  P as je,
  ay as Ye,
  az as pt,
  aA as Ze,
  aB as ra,
  at as na,
  aC as oa,
  aD as ia,
  ai as sa,
  aq as la,
  ah as Et,
  aE as ca,
  m as da,
  M as mt,
  aF as ua,
  ao as va,
  T as Ve,
  u as jt,
  E as fa,
  aG as pa,
  aH as ma,
  a8 as ga,
  n as ye,
  aI as ha,
  ag as gt,
  a1 as ht,
  t as Pt,
  O as ba,
  V as wa,
  p as ee,
  b as O,
  c as te,
  d as T,
  e as _,
  g as s,
  a as P,
  ab as S,
  aJ as we,
  h as x,
  aK as fe,
  o as re,
  aL as Be,
  f as q,
  a6 as Mt,
  aM as xa,
  aN as Bt,
} from "../chunks/runtime.CY-7AVWH.js";
import {
  i as Y,
  a as ya,
  o as Xe,
  c as _a,
} from "../chunks/index-client.Ct-yC4ae.js";
import {
  t as Pe,
  b as ka,
  c as de,
  s as Q,
  a as Dt,
} from "../chunks/class.BwuzRVVq.js";
import { b as Me, p as I, c as Ke, s as Ne } from "../chunks/props.CuNjb5nD.js";
import { d as Aa, g as Ue, w as Rt } from "../chunks/index.DNRxnaj1.js";
import { s as za, a as Ta } from "../chunks/store.DLMY1I7E.js";
function pe(a, e) {
  return e;
}
function Ca(a, e, r, t) {
  for (var n = [], l = e.length, o = 0; o < l; o++) ra(e[o].e, n, !0);
  var b = l > 0 && n.length === 0 && r !== null;
  if (b) {
    var u = r.parentNode;
    na(u), u.append(r), t.clear(), ce(a, e[0].prev, e[l - 1].next);
  }
  oa(n, () => {
    for (var v = 0; v < l; v++) {
      var f = e[v];
      b || (t.delete(f.k), ce(a, f.prev, f.next)), ia(f.e, !b);
    }
  });
}
function se(a, e, r, t, n, l = null) {
  var o = a,
    b = { flags: e, items: new Map(), first: null },
    u = (e & kt) !== 0;
  if (u) {
    var v = a;
    o = ve ? Oe(sa(v)) : v.appendChild(Gt());
  }
  ve && Qt();
  var f = null,
    p = !1;
  Jt(() => {
    var c = r(),
      d = ea(c) ? c : c == null ? [] : At(c),
      i = d.length;
    if (p && i === 0) return;
    p = i === 0;
    let h = !1;
    if (ve) {
      var w = o.data === ta;
      w !== (i === 0) && ((o = ft()), Oe(o), We(!1), (h = !0));
    }
    if (ve) {
      for (var A = null, k, j = 0; j < i; j++) {
        if (xe.nodeType === 8 && xe.data === la) {
          (o = xe), (h = !0), We(!1);
          break;
        }
        var m = d[j],
          y = t(m, j);
        (k = St(xe, b, A, null, m, y, j, n, e)), b.items.set(y, k), (A = k);
      }
      i > 0 && Oe(ft());
    }
    if (!ve) {
      var R = Et;
      Ea(d, b, o, n, e, (R.f & Te) !== 0, t);
    }
    l !== null &&
      (i === 0
        ? f
          ? zt(f)
          : (f = Tt(() => l(o)))
        : f !== null &&
          aa(f, () => {
            f = null;
          })),
      h && We(!0),
      r();
  }),
    ve && (o = xe);
}
function Ea(a, e, r, t, n, l, o) {
  var b = (n & ca) !== 0,
    u = (n & (Ye | Ze)) !== 0,
    v = a.length,
    f = e.items,
    p = e.first,
    c = p,
    d,
    i = null,
    h,
    w = [],
    A = [],
    k,
    j,
    m,
    y;
  if (b)
    for (y = 0; y < v; y += 1)
      (k = a[y]),
        (j = o(k, y)),
        (m = f.get(j)),
        m !== void 0 && (m.a?.measure(), (h ??= new Set()).add(m));
  for (y = 0; y < v; y += 1) {
    if (((k = a[y]), (j = o(k, y)), (m = f.get(j)), m === void 0)) {
      var R = c ? c.e.nodes_start : r;
      (i = St(R, e, i, i === null ? e.first : i.next, k, j, y, t, n)),
        f.set(j, i),
        (w = []),
        (A = []),
        (c = i.next);
      continue;
    }
    if (
      (u && ja(m, k, y, n),
      m.e.f & Te && (zt(m.e), b && (m.a?.unfix(), (h ??= new Set()).delete(m))),
      m !== c)
    ) {
      if (d !== void 0 && d.has(m)) {
        if (w.length < A.length) {
          var C = A[0],
            M;
          i = C.prev;
          var W = w[0],
            U = w[w.length - 1];
          for (M = 0; M < w.length; M += 1) bt(w[M], C, r);
          for (M = 0; M < A.length; M += 1) d.delete(A[M]);
          ce(e, W.prev, U.next),
            ce(e, i, W),
            ce(e, U, C),
            (c = C),
            (i = U),
            (y -= 1),
            (w = []),
            (A = []);
        } else
          d.delete(m),
            bt(m, c, r),
            ce(e, m.prev, m.next),
            ce(e, m, i === null ? e.first : i.next),
            ce(e, i, m),
            (i = m);
        continue;
      }
      for (w = [], A = []; c !== null && c.k !== j; )
        (l || !(c.e.f & Te)) && (d ??= new Set()).add(c),
          A.push(c),
          (c = c.next);
      if (c === null) continue;
      m = c;
    }
    w.push(m), (i = m), (c = m.next);
  }
  if (c !== null || d !== void 0) {
    for (var H = d === void 0 ? [] : At(d); c !== null; )
      (l || !(c.e.f & Te)) && H.push(c), (c = c.next);
    var N = H.length;
    if (N > 0) {
      var B = n & kt && v === 0 ? r : null;
      if (b) {
        for (y = 0; y < N; y += 1) H[y].a?.measure();
        for (y = 0; y < N; y += 1) H[y].a?.fix();
      }
      Ca(e, H, B, f);
    }
  }
  b &&
    Ct(() => {
      if (h !== void 0) for (m of h) m.a?.apply();
    }),
    (je.first = e.first && e.first.e),
    (je.last = i && i.e);
}
function ja(a, e, r, t) {
  t & Ye && pt(a.v, e), t & Ze ? pt(a.i, r) : (a.i = r);
}
function St(a, e, r, t, n, l, o, b, u) {
  var v = (u & Ye) !== 0,
    f = (u & ua) === 0,
    p = v ? (f ? da(n) : mt(n)) : n,
    c = u & Ze ? mt(o) : o,
    d = { i: c, v: p, k: l, a: null, e: null, prev: r, next: t };
  try {
    return (
      (d.e = Tt(() => b(a, p, c), ve)),
      (d.e.prev = r && r.e),
      (d.e.next = t && t.e),
      r === null ? (e.first = d) : ((r.next = d), (r.e.next = d.e)),
      t !== null && ((t.prev = d), (t.e.prev = d.e)),
      d
    );
  } finally {
  }
}
function bt(a, e, r) {
  for (
    var t = a.next ? a.next.e.nodes_start : r,
      n = e ? e.e.nodes_start : r,
      l = a.e.nodes_start;
    l !== t;

  ) {
    var o = va(l);
    n.before(l), (l = o);
  }
}
function ce(a, e, r) {
  e === null ? (a.first = r) : ((e.next = r), (e.e.next = r && r.e)),
    r !== null && ((r.prev = e), (r.e.prev = e && e.e));
}
function Pa(a, e, r) {
  Ve(() => {
    var t = jt(() => e(a, r?.()) || {});
    if (t?.destroy) return () => t.destroy();
  });
}
function K(a, e, r, t) {
  var n = (a.__styles ??= {});
  n[e] !== r &&
    ((n[e] = r),
    r == null ? a.style.removeProperty(e) : a.style.setProperty(e, r, ""));
}
const Ma = () => performance.now(),
  ie = {
    tick: (a) => requestAnimationFrame(a),
    now: () => Ma(),
    tasks: new Set(),
  };
function Ft() {
  const a = ie.now();
  ie.tasks.forEach((e) => {
    e.c(a) || (ie.tasks.delete(e), e.f());
  }),
    ie.tasks.size !== 0 && ie.tick(Ft);
}
function Ba(a) {
  let e;
  return (
    ie.tasks.size === 0 && ie.tick(Ft),
    {
      promise: new Promise((r) => {
        ie.tasks.add((e = { c: a, f: r }));
      }),
      abort() {
        ie.tasks.delete(e);
      },
    }
  );
}
function ze(a, e) {
  a.dispatchEvent(new CustomEvent(e));
}
function Da(a) {
  if (a === "float") return "cssFloat";
  if (a === "offset") return "cssOffset";
  if (a.startsWith("--")) return a;
  const e = a.split("-");
  return e.length === 1
    ? e[0]
    : e[0] +
        e
          .slice(1)
          .map((r) => r[0].toUpperCase() + r.slice(1))
          .join("");
}
function wt(a) {
  const e = {},
    r = a.split(";");
  for (const t of r) {
    const [n, l] = t.split(":");
    if (!n || l === void 0) break;
    const o = Da(n.trim());
    e[o] = l.trim();
  }
  return e;
}
const Ra = (a) => a;
function Sa(a, e, r, t) {
  var n = (a & ha) !== 0,
    l = "both",
    o,
    b = e.inert,
    u,
    v;
  function f() {
    var h = Et,
      w = je;
    gt(null), ht(null);
    try {
      return (o ??= r()(e, t?.() ?? {}, { direction: l }));
    } finally {
      gt(h), ht(w);
    }
  }
  var p = {
      is_global: n,
      in() {
        (e.inert = b),
          ze(e, "introstart"),
          (u = qe(e, f(), v, 1, () => {
            ze(e, "introend"), u?.abort(), (u = o = void 0);
          }));
      },
      out(h) {
        (e.inert = !0),
          ze(e, "outrostart"),
          (v = qe(e, f(), u, 0, () => {
            ze(e, "outroend"), h?.();
          }));
      },
      stop: () => {
        u?.abort(), v?.abort();
      },
    },
    c = je;
  if (((c.transitions ??= []).push(p), Xt)) {
    var d = n;
    if (!d) {
      for (var i = c.parent; i && i.f & fa; )
        for (; (i = i.parent) && !(i.f & pa); );
      d = !i || (i.f & ma) !== 0;
    }
    d &&
      Ve(() => {
        jt(() => p.in());
      });
  }
}
function qe(a, e, r, t, n) {
  var l = t === 1;
  if (ga(e)) {
    var o,
      b = !1;
    return (
      Ct(() => {
        if (!b) {
          var w = e({ direction: l ? "in" : "out" });
          o = qe(a, w, r, t, n);
        }
      }),
      {
        abort: () => {
          (b = !0), o?.abort();
        },
        deactivate: () => o.deactivate(),
        reset: () => o.reset(),
        t: () => o.t(),
      }
    );
  }
  if ((r?.deactivate(), !e?.duration))
    return n(), { abort: ye, deactivate: ye, reset: ye, t: () => t };
  const { delay: u = 0, css: v, tick: f, easing: p = Ra } = e;
  var c = [];
  if (l && r === void 0 && (f && f(0, 1), v)) {
    var d = wt(v(0, 1));
    c.push(d, d);
  }
  var i = () => 1 - t,
    h = a.animate(c, { duration: u });
  return (
    (h.onfinish = () => {
      var w = r?.t() ?? 1 - t;
      r?.abort();
      var A = t - w,
        k = e.duration * Math.abs(A),
        j = [];
      if (k > 0) {
        if (v)
          for (
            var m = Math.ceil(k / 16.666666666666668), y = 0;
            y <= m;
            y += 1
          ) {
            var R = w + A * p(y / m),
              C = v(R, 1 - R);
            j.push(wt(C));
          }
        (i = () => {
          var M = h.currentTime;
          return w + A * p(M / k);
        }),
          f &&
            Ba(() => {
              if (h.playState !== "running") return !1;
              var M = i();
              return f(M, 1 - M), !0;
            });
      }
      (h = a.animate(j, { duration: k, fill: "forwards" })),
        (h.onfinish = () => {
          (i = () => t), f?.(t, 1 - t), n();
        });
    }),
    {
      abort: () => {
        h && (h.cancel(), (h.effect = null), (h.onfinish = ye));
      },
      deactivate: () => {
        n = ye;
      },
      reset: () => {
        t === 0 && f?.(1, 0);
      },
      t: () => i(),
    }
  );
}
function Fa(a, e, r) {
  var t = ba(a, e);
  t &&
    t.set &&
    ((a[e] = r),
    Pt(() => {
      a[e] = null;
    }));
}
function La(a, e, r = e) {
  var t = a === "x",
    n = () =>
      Kt(() => {
        (l = !0),
          clearTimeout(o),
          (o = setTimeout(b, 100)),
          r(window[t ? "scrollX" : "scrollY"]);
      });
  addEventListener("scroll", n, { passive: !0 });
  var l = !1,
    o,
    b = () => {
      l = !1;
    },
    u = !0;
  wa(() => {
    var v = e();
    u
      ? (u = !1)
      : !l &&
        v != null &&
        ((l = !0),
        clearTimeout(o),
        scrollTo(window.scrollX, v),
        (o = setTimeout(b, 100)));
  }),
    Ve(n),
    Pt(() => {
      removeEventListener("scroll", n);
    });
}
function Ia(a) {
  const e = a - 1;
  return e * e * e + 1;
}
function xt(a) {
  const e = typeof a == "string" && a.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [a, "px"];
}
function Oa(
  a,
  {
    delay: e = 0,
    duration: r = 400,
    easing: t = Ia,
    x: n = 0,
    y: l = 0,
    opacity: o = 0,
  } = {}
) {
  const b = getComputedStyle(a),
    u = +b.opacity,
    v = b.transform === "none" ? "" : b.transform,
    f = u * (1 - o),
    [p, c] = xt(n),
    [d, i] = xt(l);
  return {
    delay: e,
    duration: r,
    easing: t,
    css: (h, w) => `
			transform: ${v} translate(${(1 - h) * p}${c}, ${(1 - h) * d}${i});
			opacity: ${u - f * w}`,
  };
}
var Wa = D(
    '<div class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"><div class="divide-y-2 divide-zinc-700 rounded-lg bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5"><div class="px-5 pb-6 pt-5"><div class="flex items-center justify-between"><div><img src="/paper-boy/logo.webp" alt="Paper Boy Logo" class="h-8 w-auto"></div> <div class="-mr-2"><button type="button" class="focus:ring-primary inline-flex items-center justify-center rounded-md bg-zinc-800 p-2 text-gray-400 hover:bg-zinc-700 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset"><span class="sr-only">Close menu</span> <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div> <div class="mt-6"><nav class="grid gap-y-4 svelte-vsj9oe"><a href="https://dexscreener.com/solana/AdYncZdtiX7zBrbK4g1sSK8LAWFtcUK6SBqc7k1DJkyo" target="_blank" rel="noopener noreferrer" class="flex items-center rounded-lg bg-zinc-700 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-zinc-600 hover:text-white svelte-vsj9oe"><img src="/dex.svg" alt="DexScreener" class="h-5 w-5"> <span class="flex-1 text-center font-sawer text-orange-600">DexScreener</span></a> <a href="https://t.me" target="_blank" rel="noopener noreferrer" class="flex items-center rounded-lg bg-zinc-700 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-zinc-600 hover:text-white svelte-vsj9oe"><img src="/telegram.svg" alt="Telegram" class="h-5 w-5"> <span class="flex-1 text-center font-sawer text-orange-600">Telegram</span></a> <a href="https://x.com/paperboysol" target="_blank" rel="noopener noreferrer" class="flex items-center rounded-lg bg-zinc-700 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-zinc-600 hover:text-white svelte-vsj9oe"><img src="/x.svg" alt="X" class="h-5 w-5"> <span class="flex-1 text-center font-sawer text-orange-600">Twitter</span></a> <a href="https://jup.ag/swap/SOL-75R1Z8utCnapyNvwBa4aZPrTLxsbuCuD7AXZgDW4pump" target="_blank" class="bg-primary hover:bg-primary-dark flex items-center rounded-lg px-4 py-2 text-sm font-medium text-white svelte-vsj9oe"><span class="flex-1 text-center font-sawer text-2xl text-orange-600">Buy Now</span></a></nav></div></div></div></div>'
  ),
  Na = D(
    '<header class="fixed z-50 w-full bg-zinc-800 transition-all duration-300 select-none svelte-vsj9oe"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between py-4 md:justify-between md:space-x-10"><div class="flex justify-start lg:w-0 lg:flex-1"><button class="flex items-center"><span class="sr-only">Paper Boy</span> <img src="/paper-boy/logo.webp" alt="Paper Boy Logo" class="h-10 w-auto cursor-pointer"> <span class="ml-5 font-sawer text-2xl text-orange-600">Paper Boy</span></button></div> <div class="-my-2 -mr-2 md:hidden"><button type="button" class="focus:ring-primary inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-zinc-700 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset" aria-expanded="false"><span class="sr-only">Open menu</span> <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div> <nav class="hidden space-x-6 md:flex svelte-vsj9oe"><a href="https://dexscreener.com/solana/AdYncZdtiX7zBrbK4g1sSK8LAWFtcUK6SBqc7k1DJkyo" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 rounded-lg bg-zinc-700 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-zinc-600 hover:text-white svelte-vsj9oe"><img src="/dex.svg" alt="DexScreener" class="h-5 w-5"></a> <a href="https://t.me/paperboyportaltele" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 rounded-lg bg-zinc-700 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-zinc-600 hover:text-white svelte-vsj9oe"><img src="/telegram.svg" alt="Telegram" class="h-5 w-5"></a> <a href="https://x.com/paperboysol" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 rounded-lg bg-zinc-700 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-zinc-600 hover:text-white svelte-vsj9oe"><img src="/x.svg" alt="X" class="h-5 w-5"></a> <a href="https://jup.ag/swap/SOL-75R1Z8utCnapyNvwBa4aZPrTLxsbuCuD7AXZgDW4pump" target="_blank" class="bg-primary hover:bg-primary-dark flex items-center space-x-2 rounded-lg px-4 py-2 text-lg font-medium text-white svelte-vsj9oe"><span class="font-sawer text-2xl text-orange-600">Buy Now</span></a></nav></div></div> <!></header>'
  );
function Ha(a, e) {
  ee(e, !1);
  let r = S(!1),
    t = S(),
    n = 0,
    l = S(),
    o = 0;
  const b = 2e3;
  function u() {
    P(r, !s(r));
  }
  function v() {
    if (typeof gsap > "u") return;
    const m = Date.now();
    if (m - o < b) {
      console.log("Please wait before clicking again!");
      return;
    }
    if (((o = m), n++, n === 1)) {
      (n = 0),
        gsap
          .timeline()
          .to(s(l), { rotation: 360, scale: 1.5, duration: 0.5 })
          .to(s(l), { y: -20, duration: 0.2, yoyo: !0, repeat: 3 })
          .to(s(l), { scale: 1, rotation: 0, duration: 0.3 });
      let y = document.getElementById("money-container");
      y ||
        ((y = document.createElement("div")),
        (y.id = "money-container"),
        (y.style.position = "fixed"),
        (y.style.inset = "0"),
        (y.style.pointerEvents = "none"),
        (y.style.zIndex = "45"),
        document.body.appendChild(y));
      for (let R = 0; R < 20; R++) {
        const C = document.createElement("div");
        (C.className = "money-emoji"),
          (C.textContent = Math.random() > 0.5 ? "💵" : "💰"),
          (C.style.position = "fixed"),
          (C.style.top = "-50px"),
          (C.style.left = `${Math.random() * 100}vw`),
          (C.style.fontSize = "80px"),
          (C.style.zIndex = "45"),
          (C.style.pointerEvents = "none"),
          (C.style.filter = "drop-shadow(0 4px 8px rgba(0,0,0,0.3))"),
          y.appendChild(C),
          gsap.to(C, {
            y: "100vh",
            rotation: Math.random() * 360,
            duration: 3 + Math.random() * 2,
            ease: "none",
            onComplete: () => C.remove(),
          });
      }
    }
  }
  oe();
  var f = Na(),
    p = _(f),
    c = _(p),
    d = _(c),
    i = _(d),
    h = T(_(i), 2);
  Me(
    h,
    (m) => P(l, m),
    () => s(l)
  ),
    we(2),
    x(i),
    x(d);
  var w = T(d, 2),
    A = _(w);
  x(w), we(2), x(c), x(p);
  var k = T(p, 2);
  {
    var j = (m) => {
      var y = Wa(),
        R = _(y),
        C = _(R),
        M = _(C),
        W = T(_(M), 2),
        U = _(W);
      x(W),
        x(M),
        we(2),
        x(C),
        x(R),
        x(y),
        L("click", U, u),
        Sa(
          3,
          y,
          () => Oa,
          () => ({ y: -100, duration: 300 })
        ),
        z(m, y);
    };
    Y(k, (m) => {
      s(r) && m(j);
    });
  }
  x(f),
    O(() => {
      Pe(f, "bg-opacity-90", s(t) > 20), Pe(f, "backdrop-blur-sm", s(t) > 20);
    }),
    La(
      "y",
      () => s(t),
      (m) => P(t, m)
    ),
    L("click", h, v),
    L("click", A, u),
    z(a, f),
    te();
}
function Ua(a, e, r, t) {
  var n,
    l,
    o = !1,
    b = r.length >= 2,
    u = (i, h, w) => {
      if (((n = h), b && (l = i), !o)) {
        let A = e(i, h, w);
        if (e.length < 2) h(A);
        else return A;
      }
      o = !1;
    },
    v = Aa(a, u, t),
    f = !Array.isArray(a);
  function p(i) {
    var h = r(i, l);
    f
      ? ((o = !0), a.set(h))
      : h.forEach((w, A) => {
          (o = !0), a[A].set(w);
        }),
      (o = !1);
  }
  var c = !1;
  function d(i) {
    var h, w, A, k;
    if (c) {
      (k = i(Ue(v))), n(k);
      return;
    }
    var j = v.subscribe((m) => {
      c ? (h ? (w = !0) : (h = !0)) : (A = m);
    });
    (k = i(A)), (c = !0), n(k), j(), (c = !1), w && (k = Ue(v)), h && p(k);
  }
  return {
    subscribe: v.subscribe,
    set(i) {
      d(() => i);
    },
    update: d,
  };
}
const qa = 20,
  me = Rt([]),
  Ge = Rt(null),
  Ce = new Map(),
  yt = (a) => {
    if (Ce.has(a)) return;
    const e = setTimeout(() => {
      Ce.delete(a), It(a);
    }, 1e3);
    Ce.set(a, e);
  },
  $a = (a) => {
    const e = Ce.get(a);
    e && clearTimeout(e);
  };
function Lt(a) {
  a.id && $a(a.id),
    me.update((e) => e.map((r) => (r.id === a.id ? { ...r, ...a } : r)));
}
function Ya(a) {
  me.update((e) => [a, ...e].slice(0, qa));
}
function Za(a) {
  Ue(me).find((e) => e.id === a.id) ? Lt(a) : Ya(a);
}
function Va(a) {
  me.update(
    (e) => (
      a
        ? yt(a)
        : e.forEach((r) => {
            yt(r.id);
          }),
      e.map((r) => (r.id === a || a === void 0 ? { ...r, visible: !1 } : r))
    )
  );
}
function It(a) {
  me.update((e) => (a === void 0 ? [] : e.filter((r) => r.id !== a)));
}
function Xa(a) {
  Ge.set(a);
}
function Ka(a) {
  let e;
  Ge.update((r) => ((e = a - (r || 0)), null)),
    me.update((r) =>
      r.map((t) => ({ ...t, pauseDuration: t.pauseDuration + e }))
    );
}
const Ga = {
  blank: 4e3,
  error: 4e3,
  success: 2e3,
  loading: 1 / 0,
  custom: 4e3,
};
function Ja(a = {}) {
  return {
    toasts: Ua(
      me,
      (r) =>
        r.map((t) => ({
          ...a,
          ...a[t.type],
          ...t,
          duration:
            t.duration || a[t.type]?.duration || a?.duration || Ga[t.type],
          style: [a.style, a[t.type]?.style, t.style].join(";"),
        })),
      (r) => r
    ),
    pausedAt: Ge,
  };
}
const Qa = (a) => typeof a == "function",
  _t = (a, e) => (Qa(a) ? a(e) : a),
  er = (() => {
    let a = 0;
    return () => ((a += 1), a.toString());
  })(),
  $e = (() => {
    let a;
    return () => {
      if (a === void 0 && typeof window < "u") {
        const e = matchMedia("(prefers-reduced-motion: reduce)");
        a = !e || e.matches;
      }
      return a;
    };
  })(),
  tr = (a, e = "blank", r) => ({
    createdAt: Date.now(),
    visible: !0,
    type: e,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: a,
    pauseDuration: 0,
    ...r,
    id: r?.id || er(),
  }),
  _e = (a) => (e, r) => {
    const t = tr(e, a, r);
    return Za(t), t.id;
  },
  V = (a, e) => _e("blank")(a, e);
V.error = _e("error");
V.success = _e("success");
V.loading = _e("loading");
V.custom = _e("custom");
V.dismiss = (a) => {
  Va(a);
};
V.remove = (a) => It(a);
V.promise = (a, e, r) => {
  const t = V.loading(e.loading, { ...r, ...r?.loading });
  return (
    a
      .then(
        (n) => (V.success(_t(e.success, n), { id: t, ...r, ...r?.success }), n)
      )
      .catch((n) => {
        V.error(_t(e.error, n), { id: t, ...r, ...r?.error });
      }),
    a
  );
};
function ar(a, e, r) {
  const { reverseOrder: t, gutter: n = 8, defaultPosition: l } = r || {},
    o = e.filter((f) => (f.position || l) === (a.position || l) && f.height),
    b = o.findIndex((f) => f.id === a.id),
    u = o.filter((f, p) => p < b && f.visible).length;
  return o
    .filter((f) => f.visible)
    .slice(...(t ? [u + 1] : [0, u]))
    .reduce((f, p) => f + (p.height || 0) + n, 0);
}
const rr = {
  startPause() {
    Xa(Date.now());
  },
  endPause() {
    Ka(Date.now());
  },
  updateHeight: (a, e) => {
    Lt({ id: a, height: e });
  },
  calculateOffset: ar,
};
function nr(a) {
  const { toasts: e, pausedAt: r } = Ja(a),
    t = new Map();
  let n;
  const l = [
    r.subscribe((o) => {
      if (o) {
        for (const [, b] of t) clearTimeout(b);
        t.clear();
      }
      n = o;
    }),
    e.subscribe((o) => {
      if (n) return;
      const b = Date.now();
      for (const u of o) {
        if (t.has(u.id) || u.duration === 1 / 0) continue;
        const v = (u.duration || 0) + u.pauseDuration - (b - u.createdAt);
        if (v < 0) return u.visible && V.dismiss(u.id), null;
        t.set(
          u.id,
          setTimeout(() => V.dismiss(u.id), v)
        );
      }
    }),
  ];
  return (
    ya(() => {
      for (const o of l) o();
    }),
    { toasts: e, handlers: rr }
  );
}
var or = D('<div class="svelte-11kvm4p"></div>');
function ir(a, e) {
  let r = I(e, "primary", 8, "#61d345"),
    t = I(e, "secondary", 8, "#fff");
  var n = or();
  O(() => {
    K(n, "--primary", r()), K(n, "--secondary", t());
  }),
    z(a, n);
}
var sr = D('<div class="svelte-1ee93ns"></div>');
function lr(a, e) {
  let r = I(e, "primary", 8, "#ff4b4b"),
    t = I(e, "secondary", 8, "#fff");
  var n = sr();
  O(() => {
    K(n, "--primary", r()), K(n, "--secondary", t());
  }),
    z(a, n);
}
var cr = D('<div class="svelte-1j7dflg"></div>');
function dr(a, e) {
  let r = I(e, "primary", 8, "#616161"),
    t = I(e, "secondary", 8, "#e0e0e0");
  var n = cr();
  O(() => {
    K(n, "--primary", r()), K(n, "--secondary", t());
  }),
    z(a, n);
}
var ur = D('<div class="animated svelte-1kgeier"> </div>'),
  vr = D('<div class="status svelte-1kgeier"><!></div>'),
  fr = D('<div class="indicator svelte-1kgeier"><!> <!></div>');
function He(a, e) {
  ee(e, !1);
  const r = S(),
    t = S(),
    n = S();
  let l = I(e, "toast", 8);
  fe(
    () => (s(r), s(t), s(n), re(l())),
    () => {
      ((f) => (P(r, f.type), P(t, f.icon), P(n, f.iconTheme)))(l());
    }
  ),
    Be();
  var o = J(),
    b = q(o);
  {
    var u = (f) => {
        var p = ur(),
          c = _(p, !0);
        x(p), O(() => ne(c, s(t))), z(f, p);
      },
      v = (f) => {
        var p = J(),
          c = q(p);
        {
          var d = (h) => {
              var w = J(),
                A = q(w);
              Ke(
                A,
                () => s(t),
                (k, j) => {
                  j(k, {});
                }
              ),
                z(h, w);
            },
            i = (h) => {
              var w = J(),
                A = q(w);
              {
                var k = (j) => {
                  var m = fr(),
                    y = _(m);
                  dr(
                    y,
                    Ne(() => s(n))
                  );
                  var R = T(y, 2);
                  {
                    var C = (M) => {
                      var W = vr(),
                        U = _(W);
                      {
                        var H = (B) => {
                            lr(
                              B,
                              Ne(() => s(n))
                            );
                          },
                          N = (B) => {
                            ir(
                              B,
                              Ne(() => s(n))
                            );
                          };
                        Y(U, (B) => {
                          s(r) === "error" ? B(H) : B(N, !1);
                        });
                      }
                      x(W), z(M, W);
                    };
                    Y(R, (M) => {
                      s(r) !== "loading" && M(C);
                    });
                  }
                  x(m), z(j, m);
                };
                Y(
                  A,
                  (j) => {
                    s(r) !== "blank" && j(k);
                  },
                  !0
                );
              }
              z(h, w);
            };
          Y(
            c,
            (h) => {
              typeof s(t) < "u" ? h(d) : h(i, !1);
            },
            !0
          );
        }
        z(f, p);
      };
    Y(b, (f) => {
      typeof s(t) == "string" ? f(u) : f(v, !1);
    });
  }
  z(a, o), te();
}
var pr = D("<div><!></div>");
function Ee(a, e) {
  ee(e, !1);
  let r = I(e, "toast", 8);
  oe();
  var t = pr();
  let n;
  var l = _(t);
  {
    var o = (u) => {
        var v = be();
        O(() => ne(v, r().message)), z(u, v);
      },
      b = (u) => {
        var v = J(),
          f = q(v);
        Ke(
          f,
          () => r().message,
          (p, c) => {
            c(p, {
              get toast() {
                return r();
              },
            });
          }
        ),
          z(u, v);
      };
    Y(l, (u) => {
      typeof r().message == "string" ? u(o) : u(b, !1);
    });
  }
  x(t),
    O(
      () =>
        (n = ka(t, n, { class: "message", ...r().ariaProps }, "svelte-1nauejd"))
    ),
    z(a, t),
    te();
}
var mr = D("<!> <!>", 1),
  gr = D("<div><!></div>");
function hr(a, e) {
  ee(e, !1);
  let r = I(e, "toast", 8),
    t = I(e, "position", 24, () => {}),
    n = I(e, "style", 8, ""),
    l = I(e, "Component", 24, () => {}),
    o = S(),
    b = S();
  fe(
    () => (re(r()), re(t()), $e),
    () => {
      const c = (r().position || t() || "top-center").includes("top");
      P(o, c ? 1 : -1);
      const [d, i] = $e() ? ["fadeIn", "fadeOut"] : ["enter", "exit"];
      P(b, r().visible ? d : i);
    }
  ),
    Be(),
    oe();
  var u = gr(),
    v = _(u);
  {
    var f = (c) => {
        var d = J(),
          i = q(d);
        Ke(i, l, (h, w) => {
          w(h, {
            $$slots: {
              icon: (A, k) => {
                He(A, {
                  get toast() {
                    return r();
                  },
                  slot: "icon",
                });
              },
              message: (A, k) => {
                Ee(A, {
                  get toast() {
                    return r();
                  },
                  slot: "message",
                });
              },
            },
          });
        }),
          z(c, d);
      },
      p = (c) => {
        var d = J(),
          i = q(d);
        Dt(
          i,
          e,
          "default",
          {
            ToastIcon: He,
            ToastMessage: Ee,
            get toast() {
              return r();
            },
          },
          (h) => {
            var w = mr(),
              A = q(w);
            He(A, {
              get toast() {
                return r();
              },
            });
            var k = T(A, 2);
            Ee(k, {
              get toast() {
                return r();
              },
            }),
              z(h, w);
          }
        ),
          z(c, d);
      };
    Y(v, (c) => {
      l() ? c(f) : c(p, !1);
    });
  }
  x(u),
    O(() => {
      de(
        u,
        `base ${(r().height ? s(b) : "transparent") ?? ""} ${
          (r().className || "") ?? ""
        } svelte-ug60r4`
      ),
        Q(u, "style", `${n() ?? ""}; ${r().style ?? ""}`),
        K(u, "--factor", s(o));
    }),
    z(a, u),
    te();
}
var br = D('<div class="wrapper svelte-v01oml"><!></div>');
function wr(a, e) {
  ee(e, !1);
  const r = S(),
    t = S(),
    n = S(),
    l = S();
  let o = I(e, "toast", 8),
    b = I(e, "setHeight", 8),
    u = S();
  Xe(() => {
    b()(s(u).getBoundingClientRect().height);
  }),
    fe(
      () => re(o()),
      () => {
        P(r, o().position?.includes("top") ? 0 : null);
      }
    ),
    fe(
      () => re(o()),
      () => {
        P(t, o().position?.includes("bottom") ? 0 : null);
      }
    ),
    fe(
      () => re(o()),
      () => {
        P(n, o().position?.includes("top") ? 1 : -1);
      }
    ),
    fe(
      () => re(o()),
      () => {
        P(
          l,
          (o().position?.includes("center") && "center") ||
            ((o().position?.includes("right") ||
              o().position?.includes("end")) &&
              "flex-end") ||
            null
        );
      }
    ),
    Be(),
    oe();
  var v = br();
  const f = Mt(() => !$e());
  O(() => Pe(v, "transition", s(f)));
  var p = _(v);
  {
    var c = (i) => {
        Ee(i, {
          get toast() {
            return o();
          },
        });
      },
      d = (i) => {
        var h = J(),
          w = q(h);
        Dt(
          w,
          e,
          "default",
          {
            get toast() {
              return o();
            },
          },
          (A) => {
            hr(A, {
              get toast() {
                return o();
              },
              get position() {
                return o().position;
              },
            });
          }
        ),
          z(i, h);
      };
    Y(p, (i) => {
      o().type === "custom" ? i(c) : i(d, !1);
    });
  }
  x(v),
    Me(
      v,
      (i) => P(u, i),
      () => s(u)
    ),
    O(() => {
      Pe(v, "active", o().visible),
        K(v, "--factor", s(n)),
        K(v, "--offset", o().offset),
        K(v, "top", s(r)),
        K(v, "bottom", s(t)),
        K(v, "justify-content", s(l));
    }),
    z(a, v),
    te();
}
var xr = D('<div role="alert"></div>');
function yr(a, e) {
  ee(e, !1);
  const r = za(),
    t = () => Ta(f, "$toasts", r);
  let n = I(e, "reverseOrder", 8, !1),
    l = I(e, "position", 8, "top-center"),
    o = I(e, "toastOptions", 24, () => {}),
    b = I(e, "gutter", 8, 8),
    u = I(e, "containerStyle", 24, () => {}),
    v = I(e, "containerClassName", 24, () => {});
  const { toasts: f, handlers: p } = nr(o());
  let c = S();
  fe(
    () => (t(), re(l()), re(n()), re(b())),
    () => {
      P(
        c,
        t().map((i) => ({
          ...i,
          position: i.position || l(),
          offset: p.calculateOffset(i, t(), {
            reverseOrder: n(),
            gutter: b(),
            defaultPosition: l(),
          }),
        }))
      );
    }
  ),
    Be(),
    oe();
  var d = xr();
  se(
    d,
    5,
    () => s(c),
    (i) => i.id,
    (i, h) => {
      wr(i, {
        get toast() {
          return s(h);
        },
        setHeight: (w) => p.updateHeight(s(h).id, w),
      });
    }
  ),
    x(d),
    O(() => {
      de(d, `toaster ${(v() || "") ?? ""} svelte-1phplh9`), Q(d, "style", u());
    }),
    L("mouseenter", d, function (...i) {
      p.startPause?.apply(this, i);
    }),
    L("mouseleave", d, function (...i) {
      p.endPause?.apply(this, i);
    }),
    z(a, d),
    te();
}
var _r = D(
    '<span class="absolute -top-6 right-0 text-2xl animate-bounce">💰</span>'
  ),
  kr = D(
    `<!> <div class="relative w-full h-screen bg-cover bg-center bg-no-repeat" style="background-image: url('/paper-boy/money.webp'); background-size: cover; background-position: center;"><div class="absolute left-1/2 -translate-x-1/2 bottom-[15%] w-[95%] max-w-[600px]"><button class="w-full flex items-center justify-center gap-2 bg-black/70 text-white border-2 border-white px-3 py-2.5 md:px-8 md:py-4 rounded-lg font-mono text-xs md:text-base cursor-pointer transition-all duration-300 ease-in-out hover:bg-indigo-900/30 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"><span class="font-bold text-orange-500 animate-pulse">CA:</span> <span class="break-all relative"> <!></span></button></div></div>`,
    1
  );
function Ar(a, e) {
  ee(e, !1);
  let r = I(e, "ca", 8, "75R1Z8utCnapyNvwBa4aZPrTLxsbuCuD7AXZgDW4pump"),
    t = ["💵", "💰", "💎", "🚀"],
    n = S(!1);
  function l() {
    navigator.clipboard.writeText(r()),
      V.success("Copied to clipboard!", {
        position: "bottom-center",
        style: "background: #333; color: white;",
      }),
      o();
  }
  function o() {
    P(n, !0);
    const w = document.createElement("div");
    (w.style.position = "fixed"),
      (w.style.zIndex = "100"),
      (w.style.pointerEvents = "none"),
      document.body.appendChild(w);
    for (let A = 0; A < 15; A++)
      setTimeout(() => {
        const k = document.createElement("div");
        (k.textContent = t[Math.floor(Math.random() * t.length)]),
          (k.style.position = "fixed"),
          (k.style.left = `${Math.random() * 100}vw`),
          (k.style.top = "100vh"),
          (k.style.fontSize = "2rem"),
          (k.style.transform = "translateY(0)"),
          (k.style.transition = "transform 2s ease-out"),
          w.appendChild(k),
          requestAnimationFrame(() => {
            k.style.transform = `translateY(-120vh) rotate(${
              Math.random() * 360
            }deg)`;
          }),
          setTimeout(() => k.remove(), 2e3);
      }, A * 100);
    setTimeout(() => {
      w.remove(), P(n, !1);
    }, 2500);
  }
  oe();
  var b = kr(),
    u = q(b);
  yr(u, {});
  var v = T(u, 2),
    f = _(v),
    p = _(f),
    c = T(_(p), 2),
    d = _(c),
    i = T(d);
  {
    var h = (w) => {
      var A = _r();
      z(w, A);
    };
    Y(i, (w) => {
      s(n) && w(h);
    });
  }
  x(c),
    x(p),
    x(f),
    x(v),
    O(() => ne(d, `${r() ?? ""} `)),
    L("click", p, l),
    L("mouseenter", p, () => {
      P(n, !0);
    }),
    L("mouseleave", p, () => {
      P(n, !1);
    }),
    z(a, b),
    te();
}
var zr = D('<div class="floating-dollar svelte-bhcp06">$</div>'),
  Tr = D(
    `<div class="select-none paper-boy-bg flex items-center justify-center bg-zinc-800 p-6 sm:p-12 text-zinc-100 svelte-bhcp06"><div class="floating-container w-full max-w-4xl overflow-hidden rounded-lg bg-zinc-900 shadow-2xl glow-effect svelte-bhcp06"><div class="flex flex-col md:flex-row svelte-bhcp06"><div class="paper-boy-image relative h-64 w-full overflow-hidden bg-zinc-700 md:h-auto md:w-1/3 money-rain-container svelte-bhcp06"><div class="absolute inset-0 flex items-center justify-center text-lg font-bold text-zinc-500 svelte-bhcp06"><img src="/paper-boy/laptop.webp" alt="" class="pointer-events-none svelte-bhcp06"></div> <div class="money-rain hidden svelte-bhcp06"></div></div> <div class="w-full p-8 md:w-2/3 svelte-bhcp06"><h2 class="mb-4 text-3xl font-bold font-sawer text-orange-600 transition-colors duration-300 hover:text-zinc-100 flip-title svelte-bhcp06"> </h2> <div class="rounded-lg bg-zinc-800 p-6 shadow-inner svelte-bhcp06"><div class="leading-relaxed text-zinc-300 space-y-4 svelte-bhcp06"><p class="svelte-bhcp06">Meet PaperBoy, aka Papi—the charming, mysterious hustler with a addiction for $PAPER. His age? Unknown. His net worth? That's a closely guarded secret. Some say he was born with a stack of cash in hand, but those are just whispers—who knows what's true? What we do know is this: PaperBoy will go to any lengths to secure his $PAPER and protect it like it's his very life.</p> <p class="svelte-bhcp06">One thing's for sure—this little f*cker's got hustle.</p> <p class="svelte-bhcp06">P.S. He bites. Approach with caution!</p></div></div></div></div></div></div> <!>`,
    1
  );
function Cr(a, e) {
  let r = I(e, "title", 8, "Who is Paper Boy");
  I(
    e,
    "description",
    8,
    `Meet PaperBoy, aka Papi—the charming, mysterious hustler with a addiction for $PAPER. His age? Unknown. His net worth? That's a closely guarded secret. Some say he was born with a stack of cash in hand, but those are just whispers—who knows what's true? What we do know is this: PaperBoy will go to any lengths to secure his $PAPER and protect it like it's his very life.

One thing's for sure—this little f*cker's got hustle.

P.S. He bites. Approach with caution!`
  );
  let t = S([]);
  function n() {
    const d = {
      id: Math.random(),
      left: Math.random() * 100 + "%",
      delay: Math.random() * 2 + "s",
    };
    P(t, [...s(t), d]),
      setTimeout(() => {
        P(
          t,
          s(t).filter((i) => i.id !== d.id)
        );
      }, 3e3);
  }
  setInterval(n, 5e3);
  var l = Tr(),
    o = q(l),
    b = _(o),
    u = _(b),
    v = T(_(u), 2),
    f = _(v),
    p = _(f, !0);
  x(f), we(2), x(v), x(u), x(b), x(o);
  var c = T(o, 2);
  se(
    c,
    1,
    () => s(t),
    (d) => d.id,
    (d, i) => {
      var h = zr();
      O(() =>
        Q(
          h,
          "style",
          `left: ${s(i).left ?? ""}; animation-delay: ${s(i).delay ?? ""}`
        )
      ),
        z(d, h);
    }
  ),
    O(() => ne(p, r())),
    z(a, l);
}
var Er = D('<p class="svelte-zjeae4"> </p>'),
  jr = D(
    '<div class="flex-1 svelte-zjeae4"><img alt="Paper Boy" class="h-full w-full object-cover pointer-events-none hover-grow svelte-zjeae4"></div>'
  ),
  Pr =
    D(`<div class="select-none artist-bg flex items-center justify-center bg-zinc-800 p-6 sm:p-12 text-zinc-100 svelte-zjeae4"><div><div class="flex flex-col-reverse md:flex-row svelte-zjeae4"><div class="w-full p-8 md:w-2/3 svelte-zjeae4"><h2 class="mb-4 text-3xl font-bold text-orange-600 transition-colors duration-300
						hover:text-zinc-100 font-sawer hover-shake svelte-zjeae4"> </h2> <div class="rounded-lg bg-zinc-800 p-6 shadow-inner svelte-zjeae4"><div></div></div></div> <div><div class="md:hidden h-64 svelte-zjeae4"><img alt="Paper Boy" class="h-full w-full object-cover pointer-events-none hover-grow svelte-zjeae4"></div> <div class="hidden md:flex md:flex-col md:h-full svelte-zjeae4"></div></div></div></div></div>`);
function Mr(a, e) {
  ee(e, !1);
  let r = I(e, "title", 8, "About the Artist"),
    t = I(
      e,
      "description",
      12,
      `The PAPERBOY Team is not your typical influencer BS-driven initiative—our approach stands apart from the common short lasting trends we see every day.

We are a collective of dedicated individuals with a deep passion for various sectors of Web3, including Art, Community Building, and beyond. PaperBoy was founded by our creative art studio with over three years of experience working closely with artists, additionally supported by five years of expertise in building both Web2 and Web3 brands and projects.

Our founding team has successfully developed multiple utilities within the Web3 space, with a primary focus on Artplex—an innovative social art marketplace designed to support and showcase the work of emerging artists from around the world.

Our mission is to create a character and brand that are not only relatable and captivating but also wild and chaotic, while building a active community that continues to grow rapidly and make a significant impact within the Web3 ecosystem.

The level of support from our community has been exceptional, and we are deeply grateful to each individual who has joined us on this journey.

With every PaperBoy, we are unstoppable.`
    );
  const n = [
      "/paper-boy/butt.webp",
      "/paper-boy/fight.webp",
      "/paper-boy/flight.webp",
      "/paper-boy/green.webp",
    ],
    l = "/paper-boy/butt.webp";
  let o = 0,
    b = S(!1),
    u = S(!1),
    v = S(!1);
  const f = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
  let p;
  function c() {
    o++, o === 3 && (P(u, !s(u)), s(u) && w());
  }
  let d = "";
  function i(B) {
    (d += B.key),
      d.includes("rainbow")
        ? (P(b, !s(b)), (d = ""))
        : d.includes("matrix") &&
          (P(v, !s(v)), s(v) ? h() : clearInterval(p), (d = "")),
      d.length > 50 && (d = "");
  }
  function h() {
    const B = t();
    p = setInterval(() => {
      if (!s(v)) return;
      const ae = f[Math.floor(Math.random() * f.length)],
        Z = Math.floor(Math.random() * B.length);
      t(B.substring(0, Z) + ae + B.substring(Z + 1)),
        setTimeout(() => {
          t(B);
        }, 100);
    }, 50);
  }
  function w() {
    const B = new Audio("/beatbox.mp3");
    (B.loop = !0), B.play();
  }
  oe();
  var A = Pr();
  L("keydown", xa, i);
  var k = _(A),
    j = _(k),
    m = _(j),
    y = _(m),
    R = _(y, !0);
  x(y);
  var C = T(y, 2),
    M = _(C);
  se(
    M,
    5,
    () =>
      t().split(`

`),
    pe,
    (B, ae) => {
      var Z = Er(),
        ue = _(Z, !0);
      x(Z), O(() => ne(ue, s(ae))), z(B, Z);
    }
  ),
    x(M),
    x(C),
    x(m);
  var W = T(m, 2),
    U = _(W),
    H = _(U);
  Q(H, "src", l), x(U);
  var N = T(U, 2);
  se(
    N,
    5,
    () => n,
    pe,
    (B, ae) => {
      var Z = jr(),
        ue = _(Z);
      x(Z), O(() => Q(ue, "src", s(ae))), z(B, Z);
    }
  ),
    x(N),
    x(W),
    x(j),
    x(k),
    x(A),
    O(() => {
      de(
        k,
        `w-full max-w-4xl overflow-hidden rounded-lg bg-zinc-900 shadow-2xl
		${(s(b) ? "rainbow-border" : "") ?? ""}
		${(s(u) ? "dance-container" : "") ?? ""} svelte-zjeae4`
      ),
        ne(R, r()),
        de(
          M,
          `space-y-4 leading-relaxed text-zinc-300
						${(s(v) ? "matrix-text" : "") ?? ""}
						${(s(b) ? "rainbow-text" : "") ?? ""} svelte-zjeae4`
        ),
        de(
          W,
          `artist-image relative w-full overflow-hidden bg-zinc-700 md:w-1/3
					${(s(u) ? "dance-mode" : "") ?? ""} svelte-zjeae4`
        );
    }),
    L("click", W, c),
    z(a, A),
    te();
}
var Br = D(
    '<div class="transform transition-transform duration-300 hover:scale-105 meme-container svelte-1x40lxv"><img alt="Meme"></div>'
  ),
  Dr = D(
    '<div class="relative overflow-hidden svelte-1x40lxv"><div class="animate-scroll flex flex-col gap-8 svelte-1x40lxv"></div></div>'
  ),
  Rr = D(
    '<div><div class="mx-auto max-w-7xl svelte-1x40lxv"><h2 class="glow mb-8 text-center font-sawer text-4xl font-bold text-orange-500 svelte-1x40lxv"> </h2> <div class="flex h-[calc(100vh-120px)] justify-between gap-6 svelte-1x40lxv"></div></div></div>'
  );
function Sr(a, e) {
  ee(e, !1);
  const r = Array.from(
    { length: 30 },
    (m, y) => `/meme-wall/image${y + 1}.webp`
  );
  let t = S([]),
    n = "",
    l = S(!1),
    o = S(!1),
    b = S(!1);
  function u(m) {
    (n += m.key),
      n.includes(
        "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba"
      )
        ? (P(l, !0), (n = ""))
        : n.includes("spin")
        ? (P(o, !s(o)), (n = ""))
        : n.includes("australia") && (P(b, !s(b)), (n = "")),
      n.length > 100 && (n = "");
  }
  let v = 0;
  function f() {
    v++,
      v === 7 &&
        (alert(
          "🎉 You found the secret! But what does it do? 🤔 maybe try konami code? 🤔 maybeeee type spin, australia, rainbow, or matrix"
        ),
        (document.body.style.fontFamily = "Comic Sans MS"),
        setTimeout(() => {
          (document.body.style.fontFamily = ""), (v = 0);
        }, 5e3));
  }
  function p(m) {
    for (let y = m.length - 1; y > 0; y--) {
      const R = Math.floor(Math.random() * (y + 1));
      [m[y], m[R]] = [m[R], m[y]];
    }
    return m;
  }
  function c() {
    const m = window.innerWidth;
    m < 640
      ? P(t, [p([...r])])
      : m < 1024
      ? P(
          t,
          Array(2)
            .fill()
            .map(() => p([...r]))
        )
      : m < 1280
      ? P(
          t,
          Array(3)
            .fill()
            .map(() => p([...r]))
        )
      : P(
          t,
          Array(4)
            .fill()
            .map(() => p([...r]))
        );
  }
  function d(m, y) {
    let R;
    return function (...M) {
      const W = () => {
        clearTimeout(R), m(...M);
      };
      clearTimeout(R), (R = setTimeout(W, y));
    };
  }
  Xe(() => {
    c();
    const m = d(c, 250);
    return (
      window.addEventListener("resize", m),
      window.addEventListener("keydown", u),
      () => {
        window.removeEventListener("resize", m),
          window.removeEventListener("keydown", u);
      }
    );
  });
  function i() {
    const m = ["h-40", "h-48", "h-56", "h-64"];
    return m[Math.floor(Math.random() * m.length)];
  }
  oe();
  var h = Rr(),
    w = _(h),
    A = _(w),
    k = _(A);
  x(A);
  var j = T(A, 2);
  se(
    j,
    5,
    () => s(t),
    pe,
    (m, y, R) => {
      var C = Dr(),
        M = _(C);
      Q(
        M,
        "style",
        `animation-direction: ${(R % 2 === 0 ? "normal" : "reverse") ?? ""};`
      ),
        se(
          M,
          5,
          () => [...s(y), ...s(y)],
          pe,
          (W, U) => {
            var H = Br(),
              N = _(H);
            const B = Mt(
              () =>
                `${
                  i() ?? ""
                } w-full rounded-lg object-cover shadow-lg pointer-events-none svelte-1x40lxv`
            );
            x(H),
              O(() => {
                Q(N, "src", s(U)), de(N, s(B));
              }),
              L("dblclick", H, () => {
                new Audio("/bonk.mp3").play();
              }),
              z(W, H);
          }
        ),
        x(M),
        x(C),
        O(() => Q(C, "style", `width: ${100 / s(t).length}%`)),
        z(m, C);
    }
  ),
    x(j),
    x(w),
    x(h),
    O(() => {
      de(
        h,
        `meme-bank-bg min-h-screen overflow-hidden p-12 select-none ${
          (s(l) ? "party-mode" : "") ?? ""
        }
	${(s(o) ? "spin-mode" : "") ?? ""} ${
          (s(b) ? "australia-mode" : "") ?? ""
        } svelte-1x40lxv`
      ),
        ne(
          k,
          `Meme Vault ${(s(l) ? "🎉" : "") ?? ""} ${(s(o) ? "🌀" : "") ?? ""} ${
            (s(b) ? "🙃" : "") ?? ""
          }`
        );
    }),
    L("click", h, f),
    z(a, h),
    te();
}
var Fr = D("<button><!></button>"),
  Lr =
    D(`<div class="group relative transform cursor-pointer overflow-hidden rounded-xl
                   border border-white/10 bg-gradient-to-br from-white/5 to-white/10
                   backdrop-blur-sm transition-all duration-300
                   hover:scale-105 hover:border-purple-400/30 hover:shadow-xl
                   hover:shadow-purple-500/20 svelte-mxgho2"><div class="absolute inset-0 bg-gradient-to-tr from-purple-600/0 to-blue-500/0 opacity-0
                      transition-opacity duration-300 group-hover:opacity-30 svelte-mxgho2"></div> <div class="relative svelte-mxgho2"><img class="pointer-events-none h-32 w-full select-none object-cover transition-transform duration-300
                           group-hover:scale-110 svelte-mxgho2"> <div class="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0
                          transition-opacity duration-300 group-hover:opacity-100 svelte-mxgho2"></div></div></div>`),
  Ir = D(
    '<div class="relative mb-4 svelte-mxgho2"><div class="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-teal-900/10 blur-xl svelte-mxgho2"></div> <div class="relative flex flex-wrap justify-center space-x-2 space-y-2 overflow-x-auto pb-4 sm:space-x-4 svelte-mxgho2"></div></div> <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 svelte-mxgho2"></div>',
    1
  );
function Or(a, e) {
  ee(e, !1);
  const r = _a();
  let t = S("bag");
  const n = S({ all: [] }),
    l = [
      { name: "1", url: "/meme-wall/image1.webp", category: "paper boy" },
      { name: "2", url: "/meme-generator/1.webp", category: "bag" },
      { name: "3", url: "/meme-generator/2.webp", category: "bag" },
      { name: "4", url: "/meme-generator/3.webp", category: "bag" },
      { name: "5", url: "/meme-generator/4.webp", category: "bag" },
      { name: "6", url: "/meme-generator/5.webp", category: "bag" },
      { name: "7", url: "/meme-generator/6.webp", category: "bag" },
      { name: "8", url: "/meme-generator/7.webp", category: "bag" },
      { name: "9", url: "/meme-generator/8.webp", category: "bag" },
      { name: "10", url: "/meme-generator/10.webp", category: "paper boy" },
      { name: "11", url: "/meme-generator/11.webp", category: "paper boy" },
      { name: "12", url: "/meme-generator/12.webp", category: "paper boy" },
      { name: "13", url: "/meme-generator/13.webp", category: "paper boy" },
      { name: "14", url: "/meme-generator/14.webp", category: "paper boy" },
      { name: "15", url: "/meme-generator/15.webp", category: "eyes" },
      { name: "16", url: "/meme-generator/16.webp", category: "paper boy" },
      { name: "17", url: "/meme-generator/17.webp", category: "paper boy" },
      { name: "18", url: "/meme-generator/18.webp", category: "paper boy" },
      { name: "19", url: "/meme-generator/19.webp", category: "bag" },
      { name: "20", url: "/meme-generator/20.webp", category: "bag" },
      { name: "21", url: "/meme-generator/21.webp", category: "bag" },
      { name: "22", url: "/meme-generator/22.webp", category: "bag" },
      { name: "23", url: "/meme-generator/23.webp", category: "bag" },
      { name: "24", url: "/meme-generator/24.webp", category: "bag" },
      { name: "25", url: "/meme-generator/25.webp", category: "bag" },
      { name: "26", url: "/meme-generator/26.webp", category: "bag" },
      { name: "27", url: "/meme-generator/27.webp", category: "bag" },
      { name: "28", url: "/meme-generator/28.webp", category: "bag" },
    ];
  l.forEach((c) => {
    s(n)[c.category] || Bt(n, (s(n)[c.category] = []));
  }),
    l.forEach((c) => {
      s(n).all.push(c), s(n)[c.category].push(c);
    });
  function o(c) {
    r("select", c);
  }
  function b(c) {
    P(t, c);
  }
  oe();
  var u = Ir(),
    v = q(u),
    f = T(_(v), 2);
  se(
    f,
    5,
    () => Object.keys(s(n)),
    pe,
    (c, d) => {
      var i = Fr(),
        h = _(i);
      {
        var w = (k) => {
            var j = be("🎒 Bag");
            z(k, j);
          },
          A = (k) => {
            var j = J(),
              m = q(j);
            {
              var y = (C) => {
                  var M = be("📰 Paper Boy");
                  z(C, M);
                },
                R = (C) => {
                  var M = J(),
                    W = q(M);
                  {
                    var U = (N) => {
                        var B = be("🎒 Bag");
                        z(N, B);
                      },
                      H = (N) => {
                        var B = J(),
                          ae = q(B);
                        {
                          var Z = (le) => {
                              var ge = be("👀 Eyes");
                              z(le, ge);
                            },
                            ue = (le) => {
                              var ge = be();
                              O(() => ne(ge, s(d))), z(le, ge);
                            };
                          Y(
                            ae,
                            (le) => {
                              s(d) === "eyes" ? le(Z) : le(ue, !1);
                            },
                            !0
                          );
                        }
                        z(N, B);
                      };
                    Y(
                      W,
                      (N) => {
                        s(d) === "bag" ? N(U) : N(H, !1);
                      },
                      !0
                    );
                  }
                  z(C, M);
                };
              Y(
                m,
                (C) => {
                  s(d) === "paper boy" ? C(y) : C(R, !1);
                },
                !0
              );
            }
            z(k, j);
          };
        Y(h, (k) => {
          s(d) === "bag" ? k(w) : k(A, !1);
        });
      }
      x(i),
        O(() =>
          de(
            i,
            `font-sawer text-orange-500 rounded-xl border border-transparent px-6 py-3 text-sm font-bold backdrop-blur-md
                    transition-all duration-300 ease-out
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
                    ${
                      (s(t) === s(d)
                        ? "border-purple-400/30 bg-gradient-to-r from-purple-500/90 to-blue-500/90 text-white shadow-lg shadow-purple-500/20"
                        : "bg-white/10 text-gray-300 hover:border-purple-400/20 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20") ??
                      ""
                    } svelte-mxgho2`
          )
        ),
        L("click", i, () => b(s(d))),
        z(c, i);
    }
  ),
    x(f),
    x(v);
  var p = T(v, 2);
  return (
    se(
      p,
      5,
      () => s(n)[s(t)],
      pe,
      (c, d) => {
        var i = Lr(),
          h = T(_(i), 2),
          w = _(h);
        we(2),
          x(h),
          x(i),
          O(() => {
            Q(w, "src", s(d).url), Q(w, "alt", s(d).name);
          }),
          L("click", i, () => o(s(d))),
          z(c, i);
      }
    ),
    x(p),
    z(a, u),
    Fa(e, "assets", l),
    te({ assets: l })
  );
}
var Wr = D(
    '<button class="flex flex-col items-center rounded-lg border border-orange-500/20 bg-zinc-700 p-3 transition-all hover:bg-zinc-600"><div class="mb-2 h-8 w-8 rounded-lg border border-orange-500/20"></div> <span class="font-sawer text-sm text-orange-500"> </span></button>'
  ),
  Nr = D(
    '<div class="absolute left-0 top-full z-50 mt-2 w-72 rounded-lg border border-orange-500/20 bg-zinc-800 p-4 font-sawer shadow-lg"><label class="mb-4 flex w-full cursor-pointer flex-col items-center rounded-lg border-2 border-dashed border-orange-500/40 bg-zinc-700 p-4 text-center transition-all hover:border-orange-500/60 hover:bg-zinc-600"><div class="text-2xl text-orange-500">📤</div> <span class="font-sawer text-lg text-orange-500">Upload Your Background</span> <span class="mt-1 text-sm text-zinc-400">Click to choose a file</span> <input type="file" accept="image/*" class="hidden"></label> <div class="mt-4 grid grid-cols-2 gap-3"></div></div>'
  ),
  Hr = D(
    '<div class="flex min-h-screen flex-col items-center justify-center bg-zinc-900 p-4 pt-20"><div class="select-none text-center"><h1 class="mb-4 font-sawer text-4xl text-orange-500 md:text-5xl">Make a Meme</h1></div> <div class="mb-8 w-full max-w-4xl overflow-hidden rounded-lg border border-orange-500/20 bg-zinc-800 shadow-md"><div class="p-6"><div class="mx-auto mb-6 w-full max-w-[800px] overflow-hidden rounded-lg border border-orange-500/20"><canvas id="meme-canvas"></canvas></div> <div class="mx-auto mb-6 flex w-full max-w-[512px] flex-wrap justify-center gap-3"><div class="relative min-w-[150px] flex-1"><button class="w-full rounded border border-orange-500/20 bg-zinc-700 px-4 py-2 font-sawer text-xl text-orange-500 transition-colors hover:bg-zinc-600">Background</button> <!></div> <label class="min-w-[150px] flex-1 cursor-pointer rounded border border-orange-500/20 bg-zinc-700 px-4 py-2 text-center font-sawer text-xl text-orange-500 transition-colors hover:bg-zinc-600"><input type="file" accept="image/*" class="hidden"> Add Image</label> <button class="min-w-[150px] flex-1 rounded border border-orange-500/20 bg-zinc-700 px-4 py-2 font-sawer text-xl text-orange-500 transition-colors hover:bg-zinc-600">Add Text</button></div> <div class="mx-auto mb-6 flex w-full max-w-[512px] flex-wrap justify-center gap-3"><button class="min-w-[100px] flex-1 rounded border border-orange-500/20 bg-zinc-700 px-3 py-2 font-sawer text-xl text-orange-500 transition-colors hover:bg-zinc-600"><span class="material-icons text-xl">Rotate Right</span></button> <button class="min-w-[100px] flex-1 rounded border border-orange-500/20 bg-zinc-700 px-3 py-2 font-sawer text-xl text-orange-500 transition-colors hover:bg-zinc-600"><span class="material-icons text-xl">Rotate Left</span></button> <button class="min-w-[100px] flex-1 rounded border border-orange-500/20 bg-zinc-700 px-3 py-2 font-sawer text-xl text-orange-500 transition-colors hover:bg-zinc-600"><span class="material-icons rotate-90 text-xl">Flip</span></button> <button class="min-w-[100px] flex-1 rounded border border-orange-500/20 bg-zinc-700 px-3 py-2 font-sawer text-xl text-orange-500 transition-colors hover:bg-zinc-600"><span class="material-icons text-xl">Flip Again</span></button> <button class="min-w-[100px] flex-1 rounded border border-orange-500/20 bg-zinc-700 px-3 py-2 font-sawer text-orange-500 transition-colors hover:bg-zinc-600">RESET</button> <button class="min-w-[100px] flex-1 rounded border border-orange-500/20 bg-zinc-700 px-3 py-2 font-sawer text-orange-500 transition-colors hover:bg-zinc-600">SAVE/COPY</button></div> <div class="mx-auto mb-6 flex w-full max-w-[512px] flex-wrap justify-center gap-3"><button class="min-w-[150px] flex-1 rounded border border-orange-500/20 bg-zinc-700 px-4 py-2 font-sawer text-orange-500 transition-colors hover:bg-zinc-600"> </button> <input type="color" class="h-10 min-w-[150px] flex-1 cursor-pointer rounded border border-gray-200"> <input type="range" min="1" max="50" value="5" class="min-w-[150px] flex-1 cursor-pointer accent-gray-400"></div></div> <div class="select-none border-t border-orange-500/20 bg-zinc-800 p-6"><h2 class="mb-4 text-center font-sawer text-4xl text-orange-500 md:text-5xl">Assets</h2> <div class="rounded border border-orange-500/20 bg-zinc-700 p-4"><!></div></div></div></div>'
  );
function Ur(a, e) {
  ee(e, !1);
  let r = S(),
    t,
    n = S(),
    l,
    o,
    b = S(!1),
    u = S(!1),
    v,
    f;
  const p = { width: 800, height: 800 },
    c = [
      { name: "Neon Green", value: "#39FF14" },
      { name: "Cyber Purple", value: "#9D00FF" },
      { name: "Digital Blue", value: "#00F6FF" },
      { name: "Bitcoin Orange", value: "#F7931A" },
      { name: "ETH Blue", value: "#3C3C3D" },
      { name: "Matrix Green", value: "#08F26E" },
      { name: "Blockchain Blue", value: "#2E5BFF" },
      { name: "NFT Pink", value: "#FF2E93" },
    ];
  Xe(() => {
    {
      const g = document.createElement("script");
      (g.src =
        "https://cdnjs.cloudflare.com/ajax/libs/fabric.js/5.3.1/fabric.min.js"),
        (g.onload = d),
        document.head.appendChild(g);
      const E = document.createElement("style");
      (E.textContent = `
				@font-face {
					font-family: 'GillSansLight';
					src: url('/fonts/gill_sans_light.ttf') format('truetype');
				}
			`),
        document.head.appendChild(E);
    }
  });
  function d() {
    try {
      (l = window.fabric),
        (t = new l.Canvas("meme-canvas", {
          width: p.width,
          height: p.height,
          isDrawingMode: !1,
          backgroundColor: "#18181b",
        })),
        s(n) && (i(), window.addEventListener("resize", i)),
        h(),
        ge(),
        t.on("mouse:dblclick", y),
        document.addEventListener("keydown", M),
        (t.freeDrawingBrush = new l.PencilBrush(t)),
        (t.freeDrawingBrush.width = 5),
        (t.freeDrawingBrush.color = "#FF69B4");
    } catch (g) {
      console.error("Error initializing Fabric.js:", g);
    }
  }
  function i() {
    const g = s(n).clientWidth,
      E = g / p.width,
      F = p.height * E;
    Bt(n, (s(n).style.height = `${F}px`)),
      t.setZoom(E),
      t.setWidth(g),
      t.setHeight(F),
      t.renderAll();
  }
  function h() {
    const g = new l.Rect({
      width: p.width,
      height: p.height,
      fill: "#18181b",
      selectable: !1,
      evented: !1,
    });
    (v = g), t.add(g), t.renderAll();
  }
  function w(g) {
    if (!t || !l) {
      console.error("Fabric.js is not initialized");
      return;
    }
    const E = g.target.files[0],
      F = new FileReader();
    (F.onload = ($) => {
      k($.target.result);
    }),
      F.readAsDataURL(E);
  }
  function A(g) {
    if (!t || !l) {
      console.error("Fabric.js is not initialized");
      return;
    }
    const E = g.target.files[0];
    if (!E) return;
    const F = new FileReader();
    (F.onload = ($) => {
      j($.target.result), P(u, !1);
    }),
      F.readAsDataURL(E);
  }
  function k(g, E = !1) {
    l.Image.fromURL(g, (F) => {
      let $;
      E
        ? ($ = Math.min(p.width / 4 / F.width, p.height / 4 / F.height))
        : ($ = Math.min(p.width / F.width, p.height / F.height)),
        F.scale($),
        F.set({
          left: (p.width - F.width * $) / 2,
          top: (p.height - F.height * $) / 2,
        }),
        t.add(F),
        Je(),
        t.renderAll();
    });
  }
  function j(g) {
    l.Image.fromURL(g, (E) => {
      o && t.remove(o), v && (t.remove(v), (v = null));
      const F = Math.max(p.width / E.width, p.height / E.height);
      E.scale(F),
        E.set({
          left: (p.width - E.width * F) / 2,
          top: (p.height - E.height * F) / 2,
          selectable: !1,
          evented: !1,
        }),
        (o = E),
        t.add(o),
        t.sendToBack(o),
        t.renderAll();
    });
  }
  function m() {
    const g = new l.IText("Your Paper Boy Text Goes Here", {
      left: p.width / 4,
      top: p.height / 3,
      fontFamily: "Sawer",
      fill: "#f97316",
      fontSize: 36,
      textAlign: "center",
      width: p.width / 2,
    });
    t.add(g), Je(), t.renderAll();
  }
  function y(g) {
    g.target &&
      g.target.type === "i-text" &&
      (t.setActiveObject(g.target),
      g.target.enterEditing(),
      g.target.selectAll());
  }
  function R(g) {
    const E = g.detail;
    k(E.url, !0);
  }
  async function C() {
    if (!t) {
      console.error("Canvas is not initialized");
      return;
    }
    try {
      const g = document.createElement("canvas"),
        E = g.getContext("2d");
      (g.width = p.width + 2),
        (g.height = p.height + 2),
        (E.fillStyle = "#18181b"),
        E.fillRect(0, 0, g.width, g.height);
      const F = t.toDataURL({ format: "png", quality: 1, multiplier: 2 }),
        $ = new Image();
      ($.onload = async () => {
        E.drawImage($, 1, 1, p.width, p.height);
        const he = g.toDataURL("image/png", 1);
        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
          try {
            const G = await (await fetch(he)).blob(),
              X = new File([G], "NineLivesDegen&PaperBoy.png", {
                type: "image/png",
              });
            if (navigator.share) {
              await navigator.share({
                files: [X],
                title: "Share Meme",
                text: "Check out my meme!",
              });
              return;
            }
          } catch (G) {
            console.error("Share failed:", G);
          }
        try {
          const G = await (await fetch(he)).blob();
          await navigator.clipboard.write([new ClipboardItem({ [G.type]: G })]),
            alert("Meme copied to clipboard!");
        } catch {
          const X = document.createElement("a");
          (X.download = "meme.png"),
            (X.href = he),
            document.body.appendChild(X),
            X.click(),
            document.body.removeChild(X),
            alert("Meme downloaded!");
        }
      }),
        ($.src = F);
    } catch (g) {
      console.error("Failed to process image:", g),
        alert("Failed to process image. Please try again.");
    }
  }
  function M(g) {
    if (g.key === "Delete" || g.key === "Backspace") {
      const E = t.getActiveObject();
      E &&
        !(E.type === "i-text" && E.isEditing) &&
        (t.remove(E), t.renderAll());
    }
  }
  function W() {
    const g = t.getActiveObject();
    g && (g.rotate(g.angle + 15), t.renderAll());
  }
  function U() {
    const g = t.getActiveObject();
    g && (g.rotate(g.angle - 15), t.renderAll());
  }
  function H() {
    const g = t.getActiveObject();
    g && (g.set("flipX", !g.flipX), t.renderAll());
  }
  function N() {
    const g = t.getActiveObject();
    g && (g.set("flipY", !g.flipY), t.renderAll());
  }
  function B() {
    P(b, !s(b)), (t.isDrawingMode = s(b));
  }
  function ae(g) {
    t.freeDrawingBrush.color = g.target.value;
  }
  function Z(g) {
    t.freeDrawingBrush.width = parseInt(g.target.value, 10) || 1;
  }
  function ue() {
    if (!t) return;
    const g = f;
    t.clear(),
      (o = null),
      (v = null),
      P(b, !1),
      (t.isDrawingMode = !1),
      h(),
      g && (t.add(g), t.bringToFront(g), (f = g)),
      (t.freeDrawingBrush.width = 5),
      (t.freeDrawingBrush.color = "#FF69B4"),
      t.renderAll();
  }
  function le(g) {
    if (!t) return;
    o && (t.remove(o), (o = null)), v && t.remove(v);
    const E = new l.Rect({
      width: p.width,
      height: p.height,
      fill: g,
      selectable: !1,
      evented: !1,
    });
    (v = E), t.add(E), t.sendToBack(E), t.renderAll(), P(u, !1);
  }
  function ge() {
    l.Image.fromURL("/paper-boy/logo2.webp", (g) => {
      g.scale(0.15),
        g.set({
          left: 10,
          top: p.height - g.height * 0.15 - 10,
          selectable: !1,
          evented: !1,
          opacity: 0.8,
        }),
        (f = g),
        t.add(f),
        t.bringToFront(f);
    });
  }
  function Je() {
    f && t.bringToFront(f);
  }
  oe();
  var De = Hr(),
    Qe = T(_(De), 2),
    Re = _(Qe),
    ke = _(Re),
    Ot = _(ke);
  Me(
    Ot,
    (g) => P(r, g),
    () => s(r)
  ),
    x(ke),
    Me(
      ke,
      (g) => P(n, g),
      () => s(n)
    );
  var Se = T(ke, 2),
    Fe = _(Se),
    et = _(Fe),
    Wt = T(et, 2);
  {
    var Nt = (g) => {
      var E = Nr(),
        F = _(E),
        $ = T(_(F), 6);
      x(F);
      var he = T(F, 2);
      se(
        he,
        5,
        () => c,
        pe,
        (dt, G) => {
          var X = Wr(),
            ut = _(X),
            vt = T(ut, 2),
            Vt = _(vt, !0);
          x(vt),
            x(X),
            O(() => {
              Q(ut, "style", `background-color: ${s(G).value ?? ""};`),
                ne(Vt, s(G).name);
            }),
            L("click", X, () => le(s(G).value)),
            z(dt, X);
        }
      ),
        x(he),
        x(E),
        L("change", $, A),
        z(g, E);
    };
    Y(Wt, (g) => {
      s(u) && g(Nt);
    });
  }
  x(Fe);
  var Le = T(Fe, 2),
    Ht = _(Le);
  we(), x(Le);
  var Ut = T(Le, 2);
  x(Se);
  var Ie = T(Se, 2),
    tt = _(Ie),
    at = T(tt, 2),
    rt = T(at, 2),
    nt = T(rt, 2),
    ot = T(nt, 2),
    qt = T(ot, 2);
  x(Ie);
  var it = T(Ie, 2),
    Ae = _(it),
    $t = _(Ae, !0);
  x(Ae);
  var st = T(Ae, 2),
    Yt = T(st, 2);
  x(it), x(Re);
  var lt = T(Re, 2),
    ct = T(_(lt), 2),
    Zt = _(ct);
  Or(Zt, { $$events: { select: R } }),
    x(ct),
    x(lt),
    x(Qe),
    x(De),
    O(() => ne($t, s(b) ? "Stop Drawing" : "Start Drawing")),
    L("click", et, () => P(u, !s(u))),
    L("change", Ht, w),
    L("click", Ut, m),
    L("click", tt, W),
    L("click", at, U),
    L("click", rt, H),
    L("click", nt, N),
    L("click", ot, ue),
    L("click", qt, C),
    L("click", Ae, B),
    L("input", st, ae),
    L("input", Yt, Z),
    z(a, De),
    te();
}
var qr = D(
  '<div class="ticker-wrapper pointer-events-none select-none svelte-19ewqhr"><div class="ticker-container svelte-19ewqhr"><div class="ticker svelte-19ewqhr"><span class="ticker-item svelte-19ewqhr">$PAPER</span> <span class="ticker-item svelte-19ewqhr">$PAPER</span> <span class="ticker-item svelte-19ewqhr">$PAPER</span> <span class="ticker-item svelte-19ewqhr">$PAPER</span> <span class="ticker-item svelte-19ewqhr">$PAPER</span> <span class="ticker-item svelte-19ewqhr">$PAPER</span> <span class="ticker-item svelte-19ewqhr">$PAPER</span> <span class="ticker-item svelte-19ewqhr">$PAPER</span></div></div></div>'
);
function $r(a) {
  function e(n) {
    const l = () => {
      !n ||
        !n.firstElementChild ||
        (n.offsetWidth, n.firstElementChild.offsetWidth);
    };
    return (
      setTimeout(l, 0),
      window.addEventListener("resize", l),
      {
        destroy() {
          window.removeEventListener("resize", l);
        },
      }
    );
  }
  var r = qr(),
    t = _(r);
  Pa(t, (n) => e?.(n)), x(r), z(a, r);
}
var Yr = D("<!> <!> <!> <!> <!> <!> <!>", 1);
function tn(a) {
  var e = Yr(),
    r = q(e);
  Ha(r, {});
  var t = T(r, 2);
  Ar(t, {});
  var n = T(t, 2);
  Cr(n, {});
  var l = T(n, 2);
  $r(l);
  var o = T(l, 2);
  Sr(o, {});
  var b = T(o, 2);
  Mr(b, {});
  var u = T(b, 2);
  Ur(u, {}), z(a, e);
}
export { tn as component };
