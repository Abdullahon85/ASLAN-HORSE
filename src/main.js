import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import "./style.css";

// ViteSSG пре-рендерит HTML при сборке - Googlebot видит реальный контент
// Один маршрут / без RouterView: App.vue рендерит всё напрямую
export const createApp = ViteSSG(App, { routes: [{ path: "/" }] });
