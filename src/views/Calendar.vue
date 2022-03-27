<template>
    <div class="">
     <navigation></navigation>
       <div class=" flex lg:mt-20 lg:py-2 bg-blue-900  opacity-50 fixed w-full mt-14 ">
       <div class="text-white  md:mx-12 text-xl pl-2 md:text-3xl lg:pt-8  pt-12 pb-8 font-bold">
       Choose date and time for '{{this.$route.query.name}}' and category '{{this.$route.query.sport}}' :
       </div>
       </div>
     <body class="items-center justify-center pt-40 ">
	<div class="px-2 lg:mx-10 ">
		<table class="w-full flex-row  sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
      <thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"> Date:</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Time: </th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"></th>
			</tr>
		</thead>
      <tbody class="block md:table-row-group w-full" v-for="terrain of this.data" :key="terrain.id">
			<tr  v-if="terrain>'1'" class="border-2 bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold ">Date: </span>{{terrain.date}} </td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Time: </span>{{terrain.time}}</td>
				<td @click="choose(terrain._id)" class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span class="inline-block w-1/3 md:hidden font-bold"></span>
					<button class="bg-blue-400  text-white font-bold py-1 px-2 border border-red-500 rounded">Choose</button>
				</td>
			</tr>
		</tbody>
		</table>
    <div v-if="data==0" class="text-white text-3xl flex justify-center">No available data in this categorie!</div>
	</div>
</body>
    
    </div>
</template>
<script>
import navigation from '@/components/navigation.vue'
import { Posts } from '@/services';
 export default {
   data(){
     return {
       data: null
     }

   },
  
    components: {
      navigation
    },
    async created(){
      let terrains = await Posts.getAll();
      console.log(terrains)
      let naziv = this.$route.query.name;
      let sport = this.$route.query.sport;
      this.data = terrains.filter(x => x.terrainName == naziv && x.terrainCategories == sport)
    },
    methods: {
      async choose(tId){
        this.$router.push({name:'Booking', params:{id: tId}}); 
      }
    }
  }

</script>
<style>
  html,
  body {
    height: 100%;
  }

  @media (min-width: 640px) {
    table {
      display: inline-table !important;
    }

    thead tr:not(:first-child) {
      display: none;
    }
  }

  td:not(:last-child) {
    border-bottom: 0;
  }

  th:not(:last-child) {
    border-bottom: 2px solid rgba(0, 0, 0, .1);
  }
</style>
