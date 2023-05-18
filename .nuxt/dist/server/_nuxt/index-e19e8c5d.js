import "./index-e12b288f.js";
import { defineComponent, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "devalue";
import "h3";
import "@unhead/ssr";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "destr";
import "defu";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Nuxt 3 About Page",
      meta: [
        { name: "description", content: "Nuxt3 About Page" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1> This is an about page on the app</h1></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-e19e8c5d.js.map
