import Vue from "vue"
import App from "./App.vue"
import Vuesax from "vuesax"
import axios from 'axios'
import {store} from './Store/store.js'

import register from "./components/register.vue";
import auth from "./components/auth.vue";
import cabinet from "./components/cabinet";

Vue.component('register', register)
Vue.component('auth', auth)
Vue.component('cabinet', cabinet)

Vue.use(Vuesax)
Vue.prototype.$http = axios

let app = new Vue({
    store,
    el: '#app',
    render: r => r(App)
});

