<template>
      <div id="info" class="holder overflow-hidden space-y- mt-5 box-border border border-b-4 border-red-600 rounded-md mx-2 shadow-xl">
      <div class="top bg-blue-400 text-gray-700 font-semibold text-md p-2 px-4 space-y-2 grid">
      <div class="inline-flex items-center">
    <div>Name:</div>{{info.name}} {{info.surname}}
    </div>
    <div class="inline-flex items-center">
  <div>Email:</div>{{info.email}} 
    </div>
<div class="inline-flex items-center">
  <div>Message:</div>{{info.message}}
    </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ["info"],
  name: "Questions",

  methods: {
  }
};
</script>