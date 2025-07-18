'use strict';
(self.webpackChunkv4 = self.webpackChunkv4 || []).push([
  [231],
  {
    4342: function (e, t, a) {
      a.r(t);
      var l = a(6540),
        r = a(3673),
        n = a(1252),
        i = a(1929),
        d = a(2468),
        c = a(7182),
        m = a(265),
        s = a(1378);
      const o = n.default.div.withConfig({
        displayName: 'archive__StyledTableContainer',
        componentId: 'sc-2cxdc9-0',
      })(
        [
          'margin:100px -20px;@media (max-width:768px){margin:50px -10px;}table{width:100%;border-collapse:collapse;.hide-on-mobile{@media (max-width:768px){display:none;}}tbody tr{&:hover,&:focus{background-color:var(--light-navy);}}th,td{padding:10px;text-align:left;&:first-child{padding-left:20px;@media (max-width:768px){padding-left:10px;}}&:last-child{padding-right:20px;@media (max-width:768px){padding-right:10px;}}svg{width:20px;height:20px;}}tr{cursor:default;td:first-child{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius);}td:last-child{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);}}td{&.year{padding-right:20px;@media (max-width:768px){padding-right:10px;font-size:var(--fz-sm);}}&.title{padding-top:15px;padding-right:20px;color:var(--lightest-slate);font-size:var(--fz-xl);font-weight:600;line-height:1.25;}&.company{font-size:var(--fz-lg);white-space:nowrap;}&.tech{font-size:var(--fz-xxs);font-family:var(--font-mono);line-height:1.5;.separator{margin:0 5px;}span{display:inline-block;}}&.links{min-width:100px;div{display:flex;align-items:center;a{',
          ';flex-shrink:0;}a + a{margin-left:10px;}}}}}',
        ],
        e => {
          let { theme: t } = e;
          return t.mixins.flexCenter;
        },
      );
      t.default = e => {
        let { location: t, data: a } = e;
        const n = a.allMarkdownRemark.edges,
          h = (0, l.useRef)(null),
          p = (0, l.useRef)(null),
          u = (0, l.useRef)([]),
          f = (0, s.jt)();
        return (
          (0, l.useEffect)(() => {
            f ||
              (d.A.reveal(h.current, (0, i.srConfig)()),
              d.A.reveal(p.current, (0, i.srConfig)(200, 0)),
              u.current.forEach((e, t) => d.A.reveal(e, (0, i.srConfig)(10 * t))));
          }, []),
          l.createElement(
            c.PE,
            { location: t },
            l.createElement(r.m, { title: 'Archive' }),
            l.createElement(
              'main',
              null,
              l.createElement(
                'header',
                { ref: h },
                l.createElement('h1', { className: 'big-heading' }, 'Archive'),
                l.createElement(
                  'p',
                  { className: 'subtitle' },
                  'A big list of things I’ve worked on',
                ),
              ),
              l.createElement(
                o,
                { ref: p },
                l.createElement(
                  'table',
                  null,
                  l.createElement(
                    'thead',
                    null,
                    l.createElement(
                      'tr',
                      null,
                      l.createElement('th', null, 'Year'),
                      l.createElement('th', null, 'Title'),
                      l.createElement('th', { className: 'hide-on-mobile' }, 'Made at'),
                      l.createElement('th', { className: 'hide-on-mobile' }, 'Built with'),
                      l.createElement('th', null, 'Link'),
                    ),
                  ),
                  l.createElement(
                    'tbody',
                    null,
                    n.length > 0 &&
                      n.map((e, t) => {
                        let { node: a } = e;
                        const {
                          date: r,
                          github: n,
                          external: i,
                          title: d,
                          tech: c,
                          company: s,
                        } = a.frontmatter;
                        return l.createElement(
                          'tr',
                          { key: t, ref: e => (u.current[t] = e) },
                          l.createElement(
                            'td',
                            { className: 'overline year' },
                            `${new Date(r).getFullYear()}`,
                          ),
                          l.createElement('td', { className: 'title' }, d),
                          l.createElement(
                            'td',
                            { className: 'company hide-on-mobile' },
                            s
                              ? l.createElement('span', null, s)
                              : l.createElement('span', null, '—'),
                          ),
                          l.createElement(
                            'td',
                            { className: 'tech hide-on-mobile' },
                            (null == c ? void 0 : c.length) > 0 &&
                              c.map((e, t) =>
                                l.createElement(
                                  'span',
                                  { key: t },
                                  e,
                                  '',
                                  t !== c.length - 1 &&
                                    l.createElement('span', { className: 'separator' }, '·'),
                                ),
                              ),
                          ),
                          l.createElement(
                            'td',
                            { className: 'links' },
                            l.createElement(
                              'div',
                              null,
                              i &&
                                l.createElement(
                                  'a',
                                  { href: i, 'aria-label': 'External Link' },
                                  l.createElement(m.In, { name: 'External' }),
                                ),
                              n &&
                                l.createElement(
                                  'a',
                                  { href: n, 'aria-label': 'GitHub Link' },
                                  l.createElement(m.In, { name: 'GitHub' }),
                                ),
                            ),
                          ),
                        );
                      }),
                  ),
                ),
              ),
            ),
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-archive-js-737af2f32616db752123.js.map
