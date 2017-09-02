# marquee-vue

> A Vue Component to marquee

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Usage
Install it via npm:
- npm install --save marquee-vue

## Example 
**Note**: the location of marquee-vue： "node_modules/marquee-vue/dist/marquee-vue.min.css "

```
<template>
  <div id="app">
    <div class="marquee-wrap" style="width: 80px;"><vue-marquee content="aaaaaaaaaaa" class="two"  :showtwo="false"></vue-marquee></div>
    <div class="marquee-wrap" style="width: 80px;"><vue-marquee content="bbbbbbbbbbb" class="two"  :showtwo="false"></vue-marquee></div>
    <div class="marquee-wrap" style="width: 100px;"><vue-marquee content="c" class="two"  :showtwo="false"></vue-marquee></div>
    <router-view></router-view>
  </div>
</template>

<script>

import MarqueeVue from 'marquee-vue';
import '../node_modules/marquee-vue/dist/marquee-vue.min.css'
export default {
  name: 'app',
  components:{
      "vue-marquee": MarqueeVue
    },
}
</script>
```

##Props
- **content**
 the text display in marquee
 - type: String
 - default: ""
 
- **speed**
 the speed of scroll
 - default: 'middle'
 - type: String

- **showtwo**
 - default: true
 - type: bool


