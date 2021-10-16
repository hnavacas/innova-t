<template>
    <v-card  class="pa-2" max-width id="tarjeta">
    <v-row id="fila">
      <v-col cols="12" sm="6" md="3">
        <v-text-field
        label="Fecha Inicio" outlined dense id="fecha"
        placeholder="dd/mm/aaaa"

        ></v-text-field>
      </v-col>

       <v-col cols="12" sm="6" md="3">
        <v-text-field 
        label="Fecha Final" outlined dense id="fecha"
        placeholder="dd/mm/aaaa"

        ></v-text-field>
      </v-col>

      <v-col class="d-flex" cols="4" sm="3" >
        <v-select v-if="clientes"
          :items="clientes"
          label=" Clientes "
          dense
          outlined
        ></v-select>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <div>
            <v-btn class="ma-2" color="teal lighten-3">Aceptar </v-btn>
            <v-btn class="ma-2" color="teal lighten-3">Cancelar </v-btn>

          </div>
      </v-col>
    </v-row>
    </v-card>
</template>

<script>
export default {
  name: "encabezadoreporte",
  
  props:{
    clientes:Boolean,
   }
};
</script>

<style>
#tarjeta{
  margin-top: 10px;
}

#fecha{
  width: 10px;
}

#fila{
  height: 75px;
}


</style>