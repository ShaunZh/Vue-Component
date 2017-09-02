import * as Flexbox from './Flexbox'


const components = {
  ...Flexbox
}

const install = function (Vue, Option) {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

export default {
  install
}
