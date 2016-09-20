import Vue from 'vue';
import AppComponent from './component/app.vue';

Vue.component('app-component', AppComponent);

new Vue({
  el: 'body'
});
