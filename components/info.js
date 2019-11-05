Vue.component('Info', {
    props:['language'],
    template: `
    <div class="container-sm">
        <div class="panel">
            <div class="panel-header">
                <h2 v-text="message.title"></h2>
            </div>
            <div class="panel-body">
                <span v-text="message.content"></span>
            </div>
            <div class="panel-footer">
                <button class="active" id="btn-spanish" @click="changeLanguage('es')">Español</button>
                <button id="btn-english" @click="changeLanguage('en')">English</button>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            message: {
                title: '',
                content: ''
            },
            messages: {
                'es' : { 'title': 'Bienvenido', 'content': 'Este proyecto muestra un ejemplo de una arquitectura de vueJS para programar de una manera más sencilla sin utilizar Vue CLI.' },
                'en' : { 'title': 'Welcome', 'content': 'This project shows an example of a vueJS architecture to program in a simpler way without using Vue CLI.'},
            }
        }
    },
    methods:{
        changeLanguage(language){
            switch (language) {
                case 'es':
                    this.message.title = this.messages.es.title; 
                    this.message.content = this.messages.es.content; 
                    // el('#btn-spanish').disabled = true;     
                break;
                case 'en':
                    this.message.title = this.messages.en.title; 
                    this.message.content = this.messages.en.content;  
                    // el('#btn-english').disabled = true;                           
                break;
            
                default:
                    this.message.title = this.messages.es.title; 
                    this.message.content = this.messages.es.content; 
                break;
            }   
        }
    },
    created(){
        this.changeLanguage(this.language);        
    }
});