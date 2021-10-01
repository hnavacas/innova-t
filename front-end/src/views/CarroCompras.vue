<template>
  <v-container>
    <barra-titulo
      :inicio="true"
      :carro="false"
      :ingresar="false"
    ></barra-titulo>

    <v-row>
      <v-col id="col-articulos" cols="6">
        <h3>Artículos pedidos</h3>
        <v-card id="card-articulos">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Artículo</th>
                  <th class="text-left">Cantidad</th>
                  <th class="text-left">Precio</th>
                  <th class="text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in compras" :key="item.articulo">
                  <td>{{ item.articulo }}</td>
                  <td>{{ item.cantidad }}</td>
                  <td>{{ item.precio }}</td>
                  <td>{{ item.total }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>

      <v-col id="col-pagar" cols="6">
        <h3>Valor a pagar</h3>
        <v-card id="card-pagar">
          <v-row>
            <v-col id="col1" cols="7">
              <v-text-field label="Total" solo dense></v-text-field>
            </v-col>

            <v-col id="col2" cols="2">
              <v-btn class="ma-2" color="teal lighten-1"> Comprar </v-btn>

              <v-btn class="ma-2" color="teal lighten-1"> Cancelar </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- FORMULARIO DEL COMPRADOR -->
    <v-row>
      <v-col>
        <tarjeta-comprador :tarjetaCom="true" :tituloCom="Comprador" ></tarjeta-comprador>
      </v-col>
    </v-row>
    <v-checkbox
      v-model="checkbox"
      label="Usar los mismos datos del comprador para el envio"
    ></v-checkbox>
    
    <!-- FORMULARIO DEL ENVIO -->
    <v-row>
      <v-col>
        <tarjeta-comprador :tarjetaCom="true" :tituloCom="Envio"></tarjeta-comprador>
      </v-col>
    </v-row>

    <!-- FORMAS DE PAGO -->
    <v-row>
        <v-card id="forma" class="mx-auto" max-width="auto">
        <v-card-title>Forma de pago</v-card-title>
        <v-col cols="12">
          <v-container fluid>
            <v-radio-group v-model="column" column>
              <v-radio label="Transferencia NEQUI" value="radio-1"></v-radio>
              <v-radio label="Cuenta débito" value="radio-2"></v-radio>
               <v-radio label="Pago Servientrega" value="radio-3"></v-radio>
            </v-radio-group>
            
          </v-container>
        </v-col>
        <v-col>
          <v-btn class="ma-2" color="teal lighten-1"> Pagar </v-btn>
          <v-btn class="ma-2" color="teal lighten-1"> Cancelar </v-btn>
        </v-col>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import BarraTitulo from "../components/BarraTitulo.vue";
import TarjetaComprador from "../components/TarjetaComprador.vue";
export default {
  components: { BarraTitulo, TarjetaComprador },
  

  data() {
    return {
      compras: [
        {
          articulo: "Artículo 1",
          cantidad: 2,
          precio: "$55.000",
          total: "$110.000",
        },
        {
          articulo: "Artículo 2",
          cantidad: 1,
          precio: "$60.000",
          total: "$120.000",
        },
        {
          articulo: "Artículo 3",
          cantidad: 3,
          precio: "$50.000",
          total: "$150.000",
        },
        {
          articulo: "Artículo 4",
          cantidad: 4,
          precio: "$5.000",
          total: "$20.000",
        },
      ],
    };

  },
};
</script>



</script>

<style>
#col-articulos {
  margin-top: 20px;
}

#card-pagar {
  margin-top: 30px;
  height: 150px;
  width: 400px;
}

#col1,
col2 {
  margin-top: 5px;
}

#txt-total {
  margin-top: 10px;
}
</style>