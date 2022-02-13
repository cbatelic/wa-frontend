<template>
  <div id="cards">
    <a :href="info.route"><img class="card-img-top" :src="info.img"/></a>
    <div class="card-body">
      <p class="card-text">{{ info.terrainName }}</p>
      <p class="card-text">{{ info.terrainCity }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  name: "OneTerrain"
};
</script>
