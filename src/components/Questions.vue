<template>
<div class="pt-36">
      <div id="info" class="holder overflow-hidden space-y- box-border border border-b-4 border-red-600 rounded-md mx-2 shadow-xl">
      <div class="text-white  py-3 px-2 font-black text-3xl ">User question</div>
      <div class="top bg-blue-400 text-gray-700 font-semibold text-md p-2 px-4 space-y-16 py-4 grid ">
      <div class=" items-center border-b">
    <div class="pb-2 text-white">Name:</div>{{info.name}} {{info.surname}}
    </div>
    <div class=" items-center border-b">
  <div class="pb-2 text-white">Email:</div>{{info.email}} 
    </div>
<div class="items-center border-b">
  <div class="pb-2 text-white">Message:</div>{{info.message}}
    </div>
    <div class="items-center border-b">
  <div class="pb-2 text-white">Send time:</div>{{postedFromNow}}
    </div>
      </div>
    </div>
</div>
</template>

<script>
import moment from 'moment';
export default {
  props: ["info"],
  name: "Questions",
  data(){
    return{
     question:[],
    }
  },
  computed: {
      postedFromNow() {
         return moment(this.info.posted_at).format('LLLL');
      }
  },

  methods: {
  }
};
</script>