<template>
  <v-container>
    <div>
      <barra-titulo
        :inicio="true"
        :carro="false"
        :ingresar="false"
        :botones="false"
      ></barra-titulo>
      <tarjeta-vendedor
        :botones1="true"
        :botones2="false"
      ></tarjeta-vendedor>
    </div>
  </v-container>
</template>

<script>
import BarraTitulo from '../components/BarraTitulo.vue'
import TarjetaVendedor from '../components/TarjetaVendedor.vue'
export default {
    name: "ingresarvendedor",
  components: { BarraTitulo, TarjetaVendedor },

}
</script>

<style>

</style>