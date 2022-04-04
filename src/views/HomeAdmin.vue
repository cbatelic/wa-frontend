     <template>
<div>
  <navigationAdmin></navigationAdmin>
  <!-- <div class="flex justify-start sm:justify-end px-2 pt-24 pb-4"><router-link to="/usersQuestionsAdmin" class="bg-blue-400 text-gray-700 font-semibold text-sm px-1 py-2 rounded-md"> User questions</router-link></div> -->

<div class="flex justify-start sm:justify-end px-2 pt-24 pb-4">
            <router-link to="/usersQuestionsAdmin" class="items-center inline-flex gap-1.5 bg-blue-400 shadow-md text-sm text-gray-700 hover:text-gray-900 font-bold py-2 md:px-8 px-1 hover:bg-blue-400 rounded uppercase" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>User questions</router-link>
        </div>
        <div class="w-full">
   <table class="w-full
    border-collapse block  overflow-y-scroll mb-20">
     <thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="w-48 bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell">List of unfilled teams</th>
			 <th class="bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell"></th>
				<th class="bg-gray-600 p-2 text-white font-bold text-left block md:table-cell w-1/2"></th>
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
			</tr>
		</thead>
		<tbody class="block md:table-row-group " v-for="team of team2" :key="team.id">
			<tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold text-white">Team name</span>{{team.teamName}} </td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">User email</span>{{team.userEmail}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Members</span>{{team.members}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Sport hall</span><span class="grid">{{team.terrain.terrainName}}</span></td>
        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Categorie</span>{{team.terrain.terrainCategories}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Date and time</span>{{team.terrain.date && team.terrain.time}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Note</span>{{team.note}} </td>
      </tr>
		</tbody>
	</table>
  </div>
  <div class="w-full">
   <table class="w-full border-collapse block  overflow-y-scroll mb-20">
     <thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="w-48 bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell">List of filled teams</th>
			 <th class="bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell"></th>
				<th class="bg-gray-600 p-2 text-white font-bold text-left block md:table-cell w-1/2"></th>
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
			</tr>
		</thead>
		<tbody class="block md:table-row-group " v-for="team of team1" :key="team.id">
			<tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold text-white">Team name</span>{{team.teamName}} </td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">User email</span>{{team.userEmail}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Members</span><span class="grid">{{team.members}}</span></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Sport hall</span>{{team.terrain.terrainName}}</td>
        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Categorie</span>{{team.terrain.terrainCategories}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Date and time</span>{{team.terrain.date && team.terrain.time}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Note</span>{{team.note}} </td>
      </tr>
		</tbody>
	</table>
  </div>
</div>
</template>

<script>
import navigationAdmin from '@/components/navigationAdmin.vue';
import { Booking } from '@/services';
import { Posts } from '@/services';

export default {
   data(){
     return {
       teams: [],
       members: [],
       team1: [],
       team2: []
     }

   },
   async created(){
     this.teams = await Booking.getAllBooking();
    this.teams.forEach(team => {
        if(team.members.length >= 12) {
          this.team1.push(team);
        } else {
          this.team2.push(team)
        }
    })
   },
   
  
components: {
  navigationAdmin
}
}
</script>