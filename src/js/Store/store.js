import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        component: 'register'
    },
    getters: {
        GET_COMPONENT: state => {
            return state.component
        }
    },
    mutations: {
        SET_COMPONENT: (state, payload) => {
            state.component = payload
        }
    },
    actions: {

    },
});