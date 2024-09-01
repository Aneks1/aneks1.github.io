<template>
    <div class="head-container">
        <div class="header">
            <div class="title">
                Yo! 
                <span class="title-small">I'm</span>
                Gonzalo Ames
                <br>
                <span class="title-small">
                    a.k.a.
                </span>
                <span class="aneks">
                    Aneks
                </span>
                <br>
            </div>
            <span class="subtitle">
                Self-proclaimed developer
            </span>
        </div>
        <a class="arrow" href="#about">
            <img src="../../assets/caret-down.svg">
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HeadComponent'
})
</script>

<style scoped>
@import url("./styles.css");
</style>