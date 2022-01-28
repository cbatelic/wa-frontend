<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-col style="height:100%;" cols="2">
      <v-img style="height:100%;
                    width: 100%;" :src="require('@/assets/sportvert.jpg')"> </v-img>
    </v-col>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12" style="border: 2px solid #1286C7;">
              <v-card-text>
                <v-form>
                  <div>
                  <v-text-field prepend-icon="person" 
                                name="email" 
                                label="Email" 
                                type="text"
                                v-model="email" 
                                :class="{ 'is-invalid': submitted && $v.email.$error }"></v-text-field>
                  <div v-if="submitted && $v.email.$error" class="invalid-feedback">
                                    <span v-if="!$v.email.required">Email is required</span>
                                    <span v-if="!$v.email.email">Email is invalid</span>
                                </div>
                  </div>
                  <div>
                  <v-text-field id="password" 
                                prepend-icon="lock" 
                                name="password" 
                                label="Password" 
                                type="password"
                                v-model="password"
                                :class="{ 'is-invalid': submitted && $v.password.$error }"
                                ></v-text-field>
                                <div v-if="submitted && $v.password.$error" class="invalid-feedback">
                                    <span v-if="!$v.password.required">Password is required</span>
                                    <span v-if="!$v.password.minLength">Password must be at least 6 characters</span>
                                </div>
                  </div>
                  <div>
                  <v-text-field id="confirmPassword" 
                                prepend-icon="lock" 
                                name="confirmPassword" 
                                label="Confirm password" 
                                type="password"
                                v-model="confirmPassword"
                                :class="{ 'is-invalid': submitted && $v.confirmPassword.$error }"></v-text-field>
                                <div v-if="submitted && $v.confirmPassword.$error" class="invalid-feedback">
                                    <span v-if="!$v.confirmPassword.required">Confirm Password is required</span>
                                    <span v-else-if="!$v.confirmPassword.sameAsPassword">Passwords must match</span>
                                </div>
                  </div>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <button @click="submit()" style="background-color: white;
                              text-align: center;
                              color: #1286C7;
                              padding: 5px 50px;
                              border: 2px solid #1286C7;
                              box-shadow: 0 3px #1286C7;">
                              <v-icon
          dark
          left
        >
          mdi-pencil-ruler
        </v-icon>
                              Login</button>
                              <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
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
        let success = await Auth.login(this.email, this.password);
        console.log('Result of login: ', success);
          this.$router.replace({ path: '/naslovna' });
          // refresh trenutne stranice
          // this.$router.go();
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