import "./index.scss";
import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@ceiba-software/area-tecnica",
  app: () => System.import("@ceiba-software/area-tecnica"),
  activeWhen: "/tecnica",
});

registerApplication({
  name: "@ceiba-software/area-design",
  app: () => System.import("@ceiba-software/area-design"),
  activeWhen: "/design",
});

registerApplication({
  name: "@ceiba-software/area-produccion",
  app: () => System.import("@ceiba-software/area-produccion"),
  activeWhen: "/produccion",
});

registerApplication({
  name: "@ceiba-software/root-page",
  app: () => import("./apps/root-page"),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@ceiba-software/navigation-bar",
  app: () => System.import("@ceiba-software/navigation-bar"),
  activeWhen: () => true,
});

start();
