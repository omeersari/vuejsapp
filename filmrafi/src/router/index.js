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
    path: "/detail/:id",
    name: "Detail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Detail.vue"),
  },

  {
    path: "/bookmarks",
    name: "BookMarks",
    component: () => import("../views/Mybookmarks.vue"),
    meta: {
      isRequireAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach(() => {
  window.scroll(0,0)
});


export default router;
