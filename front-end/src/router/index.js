import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

/*
import Home from '../views/Home.vue'
import Inicio from '../views/Inicio.vue'
import Ingresar from '../views/Ingresar.vue'
import DatosVendedor from '../views/DatosVendedor.vue'
import IngresarVendedor from '../views/IngresarVendedor.vue'
import ArticulosVendedor from '../views/ArticulosVendedor.vue'
import NuevoArticulo from '../views/NuevoArticulo.vue'
import NuevaContraseña from '../views/NuevaContraseña.vue'
import CarroCompras from '../views/CarroCompras.vue'
*/

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: ()=> import( '../views/Inicio.vue')
  },
  {
    path: '/Ingresar',
    name: 'Ingresar',
    component: ()=> import('../views/Ingresar.vue')
  },
  {
    path: '/DatosVendedor',
    name: 'DatosVendedor',
    component: ()=> import('../views/DatosVendedor.vue')
  },
  {
    path: '/IngresarVendedor',
    name: 'IngresarVendedor',
    component: ()=> import('../views/IngresarVendedor.vue')
  },
  {
    path: '/ArticulosVendedor',
    name: 'ArticulosVendedor',
    component:()=> import('../views/ArticulosVendedor.vue')
  },
  {
    path: '/CarroCompras',
    name: 'CarroCompras',
    component: ()=> import('../views/CarroCompras.vue')
  },
  {
    path: '/NuevaContraseña',
    name: 'NuevaContraseña',
    component: ()=> import('../views/NuevaContraseña.vue')
  },
  {
    path: '/NuevoArticulo',
    name: 'NuevoArticulo',
    component: ()=> import('../views/NuevoArticulo.vue')
  },
  {
    path: '/ReporteVentas',
    name: 'ReporteVentas',
    component: ()=> import('../views/ReporteVentas.vue')
  },
  {
    path: '/ReporteClientes',
    name: 'ReporteClientes',
    component: ()=> import('../views/ReporteClientes.vue')
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
