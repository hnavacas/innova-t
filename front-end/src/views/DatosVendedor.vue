<template>
  <v-container>
    <div>
      <barra-titulo
        :inicio="true"
        :carro="false"
        :ingresar="false"
        :botones="true"
      ></barra-titulo>
      <tarjeta-vendedor
        :botones1="false"
        :botones2="true"
      ></tarjeta-vendedor>
    </div>
  </v-container>
</template>

<script>
import BarraTitulo from '../components/BarraTitulo.vue';
import TarjetaVendedor from "../components/TarjetaVendedor.vue";

export default {
  name: "datosvendedor",
  components: { TarjetaVendedor, BarraTitulo },
};

</script>

<style>
</style>