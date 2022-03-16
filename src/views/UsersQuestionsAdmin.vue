<template>
    <div>
       <navigationAdmin></navigationAdmin>
       <div class="pt-44">
       <div class="text-white  border-2 py-3 px-2 font-black text-3xl lg:mx-16 mx-4">Users</div>
       <div class="border-2 space-y-7  overflow-y-scroll py-10 lg:mx-16 h-96 mx-4">
       <div v-for="question in question" :key="question.id" class="holder overflow-hidden space-y- box-border border border-b-4 border-red-600 rounded-md mx-2 shadow-xl">
  <div class="top bg-blue-400 text-gray-700 font-semibold text-md p-2 px-4 space-y-2 grid">
    <div @click="details(question)" class="inline-flex items-center cursor-pointer">
  <div>Email: </div>{{question.email}} 
    </div>
  </div>
</div>
       </div>
       </div>
</div>
</template>

<script>
import navigationAdmin from '@/components/navigationAdmin.vue';
import { Question } from '@/services';

export default {
   data(){
     
     return {
       question: [],
     }
   },
   async created(){
    this.question = await Question.getAllQuestions();
   },

   methods: {
     details(question){
       this.$router.push({ path: `/usersQuestionsAdmin/${question.id}` })
       
     }
     
   },
  
components: {
  navigationAdmin
}
}
</script>
  