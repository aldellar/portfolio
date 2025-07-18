'use strict';
(self.webpackChunkv4 = self.webpackChunkv4 || []).push([
  [125],
  {
    7412: function (e, t, n) {
      n.r(t);
      var l = n(6540),
        o = n(1015),
        a = n(3673),
        i = n(6181),
        m = n(5262),
        c = n(1252),
        s = n(1597),
        r = n(7182),
        u = n(1378);
      const f = c.default.main.withConfig({
          displayName: 'sc-404__StyledMainContainer',
          componentId: 'sc-bnxlhm-0',
        })(['', ';flex-direction:column;'], e => {
          let { theme: t } = e;
          return t.mixins.flexCenter;
        }),
        d = c.default.h1.withConfig({
          displayName: 'sc-404__StyledTitle',
          componentId: 'sc-bnxlhm-1',
        })([
          'color:var(--green);font-family:var(--font-mono);font-size:clamp(100px,25vw,200px);line-height:1;',
        ]),
        p = c.default.h2.withConfig({
          displayName: 'sc-404__StyledSubtitle',
          componentId: 'sc-bnxlhm-2',
        })(['font-size:clamp(30px,5vw,50px);font-weight:400;']),
        h = (0, c.default)(o.Link).withConfig({
          displayName: 'sc-404__StyledHomeButton',
          componentId: 'sc-bnxlhm-3',
        })(['', ';margin-top:40px;'], e => {
          let { theme: t } = e;
          return t.mixins.bigButton;
        });
      t.default = e => {
        let { location: t } = e;
        const { 0: n, 1: o } = (0, l.useState)(!1),
          c = (0, u.jt)();
        (0, l.useEffect)(() => {
          if (c) return;
          const e = setTimeout(() => o(!0), s.LF);
          return () => clearTimeout(e);
        }, []);
        const g = l.createElement(
          f,
          { className: 'fillHeight' },
          l.createElement(d, null, '404'),
          l.createElement(p, null, 'Page Not Found'),
          l.createElement(h, { to: '/' }, 'Go Home'),
        );
        return l.createElement(
          r.PE,
          { location: t },
          l.createElement(a.m, { title: 'Page Not Found' }),
          c
            ? l.createElement(l.Fragment, null, g)
            : l.createElement(
                i.A,
                { component: null },
                n && l.createElement(m.A, { timeout: 500, classNames: 'fadeup' }, g),
              ),
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-404-js-9669726d64b569040d19.js.map
