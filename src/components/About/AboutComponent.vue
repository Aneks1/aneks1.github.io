<template>
    <div id="about" class="about-container">
        <div class="about-card">
            <canvas id="canvas"></canvas>
            <div class="about-content">
                <div class="about-content-inner">
                    <div class="about-text-container">
                        <div class="about-title">
                            About me
                        </div>
                        <p class="about-text">
                            I am Gonzalo, better known in internet as Aneks! I am a 16 year old self-taught peruvian developer, who is skilled both in front-end and back-end development. I started coding in 2020 making Roblox games. In 2021 I moved on to JavaScript when I started making Discord bots. Since then, I have been polishing my abilities in TypeScript and in web development, being Vue my main (and favorite) framework. <br><br>I am also a physics and mathemathics enthusiast. When I am not coding, I spend my time being a passionate baseketball player, surfer and guitarist. In the future I would like to have my own software development company, looking to develop many startups.
                        </p>
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
import { defineComponent, ref } from 'vue'
import cssParticles from 'css-particles'

export default defineComponent({
    name: 'AboutComponent',
    methods: {
        moveImage() {
            const height = document.body.clientHeight / 2
            const group = document.getElementById('yo') as HTMLElement
            document.addEventListener('mousemove', (e: MouseEvent) => {
                const degrees = (height - e.clientY) * 5 / height
                group.style.transform = `rotate(${degrees}deg)`
            })
        }
    },
    mounted() {
        this.moveImage()

        const canvas = document.getElementById('canvas')
        const system = new cssParticles.ParticleSystem(canvas as HTMLCanvasElement, { x: 2000, y: 1000 })
        console.log(system)
        system.ammount = 50
        system.speed = { x: { min: -5, max: 5 }, y: { min: -5, max: 5 } }
        system.diameter = { min: 1, max: 3 },
        system.life = { min: 5, max: 15 }
        system.init()
    }
})
</script>

<style scoped>
@import url("./styles.css");
</style>