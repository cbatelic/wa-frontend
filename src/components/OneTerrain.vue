<template>
     <div id="box2" style="margin-left:0%">
    <div>
  <img class="img" alt="hall" src="../assets/SportskaDvoranaŽatika.jpg">
  <br>
  <br>
  <label>{{info.terrainName}}
  </label>
  <br>
  <label>{{info.terrainCity}}
  </label>
  <br>
  <br>
    </div>
    </div>
</template>
<script>

export default {
    props: ['info'],
}
</script>
