<template>
  <v-container>
    <div class="Ingresar">
      <!-- VISUALIZA LA BARRA DEL TITILO -->
      <barra-titulo
        :inicio="true"
        :carro="false"
        :ingresar="false"
        :botones="false"
      ></barra-titulo>

      <!-- TARJETA PARA DATOS DE INGRESO -->
      <v-card id="datos" class="mx-auto" max-width="400" elevation="10">
        <v-card-title> Ingresar </v-card-title>
        <v-divider></v-divider>
        <v-card-subtitle>
          <v-text-field
            label="Correo electrónico"
            outlined
            dense
          ></v-text-field>
          <v-text-field label=" Contraseña " outlined dense type="password"></v-text-field>

          <!-- OPCIONES DE INGRESO -->
          <v-row>
            <v-col>
            <router-link to="NuevaContraseña">Cambiar la contraseña</router-link>
            </v-col>
            <v-col>
            <router-link to="NuevaContraseña">Olvidó la contraseña</router-link>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <!-- BOTONES -->
          <div id="botones" class="text-center">
            <v-btn class="ma-2" color="teal lighten-3">
              Cancelar
            </v-btn>
            <v-btn class="ma-2" color="teal lighten-3" to ='/DatosVendedor'>
              Aceptar
            </v-btn>
          </div>
        </v-card-subtitle>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import BarraTitulo from "../components/BarraTitulo.vue";
import NuevaContraseña from './NuevaContraseña.vue';

export default {
  components: { BarraTitulo, NuevaContraseña },
};
</script>

<style>
#datos {
  margin-top: 20px;
}

#botones{
  margin-top: 5px;
}

</style>