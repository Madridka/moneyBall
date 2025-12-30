import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("@/components/MainComp.vue"),
      meta: {
        title: "hello world",
      },
      children: [
        {
          path: "/menu",
          name: "Menu",
          component: () => import("@/components/HelloWorld.vue"),
          meta: {
            title: "Main",
          },
        },
        {
          path: "/test",
          name: "Test",
          component: () => import("@/components/TestCard.vue"),
          meta: {
            title: "Main",
          },
        },
      ],
    },
  ],
});

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = String(to.meta.title);
  }
});

export default router;
