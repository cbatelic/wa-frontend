     <template>
    <div class="">
     <navigation></navigation>
     <body class="items-center justify-center">
       <div class="text-white ml-11 pt-5">{{this.$route.query.name}} i {{this.$route.query.sport}}</div>
	<div class="container">
		<table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
			<thead class="text-white">
				<tr class="bg-blue-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th class="p-3 text-left">Date</th>
					<th class="p-3 text-left">Time</th>
					<th class="p-3 text-left" width="110px"><span>Action</span></th>
				</tr>
			</thead>
			<tbody class="flex-1 sm:flex-none">
				<tr v-for="terrain of this.data" :key="terrain.id" class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td class="border-grey-light border hover:bg-gray-100 p-3">{{terrain.date}}</td>
					<td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{{terrain.time}}</td>
			<td @click="choose()" class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">Choose</td>
				</tr>
			</tbody>
		</table>
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
      let naziv = this.$route.query.name;
      let sport = this.$route.query.sport;
      this.data = terrains.filter(x => x.terrainName == naziv && x.terrainCategories == sport)
    },
    methods: {
      async choose(){
        this.$route.query.name;
        let booking = this.$route.booking;
        let sport = this.$route.query.sport;
        console.log(this.$route.query.name)
        this.$router.push({name:'Booking', query:{name:this.$route.query.name, sport:sport, booking:booking}}); 
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
