<template>
  <!-- TARJETA PARA MOSTRAR CADA UNO DE LOS ARTICULOS POR VENDEDOR -->
  <v-container>
    <barra-titulo
      :inicio="true"
      :carro="false"
      :ingresar="false"
      :botones="true"
    ></barra-titulo>

    <v-row>
        <v-col id="articulos" cols="12" sm="4">
     
      </v-col>

      <v-col>
        <v-card id="imagen" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-subtitle> Dar click para cambiar la imagen</v-card-subtitle>
          </v-img>
        </v-card>
        <br />

        <v-card  class="pa-2" max-width="400" id="articulo">
          <v-row>
            <v-col cols="8">
              <v-textarea
                label="Nombre del artículo"
                auto-grow
                outlined
                rows="1"
                row-height="10"
                
              ></v-textarea>
            </v-col>
            <v-col>
              <v-checkbox
                v-model="checkbox"
                label="Activar / Desactivar"
              ></v-checkbox>
            </v-col>
          </v-row>

          <v-textarea
            label="Descripción del artículo"
            auto-grow
            outlined
            rows="1"
            row-height="10"
            
          ></v-textarea>

          <div id="precios">
            <v-row>
              <v-col v-col cols="12" sm="4" md="4">
                <v-textarea
                  label="Precio anterior"
                  auto-grow
                  outlined
                  prefix="$"
                  rows="1"
                  
                ></v-textarea>
              </v-col>
              <v-col v-col cols="12" sm="4" md="4">
                <v-textarea
                  label="Descuento"
                  auto-grow
                  outlined
                  prefix="$"
                  rows="1"
                  
                ></v-textarea>
              </v-col>

              <v-col v-col cols="12" sm="4" md="4">
                <v-textarea
                  label="Precio actual"
                  auto-grow
                  outlined
                  prefix="$"
                  rows="1"
                 
                ></v-textarea>
              </v-col>
            </v-row>

        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="teal lighten-1"> Actualizar </v-btn>
          <v-btn color="teal lighten-1"> Cancelar </v-btn>
        </v-card-actions>
        </v-card>

        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BarraTitulo from "../components/BarraTitulo.vue";

export default {
  name: "nuevoarticulo",
  components: { BarraTitulo },
  data() {
    return {
     
    };
  },
};
</script>

<style>
#descrip {
  border-radius: 5px 5px;
  border-style: solid;
  border-color: rgb(204, 206, 206);
}

#imagen, #articulos{
  margin-top: 10px;
}
#nombre {
  width: 350px;
}

#precios {
  padding-top: 10px;
  height: 90px;
}

</style>

