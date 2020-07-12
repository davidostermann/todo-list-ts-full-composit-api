<template>
  <div id="app">
    <h2>Tags inlined</h2>
    <tags3x-inline />
    <hr />
    <h2>Tags stacked</h2>
    <tags3x />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import tags3x from "./components/tags3x.vue";
import tags3xInline from "./components/tags3xInline.vue";

export default {
  name: "App",
  components: {
    tags3x,
    tags3xInline
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
