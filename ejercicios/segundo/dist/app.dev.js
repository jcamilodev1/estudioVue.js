"use strict";

Vue.component('counter', {
  data: function data() {
    return {
      counter: 0
    };
  },
  template: "<div>\n  <button v-on:click=\"increment\">Click Me</button>\n  <span>{{counter}}</span>\n  </div>",
  methods: {
    increment: function increment() {
      this.counter += 1;
    }
  }
});
var app = new Vue({
  el: "#app",
  data: function data() {
    return {
      title: 'hola'
    };
  }
});