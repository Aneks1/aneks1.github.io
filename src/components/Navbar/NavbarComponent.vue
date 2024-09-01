<template>
    <nav>
        <div class="nav-content">
            <div class="logo">
                <a class="pointer" href="/">
                    <img src="../../assets/logo.png" alt="Aneks">
                </a>
            </div>
            <div class="socials">
                <a href="https://github.com/Aneks1" title="Github">
                    <img src="../../assets/github.svg" alt="Github">
                </a>
                <a href="https://www.instagram.com/aaamess_/" title="Instagram">
                    <img src="../../assets/instagram.svg" alt="Instagram">
                </a>
                <a href="https://discord.gg/neErg6CqZv" title="Discord">
                    <img src="../../assets/discord.svg" alt="Discord">
                </a>
                <a href="https://x.com/notanekslol" title="Discord">
                    <img src="../../assets/twitter-x.svg" alt="Discord">
                </a>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'NavbarComponent'
})
</script>

<style scoped>
@import url("./styles.css");
</style>