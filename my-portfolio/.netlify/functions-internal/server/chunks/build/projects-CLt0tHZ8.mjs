import { _ as __nuxt_component_0 } from './NavBar-zRg7oW5Y.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      {
        title: "Online Store",
        module: "WEB 201",
        description: "A simple e-commerce site with a shopping cart built using Vue and Node.js.",
        github: "https://github.com/yourusername/project-one"
      },
      {
        title: "Grade Predictor",
        module: "COS 301",
        description: "A Python script that predicts final grades based on assignment scores.",
        github: "https://github.com/yourusername/project-two"
      },
      {
        title: "Task Manager CLI",
        module: "COS 110",
        description: "A command-line task manager written in C++ that saves tasks to a file.",
        github: "https://github.com/yourusername/project-three"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(`<main><h1>My Projects</h1><!--[-->`);
      ssrRenderList(projects, (project) => {
        _push(`<div><h2>${ssrInterpolate(project.title)}</h2><p><strong>Module:</strong> ${ssrInterpolate(project.module)}</p><p>${ssrInterpolate(project.description)}</p><a${ssrRenderAttr("href", project.github)} target="_blank">View on GitHub</a><hr></div>`);
      });
      _push(`<!--]--></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-CLt0tHZ8.mjs.map
