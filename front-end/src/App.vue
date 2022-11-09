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
html, body {
  overflow-x: hidden;
}
body{
  position: relative;
  background-color: #000000 !important;
}
</style>
