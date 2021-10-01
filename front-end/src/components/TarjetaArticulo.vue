<template>
  <!-- TARJETA PARA MOSTRAR LOS ARTICULOS DE LA PAGINA DE INICIO --->
  <v-container>
    <v-card class="mx-auto" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title class="pa-2">Artículo 1</v-card-title>
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
        <v-btn class="orange white--text" v-on:click = 'adicionar()'> Comprar </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "tarjeta-articulo",
  data: () => ({contar: 0
  }),

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