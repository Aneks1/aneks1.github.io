<template>
    <span class="char no-select">{{  char  }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TitleChar',
    props: {
        char: String
    }
})
</script>

<style scoped>
    @import url("./TitleChar.css");
</style>