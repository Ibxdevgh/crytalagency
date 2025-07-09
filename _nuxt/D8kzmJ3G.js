import { u as l, o as c, a as g, _ as h, __tla as d } from "./Ct4PKcG_.js";
import { C as m, a as u, __tla as p } from "./BFhj9t_F.js";
import { E as v, F as w, L as n, J as _, H as f } from "./CkGjpDBV.js";
import { __tla as D } from "./DTeoW5xf.js";
import "./DNkUmkFf.js";
let s,
  b = Promise.all([
    (() => {
      try {
        return d;
      } catch {}
    })(),
    (() => {
      try {
        return p;
      } catch {}
    })(),
    (() => {
      try {
        return D;
      } catch {}
    })(),
  ]).then(async () => {
    let a;
    (a = { class: "case-page" }),
      (s = {
        __name: "privacy-policy",
        setup(y) {
          const i = l();
          v(() => {
            i.hideCursor("", "none");
          });
          const e = {
            name: "Privacy Policy",
            description:
              "Read our privacy policy to understand how we collect, use, and protect your information",
              tags: ["Privacy", "Policy", "Legal"],
            awards: !1,
            link: "/",
            video: "/",
            buttonText: "TRY IT<br> NOW",
            nextCase: "/",
            videoPoster: "/images/cus/Configurator.png",
          };
          return (
            c((o, r, t) => {
              i.startTransition(o.path, r.path, t);
            }),
            g({
              title:
                "Crystal Agency | Privacy Policy",
              meta: [
                {
                  name: "description",
                  content:
                    "Read our privacy policy to understand how we collect, use, and protect your information",
                },
                {
                  name: "og:title",
                  property: "og:title",
                  content:
                    "Crystal Agency | Privacy Policy",
                },
                {
                  name: "og:description",
                  property: "og:description",
                  content:
                    "Read our privacy policy to understand how we collect, use, and protect your information",
                },
                {
                  name: "twitter:title",
                  content:
                    "Crystal Agency | Privacy Policy",
                },
                {
                  name: "twitter:description",
                  content:
                    "Read our privacy policy to understand how we collect, use, and protect your information",
                },
              ],
            }),
            (o, r) => {
              const t = h;
              return (
                f(),
                w("div", a, [
                  n(t, null, {
                    default: _(() => [
                      n(
                        m,
                        { video: { video: e.video, poster: e.videoPoster } },
                        null,
                        8,
                        ["video"]
                      ),
                    ]),
                    _: 1,
                  }),
                  n(u, { page: e }),
                ])
              );
            }
          );
        },
      });
  });
export { b as __tla, s as default };
