import * as flexbox from './flexbox'

const components = {
  ...flexbox
}

const install = function (Vue, Option) {
  Object.keys(components).forEach((key) => {
    Vue.component(component[key].name, components[key])
  })
}

export default {
  install
}
