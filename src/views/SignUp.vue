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
                  <v-text-field prepend-icon="person" name="name" label="Name" type="text"></v-text-field>
                  <v-text-field prepend-icon="person" name="surname" label="Surname" type="text"></v-text-field>
                  <v-text-field prepend-icon="person" name="email" label="Email" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                  <v-text-field id="confirmPassword" prepend-icon="lock" name="confirmPassword" label="Confirm password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn to ="/naslovna" style="background-color: white;
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
<style scoped>
#inspire{
  background-color: #86D1FC;
}
</style>