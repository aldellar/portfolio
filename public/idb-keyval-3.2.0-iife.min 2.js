var idbKeyval = (function (e) {
  'use strict';
  class t {
    constructor(e = 'keyval-store', t = 'keyval') {
      (this.storeName = t),
        (this._dbp = new Promise((r, n) => {
          const o = indexedDB.open(e, 1);
          (o.onerror = () => n(o.error)),
            (o.onsuccess = () => r(o.result)),
            (o.onupgradeneeded = () => {
              o.result.createObjectStore(t);
            });
        }));
    }
    _withIDBStore(e, t) {
      return this._dbp.then(
        r =>
          new Promise((n, o) => {
            const s = r.transaction(this.storeName, e);
            (s.oncomplete = () => n()),
              (s.onabort = s.onerror = () => o(s.error)),
              t(s.objectStore(this.storeName));
          }),
      );
    }
  }
  let r;
  function n() {
    return r || (r = new t()), r;
  }
  return (
    (e.Store = t),
    (e.get = function (e, t = n()) {
      let r;
      return t
        ._withIDBStore('readonly', t => {
          r = t.get(e);
        })
        .then(() => r.result);
    }),
    (e.set = function (e, t, r = n()) {
      return r._withIDBStore('readwrite', r => {
        r.put(t, e);
      });
    }),
    (e.del = function (e, t = n()) {
      return t._withIDBStore('readwrite', t => {
        t.delete(e);
      });
    }),
    (e.clear = function (e = n()) {
      return e._withIDBStore('readwrite', e => {
        e.clear();
      });
    }),
    (e.keys = function (e = n()) {
      const t = [];
      return e
        ._withIDBStore('readonly', e => {
          (e.openKeyCursor || e.openCursor).call(e).onsuccess = function () {
            this.result && (t.push(this.result.key), this.result.continue());
          };
        })
        .then(() => t);
    }),
    e
  );
})({});
