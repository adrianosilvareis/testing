import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { signUpApi } from "@/infra/request/usecase/login";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async sendNewUser(state, signup) {
      return signUpApi(signup);
    }
  },
  modules: {}
});
