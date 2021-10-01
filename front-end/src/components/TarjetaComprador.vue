<template>
  <v-card id="contacto" class="mx-auto" max-width="auto" v-if="tarjetaCom">
    <v-card-title>Datos del {{titulo}}</v-card-title>
    <v-row>
      <v-col class="d-flex" id="nombre">
        <v-text-field label="Nombre" outlined dense></v-text-field>
      </v-col>

      <v-col class="d-flex">
        <v-text-field label="Apellidos" outlined dense></v-text-field>
      </v-col>

      <v-col class="d-flex" id="celular">
        <v-text-field label="Celular" outlined dense></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="d-flex" id="direccion">
        <v-text-field label="Dirección" outlined dense></v-text-field>
      </v-col>
      <v-col class="d-flex" cols="4" sm="3">
        <v-select
          :items="departamentos"
          label=" Departamento "
          dense
          outlined
        ></v-select>
      </v-col>

      <v-col class="d-flex" cols="4" sm="3" id="ciudad">
        <v-select :items="ciudades" label=" Ciudad " dense outlined></v-select>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "tarjetacomprador",
  data: () => ({}),
  props: {
    tarjetaCom: Boolean,
    tarjetaEnv: Boolean,
    tituloCom: String,
  },
};
</script>

<style>
</style>