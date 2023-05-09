const { createApp } = Vue

createApp({
    data() {
        return {
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            counter: 0,
            activeImage: null,
            slider: document.querySelector('.carousel'),
            autocarousel: null,
        }
    },
    methods: {
        changeNextBg() {
            if (this.activeImage) {
                this.activeImage.style.opacity = 0.5;
            }
            (this.counter == this.slides.length - 1) ? this.counter = 0 : this.counter++;
            this.activeImage = document.getElementById('thumbnails').children[this.counter];
            this.activeImage.style.opacity = 1;
        },
        changePrevBg() {
            if (this.activeImage) {
                this.activeImage.style.opacity = 0.5;
            }
            (this.counter == 0) ? this.counter = this.slides.length - 1 : this.counter--;
            this.activeImage = document.getElementById('thumbnails').children[this.counter];
            this.activeImage.style.opacity = 1;
        },
        test(event, i) {
            this.counter = i;
            console.log(this.counter);
            if (this.activeImage) {
                this.activeImage.style.opacity = 0.5;
            }
            event.target.style.opacity = 1;
            this.activeImage = event.target;
        },
        leave(){
            this.autocarousel = clearInterval(this.autocarousel)
        },
        enter(){
            this.autocarousel = setInterval(() =>{
                this.changeNextBg()
            },1000)
            //setInterval(this.changeNextBg(), 3000)
        },
    },
    mounted() {
        this.autocarousel = setInterval(() =>{
            this.changeNextBg()
        },1000)
    },
}).mount('#app')