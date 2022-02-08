     <template>
    <div class="hidden">
      <navigation></navigation>
      <div id="box" style="margin-left:27%">

<div class="w3-container w3-teal">
  <h3>Account</h3>
</div>
</div>
<div id="box1" style="margin-left:27%">

<div  class="w3-container w3-teal">
  <label>Name:
  </label>
  {{store.name}}
    </div>
    </div>
    <div id="box1" style="margin-left:27%">

<div class="w3-container w3-teal">
  <label>Surname:
  </label>
  {{store.surname}}
    </div>
    </div>
    <div id="box1" style="margin-left:27%">

<div class="w3-container w3-teal">
  <label >Email:
  </label>
              {{store.email}}
      
    </div>
    </div>
    </div>
</template>

<script>
import navigation from '@/components/navigation.vue';
import {Auth} from '@/services';
import store from '@/store.js';

export default {
  
   data() {
    return {
      auth: Auth.state,
      user: {},
      store
    };
  },
  methods: {
  //  account(){
  //    if(this.auth.authenticated){
  //    this.user = Auth.account();
  //    console.log(this.user)
  //    console.log(this.user.name)
  //    }
  //  },
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
   logout(){
      Auth.logout();
      this.$router.push("/"); 
      console.log('odjava')
      console.log(this.user)
    },
   created() {
        this.account();
        
    },
},
components: {
  navigation
}
}
</script>


  <style scoped>
  #box {
  max-width: 200px; 
  text-align: center;
  color: white;
  width: fixed;
  height: 65px;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 0px;
  background: #1286C7;
  font-size: 16px;
  margin-left: 50px;
  display: block;
  margin-top: 40px;
}
#box1 {
  max-width: 600px; 
  text-align: left;
  width: fixed;
  height: 65px;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 0px;
  font-size: 16px;
  margin-left: 50px;
  display: block;
  margin-top: 70px;
  background-color: white;
  color: #1286C7;
  border: none;
  box-shadow: 0 3px #1286C7;
}
  </style>