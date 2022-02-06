<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>
<script>
import { SidebarMenu } from 'vue-sidebar-menu'
import {Auth} from "@/services";

export default {
  data(){
    return{
      auth: Auth.state,   //dovlaci iz jednog objekta u drugi objekt neke kljuceve, varijable...
      user: {},
    };
  },
   methods:{
    account(){
      if(this.auth.authenticated){
        this.user = Auth.account()
      }
   }
  },
  created() {
      this.account();
    },
  
  components: {
    SidebarMenu
  },
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
