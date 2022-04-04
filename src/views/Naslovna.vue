 <template>
    <div>
     <navigation></navigation>
     <div class=" mx-auto">
    <div class="overflow-hidden shadow-md text-white shadow-md pt-24 md:pt-36">
        <div class="px-6 py-4 bg-gray-600 border-b border-gray-800 font-bold uppercase">
            Do you have questions?
        </div>

        <div class="p-6 bg-gray-600 border-b border-gray-800 text-justify">
            If you have samo questions about application or are unsure about some things, feel free to contact us.
        </div>

        <div class="p-6 bg-gray-600 border-gray-800 text-right">
            <router-link to="/questions" class="items-center inline-flex gap-1.5 bg-blue-500 shadow-md text-sm text-white font-bold py-2 md:px-8 px-1 hover:bg-blue-400 rounded uppercase" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>Questions</router-link>
        </div>
    </div>
</div>

<hr class="my-6"> 

<div class="mx-auto ">
    <div class="overflow-hidden shadow-md text-gray-600">
        <div class="px-6 py-4 bg-gray-600 border-b border-gray-800 font-bold uppercase">
           <div class="text-white">  Do you need team? </div>
        </div>

        <div class="p-6 bg-gray-600 border-b border-gray-800 text-justify">
            <div class="text-white"> If you want to play, but do not have a team yet, we offer you the opportunity to view the list of free players.</div>
        </div>
    </div>
</div>
<div class="h-96 mb-12 ">
     <table class="min-w-full border-collapse block  overflow-y-scroll mb-20">
     <thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell">List of unfilled teams</th>
			 <th class="bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell"></th>
				<th class="bg-gray-600 p-2 text-white font-bold text-left block md:table-cell"></th>
				<th class="bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell"></th>
				<th class="bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell"></th>
        				<th class="bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell"></th>
				<th class="bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell"></th>
                <th class="bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell"></th>
      </tr>
		</thead>
		<thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Team name</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">User email</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Members</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Sport hall</th>
        				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Categorie</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Date and time</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Note</th>
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"></th>
			</tr>
		</thead>
		<tbody class="block md:table-row-group overflow-x-auto" v-for="team of team1" :key="team.id">
			<tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold text-white">Team name</span>{{team.teamName}} </td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">User email</span>{{team.userEmail}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Members</span>{{team.members}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Sport hall</span>{{team.terrain.terrainName}}</td>
        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Categorie</span>{{team.terrain.terrainCategories}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Date and time</span>{{team.terrain.date && team.terrain.time}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Note</span>{{team.note}} </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button @click="addMember(team._id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Choose</button>
				</td>
      </tr>
		</tbody>
	</table>
</div>
    </div>
</template>
<script>
import navigation from '@/components/navigation.vue';
import { Booking } from '@/services';
import store from '@/store.js';

export default {
    data(){
     return {
       teams: [],
       team1: [],
     }

   },
   async created(){
     this.teams = await Booking.getAllBooking();
    this.teams.forEach(team => {
        if(team.members.length <12 ) {
          this.team1.push(team);
        } 
    })
   },

   methods: {
       async addMember(id){
        let team = this.teams.find(x => x._id == id);
        let user = store.name;
        team.members.push(user);
        let update = await Booking.update_team(team);
        console.log(update)
   },
  
},
 components: {
        navigation
    }
}
</script>

