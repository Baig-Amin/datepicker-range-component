import Vue from 'vue'
import App from './App.vue'
// Slider import 
import Slider from './components/Slider.vue'
// Datepicker import 
import { DateRangePickerPlugin } from "@syncfusion/ej2-vue-calendars";
// Bootstrap import
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Bootstrap CSS 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Slider registr globally
Vue.component('input-slider', Slider)
// Datepicker register globally
Vue.use(DateRangePickerPlugin);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
