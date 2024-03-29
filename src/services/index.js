import axios from 'axios';
import $router from '@/router';


let Service = axios.create({     
    baseURL: 'https://infinite-bastion-37476.herokuapp.com/',  
    timeout: 3000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
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
    (response) => {
        
        return response;
    },
    (error) => {
        if(error.response.status == 401){
            Auth.logout();
            $router.go();
        }
    }
);

let Booking = {
    add_booking(add_booking){
        return Service.post('/homeAdmin', add_booking)
    },
    update_team(team) {
        return Service.put('/homeAdmin', team)
    },
    async getAllBooking() {        
        let response = await Service.get(`/homeAdmin`)
        return response.data
        let data = response.data;
        data = data.map(doc =>{
            return {
                id:doc._id,
                terrainId: doc._id,
                teamName: doc.teamName,
                userEmail: doc.userEmail,
                members: doc.members,
                note: doc.note,
                posted_at: Number (doc.posted_at)
            
            };
        });
        return data
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

export { Service, Auth, Posts,  Booking, Question}