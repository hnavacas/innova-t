<template>
  <v-container>
    <div class="Ingresar">
      <!-- VISUALIZA LA BARRA DEL TITILO -->

      <barra-titulo
        :inicio="true"
        :carro="false"
        :ingresar="false"
      ></barra-titulo>

      <!-- TARJETA PARA DATOS DE INGRESO -->
      <v-card id="datos" class="mx-auto" max-width="400" elevation="10">
        <v-card-title> Cambiar Contraseña </v-card-title>
        <v-divider></v-divider>
        <v-card-subtitle>
          <v-text-field
            label=" Contraseña "
            outlined
            dense
            type="password"
          ></v-text-field>
          <v-text-field label=" Confirmar contraseña " outlined dense type="password"></v-text-field>

          <v-divider></v-divider>

          <!-- BOTONES -->
          <div id="botones" class="text-center">
            <v-btn class="ma-2" color="teal lighten-1" elevation=5>
              Cancelar
            </v-btn>
            <v-btn class="ma-2" color="teal lighten-1" elevation=5 text to ='/NuevaContraseña'>
              Aceptar
            </v-btn>

          </div>
        </v-card-subtitle>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import BarraTitulo from '../components/BarraTitulo.vue'
export default {
  components: { BarraTitulo },

}
</script>

<style>

</style>