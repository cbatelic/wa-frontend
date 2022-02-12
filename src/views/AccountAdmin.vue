     <template>
<div>
  <navigation-admin></navigation-admin>
  <div class=" flex items-center h-auto  flex-wrap mx-auto my-32 ">
    
	<!--Main Col-->
	<div id="profile" class="w-full lg:mx-5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
	

		<div class="p-4 md:p-12 text-center lg:text-left">
			<!-- Image for mobile view-->
			<div class="block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style="background-image: url('')"></div>
			
			<div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-blue-500 opacity-25"></div>
			<p class="pt-4 text-base font-bold flex items-center justify-center lg:mx-32"><label>Name</label> <label class="ml-16">{{store.name}}</label></p>
			<p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><label>Surname</label> {{store.surname}}</p>
			<p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><label>Email</label> {{store.email}}</p>


			<div class="pt-12 pb-8">
			</div>

		</div>

	</div>
  </div>
</div>
    <!-- <div class="hidden">
      <vs-sidebar
        text="#1286C7"
        absolute
        open
        >
        <template #logo>
           <v-img :src="require('@/assets/logo.png')"> </v-img>
        </template>
        <vs-sidebar-item id="home" to='/homeAdmin'>
          <template #icon>
            <i class='fa fa-home fa-fw'></i>
          </template>
          Home
        </vs-sidebar-item>
        <vs-sidebar-item id="terrain" to='/terrainAdmin'>
          <template #icon>
            <i class='fa fa-area-chart'></i>
          </template>
          Sports halls/terrain
        </vs-sidebar-item>
        <vs-sidebar-item id="account" to='/accountAdmin'>
          <template #icon>
            <i class='fa fa-user fa'></i>
          </template>
          Account
        </vs-sidebar-item>
        <template #footer>
          <vs-button to='/'>
            <i class='fa fa-sign-out'></i>
          Logout
        </vs-button>
        </template>
      </vs-sidebar>
      <div id="box" style="margin-left:27%">

<div class="w3-container w3-teal">
  <h3>Account</h3>
</div>
</div>
<div id="box1" style="margin-left:27%">

<div class="w3-container w3-teal">
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
  <label>Email:
  </label>
  {{store.email}}
    </div>
    </div>
    </div> -->
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