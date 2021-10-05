<template>
  <div id="app">
    <!-- Datepicker -->
    <input-datepicker></input-datepicker>
    <!-- Price Range Slider -->
    <input-slider></input-slider>
    <input-dashboard
      mainInfo="Used Space"
      mainTitle="49/50 GB"
      mainFooter="Get More Space..."
    ></input-dashboard>
    <input-dashboard
      mainInfo="Revenue"
      mainTitle="$34,245"
      mainFooter="Last 24 Hours"
    ></input-dashboard>
    <input-dashboard
      mainInfo="Fixed Issues"
      mainTitle="75"
      mainFooter="Tracked from Github"
    ></input-dashboard>
  </div>
</template>


<script>
export default {};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
