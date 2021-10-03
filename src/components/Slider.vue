<template>
  <div>
    <div class="container">
      <input type="range" class="form-range" v-model="value" min="0" max="10" />
      <div class="mt-2">Value: {{ value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "0",
    };
  },
};
</script>

<style>
.form-range {
  max-width: 300px;
}
</style>
