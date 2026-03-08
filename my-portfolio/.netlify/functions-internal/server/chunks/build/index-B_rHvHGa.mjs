import { _ as __nuxt_component_0 } from './NavBar-zRg7oW5Y.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BeMqN49D.mjs';
import { ref, withAsyncContext, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _imports_0 = "" + __buildAssetsURL("profile.6Ytk0xQK.jpg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const comic = ref(null);
    const loading = ref(true);
    const error = ref(false);
    const response = ([__temp, __restore] = withAsyncContext(() => fetch("https://corsproxy.io/?https://xkcd.com/info.0.json").then((res) => res.json()).catch(() => null)), __temp = await __temp, __restore(), __temp);
    if (response) {
      comic.value = response;
    } else {
      error.value = true;
    }
    loading.value = false;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(`<main><img${ssrRenderAttr("src", _imports_0)} alt="Photo of me" width="150"><h1>Ethan Bell</h1><p> I am an Information and Knowledge Systems student at the University of Pretoria. I would like to work in cybersecurity when i am done my studies at Uni. </p><p> I enjoy building websites and learning new technologies.I have an extreme passion for video games and would like to maybe go into that direction one day. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View my projects`);
          } else {
            return [
              createTextVNode("View my projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` | `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact me`);
          } else {
            return [
              createTextVNode("Contact me")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<hr><h2>Today&#39;s XKCD Comic</h2>`);
      if (unref(loading)) {
        _push(`<p>Loading comic...</p>`);
      } else if (unref(error)) {
        _push(`<p>Could not load comic.</p>`);
      } else {
        _push(`<div><h3>${ssrInterpolate(unref(comic).title)}</h3><img${ssrRenderAttr("src", unref(comic).img)}${ssrRenderAttr("alt", unref(comic).alt)} width="400"><p><em>${ssrInterpolate(unref(comic).alt)}</em></p></div>`);
      }
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B_rHvHGa.mjs.map
