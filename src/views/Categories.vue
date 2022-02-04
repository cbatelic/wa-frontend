     <template>
    <div class="hidden">
     <navigation></navigation>
      <div class="categories" style="margin-left:21%">
        <div class="row">
        <div class="col-sm">
          <router-link to="/calendar">
     <i class="fa fa-soccer-ball-o" style="font-size:170px;background-color: white; color: #1286C7;"></i>
     <br>
     <br>
     <label style="font-size: 32px; color: white;">Soccer</label>
          </router-link>
        </div>
        <div class="col-sm">
          <router-link to="/calendar">
     <i class='fas fa-basketball-ball' style="font-size:170px;background-color: white; color: #1286C7;"></i>
     <br>
     <br>
     <label style="font-size: 32px; color: white;">Basketball</label>
          </router-link>
        </div>
        <div class="col-sm">
          <router-link to="/calendar">
     <i class='fas fa-table-tennis' style="font-size:170px;background-color: white; color: #1286C7;"></i>
     <br>
     <br>
     <label style="font-size: 32px; color: white;">Tennis</label>
          </router-link>
        </div>
        </div>
     <br>
     <br>
     <br>
     <br>
     <br>
     <div class="row">
        <div class="col-sm">
          <router-link to="/calendar">
          <v-icon
          dark
          left
          style="font-size:170px;background-color: white; color: #1286C7;"
        >
          mdi mdi-handball
        </v-icon>
        <br>
        <br>
     <label style="font-size: 32px; color: white;">Handball</label>
          </router-link>
        </div>
        <div class="col-sm">
          <router-link to="/calendar">
     <i class='fas fa-volleyball-ball' style="font-size:170px;background-color: white; color: #1286C7;"></i>
     <br>
     <br>
     <label style="font-size: 32px; color: white;">Volleyball</label>
          </router-link>
        </div>
        <div class="col-sm">
          <router-link to="/calendar">
     <i class='fas fa-plus'  style="font-size:170px;background-color: white; color: #1286C7;"></i>
     <br>
     <br>
     <label style="font-size: 32px; color: white;">Other</label>
          </router-link>
        </div>
     </div>
     </div>
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

<style scoped>
.categories{
  margin-top: 60px;
}
    
  </style>
