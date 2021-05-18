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
                                name="name" 
                                label="Name" 
                                type="text"
                                v-model="user.name"
                                :class="{ 'is-invalid': submitted && $v.user.name.$error }"></v-text-field>
                                <div
          v-if="submitted && !$v.user.name.required"
          class="invalid-feedback"
        >
          Name is required.
        </div>
                  </div>
                  <div>
                  <v-text-field prepend-icon="person" 
                                name="surname" 
                                label="Surname" 
                                type="text"
                                v-model="user.surname"
                                :class="{ 'is-invalid': submitted && $v.user.surname.$error }"></v-text-field>
                                <div
          v-if="submitted && !$v.user.surname.required"
          class="invalid-feedback"
        >
          Surname is required.
        </div>
                  </div>
                  <div>
                  <v-text-field prepend-icon="person" 
                                name="email" 
                                label="Email" 
                                type="text"
                                v-model="user.email" 
                                :class="{ 'is-invalid': submitted && $v.user.email.$error }"></v-text-field>
                  <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.email.required">Email is required</span>
                                    <span v-if="!$v.user.email.email">Email is invalid</span>
                                </div>
                  </div>
                  <div>
                  <v-text-field id="password" 
                                prepend-icon="lock" 
                                name="password" 
                                label="Password" 
                                type="password"
                                v-model="user.password"
                                :class="{ 'is-invalid': submitted && $v.user.password.$error }"
                                ></v-text-field>
                                <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.password.required">Password is required</span>
                                    <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                                </div>
                  </div>
                  <div>
                  <v-text-field id="confirmPassword" 
                                prepend-icon="lock" 
                                name="confirmPassword" 
                                label="Confirm password" 
                                type="password"
                                v-model="user.confirmPassword"
                                :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }"></v-text-field>
                                <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
                                    <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
                                </div>
                  </div>
                  </div>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn to ="/naslovna" @click="submit()" style="background-color: white;
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
                              Register</v-btn>
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
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
  data(){
    return {
                user: {
                    name: "",
                    surname: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                },
                submitted: false
            };
  },
  
  validations: {
   user: {      
                name: { required },
                surname: { required },
                email: { required, email },
                password: { required, minLength: minLength(6) },
                confirmPassword: { required, sameAsPassword: sameAs('password') }
            }
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
#inspire{
  background-color: #86D1FC;
}
</style>