<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>
<script>
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

      if(store.email=='chiarab@gmail.com'){
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
body{
    background-color: #374151;

}

</style>
