<template>
    <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col><v-card class="pa-2" outlinened tile>Fecha</v-card></v-col>
      <v-col><v-card class="pa-2" outlinened tile>Articulo</v-card></v-col>
      <v-col><v-card class="pa-2" outlinened tile>Cantidad</v-card></v-col>
      <v-col><v-card class="pa-2" outlinened tile>Precio</v-card></v-col>
      <v-col><v-card class="pa-2" outlinened tile>Total</v-card></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        v-for="n in 5"
        :key="n"

      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "contenidoreporte",
  
};
</script>

<style>

</style>