<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>
<script>
import { SidebarMenu } from 'vue-sidebar-menu'
export default {
  components: {
    SidebarMenu
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
    background-color: #86d1fc;

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
