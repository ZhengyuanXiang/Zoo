import Vue from 'vue'
import App from './App.vue'

import { createRouter } from './router'
import { createStore } from "./store"

const router = createRouter()
const store = createStore()

new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
})
