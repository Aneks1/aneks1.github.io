<template>
    <div id="background"></div>
</template>

<style scoped>
    @import url("./BackGround.css");
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BackGround',
    mounted() {
        const bg = document.getElementById('background')
        setInterval(() => {
            const square = document.createElement('div')
            square.classList.add('square')
            square.style.left = `${Math.floor(Math.random() * 100)}vw`
            square.style.animation = `fall 50s forwards, ${['rotate1', 'rotate2'][Math.floor(Math.random()*2)]} 50s none infinite`
            bg?.append(square)

            setTimeout(() => {
                square.remove()
            }, 50000)
        }, 1200)
    }
})
</script>
