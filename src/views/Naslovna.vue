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
        <div class="p-6 bg-gray-600 border-b border-gray-800">
            <!-- content goes here -->
            If you have samo questions about application or are unsure about some things, feel free to contact us.
        </div>

        <!-- card footer -->
        <div class="p-6 bg-gray-600 border-gray-800 text-right">
            <!-- button link -->
            <a class="bg-blue-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 rounded uppercase" >Questions</a>
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
        <div class="p-6 bg-gray-600 border-b border-gray-800">
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
      </tr>
		</thead>
		<thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Name</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">User Name</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email Address</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Mobile</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
			</tr>
		</thead>
		<tbody class="block md:table-row-group">
			<tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Name</span> </td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">User Name</span></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Email Address</span></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Mobile</span></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
					<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
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

