     <template>
    <div class="">
      <navigation></navigation>
      <div class="w-full">
    <div class="h-72"></div>
    <div class="mx-auto px-6 sm:px-6 lg:px-8 mt-1.5">
        <div class="w-full p-8 sm:p-12 -mt-72">
            <p class="text-3xl font-bold leading-7 text-center"></p>
            <form action="" method="post">
                <div class="md:flex items-center mt-12">
                    <div class="w-full md:w-1/2 flex flex-col">
                        <label class="font-semibold leading-none text-white">Team name</label>
                        <input type="text" class="leading-none text-gray-900 p-2 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" 
                        v-model="teamName"
        :class="{ 'is-invalid': submitted && $v.teamName.$error }"
      />
      <div
          v-if="submitted && !$v.teamName.required"
          class="invalid-feedback"
        >
          Team name is required.
        </div>
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 mt-4 md:mt-0">
                        <label class="font-semibold leading-none text-white">User email</label>
                        <input type="email" class="leading-none text-gray-900 p-2 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                        v-model="userEmail"
        :class="{ 'is-invalid': submitted && $v.userEmail.$error }"
      />
      <div
          v-if="submitted && !$v.userEmail.required"
          class="invalid-feedback"
        >
          User email is required.
        </div>
                    </div>
                </div>
                <div class="md:flex items-center mt-8">
                    <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none text-white">Members</label>
                        <input type="text" class="leading-none text-gray-900 p-2 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                        v-model="members"
        :class="{ 'is-invalid': submitted && $v.members.$error }"
      />
      <div
          v-if="submitted && !$v.members.required"
          class="invalid-feedback"
        >
          Members is required.
        </div>
                    </div>
                </div>
                <div>
                    <div class="w-full flex flex-col mt-8">
                        <label class="font-semibold leading-none text-white">Note</label>
                        <textarea type="text" class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" 
                        v-model="note"
        :class="{ 'is-invalid': submitted && $v.note.$error }"
      ></textarea>
      <div
          v-if="submitted && !$v.note.required"
          class="invalid-feedback"
        >
          Note is required.
        </div>
                    </div>
                </div>
                <div class="flex items-center justify-start md:justify-end w-full">
                    <button @click="submit()" type="button" class="mt-9 font-semibold leading-none text-white py-2 px-4 bg-blue-500 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Confirm booking
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
      <!-- <div id="box1" style="margin-left:27%">
         <div class="subtitle">
  <u><p>Booking</p></u>
</div>
<br>
<br>
<div class="w3-container w3-teal">
  <label>Team name:
  </label>
  <form class="navbar-form form-inline ml-auto">
      <input
        class="form-control mr-sm-2"
        type="text"
        v-model="teamName"
        :class="{ 'is-invalid': submitted && $v.teamName.$error }"
      />
      <div
          v-if="submitted && !$v.teamName.required"
          class="invalid-feedback"
        >
          Team name is required.
        </div>
    </form>
  <br>
  <br>
  <label>Members:
  </label>
  <form class="navbar-form form-inline ml-auto">
      <input
        class="form-control mr-sm-2"
        type="text"
        v-model="members"
        :class="{ 'is-invalid': submitted && $v.members.$error }"
      />
      <div
          v-if="submitted && !$v.members.required"
          class="invalid-feedback"
        >
          Members is required.
        </div>
    </form>
  <br>
  <br>
  <label>Note:
  </label>
   <textarea
            class="form-control"
            maxlength="500"
            id="note"
            rows="4"
            v-model="note"
          ></textarea>
  <br>
  <br>
    </div>
     <br>
    <button class="btn" @click="submit()">
          <b>Confirm booking</b>
        </button>
    </div> -->

    </div>
</template>
<script>
import navigation from '@/components/navigation.vue';
import { required } from 'vuelidate/lib/validators'
import Navigation from '../components/navigation.vue';
import { Booking } from '@/services';

export default {
  data() {
    return{
      teamName: '',
      userEmail: '',
      members: '',
      note: '',
      submitted: false
            };
  },
  
  validations: {     
                teamName: { required },
                userEmail: { required },
                members: { required },
                note: { required }
  },
  methods: {
    async submit() {
                this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }

                let add_booking = {
                  sport: this.terrain,
                  teamName: this.teamName,
                  userEmail: this.userEmail,
                  members: this.members,
                  note: this.note
                };
                console.log(this.userEmail)
                console.log(this.data)
                let booking = await Booking.add_booking(add_booking)
                console.log('push booking', booking.data);
                
    },
  },
  components: {
    navigation
  }
}
</script>

