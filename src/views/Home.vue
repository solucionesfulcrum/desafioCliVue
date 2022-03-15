<template>
  <v-card class="mx-auto overflow-hidden" height="100vh">
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>DESAFIO</v-toolbar-title>
    </v-app-bar>

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
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <CardProducto :desserts="desserts" />
  </v-card>
</template>

<script>
import CardProducto from "@/components/CardProducto.vue";

export default {
  name: "Home",
  data() {
    return {
      desserts: [
        {
          id: 1,
          name: "Frozen Yogurt",
          descripcion: "Este producto es un producto lleno de vitaminas",
          fat: 6.0,
          carbs: 24,
          precio: 4.0,
          iron: "1%",
        },
        {
          id: 2,
          name: "Ice cream sandwich",
          descripcion: "Este producto es de pura fruta",
          fat: 9.0,
          carbs: 37,
          precio: 4.3,
          iron: "1%",
        },
        {
          id: 3,
          name: "Eclair",
          descripcion: "Este producto es una delicia",
          fat: 16.0,
          carbs: 23,
          precio: 6.0,
          iron: "7%",
        },
        {
          id: 4,
          name: "Ice cream sandwich",
          descripcion: "Este producto es de pura fruta",
          fat: 9.0,
          carbs: 37,
          precio: 4.3,
          iron: "1%",
        },
        {
          id: 5,
          name: "Ice cream sandwich",
          descripcion: "Este producto es de pura fruta",
          fat: 9.0,
          carbs: 37,
          precio: 4.3,
          iron: "1%",
        },
        {
          id: 6,
          name: "Ice cream sandwich",
          descripcion: "Este producto es de pura fruta",
          fat: 9.0,
          carbs: 37,
          precio: 4.3,
          iron: "1%",
        },
      ],
      drawer: false,
      group: null,
    };
  },
  methods: {
    
  },
  components: {
    CardProducto,
  },
};
</script>
