<template>
    <div class="projects-container">
        <div class="projects-card">
            <div class="projects-title">
                Featured Projects
            </div>
            <div class="projects-grid">
                <project-card-vue 
                    v-for="(i, j) in projects" 
                    :key="j"
                    :name="i.name"
                    :github="i.github"
                    :website="i.website"
                    :image="i.image"
                />
            </div>
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
