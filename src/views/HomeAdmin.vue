     <template>
<nav class="min-h-screen">
  <navigationAdmin></navigationAdmin>
  <div class="flex justify-start sm:justify-end px-2 my-4"><router-link to="/usersQuestionsAdmin" class="bg-blue-400 text-gray-700 font-semibold text-sm px-1 py-2 rounded-md"> User questions</router-link></div>
<table class="min-w-full border-collapse block md:table  mb-20">
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
		<tbody class="block md:table-row-group">
			<tr v-for="team of this.teams" :key="team.id" class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold text-white">Team name</span>{{team.teamName}} </td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">User email</span>{{team.userEmail}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Members</span>{{team.members}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Sport hall</span>{{team.note}}</td>
        				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Categorie</span></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Date and time</span>{{team.categories}}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Note</span>{{team.date && team.time}} </td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span class="inline-block w-1/3 md:hidden font-bold"></span>
					<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
				</td>
			</tr>
		</tbody>
	</table>

  <!-- 2 tablica -->
  <table class="min-w-full border-collapse block md:table">
    <thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell">List of filled teams</th>
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
		<tbody class="block md:table-row-group">
			<tr  class="bg-white border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Team name</span>  </td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">User email</span></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Members</span></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Sport hall</span></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Categorie</span></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Date and time</span></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Note</span>{{teams.note}}</td>
<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span class="inline-block w-1/3 md:hidden font-bold"></span>
					<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
				</td>
			</tr>
		</tbody>
	</table>
 </nav>
</template>

<script>
import navigationAdmin from '@/components/navigationAdmin.vue';
import { Booking } from '@/services';

export default {
   data(){
     return {
       teams: [],
     }

   },
   async created(){
     this.teams = await Booking.getAllBooking();
   },
   
  
components: {
  navigationAdmin
}
}
</script>