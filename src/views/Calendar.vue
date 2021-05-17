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
      <div id="box1" style="margin-left:33%">
        <v-row>
    <v-col>
      <v-sheet height="420">
        <v-calendar
          :now="today"
          :value="today"
          color="primary"
        >
          <template v-slot:day="{ past, date }">
            <v-row
              class="fill-height"
            >
              <template v-if="past && tracked[date]">
                <v-sheet
                  v-for="(percent, i) in tracked[date]"
                  :key="i"
                  :title="category[i]"
                  :color="colors[i]"
                  :width="`${percent}%`"
                  height="100%"
                  tile
                ></v-sheet>
              </template>
            </v-row>
          </template>
        </v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
        
      </div>
    </div>
</template>
<script>
 export default {
    data: () => ({
      today: '2019-01-10',
      tracked: {
        '2019-01-09': [23, 45, 10],
        '2019-01-08': [10],
        '2019-01-07': [0, 78, 5],
        '2019-01-06': [0, 0, 50],
        '2019-01-05': [0, 10, 23],
        '2019-01-04': [2, 90],
        '2019-01-03': [10, 32],
        '2019-01-02': [80, 10, 10],
        '2019-01-01': [20, 25, 10],
      },
      colors: ['', '', ''],
      category: ['Development', 'Meetings', 'Slacking'],
    }),
  }

</script>

<style scoped>

#box1 {
  max-width: 800px; 
  text-align: left;
  width: fixed;
  height: 445px;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 0px;
  font-size: 16px;
  margin-left: 50px;
  display: block;
  margin-top: 0px;
  background-color: #1286C7;
  color: white;
  border: none;
}

</style>