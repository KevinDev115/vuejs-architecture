const LoginView = {
    template: 
    `
    <div class="container-sm">
        <div class="panel panel-sm">
            <div class="panel-header">
                <h2>Login!</h2>
            </div>
            <div class="panel-body">
                <form method="post" @submit.prevent="validateData">
                    <div class="form-group">
                        <input v-model="login.username" class="form-control" type="text" placeholder="Username">
                    </div>
                    <div class="form-group">
                        <input v-model="login.password" class="form-control" type="password" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <span class="alert danger" v-show="errorMessage != ''" v-text="errorMessage"></span>
                    </div>  
                    <div class="form-group">
                        <button type="submit" id="btn-login">Login</button>
                    </div>  

                </form>
            </div>
            <div class="panel-footer">
                <pre>{{login}}</pre>
                <pre>{{user}}</pre>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            login: {
                username: '',
                password: '',
            },
            user: {
                username: 'kevin',
                password: 'kevin',
            },
            errorMessage: ''
        }
    },
    methods:{
        validateData(){
            el('#btn-login').disabled = true;
            el('#btn-login').classList.add("disabled");
            this.errorMessage = '';
            
            // ajax('login', 'POST', this.login)
            // .then(async res => {

            //     let data = await res.json();
            //     if(res.status == 200){
            //         this.$emit('update-login', true);
            //         store.token = data.token;
            //         localStorage.token = data.token;
            //         this.$router.push({name: 'wallets'});
            //         el('#btn-login').disabled = false;
            //     }else{
            //         alert(data.message);
            //         el('#btn-login').disabled = false;
            //     }

            // });

            if (this.user.username != this.login.username) {
                this.errorMessage = 'The username is incorrect!';
            }else if(this.user.password != this.login.password){
                this.errorMessage = 'The password is incorrect!';
            }

            if (this.errorMessage == '') {
                let token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                
                this.$emit('update-login', true);
                
                store.token = token;
                localStorage.token = token;
                
                this.$router.push({name: 'note'});
            }

            el('#btn-login').disabled = false;
            el('#btn-login').classList.remove("disabled");
        }
    },
    created(){
        // if(store.token) this.$router.push({name: 'wallets'});
    }
} 