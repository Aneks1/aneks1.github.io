<template>
    <div id="about" class="about-container">
        <div class="about-card" id="about-card">
            <canvas id="canvas"></canvas>
            <div class="about-content">
                <div class="about-content-inner">
                    <div class="about-text-container">
                        <div class="about-title">
                            About me
                        </div>
                        <p class="about-text">
                            I am Gonzalo, better known in internet as Aneks! I am a 16 year old self-taught peruvian developer, who is skilled both in front-end and back-end development. I started coding in 2020 making Roblox games. In 2021 I moved on to JavaScript when I started making Discord bots. Since then, I have been polishing my abilities in TypeScript and in web development, being Vue my main (and favorite) framework. <br><br>I am also a physics and mathemathics enthusiast. When I am not coding, I spend my time being a passionate baseketball player, surfer and guitarist. I also have my own small Enterprise, where I develop many startups with the hope to get recognition.
                        </p>
                        <button class="like">
                            <span>
                                👍
                            </span>
                            <span>
                                {{ count }}
                            </span>
                        </button>
                    </div>
                </div>
                <div class="about-content-inner">
                    <img id="yo" src="../../assets/yo.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import cssParticles from 'css-particles'
import axios from 'axios';

export default defineComponent({
    name: 'AboutComponent',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        moveImage() {
            const height = document.body.clientHeight / 2
            const group = document.getElementById('yo') as HTMLElement
            document.addEventListener('mousemove', (e: MouseEvent) => {
                const degrees = (height - e.clientY) * 5 / height
                group.style.transform = `rotate(${degrees}deg)`
            })
        },
        async getCount() {
            console.log('akhsd')
            const data = await axios.get('https://api.countapi.xyz/get/aneksportfolio/likes')
            console.log('akjshd0', data)
        }
    },
    mounted() {
        this.moveImage()

        const card = document.getElementById('about-card') as HTMLElement
        const canvas = document.getElementById('canvas') as HTMLCanvasElement

        canvas.height = card.clientHeight
        canvas.width = card.clientWidth

        const system = new cssParticles.ParticleSystem(canvas, { x: canvas.width, y: canvas.height })
        console.log(system)
        system.ammount = 100
        system.speed = { x: { min: -5, max: 5 }, y: { min: -5, max: 5 } }
        system.diameter = { min: 1, max: 4 },
        system.life = { min: 5, max: 15 }
        system.init()

        this.getCount()
    }
})
</script>

<style scoped>
@import url("./styles.css");
</style>