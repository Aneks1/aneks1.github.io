<template>
    <div class="card">
        <div class="title">
            {{ name }}
        </div>
        <img :src="image">
        <div class="links">
            <a :href="github">
                <img src="../../assets/github-mini.svg" alt="">
            </a>
            <a v-if="website" :href="website">
                <img src="../../assets/globe.svg" alt="">
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
        github: String,
        website: {
            type: String,
            required: false
        },
        image: String
    }
})
</script>

<style scoped>
@import url("./styles.css");
</style>