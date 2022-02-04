     <template>
    <div class="hidden">
     <navigation></navigation>
      <div id="box" style="margin-left:21%">
       <form id="search" class="navbar-form form-inline ml-auto">
      <input
        icon="fa fa-search"
        v-model="search"
        class="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </form>
    </div>
    <div id="box1" style="margin-left:25%">
      <div id="box2" style="margin-left:0%">

<div  :key="terrain.id" v-for="terrain in terrain">
            <OneTerrain :info="terrain" />
          </div>  
      </div>
    </div>
    </div>
</template>
<script>
import navigation from '@/components/navigation.vue'
import OneTerrain from '@/components/OneTerrain'
import { Posts } from '@/services';
  
  export default {
    data() {
      return{
        search: '',
        terrain: [],
      }
      
    },
     created() {
        this.GetAllTerrain();
        
    },
     methods: {
        async GetAllTerrain() {
            this.terrain = await Posts.getAll();
            console.log(this.terrain)
        },
  },

  components: {
        navigation,
        OneTerrain
    }
  }
  </script>
  
  <style scoped>
  .search{
    max-width: 1000px;
  }
  #box{
  max-width: 1000px; 
  text-align: left;
  width: fixed;
  height: 70px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 16px;
  margin-left: 50px;
  display: block;
  margin-top: 50px;
  background-color: #86d1fc;
  color: black;
  }
  #box1{
  max-width: 900px; 
  text-align: left;
  color: white;
  width: fixed;
  height: 570px;
  /* padding: 15px; */
  box-sizing: border-box;
  border-radius: 0px;
  background: white;
  font-size: 16px;
  margin-left: 2px;
  /* display: block; */
  margin-top: 30px;
  overflow: scroll;
}
#box2 {
  max-width: 800px; 
  text-align: left;
  width: fixed;
  height: 250px;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 0px;
  font-size: 16px;
  margin-left: 50px;
  display: block;
  margin-top: 30px;
  background-color: white;
  color: #1286C7;
  border: none;
  box-shadow: 0 3px #1286C7;
}
.img{
  max-width: 800px;
  height: 160px;
  margin-top: 0px;
  width: 50%;
}
  </style>