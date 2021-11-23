import { h, t } from "./xeact.js";
const $tl = (kind) => (text, attrs = {}, children = []) => {
    children.unshift(t(text));
    return h(kind, attrs, children);
};
export const h1 = $tl("h1");
export const h2 = $tl("h2");
export const h3 = $tl("h3");
export const h4 = $tl("h4");
export const h5 = $tl("h5");
export const h6 = $tl("h6");
export const p = $tl("p");
export const b = $tl("b");
export const i = $tl("i");
export const u = $tl("u");
export const span = $tl("span");
export const li = $tl("li");
export const dd = $tl("dd");
export const dt = $tl("dt");
export const del = $tl("del");
export const sub = $tl("sub");
export const sup = $tl("sup");
export const strong = $tl("strong");
export const small = $tl("small");
export const hl = h("hl");
export const br = h("br");
export const img = (src, alt="") => h("img", {src, alt});
export const ahref = (href, text) => h("a", {href}, t(text));
const $dl = (kind) => (attrs = {}, children = []) => h(kind, attrs, children);
export const span = $dl("span");
export const div = $dl("div");
export const iframe = (src, attrs = {}) => {
    attrs[src] = src;
    return h("iframe", attrs);
};