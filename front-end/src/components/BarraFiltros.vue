<template>
  <v-container fluid id="contenedor">
    <v-row id="fila" align="center">
      <v-col class="d-flex" cols="4" sm="3" id="col_cate">
        <v-select
          :items="emprendedores"
          label=" Emprendedores "
          dense
          outlined
        ></v-select>
      </v-col>

      <v-col class="d-flex" cols="4" sm="3">
        <v-select
          :items="categorias"
          label=" Categorias "
          dense
          outlined
        ></v-select>
      </v-col>

      <v-col cols="4" sm="6" md="4">
        <v-text-field label="Descripción" outlined dense></v-text-field>
      </v-col>
      <v-btn id="btn1" >
        <v-icon center>mdi-magnify</v-icon>
      </v-btn>
      <v-btn id="btn2" color="teal lighten-1" text to = '/IngresarVendedor'>Vender </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "barrafiltros",

  data: () => ({
    categorias: ["Accesorios", "Zapatos", "Vestidos", "Manualidades"],
    emprendedores: [
      "Emprendedor 1",
      "Emprendedor 2",
      "Emprendedor 3",
      "Emprendedor 4",
    ],
  }),
};
</script>

<style>

#fila {
  height: 60px;
  border: 1px solid;
  border-radius: 0px 0px 10px 10px;
  border-color: aquamarine;
}

#btn1 {
  margin-bottom: 30px;
  margin-right: 5px;
  margin-left: 0px;
}

#btn2 {
  margin-bottom: 30px;
}  

</style>