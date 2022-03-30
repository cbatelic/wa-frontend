import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { Auth } from "@/services";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/naslovna',
    name: 'Naslovna',
    component: () => import(/* webpackChunkName: "naslovna" */ '../views/Naslovna.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "signUp" */ '../views/SignUp.vue')
  },
  {
    path: '/terrain',
    name: 'Terrain',
    component: () => import(/* webpackChunkName: "terrain" */ '../views/Terrain.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import(/* webpackChunkName: "categories" */ '../views/Categories.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import(/* webpackChunkName: "calendar" */ '../views/Calendar.vue')
  },
  {
    path: '/booking/:id',
    name: 'Booking',
    component: () => import(/* webpackChunkName: "booking" */ '../views/Booking.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
  },
  {
    path: '/homeAdmin',
    name: 'HomeAdmin',
    component: () => import(/* webpackChunkName: "homeAdmin" */ '../views/HomeAdmin.vue'),
    meta: { isAdmin: true },
  },
  {
    path: '/accountAdmin',
    name: 'AccountAdmin',
    component: () => import(/* webpackChunkName: "accountAdmin" */ '../views/AccountAdmin.vue')
  },
  {
    path: '/terrainAdmin',
    name: 'TerrainAdmin',
    component: () => import(/* webpackChunkName: "terrainAdmin" */ '../views/TerrainAdmin.vue')
  },
  {
    path: '/usersQuestionsAdmin',
    name: 'UsersQuestionsAdmin',
    component: () => import(/* webpackChunkName: "usersQuestionsAdmin" */ '../views/UsersQuestionsAdmin.vue')
  },
  {
    path: '/questions',
    name: 'Questions',
    component: () => import(/* webpackChunkName: "questions" */ '../views/Questions.vue')
  },
  {
    path: '/usersQuestionsAdmin/:id',
    props: true,
    name: 'QuestionsAdminDetail',
    component: () => import('../views/QuestionsAdminDetail.vue'),
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
