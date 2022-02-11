<template>
<div class="w-full h-screen flex">
    <img :src="require('@/assets/sportvert.jpg')" class="object-cover object-center h-screen w-7/10">
    <div class="bg-white flex flex-col justify-center items-center w-5/12 shadow-lg">
      <h1 class="text-3xl font-bold text-orange-500 mb-2">REGISTRATION</h1>
      <div class="w-1/2 text-center">
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
        <button type="button" @click="submit(name,surname,email,password,confirmPassword)" class="bg-orange-500 hover:bg-orange-600 text-black px-3 py-1 rounded text-lg focus:outline-none shadow">Sign Up</button>
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
                password: { required, minLength: minLength(6) },
                confirmPassword: { required, sameAsPassword: sameAs('password') }
          
  },
  methods: {
  //    async submit() {
    
  //       let success = await Auth.login(this.email, this.password);
  //       console.log('Rezultat prijave', success);
  //       if(success == true){
  //         this.$router.push({path: '/naslovna'})
  //        if (
  //       this.password !== this.confirmPassword ||
  //       this.confirmPassword !== this.password
  //     ) {
  //       alert("Lozinke se ne podudaraju!");
  //       console.log(error);
  //     }
  //     else { let user = {
  //         name: this.name,
  //         surname: this.surname,
  //         email: this.email,
  //         password: this.password,
  //         confirmPassword: this.confirmPassword,
  //     };
  //      let newuser = await Auth.registracija(user);
  //       console.log('Registriran je korisnik', newuser.data);
  //       }
  //       }

  // },
  async submit(name,surname,email,password,confirmPassword) {
        this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
                
        let user = {
          name: this.name,
          surname: this.surname,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        }

        console.log(user)
        await Auth.signUp(user).then(() => {
            this.$router.push({ path: '/naslovna' });
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

<style scoped>
#inspire{
  background-color: #86D1FC;
}
</style>