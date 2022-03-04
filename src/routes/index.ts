import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import MainView from '@/views/Main.vue';
import DBView from '@/views/DB.vue';
import ChatView from '@/views/ChatView.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: MainView },
  {
    path: '/db/:id',
    component: DBView
  },
  {
    path: '/chatView',
    component: ChatView
  }
  //{ path: "/:allParams(.*)*", name: "NotFound", component: NotFound }, All data avaialable in allParams
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

//Guards
router.beforeEach((to, from) => {
  console.log(to, from);
  // ...
  // explicitly return false to cancel the navigation
  // return false;
});

export default router;
