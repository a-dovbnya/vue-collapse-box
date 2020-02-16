import * as components from './components'

const CollapseBox = {
  install (Vue) {
    for (const componentName in components) {
      const component = components[componentName]

      Vue.component(component.name, component)
    }
  }
}

export default CollapseBox