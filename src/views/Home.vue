<template>
 <nav class="">
  <div class="antialiased bg-gray-100 dark-mode:bg-gray-900 border-b-2 border-blue-900" >
  <div class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
    <div class="flex  mx-auto md:items-center md:justify-between md:flex-row">
      <div class="mt-1.5">
        <img class="h-16"  :src="require('@/assets/logoHome.png')" alt="Logo">
      </div>
      <div class="flex flex-row justify-between pr-2 pl-4 py-4 bg-blue-400" style="clip-path:polygon(5% 0, 100% 0%, 100% 100%, 0 100%)">
        <a  class=" lg:ml-16 text-gray-900 font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline font-black text-xl">Move&Play</a>
        <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" @click="menu()">
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
            <path v-if="open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            <path v-if="!open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </button>
      <nav :class="{'flex': open, 'hidden': !open}" class="z-10 flex-col flex-grow hidden md:pb-0 md:flex justify-end md:flex-row bg-blue-400" >
       <router-link to="/login"> <a class="text-base font-black bg-white text-blue-600 px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" >Login</a></router-link>
       <router-link to="/signUp"> <a class="text-base font-black bg-white text-blue-600 px-4 py-2 mt-2 text-sm font-semibold  rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Registration</a></router-link>
      </nav>
      <!-- <nav v-if="open" class="md:hidden flex-col">
        <router-link to="/login"> <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" >Login</a></router-link>
       <router-link to="/signUp"> <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Registration</a></router-link>
      </nav> -->
      </div>
    </div>
  <div v-if="!open" class="md:hidden w-auto h-28 grid px-2 pt-3">
  <router-link to="/login"><a class="bg-blue-400 font-black py-2 px-2 rounded-md text-white">Login</a></router-link>
  <router-link to="/signUp"><a class="bg-blue-400 font-black py-2 px-2 rounded-md text-white">Registration</a></router-link>
  </div>
  </div>
</div>
<div class="">
       <div class="bg-white">
  

    <main>
      <div>
        <!-- Hero card -->
        <div class="relative">
          <div class="absolute inset-x-0 bottom-0 bg-gray-100" />
          <div class="mx-auto">
            <div class="relative sm:overflow-hidden">
              <div class="absolute inset-0">
                <img class="h-full w-full object-cover" :src="require('@/assets/pictureHome.jpg')" />
                <div class="absolute inset-0 bg-blue-300 mix-blend-multiply" />
              </div>
              <div class="relative px-4 py-52 sm:px-6 sm:py-56 lg:py-52 lg:px-8 md:py-56">
                <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span class="block text-white">Right place to play</span>
                  <span class="block text-indigo-200">with your team or to find new team</span>
                </h1>
                <p class="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">Book sports halls in the Croatian region of Istria</p>
                <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div class="space-y-4 mx-auto">
                    <a href="#" class="flex items-center text-2xl justify-center py-3 border border-transparent font-black font-medium rounded-md shadow-sm text-blue-700 bg-white sm:px-40 px-8 pointer-events-none"> Play now</a>
                    <!-- <a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"> Live demo </a> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- More main page content here... -->
    </main>
  </div>
  <!-- <div class="justify-end" style="clip-path:polygon(5% 0, 100% 0%, 100% 100%, 0 100%)"> -->
<div class="bg-gray-900 flex justify-content-md-evenly text-white justify-between py-2.5">
        <!-- <div class="sm:container sm:mx-auto sm:flex sm:flex-col sm:flex-wrap sm:items-center justify-between ml-20 sm:ml-0"> -->
            <!-- <ul class="flex mx-auto text-white text-center"> -->
              <li class=" sm:text-2xl font-black inline-flex p-2 cursor-pointer hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" class="sm:mr-1.5 w-6 items-center sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
                Search for it</li>
              <li class=" sm:text-2xl font-black inline-flex p-2 cursor-pointer hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" class="sm:mr-1.5 w-6 items-center sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
Booking</li>
              <li class=" sm:text-2xl font-black inline-flex p-2 cursor-pointer hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" class="sm:mr-1.5 w-6 items-center sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
Teammate finder</li>
            <!-- </ul> -->
        <!-- </div> -->
</div>
  </div>
<!-- </div> -->
 </nav>

</template>
<script>

export default {
  data() {
      return{
       open: Boolean, 
      }
  },
      methods: {
        menu(){
          this.open = !this.open;
        }

      }
}
</script>

