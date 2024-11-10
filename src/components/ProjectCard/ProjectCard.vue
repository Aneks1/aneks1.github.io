<template>
    <div class="card" @mousemove="(e) => handleCardBackground(e)">
        <div class="title">
            {{ name }}
        </div>
        <img :src="image">
        <div class="links">
            <a v-if="github" :href="github" target="_blank">
                <img src="../../assets/github-mini.svg" alt="">
            </a>
            <a v-if="npm" :href="npm" target="_blank">
                <img src="../../assets/npm.svg" alt="">
            </a>
            <a v-if="website" :href="website" target="_blank">
                <img src="../../assets/globe.svg" alt="Website">
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ProjectCard',
    props: {
        name: String,
        github: {
            type: String,
            required: false
        },
        website: {
            type: String,
            required: false
        },
        npm: {
            type: String,
            required: false
        },
        image: String
    },
    methods: {
        handleCardBackground(e: MouseEvent) {
            console.log('caca')
            const target = e.target as HTMLElement
            const rect = target.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            target.style.setProperty("--y", `${y}px`)
            target.style.setProperty("--x", `${x}px`)
        }
    }
})
</script>

<style scoped>
@import url("./styles.css");
</style>