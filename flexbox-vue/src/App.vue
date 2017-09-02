<template>
  <div id="app">
    <FlexboxContainer orient="vertical">
      <FlexboxItem grow="1">
        demo1
      </FlexboxItem>
      <FlexboxItem>
        demo2
      </FlexboxItem>
    </FlexboxContainer>
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
