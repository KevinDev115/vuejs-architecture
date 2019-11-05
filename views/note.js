const NoteView = {
    template: 
    `
    <div class="container-sm">
        <div class="panel panel-sm">
            <div class="panel-header">
                <h2>Notas</h2>
            </div>
            <div class="panel-body">
                <div class="add-note">
                    <button>+</button>
                </div>
                <ul>
                    <li v-for="(item, key) in list" class="list-item">
                        <div class="list-head">
                            <h4 v-text="item.title"></h4>
                            <span class="pill success" v-if="item.state" @click.prevent="changeState(key)">Complete</span>
                            <span class="pill danger" v-else  @click.prevent="changeState(key)">Incomplete</span>
                        </div>
                        <div class="list-body">
                            <p v-text="item.content"></p>    
                        </div>                        
                    </li>
                </ul>
            </div>
            <div class="panel-footer">
                
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            list: [
                {'title': 'Pending Tasks', 'content': 'bathe the dog, wash the crockery, sweep the house', 'state': false},
                {'title': 'shopping List', 'content': 'egg, bacon, rice', 'state': true},
            ]
        }
    },
    methods:{
        changeState(id){
            if (this.list[id].state) {
                this.list[id].state = false;
            }else{
                this.list[id].state = true;
            }
        }
    },
    created(){
        if(!store.token) this.$router.push({name: '/home'});
    }
} 