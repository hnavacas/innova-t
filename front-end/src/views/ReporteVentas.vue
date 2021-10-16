<template>
  <v-container>
    <barra-titulo
      :inicio="true"
      :carro="false"
      :ingresar="false"
      :botones="true"
    ></barra-titulo>

    <encabezado-reporte
      :clientes="false"
    ></encabezado-reporte>

    <contenido-reporte>
      <!-- VISUALIZA EL CONTENIDO DEL REPORTE -->
    </contenido-reporte>


  </v-container>
</template>

<script>
import BarraTitulo from "../components/BarraTitulo.vue";
import ContenidoReporte from '../components/ContenidoReporte.vue';
import EncabezadoReporte from '../components/EncabezadoReporte.vue';
export default {
  components: { BarraTitulo, EncabezadoReporte, ContenidoReporte },
};
</script>

<style>

</style>