import Home from "../pages/Home";
import About from "../pages/About";
import Statistics from "../pages/Statistics";
import Global from "../pages/Global";

export const routes = {
  home: {
    route: "/",
    content: "Home"
  },
  about: {
    route: "/about",
    content: "About"
  },
  statistics: {
    route: "/statistics",
    content: "Statistics"
  },
  global: {
    route: "/global",
    content: "Global"
  }
};

export default {
  home: {
    route: "/",
    component: Home,
    content: "Home"
  },
  about: {
    route: "/about",
    component: About,
    content: "About"
  },
  statistics: {
    route: "/statistics",
    component: Statistics,
    content: "Statistics"
  },
  global: {
    route: "/global",
    component: Global,
    content: "Global"
  }
};
