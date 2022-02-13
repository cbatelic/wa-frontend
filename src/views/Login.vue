<template>
<div class="w-full h-screen flex">
  <div>
    <img :src="require('@/assets/sportvert.jpg')" class="object-cover object-center h-screen w-7/10">
    <!-- <div class="absolute inset-0 bg-blue-300 mix-blend-multiply" /> -->
    </div>
    <div class="bg-white flex flex-col justify-center items-center w-5/12 shadow-lg">
      <h1 class="text-3xl font-bold text-orange-500 mb-2">LOGIN</h1>
      <div class="w-1/2 text-center bg-white">
        <input type="text" name="email" placeholder="email" autocomplete="off"
            class="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
            label="Email" 
                                v-model="email" 
                                :class="{ 'is-invalid': submitted && $v.email.$error }">
                  <div v-if="submitted && $v.email.$error" class="invalid-feedback">
                                    <span v-if="!$v.email.required">Email is required</span>
                                    <span v-if="!$v.email.email">Email is invalid</span>
                                </div>
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
       <input type="password" name="confirmPassword" placeholder="confirm Password" autocomplete="off"
            class="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
            
label="confirmPassword" 
                                v-model="confirmPassword"
                                :class="{ 'is-invalid': submitted && $v.confirmPassword.$error }">
                                <div v-if="submitted && $v.confirmPassword.$error" class="invalid-feedback">
                                    <span v-if="!$v.confirmPassword.required">Confirm Password is required</span>
                                    <span v-else-if="!$v.confirmPassword.sameAsPassword">Passwords must match</span>
                                </div>
        <button type="button" @click="submit()" class="bg-orange-500 hover:bg-orange-600 text-black px-3 py-1 rounded text-lg focus:outline-none shadow">Sign In</button>
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
                password: { required, minLength: minLength(6) },
                confirmPassword: { required, sameAsPassword: sameAs('password') }
            
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

        // Dva admina
        if(store.email=='chiarab@gmail.com' || store.email=='klaudiab@gmail.com'){
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
