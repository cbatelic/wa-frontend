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
        <vs-sidebar-item id="home" to='/'>
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
      <div style="margin-left:15%">

<div class="w3-container w3-teal">
  <v-img style="height:100%;
                width: 100%;" :src="require('@/assets/welcome.png')"> </v-img>
</div>
</div>
<div id="box" style="margin-left:20%">

<div class="w3-container w3-teal">
  <p>If you have questions about the app or are unsure about some things, feel free to contact us.
  </p>
     <div style="text-align:right;">
        <button class="btn">
          <font-awesome-icon icon="envelope" size="lg" />
          <b>Questions</b>
        </button>
        </div>
</div>
</div>
<div id="box" style="margin-left:20%">

<div class="w3-container w3-teal">
  <p>If you want to play, but do not have a team yet, we offer you the opportunity to view the list of free players. </p>
  <div style="text-align:right;">
    <router-link to="/listPlayers">
        <button class="btn">
          <font-awesome-icon icon="envelope" size="lg" />
          <b>Teams</b>
        </button>
    </router-link>
        </div>
</div>
</div>
    </div>
</template>
<style scoped>
    #box {
  max-width: 500px; 
  text-align:left;
  color: black;
  width: 500px;
  height: 200px;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 0px;
  background: #1286C7;
  font-size: 25px;
  margin-left: 50px;
  display: block;
  margin-top: 40px;
}
.btn{
  background-color: white;
    color: #1286C7;
    padding: 5px 50px;
    border: none;
    box-shadow: 0 3px #1286C7;
}
  </style>