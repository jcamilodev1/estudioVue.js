const app = new Vue({
  el: '#app',
  
  data () {
    return {
      curso: "",
      horas: "",
      cursos: [],
    }
  },
  
  computed: {
    totalTime() {
      let hora = 0
      this.cursos.forEach(element => {
        hora += parseInt(element.horas)
        
      });
      return hora
    }
  },
  
  methods: {
    agregarCurso(){
      this.cursos.push({
        curso: this.curso,
        horas: this.horas
    })
      console.log(this.cursos)
      this.curso =""
      this.horas = ""
    },
  }
})