(self.webpackChunkv4 = self.webpackChunkv4 || []).push([
  [480],
  {
    249: function (e, t, n) {
      var r = n(5539)(function (e, t, n) {
        return e + (n ? '-' : '') + t.toLowerCase();
      });
      e.exports = r;
    },
    346: function (e) {
      e.exports = function (e) {
        return null != e && 'object' == typeof e;
      };
    },
    659: function (e, t, n) {
      var r = n(1873),
        o = Object.prototype,
        u = o.hasOwnProperty,
        a = o.toString,
        i = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        var t = u.call(e, i),
          n = e[i];
        try {
          e[i] = void 0;
          var r = !0;
        } catch (c) {}
        var o = a.call(e);
        return r && (t ? (e[i] = n) : delete e[i]), o;
      };
    },
    828: function (e, t, n) {
      var r = n(4647),
        o = n(3222),
        u = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        a = RegExp('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', 'g');
      e.exports = function (e) {
        return (e = o(e)) && e.replace(u, r).replace(a, '');
      };
    },
    882: function (e) {
      e.exports = function (e, t, n, r) {
        var o = -1,
          u = null == e ? 0 : e.length;
        for (r && u && (n = e[++o]); ++o < u; ) n = t(n, e[o], o, e);
        return n;
      };
    },
    1733: function (e) {
      var t = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      e.exports = function (e) {
        return e.match(t) || [];
      };
    },
    1873: function (e, t, n) {
      var r = n(9325).Symbol;
      e.exports = r;
    },
    2225: function (e) {
      var t = '\\ud800-\\udfff',
        n = '\\u2700-\\u27bf',
        r = 'a-z\\xdf-\\xf6\\xf8-\\xff',
        o = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
        u =
          '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
        a = '[' + u + ']',
        i = '\\d+',
        c = '[' + n + ']',
        f = '[' + r + ']',
        l = '[^' + t + u + i + n + r + o + ']',
        s = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        d = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        x = '[' + o + ']',
        p = '(?:' + f + '|' + l + ')',
        m = '(?:' + x + '|' + l + ')',
        g = "(?:['’](?:d|ll|m|re|s|t|ve))?",
        v = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
        h = '(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?',
        b = '[\\ufe0e\\ufe0f]?',
        y = b + h + ('(?:\\u200d(?:' + ['[^' + t + ']', s, d].join('|') + ')' + b + h + ')*'),
        E = '(?:' + [c, s, d].join('|') + ')' + y,
        A = RegExp(
          [
            x + '?' + f + '+' + g + '(?=' + [a, x, '$'].join('|') + ')',
            m + '+' + v + '(?=' + [a, x + p, '$'].join('|') + ')',
            x + '?' + p + '+' + g,
            x + '+' + v,
            '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
            '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
            i,
            E,
          ].join('|'),
          'g',
        );
      e.exports = function (e) {
        return e.match(A) || [];
      };
    },
    2552: function (e, t, n) {
      var r = n(1873),
        o = n(659),
        u = n(9350),
        a = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : a && a in Object(e)
          ? o(e)
          : u(e);
      };
    },
    3222: function (e, t, n) {
      var r = n(7556);
      e.exports = function (e) {
        return null == e ? '' : r(e);
      };
    },
    4394: function (e, t, n) {
      var r = n(2552),
        o = n(346);
      e.exports = function (e) {
        return 'symbol' == typeof e || (o(e) && '[object Symbol]' == r(e));
      };
    },
    4552: function (e) {
      e.exports = function (e) {
        return function (t) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    4647: function (e, t, n) {
      var r = n(4552)({
        À: 'A',
        Á: 'A',
        Â: 'A',
        Ã: 'A',
        Ä: 'A',
        Å: 'A',
        à: 'a',
        á: 'a',
        â: 'a',
        ã: 'a',
        ä: 'a',
        å: 'a',
        Ç: 'C',
        ç: 'c',
        Ð: 'D',
        ð: 'd',
        È: 'E',
        É: 'E',
        Ê: 'E',
        Ë: 'E',
        è: 'e',
        é: 'e',
        ê: 'e',
        ë: 'e',
        Ì: 'I',
        Í: 'I',
        Î: 'I',
        Ï: 'I',
        ì: 'i',
        í: 'i',
        î: 'i',
        ï: 'i',
        Ñ: 'N',
        ñ: 'n',
        Ò: 'O',
        Ó: 'O',
        Ô: 'O',
        Õ: 'O',
        Ö: 'O',
        Ø: 'O',
        ò: 'o',
        ó: 'o',
        ô: 'o',
        õ: 'o',
        ö: 'o',
        ø: 'o',
        Ù: 'U',
        Ú: 'U',
        Û: 'U',
        Ü: 'U',
        ù: 'u',
        ú: 'u',
        û: 'u',
        ü: 'u',
        Ý: 'Y',
        ý: 'y',
        ÿ: 'y',
        Æ: 'Ae',
        æ: 'ae',
        Þ: 'Th',
        þ: 'th',
        ß: 'ss',
        Ā: 'A',
        Ă: 'A',
        Ą: 'A',
        ā: 'a',
        ă: 'a',
        ą: 'a',
        Ć: 'C',
        Ĉ: 'C',
        Ċ: 'C',
        Č: 'C',
        ć: 'c',
        ĉ: 'c',
        ċ: 'c',
        č: 'c',
        Ď: 'D',
        Đ: 'D',
        ď: 'd',
        đ: 'd',
        Ē: 'E',
        Ĕ: 'E',
        Ė: 'E',
        Ę: 'E',
        Ě: 'E',
        ē: 'e',
        ĕ: 'e',
        ė: 'e',
        ę: 'e',
        ě: 'e',
        Ĝ: 'G',
        Ğ: 'G',
        Ġ: 'G',
        Ģ: 'G',
        ĝ: 'g',
        ğ: 'g',
        ġ: 'g',
        ģ: 'g',
        Ĥ: 'H',
        Ħ: 'H',
        ĥ: 'h',
        ħ: 'h',
        Ĩ: 'I',
        Ī: 'I',
        Ĭ: 'I',
        Į: 'I',
        İ: 'I',
        ĩ: 'i',
        ī: 'i',
        ĭ: 'i',
        į: 'i',
        ı: 'i',
        Ĵ: 'J',
        ĵ: 'j',
        Ķ: 'K',
        ķ: 'k',
        ĸ: 'k',
        Ĺ: 'L',
        Ļ: 'L',
        Ľ: 'L',
        Ŀ: 'L',
        Ł: 'L',
        ĺ: 'l',
        ļ: 'l',
        ľ: 'l',
        ŀ: 'l',
        ł: 'l',
        Ń: 'N',
        Ņ: 'N',
        Ň: 'N',
        Ŋ: 'N',
        ń: 'n',
        ņ: 'n',
        ň: 'n',
        ŋ: 'n',
        Ō: 'O',
        Ŏ: 'O',
        Ő: 'O',
        ō: 'o',
        ŏ: 'o',
        ő: 'o',
        Ŕ: 'R',
        Ŗ: 'R',
        Ř: 'R',
        ŕ: 'r',
        ŗ: 'r',
        ř: 'r',
        Ś: 'S',
        Ŝ: 'S',
        Ş: 'S',
        Š: 'S',
        ś: 's',
        ŝ: 's',
        ş: 's',
        š: 's',
        Ţ: 'T',
        Ť: 'T',
        Ŧ: 'T',
        ţ: 't',
        ť: 't',
        ŧ: 't',
        Ũ: 'U',
        Ū: 'U',
        Ŭ: 'U',
        Ů: 'U',
        Ű: 'U',
        Ų: 'U',
        ũ: 'u',
        ū: 'u',
        ŭ: 'u',
        ů: 'u',
        ű: 'u',
        ų: 'u',
        Ŵ: 'W',
        ŵ: 'w',
        Ŷ: 'Y',
        ŷ: 'y',
        Ÿ: 'Y',
        Ź: 'Z',
        Ż: 'Z',
        Ž: 'Z',
        ź: 'z',
        ż: 'z',
        ž: 'z',
        Ĳ: 'IJ',
        ĳ: 'ij',
        Œ: 'Oe',
        œ: 'oe',
        ŉ: "'n",
        ſ: 's',
      });
      e.exports = r;
    },
    4840: function (e, t, n) {
      var r = 'object' == typeof n.g && n.g && n.g.Object === Object && n.g;
      e.exports = r;
    },
    4932: function (e) {
      e.exports = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r; )
          o[n] = t(e[n], n, e);
        return o;
      };
    },
    5434: function (e) {
      var t = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      e.exports = function (e) {
        return t.test(e);
      };
    },
    5539: function (e, t, n) {
      var r = n(882),
        o = n(828),
        u = n(6645),
        a = RegExp("['’]", 'g');
      e.exports = function (e) {
        return function (t) {
          return r(u(o(t).replace(a, '')), e, '');
        };
      };
    },
    6449: function (e) {
      var t = Array.isArray;
      e.exports = t;
    },
    6645: function (e, t, n) {
      var r = n(1733),
        o = n(5434),
        u = n(3222),
        a = n(2225);
      e.exports = function (e, t, n) {
        return (
          (e = u(e)), void 0 === (t = n ? void 0 : t) ? (o(e) ? a(e) : r(e)) : e.match(t) || []
        );
      };
    },
    7081: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(6540),
        o = n(1015),
        u = n(249),
        a = n.n(u),
        i = n(3673),
        c = n(1252),
        f = n(7182);
      const l = c.default.main.withConfig({
          displayName: 'post__StyledPostContainer',
          componentId: 'sc-8858gx-0',
        })(['max-width:1000px;']),
        s = c.default.header.withConfig({
          displayName: 'post__StyledPostHeader',
          componentId: 'sc-8858gx-1',
        })(['margin-bottom:50px;.tag{margin-right:10px;}']),
        d = c.default.div.withConfig({
          displayName: 'post__StyledPostContent',
          componentId: 'sc-8858gx-2',
        })(
          [
            'margin-bottom:100px;h1,h2,h3,h4,h5,h6{margin:2em 0 1em;}p{margin:1em 0;line-height:1.5;color:var(--light-slate);}a{',
            ';}code{background-color:var(--lightest-navy);color:var(--lightest-slate);border-radius:var(--border-radius);font-size:var(--fz-sm);padding:0.2em 0.4em;}pre code{background-color:transparent;padding:0;}',
          ],
          e => {
            let { theme: t } = e;
            return t.mixins.inlineLink;
          },
        );
      t.default = e => {
        let { data: t, location: n } = e;
        const { frontmatter: u, html: c } = t.markdownRemark,
          { title: x, date: p, tags: m } = u;
        return r.createElement(
          f.PE,
          { location: n },
          r.createElement(i.m, { title: x }),
          r.createElement(
            l,
            null,
            r.createElement(
              'span',
              { className: 'breadcrumb' },
              r.createElement('span', { className: 'arrow' }, '←'),
              r.createElement(o.Link, { to: '/pensieve' }, 'All memories'),
            ),
            r.createElement(
              s,
              null,
              r.createElement('h1', { className: 'medium-heading' }, x),
              r.createElement(
                'p',
                { className: 'subtitle' },
                r.createElement(
                  'time',
                  null,
                  new Date(p).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }),
                ),
                r.createElement('span', null, ' — '),
                m &&
                  m.length > 0 &&
                  m.map((e, t) =>
                    r.createElement(
                      o.Link,
                      { key: t, to: `/pensieve/tags/${a()(e)}/`, className: 'tag' },
                      '#',
                      e,
                    ),
                  ),
              ),
            ),
            r.createElement(d, { dangerouslySetInnerHTML: { __html: c } }),
          ),
        );
      };
    },
    7556: function (e, t, n) {
      var r = n(1873),
        o = n(4932),
        u = n(6449),
        a = n(4394),
        i = r ? r.prototype : void 0,
        c = i ? i.toString : void 0;
      e.exports = function e(t) {
        if ('string' == typeof t) return t;
        if (u(t)) return o(t, e) + '';
        if (a(t)) return c ? c.call(t) : '';
        var n = t + '';
        return '0' == n && 1 / t == -1 / 0 ? '-0' : n;
      };
    },
    9325: function (e, t, n) {
      var r = n(4840),
        o = 'object' == typeof self && self && self.Object === Object && self,
        u = r || o || Function('return this')();
      e.exports = u;
    },
    9350: function (e) {
      var t = Object.prototype.toString;
      e.exports = function (e) {
        return t.call(e);
      };
    },
  },
]);
//# sourceMappingURL=component---src-templates-post-js-2c1396f418ee1ed225ec.js.map
