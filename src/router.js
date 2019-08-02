const routers = [{
        path: '/countScore',
        meta: {
            title: '计分板'
        },
        component: (resolve) => require(['./views/countScore.vue'], resolve)
    },
    {
        path: '/',
        meta: {
            title: '赛程分配首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    }
];
export default routers;