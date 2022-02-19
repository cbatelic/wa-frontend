     <template>
<div>
  <navigation-admin></navigation-admin>
  <div class="p-3 lg:mx-20">
                    <div class=" flex justify-center items-center my-14 lg:my-10">
                            <svg class="h-44 text-white bg-blue-400 rounded-3xl lg:h-3/6 lg:w-72" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                    </div>
                    <div class="">
                        <div class="grid text-lg space-y-12">
                            <div class="grid grid-cols-2 bg-white rounded-md ">
                                <div class="px-4 py-2 font-semibold text-blue-500">Name:</div>
                                <div class="px-4 py-2 text-black">{{store.name}}</div>
                            </div>
                            <div class="grid grid-cols-2 bg-white rounded-md ">
                                <div class="px-4 py-2 font-semibold text-blue-500">Surname:</div>
                                <div class="px-4 py-2 text-black">{{store.surname}}</div>
                            </div>
                            <div class="grid grid-cols-2 bg-white rounded-md ">
                                <div class="px-4 py-2 font-semibold text-blue-500">Email:</div>
                                <div class="px-4 py-2">
                                    <a class="text-black underline" >{{store.email}}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</div>
</template>

<script>
import navigationAdmin from '@/components/navigationAdmin.vue';
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
  navigationAdmin
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