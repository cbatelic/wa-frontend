     <template>
<div>
     <navigation></navigation>
     <div class=" flex lg:mt-20 lg:py-2 bg-blue-900  opacity-50 fixed w-full mt-14 ">
       <div class="text-white text-white md:mx-12 text-xl pl-2 md:text-3xl lg:pt-8  pt-12 pb-8 font-bold">
       Choose categorie you want:
       </div>
       </div>
 <body class=" text-gray-700  font-sans quicksand pt-36 ">

  <div class="p-2 md:p-9 md:p-16">
    <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 m-5 mb-10 gap-24">
            <div @click="routeToDate('Soccer')" class=" cursor-pointer bg-white overflow-hidden  border-gray-200 p-3 rounded-lg">
        <div class="m-2 text-center">
             <i class="fa fa-soccer-ball-o" style="font-size:170px;background-color: white; color: #1286C7;"></i>
        </div>
        <label for="soccer" class="flex justify-center text-base font-black text-3xl text-blue-900 cursor-pointer">Soccer</label>
    </div>
          <div @click="routeToDate('Basketball')" class=" cursor-pointer bg-white overflow-hidden  border-gray-200 p-3 rounded-lg">
        <div class="m-2 text-center">
            <i class='fas fa-basketball-ball' style="font-size:170px;background-color: white; color: #1286C7;"></i>
        </div>
                    <label for="basketball" class="flex justify-center text-base font-black text-3xl text-blue-900 cursor-pointer">Basketball</label>
    </div>
          <div @click="routeToDate('Tennis')" class=" cursor-pointer bg-white overflow-hidden border-gray-200 p-3 rounded-lg">
        <div class="m-2 text-center">
            <i class='fas fa-table-tennis' style="font-size:170px;background-color: white; color: #1286C7;"></i>
        </div>
        <label for="tennis" class="flex justify-center text-base font-black text-3xl text-blue-900 cursor-pointer">Tennis</label>
    </div>
          <div @click="routeToDate('Handball')" class=" cursor-pointer bg-white overflow-hidden border-gray-200 p-3 rounded-lg">
        <div class="m-2 text-center">
            <i class='mdi mdi-handball' style="font-size:120px;background-color: white; color: #1286C7;"></i>
        </div>
        <label for="volleyball" class="flex justify-center text-base font-black text-3xl text-blue-900 cursor-pointer">Handball</label>
    </div>
          <div @click="routeToDate('Volleyball')" class=" cursor-pointer bg-white overflow-hidden border-gray-200 p-3 rounded-lg">
        <div class="m-2 text-center">
            <i class='fas fa-volleyball-ball' style="font-size:170px;background-color: white; color: #1286C7;"></i>
        </div>
        <label for="volleyball" class="flex justify-center text-base font-black text-3xl text-blue-900 cursor-pointer">Volleyball</label>
    </div>
          <div @click="routeToDate('Other')" class=" cursor-pointer bg-white overflow-hidden border-gray-200 p-3 rounded-lg">
        <div class="m-2 text-center">
           <i class='fas fa-plus'  style="font-size:170px;background-color: white; color: #1286C7;"></i>
        </div>
        <label for="other" class="flex justify-center text-base font-black text-3xl text-blue-900 cursor-pointer">Other</label>
    </div>
    
    </div>
  </div>

</body>
</div>
</template>
<script>
import navigation from '@/components/navigation.vue'

export default {
  components: {
    navigation
  },
  methods:{
    routeToDate(sport){
      this.$route.query.name;
      console.log(this.$route.query.name)
      this.$router.push({name:'Calendar', query:{name:this.$route.query.name, sport:sport}}); 
      
    }
  }
}
</script>


