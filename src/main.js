import Vue from 'vue'
import App from './App.vue'
// Slider import 
import Slider from './components/Slider.vue'
// Datepicker import 
import { DateRangePickerPlugin } from "@syncfusion/ej2-vue-calendars";
// Bootstrap import
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import Datepicker from './components/Datepicker.vue'

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


// Slider registr globally
Vue.component('input-slider', Slider)
// Datepicker register globally
Vue.use(DateRangePickerPlugin);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.component('input-datepicker', Datepicker)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
