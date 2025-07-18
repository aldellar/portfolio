(self.webpackChunkv4 = self.webpackChunkv4 || []).push([
  [29],
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
        i = o.hasOwnProperty,
        a = o.toString,
        l = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        var t = i.call(e, l),
          n = e[l];
        try {
          e[l] = void 0;
          var r = !0;
        } catch (u) {}
        var o = a.call(e);
        return r && (t ? (e[l] = n) : delete e[l]), o;
      };
    },
    828: function (e, t, n) {
      var r = n(4647),
        o = n(3222),
        i = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        a = RegExp('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', 'g');
      e.exports = function (e) {
        return (e = o(e)) && e.replace(i, r).replace(a, '');
      };
    },
    882: function (e) {
      e.exports = function (e, t, n, r) {
        var o = -1,
          i = null == e ? 0 : e.length;
        for (r && i && (n = e[++o]); ++o < i; ) n = t(n, e[o], o, e);
        return n;
      };
    },
    934: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(6540),
        o = n(1015),
        i = n(249),
        a = n.n(i),
        l = n(3673),
        u = n(1252),
        s = n(7182),
        f = n(265);
      const c = u.default.main.withConfig({
          displayName: 'pensieve__StyledMainContainer',
          componentId: 'sc-jb5p05-0',
        })(
          [
            "& > header{margin-bottom:100px;text-align:center;a{&:hover,&:focus{cursor:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>\") 20 0,auto;}}}footer{",
            ';width:100%;margin-top:20px;}',
          ],
          e => {
            let { theme: t } = e;
            return t.mixins.flexBetween;
          },
        ),
        p = u.default.ul.withConfig({
          displayName: 'pensieve__StyledGrid',
          componentId: 'sc-jb5p05-1',
        })(
          [
            '',
            ';display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;margin-top:50px;position:relative;@media (max-width:1080px){grid-template-columns:repeat(auto-fill,minmax(250px,1fr));}',
          ],
          e => {
            let { theme: t } = e;
            return t.mixins.resetList;
          },
        ),
        d = u.default.li.withConfig({
          displayName: 'pensieve__StyledPost',
          componentId: 'sc-jb5p05-2',
        })(
          [
            'transition:var(--transition);cursor:default;@media (prefers-reduced-motion:no-preference){&:hover,&:focus-within{.post__inner{transform:translateY(-7px);}}}a{position:relative;z-index:1;}.post__inner{',
            ';',
            ';flex-direction:column;align-items:flex-start;position:relative;height:100%;padding:2rem 1.75rem;border-radius:var(--border-radius);transition:var(--transition);background-color:var(--light-navy);header,a{width:100%;}}.post__icon{',
            ";color:var(--green);margin-bottom:30px;margin-left:-5px;svg{width:40px;height:40px;}}.post__title{margin:0 0 10px;color:var(--lightest-slate);font-size:var(--fz-xxl);a{position:static;&:before{content:'';display:block;position:absolute;z-index:0;width:100%;height:100%;top:0;left:0;}}}.post__desc{color:var(--light-slate);font-size:17px;}.post__date{color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xxs);text-transform:uppercase;}ul.post__tags{display:flex;align-items:flex-end;flex-wrap:wrap;padding:0;margin:0;list-style:none;li{color:var(--green);font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:1.75;&:not(:last-of-type){margin-right:15px;}}}",
          ],
          e => {
            let { theme: t } = e;
            return t.mixins.boxShadow;
          },
          e => {
            let { theme: t } = e;
            return t.mixins.flexBetween;
          },
          e => {
            let { theme: t } = e;
            return t.mixins.flexBetween;
          },
        );
      t.default = e => {
        let { location: t, data: n } = e;
        const i = n.allMarkdownRemark.edges;
        return r.createElement(
          s.PE,
          { location: t },
          r.createElement(l.m, { title: 'Pensieve' }),
          r.createElement(
            c,
            null,
            r.createElement(
              'header',
              null,
              r.createElement('h1', { className: 'big-heading' }, 'Pensieve'),
              r.createElement(
                'p',
                { className: 'subtitle' },
                r.createElement(
                  'a',
                  { href: 'https://www.wizardingworld.com/writing-by-jk-rowling/pensieve' },
                  'a collection of memories',
                ),
              ),
            ),
            r.createElement(
              p,
              null,
              i.length > 0 &&
                i.map((e, t) => {
                  let { node: n } = e;
                  const { frontmatter: i } = n,
                    { title: l, description: u, slug: s, date: c, tags: p } = i,
                    x = new Date(c).toLocaleDateString();
                  return r.createElement(
                    d,
                    { key: t },
                    r.createElement(
                      'div',
                      { className: 'post__inner' },
                      r.createElement(
                        'header',
                        null,
                        r.createElement(
                          'div',
                          { className: 'post__icon' },
                          r.createElement(f.Ed, null),
                        ),
                        r.createElement(
                          'h5',
                          { className: 'post__title' },
                          r.createElement(o.Link, { to: s }, l),
                        ),
                        r.createElement('p', { className: 'post__desc' }, u),
                      ),
                      r.createElement(
                        'footer',
                        null,
                        r.createElement('span', { className: 'post__date' }, x),
                        r.createElement(
                          'ul',
                          { className: 'post__tags' },
                          p.map((e, t) =>
                            r.createElement(
                              'li',
                              { key: t },
                              r.createElement(
                                o.Link,
                                { to: `/pensieve/tags/${a()(e)}/`, className: 'inline-link' },
                                '#',
                                e,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  );
                }),
            ),
          ),
        );
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
        i =
          '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
        a = '[' + i + ']',
        l = '\\d+',
        u = '[' + n + ']',
        s = '[' + r + ']',
        f = '[^' + t + i + l + n + r + o + ']',
        c = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        p = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        d = '[' + o + ']',
        x = '(?:' + s + '|' + f + ')',
        m = '(?:' + d + '|' + f + ')',
        g = "(?:['’](?:d|ll|m|re|s|t|ve))?",
        v = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
        h = '(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?',
        b = '[\\ufe0e\\ufe0f]?',
        y = b + h + ('(?:\\u200d(?:' + ['[^' + t + ']', c, p].join('|') + ')' + b + h + ')*'),
        E = '(?:' + [u, c, p].join('|') + ')' + y,
        w = RegExp(
          [
            d + '?' + s + '+' + g + '(?=' + [a, d, '$'].join('|') + ')',
            m + '+' + v + '(?=' + [a, d + x, '$'].join('|') + ')',
            d + '?' + x + '+' + g,
            d + '+' + v,
            '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
            '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
            l,
            E,
          ].join('|'),
          'g',
        );
      e.exports = function (e) {
        return e.match(w) || [];
      };
    },
    2552: function (e, t, n) {
      var r = n(1873),
        o = n(659),
        i = n(9350),
        a = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : a && a in Object(e)
          ? o(e)
          : i(e);
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
        i = n(6645),
        a = RegExp("['’]", 'g');
      e.exports = function (e) {
        return function (t) {
          return r(i(o(t).replace(a, '')), e, '');
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
        i = n(3222),
        a = n(2225);
      e.exports = function (e, t, n) {
        return (
          (e = i(e)), void 0 === (t = n ? void 0 : t) ? (o(e) ? a(e) : r(e)) : e.match(t) || []
        );
      };
    },
    7556: function (e, t, n) {
      var r = n(1873),
        o = n(4932),
        i = n(6449),
        a = n(4394),
        l = r ? r.prototype : void 0,
        u = l ? l.toString : void 0;
      e.exports = function e(t) {
        if ('string' == typeof t) return t;
        if (i(t)) return o(t, e) + '';
        if (a(t)) return u ? u.call(t) : '';
        var n = t + '';
        return '0' == n && 1 / t == -1 / 0 ? '-0' : n;
      };
    },
    9325: function (e, t, n) {
      var r = n(4840),
        o = 'object' == typeof self && self && self.Object === Object && self,
        i = r || o || Function('return this')();
      e.exports = i;
    },
    9350: function (e) {
      var t = Object.prototype.toString;
      e.exports = function (e) {
        return t.call(e);
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-pensieve-index-js-29c81551852b7c411b77.js.map
