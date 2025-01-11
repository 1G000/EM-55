const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/contacts",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ContactsPage.vue") }],
  },
  {
    path: "/about",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/AboutPage.vue") }],
  },
  {
    path: "/history",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/HistoryPage.vue") }],
  },
  {
    path: "/smr",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/SmrPage.vue") }],
  },
  {
    path: "/gallery",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/GalleryPage.vue") }],
  },
  {
    path: "/payment-information",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/PaymentInformationPage.vue") },
    ],
  },
  {
    path: "/vacancies",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/VacanciesPage.vue") },
    ],
  },
  {
    path: "/privacy",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/PrivacyPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
