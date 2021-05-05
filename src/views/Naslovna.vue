<template>
  <div class="naslovna">
    <img class="logo" alt="logo" src="../assets/logo.png">
    <div class="elements1">
     <router-link to="/signUp">
     <button class="signIn">
          <b>Sign Up for account</b>
     </button>
     </router-link>
     </div>
     <div class="elements2">
     <label style="color: white">Already a member?</label>
     &nbsp;
     <router-link to="/login">
     <label style="color: #1286C7"><b>Log in</b></label>
     </router-link>
     </div>
  </div>
</template>

<style scoped>
.logo{
  height: 370px;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}
.elements1{
    margin-top: 50px;

}

.elements2{
    margin-top: 30px;
}
.signIn{
    background-color: white;
    color: #1286C7;
    padding: 5px 50px;
    border: none;
    box-shadow: 0 3px #1286C7;
}
</style>