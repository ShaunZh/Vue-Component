<template>
  <!-- 为组件绑定一个类，这个类的值通过计算属性来得出 -->
  <div class="flexbox-plugin"
      :class="classObj">
    <!-- slot 用来装载子组件，flexbox-item-plugin -->
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'flexbox-plugin',
    props: {
      // 子组件 flexbox-item-plugin 之间是否存在间隙
      // 默认：8px 的间隙
      gutter: {
        type: Number,
        default: 8
      },
      // 子组件的排列方式，水平 或 垂直
      orient: {
        type: String,
        default: 'horizontal'
      },
      justify: {
        type: String
      },
      align: {
          type: String
      },
      wrap: {
          type: String,
          default: 'nowrap'
      }
    },
    computed: {
      // 通过父级传递过来的参数，
      // 来判断该组件需要应用哪些样式
      // 如：<my-flexbox orient="vertical" justify="flex-start"></my-flexbox>
      classObj() {

        let classObj = {};
        // orient
        if (this.orient === 'vertical') classObj['flex-vertical'] = true;

        // wrap
        if (this.wrap === 'wrap') {
            classObj['flex-wrap'] = true
        } else {
            classObj['flex-nowrap'] = true
        }

        // justify
        switch (this.justify) {
            case 'flex-start':
                classObj['justify-start'] = true;
                break;
            case 'flex-end':
                classObj['justify-end'] = true;
                break;
            case 'center':
                classObj['justify-center'] = true;
                break;
            case 'space-between':
                classObj['justify-space-between'] = true;
                break;
            case 'space-around':
                classObj['justify-space-around'] = true;
                break
        };

        // align
        switch (this.align) {
            case 'flex-start':
                classObj['align-start'] = true;
                break;
            case 'flex-end':
                classObj['align-end'] = true;
                break;
            case 'center':
                classObj['align-center'] = true;
                break;
            case 'baseline':
                classObj['align-baseline'] = true;
                break;
            case 'stretch':
                classObj['align-stretch'] = true;
                break;
        };

        return classObj;
      }
    }
  }
</script>
