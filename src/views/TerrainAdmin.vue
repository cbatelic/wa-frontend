<template>
<div>
  <navigation-admin></navigation-admin>
  <div class="mt-10 sm:mt-0">
  <div class="md:grid  md:gap-6">
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md lg:mx-12">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 ">
                <label for="first_name" class="block text-sm font-medium text-gray-700">Terrain name</label>
                <select v-model="terrainName" class="mt-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                :class="{ 'is-invalid': submitted && $v.terrainName.$error }">
      <option value="Sports hall 'Žatika'" class="selected">Sports hall 'Žatika'</option>
      <option value="Sports hall 'Franko Mileta'" class="selected">Sports hall 'Franko Mileta'</option>
      <option value="Sports hall 'Novigrad'" class="selected">Sports hall 'Novigrad'</option>
      <option value="Sports hall 'Umag'" class="selected">Sports hall 'Umag'</option>
      <option value="Sports hall 'Pazin'" class="selected">Sports hall 'Pazin'</option>
      <option value="Sports hall 'Saline'" class="selected">Sports hall 'Saline'</option>
      </select>
      <div
          v-if="submitted && !$v.terrainName.required"
          class="invalid-feedback"
        >
          Name is required.
        </div>
              </div> 

              <div class="col-span-6 ">
                <label for="last_name" class="block text-sm font-medium text-gray-700">Terrain city</label>
                <input type="text" v-model="terrainCity" class="mt-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                :class="{ 'is-invalid': submitted && $v.terrainCity.$error }" />
      <div
          v-if="submitted && !$v.terrainCity.required"
          class="invalid-feedback"
        >
          City is required.
        </div>
              </div>

              <div class="col-span-6 ">
                <label for="email_address" class="block text-sm font-medium text-gray-700">Categories</label>
                <select type="text" v-model="terrainCategories" class="mt-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                :class="{ 'is-invalid': submitted && $v.terrainCategories.$error }">
                <option value="Soccer" class="selected">Soccer</option>
      <option value="Basketball" class="selected">Basketball</option>
      <option value="Tennis" class="selected">Tennis</option>
      <option value="Handball" class="selected">Handball</option>
      <option value="Volleyball" class="selected">Volleyball</option>
      <option value="Other" class="selected">Other</option>
                </select>
                <div
          v-if="submitted && !$v.terrainCategories.required"
          class="invalid-feedback"
        >
          Categories is required.
        </div>
              </div>

              <div class="col-span-6 ">
                <label for="country" class="block text-sm font-medium text-gray-700">Date</label>
                <input type="date" class="mt-2 py-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                v-model="date"
            :class="{ 'is-invalid': submitted && $v.date.$error }"
      />
      <div
          v-if="submitted && !$v.date.required"
          class="invalid-feedback"
        >
          Date is required.
        </div>
              </div>

              <div class="col-span-6">
                <label for="street_address" class="block text-sm font-medium text-gray-700">Time</label>
                <input type="time"  class="mt-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                v-model="time"
            :class="{ 'is-invalid': submitted && $v.time.$error }"
      />
      <div
          v-if="submitted && !$v.time.required"
          class="invalid-feedback"
        >
          Time is required.
        </div>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="button" @click="submit()"  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
    <!--
       <div id="box1" style="margin-left:27%">
         <div class="subtitle">
  <h3>Add sports halls or terrain</h3>
</div>
<br>
<br>


<div class="w3-container w3-teal">
  <label>Name:
  </label>
  <form class="navbar-form form-inline ml-auto">
      <select
        v-model="terrainName"
        class="form-control mr-sm-2"
        type="text"
        :class="{ 'is-invalid': submitted && $v.terrainName.$error }"
      >
      <option value="Sportska 1" class="selected">Sportska dvorana 1</option>
      <option value="Sportska 2" class="selected">Sportska dvorana 2</option>
      <option value="Sportska 3" class="selected">Sportska dvorana 3</option>
      <option value="Sportska 4" class="selected">Sportska dvorana 4</option>
      </select>
      <div
          v-if="submitted && !$v.terrainName.required"
          class="invalid-feedback"
        >
          Name is required.
        </div>
    </form>
  <br>
  <br>
  <! Dodati gradove koji su povazani sa dvoranom koja se tamo nalazi -->
  <!-- <label>City:
  </label>
  <form class="navbar-form form-inline ml-auto">
      <input
        v-model="terrainCity"
        class="form-control mr-sm-2"
        type="text"
        :class="{ 'is-invalid': submitted && $v.terrainCity.$error }"
      />
      <div
          v-if="submitted && !$v.terrainCity.required"
          class="invalid-feedback"
        >
          City is required.
        </div>
    </form>
  <br>
  <br>
  <label>Categories:
  </label>
   <form class="navbar-form form-inline ml-auto">
      <select
        v-model="terrainCategories"
        class="form-control mr-sm-2"
        type="text"
        :class="{ 'is-invalid': submitted && $v.terrainCategories.$error }"
      >
      <option value="Soccer" class="selected">Soccer</option>
      <option value="Basketball" class="selected">Basketball</option>
      <option value="Tennis" class="selected">Tennis</option>
      <option value="Handball" class="selected">Handball</option>
      <option value="Volleyball" class="selected">Volleyball</option>
      <option value="Other" class="selected">Other</option>
      </select>
      <div
          v-if="submitted && !$v.terrainCategories.required"
          class="invalid-feedback"
        >
          Categories is required.
        </div>
    </form>
  <br>
  <br>
    </div>
     <br>
    <button class="btn" @click="submit()">
          <b>Next</b>
        </button>
    </div>
    </div>  -->
</template>
<script>
import { required } from 'vuelidate/lib/validators'
import { Posts } from '@/services';
import {Auth} from "@/services";
import navigationAdmin from '../components/navigationAdmin.vue';


export default {
  data() {
    return{
      terrainName: '',
      terrainCity: '',
      terrainCategories: '',
      date: '',
      time: '',
      submitted: false
    };
  },
   validations: {     
                terrainName: { required },
                terrainCity: { required },
                terrainCategories: { required },
                date: { required },
                time: { required },
  },
  methods: {
     async submit() {
                this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
                let admTerrain = {
                  terrainName: this.terrainName,
                  terrainCity: this.terrainCity,
                  terrainCategories: this.terrainCategories,
                  date: this.date,
                  time: this.time
                };
                console.log('radiss')
                console.log(this.terrainName)
                let newterrain = await Posts.add_terrain(admTerrain);
        console.log('Save terrain', newterrain.data);
    },
  },
  components:{
    navigationAdmin
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
  margin-top: 50px;
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
}
.btn{
  background-color: white;
    color: #1286C7;
    padding: 10px 50px;
    border: none;
    box-shadow: 0 3px #1286C7;
    text-align: center;
    position: absolute;
  right: 15%;
}
.form-control{
  
    box-shadow: 0 3px #1286C7;
}
  </style>