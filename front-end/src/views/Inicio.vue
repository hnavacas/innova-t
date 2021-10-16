<template>
  <v-container>
    <div class="inicio">
      <barra-titulo :inicio='false' :carro='true' :ingresar='true'></barra-titulo>
    </div>
    <div id="filtros">
      <div>
        <barra-filtros>
          <!-- MOSTRAR EL CONTENIDO DE LA BARRA DE FILTROS -->
        </barra-filtros>
     
      </div>
    </div>
    <v-container class="grey lighten-5" id="contenido">
      <v-col v-for="imagen in imagenes" :key="imagen.Name" cols="12">
        <tarjeta-articulo :imagen="imagen">
                  <!--- VISUALIZA EL ARTICULO USANDO LA TARJETA-ARTICULO -->
        </tarjeta-articulo>
      </v-col>

    </v-container>

  </v-container>
 

</template>


<script>
import BarraTitulo from "../components/BarraTitulo.vue";
import TarjetaArticulo from "../components/TarjetaArticulo.vue";
import BarraFiltros from "../components/BarraFiltros.vue";
import Store from "../store/index.js";

export default {
  name: "inicio",
  components: { BarraTitulo, TarjetaArticulo, BarraFiltros, Store },
  created: () => {
    Store.dispatch("getImagenes");
  },
  computed: {
    imagenes: () => {
      return Store.state.imagenes;
    },
  },
};
</script>

<style>
#filtros {
  margin-top: 5px;
  margin-bottom: 5px;
  height: 60px;
}

#contenido {
  height: 200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>