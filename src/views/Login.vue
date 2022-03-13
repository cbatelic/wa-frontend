<template>
<div class="w-full h-screen flex">
  <div>
    <img :src="require('@/assets/sportvert.jpg')" class="hidden lg:flex lg:object-cover lg:object-center lg:h-screen lg:w-7/10">
    <!-- <div class="absolute inset-0 bg-blue-300 mix-blend-multiply" /> -->
    </div>
    <div class=" flex flex-col justify-center items-center w-5/12 shadow-lg">
      <div class="w-11/12 md:w-10/12 px-2 md:px-10 py-3 lg:w-1/2 md:py-12 space-y-3.5 rounded-md text-center bg-white">
      <div class="text-start text-blue-600 space-y-1.5">
      <label for="email" class="pl-1 text-lg">Email:</label>
        <input type="text" name="email" placeholder="email" autocomplete="off"
            class="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
            label="Email" 
                                v-model="email" 
                                :class="{ 'is-invalid': submitted && $v.email.$error }">
                  <div v-if="submitted && $v.email.$error" class="invalid-feedback">
                                    <span v-if="!$v.email.required">Email is required</span>
                                    <span v-if="!$v.email.email">Email is invalid</span>
                                </div>
                                </div>
                                <div class="text-start text-blue-600 space-y-1.5">
      <label for="password" class="pl-1 text-lg">Password:</label>
        <input type="password" name="password" placeholder="password" autocomplete="off"
            class="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
            label="Password" 
                                v-model="password"
                                :class="{ 'is-invalid': submitted && $v.password.$error }"
                                >
                                <div v-if="submitted && $v.password.$error" class="invalid-feedback">
                                    <span v-if="!$v.password.required">Password is required</span>
                                    <span v-if="!$v.password.minLength">Password must be at least 6 characters</span>
                                </div>
                                </div>
                                <div class="text-start text-blue-600 space-y-1.5">
      <label for="confirmPassword" class="pl-1 text-lg">Confirm password:</label>
                                 <input type="password" name="confirmPassword" placeholder="confirm Password" autocomplete="off"
            class="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"

label="confirmPassword" 
                                v-model="confirmPassword"
                                :class="{ 'is-invalid': submitted && $v.confirmPassword.$error }">
                                <div v-if="submitted && $v.confirmPassword.$error" class="invalid-feedback">
                                    <span v-if="!$v.confirmPassword.required">Confirm Password is required</span>
                                    <span v-else-if="!$v.confirmPassword.sameAsPassword">Passwords must match</span>
                                </div>
                                </div>
        <button type="button" @click="submit()" class="inline-flex gap-1.5  text-base font-black bg-white text-blue-600 px-3 py-1 rounded  focus:outline-none shadow">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
</svg>
Login
</button>
      </div>
    </div>
  </div>
</template>
<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';
import {Auth} from '@/services';
import  store  from '@/store.js';

export default {
  data(){
    return {
                
                    email: "",
                    password: "",
                    confirmPassword: "",

                submitted: false
            };
  },
  
  validations: {
   
                email: { required, email },
                confirmPassword: { required, sameAsPassword: sameAs('password') },
                password: { required, minLength: minLength(6) }
            
  },
  methods: {
     async submit() {
                this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
               try {
        // prijava je prošla uspješnp
        console.log('ddd');
        let success = await Auth.login(this.email, this.password, this.name, this.surname);
        console.log('Result of login: ', success);
        
        this.store = Auth.account()
        store.email=this.store.email;
        store.name=this.store.name;
        store.surname=this.store.surname;

        // Admin
        if(store.email=='chiarab@gmail.com'){
          this.$router.replace({ path: '/homeAdmin '});
          store.admin=true;
          console.log("Da li je trenutno ulogiran admin: ", store.admin)
        }
        else{
          this.$router.replace({ path: '/naslovna' });
          store.admin=false;
          console.log("Da li je trenutno ulogiran admin: ", store.admin)
          // refresh trenutne stranice
          // this.$router.go();
        }
      } catch (e) {
        this.error = 'Wrong username or password!';
      }
    //             {
		
    // console.log("pokusaj prijave")

		// let success=false;
		
		// success = await Auth.login(this.email, this.password);
		
    //     if(success == true){
    //         // store.authenticated = true;
    //         // store.email=this.email;
            
            
    //         console.log('Rezultat prijave', success);
            
		// 		console.log(success);
    //             console.log(this.email,this.password)
				
		// 		console.log("evo me")
    //     }
    //     console.log(store.authenticated)
    //   }
    },
  }
  }
</script>


<style scoped>
#inspire{
  background-color:  #86D1FC;
}
</style>
