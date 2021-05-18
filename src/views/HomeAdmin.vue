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
        <vs-sidebar-item id="home" to='/homeAdmin'>
          <template #icon>
            <i class='fa fa-home fa-fw'></i>
          </template>
          Home
        </vs-sidebar-item>
        <vs-sidebar-item id="terrain" to='/terrainAdmin'>
          <template #icon>
            <i class='fa fa-area-chart'></i>
          </template>
          Sports halls/terrain
        </vs-sidebar-item>
        <vs-sidebar-item id="account" to='/accountAdmin'>
          <template #icon>
            <i class='fa fa-user fa'></i>
          </template>
          Account
        </vs-sidebar-item>
        <template #footer>
          <vs-button to='/'>
            <i class='fa fa-sign-out'></i>
          Logout
        </vs-button>
        </template>
      </vs-sidebar>
      <div class="row">
      <div class="teams" style="margin-left:20%">
    <router-link to="/filledListAdmin">
        <button class="btn">
          <b>Teams</b>
        </button>
    </router-link>
        </div>
        <div class="inbox" style="margin-left:20%">
    <router-link to="/inboxAdmin">
        <button class="btn">
          <b>Inbox</b>
        </button>
    </router-link>
        </div>
    </div>
     <div id="box" style="margin-left:20%">
       <div class="subtitle" style="margin-left:0%">

<div class="w3-container w3-teal">
  <h3>List of unfilled sports players</h3>
</div>
</div>
<div id="box1" style="margin-left:0%">

<div>
  <label>Team name:
  </label>
  <br>
  <br>
  <label>City:
  </label>
  <br>
  <br>
  <label>Categories:
  </label>
  <br>
  <br>
  <label>Date and time:
  </label>
  <br><br>
  <label>Members:
  </label>
  <br>
  <br>
    </div>
    </div>
    <div id="box1" style="margin-left:0%">

<div>
  <label>Team name:
  </label>
  <br>
  <br>
  <label>City:
  </label>
  <br>
  <br>
  <label>Categories:
  </label>
  <br>
  <br>
  <label>Date and time:
  </label>
  <br><br>
  <label>Members:
  </label>
  <br>
  <br>
    </div>
    </div>
</div>
    </div>
</template>

  <style scoped>
  .btn{
  background-color: white;
    color: #1286C7;
    padding: 5px 50px;
    border: none;
    box-shadow: 0 3px #1286C7;
}
.teams{
  max-width: 20px; 
  text-align: center;
  color: white;
  width: fixed;
  height: 65px;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 0px;
  background: #86d1fc;
  font-size: 16px;
  margin-left: 50px;
  display: block;
  margin-top: 40px;
}
.inbox{
  max-width: 300px; 
  text-align: center;
  color: white;
  width: fixed;
  height: 65px;
  background-color: #1286C7;
  padding: 20px;
  margin-top: 40px;
  background-color: #86d1fc;
}
#box{
  max-width: 900px; 
  text-align: left;
  color: white;
  width: fixed;
  height: 600px;
  /* padding: 15px; */
  box-sizing: border-box;
  border-radius: 0px;
  background: white;
  font-size: 16px;
  margin-left: 2px;
  /* display: block; */
  margin-top: 40px;
  overflow: scroll;
}
.subtitle{
  max-width: 500px; 
  text-align: left;
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
#box1 {
  max-width: 800px; 
  text-align: left;
  width: fixed;
  height: 250px;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 0px;
  font-size: 16px;
  margin-left: 50px;
  display: block;
  margin-top: 70px;
  background-color: white;
  color: #1286C7;
  border: none;
  box-shadow: 0 3px #1286C7;
}

  </style>