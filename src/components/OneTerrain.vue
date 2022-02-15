<template>
  <!-- <div id="cards">
    <a :href="info.route"><img class="card-img-top" :src="info.img"/></a>
    <div class="card-body">
      <p class="card-text">{{ info.terrainName }}</p>
      <p class="card-text">{{ info.terrainCity }}</p>
    </div>
  </div> -->
  <ul  id="cards" role="list" class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 mt-10 mx-3">
    <!-- <li v-for="file in files" :key="file.source" class="relative"> -->
      <li class="relative" :href="info.route">
      <div class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
        <!-- <img :src="file.source" alt="" class="object-cover pointer-events-none group-hover:opacity-75" /> -->
        <img :src="info.img" alt="" class="object-cover pointer-events-none group-hover:opacity-75" />
      </div>
      <!-- <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{{ file.title }}</p> -->
      <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{{info.terrainName}}</p>
      <!-- <p class="block text-sm font-medium text-gray-500 pointer-events-none">{{ file.size }}</p> -->
      <p class="block text-sm font-medium text-gray-500 pointer-events-none">{{info.terrainCity}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["info"],
  name: "OneTerrain"
};
</script>
