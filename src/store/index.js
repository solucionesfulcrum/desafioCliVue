import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
export const RUTA_SERVIDOR = process.env.VUE_APP_RUTA_API;

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarioState:[]
  },
  mutations: {
    obtenerUsuarios(state, n){
      console.log("data",n)
      state.usuarioState=n
    }
  },
  actions: {

    obtenerUsuarios({ commit },state) {
      axios
        .post(RUTA_SERVIDOR + "/api/token/", {
          username: "Fulcrum",
          password: "123456",
        })
        .then((response) => {
          this.auth = "Bearer " + response.data.access;
          axios
            .get(
              RUTA_SERVIDOR +
              "/usuario/",
              {
                headers: { Authorization: this.auth },
              }
            )
            .then((res) => {
              console.log(res.data[0].contra)
              commit('obtenerUsuarios',res.data)
            })
            .catch((res) => {
              console.warn("Error:", res);
              this.dialog = false;
            });
        })
        .catch((response) => {
          response === 404
            ? console.warn("lo sientimos no tenemos servicios")
            : console.warn("Error:", response);
        });
    }
  },
  modules: {
  }
})
