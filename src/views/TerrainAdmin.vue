<template>
<div>
  <navigation-admin></navigation-admin>
  <div class="pt-32 sm:mt-0">
  <div class="md:grid  md:gap-6">
    <div class=" md:mt-0 md:col-span-2">
      <form  class="mt-10" @submit.prevent="submit">
        <div class="shadow overflow-hidden sm:rounded-md lg:mx-12">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 ">
                <label for="first_name" class="block text-sm font-medium text-blue-600">Terrain name</label>
                <select  v-model="terrainName" class="px-2 mt-2 py-2 block w-full border sm:text-sm  rounded-md"
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
                <label for="last_name" class="block text-sm font-medium text-blue-600">Terrain city</label>
                <input type="text" :options="options" v-model="terrainCity"  class="mt-2 py-2 px-2 block w-full sm:text-sm border rounded-md"
                :class="{ 'is-invalid': submitted && $v.terrainCity.$error }" />
      <div
          v-if="submitted && !$v.terrainCity.required"
          class="invalid-feedback"
        >
          City is required.
        </div>
              </div>

              <div class="col-span-6 ">
                <label for="email_address" class="block text-sm font-medium text-blue-600">Categories</label>
                <select v-model="terrainCategories" class="mt-2 px-2 py-2 block w-full border sm:text-sm rounded-md"
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
                <label for="country" class="block text-sm font-medium text-blue-600">Date</label>
                <input type="date" class="mt-2 py-2 block w-full py-2 px-3 border  rounded-md sm:text-sm"
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
                <label for="street_address" class="block text-sm font-medium text-blue-600">Time</label>
                <input type="time"  class="mt-2 py-2 px-3 border block w-full sm:text-sm rounded-md"
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
      submitted: false,
      options: [
      { text: "Sports Hall 'Žatika'", value: 'Poreč' },
      { text: "Sports Hall 'Franko Mileta'", value: 'Labin' },
      { text: "Sports hall 'Novigrad'", value: 'Novigrad' },
      { text: "Sports hall 'Umag'", value: 'Umag' },
      { text: "Sports hall 'Pazin'", value: 'Pazin' },
      { text: "Sports hall 'Saline'", value: 'Vrsar' }
    ],
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
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
                try {
                this.loading = true;
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

        this.terrainName = "";
        this.terrainCity = "";
        this.terrainCategories = "";
        this.date = "";
        this.time= "";
        this.submitted = false;
      } catch (e) {
        console.error("greška", e);
      }
    },
  },
  components:{
    navigationAdmin
  }
}
</script>


