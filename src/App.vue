<template>
  <div id="app">
    <div class="collapse-block">
      <div class="collapse-block__head" @click="isActive = !isActive">
        Header
      </div>
      <collapse-box :open="isActive" :duration="0.75">
        <div class="collapse-block__body">
          Some Content
        </div>
      </collapse-box>
    </div>
  </div>
</template>

<script>
import CollapseBox from './components/CollapseBox'

export default {
  name: 'app',
  components: {
    CollapseBox
  },
  data () {
    return {
      isActive: false
    }
  }
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
.collapse-block {
  border: 1px solid black;
}
.collapse-block__head {
  padding: 20px;
  border: 1px solid blue;
}
.collapse-block__body {
  padding: 20px;
  border: 1px solid red;
}
</style>
