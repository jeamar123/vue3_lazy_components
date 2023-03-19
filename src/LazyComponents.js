import * as components from './components'

export default {
  install (Vue) {
    for (const component in components) {
      Vue.component(`V${component}`, components[component])
    }
  }
}

export * from './components'