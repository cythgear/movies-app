import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Movies from './views/Movies.vue'
import Movie from './views/Movie.vue'
import NotFound from './views/NotFound.vue'
import Forbidden from './views/Forbidden.vue'
import Profile from './views/Profile.vue'
import Register from './views/Register.vue'

import LoginForm from './components/LoginForm.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movies/page=:id/',
      name: 'movies',
      component: Movies
    },
    {
      path: '/movie/:id/',
      name: 'movie',
      component: Movie,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user/:id/',
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '/403',
      name: '403',
      component: Forbidden,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '*',
      redirect: '404'
    }
  ]
})
