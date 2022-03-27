<template>
<div>
<navigation></navigation>
<ul  class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 pt-24 mx-3">
 <one-terrain v-for="card in cards" :key="card.terrainName && card.terrainCity"  :info="card" />
 </ul>
</div>
</template>

<script>
import OneTerrain from "@/components/OneTerrain.vue";
import navigation from "@/components/navigation.vue";

let cards = [];

cards = [
  {
    img: require("@/assets/žatika.jpg"),
    terrainName: "Sports hall 'Žatika'",
    terrainCity: "Poreč",
    route: "/categories"
  },
   {
    img: require("@/assets/FrankoMileta.jpg"),
    terrainName: "Sports hall 'Franko Mileta'",
    terrainCity: "Labin",
    route: "/categories"
  },
   {
    img: require("@/assets/novigrad.jpg"),
    terrainName: "Sports hall 'Novigrad'",
    terrainCity: "Novigrad",
    route: "/categories"
  },
  {
    img: require("@/assets/umag.jpg"),
    terrainName: "Sports hall 'Umag'",
    terrainCity: "Umag",
    route: "/categories"
  },
   {
    img: require("@/assets/pazin.jpg"),
    terrainName: "Sports hall 'Pazin'",
    terrainCity: "Pazin",
    route: "/categories"
  },
   {
    img: require("@/assets/vrsar.jpg"),
    terrainName: "Sports hall 'Saline'",
    terrainCity: "Vrsar",
    route: "/categories"
  }
  
];

export default {
  name: "Terrain",
  data: function() {
    return {
      cards
    };
  },
  components: {
    OneTerrain,
    navigation
  },
};
</script>
  