import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home'
import Entradas from '../components/Entradas'
import Peliculas from '../components/Peliculas'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Entradas/',
      name: 'Entradas',
      component: Entradas
    },
    {
      path: '/Peliculas/',
      name: 'Peliculas',
      component: Peliculas
    }
  ],
  mode: 'hash'
})
