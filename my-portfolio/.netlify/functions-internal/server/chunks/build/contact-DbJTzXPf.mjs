import { _ as __nuxt_component_0 } from './NavBar-zRg7oW5Y.mjs';
import { ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({ name: "", email: "", message: "" });
    const submitted = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(`<main><h1>Contact Me</h1><p>Fill in the form below and I&#39;ll get back to you.</p>`);
      if (unref(submitted)) {
        _push(`<p><strong>Message sent! I&#39;ll be in touch soon.</strong></p>`);
      } else {
        _push(`<form name="contact" method="POST" data-netlify="true"><input type="hidden" name="form-name" value="contact"><p><label>Name<br><input type="text" name="name"${ssrRenderAttr("value", unref(form).name)} required></label></p><p><label>Email<br><input type="email" name="email"${ssrRenderAttr("value", unref(form).email)} required></label></p><p><label>Message<br><textarea name="message" rows="5" required>${ssrInterpolate(unref(form).message)}</textarea></label></p><p><button type="submit">Send Message</button></p></form>`);
      }
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-DbJTzXPf.mjs.map
