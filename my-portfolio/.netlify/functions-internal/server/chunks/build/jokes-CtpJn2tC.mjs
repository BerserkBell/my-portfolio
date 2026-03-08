import { _ as __nuxt_component_0 } from './NavBar-zRg7oW5Y.mjs';
import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './nuxt-link-BeMqN49D.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = {
  __name: "jokes",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const joke = ref(null);
    const loading = ref(true);
    const error = ref(false);
    const showPunchline = ref(false);
    async function fetchJoke() {
      loading.value = true;
      error.value = false;
      showPunchline.value = false;
      const response = await fetch("https://official-joke-api.appspot.com/random_joke").then((res) => res.json()).catch(() => null);
      if (response) {
        joke.value = response;
      } else {
        error.value = true;
      }
      loading.value = false;
    }
    [__temp, __restore] = withAsyncContext(() => fetchJoke()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(`<main><h1>Random Joke</h1><p>Need a break? Here&#39;s a joke for you.</p><hr>`);
      if (unref(loading)) {
        _push(`<p>Loading joke...</p>`);
      } else if (unref(error)) {
        _push(`<p>Could not load a joke right now.</p>`);
      } else {
        _push(`<div><p><strong>${ssrInterpolate(unref(joke).setup)}</strong></p>`);
        if (unref(showPunchline)) {
          _push(`<p>${ssrInterpolate(unref(joke).punchline)}</p>`);
        } else {
          _push(`<button>Show punchline</button>`);
        }
        _push(`</div>`);
      }
      _push(`<br><button>Get another joke</button></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/jokes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=jokes-CtpJn2tC.mjs.map
