import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Inicio from '../views/Inicio.vue'
import Ingresar from '../views/Ingresar.vue'
import DatosVendedor from '../views/DatosVendedor.vue'
import IngresarVendedor from '../views/IngresarVendedor.vue'
import ArticulosVendedor from '../views/ArticulosVendedor.vue'
import NuevoArticulo from '../views/NuevoArticulo.vue'
import NuevaContraseña from '../views/NuevaContraseña.vue'
import CarroCompras from '../views/CarroCompras.vue'



Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/Ingresar',
    name: 'Ingresar',
    component: Ingresar
  },
  {
    path: '/DatosVendedor',
    name: 'DatosVendedor',
    component: DatosVendedor
  },
  {
    path: '/IngresarVendedor',
    name: 'IngresarVendedor',
    component: IngresarVendedor
  },
  {
    path: '/ArticulosVendedor',
    name: 'ArticulosVendedor',
    component: ArticulosVendedor
  },
  {
    path: '/CarroCompras',
    name: 'CarroCompras',
    component: CarroCompras
  },
  {
    path: '/NuevaContraseña',
    name: 'NuevaContraseña',
    component: NuevaContraseña
  },
  {
    path: '/NuevoArticulo',
    name: 'NuevoArticulo',
    component: NuevoArticulo
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
