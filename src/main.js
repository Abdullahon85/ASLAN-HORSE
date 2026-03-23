import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import "./style.css";

// Scroll-reveal directive
// Usage: v-reveal | v-reveal="'left'" | v-reveal="{ dir: 'right', delay: 200 }"
const revealDirective = {
  mounted(el, { value }) {
    const dir =
      typeof value === "string"
        ? value
        : value?.dir ?? value?.direction ?? "up";
    const delay =
      typeof value === "object" && value?.delay != null ? value.delay : 0;

    el.classList.add("sr", `sr--${dir}`);
    if (delay) el.style.setProperty("--sr-delay", `${delay}ms`);

    // Skip on SSG server-side pre-render
    if (typeof window === "undefined") {
      el.classList.add("sr--visible");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("sr--visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    io.observe(el);
    el._srIO = io;
  },
  unmounted(el) {
    el._srIO?.disconnect();
  },
};

// ViteSSG - pre-renders HTML at build time (Googlebot sees real content)
export const createApp = ViteSSG(App, { routes: [{ path: "/" }] }, ({ app }) => {
  app.directive("reveal", revealDirective);
});