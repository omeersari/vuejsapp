import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "popular",
        name: "Popular",
        component: () => import("../views/home/Popular.vue")
      },
      {
        path: "nowplaying",
        name: "NowPlaying",
        component: () => import("../views/home/NowPlaying.vue")
      },
      {
        path: "toprated",
        name: "TopRated",
        component: () => import("../views/home/TopRated.vue")
      },
      {
        path: "upcoming",
        name: "Upcoming",
        component: () => import("../views/home/Upcoming.vue")
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
