     <template>
<nav class="min-h-screen">
  <navigationAdmin></navigationAdmin>
  <div class="flex justify-start sm:justify-end px-2 pt-24 pb-4"><router-link to="/usersQuestionsAdmin" class="bg-blue-400 text-gray-700 font-semibold text-sm px-1 py-2 rounded-md"> User questions</router-link></div>

<div class="h-96">
<table class="min-w-full border-collapse block  overflow-x-auto mb-20">
     <thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell">List of unfilled teams</th>
			 <th class="bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell"></th>
				<th class="bg-gray-600 p-2 text-white font-bold text-left block md:table-cell"></th>
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
		<tbody class="block md:table-row-group overflow-x-auto" v-for="team of teams" :key="team.id">
			<tr v-if="team.members<='14'" class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold text-white">Team name</span>{{team.teamName}} </td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">User email</span>{{team.userEmail}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Members</span>{{team.members}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Sport hall</span>{{team.terrain.terrainName}}</td>
        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Categorie</span>{{team.terrain.terrainCategories}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Date and time</span>{{team.terrain.date && team.terrain.time}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Note</span>{{team.note}} </td>
      </tr>
		</tbody>
	</table>
</div>

  <!-- 2 tablica -->
  <div class="h-96">
  <table class="min-w-full border-collapse block overflow-x-auto">
    <thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell">List of filled teams</th>
			 <th class="bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell"></th>
				<th class="bg-gray-600 p-2 text-white font-bold text-left block md:table-cell"></th>
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
		<tbody class="block md:table-row-group " v-for="team of teams" :key="team.id" >
			<tr  v-if="team.members>'15'" class="bg-white border border-grey-500 md:border-none block md:table-row">
        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Team name</span> {{team.teamName}} </td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">User email</span>{{team.userEmail}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Members</span>{{team.members}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Sport hall</span>{{team.terrain.terrainName}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Categorie</span>{{team.terrain.terrainCategories}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Date and time</span>{{team.terrain.date && team.terrain.time}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Note</span>{{team.note}} </td>
<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span class="inline-block w-1/3 md:hidden font-bold"></span>
				</td>
			</tr>
		</tbody>
	</table>
  </div>
 </nav>
</template>

<script>
import navigationAdmin from '@/components/navigationAdmin.vue';
import { Booking } from '@/services';
import { Posts } from '@/services';

export default {
   data(){
     return {
       teams: [],
     }

   },
   async created(){
     this.teams = await Booking.getAllBooking();
     console.log(this.teams)
     console.log('a')
   },
   
  
components: {
  navigationAdmin
}
}
</script>