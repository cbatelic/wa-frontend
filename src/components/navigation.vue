 <template>
  <div class="bg-white" >
  <div class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
    <div class="flex mx-auto md:items-center md:justify-between md:flex-row">
      <div class="px-4">
        <img class="h-16"  :src="require('@/assets/logo.png')" alt="Logo">
      </div>
      <div class="flex flex-row items-center justify-end p-4 bg-blue-400" style="clip-path:polygon(5% 0, 100% 0%, 100% 100%, 0 100%)">
        <div class="relative text-gray-600 focus-within:text-gray-400 lg:ml-12 mr-9">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" class="md:w-96 lg:w-96 py-2 text-sm text-black bg-white rounded-md pl-10 focus:outline-none focus:bg-gray-800 focus:text-black" placeholder="Search..." autocomplete="off">
    </div>
        <button class="rounded-lg justify-end lg:hidden focus:outline-none focus:shadow-outline" @click="menu()">
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
            <path v-if="open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            <path v-if="!open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </button>
      <nav class="flex-col flex-grow hidden md:pb-0 lg:flex justify-end md:flex-row bg-blue-400 " >
       <router-link to="/naslovna" class="border-2 border-white mr-2 rounded-md py-2"> <a class=" pr-3 py-3 mt-2 text-white text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" >Home</a></router-link>
       <router-link to="/terrain" class="border-2 border-white mr-2 rounded-md py-2" > <a class="pr-3 py-3 mt-2 text-white text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Terrain</a></router-link>
       <router-link to="/account" class="border-2 border-white mr-2 rounded-md py-2"> <a class="pr-3 py-3 mt-2 text-white text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Account</a></router-link>
      <a class=" mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">|</a>
     <button type="button" @click="logout()" class="bg-white ml-5 rounded-md"> <a  class=" px-2 mt-1 text-blue-600 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Logout</a></button>
      </nav>
      </div>
    </div>
  </div>
  <div v-if="!open" class="md:hidden w-auto h-auto grid px-2 pt-3 space-y-10">
       <router-link to="/naslovna" class="border-2 border-blue-400 rounded-md py-2 text-center font-black"> <a class="  py-3  text-blue-400 text-base font-black bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" >Home</a></router-link>
       <router-link to="/terrain" class="border-2 border-blue-400 rounded-md py-2 text-center font-black" > <a class=" py-3 text-blue-400 text-base font-black bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Terrain</a></router-link>
       <router-link to="/account" class="border-2 border-blue-400 rounded-md py-2 text-center font-black"> <a class=" py-3  text-blue-400 text-base font-black bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Account</a></router-link>
     <button type="button" @click="logout()" class="bg-blue-400  rounded-md mb-2 text-center py-2 font-black"> <a  class=" px-2 mt-1 text-white text-base font-black  rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Logout</a></button>
  </div>
</div>
</template> 

<script>
import {Auth} from '@/services';

export default {
  
   data() {
    return {
      open:Boolean
    };
  },
  methods: {
    menu(){
          this.open = !this.open;
        },

   logout(){
      Auth.logout();
      this.$router.push("/"); 
      console.log('odjava')
    },
},
}
</script>
      