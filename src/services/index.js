import axios from 'axios';
import $router from '@/router';


let Service = axios.create({     
    baseURL: 'http://localhost:3000/',  
    timeout: 1000,
});

Service.interceptors.request.use((request) => {
   try{
       request.headers['Authorization'] = 'Bearer ' + Auth.getToken();
   }
   catch(e){
       console.error(e);
   }
   return request;
});

Service.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status == 403) {
        $router.replace("/error");
        return Promise.reject("This route is forbidden!", error);
      }
      if (error.response.status == 401) {
        Auth.logout();
        $router.go();
      }
    }
  );
let Booking = {
    add_booking(add_booking){
        return Service.post('/homeAdmin', add_booking)
    },
    async getAllBooking() {        
        let response = await Service.get(`/homeAdmin`)
        return response
    },

}
let Posts ={
    add_terrain(admTerrain) {
        return Service.post('/terrain', admTerrain);
    },

    async getAll() {        
        let response = await Service.get(`/terrain`)
        return response.data
        data = data.map(doc =>{
            return {
                id:doc._id,
                terrainName: doc.terrainName,
                terrainCity: doc.terrainCity,
                terrainCategories: doc.terrainCategories,
                date: doc.date,
                time: doc.time,
                posted_at: Number (doc.posted_at)
            
            };
        });
        return data
    },
    // async getOne(id){
    //     let response = await Service.get(`/terrain/${id}`);
    //     let doc = response.data;
    //     return {
    //         id:doc._id,
    //         terrainName: doc.terrainName,
    //         terrainCity: doc.terrainCity,
    //         terrainCategories: doc.terrainCategories,
    //         posted_at: Number(doc.posted_at),

            
    //     };
    // }, 
}

let Question = {
    send_question(send_question) {
        return Service.post('/usersQuestionsAdmin', send_question);
    },

    async getAllQuestions() {        
        let response = await Service.get(`/usersQuestionsAdmin`)
        let data = response.data;
        data = data.map(doc =>{
            return {
                id:doc._id,
                name: doc.name,
                surname: doc.surname,
                email: doc.email,
                message: doc.message,
                posted_at: Number (doc.posted_at)
            
            };
        });
        return data
    },

    async getOneQuestion(id) {
        let response = await Service.get(`/usersQuestionsAdmin/${id}`);
        let doc = response.data;
        return {
          id: doc._id,
          name: doc.name,
          surname: doc.surname,
          email: doc.email,
          message: doc.message,
          posted_at: Number (doc.posted_at)
        };
      },

}
let Admin = {
    async getAll(admin) {
      let response = await Service.get(`/admin?${admin}`);
      let data = response.data;
      data = data.map((doc) => {
        return {
          email: doc.email,
          role: doc.role,
        };
      });
      return data;
    },
  
    async getOne(admin) {
      let response = await Service.get(`/admin/${admin}`);
      let doc = response.data;
      return {
        role: doc.role,
      };
    },
  };

let Auth = {
    
    async login(email, password, name, surname){
        let response = await Service.post("/auth",{
           email: email,
           password: password,
           name: name,
           surname: surname
        });
        let user = response.data
        localStorage.setItem("user", JSON.stringify(user)); 
        console.log(user.surname)
        return true;
    },
    signUp(user) {
        return Service.post('/user', user);
    },
    logout(){
      localStorage.removeItem("user");
    },
    async change_Password(old_password, new_password) {
        let response = await Service.patch('/user', {
          old_password: old_password,
          new_password: new_password
        });
    
        let user = response.data;
    
        localStorage.setItem('user', JSON.stringify(user));
    
        return true;
      },
    getUser(){
      return JSON.parse(localStorage.getItem("user"))  
    },
    account(){
        let user = Auth.getUser()
        if(user){
            return user
        }
    },
    getToken(){
        let user = Auth.getUser();
        if(user && user.token){
            return user.token
        }
        else{
            return false;
        }
    },
    authenticated(){
        let user = Auth.getUser()
        if(user && user.token){
           return true 
        }
        else{
            return false
        }
    },
    state: {
        get authenticated (){
           return Auth.authenticated(); 
        },
    }
};

export { Service, Auth, Posts, Admin, Booking, Question}