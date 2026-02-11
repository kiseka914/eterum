(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  33525,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = (e) => {};
  },
  88143,
  (e, t, r) => {
    "use strict";
    function n({
      widthInt: e,
      heightInt: t,
      blurWidth: r,
      blurHeight: n,
      blurDataURL: o,
      objectFit: i,
    }) {
      let l = r ? 40 * r : e,
        a = n ? 40 * n : t,
        s = l && a ? `viewBox='0 0 ${l} ${a}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${s}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${
        s
          ? "none"
          : "contain" === i
          ? "xMidYMid"
          : "cover" === i
          ? "xMidYMid slice"
          : "none"
      }' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`;
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
  },
  87690,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      VALID_LOADERS: function () {
        return i;
      },
      imageConfigDefault: function () {
        return l;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
      l = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumRedirects: 3,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
      };
  },
  8927,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      e.r(33525);
    let n = e.r(88143),
      o = e.r(87690),
      i = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function l(e) {
      return void 0 !== e.default;
    }
    function a(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
        ? Number.isFinite(e)
          ? e
          : NaN
        : "string" == typeof e && /^[0-9]+$/.test(e)
        ? parseInt(e, 10)
        : NaN;
    }
    function s(
      {
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: s = !1,
        preload: d = !1,
        loading: u,
        className: c,
        quality: f,
        width: p,
        height: m,
        fill: g = !1,
        style: h,
        overrideSrc: x,
        onLoad: b,
        onLoadingComplete: y,
        placeholder: v = "empty",
        blurDataURL: w,
        fetchPriority: _,
        decoding: j = "async",
        layout: E,
        objectFit: P,
        objectPosition: O,
        lazyBoundary: C,
        lazyRoot: S,
        ...R
      },
      M
    ) {
      var N;
      let k,
        z,
        T,
        { imgConf: I, showAltText: $, blurComplete: A, defaultLoader: U } = M,
        D = I || o.imageConfigDefault;
      if ("allSizes" in D) k = D;
      else {
        let e = [...D.deviceSizes, ...D.imageSizes].sort((e, t) => e - t),
          t = D.deviceSizes.sort((e, t) => e - t),
          r = D.qualities?.sort((e, t) => e - t);
        k = { ...D, allSizes: e, deviceSizes: t, qualities: r };
      }
      if (void 0 === U)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 }
        );
      let L = R.loader || U;
      delete R.loader, delete R.srcSet;
      let q = "__next_img_default" in L;
      if (q) {
        if ("custom" === k.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 }
          );
      } else {
        let e = L;
        L = (t) => {
          let { config: r, ...n } = t;
          return e(n);
        };
      }
      if (E) {
        "fill" === E && (g = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[E];
        e && (h = { ...h, ...e });
        let r = { responsive: "100vw", fill: "100vw" }[E];
        r && !t && (t = r);
      }
      let B = "",
        F = a(p),
        W = a(m);
      if ((N = e) && "object" == typeof N && (l(N) || void 0 !== N.src)) {
        let t = l(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 }
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 }
          );
        if (
          ((z = t.blurWidth),
          (T = t.blurHeight),
          (w = w || t.blurDataURL),
          (B = t.src),
          !g)
        )
          if (F || W) {
            if (F && !W) {
              let e = F / t.width;
              W = Math.round(t.height * e);
            } else if (!F && W) {
              let e = W / t.height;
              F = Math.round(t.width * e);
            }
          } else (F = t.width), (W = t.height);
      }
      let G = !s && !d && ("lazy" === u || void 0 === u);
      (!(e = "string" == typeof e ? e : B) ||
        e.startsWith("data:") ||
        e.startsWith("blob:")) &&
        ((r = !0), (G = !1)),
        k.unoptimized && (r = !0),
        q &&
          !k.dangerouslyAllowSVG &&
          e.split("?", 1)[0].endsWith(".svg") &&
          (r = !0);
      let H = a(f),
        V = Object.assign(
          g
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: P,
                objectPosition: O,
              }
            : {},
          $ ? {} : { color: "transparent" },
          h
        ),
        X =
          A || "empty" === v
            ? null
            : "blur" === v
            ? `url("data:image/svg+xml;charset=utf-8,${(0, n.getImageBlurSvg)({
                widthInt: F,
                heightInt: W,
                blurWidth: z,
                blurHeight: T,
                blurDataURL: w || "",
                objectFit: V.objectFit,
              })}")`
            : `url("${v}")`,
        Y = i.includes(V.objectFit)
          ? "fill" === V.objectFit
            ? "100% 100%"
            : "cover"
          : V.objectFit,
        J = X
          ? {
              backgroundSize: Y,
              backgroundPosition: V.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: X,
            }
          : {},
        K = (function ({
          config: e,
          src: t,
          unoptimized: r,
          width: n,
          quality: o,
          sizes: i,
          loader: l,
        }) {
          if (r) return { src: t, srcSet: void 0, sizes: void 0 };
          let { widths: a, kind: s } = (function (
              { deviceSizes: e, allSizes: t },
              r,
              n
            ) {
              if (n) {
                let r = /(^|\s)(1?\d?\d)vw/g,
                  o = [];
                for (let e; (e = r.exec(n)); ) o.push(parseInt(e[2]));
                if (o.length) {
                  let r = 0.01 * Math.min(...o);
                  return { widths: t.filter((t) => t >= e[0] * r), kind: "w" };
                }
                return { widths: t, kind: "w" };
              }
              return "number" != typeof r
                ? { widths: e, kind: "w" }
                : {
                    widths: [
                      ...new Set(
                        [r, 2 * r].map(
                          (e) => t.find((t) => t >= e) || t[t.length - 1]
                        )
                      ),
                    ],
                    kind: "x",
                  };
            })(e, n, i),
            d = a.length - 1;
          return {
            sizes: i || "w" !== s ? i : "100vw",
            srcSet: a
              .map(
                (r, n) =>
                  `${l({ config: e, src: t, quality: o, width: r })} ${
                    "w" === s ? r : n + 1
                  }${s}`
              )
              .join(", "),
            src: l({ config: e, src: t, quality: o, width: a[d] }),
          };
        })({
          config: k,
          src: e,
          unoptimized: r,
          width: F,
          quality: H,
          sizes: t,
          loader: L,
        }),
        Q = G ? "lazy" : u;
      return {
        props: {
          ...R,
          loading: Q,
          fetchPriority: _,
          width: F,
          height: W,
          decoding: j,
          className: c,
          style: { ...V, ...J },
          sizes: K.sizes,
          srcSet: K.srcSet,
          src: x || K.src,
        },
        meta: { unoptimized: r, preload: d || s, placeholder: v, fill: g },
      };
    }
  },
  98879,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = e.r(71645),
      o = "undefined" == typeof window,
      i = o ? () => {} : n.useLayoutEffect,
      l = o ? () => {} : n.useEffect;
    function a(e) {
      let { headManager: t, reduceComponentsToState: r } = e;
      function a() {
        if (t && t.mountedInstances) {
          let e = n.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean)
          );
          t.updateHead(r(e));
        }
      }
      return (
        o && (t?.mountedInstances?.add(e.children), a()),
        i(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          )
        ),
        i(
          () => (
            t && (t._pendingUpdate = a),
            () => {
              t && (t._pendingUpdate = a);
            }
          )
        ),
        l(
          () => (
            t &&
              t._pendingUpdate &&
              (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          )
        ),
        null
      );
    }
  },
  25633,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return g;
      },
      defaultHead: function () {
        return c;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = e.r(55682),
      l = e.r(90809),
      a = e.r(43476),
      s = l._(e.r(71645)),
      d = i._(e.r(98879)),
      u = e.r(42732);
    function c() {
      return [
        (0, a.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, a.jsx)(
          "meta",
          { name: "viewport", content: "width=device-width" },
          "viewport"
        ),
      ];
    }
    function f(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === s.default.Fragment
        ? e.concat(
            s.default.Children.toArray(t.props.children).reduce(
              (e, t) =>
                "string" == typeof t || "number" == typeof t ? e : e.concat(t),
              []
            )
          )
        : e.concat(t);
    }
    e.r(33525);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];
    function m(e) {
      let t, r, n, o;
      return e
        .reduce(f, [])
        .reverse()
        .concat(c().reverse())
        .filter(
          ((t = new Set()),
          (r = new Set()),
          (n = new Set()),
          (o = {}),
          (e) => {
            let i = !0,
              l = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              l = !0;
              let r = e.key.slice(e.key.indexOf("$") + 1);
              t.has(r) ? (i = !1) : t.add(r);
            }
            switch (e.type) {
              case "title":
              case "base":
                r.has(e.type) ? (i = !1) : r.add(e.type);
                break;
              case "meta":
                for (let t = 0, r = p.length; t < r; t++) {
                  let r = p[t];
                  if (e.props.hasOwnProperty(r))
                    if ("charSet" === r) n.has(r) ? (i = !1) : n.add(r);
                    else {
                      let t = e.props[r],
                        n = o[r] || new Set();
                      ("name" !== r || !l) && n.has(t)
                        ? (i = !1)
                        : (n.add(t), (o[r] = n));
                    }
                }
            }
            return i;
          })
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t;
          return s.default.cloneElement(e, { key: r });
        });
    }
    let g = function ({ children: e }) {
      let t = (0, s.useContext)(u.HeadManagerContext);
      return (0, a.jsx)(d.default, {
        reduceComponentsToState: m,
        headManager: t,
        children: e,
      });
    };
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  18556,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
    let n = e.r(55682)._(e.r(71645)),
      o = e.r(87690),
      i = n.default.createContext(o.imageConfigDefault);
  },
  65856,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = e.r(55682)._(e.r(71645)).default.createContext(null);
  },
  70965,
  (e, t, r) => {
    "use strict";
    function n(e, t) {
      let r = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce(
            (e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e),
            0
          )
        : r;
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
  },
  1948,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
    let n = e.r(70965);
    function o({ config: e, src: t, width: r, quality: o }) {
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 }
        );
      let i = (0, n.findClosestQuality)(o, e);
      return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${i}${
        (t.startsWith("/_next/static/media/"), "")
      }`;
    }
    o.__next_img_default = !0;
    let i = o;
  },
  18581,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
    let n = e.r(71645);
    function o(e, t) {
      let r = (0, n.useRef)(null),
        o = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = o.current;
            t && ((o.current = null), t());
          } else e && (r.current = i(e, n)), t && (o.current = i(t, n));
        },
        [e, t]
      );
    }
    function i(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  5500,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function () {
          return v;
        },
      });
    let n = e.r(55682),
      o = e.r(90809),
      i = e.r(43476),
      l = o._(e.r(71645)),
      a = n._(e.r(74080)),
      s = n._(e.r(25633)),
      d = e.r(8927),
      u = e.r(87690),
      c = e.r(18556);
    e.r(33525);
    let f = e.r(65856),
      p = n._(e.r(1948)),
      m = e.r(18581),
      g = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !0,
      };
    function h(e, t, r, n, o, i, l) {
      let a = e?.src;
      e &&
        e["data-loaded-src"] !== a &&
        ((e["data-loaded-src"] = a),
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && o(!0), r?.current)) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let n = !1,
                  o = !1;
                r.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => n,
                  isPropagationStopped: () => o,
                  persist: () => {},
                  preventDefault: () => {
                    (n = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (o = !0), t.stopPropagation();
                  },
                });
              }
              n?.current && n.current(e);
            }
          }));
    }
    function x(e) {
      return l.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = (0, l.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: r,
          height: n,
          width: o,
          decoding: a,
          className: s,
          style: d,
          fetchPriority: u,
          placeholder: c,
          loading: f,
          unoptimized: p,
          fill: g,
          onLoadRef: b,
          onLoadingCompleteRef: y,
          setBlurComplete: v,
          setShowAltText: w,
          sizesInput: _,
          onLoad: j,
          onError: E,
          ...P
        },
        O
      ) => {
        let C = (0, l.useCallback)(
            (e) => {
              e && (E && (e.src = e.src), e.complete && h(e, c, b, y, v, p, _));
            },
            [e, c, b, y, v, E, p, _]
          ),
          S = (0, m.useMergedRef)(O, C);
        return (0, i.jsx)("img", {
          ...P,
          ...x(u),
          loading: f,
          width: o,
          height: n,
          decoding: a,
          "data-nimg": g ? "fill" : "1",
          className: s,
          style: d,
          sizes: r,
          srcSet: t,
          src: e,
          ref: S,
          onLoad: (e) => {
            h(e.currentTarget, c, b, y, v, p, _);
          },
          onError: (e) => {
            w(!0), "empty" !== c && v(!0), E && E(e);
          },
        });
      }
    );
    function y({ isAppRouter: e, imgAttributes: t }) {
      let r = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...x(t.fetchPriority),
      };
      return e && a.default.preload
        ? (a.default.preload(t.src, r), null)
        : (0, i.jsx)(s.default, {
            children: (0, i.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
              "__nimg-" + t.src + t.srcSet + t.sizes
            ),
          });
    }
    let v = (0, l.forwardRef)((e, t) => {
      let r = (0, l.useContext)(f.RouterContext),
        n = (0, l.useContext)(c.ImageConfigContext),
        o = (0, l.useMemo)(() => {
          let e = g || n || u.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            r = e.deviceSizes.sort((e, t) => e - t),
            o = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: r,
            qualities: o,
            localPatterns:
              "undefined" == typeof window ? n?.localPatterns : e.localPatterns,
          };
        }, [n]),
        { onLoad: a, onLoadingComplete: s } = e,
        m = (0, l.useRef)(a);
      (0, l.useEffect)(() => {
        m.current = a;
      }, [a]);
      let h = (0, l.useRef)(s);
      (0, l.useEffect)(() => {
        h.current = s;
      }, [s]);
      let [x, v] = (0, l.useState)(!1),
        [w, _] = (0, l.useState)(!1),
        { props: j, meta: E } = (0, d.getImgProps)(e, {
          defaultLoader: p.default,
          imgConf: o,
          blurComplete: x,
          showAltText: w,
        });
      return (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(b, {
            ...j,
            unoptimized: E.unoptimized,
            placeholder: E.placeholder,
            fill: E.fill,
            onLoadRef: m,
            onLoadingCompleteRef: h,
            setBlurComplete: v,
            setShowAltText: _,
            sizesInput: e.sizes,
            ref: t,
          }),
          E.preload
            ? (0, i.jsx)(y, { isAppRouter: !r, imgAttributes: j })
            : null,
        ],
      });
    });
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  94909,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return u;
      },
      getImageProps: function () {
        return d;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = e.r(55682),
      l = e.r(8927),
      a = e.r(5500),
      s = i._(e.r(1948));
    function d(e) {
      let { props: t } = (0, l.getImgProps)(e, {
        defaultLoader: s.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        },
      });
      for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
      return { props: t };
    }
    let u = a.Image;
  },
  57688,
  (e, t, r) => {
    t.exports = e.r(94909);
  },
  98924,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(57688),
      n = e.i(71645);
    let o = (...e) =>
      e
        .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
        .join(" ")
        .trim();
    var i = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    let l = (0, n.forwardRef)(
        (
          {
            color: e = "currentColor",
            size: t = 24,
            strokeWidth: r = 2,
            absoluteStrokeWidth: l,
            className: a = "",
            children: s,
            iconNode: d,
            ...u
          },
          c
        ) =>
          (0, n.createElement)(
            "svg",
            {
              ref: c,
              ...i,
              width: t,
              height: t,
              stroke: e,
              strokeWidth: l ? (24 * Number(r)) / Number(t) : r,
              className: o("lucide", a),
              ...u,
            },
            [
              ...d.map(([e, t]) => (0, n.createElement)(e, t)),
              ...(Array.isArray(s) ? s : [s]),
            ]
          )
      ),
      a = (e, t) => {
        let r = (0, n.forwardRef)(({ className: r, ...i }, a) =>
          (0, n.createElement)(l, {
            ref: a,
            iconNode: t,
            className: o(
              `lucide-${e
                .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                .toLowerCase()}`,
              r
            ),
            ...i,
          })
        );
        return (r.displayName = `${e}`), r;
      },
      s = a("Copy", [
        [
          "rect",
          {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea",
          },
        ],
        [
          "path",
          {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf",
          },
        ],
      ]),
      d = a("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
    function u() {
      let [e, o] = (0, n.useState)(!1),
        i = "0xComingSoon";
      return (0, t.jsxs)("section", {
        className:
          "min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden bg-background",
        children: [
          (0, t.jsxs)("div", {
            className:
              "absolute inset-0 pointer-events-none select-none overflow-hidden",
            children: [
              (0, t.jsx)("span", {
                className:
                  "absolute top-[5%] left-[5%] text-6xl md:text-8xl font-bold text-foreground/5 rotate-[-15deg]",
                children: "ETERUM",
              }),
              (0, t.jsx)("span", {
                className:
                  "absolute top-[15%] right-[10%] text-5xl md:text-7xl font-bold text-foreground/5 rotate-[20deg]",
                children: "CULTURE",
              }),
              (0, t.jsx)("span", {
                className:
                  "absolute top-[40%] left-[2%] text-4xl md:text-6xl font-bold text-foreground/5 rotate-[-8deg]",
                children: "FUDDED",
              }),
              (0, t.jsx)("span", {
                className:
                  "absolute bottom-[30%] right-[5%] text-6xl md:text-8xl font-bold text-foreground/5 rotate-[12deg]",
                children: "COMMUNITY",
              }),
              (0, t.jsx)("span", {
                className:
                  "absolute bottom-[10%] left-[15%] text-5xl md:text-7xl font-bold text-foreground/5 rotate-[-20deg]",
                children: "ETERUM",
              }),
              (0, t.jsx)("span", {
                className:
                  "absolute top-[60%] right-[20%] text-4xl md:text-6xl font-bold text-foreground/5 rotate-[5deg]",
                children: "PEPE",
              }),
            ],
          }),
          (0, t.jsxs)("div", {
            className:
              "relative z-10 flex flex-col items-center text-center max-w-4xl",
            children: [
              (0, t.jsx)("div", {
                className: "relative mb-4",
                children: (0, t.jsx)(r.default, {
                  src: "/eterum-meadow.png",
                  alt: "$ETERUM",
                  width: 800,
                  height: 450,
                  className: "w-full max-w-xl border-4 border-foreground",
                  priority: !0,
                }),
              }),
              (0, t.jsx)("h1", {
                className:
                  "text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-2 tracking-tight",
                children: "$ETERUM",
              }),
              (0, t.jsx)("p", {
                className: "text-2xl md:text-4xl font-bold text-primary mb-2",
                children: "MEMECOINS SHAPED ETHEREUM",
              }),
              (0, t.jsx)("p", {
                className:
                  "text-base md:text-xl text-muted-foreground mb-8 max-w-xl",
                children:
                  "frowned upon by the establishment. fudded to the ground. but the community is here to show them all.",
              }),
              (0, t.jsxs)("div", {
                className: "w-full max-w-lg mb-8",
                children: [
                  (0, t.jsx)("p", {
                    className:
                      "text-sm font-bold mb-2 text-muted-foreground uppercase tracking-wide",
                    children: "CA:",
                  }),
                  (0, t.jsxs)("button", {
                    onClick: () => {
                      navigator.clipboard.writeText(i),
                        o(!0),
                        setTimeout(() => o(!1), 2e3);
                    },
                    className:
                      "w-full flex items-center justify-between gap-2 px-4 py-3 bg-muted border-4 border-foreground text-foreground font-bold text-sm md:text-base hover:bg-foreground hover:text-background transition-colors",
                    children: [
                      (0, t.jsx)("span", {
                        className: "truncate",
                        children: i,
                      }),
                      e
                        ? (0, t.jsx)(d, {
                            className: "w-5 h-5 flex-shrink-0 text-green-600",
                          })
                        : (0, t.jsx)(s, { className: "w-5 h-5 flex-shrink-0" }),
                    ],
                  }),
                  e &&
                    (0, t.jsx)("p", {
                      className: "text-sm text-green-600 mt-2 font-bold",
                      children: "copied.",
                    }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "flex flex-col sm:flex-row gap-4 w-full max-w-md",
                children: [
                  (0, t.jsx)("a", {
                    href: "https://dexscreener.com/ethereum/0xComingSoon",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "flex-1 px-8 py-4 bg-primary text-primary-foreground font-bold text-xl border-4 border-foreground hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px] hover:shadow-foreground transition-all text-center uppercase",
                    children: "BUY",
                  }),
                  (0, t.jsx)("a", {
                    href: "https://x.com/eterum_coin",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "flex-1 px-8 py-4 bg-background text-foreground font-bold text-xl border-4 border-foreground hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px] hover:shadow-foreground transition-all text-center uppercase",
                    children: "TWITTER",
                  }),
                  (0, t.jsx)("a", {
                    href: "https://x.com/eterum_coin",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "flex-1 px-8 py-4 bg-background text-foreground font-bold text-xl border-4 border-foreground hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px] hover:shadow-foreground transition-all text-center uppercase",
                    children: "Telegram",
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className:
                  "mt-8 px-6 py-2 border-4 border-foreground bg-accent text-accent-foreground font-bold text-lg rotate-[-2deg]",
                children: ["THE PEOPLE", "'", "S CHAIN"],
              }),
            ],
          }),
        ],
      });
    }
    e.s(["HeroSection", () => u], 98924);
  },
]);
