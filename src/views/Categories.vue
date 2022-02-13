     <template>
<div>
     <navigation></navigation>
 <body class="bg-gray-100 text-gray-700  font-sans quicksand">

  <div class="p-9 md:p-16">
    <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 m-5 mb-10 gap-24">


            <div class="bg-white overflow-hidden hover:bg-green-100 border border-gray-200 p-3">
        <div class="m-2 text-center">
             <i class="fa fa-soccer-ball-o" style="font-size:170px;background-color: white; color: #1286C7;"></i>
        </div>
    </div>
          <div class="bg-white overflow-hidden hover:bg-green-100 border border-gray-200 p-3">
        <div class="m-2 text-center">
            <i class='fas fa-basketball-ball' style="font-size:170px;background-color: white; color: #1286C7;"></i>
        </div>
    </div>
          <div class="bg-white overflow-hidden hover:bg-green-100 border border-gray-200 p-3">
        <div class="m-2 text-center">
            <i class='fas fa-table-tennis' style="font-size:170px;background-color: white; color: #1286C7;"></i>
        </div>
    </div>
          <div class="bg-white overflow-hidden hover:bg-green-100 border border-gray-200 p-3">
        <div class="m-2 text-center">
            <v-icon
          dark
          left
          style="font-size:170px;background-color: white; color: #1286C7;"
        >
          mdi mdi-handball
        </v-icon>
        </div>
    </div>
          <div class="bg-white overflow-hidden hover:bg-green-100 border border-gray-200 p-3">
        <div class="m-2 text-center">
            <i class='fas fa-volleyball-ball' style="font-size:170px;background-color: white; color: #1286C7;"></i>
        </div>
    </div>
          <div class="bg-white overflow-hidden hover:bg-green-100 border border-gray-200 p-3">
        <div class="m-2 text-center">
           <i class='fas fa-plus'  style="font-size:170px;background-color: white; color: #1286C7;"></i>
        </div>
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
  }
}
</script>


