<template>
    <div class="FlexboxItem"
         :style="styleObj">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'FlexboxItem',
    props: {
        grow: {
            type: [String, Number],
            default: 0
        },
        shrink: {
            type: [String, Number],
            default: 1
        },
        basis: {
            type: [String, Number],
            default: 'auto'
        },
        order: {
            type: [String, Number],
            default: 0
        }
    },
    computed: {
        styleObj () {
            let styleObj = {};

            // gutter
            let gutter = this.$parent.gutter,
                orient = this.$parent.orient;

            let marginName = orient === 'horizontal'?'marginLeft':'marginTop';
            styleObj[marginName] = gutter + 'px';

            // grow
            styleObj['flex-grow'] = this.grow;

            // shrink
            styleObj['flex-shrink'] = this.shrink;

            // basis
            styleObj['flex-basis'] = this.basis;

            // order
            styleObj['order'] = this.order;

            return styleObj;
        }
    }
}
</script>