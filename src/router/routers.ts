const routers = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/Home.vue')
    },
]

export default  routers
