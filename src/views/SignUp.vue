<template>
<div class="w-full h-screen flex">
    <img :src="require('@/assets/sportvert.jpg')" class="hidden lg:flex lg:object-cover lg:object-center lg:h-screen lg:w-7/10">
    <div class=" flex flex-col justify-center items-center w-5/12 shadow-lg">
      <div class="w-11/12 md:w-10/12 px-2 md:px-10 py-3 xl:w-1/2 md:py-12 space-y-3.5 rounded-md text-center bg-white">
      <div class="text-start text-blue-600 space-y-1.5">
      <label for="name" class="pl-1 text-lg">Name:</label>
      <input type="text" name="name" placeholder="name" autocomplete="off"
            class="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
            label="name" 
                                v-model="name" 
                                :class="{ 'is-invalid': submitted && $v.name.$error }">
                                <div
          v-if="submitted && !$v.name.required"
          class="invalid-feedback"
        >
          Name is required.
        </div>
      </div>
      <div class="text-start text-blue-600 space-y-1.5">
      <label for="surname" class="pl-1 text-lg">Surname:</label>
          <input type="text" name="surname" placeholder="surname" autocomplete="off"
            class="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
            label="surname" 
                                v-model="surname" 
                                :class="{ 'is-invalid': submitted && $v.surname.$error }">
                                <div
          v-if="submitted && !$v.surname.required"
          class="invalid-feedback"
        >
          Surname is required.
        </div>
      </div>
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
                              
        <button type="button" @click="submit(name,surname,email,password)" class="inline-flex gap-1.5  text-base font-black bg-white text-blue-600 px-3 py-1 rounded  focus:outline-none shadow">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
</svg>
Registration
</button>
<div class="space-x-2 text-md">
  <label>Already have an account?</label>
<router-link to="/login" class="text-blue-600">Login</router-link>
</div>
      </div>
    </div>
  </div>
</template>
<script>
import store from '@/store.js';
import {Auth} from '@/services';
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
  data(){
    return {
              
                    name: "",
                    surname: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    store,
                submitted: false
            };
  },
  
  validations: {
        
                name: { required },
                surname: { required },
                email: { required, email },
                confirmPassword: { required, sameAsPassword: sameAs('password') },
                password: { required, minLength: minLength(6) }
          
  },
  methods: {
  async submit(name,surname,email,password) {
        this.submitted = true;

                // stani ako nije dobro
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
                
        let user = {
          name: this.name,
          surname: this.surname,
          email: this.email,
          password: this.password
        }

        console.log(user)
        await Auth.signUp(user).then(() => {
            this.$router.replace({ path: '/naslovna' });
            store.authenticated=true;
            this.store = Auth.account()
            store.email=this.email;
            store.name=this.name;
            store.surname=this.surname;
        });
        }
      },
  }

</script>
