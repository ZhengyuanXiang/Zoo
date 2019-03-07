import Vue from 'vue'
import Router from 'vue-router'
import Meta from "vue-meta"

const home = resolve => require(["@/components/home/home"],resolve)
const life = resolve => require(["@/components/life/life"],resolve)

Vue.use(Router)
Vue.use(Meta)

export function createRouter(){
    return new Router({
        mode: "history",
        routes: [
            {
              path: "/",
              redirect: "/home"
            },
            {
                path: "/home",
                component: home,
                name: "home"
            },
            {
              path: "/life",
              name: "life",
              component: life
            }
        ]
    })
}

