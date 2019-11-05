const routes = [
    {
        path: '/',
        component: IndexView,
        name: 'index'
    },
    {
        path: '/home',
        component: IndexView,
        name: 'home'
    },
    {
        path: '/login',
        component: LoginView,
        name: 'login' 
    },
    {
        path: '/register',
        component: RegisterView,
        name: 'register'
    },
    {
        path: '/note',
        component: NoteView,
        name: 'note'
    },
]

const router = new VueRouter({
    routes,
});