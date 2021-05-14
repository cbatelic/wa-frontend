 <template>
    <div class="hidden">
      <vs-sidebar
        :color="color"
        absolute
        open
        >
        <template #logo>
           <v-img :src="require('@/assets/logo.png')"> </v-img>
        </template>
        <vs-sidebar-item id="home" to='/' :active="color == 'primary'" @click="color = 'primary'">
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

<div class="w3-container w3-teal">
  <h3>List of free sports players</h3>
</div>
</div>
    </div>
</template>

<script>

export default {
    data() {
        return{
         color: 'primary'
        }
    },
}
</script>
<style scoped>
#box {
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
  margin-left: 50px;
}
</style>

  