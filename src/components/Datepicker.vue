<template>
  <div>
    <!-- <div class="wrapper">
      <ejs-daterangepicker
        :startDate="startVal"
        :endDate="endVal"
        :placeholder="waterMark"
      ></ejs-daterangepicker>
    </div> -->

    <div class="wrapper">
      <input
        type="Date"
        class="form-control"
        v-model="startVal"
        :endDate="endVal"
        placeholder="dd/mm/yyyy"
      />
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      startVal: new Date(),
      endVal: new Date(),
    };
  },
};
</script>



<style>
.wrapper {
  max-width: 300px;
  margin: 0 auto;
}
</style>