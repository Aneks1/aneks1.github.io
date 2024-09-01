<template>
    <div id="cursor"></div>
    <navbar-component-vue/>
    <head-component-vue/>
    <about-component-vue/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AboutComponentVue from './components/About/AboutComponent.vue'
import HeadComponentVue from './components/Head/HeadComponent.vue'
import NavbarComponentVue from './components/Navbar/NavbarComponent.vue'

export default defineComponent({
    components: { NavbarComponentVue, HeadComponentVue, AboutComponentVue },
    mounted() {
        document.addEventListener('mousemove', (ev: MouseEvent) => {
            const cursor = document.getElementById('cursor')
            cursor!.style.top = `${ev.clientY}px`
            cursor!.style.left = `${ev.clientX}px`
        })
    }
})
</script>


<style>
@import url("./assets/styles.css");
</style>
