<template>
 <nav class="min-h-screen">
  <div class="antialiased bg-gray-100 dark-mode:bg-gray-900" >
  <div class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
    <div class="flex flex-col mx-auto md:items-center md:justify-between md:flex-row">
      <div class="">
        <img class="h-16"  :src="require('@/assets/logoHome.png')" alt="Logo">
      </div>
      <div class="flex flex-row items-center justify-between p-4 bg-blue-400" style="clip-path:polygon(5% 0, 100% 0%, 100% 100%, 0 100%)">
        <a  class=" ml-16 text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Move&Play</a>
        <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
            <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          </svg>
        </button>
      <nav class="flex-col flex-grow hidden md:pb-0 md:flex justify-end md:flex-row bg-blue-400" >
       <router-link to="/login"> <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" >Login</a></router-link>
       <router-link to="/signUp"> <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Registration</a></router-link>
      </nav>
      </div>
    </div>
  </div>
</div>
<div class="">
        <img class="object-cover h-[32rem] w-full"  :src="require('@/assets/pictureHome.jpg')" alt="Logo">
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
 </nav>

</template>
