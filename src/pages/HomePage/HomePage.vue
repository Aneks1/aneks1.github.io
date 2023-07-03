<template>
    <div id="homeContainer" class="flex-column align-center justify-center">
        <div id="homeTitle" class="flex-row align-center wrap">
            <TitleChar
                    v-for="(char, i) in 'Hello,&nbsp;I\'m&nbsp;'"
                    :key="i"
                    :char="char"
                >
            </TitleChar>
            <FloatAneks/>
        </div>
        <p id="homeDescription">
            Welcome to my portfolio! I am a young developer who builds web apps for fun and packages to help others. I would love to make something AI-realted some day. Enjoy my portfolio!
        </p>
    </div>
</template>

<script lang="ts">
import TitleChar from '@/components/TitleChars/TitleChar.vue';
import FloatAneks from '@/components/FloatAneks/FloatAneks.vue';
import { defineComponent } from 'vue'

export default defineComponent({
    name: "HomePage",
    components: { TitleChar, FloatAneks }
})
</script>

<style scoped>
    @import url("./HomePage.css");
</style>