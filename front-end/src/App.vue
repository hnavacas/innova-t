<template>
  <v-app>
    <!-- BORRAR TODOS LOS CONTENEDORES PARA QUITAR LA BARRA AZUL DEL LOGO DE VUETIFY -->

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
