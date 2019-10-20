import Vue from 'vue'

Vue.config.devtools = true

Nova.booting((Vue, router) => {
    Vue.component('index-checklist', require('./components/IndexField'));
    Vue.component('detail-checklist', require('./components/DetailField'));
    Vue.component('form-checklist', require('./components/FormField'));
})
