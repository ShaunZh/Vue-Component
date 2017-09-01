<template>
  <div id="app">
    <div class="marquee-wrap" style="width: 100px;"><marquee-vue content="3aaaaa3333" class="two"  :showtwo="false"></marquee-vue></div>
    <div class="marquee-wrap" style="width: 100px;"><marquee-vue content="222aaaa22" class="two"  :showtwo="false"></marquee-vue></div>
    <div class="marquee-wrap" style="width: 100px;"><marquee-vue content="1" class="two"  :showtwo="false"></marquee-vue></div>
  </div>
</template>

<script>
import Marquee from './Marquee.vue';
// import Css from '../dist/marquee-vue.min.css'

export default {
  name: 'app',
  components:{
      "marquee-vue": Marquee
    },
}
</script>
