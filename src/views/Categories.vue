     <template>
    <div class="hidden">
      <vs-sidebar
        text="#1286C7"
        absolute
        open
        >
        <template #logo>
           <v-img :src="require('@/assets/logo.png')"> </v-img>
        </template>
        <vs-sidebar-item id="home" to='/naslovna'>
          <template #icon>
            <i class='fa fa-home fa-fw'></i>
          </template>
          Home
        </vs-sidebar-item>
        <vs-sidebar-item id="terrain" to='/terrain'>
          <template #icon>
            <i class='fa fa-area-chart'></i>
          </template>
          Sports halls/terrain
        </vs-sidebar-item>
        <vs-sidebar-item id="account" to='/account'>
          <template #icon>
            <i class='fa fa-user fa'></i>
          </template>
          Account
        </vs-sidebar-item>
        <template #footer>
          <vs-button >
            <i class='fa fa-sign-out'></i>
          Logout
        </vs-button>
        </template>
      </vs-sidebar>
      <div class="categories" style="margin-left:21%">
        <div class="soccer">
     <i class="fa fa-soccer-ball-o" style="font-size:120px;background-color: white; color: #1286C7;"></i>
     <label>Soccer</label>
        </div>
        <div class="basketball">
     <i class='fas fa-basketball-ball' style="font-size:120px;background-color: white; color: #1286C7;"></i>
     <label>Basketball</label>
        </div>
        <div class="tennis">
     <i class='fas fa-table-tennis' style="font-size:120px;background-color: white; color: #1286C7;"></i>
     <label>Tennis</label>
        </div>
     <br>
        <div class="handball">
     <label>Handball</label>
        </div>
        <div class="volleyball">
     <i class='fas fa-volleyball-ball' style="font-size:120px;background-color: white; color: #1286C7;"></i>
     <label>Volleyball</label>
        </div>
        <div class="other">
     <i class='fas fa-plus'  style="font-size:120px;background-color: white; color: #1286C7;"></i>
     <label>Other</label>
        </div>
     </div>
    </div>
</template>
<style scoped>
    
  </style>
