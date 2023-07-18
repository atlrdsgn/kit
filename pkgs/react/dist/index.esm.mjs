/*! 
    AtelierKit© v0.3.6. 
    Copyright © 2023 atlrdsgn®. All rights reserved.
    
    see https://docs.atlrdsgn.com for more information.
    @atlrdsgn/kit is licensed under the MIT License.
     */
import { jsx as d } from "react/jsx-runtime";
import C, { createContext as g_, useContext as d_, useState as c_, forwardRef as S, createElement as Y, Children as p_ } from "react";
import * as f from "@radix-ui/react-popover";
var Cr = k_, z = { base: "kit_kitClass__jolfc70", light: "kit_lightTheme__jolfc768", dark: "kit_darkTheme__jolfc769" }, k_ = { media: { breakpoints: { small: "var(--media-breakpoints-small__jolfc71)", medium: "var(--media-breakpoints-medium__jolfc72)", large: "var(--media-breakpoints-large__jolfc73)", xlarge: "var(--media-breakpoints-xlarge__jolfc74)" }, colorModes: { LIGHT: "var(--media-colorModes-LIGHT__jolfc75)", DARK: "var(--media-colorModes-DARK__jolfc76)" } }, font: { family: { system: "var(--font-family-system__jolfc77)", mono: "var(--font-family-mono__jolfc78)" }, heading: { H1: "var(--font-heading-H1__jolfc79)", H2: "var(--font-heading-H2__jolfc7a)", H3: "var(--font-heading-H3__jolfc7b)", H4: "var(--font-heading-H4__jolfc7c)", H5: "var(--font-heading-H5__jolfc7d)", H6: "var(--font-heading-H6__jolfc7e)" }, size: { MINI: "var(--font-size-MINI__jolfc7f)", XS: "var(--font-size-XS__jolfc7g)", SM: "var(--font-size-SM__jolfc7h)", MD: "var(--font-size-MD__jolfc7i)", LG: "var(--font-size-LG__jolfc7j)", XL: "var(--font-size-XL__jolfc7k)", XXL: "var(--font-size-XXL__jolfc7l)", "3XL": "var(--font-size-3XL__jolfc7m)", "4XL": "var(--font-size-4XL__jolfc7n)", "5XL": "var(--font-size-5XL__jolfc7o)", "6XL": "var(--font-size-6XL__jolfc7p)", "7XL": "var(--font-size-7XL__jolfc7q)", "8XL": "var(--font-size-8XL__jolfc7r)", "9XL": "var(--font-size-9XL__jolfc7s)" }, lineheight: { MINI: "var(--font-lineheight-MINI__jolfc7t)", XS: "var(--font-lineheight-XS__jolfc7u)", SM: "var(--font-lineheight-SM__jolfc7v)", MD: "var(--font-lineheight-MD__jolfc7w)", LG: "var(--font-lineheight-LG__jolfc7x)", XL: "var(--font-lineheight-XL__jolfc7y)", XXL: "var(--font-lineheight-XXL__jolfc7z)", "3XL": "var(--font-lineheight-3XL__jolfc710)", "4XL": "var(--font-lineheight-4XL__jolfc711)", "5XL": "var(--font-lineheight-5XL__jolfc712)", "6XL": "var(--font-lineheight-6XL__jolfc713)", "7XL": "var(--font-lineheight-7XL__jolfc714)", "8XL": "var(--font-lineheight-8XL__jolfc715)", "9XL": "var(--font-lineheight-9XL__jolfc716)" }, weight: { SUPRLITE: "var(--font-weight-SUPRLITE__jolfc717)", ULTRALITE: "var(--font-weight-ULTRALITE__jolfc718)", LITE: "var(--font-weight-LITE__jolfc719)", REGULAR: "var(--font-weight-REGULAR__jolfc71a)", MEDIUM: "var(--font-weight-MEDIUM__jolfc71b)", SEMIBOLD: "var(--font-weight-SEMIBOLD__jolfc71c)", BOLD: "var(--font-weight-BOLD__jolfc71d)", HEAVY: "var(--font-weight-HEAVY__jolfc71e)", BLACK: "var(--font-weight-BLACK__jolfc71f)" } }, radii: { ZERO: "var(--radii-ZERO__jolfc71g)", NO: "var(--radii-NO__jolfc71h)", DF: "var(--radii-DF__jolfc71i)", XS: "var(--radii-XS__jolfc71j)", SM: "var(--radii-SM__jolfc71k)", MD: "var(--radii-MD__jolfc71l)", LG: "var(--radii-LG__jolfc71m)", XL: "var(--radii-XL__jolfc71n)", XXL: "var(--radii-XXL__jolfc71o)", PILL: "var(--radii-PILL__jolfc71p)" }, space: { ZERO: "var(--space-ZERO__jolfc71q)", NO: "var(--space-NO__jolfc71r)", DF: "var(--space-DF__jolfc71s)", APX: "var(--space-APX__jolfc71t)", BPX: "var(--space-BPX__jolfc71u)", CPX: "var(--space-CPX__jolfc71v)", DPX: "var(--space-DPX__jolfc71w)", EPX: "var(--space-EPX__jolfc71x)", FPX: "var(--space-FPX__jolfc71y)", GPX: "var(--space-GPX__jolfc71z)", HPX: "var(--space-HPX__jolfc720)", IPX: "var(--space-IPX__jolfc721)", JPX: "var(--space-JPX__jolfc722)", KPX: "var(--space-KPX__jolfc723)", LPX: "var(--space-LPX__jolfc724)", MPX: "var(--space-MPX__jolfc725)", NPX: "var(--space-NPX__jolfc726)", OPX: "var(--space-OPX__jolfc727)", PPX: "var(--space-PPX__jolfc728)", QPX: "var(--space-QPX__jolfc729)", RPX: "var(--space-RPX__jolfc72a)", SPX: "var(--space-SPX__jolfc72b)", TPX: "var(--space-TPX__jolfc72c)", UPX: "var(--space-UPX__jolfc72d)", VPX: "var(--space-VPX__jolfc72e)", WPX: "var(--space-WPX__jolfc72f)", XPX: "var(--space-XPX__jolfc72g)", YPX: "var(--space-YPX__jolfc72h)", ZPX: "var(--space-ZPX__jolfc72i)" }, z: { indice: { ZERO: "var(--z-indice-ZERO__jolfc72j)", DF: "var(--z-indice-DF__jolfc72k)", LOW: "var(--z-indice-LOW__jolfc72l)", MED: "var(--z-indice-MED__jolfc72m)", HIGH: "var(--z-indice-HIGH__jolfc72n)", TOP: "var(--z-indice-TOP__jolfc72o)", MAX: "var(--z-indice-MAX__jolfc72p)" } }, shadow: { NO: "var(--shadow-NO__jolfc72q)", DF: "var(--shadow-DF__jolfc72r)", LOW: "var(--shadow-LOW__jolfc72s)", MED: "var(--shadow-MED__jolfc72t)", HIGH: "var(--shadow-HIGH__jolfc72u)" }, color: { transparent: "var(--color-transparent__jolfc72v)", current: "var(--color-current__jolfc72w)", white: "var(--color-white__jolfc72x)", black: "var(--color-black__jolfc72y)", jade0: "var(--color-jade0__jolfc72z)", jade1: "var(--color-jade1__jolfc730)", jade2: "var(--color-jade2__jolfc731)", jade3: "var(--color-jade3__jolfc732)", jade4: "var(--color-jade4__jolfc733)", jade5: "var(--color-jade5__jolfc734)", jade6: "var(--color-jade6__jolfc735)", jade7: "var(--color-jade7__jolfc736)", jade8: "var(--color-jade8__jolfc737)", jade9: "var(--color-jade9__jolfc738)", jade10: "var(--color-jade10__jolfc739)", jade11: "var(--color-jade11__jolfc73a)", jade12: "var(--color-jade12__jolfc73b)", sapphire0: "var(--color-sapphire0__jolfc73c)", sapphire1: "var(--color-sapphire1__jolfc73d)", sapphire2: "var(--color-sapphire2__jolfc73e)", sapphire3: "var(--color-sapphire3__jolfc73f)", sapphire4: "var(--color-sapphire4__jolfc73g)", sapphire5: "var(--color-sapphire5__jolfc73h)", sapphire6: "var(--color-sapphire6__jolfc73i)", sapphire7: "var(--color-sapphire7__jolfc73j)", sapphire8: "var(--color-sapphire8__jolfc73k)", sapphire9: "var(--color-sapphire9__jolfc73l)", sapphire10: "var(--color-sapphire10__jolfc73m)", sapphire11: "var(--color-sapphire11__jolfc73n)", sapphire12: "var(--color-sapphire12__jolfc73o)", peach0: "var(--color-peach0__jolfc73p)", peach1: "var(--color-peach1__jolfc73q)", peach2: "var(--color-peach2__jolfc73r)", peach3: "var(--color-peach3__jolfc73s)", peach4: "var(--color-peach4__jolfc73t)", peach5: "var(--color-peach5__jolfc73u)", peach6: "var(--color-peach6__jolfc73v)", peach7: "var(--color-peach7__jolfc73w)", peach8: "var(--color-peach8__jolfc73x)", peach9: "var(--color-peach9__jolfc73y)", peach10: "var(--color-peach10__jolfc73z)", peach11: "var(--color-peach11__jolfc740)", peach12: "var(--color-peach12__jolfc741)", carbon0: "var(--color-carbon0__jolfc742)", carbon1: "var(--color-carbon1__jolfc743)", carbon2: "var(--color-carbon2__jolfc744)", carbon3: "var(--color-carbon3__jolfc745)", carbon4: "var(--color-carbon4__jolfc746)", carbon5: "var(--color-carbon5__jolfc747)", carbon6: "var(--color-carbon6__jolfc748)", carbon7: "var(--color-carbon7__jolfc749)", carbon8: "var(--color-carbon8__jolfc74a)", carbon9: "var(--color-carbon9__jolfc74b)", carbon10: "var(--color-carbon10__jolfc74c)", carbon11: "var(--color-carbon11__jolfc74d)", carbon12: "var(--color-carbon12__jolfc74e)", slate0: "var(--color-slate0__jolfc74f)", slate1: "var(--color-slate1__jolfc74g)", slate2: "var(--color-slate2__jolfc74h)", slate3: "var(--color-slate3__jolfc74i)", slate4: "var(--color-slate4__jolfc74j)", slate5: "var(--color-slate5__jolfc74k)", slate6: "var(--color-slate6__jolfc74l)", slate7: "var(--color-slate7__jolfc74m)", slate8: "var(--color-slate8__jolfc74n)", slate9: "var(--color-slate9__jolfc74o)", slate10: "var(--color-slate10__jolfc74p)", slate11: "var(--color-slate11__jolfc74q)", slate12: "var(--color-slate12__jolfc74r)", azure0: "var(--color-azure0__jolfc74s)", azure1: "var(--color-azure1__jolfc74t)", azure2: "var(--color-azure2__jolfc74u)", azure3: "var(--color-azure3__jolfc74v)", azure4: "var(--color-azure4__jolfc74w)", azure5: "var(--color-azure5__jolfc74x)", azure6: "var(--color-azure6__jolfc74y)", azure7: "var(--color-azure7__jolfc74z)", azure8: "var(--color-azure8__jolfc750)", azure9: "var(--color-azure9__jolfc751)", azure10: "var(--color-azure10__jolfc752)", azure11: "var(--color-azure11__jolfc753)", azure12: "var(--color-azure12__jolfc754)", cherry0: "var(--color-cherry0__jolfc755)", cherry1: "var(--color-cherry1__jolfc756)", cherry2: "var(--color-cherry2__jolfc757)", cherry3: "var(--color-cherry3__jolfc758)", cherry4: "var(--color-cherry4__jolfc759)", cherry5: "var(--color-cherry5__jolfc75a)", cherry6: "var(--color-cherry6__jolfc75b)", cherry7: "var(--color-cherry7__jolfc75c)", cherry8: "var(--color-cherry8__jolfc75d)", cherry9: "var(--color-cherry9__jolfc75e)", cherry10: "var(--color-cherry10__jolfc75f)", cherry11: "var(--color-cherry11__jolfc75g)", cherry12: "var(--color-cherry12__jolfc75h)", lime0: "var(--color-lime0__jolfc75i)", lime1: "var(--color-lime1__jolfc75j)", lime2: "var(--color-lime2__jolfc75k)", lime3: "var(--color-lime3__jolfc75l)", lime4: "var(--color-lime4__jolfc75m)", lime5: "var(--color-lime5__jolfc75n)", lime6: "var(--color-lime6__jolfc75o)", lime7: "var(--color-lime7__jolfc75p)", lime8: "var(--color-lime8__jolfc75q)", lime9: "var(--color-lime9__jolfc75r)", lime10: "var(--color-lime10__jolfc75s)", lime11: "var(--color-lime11__jolfc75t)", lime12: "var(--color-lime12__jolfc75u)", lemon0: "var(--color-lemon0__jolfc75v)", lemon1: "var(--color-lemon1__jolfc75w)", lemon2: "var(--color-lemon2__jolfc75x)", lemon3: "var(--color-lemon3__jolfc75y)", lemon4: "var(--color-lemon4__jolfc75z)", lemon5: "var(--color-lemon5__jolfc760)", lemon6: "var(--color-lemon6__jolfc761)", lemon7: "var(--color-lemon7__jolfc762)", lemon8: "var(--color-lemon8__jolfc763)", lemon9: "var(--color-lemon9__jolfc764)", lemon10: "var(--color-lemon10__jolfc765)", lemon11: "var(--color-lemon11__jolfc766)", lemon12: "var(--color-lemon12__jolfc767)" } };
const J = g_({
  theme: "light",
  toggleTheme: null
}), br = () => {
  const _ = d_(J);
  if (!_)
    throw new Error(
      "Atelier® Kit components must be used within [KitProvider]"
    );
  return _;
}, vr = ({
  children: _
}) => {
  const [r, l] = c_("light"), o = () => {
    l((e) => e === "light" ? "dark" : "light");
  }, i = r === "light" ? z.dark : z.light;
  return /* @__PURE__ */ d(J.Provider, { value: { theme: r, toggleTheme: o }, children: /* @__PURE__ */ d("div", { className: `${z.base} ${i}`, children: _ }) });
};
function Q(_) {
  var r, l, o = "";
  if (typeof _ == "string" || typeof _ == "number")
    o += _;
  else if (typeof _ == "object")
    if (Array.isArray(_))
      for (r = 0; r < _.length; r++)
        _[r] && (l = Q(_[r])) && (o && (o += " "), o += l);
    else
      for (r in _)
        _[r] && (o && (o += " "), o += r);
  return o;
}
function p() {
  for (var _, r, l = 0, o = ""; l < arguments.length; )
    (_ = arguments[l++]) && (r = Q(_)) && (o && (o += " "), o += r);
  return o;
}
var h_ = "reset_base__1r43xmp0", u_ = { article: "reset_block__1r43xmp1", aside: "reset_block__1r43xmp1", details: "reset_block__1r43xmp1", figcaption: "reset_block__1r43xmp1", figure: "reset_block__1r43xmp1", footer: "reset_block__1r43xmp1", header: "reset_block__1r43xmp1", hgroup: "reset_block__1r43xmp1", menu: "reset_block__1r43xmp1", nav: "reset_block__1r43xmp1", section: "reset_block__1r43xmp1", ul: "reset_list__1r43xmp3", ol: "reset_list__1r43xmp3", blockquote: "reset_quote__1r43xmp4", q: "reset_quote__1r43xmp4", body: "reset_body__1r43xmp2", a: "reset_a__1r43xmpg", table: "reset_table__1r43xmp5", mark: "reset_mark__1r43xmpa reset_transparent__1r43xmp7", select: "reset_block__1r43xmp1 reset_appearance__1r43xmp6 reset_field__1r43xmp8 reset_select__1r43xmpb", button: "reset_transparent__1r43xmp7", textarea: "reset_block__1r43xmp1 reset_appearance__1r43xmp6 reset_field__1r43xmp8", input: "reset_block__1r43xmp1 reset_appearance__1r43xmp6 reset_field__1r43xmp8 reset_input__1r43xmpd" };
function m_(_, r) {
  return Object.defineProperty(_, "__recipe__", {
    value: r,
    writable: !1
  }), _;
}
var __ = m_;
function f_(_) {
  var {
    conditions: r
  } = _;
  if (!r)
    throw new Error("Styles have no conditions");
  function l(o) {
    if (typeof o == "string" || typeof o == "number" || typeof o == "boolean") {
      if (!r.defaultCondition)
        throw new Error("No default condition");
      return {
        [r.defaultCondition]: o
      };
    }
    if (Array.isArray(o)) {
      if (!("responsiveArray" in r))
        throw new Error("Responsive arrays are not supported");
      var i = {};
      for (var e in r.responsiveArray)
        o[e] != null && (i[r.responsiveArray[e]] = o[e]);
      return i;
    }
    return o;
  }
  return __(l, {
    importPath: "@vanilla-extract/sprinkles/createUtils",
    importName: "createNormalizeValueFn",
    args: [{
      conditions: _.conditions
    }]
  });
}
function r_(_) {
  var {
    conditions: r
  } = _;
  if (!r)
    throw new Error("Styles have no conditions");
  var l = f_(_);
  function o(i, e) {
    if (typeof i == "string" || typeof i == "number" || typeof i == "boolean") {
      if (!r.defaultCondition)
        throw new Error("No default condition");
      return e(i, r.defaultCondition);
    }
    var s = Array.isArray(i) ? l(i) : i, a = {};
    for (var n in s)
      s[n] != null && (a[n] = e(s[n], n));
    return a;
  }
  return __(o, {
    importPath: "@vanilla-extract/sprinkles/createUtils",
    importName: "createMapValueFn",
    args: [{
      conditions: _.conditions
    }]
  });
}
function C_(_, r) {
  if (typeof _ != "object" || _ === null)
    return _;
  var l = _[Symbol.toPrimitive];
  if (l !== void 0) {
    var o = l.call(_, r || "default");
    if (typeof o != "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(_);
}
function b_(_) {
  var r = C_(_, "string");
  return typeof r == "symbol" ? r : String(r);
}
function v_(_, r, l) {
  return r = b_(r), r in _ ? Object.defineProperty(_, r, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : _[r] = l, _;
}
function V(_, r) {
  var l = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(_);
    r && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(_, i).enumerable;
    })), l.push.apply(l, o);
  }
  return l;
}
function O(_) {
  for (var r = 1; r < arguments.length; r++) {
    var l = arguments[r] != null ? arguments[r] : {};
    r % 2 ? V(Object(l), !0).forEach(function(o) {
      v_(_, o, l[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(l)) : V(Object(l)).forEach(function(o) {
      Object.defineProperty(_, o, Object.getOwnPropertyDescriptor(l, o));
    });
  }
  return _;
}
var x_ = (_) => function() {
  for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++)
    l[o] = arguments[o];
  var i = Object.assign({}, ...l.map((n) => n.styles)), e = Object.keys(i), s = e.filter((n) => "mappings" in i[n]), a = (n) => {
    var c = [], v = {}, u = O({}, n), E = !1;
    for (var I of s) {
      var B = n[I];
      if (B != null) {
        var e_ = i[I];
        E = !0;
        for (var A of e_.mappings)
          v[A] = B, u[A] == null && delete u[A];
      }
    }
    var W = E ? O(O({}, v), u) : n, s_ = function() {
      var g = W[h], t = i[h];
      try {
        if (t.mappings)
          return "continue";
        if (typeof g == "string" || typeof g == "number") {
          if (process.env.NODE_ENV !== "production" && !t.values[g].defaultClass)
            throw new Error();
          c.push(t.values[g].defaultClass);
        } else if (Array.isArray(g))
          for (var w = 0; w < g.length; w++) {
            var q = g[w];
            if (q != null) {
              var H = t.responsiveArray[w];
              if (process.env.NODE_ENV !== "production" && !t.values[q].conditions[H])
                throw new Error();
              c.push(t.values[q].conditions[H]);
            }
          }
        else
          for (var P in g) {
            var X = g[P];
            if (X != null) {
              if (process.env.NODE_ENV !== "production" && !t.values[X].conditions[P])
                throw new Error();
              c.push(t.values[X].conditions[P]);
            }
          }
      } catch (n_) {
        if (process.env.NODE_ENV !== "production") {
          class b extends Error {
            constructor(T) {
              super(T), this.name = "SprinklesError";
            }
          }
          var j = (x) => typeof x == "string" ? '"'.concat(x, '"') : x, N = (x, T, t_) => {
            throw new b('"'.concat(x, '" has no value ').concat(j(T), ". Possible values are ").concat(Object.keys(t_).map(j).join(", ")));
          };
          if (!t)
            throw new b('"'.concat(h, '" is not a valid sprinkle'));
          if ((typeof g == "string" || typeof g == "number") && (g in t.values || N(h, g, t.values), !t.values[g].defaultClass))
            throw new b('"'.concat(h, '" has no default condition. You must specify which conditions to target explicitly. Possible options are ').concat(Object.keys(t.values[g].conditions).map(j).join(", ")));
          if (typeof g == "object") {
            if (!("conditions" in t.values[Object.keys(t.values)[0]]))
              throw new b('"'.concat(h, '" is not a conditional property'));
            if (Array.isArray(g)) {
              if (!("responsiveArray" in t))
                throw new b('"'.concat(h, '" does not support responsive arrays'));
              var R = t.responsiveArray.length;
              if (R < g.length)
                throw new b('"'.concat(h, '" only supports up to ').concat(R, " breakpoints. You passed ").concat(g.length));
              for (var F of g)
                t.values[F] || N(h, F, t.values);
            } else
              for (var D in g) {
                var y = g[D];
                if (y != null && (t.values[y] || N(h, y, t.values), !t.values[y].conditions[D]))
                  throw new b('"'.concat(h, '" has no condition named ').concat(j(D), ". Possible values are ").concat(Object.keys(t.values[y].conditions).map(j).join(", ")));
              }
          }
        }
        throw n_;
      }
    };
    for (var h in W)
      var a_ = s_();
    return _(c.join(" "));
  };
  return Object.assign(a, {
    properties: new Set(e)
  });
}, j_ = (_) => _, y_ = function() {
  return x_(j_)(...arguments);
}, xr = r_({ conditions: { defaultCondition: "light", conditionNames: ["light", "dark"], responsiveArray: void 0 } }), o_ = r_({ conditions: { defaultCondition: "small", conditionNames: ["small", "medium", "large", "xlarge"], responsiveArray: ["small", "medium", "large", "xlarge"] } }), L = y_(function() {
  var _ = { conditions: { defaultCondition: "small", conditionNames: ["small", "medium", "large", "xlarge"], responsiveArray: ["small", "medium", "large", "xlarge"] }, styles: { all: { values: { unset: { conditions: { small: "sprinkles_all_unset_small__i77g9o0", medium: "sprinkles_all_unset_medium__i77g9o1", large: "sprinkles_all_unset_large__i77g9o2", xlarge: "sprinkles_all_unset_xlarge__i77g9o3" }, defaultClass: "sprinkles_all_unset_small__i77g9o0" } }, responsiveArray: void 0 }, boxSizing: { values: { "border-box": { conditions: { small: "sprinkles_boxSizing_border-box_small__i77g9o4", medium: "sprinkles_boxSizing_border-box_medium__i77g9o5", large: "sprinkles_boxSizing_border-box_large__i77g9o6", xlarge: "sprinkles_boxSizing_border-box_xlarge__i77g9o7" }, defaultClass: "sprinkles_boxSizing_border-box_small__i77g9o4" } }, responsiveArray: void 0 }, appearance: { values: { none: { conditions: { small: "sprinkles_appearance_none_small__i77g9o8", medium: "sprinkles_appearance_none_medium__i77g9o9", large: "sprinkles_appearance_none_large__i77g9oa", xlarge: "sprinkles_appearance_none_xlarge__i77g9ob" }, defaultClass: "sprinkles_appearance_none_small__i77g9o8" } }, responsiveArray: void 0 }, outline: { values: { none: { conditions: { small: "sprinkles_outline_none_small__i77g9oc", medium: "sprinkles_outline_none_medium__i77g9od", large: "sprinkles_outline_none_large__i77g9oe", xlarge: "sprinkles_outline_none_xlarge__i77g9of" }, defaultClass: "sprinkles_outline_none_small__i77g9oc" } }, responsiveArray: void 0 }, userSelect: { values: { none: { conditions: { small: "sprinkles_userSelect_none_small__i77g9og", medium: "sprinkles_userSelect_none_medium__i77g9oh", large: "sprinkles_userSelect_none_large__i77g9oi", xlarge: "sprinkles_userSelect_none_xlarge__i77g9oj" }, defaultClass: "sprinkles_userSelect_none_small__i77g9og" }, auto: { conditions: { small: "sprinkles_userSelect_auto_small__i77g9ok", medium: "sprinkles_userSelect_auto_medium__i77g9ol", large: "sprinkles_userSelect_auto_large__i77g9om", xlarge: "sprinkles_userSelect_auto_xlarge__i77g9on" }, defaultClass: "sprinkles_userSelect_auto_small__i77g9ok" } }, responsiveArray: void 0 }, fontVariantNumeric: { values: { "tabular-nums": { conditions: { small: "sprinkles_fontVariantNumeric_tabular-nums_small__i77g9oo", medium: "sprinkles_fontVariantNumeric_tabular-nums_medium__i77g9op", large: "sprinkles_fontVariantNumeric_tabular-nums_large__i77g9oq", xlarge: "sprinkles_fontVariantNumeric_tabular-nums_xlarge__i77g9or" }, defaultClass: "sprinkles_fontVariantNumeric_tabular-nums_small__i77g9oo" } }, responsiveArray: void 0 }, WebkitTapHighlightColor: { values: { "rgba(0,0,0,0)": { conditions: { small: "sprinkles_WebkitTapHighlightColor_rgba(0,0,0,0)_small__i77g9os", medium: "sprinkles_WebkitTapHighlightColor_rgba(0,0,0,0)_medium__i77g9ot", large: "sprinkles_WebkitTapHighlightColor_rgba(0,0,0,0)_large__i77g9ou", xlarge: "sprinkles_WebkitTapHighlightColor_rgba(0,0,0,0)_xlarge__i77g9ov" }, defaultClass: "sprinkles_WebkitTapHighlightColor_rgba(0,0,0,0)_small__i77g9os" } }, responsiveArray: void 0 }, display: { values: { none: { conditions: { small: "sprinkles_display_none_small__i77g9ow", medium: "sprinkles_display_none_medium__i77g9ox", large: "sprinkles_display_none_large__i77g9oy", xlarge: "sprinkles_display_none_xlarge__i77g9oz" }, defaultClass: "sprinkles_display_none_small__i77g9ow" }, flex: { conditions: { small: "sprinkles_display_flex_small__i77g9o10", medium: "sprinkles_display_flex_medium__i77g9o11", large: "sprinkles_display_flex_large__i77g9o12", xlarge: "sprinkles_display_flex_xlarge__i77g9o13" }, defaultClass: "sprinkles_display_flex_small__i77g9o10" }, block: { conditions: { small: "sprinkles_display_block_small__i77g9o14", medium: "sprinkles_display_block_medium__i77g9o15", large: "sprinkles_display_block_large__i77g9o16", xlarge: "sprinkles_display_block_xlarge__i77g9o17" }, defaultClass: "sprinkles_display_block_small__i77g9o14" }, "inline-block": { conditions: { small: "sprinkles_display_inline-block_small__i77g9o18", medium: "sprinkles_display_inline-block_medium__i77g9o19", large: "sprinkles_display_inline-block_large__i77g9o1a", xlarge: "sprinkles_display_inline-block_xlarge__i77g9o1b" }, defaultClass: "sprinkles_display_inline-block_small__i77g9o18" }, "inline-flex": { conditions: { small: "sprinkles_display_inline-flex_small__i77g9o1c", medium: "sprinkles_display_inline-flex_medium__i77g9o1d", large: "sprinkles_display_inline-flex_large__i77g9o1e", xlarge: "sprinkles_display_inline-flex_xlarge__i77g9o1f" }, defaultClass: "sprinkles_display_inline-flex_small__i77g9o1c" }, inline: { conditions: { small: "sprinkles_display_inline_small__i77g9o1g", medium: "sprinkles_display_inline_medium__i77g9o1h", large: "sprinkles_display_inline_large__i77g9o1i", xlarge: "sprinkles_display_inline_xlarge__i77g9o1j" }, defaultClass: "sprinkles_display_inline_small__i77g9o1g" } }, responsiveArray: void 0 }, flex: { values: { 1: { conditions: { small: "sprinkles_flex_1_small__i77g9o1k", medium: "sprinkles_flex_1_medium__i77g9o1l", large: "sprinkles_flex_1_large__i77g9o1m", xlarge: "sprinkles_flex_1_xlarge__i77g9o1n" }, defaultClass: "sprinkles_flex_1_small__i77g9o1k" }, auto: { conditions: { small: "sprinkles_flex_auto_small__i77g9o1o", medium: "sprinkles_flex_auto_medium__i77g9o1p", large: "sprinkles_flex_auto_large__i77g9o1q", xlarge: "sprinkles_flex_auto_xlarge__i77g9o1r" }, defaultClass: "sprinkles_flex_auto_small__i77g9o1o" }, initial: { conditions: { small: "sprinkles_flex_initial_small__i77g9o1s", medium: "sprinkles_flex_initial_medium__i77g9o1t", large: "sprinkles_flex_initial_large__i77g9o1u", xlarge: "sprinkles_flex_initial_xlarge__i77g9o1v" }, defaultClass: "sprinkles_flex_initial_small__i77g9o1s" }, none: { conditions: { small: "sprinkles_flex_none_small__i77g9o1w", medium: "sprinkles_flex_none_medium__i77g9o1x", large: "sprinkles_flex_none_large__i77g9o1y", xlarge: "sprinkles_flex_none_xlarge__i77g9o1z" }, defaultClass: "sprinkles_flex_none_small__i77g9o1w" } }, responsiveArray: void 0 }, flexDirection: { values: { row: { conditions: { small: "sprinkles_flexDirection_row_small__i77g9o20", medium: "sprinkles_flexDirection_row_medium__i77g9o21", large: "sprinkles_flexDirection_row_large__i77g9o22", xlarge: "sprinkles_flexDirection_row_xlarge__i77g9o23" }, defaultClass: "sprinkles_flexDirection_row_small__i77g9o20" }, column: { conditions: { small: "sprinkles_flexDirection_column_small__i77g9o24", medium: "sprinkles_flexDirection_column_medium__i77g9o25", large: "sprinkles_flexDirection_column_large__i77g9o26", xlarge: "sprinkles_flexDirection_column_xlarge__i77g9o27" }, defaultClass: "sprinkles_flexDirection_column_small__i77g9o24" }, "row-reverse": { conditions: { small: "sprinkles_flexDirection_row-reverse_small__i77g9o28", medium: "sprinkles_flexDirection_row-reverse_medium__i77g9o29", large: "sprinkles_flexDirection_row-reverse_large__i77g9o2a", xlarge: "sprinkles_flexDirection_row-reverse_xlarge__i77g9o2b" }, defaultClass: "sprinkles_flexDirection_row-reverse_small__i77g9o28" }, "column-reverse": { conditions: { small: "sprinkles_flexDirection_column-reverse_small__i77g9o2c", medium: "sprinkles_flexDirection_column-reverse_medium__i77g9o2d", large: "sprinkles_flexDirection_column-reverse_large__i77g9o2e", xlarge: "sprinkles_flexDirection_column-reverse_xlarge__i77g9o2f" }, defaultClass: "sprinkles_flexDirection_column-reverse_small__i77g9o2c" } }, responsiveArray: void 0 }, flexWrap: { values: { nowrap: { conditions: { small: "sprinkles_flexWrap_nowrap_small__i77g9o2g", medium: "sprinkles_flexWrap_nowrap_medium__i77g9o2h", large: "sprinkles_flexWrap_nowrap_large__i77g9o2i", xlarge: "sprinkles_flexWrap_nowrap_xlarge__i77g9o2j" }, defaultClass: "sprinkles_flexWrap_nowrap_small__i77g9o2g" }, wrap: { conditions: { small: "sprinkles_flexWrap_wrap_small__i77g9o2k", medium: "sprinkles_flexWrap_wrap_medium__i77g9o2l", large: "sprinkles_flexWrap_wrap_large__i77g9o2m", xlarge: "sprinkles_flexWrap_wrap_xlarge__i77g9o2n" }, defaultClass: "sprinkles_flexWrap_wrap_small__i77g9o2k" }, "wrap-reverse": { conditions: { small: "sprinkles_flexWrap_wrap-reverse_small__i77g9o2o", medium: "sprinkles_flexWrap_wrap-reverse_medium__i77g9o2p", large: "sprinkles_flexWrap_wrap-reverse_large__i77g9o2q", xlarge: "sprinkles_flexWrap_wrap-reverse_xlarge__i77g9o2r" }, defaultClass: "sprinkles_flexWrap_wrap-reverse_small__i77g9o2o" } }, responsiveArray: void 0 }, justifyContent: { values: { "flex-start": { conditions: { small: "sprinkles_justifyContent_flex-start_small__i77g9o2s", medium: "sprinkles_justifyContent_flex-start_medium__i77g9o2t", large: "sprinkles_justifyContent_flex-start_large__i77g9o2u", xlarge: "sprinkles_justifyContent_flex-start_xlarge__i77g9o2v" }, defaultClass: "sprinkles_justifyContent_flex-start_small__i77g9o2s" }, center: { conditions: { small: "sprinkles_justifyContent_center_small__i77g9o2w", medium: "sprinkles_justifyContent_center_medium__i77g9o2x", large: "sprinkles_justifyContent_center_large__i77g9o2y", xlarge: "sprinkles_justifyContent_center_xlarge__i77g9o2z" }, defaultClass: "sprinkles_justifyContent_center_small__i77g9o2w" }, "flex-end": { conditions: { small: "sprinkles_justifyContent_flex-end_small__i77g9o30", medium: "sprinkles_justifyContent_flex-end_medium__i77g9o31", large: "sprinkles_justifyContent_flex-end_large__i77g9o32", xlarge: "sprinkles_justifyContent_flex-end_xlarge__i77g9o33" }, defaultClass: "sprinkles_justifyContent_flex-end_small__i77g9o30" }, stretch: { conditions: { small: "sprinkles_justifyContent_stretch_small__i77g9o34", medium: "sprinkles_justifyContent_stretch_medium__i77g9o35", large: "sprinkles_justifyContent_stretch_large__i77g9o36", xlarge: "sprinkles_justifyContent_stretch_xlarge__i77g9o37" }, defaultClass: "sprinkles_justifyContent_stretch_small__i77g9o34" }, "space-between": { conditions: { small: "sprinkles_justifyContent_space-between_small__i77g9o38", medium: "sprinkles_justifyContent_space-between_medium__i77g9o39", large: "sprinkles_justifyContent_space-between_large__i77g9o3a", xlarge: "sprinkles_justifyContent_space-between_xlarge__i77g9o3b" }, defaultClass: "sprinkles_justifyContent_space-between_small__i77g9o38" }, "space-around": { conditions: { small: "sprinkles_justifyContent_space-around_small__i77g9o3c", medium: "sprinkles_justifyContent_space-around_medium__i77g9o3d", large: "sprinkles_justifyContent_space-around_large__i77g9o3e", xlarge: "sprinkles_justifyContent_space-around_xlarge__i77g9o3f" }, defaultClass: "sprinkles_justifyContent_space-around_small__i77g9o3c" } }, responsiveArray: void 0 }, alignItems: { values: { "flex-start": { conditions: { small: "sprinkles_alignItems_flex-start_small__i77g9o3g", medium: "sprinkles_alignItems_flex-start_medium__i77g9o3h", large: "sprinkles_alignItems_flex-start_large__i77g9o3i", xlarge: "sprinkles_alignItems_flex-start_xlarge__i77g9o3j" }, defaultClass: "sprinkles_alignItems_flex-start_small__i77g9o3g" }, center: { conditions: { small: "sprinkles_alignItems_center_small__i77g9o3k", medium: "sprinkles_alignItems_center_medium__i77g9o3l", large: "sprinkles_alignItems_center_large__i77g9o3m", xlarge: "sprinkles_alignItems_center_xlarge__i77g9o3n" }, defaultClass: "sprinkles_alignItems_center_small__i77g9o3k" }, "flex-end": { conditions: { small: "sprinkles_alignItems_flex-end_small__i77g9o3o", medium: "sprinkles_alignItems_flex-end_medium__i77g9o3p", large: "sprinkles_alignItems_flex-end_large__i77g9o3q", xlarge: "sprinkles_alignItems_flex-end_xlarge__i77g9o3r" }, defaultClass: "sprinkles_alignItems_flex-end_small__i77g9o3o" }, stretch: { conditions: { small: "sprinkles_alignItems_stretch_small__i77g9o3s", medium: "sprinkles_alignItems_stretch_medium__i77g9o3t", large: "sprinkles_alignItems_stretch_large__i77g9o3u", xlarge: "sprinkles_alignItems_stretch_xlarge__i77g9o3v" }, defaultClass: "sprinkles_alignItems_stretch_small__i77g9o3s" }, baseline: { conditions: { small: "sprinkles_alignItems_baseline_small__i77g9o3w", medium: "sprinkles_alignItems_baseline_medium__i77g9o3x", large: "sprinkles_alignItems_baseline_large__i77g9o3y", xlarge: "sprinkles_alignItems_baseline_xlarge__i77g9o3z" }, defaultClass: "sprinkles_alignItems_baseline_small__i77g9o3w" } }, responsiveArray: void 0 }, alignContent: { values: { "flex-start": { conditions: { small: "sprinkles_alignContent_flex-start_small__i77g9o40", medium: "sprinkles_alignContent_flex-start_medium__i77g9o41", large: "sprinkles_alignContent_flex-start_large__i77g9o42", xlarge: "sprinkles_alignContent_flex-start_xlarge__i77g9o43" }, defaultClass: "sprinkles_alignContent_flex-start_small__i77g9o40" }, center: { conditions: { small: "sprinkles_alignContent_center_small__i77g9o44", medium: "sprinkles_alignContent_center_medium__i77g9o45", large: "sprinkles_alignContent_center_large__i77g9o46", xlarge: "sprinkles_alignContent_center_xlarge__i77g9o47" }, defaultClass: "sprinkles_alignContent_center_small__i77g9o44" }, "flex-end": { conditions: { small: "sprinkles_alignContent_flex-end_small__i77g9o48", medium: "sprinkles_alignContent_flex-end_medium__i77g9o49", large: "sprinkles_alignContent_flex-end_large__i77g9o4a", xlarge: "sprinkles_alignContent_flex-end_xlarge__i77g9o4b" }, defaultClass: "sprinkles_alignContent_flex-end_small__i77g9o48" }, stretch: { conditions: { small: "sprinkles_alignContent_stretch_small__i77g9o4c", medium: "sprinkles_alignContent_stretch_medium__i77g9o4d", large: "sprinkles_alignContent_stretch_large__i77g9o4e", xlarge: "sprinkles_alignContent_stretch_xlarge__i77g9o4f" }, defaultClass: "sprinkles_alignContent_stretch_small__i77g9o4c" } }, responsiveArray: void 0 }, verticalAlign: { values: { top: { conditions: { small: "sprinkles_verticalAlign_top_small__i77g9o4g", medium: "sprinkles_verticalAlign_top_medium__i77g9o4h", large: "sprinkles_verticalAlign_top_large__i77g9o4i", xlarge: "sprinkles_verticalAlign_top_xlarge__i77g9o4j" }, defaultClass: "sprinkles_verticalAlign_top_small__i77g9o4g" }, middle: { conditions: { small: "sprinkles_verticalAlign_middle_small__i77g9o4k", medium: "sprinkles_verticalAlign_middle_medium__i77g9o4l", large: "sprinkles_verticalAlign_middle_large__i77g9o4m", xlarge: "sprinkles_verticalAlign_middle_xlarge__i77g9o4n" }, defaultClass: "sprinkles_verticalAlign_middle_small__i77g9o4k" }, bottom: { conditions: { small: "sprinkles_verticalAlign_bottom_small__i77g9o4o", medium: "sprinkles_verticalAlign_bottom_medium__i77g9o4p", large: "sprinkles_verticalAlign_bottom_large__i77g9o4q", xlarge: "sprinkles_verticalAlign_bottom_xlarge__i77g9o4r" }, defaultClass: "sprinkles_verticalAlign_bottom_small__i77g9o4o" }, baseline: { conditions: { small: "sprinkles_verticalAlign_baseline_small__i77g9o4s", medium: "sprinkles_verticalAlign_baseline_medium__i77g9o4t", large: "sprinkles_verticalAlign_baseline_large__i77g9o4u", xlarge: "sprinkles_verticalAlign_baseline_xlarge__i77g9o4v" }, defaultClass: "sprinkles_verticalAlign_baseline_small__i77g9o4s" }, "text-top": { conditions: { small: "sprinkles_verticalAlign_text-top_small__i77g9o4w", medium: "sprinkles_verticalAlign_text-top_medium__i77g9o4x", large: "sprinkles_verticalAlign_text-top_large__i77g9o4y", xlarge: "sprinkles_verticalAlign_text-top_xlarge__i77g9o4z" }, defaultClass: "sprinkles_verticalAlign_text-top_small__i77g9o4w" }, "text-bottom": { conditions: { small: "sprinkles_verticalAlign_text-bottom_small__i77g9o50", medium: "sprinkles_verticalAlign_text-bottom_medium__i77g9o51", large: "sprinkles_verticalAlign_text-bottom_large__i77g9o52", xlarge: "sprinkles_verticalAlign_text-bottom_xlarge__i77g9o53" }, defaultClass: "sprinkles_verticalAlign_text-bottom_small__i77g9o50" } }, responsiveArray: void 0 }, position: { values: { initial: { conditions: { small: "sprinkles_position_initial_small__i77g9o54", medium: "sprinkles_position_initial_medium__i77g9o55", large: "sprinkles_position_initial_large__i77g9o56", xlarge: "sprinkles_position_initial_xlarge__i77g9o57" }, defaultClass: "sprinkles_position_initial_small__i77g9o54" }, inherit: { conditions: { small: "sprinkles_position_inherit_small__i77g9o58", medium: "sprinkles_position_inherit_medium__i77g9o59", large: "sprinkles_position_inherit_large__i77g9o5a", xlarge: "sprinkles_position_inherit_xlarge__i77g9o5b" }, defaultClass: "sprinkles_position_inherit_small__i77g9o58" }, unset: { conditions: { small: "sprinkles_position_unset_small__i77g9o5c", medium: "sprinkles_position_unset_medium__i77g9o5d", large: "sprinkles_position_unset_large__i77g9o5e", xlarge: "sprinkles_position_unset_xlarge__i77g9o5f" }, defaultClass: "sprinkles_position_unset_small__i77g9o5c" }, relative: { conditions: { small: "sprinkles_position_relative_small__i77g9o5g", medium: "sprinkles_position_relative_medium__i77g9o5h", large: "sprinkles_position_relative_large__i77g9o5i", xlarge: "sprinkles_position_relative_xlarge__i77g9o5j" }, defaultClass: "sprinkles_position_relative_small__i77g9o5g" }, absolute: { conditions: { small: "sprinkles_position_absolute_small__i77g9o5k", medium: "sprinkles_position_absolute_medium__i77g9o5l", large: "sprinkles_position_absolute_large__i77g9o5m", xlarge: "sprinkles_position_absolute_xlarge__i77g9o5n" }, defaultClass: "sprinkles_position_absolute_small__i77g9o5k" }, fixed: { conditions: { small: "sprinkles_position_fixed_small__i77g9o5o", medium: "sprinkles_position_fixed_medium__i77g9o5p", large: "sprinkles_position_fixed_large__i77g9o5q", xlarge: "sprinkles_position_fixed_xlarge__i77g9o5r" }, defaultClass: "sprinkles_position_fixed_small__i77g9o5o" }, sticky: { conditions: { small: "sprinkles_position_sticky_small__i77g9o5s", medium: "sprinkles_position_sticky_medium__i77g9o5t", large: "sprinkles_position_sticky_large__i77g9o5u", xlarge: "sprinkles_position_sticky_xlarge__i77g9o5v" }, defaultClass: "sprinkles_position_sticky_small__i77g9o5s" } }, responsiveArray: void 0 }, margin: { values: { 0: { conditions: { small: "sprinkles_margin_0_small__i77g9o68", medium: "sprinkles_margin_0_medium__i77g9o69", large: "sprinkles_margin_0_large__i77g9o6a", xlarge: "sprinkles_margin_0_xlarge__i77g9o6b" }, defaultClass: "sprinkles_margin_0_small__i77g9o68" }, initial: { conditions: { small: "sprinkles_margin_initial_small__i77g9o5w", medium: "sprinkles_margin_initial_medium__i77g9o5x", large: "sprinkles_margin_initial_large__i77g9o5y", xlarge: "sprinkles_margin_initial_xlarge__i77g9o5z" }, defaultClass: "sprinkles_margin_initial_small__i77g9o5w" }, inherit: { conditions: { small: "sprinkles_margin_inherit_small__i77g9o60", medium: "sprinkles_margin_inherit_medium__i77g9o61", large: "sprinkles_margin_inherit_large__i77g9o62", xlarge: "sprinkles_margin_inherit_xlarge__i77g9o63" }, defaultClass: "sprinkles_margin_inherit_small__i77g9o60" }, unset: { conditions: { small: "sprinkles_margin_unset_small__i77g9o64", medium: "sprinkles_margin_unset_medium__i77g9o65", large: "sprinkles_margin_unset_large__i77g9o66", xlarge: "sprinkles_margin_unset_xlarge__i77g9o67" }, defaultClass: "sprinkles_margin_unset_small__i77g9o64" }, auto: { conditions: { small: "sprinkles_margin_auto_small__i77g9o6c", medium: "sprinkles_margin_auto_medium__i77g9o6d", large: "sprinkles_margin_auto_large__i77g9o6e", xlarge: "sprinkles_margin_auto_xlarge__i77g9o6f" }, defaultClass: "sprinkles_margin_auto_small__i77g9o6c" }, none: { conditions: { small: "sprinkles_margin_none_small__i77g9o6g", medium: "sprinkles_margin_none_medium__i77g9o6h", large: "sprinkles_margin_none_large__i77g9o6i", xlarge: "sprinkles_margin_none_xlarge__i77g9o6j" }, defaultClass: "sprinkles_margin_none_small__i77g9o6g" } }, responsiveArray: void 0 }, padding: { values: { 0: { conditions: { small: "sprinkles_padding_0_small__i77g9o6w", medium: "sprinkles_padding_0_medium__i77g9o6x", large: "sprinkles_padding_0_large__i77g9o6y", xlarge: "sprinkles_padding_0_xlarge__i77g9o6z" }, defaultClass: "sprinkles_padding_0_small__i77g9o6w" }, initial: { conditions: { small: "sprinkles_padding_initial_small__i77g9o6k", medium: "sprinkles_padding_initial_medium__i77g9o6l", large: "sprinkles_padding_initial_large__i77g9o6m", xlarge: "sprinkles_padding_initial_xlarge__i77g9o6n" }, defaultClass: "sprinkles_padding_initial_small__i77g9o6k" }, inherit: { conditions: { small: "sprinkles_padding_inherit_small__i77g9o6o", medium: "sprinkles_padding_inherit_medium__i77g9o6p", large: "sprinkles_padding_inherit_large__i77g9o6q", xlarge: "sprinkles_padding_inherit_xlarge__i77g9o6r" }, defaultClass: "sprinkles_padding_inherit_small__i77g9o6o" }, unset: { conditions: { small: "sprinkles_padding_unset_small__i77g9o6s", medium: "sprinkles_padding_unset_medium__i77g9o6t", large: "sprinkles_padding_unset_large__i77g9o6u", xlarge: "sprinkles_padding_unset_xlarge__i77g9o6v" }, defaultClass: "sprinkles_padding_unset_small__i77g9o6s" }, none: { conditions: { small: "sprinkles_padding_none_small__i77g9o70", medium: "sprinkles_padding_none_medium__i77g9o71", large: "sprinkles_padding_none_large__i77g9o72", xlarge: "sprinkles_padding_none_xlarge__i77g9o73" }, defaultClass: "sprinkles_padding_none_small__i77g9o70" }, auto: { conditions: { small: "sprinkles_padding_auto_small__i77g9o74", medium: "sprinkles_padding_auto_medium__i77g9o75", large: "sprinkles_padding_auto_large__i77g9o76", xlarge: "sprinkles_padding_auto_xlarge__i77g9o77" }, defaultClass: "sprinkles_padding_auto_small__i77g9o74" }, "4px": { conditions: { small: "sprinkles_padding_4px_small__i77g9o78", medium: "sprinkles_padding_4px_medium__i77g9o79", large: "sprinkles_padding_4px_large__i77g9o7a", xlarge: "sprinkles_padding_4px_xlarge__i77g9o7b" }, defaultClass: "sprinkles_padding_4px_small__i77g9o78" }, "8px": { conditions: { small: "sprinkles_padding_8px_small__i77g9o7c", medium: "sprinkles_padding_8px_medium__i77g9o7d", large: "sprinkles_padding_8px_large__i77g9o7e", xlarge: "sprinkles_padding_8px_xlarge__i77g9o7f" }, defaultClass: "sprinkles_padding_8px_small__i77g9o7c" }, "10px": { conditions: { small: "sprinkles_padding_10px_small__i77g9o7g", medium: "sprinkles_padding_10px_medium__i77g9o7h", large: "sprinkles_padding_10px_large__i77g9o7i", xlarge: "sprinkles_padding_10px_xlarge__i77g9o7j" }, defaultClass: "sprinkles_padding_10px_small__i77g9o7g" }, "12px": { conditions: { small: "sprinkles_padding_12px_small__i77g9o7k", medium: "sprinkles_padding_12px_medium__i77g9o7l", large: "sprinkles_padding_12px_large__i77g9o7m", xlarge: "sprinkles_padding_12px_xlarge__i77g9o7n" }, defaultClass: "sprinkles_padding_12px_small__i77g9o7k" }, "16px": { conditions: { small: "sprinkles_padding_16px_small__i77g9o7o", medium: "sprinkles_padding_16px_medium__i77g9o7p", large: "sprinkles_padding_16px_large__i77g9o7q", xlarge: "sprinkles_padding_16px_xlarge__i77g9o7r" }, defaultClass: "sprinkles_padding_16px_small__i77g9o7o" }, "20px": { conditions: { small: "sprinkles_padding_20px_small__i77g9o7s", medium: "sprinkles_padding_20px_medium__i77g9o7t", large: "sprinkles_padding_20px_large__i77g9o7u", xlarge: "sprinkles_padding_20px_xlarge__i77g9o7v" }, defaultClass: "sprinkles_padding_20px_small__i77g9o7s" } }, responsiveArray: void 0 }, width: { values: { auto: { conditions: { small: "sprinkles_width_auto_small__i77g9o7w", medium: "sprinkles_width_auto_medium__i77g9o7x", large: "sprinkles_width_auto_large__i77g9o7y", xlarge: "sprinkles_width_auto_xlarge__i77g9o7z" }, defaultClass: "sprinkles_width_auto_small__i77g9o7w" }, "100%": { conditions: { small: "sprinkles_width_100%_small__i77g9o80", medium: "sprinkles_width_100%_medium__i77g9o81", large: "sprinkles_width_100%_large__i77g9o82", xlarge: "sprinkles_width_100%_xlarge__i77g9o83" }, defaultClass: "sprinkles_width_100%_small__i77g9o80" } }, responsiveArray: void 0 }, height: { values: { auto: { conditions: { small: "sprinkles_height_auto_small__i77g9o84", medium: "sprinkles_height_auto_medium__i77g9o85", large: "sprinkles_height_auto_large__i77g9o86", xlarge: "sprinkles_height_auto_xlarge__i77g9o87" }, defaultClass: "sprinkles_height_auto_small__i77g9o84" }, "100%": { conditions: { small: "sprinkles_height_100%_small__i77g9o88", medium: "sprinkles_height_100%_medium__i77g9o89", large: "sprinkles_height_100%_large__i77g9o8a", xlarge: "sprinkles_height_100%_xlarge__i77g9o8b" }, defaultClass: "sprinkles_height_100%_small__i77g9o88" } }, responsiveArray: void 0 }, gap: { values: { 0: { conditions: { small: "sprinkles_gap_0_small__i77g9o8c", medium: "sprinkles_gap_0_medium__i77g9o8d", large: "sprinkles_gap_0_large__i77g9o8e", xlarge: "sprinkles_gap_0_xlarge__i77g9o8f" }, defaultClass: "sprinkles_gap_0_small__i77g9o8c" }, "4px 4px": { conditions: { small: "sprinkles_gap_4px_4px_small__i77g9o8g", medium: "sprinkles_gap_4px_4px_medium__i77g9o8h", large: "sprinkles_gap_4px_4px_large__i77g9o8i", xlarge: "sprinkles_gap_4px_4px_xlarge__i77g9o8j" }, defaultClass: "sprinkles_gap_4px_4px_small__i77g9o8g" }, "8px 8px": { conditions: { small: "sprinkles_gap_8px_8px_small__i77g9o8k", medium: "sprinkles_gap_8px_8px_medium__i77g9o8l", large: "sprinkles_gap_8px_8px_large__i77g9o8m", xlarge: "sprinkles_gap_8px_8px_xlarge__i77g9o8n" }, defaultClass: "sprinkles_gap_8px_8px_small__i77g9o8k" }, "10px 10px": { conditions: { small: "sprinkles_gap_10px_10px_small__i77g9o8o", medium: "sprinkles_gap_10px_10px_medium__i77g9o8p", large: "sprinkles_gap_10px_10px_large__i77g9o8q", xlarge: "sprinkles_gap_10px_10px_xlarge__i77g9o8r" }, defaultClass: "sprinkles_gap_10px_10px_small__i77g9o8o" }, "12px 12px": { conditions: { small: "sprinkles_gap_12px_12px_small__i77g9o8s", medium: "sprinkles_gap_12px_12px_medium__i77g9o8t", large: "sprinkles_gap_12px_12px_large__i77g9o8u", xlarge: "sprinkles_gap_12px_12px_xlarge__i77g9o8v" }, defaultClass: "sprinkles_gap_12px_12px_small__i77g9o8s" }, "16px 16px": { conditions: { small: "sprinkles_gap_16px_16px_small__i77g9o8w", medium: "sprinkles_gap_16px_16px_medium__i77g9o8x", large: "sprinkles_gap_16px_16px_large__i77g9o8y", xlarge: "sprinkles_gap_16px_16px_xlarge__i77g9o8z" }, defaultClass: "sprinkles_gap_16px_16px_small__i77g9o8w" }, "20px 20px": { conditions: { small: "sprinkles_gap_20px_20px_small__i77g9o90", medium: "sprinkles_gap_20px_20px_medium__i77g9o91", large: "sprinkles_gap_20px_20px_large__i77g9o92", xlarge: "sprinkles_gap_20px_20px_xlarge__i77g9o93" }, defaultClass: "sprinkles_gap_20px_20px_small__i77g9o90" } }, responsiveArray: void 0 }, mixBlendMode: { values: { initial: { conditions: { small: "sprinkles_mixBlendMode_initial_small__i77g9o94", medium: "sprinkles_mixBlendMode_initial_medium__i77g9o95", large: "sprinkles_mixBlendMode_initial_large__i77g9o96", xlarge: "sprinkles_mixBlendMode_initial_xlarge__i77g9o97" }, defaultClass: "sprinkles_mixBlendMode_initial_small__i77g9o94" }, inherit: { conditions: { small: "sprinkles_mixBlendMode_inherit_small__i77g9o98", medium: "sprinkles_mixBlendMode_inherit_medium__i77g9o99", large: "sprinkles_mixBlendMode_inherit_large__i77g9o9a", xlarge: "sprinkles_mixBlendMode_inherit_xlarge__i77g9o9b" }, defaultClass: "sprinkles_mixBlendMode_inherit_small__i77g9o98" }, unset: { conditions: { small: "sprinkles_mixBlendMode_unset_small__i77g9o9c", medium: "sprinkles_mixBlendMode_unset_medium__i77g9o9d", large: "sprinkles_mixBlendMode_unset_large__i77g9o9e", xlarge: "sprinkles_mixBlendMode_unset_xlarge__i77g9o9f" }, defaultClass: "sprinkles_mixBlendMode_unset_small__i77g9o9c" }, difference: { conditions: { small: "sprinkles_mixBlendMode_difference_small__i77g9o9g", medium: "sprinkles_mixBlendMode_difference_medium__i77g9o9h", large: "sprinkles_mixBlendMode_difference_large__i77g9o9i", xlarge: "sprinkles_mixBlendMode_difference_xlarge__i77g9o9j" }, defaultClass: "sprinkles_mixBlendMode_difference_small__i77g9o9g" }, multiply: { conditions: { small: "sprinkles_mixBlendMode_multiply_small__i77g9o9k", medium: "sprinkles_mixBlendMode_multiply_medium__i77g9o9l", large: "sprinkles_mixBlendMode_multiply_large__i77g9o9m", xlarge: "sprinkles_mixBlendMode_multiply_xlarge__i77g9o9n" }, defaultClass: "sprinkles_mixBlendMode_multiply_small__i77g9o9k" }, screen: { conditions: { small: "sprinkles_mixBlendMode_screen_small__i77g9o9o", medium: "sprinkles_mixBlendMode_screen_medium__i77g9o9p", large: "sprinkles_mixBlendMode_screen_large__i77g9o9q", xlarge: "sprinkles_mixBlendMode_screen_xlarge__i77g9o9r" }, defaultClass: "sprinkles_mixBlendMode_screen_small__i77g9o9o" }, overlay: { conditions: { small: "sprinkles_mixBlendMode_overlay_small__i77g9o9s", medium: "sprinkles_mixBlendMode_overlay_medium__i77g9o9t", large: "sprinkles_mixBlendMode_overlay_large__i77g9o9u", xlarge: "sprinkles_mixBlendMode_overlay_xlarge__i77g9o9v" }, defaultClass: "sprinkles_mixBlendMode_overlay_small__i77g9o9s" } }, responsiveArray: void 0 }, fontWeight: { values: { inherit: { conditions: { small: "sprinkles_fontWeight_inherit_small__i77g9o9w", medium: "sprinkles_fontWeight_inherit_medium__i77g9o9x", large: "sprinkles_fontWeight_inherit_large__i77g9o9y", xlarge: "sprinkles_fontWeight_inherit_xlarge__i77g9o9z" }, defaultClass: "sprinkles_fontWeight_inherit_small__i77g9o9w" }, normal: { conditions: { small: "sprinkles_fontWeight_normal_small__i77g9oa0", medium: "sprinkles_fontWeight_normal_medium__i77g9oa1", large: "sprinkles_fontWeight_normal_large__i77g9oa2", xlarge: "sprinkles_fontWeight_normal_xlarge__i77g9oa3" }, defaultClass: "sprinkles_fontWeight_normal_small__i77g9oa0" }, bold: { conditions: { small: "sprinkles_fontWeight_bold_small__i77g9oa4", medium: "sprinkles_fontWeight_bold_medium__i77g9oa5", large: "sprinkles_fontWeight_bold_large__i77g9oa6", xlarge: "sprinkles_fontWeight_bold_xlarge__i77g9oa7" }, defaultClass: "sprinkles_fontWeight_bold_small__i77g9oa4" }, strong: { conditions: { small: "sprinkles_fontWeight_strong_small__i77g9oa8", medium: "sprinkles_fontWeight_strong_medium__i77g9oa9", large: "sprinkles_fontWeight_strong_large__i77g9oaa", xlarge: "sprinkles_fontWeight_strong_xlarge__i77g9oab" }, defaultClass: "sprinkles_fontWeight_strong_small__i77g9oa8" } }, responsiveArray: void 0 }, textTransform: { values: { capitalize: { conditions: { small: "sprinkles_textTransform_capitalize_small__i77g9oac", medium: "sprinkles_textTransform_capitalize_medium__i77g9oad", large: "sprinkles_textTransform_capitalize_large__i77g9oae", xlarge: "sprinkles_textTransform_capitalize_xlarge__i77g9oaf" }, defaultClass: "sprinkles_textTransform_capitalize_small__i77g9oac" }, lowercase: { conditions: { small: "sprinkles_textTransform_lowercase_small__i77g9oag", medium: "sprinkles_textTransform_lowercase_medium__i77g9oah", large: "sprinkles_textTransform_lowercase_large__i77g9oai", xlarge: "sprinkles_textTransform_lowercase_xlarge__i77g9oaj" }, defaultClass: "sprinkles_textTransform_lowercase_small__i77g9oag" }, uppercase: { conditions: { small: "sprinkles_textTransform_uppercase_small__i77g9oak", medium: "sprinkles_textTransform_uppercase_medium__i77g9oal", large: "sprinkles_textTransform_uppercase_large__i77g9oam", xlarge: "sprinkles_textTransform_uppercase_xlarge__i77g9oan" }, defaultClass: "sprinkles_textTransform_uppercase_small__i77g9oak" } }, responsiveArray: void 0 }, transitionProperty: { values: { none: { conditions: { small: "sprinkles_transitionProperty_none_small__i77g9oao", medium: "sprinkles_transitionProperty_none_medium__i77g9oap", large: "sprinkles_transitionProperty_none_large__i77g9oaq", xlarge: "sprinkles_transitionProperty_none_xlarge__i77g9oar" }, defaultClass: "sprinkles_transitionProperty_none_small__i77g9oao" }, all: { conditions: { small: "sprinkles_transitionProperty_all_small__i77g9oas", medium: "sprinkles_transitionProperty_all_medium__i77g9oat", large: "sprinkles_transitionProperty_all_large__i77g9oau", xlarge: "sprinkles_transitionProperty_all_xlarge__i77g9oav" }, defaultClass: "sprinkles_transitionProperty_all_small__i77g9oas" }, initial: { conditions: { small: "sprinkles_transitionProperty_initial_small__i77g9oaw", medium: "sprinkles_transitionProperty_initial_medium__i77g9oax", large: "sprinkles_transitionProperty_initial_large__i77g9oay", xlarge: "sprinkles_transitionProperty_initial_xlarge__i77g9oaz" }, defaultClass: "sprinkles_transitionProperty_initial_small__i77g9oaw" } }, responsiveArray: void 0 }, transitionTimingFunction: { values: { linear: { conditions: { small: "sprinkles_transitionTimingFunction_linear_small__i77g9ob0", medium: "sprinkles_transitionTimingFunction_linear_medium__i77g9ob1", large: "sprinkles_transitionTimingFunction_linear_large__i77g9ob2", xlarge: "sprinkles_transitionTimingFunction_linear_xlarge__i77g9ob3" }, defaultClass: "sprinkles_transitionTimingFunction_linear_small__i77g9ob0" }, "cubic-bezier(0.4, 0, 1, 1)": { conditions: { small: "sprinkles_transitionTimingFunction_cubic-bezier(0.4,_0,_1,_1)_small__i77g9ob4", medium: "sprinkles_transitionTimingFunction_cubic-bezier(0.4,_0,_1,_1)_medium__i77g9ob5", large: "sprinkles_transitionTimingFunction_cubic-bezier(0.4,_0,_1,_1)_large__i77g9ob6", xlarge: "sprinkles_transitionTimingFunction_cubic-bezier(0.4,_0,_1,_1)_xlarge__i77g9ob7" }, defaultClass: "sprinkles_transitionTimingFunction_cubic-bezier(0.4,_0,_1,_1)_small__i77g9ob4" }, "cubic-bezier(0, 0, 0.2, 1)": { conditions: { small: "sprinkles_transitionTimingFunction_cubic-bezier(0,_0,_0.2,_1)_small__i77g9ob8", medium: "sprinkles_transitionTimingFunction_cubic-bezier(0,_0,_0.2,_1)_medium__i77g9ob9", large: "sprinkles_transitionTimingFunction_cubic-bezier(0,_0,_0.2,_1)_large__i77g9oba", xlarge: "sprinkles_transitionTimingFunction_cubic-bezier(0,_0,_0.2,_1)_xlarge__i77g9obb" }, defaultClass: "sprinkles_transitionTimingFunction_cubic-bezier(0,_0,_0.2,_1)_small__i77g9ob8" }, "cubic-bezier(0.42, 0, 0.58, 1)": { conditions: { small: "sprinkles_transitionTimingFunction_cubic-bezier(0.42,_0,_0.58,_1)_small__i77g9obc", medium: "sprinkles_transitionTimingFunction_cubic-bezier(0.42,_0,_0.58,_1)_medium__i77g9obd", large: "sprinkles_transitionTimingFunction_cubic-bezier(0.42,_0,_0.58,_1)_large__i77g9obe", xlarge: "sprinkles_transitionTimingFunction_cubic-bezier(0.42,_0,_0.58,_1)_xlarge__i77g9obf" }, defaultClass: "sprinkles_transitionTimingFunction_cubic-bezier(0.42,_0,_0.58,_1)_small__i77g9obc" } }, responsiveArray: void 0 }, transitionDuration: { values: { "150ms": { conditions: { small: "sprinkles_transitionDuration_150ms_small__i77g9obg", medium: "sprinkles_transitionDuration_150ms_medium__i77g9obh", large: "sprinkles_transitionDuration_150ms_large__i77g9obi", xlarge: "sprinkles_transitionDuration_150ms_xlarge__i77g9obj" }, defaultClass: "sprinkles_transitionDuration_150ms_small__i77g9obg" }, "300ms": { conditions: { small: "sprinkles_transitionDuration_300ms_small__i77g9obk", medium: "sprinkles_transitionDuration_300ms_medium__i77g9obl", large: "sprinkles_transitionDuration_300ms_large__i77g9obm", xlarge: "sprinkles_transitionDuration_300ms_xlarge__i77g9obn" }, defaultClass: "sprinkles_transitionDuration_300ms_small__i77g9obk" }, "500ms": { conditions: { small: "sprinkles_transitionDuration_500ms_small__i77g9obo", medium: "sprinkles_transitionDuration_500ms_medium__i77g9obp", large: "sprinkles_transitionDuration_500ms_large__i77g9obq", xlarge: "sprinkles_transitionDuration_500ms_xlarge__i77g9obr" }, defaultClass: "sprinkles_transitionDuration_500ms_small__i77g9obo" }, "700ms": { conditions: { small: "sprinkles_transitionDuration_700ms_small__i77g9obs", medium: "sprinkles_transitionDuration_700ms_medium__i77g9obt", large: "sprinkles_transitionDuration_700ms_large__i77g9obu", xlarge: "sprinkles_transitionDuration_700ms_xlarge__i77g9obv" }, defaultClass: "sprinkles_transitionDuration_700ms_small__i77g9obs" }, "1000ms": { conditions: { small: "sprinkles_transitionDuration_1000ms_small__i77g9obw", medium: "sprinkles_transitionDuration_1000ms_medium__i77g9obx", large: "sprinkles_transitionDuration_1000ms_large__i77g9oby", xlarge: "sprinkles_transitionDuration_1000ms_xlarge__i77g9obz" }, defaultClass: "sprinkles_transitionDuration_1000ms_small__i77g9obw" } }, responsiveArray: void 0 } } };
  return _.styles.all.responsiveArray = _.conditions.responsiveArray, _.styles.boxSizing.responsiveArray = _.conditions.responsiveArray, _.styles.appearance.responsiveArray = _.conditions.responsiveArray, _.styles.outline.responsiveArray = _.conditions.responsiveArray, _.styles.userSelect.responsiveArray = _.conditions.responsiveArray, _.styles.fontVariantNumeric.responsiveArray = _.conditions.responsiveArray, _.styles.WebkitTapHighlightColor.responsiveArray = _.conditions.responsiveArray, _.styles.display.responsiveArray = _.conditions.responsiveArray, _.styles.flex.responsiveArray = _.conditions.responsiveArray, _.styles.flexDirection.responsiveArray = _.conditions.responsiveArray, _.styles.flexWrap.responsiveArray = _.conditions.responsiveArray, _.styles.justifyContent.responsiveArray = _.conditions.responsiveArray, _.styles.alignItems.responsiveArray = _.conditions.responsiveArray, _.styles.alignContent.responsiveArray = _.conditions.responsiveArray, _.styles.verticalAlign.responsiveArray = _.conditions.responsiveArray, _.styles.position.responsiveArray = _.conditions.responsiveArray, _.styles.margin.responsiveArray = _.conditions.responsiveArray, _.styles.padding.responsiveArray = _.conditions.responsiveArray, _.styles.width.responsiveArray = _.conditions.responsiveArray, _.styles.height.responsiveArray = _.conditions.responsiveArray, _.styles.gap.responsiveArray = _.conditions.responsiveArray, _.styles.mixBlendMode.responsiveArray = _.conditions.responsiveArray, _.styles.fontWeight.responsiveArray = _.conditions.responsiveArray, _.styles.textTransform.responsiveArray = _.conditions.responsiveArray, _.styles.transitionProperty.responsiveArray = _.conditions.responsiveArray, _.styles.transitionTimingFunction.responsiveArray = _.conditions.responsiveArray, _.styles.transitionDuration.responsiveArray = _.conditions.responsiveArray, _;
}(), { conditions: { defaultCondition: "light", conditionNames: ["light", "dark"], responsiveArray: void 0 }, styles: { color: { values: { transparent: { conditions: { light: "sprinkles_color_transparent_light__i77g9oc0", dark: "sprinkles_color_transparent_dark__i77g9oc1" }, defaultClass: "sprinkles_color_transparent_light__i77g9oc0" }, current: { conditions: { light: "sprinkles_color_current_light__i77g9oc2", dark: "sprinkles_color_current_dark__i77g9oc3" }, defaultClass: "sprinkles_color_current_light__i77g9oc2" }, white: { conditions: { light: "sprinkles_color_white_light__i77g9oc4", dark: "sprinkles_color_white_dark__i77g9oc5" }, defaultClass: "sprinkles_color_white_light__i77g9oc4" }, black: { conditions: { light: "sprinkles_color_black_light__i77g9oc6", dark: "sprinkles_color_black_dark__i77g9oc7" }, defaultClass: "sprinkles_color_black_light__i77g9oc6" }, jade0: { conditions: { light: "sprinkles_color_jade0_light__i77g9oc8", dark: "sprinkles_color_jade0_dark__i77g9oc9" }, defaultClass: "sprinkles_color_jade0_light__i77g9oc8" }, jade1: { conditions: { light: "sprinkles_color_jade1_light__i77g9oca", dark: "sprinkles_color_jade1_dark__i77g9ocb" }, defaultClass: "sprinkles_color_jade1_light__i77g9oca" }, jade2: { conditions: { light: "sprinkles_color_jade2_light__i77g9occ", dark: "sprinkles_color_jade2_dark__i77g9ocd" }, defaultClass: "sprinkles_color_jade2_light__i77g9occ" }, jade3: { conditions: { light: "sprinkles_color_jade3_light__i77g9oce", dark: "sprinkles_color_jade3_dark__i77g9ocf" }, defaultClass: "sprinkles_color_jade3_light__i77g9oce" }, jade4: { conditions: { light: "sprinkles_color_jade4_light__i77g9ocg", dark: "sprinkles_color_jade4_dark__i77g9och" }, defaultClass: "sprinkles_color_jade4_light__i77g9ocg" }, jade5: { conditions: { light: "sprinkles_color_jade5_light__i77g9oci", dark: "sprinkles_color_jade5_dark__i77g9ocj" }, defaultClass: "sprinkles_color_jade5_light__i77g9oci" }, jade6: { conditions: { light: "sprinkles_color_jade6_light__i77g9ock", dark: "sprinkles_color_jade6_dark__i77g9ocl" }, defaultClass: "sprinkles_color_jade6_light__i77g9ock" }, jade7: { conditions: { light: "sprinkles_color_jade7_light__i77g9ocm", dark: "sprinkles_color_jade7_dark__i77g9ocn" }, defaultClass: "sprinkles_color_jade7_light__i77g9ocm" }, jade8: { conditions: { light: "sprinkles_color_jade8_light__i77g9oco", dark: "sprinkles_color_jade8_dark__i77g9ocp" }, defaultClass: "sprinkles_color_jade8_light__i77g9oco" }, jade9: { conditions: { light: "sprinkles_color_jade9_light__i77g9ocq", dark: "sprinkles_color_jade9_dark__i77g9ocr" }, defaultClass: "sprinkles_color_jade9_light__i77g9ocq" }, jade10: { conditions: { light: "sprinkles_color_jade10_light__i77g9ocs", dark: "sprinkles_color_jade10_dark__i77g9oct" }, defaultClass: "sprinkles_color_jade10_light__i77g9ocs" }, jade11: { conditions: { light: "sprinkles_color_jade11_light__i77g9ocu", dark: "sprinkles_color_jade11_dark__i77g9ocv" }, defaultClass: "sprinkles_color_jade11_light__i77g9ocu" }, jade12: { conditions: { light: "sprinkles_color_jade12_light__i77g9ocw", dark: "sprinkles_color_jade12_dark__i77g9ocx" }, defaultClass: "sprinkles_color_jade12_light__i77g9ocw" }, sapphire0: { conditions: { light: "sprinkles_color_sapphire0_light__i77g9ocy", dark: "sprinkles_color_sapphire0_dark__i77g9ocz" }, defaultClass: "sprinkles_color_sapphire0_light__i77g9ocy" }, sapphire1: { conditions: { light: "sprinkles_color_sapphire1_light__i77g9od0", dark: "sprinkles_color_sapphire1_dark__i77g9od1" }, defaultClass: "sprinkles_color_sapphire1_light__i77g9od0" }, sapphire2: { conditions: { light: "sprinkles_color_sapphire2_light__i77g9od2", dark: "sprinkles_color_sapphire2_dark__i77g9od3" }, defaultClass: "sprinkles_color_sapphire2_light__i77g9od2" }, sapphire3: { conditions: { light: "sprinkles_color_sapphire3_light__i77g9od4", dark: "sprinkles_color_sapphire3_dark__i77g9od5" }, defaultClass: "sprinkles_color_sapphire3_light__i77g9od4" }, sapphire4: { conditions: { light: "sprinkles_color_sapphire4_light__i77g9od6", dark: "sprinkles_color_sapphire4_dark__i77g9od7" }, defaultClass: "sprinkles_color_sapphire4_light__i77g9od6" }, sapphire5: { conditions: { light: "sprinkles_color_sapphire5_light__i77g9od8", dark: "sprinkles_color_sapphire5_dark__i77g9od9" }, defaultClass: "sprinkles_color_sapphire5_light__i77g9od8" }, sapphire6: { conditions: { light: "sprinkles_color_sapphire6_light__i77g9oda", dark: "sprinkles_color_sapphire6_dark__i77g9odb" }, defaultClass: "sprinkles_color_sapphire6_light__i77g9oda" }, sapphire7: { conditions: { light: "sprinkles_color_sapphire7_light__i77g9odc", dark: "sprinkles_color_sapphire7_dark__i77g9odd" }, defaultClass: "sprinkles_color_sapphire7_light__i77g9odc" }, sapphire8: { conditions: { light: "sprinkles_color_sapphire8_light__i77g9ode", dark: "sprinkles_color_sapphire8_dark__i77g9odf" }, defaultClass: "sprinkles_color_sapphire8_light__i77g9ode" }, sapphire9: { conditions: { light: "sprinkles_color_sapphire9_light__i77g9odg", dark: "sprinkles_color_sapphire9_dark__i77g9odh" }, defaultClass: "sprinkles_color_sapphire9_light__i77g9odg" }, sapphire10: { conditions: { light: "sprinkles_color_sapphire10_light__i77g9odi", dark: "sprinkles_color_sapphire10_dark__i77g9odj" }, defaultClass: "sprinkles_color_sapphire10_light__i77g9odi" }, sapphire11: { conditions: { light: "sprinkles_color_sapphire11_light__i77g9odk", dark: "sprinkles_color_sapphire11_dark__i77g9odl" }, defaultClass: "sprinkles_color_sapphire11_light__i77g9odk" }, sapphire12: { conditions: { light: "sprinkles_color_sapphire12_light__i77g9odm", dark: "sprinkles_color_sapphire12_dark__i77g9odn" }, defaultClass: "sprinkles_color_sapphire12_light__i77g9odm" }, peach0: { conditions: { light: "sprinkles_color_peach0_light__i77g9odo", dark: "sprinkles_color_peach0_dark__i77g9odp" }, defaultClass: "sprinkles_color_peach0_light__i77g9odo" }, peach1: { conditions: { light: "sprinkles_color_peach1_light__i77g9odq", dark: "sprinkles_color_peach1_dark__i77g9odr" }, defaultClass: "sprinkles_color_peach1_light__i77g9odq" }, peach2: { conditions: { light: "sprinkles_color_peach2_light__i77g9ods", dark: "sprinkles_color_peach2_dark__i77g9odt" }, defaultClass: "sprinkles_color_peach2_light__i77g9ods" }, peach3: { conditions: { light: "sprinkles_color_peach3_light__i77g9odu", dark: "sprinkles_color_peach3_dark__i77g9odv" }, defaultClass: "sprinkles_color_peach3_light__i77g9odu" }, peach4: { conditions: { light: "sprinkles_color_peach4_light__i77g9odw", dark: "sprinkles_color_peach4_dark__i77g9odx" }, defaultClass: "sprinkles_color_peach4_light__i77g9odw" }, peach5: { conditions: { light: "sprinkles_color_peach5_light__i77g9ody", dark: "sprinkles_color_peach5_dark__i77g9odz" }, defaultClass: "sprinkles_color_peach5_light__i77g9ody" }, peach6: { conditions: { light: "sprinkles_color_peach6_light__i77g9oe0", dark: "sprinkles_color_peach6_dark__i77g9oe1" }, defaultClass: "sprinkles_color_peach6_light__i77g9oe0" }, peach7: { conditions: { light: "sprinkles_color_peach7_light__i77g9oe2", dark: "sprinkles_color_peach7_dark__i77g9oe3" }, defaultClass: "sprinkles_color_peach7_light__i77g9oe2" }, peach8: { conditions: { light: "sprinkles_color_peach8_light__i77g9oe4", dark: "sprinkles_color_peach8_dark__i77g9oe5" }, defaultClass: "sprinkles_color_peach8_light__i77g9oe4" }, peach9: { conditions: { light: "sprinkles_color_peach9_light__i77g9oe6", dark: "sprinkles_color_peach9_dark__i77g9oe7" }, defaultClass: "sprinkles_color_peach9_light__i77g9oe6" }, peach10: { conditions: { light: "sprinkles_color_peach10_light__i77g9oe8", dark: "sprinkles_color_peach10_dark__i77g9oe9" }, defaultClass: "sprinkles_color_peach10_light__i77g9oe8" }, peach11: { conditions: { light: "sprinkles_color_peach11_light__i77g9oea", dark: "sprinkles_color_peach11_dark__i77g9oeb" }, defaultClass: "sprinkles_color_peach11_light__i77g9oea" }, peach12: { conditions: { light: "sprinkles_color_peach12_light__i77g9oec", dark: "sprinkles_color_peach12_dark__i77g9oed" }, defaultClass: "sprinkles_color_peach12_light__i77g9oec" }, carbon0: { conditions: { light: "sprinkles_color_carbon0_light__i77g9oee", dark: "sprinkles_color_carbon0_dark__i77g9oef" }, defaultClass: "sprinkles_color_carbon0_light__i77g9oee" }, carbon1: { conditions: { light: "sprinkles_color_carbon1_light__i77g9oeg", dark: "sprinkles_color_carbon1_dark__i77g9oeh" }, defaultClass: "sprinkles_color_carbon1_light__i77g9oeg" }, carbon2: { conditions: { light: "sprinkles_color_carbon2_light__i77g9oei", dark: "sprinkles_color_carbon2_dark__i77g9oej" }, defaultClass: "sprinkles_color_carbon2_light__i77g9oei" }, carbon3: { conditions: { light: "sprinkles_color_carbon3_light__i77g9oek", dark: "sprinkles_color_carbon3_dark__i77g9oel" }, defaultClass: "sprinkles_color_carbon3_light__i77g9oek" }, carbon4: { conditions: { light: "sprinkles_color_carbon4_light__i77g9oem", dark: "sprinkles_color_carbon4_dark__i77g9oen" }, defaultClass: "sprinkles_color_carbon4_light__i77g9oem" }, carbon5: { conditions: { light: "sprinkles_color_carbon5_light__i77g9oeo", dark: "sprinkles_color_carbon5_dark__i77g9oep" }, defaultClass: "sprinkles_color_carbon5_light__i77g9oeo" }, carbon6: { conditions: { light: "sprinkles_color_carbon6_light__i77g9oeq", dark: "sprinkles_color_carbon6_dark__i77g9oer" }, defaultClass: "sprinkles_color_carbon6_light__i77g9oeq" }, carbon7: { conditions: { light: "sprinkles_color_carbon7_light__i77g9oes", dark: "sprinkles_color_carbon7_dark__i77g9oet" }, defaultClass: "sprinkles_color_carbon7_light__i77g9oes" }, carbon8: { conditions: { light: "sprinkles_color_carbon8_light__i77g9oeu", dark: "sprinkles_color_carbon8_dark__i77g9oev" }, defaultClass: "sprinkles_color_carbon8_light__i77g9oeu" }, carbon9: { conditions: { light: "sprinkles_color_carbon9_light__i77g9oew", dark: "sprinkles_color_carbon9_dark__i77g9oex" }, defaultClass: "sprinkles_color_carbon9_light__i77g9oew" }, carbon10: { conditions: { light: "sprinkles_color_carbon10_light__i77g9oey", dark: "sprinkles_color_carbon10_dark__i77g9oez" }, defaultClass: "sprinkles_color_carbon10_light__i77g9oey" }, carbon11: { conditions: { light: "sprinkles_color_carbon11_light__i77g9of0", dark: "sprinkles_color_carbon11_dark__i77g9of1" }, defaultClass: "sprinkles_color_carbon11_light__i77g9of0" }, carbon12: { conditions: { light: "sprinkles_color_carbon12_light__i77g9of2", dark: "sprinkles_color_carbon12_dark__i77g9of3" }, defaultClass: "sprinkles_color_carbon12_light__i77g9of2" }, slate0: { conditions: { light: "sprinkles_color_slate0_light__i77g9of4", dark: "sprinkles_color_slate0_dark__i77g9of5" }, defaultClass: "sprinkles_color_slate0_light__i77g9of4" }, slate1: { conditions: { light: "sprinkles_color_slate1_light__i77g9of6", dark: "sprinkles_color_slate1_dark__i77g9of7" }, defaultClass: "sprinkles_color_slate1_light__i77g9of6" }, slate2: { conditions: { light: "sprinkles_color_slate2_light__i77g9of8", dark: "sprinkles_color_slate2_dark__i77g9of9" }, defaultClass: "sprinkles_color_slate2_light__i77g9of8" }, slate3: { conditions: { light: "sprinkles_color_slate3_light__i77g9ofa", dark: "sprinkles_color_slate3_dark__i77g9ofb" }, defaultClass: "sprinkles_color_slate3_light__i77g9ofa" }, slate4: { conditions: { light: "sprinkles_color_slate4_light__i77g9ofc", dark: "sprinkles_color_slate4_dark__i77g9ofd" }, defaultClass: "sprinkles_color_slate4_light__i77g9ofc" }, slate5: { conditions: { light: "sprinkles_color_slate5_light__i77g9ofe", dark: "sprinkles_color_slate5_dark__i77g9off" }, defaultClass: "sprinkles_color_slate5_light__i77g9ofe" }, slate6: { conditions: { light: "sprinkles_color_slate6_light__i77g9ofg", dark: "sprinkles_color_slate6_dark__i77g9ofh" }, defaultClass: "sprinkles_color_slate6_light__i77g9ofg" }, slate7: { conditions: { light: "sprinkles_color_slate7_light__i77g9ofi", dark: "sprinkles_color_slate7_dark__i77g9ofj" }, defaultClass: "sprinkles_color_slate7_light__i77g9ofi" }, slate8: { conditions: { light: "sprinkles_color_slate8_light__i77g9ofk", dark: "sprinkles_color_slate8_dark__i77g9ofl" }, defaultClass: "sprinkles_color_slate8_light__i77g9ofk" }, slate9: { conditions: { light: "sprinkles_color_slate9_light__i77g9ofm", dark: "sprinkles_color_slate9_dark__i77g9ofn" }, defaultClass: "sprinkles_color_slate9_light__i77g9ofm" }, slate10: { conditions: { light: "sprinkles_color_slate10_light__i77g9ofo", dark: "sprinkles_color_slate10_dark__i77g9ofp" }, defaultClass: "sprinkles_color_slate10_light__i77g9ofo" }, slate11: { conditions: { light: "sprinkles_color_slate11_light__i77g9ofq", dark: "sprinkles_color_slate11_dark__i77g9ofr" }, defaultClass: "sprinkles_color_slate11_light__i77g9ofq" }, slate12: { conditions: { light: "sprinkles_color_slate12_light__i77g9ofs", dark: "sprinkles_color_slate12_dark__i77g9oft" }, defaultClass: "sprinkles_color_slate12_light__i77g9ofs" }, azure0: { conditions: { light: "sprinkles_color_azure0_light__i77g9ofu", dark: "sprinkles_color_azure0_dark__i77g9ofv" }, defaultClass: "sprinkles_color_azure0_light__i77g9ofu" }, azure1: { conditions: { light: "sprinkles_color_azure1_light__i77g9ofw", dark: "sprinkles_color_azure1_dark__i77g9ofx" }, defaultClass: "sprinkles_color_azure1_light__i77g9ofw" }, azure2: { conditions: { light: "sprinkles_color_azure2_light__i77g9ofy", dark: "sprinkles_color_azure2_dark__i77g9ofz" }, defaultClass: "sprinkles_color_azure2_light__i77g9ofy" }, azure3: { conditions: { light: "sprinkles_color_azure3_light__i77g9og0", dark: "sprinkles_color_azure3_dark__i77g9og1" }, defaultClass: "sprinkles_color_azure3_light__i77g9og0" }, azure4: { conditions: { light: "sprinkles_color_azure4_light__i77g9og2", dark: "sprinkles_color_azure4_dark__i77g9og3" }, defaultClass: "sprinkles_color_azure4_light__i77g9og2" }, azure5: { conditions: { light: "sprinkles_color_azure5_light__i77g9og4", dark: "sprinkles_color_azure5_dark__i77g9og5" }, defaultClass: "sprinkles_color_azure5_light__i77g9og4" }, azure6: { conditions: { light: "sprinkles_color_azure6_light__i77g9og6", dark: "sprinkles_color_azure6_dark__i77g9og7" }, defaultClass: "sprinkles_color_azure6_light__i77g9og6" }, azure7: { conditions: { light: "sprinkles_color_azure7_light__i77g9og8", dark: "sprinkles_color_azure7_dark__i77g9og9" }, defaultClass: "sprinkles_color_azure7_light__i77g9og8" }, azure8: { conditions: { light: "sprinkles_color_azure8_light__i77g9oga", dark: "sprinkles_color_azure8_dark__i77g9ogb" }, defaultClass: "sprinkles_color_azure8_light__i77g9oga" }, azure9: { conditions: { light: "sprinkles_color_azure9_light__i77g9ogc", dark: "sprinkles_color_azure9_dark__i77g9ogd" }, defaultClass: "sprinkles_color_azure9_light__i77g9ogc" }, azure10: { conditions: { light: "sprinkles_color_azure10_light__i77g9oge", dark: "sprinkles_color_azure10_dark__i77g9ogf" }, defaultClass: "sprinkles_color_azure10_light__i77g9oge" }, azure11: { conditions: { light: "sprinkles_color_azure11_light__i77g9ogg", dark: "sprinkles_color_azure11_dark__i77g9ogh" }, defaultClass: "sprinkles_color_azure11_light__i77g9ogg" }, azure12: { conditions: { light: "sprinkles_color_azure12_light__i77g9ogi", dark: "sprinkles_color_azure12_dark__i77g9ogj" }, defaultClass: "sprinkles_color_azure12_light__i77g9ogi" }, cherry0: { conditions: { light: "sprinkles_color_cherry0_light__i77g9ogk", dark: "sprinkles_color_cherry0_dark__i77g9ogl" }, defaultClass: "sprinkles_color_cherry0_light__i77g9ogk" }, cherry1: { conditions: { light: "sprinkles_color_cherry1_light__i77g9ogm", dark: "sprinkles_color_cherry1_dark__i77g9ogn" }, defaultClass: "sprinkles_color_cherry1_light__i77g9ogm" }, cherry2: { conditions: { light: "sprinkles_color_cherry2_light__i77g9ogo", dark: "sprinkles_color_cherry2_dark__i77g9ogp" }, defaultClass: "sprinkles_color_cherry2_light__i77g9ogo" }, cherry3: { conditions: { light: "sprinkles_color_cherry3_light__i77g9ogq", dark: "sprinkles_color_cherry3_dark__i77g9ogr" }, defaultClass: "sprinkles_color_cherry3_light__i77g9ogq" }, cherry4: { conditions: { light: "sprinkles_color_cherry4_light__i77g9ogs", dark: "sprinkles_color_cherry4_dark__i77g9ogt" }, defaultClass: "sprinkles_color_cherry4_light__i77g9ogs" }, cherry5: { conditions: { light: "sprinkles_color_cherry5_light__i77g9ogu", dark: "sprinkles_color_cherry5_dark__i77g9ogv" }, defaultClass: "sprinkles_color_cherry5_light__i77g9ogu" }, cherry6: { conditions: { light: "sprinkles_color_cherry6_light__i77g9ogw", dark: "sprinkles_color_cherry6_dark__i77g9ogx" }, defaultClass: "sprinkles_color_cherry6_light__i77g9ogw" }, cherry7: { conditions: { light: "sprinkles_color_cherry7_light__i77g9ogy", dark: "sprinkles_color_cherry7_dark__i77g9ogz" }, defaultClass: "sprinkles_color_cherry7_light__i77g9ogy" }, cherry8: { conditions: { light: "sprinkles_color_cherry8_light__i77g9oh0", dark: "sprinkles_color_cherry8_dark__i77g9oh1" }, defaultClass: "sprinkles_color_cherry8_light__i77g9oh0" }, cherry9: { conditions: { light: "sprinkles_color_cherry9_light__i77g9oh2", dark: "sprinkles_color_cherry9_dark__i77g9oh3" }, defaultClass: "sprinkles_color_cherry9_light__i77g9oh2" }, cherry10: { conditions: { light: "sprinkles_color_cherry10_light__i77g9oh4", dark: "sprinkles_color_cherry10_dark__i77g9oh5" }, defaultClass: "sprinkles_color_cherry10_light__i77g9oh4" }, cherry11: { conditions: { light: "sprinkles_color_cherry11_light__i77g9oh6", dark: "sprinkles_color_cherry11_dark__i77g9oh7" }, defaultClass: "sprinkles_color_cherry11_light__i77g9oh6" }, cherry12: { conditions: { light: "sprinkles_color_cherry12_light__i77g9oh8", dark: "sprinkles_color_cherry12_dark__i77g9oh9" }, defaultClass: "sprinkles_color_cherry12_light__i77g9oh8" }, lime0: { conditions: { light: "sprinkles_color_lime0_light__i77g9oha", dark: "sprinkles_color_lime0_dark__i77g9ohb" }, defaultClass: "sprinkles_color_lime0_light__i77g9oha" }, lime1: { conditions: { light: "sprinkles_color_lime1_light__i77g9ohc", dark: "sprinkles_color_lime1_dark__i77g9ohd" }, defaultClass: "sprinkles_color_lime1_light__i77g9ohc" }, lime2: { conditions: { light: "sprinkles_color_lime2_light__i77g9ohe", dark: "sprinkles_color_lime2_dark__i77g9ohf" }, defaultClass: "sprinkles_color_lime2_light__i77g9ohe" }, lime3: { conditions: { light: "sprinkles_color_lime3_light__i77g9ohg", dark: "sprinkles_color_lime3_dark__i77g9ohh" }, defaultClass: "sprinkles_color_lime3_light__i77g9ohg" }, lime4: { conditions: { light: "sprinkles_color_lime4_light__i77g9ohi", dark: "sprinkles_color_lime4_dark__i77g9ohj" }, defaultClass: "sprinkles_color_lime4_light__i77g9ohi" }, lime5: { conditions: { light: "sprinkles_color_lime5_light__i77g9ohk", dark: "sprinkles_color_lime5_dark__i77g9ohl" }, defaultClass: "sprinkles_color_lime5_light__i77g9ohk" }, lime6: { conditions: { light: "sprinkles_color_lime6_light__i77g9ohm", dark: "sprinkles_color_lime6_dark__i77g9ohn" }, defaultClass: "sprinkles_color_lime6_light__i77g9ohm" }, lime7: { conditions: { light: "sprinkles_color_lime7_light__i77g9oho", dark: "sprinkles_color_lime7_dark__i77g9ohp" }, defaultClass: "sprinkles_color_lime7_light__i77g9oho" }, lime8: { conditions: { light: "sprinkles_color_lime8_light__i77g9ohq", dark: "sprinkles_color_lime8_dark__i77g9ohr" }, defaultClass: "sprinkles_color_lime8_light__i77g9ohq" }, lime9: { conditions: { light: "sprinkles_color_lime9_light__i77g9ohs", dark: "sprinkles_color_lime9_dark__i77g9oht" }, defaultClass: "sprinkles_color_lime9_light__i77g9ohs" }, lime10: { conditions: { light: "sprinkles_color_lime10_light__i77g9ohu", dark: "sprinkles_color_lime10_dark__i77g9ohv" }, defaultClass: "sprinkles_color_lime10_light__i77g9ohu" }, lime11: { conditions: { light: "sprinkles_color_lime11_light__i77g9ohw", dark: "sprinkles_color_lime11_dark__i77g9ohx" }, defaultClass: "sprinkles_color_lime11_light__i77g9ohw" }, lime12: { conditions: { light: "sprinkles_color_lime12_light__i77g9ohy", dark: "sprinkles_color_lime12_dark__i77g9ohz" }, defaultClass: "sprinkles_color_lime12_light__i77g9ohy" }, lemon0: { conditions: { light: "sprinkles_color_lemon0_light__i77g9oi0", dark: "sprinkles_color_lemon0_dark__i77g9oi1" }, defaultClass: "sprinkles_color_lemon0_light__i77g9oi0" }, lemon1: { conditions: { light: "sprinkles_color_lemon1_light__i77g9oi2", dark: "sprinkles_color_lemon1_dark__i77g9oi3" }, defaultClass: "sprinkles_color_lemon1_light__i77g9oi2" }, lemon2: { conditions: { light: "sprinkles_color_lemon2_light__i77g9oi4", dark: "sprinkles_color_lemon2_dark__i77g9oi5" }, defaultClass: "sprinkles_color_lemon2_light__i77g9oi4" }, lemon3: { conditions: { light: "sprinkles_color_lemon3_light__i77g9oi6", dark: "sprinkles_color_lemon3_dark__i77g9oi7" }, defaultClass: "sprinkles_color_lemon3_light__i77g9oi6" }, lemon4: { conditions: { light: "sprinkles_color_lemon4_light__i77g9oi8", dark: "sprinkles_color_lemon4_dark__i77g9oi9" }, defaultClass: "sprinkles_color_lemon4_light__i77g9oi8" }, lemon5: { conditions: { light: "sprinkles_color_lemon5_light__i77g9oia", dark: "sprinkles_color_lemon5_dark__i77g9oib" }, defaultClass: "sprinkles_color_lemon5_light__i77g9oia" }, lemon6: { conditions: { light: "sprinkles_color_lemon6_light__i77g9oic", dark: "sprinkles_color_lemon6_dark__i77g9oid" }, defaultClass: "sprinkles_color_lemon6_light__i77g9oic" }, lemon7: { conditions: { light: "sprinkles_color_lemon7_light__i77g9oie", dark: "sprinkles_color_lemon7_dark__i77g9oif" }, defaultClass: "sprinkles_color_lemon7_light__i77g9oie" }, lemon8: { conditions: { light: "sprinkles_color_lemon8_light__i77g9oig", dark: "sprinkles_color_lemon8_dark__i77g9oih" }, defaultClass: "sprinkles_color_lemon8_light__i77g9oig" }, lemon9: { conditions: { light: "sprinkles_color_lemon9_light__i77g9oii", dark: "sprinkles_color_lemon9_dark__i77g9oij" }, defaultClass: "sprinkles_color_lemon9_light__i77g9oii" }, lemon10: { conditions: { light: "sprinkles_color_lemon10_light__i77g9oik", dark: "sprinkles_color_lemon10_dark__i77g9oil" }, defaultClass: "sprinkles_color_lemon10_light__i77g9oik" }, lemon11: { conditions: { light: "sprinkles_color_lemon11_light__i77g9oim", dark: "sprinkles_color_lemon11_dark__i77g9oin" }, defaultClass: "sprinkles_color_lemon11_light__i77g9oim" }, lemon12: { conditions: { light: "sprinkles_color_lemon12_light__i77g9oio", dark: "sprinkles_color_lemon12_dark__i77g9oip" }, defaultClass: "sprinkles_color_lemon12_light__i77g9oio" } } }, backgroundColor: { values: { transparent: { conditions: { light: "sprinkles_backgroundColor_transparent_light__i77g9oiq", dark: "sprinkles_backgroundColor_transparent_dark__i77g9oir" }, defaultClass: "sprinkles_backgroundColor_transparent_light__i77g9oiq" }, current: { conditions: { light: "sprinkles_backgroundColor_current_light__i77g9ois", dark: "sprinkles_backgroundColor_current_dark__i77g9oit" }, defaultClass: "sprinkles_backgroundColor_current_light__i77g9ois" }, white: { conditions: { light: "sprinkles_backgroundColor_white_light__i77g9oiu", dark: "sprinkles_backgroundColor_white_dark__i77g9oiv" }, defaultClass: "sprinkles_backgroundColor_white_light__i77g9oiu" }, black: { conditions: { light: "sprinkles_backgroundColor_black_light__i77g9oiw", dark: "sprinkles_backgroundColor_black_dark__i77g9oix" }, defaultClass: "sprinkles_backgroundColor_black_light__i77g9oiw" }, jade0: { conditions: { light: "sprinkles_backgroundColor_jade0_light__i77g9oiy", dark: "sprinkles_backgroundColor_jade0_dark__i77g9oiz" }, defaultClass: "sprinkles_backgroundColor_jade0_light__i77g9oiy" }, jade1: { conditions: { light: "sprinkles_backgroundColor_jade1_light__i77g9oj0", dark: "sprinkles_backgroundColor_jade1_dark__i77g9oj1" }, defaultClass: "sprinkles_backgroundColor_jade1_light__i77g9oj0" }, jade2: { conditions: { light: "sprinkles_backgroundColor_jade2_light__i77g9oj2", dark: "sprinkles_backgroundColor_jade2_dark__i77g9oj3" }, defaultClass: "sprinkles_backgroundColor_jade2_light__i77g9oj2" }, jade3: { conditions: { light: "sprinkles_backgroundColor_jade3_light__i77g9oj4", dark: "sprinkles_backgroundColor_jade3_dark__i77g9oj5" }, defaultClass: "sprinkles_backgroundColor_jade3_light__i77g9oj4" }, jade4: { conditions: { light: "sprinkles_backgroundColor_jade4_light__i77g9oj6", dark: "sprinkles_backgroundColor_jade4_dark__i77g9oj7" }, defaultClass: "sprinkles_backgroundColor_jade4_light__i77g9oj6" }, jade5: { conditions: { light: "sprinkles_backgroundColor_jade5_light__i77g9oj8", dark: "sprinkles_backgroundColor_jade5_dark__i77g9oj9" }, defaultClass: "sprinkles_backgroundColor_jade5_light__i77g9oj8" }, jade6: { conditions: { light: "sprinkles_backgroundColor_jade6_light__i77g9oja", dark: "sprinkles_backgroundColor_jade6_dark__i77g9ojb" }, defaultClass: "sprinkles_backgroundColor_jade6_light__i77g9oja" }, jade7: { conditions: { light: "sprinkles_backgroundColor_jade7_light__i77g9ojc", dark: "sprinkles_backgroundColor_jade7_dark__i77g9ojd" }, defaultClass: "sprinkles_backgroundColor_jade7_light__i77g9ojc" }, jade8: { conditions: { light: "sprinkles_backgroundColor_jade8_light__i77g9oje", dark: "sprinkles_backgroundColor_jade8_dark__i77g9ojf" }, defaultClass: "sprinkles_backgroundColor_jade8_light__i77g9oje" }, jade9: { conditions: { light: "sprinkles_backgroundColor_jade9_light__i77g9ojg", dark: "sprinkles_backgroundColor_jade9_dark__i77g9ojh" }, defaultClass: "sprinkles_backgroundColor_jade9_light__i77g9ojg" }, jade10: { conditions: { light: "sprinkles_backgroundColor_jade10_light__i77g9oji", dark: "sprinkles_backgroundColor_jade10_dark__i77g9ojj" }, defaultClass: "sprinkles_backgroundColor_jade10_light__i77g9oji" }, jade11: { conditions: { light: "sprinkles_backgroundColor_jade11_light__i77g9ojk", dark: "sprinkles_backgroundColor_jade11_dark__i77g9ojl" }, defaultClass: "sprinkles_backgroundColor_jade11_light__i77g9ojk" }, jade12: { conditions: { light: "sprinkles_backgroundColor_jade12_light__i77g9ojm", dark: "sprinkles_backgroundColor_jade12_dark__i77g9ojn" }, defaultClass: "sprinkles_backgroundColor_jade12_light__i77g9ojm" }, sapphire0: { conditions: { light: "sprinkles_backgroundColor_sapphire0_light__i77g9ojo", dark: "sprinkles_backgroundColor_sapphire0_dark__i77g9ojp" }, defaultClass: "sprinkles_backgroundColor_sapphire0_light__i77g9ojo" }, sapphire1: { conditions: { light: "sprinkles_backgroundColor_sapphire1_light__i77g9ojq", dark: "sprinkles_backgroundColor_sapphire1_dark__i77g9ojr" }, defaultClass: "sprinkles_backgroundColor_sapphire1_light__i77g9ojq" }, sapphire2: { conditions: { light: "sprinkles_backgroundColor_sapphire2_light__i77g9ojs", dark: "sprinkles_backgroundColor_sapphire2_dark__i77g9ojt" }, defaultClass: "sprinkles_backgroundColor_sapphire2_light__i77g9ojs" }, sapphire3: { conditions: { light: "sprinkles_backgroundColor_sapphire3_light__i77g9oju", dark: "sprinkles_backgroundColor_sapphire3_dark__i77g9ojv" }, defaultClass: "sprinkles_backgroundColor_sapphire3_light__i77g9oju" }, sapphire4: { conditions: { light: "sprinkles_backgroundColor_sapphire4_light__i77g9ojw", dark: "sprinkles_backgroundColor_sapphire4_dark__i77g9ojx" }, defaultClass: "sprinkles_backgroundColor_sapphire4_light__i77g9ojw" }, sapphire5: { conditions: { light: "sprinkles_backgroundColor_sapphire5_light__i77g9ojy", dark: "sprinkles_backgroundColor_sapphire5_dark__i77g9ojz" }, defaultClass: "sprinkles_backgroundColor_sapphire5_light__i77g9ojy" }, sapphire6: { conditions: { light: "sprinkles_backgroundColor_sapphire6_light__i77g9ok0", dark: "sprinkles_backgroundColor_sapphire6_dark__i77g9ok1" }, defaultClass: "sprinkles_backgroundColor_sapphire6_light__i77g9ok0" }, sapphire7: { conditions: { light: "sprinkles_backgroundColor_sapphire7_light__i77g9ok2", dark: "sprinkles_backgroundColor_sapphire7_dark__i77g9ok3" }, defaultClass: "sprinkles_backgroundColor_sapphire7_light__i77g9ok2" }, sapphire8: { conditions: { light: "sprinkles_backgroundColor_sapphire8_light__i77g9ok4", dark: "sprinkles_backgroundColor_sapphire8_dark__i77g9ok5" }, defaultClass: "sprinkles_backgroundColor_sapphire8_light__i77g9ok4" }, sapphire9: { conditions: { light: "sprinkles_backgroundColor_sapphire9_light__i77g9ok6", dark: "sprinkles_backgroundColor_sapphire9_dark__i77g9ok7" }, defaultClass: "sprinkles_backgroundColor_sapphire9_light__i77g9ok6" }, sapphire10: { conditions: { light: "sprinkles_backgroundColor_sapphire10_light__i77g9ok8", dark: "sprinkles_backgroundColor_sapphire10_dark__i77g9ok9" }, defaultClass: "sprinkles_backgroundColor_sapphire10_light__i77g9ok8" }, sapphire11: { conditions: { light: "sprinkles_backgroundColor_sapphire11_light__i77g9oka", dark: "sprinkles_backgroundColor_sapphire11_dark__i77g9okb" }, defaultClass: "sprinkles_backgroundColor_sapphire11_light__i77g9oka" }, sapphire12: { conditions: { light: "sprinkles_backgroundColor_sapphire12_light__i77g9okc", dark: "sprinkles_backgroundColor_sapphire12_dark__i77g9okd" }, defaultClass: "sprinkles_backgroundColor_sapphire12_light__i77g9okc" }, peach0: { conditions: { light: "sprinkles_backgroundColor_peach0_light__i77g9oke", dark: "sprinkles_backgroundColor_peach0_dark__i77g9okf" }, defaultClass: "sprinkles_backgroundColor_peach0_light__i77g9oke" }, peach1: { conditions: { light: "sprinkles_backgroundColor_peach1_light__i77g9okg", dark: "sprinkles_backgroundColor_peach1_dark__i77g9okh" }, defaultClass: "sprinkles_backgroundColor_peach1_light__i77g9okg" }, peach2: { conditions: { light: "sprinkles_backgroundColor_peach2_light__i77g9oki", dark: "sprinkles_backgroundColor_peach2_dark__i77g9okj" }, defaultClass: "sprinkles_backgroundColor_peach2_light__i77g9oki" }, peach3: { conditions: { light: "sprinkles_backgroundColor_peach3_light__i77g9okk", dark: "sprinkles_backgroundColor_peach3_dark__i77g9okl" }, defaultClass: "sprinkles_backgroundColor_peach3_light__i77g9okk" }, peach4: { conditions: { light: "sprinkles_backgroundColor_peach4_light__i77g9okm", dark: "sprinkles_backgroundColor_peach4_dark__i77g9okn" }, defaultClass: "sprinkles_backgroundColor_peach4_light__i77g9okm" }, peach5: { conditions: { light: "sprinkles_backgroundColor_peach5_light__i77g9oko", dark: "sprinkles_backgroundColor_peach5_dark__i77g9okp" }, defaultClass: "sprinkles_backgroundColor_peach5_light__i77g9oko" }, peach6: { conditions: { light: "sprinkles_backgroundColor_peach6_light__i77g9okq", dark: "sprinkles_backgroundColor_peach6_dark__i77g9okr" }, defaultClass: "sprinkles_backgroundColor_peach6_light__i77g9okq" }, peach7: { conditions: { light: "sprinkles_backgroundColor_peach7_light__i77g9oks", dark: "sprinkles_backgroundColor_peach7_dark__i77g9okt" }, defaultClass: "sprinkles_backgroundColor_peach7_light__i77g9oks" }, peach8: { conditions: { light: "sprinkles_backgroundColor_peach8_light__i77g9oku", dark: "sprinkles_backgroundColor_peach8_dark__i77g9okv" }, defaultClass: "sprinkles_backgroundColor_peach8_light__i77g9oku" }, peach9: { conditions: { light: "sprinkles_backgroundColor_peach9_light__i77g9okw", dark: "sprinkles_backgroundColor_peach9_dark__i77g9okx" }, defaultClass: "sprinkles_backgroundColor_peach9_light__i77g9okw" }, peach10: { conditions: { light: "sprinkles_backgroundColor_peach10_light__i77g9oky", dark: "sprinkles_backgroundColor_peach10_dark__i77g9okz" }, defaultClass: "sprinkles_backgroundColor_peach10_light__i77g9oky" }, peach11: { conditions: { light: "sprinkles_backgroundColor_peach11_light__i77g9ol0", dark: "sprinkles_backgroundColor_peach11_dark__i77g9ol1" }, defaultClass: "sprinkles_backgroundColor_peach11_light__i77g9ol0" }, peach12: { conditions: { light: "sprinkles_backgroundColor_peach12_light__i77g9ol2", dark: "sprinkles_backgroundColor_peach12_dark__i77g9ol3" }, defaultClass: "sprinkles_backgroundColor_peach12_light__i77g9ol2" }, carbon0: { conditions: { light: "sprinkles_backgroundColor_carbon0_light__i77g9ol4", dark: "sprinkles_backgroundColor_carbon0_dark__i77g9ol5" }, defaultClass: "sprinkles_backgroundColor_carbon0_light__i77g9ol4" }, carbon1: { conditions: { light: "sprinkles_backgroundColor_carbon1_light__i77g9ol6", dark: "sprinkles_backgroundColor_carbon1_dark__i77g9ol7" }, defaultClass: "sprinkles_backgroundColor_carbon1_light__i77g9ol6" }, carbon2: { conditions: { light: "sprinkles_backgroundColor_carbon2_light__i77g9ol8", dark: "sprinkles_backgroundColor_carbon2_dark__i77g9ol9" }, defaultClass: "sprinkles_backgroundColor_carbon2_light__i77g9ol8" }, carbon3: { conditions: { light: "sprinkles_backgroundColor_carbon3_light__i77g9ola", dark: "sprinkles_backgroundColor_carbon3_dark__i77g9olb" }, defaultClass: "sprinkles_backgroundColor_carbon3_light__i77g9ola" }, carbon4: { conditions: { light: "sprinkles_backgroundColor_carbon4_light__i77g9olc", dark: "sprinkles_backgroundColor_carbon4_dark__i77g9old" }, defaultClass: "sprinkles_backgroundColor_carbon4_light__i77g9olc" }, carbon5: { conditions: { light: "sprinkles_backgroundColor_carbon5_light__i77g9ole", dark: "sprinkles_backgroundColor_carbon5_dark__i77g9olf" }, defaultClass: "sprinkles_backgroundColor_carbon5_light__i77g9ole" }, carbon6: { conditions: { light: "sprinkles_backgroundColor_carbon6_light__i77g9olg", dark: "sprinkles_backgroundColor_carbon6_dark__i77g9olh" }, defaultClass: "sprinkles_backgroundColor_carbon6_light__i77g9olg" }, carbon7: { conditions: { light: "sprinkles_backgroundColor_carbon7_light__i77g9oli", dark: "sprinkles_backgroundColor_carbon7_dark__i77g9olj" }, defaultClass: "sprinkles_backgroundColor_carbon7_light__i77g9oli" }, carbon8: { conditions: { light: "sprinkles_backgroundColor_carbon8_light__i77g9olk", dark: "sprinkles_backgroundColor_carbon8_dark__i77g9oll" }, defaultClass: "sprinkles_backgroundColor_carbon8_light__i77g9olk" }, carbon9: { conditions: { light: "sprinkles_backgroundColor_carbon9_light__i77g9olm", dark: "sprinkles_backgroundColor_carbon9_dark__i77g9oln" }, defaultClass: "sprinkles_backgroundColor_carbon9_light__i77g9olm" }, carbon10: { conditions: { light: "sprinkles_backgroundColor_carbon10_light__i77g9olo", dark: "sprinkles_backgroundColor_carbon10_dark__i77g9olp" }, defaultClass: "sprinkles_backgroundColor_carbon10_light__i77g9olo" }, carbon11: { conditions: { light: "sprinkles_backgroundColor_carbon11_light__i77g9olq", dark: "sprinkles_backgroundColor_carbon11_dark__i77g9olr" }, defaultClass: "sprinkles_backgroundColor_carbon11_light__i77g9olq" }, carbon12: { conditions: { light: "sprinkles_backgroundColor_carbon12_light__i77g9ols", dark: "sprinkles_backgroundColor_carbon12_dark__i77g9olt" }, defaultClass: "sprinkles_backgroundColor_carbon12_light__i77g9ols" }, slate0: { conditions: { light: "sprinkles_backgroundColor_slate0_light__i77g9olu", dark: "sprinkles_backgroundColor_slate0_dark__i77g9olv" }, defaultClass: "sprinkles_backgroundColor_slate0_light__i77g9olu" }, slate1: { conditions: { light: "sprinkles_backgroundColor_slate1_light__i77g9olw", dark: "sprinkles_backgroundColor_slate1_dark__i77g9olx" }, defaultClass: "sprinkles_backgroundColor_slate1_light__i77g9olw" }, slate2: { conditions: { light: "sprinkles_backgroundColor_slate2_light__i77g9oly", dark: "sprinkles_backgroundColor_slate2_dark__i77g9olz" }, defaultClass: "sprinkles_backgroundColor_slate2_light__i77g9oly" }, slate3: { conditions: { light: "sprinkles_backgroundColor_slate3_light__i77g9om0", dark: "sprinkles_backgroundColor_slate3_dark__i77g9om1" }, defaultClass: "sprinkles_backgroundColor_slate3_light__i77g9om0" }, slate4: { conditions: { light: "sprinkles_backgroundColor_slate4_light__i77g9om2", dark: "sprinkles_backgroundColor_slate4_dark__i77g9om3" }, defaultClass: "sprinkles_backgroundColor_slate4_light__i77g9om2" }, slate5: { conditions: { light: "sprinkles_backgroundColor_slate5_light__i77g9om4", dark: "sprinkles_backgroundColor_slate5_dark__i77g9om5" }, defaultClass: "sprinkles_backgroundColor_slate5_light__i77g9om4" }, slate6: { conditions: { light: "sprinkles_backgroundColor_slate6_light__i77g9om6", dark: "sprinkles_backgroundColor_slate6_dark__i77g9om7" }, defaultClass: "sprinkles_backgroundColor_slate6_light__i77g9om6" }, slate7: { conditions: { light: "sprinkles_backgroundColor_slate7_light__i77g9om8", dark: "sprinkles_backgroundColor_slate7_dark__i77g9om9" }, defaultClass: "sprinkles_backgroundColor_slate7_light__i77g9om8" }, slate8: { conditions: { light: "sprinkles_backgroundColor_slate8_light__i77g9oma", dark: "sprinkles_backgroundColor_slate8_dark__i77g9omb" }, defaultClass: "sprinkles_backgroundColor_slate8_light__i77g9oma" }, slate9: { conditions: { light: "sprinkles_backgroundColor_slate9_light__i77g9omc", dark: "sprinkles_backgroundColor_slate9_dark__i77g9omd" }, defaultClass: "sprinkles_backgroundColor_slate9_light__i77g9omc" }, slate10: { conditions: { light: "sprinkles_backgroundColor_slate10_light__i77g9ome", dark: "sprinkles_backgroundColor_slate10_dark__i77g9omf" }, defaultClass: "sprinkles_backgroundColor_slate10_light__i77g9ome" }, slate11: { conditions: { light: "sprinkles_backgroundColor_slate11_light__i77g9omg", dark: "sprinkles_backgroundColor_slate11_dark__i77g9omh" }, defaultClass: "sprinkles_backgroundColor_slate11_light__i77g9omg" }, slate12: { conditions: { light: "sprinkles_backgroundColor_slate12_light__i77g9omi", dark: "sprinkles_backgroundColor_slate12_dark__i77g9omj" }, defaultClass: "sprinkles_backgroundColor_slate12_light__i77g9omi" }, azure0: { conditions: { light: "sprinkles_backgroundColor_azure0_light__i77g9omk", dark: "sprinkles_backgroundColor_azure0_dark__i77g9oml" }, defaultClass: "sprinkles_backgroundColor_azure0_light__i77g9omk" }, azure1: { conditions: { light: "sprinkles_backgroundColor_azure1_light__i77g9omm", dark: "sprinkles_backgroundColor_azure1_dark__i77g9omn" }, defaultClass: "sprinkles_backgroundColor_azure1_light__i77g9omm" }, azure2: { conditions: { light: "sprinkles_backgroundColor_azure2_light__i77g9omo", dark: "sprinkles_backgroundColor_azure2_dark__i77g9omp" }, defaultClass: "sprinkles_backgroundColor_azure2_light__i77g9omo" }, azure3: { conditions: { light: "sprinkles_backgroundColor_azure3_light__i77g9omq", dark: "sprinkles_backgroundColor_azure3_dark__i77g9omr" }, defaultClass: "sprinkles_backgroundColor_azure3_light__i77g9omq" }, azure4: { conditions: { light: "sprinkles_backgroundColor_azure4_light__i77g9oms", dark: "sprinkles_backgroundColor_azure4_dark__i77g9omt" }, defaultClass: "sprinkles_backgroundColor_azure4_light__i77g9oms" }, azure5: { conditions: { light: "sprinkles_backgroundColor_azure5_light__i77g9omu", dark: "sprinkles_backgroundColor_azure5_dark__i77g9omv" }, defaultClass: "sprinkles_backgroundColor_azure5_light__i77g9omu" }, azure6: { conditions: { light: "sprinkles_backgroundColor_azure6_light__i77g9omw", dark: "sprinkles_backgroundColor_azure6_dark__i77g9omx" }, defaultClass: "sprinkles_backgroundColor_azure6_light__i77g9omw" }, azure7: { conditions: { light: "sprinkles_backgroundColor_azure7_light__i77g9omy", dark: "sprinkles_backgroundColor_azure7_dark__i77g9omz" }, defaultClass: "sprinkles_backgroundColor_azure7_light__i77g9omy" }, azure8: { conditions: { light: "sprinkles_backgroundColor_azure8_light__i77g9on0", dark: "sprinkles_backgroundColor_azure8_dark__i77g9on1" }, defaultClass: "sprinkles_backgroundColor_azure8_light__i77g9on0" }, azure9: { conditions: { light: "sprinkles_backgroundColor_azure9_light__i77g9on2", dark: "sprinkles_backgroundColor_azure9_dark__i77g9on3" }, defaultClass: "sprinkles_backgroundColor_azure9_light__i77g9on2" }, azure10: { conditions: { light: "sprinkles_backgroundColor_azure10_light__i77g9on4", dark: "sprinkles_backgroundColor_azure10_dark__i77g9on5" }, defaultClass: "sprinkles_backgroundColor_azure10_light__i77g9on4" }, azure11: { conditions: { light: "sprinkles_backgroundColor_azure11_light__i77g9on6", dark: "sprinkles_backgroundColor_azure11_dark__i77g9on7" }, defaultClass: "sprinkles_backgroundColor_azure11_light__i77g9on6" }, azure12: { conditions: { light: "sprinkles_backgroundColor_azure12_light__i77g9on8", dark: "sprinkles_backgroundColor_azure12_dark__i77g9on9" }, defaultClass: "sprinkles_backgroundColor_azure12_light__i77g9on8" }, cherry0: { conditions: { light: "sprinkles_backgroundColor_cherry0_light__i77g9ona", dark: "sprinkles_backgroundColor_cherry0_dark__i77g9onb" }, defaultClass: "sprinkles_backgroundColor_cherry0_light__i77g9ona" }, cherry1: { conditions: { light: "sprinkles_backgroundColor_cherry1_light__i77g9onc", dark: "sprinkles_backgroundColor_cherry1_dark__i77g9ond" }, defaultClass: "sprinkles_backgroundColor_cherry1_light__i77g9onc" }, cherry2: { conditions: { light: "sprinkles_backgroundColor_cherry2_light__i77g9one", dark: "sprinkles_backgroundColor_cherry2_dark__i77g9onf" }, defaultClass: "sprinkles_backgroundColor_cherry2_light__i77g9one" }, cherry3: { conditions: { light: "sprinkles_backgroundColor_cherry3_light__i77g9ong", dark: "sprinkles_backgroundColor_cherry3_dark__i77g9onh" }, defaultClass: "sprinkles_backgroundColor_cherry3_light__i77g9ong" }, cherry4: { conditions: { light: "sprinkles_backgroundColor_cherry4_light__i77g9oni", dark: "sprinkles_backgroundColor_cherry4_dark__i77g9onj" }, defaultClass: "sprinkles_backgroundColor_cherry4_light__i77g9oni" }, cherry5: { conditions: { light: "sprinkles_backgroundColor_cherry5_light__i77g9onk", dark: "sprinkles_backgroundColor_cherry5_dark__i77g9onl" }, defaultClass: "sprinkles_backgroundColor_cherry5_light__i77g9onk" }, cherry6: { conditions: { light: "sprinkles_backgroundColor_cherry6_light__i77g9onm", dark: "sprinkles_backgroundColor_cherry6_dark__i77g9onn" }, defaultClass: "sprinkles_backgroundColor_cherry6_light__i77g9onm" }, cherry7: { conditions: { light: "sprinkles_backgroundColor_cherry7_light__i77g9ono", dark: "sprinkles_backgroundColor_cherry7_dark__i77g9onp" }, defaultClass: "sprinkles_backgroundColor_cherry7_light__i77g9ono" }, cherry8: { conditions: { light: "sprinkles_backgroundColor_cherry8_light__i77g9onq", dark: "sprinkles_backgroundColor_cherry8_dark__i77g9onr" }, defaultClass: "sprinkles_backgroundColor_cherry8_light__i77g9onq" }, cherry9: { conditions: { light: "sprinkles_backgroundColor_cherry9_light__i77g9ons", dark: "sprinkles_backgroundColor_cherry9_dark__i77g9ont" }, defaultClass: "sprinkles_backgroundColor_cherry9_light__i77g9ons" }, cherry10: { conditions: { light: "sprinkles_backgroundColor_cherry10_light__i77g9onu", dark: "sprinkles_backgroundColor_cherry10_dark__i77g9onv" }, defaultClass: "sprinkles_backgroundColor_cherry10_light__i77g9onu" }, cherry11: { conditions: { light: "sprinkles_backgroundColor_cherry11_light__i77g9onw", dark: "sprinkles_backgroundColor_cherry11_dark__i77g9onx" }, defaultClass: "sprinkles_backgroundColor_cherry11_light__i77g9onw" }, cherry12: { conditions: { light: "sprinkles_backgroundColor_cherry12_light__i77g9ony", dark: "sprinkles_backgroundColor_cherry12_dark__i77g9onz" }, defaultClass: "sprinkles_backgroundColor_cherry12_light__i77g9ony" }, lime0: { conditions: { light: "sprinkles_backgroundColor_lime0_light__i77g9oo0", dark: "sprinkles_backgroundColor_lime0_dark__i77g9oo1" }, defaultClass: "sprinkles_backgroundColor_lime0_light__i77g9oo0" }, lime1: { conditions: { light: "sprinkles_backgroundColor_lime1_light__i77g9oo2", dark: "sprinkles_backgroundColor_lime1_dark__i77g9oo3" }, defaultClass: "sprinkles_backgroundColor_lime1_light__i77g9oo2" }, lime2: { conditions: { light: "sprinkles_backgroundColor_lime2_light__i77g9oo4", dark: "sprinkles_backgroundColor_lime2_dark__i77g9oo5" }, defaultClass: "sprinkles_backgroundColor_lime2_light__i77g9oo4" }, lime3: { conditions: { light: "sprinkles_backgroundColor_lime3_light__i77g9oo6", dark: "sprinkles_backgroundColor_lime3_dark__i77g9oo7" }, defaultClass: "sprinkles_backgroundColor_lime3_light__i77g9oo6" }, lime4: { conditions: { light: "sprinkles_backgroundColor_lime4_light__i77g9oo8", dark: "sprinkles_backgroundColor_lime4_dark__i77g9oo9" }, defaultClass: "sprinkles_backgroundColor_lime4_light__i77g9oo8" }, lime5: { conditions: { light: "sprinkles_backgroundColor_lime5_light__i77g9ooa", dark: "sprinkles_backgroundColor_lime5_dark__i77g9oob" }, defaultClass: "sprinkles_backgroundColor_lime5_light__i77g9ooa" }, lime6: { conditions: { light: "sprinkles_backgroundColor_lime6_light__i77g9ooc", dark: "sprinkles_backgroundColor_lime6_dark__i77g9ood" }, defaultClass: "sprinkles_backgroundColor_lime6_light__i77g9ooc" }, lime7: { conditions: { light: "sprinkles_backgroundColor_lime7_light__i77g9ooe", dark: "sprinkles_backgroundColor_lime7_dark__i77g9oof" }, defaultClass: "sprinkles_backgroundColor_lime7_light__i77g9ooe" }, lime8: { conditions: { light: "sprinkles_backgroundColor_lime8_light__i77g9oog", dark: "sprinkles_backgroundColor_lime8_dark__i77g9ooh" }, defaultClass: "sprinkles_backgroundColor_lime8_light__i77g9oog" }, lime9: { conditions: { light: "sprinkles_backgroundColor_lime9_light__i77g9ooi", dark: "sprinkles_backgroundColor_lime9_dark__i77g9ooj" }, defaultClass: "sprinkles_backgroundColor_lime9_light__i77g9ooi" }, lime10: { conditions: { light: "sprinkles_backgroundColor_lime10_light__i77g9ook", dark: "sprinkles_backgroundColor_lime10_dark__i77g9ool" }, defaultClass: "sprinkles_backgroundColor_lime10_light__i77g9ook" }, lime11: { conditions: { light: "sprinkles_backgroundColor_lime11_light__i77g9oom", dark: "sprinkles_backgroundColor_lime11_dark__i77g9oon" }, defaultClass: "sprinkles_backgroundColor_lime11_light__i77g9oom" }, lime12: { conditions: { light: "sprinkles_backgroundColor_lime12_light__i77g9ooo", dark: "sprinkles_backgroundColor_lime12_dark__i77g9oop" }, defaultClass: "sprinkles_backgroundColor_lime12_light__i77g9ooo" }, lemon0: { conditions: { light: "sprinkles_backgroundColor_lemon0_light__i77g9ooq", dark: "sprinkles_backgroundColor_lemon0_dark__i77g9oor" }, defaultClass: "sprinkles_backgroundColor_lemon0_light__i77g9ooq" }, lemon1: { conditions: { light: "sprinkles_backgroundColor_lemon1_light__i77g9oos", dark: "sprinkles_backgroundColor_lemon1_dark__i77g9oot" }, defaultClass: "sprinkles_backgroundColor_lemon1_light__i77g9oos" }, lemon2: { conditions: { light: "sprinkles_backgroundColor_lemon2_light__i77g9oou", dark: "sprinkles_backgroundColor_lemon2_dark__i77g9oov" }, defaultClass: "sprinkles_backgroundColor_lemon2_light__i77g9oou" }, lemon3: { conditions: { light: "sprinkles_backgroundColor_lemon3_light__i77g9oow", dark: "sprinkles_backgroundColor_lemon3_dark__i77g9oox" }, defaultClass: "sprinkles_backgroundColor_lemon3_light__i77g9oow" }, lemon4: { conditions: { light: "sprinkles_backgroundColor_lemon4_light__i77g9ooy", dark: "sprinkles_backgroundColor_lemon4_dark__i77g9ooz" }, defaultClass: "sprinkles_backgroundColor_lemon4_light__i77g9ooy" }, lemon5: { conditions: { light: "sprinkles_backgroundColor_lemon5_light__i77g9op0", dark: "sprinkles_backgroundColor_lemon5_dark__i77g9op1" }, defaultClass: "sprinkles_backgroundColor_lemon5_light__i77g9op0" }, lemon6: { conditions: { light: "sprinkles_backgroundColor_lemon6_light__i77g9op2", dark: "sprinkles_backgroundColor_lemon6_dark__i77g9op3" }, defaultClass: "sprinkles_backgroundColor_lemon6_light__i77g9op2" }, lemon7: { conditions: { light: "sprinkles_backgroundColor_lemon7_light__i77g9op4", dark: "sprinkles_backgroundColor_lemon7_dark__i77g9op5" }, defaultClass: "sprinkles_backgroundColor_lemon7_light__i77g9op4" }, lemon8: { conditions: { light: "sprinkles_backgroundColor_lemon8_light__i77g9op6", dark: "sprinkles_backgroundColor_lemon8_dark__i77g9op7" }, defaultClass: "sprinkles_backgroundColor_lemon8_light__i77g9op6" }, lemon9: { conditions: { light: "sprinkles_backgroundColor_lemon9_light__i77g9op8", dark: "sprinkles_backgroundColor_lemon9_dark__i77g9op9" }, defaultClass: "sprinkles_backgroundColor_lemon9_light__i77g9op8" }, lemon10: { conditions: { light: "sprinkles_backgroundColor_lemon10_light__i77g9opa", dark: "sprinkles_backgroundColor_lemon10_dark__i77g9opb" }, defaultClass: "sprinkles_backgroundColor_lemon10_light__i77g9opa" }, lemon11: { conditions: { light: "sprinkles_backgroundColor_lemon11_light__i77g9opc", dark: "sprinkles_backgroundColor_lemon11_dark__i77g9opd" }, defaultClass: "sprinkles_backgroundColor_lemon11_light__i77g9opc" }, lemon12: { conditions: { light: "sprinkles_backgroundColor_lemon12_light__i77g9ope", dark: "sprinkles_backgroundColor_lemon12_dark__i77g9opf" }, defaultClass: "sprinkles_backgroundColor_lemon12_light__i77g9ope" } } }, borderColor: { values: { transparent: { conditions: { light: "sprinkles_borderColor_transparent_light__i77g9opg", dark: "sprinkles_borderColor_transparent_dark__i77g9oph" }, defaultClass: "sprinkles_borderColor_transparent_light__i77g9opg" }, current: { conditions: { light: "sprinkles_borderColor_current_light__i77g9opi", dark: "sprinkles_borderColor_current_dark__i77g9opj" }, defaultClass: "sprinkles_borderColor_current_light__i77g9opi" }, white: { conditions: { light: "sprinkles_borderColor_white_light__i77g9opk", dark: "sprinkles_borderColor_white_dark__i77g9opl" }, defaultClass: "sprinkles_borderColor_white_light__i77g9opk" }, black: { conditions: { light: "sprinkles_borderColor_black_light__i77g9opm", dark: "sprinkles_borderColor_black_dark__i77g9opn" }, defaultClass: "sprinkles_borderColor_black_light__i77g9opm" }, jade0: { conditions: { light: "sprinkles_borderColor_jade0_light__i77g9opo", dark: "sprinkles_borderColor_jade0_dark__i77g9opp" }, defaultClass: "sprinkles_borderColor_jade0_light__i77g9opo" }, jade1: { conditions: { light: "sprinkles_borderColor_jade1_light__i77g9opq", dark: "sprinkles_borderColor_jade1_dark__i77g9opr" }, defaultClass: "sprinkles_borderColor_jade1_light__i77g9opq" }, jade2: { conditions: { light: "sprinkles_borderColor_jade2_light__i77g9ops", dark: "sprinkles_borderColor_jade2_dark__i77g9opt" }, defaultClass: "sprinkles_borderColor_jade2_light__i77g9ops" }, jade3: { conditions: { light: "sprinkles_borderColor_jade3_light__i77g9opu", dark: "sprinkles_borderColor_jade3_dark__i77g9opv" }, defaultClass: "sprinkles_borderColor_jade3_light__i77g9opu" }, jade4: { conditions: { light: "sprinkles_borderColor_jade4_light__i77g9opw", dark: "sprinkles_borderColor_jade4_dark__i77g9opx" }, defaultClass: "sprinkles_borderColor_jade4_light__i77g9opw" }, jade5: { conditions: { light: "sprinkles_borderColor_jade5_light__i77g9opy", dark: "sprinkles_borderColor_jade5_dark__i77g9opz" }, defaultClass: "sprinkles_borderColor_jade5_light__i77g9opy" }, jade6: { conditions: { light: "sprinkles_borderColor_jade6_light__i77g9oq0", dark: "sprinkles_borderColor_jade6_dark__i77g9oq1" }, defaultClass: "sprinkles_borderColor_jade6_light__i77g9oq0" }, jade7: { conditions: { light: "sprinkles_borderColor_jade7_light__i77g9oq2", dark: "sprinkles_borderColor_jade7_dark__i77g9oq3" }, defaultClass: "sprinkles_borderColor_jade7_light__i77g9oq2" }, jade8: { conditions: { light: "sprinkles_borderColor_jade8_light__i77g9oq4", dark: "sprinkles_borderColor_jade8_dark__i77g9oq5" }, defaultClass: "sprinkles_borderColor_jade8_light__i77g9oq4" }, jade9: { conditions: { light: "sprinkles_borderColor_jade9_light__i77g9oq6", dark: "sprinkles_borderColor_jade9_dark__i77g9oq7" }, defaultClass: "sprinkles_borderColor_jade9_light__i77g9oq6" }, jade10: { conditions: { light: "sprinkles_borderColor_jade10_light__i77g9oq8", dark: "sprinkles_borderColor_jade10_dark__i77g9oq9" }, defaultClass: "sprinkles_borderColor_jade10_light__i77g9oq8" }, jade11: { conditions: { light: "sprinkles_borderColor_jade11_light__i77g9oqa", dark: "sprinkles_borderColor_jade11_dark__i77g9oqb" }, defaultClass: "sprinkles_borderColor_jade11_light__i77g9oqa" }, jade12: { conditions: { light: "sprinkles_borderColor_jade12_light__i77g9oqc", dark: "sprinkles_borderColor_jade12_dark__i77g9oqd" }, defaultClass: "sprinkles_borderColor_jade12_light__i77g9oqc" }, sapphire0: { conditions: { light: "sprinkles_borderColor_sapphire0_light__i77g9oqe", dark: "sprinkles_borderColor_sapphire0_dark__i77g9oqf" }, defaultClass: "sprinkles_borderColor_sapphire0_light__i77g9oqe" }, sapphire1: { conditions: { light: "sprinkles_borderColor_sapphire1_light__i77g9oqg", dark: "sprinkles_borderColor_sapphire1_dark__i77g9oqh" }, defaultClass: "sprinkles_borderColor_sapphire1_light__i77g9oqg" }, sapphire2: { conditions: { light: "sprinkles_borderColor_sapphire2_light__i77g9oqi", dark: "sprinkles_borderColor_sapphire2_dark__i77g9oqj" }, defaultClass: "sprinkles_borderColor_sapphire2_light__i77g9oqi" }, sapphire3: { conditions: { light: "sprinkles_borderColor_sapphire3_light__i77g9oqk", dark: "sprinkles_borderColor_sapphire3_dark__i77g9oql" }, defaultClass: "sprinkles_borderColor_sapphire3_light__i77g9oqk" }, sapphire4: { conditions: { light: "sprinkles_borderColor_sapphire4_light__i77g9oqm", dark: "sprinkles_borderColor_sapphire4_dark__i77g9oqn" }, defaultClass: "sprinkles_borderColor_sapphire4_light__i77g9oqm" }, sapphire5: { conditions: { light: "sprinkles_borderColor_sapphire5_light__i77g9oqo", dark: "sprinkles_borderColor_sapphire5_dark__i77g9oqp" }, defaultClass: "sprinkles_borderColor_sapphire5_light__i77g9oqo" }, sapphire6: { conditions: { light: "sprinkles_borderColor_sapphire6_light__i77g9oqq", dark: "sprinkles_borderColor_sapphire6_dark__i77g9oqr" }, defaultClass: "sprinkles_borderColor_sapphire6_light__i77g9oqq" }, sapphire7: { conditions: { light: "sprinkles_borderColor_sapphire7_light__i77g9oqs", dark: "sprinkles_borderColor_sapphire7_dark__i77g9oqt" }, defaultClass: "sprinkles_borderColor_sapphire7_light__i77g9oqs" }, sapphire8: { conditions: { light: "sprinkles_borderColor_sapphire8_light__i77g9oqu", dark: "sprinkles_borderColor_sapphire8_dark__i77g9oqv" }, defaultClass: "sprinkles_borderColor_sapphire8_light__i77g9oqu" }, sapphire9: { conditions: { light: "sprinkles_borderColor_sapphire9_light__i77g9oqw", dark: "sprinkles_borderColor_sapphire9_dark__i77g9oqx" }, defaultClass: "sprinkles_borderColor_sapphire9_light__i77g9oqw" }, sapphire10: { conditions: { light: "sprinkles_borderColor_sapphire10_light__i77g9oqy", dark: "sprinkles_borderColor_sapphire10_dark__i77g9oqz" }, defaultClass: "sprinkles_borderColor_sapphire10_light__i77g9oqy" }, sapphire11: { conditions: { light: "sprinkles_borderColor_sapphire11_light__i77g9or0", dark: "sprinkles_borderColor_sapphire11_dark__i77g9or1" }, defaultClass: "sprinkles_borderColor_sapphire11_light__i77g9or0" }, sapphire12: { conditions: { light: "sprinkles_borderColor_sapphire12_light__i77g9or2", dark: "sprinkles_borderColor_sapphire12_dark__i77g9or3" }, defaultClass: "sprinkles_borderColor_sapphire12_light__i77g9or2" }, peach0: { conditions: { light: "sprinkles_borderColor_peach0_light__i77g9or4", dark: "sprinkles_borderColor_peach0_dark__i77g9or5" }, defaultClass: "sprinkles_borderColor_peach0_light__i77g9or4" }, peach1: { conditions: { light: "sprinkles_borderColor_peach1_light__i77g9or6", dark: "sprinkles_borderColor_peach1_dark__i77g9or7" }, defaultClass: "sprinkles_borderColor_peach1_light__i77g9or6" }, peach2: { conditions: { light: "sprinkles_borderColor_peach2_light__i77g9or8", dark: "sprinkles_borderColor_peach2_dark__i77g9or9" }, defaultClass: "sprinkles_borderColor_peach2_light__i77g9or8" }, peach3: { conditions: { light: "sprinkles_borderColor_peach3_light__i77g9ora", dark: "sprinkles_borderColor_peach3_dark__i77g9orb" }, defaultClass: "sprinkles_borderColor_peach3_light__i77g9ora" }, peach4: { conditions: { light: "sprinkles_borderColor_peach4_light__i77g9orc", dark: "sprinkles_borderColor_peach4_dark__i77g9ord" }, defaultClass: "sprinkles_borderColor_peach4_light__i77g9orc" }, peach5: { conditions: { light: "sprinkles_borderColor_peach5_light__i77g9ore", dark: "sprinkles_borderColor_peach5_dark__i77g9orf" }, defaultClass: "sprinkles_borderColor_peach5_light__i77g9ore" }, peach6: { conditions: { light: "sprinkles_borderColor_peach6_light__i77g9org", dark: "sprinkles_borderColor_peach6_dark__i77g9orh" }, defaultClass: "sprinkles_borderColor_peach6_light__i77g9org" }, peach7: { conditions: { light: "sprinkles_borderColor_peach7_light__i77g9ori", dark: "sprinkles_borderColor_peach7_dark__i77g9orj" }, defaultClass: "sprinkles_borderColor_peach7_light__i77g9ori" }, peach8: { conditions: { light: "sprinkles_borderColor_peach8_light__i77g9ork", dark: "sprinkles_borderColor_peach8_dark__i77g9orl" }, defaultClass: "sprinkles_borderColor_peach8_light__i77g9ork" }, peach9: { conditions: { light: "sprinkles_borderColor_peach9_light__i77g9orm", dark: "sprinkles_borderColor_peach9_dark__i77g9orn" }, defaultClass: "sprinkles_borderColor_peach9_light__i77g9orm" }, peach10: { conditions: { light: "sprinkles_borderColor_peach10_light__i77g9oro", dark: "sprinkles_borderColor_peach10_dark__i77g9orp" }, defaultClass: "sprinkles_borderColor_peach10_light__i77g9oro" }, peach11: { conditions: { light: "sprinkles_borderColor_peach11_light__i77g9orq", dark: "sprinkles_borderColor_peach11_dark__i77g9orr" }, defaultClass: "sprinkles_borderColor_peach11_light__i77g9orq" }, peach12: { conditions: { light: "sprinkles_borderColor_peach12_light__i77g9ors", dark: "sprinkles_borderColor_peach12_dark__i77g9ort" }, defaultClass: "sprinkles_borderColor_peach12_light__i77g9ors" }, carbon0: { conditions: { light: "sprinkles_borderColor_carbon0_light__i77g9oru", dark: "sprinkles_borderColor_carbon0_dark__i77g9orv" }, defaultClass: "sprinkles_borderColor_carbon0_light__i77g9oru" }, carbon1: { conditions: { light: "sprinkles_borderColor_carbon1_light__i77g9orw", dark: "sprinkles_borderColor_carbon1_dark__i77g9orx" }, defaultClass: "sprinkles_borderColor_carbon1_light__i77g9orw" }, carbon2: { conditions: { light: "sprinkles_borderColor_carbon2_light__i77g9ory", dark: "sprinkles_borderColor_carbon2_dark__i77g9orz" }, defaultClass: "sprinkles_borderColor_carbon2_light__i77g9ory" }, carbon3: { conditions: { light: "sprinkles_borderColor_carbon3_light__i77g9os0", dark: "sprinkles_borderColor_carbon3_dark__i77g9os1" }, defaultClass: "sprinkles_borderColor_carbon3_light__i77g9os0" }, carbon4: { conditions: { light: "sprinkles_borderColor_carbon4_light__i77g9os2", dark: "sprinkles_borderColor_carbon4_dark__i77g9os3" }, defaultClass: "sprinkles_borderColor_carbon4_light__i77g9os2" }, carbon5: { conditions: { light: "sprinkles_borderColor_carbon5_light__i77g9os4", dark: "sprinkles_borderColor_carbon5_dark__i77g9os5" }, defaultClass: "sprinkles_borderColor_carbon5_light__i77g9os4" }, carbon6: { conditions: { light: "sprinkles_borderColor_carbon6_light__i77g9os6", dark: "sprinkles_borderColor_carbon6_dark__i77g9os7" }, defaultClass: "sprinkles_borderColor_carbon6_light__i77g9os6" }, carbon7: { conditions: { light: "sprinkles_borderColor_carbon7_light__i77g9os8", dark: "sprinkles_borderColor_carbon7_dark__i77g9os9" }, defaultClass: "sprinkles_borderColor_carbon7_light__i77g9os8" }, carbon8: { conditions: { light: "sprinkles_borderColor_carbon8_light__i77g9osa", dark: "sprinkles_borderColor_carbon8_dark__i77g9osb" }, defaultClass: "sprinkles_borderColor_carbon8_light__i77g9osa" }, carbon9: { conditions: { light: "sprinkles_borderColor_carbon9_light__i77g9osc", dark: "sprinkles_borderColor_carbon9_dark__i77g9osd" }, defaultClass: "sprinkles_borderColor_carbon9_light__i77g9osc" }, carbon10: { conditions: { light: "sprinkles_borderColor_carbon10_light__i77g9ose", dark: "sprinkles_borderColor_carbon10_dark__i77g9osf" }, defaultClass: "sprinkles_borderColor_carbon10_light__i77g9ose" }, carbon11: { conditions: { light: "sprinkles_borderColor_carbon11_light__i77g9osg", dark: "sprinkles_borderColor_carbon11_dark__i77g9osh" }, defaultClass: "sprinkles_borderColor_carbon11_light__i77g9osg" }, carbon12: { conditions: { light: "sprinkles_borderColor_carbon12_light__i77g9osi", dark: "sprinkles_borderColor_carbon12_dark__i77g9osj" }, defaultClass: "sprinkles_borderColor_carbon12_light__i77g9osi" }, slate0: { conditions: { light: "sprinkles_borderColor_slate0_light__i77g9osk", dark: "sprinkles_borderColor_slate0_dark__i77g9osl" }, defaultClass: "sprinkles_borderColor_slate0_light__i77g9osk" }, slate1: { conditions: { light: "sprinkles_borderColor_slate1_light__i77g9osm", dark: "sprinkles_borderColor_slate1_dark__i77g9osn" }, defaultClass: "sprinkles_borderColor_slate1_light__i77g9osm" }, slate2: { conditions: { light: "sprinkles_borderColor_slate2_light__i77g9oso", dark: "sprinkles_borderColor_slate2_dark__i77g9osp" }, defaultClass: "sprinkles_borderColor_slate2_light__i77g9oso" }, slate3: { conditions: { light: "sprinkles_borderColor_slate3_light__i77g9osq", dark: "sprinkles_borderColor_slate3_dark__i77g9osr" }, defaultClass: "sprinkles_borderColor_slate3_light__i77g9osq" }, slate4: { conditions: { light: "sprinkles_borderColor_slate4_light__i77g9oss", dark: "sprinkles_borderColor_slate4_dark__i77g9ost" }, defaultClass: "sprinkles_borderColor_slate4_light__i77g9oss" }, slate5: { conditions: { light: "sprinkles_borderColor_slate5_light__i77g9osu", dark: "sprinkles_borderColor_slate5_dark__i77g9osv" }, defaultClass: "sprinkles_borderColor_slate5_light__i77g9osu" }, slate6: { conditions: { light: "sprinkles_borderColor_slate6_light__i77g9osw", dark: "sprinkles_borderColor_slate6_dark__i77g9osx" }, defaultClass: "sprinkles_borderColor_slate6_light__i77g9osw" }, slate7: { conditions: { light: "sprinkles_borderColor_slate7_light__i77g9osy", dark: "sprinkles_borderColor_slate7_dark__i77g9osz" }, defaultClass: "sprinkles_borderColor_slate7_light__i77g9osy" }, slate8: { conditions: { light: "sprinkles_borderColor_slate8_light__i77g9ot0", dark: "sprinkles_borderColor_slate8_dark__i77g9ot1" }, defaultClass: "sprinkles_borderColor_slate8_light__i77g9ot0" }, slate9: { conditions: { light: "sprinkles_borderColor_slate9_light__i77g9ot2", dark: "sprinkles_borderColor_slate9_dark__i77g9ot3" }, defaultClass: "sprinkles_borderColor_slate9_light__i77g9ot2" }, slate10: { conditions: { light: "sprinkles_borderColor_slate10_light__i77g9ot4", dark: "sprinkles_borderColor_slate10_dark__i77g9ot5" }, defaultClass: "sprinkles_borderColor_slate10_light__i77g9ot4" }, slate11: { conditions: { light: "sprinkles_borderColor_slate11_light__i77g9ot6", dark: "sprinkles_borderColor_slate11_dark__i77g9ot7" }, defaultClass: "sprinkles_borderColor_slate11_light__i77g9ot6" }, slate12: { conditions: { light: "sprinkles_borderColor_slate12_light__i77g9ot8", dark: "sprinkles_borderColor_slate12_dark__i77g9ot9" }, defaultClass: "sprinkles_borderColor_slate12_light__i77g9ot8" }, azure0: { conditions: { light: "sprinkles_borderColor_azure0_light__i77g9ota", dark: "sprinkles_borderColor_azure0_dark__i77g9otb" }, defaultClass: "sprinkles_borderColor_azure0_light__i77g9ota" }, azure1: { conditions: { light: "sprinkles_borderColor_azure1_light__i77g9otc", dark: "sprinkles_borderColor_azure1_dark__i77g9otd" }, defaultClass: "sprinkles_borderColor_azure1_light__i77g9otc" }, azure2: { conditions: { light: "sprinkles_borderColor_azure2_light__i77g9ote", dark: "sprinkles_borderColor_azure2_dark__i77g9otf" }, defaultClass: "sprinkles_borderColor_azure2_light__i77g9ote" }, azure3: { conditions: { light: "sprinkles_borderColor_azure3_light__i77g9otg", dark: "sprinkles_borderColor_azure3_dark__i77g9oth" }, defaultClass: "sprinkles_borderColor_azure3_light__i77g9otg" }, azure4: { conditions: { light: "sprinkles_borderColor_azure4_light__i77g9oti", dark: "sprinkles_borderColor_azure4_dark__i77g9otj" }, defaultClass: "sprinkles_borderColor_azure4_light__i77g9oti" }, azure5: { conditions: { light: "sprinkles_borderColor_azure5_light__i77g9otk", dark: "sprinkles_borderColor_azure5_dark__i77g9otl" }, defaultClass: "sprinkles_borderColor_azure5_light__i77g9otk" }, azure6: { conditions: { light: "sprinkles_borderColor_azure6_light__i77g9otm", dark: "sprinkles_borderColor_azure6_dark__i77g9otn" }, defaultClass: "sprinkles_borderColor_azure6_light__i77g9otm" }, azure7: { conditions: { light: "sprinkles_borderColor_azure7_light__i77g9oto", dark: "sprinkles_borderColor_azure7_dark__i77g9otp" }, defaultClass: "sprinkles_borderColor_azure7_light__i77g9oto" }, azure8: { conditions: { light: "sprinkles_borderColor_azure8_light__i77g9otq", dark: "sprinkles_borderColor_azure8_dark__i77g9otr" }, defaultClass: "sprinkles_borderColor_azure8_light__i77g9otq" }, azure9: { conditions: { light: "sprinkles_borderColor_azure9_light__i77g9ots", dark: "sprinkles_borderColor_azure9_dark__i77g9ott" }, defaultClass: "sprinkles_borderColor_azure9_light__i77g9ots" }, azure10: { conditions: { light: "sprinkles_borderColor_azure10_light__i77g9otu", dark: "sprinkles_borderColor_azure10_dark__i77g9otv" }, defaultClass: "sprinkles_borderColor_azure10_light__i77g9otu" }, azure11: { conditions: { light: "sprinkles_borderColor_azure11_light__i77g9otw", dark: "sprinkles_borderColor_azure11_dark__i77g9otx" }, defaultClass: "sprinkles_borderColor_azure11_light__i77g9otw" }, azure12: { conditions: { light: "sprinkles_borderColor_azure12_light__i77g9oty", dark: "sprinkles_borderColor_azure12_dark__i77g9otz" }, defaultClass: "sprinkles_borderColor_azure12_light__i77g9oty" }, cherry0: { conditions: { light: "sprinkles_borderColor_cherry0_light__i77g9ou0", dark: "sprinkles_borderColor_cherry0_dark__i77g9ou1" }, defaultClass: "sprinkles_borderColor_cherry0_light__i77g9ou0" }, cherry1: { conditions: { light: "sprinkles_borderColor_cherry1_light__i77g9ou2", dark: "sprinkles_borderColor_cherry1_dark__i77g9ou3" }, defaultClass: "sprinkles_borderColor_cherry1_light__i77g9ou2" }, cherry2: { conditions: { light: "sprinkles_borderColor_cherry2_light__i77g9ou4", dark: "sprinkles_borderColor_cherry2_dark__i77g9ou5" }, defaultClass: "sprinkles_borderColor_cherry2_light__i77g9ou4" }, cherry3: { conditions: { light: "sprinkles_borderColor_cherry3_light__i77g9ou6", dark: "sprinkles_borderColor_cherry3_dark__i77g9ou7" }, defaultClass: "sprinkles_borderColor_cherry3_light__i77g9ou6" }, cherry4: { conditions: { light: "sprinkles_borderColor_cherry4_light__i77g9ou8", dark: "sprinkles_borderColor_cherry4_dark__i77g9ou9" }, defaultClass: "sprinkles_borderColor_cherry4_light__i77g9ou8" }, cherry5: { conditions: { light: "sprinkles_borderColor_cherry5_light__i77g9oua", dark: "sprinkles_borderColor_cherry5_dark__i77g9oub" }, defaultClass: "sprinkles_borderColor_cherry5_light__i77g9oua" }, cherry6: { conditions: { light: "sprinkles_borderColor_cherry6_light__i77g9ouc", dark: "sprinkles_borderColor_cherry6_dark__i77g9oud" }, defaultClass: "sprinkles_borderColor_cherry6_light__i77g9ouc" }, cherry7: { conditions: { light: "sprinkles_borderColor_cherry7_light__i77g9oue", dark: "sprinkles_borderColor_cherry7_dark__i77g9ouf" }, defaultClass: "sprinkles_borderColor_cherry7_light__i77g9oue" }, cherry8: { conditions: { light: "sprinkles_borderColor_cherry8_light__i77g9oug", dark: "sprinkles_borderColor_cherry8_dark__i77g9ouh" }, defaultClass: "sprinkles_borderColor_cherry8_light__i77g9oug" }, cherry9: { conditions: { light: "sprinkles_borderColor_cherry9_light__i77g9oui", dark: "sprinkles_borderColor_cherry9_dark__i77g9ouj" }, defaultClass: "sprinkles_borderColor_cherry9_light__i77g9oui" }, cherry10: { conditions: { light: "sprinkles_borderColor_cherry10_light__i77g9ouk", dark: "sprinkles_borderColor_cherry10_dark__i77g9oul" }, defaultClass: "sprinkles_borderColor_cherry10_light__i77g9ouk" }, cherry11: { conditions: { light: "sprinkles_borderColor_cherry11_light__i77g9oum", dark: "sprinkles_borderColor_cherry11_dark__i77g9oun" }, defaultClass: "sprinkles_borderColor_cherry11_light__i77g9oum" }, cherry12: { conditions: { light: "sprinkles_borderColor_cherry12_light__i77g9ouo", dark: "sprinkles_borderColor_cherry12_dark__i77g9oup" }, defaultClass: "sprinkles_borderColor_cherry12_light__i77g9ouo" }, lime0: { conditions: { light: "sprinkles_borderColor_lime0_light__i77g9ouq", dark: "sprinkles_borderColor_lime0_dark__i77g9our" }, defaultClass: "sprinkles_borderColor_lime0_light__i77g9ouq" }, lime1: { conditions: { light: "sprinkles_borderColor_lime1_light__i77g9ous", dark: "sprinkles_borderColor_lime1_dark__i77g9out" }, defaultClass: "sprinkles_borderColor_lime1_light__i77g9ous" }, lime2: { conditions: { light: "sprinkles_borderColor_lime2_light__i77g9ouu", dark: "sprinkles_borderColor_lime2_dark__i77g9ouv" }, defaultClass: "sprinkles_borderColor_lime2_light__i77g9ouu" }, lime3: { conditions: { light: "sprinkles_borderColor_lime3_light__i77g9ouw", dark: "sprinkles_borderColor_lime3_dark__i77g9oux" }, defaultClass: "sprinkles_borderColor_lime3_light__i77g9ouw" }, lime4: { conditions: { light: "sprinkles_borderColor_lime4_light__i77g9ouy", dark: "sprinkles_borderColor_lime4_dark__i77g9ouz" }, defaultClass: "sprinkles_borderColor_lime4_light__i77g9ouy" }, lime5: { conditions: { light: "sprinkles_borderColor_lime5_light__i77g9ov0", dark: "sprinkles_borderColor_lime5_dark__i77g9ov1" }, defaultClass: "sprinkles_borderColor_lime5_light__i77g9ov0" }, lime6: { conditions: { light: "sprinkles_borderColor_lime6_light__i77g9ov2", dark: "sprinkles_borderColor_lime6_dark__i77g9ov3" }, defaultClass: "sprinkles_borderColor_lime6_light__i77g9ov2" }, lime7: { conditions: { light: "sprinkles_borderColor_lime7_light__i77g9ov4", dark: "sprinkles_borderColor_lime7_dark__i77g9ov5" }, defaultClass: "sprinkles_borderColor_lime7_light__i77g9ov4" }, lime8: { conditions: { light: "sprinkles_borderColor_lime8_light__i77g9ov6", dark: "sprinkles_borderColor_lime8_dark__i77g9ov7" }, defaultClass: "sprinkles_borderColor_lime8_light__i77g9ov6" }, lime9: { conditions: { light: "sprinkles_borderColor_lime9_light__i77g9ov8", dark: "sprinkles_borderColor_lime9_dark__i77g9ov9" }, defaultClass: "sprinkles_borderColor_lime9_light__i77g9ov8" }, lime10: { conditions: { light: "sprinkles_borderColor_lime10_light__i77g9ova", dark: "sprinkles_borderColor_lime10_dark__i77g9ovb" }, defaultClass: "sprinkles_borderColor_lime10_light__i77g9ova" }, lime11: { conditions: { light: "sprinkles_borderColor_lime11_light__i77g9ovc", dark: "sprinkles_borderColor_lime11_dark__i77g9ovd" }, defaultClass: "sprinkles_borderColor_lime11_light__i77g9ovc" }, lime12: { conditions: { light: "sprinkles_borderColor_lime12_light__i77g9ove", dark: "sprinkles_borderColor_lime12_dark__i77g9ovf" }, defaultClass: "sprinkles_borderColor_lime12_light__i77g9ove" }, lemon0: { conditions: { light: "sprinkles_borderColor_lemon0_light__i77g9ovg", dark: "sprinkles_borderColor_lemon0_dark__i77g9ovh" }, defaultClass: "sprinkles_borderColor_lemon0_light__i77g9ovg" }, lemon1: { conditions: { light: "sprinkles_borderColor_lemon1_light__i77g9ovi", dark: "sprinkles_borderColor_lemon1_dark__i77g9ovj" }, defaultClass: "sprinkles_borderColor_lemon1_light__i77g9ovi" }, lemon2: { conditions: { light: "sprinkles_borderColor_lemon2_light__i77g9ovk", dark: "sprinkles_borderColor_lemon2_dark__i77g9ovl" }, defaultClass: "sprinkles_borderColor_lemon2_light__i77g9ovk" }, lemon3: { conditions: { light: "sprinkles_borderColor_lemon3_light__i77g9ovm", dark: "sprinkles_borderColor_lemon3_dark__i77g9ovn" }, defaultClass: "sprinkles_borderColor_lemon3_light__i77g9ovm" }, lemon4: { conditions: { light: "sprinkles_borderColor_lemon4_light__i77g9ovo", dark: "sprinkles_borderColor_lemon4_dark__i77g9ovp" }, defaultClass: "sprinkles_borderColor_lemon4_light__i77g9ovo" }, lemon5: { conditions: { light: "sprinkles_borderColor_lemon5_light__i77g9ovq", dark: "sprinkles_borderColor_lemon5_dark__i77g9ovr" }, defaultClass: "sprinkles_borderColor_lemon5_light__i77g9ovq" }, lemon6: { conditions: { light: "sprinkles_borderColor_lemon6_light__i77g9ovs", dark: "sprinkles_borderColor_lemon6_dark__i77g9ovt" }, defaultClass: "sprinkles_borderColor_lemon6_light__i77g9ovs" }, lemon7: { conditions: { light: "sprinkles_borderColor_lemon7_light__i77g9ovu", dark: "sprinkles_borderColor_lemon7_dark__i77g9ovv" }, defaultClass: "sprinkles_borderColor_lemon7_light__i77g9ovu" }, lemon8: { conditions: { light: "sprinkles_borderColor_lemon8_light__i77g9ovw", dark: "sprinkles_borderColor_lemon8_dark__i77g9ovx" }, defaultClass: "sprinkles_borderColor_lemon8_light__i77g9ovw" }, lemon9: { conditions: { light: "sprinkles_borderColor_lemon9_light__i77g9ovy", dark: "sprinkles_borderColor_lemon9_dark__i77g9ovz" }, defaultClass: "sprinkles_borderColor_lemon9_light__i77g9ovy" }, lemon10: { conditions: { light: "sprinkles_borderColor_lemon10_light__i77g9ow0", dark: "sprinkles_borderColor_lemon10_dark__i77g9ow1" }, defaultClass: "sprinkles_borderColor_lemon10_light__i77g9ow0" }, lemon11: { conditions: { light: "sprinkles_borderColor_lemon11_light__i77g9ow2", dark: "sprinkles_borderColor_lemon11_dark__i77g9ow3" }, defaultClass: "sprinkles_borderColor_lemon11_light__i77g9ow2" }, lemon12: { conditions: { light: "sprinkles_borderColor_lemon12_light__i77g9ow4", dark: "sprinkles_borderColor_lemon12_dark__i77g9ow5" }, defaultClass: "sprinkles_borderColor_lemon12_light__i77g9ow4" } } } } });
const l_ = ({ reset: _, ...r }) => {
  const l = L(r), o = _ ? [h_, u_[_]] : null;
  return p(o, l);
}, jr = {
  small: 0,
  medium: 768,
  large: 1200,
  xlarge: 1600
}, z_ = {
  light: `html:not(${z.light}) &`,
  dark: `html${z.dark} &`
}, G = (_, r) => !r || Object.keys(r).length === 0 ? {} : {
  [z_[_]]: r
}, yr = ({
  lightMode: _,
  darkMode: r
}) => ({
  ..._ || r ? {
    selectors: {
      ...G("light", _),
      ...G("dark", r)
    }
  } : {}
});
function w_(_, r) {
  if (typeof _ != "object" || _ === null)
    return _;
  var l = _[Symbol.toPrimitive];
  if (l !== void 0) {
    var o = l.call(_, r || "default");
    if (typeof o != "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(_);
}
function A_(_) {
  var r = w_(_, "string");
  return typeof r == "symbol" ? r : String(r);
}
function q_(_, r, l) {
  return r = A_(r), r in _ ? Object.defineProperty(_, r, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : _[r] = l, _;
}
function K(_, r) {
  var l = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(_);
    r && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(_, i).enumerable;
    })), l.push.apply(l, o);
  }
  return l;
}
function U(_) {
  for (var r = 1; r < arguments.length; r++) {
    var l = arguments[r] != null ? arguments[r] : {};
    r % 2 ? K(Object(l), !0).forEach(function(o) {
      q_(_, o, l[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(l)) : K(Object(l)).forEach(function(o) {
      Object.defineProperty(_, o, Object.getOwnPropertyDescriptor(l, o));
    });
  }
  return _;
}
var P_ = (_, r, l) => {
  for (var o of Object.keys(_)) {
    var i;
    if (_[o] !== ((i = r[o]) !== null && i !== void 0 ? i : l[o]))
      return !1;
  }
  return !0;
}, m = (_) => {
  var r = (l) => {
    var o = _.defaultClassName, i = U(U({}, _.defaultVariants), l);
    for (var e in i) {
      var s, a = (s = i[e]) !== null && s !== void 0 ? s : _.defaultVariants[e];
      if (a != null) {
        var n = a;
        typeof n == "boolean" && (n = n === !0 ? "true" : "false");
        var c = (
          // @ts-expect-error
          _.variantClassNames[e][n]
        );
        c && (o += " " + c);
      }
    }
    for (var [v, u] of _.compoundVariants)
      P_(v, i, _.defaultVariants) && (o += " " + u);
    return o;
  };
  return r.variants = () => Object.keys(_.variantClassNames), r;
}, X_ = m({ defaultClassName: "banner_BASE_BANNER__11mnmjt9", variantClassNames: { size: { small: "banner_size_small__11mnmjt0", medium: "banner_size_medium__11mnmjt1", large: "banner_size_large__11mnmjt2" }, border: { true: "b a n e r _ o d t u 1 m j 8" }, variant: { one: "banner_variant_one__11mnmjt3", two: "banner_variant_two__11mnmjt4" } }, defaultVariants: { size: "medium", border: !1, variant: "one" }, compoundVariants: [] });
const N_ = ({
  children: _,
  className: r,
  size: l,
  variant: o,
  border: i,
  ...e
}) => /* @__PURE__ */ d(
  "div",
  {
    ...e,
    className: p(r, X_({ size: l, variant: o, border: i })),
    children: _
  }
);
N_.displayName = "Banner";
var D_ = m({ defaultClassName: "button_BUTTON_BASE__1lxtq9d6", variantClassNames: { size: { xs: "button_size_xs__1lxtq9d0", sm: "button_size_sm__1lxtq9d1", md: "button_size_md__1lxtq9d2", lg: "button_size_lg__1lxtq9d3" }, variant: { slate: "button_variant_slate__1lxtq9d4", jade: "button_variant_jade__1lxtq9d5" } }, defaultVariants: { size: "sm", variant: "slate" }, compoundVariants: [] });
const T_ = ({
  children: _,
  type: r = "button",
  as: l = "a",
  onClick: o = () => {
  },
  href: i,
  target: e = "_self",
  rel: s = "noopener noreferrer",
  size: a = "sm",
  variant: n = "slate",
  ...c
}) => {
  const v = (u) => {
    i ? (u.preventDefault(), window.open(i, e, s)) : u.preventDefault(), o(u);
  };
  return /* @__PURE__ */ d(
    "button",
    {
      ...c,
      type: r,
      className: D_({ size: a, variant: n }),
      onClick: v,
      children: _
    }
  );
};
T_.displayName = "Button";
var O_ = "canvas_canvas__1cc3smn0";
const S_ = C.forwardRef(
  ({ children: _, ...r }, l) => /* @__PURE__ */ d(
    "div",
    {
      ref: l,
      className: p(O_),
      ...r,
      children: _
    }
  )
);
S_.displayName = "Canvas";
var L_ = m({ defaultClassName: "chip_CHIP_ROOT__qoiret7", variantClassNames: { size: { xs: "chip_size_xs__qoiret0", sm: "chip_size_sm__qoiret1", md: "chip_size_md__qoiret2" }, shape: { rounded: "chip_shape_rounded__qoiret3", pill: "chip_shape_pill__qoiret4" }, variant: { slate: "chip_variant_slate__qoiret5", jade: "chip_variant_jade__qoiret6" } }, defaultVariants: { size: "sm", shape: "pill", variant: "slate" }, compoundVariants: [] });
const M_ = ({
  children: _,
  className: r,
  size: l = "sm",
  shape: o = "pill",
  variant: i = "slate",
  ...e
}) => /* @__PURE__ */ d(
  "span",
  {
    ...e,
    className: p(r, L_({ size: l, shape: o, variant: i })),
    children: _
  }
);
M_.displayName = "Chip";
var E_ = m({ defaultClassName: "container_CONTAINER_BASE__1lnq7joa", variantClassNames: { align: { start: "container_align_start__1lnq7jo6", center: "container_align_center__1lnq7jo7", end: "container_align_end__1lnq7jo8" }, width: { small: "container_width_small__1lnq7jo0", medium: "container_width_medium__1lnq7jo1", large: "container_width_large__1lnq7jo2", xlarge: "container_width_xlarge__1lnq7jo3", max: "container_width_max__1lnq7jo4", full: "container_width_full__1lnq7jo5" }, border: { true: "container_border_true__1lnq7jo9" } }, defaultVariants: { align: "start", width: "max", border: !1 }, compoundVariants: [] });
const I_ = ({
  children: _,
  className: r,
  width: l = "max",
  align: o = "start",
  border: i = !1,
  ...e
}) => /* @__PURE__ */ d(
  "div",
  {
    ...e,
    className: p(r, E_({ width: l, align: o, border: i })),
    children: _
  }
);
I_.displayName = "Container";
var B_ = m({ defaultClassName: "flex_FLEX_BASE__17rj2sml", variantClassNames: { direction: { row: "flex_direction_row__17rj2sm0", column: "flex_direction_column__17rj2sm1", rowReverse: "flex_direction_rowReverse__17rj2sm2", columnReverse: "flex_direction_columnReverse__17rj2sm3" }, align: { start: "flex_align_start__17rj2sm4", center: "flex_align_center__17rj2sm5", end: "flex_align_end__17rj2sm6", stretch: "flex_align_stretch__17rj2sm7", baseline: "flex_align_baseline__17rj2sm8" }, justify: { start: "flex_justify_start__17rj2sm9", center: "flex_justify_center__17rj2sma", end: "flex_justify_end__17rj2smb", between: "flex_justify_between__17rj2smc" }, gap: { xs: "flex_gap_xs__17rj2smd", sm: "flex_gap_sm__17rj2sme", md: "flex_gap_md__17rj2smf", lg: "flex_gap_lg__17rj2smg", xl: "flex_gap_xl__17rj2smh" }, wrap: { wrap: "flex_wrap_wrap__17rj2smi", nowrap: "flex_wrap_nowrap__17rj2smj", wrapReverse: "flex_wrap_wrapReverse__17rj2smk" } }, defaultVariants: { direction: "row", align: "start", justify: "start", gap: "sm", wrap: "wrap" }, compoundVariants: [] });
const W_ = C.forwardRef(
  ({
    children: _,
    direction: r = "row",
    align: l = "center",
    justify: o = "center",
    gap: i = "sm",
    ...e
    //..
  }, s) => /* @__PURE__ */ d(
    "div",
    {
      ...e,
      ref: s,
      className: B_({ direction: r, align: l, justify: o, gap: i }),
      children: _
    }
  )
);
W_.displayName = "Flex";
var H_ = "grid_grid__t7bfpz2", R_ = "var(--gridItemMinWidth__t7bfpz0)", F_ = "var(--gridMaxRowItems__t7bfpz1)";
function $(_) {
  var r = _.match(/^var\((.*)\)$/);
  return r ? r[1] : _;
}
function V_(_, r) {
  var l = _;
  for (var o of r) {
    if (!(o in l))
      throw new Error("Path ".concat(r.join(" -> "), " does not exist in object"));
    l = l[o];
  }
  return l;
}
function i_(_, r) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], o = _.constructor();
  for (var i in _) {
    var e = _[i], s = [...l, i];
    typeof e == "string" || typeof e == "number" || e == null ? o[i] = r(e, s) : typeof e == "object" && !Array.isArray(e) ? o[i] = i_(e, r, s) : console.warn('Skipping invalid key "'.concat(s.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(e) ? "Array" : typeof e, '"'));
  }
  return o;
}
function G_(_, r) {
  var l = {};
  if (typeof r == "object") {
    var o = _;
    i_(r, (s, a) => {
      var n = V_(o, a);
      l[$(n)] = String(s);
    });
  } else {
    var i = _;
    for (var e in i)
      l[$(e)] = i[e];
  }
  return Object.defineProperty(l, "toString", {
    value: function() {
      return Object.keys(this).map((a) => "".concat(a, ":").concat(this[a])).join(";");
    },
    writable: !1
  }), l;
}
const M = S(
  ({ as: _ = "div", className: r, ...l }, o) => {
    const i = {}, e = {};
    for (const a in l)
      L.properties.has(a) ? i[a] = l[a] : e[a] = l[a];
    const s = l_({
      reset: typeof _ == "string" ? _ : "div",
      ...i
    });
    return Y(_, {
      className: p(s, r),
      ...e,
      ref: o
    });
  }
), K_ = S(
  ({ as: _ = "div", className: r, ...l }, o) => {
    const i = {}, e = {};
    for (const a in l)
      L.properties.has(a) ? i[a] = l[a] : e[a] = l[a];
    const s = l_({
      reset: typeof _ == "string" ? _ : "div",
      ...i
    });
    return Y(_, {
      className: p(s, r),
      ...e,
      ref: o
    });
  }
);
M.displayName = "RectBox";
K_.displayName = "Box";
const U_ = C.forwardRef(function({
  children: r,
  gridItemMinWidth: l = "300px",
  gridMaxRowItems: o,
  style: i = {},
  ...e
}, s) {
  return /* @__PURE__ */ d(
    M,
    {
      ...e,
      ref: s,
      className: `${H_} ${e.className ?? ""}`,
      style: {
        ...i,
        ...G_({
          [R_]: l,
          [F_]: o && String(o) || String(p_.count(r))
        })
      },
      flexDirection: "row",
      children: r
    }
  );
});
U_.displayName = "Grid";
var $_ = m({ defaultClassName: "heading_HEADING_BASE__1ipj5n5k", variantClassNames: { font: { system: "heading_font_system__1ipj5n50", mono: "heading_font_mono__1ipj5n51" }, size: { display: "heading_size_display__1ipj5n52", H1: "heading_size_H1__1ipj5n53", H2: "heading_size_H2__1ipj5n54", H3: "heading_size_H3__1ipj5n55", H4: "heading_size_H4__1ipj5n56", H5: "heading_size_H5__1ipj5n57", H6: "heading_size_H6__1ipj5n58" }, weight: { superlite: "heading_weight_superlite__1ipj5n59", lite: "heading_weight_lite__1ipj5n5a", normal: "heading_weight_normal__1ipj5n5b", medium: "heading_weight_medium__1ipj5n5c", semibold: "heading_weight_semibold__1ipj5n5d", bold: "heading_weight_bold__1ipj5n5e", heavy: "heading_weight_heavy__1ipj5n5f", black: "heading_weight_black__1ipj5n5g" }, align: { left: "heading_align_left__1ipj5n5h", center: "heading_align_center__1ipj5n5i", right: "heading_align_right__1ipj5n5j" } }, defaultVariants: { font: "system", size: "H1", weight: "semibold", align: "left" }, compoundVariants: [] });
const Z_ = C.forwardRef(
  ({
    className: _,
    font: r = "system",
    size: l = "H1",
    weight: o = "semibold",
    align: i = "left",
    ...e
  }, s) => /* @__PURE__ */ d(
    "h1",
    {
      ...e,
      ref: s,
      className: p(_, $_({ font: r, size: l, weight: o, align: i }))
    }
  )
);
Z_.displayName = "Heading";
var Y_ = "popover_popoverClose__cubg343", J_ = "popover_popoverContent__cubg341", Q_ = "popover_popoverTrigger__cubg340";
const _r = f.Root, rr = f.Arrow, or = f.Anchor, lr = f.Portal, ir = C.forwardRef(({ children: _, className: r, asChild: l = !1, ...o }, i) => /* @__PURE__ */ d(
  f.Trigger,
  {
    ...o,
    ref: i,
    className: p(Q_, r),
    children: _
  }
)), er = C.forwardRef(
  ({
    children: _,
    className: r,
    align: l = "center",
    sideOffset: o = 6,
    sticky: i = "partial",
    side: e = "bottom",
    ...s
  }, a) => /* @__PURE__ */ d(f.Portal, { children: /* @__PURE__ */ d(
    f.Content,
    {
      ...s,
      ref: a,
      align: l,
      sideOffset: o,
      side: e,
      className: p(J_, r),
      children: _
    }
  ) })
), sr = C.forwardRef(({ children: _, className: r, asChild: l, ...o }, i) => /* @__PURE__ */ d(
  f.Close,
  {
    ...o,
    ref: i,
    asChild: l,
    className: p(Y_, r),
    children: _
  }
)), k = (_) => /* @__PURE__ */ d(_r, { ..._ });
k.Portal = lr;
k.Trigger = ir;
k.Content = er;
k.Anchor = or;
k.Arrow = rr;
k.Close = sr;
k.displayName = "Popover";
k.Portal.displayName = "Popover.Portal";
k.Trigger.displayName = "Popover.Trigger";
k.Content.displayName = "Popover.Content";
k.Anchor.displayName = "Popover.Anchor";
k.Arrow.displayName = "Popover.Arrow";
k.Close.displayName = "Popover.Close";
var ar = m({ defaultClassName: "section_SEC_ROOT__15gsuyj4", variantClassNames: { size: { sm: "section_size_sm__15gsuyj0", md: "section_size_md__15gsuyj1", lg: "section_size_lg__15gsuyj2", vw: "section_size_vw__15gsuyj3" } }, defaultVariants: { size: "vw" }, compoundVariants: [] });
const nr = ({
  children: _,
  className: r,
  size: l = "vw",
  ...o
}) => /* @__PURE__ */ d(
  "div",
  {
    ...o,
    className: p(r, ar({ size: l })),
    children: _
  }
);
nr.displayName = "Section";
var tr = m({ defaultClassName: "space_SPACE_BASE__19q0mtsb", variantClassNames: { size: { xs: "space_size_xs__19q0mts0", sm: "space_size_sm__19q0mts1", md: "space_size_md__19q0mts2", lg: "space_size_lg__19q0mts3", xl: "space_size_xl__19q0mts4", xxl: "space_size_xxl__19q0mts5", "3xl": "space_size_3xl__19q0mts6", "4xl": "space_size_4xl__19q0mts7", "5xl": "space_size_5xl__19q0mts8", "6xl": "space_size_6xl__19q0mts9", "7xl": "space_size_7xl__19q0mtsa" } }, defaultVariants: { size: "sm" }, compoundVariants: [] });
const gr = S(
  ({ size: _ = "sm", className: r, ...l }, o) => {
    const i = tr({ size: _ });
    return /* @__PURE__ */ d(
      "div",
      {
        ...l,
        ref: o,
        className: r ? `${r} ${i}` : i
      }
    );
  }
);
gr.displayName = "Space";
const Z = {
  1: "wrap",
  0: "nowrap"
}, dr = {
  horizontal: "row",
  vertical: "column"
}, cr = (_) => _ ? o_(
  _,
  (r) => dr[r]
) : void 0, pr = (_) => _ ? typeof _ == "boolean" ? Z[1] : o_(
  _,
  // Hack to convert boolean to number since Sprinkles does not support
  // boolean responsive keys
  (r) => Z[+r]
) : void 0, zr = ({
  as: _ = "div",
  align: r,
  children: l,
  justify: o,
  flex: i,
  direction: e = "vertical",
  space: s = "4px 4px",
  wrap: a
}) => {
  const n = cr(e), c = pr(a);
  return /* @__PURE__ */ d(
    M,
    {
      alignItems: r,
      as: _,
      display: "flex",
      flex: i,
      flexDirection: n,
      flexWrap: c,
      gap: s,
      justifyContent: o,
      children: l
    }
  );
};
var kr = m({ defaultClassName: "text_TEXT_BASE__5hgvyj48", variantClassNames: { font: { system: "text_font_system__5hgvyj0", inter: "text_font_inter__5hgvyj1", mono: "text_font_mono__5hgvyj2" }, size: { xs: "text_size_xs__5hgvyj3", sm: "text_size_sm__5hgvyj4", md: "text_size_md__5hgvyj5", lg: "text_size_lg__5hgvyj6", xl: "text_size_xl__5hgvyj7", xxl: "text_size_xxl__5hgvyj8", "3xl": "text_size_3xl__5hgvyj9", "4xl": "text_size_4xl__5hgvyja", "5xl": "text_size_5xl__5hgvyjb", "6xl": "text_size_6xl__5hgvyjc", "7xl": "text_size_7xl__5hgvyjd", "8xl": "text_size_8xl__5hgvyje", "9xl": "text_size_9xl__5hgvyjf" }, weight: { superlite: "text_weight_superlite__5hgvyjg", lite: "text_weight_lite__5hgvyjh", normal: "text_weight_normal__5hgvyji", medium: "text_weight_medium__5hgvyjj", semibold: "text_weight_semibold__5hgvyjk", bold: "text_weight_bold__5hgvyjl", heavy: "text_weight_heavy__5hgvyjm", black: "text_weight_black__5hgvyjn" }, color: { transparent: "text_color_transparent__5hgvyjo", current: "text_color_current__5hgvyjp", white: "text_color_white__5hgvyjq", black: "text_color_black__5hgvyjr", jade0: "text_color_jade0__5hgvyjs", jade1: "text_color_jade1__5hgvyjt", jade2: "text_color_jade2__5hgvyju", jade3: "text_color_jade3__5hgvyjv", jade4: "text_color_jade4__5hgvyjw", jade5: "text_color_jade5__5hgvyjx", jade6: "text_color_jade6__5hgvyjy", jade7: "text_color_jade7__5hgvyjz", jade8: "text_color_jade8__5hgvyj10", jade9: "text_color_jade9__5hgvyj11", jade10: "text_color_jade10__5hgvyj12", jade11: "text_color_jade11__5hgvyj13", jade12: "text_color_jade12__5hgvyj14", sapphire0: "text_color_sapphire0__5hgvyj15", sapphire1: "text_color_sapphire1__5hgvyj16", sapphire2: "text_color_sapphire2__5hgvyj17", sapphire3: "text_color_sapphire3__5hgvyj18", sapphire4: "text_color_sapphire4__5hgvyj19", sapphire5: "text_color_sapphire5__5hgvyj1a", sapphire6: "text_color_sapphire6__5hgvyj1b", sapphire7: "text_color_sapphire7__5hgvyj1c", sapphire8: "text_color_sapphire8__5hgvyj1d", sapphire9: "text_color_sapphire9__5hgvyj1e", sapphire10: "text_color_sapphire10__5hgvyj1f", sapphire11: "text_color_sapphire11__5hgvyj1g", sapphire12: "text_color_sapphire12__5hgvyj1h", peach0: "text_color_peach0__5hgvyj1i", peach1: "text_color_peach1__5hgvyj1j", peach2: "text_color_peach2__5hgvyj1k", peach3: "text_color_peach3__5hgvyj1l", peach4: "text_color_peach4__5hgvyj1m", peach5: "text_color_peach5__5hgvyj1n", peach6: "text_color_peach6__5hgvyj1o", peach7: "text_color_peach7__5hgvyj1p", peach8: "text_color_peach8__5hgvyj1q", peach9: "text_color_peach9__5hgvyj1r", peach10: "text_color_peach10__5hgvyj1s", peach11: "text_color_peach11__5hgvyj1t", peach12: "text_color_peach12__5hgvyj1u", carbon0: "text_color_carbon0__5hgvyj1v", carbon1: "text_color_carbon1__5hgvyj1w", carbon2: "text_color_carbon2__5hgvyj1x", carbon3: "text_color_carbon3__5hgvyj1y", carbon4: "text_color_carbon4__5hgvyj1z", carbon5: "text_color_carbon5__5hgvyj20", carbon6: "text_color_carbon6__5hgvyj21", carbon7: "text_color_carbon7__5hgvyj22", carbon8: "text_color_carbon8__5hgvyj23", carbon9: "text_color_carbon9__5hgvyj24", carbon10: "text_color_carbon10__5hgvyj25", carbon11: "text_color_carbon11__5hgvyj26", carbon12: "text_color_carbon12__5hgvyj27", slate0: "text_color_slate0__5hgvyj28", slate1: "text_color_slate1__5hgvyj29", slate2: "text_color_slate2__5hgvyj2a", slate3: "text_color_slate3__5hgvyj2b", slate4: "text_color_slate4__5hgvyj2c", slate5: "text_color_slate5__5hgvyj2d", slate6: "text_color_slate6__5hgvyj2e", slate7: "text_color_slate7__5hgvyj2f", slate8: "text_color_slate8__5hgvyj2g", slate9: "text_color_slate9__5hgvyj2h", slate10: "text_color_slate10__5hgvyj2i", slate11: "text_color_slate11__5hgvyj2j", slate12: "text_color_slate12__5hgvyj2k", azure0: "text_color_azure0__5hgvyj2l", azure1: "text_color_azure1__5hgvyj2m", azure2: "text_color_azure2__5hgvyj2n", azure3: "text_color_azure3__5hgvyj2o", azure4: "text_color_azure4__5hgvyj2p", azure5: "text_color_azure5__5hgvyj2q", azure6: "text_color_azure6__5hgvyj2r", azure7: "text_color_azure7__5hgvyj2s", azure8: "text_color_azure8__5hgvyj2t", azure9: "text_color_azure9__5hgvyj2u", azure10: "text_color_azure10__5hgvyj2v", azure11: "text_color_azure11__5hgvyj2w", azure12: "text_color_azure12__5hgvyj2x", cherry0: "text_color_cherry0__5hgvyj2y", cherry1: "text_color_cherry1__5hgvyj2z", cherry2: "text_color_cherry2__5hgvyj30", cherry3: "text_color_cherry3__5hgvyj31", cherry4: "text_color_cherry4__5hgvyj32", cherry5: "text_color_cherry5__5hgvyj33", cherry6: "text_color_cherry6__5hgvyj34", cherry7: "text_color_cherry7__5hgvyj35", cherry8: "text_color_cherry8__5hgvyj36", cherry9: "text_color_cherry9__5hgvyj37", cherry10: "text_color_cherry10__5hgvyj38", cherry11: "text_color_cherry11__5hgvyj39", cherry12: "text_color_cherry12__5hgvyj3a", lime0: "text_color_lime0__5hgvyj3b", lime1: "text_color_lime1__5hgvyj3c", lime2: "text_color_lime2__5hgvyj3d", lime3: "text_color_lime3__5hgvyj3e", lime4: "text_color_lime4__5hgvyj3f", lime5: "text_color_lime5__5hgvyj3g", lime6: "text_color_lime6__5hgvyj3h", lime7: "text_color_lime7__5hgvyj3i", lime8: "text_color_lime8__5hgvyj3j", lime9: "text_color_lime9__5hgvyj3k", lime10: "text_color_lime10__5hgvyj3l", lime11: "text_color_lime11__5hgvyj3m", lime12: "text_color_lime12__5hgvyj3n", lemon0: "text_color_lemon0__5hgvyj3o", lemon1: "text_color_lemon1__5hgvyj3p", lemon2: "text_color_lemon2__5hgvyj3q", lemon3: "text_color_lemon3__5hgvyj3r", lemon4: "text_color_lemon4__5hgvyj3s", lemon5: "text_color_lemon5__5hgvyj3t", lemon6: "text_color_lemon6__5hgvyj3u", lemon7: "text_color_lemon7__5hgvyj3v", lemon8: "text_color_lemon8__5hgvyj3w", lemon9: "text_color_lemon9__5hgvyj3x", lemon10: "text_color_lemon10__5hgvyj3y", lemon11: "text_color_lemon11__5hgvyj3z", lemon12: "text_color_lemon12__5hgvyj40" }, align: { left: "text_align_left__5hgvyj41", center: "text_align_center__5hgvyj42", right: "text_align_right__5hgvyj43" }, casing: { none: "text_casing_none__5hgvyj44", uppercase: "text_casing_uppercase__5hgvyj45", lowercase: "text_casing_lowercase__5hgvyj46", capitalize: "text_casing_capitalize__5hgvyj47" } }, defaultVariants: { font: "system", size: "md", weight: "medium", color: "current", align: "left", casing: "none" }, compoundVariants: [] });
const hr = C.forwardRef(
  ({
    children: _,
    className: r,
    font: l = "inter",
    size: o = "md",
    align: i = "left",
    weight: e = "medium",
    color: s = "current",
    casing: a,
    ...n
  }, c) => /* @__PURE__ */ d(
    "p",
    {
      ref: c,
      className: p(
        r,
        kr({ font: l, size: o, align: i, weight: e, color: s, casing: a })
      ),
      ...n,
      children: _
    }
  )
);
hr.displayName = "Text";
export {
  N_ as Banner,
  K_ as Box,
  T_ as Button,
  S_ as Canvas,
  M_ as Chip,
  I_ as Container,
  W_ as Flex,
  U_ as Grid,
  Z_ as Heading,
  J as KitContext,
  vr as KitProvider,
  k as Popover,
  or as PopoverAnchor,
  rr as PopoverArrow,
  sr as PopoverClose,
  er as PopoverContent,
  lr as PopoverPortal,
  _r as PopoverRoot,
  ir as PopoverTrigger,
  M as Rect,
  nr as Section,
  gr as Space,
  zr as Stack,
  hr as Text,
  l_ as atoms,
  jr as breakpoints,
  yr as colorModeStyle,
  Cr as kit,
  xr as mapColorValue,
  o_ as mapResponsiveValue,
  L as sprinkles,
  br as useTheme
};
//# sourceMappingURL=index.esm.mjs.map
