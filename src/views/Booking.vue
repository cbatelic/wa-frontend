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
      <div id="box1" style="margin-left:27%">
         <div class="subtitle">
  <u><p>Booking</p></u>
</div>
<br>
<br>


<div class="w3-container w3-teal">
  <label>Team name:
  </label>
  <input
            type="text"
            maxlength="50"
            name="teamName"
            class="form-control"
            id="teamName"
          />
  <br>
  <br>
  <label>Members:
  </label>
  <input
            type="text"
            maxlength="50"
            name="members"
            class="form-control"
            id="members"
          />
  <br>
  <br>
  <label>Note:
  </label>
   <textarea
            class="form-control"
            maxlength="500"
            id="note"
            rows="4"
          ></textarea>
  <br>
  <br>
    </div>
     <br>
    <button class="btn">
          <b>Confirm booking</b>
        </button>
    </div>

    </div>
</template>
  <style scoped>
#box {
  max-width: 200px; 
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
  display: block;
  margin-top: 40px;
}
#box1 {
  max-width: 1000px; 
  text-align: left;
  width: fixed;
  height: 680px;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 0px;
  font-size: 16px;
  margin-left: 50px;
  display: block;
  margin-top: 50px;
  background-color: #1286C7;
  color: white;
  border: none;
}
.form-control {
  margin-bottom: 8px;
  margin-top: 10px;
  background-color: white;
  outline: #1286C7;
  box-shadow: #1286C7;
}
.subtitle{
  text-align: center;
  font-size: 40px;
}
.btn{
  background-color: white;
    color: #1286C7;
    padding: 10px 50px;
    border: none;
    box-shadow: 0 3px #1286C7;
    text-align: center;
    position: absolute;
  left: 50%;
}
  </style>