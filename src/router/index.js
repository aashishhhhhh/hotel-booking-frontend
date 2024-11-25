import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/HomePage.vue'),
    meta: { requiresAuth: true }, // Protect this route
},
{
    path: '/AppUserProfile',
    name: 'AppUserProfile',
    component: () => import('@/components/AppUserProfile.vue'),
    meta: { requiresAuth: true }, // Protect this route
  },
  {
    path: '/login',
    name: 'AppLogin',
    component: () => import('@/components/auth/AppLogin.vue'),
    meta: {
        hideSidebar: true, // Custom property to hide the sidebar
      },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    try {
      const response = await axios.get('/user');
      // Check if the user is authenticated
      console.log(response.data.id)
      if (response.data.id!=undefined) {
        next();
         // Allow navigation
      } else {
        next({ name: 'AppLogin' });
        // Redirect to login
    }
} catch (error) {
    // Handle unauthenticated state or other errors
    next({ name: 'AppLogin' });
    // Redirect to login
    console.log('2')
}
} else {
    next(); // Always allow navigation for non-protected routes
  }
});

export default router;
