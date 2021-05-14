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
          <vs-row justify="space-between">

          </vs-row>
        </template>
      </vs-sidebar>
      <div id="box" style="margin-left:25%">
       <div class="subtitle" style="margin-left:25%">

<div class="w3-container w3-teal">
  <u><h3>Booking</h3></u>
</div>
</div>
</div>
    </div>
</template>
  <style scoped>
      #box{
  max-width: 900px; 
  text-align: left;
  color: white;
  width: fixed;
  height: 675px;
  /* padding: 15px; */
  box-sizing: border-box;
  border-radius: 0px;
  background: #1286C7;
  font-size: 16px;
  margin-left: 2px;
  /* display: block; */
  margin-top: 40px;
}
.subtitle{
  max-width: 500px; 
  text-align: center;
  color: white;
  width: fixed;
  height: 65px;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 0px;
  background: #1286C7;
  font-size: 16px;
  /* margin-left: 10px; */
}
  </style>