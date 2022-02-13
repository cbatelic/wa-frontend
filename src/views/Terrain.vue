<template>
<div>
<navigation></navigation>
<ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 mt-10 mx-3">
    <!-- <li v-for="file in files" :key="file.source" class="relative"> -->
      <router-link to="/categories">
      <li class="relative">
      <div class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
        <!-- <img :src="file.source" alt="" class="object-cover pointer-events-none group-hover:opacity-75" /> -->
        <img :src="require('@/assets/pictureHome.jpg')" alt="" class="object-cover pointer-events-none group-hover:opacity-75" />
        <button type="button" class="absolute inset-0 focus:outline-none">
          <!-- <span class="sr-only">View details for {{ file.title }}</span> -->
          <span class="sr-only">View details for</span>
        </button>
      </div>
      <!-- <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{{ file.title }}</p> -->
      <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"></p>
      <!-- <p class="block text-sm font-medium text-gray-500 pointer-events-none">{{ file.size }}</p> -->
      <p class="block text-sm font-medium text-gray-500 pointer-events-none"></p>
    </li>
      </router-link>
    <li class="relative">
      <div class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
        <!-- <img :src="file.source" alt="" class="object-cover pointer-events-none group-hover:opacity-75" /> -->
        <img :src="require('@/assets/pictureHome.jpg')" alt="" class="object-cover pointer-events-none group-hover:opacity-75" />
        <button type="button" class="absolute inset-0 focus:outline-none">
          <!-- <span class="sr-only">View details for {{ file.title }}</span> -->
          <span class="sr-only">View details for</span>
        </button>
      </div>
      <!-- <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{{ file.title }}</p> -->
      <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"></p>
      <!-- <p class="block text-sm font-medium text-gray-500 pointer-events-none">{{ file.size }}</p> -->
      <p class="block text-sm font-medium text-gray-500 pointer-events-none"></p>
    </li>
    <li class="relative">
      <div class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
        <!-- <img :src="file.source" alt="" class="object-cover pointer-events-none group-hover:opacity-75" /> -->
        <img :src="require('@/assets/pictureHome.jpg')" alt="" class="object-cover pointer-events-none group-hover:opacity-75" />
        <button type="button" class="absolute inset-0 focus:outline-none">
          <!-- <span class="sr-only">View details for {{ file.title }}</span> -->
          <span class="sr-only">View details for</span>
        </button>
      </div>
      <!-- <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{{ file.title }}</p> -->
      <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"></p>
      <!-- <p class="block text-sm font-medium text-gray-500 pointer-events-none">{{ file.size }}</p> -->
      <p class="block text-sm font-medium text-gray-500 pointer-events-none"></p>
    </li>
  </ul>
  <!-- <div class="container" style="max-width: 500px;">
    <div id="cards">
      <dogadaji-card v-for="card in cards" :key="card.terrainName" :info="card" />
      <dogadaji-card v-for="card in cards" :key="card.terrainCity" :info="card" />
    </div>
    <footer id="footer"></footer>
  </div> -->
</div>
</template>

<script>
import OneTerrain from "@/components/OneTerrain.vue";
import navigation from "@/components/navigation.vue";
import Navigation from '../components/navigation.vue';
export default {
  name: "Terrain",
  data: function() {
    return {
      cards: []
    };
  },
  components: {
    OneTerrain,
    navigation
  },
  mounted() {
    // getAllTerrain();
  },
  methods: {
        // async GetAllTerrain() {
        //     this.terrains = await Posts.GetAll();
        //     console.log(this.terrains)
        // },
  },
};
</script>
  