 <template>
 <div>
      <navigation></navigation>
      <div class="pt-16 ">
                <div class="p-3 lg:mx-20">
                    <div class=" flex justify-center items-center my-14 lg:my-10">
                            <svg class="h-44 text-white bg-blue-400 rounded-3xl lg:h-3/6 lg:w-72" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                    </div>
                    <div class="">
                        <div class="grid text-lg space-y-12">
                            <div class="grid grid-cols-2 bg-white rounded-md ">
                                <div class="px-4 py-2 font-semibold text-blue-500">Name:</div>
                                <div class=" py-2 text-black">{{store.name}}</div>
                            </div>
                            <div class="grid grid-cols-2 bg-white rounded-md ">
                                <div class="px-4 py-2 font-semibold text-blue-500">Surname:</div>
                                <div class=" py-2 text-black">{{store.surname}}</div>
                            </div>
                            <div class="grid grid-cols-2 bg-white rounded-md ">
                                <div class="px-4 py-2 font-semibold text-blue-500">Email:</div>
                                <div class=" py-2">
                                    <a class="text-black underline" >{{store.email}}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="inline-flex px-3.5 mt-8 lg:mx-20">
<div class="text-white">Do you want to </div>
  <button type="button" @click="password()" class="font-black underline text-white pl-2">Change password?</button>
                </div>
  <div v-if="!this.show" class="p-3 space-y-10 lg:mx-20">
    <div class="space-y-3">
    <label class="text-white">Old password</label>
   <input
                v-model="old_password"
                type="password"
                name="old_password"
                class="form-control"
                id="old_password"
                required
                invalidFeedback='Please enter correct old password!' />
                <p class="validation text-red-500">{{ validation }} </p>
    </div>
    <div class="space-y-3">
    <label class="text-white">New password</label>
     <input
                v-model="new_password"
                type="password"
                name="new_password"
                class="form-control"
                id="new_password"
                required
                invalidFeedback= "Please enter correct password!" />
                <p class="validation1 text-red-500">{{ validation1 }}</p>
                <p class="validation2 text-red-500">{{ validation2 }}</p>
                <p class="validation3 text-red-500">{{ validation3 }}</p>
                <div class="text-red-500" v-if="!$v.new_password.minLength">
                  Password must have {{ $v.new_password.$params.minLength.min}} characters!
                </div>
    </div>
    <div class="flex justify-end space-x-7">
                <button class="text-white bg-blue-500 rounded-md py-2 px-2" type="button" @click="changePassword()"> Save</button>
                <button class="text-blue-500 bg-white rounded-md py-2 px-2" type="button" @click="password()"> Cancel</button>
    </div>
  </div>
  </div>
 </div>    
</template>

<script>
import navigation from '@/components/navigation.vue';
import {Auth} from '@/services';
import store from '@/store.js';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  
   data() {
    return {
      auth: Auth.state,
      user: {},
      store,
      new_password: '',
      old_password: '',
      show: Boolean,
      validation: '',
      validation1: '',
      validation2: '',
      validation3: '',
      validation4: ''
    };
  },
  validations:{
   new_password: {
     required,
     minLength: minLength(8),
   }
  },
  methods: {
    password(){
     this.show = !this.show;
    },
    async changePassword() {
      if(this.old_password == '' || this.new_password == ''){
        return (this.validation1 = 'Inputs fields must be required!');
      } else if(this.old_password == this.new_password){
        return(this.validation2 = 'New password must be different from the old password!')
      }
      if(!this.$v.new_password.minLength){
        return (this.validation4 = 'Invalid password!');
      }
      try{
        console.log(this.old_password)
        console.log(this.new_password)
        console.log(this.data)
      let success = await Auth.change_Password(
          this.old_password,
          this.new_password
        );
        console.log('Result: ', success);
        if (success == true ) {
          this.$router.push('/login');
        }
      } catch (e) {
        console.log(e);
        this.error = 'Wrong';
      }
    },
  account(){
    if(this.auth.authenticated){
      this.user = Auth.account();
      this.store = Auth.account();
      console.log("Authenticated:", this.auth.authenticated)
      store.email=this.store.email;
      store.name=this.store.name;
      store.surname=this.store.surname;
      console.log(store.email,store.name,store.surname);
    }

  },
   logout(){
      Auth.logout();
      this.$router.push("/"); 
      console.log('odjava')
      console.log(this.user)
    },
   created() {
        this.account();
        
    },
},
components: {
  navigation
}
}
</script>