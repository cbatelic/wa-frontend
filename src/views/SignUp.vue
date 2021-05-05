<template>
    <div class="signUp">
        <img class="sportvert" alt="sportvert" src="../assets/sportvert.jpg">
      <div class="box">
          <div class="form_group">
              <label style="color: #1286C7" for="name">
                Name:
              </label>
              <input
               type="text"
               id="name"
               name="name"
               placeholder="e.g. Bob"
              />
         </div>
         <div class="form_group">
              <label style="color: #1286C7" for="surname">
                Surname:
              </label>
              <input
               type="text"
               id="surname"
               name="surname"
               placeholder="e.g. Wills"
              />
         </div>
         <div class="form_group">
              <label style="color: #1286C7" for="email">
                Email:
              </label>
              <input
               type="text"
               id="email"
               name="email"
               placeholder="e.g. Bobwills@email.com"
              />
         </div>
         <div class="form_group">
              <label style="color: #1286C7" for="password">
                Password:
              </label>
              <input
               type="password"
               id="password"
               name="password"
               placeholder="Password"
              />
         </div>
         <div class="form_group">
              <label style="color: #1286C7" for="repeatPassword">
                Repeat password:
              </label>
              <input
               type="password"
               id="repeatPassword"
               name="repeatPassword"
               placeholder="Repeat password"
              />
         </div>
         <div class="form_group">
        <button type="button" class="btn_signUp">
          <b>Register</b>
        </button>
      </div>
      </div>
    </div>
</template>

<style scoped>
.signUp{
    background-size: 50% auto;
    width: 50%;
}
.sportvert{
  height: 800px;
  width: 60%;
  margin-top: 0px;
  float: left;
}
.box{
    background-color: white;
}
#name,
#surname,
#email,
#password,
#repeatPassword {
  margin-bottom: 8px;
  margin-top: 10px;

  border: 2px solid #1286C7;
  background-color: transparent;
  color: #d0d0d0;
  outline: none;
  box-shadow: none;
}
.form_group > label {
  max-width: 500px;
  text-align: center;
  font-weight: 600;
}
.btn_signUp{
    background-color: white;
    color: #1286C7;
    padding: 5px 50px;
    border: 2px solid #1286C7;
    box-shadow: 0 3px #1286C7;
}
</style>