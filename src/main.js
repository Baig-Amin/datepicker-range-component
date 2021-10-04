import Vue from 'vue'
import App from './App.vue'
// Slider import 
import Slider from './components/Slider.vue'
// DateRangePicker import
import Datepicker from './components/Datepicker.vue'
// Dashboard import
import Dashboard from './components/Dashboard.vue';

// Bootstrap import
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Bootstrap CSS import
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Datepicker css import from @syncfusion
import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

Vue.component('input-dashboard', Dashboard)
// Slider registr globally
Vue.component('input-slider', Slider)
// DateRangePicker register globally
Vue.component('input-datepicker', Datepicker)

// Make BootstrapVue available
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
