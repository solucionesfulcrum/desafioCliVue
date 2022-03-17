<template>
  <div class="d-flex flex-column justify-space-between align-center">
    <v-card class="mx-auto my-12" max-width="374">
      <div class="text-center mt-10">
        <h1>Crear Usuario</h1>
      </div>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field
                prepend-icon="mdi-account-circle"
                v-model="telefono"
                :rules="nameRules"
                label="Telefono"
                type="number"
                required
                autocomplete="off"
                @keypress="actualizar"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <v-text-field
                prepend-icon="mdi-account-circle"
                v-model="usuario"
                :rules="nameRules"
                label="Usuario"
                required
                autocomplete="off"
                @keypress="actualizar"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <v-text-field
                prepend-icon="mdi-lock"
                v-model="contra"
                :rules="nameRules"
                label="Contraseña"
                type="password"
                autocomplete="off"
                required
                @keypress="actualizar"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <v-text-field
                prepend-icon="mdi-lock"
                v-model="repeContra"
                :rules="nameRules"
                label="Repetir Contraseña"
                type="password"
                autocomplete="off"
                required
                @keypress="actualizar"
              ></v-text-field>
            </v-col>
          </v-row>
          <div class="text-center mt-10 mb-5">
            <v-btn depressed color="primary" large @click="crear">
              Crear
            </v-btn>
            <v-dialog v-model="dialog" hide-overlay persistent width="300">
              <v-card color="primary" dark>
                <v-card-text>
                  Cargando Datos
                  <v-progress-linear
                    indeterminate
                    color="white"
                    class="mb-0"
                  ></v-progress-linear>
                </v-card-text>
              </v-card>
            </v-dialog>
          </div>
          <v-alert
            border="top"
            color="red"
            dismissible
            outlined
            text
            :value="value"
            type="warning"
          >
            {{ mensaje }}
          </v-alert>
        </v-container>
      </v-form>
    </v-card>

    <v-simple-table height="300px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">telefono</th>
            <th class="text-left">usuario</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.telefono }}</td>
            <td>{{ item.usuario }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      valid: false,
      telefono: Number,
      usuario: "",
      contra: "",
      repeContra: "",
      mensaje: "",
      desserts: [
        {
          telefono: "Prueba",
          usuario: "prueba",
        },
      ],
      value: false,
      nameRules: [
        (v) => !!v || "*Campo obligatorio",
        (v) => v.length <= 10 || "*Maximo 10 caracteres",
      ],
    };
  },
  methods: {
    crear() {
      this.valid = false;
      if (
        this.telefono != "" ||
        this.usuario != "" ||
        this.contra != "" ||
        this.repeContra != ""
      ) {
        if (this.contra == this.repeContra) {
          this.desserts.push({'telefono':this.telefono,'usuario':this.usuario})
          console.log(this.desserts);
          //this.$router.push("/Home");
        } else {
          (this.value = true), (this.mensaje = "Las contraseñas no coinciden");
        }
      } else {
        (this.value = true),
          (this.mensaje = "Los campos no pueden estar vacios");
      }
    },
    actualizar() {
      this.value = false;
    },
  },
  created() {},
};
</script>