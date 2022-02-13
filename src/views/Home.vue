<template>
 <nav class="min-h-screen">
  <div class="antialiased bg-gray-100 dark-mode:bg-gray-900" >
  <div class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
    <div class="flex  mx-auto md:items-center md:justify-between md:flex-row">
      <div class="">
        <img class="h-16"  :src="require('@/assets/logoHome.png')" alt="Logo">
      </div>
      <div class="flex flex-row items-center justify-between p-4 bg-blue-400" style="clip-path:polygon(5% 0, 100% 0%, 100% 100%, 0 100%)">
        <a  class=" lg:ml-16 text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Move&Play</a>
        <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" @click="menu()">
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
            <path v-if="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            <path v-if="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </button>
      <nav :class="{'flex': open, 'hidden': !open}" class="z-10 flex-col flex-grow hidden md:pb-0 md:flex justify-end md:flex-row bg-blue-400" >
       <router-link to="/login"> <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" >Login</a></router-link>
       <router-link to="/signUp"> <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Registration</a></router-link>
      </nav>
      <nav v-if="open" class="md:hidden flex-col">
        <router-link to="/login"> <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" >Login</a></router-link>
       <router-link to="/signUp"> <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Registration</a></router-link>
      </nav>
      </div>
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
              <div class="relative px-4 py-28 sm:px-6 sm:py-36 lg:py-32 lg:px-8">
                <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span class="block text-white">Take control of your</span>
                  <span class="block text-indigo-200">customer support</span>
                </h1>
                <p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"> Get started </a>
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
<div class="bg-gray-900">
    <footer class="flex flex-wrap items-center justify-between p-3 m-auto">
        <div class="container mx-auto flex flex-col flex-wrap items-center justify-between">
            <ul class="flex mx-auto text-white text-center">
              <li class="p-2 cursor-pointer hover:underline">Search for it</li>
              <li class="p-2 cursor-pointer hover:underline">Booking</li>
              <li class="p-2 cursor-pointer hover:underline">Play teamate finder</li>
            </ul>
        </div>
    </footer>
</div>
<div class="bg-gray-900">
    <footer class="flex flex-wrap items-center justify-between p-3 m-auto">
        <div class="container mx-auto flex flex-col flex-wrap items-center justify-between">
            <ul class="flex mx-auto text-white text-center">
              <li class="p-2 cursor-pointer hover:underline">Search for it</li>
              <li class="p-2 cursor-pointer hover:underline">Booking</li>
              <li class="p-2 cursor-pointer hover:underline">Play teamate finder</li>
            </ul>
        </div>
    </footer>
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

