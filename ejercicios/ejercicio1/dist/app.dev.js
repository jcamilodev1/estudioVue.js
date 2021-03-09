"use strict";

var app = new Vue({
  el: '#app',
  data: function data() {
    return {
      curso: "",
      horas: "",
      cursos: []
    };
  },
  computed: {
    totalTime: function totalTime() {
      var hora = 0;
      this.cursos.forEach(function (element) {
        hora += parseInt(element.horas);
      });
      return hora;
    }
  },
  methods: {
    agregarCurso: function agregarCurso() {
      this.cursos.push({
        curso: this.curso,
        horas: this.horas
      });
      console.log(this.cursos);
      this.curso = "";
      this.horas = "";
    }
  }
});