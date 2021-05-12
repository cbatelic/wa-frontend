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

  