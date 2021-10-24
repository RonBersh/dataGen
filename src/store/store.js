import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import user from "./profile";


Vue.use(Vuex);

// Vue.use(VueAxios, axios);
// Vue.axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export default new Vuex.Store({
    modules: {
        user
        
    }
})