<template>
  <div>
    <div id="wrapper">
      <ejs-daterangepicker
        id="daterangepicker"
        :placeholder="waterMarkText"
        :min="minDate"
        :max="maxDate"
      ></ejs-daterangepicker>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import { DateRangePickerPlugin } from "@syncfusion/ej2-vue-calendars";
Vue.use(DateRangePickerPlugin);

export default Vue.extend({
  data: function () {
    return {
      waterMarkText: "Select a Range",
      minDate: new Date("10/01/2021"),
      maxDate: new Date("10/01/2022"),
    };
  },
});
</script>


<style>
#wrapper {
  max-width: 246px;
  margin: 30px auto;
  padding-top: 15px;
}
</style>