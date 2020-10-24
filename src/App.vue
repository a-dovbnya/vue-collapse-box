<template>
  <div id="app">
    <div class="collapse-block">
      <div class="collapse-block__head" @click="isActive = !isActive">
        ToggleCollapse
      </div>
      <collapse-box :open="isActive" :duration="0.25" timingFunction="linear" class="collapse-block__body">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae rem, non excepturi officiis repellat consequuntur vel, obcaecati molestias veniam incidunt voluptas aperiam ea, quas dolore delectus temporibus molestiae? Voluptatibus, placeat!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae rem, non excepturi officiis repellat consequuntur vel, obcaecati molestias veniam incidunt voluptas aperiam ea, quas dolore delectus temporibus molestiae? Voluptatibus, placeat!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae rem, non excepturi officiis repellat consequuntur vel, obcaecati molestias veniam incidunt voluptas aperiam ea, quas dolore delectus temporibus molestiae? Voluptatibus, placeat!</p>
      </collapse-box>
    </div>
  </div>
</template>

<script>
import { CollapseBox } from './components/'

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

.collapse-block__head {
  width: 200px;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  border: 1px solid #1616b7;
  background: #4040ca;
  color: white;
  transition: .2s ease;
}
.collapse-block__head:hover {
  background: #5050f7;
}
.collapse-block__body {
  padding: 20px;
  width: 500px;
  border: 1px solid grey;
  border-radius: 4px;
  margin-top: 15px;
  text-align: left;
}

</style>
