<template>
    <div>
       <navigationAdmin></navigationAdmin>
       <button type="button" @click="details(question)">
       <div v-for="(question) in question" :key="question.id" class="holder overflow-hidden space-y- mt-5 box-border border border-b-4 border-red-600 rounded-md mx-2 shadow-xl">
  <div class="top bg-blue-400 text-gray-700 font-semibold text-md p-2 px-4 space-y-2 grid">
    <div class="inline-flex items-center">
    <div>Name:</div>{{question.name}} {{question.surname}}
    </div>
    <div class="inline-flex items-center">
  <div>Email:</div>{{question.email}}  {{question.id}}
    </div>
  </div>
</div>
  </button>
</div>
<!-- warning -->
     
</template>

<script>
import navigationAdmin from '@/components/navigationAdmin.vue';
import Questions from '@/components/Questions';
import { Question } from '@/services';

export default {
 props: ['info'],
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
       this.$router.push({ path: `/questionsAdminDetail/${question.id}` })
       
     }
     
   },
  
components: {
  navigationAdmin,
  Questions
}
}
</script>
  