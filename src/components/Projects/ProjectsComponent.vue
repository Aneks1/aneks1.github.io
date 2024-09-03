<template>
    <div id="projects" class="projects-container">
        <div class="projects-title">
            Projects
        </div>
        <div class="projects-grid">
            <project-card-vue 
                v-for="(i, j) in projects" 
                :key="j"
                :name="i.name"
                :github="i.github"
                :website="i.website"
                :image="i.image"
                :npm="i.npm"
            />
        </div>
    </div>
</template>

<style scoped>
@import url("./styles.css");
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import ProjectCardVue from '../ProjectCard/ProjectCard.vue'
import projects from './projects'

export default defineComponent({
    name: 'ProjectsComponent',
    components: { ProjectCardVue },
    data() { return { projects } }
})
</script>
