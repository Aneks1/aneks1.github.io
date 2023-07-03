<template>
  <BackGround/>
  <NavBar/>
  <router-view/>
</template>

<style>
  /* Designed by Vernon Adams, Cyreal, Jacques Le Bailly */
  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
  /* Designed by Paul D. Hunt */
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
  /* Designed by Andy Clymer */
  @import url('https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap');

  :root {
    --dark-blurple: #232432;
    --dark-blueish: #161e36;
    --dark-purple: #2e243c;
    --cyan: #00ffe1;
    --violet: #9780ff;
    --grey: rgb(124, 124, 124);
  }

  body {
    background: linear-gradient(to right bottom, var(--dark-purple), var(--dark-blurple), var(--dark-blueish));
    font-family: 'Nunito', sans-serif;
    color: var(--cyan);
    margin: 0px;
  }

  a {
    text-decoration: none;
    color: var(--cyan);
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .width-fit {
    width: fit-content;
  }

  .align-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .width-100 {
    width: 100%;
  }

  .height-100 {
    height: 100%;
  }

  .text-center {
    text-align: center;
  }

  .border-box {
    box-sizing: border-box;
  }

  .wrap {
    flex-wrap: wrap;
  }

  .no-select {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

</style>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar/NavBar.vue'
import BackGround from './components/BackGround/BackGround.vue';

export default defineComponent({
  name: "App",
  components: { NavBar, BackGround }
})
</script>
