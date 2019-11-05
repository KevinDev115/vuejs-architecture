Vue.component('Navbar',{
    props: ['login', 'title'],
    template: 
    `
    <nav class="navbar">
        
        <h1 class="navbar-brand">
            <router-link to="/">{{title}}</router-link>
        </h1>
        <ul class="navbar-menu" v-if="!login">
            <li>
                <router-link to="/login">Login</router-link>
            </li>
            <li>
                <router-link to="/register">Register</router-link>
            </li>
        </ul>
        <ul class="navbar-menu" v-else>
            <li>
                <router-link to="/note">Note</router-link>
            </li>
            <li>
                <a href="#" @click.prevent="logout">Logout</a>
            </li>
        </ul>
    </nav>
    `,
    methods:{
        logout(){
            this.$emit('update-login', false);
            store.logout();
            this.$router.push({name: 'login'});
        }
    },
})