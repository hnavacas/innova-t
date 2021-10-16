<template>
  <!-- TARJETA PARA MOSTRAR LOS ARTICULOS DE LA PAGINA DE INICIO --->
  <v-container>
    <v-card class="mx-auto" max-width="350">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="imagen.PicUrl"
      >
        <v-card-title class="pa-2">{{imagen.Name}}</v-card-title>
      </v-img>
      <v-card-title>Descripción</v-card-title>
      <v-card-subtitle class="pb-0">
        <v-card-text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
          magni id? Quo facere asperiores architecto et tenetur eaque nihil
          quibusdam quam molestiae. Iste incidunt eveniet ex ratione nihil autem
          sunt?
        </v-card-text>
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <v-divider></v-divider>
        <div>Precio Anterior</div>
        <div>Descuento</div>
        <div>Precio Actual</div>
        {{contar}}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="teal lighten-3" v-on:click = 'adicionar()'> Comprar </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "tarjeta-articulo",
  data: () => ({contar: 0
  }),

  props:["imagen"],

  methods:{
  adicionar(){
    return this.contar+=1
  }
  } 
};
</script>

<style>
#descrip {
  font-size: 1rem;
}
</style>