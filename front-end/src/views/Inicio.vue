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
    <div id="contenido">
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col v-for="n in 6" :key="n" cols="12" sm="4">
            <v-card class="pa-2" outlined tile>
              <tarjeta-articulo>
                <!--- VISUALIZA EL ARTICULO USANDO LA TARJETA-ARTICULO -->
              </tarjeta-articulo>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>


<script>
import BarraTitulo from "../components/BarraTitulo.vue";
import TarjetaArticulo from "../components/TarjetaArticulo.vue";
import BarraFiltros from '../components/BarraFiltros.vue';

export default {
  name: "inicio",
  components: { BarraTitulo, TarjetaArticulo, BarraFiltros },
  
};
</script>

<style>

  #filtros{
    margin-top: 5px;
    margin-bottom: 5px;
    height: 60px;
  }

  #contenido{
    height: 300px;
    background-color: greenyellow;
  }
 

</style>