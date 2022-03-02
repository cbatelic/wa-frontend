 <template>
    <div>
     <navigation></navigation>
     <div class=" mx-auto">
    <div class="overflow-hidden shadow-md text-white shadow-md mt-12">
        <!-- card header -->
        <div class="px-6 py-4 bg-gray-600 border-b border-gray-800 font-bold uppercase">
            Do you have questions?
        </div>

        <!-- card body -->
        <div class="p-6 bg-gray-600 border-b border-gray-800 text-justify">
            <!-- content goes here -->
            If you have samo questions about application or are unsure about some things, feel free to contact us.
        </div>

        <!-- card footer -->
        <div class="p-6 bg-gray-600 border-gray-800 text-right">
            <!-- button link -->
            <router-link to="/questions" class="items-center inline-flex gap-1.5 bg-blue-500 shadow-md text-sm text-white font-bold py-2 md:px-8 px-1 hover:bg-blue-400 rounded uppercase" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>Questions</router-link>
        </div>
    </div>
</div>

<!-- divider -->
<hr class="my-6"> 

<!-- dark mode -->
<div class="mx-auto ">
    <div class="overflow-hidden shadow-md text-gray-600">
        <!-- card header -->
        <div class="px-6 py-4 bg-gray-600 border-b border-gray-800 font-bold uppercase">
           <div class="text-white">  Do you need team? </div>
        </div>

        <!-- card body -->
        <div class="p-6 bg-gray-600 border-b border-gray-800 text-justify">
            <div class="text-white"> If you want to play, but do not have a team yet, we offer you the opportunity to view the list of free players.</div>
        </div>
    </div>
</div>
     <table class="min-w-full border-collapse block md:table ">
     <thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell">List of unfilled teams</th>
			 <th class="bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell"></th>
				<th class="bg-gray-600 p-2 text-white font-bold text-left block md:table-cell"></th>
				<th class="bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell"></th>
				<th class="bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell"></th>
        				<th class="bg-gray-600 p-2 text-white font-bold  text-left block md:table-cell"></th>
      </tr>
		</thead>
		<thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Team name</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Members</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Categories</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Date and time</th>
        <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Terrain</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"></th>
			</tr>
		</thead>
		<tbody class="block md:table-row-group">
			<tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Name</span> </td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">User Name</span></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Email Address</span></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Mobile</span></td>
        				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Mobile</span></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Choose</button>
				</td>
			</tr>
		</tbody>
	</table>
    </div>
</template>
<script>
import navigation from '@/components/navigation.vue';

export default {
    
    components: {
        navigation
    }
  
}
</script>

