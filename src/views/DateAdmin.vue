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
       <div id="box1" style="margin-left:27%">
         <div class="subtitle">
  <h3>Add an appointment</h3>
</div>
<br>
<br>


<div class="w3-container w3-teal">
  <label>Date:
  </label>
  <input
            type="date"
            name="date"
            class="form-control"
            id="date"
            v-model="date"
            :class="{ 'is-invalid': submitted && $v.date.$error }"
      />
      <div
          v-if="submitted && !$v.date.required"
          class="invalid-feedback"
        >
          Date is required.
        </div>
  <br>
  <br>
  <label>Time:
  </label>
  <input
            type="time"
            name="time"
            class="form-control"
            id="time"
            v-model="time"
            :class="{ 'is-invalid': submitted && $v.time.$error }"
      />
      <div
          v-if="submitted && !$v.time.required"
          class="invalid-feedback"
        >
          Time is required.
        </div>
  <br>
  <br>
    </div>
     <br>
    <button class="btn" @click="submit()">
          <b>Add</b>
        </button>
    </div>
    </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return{
      date: '',
      time: '',
      submitted: false
    };
  },
   validations: {     
                date: { required },
                time: { required },
  },
  methods: {
     submit() {
                this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
    },
  }
}
</script>


  <style scoped>
   #box {
  max-width: 200px; 
  text-align: center;
  color: #1286C7;
  width: fixed;
  height: 65px;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 0px;
  background: white;
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
  margin-top: 40px;
  background-color: white;
  color: #1286C7;
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
  text-align: left;
  font-size: 40px;
  background-color: #1286C7;
  color:white;
  padding: 15px;
  max-width: 350px; 
  height: 65px;
}
.btn{
  background-color: white;
    color: #1286C7;
    padding: 10px 50px;
    border: none;
    box-shadow: 0 3px #1286C7;
    text-align: center;
    position: absolute;
  right: 40%;
}
.form-control{
  
    box-shadow: 0 3px #1286C7;
}
  </style>