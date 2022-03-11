<template>
    <div>
       <navigationAdmin></navigationAdmin>
       <questions :info="question"></questions>

<!-- warning -->

    </div>
     
</template>

<script>
import navigationAdmin from '@/components/navigationAdmin.vue';
import Questions from '@/components/Questions.vue';
import { Question } from '@/services';

export default {
  props: ['id'],
   data(){
     return {
         question: []
              }
   },

   async mounted() {
    this.question = await Question.getOneQuestion(this.id);
    console.log(this.id)
    console.log(this.question)
  },

  
components: {
  navigationAdmin,
  Questions
}
}
</script>