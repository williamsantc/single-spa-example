import './set-public-path';
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import VueRouter from 'vue-router'
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter)

const lifecycles = singleSpaVue({
    Vue,
    appOptions: {
        render: (h: any) => h(App),
    },
});

export const {bootstrap, mount, unmount} = lifecycles;

