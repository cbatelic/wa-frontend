<template>
<div>
<navigation></navigation>
 <one-terrain v-for="card in cards" :key="card.terrainName" :info="card" />
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

let cards = [];

cards = [
  {
    img: require("@/assets/pictureHome.jpg"),
    terrainName: "dcbjkds",
    route: "/categories"
  },
   {
    img: require("@/assets/pictureHome.jpg"),
    terrainName: "dcbjkds",
    route: "/categories"
  },
   {
    img: require("@/assets/pictureHome.jpg"),
    terrainName: "dcbjkds",
    route: "/categories"
  },
  
];

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
  