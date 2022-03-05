import Vue from "vue"
import App from "./App.vue"
import Vuesax from "vuesax"


Vue.use(Vuesax)

let app = new Vue({
    el: '#app',
    render: r => r(App)
});

