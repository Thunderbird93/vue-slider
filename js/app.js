/*
- Inserire le immagini nel thumb -
- Mostrare in grande l'immagine della thumb -
- aggiungere la class active all'immagine attiva -
*/
const { createApp } = Vue;

createApp({
    data(){
        return{
            porsche: {
                images: [
                    'img/01.jpg',
                    'img/02.jpg',
                    'img/03.jpg',
                    'img/04.jpg',
                    'img/05.jpg'
                ]
            },
            activeImage: 0
        }
    },
    methods:{
        changeImage(indice){
            this.activeImage = indice;
        }
    }
}).mount('#app')
