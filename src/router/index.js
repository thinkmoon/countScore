import Vue from 'vue'
import Router from 'vue-router'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import Index from '@/components/index'
import CountScore from '@/components/countScore'
import InputScore from '@/components/inputScore'
import ArrangeMatch from '@/components/arrangeMatch'

Vue.use(Router)
Vue.use(iView);

export default new Router({
    routes: [{
            path: '/',
            component: Index,
            meta: {
                title: '赛事分配页'
            }
        }, {
            path: '/countScore',
            component: CountScore,
            meta: {
                title: '自动计分板'
            }
        },
        {
            path: '/arrangeMatch',
            component: ArrangeMatch,
            meta: {
                title: '赛事分配'
            }
        }, {
            path: '/inputScore',
            component: InputScore,
            meta: {
                title: '手动计分板'
            }
        }
    ]
})