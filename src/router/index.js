import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes"; // Путь к вашему массиву маршрутов (теперь будет описан ниже)

/*
 • If not building with SSR mode, you can
 • directly export the Router instantiation;
 *
 • The function below can be async too; either use
 • async/await or return a Promise which resolves
 • with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: "smooth",
          top: 100,
        };
      } else {
        return { top: 0 };
      }
    },

    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    // Set the page title
    if (to.meta.title) {
      document.title = to.meta.title;
    } else {
      document.title = process.env.APP_NAME || "Quasar App"; // Default title
    }

    // Handle meta tags
    const existingMetaTags = document.querySelectorAll("meta[data-q-router]");
    existingMetaTags.forEach((tag) => tag.remove());

    if (to.meta.metaTags) {
      to.meta.metaTags.forEach((tag) => {
        const metaTag = document.createElement("meta");
        Object.keys(tag).forEach((key) => {
          metaTag.setAttribute(key, tag[key]);
        });
        metaTag.setAttribute("data-q-router", ""); // Use a Quasar-specific attribute
        document.head.appendChild(metaTag);
      });
    }

    next();
  });

  return Router;
});
