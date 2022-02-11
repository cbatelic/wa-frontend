<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>
<script>
// import { SidebarMenu } from 'vue-sidebar-menu'
import {Auth} from "@/services";
import store from "@/store.js"

export default {
  data(){
    return{
      auth: Auth.state,   //dovlaci iz jednog objekta u drugi objekt neke kljuceve, varijable...
      user: {},
      store
    };
  },
   methods:{
    //Drži korisnika ulogiranog i nakon refresha -> problem što je nakon odjave korisnik i dalje prijavljen

    account(){
      if(this.auth.authenticated){
      this.user = Auth.account();
      this.store = Auth.account();
      console.log("Authenticated:", this.auth.authenticated)
          store.email=this.store.email;
          store.name=this.store.name;
          store.surname=this.store.surname;
          console.log(store.email,store.name,store.surname);
      }
    },
  },
  created() {
      this.account();

      if(store.email=='chiarab@gmail.com' || store.email=='klaudiab@gmail.com'){
          store.admin=true;
          console.log("Da li je trenutno ulogiran admin: ", store.email, store.admin)
        }
        else{
          store.admin=false;
          console.log("Da li je trenutno ulogiran admin: ", store.admin)
        }
    },
  
  components: {
    // SidebarMenu
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

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
