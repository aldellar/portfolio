/*! For license information please see app-597cc687d48942f730a9.js.LICENSE.txt */
(self.webpackChunkv4 = self.webpackChunkv4 || []).push([
  [524],
  {
    52: function (e) {
      'use strict';
      const t = (e, t) => {
        if ('string' != typeof e && !Array.isArray(e))
          throw new TypeError('Expected the input to be `string | string[]`');
        t = Object.assign({ pascalCase: !1 }, t);
        if (
          ((e = Array.isArray(e)
            ? e
                .map(e => e.trim())
                .filter(e => e.length)
                .join('-')
            : e.trim()),
          0 === e.length)
        )
          return '';
        if (1 === e.length) return t.pascalCase ? e.toUpperCase() : e.toLowerCase();
        return (
          e !== e.toLowerCase() &&
            (e = (e => {
              let t = !1,
                n = !1,
                r = !1;
              for (let o = 0; o < e.length; o++) {
                const a = e[o];
                t && /[a-zA-Z]/.test(a) && a.toUpperCase() === a
                  ? ((e = e.slice(0, o) + '-' + e.slice(o)), (t = !1), (r = n), (n = !0), o++)
                  : n && r && /[a-zA-Z]/.test(a) && a.toLowerCase() === a
                  ? ((e = e.slice(0, o - 1) + '-' + e.slice(o - 1)), (r = n), (n = !1), (t = !0))
                  : ((t = a.toLowerCase() === a && a.toUpperCase() !== a),
                    (r = n),
                    (n = a.toUpperCase() === a && a.toLowerCase() !== a));
              }
              return e;
            })(e)),
          (e = e
            .replace(/^[_.\- ]+/, '')
            .toLowerCase()
            .replace(/[_.\- ]+(\w|$)/g, (e, t) => t.toUpperCase())
            .replace(/\d+(\w|$)/g, e => e.toUpperCase())),
          (n = e),
          t.pascalCase ? n.charAt(0).toUpperCase() + n.slice(1) : n
        );
        var n;
      };
      (e.exports = t), (e.exports.default = t);
    },
    311: function (e) {
      'use strict';
      e.exports = function (e, t, n, r, o, a, i, s) {
        if (!e) {
          var c;
          if (void 0 === t)
            c = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
            );
          else {
            var u = [n, r, o, a, i, s],
              l = 0;
            (c = new Error(
              t.replace(/%s/g, function () {
                return u[l++];
              }),
            )).name = 'Invariant Violation';
          }
          throw ((c.framesToPop = 1), c);
        }
      };
    },
    694: function (e, t, n) {
      'use strict';
      var r = n(5540),
        o = n(6540),
        a = n(6883),
        i = n(9310);
      let s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          (0, r.A)(t, e),
          (t.prototype.render = function () {
            const e = {
                ...this.props,
                params: {
                  ...(0, i.UA)(this.props.location.pathname),
                  ...this.props.pageResources.json.pageContext.__params,
                },
              },
              t = (0, o.createElement)(this.props.pageResources.component, {
                ...e,
                key: this.props.path || this.props.pageResources.page.path,
              });
            return (0, a.N)('wrapPageElement', { element: t, props: e }, t, t => {
              let { result: n } = t;
              return { element: n, props: e };
            }).pop();
          }),
          t
        );
      })(o.Component);
      t.A = s;
    },
    1015: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          Link: function () {
            return o.Ay;
          },
          PageRenderer: function () {
            return s.a;
          },
          StaticQuery: function () {
            return p;
          },
          StaticQueryContext: function () {
            return u;
          },
          graphql: function () {
            return d;
          },
          navigate: function () {
            return o.oo;
          },
          parsePath: function () {
            return o.Rr;
          },
          prefetchPathname: function () {
            return c;
          },
          useScrollRestoration: function () {
            return a.RV;
          },
          useStaticQuery: function () {
            return f;
          },
          withAssetPrefix: function () {
            return o.Zf;
          },
          withPrefix: function () {
            return o.Fe;
          },
        });
      var r = n(6540),
        o = n(7424),
        a = n(7035),
        i = n(1098),
        s = n.n(i);
      const c = n(8016).Ay.enqueue,
        u = r.createContext({});
      function l(e) {
        let { staticQueryData: t, data: n, query: o, render: a } = e;
        const i = n ? n.data : t[o] && t[o].data;
        return r.createElement(
          r.Fragment,
          null,
          i && a(i),
          !i && r.createElement('div', null, 'Loading (StaticQuery)'),
        );
      }
      const p = e => {
          const { data: t, query: n, render: o, children: a } = e;
          return r.createElement(u.Consumer, null, e =>
            r.createElement(l, { data: t, query: n, render: o || a, staticQueryData: e }),
          );
        },
        f = e => {
          var t;
          r.useContext;
          const n = r.useContext(u);
          if (isNaN(Number(e)))
            throw new Error(
              `useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql\`${e}\`);\n`,
            );
          if (null !== (t = n[e]) && void 0 !== t && t.data) return n[e].data;
          throw new Error(
            'The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues',
          );
        };
      function d() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.',
        );
      }
    },
    1098: function (e, t, n) {
      var r;
      e.exports = ((r = n(5706)) && r.default) || r;
    },
    1252: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          ServerStyleSheet: function () {
            return $e;
          },
          StyleSheetConsumer: function () {
            return ae;
          },
          StyleSheetContext: function () {
            return oe;
          },
          StyleSheetManager: function () {
            return pe;
          },
          ThemeConsumer: function () {
            return Le;
          },
          ThemeContext: function () {
            return Ie;
          },
          ThemeProvider: function () {
            return Te;
          },
          __PRIVATE__: function () {
            return He;
          },
          createGlobalStyle: function () {
            return Ue;
          },
          css: function () {
            return Se;
          },
          default: function () {
            return Be;
          },
          isStyledComponent: function () {
            return S;
          },
          keyframes: function () {
            return Fe;
          },
          useTheme: function () {
            return qe;
          },
          version: function () {
            return C;
          },
          withTheme: function () {
            return ze;
          },
        });
      var r = n(3066),
        o = n(6540),
        a = n(2078),
        i = n.n(a);
      var s = function (e) {
          function t(e, r, c, u, f) {
            for (
              var d,
                h,
                m,
                g,
                w,
                k = 0,
                C = 0,
                P = 0,
                E = 0,
                x = 0,
                I = 0,
                T = (m = d = 0),
                N = 0,
                M = 0,
                W = 0,
                U = 0,
                F = c.length,
                $ = F - 1,
                z = '',
                q = '',
                H = '',
                B = '';
              N < F;

            ) {
              if (
                ((h = c.charCodeAt(N)),
                N === $ &&
                  0 !== C + E + P + k &&
                  (0 !== C && (h = 47 === C ? 10 : 47), (E = P = k = 0), F++, $++),
                0 === C + E + P + k)
              ) {
                if (N === $ && (0 < M && (z = z.replace(p, '')), 0 < z.trim().length)) {
                  switch (h) {
                    case 32:
                    case 9:
                    case 59:
                    case 13:
                    case 10:
                      break;
                    default:
                      z += c.charAt(N);
                  }
                  h = 59;
                }
                switch (h) {
                  case 123:
                    for (d = (z = z.trim()).charCodeAt(0), m = 1, U = ++N; N < F; ) {
                      switch ((h = c.charCodeAt(N))) {
                        case 123:
                          m++;
                          break;
                        case 125:
                          m--;
                          break;
                        case 47:
                          switch ((h = c.charCodeAt(N + 1))) {
                            case 42:
                            case 47:
                              e: {
                                for (T = N + 1; T < $; ++T)
                                  switch (c.charCodeAt(T)) {
                                    case 47:
                                      if (42 === h && 42 === c.charCodeAt(T - 1) && N + 2 !== T) {
                                        N = T + 1;
                                        break e;
                                      }
                                      break;
                                    case 10:
                                      if (47 === h) {
                                        N = T + 1;
                                        break e;
                                      }
                                  }
                                N = T;
                              }
                          }
                          break;
                        case 91:
                          h++;
                        case 40:
                          h++;
                        case 34:
                        case 39:
                          for (; N++ < $ && c.charCodeAt(N) !== h; );
                      }
                      if (0 === m) break;
                      N++;
                    }
                    if (
                      ((m = c.substring(U, N)),
                      0 === d && (d = (z = z.replace(l, '').trim()).charCodeAt(0)),
                      64 === d)
                    ) {
                      switch ((0 < M && (z = z.replace(p, '')), (h = z.charCodeAt(1)))) {
                        case 100:
                        case 109:
                        case 115:
                        case 45:
                          M = r;
                          break;
                        default:
                          M = j;
                      }
                      if (
                        ((U = (m = t(r, M, m, h, f + 1)).length),
                        0 < L &&
                          ((w = s(3, m, (M = n(j, z, W)), r, A, R, U, h, f, u)),
                          (z = M.join('')),
                          void 0 !== w && 0 === (U = (m = w.trim()).length) && ((h = 0), (m = ''))),
                        0 < U)
                      )
                        switch (h) {
                          case 115:
                            z = z.replace(S, i);
                          case 100:
                          case 109:
                          case 45:
                            m = z + '{' + m + '}';
                            break;
                          case 107:
                            (m = (z = z.replace(v, '$1 $2')) + '{' + m + '}'),
                              (m =
                                1 === O || (2 === O && a('@' + m, 3))
                                  ? '@-webkit-' + m + '@' + m
                                  : '@' + m);
                            break;
                          default:
                            (m = z + m), 112 === u && ((q += m), (m = ''));
                        }
                      else m = '';
                    } else m = t(r, n(r, z, W), m, u, f + 1);
                    (H += m), (m = W = M = T = d = 0), (z = ''), (h = c.charCodeAt(++N));
                    break;
                  case 125:
                  case 59:
                    if (1 < (U = (z = (0 < M ? z.replace(p, '') : z).trim()).length))
                      switch (
                        (0 === T &&
                          ((d = z.charCodeAt(0)), 45 === d || (96 < d && 123 > d)) &&
                          (U = (z = z.replace(' ', ':')).length),
                        0 < L &&
                          void 0 !== (w = s(1, z, r, e, A, R, q.length, u, f, u)) &&
                          0 === (U = (z = w.trim()).length) &&
                          (z = '\0\0'),
                        (d = z.charCodeAt(0)),
                        (h = z.charCodeAt(1)),
                        d)
                      ) {
                        case 0:
                          break;
                        case 64:
                          if (105 === h || 99 === h) {
                            B += z + c.charAt(N);
                            break;
                          }
                        default:
                          58 !== z.charCodeAt(U - 1) && (q += o(z, d, h, z.charCodeAt(2)));
                      }
                    (W = M = T = d = 0), (z = ''), (h = c.charCodeAt(++N));
                }
              }
              switch (h) {
                case 13:
                case 10:
                  47 === C
                    ? (C = 0)
                    : 0 === 1 + d && 107 !== u && 0 < z.length && ((M = 1), (z += '\0')),
                    0 < L * D && s(0, z, r, e, A, R, q.length, u, f, u),
                    (R = 1),
                    A++;
                  break;
                case 59:
                case 125:
                  if (0 === C + E + P + k) {
                    R++;
                    break;
                  }
                default:
                  switch ((R++, (g = c.charAt(N)), h)) {
                    case 9:
                    case 32:
                      if (0 === E + k + C)
                        switch (x) {
                          case 44:
                          case 58:
                          case 9:
                          case 32:
                            g = '';
                            break;
                          default:
                            32 !== h && (g = ' ');
                        }
                      break;
                    case 0:
                      g = '\\0';
                      break;
                    case 12:
                      g = '\\f';
                      break;
                    case 11:
                      g = '\\v';
                      break;
                    case 38:
                      0 === E + C + k && ((M = W = 1), (g = '\f' + g));
                      break;
                    case 108:
                      if (0 === E + C + k + _ && 0 < T)
                        switch (N - T) {
                          case 2:
                            112 === x && 58 === c.charCodeAt(N - 3) && (_ = x);
                          case 8:
                            111 === I && (_ = I);
                        }
                      break;
                    case 58:
                      0 === E + C + k && (T = N);
                      break;
                    case 44:
                      0 === C + P + E + k && ((M = 1), (g += '\r'));
                      break;
                    case 34:
                    case 39:
                      0 === C && (E = E === h ? 0 : 0 === E ? h : E);
                      break;
                    case 91:
                      0 === E + C + P && k++;
                      break;
                    case 93:
                      0 === E + C + P && k--;
                      break;
                    case 41:
                      0 === E + C + k && P--;
                      break;
                    case 40:
                      if (0 === E + C + k) {
                        if (0 === d)
                          if (2 * x + 3 * I == 533);
                          else d = 1;
                        P++;
                      }
                      break;
                    case 64:
                      0 === C + P + E + k + T + m && (m = 1);
                      break;
                    case 42:
                    case 47:
                      if (!(0 < E + k + P))
                        switch (C) {
                          case 0:
                            switch (2 * h + 3 * c.charCodeAt(N + 1)) {
                              case 235:
                                C = 47;
                                break;
                              case 220:
                                (U = N), (C = 42);
                            }
                            break;
                          case 42:
                            47 === h &&
                              42 === x &&
                              U + 2 !== N &&
                              (33 === c.charCodeAt(U + 2) && (q += c.substring(U, N + 1)),
                              (g = ''),
                              (C = 0));
                        }
                  }
                  0 === C && (z += g);
              }
              (I = x), (x = h), N++;
            }
            if (0 < (U = q.length)) {
              if (
                ((M = r),
                0 < L && void 0 !== (w = s(2, q, M, e, A, R, U, u, f, u)) && 0 === (q = w).length)
              )
                return B + q + H;
              if (((q = M.join(',') + '{' + q + '}'), 0 !== O * _)) {
                switch ((2 !== O || a(q, 2) || (_ = 0), _)) {
                  case 111:
                    q = q.replace(b, ':-moz-$1') + q;
                    break;
                  case 112:
                    q =
                      q.replace(y, '::-webkit-input-$1') +
                      q.replace(y, '::-moz-$1') +
                      q.replace(y, ':-ms-input-$1') +
                      q;
                }
                _ = 0;
              }
            }
            return B + q + H;
          }
          function n(e, t, n) {
            var o = t.trim().split(m);
            t = o;
            var a = o.length,
              i = e.length;
            switch (i) {
              case 0:
              case 1:
                var s = 0;
                for (e = 0 === i ? '' : e[0] + ' '; s < a; ++s) t[s] = r(e, t[s], n).trim();
                break;
              default:
                var c = (s = 0);
                for (t = []; s < a; ++s)
                  for (var u = 0; u < i; ++u) t[c++] = r(e[u] + ' ', o[s], n).trim();
            }
            return t;
          }
          function r(e, t, n) {
            var r = t.charCodeAt(0);
            switch ((33 > r && (r = (t = t.trim()).charCodeAt(0)), r)) {
              case 38:
                return t.replace(g, '$1' + e.trim());
              case 58:
                return e.trim() + t.replace(g, '$1' + e.trim());
              default:
                if (0 < 1 * n && 0 < t.indexOf('\f'))
                  return t.replace(g, (58 === e.charCodeAt(0) ? '' : '$1') + e.trim());
            }
            return e + t;
          }
          function o(e, t, n, r) {
            var i = e + ';',
              s = 2 * t + 3 * n + 4 * r;
            if (944 === s) {
              e = i.indexOf(':', 9) + 1;
              var c = i.substring(e, i.length - 1).trim();
              return (
                (c = i.substring(0, e).trim() + c + ';'),
                1 === O || (2 === O && a(c, 1)) ? '-webkit-' + c + c : c
              );
            }
            if (0 === O || (2 === O && !a(i, 1))) return i;
            switch (s) {
              case 1015:
                return 97 === i.charCodeAt(10) ? '-webkit-' + i + i : i;
              case 951:
                return 116 === i.charCodeAt(3) ? '-webkit-' + i + i : i;
              case 963:
                return 110 === i.charCodeAt(5) ? '-webkit-' + i + i : i;
              case 1009:
                if (100 !== i.charCodeAt(4)) break;
              case 969:
              case 942:
                return '-webkit-' + i + i;
              case 978:
                return '-webkit-' + i + '-moz-' + i + i;
              case 1019:
              case 983:
                return '-webkit-' + i + '-moz-' + i + '-ms-' + i + i;
              case 883:
                if (45 === i.charCodeAt(8)) return '-webkit-' + i + i;
                if (0 < i.indexOf('image-set(', 11)) return i.replace(x, '$1-webkit-$2') + i;
                break;
              case 932:
                if (45 === i.charCodeAt(4))
                  switch (i.charCodeAt(5)) {
                    case 103:
                      return (
                        '-webkit-box-' +
                        i.replace('-grow', '') +
                        '-webkit-' +
                        i +
                        '-ms-' +
                        i.replace('grow', 'positive') +
                        i
                      );
                    case 115:
                      return '-webkit-' + i + '-ms-' + i.replace('shrink', 'negative') + i;
                    case 98:
                      return '-webkit-' + i + '-ms-' + i.replace('basis', 'preferred-size') + i;
                  }
                return '-webkit-' + i + '-ms-' + i + i;
              case 964:
                return '-webkit-' + i + '-ms-flex-' + i + i;
              case 1023:
                if (99 !== i.charCodeAt(8)) break;
                return (
                  '-webkit-box-pack' +
                  (c = i
                    .substring(i.indexOf(':', 15))
                    .replace('flex-', '')
                    .replace('space-between', 'justify')) +
                  '-webkit-' +
                  i +
                  '-ms-flex-pack' +
                  c +
                  i
                );
              case 1005:
                return d.test(i) ? i.replace(f, ':-webkit-') + i.replace(f, ':-moz-') + i : i;
              case 1e3:
                switch (
                  ((t = (c = i.substring(13).trim()).indexOf('-') + 1),
                  c.charCodeAt(0) + c.charCodeAt(t))
                ) {
                  case 226:
                    c = i.replace(w, 'tb');
                    break;
                  case 232:
                    c = i.replace(w, 'tb-rl');
                    break;
                  case 220:
                    c = i.replace(w, 'lr');
                    break;
                  default:
                    return i;
                }
                return '-webkit-' + i + '-ms-' + c + i;
              case 1017:
                if (-1 === i.indexOf('sticky', 9)) break;
              case 975:
                switch (
                  ((t = (i = e).length - 10),
                  (s =
                    (c = (33 === i.charCodeAt(t) ? i.substring(0, t) : i)
                      .substring(e.indexOf(':', 7) + 1)
                      .trim()).charCodeAt(0) +
                    (0 | c.charCodeAt(7))))
                ) {
                  case 203:
                    if (111 > c.charCodeAt(8)) break;
                  case 115:
                    i = i.replace(c, '-webkit-' + c) + ';' + i;
                    break;
                  case 207:
                  case 102:
                    i =
                      i.replace(c, '-webkit-' + (102 < s ? 'inline-' : '') + 'box') +
                      ';' +
                      i.replace(c, '-webkit-' + c) +
                      ';' +
                      i.replace(c, '-ms-' + c + 'box') +
                      ';' +
                      i;
                }
                return i + ';';
              case 938:
                if (45 === i.charCodeAt(5))
                  switch (i.charCodeAt(6)) {
                    case 105:
                      return (
                        (c = i.replace('-items', '')),
                        '-webkit-' + i + '-webkit-box-' + c + '-ms-flex-' + c + i
                      );
                    case 115:
                      return '-webkit-' + i + '-ms-flex-item-' + i.replace(C, '') + i;
                    default:
                      return (
                        '-webkit-' +
                        i +
                        '-ms-flex-line-pack' +
                        i.replace('align-content', '').replace(C, '') +
                        i
                      );
                  }
                break;
              case 973:
              case 989:
                if (45 !== i.charCodeAt(3) || 122 === i.charCodeAt(4)) break;
              case 931:
              case 953:
                if (!0 === E.test(e))
                  return 115 === (c = e.substring(e.indexOf(':') + 1)).charCodeAt(0)
                    ? o(e.replace('stretch', 'fill-available'), t, n, r).replace(
                        ':fill-available',
                        ':stretch',
                      )
                    : i.replace(c, '-webkit-' + c) +
                        i.replace(c, '-moz-' + c.replace('fill-', '')) +
                        i;
                break;
              case 962:
                if (
                  ((i = '-webkit-' + i + (102 === i.charCodeAt(5) ? '-ms-' + i : '') + i),
                  211 === n + r && 105 === i.charCodeAt(13) && 0 < i.indexOf('transform', 10))
                )
                  return i.substring(0, i.indexOf(';', 27) + 1).replace(h, '$1-webkit-$2') + i;
            }
            return i;
          }
          function a(e, t) {
            var n = e.indexOf(1 === t ? ':' : '{'),
              r = e.substring(0, 3 !== t ? n : 10);
            return (
              (n = e.substring(n + 1, e.length - 1)), T(2 !== t ? r : r.replace(P, '$1'), n, t)
            );
          }
          function i(e, t) {
            var n = o(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
            return n !== t + ';' ? n.replace(k, ' or ($1)').substring(4) : '(' + t + ')';
          }
          function s(e, t, n, r, o, a, i, s, c, l) {
            for (var p, f = 0, d = t; f < L; ++f)
              switch ((p = I[f].call(u, e, d, n, r, o, a, i, s, c, l))) {
                case void 0:
                case !1:
                case !0:
                case null:
                  break;
                default:
                  d = p;
              }
            if (d !== t) return d;
          }
          function c(e) {
            return (
              void 0 !== (e = e.prefix) &&
                ((T = null), e ? ('function' != typeof e ? (O = 1) : ((O = 2), (T = e))) : (O = 0)),
              c
            );
          }
          function u(e, n) {
            var r = e;
            if ((33 > r.charCodeAt(0) && (r = r.trim()), (r = [r]), 0 < L)) {
              var o = s(-1, n, r, r, A, R, 0, 0, 0, 0);
              void 0 !== o && 'string' == typeof o && (n = o);
            }
            var a = t(j, r, n, 0, 0);
            return (
              0 < L && void 0 !== (o = s(-2, a, r, r, A, R, a.length, 0, 0, 0)) && (a = o),
              (_ = 0),
              (R = A = 1),
              a
            );
          }
          var l = /^\0+/g,
            p = /[\0\r\f]/g,
            f = /: */g,
            d = /zoo|gra/,
            h = /([,: ])(transform)/g,
            m = /,\r+?/g,
            g = /([\t\r\n ])*\f?&/g,
            v = /@(k\w+)\s*(\S*)\s*/,
            y = /::(place)/g,
            b = /:(read-only)/g,
            w = /[svh]\w+-[tblr]{2}/,
            S = /\(\s*(.*)\s*\)/g,
            k = /([\s\S]*?);/g,
            C = /-self|flex-/g,
            P = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
            E = /stretch|:\s*\w+\-(?:conte|avail)/,
            x = /([^-])(image-set\()/,
            R = 1,
            A = 1,
            _ = 0,
            O = 1,
            j = [],
            I = [],
            L = 0,
            T = null,
            D = 0;
          return (
            (u.use = function e(t) {
              switch (t) {
                case void 0:
                case null:
                  L = I.length = 0;
                  break;
                default:
                  if ('function' == typeof t) I[L++] = t;
                  else if ('object' == typeof t) for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
                  else D = 0 | !!t;
              }
              return e;
            }),
            (u.set = c),
            void 0 !== e && c(e),
            u
          );
        },
        c = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        };
      function u(e) {
        var t = Object.create(null);
        return function (n) {
          return void 0 === t[n] && (t[n] = e(n)), t[n];
        };
      }
      var l =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        p = u(function (e) {
          return (
            l.test(e) ||
            (111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91)
          );
        }),
        f = n(4077),
        d = n.n(f);
      function h() {
        return (h =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var m = function (e, t) {
          for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
          return n;
        },
        g = function (e) {
          return (
            null !== e &&
            'object' == typeof e &&
            '[object Object]' === (e.toString ? e.toString() : Object.prototype.toString.call(e)) &&
            !(0, r.QP)(e)
          );
        },
        v = Object.freeze([]),
        y = Object.freeze({});
      function b(e) {
        return 'function' == typeof e;
      }
      function w(e) {
        return e.displayName || e.name || 'Component';
      }
      function S(e) {
        return e && 'string' == typeof e.styledComponentId;
      }
      var k =
          ('undefined' != typeof process &&
            void 0 !== {} &&
            ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
          'data-styled',
        C = '5.3.11',
        P = 'undefined' != typeof window && 'HTMLElement' in window,
        E = Boolean(
          'boolean' == typeof SC_DISABLE_SPEEDY
            ? SC_DISABLE_SPEEDY
            : 'undefined' != typeof process &&
                void 0 !== {} &&
                (void 0 !== {}.REACT_APP_SC_DISABLE_SPEEDY && '' !== {}.REACT_APP_SC_DISABLE_SPEEDY
                  ? 'false' !== {}.REACT_APP_SC_DISABLE_SPEEDY && {}.REACT_APP_SC_DISABLE_SPEEDY
                  : void 0 !== {}.SC_DISABLE_SPEEDY &&
                    '' !== {}.SC_DISABLE_SPEEDY &&
                    'false' !== {}.SC_DISABLE_SPEEDY &&
                    {}.SC_DISABLE_SPEEDY),
        ),
        x = {};
      function R(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r];
        throw new Error(
          'An error occurred. See https://git.io/JUIaE#' +
            e +
            ' for more information.' +
            (n.length > 0 ? ' Args: ' + n.join(', ') : ''),
        );
      }
      var A = (function () {
          function e(e) {
            (this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = e);
          }
          var t = e.prototype;
          return (
            (t.indexOfGroup = function (e) {
              for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
              return t;
            }),
            (t.insertRules = function (e, t) {
              if (e >= this.groupSizes.length) {
                for (var n = this.groupSizes, r = n.length, o = r; e >= o; )
                  (o <<= 1) < 0 && R(16, '' + e);
                (this.groupSizes = new Uint32Array(o)), this.groupSizes.set(n), (this.length = o);
                for (var a = r; a < o; a++) this.groupSizes[a] = 0;
              }
              for (var i = this.indexOfGroup(e + 1), s = 0, c = t.length; s < c; s++)
                this.tag.insertRule(i, t[s]) && (this.groupSizes[e]++, i++);
            }),
            (t.clearGroup = function (e) {
              if (e < this.length) {
                var t = this.groupSizes[e],
                  n = this.indexOfGroup(e),
                  r = n + t;
                this.groupSizes[e] = 0;
                for (var o = n; o < r; o++) this.tag.deleteRule(n);
              }
            }),
            (t.getGroup = function (e) {
              var t = '';
              if (e >= this.length || 0 === this.groupSizes[e]) return t;
              for (
                var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, a = r;
                a < o;
                a++
              )
                t += this.tag.getRule(a) + '/*!sc*/\n';
              return t;
            }),
            e
          );
        })(),
        _ = new Map(),
        O = new Map(),
        j = 1,
        I = function (e) {
          if (_.has(e)) return _.get(e);
          for (; O.has(j); ) j++;
          var t = j++;
          return _.set(e, t), O.set(t, e), t;
        },
        L = function (e) {
          return O.get(e);
        },
        T = function (e, t) {
          t >= j && (j = t + 1), _.set(e, t), O.set(t, e);
        },
        D = 'style[' + k + '][data-styled-version="5.3.11"]',
        N = new RegExp('^' + k + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
        M = function (e, t, n) {
          for (var r, o = n.split(','), a = 0, i = o.length; a < i; a++)
            (r = o[a]) && e.registerName(t, r);
        },
        W = function (e, t) {
          for (
            var n = (t.textContent || '').split('/*!sc*/\n'), r = [], o = 0, a = n.length;
            o < a;
            o++
          ) {
            var i = n[o].trim();
            if (i) {
              var s = i.match(N);
              if (s) {
                var c = 0 | parseInt(s[1], 10),
                  u = s[2];
                0 !== c && (T(u, c), M(e, u, s[3]), e.getTag().insertRules(c, r)), (r.length = 0);
              } else r.push(i);
            }
          }
        },
        U = function () {
          return n.nc;
        },
        F = function (e) {
          var t = document.head,
            n = e || t,
            r = document.createElement('style'),
            o = (function (e) {
              for (var t = e.childNodes, n = t.length; n >= 0; n--) {
                var r = t[n];
                if (r && 1 === r.nodeType && r.hasAttribute(k)) return r;
              }
            })(n),
            a = void 0 !== o ? o.nextSibling : null;
          r.setAttribute(k, 'active'), r.setAttribute('data-styled-version', '5.3.11');
          var i = U();
          return i && r.setAttribute('nonce', i), n.insertBefore(r, a), r;
        },
        $ = (function () {
          function e(e) {
            var t = (this.element = F(e));
            t.appendChild(document.createTextNode('')),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet;
                for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
                  var o = t[n];
                  if (o.ownerNode === e) return o;
                }
                R(17);
              })(t)),
              (this.length = 0);
          }
          var t = e.prototype;
          return (
            (t.insertRule = function (e, t) {
              try {
                return this.sheet.insertRule(t, e), this.length++, !0;
              } catch (e) {
                return !1;
              }
            }),
            (t.deleteRule = function (e) {
              this.sheet.deleteRule(e), this.length--;
            }),
            (t.getRule = function (e) {
              var t = this.sheet.cssRules[e];
              return void 0 !== t && 'string' == typeof t.cssText ? t.cssText : '';
            }),
            e
          );
        })(),
        z = (function () {
          function e(e) {
            var t = (this.element = F(e));
            (this.nodes = t.childNodes), (this.length = 0);
          }
          var t = e.prototype;
          return (
            (t.insertRule = function (e, t) {
              if (e <= this.length && e >= 0) {
                var n = document.createTextNode(t),
                  r = this.nodes[e];
                return this.element.insertBefore(n, r || null), this.length++, !0;
              }
              return !1;
            }),
            (t.deleteRule = function (e) {
              this.element.removeChild(this.nodes[e]), this.length--;
            }),
            (t.getRule = function (e) {
              return e < this.length ? this.nodes[e].textContent : '';
            }),
            e
          );
        })(),
        q = (function () {
          function e(e) {
            (this.rules = []), (this.length = 0);
          }
          var t = e.prototype;
          return (
            (t.insertRule = function (e, t) {
              return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
            }),
            (t.deleteRule = function (e) {
              this.rules.splice(e, 1), this.length--;
            }),
            (t.getRule = function (e) {
              return e < this.length ? this.rules[e] : '';
            }),
            e
          );
        })(),
        H = P,
        B = { isServer: !P, useCSSOMInjection: !E },
        G = (function () {
          function e(e, t, n) {
            void 0 === e && (e = y),
              void 0 === t && (t = {}),
              (this.options = h({}, B, {}, e)),
              (this.gs = t),
              (this.names = new Map(n)),
              (this.server = !!e.isServer),
              !this.server &&
                P &&
                H &&
                ((H = !1),
                (function (e) {
                  for (var t = document.querySelectorAll(D), n = 0, r = t.length; n < r; n++) {
                    var o = t[n];
                    o &&
                      'active' !== o.getAttribute(k) &&
                      (W(e, o), o.parentNode && o.parentNode.removeChild(o));
                  }
                })(this));
          }
          e.registerId = function (e) {
            return I(e);
          };
          var t = e.prototype;
          return (
            (t.reconstructWithOptions = function (t, n) {
              return (
                void 0 === n && (n = !0),
                new e(h({}, this.options, {}, t), this.gs, (n && this.names) || void 0)
              );
            }),
            (t.allocateGSInstance = function (e) {
              return (this.gs[e] = (this.gs[e] || 0) + 1);
            }),
            (t.getTag = function () {
              return (
                this.tag ||
                (this.tag =
                  ((n = (t = this.options).isServer),
                  (r = t.useCSSOMInjection),
                  (o = t.target),
                  (e = n ? new q(o) : r ? new $(o) : new z(o)),
                  new A(e)))
              );
              var e, t, n, r, o;
            }),
            (t.hasNameForId = function (e, t) {
              return this.names.has(e) && this.names.get(e).has(t);
            }),
            (t.registerName = function (e, t) {
              if ((I(e), this.names.has(e))) this.names.get(e).add(t);
              else {
                var n = new Set();
                n.add(t), this.names.set(e, n);
              }
            }),
            (t.insertRules = function (e, t, n) {
              this.registerName(e, t), this.getTag().insertRules(I(e), n);
            }),
            (t.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear();
            }),
            (t.clearRules = function (e) {
              this.getTag().clearGroup(I(e)), this.clearNames(e);
            }),
            (t.clearTag = function () {
              this.tag = void 0;
            }),
            (t.toString = function () {
              return (function (e) {
                for (var t = e.getTag(), n = t.length, r = '', o = 0; o < n; o++) {
                  var a = L(o);
                  if (void 0 !== a) {
                    var i = e.names.get(a),
                      s = t.getGroup(o);
                    if (i && s && i.size) {
                      var c = k + '.g' + o + '[id="' + a + '"]',
                        u = '';
                      void 0 !== i &&
                        i.forEach(function (e) {
                          e.length > 0 && (u += e + ',');
                        }),
                        (r += '' + s + c + '{content:"' + u + '"}/*!sc*/\n');
                    }
                  }
                }
                return r;
              })(this);
            }),
            e
          );
        })(),
        Y = /(a)(d)/gi,
        V = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
      function Q(e) {
        var t,
          n = '';
        for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = V(t % 52) + n;
        return (V(t % 52) + n).replace(Y, '$1-$2');
      }
      var X = function (e, t) {
          for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
          return e;
        },
        J = function (e) {
          return X(5381, e);
        };
      function K(e) {
        for (var t = 0; t < e.length; t += 1) {
          var n = e[t];
          if (b(n) && !S(n)) return !1;
        }
        return !0;
      }
      var Z = J('5.3.11'),
        ee = (function () {
          function e(e, t, n) {
            (this.rules = e),
              (this.staticRulesId = ''),
              (this.isStatic = (void 0 === n || n.isStatic) && K(e)),
              (this.componentId = t),
              (this.baseHash = X(Z, t)),
              (this.baseStyle = n),
              G.registerId(t);
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, t, n) {
              var r = this.componentId,
                o = [];
              if (
                (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)),
                this.isStatic && !n.hash)
              )
                if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId))
                  o.push(this.staticRulesId);
                else {
                  var a = be(this.rules, e, t, n).join(''),
                    i = Q(X(this.baseHash, a) >>> 0);
                  if (!t.hasNameForId(r, i)) {
                    var s = n(a, '.' + i, void 0, r);
                    t.insertRules(r, i, s);
                  }
                  o.push(i), (this.staticRulesId = i);
                }
              else {
                for (
                  var c = this.rules.length, u = X(this.baseHash, n.hash), l = '', p = 0;
                  p < c;
                  p++
                ) {
                  var f = this.rules[p];
                  if ('string' == typeof f) l += f;
                  else if (f) {
                    var d = be(f, e, t, n),
                      h = Array.isArray(d) ? d.join('') : d;
                    (u = X(u, h + p)), (l += h);
                  }
                }
                if (l) {
                  var m = Q(u >>> 0);
                  if (!t.hasNameForId(r, m)) {
                    var g = n(l, '.' + m, void 0, r);
                    t.insertRules(r, m, g);
                  }
                  o.push(m);
                }
              }
              return o.join(' ');
            }),
            e
          );
        })(),
        te = /^\s*\/\/.*$/gm,
        ne = [':', '[', '.', '#'];
      function re(e) {
        var t,
          n,
          r,
          o,
          a = void 0 === e ? y : e,
          i = a.options,
          c = void 0 === i ? y : i,
          u = a.plugins,
          l = void 0 === u ? v : u,
          p = new s(c),
          f = [],
          d = (function (e) {
            function t(t) {
              if (t)
                try {
                  e(t + '}');
                } catch (e) {}
            }
            return function (n, r, o, a, i, s, c, u, l, p) {
              switch (n) {
                case 1:
                  if (0 === l && 64 === r.charCodeAt(0)) return e(r + ';'), '';
                  break;
                case 2:
                  if (0 === u) return r + '/*|*/';
                  break;
                case 3:
                  switch (u) {
                    case 102:
                    case 112:
                      return e(o[0] + r), '';
                    default:
                      return r + (0 === p ? '/*|*/' : '');
                  }
                case -2:
                  r.split('/*|*/}').forEach(t);
              }
            };
          })(function (e) {
            f.push(e);
          }),
          h = function (e, r, a) {
            return (0 === r && -1 !== ne.indexOf(a[n.length])) || a.match(o) ? e : '.' + t;
          };
        function m(e, a, i, s) {
          void 0 === s && (s = '&');
          var c = e.replace(te, ''),
            u = a && i ? i + ' ' + a + ' { ' + c + ' }' : c;
          return (
            (t = s),
            (n = a),
            (r = new RegExp('\\' + n + '\\b', 'g')),
            (o = new RegExp('(\\' + n + '\\b){2,}')),
            p(i || !a ? '' : a, u)
          );
        }
        return (
          p.use(
            [].concat(l, [
              function (e, t, o) {
                2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, h));
              },
              d,
              function (e) {
                if (-2 === e) {
                  var t = f;
                  return (f = []), t;
                }
              },
            ]),
          ),
          (m.hash = l.length
            ? l
                .reduce(function (e, t) {
                  return t.name || R(15), X(e, t.name);
                }, 5381)
                .toString()
            : ''),
          m
        );
      }
      var oe = o.createContext(),
        ae = oe.Consumer,
        ie = o.createContext(),
        se = (ie.Consumer, new G()),
        ce = re();
      function ue() {
        return (0, o.useContext)(oe) || se;
      }
      function le() {
        return (0, o.useContext)(ie) || ce;
      }
      function pe(e) {
        var t = (0, o.useState)(e.stylisPlugins),
          n = t[0],
          r = t[1],
          a = ue(),
          s = (0, o.useMemo)(
            function () {
              var t = a;
              return (
                e.sheet
                  ? (t = e.sheet)
                  : e.target && (t = t.reconstructWithOptions({ target: e.target }, !1)),
                e.disableCSSOMInjection &&
                  (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
                t
              );
            },
            [e.disableCSSOMInjection, e.sheet, e.target],
          ),
          c = (0, o.useMemo)(
            function () {
              return re({ options: { prefix: !e.disableVendorPrefixes }, plugins: n });
            },
            [e.disableVendorPrefixes, n],
          );
        return (
          (0, o.useEffect)(
            function () {
              i()(n, e.stylisPlugins) || r(e.stylisPlugins);
            },
            [e.stylisPlugins],
          ),
          o.createElement(
            oe.Provider,
            { value: s },
            o.createElement(ie.Provider, { value: c }, e.children),
          )
        );
      }
      var fe = (function () {
          function e(e, t) {
            var n = this;
            (this.inject = function (e, t) {
              void 0 === t && (t = ce);
              var r = n.name + t.hash;
              e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, '@keyframes'));
            }),
              (this.toString = function () {
                return R(12, String(n.name));
              }),
              (this.name = e),
              (this.id = 'sc-keyframes-' + e),
              (this.rules = t);
          }
          return (
            (e.prototype.getName = function (e) {
              return void 0 === e && (e = ce), this.name + e.hash;
            }),
            e
          );
        })(),
        de = /([A-Z])/,
        he = /([A-Z])/g,
        me = /^ms-/,
        ge = function (e) {
          return '-' + e.toLowerCase();
        };
      function ve(e) {
        return de.test(e) ? e.replace(he, ge).replace(me, '-ms-') : e;
      }
      var ye = function (e) {
        return null == e || !1 === e || '' === e;
      };
      function be(e, t, n, r) {
        if (Array.isArray(e)) {
          for (var o, a = [], i = 0, s = e.length; i < s; i += 1)
            '' !== (o = be(e[i], t, n, r)) && (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
          return a;
        }
        return ye(e)
          ? ''
          : S(e)
          ? '.' + e.styledComponentId
          : b(e)
          ? 'function' != typeof (u = e) || (u.prototype && u.prototype.isReactComponent) || !t
            ? e
            : be(e(t), t, n, r)
          : e instanceof fe
          ? n
            ? (e.inject(n, r), e.getName(r))
            : e
          : g(e)
          ? (function e(t, n) {
              var r,
                o,
                a = [];
              for (var i in t)
                t.hasOwnProperty(i) &&
                  !ye(t[i]) &&
                  ((Array.isArray(t[i]) && t[i].isCss) || b(t[i])
                    ? a.push(ve(i) + ':', t[i], ';')
                    : g(t[i])
                    ? a.push.apply(a, e(t[i], i))
                    : a.push(
                        ve(i) +
                          ': ' +
                          ((r = i),
                          (null == (o = t[i]) || 'boolean' == typeof o || '' === o
                            ? ''
                            : 'number' != typeof o || 0 === o || r in c || r.startsWith('--')
                            ? String(o).trim()
                            : o + 'px') + ';'),
                      ));
              return n ? [n + ' {'].concat(a, ['}']) : a;
            })(e)
          : e.toString();
        var u;
      }
      var we = function (e) {
        return Array.isArray(e) && (e.isCss = !0), e;
      };
      function Se(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r];
        return b(e) || g(e)
          ? we(be(m(v, [e].concat(n))))
          : 0 === n.length && 1 === e.length && 'string' == typeof e[0]
          ? e
          : we(be(m(e, n)));
      }
      new Set();
      var ke = function (e, t, n) {
          return void 0 === n && (n = y), (e.theme !== n.theme && e.theme) || t || n.theme;
        },
        Ce = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        Pe = /(^-|-$)/g;
      function Ee(e) {
        return e.replace(Ce, '-').replace(Pe, '');
      }
      var xe = function (e) {
        return Q(J(e) >>> 0);
      };
      function Re(e) {
        return 'string' == typeof e && !0;
      }
      var Ae = function (e) {
          return (
            'function' == typeof e || ('object' == typeof e && null !== e && !Array.isArray(e))
          );
        },
        _e = function (e) {
          return '__proto__' !== e && 'constructor' !== e && 'prototype' !== e;
        };
      function Oe(e, t, n) {
        var r = e[n];
        Ae(t) && Ae(r) ? je(r, t) : (e[n] = t);
      }
      function je(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r];
        for (var o = 0, a = n; o < a.length; o++) {
          var i = a[o];
          if (Ae(i)) for (var s in i) _e(s) && Oe(e, i[s], s);
        }
        return e;
      }
      var Ie = o.createContext(),
        Le = Ie.Consumer;
      function Te(e) {
        var t = (0, o.useContext)(Ie),
          n = (0, o.useMemo)(
            function () {
              return (function (e, t) {
                return e
                  ? b(e)
                    ? e(t)
                    : Array.isArray(e) || 'object' != typeof e
                    ? R(8)
                    : t
                    ? h({}, t, {}, e)
                    : e
                  : R(14);
              })(e.theme, t);
            },
            [e.theme, t],
          );
        return e.children ? o.createElement(Ie.Provider, { value: n }, e.children) : null;
      }
      var De = {};
      function Ne(e, t, n) {
        var r = S(e),
          a = !Re(e),
          i = t.attrs,
          s = void 0 === i ? v : i,
          c = t.componentId,
          u =
            void 0 === c
              ? (function (e, t) {
                  var n = 'string' != typeof e ? 'sc' : Ee(e);
                  De[n] = (De[n] || 0) + 1;
                  var r = n + '-' + xe('5.3.11' + n + De[n]);
                  return t ? t + '-' + r : r;
                })(t.displayName, t.parentComponentId)
              : c,
          l = t.displayName,
          f =
            void 0 === l
              ? (function (e) {
                  return Re(e) ? 'styled.' + e : 'Styled(' + w(e) + ')';
                })(e)
              : l,
          m =
            t.displayName && t.componentId
              ? Ee(t.displayName) + '-' + t.componentId
              : t.componentId || u,
          g = r && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s,
          k = t.shouldForwardProp;
        r &&
          e.shouldForwardProp &&
          (k = t.shouldForwardProp
            ? function (n, r, o) {
                return e.shouldForwardProp(n, r, o) && t.shouldForwardProp(n, r, o);
              }
            : e.shouldForwardProp);
        var C,
          P = new ee(n, m, r ? e.componentStyle : void 0),
          E = P.isStatic && 0 === s.length,
          x = function (e, t) {
            return (function (e, t, n, r) {
              var a = e.attrs,
                i = e.componentStyle,
                s = e.defaultProps,
                c = e.foldedComponentIds,
                u = e.shouldForwardProp,
                l = e.styledComponentId,
                f = e.target,
                d = (function (e, t, n) {
                  void 0 === e && (e = y);
                  var r = h({}, t, { theme: e }),
                    o = {};
                  return (
                    n.forEach(function (e) {
                      var t,
                        n,
                        a,
                        i = e;
                      for (t in (b(i) && (i = i(r)), i))
                        r[t] = o[t] =
                          'className' === t
                            ? ((n = o[t]), (a = i[t]), n && a ? n + ' ' + a : n || a)
                            : i[t];
                    }),
                    [r, o]
                  );
                })(ke(t, (0, o.useContext)(Ie), s) || y, t, a),
                m = d[0],
                g = d[1],
                v = (function (e, t, n) {
                  var r = ue(),
                    o = le();
                  return t
                    ? e.generateAndInjectStyles(y, r, o)
                    : e.generateAndInjectStyles(n, r, o);
                })(i, r, m),
                w = n,
                S = g.$as || t.$as || g.as || t.as || f,
                k = Re(S),
                C = g !== t ? h({}, t, {}, g) : t,
                P = {};
              for (var E in C)
                '$' !== E[0] &&
                  'as' !== E &&
                  ('forwardedAs' === E
                    ? (P.as = C[E])
                    : (u ? u(E, p, S) : !k || p(E)) && (P[E] = C[E]));
              return (
                t.style && g.style !== t.style && (P.style = h({}, t.style, {}, g.style)),
                (P.className = Array.prototype
                  .concat(c, l, v !== l ? v : null, t.className, g.className)
                  .filter(Boolean)
                  .join(' ')),
                (P.ref = w),
                (0, o.createElement)(S, P)
              );
            })(C, e, t, E);
          };
        return (
          (x.displayName = f),
          ((C = o.forwardRef(x)).attrs = g),
          (C.componentStyle = P),
          (C.displayName = f),
          (C.shouldForwardProp = k),
          (C.foldedComponentIds = r
            ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
            : v),
          (C.styledComponentId = m),
          (C.target = r ? e.target : e),
          (C.withComponent = function (e) {
            var r = t.componentId,
              o = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  o = {},
                  a = Object.keys(e);
                for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o;
              })(t, ['componentId']),
              a = r && r + '-' + (Re(e) ? e : Ee(w(e)));
            return Ne(e, h({}, o, { attrs: g, componentId: a }), n);
          }),
          Object.defineProperty(C, 'defaultProps', {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (t) {
              this._foldedDefaultProps = r ? je({}, e.defaultProps, t) : t;
            },
          }),
          Object.defineProperty(C, 'toString', {
            value: function () {
              return '.' + C.styledComponentId;
            },
          }),
          a &&
            d()(C, e, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
              withComponent: !0,
            }),
          C
        );
      }
      var Me = function (e) {
        return (function e(t, n, o) {
          if ((void 0 === o && (o = y), !(0, r.Hy)(n))) return R(1, String(n));
          var a = function () {
            return t(n, o, Se.apply(void 0, arguments));
          };
          return (
            (a.withConfig = function (r) {
              return e(t, n, h({}, o, {}, r));
            }),
            (a.attrs = function (r) {
              return e(
                t,
                n,
                h({}, o, { attrs: Array.prototype.concat(o.attrs, r).filter(Boolean) }),
              );
            }),
            a
          );
        })(Ne, e);
      };
      [
        'a',
        'abbr',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'base',
        'bdi',
        'bdo',
        'big',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'cite',
        'code',
        'col',
        'colgroup',
        'data',
        'datalist',
        'dd',
        'del',
        'details',
        'dfn',
        'dialog',
        'div',
        'dl',
        'dt',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'keygen',
        'label',
        'legend',
        'li',
        'link',
        'main',
        'map',
        'mark',
        'marquee',
        'menu',
        'menuitem',
        'meta',
        'meter',
        'nav',
        'noscript',
        'object',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'param',
        'picture',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'script',
        'section',
        'select',
        'small',
        'source',
        'span',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'title',
        'tr',
        'track',
        'u',
        'ul',
        'var',
        'video',
        'wbr',
        'circle',
        'clipPath',
        'defs',
        'ellipse',
        'foreignObject',
        'g',
        'image',
        'line',
        'linearGradient',
        'marker',
        'mask',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'stop',
        'svg',
        'text',
        'textPath',
        'tspan',
      ].forEach(function (e) {
        Me[e] = Me(e);
      });
      var We = (function () {
        function e(e, t) {
          (this.rules = e),
            (this.componentId = t),
            (this.isStatic = K(e)),
            G.registerId(this.componentId + 1);
        }
        var t = e.prototype;
        return (
          (t.createStyles = function (e, t, n, r) {
            var o = r(be(this.rules, t, n, r).join(''), ''),
              a = this.componentId + e;
            n.insertRules(a, a, o);
          }),
          (t.removeStyles = function (e, t) {
            t.clearRules(this.componentId + e);
          }),
          (t.renderStyles = function (e, t, n, r) {
            e > 2 && G.registerId(this.componentId + e),
              this.removeStyles(e, n),
              this.createStyles(e, t, n, r);
          }),
          e
        );
      })();
      function Ue(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r];
        var a = Se.apply(void 0, [e].concat(n)),
          i = 'sc-global-' + xe(JSON.stringify(a)),
          s = new We(a, i);
        function c(e) {
          var t = ue(),
            n = le(),
            r = (0, o.useContext)(Ie),
            a = (0, o.useRef)(t.allocateGSInstance(i)).current;
          return (
            t.server && u(a, e, t, r, n),
            (0, o.useLayoutEffect)(
              function () {
                if (!t.server)
                  return (
                    u(a, e, t, r, n),
                    function () {
                      return s.removeStyles(a, t);
                    }
                  );
              },
              [a, e, t, r, n],
            ),
            null
          );
        }
        function u(e, t, n, r, o) {
          if (s.isStatic) s.renderStyles(e, x, n, o);
          else {
            var a = h({}, t, { theme: ke(t, r, c.defaultProps) });
            s.renderStyles(e, a, n, o);
          }
        }
        return o.memo(c);
      }
      function Fe(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r];
        var o = Se.apply(void 0, [e].concat(n)).join(''),
          a = xe(o);
        return new fe(a, o);
      }
      var $e = (function () {
          function e() {
            var e = this;
            (this._emitSheetCSS = function () {
              var t = e.instance.toString();
              if (!t) return '';
              var n = U();
              return (
                '<style ' +
                [n && 'nonce="' + n + '"', k + '="true"', 'data-styled-version="5.3.11"']
                  .filter(Boolean)
                  .join(' ') +
                '>' +
                t +
                '</style>'
              );
            }),
              (this.getStyleTags = function () {
                return e.sealed ? R(2) : e._emitSheetCSS();
              }),
              (this.getStyleElement = function () {
                var t;
                if (e.sealed) return R(2);
                var n =
                    (((t = {})[k] = ''),
                    (t['data-styled-version'] = '5.3.11'),
                    (t.dangerouslySetInnerHTML = { __html: e.instance.toString() }),
                    t),
                  r = U();
                return r && (n.nonce = r), [o.createElement('style', h({}, n, { key: 'sc-0-0' }))];
              }),
              (this.seal = function () {
                e.sealed = !0;
              }),
              (this.instance = new G({ isServer: !0 })),
              (this.sealed = !1);
          }
          var t = e.prototype;
          return (
            (t.collectStyles = function (e) {
              return this.sealed ? R(2) : o.createElement(pe, { sheet: this.instance }, e);
            }),
            (t.interleaveWithNodeStream = function (e) {
              return R(3);
            }),
            e
          );
        })(),
        ze = function (e) {
          var t = o.forwardRef(function (t, n) {
            var r = (0, o.useContext)(Ie),
              a = e.defaultProps,
              i = ke(t, r, a);
            return o.createElement(e, h({}, t, { theme: i, ref: n }));
          });
          return d()(t, e), (t.displayName = 'WithTheme(' + w(e) + ')'), t;
        },
        qe = function () {
          return (0, o.useContext)(Ie);
        },
        He = { StyleSheet: G, masterSheet: se },
        Be = Me;
    },
    1302: function (e, t, n) {
      'use strict';
      n.d(t, {
        A: function () {
          return r;
        },
      });
      var r = (function (e) {
        return (
          (e = e || Object.create(null)),
          {
            on: function (t, n) {
              (e[t] || (e[t] = [])).push(n);
            },
            off: function (t, n) {
              e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1);
            },
            emit: function (t, n) {
              (e[t] || []).slice().map(function (e) {
                e(n);
              }),
                (e['*'] || []).slice().map(function (e) {
                  e(t, n);
                });
            },
          }
        );
      })();
    },
    2078: function (e) {
      e.exports = function (e, t, n, r) {
        var o = n ? n.call(r, e, t) : void 0;
        if (void 0 !== o) return !!o;
        if (e === t) return !0;
        if ('object' != typeof e || !e || 'object' != typeof t || !t) return !1;
        var a = Object.keys(e),
          i = Object.keys(t);
        if (a.length !== i.length) return !1;
        for (var s = Object.prototype.hasOwnProperty.bind(t), c = 0; c < a.length; c++) {
          var u = a[c];
          if (!s(u)) return !1;
          var l = e[u],
            p = t[u];
          if (!1 === (o = n ? n.call(r, l, p, u) : void 0) || (void 0 === o && l !== p)) return !1;
        }
        return !0;
      };
    },
    2307: function (e, t) {
      'use strict';
      (t.DEFAULT_OPTIONS = {
        maxWidth: 650,
        wrapperStyle: '',
        backgroundColor: 'white',
        linkImagesToOriginal: !0,
        showCaptions: !1,
        markdownCaptions: !1,
        withWebp: !1,
        withAvif: !1,
        tracedSVG: !1,
        loading: 'lazy',
        decoding: 'async',
        disableBgImageOnAlpha: !1,
        disableBgImage: !1,
      }),
        (t.EMPTY_ALT = 'GATSBY_EMPTY_ALT'),
        (t.imageClass = 'gatsby-resp-image-image'),
        (t.imageWrapperClass = 'gatsby-resp-image-wrapper'),
        (t.imageBackgroundClass = 'gatsby-resp-image-background-image');
    },
    2323: function (e, t) {
      'use strict';
      (t.__esModule = !0),
        (t.parsePath = function (e) {
          var t = e || '/',
            n = '',
            r = '',
            o = t.indexOf('#');
          -1 !== o && ((r = t.substr(o)), (t = t.substr(0, o)));
          var a = t.indexOf('?');
          -1 !== a && ((n = t.substr(a)), (t = t.substr(0, a)));
          return { pathname: t, search: '?' === n ? '' : n, hash: '#' === r ? '' : r };
        });
    },
    2475: function (e) {
      (e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    2818: function () {
      'use strict';
      var e,
        t,
        n = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        r =
          ((e = ['', '']),
          (t = ['', '']),
          Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })));
      var o = (function () {
          function e() {
            for (var t = this, n = arguments.length, r = Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              (function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
              })(this, e),
              (this.tag = function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                  r[o - 1] = arguments[o];
                return 'function' == typeof e
                  ? t.interimTag.bind(t, e)
                  : 'string' == typeof e
                  ? t.transformEndResult(e)
                  : ((e = e.map(t.transformString.bind(t))),
                    t.transformEndResult(e.reduce(t.processSubstitutions.bind(t, r))));
              }),
              r.length > 0 && Array.isArray(r[0]) && (r = r[0]),
              (this.transformers = r.map(function (e) {
                return 'function' == typeof e ? e() : e;
              })),
              this.tag
            );
          }
          return (
            n(e, [
              {
                key: 'interimTag',
                value: function (e, t) {
                  for (var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
                    o[a - 2] = arguments[a];
                  return this.tag(r, e.apply(void 0, [t].concat(o)));
                },
              },
              {
                key: 'processSubstitutions',
                value: function (e, t, n) {
                  var r = this.transformSubstitution(e.shift(), t);
                  return ''.concat(t, r, n);
                },
              },
              {
                key: 'transformString',
                value: function (e) {
                  return this.transformers.reduce(function (e, t) {
                    return t.onString ? t.onString(e) : e;
                  }, e);
                },
              },
              {
                key: 'transformSubstitution',
                value: function (e, t) {
                  return this.transformers.reduce(function (e, n) {
                    return n.onSubstitution ? n.onSubstitution(e, t) : e;
                  }, e);
                },
              },
              {
                key: 'transformEndResult',
                value: function (e) {
                  return this.transformers.reduce(function (e, t) {
                    return t.onEndResult ? t.onEndResult(e) : e;
                  }, e);
                },
              },
            ]),
            e
          );
        })(),
        a = o,
        i = { separator: '', conjunction: '', serial: !1 },
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
          return {
            onSubstitution: function (t, n) {
              if (Array.isArray(t)) {
                var r = t.length,
                  o = e.separator,
                  a = e.conjunction,
                  i = e.serial,
                  s = n.match(/(\n?[^\S\n]+)$/);
                if (((t = s ? t.join(o + s[1]) : t.join(o + ' ')), a && r > 1)) {
                  var c = t.lastIndexOf(o);
                  t = t.slice(0, c) + (i ? o : '') + ' ' + a + t.slice(c + 1);
                }
              }
              return t;
            },
          };
        };
      var c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'initial';
          return {
            onEndResult: function (t) {
              if ('initial' === e) {
                var n = t.match(/^[^\S\n]*(?=\S)/gm),
                  r =
                    n &&
                    Math.min.apply(
                      Math,
                      (function (e) {
                        if (Array.isArray(e)) {
                          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                          return n;
                        }
                        return Array.from(e);
                      })(
                        n.map(function (e) {
                          return e.length;
                        }),
                      ),
                    );
                if (r) {
                  var o = new RegExp('^.{' + r + '}', 'gm');
                  return t.replace(o, '');
                }
                return t;
              }
              if ('all' === e) return t.replace(/^[^\S\n]+/gm, '');
              throw new Error('Unknown type: ' + e);
            },
          };
        },
        u = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
          return {
            onEndResult: function (t) {
              if ('' === e) return t.trim();
              if ('start' === (e = e.toLowerCase()) || 'left' === e) return t.replace(/^\s*/, '');
              if ('end' === e || 'right' === e) return t.replace(/\s*$/, '');
              throw new Error('Side not supported: ' + e);
            },
          };
        },
        l =
          (new a(s({ separator: ',' }), c, u),
          new a(s({ separator: ',', conjunction: 'and' }), c, u),
          new a(s({ separator: ',', conjunction: 'or' }), c, u),
          function (e) {
            return {
              onSubstitution: function (t, n) {
                if (null == e || 'string' != typeof e)
                  throw new Error('You need to specify a string character to split by.');
                return 'string' == typeof t && t.includes(e) && (t = t.split(e)), t;
              },
            };
          }),
        p = function (e) {
          return null != e && !Number.isNaN(e) && 'boolean' != typeof e;
        },
        f = function () {
          return {
            onSubstitution: function (e) {
              return Array.isArray(e) ? e.filter(p) : p(e) ? e : '';
            },
          };
        },
        d =
          (new a(l('\n'), f, s, c, u),
          function (e, t) {
            return {
              onSubstitution: function (n, r) {
                if (null == e || null == t)
                  throw new Error('replaceSubstitutionTransformer requires at least 2 arguments.');
                return null == n ? n : n.toString().replace(e, t);
              },
            };
          }),
        h =
          (new a(
            l('\n'),
            s,
            c,
            u,
            d(/&/g, '&amp;'),
            d(/</g, '&lt;'),
            d(/>/g, '&gt;'),
            d(/"/g, '&quot;'),
            d(/'/g, '&#x27;'),
            d(/`/g, '&#x60;'),
          ),
          function (e, t) {
            return {
              onEndResult: function (n) {
                if (null == e || null == t)
                  throw new Error('replaceResultTransformer requires at least 2 arguments.');
                return n.replace(e, t);
              },
            };
          });
      new a(h(/(?:\n(?:\s*))+/g, ' '), u),
        new a(h(/(?:\n\s*)/g, ''), u),
        new a(s({ separator: ',' }), h(/(?:\s+)/g, ' '), u),
        new a(s({ separator: ',', conjunction: 'or' }), h(/(?:\s+)/g, ' '), u),
        new a(s({ separator: ',', conjunction: 'and' }), h(/(?:\s+)/g, ' '), u),
        new a(s, c, u),
        new a(s, h(/(?:\s+)/g, ' '), u),
        new a(c, u),
        new a(c('all'), u);
    },
    2943: function (e, t) {
      t.M = e => e;
    },
    3066: function (e, t) {
      'use strict';
      var n = Symbol.for('react.transitional.element'),
        r = Symbol.for('react.portal'),
        o = Symbol.for('react.fragment'),
        a = Symbol.for('react.strict_mode'),
        i = Symbol.for('react.profiler');
      Symbol.for('react.provider');
      var s = Symbol.for('react.consumer'),
        c = Symbol.for('react.context'),
        u = Symbol.for('react.forward_ref'),
        l = Symbol.for('react.suspense'),
        p = Symbol.for('react.suspense_list'),
        f = Symbol.for('react.memo'),
        d = Symbol.for('react.lazy'),
        h = Symbol.for('react.view_transition'),
        m = Symbol.for('react.client.reference');
      function g(e) {
        if ('object' == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case o:
                case i:
                case a:
                case l:
                case p:
                case h:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case u:
                    case d:
                    case f:
                    case s:
                      return e;
                    default:
                      return t;
                  }
              }
            case r:
              return t;
          }
        }
      }
      (t.Hy = function (e) {
        return (
          'string' == typeof e ||
          'function' == typeof e ||
          e === o ||
          e === i ||
          e === a ||
          e === l ||
          e === p ||
          ('object' == typeof e &&
            null !== e &&
            (e.$$typeof === d ||
              e.$$typeof === f ||
              e.$$typeof === c ||
              e.$$typeof === s ||
              e.$$typeof === u ||
              e.$$typeof === m ||
              void 0 !== e.getModuleId))
        );
      }),
        (t.QP = g);
    },
    3122: function (e, t, n) {
      e.exports = [
        {
          plugin: n(9652),
          options: {
            plugins: [],
            displayName: !0,
            fileName: !0,
            minify: !0,
            namespace: '',
            transpileTemplateLiterals: !0,
            topLevelImportPaths: [],
            pure: !1,
            disableVendorPrefixes: !1,
          },
        },
        { plugin: n(7193), options: { plugins: [] } },
        {
          plugin: n(5795),
          options: {
            plugins: [],
            name: "Andrew Dell'Aringa",
            short_name: 'Andrew',
            start_url: '/',
            background_color: '#020c1b',
            theme_color: '#0a192f',
            display: 'minimal-ui',
            icon: 'src/images/logo.png',
            legacy: !0,
            theme_color_in_head: !0,
            cache_busting_mode: 'query',
            crossOrigin: 'anonymous',
            include_favicon: !0,
            cacheDigest: 'b115b565c1bf96e529fd602d4e74f54b',
          },
        },
        { plugin: n(7807), options: { plugins: [] } },
        {
          plugin: n(8997),
          options: {
            plugins: [],
            maxWidth: 700,
            linkImagesToOriginal: !0,
            quality: 90,
            showCaptions: !1,
            markdownCaptions: !1,
            sizeByPixelDensity: !1,
            backgroundColor: 'white',
            withWebp: !1,
            loading: 'lazy',
            decoding: 'async',
            disableBgImageOnAlpha: !1,
            disableBgImage: !1,
          },
        },
        {
          plugin: n(8534),
          options: {
            plugins: [],
            trackingId: 'UA-XXXXXXXXX-X',
            head: !1,
            anonymize: !1,
            respectDNT: !1,
            exclude: [],
            pageTransitionDelay: 0,
            enableWebVitalsTracking: !1,
          },
        },
        { plugin: n(8829), options: { plugins: [] } },
      ];
    },
    3215: function (e, t, n) {
      'use strict';
      var r = n(4994);
      (t.__esModule = !0), (t.ScrollHandler = t.ScrollContext = void 0);
      var o = r(n(2475)),
        a = r(n(6221)),
        i = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ('object' != typeof e && 'function' != typeof e)) return { default: e };
          var n = u(t);
          if (n && n.has(e)) return n.get(e);
          var r = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if ('default' !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
              i && (i.get || i.set) ? Object.defineProperty(r, a, i) : (r[a] = e[a]);
            }
          (r.default = e), n && n.set(e, r);
          return r;
        })(n(6540)),
        s = r(n(5556)),
        c = n(4351);
      function u(e) {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      var l = i.createContext(new c.SessionStorage());
      (t.ScrollContext = l), (l.displayName = 'GatsbyScrollContext');
      var p = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            ((t = e.call.apply(e, [this].concat(r)) || this)._stateStorage =
              new c.SessionStorage()),
            (t._isTicking = !1),
            (t._latestKnownScrollY = 0),
            (t.scrollListener = function () {
              (t._latestKnownScrollY = window.scrollY),
                t._isTicking ||
                  ((t._isTicking = !0),
                  requestAnimationFrame(t._saveScroll.bind((0, o.default)(t))));
            }),
            (t.windowScroll = function (e, n) {
              t.shouldUpdateScroll(n, t.props) && window.scrollTo(0, e);
            }),
            (t.scrollToHash = function (e, n) {
              var r = document.getElementById(e.substring(1));
              r && t.shouldUpdateScroll(n, t.props) && r.scrollIntoView();
            }),
            (t.shouldUpdateScroll = function (e, n) {
              var r = t.props.shouldUpdateScroll;
              return !r || r.call((0, o.default)(t), e, n);
            }),
            t
          );
        }
        (0, a.default)(t, e);
        var n = t.prototype;
        return (
          (n._saveScroll = function () {
            var e = this.props.location.key || null;
            e && this._stateStorage.save(this.props.location, e, this._latestKnownScrollY),
              (this._isTicking = !1);
          }),
          (n.componentDidMount = function () {
            var e;
            window.addEventListener('scroll', this.scrollListener);
            var t = this.props.location,
              n = t.key,
              r = t.hash;
            n && (e = this._stateStorage.read(this.props.location, n)),
              e ? this.windowScroll(e, void 0) : r && this.scrollToHash(decodeURI(r), void 0);
          }),
          (n.componentWillUnmount = function () {
            window.removeEventListener('scroll', this.scrollListener);
          }),
          (n.componentDidUpdate = function (e) {
            var t,
              n = this.props.location,
              r = n.hash,
              o = n.key;
            o && (t = this._stateStorage.read(this.props.location, o)),
              r ? this.scrollToHash(decodeURI(r), e) : this.windowScroll(t, e);
          }),
          (n.render = function () {
            return i.createElement(l.Provider, { value: this._stateStorage }, this.props.children);
          }),
          t
        );
      })(i.Component);
      (t.ScrollHandler = p),
        (p.propTypes = {
          shouldUpdateScroll: s.default.func,
          children: s.default.element.isRequired,
          location: s.default.object.isRequired,
        });
    },
    3325: function (e, t) {
      'use strict';
      var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        r = function (e) {
          var t = e.location,
            n = t.search,
            r = t.hash,
            o = t.href,
            a = t.origin,
            s = t.protocol,
            c = t.host,
            u = t.hostname,
            l = t.port,
            p = e.location.pathname;
          !p && o && i && (p = new URL(o).pathname);
          return {
            pathname: encodeURI(decodeURI(p)),
            search: n,
            hash: r,
            href: o,
            origin: a,
            protocol: s,
            host: c,
            hostname: u,
            port: l,
            state: e.history.state,
            key: (e.history.state && e.history.state.key) || 'initial',
          };
        },
        o = function (e, t) {
          var o = [],
            a = r(e),
            i = !1,
            s = function () {};
          return {
            get location() {
              return a;
            },
            get transitioning() {
              return i;
            },
            _onTransitionComplete: function () {
              (i = !1), s();
            },
            listen: function (t) {
              o.push(t);
              var n = function () {
                (a = r(e)), t({ location: a, action: 'POP' });
              };
              return (
                e.addEventListener('popstate', n),
                function () {
                  e.removeEventListener('popstate', n),
                    (o = o.filter(function (e) {
                      return e !== t;
                    }));
                }
              );
            },
            navigate: function (t) {
              var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                u = c.state,
                l = c.replace,
                p = void 0 !== l && l;
              if ('number' == typeof t) e.history.go(t);
              else {
                u = n({}, u, { key: Date.now() + '' });
                try {
                  i || p ? e.history.replaceState(u, null, t) : e.history.pushState(u, null, t);
                } catch (d) {
                  e.location[p ? 'replace' : 'assign'](t);
                }
              }
              (a = r(e)), (i = !0);
              var f = new Promise(function (e) {
                return (s = e);
              });
              return (
                o.forEach(function (e) {
                  return e({ location: a, action: 'PUSH' });
                }),
                f
              );
            },
          };
        },
        a = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '/',
            t = e.indexOf('?'),
            n = { pathname: t > -1 ? e.substr(0, t) : e, search: t > -1 ? e.substr(t) : '' },
            r = 0,
            o = [n],
            a = [null];
          return {
            get location() {
              return o[r];
            },
            addEventListener: function (e, t) {},
            removeEventListener: function (e, t) {},
            history: {
              get entries() {
                return o;
              },
              get index() {
                return r;
              },
              get state() {
                return a[r];
              },
              pushState: function (e, t, n) {
                var i = n.split('?'),
                  s = i[0],
                  c = i[1],
                  u = void 0 === c ? '' : c;
                r++, o.push({ pathname: s, search: u.length ? '?' + u : u }), a.push(e);
              },
              replaceState: function (e, t, n) {
                var i = n.split('?'),
                  s = i[0],
                  c = i[1],
                  u = void 0 === c ? '' : c;
                (o[r] = { pathname: s, search: u }), (a[r] = e);
              },
              go: function (e) {
                var t = r + e;
                t < 0 || t > a.length - 1 || (r = t);
              },
            },
          };
        },
        i = !('undefined' == typeof window || !window.document || !window.document.createElement),
        s = o(i ? window : a()),
        c = s.navigate;
      t.W7 = s;
    },
    3459: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(6883);
      'https:' !== window.location.protocol && 'localhost' !== window.location.hostname
        ? console.error(
            'Service workers can only be used over HTTPS, or on localhost for development',
          )
        : 'serviceWorker' in navigator &&
          navigator.serviceWorker
            .register('/sw.js')
            .then(function (e) {
              e.addEventListener('updatefound', () => {
                (0, r.N)('onServiceWorkerUpdateFound', { serviceWorker: e });
                const t = e.installing;
                console.log('installingWorker', t),
                  t.addEventListener('statechange', () => {
                    switch (t.state) {
                      case 'installed':
                        navigator.serviceWorker.controller
                          ? ((window.___swUpdated = !0),
                            (0, r.N)('onServiceWorkerUpdateReady', { serviceWorker: e }),
                            window.___failedResources &&
                              (console.log('resources failed, SW updated - reloading'),
                              window.location.reload()))
                          : (console.log('Content is now available offline!'),
                            (0, r.N)('onServiceWorkerInstalled', { serviceWorker: e }));
                        break;
                      case 'redundant':
                        console.error('The installing service worker became redundant.'),
                          (0, r.N)('onServiceWorkerRedundant', { serviceWorker: e });
                        break;
                      case 'activated':
                        (0, r.N)('onServiceWorkerActive', { serviceWorker: e });
                    }
                  });
              });
            })
            .catch(function (e) {
              console.error('Error during service worker registration:', e);
            });
    },
    3721: function (e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.useScrollRestoration = function (e) {
          var t = (0, a.useLocation)(),
            n = (0, o.useContext)(r.ScrollContext),
            i = (0, o.useRef)(null);
          return (
            (0, o.useLayoutEffect)(
              function () {
                if (i.current) {
                  var r = n.read(t, e);
                  i.current.scrollTo(0, r || 0);
                }
              },
              [t.key],
            ),
            {
              ref: i,
              onScroll: function () {
                i.current && n.save(t, e, i.current.scrollTop);
              },
            }
          );
        });
      var r = n(3215),
        o = n(6540),
        a = n(5702);
    },
    3901: function (e, t) {
      'use strict';
      (t.__esModule = !0), (t.default = void 0);
      t.default = function (e, t) {
        var n = 'manifest.webmanifest';
        if (!Array.isArray(t)) return n;
        var r = t.find(function (t) {
          return e.startsWith(t.start_url);
        });
        return r ? 'manifest_' + r.lang + '.webmanifest' : n;
      };
    },
    3973: function (e, t, n) {
      'use strict';
      n.d(t, {
        G: function () {
          return I;
        },
        L: function () {
          return w;
        },
        M: function () {
          return R;
        },
        P: function () {
          return x;
        },
        S: function () {
          return W;
        },
        _: function () {
          return u;
        },
        a: function () {
          return s;
        },
        b: function () {
          return m;
        },
        c: function () {
          return U;
        },
        d: function () {
          return h;
        },
        g: function () {
          return g;
        },
      });
      var r = n(6540),
        o = (n(2818), n(52), n(5556)),
        a = n.n(o),
        i = n(961);
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function u(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) t.indexOf((n = a[r])) >= 0 || (o[n] = e[n]);
        return o;
      }
      var l = new Set(),
        p = function () {
          return 'undefined' != typeof HTMLImageElement && 'loading' in HTMLImageElement.prototype;
        };
      function f(e) {
        e && l.add(e);
      }
      function d(e) {
        return l.has(e);
      }
      var h = function (e) {
        var t;
        return (function (e) {
          var t, n;
          return Boolean(
            null == e || null == (t = e.images) || null == (n = t.fallback) ? void 0 : n.src,
          );
        })(e)
          ? e
          : (function (e) {
              return Boolean(null == e ? void 0 : e.gatsbyImageData);
            })(e)
          ? e.gatsbyImageData
          : null == e || null == (t = e.childImageSharp)
          ? void 0
          : t.gatsbyImageData;
      };
      function m(e, t, r, o, a, i, c, u) {
        var l, p;
        return (
          void 0 === u && (u = {}),
          null != c &&
            c.current &&
            !('objectFit' in document.documentElement.style) &&
            ((c.current.dataset.objectFit = null != (l = u.objectFit) ? l : 'cover'),
            (c.current.dataset.objectPosition =
              '' + (null != (p = u.objectPosition) ? p : '50% 50%')),
            (function (e) {
              try {
                var t = function () {
                    window.objectFitPolyfill(e.current);
                  },
                  r = (function () {
                    if (!('objectFitPolyfill' in window))
                      return Promise.resolve(n.e(579).then(n.t.bind(n, 579, 23))).then(
                        function () {},
                      );
                  })();
                Promise.resolve(r && r.then ? r.then(t) : t());
              } catch (e) {
                return Promise.reject(e);
              }
            })(c)),
          s({}, r, {
            loading: o,
            shouldLoad: e,
            'data-main-image': '',
            style: s({}, u, { opacity: t ? 1 : 0 }),
            onLoad: function (e) {
              if (!t) {
                f(i);
                var n = e.currentTarget,
                  r = new Image();
                (r.src = n.currentSrc),
                  r.decode
                    ? r
                        .decode()
                        .catch(function () {})
                        .then(function () {
                          a(!0);
                        })
                    : a(!0);
              }
            },
            ref: c,
          })
        );
      }
      function g(e, t, n, r, o, a, i, c) {
        var u = {};
        a &&
          ((u.backgroundColor = a),
          'fixed' === n
            ? ((u.width = r), (u.height = o), (u.backgroundColor = a), (u.position = 'relative'))
            : ('constrained' === n || 'fullWidth' === n) &&
              ((u.position = 'absolute'),
              (u.top = 0),
              (u.left = 0),
              (u.bottom = 0),
              (u.right = 0))),
          i && (u.objectFit = i),
          c && (u.objectPosition = c);
        var l = s({}, e, {
          'aria-hidden': !0,
          'data-placeholder-image': '',
          style: s({ opacity: t ? 0 : 1, transition: 'opacity 500ms linear' }, u),
        });
        return l;
      }
      var v,
        y = ['children'],
        b = function (e) {
          var t = e.layout,
            n = e.width,
            o = e.height;
          return 'fullWidth' === t
            ? r.createElement('div', {
                'aria-hidden': !0,
                style: { paddingTop: (o / n) * 100 + '%' },
              })
            : 'constrained' === t
            ? r.createElement(
                'div',
                { style: { maxWidth: n, display: 'block' } },
                r.createElement('img', {
                  alt: '',
                  role: 'presentation',
                  'aria-hidden': 'true',
                  src:
                    "data:image/svg+xml;charset=utf-8,%3Csvg height='" +
                    o +
                    "' width='" +
                    n +
                    "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
                  style: { maxWidth: '100%', display: 'block', position: 'static' },
                }),
              )
            : null;
        },
        w = function (e) {
          var t = e.children,
            n = u(e, y);
          return r.createElement(r.Fragment, null, r.createElement(b, s({}, n)), t, !1);
        },
        S = ['src', 'srcSet', 'loading', 'alt', 'shouldLoad', 'innerRef'],
        k = ['fallback', 'sources', 'shouldLoad'],
        C = function (e) {
          var t = e.src,
            n = e.srcSet,
            o = e.loading,
            a = e.alt,
            i = void 0 === a ? '' : a,
            c = e.shouldLoad,
            l = e.innerRef,
            p = u(e, S);
          return r.createElement(
            'img',
            s({}, p, {
              decoding: 'async',
              loading: o,
              src: c ? t : void 0,
              'data-src': c ? void 0 : t,
              srcSet: c ? n : void 0,
              'data-srcset': c ? void 0 : n,
              alt: i,
              ref: l,
            }),
          );
        },
        P = (0, r.forwardRef)(function (e, t) {
          var n = e.fallback,
            o = e.sources,
            a = void 0 === o ? [] : o,
            i = e.shouldLoad,
            c = void 0 === i || i,
            l = u(e, k),
            p = l.sizes || (null == n ? void 0 : n.sizes),
            f = r.createElement(C, s({}, l, n, { sizes: p, shouldLoad: c, innerRef: t }));
          return a.length
            ? r.createElement(
                'picture',
                null,
                a.map(function (e) {
                  var t = e.media,
                    n = e.srcSet,
                    o = e.type;
                  return r.createElement('source', {
                    key: t + '-' + o + '-' + n,
                    type: o,
                    media: t,
                    srcSet: c ? n : void 0,
                    'data-srcset': c ? void 0 : n,
                    sizes: p,
                  });
                }),
                f,
              )
            : f;
        });
      (C.propTypes = {
        src: o.string.isRequired,
        alt: o.string.isRequired,
        sizes: o.string,
        srcSet: o.string,
        shouldLoad: o.bool,
      }),
        (P.displayName = 'Picture'),
        (P.propTypes = {
          alt: o.string.isRequired,
          shouldLoad: o.bool,
          fallback: o.exact({ src: o.string.isRequired, srcSet: o.string, sizes: o.string }),
          sources: o.arrayOf(
            o.oneOfType([
              o.exact({
                media: o.string.isRequired,
                type: o.string,
                sizes: o.string,
                srcSet: o.string.isRequired,
              }),
              o.exact({
                media: o.string,
                type: o.string.isRequired,
                sizes: o.string,
                srcSet: o.string.isRequired,
              }),
            ]),
          ),
        });
      var E = ['fallback'],
        x = function (e) {
          var t = e.fallback,
            n = u(e, E);
          return t
            ? r.createElement(P, s({}, n, { fallback: { src: t }, 'aria-hidden': !0, alt: '' }))
            : r.createElement('div', s({}, n));
        };
      (x.displayName = 'Placeholder'),
        (x.propTypes = {
          fallback: o.string,
          sources: null == (v = P.propTypes) ? void 0 : v.sources,
          alt: function (e, t, n) {
            return e[t]
              ? new Error('Invalid prop `' + t + '` supplied to `' + n + '`. Validation failed.')
              : null;
          },
        });
      var R = (0, r.forwardRef)(function (e, t) {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(P, s({ ref: t }, e)),
          r.createElement('noscript', null, r.createElement(P, s({}, e, { shouldLoad: !0 }))),
        );
      });
      (R.displayName = 'MainImage'), (R.propTypes = P.propTypes);
      var A = function (e, t, n) {
          return e.alt || '' === e.alt
            ? a().string.apply(a(), [e, t, n].concat([].slice.call(arguments, 3)))
            : new Error(
                'The "alt" prop is required in ' +
                  n +
                  '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html',
              );
        },
        _ = { image: a().object.isRequired, alt: A },
        O = ['style', 'className'],
        j = (function (e) {
          var t, o;
          function a(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).root = (0, r.createRef)()),
              (n.hydrated = { current: !1 }),
              (n.forceRender = { current: !1 }),
              (n.lazyHydrator = null),
              (n.ref = (0, r.createRef)()),
              (n.unobserveRef = void 0),
              (n.state = { isLoading: p(), isLoaded: !1 }),
              n
            );
          }
          (o = e),
            ((t = a).prototype = Object.create(o.prototype)),
            (t.prototype.constructor = t),
            c(t, o);
          var l = a.prototype;
          return (
            (l._lazyHydrate = function (e, t) {
              var r = this,
                o = this.root.current.querySelector('[data-gatsby-image-ssr]');
              return p() && o && !this.hydrated.current
                ? ((this.hydrated.current = !0), Promise.resolve())
                : n
                    .e(242)
                    .then(n.bind(n, 6242))
                    .then(function (n) {
                      var o = n.lazyHydrate,
                        a = JSON.stringify(r.props.image.images);
                      r.lazyHydrator = o(
                        s(
                          {
                            image: e.image.images,
                            isLoading: t.isLoading || d(a),
                            isLoaded: t.isLoaded || d(a),
                            toggleIsLoaded: function () {
                              null == e.onLoad || e.onLoad(), r.setState({ isLoaded: !0 });
                            },
                            ref: r.ref,
                          },
                          e,
                        ),
                        r.root,
                        r.hydrated,
                        r.forceRender,
                      );
                    });
            }),
            (l._setupIntersectionObserver = function (e) {
              var t = this;
              void 0 === e && (e = !0),
                n
                  .e(70)
                  .then(n.bind(n, 7070))
                  .then(function (n) {
                    var r = (0, n.createIntersectionObserver)(function () {
                      if (t.root.current) {
                        var n = JSON.stringify(t.props.image.images);
                        null == t.props.onStartLoad ||
                          t.props.onStartLoad({ wasCached: e && d(n) }),
                          t.setState({ isLoading: !0, isLoaded: e && d(n) });
                      }
                    });
                    t.root.current && (t.unobserveRef = r(t.root));
                  });
            }),
            (l.shouldComponentUpdate = function (e, t) {
              var n = this,
                r = !1;
              return (
                this.state.isLoading ||
                  !t.isLoading ||
                  t.isLoaded ||
                  (this.forceRender.current = !0),
                this.props.image.images !== e.image.images &&
                  (this.unobserveRef &&
                    (this.unobserveRef(),
                    this.hydrated.current &&
                      this.lazyHydrator &&
                      (0, i.render)(null, this.root.current)),
                  this.setState({ isLoading: !1, isLoaded: !1 }, function () {
                    n._setupIntersectionObserver(!1);
                  }),
                  (r = !0)),
                this.root.current && !r && this._lazyHydrate(e, t),
                !1
              );
            }),
            (l.componentDidMount = function () {
              if (this.root.current) {
                var e = this.root.current.querySelector('[data-gatsby-image-ssr]'),
                  t = JSON.stringify(this.props.image.images);
                if (p() && e) {
                  var n, r;
                  if (
                    (null == (n = (r = this.props).onStartLoad) || n.call(r, { wasCached: !1 }),
                    e.complete)
                  ) {
                    var o, a;
                    null == (o = (a = this.props).onLoad) || o.call(a), f(t);
                  } else {
                    var i = this;
                    e.addEventListener('load', function n() {
                      e.removeEventListener('load', n),
                        null == i.props.onLoad || i.props.onLoad(),
                        f(t);
                    });
                  }
                  return;
                }
                this._setupIntersectionObserver(!0);
              }
            }),
            (l.componentWillUnmount = function () {
              this.unobserveRef &&
                (this.unobserveRef(),
                this.hydrated.current && this.lazyHydrator && this.lazyHydrator());
            }),
            (l.render = function () {
              var e = this.props.as || 'div',
                t = this.props.image,
                n = t.width,
                o = t.height,
                a = t.layout,
                i = (function (e, t, n) {
                  var r = {},
                    o = 'gatsby-image-wrapper';
                  return (
                    'fixed' === n
                      ? ((r.width = e), (r.height = t))
                      : 'constrained' === n &&
                        (o = 'gatsby-image-wrapper gatsby-image-wrapper-constrained'),
                    { className: o, 'data-gatsby-image-wrapper': '', style: r }
                  );
                })(n, o, a),
                c = i.style,
                l = i.className,
                p = u(i, O),
                f = this.props.className;
              this.props.class && (f = this.props.class);
              var d = (function (e, t, n) {
                var r = null;
                return (
                  'fullWidth' === e &&
                    (r =
                      '<div aria-hidden="true" style="padding-top: ' +
                      (n / t) * 100 +
                      '%;"></div>'),
                  'constrained' === e &&
                    (r =
                      '<div style="max-width: ' +
                      t +
                      'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\'' +
                      n +
                      "' width='" +
                      t +
                      "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),
                  r
                );
              })(a, n, o);
              return r.createElement(
                e,
                s({}, p, {
                  style: s({}, c, this.props.style, {
                    backgroundColor: this.props.backgroundColor,
                  }),
                  className: l + (f ? ' ' + f : ''),
                  ref: this.root,
                  dangerouslySetInnerHTML: { __html: d },
                  suppressHydrationWarning: !0,
                }),
              );
            }),
            a
          );
        })(r.Component),
        I = function (e) {
          if (!e.image) return null;
          var t = e.image,
            n = JSON.stringify([
              t.width,
              t.height,
              t.layout,
              e.className,
              e.class,
              e.backgroundColor,
            ]);
          return r.createElement(j, s({ key: n }, e));
        };
      (I.propTypes = _), (I.displayName = 'GatsbyImage');
      var L,
        T = [
          'src',
          '__imageData',
          '__error',
          'width',
          'height',
          'aspectRatio',
          'tracedSVGOptions',
          'placeholder',
          'formats',
          'quality',
          'transformOptions',
          'jpgOptions',
          'pngOptions',
          'webpOptions',
          'avifOptions',
          'blurredOptions',
        ],
        D = function (e, t) {
          return 'fullWidth' !== e.layout || ('width' !== t && 'height' !== t) || !e[t]
            ? a().number.apply(a(), [e, t].concat([].slice.call(arguments, 2)))
            : new Error('"' + t + '" ' + e[t] + ' may not be passed when layout is fullWidth.');
        },
        N = new Set(['fixed', 'fullWidth', 'constrained']),
        M = {
          src: a().string.isRequired,
          alt: A,
          width: D,
          height: D,
          sizes: a().string,
          layout: function (e) {
            if (void 0 !== e.layout && !N.has(e.layout))
              return new Error(
                'Invalid value ' +
                  e.layout +
                  '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".',
              );
          },
        },
        W =
          ((L = I),
          function (e) {
            var t = e.src,
              n = e.__imageData,
              o = e.__error,
              a = u(e, T);
            return (
              o && console.warn(o),
              n
                ? r.createElement(L, s({ image: n }, a))
                : (console.warn('Image not loaded', t), null)
            );
          });
      function U(e) {
        var t = e.children;
        return (
          r.useEffect(function () {
            n.e(242).then(n.bind(n, 6242));
          }, []),
          t
        );
      }
      (W.displayName = 'StaticImage'), (W.propTypes = M);
    },
    4077: function (e, t, n) {
      'use strict';
      var r = n(4525),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        a = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function c(e) {
        return r.isMemo(e) ? i : s[e.$$typeof] || o;
      }
      (s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[r.Memo] = i);
      var u = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        p = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, n, r) {
        if ('string' != typeof n) {
          if (h) {
            var o = d(n);
            o && o !== h && e(t, o, r);
          }
          var i = l(n);
          p && (i = i.concat(p(n)));
          for (var s = c(t), m = c(n), g = 0; g < i.length; ++g) {
            var v = i[g];
            if (!(a[v] || (r && r[v]) || (m && m[v]) || (s && s[v]))) {
              var y = f(n, v);
              try {
                u(t, v, y);
              } catch (b) {}
            }
          }
        }
        return t;
      };
    },
    4109: function (e, t, n) {
      'use strict';
      n.d(t, {
        X: function () {
          return a;
        },
      });
      const r = new Map(),
        o = new Map();
      function a(e) {
        let t = r.get(e);
        return t || (t = o.get(e.toLowerCase())), t;
      }
      [].forEach(e => {
        e.ignoreCase ? o.set(e.fromPath, e) : r.set(e.fromPath, e);
      });
    },
    4351: function (e, t) {
      'use strict';
      (t.__esModule = !0), (t.SessionStorage = void 0);
      var n = '___GATSBY_REACT_ROUTER_SCROLL',
        r = (function () {
          function e() {}
          var t = e.prototype;
          return (
            (t.read = function (e, t) {
              var r = this.getStateKey(e, t);
              try {
                var o = window.sessionStorage.getItem(r);
                return o ? JSON.parse(o) : 0;
              } catch (a) {
                return window && window[n] && window[n][r] ? window[n][r] : 0;
              }
            }),
            (t.save = function (e, t, r) {
              var o = this.getStateKey(e, t),
                a = JSON.stringify(r);
              try {
                window.sessionStorage.setItem(o, a);
              } catch (i) {
                (window && window[n]) || (window[n] = {}), (window[n][o] = JSON.parse(a));
              }
            }),
            (t.getStateKey = function (e, t) {
              var n = '@@scroll|' + e.pathname;
              return null == t ? n : n + '|' + t;
            }),
            e
          );
        })();
      t.SessionStorage = r;
    },
    4506: function (e, t, n) {
      'use strict';
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function o(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return r(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return r(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? r(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      n.d(t, {
        A: function () {
          return o;
        },
      });
    },
    4525: function (e, t, n) {
      'use strict';
      e.exports = n(5937);
    },
    4634: function (e) {
      function t() {
        return (
          (e.exports = t =
            Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t.apply(null, arguments)
        );
      }
      (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    4893: function (e) {
      (e.exports = function (e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
          }
        return n;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    4994: function (e) {
      (e.exports = function (e) {
        return e && e.__esModule ? e : { default: e };
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    5540: function (e, t, n) {
      'use strict';
      function r(e, t) {
        return (
          (r = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          r(e, t)
        );
      }
      function o(e, t) {
        (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), r(e, t);
      }
      n.d(t, {
        A: function () {
          return o;
        },
      });
    },
    5636: function (e) {
      function t(n, r) {
        return (
          (e.exports = t =
            Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t(n, r)
        );
      }
      (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    5702: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          BaseContext: function () {
            return M;
          },
          Link: function () {
            return Y;
          },
          Location: function () {
            return T;
          },
          LocationProvider: function () {
            return D;
          },
          Match: function () {
            return Z;
          },
          Redirect: function () {
            return K;
          },
          Router: function () {
            return W;
          },
          ServerLocation: function () {
            return N;
          },
          createHistory: function () {
            return k;
          },
          createMemorySource: function () {
            return C;
          },
          globalHistory: function () {
            return E;
          },
          isRedirect: function () {
            return Q;
          },
          matchPath: function () {
            return u;
          },
          navigate: function () {
            return x;
          },
          redirectTo: function () {
            return X;
          },
          resolve: function () {
            return l;
          },
          useLocation: function () {
            return ee;
          },
          useMatch: function () {
            return re;
          },
          useNavigate: function () {
            return te;
          },
          useParams: function () {
            return ne;
          },
        });
      var r = n(6540),
        o = n(311),
        a = n.n(o),
        i = n(2943),
        s = function (e, t) {
          return e.substr(0, t.length) === t;
        },
        c = function (e, t) {
          for (
            var n = void 0,
              r = void 0,
              o = t.split('?')[0],
              i = v(o),
              s = '' === i[0],
              c = g(e),
              u = 0,
              l = c.length;
            u < l;
            u++
          ) {
            var p = !1,
              d = c[u].route;
            if (d.default) r = { route: d, params: {}, uri: t };
            else {
              for (var m = v(d.path), y = {}, w = Math.max(i.length, m.length), S = 0; S < w; S++) {
                var k = m[S],
                  C = i[S];
                if (h(k)) {
                  y[k.slice(1) || '*'] = i.slice(S).map(decodeURIComponent).join('/');
                  break;
                }
                if (void 0 === C) {
                  p = !0;
                  break;
                }
                var P = f.exec(k);
                if (P && !s) {
                  -1 === b.indexOf(P[1]) || a()(!1);
                  var E = decodeURIComponent(C);
                  y[P[1]] = E;
                } else if (k !== C) {
                  p = !0;
                  break;
                }
              }
              if (!p) {
                n = { route: d, params: y, uri: '/' + i.slice(0, S).join('/') };
                break;
              }
            }
          }
          return n || r || null;
        },
        u = function (e, t) {
          return c([{ path: e }], t);
        },
        l = function (e, t) {
          if (s(e, '/')) return e;
          var n = e.split('?'),
            r = n[0],
            o = n[1],
            a = t.split('?')[0],
            i = v(r),
            c = v(a);
          if ('' === i[0]) return y(a, o);
          if (!s(i[0], '.')) {
            var u = c.concat(i).join('/');
            return y(('/' === a ? '' : '/') + u, o);
          }
          for (var l = c.concat(i), p = [], f = 0, d = l.length; f < d; f++) {
            var h = l[f];
            '..' === h ? p.pop() : '.' !== h && p.push(h);
          }
          return y('/' + p.join('/'), o);
        },
        p = function (e, t) {
          var n = e.split('?'),
            r = n[0],
            o = n[1],
            a = void 0 === o ? '' : o,
            i =
              '/' +
              v(r)
                .map(function (e) {
                  var n = f.exec(e);
                  return n ? t[n[1]] : e;
                })
                .join('/'),
            s = t.location,
            c = (s = void 0 === s ? {} : s).search,
            u = (void 0 === c ? '' : c).split('?')[1] || '';
          return (i = y(i, a, u));
        },
        f = /^:(.+)/,
        d = function (e) {
          return f.test(e);
        },
        h = function (e) {
          return e && '*' === e[0];
        },
        m = function (e, t) {
          return {
            route: e,
            score: e.default
              ? 0
              : v(e.path).reduce(function (e, t) {
                  return (
                    (e += 4),
                    !(function (e) {
                      return '' === e;
                    })(t)
                      ? d(t)
                        ? (e += 2)
                        : h(t)
                        ? (e -= 5)
                        : (e += 3)
                      : (e += 1),
                    e
                  );
                }, 0),
            index: t,
          };
        },
        g = function (e) {
          return e.map(m).sort(function (e, t) {
            return e.score < t.score ? 1 : e.score > t.score ? -1 : e.index - t.index;
          });
        },
        v = function (e) {
          return e.replace(/(^\/+|\/+$)/g, '').split('/');
        },
        y = function (e) {
          for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
          return (
            e +
            ((n = n.filter(function (e) {
              return e && e.length > 0;
            })) && n.length > 0
              ? '?' + n.join('&')
              : '')
          );
        },
        b = ['uri', 'path'],
        w =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        S = function (e) {
          var t = e.location,
            n = t.search,
            r = t.hash,
            o = t.href,
            a = t.origin,
            i = t.protocol,
            s = t.host,
            c = t.hostname,
            u = t.port,
            l = e.location.pathname;
          !l && o && P && (l = new URL(o).pathname);
          return {
            pathname: encodeURI(decodeURI(l)),
            search: n,
            hash: r,
            href: o,
            origin: a,
            protocol: i,
            host: s,
            hostname: c,
            port: u,
            state: e.history.state,
            key: (e.history.state && e.history.state.key) || 'initial',
          };
        },
        k = function (e, t) {
          var n = [],
            r = S(e),
            o = !1,
            a = function () {};
          return {
            get location() {
              return r;
            },
            get transitioning() {
              return o;
            },
            _onTransitionComplete: function () {
              (o = !1), a();
            },
            listen: function (t) {
              n.push(t);
              var o = function () {
                (r = S(e)), t({ location: r, action: 'POP' });
              };
              return (
                e.addEventListener('popstate', o),
                function () {
                  e.removeEventListener('popstate', o),
                    (n = n.filter(function (e) {
                      return e !== t;
                    }));
                }
              );
            },
            navigate: function (t) {
              var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                s = i.state,
                c = i.replace,
                u = void 0 !== c && c;
              if ('number' == typeof t) e.history.go(t);
              else {
                s = w({}, s, { key: Date.now() + '' });
                try {
                  o || u ? e.history.replaceState(s, null, t) : e.history.pushState(s, null, t);
                } catch (p) {
                  e.location[u ? 'replace' : 'assign'](t);
                }
              }
              (r = S(e)), (o = !0);
              var l = new Promise(function (e) {
                return (a = e);
              });
              return (
                n.forEach(function (e) {
                  return e({ location: r, action: 'PUSH' });
                }),
                l
              );
            },
          };
        },
        C = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '/',
            t = e.indexOf('?'),
            n = { pathname: t > -1 ? e.substr(0, t) : e, search: t > -1 ? e.substr(t) : '' },
            r = 0,
            o = [n],
            a = [null];
          return {
            get location() {
              return o[r];
            },
            addEventListener: function (e, t) {},
            removeEventListener: function (e, t) {},
            history: {
              get entries() {
                return o;
              },
              get index() {
                return r;
              },
              get state() {
                return a[r];
              },
              pushState: function (e, t, n) {
                var i = n.split('?'),
                  s = i[0],
                  c = i[1],
                  u = void 0 === c ? '' : c;
                r++, o.push({ pathname: s, search: u.length ? '?' + u : u }), a.push(e);
              },
              replaceState: function (e, t, n) {
                var i = n.split('?'),
                  s = i[0],
                  c = i[1],
                  u = void 0 === c ? '' : c;
                (o[r] = { pathname: s, search: u }), (a[r] = e);
              },
              go: function (e) {
                var t = r + e;
                t < 0 || t > a.length - 1 || (r = t);
              },
            },
          };
        },
        P = !('undefined' == typeof window || !window.document || !window.document.createElement),
        E = k(P ? window : C()),
        x = E.navigate,
        R =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          };
      function A(e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      }
      function _(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function O(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function j(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      var I = function (e, t) {
          var n = (0, r.createContext)(t);
          return (n.displayName = e), n;
        },
        L = I('Location'),
        T = function (e) {
          var t = e.children;
          return r.createElement(L.Consumer, null, function (e) {
            return e ? t(e) : r.createElement(D, null, t);
          });
        },
        D = (function (e) {
          function t() {
            var n, r;
            _(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
            return (
              (n = r = O(this, e.call.apply(e, [this].concat(a)))),
              (r.state = { context: r.getContext(), refs: { unlisten: null } }),
              O(r, n)
            );
          }
          return (
            j(t, e),
            (t.prototype.getContext = function () {
              var e = this.props.history;
              return { navigate: e.navigate, location: e.location };
            }),
            (t.prototype.componentDidCatch = function (e, t) {
              if (!Q(e)) throw e;
              (0, this.props.history.navigate)(e.uri, { replace: !0 });
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              t.context.location !== this.state.context.location &&
                this.props.history._onTransitionComplete();
            }),
            (t.prototype.componentDidMount = function () {
              var e = this,
                t = this.state.refs,
                n = this.props.history;
              n._onTransitionComplete(),
                (t.unlisten = n.listen(function () {
                  Promise.resolve().then(function () {
                    requestAnimationFrame(function () {
                      e.unmounted ||
                        e.setState(function () {
                          return { context: e.getContext() };
                        });
                    });
                  });
                }));
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.state.refs;
              (this.unmounted = !0), e.unlisten();
            }),
            (t.prototype.render = function () {
              var e = this.state.context,
                t = this.props.children;
              return r.createElement(
                L.Provider,
                { value: e },
                'function' == typeof t ? t(e) : t || null,
              );
            }),
            t
          );
        })(r.Component);
      D.defaultProps = { history: E };
      var N = function (e) {
          var t = e.url,
            n = e.children,
            o = t.indexOf('?'),
            a = void 0,
            i = '';
          return (
            o > -1 ? ((a = t.substring(0, o)), (i = t.substring(o))) : (a = t),
            r.createElement(
              L.Provider,
              {
                value: {
                  location: { pathname: a, search: i, hash: '' },
                  navigate: function () {
                    throw new Error("You can't call navigate on the server.");
                  },
                },
              },
              n,
            )
          );
        },
        M = I('Base', { baseuri: '/', basepath: '/', navigate: E.navigate }),
        W = function (e) {
          return r.createElement(M.Consumer, null, function (t) {
            return r.createElement(T, null, function (n) {
              return r.createElement(U, R({}, t, n, e));
            });
          });
        },
        U = (function (e) {
          function t() {
            return _(this, t), O(this, e.apply(this, arguments));
          }
          return (
            j(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.location,
                n = e.navigate,
                o = e.basepath,
                a = e.primary,
                i = e.children,
                s = (e.baseuri, e.component),
                u = void 0 === s ? 'div' : s,
                p = A(e, [
                  'location',
                  'navigate',
                  'basepath',
                  'primary',
                  'children',
                  'baseuri',
                  'component',
                ]),
                f = r.Children.toArray(i).reduce(function (e, t) {
                  var n = ae(o)(t);
                  return e.concat(n);
                }, []),
                d = t.pathname,
                h = c(f, d);
              if (h) {
                var m = h.params,
                  g = h.uri,
                  v = h.route,
                  y = h.route.value;
                o = v.default ? o : v.path.replace(/\*$/, '');
                var b = R({}, m, {
                    uri: g,
                    location: t,
                    navigate: function (e, t) {
                      return n(l(e, g), t);
                    },
                  }),
                  w = r.cloneElement(
                    y,
                    b,
                    y.props.children
                      ? r.createElement(W, { location: t, primary: a }, y.props.children)
                      : void 0,
                  ),
                  S = a ? $ : u,
                  k = a ? R({ uri: g, location: t, component: u }, p) : p;
                return r.createElement(
                  M.Provider,
                  { value: { baseuri: g, basepath: o, navigate: b.navigate } },
                  r.createElement(S, k, w),
                );
              }
              return null;
            }),
            t
          );
        })(r.PureComponent);
      U.defaultProps = { primary: !0 };
      var F = I('Focus'),
        $ = function (e) {
          var t = e.uri,
            n = e.location,
            o = e.component,
            a = A(e, ['uri', 'location', 'component']);
          return r.createElement(F.Consumer, null, function (e) {
            return r.createElement(
              H,
              R({}, a, { component: o, requestFocus: e, uri: t, location: n }),
            );
          });
        },
        z = !0,
        q = 0,
        H = (function (e) {
          function t() {
            var n, r;
            _(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
            return (
              (n = r = O(this, e.call.apply(e, [this].concat(a)))),
              (r.state = {}),
              (r.requestFocus = function (e) {
                !r.state.shouldFocus && e && e.focus();
              }),
              O(r, n)
            );
          }
          return (
            j(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              if (null == t.uri) return R({ shouldFocus: !0 }, e);
              var n = e.uri !== t.uri,
                r = t.location.pathname !== e.location.pathname && e.location.pathname === e.uri;
              return R({ shouldFocus: n || r }, e);
            }),
            (t.prototype.componentDidMount = function () {
              q++, this.focus();
            }),
            (t.prototype.componentWillUnmount = function () {
              0 === --q && (z = !0);
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              e.location !== this.props.location && this.state.shouldFocus && this.focus();
            }),
            (t.prototype.focus = function () {
              var e = this.props.requestFocus;
              e
                ? e(this.node)
                : z
                ? (z = !1)
                : this.node && (this.node.contains(document.activeElement) || this.node.focus());
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = (t.children, t.style),
                o = (t.requestFocus, t.component),
                a = void 0 === o ? 'div' : o,
                i =
                  (t.uri,
                  t.location,
                  A(t, ['children', 'style', 'requestFocus', 'component', 'uri', 'location']));
              return r.createElement(
                a,
                R(
                  {
                    style: R({ outline: 'none' }, n),
                    tabIndex: '-1',
                    ref: function (t) {
                      return (e.node = t);
                    },
                  },
                  i,
                ),
                r.createElement(F.Provider, { value: this.requestFocus }, this.props.children),
              );
            }),
            t
          );
        })(r.Component);
      (0, i.M)(H);
      var B = function () {},
        G = r.forwardRef;
      void 0 === G &&
        (G = function (e) {
          return e;
        });
      var Y = G(function (e, t) {
        var n = e.innerRef,
          o = A(e, ['innerRef']);
        return r.createElement(M.Consumer, null, function (e) {
          e.basepath;
          var a = e.baseuri;
          return r.createElement(T, null, function (e) {
            var i = e.location,
              c = e.navigate,
              u = o.to,
              p = o.state,
              f = o.replace,
              d = o.getProps,
              h = void 0 === d ? B : d,
              m = A(o, ['to', 'state', 'replace', 'getProps']),
              g = l(u, a),
              v = encodeURI(g),
              y = i.pathname === v,
              b = s(i.pathname, v);
            return r.createElement(
              'a',
              R(
                { ref: t || n, 'aria-current': y ? 'page' : void 0 },
                m,
                h({ isCurrent: y, isPartiallyCurrent: b, href: g, location: i }),
                {
                  href: g,
                  onClick: function (e) {
                    if ((m.onClick && m.onClick(e), ie(e))) {
                      e.preventDefault();
                      var t = f;
                      if ('boolean' != typeof f && y) {
                        var n = R({}, i.state),
                          r = (n.key, A(n, ['key']));
                        (o = R({}, p)),
                          (a = r),
                          (t =
                            (s = Object.keys(o)).length === Object.keys(a).length &&
                            s.every(function (e) {
                              return a.hasOwnProperty(e) && o[e] === a[e];
                            }));
                      }
                      c(g, { state: p, replace: t });
                    }
                    var o, a, s;
                  },
                },
              ),
            );
          });
        });
      });
      function V(e) {
        this.uri = e;
      }
      Y.displayName = 'Link';
      var Q = function (e) {
          return e instanceof V;
        },
        X = function (e) {
          throw new V(e);
        },
        J = (function (e) {
          function t() {
            return _(this, t), O(this, e.apply(this, arguments));
          }
          return (
            j(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.props,
                t = e.navigate,
                n = e.to,
                r = (e.from, e.replace),
                o = void 0 === r || r,
                a = e.state,
                i = (e.noThrow, e.baseuri),
                s = A(e, ['navigate', 'to', 'from', 'replace', 'state', 'noThrow', 'baseuri']);
              Promise.resolve().then(function () {
                var e = l(n, i);
                t(p(e, s), { replace: o, state: a });
              });
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = (e.navigate, e.to),
                n = (e.from, e.replace, e.state, e.noThrow),
                r = e.baseuri,
                o = A(e, ['navigate', 'to', 'from', 'replace', 'state', 'noThrow', 'baseuri']),
                a = l(t, r);
              return n || X(p(a, o)), null;
            }),
            t
          );
        })(r.Component),
        K = function (e) {
          return r.createElement(M.Consumer, null, function (t) {
            var n = t.baseuri;
            return r.createElement(T, null, function (t) {
              return r.createElement(J, R({}, t, { baseuri: n }, e));
            });
          });
        },
        Z = function (e) {
          var t = e.path,
            n = e.children;
          return r.createElement(M.Consumer, null, function (e) {
            var o = e.baseuri;
            return r.createElement(T, null, function (e) {
              var r = e.navigate,
                a = e.location,
                i = l(t, o),
                s = u(i, a.pathname);
              return n({
                navigate: r,
                location: a,
                match: s ? R({}, s.params, { uri: s.uri, path: t }) : null,
              });
            });
          });
        },
        ee = function () {
          var e = (0, r.useContext)(L);
          if (!e)
            throw new Error(
              'useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router',
            );
          return e.location;
        },
        te = function () {
          var e = (0, r.useContext)(M);
          if (!e)
            throw new Error(
              'useNavigate hook was used but a BaseContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router',
            );
          return e.navigate;
        },
        ne = function () {
          var e = (0, r.useContext)(M);
          if (!e)
            throw new Error(
              'useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router',
            );
          var t = ee(),
            n = u(e.basepath, t.pathname);
          return n ? n.params : null;
        },
        re = function (e) {
          if (!e)
            throw new Error(
              'useMatch(path: string) requires an argument of a string to match against',
            );
          var t = (0, r.useContext)(M);
          if (!t)
            throw new Error(
              'useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router',
            );
          var n = ee(),
            o = l(e, t.baseuri),
            a = u(o, n.pathname);
          return a ? R({}, a.params, { uri: a.uri, path: e }) : null;
        },
        oe = function (e) {
          return e.replace(/(^\/+|\/+$)/g, '');
        },
        ae = function e(t) {
          return function (n) {
            if (!n) return null;
            if (n.type === r.Fragment && n.props.children)
              return r.Children.map(n.props.children, e(t));
            var o, i, s;
            if (
              (n.props.path || n.props.default || n.type === K || a()(!1),
              n.type !== K || (n.props.from && n.props.to) || a()(!1),
              n.type === K &&
                ((o = n.props.from),
                (i = n.props.to),
                (s = function (e) {
                  return d(e);
                }),
                v(o).filter(s).sort().join('/') !== v(i).filter(s).sort().join('/')) &&
                a()(!1),
              n.props.default)
            )
              return { value: n, default: !0 };
            var c = n.type === K ? n.props.from : n.props.path,
              u = '/' === c ? t : oe(t) + '/' + oe(c);
            return {
              value: n,
              default: n.props.default,
              path: n.props.children ? oe(u) + '/*' : u,
            };
          };
        },
        ie = function (e) {
          return (
            !e.defaultPrevented &&
            0 === e.button &&
            !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
          );
        };
    },
    5706: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(6540),
        o = n(8016),
        a = n(694);
      t.default = e => {
        let { location: t } = e;
        const n = o.Ay.loadPageSync(t.pathname);
        return n ? r.createElement(a.A, { location: t, pageResources: n, ...n.json }) : null;
      };
    },
    5795: function (e, t, n) {
      'use strict';
      var r = n(4994);
      n(1015), r(n(3901));
    },
    5937: function (e, t) {
      'use strict';
      var n = 'function' == typeof Symbol && Symbol.for,
        r = n ? Symbol.for('react.element') : 60103,
        o = n ? Symbol.for('react.portal') : 60106,
        a = n ? Symbol.for('react.fragment') : 60107,
        i = n ? Symbol.for('react.strict_mode') : 60108,
        s = n ? Symbol.for('react.profiler') : 60114,
        c = n ? Symbol.for('react.provider') : 60109,
        u = n ? Symbol.for('react.context') : 60110,
        l = n ? Symbol.for('react.async_mode') : 60111,
        p = n ? Symbol.for('react.concurrent_mode') : 60111,
        f = n ? Symbol.for('react.forward_ref') : 60112,
        d = n ? Symbol.for('react.suspense') : 60113,
        h = n ? Symbol.for('react.suspense_list') : 60120,
        m = n ? Symbol.for('react.memo') : 60115,
        g = n ? Symbol.for('react.lazy') : 60116,
        v = n ? Symbol.for('react.block') : 60121,
        y = n ? Symbol.for('react.fundamental') : 60117,
        b = n ? Symbol.for('react.responder') : 60118,
        w = n ? Symbol.for('react.scope') : 60119;
      function S(e) {
        if ('object' == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case l:
                case p:
                case a:
                case s:
                case i:
                case d:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case f:
                    case g:
                    case m:
                    case c:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      function k(e) {
        return S(e) === p;
      }
      (t.AsyncMode = l),
        (t.ConcurrentMode = p),
        (t.ContextConsumer = u),
        (t.ContextProvider = c),
        (t.Element = r),
        (t.ForwardRef = f),
        (t.Fragment = a),
        (t.Lazy = g),
        (t.Memo = m),
        (t.Portal = o),
        (t.Profiler = s),
        (t.StrictMode = i),
        (t.Suspense = d),
        (t.isAsyncMode = function (e) {
          return k(e) || S(e) === l;
        }),
        (t.isConcurrentMode = k),
        (t.isContextConsumer = function (e) {
          return S(e) === u;
        }),
        (t.isContextProvider = function (e) {
          return S(e) === c;
        }),
        (t.isElement = function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return S(e) === f;
        }),
        (t.isFragment = function (e) {
          return S(e) === a;
        }),
        (t.isLazy = function (e) {
          return S(e) === g;
        }),
        (t.isMemo = function (e) {
          return S(e) === m;
        }),
        (t.isPortal = function (e) {
          return S(e) === o;
        }),
        (t.isProfiler = function (e) {
          return S(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return S(e) === i;
        }),
        (t.isSuspense = function (e) {
          return S(e) === d;
        }),
        (t.isValidElementType = function (e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === a ||
            e === p ||
            e === s ||
            e === i ||
            e === d ||
            e === h ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === g ||
                e.$$typeof === m ||
                e.$$typeof === c ||
                e.$$typeof === u ||
                e.$$typeof === f ||
                e.$$typeof === y ||
                e.$$typeof === b ||
                e.$$typeof === w ||
                e.$$typeof === v))
          );
        }),
        (t.typeOf = S);
    },
    6221: function (e, t, n) {
      var r = n(5636);
      (e.exports = function (e, t) {
        (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), r(e, t);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    6838: function (e, t, n) {
      'use strict';
      var r = n(5540),
        o = n(6883),
        a = n(6540),
        i = n(961),
        s = n(5702),
        c = n(7035),
        u = n(1015),
        l = n(8016),
        p = n(4109),
        f = n(1302);
      const d = {
        id: 'gatsby-announcer',
        style: {
          position: 'absolute',
          top: 0,
          width: 1,
          height: 1,
          padding: 0,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        },
        'aria-live': 'assertive',
        'aria-atomic': 'true',
      };
      var h = n(3325),
        m = n(7424);
      function g(e) {
        const t = (0, p.X)(e),
          { hash: n, search: r } = window.location;
        return null != t && (window.___replace(t.toPath + r + n), !0);
      }
      let v = '';
      window.addEventListener('unhandledrejection', e => {
        /loading chunk \d* failed./i.test(e.reason) && v && (window.location.pathname = v);
      });
      const y = (e, t) => {
          g(e.pathname) ||
            ((v = e.pathname), (0, o.N)('onPreRouteUpdate', { location: e, prevLocation: t }));
        },
        b = (e, t) => {
          g(e.pathname) || (0, o.N)('onRouteUpdate', { location: e, prevLocation: t });
        },
        w = function (e, t) {
          if ((void 0 === t && (t = {}), 'number' == typeof e)) return void h.W7.navigate(e);
          const { pathname: n, search: r, hash: a } = (0, m.Rr)(e),
            i = (0, p.X)(n);
          if ((i && (e = i.toPath + r + a), window.___swUpdated))
            return void (window.location = n + r + a);
          const c = setTimeout(() => {
            f.A.emit('onDelayedLoadPageResources', { pathname: n }),
              (0, o.N)('onRouteUpdateDelayed', { location: window.location });
          }, 1e3);
          l.Ay.loadPage(n).then(o => {
            if (!o || o.status === l.Wi.Error)
              return (
                window.history.replaceState({}, '', location.href),
                (window.location = n),
                void clearTimeout(c)
              );
            o &&
              o.page.webpackCompilationHash !== window.___webpackCompilationHash &&
              ('serviceWorker' in navigator &&
                null !== navigator.serviceWorker.controller &&
                'activated' === navigator.serviceWorker.controller.state &&
                navigator.serviceWorker.controller.postMessage({ gatsbyApi: 'clearPathResources' }),
              (window.location = n + r + a)),
              (0, s.navigate)(e, t),
              clearTimeout(c);
          });
        };
      function S(e, t) {
        let { location: n } = t;
        const { pathname: r, hash: a } = n,
          i = (0, o.N)('shouldUpdateScroll', {
            prevRouterProps: e,
            pathname: r,
            routerProps: { location: n },
            getSavedScrollPosition: e => [0, this._stateStorage.read(e, e.key)],
          });
        if (i.length > 0) return i[i.length - 1];
        if (e) {
          const {
            location: { pathname: t },
          } = e;
          if (t === r) return a ? decodeURI(a.slice(1)) : [0, 0];
        }
        return !0;
      }
      let k = (function (e) {
        function t(t) {
          var n;
          return ((n = e.call(this, t) || this).announcementRef = a.createRef()), n;
        }
        (0, r.A)(t, e);
        var n = t.prototype;
        return (
          (n.componentDidUpdate = function (e, t) {
            requestAnimationFrame(() => {
              let e = `new page at ${this.props.location.pathname}`;
              document.title && (e = document.title);
              const t = document.querySelectorAll('#gatsby-focus-wrapper h1');
              t && t.length && (e = t[0].textContent);
              const n = `Navigated to ${e}`;
              if (this.announcementRef.current) {
                this.announcementRef.current.innerText !== n &&
                  (this.announcementRef.current.innerText = n);
              }
            });
          }),
          (n.render = function () {
            return a.createElement('div', Object.assign({}, d, { ref: this.announcementRef }));
          }),
          t
        );
      })(a.Component);
      const C = (e, t) => {
        var n, r;
        return (
          e.href !== t.href ||
          (null == e || null === (n = e.state) || void 0 === n ? void 0 : n.key) !==
            (null == t || null === (r = t.state) || void 0 === r ? void 0 : r.key)
        );
      };
      let P = (function (e) {
        function t(t) {
          var n;
          return (n = e.call(this, t) || this), y(t.location, null), n;
        }
        (0, r.A)(t, e);
        var n = t.prototype;
        return (
          (n.componentDidMount = function () {
            b(this.props.location, null);
          }),
          (n.shouldComponentUpdate = function (e) {
            return !!C(e.location, this.props.location) && (y(this.props.location, e.location), !0);
          }),
          (n.componentDidUpdate = function (e) {
            C(e.location, this.props.location) && b(this.props.location, e.location);
          }),
          (n.render = function () {
            return a.createElement(
              a.Fragment,
              null,
              this.props.children,
              a.createElement(k, { location: location }),
            );
          }),
          t
        );
      })(a.Component);
      var E = n(694),
        x = n(9576);
      function R(e, t) {
        for (var n in e) if (!(n in t)) return !0;
        for (var r in t) if (e[r] !== t[r]) return !0;
        return !1;
      }
      var A = (function (e) {
          function t(t) {
            var n;
            n = e.call(this) || this;
            const { location: r, pageResources: o } = t;
            return (
              (n.state = {
                location: { ...r },
                pageResources: o || l.Ay.loadPageSync(r.pathname, { withErrorDetails: !0 }),
              }),
              n
            );
          }
          (0, r.A)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              let { location: n } = e;
              if (t.location.href !== n.href) {
                return {
                  pageResources: l.Ay.loadPageSync(n.pathname, { withErrorDetails: !0 }),
                  location: { ...n },
                };
              }
              return { location: { ...n } };
            });
          var n = t.prototype;
          return (
            (n.loadResources = function (e) {
              l.Ay.loadPage(e).then(t => {
                t && t.status !== l.Wi.Error
                  ? this.setState({ location: { ...window.location }, pageResources: t })
                  : (window.history.replaceState({}, '', location.href), (window.location = e));
              });
            }),
            (n.shouldComponentUpdate = function (e, t) {
              return t.pageResources
                ? this.state.pageResources !== t.pageResources ||
                    this.state.pageResources.component !== t.pageResources.component ||
                    this.state.pageResources.json !== t.pageResources.json ||
                    !(
                      this.state.location.key === t.location.key ||
                      !t.pageResources.page ||
                      (!t.pageResources.page.matchPath && !t.pageResources.page.path)
                    ) ||
                    (function (e, t, n) {
                      return R(e.props, t) || R(e.state, n);
                    })(this, e, t)
                : (this.loadResources(e.location.pathname), !1);
            }),
            (n.render = function () {
              return this.props.children(this.state);
            }),
            t
          );
        })(a.Component),
        _ = n(9986);
      const O = new l.N5(x, [], window.pageData);
      (0, l.iC)(O),
        O.setApiRunner(o.N),
        (window.asyncRequires = x),
        (window.___emitter = f.A),
        (window.___loader = l.Zf),
        h.W7.listen(e => {
          e.location.action = e.action;
        }),
        (window.___push = e => w(e, { replace: !1 })),
        (window.___replace = e => w(e, { replace: !0 })),
        (window.___navigate = (e, t) => w(e, t)),
        g(window.location.pathname),
        (0, o.v)('onClientEntry').then(() => {
          (0, o.N)('registerServiceWorker').filter(Boolean).length > 0 && n(3459);
          const e = e =>
              a.createElement(
                s.BaseContext.Provider,
                { value: { baseuri: '/', basepath: '/' } },
                a.createElement(E.A, e),
              ),
            t = a.createContext({});
          let p = (function (e) {
              function n() {
                return e.apply(this, arguments) || this;
              }
              return (
                (0, r.A)(n, e),
                (n.prototype.render = function () {
                  const { children: e } = this.props;
                  return a.createElement(s.Location, null, n => {
                    let { location: r } = n;
                    return a.createElement(A, { location: r }, n => {
                      let { pageResources: r, location: o } = n;
                      const i = (0, l.LE)();
                      return a.createElement(
                        u.StaticQueryContext.Provider,
                        { value: i },
                        a.createElement(
                          t.Provider,
                          { value: { pageResources: r, location: o } },
                          e,
                        ),
                      );
                    });
                  });
                }),
                n
              );
            })(a.Component),
            f = (function (n) {
              function o() {
                return n.apply(this, arguments) || this;
              }
              return (
                (0, r.A)(o, n),
                (o.prototype.render = function () {
                  return a.createElement(t.Consumer, null, t => {
                    let { pageResources: n, location: r } = t;
                    return a.createElement(
                      P,
                      { location: r },
                      a.createElement(
                        c.z_,
                        { location: r, shouldUpdateScroll: S },
                        a.createElement(
                          s.Router,
                          { basepath: '', location: r, id: 'gatsby-focus-wrapper' },
                          a.createElement(
                            e,
                            Object.assign(
                              {
                                path:
                                  '/404.html' === n.page.path
                                    ? (0, _.A)(r.pathname, '')
                                    : encodeURI(n.page.matchPath || n.page.path),
                              },
                              this.props,
                              { location: r, pageResources: n },
                              n.json,
                            ),
                          ),
                        ),
                      ),
                    );
                  });
                }),
                o
              );
            })(a.Component);
          const { pagePath: d, location: h } = window;
          d &&
            '' + d !== h.pathname &&
            !(
              O.findMatchPath((0, _.A)(h.pathname, '')) ||
              '/404.html' === d ||
              d.match(/^\/404\/?$/) ||
              d.match(/^\/offline-plugin-app-shell-fallback\/?$/)
            ) &&
            (0, s.navigate)('' + d + h.search + h.hash, { replace: !0 }),
            l.Zf.loadPage(h.pathname).then(e => {
              if (!e || e.status === l.Wi.Error) {
                const t = `page resources for ${h.pathname} not found. Not rendering React`;
                if (e && e.error) throw (console.error(t), e.error);
                throw new Error(t);
              }
              window.___webpackCompilationHash = e.page.webpackCompilationHash;
              const t = (0, o.N)(
                  'wrapRootElement',
                  { element: a.createElement(f, null) },
                  a.createElement(f, null),
                  e => {
                    let { result: t } = e;
                    return { element: t };
                  },
                ).pop(),
                n = function () {
                  const e = a.useRef(!1);
                  return (
                    a.useEffect(() => {
                      e.current ||
                        ((e.current = !0),
                        performance.mark && performance.mark('onInitialClientRender'),
                        (0, o.N)('onInitialClientRender'));
                    }, []),
                    a.createElement(p, null, t)
                  );
                },
                r = (0, o.N)(
                  'replaceHydrateFunction',
                  void 0,
                  i.hydrateRoot ? i.hydrateRoot : i.hydrate,
                )[0];
              function s() {
                const e =
                  'undefined' != typeof window ? document.getElementById('___gatsby') : null;
                r === i.hydrateRoot
                  ? r(e, a.createElement(n, null))
                  : r(a.createElement(n, null), e);
              }
              const c = document;
              if (
                'complete' === c.readyState ||
                ('loading' !== c.readyState && !c.documentElement.doScroll)
              )
                setTimeout(function () {
                  s();
                }, 0);
              else {
                const e = function () {
                  c.removeEventListener('DOMContentLoaded', e, !1),
                    window.removeEventListener('load', e, !1),
                    s();
                };
                c.addEventListener('DOMContentLoaded', e, !1),
                  window.addEventListener('load', e, !1);
              }
            });
        });
    },
    6883: function (e, t, n) {
      const r = n(3122),
        { getResourceURLsForPathname: o, loadPage: a, loadPageSync: i } = n(8016).Zf;
      (t.N = function (e, t, n, s) {
        void 0 === t && (t = {});
        let c = r.map(n => {
          if (!n.plugin[e]) return;
          (t.getResourceURLsForPathname = o), (t.loadPage = a), (t.loadPageSync = i);
          const r = n.plugin[e](t, n.options);
          return r && s && (t = s({ args: t, result: r, plugin: n })), r;
        });
        return (c = c.filter(e => void 0 !== e)), c.length > 0 ? c : n ? [n] : [];
      }),
        (t.v = (e, t, n) =>
          r.reduce(
            (n, r) => (r.plugin[e] ? n.then(() => r.plugin[e](t, r.options)) : n),
            Promise.resolve(),
          ));
    },
    7035: function (e, t, n) {
      'use strict';
      t.RV = t.z_ = void 0;
      var r = n(3215);
      t.z_ = r.ScrollHandler;
      var o = n(3721);
      t.RV = o.useScrollRestoration;
    },
    7193: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          wrapRootElement: function () {
            return a;
          },
        });
      var r = n(6540),
        o = n(3973);
      function a(e) {
        let { element: t } = e;
        return r.createElement(o.c, null, t);
      }
    },
    7325: function (e) {
      'use strict';
      e.exports = Object.assign;
    },
    7424: function (e, t, n) {
      'use strict';
      var r = n(4994);
      (t.Fe = m),
        (t.Zf = function (e) {
          return m(e, g());
        }),
        (t.oo = t.Ay = void 0);
      var o = r(n(4893)),
        a = r(n(2475)),
        i = r(n(6221)),
        s = r(n(4634)),
        c = r(n(5556)),
        u = r(n(6540)),
        l = n(5702),
        p = n(7900),
        f = n(2323);
      t.Rr = f.parsePath;
      var d = [
          'to',
          'getProps',
          'onClick',
          'onMouseEnter',
          'activeClassName',
          'activeStyle',
          'innerRef',
          'partiallyActive',
          'state',
          'replace',
          '_location',
        ],
        h = function (e) {
          return null == e ? void 0 : e.startsWith('/');
        };
      function m(e, t) {
        var n, r;
        if ((void 0 === t && (t = v()), !y(e))) return e;
        if (e.startsWith('./') || e.startsWith('../')) return e;
        var o = null !== (n = null !== (r = t) && void 0 !== r ? r : g()) && void 0 !== n ? n : '/';
        return (
          '' +
          (null != o && o.endsWith('/') ? o.slice(0, -1) : o) +
          (e.startsWith('/') ? e : '/' + e)
        );
      }
      var g = function () {
          return '';
        },
        v = function () {
          return '';
        },
        y = function (e) {
          return e && !e.startsWith('http://') && !e.startsWith('https://') && !e.startsWith('//');
        };
      var b = function (e, t) {
          return 'number' == typeof e
            ? e
            : y(e)
            ? h(e)
              ? m(e)
              : (function (e, t) {
                  return h(e) ? e : (0, p.resolve)(e, t);
                })(e, t)
            : e;
        },
        w = {
          activeClassName: c.default.string,
          activeStyle: c.default.object,
          partiallyActive: c.default.bool,
        };
      function S(e) {
        return u.default.createElement(l.Location, null, function (t) {
          var n = t.location;
          return u.default.createElement(k, (0, s.default)({}, e, { _location: n }));
        });
      }
      var k = (function (e) {
        function t(t) {
          var n;
          (n = e.call(this, t) || this).defaultGetProps = function (e) {
            var t = e.isPartiallyCurrent,
              r = e.isCurrent;
            return (n.props.partiallyActive ? t : r)
              ? {
                  className: [n.props.className, n.props.activeClassName].filter(Boolean).join(' '),
                  style: (0, s.default)({}, n.props.style, n.props.activeStyle),
                }
              : null;
          };
          var r = !1;
          return (
            'undefined' != typeof window && window.IntersectionObserver && (r = !0),
            (n.state = { IOSupported: r }),
            (n.handleRef = n.handleRef.bind((0, a.default)(n))),
            n
          );
        }
        (0, i.default)(t, e);
        var n = t.prototype;
        return (
          (n._prefetch = function () {
            var e = window.location.pathname;
            this.props._location &&
              this.props._location.pathname &&
              (e = this.props._location.pathname);
            var t = b(this.props.to, e),
              n = (0, f.parsePath)(t).pathname;
            e !== n && ___loader.enqueue(n);
          }),
          (n.componentDidUpdate = function (e, t) {
            this.props.to === e.to || this.state.IOSupported || this._prefetch();
          }),
          (n.componentDidMount = function () {
            this.state.IOSupported || this._prefetch();
          }),
          (n.componentWillUnmount = function () {
            if (this.io) {
              var e = this.io,
                t = e.instance,
                n = e.el;
              t.unobserve(n), t.disconnect();
            }
          }),
          (n.handleRef = function (e) {
            var t,
              n,
              r,
              o = this;
            this.props.innerRef && this.props.innerRef.hasOwnProperty('current')
              ? (this.props.innerRef.current = e)
              : this.props.innerRef && this.props.innerRef(e),
              this.state.IOSupported &&
                e &&
                (this.io =
                  ((t = e),
                  (n = function () {
                    o._prefetch();
                  }),
                  (r = new window.IntersectionObserver(function (e) {
                    e.forEach(function (e) {
                      t === e.target &&
                        (e.isIntersecting || e.intersectionRatio > 0) &&
                        (r.unobserve(t), r.disconnect(), n());
                    });
                  })).observe(t),
                  { instance: r, el: t }));
          }),
          (n.render = function () {
            var e = this,
              t = this.props,
              n = t.to,
              r = t.getProps,
              a = void 0 === r ? this.defaultGetProps : r,
              i = t.onClick,
              c = t.onMouseEnter,
              p = (t.activeClassName, t.activeStyle, t.innerRef, t.partiallyActive, t.state),
              h = t.replace,
              m = t._location,
              g = (0, o.default)(t, d);
            var v = b(n, m.pathname);
            return y(v)
              ? u.default.createElement(
                  l.Link,
                  (0, s.default)(
                    {
                      to: v,
                      state: p,
                      getProps: a,
                      innerRef: this.handleRef,
                      onMouseEnter: function (e) {
                        c && c(e), ___loader.hovering((0, f.parsePath)(v).pathname);
                      },
                      onClick: function (t) {
                        if (
                          (i && i(t),
                          !(
                            0 !== t.button ||
                            e.props.target ||
                            t.defaultPrevented ||
                            t.metaKey ||
                            t.altKey ||
                            t.ctrlKey ||
                            t.shiftKey
                          ))
                        ) {
                          t.preventDefault();
                          var n = h,
                            r = encodeURI(v) === m.pathname;
                          'boolean' != typeof h && r && (n = !0),
                            window.___navigate(v, { state: p, replace: n });
                        }
                        return !0;
                      },
                    },
                    g,
                  ),
                )
              : u.default.createElement('a', (0, s.default)({ href: v }, g));
          }),
          t
        );
      })(u.default.Component);
      k.propTypes = (0, s.default)({}, w, {
        onClick: c.default.func,
        to: c.default.string.isRequired,
        replace: c.default.bool,
        state: c.default.object,
      });
      var C = u.default.forwardRef(function (e, t) {
        return u.default.createElement(S, (0, s.default)({ innerRef: t }, e));
      });
      t.Ay = C;
      t.oo = function (e, t) {
        window.___navigate(b(e, window.location.pathname), t);
      };
    },
    7807: function (e, t) {
      'use strict';
      t.registerServiceWorker = function () {
        return 'true' !== {}.GATSBY_IS_PREVIEW;
      };
      var n = /^(stylesheet|preload)$/,
        r = [];
      function o(e, t) {
        if (!window.___swUpdated && 'serviceWorker' in navigator) {
          var n = navigator.serviceWorker;
          if (null === n.controller) r.push(e);
          else {
            var o = t(e);
            n.controller.postMessage({ gatsbyApi: 'setPathResources', path: e, resources: o });
          }
        }
      }
      (t.onServiceWorkerActive = function (e) {
        var t = e.getResourceURLsForPathname,
          o = e.serviceWorker;
        if ('true' !== {}.GATSBY_IS_PREVIEW)
          if (window.___swUpdated) o.active.postMessage({ gatsbyApi: 'clearPathResources' });
          else {
            var a = document.querySelectorAll(
                '\n    head > script[src],\n    head > link[href],\n    head > style[data-href]\n  ',
              ),
              i = [].slice
                .call(a)
                .filter(function (e) {
                  return 'LINK' !== e.tagName || n.test(e.getAttribute('rel'));
                })
                .map(function (e) {
                  return e.src || e.href || e.getAttribute('data-href');
                }),
              s = [];
            r.forEach(function (e) {
              var n = t(e);
              s.push.apply(s, n),
                o.active.postMessage({ gatsbyApi: 'setPathResources', path: e, resources: n });
            }),
              [].concat(i, s).forEach(function (e) {
                var t = document.createElement('link');
                (t.rel = 'prefetch'),
                  (t.href = e),
                  (t.onload = t.remove),
                  (t.onerror = t.remove),
                  document.head.appendChild(t);
              });
          }
      }),
        (t.onRouteUpdate = function (e) {
          var t = e.location,
            n = e.getResourceURLsForPathname;
          o(t.pathname.replace('', ''), n),
            'serviceWorker' in navigator &&
              null !== navigator.serviceWorker.controller &&
              navigator.serviceWorker.controller.postMessage({ gatsbyApi: 'enableOfflineShell' });
        }),
        (t.onPostPrefetchPathname = function (e) {
          o(e.pathname, e.getResourceURLsForPathname);
        });
    },
    7900: function (e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.shallowCompare =
          t.validateRedirect =
          t.insertParams =
          t.resolve =
          t.match =
          t.pick =
          t.startsWith =
            void 0);
      var r,
        o = n(311),
        a = (r = o) && r.__esModule ? r : { default: r };
      var i = function (e, t) {
          return e.substr(0, t.length) === t;
        },
        s = function (e, t) {
          for (
            var n = void 0,
              r = void 0,
              o = t.split('?')[0],
              i = d(o),
              s = '' === i[0],
              u = f(e),
              p = 0,
              h = u.length;
            p < h;
            p++
          ) {
            var g = !1,
              v = u[p].route;
            if (v.default) r = { route: v, params: {}, uri: t };
            else {
              for (var y = d(v.path), b = {}, w = Math.max(i.length, y.length), S = 0; S < w; S++) {
                var k = y[S],
                  C = i[S];
                if (l(k)) {
                  b[k.slice(1) || '*'] = i.slice(S).map(decodeURIComponent).join('/');
                  break;
                }
                if (void 0 === C) {
                  g = !0;
                  break;
                }
                var P = c.exec(k);
                if (P && !s) {
                  -1 === m.indexOf(P[1]) || (0, a.default)(!1);
                  var E = decodeURIComponent(C);
                  b[P[1]] = E;
                } else if (k !== C) {
                  g = !0;
                  break;
                }
              }
              if (!g) {
                n = { route: v, params: b, uri: '/' + i.slice(0, S).join('/') };
                break;
              }
            }
          }
          return n || r || null;
        },
        c = /^:(.+)/,
        u = function (e) {
          return c.test(e);
        },
        l = function (e) {
          return e && '*' === e[0];
        },
        p = function (e, t) {
          return {
            route: e,
            score: e.default
              ? 0
              : d(e.path).reduce(function (e, t) {
                  return (
                    (e += 4),
                    !(function (e) {
                      return '' === e;
                    })(t)
                      ? u(t)
                        ? (e += 2)
                        : l(t)
                        ? (e -= 5)
                        : (e += 3)
                      : (e += 1),
                    e
                  );
                }, 0),
            index: t,
          };
        },
        f = function (e) {
          return e.map(p).sort(function (e, t) {
            return e.score < t.score ? 1 : e.score > t.score ? -1 : e.index - t.index;
          });
        },
        d = function (e) {
          return e.replace(/(^\/+|\/+$)/g, '').split('/');
        },
        h = function (e) {
          for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
          return (
            e +
            ((n = n.filter(function (e) {
              return e && e.length > 0;
            })) && n.length > 0
              ? '?' + n.join('&')
              : '')
          );
        },
        m = ['uri', 'path'];
      (t.startsWith = i),
        (t.pick = s),
        (t.match = function (e, t) {
          return s([{ path: e }], t);
        }),
        (t.resolve = function (e, t) {
          if (i(e, '/')) return e;
          var n = e.split('?'),
            r = n[0],
            o = n[1],
            a = t.split('?')[0],
            s = d(r),
            c = d(a);
          if ('' === s[0]) return h(a, o);
          if (!i(s[0], '.')) {
            var u = c.concat(s).join('/');
            return h(('/' === a ? '' : '/') + u, o);
          }
          for (var l = c.concat(s), p = [], f = 0, m = l.length; f < m; f++) {
            var g = l[f];
            '..' === g ? p.pop() : '.' !== g && p.push(g);
          }
          return h('/' + p.join('/'), o);
        }),
        (t.insertParams = function (e, t) {
          var n = e.split('?'),
            r = n[0],
            o = n[1],
            a = void 0 === o ? '' : o,
            i =
              '/' +
              d(r)
                .map(function (e) {
                  var n = c.exec(e);
                  return n ? t[n[1]] : e;
                })
                .join('/'),
            s = t.location,
            u = (s = void 0 === s ? {} : s).search,
            l = (void 0 === u ? '' : u).split('?')[1] || '';
          return (i = h(i, a, l));
        }),
        (t.validateRedirect = function (e, t) {
          var n = function (e) {
            return u(e);
          };
          return d(e).filter(n).sort().join('/') === d(t).filter(n).sort().join('/');
        }),
        (t.shallowCompare = function (e, t) {
          var n = Object.keys(e);
          return (
            n.length === Object.keys(t).length &&
            n.every(function (n) {
              return t.hasOwnProperty(n) && e[n] === t[n];
            })
          );
        });
    },
    8016: function (e, t, n) {
      'use strict';
      n.d(t, {
        Wi: function () {
          return l;
        },
        N5: function () {
          return y;
        },
        Ay: function () {
          return S;
        },
        LE: function () {
          return k;
        },
        Zf: function () {
          return w;
        },
        iC: function () {
          return b;
        },
      });
      var r = n(5540),
        o = n(4506);
      const a = (function (e) {
          if ('undefined' == typeof document) return !1;
          const t = document.createElement('link');
          try {
            if (t.relList && 'function' == typeof t.relList.supports) return t.relList.supports(e);
          } catch (n) {
            return !1;
          }
          return !1;
        })('prefetch')
          ? function (e, t) {
              return new Promise((n, r) => {
                if ('undefined' == typeof document) return void r();
                const o = document.createElement('link');
                o.setAttribute('rel', 'prefetch'),
                  o.setAttribute('href', e),
                  Object.keys(t).forEach(e => {
                    o.setAttribute(e, t[e]);
                  }),
                  (o.onload = n),
                  (o.onerror = r);
                (
                  document.getElementsByTagName('head')[0] ||
                  document.getElementsByName('script')[0].parentNode
                ).appendChild(o);
              });
            }
          : function (e) {
              return new Promise((t, n) => {
                const r = new XMLHttpRequest();
                r.open('GET', e, !0),
                  (r.onload = () => {
                    200 === r.status ? t() : n();
                  }),
                  r.send(null);
              });
            },
        i = {};
      var s = function (e, t) {
          return new Promise(n => {
            i[e]
              ? n()
              : a(e, t)
                  .then(() => {
                    n(), (i[e] = !0);
                  })
                  .catch(() => {});
          });
        },
        c = n(1302),
        u = n(9310);
      const l = { Error: 'error', Success: 'success' },
        p = e => (e && e.default) || e,
        f = e =>
          `/page-data/${
            '/' === e
              ? 'index'
              : (e => ((e = '/' === e[0] ? e.slice(1) : e).endsWith('/') ? e.slice(0, -1) : e))(e)
          }/page-data.json`;
      function d(e, t) {
        return (
          void 0 === t && (t = 'GET'),
          new Promise((n, r) => {
            const o = new XMLHttpRequest();
            o.open(t, e, !0),
              (o.onreadystatechange = () => {
                4 == o.readyState && n(o);
              }),
              o.send(null);
          })
        );
      }
      const h = function (e, t) {
        void 0 === t && (t = null);
        const n = {
          componentChunkName: e.componentChunkName,
          path: e.path,
          webpackCompilationHash: e.webpackCompilationHash,
          matchPath: e.matchPath,
          staticQueryHashes: e.staticQueryHashes,
        };
        return { component: t, json: e.result, page: n };
      };
      let m = (function () {
        function e(e, t) {
          (this.inFlightNetworkRequests = new Map()),
            (this.pageDb = new Map()),
            (this.inFlightDb = new Map()),
            (this.staticQueryDb = {}),
            (this.pageDataDb = new Map()),
            (this.prefetchTriggered = new Set()),
            (this.prefetchCompleted = new Set()),
            (this.loadComponent = e),
            (0, u.QX)(t);
        }
        var t = e.prototype;
        return (
          (t.memoizedGet = function (e) {
            let t = this.inFlightNetworkRequests.get(e);
            return (
              t || ((t = d(e, 'GET')), this.inFlightNetworkRequests.set(e, t)),
              t
                .then(t => (this.inFlightNetworkRequests.delete(e), t))
                .catch(t => {
                  throw (this.inFlightNetworkRequests.delete(e), t);
                })
            );
          }),
          (t.setApiRunner = function (e) {
            (this.apiRunner = e),
              (this.prefetchDisabled = e('disableCorePrefetching').some(e => e));
          }),
          (t.fetchPageDataJson = function (e) {
            const { pagePath: t, retries: n = 0 } = e,
              r = f(t);
            return this.memoizedGet(r).then(r => {
              const { status: o, responseText: a } = r;
              if (200 === o)
                try {
                  const t = JSON.parse(a);
                  if (void 0 === t.path) throw new Error('not a valid pageData response');
                  return Object.assign(e, { status: l.Success, payload: t });
                } catch (i) {}
              return 404 === o || 200 === o
                ? '/404.html' === t
                  ? Object.assign(e, { status: l.Error })
                  : this.fetchPageDataJson(
                      Object.assign(e, { pagePath: '/404.html', notFound: !0 }),
                    )
                : 500 === o
                ? Object.assign(e, { status: l.Error })
                : n < 3
                ? this.fetchPageDataJson(Object.assign(e, { retries: n + 1 }))
                : Object.assign(e, { status: l.Error });
            });
          }),
          (t.loadPageDataJson = function (e) {
            const t = (0, u.Hh)(e);
            if (this.pageDataDb.has(t)) {
              const e = this.pageDataDb.get(t);
              return Promise.resolve(e);
            }
            return this.fetchPageDataJson({ pagePath: t }).then(
              e => (this.pageDataDb.set(t, e), e),
            );
          }),
          (t.findMatchPath = function (e) {
            return (0, u.Yl)(e);
          }),
          (t.loadPage = function (e) {
            const t = (0, u.Hh)(e);
            if (this.pageDb.has(t)) {
              const e = this.pageDb.get(t);
              return e.error ? { error: e.error, status: e.status } : Promise.resolve(e.payload);
            }
            if (this.inFlightDb.has(t)) return this.inFlightDb.get(t);
            const n = Promise.all([this.loadAppData(), this.loadPageDataJson(t)]).then(e => {
              const n = e[1];
              if (n.status === l.Error) return { status: l.Error };
              let r = n.payload;
              const { componentChunkName: o, staticQueryHashes: a = [] } = r,
                i = {},
                s = this.loadComponent(o).then(t => {
                  let o;
                  return (
                    (i.createdAt = new Date()),
                    !t || t instanceof Error
                      ? ((i.status = l.Error), (i.error = t))
                      : ((i.status = l.Success),
                        !0 === n.notFound && (i.notFound = !0),
                        (r = Object.assign(r, {
                          webpackCompilationHash: e[0] ? e[0].webpackCompilationHash : '',
                        })),
                        (o = h(r, t))),
                    o
                  );
                }),
                u = Promise.all(
                  a.map(e => {
                    if (this.staticQueryDb[e]) {
                      const t = this.staticQueryDb[e];
                      return { staticQueryHash: e, jsonPayload: t };
                    }
                    return this.memoizedGet(`/page-data/sq/d/${e}.json`)
                      .then(t => {
                        const n = JSON.parse(t.responseText);
                        return { staticQueryHash: e, jsonPayload: n };
                      })
                      .catch(() => {
                        throw new Error(`We couldn't load "/page-data/sq/d/${e}.json"`);
                      });
                  }),
                ).then(e => {
                  const t = {};
                  return (
                    e.forEach(e => {
                      let { staticQueryHash: n, jsonPayload: r } = e;
                      (t[n] = r), (this.staticQueryDb[n] = r);
                    }),
                    t
                  );
                });
              return Promise.all([s, u])
                .then(e => {
                  let n,
                    [r, o] = e;
                  return (
                    r &&
                      ((n = { ...r, staticQueryResults: o }),
                      (i.payload = n),
                      c.A.emit('onPostLoadPageResources', { page: n, pageResources: n })),
                    this.pageDb.set(t, i),
                    i.error ? { error: i.error, status: i.status } : n
                  );
                })
                .catch(e => ({ error: e, status: l.Error }));
            });
            return (
              n
                .then(() => {
                  this.inFlightDb.delete(t);
                })
                .catch(e => {
                  throw (this.inFlightDb.delete(t), e);
                }),
              this.inFlightDb.set(t, n),
              n
            );
          }),
          (t.loadPageSync = function (e, t) {
            void 0 === t && (t = {});
            const n = (0, u.Hh)(e);
            if (this.pageDb.has(n)) {
              var r;
              const e = this.pageDb.get(n);
              if (e.payload) return e.payload;
              if (null !== (r = t) && void 0 !== r && r.withErrorDetails)
                return { error: e.error, status: e.status };
            }
          }),
          (t.shouldPrefetch = function (e) {
            return (
              !!(() => {
                if ('connection' in navigator && void 0 !== navigator.connection) {
                  if ((navigator.connection.effectiveType || '').includes('2g')) return !1;
                  if (navigator.connection.saveData) return !1;
                }
                return !0;
              })() && !this.pageDb.has(e)
            );
          }),
          (t.prefetch = function (e) {
            if (!this.shouldPrefetch(e)) return !1;
            if (
              (this.prefetchTriggered.has(e) ||
                (this.apiRunner('onPrefetchPathname', { pathname: e }),
                this.prefetchTriggered.add(e)),
              this.prefetchDisabled)
            )
              return !1;
            const t = (0, u.Hh)(e);
            return (
              this.doPrefetch(t).then(() => {
                this.prefetchCompleted.has(e) ||
                  (this.apiRunner('onPostPrefetchPathname', { pathname: e }),
                  this.prefetchCompleted.add(e));
              }),
              !0
            );
          }),
          (t.doPrefetch = function (e) {
            const t = f(e);
            return s(t, { crossOrigin: 'anonymous', as: 'fetch' }).then(() =>
              this.loadPageDataJson(e),
            );
          }),
          (t.hovering = function (e) {
            this.loadPage(e);
          }),
          (t.getResourceURLsForPathname = function (e) {
            const t = (0, u.Hh)(e),
              n = this.pageDataDb.get(t);
            if (n) {
              const e = h(n.payload);
              return [].concat((0, o.A)(g(e.page.componentChunkName)), [f(t)]);
            }
            return null;
          }),
          (t.isPageNotFound = function (e) {
            const t = (0, u.Hh)(e),
              n = this.pageDb.get(t);
            return !n || n.notFound;
          }),
          (t.loadAppData = function (e) {
            return (
              void 0 === e && (e = 0),
              this.memoizedGet('/page-data/app-data.json').then(t => {
                const { status: n, responseText: r } = t;
                let o;
                if (200 !== n && e < 3) return this.loadAppData(e + 1);
                if (200 === n)
                  try {
                    const e = JSON.parse(r);
                    if (void 0 === e.webpackCompilationHash)
                      throw new Error('not a valid app-data response');
                    o = e;
                  } catch (a) {}
                return o;
              })
            );
          }),
          e
        );
      })();
      const g = e => (window.___chunkMapping[e] || []).map(e => '' + e);
      let v,
        y = (function (e) {
          function t(t, n, r) {
            var o;
            return (
              (o =
                e.call(
                  this,
                  e => {
                    if (!t.components[e])
                      throw new Error(
                        `We couldn't find the correct component chunk with the name ${e}`,
                      );
                    return t.components[e]()
                      .then(p)
                      .catch(e => e);
                  },
                  n,
                ) || this),
              r && o.pageDataDb.set(r.path, { pagePath: r.path, payload: r, status: 'success' }),
              o
            );
          }
          (0, r.A)(t, e);
          var n = t.prototype;
          return (
            (n.doPrefetch = function (t) {
              return e.prototype.doPrefetch.call(this, t).then(e => {
                if (e.status !== l.Success) return Promise.resolve();
                const t = e.payload,
                  n = t.componentChunkName,
                  r = g(n);
                return Promise.all(r.map(s)).then(() => t);
              });
            }),
            (n.loadPageDataJson = function (t) {
              return e.prototype.loadPageDataJson
                .call(this, t)
                .then(e =>
                  e.notFound
                    ? d(t, 'HEAD').then(t => (200 === t.status ? { status: l.Error } : e))
                    : e,
                );
            }),
            t
          );
        })(m);
      const b = e => {
          v = e;
        },
        w = {
          enqueue: e => v.prefetch(e),
          getResourceURLsForPathname: e => v.getResourceURLsForPathname(e),
          loadPage: e => v.loadPage(e),
          loadPageSync: function (e, t) {
            return void 0 === t && (t = {}), v.loadPageSync(e, t);
          },
          prefetch: e => v.prefetch(e),
          isPageNotFound: e => v.isPageNotFound(e),
          hovering: e => v.hovering(e),
          loadAppData: () => v.loadAppData(),
        };
      var S = w;
      function k() {
        return v ? v.staticQueryDb : {};
      }
    },
    8534: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          onInitialClientRender: function () {
            return s;
          },
          onRouteUpdate: function () {
            return i;
          },
        });
      const r = new Set();
      function o(e, t) {
        let n = null;
        return function () {
          n && clearTimeout(n);
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
          n = setTimeout.apply(void 0, [e, t].concat(o));
        };
      }
      function a() {
        function e(e) {
          r.has(e.name) ||
            (r.add(e.name),
            (function (e) {
              let { name: t, value: n, id: r } = e;
              window.ga('send', 'event', {
                eventCategory: 'Web Vitals',
                eventAction: t,
                eventLabel: r,
                eventValue: Math.round('CLS' === t ? 1e3 * n : n),
                nonInteraction: !0,
                transport: 'beacon',
              });
            })(e));
        }
        return n
          .e(113)
          .then(n.bind(n, 7113))
          .then(t => {
            let { getLCP: n, getFID: r, getCLS: a } = t;
            const i = o(e, 3e3),
              s = e,
              c = o(e, 3e3);
            a(i, !0), r(s, !0), n(c, !0);
          });
      }
      const i = function (e, t) {
        let { location: n } = e;
        void 0 === t && (t = {});
        const r = window.ga;
        if ('function' != typeof r) return null;
        if (
          n &&
          void 0 !== window.excludeGAPaths &&
          window.excludeGAPaths.some(e => e.test(n.pathname))
        )
          return null;
        const o = Math.max(32, t.pageTransitionDelay || 0);
        return (
          setTimeout(() => {
            const e = n ? n.pathname + n.search + n.hash : void 0;
            r('set', 'page', e), r('send', 'pageview');
          }, o),
          null
        );
      };
      function s(e, t) {
        'function' == typeof ga && t.enableWebVitalsTracking && a();
      }
    },
    8829: function () {},
    8997: function (e, t, n) {
      'use strict';
      var r = n(2307),
        o = r.DEFAULT_OPTIONS,
        a = r.imageClass,
        i = r.imageBackgroundClass,
        s = r.imageWrapperClass;
      t.onRouteUpdate = function (e, t) {
        for (
          var n = Object.assign({}, o, t),
            r = document.querySelectorAll('.' + s),
            c = function (e) {
              var t = r[e],
                o = t.querySelector('.' + i),
                s = t.querySelector('.' + a),
                c = function () {
                  (o.style.transition = 'opacity 0.5s 0.5s'),
                    (s.style.transition = 'opacity 0.5s'),
                    u();
                },
                u = function e() {
                  (o.style.opacity = 0),
                    (s.style.opacity = 1),
                    (s.style.color = 'inherit'),
                    (s.style.boxShadow = 'inset 0px 0px 0px 400px ' + n.backgroundColor),
                    s.removeEventListener('load', c),
                    s.removeEventListener('error', e);
                };
              (s.style.opacity = 0),
                s.addEventListener('load', c),
                s.addEventListener('error', u),
                s.complete && u();
            },
            u = 0;
          u < r.length;
          u++
        )
          c(u);
      };
    },
    9310: function (e, t, n) {
      'use strict';
      n.d(t, {
        Yl: function () {
          return f;
        },
        Hh: function () {
          return h;
        },
        UA: function () {
          return d;
        },
        QX: function () {
          return p;
        },
      });
      var r = n(7900),
        o = n(9986),
        a = e =>
          void 0 === e ? e : '/' === e ? '/' : '/' === e.charAt(e.length - 1) ? e.slice(0, -1) : e,
        i = n(4109);
      const s = new Map();
      let c = [];
      const u = e => {
        const t = decodeURIComponent(e);
        return (0, o.A)(t, decodeURIComponent('')).split('#')[0].split('?')[0];
      };
      function l(e) {
        return e.startsWith('/') || e.startsWith('https://') || e.startsWith('http://')
          ? e
          : new URL(e, window.location.href + (window.location.href.endsWith('/') ? '' : '/'))
              .pathname;
      }
      const p = e => {
          c = e;
        },
        f = e => {
          const t = m(e),
            n = c.map(e => {
              let { path: t, matchPath: n } = e;
              return { path: n, originalPath: t };
            }),
            o = (0, r.pick)(n, t);
          return o ? a(o.route.originalPath) : null;
        },
        d = e => {
          const t = m(e),
            n = c.map(e => {
              let { path: t, matchPath: n } = e;
              return { path: n, originalPath: t };
            }),
            o = (0, r.pick)(n, t);
          return o ? o.params : {};
        },
        h = e => {
          const t = u(l(e));
          if (s.has(t)) return s.get(t);
          const n = (0, i.X)(e);
          if (n) return h(n.toPath);
          let r = f(t);
          return r || (r = m(e)), s.set(t, r), r;
        },
        m = e => {
          let t = u(l(e));
          return '/index.html' === t && (t = '/'), (t = a(t)), t;
        };
    },
    9576: function (e, t, n) {
      t.components = {
        'component---cache-caches-gatsby-plugin-offline-app-shell-js': () =>
          n.e(681).then(n.bind(n, 8826)),
        'component---src-pages-404-js': () =>
          Promise.all([n.e(559), n.e(125)]).then(n.bind(n, 7412)),
        'component---src-pages-archive-js': () =>
          Promise.all([n.e(559), n.e(231)]).then(n.bind(n, 4342)),
        'component---src-pages-index-js': () =>
          Promise.all([n.e(559), n.e(293)]).then(n.bind(n, 5608)),
        'component---src-pages-pensieve-index-js': () =>
          Promise.all([n.e(559), n.e(29)]).then(n.bind(n, 934)),
        'component---src-pages-pensieve-tags-js': () =>
          Promise.all([n.e(559), n.e(846)]).then(n.bind(n, 7653)),
        'component---src-templates-post-js': () =>
          Promise.all([n.e(559), n.e(480)]).then(n.bind(n, 7081)),
        'component---src-templates-tag-js': () =>
          Promise.all([n.e(559), n.e(502)]).then(n.bind(n, 4843)),
      };
    },
    9652: function (e, t, n) {
      'use strict';
      var r = n(4994)(n(6540)),
        o = n(1252);
      t.wrapRootElement = function (e, t) {
        var n = e.element;
        return r.default.createElement(
          o.StyleSheetManager,
          { disableVendorPrefixes: !0 === (null == t ? void 0 : t.disableVendorPrefixes) },
          n,
        );
      };
    },
    9986: function (e, t, n) {
      'use strict';
      function r(e, t) {
        return (
          void 0 === t && (t = ''),
          t ? (e === t ? '/' : e.startsWith(`${t}/`) ? e.slice(t.length) : e) : e
        );
      }
      n.d(t, {
        A: function () {
          return r;
        },
      });
    },
  },
  function (e) {
    e.O(0, [593], function () {
      return (t = 6838), e((e.s = t));
      var t;
    });
    e.O();
  },
]);
//# sourceMappingURL=app-597cc687d48942f730a9.js.map
