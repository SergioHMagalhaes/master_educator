<template>
  <div id="app">
    <navBar/>
    <router-view/>
    <footerComponent/>
  </div>
</template>

<script>
import navBar from './components/navBar'
import footerComponent from './components/footerComponent'
export default {
  components: {
    navBar,
    footerComponent
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
html, body {
  overflow-x: hidden;
  position: relative;
  background-color: #13111C !important;
  font-family: 'Inter', sans-serif;
  z-index: 0;
}
</style>
