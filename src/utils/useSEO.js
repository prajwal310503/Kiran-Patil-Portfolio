import { useEffect } from "react";

const BASE_URL = "https://kiranprakashpatil.com";
const DEFAULT_IMAGE = `${BASE_URL}/kiran1.jpeg`;
const DEFAULT_TITLE = "Kiran Prakash Patil | Corporator, Panvel | Official Website";
const DEFAULT_DESC =
  "Official website of Kiran Prakash Patil, Corporator at Panvel Municipal Corporation. Championing education, healthcare, sports & community welfare in Panvel, Maharashtra since 2008.";

const setMeta = (selector, attr, value) => {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    const [attrName, attrVal] = selector.match(/\[(.+?)="(.+?)"\]/).slice(1);
    el.setAttribute(attrName, attrVal);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const setLink = (rel, href) => {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const useSEO = ({ title, description, path = "/", image } = {}) => {
  useEffect(() => {
    const t = title ? `${title} | Kiran Prakash Patil` : DEFAULT_TITLE;
    const d = description || DEFAULT_DESC;
    const url = `${BASE_URL}${path}`;
    const img = image || DEFAULT_IMAGE;

    document.title = t;

    setMeta('meta[name="description"]', "content", d);
    setMeta('meta[name="title"]', "content", t);
    setLink("canonical", url);

    // Open Graph
    setMeta('meta[property="og:title"]', "content", t);
    setMeta('meta[property="og:description"]', "content", d);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:image"]', "content", img);

    // Twitter
    setMeta('meta[name="twitter:title"]', "content", t);
    setMeta('meta[name="twitter:description"]', "content", d);
    setMeta('meta[name="twitter:url"]', "content", url);
    setMeta('meta[name="twitter:image"]', "content", img);
  }, [title, description, path, image]);
};
