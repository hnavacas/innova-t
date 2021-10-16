<template>
  <!--- TARJETA PARA MOSTRAR LOS DATOS DEL VENDEDOR CUANDO SE REGISTRA Y CUANDO INGRESA -->
  <v-container>
    <!-- DATOS DEL EMPRENDIMIENTO -->
    <v-card id="emprende" class="mx-auto" max-width="auto" elevation="10">
      <v-card-title>Emprendimiento</v-card-title>
      <v-row>
        <v-col class="d-flex" id="razon">
          <v-text-field
            label="Nombre o Razón Social"
            outlined
            dense
          ></v-text-field>
        </v-col>

        <v-col class="d-flex" cols="5" id="correo">
          <v-text-field
            label="Correo Electrónico"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card>

    <!-- DATOS DEL CONTACTO -->
    <v-card id="contacto" class="mx-auto" max-width="auto" elevation="10">
      <v-card-title>Datos del contacto</v-card-title>
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
          <v-select
            :items="ciudades"
            label=" Ciudad "
            dense
            outlined
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <h5 id="mensaje" v-if="botones1">
            La contraseña será enviada a su correo electrónico
          </h5>
        </v-col>
        <v-col>
          <div v-if="botones1">
            <v-checkbox
              v-model="checkbox1"
              label="Acepto las condiciones"
            ></v-checkbox>
             <v-spacer></v-spacer>
            <v-btn class="mr-4" type="submit" color="teal lighten-1">
              Enviar
            </v-btn>
          </div>

          <div id="boton2" v-if="botones2">
            <v-btn class="ma-2" color="teal lighten-1" elevation="5">
              Cancelar
            </v-btn>
            <v-btn class="ma-2" color="teal lighten-1" elevation="5">
              Aceptar
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "tarjetavendedor",
  data: () => ({
    departamentos: ["Guajira", "Atlantico", "Magdalena", "Meta"],
    ciudades: ["Ciudad 1", "Ciudad 2", "Ciudad 3", "Ciudad 4"],
  }),
  props: {
    botones: Boolean,
    botones1: Boolean,
    botones2: Boolean,
  },
  
};
</script>

<style>
#contacto,
#emprende {
  margin-top: 20px;
}
#razon,
#mensaje,
#nombre,
#direccion {
  margin-left: 10px;
}

#correo,
#celular,
#ciudad {
  margin-right: 10px;
}
</style>