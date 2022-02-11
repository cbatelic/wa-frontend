 <template>
 <div>
      <navigation></navigation>
     <main class="flex-1">
      <div class="py-24">
        <div class="w-2/3 mx-96 px-4 sm:px-6 md:px-8">
          <div class="py-4">
            <div class=" rounded-lg h-96">
              <div>
   <div class="bg-white gap-2 p-4 rounded-xl">
        <div class="md:col-span-1 h-48 shadow-xl ">
                <div class="flex w-full h-full relative">
                    <img src="https://res.cloudinary.com/dboafhu31/image/upload/v1625318266/imagen_2021-07-03_091743_vtbkf8.png" class="w-44 h-44 m-auto" alt="">

                </div>
        </div>
        <div class="md:col-span-3 h-48 p-4 space-y-2 p-3">
                <div class="flex ">
                    <span
                        class="text-sm border bg-blue-50 font-bold  border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">Name:</span>
                    <label
                        class="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none  -ml-1 w-4/6"
                        type="text" >{{store.name}}
                    </label>
                </div>
                <div class="flex ">
                    <span
                        class="text-sm border bg-blue-50 font-bold border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">Surname:</span>
                    <label
                        class="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none -ml-1 w-4/6"
                        type="text" >{{store.surname}}
                    </label>
                </div>
                 <div class="flex ">
                    <span
                        class="text-sm border bg-blue-50 font-bold border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">Email:</span>
                    <label 
                        class="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none -ml-1 w-4/6"
                        type="text">{{store.email}}
                    </label>
                </div>
        </div>
            
    </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </main>
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