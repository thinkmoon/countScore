// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios';
axios.defaults.baseURL = '/api/client';

router.beforeEach((to, from, next) => { //beforeEach是router的钩子函数，在进入路由前执行
    if (to.meta.title) { //判断是否有标题
        document.title = to.meta.title
    }
    next() //执行进入路由，如果不写就不会进入目标页
})

Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})