<template>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="transitionEnter"
    v-on:after-enter="transitionAfterEnter"
    v-on:before-leave="beforeLeave"
    v-on:leave="transitionLeave"
  >
    <div v-show="open" :style="collapseStyles">
      <div>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'CollapseBox',
  props: {
    open: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number
    },
    timingFunction: {
      type: String,
    }
  },
  methods: {
    beforeEnter (el) {
      el.style.maxHeight = 0
      el.style.opacity = 0
      el.style.overflow = 'hidden'
    },
    transitionEnter (el, done) {
      const duration = parseFloat(getComputedStyle(el).transitionDuration) * 1000 || 250

      el.style.maxHeight = el.firstChild.clientHeight + 'px'
      el.style.opacity = 1

      setTimeout(() => { done() }, duration)
    },
    transitionAfterEnter (el) {
      el.style.maxHeight = ''
      el.style.overflow = 'visible'
    },
    beforeLeave (el) {
      el.style.maxHeight = el.firstChild.clientHeight + 'px'
      el.style.opacity = 1
      el.style.overflow = 'hidden'
    },
    transitionLeave (el, done) {
      /**
       * Если не обратиться к css-свойству, то блок схлопнется мгновенно
       */
      const duration = parseFloat(getComputedStyle(el).transitionDuration) * 1000 || 250

      el.style.maxHeight = 0
      el.style.opacity = 0

      setTimeout(() => { done() }, duration)
    }
  },
  computed: {
    collapseStyles () {
      const duration = this.duration || '0.20'
      const timingFunction = this.timingFunction || 'linear'

      return (
        `
          will-change: contents;
          transition-duration: ${duration}s;
          transition-timing-function: ${timingFunction};
        `
      )
    }
  }
}
</script>