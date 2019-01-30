<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: {
    ToolBar,
  },
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  nav + div {
    padding: 8px;
  }
  ul + div { text-align: center }
  ul + div > a { 
      display: inline-block; 
      padding: 8px;
  }

  .page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
