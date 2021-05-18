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
          <vs-button to='/'>
            <i class='fa fa-sign-out'></i>
          Logout
        </vs-button>
        </template>
      </vs-sidebar>
      <div id="box" style="margin-left:21%">
       <form id="search" class="navbar-form form-inline ml-auto">
      <input
        icon="fa fa-search"
        v-model="search"
        class="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </form>
    </div>
    <div id="box1" style="margin-left:25%">
      <div id="box2" style="margin-left:0%">

<div>
  <router-link to="/calendar">
  <img class="img" alt="hall" src="../assets/SportskiCentarMileta.jpg">
  <br>
  <br>
  <label>Name:
  </label>
  <br>
  <label>City:
  </label>
  <br>
  <br>
  </router-link>
    </div>
      </div>
     <div id="box2" style="margin-left:0%">
    <div>
      <router-link to="/calendar">
  <img class="img" alt="hall" src="../assets/SportskaDvoranaŽatika.jpg">
  <br>
  <br>
  <label>Name:
  </label>
  <br>
  <label>City:
  </label>
  <br>
  <br>
      </router-link>
    </div>
    </div>
    <div id="box2" style="margin-left:0%">
    <div>
      <router-link to="/calendar">
  <img class="img" alt="hall" src="../assets/DvoranaBale.jpg">
  <br>
  <br>
  <label>Name:
  </label>
  <br>
  <label>City:
  </label>
  <br>
  <br>
      </router-link>
    </div>
    </div>
    </div>
    </div>
</template>
<script>
  
  export default {
    data() {
      return{
        search: '',
      }
      
    },
  }
  </script>
  
  <style scoped>
  .search{
    max-width: 1000px;
  }
  #box{
  max-width: 1000px; 
  text-align: left;
  width: fixed;
  height: 70px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 16px;
  margin-left: 50px;
  display: block;
  margin-top: 50px;
  background-color: #86d1fc;
  color: black;
  }
  #box1{
  max-width: 900px; 
  text-align: left;
  color: white;
  width: fixed;
  height: 570px;
  /* padding: 15px; */
  box-sizing: border-box;
  border-radius: 0px;
  background: white;
  font-size: 16px;
  margin-left: 2px;
  /* display: block; */
  margin-top: 30px;
  overflow: scroll;
}
#box2 {
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
  margin-top: 30px;
  background-color: white;
  color: #1286C7;
  border: none;
  box-shadow: 0 3px #1286C7;
}
.img{
  max-width: 800px;
  height: 160px;
  margin-top: 0px;
  width: 50%;
}
  </style>