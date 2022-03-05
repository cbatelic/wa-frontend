<template>
    <div>
       <navigationAdmin></navigationAdmin>

       <div class="holder overflow-hidden space-y- mt-5 box-border border border-b-4 border-red-600 rounded-md mx-2 shadow-xl">
  <div class="top bg-blue-400 text-gray-700 font-semibold text-md p-2 px-4 space-y-2 grid">
    <div class="inline-flex items-center">
    <div>Name:</div>{{question.name}} {{question.surname}}
    </div>
    <div class="inline-flex items-center">
  <div>Email:</div>{{question.email}}
    </div>
  </div>
  <div class="center divide-y md:divide-y-0 md:flex box-border bg-gray-600 md:divide-x md:divide-white">
    <div class="text-white px-6 py-2 md:py-0 flex items-center font-bold pr-8">Message:</div>
    <div class="content text-white px-6 md:px-0 font-bold py-3.5 md:pl-8 text-justify w-full">
      {{question.message}}
    </div>    
  </div>
</div>

<!-- warning -->

    </div>
     
</template>

<script>
import navigationAdmin from '@/components/navigationAdmin.vue';
import { Question } from '@/services';

export default {
   data(){
     return {
       question: null
     }
   },

   async mounted() {
    this.question = await Question.getOneQuestion(this.id);
  },

  
components: {
  navigationAdmin
}
}
</script>