<template>
  <v-row justify="center">
    <v-btn color="deep-purple" dark @click.stop="dialog = true">
     Ver Carrito<v-icon>mdi-cart-outline</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-toolbar
      color="deep-purple"
      dark
    >

      <v-toolbar-title>Carrito</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>

    <v-list two-line>
      <v-list-item-group
        v-model="selected"
        active-class="pink--text"
        multiple
      >
        <template v-for="(item, index) in items">
          <v-list-item :key="item.name">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>

                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.precio"
                ></v-list-item-subtitle>

                <v-list-item-subtitle v-text="item.descripcion"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="item.action"></v-list-item-action-text>

                <v-icon
                  v-if="!active"
                  color="grey lighten-1"
                >
                  mdi-star-outline
                </v-icon>

                <v-icon
                  v-else
                  color="yellow darken-3"
                >
                  mdi-star
                </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider
            v-if="index < items.length - 1"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Salir
          </v-btn>

          <v-btn color="green darken-1" text @click="dialog = false">
            Pagar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-col v-for="dessert in desserts" :key="dessert.id" cols="12" md="4">
      <v-card class="mx-auto mt-5" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">OVERLINE</div>
            <v-list-item-title class="text-h5 mb-1">
              {{ dessert.name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ dessert.descripcion }}</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn outlined rounded text @click="mostrar(dessert)">
            Button
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      dialog: false,
      
      selected: [2],
      items: [
      ],
    };
  },
  props: ["desserts"],
  components: {},
  methods: {
    mostrar(id) {
      console.log("Selecionado", id);
      this.items.push(id)
      console.log("data",this.items)
    },
  },
};
</script>