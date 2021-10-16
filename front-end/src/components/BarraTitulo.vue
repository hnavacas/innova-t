<template>
  <!-- CONTENIDO DE LA BARRA DE TITULO -->
  <div id="contenedor">
    <v-app-bar id="barra" color="teal lighten-1" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title id="titulo">INNOVA-t</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
     
        <v-btn icon v-if='inicio' text to = '/'>
          <v-icon medium right>mdi-home</v-icon> 
        </v-btn>
   
        <v-btn icon v-if='carro' text to = '/Compras'>
          <v-icon medium right>mdi-cart</v-icon>
        </v-btn>

        <v-btn icon v-if='ingresar' text to = '/Ingresar'>   
          <v-icon medium right>mdi-login</v-icon>
        </v-btn>

        <div id="botones" class="text-center" v-if='botones'>
             <v-btn class="ma-2" color="white" plain dark to= '/DatosVendedor'>
              Mi cuenta
            </v-btn>

            <v-btn class="ma-2" color="white" plain dark to= "/ArticulosVendedor">
              Artículos
            </v-btn>
             <v-btn class="ma-2" color="white" plain dark to= "/ReporteVentas">
              Ventas
            </v-btn>
             <v-btn class="ma-2" color="white" plain dark to= "/ReporteClientes">
              Clientes
            </v-btn>
        </div>
      
      </v-toolbar-items>
    </v-app-bar>

    <!-- OPCIONES DEL BOTON HAMBURGUESA -->
    <v-navigation-drawer v-model="drawer" absolute temporary> 
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Mi cuenta</v-list-item-title>
          </v-list-item>
          
          <v-list-item to = "/ArticulosVendedor">
            <v-list-item-icon>
              <v-icon> mdi-lamp-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Articulos</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Clientes</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Salir</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "barratitulo",
  data: () => ({
    drawer: false,
    group: null,
  }),
  props:{
    inicio:Boolean,
    carro: Boolean,
    ingresar: Boolean,
    botones: Boolean,
   }
};
</script>

<style>
#contenedor {
  width: 100% auto;
}

#titulo {
  font-size: 3rem;
}

#barra {
  border-radius: 10px 10px 0px 0px;
  width: auto;
}
</style>