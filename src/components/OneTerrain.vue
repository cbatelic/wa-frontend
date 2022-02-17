<template>
  <!-- <div id="cards">
    <a :href="info.route"><img class="card-img-top" :src="info.img"/></a>
    <div class="card-body">
      <p class="card-text">{{ info.terrainName }}</p>
      <p class="card-text">{{ info.terrainCity }}</p>
    </div>
  </div> -->
      <li class="relative" :href="info.route" @click="changeRoute()">
      <div class="group block w-full aspect-w-10 aspect-h-7 rounded-t-xl bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
        <img :src="info.img" alt="" class="object-cover pointer-events-none group-hover:opacity-75" />
      </div>
      <p class="pt-2 px-2 block text-sm font-medium text-white bg-blue-500 truncate pointer-events-none">Sports hall name: {{info.terrainName}}</p>
      <p class="pt-2 px-2 pb-2 rounded-b-xl block text-sm font-medium text-white bg-blue-500 pointer-events-none">Sports hall city: {{info.terrainCity}}</p>
    </li>
</template>

<script>
export default {
  props: ["info"],
  name: "OneTerrain",

  methods: {
    changeRoute(){
      this.$router.push({name:'Categories', query:{name:this.info.terrainName}}); 
    }
  }
};
</script>
