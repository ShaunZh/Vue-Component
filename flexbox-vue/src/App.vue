<template>
  <div id="app">
    <flexbox-plugin orient="vertical">
      <flexbox-item-plugin grow="1">
        demo1
      </flexbox-item-plugin>
      <flexbox-item-plugin>
        demo2
      </flexbox-item-plugin>
    </flexbox-plugin>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
