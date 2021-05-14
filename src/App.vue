<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/naslovna">Naslovna</router-link>|
      <router-link to="/account">Account</router-link>|
      <router-link to="/accountAdmin">AccountAdmin</router-link>|
      <router-link to="/booking">Booking</router-link>|
      <router-link to="/calendar">Calendar</router-link>|
      <router-link to="/categories">Categories</router-link>|
      <router-link to="/dateAdmin">DateAdmin</router-link>|
      <router-link to="/filledListAdmin">FilledListAdmin</router-link>|
      <router-link to="/homeAdmin">HomeAdmin</router-link>|
      <router-link to="/inboxAdmin">InboxAdmin</router-link>|
      <router-link to="/listPlayers">ListPlayers</router-link>|
      <router-link to="/loginAdmin">LoginAdmin</router-link>|
      <router-link to="/terrainAdmin">TerrainAdmin</router-link>|
      <router-link to="/terrain">Terrain</router-link>|
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
