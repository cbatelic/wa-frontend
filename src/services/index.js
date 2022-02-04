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
    (response) => {
        console.log('Interceptor', response);
        return response;
    },
    (error) => {
        if(error.response.status == 401){
            Auth.logout();
            $router.go();
        }
        //console.error('Interceptor', error.response)
    }
);

let Posts ={
    add_terrain(terrain) {
        return Service.post('/terrain', terrain);
    },

    async getAll() {        
        let response = await Service.get(`/terrain`)
        let data = response.data
        data = data.map(doc =>{
            return {
                id:doc._id,
                terrainName: doc.terrainName,
                terrainCity: doc.terrainCity,
                terrainCategories: doc.terrainCategories,
                posted_at: Number (doc.posted_at)
            
            };
        });
        return data
    },
    async getOne(id){
        let response = await Service.get(`/terrain/${id}`);
        let doc = response.data;
        return {
            id:doc._id,
            terrainName: doc.terrainName,
            terrainCity: doc.terrainCity,
            terrainCategories: doc.terrainCategories,
            posted_at: Number(doc.posted_at),

            
        };
    }, 
}

let Auth = {
    
    async login(email, password){
        let response = await Service.post("/auth",{
           email: email,
           password: password,
        });
        let user = response.data
        localStorage.setItem("user", JSON.stringify(user)); 

        return true;
    },
    signUp(user) {
        return Service.post('/user', user);
    },
    logout(){
      localStorage.removeItem("user");
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

export { Service, Auth, Posts }