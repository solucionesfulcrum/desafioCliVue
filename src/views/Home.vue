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
    <CardProducto :desserts="producState" />
  </v-card>
</template>

<script>
import CardProducto from "@/components/CardProducto.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  methods: {},

  computed: {
    ...mapState(["producState"]),
  },
  components: {
    CardProducto,
  },
  methods: {
    ...mapActions(["obtenerProduc"]),
  },
  created() {
    this.obtenerProduc()
  },
};
</script>
