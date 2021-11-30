console.log(`import { h, t } from "./xeact.js";`);
console.log(`const $tl = (kind) => (text, attrs = {}, children = []) => {
    children.unshift(t(text));
    return h(kind, attrs, children);
};`);

[
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "b",
    "i",
    "u",
    "li",
    "dd",
    "dt",
    "del",
    "sub",
    "sup",
    "strong",
    "small"
].forEach((tag) => console.log(`export const ${tag} = $tl("${tag}");`));

[
    "hl",
    "br",
].forEach((tag) => console.log(`export const ${tag} = () => h("${tag}");`));

console.log(`export const img = (src, alt="") => h("img", {src, alt});`);
console.log(`export const ahref = (href, text) => h("a", {href}, t(text));`);

console.log(`const $dl = (kind) => (attrs = {}, children = []) => h(kind, attrs, children);`);

[
    "span",
    "div"
].forEach((tag) => console.log(`export const ${tag} = $dl("${tag}");`));

console.log(`export const iframe = (src, attrs = {}) => {
    attrs[src] = src;
    return h("iframe", attrs);
};`);
