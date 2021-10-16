<template>
  <v-container fluid id="contenedor">
    <v-card max-width id="tarjeta">
    <v-row id="fila">

      <v-col class="d-flex" cols="3" sm="3" id="col_cate">
        <v-select
          :items="emprendedores"
          label=" Emprendedores "
          dense
          outlined
        ></v-select>
      </v-col>

      <v-col class="d-flex" cols="3" sm="3">
        <v-select
          :items="categorias"
          label=" Categorias "
          dense
          outlined
        ></v-select>
      </v-col>

      <v-col cols="3" sm="6" md="4">
        <v-text-field label="Descripción" outlined dense></v-text-field>
      </v-col>

      <v-col>
      <v-btn id="btn1" color="teal lighten-3" >
        <v-icon center>mdi-magnify</v-icon>
      </v-btn>
      <v-btn id="btn2" color="teal lighten-3"  to = '/IngresarVendedor'>Vender </v-btn>
      </v-col>
    </v-row>
    </v-card>
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

#tarjeta{
  margin-top: 0px;
}


#fila {
  height: 75px;
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